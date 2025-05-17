
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Card } from "@/components/ui/card";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, we would submit the form data to a backend service
    console.log("Form submitted:", formData);
    // Reset form after submission
    setFormData({ name: "", email: "", subject: "", message: "" });
    alert("Message sent successfully! We'll get back to you soon.");
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-2">
          <div className="w-20 h-1 bg-teal-500"></div>
        </div>
        
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded-full mb-4 text-sm">
            CONTACT US
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-gray-800">Get In Touch</h2>
          <p className="text-gray-600">
            Have questions or want to learn more about our programs? Reach out to us.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Send Us a Message</h3>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="How can we help you?"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="Type your message here..."
                  ></textarea>
                </div>
                
                <div>
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-blue-700 to-blue-600 hover:from-blue-800 hover:to-blue-700 text-white rounded-md"
                  >
                    Send Message
                  </Button>
                </div>
              </div>
            </form>
          </div>
          
          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Visit Our Office</h3>
            <div className="mb-8">
              <p className="mb-2">VentureLab Thapar</p>
              <p className="mb-2">Thapar Institute of Engineering & Technology</p>
              <p className="mb-2">Patiala, Punjab, 147004</p>
              <p className="mb-2">India</p>
            </div>
            
            <div className="mb-8">
              <p className="font-medium">Email:</p>
              <a href="mailto:info@venturelab.org.in" className="text-blue-600 hover:underline">info@venturelab.org.in</a>
              
              <p className="font-medium mt-4">Phone:</p>
              <a href="tel:+911234567890" className="text-blue-600 hover:underline">+91 123 456 7890</a>
            </div>
            
            <div className="mb-8">
              <h4 className="font-medium mb-2">Office Hours</h4>
              <div className="grid grid-cols-2 text-sm">
                <div className="font-normal">Monday - Friday:</div>
                <div>9:00 AM - 5:00 PM</div>
                
                <div className="font-normal">Saturday:</div>
                <div>10:00 AM - 2:00 PM</div>
                
                <div className="font-normal">Sunday:</div>
                <div>Closed</div>
              </div>
            </div>
            
            <Card className="bg-gray-200 h-48 flex items-center justify-center">
              <p className="text-gray-600">Google Map will be embedded here</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
