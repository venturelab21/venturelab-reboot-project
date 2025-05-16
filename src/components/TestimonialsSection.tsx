
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Testimonial {
  id: number;
  quote: string;
  name: string;
  title: string;
  company: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "VentureLab's mentorship and funding support helped us transform our idea into a viable business. Their guidance was instrumental in our Series A fundraising success.",
    name: "Anjali Sharma",
    title: "Founder & CEO",
    company: "HealthTech Solutions",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
  },
  {
    id: 2,
    quote: "The workspace and community at VentureLab provided the perfect environment for our team to innovate and grow. The connections we made here have been invaluable.",
    name: "Rahul Patel",
    title: "Co-founder",
    company: "GreenTech Innovations",
    image: "https://images.unsplash.com/photo-1500048993953-d23a436266cf?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
  },
  {
    id: 3,
    quote: "From MVP to market leader - VentureLab's acceleration program gave us the strategic insights and industry connections we needed to scale rapidly across India.",
    name: "Priya Desai",
    title: "Founder",
    company: "EduTech Pioneers",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
  }
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };
  
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Success Stories</h2>
          <p className="text-gray-600">
            Hear from the founders who have transformed their startups with VentureLab.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12 shadow-soft relative">
            <div className="absolute top-0 right-0 w-24 h-24 bg-blue-100 rounded-full opacity-50 -translate-y-1/2 translate-x-1/4"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-indigo-100 rounded-full opacity-50 translate-y-1/3 -translate-x-1/4"></div>
            
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row items-center mb-8">
                <div className="mb-4 md:mb-0 md:mr-6 flex-shrink-0">
                  <img 
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-20 h-20 object-cover rounded-full border-4 border-white shadow-sm"
                  />
                </div>
                <div className="text-center md:text-left">
                  <h4 className="text-xl font-semibold">{testimonials[currentIndex].name}</h4>
                  <p className="text-gray-600">{testimonials[currentIndex].title}, {testimonials[currentIndex].company}</p>
                </div>
              </div>
              
              <blockquote className="text-gray-700 text-lg md:text-xl italic mb-6 text-center md:text-left">
                "{testimonials[currentIndex].quote}"
              </blockquote>
              
              <div className="flex justify-center md:justify-start space-x-2">
                <Button 
                  variant="outline" 
                  size="icon" 
                  onClick={prevTestimonial} 
                  className="rounded-full"
                >
                  <ChevronLeft size={18} />
                </Button>
                <Button 
                  variant="outline" 
                  size="icon" 
                  onClick={nextTestimonial}
                  className="rounded-full"
                >
                  <ChevronRight size={18} />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
