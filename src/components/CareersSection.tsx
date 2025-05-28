
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Briefcase } from "lucide-react";

const CareersSection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-slate-50 to-blue-50">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        <div className="flex justify-center mb-2">
          <div className="w-20 h-1 bg-teal-500"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded-full mb-4 text-sm">
            CAREERS
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-gray-800">
            Join Our Team!
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Embark on a rewarding journey with us - Join Our Team and be part of innovation, collaboration, and success! 
            Explore exciting career opportunities with our current openings and be part of a dynamic team.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 rounded-full font-medium px-8 py-4"
            >
              <Briefcase className="mr-2" size={18} />
              View Open Positions
              <ArrowRight className="ml-2" size={18} />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-teal-600 text-teal-600 hover:bg-teal-50 rounded-full px-8 py-4"
            >
              <Users className="mr-2" size={18} />
              Contact HR Team
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mt-12">
          <div className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="font-semibold text-lg mb-2 text-gray-800">Collaborative Team</h3>
            <p className="text-gray-600 text-sm">
              Join a dynamic team fostering collaboration and collective success.
            </p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Briefcase className="w-6 h-6 text-teal-600" />
            </div>
            <h3 className="font-semibold text-lg mb-2 text-gray-800">Career Growth</h3>
            <p className="text-gray-600 text-sm">
              Advance your career with training and personalized development programs.
            </p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <ArrowRight className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="font-semibold text-lg mb-2 text-gray-800">Innovation Culture</h3>
            <p className="text-gray-600 text-sm">
              Thrive in a creative hub with a culture that rewards innovation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareersSection;
