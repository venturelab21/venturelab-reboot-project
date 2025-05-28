
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Briefcase, Users, TrendingUp, Coffee, Target } from "lucide-react";

const Careers = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-purple-100 to-blue-100 py-20">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
              Join Our Team!
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
              Embark on a rewarding journey with us. Join Our Team and be part of innovation, collaboration, and success!
            </p>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">
              Explore Jobs
            </Button>
          </div>
        </section>

        {/* Life at VentureLab Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">
                  Life At <span className="text-blue-600">VentureLab</span>
                </h2>
                <p className="text-gray-600 mb-6">
                  Exciting every moment! The team at VentureLab Thapar is bombarded with new challenges very often, both operational and strategic. So it lacks the need from fellow students or breakthrough minds like yourself to take VentureLab Thapar to new uncharted heights and enhance the fabric of both consulting market research and evaluating start-ups. Starting up with ecosystems partners, both team at VentureLab Thapar is always on a high.
                </p>
                <p className="text-gray-600">
                  VentureLab Thapar is located inside the Thapar Campus at Patiala, having a large campus with all the amenities within and nearby.
                </p>
              </div>
              <div className="flex justify-center">
                <div className="bg-purple-200 rounded-3xl p-8 max-w-md">
                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <div className="flex items-center justify-center h-48 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=300&fit=crop&crop=center" 
                        alt="Team collaboration at VentureLab" 
                        className="w-full h-full object-cover rounded-xl"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Work With Us Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
                Why Work With Us?
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Join us for a collaborative and innovative work environment where your skills are valued.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Innovative Culture</h3>
                <p className="text-gray-600">
                  Foward looking work culture that nurtures and rewards innovation.
                </p>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Personal Development</h3>
                <p className="text-gray-600">
                  Continuous learning opportunities and personalized programs.
                </p>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Collaborative Team</h3>
                <p className="text-gray-600">
                  Join efficient, supportive work with effective collaboration and collective success.
                </p>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Cutting-edge Technology</h3>
                <p className="text-gray-600">
                  Work with the latest tech, staying at the forefront of innovation.
                </p>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Coffee className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Employee Well-Being</h3>
                <p className="text-gray-600">
                  Prioritize well-being with flexible hours and wellness programs.
                </p>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Briefcase className="h-8 w-8 text-teal-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Impactful Work</h3>
                <p className="text-gray-600">
                  Make a difference through projects that positively impact startups and society.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Current Openings Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
                Current Openings
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto mb-8">
                Explore exciting career opportunities with our current openings and be part of a dynamic team.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button className="bg-blue-600 hover:bg-blue-700">
                  VentureLab Thapar Jobs
                </Button>
                <Button variant="outline">
                  Startup Jobs
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="p-6 border-l-4 border-l-blue-600">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <MapPin className="h-4 w-4 text-gray-500" />
                      <span className="text-sm text-gray-500">On Campus</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Multiple Opportunities at VentureLab Thapar
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      VentureLab Thapar • 5:01 am • Video Conference
                    </p>
                    <p className="text-gray-600 text-sm">Overview:</p>
                  </div>
                </div>
                <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                  View Details
                </Button>
              </Card>

              <Card className="p-6 border-l-4 border-l-green-600">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <MapPin className="h-4 w-4 text-gray-500" />
                      <span className="text-sm text-gray-500">Thapar, Patiala, Punjab</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Assistant Manager (Incubation)
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      VentureLab Thapar • 5:01 am • Thapar • Patiala Last date to apply: Monday, 29th July...
                    </p>
                  </div>
                </div>
                <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                  Apply Details
                </Button>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Careers;
