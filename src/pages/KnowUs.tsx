
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@/components/ui/breadcrumb";
import { Spotlight } from "@/components/ui/spotlight";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, Eye, BookOpen, Lightbulb, Users, Rocket, Building2, Award } from "lucide-react";

const KnowUs = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {/* Breadcrumbs */}
        <div className="bg-gray-50 py-4">
          <div className="container mx-auto px-4">
            <Breadcrumb>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbItem>
                <BreadcrumbLink href="/about/know-us">About Us</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbItem>
                <BreadcrumbLink>Know Us</BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
          </div>
        </div>

        {/* Header */}
        <div className="bg-white py-16 relative overflow-hidden">
          <Spotlight
            className="-top-40 left-0 from-blue-500/20 via-blue-500/10 to-transparent"
          />
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <Badge variant="outline" className="mb-6 px-4 py-2 text-sm font-medium border-blue-200 text-blue-700 bg-blue-50">
                Established 2005
              </Badge>
              <h1 className="heading-hero text-gray-900 mb-6">
                About <span className="text-blue-900">Venture</span><span className="text-teal-600">Lab</span> <span className="text-blue-900">Thapar</span>
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-900 via-teal-600 to-blue-900 mx-auto mb-8 rounded-full"></div>
              <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                Empowering the next generation of entrepreneurs through innovation, 
                mentorship, and strategic support since 2005.
              </p>
            </div>
          </div>
        </div>

        {/* Our Story Section */}
        <section className="py-20 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center justify-center mb-12">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-blue-100 rounded-full">
                    <BookOpen className="w-8 h-8 text-blue-600" />
                  </div>
                  <h2 className="heading-lg text-gray-900">Our Story</h2>
                </div>
              </div>
              
              <Card className="bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-8 lg:p-12">
                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <div className="p-2 bg-blue-50 rounded-lg flex-shrink-0 mt-1">
                          <Building2 className="w-5 h-5 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 mb-3">Founded in Partnership</h3>
                          <p className="text-gray-700 leading-relaxed">
                            <strong className="text-blue-900">Venture Lab TIET</strong> (Registered as Science & Technology Entrepreneur's Park, TIET) was established as a <strong>joint venture</strong> between the National Science and Technology Entrepreneurship Development Board (NSTEDB), Department of Science and Technology (DST) and Thapar Institute of Engineering & Technology (TIET) in <strong>April 2005</strong>.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-4">
                        <div className="p-2 bg-teal-50 rounded-lg flex-shrink-0 mt-1">
                          <Rocket className="w-5 h-5 text-teal-600" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 mb-3">Innovation-Driven Vision</h3>
                          <p className="text-gray-700 leading-relaxed">
                            Our vision is to <strong>support innovation-driven startups</strong> and empower early-stage founders to build <strong>scalable and sustainable ventures</strong> that create lasting impact.
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl p-8">
                      <div className="flex items-center gap-3 mb-6">
                        <Award className="w-6 h-6 text-blue-600" />
                        <h4 className="text-lg font-bold text-gray-900">Government Backing</h4>
                      </div>
                      <p className="text-gray-700 leading-relaxed mb-6">
                        We are strongly backed by the <strong className="text-blue-900">Meity Startup hub</strong> and <strong className="text-teal-600">Startup India</strong> to incubate technology-based start-ups focused on economic and social impacts.
                      </p>
                      <div className="grid grid-cols-2 gap-4 text-center">
                        <div className="bg-white rounded-lg p-4">
                          <div className="text-2xl font-bold text-blue-900">19</div>
                          <div className="text-sm text-gray-600">Years of Excellence</div>
                        </div>
                        <div className="bg-white rounded-lg p-4">
                          <div className="text-2xl font-bold text-teal-600">100+</div>
                          <div className="text-sm text-gray-600">Startups Supported</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Mission Card */}
                <Card className="group bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                  <CardContent className="p-8 lg:p-10 h-full">
                    <div className="flex items-center gap-4 mb-8">
                      <div className="p-4 bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl group-hover:from-blue-200 group-hover:to-blue-100 transition-all duration-300">
                        <Target className="w-8 h-8 text-blue-600" />
                      </div>
                      <div>
                        <h2 className="heading-md text-gray-900">Our Mission</h2>
                        <div className="w-16 h-1 bg-blue-600 rounded-full mt-2"></div>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <p className="text-lg text-gray-700 leading-relaxed">
                        To <strong className="text-blue-900">foster innovation and entrepreneurship</strong> by providing a supportive ecosystem for startups to grow and succeed.
                      </p>
                      
                      <div className="grid gap-3">
                        <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                          <Lightbulb className="w-5 h-5 text-blue-600 flex-shrink-0" />
                          <span className="text-gray-700">Innovation Support</span>
                        </div>
                        <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                          <Users className="w-5 h-5 text-blue-600 flex-shrink-0" />
                          <span className="text-gray-700">Economic Development</span>
                        </div>
                        <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                          <Building2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
                          <span className="text-gray-700">Job Creation</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Vision Card */}
                <Card className="group bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                  <CardContent className="p-8 lg:p-10 h-full">
                    <div className="flex items-center gap-4 mb-8">
                      <div className="p-4 bg-gradient-to-br from-teal-100 to-teal-50 rounded-2xl group-hover:from-teal-200 group-hover:to-teal-100 transition-all duration-300">
                        <Eye className="w-8 h-8 text-teal-600" />
                      </div>
                      <div>
                        <h2 className="heading-md text-gray-900">Our Vision</h2>
                        <div className="w-16 h-1 bg-teal-600 rounded-full mt-2"></div>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <p className="text-lg text-gray-700 leading-relaxed">
                        To be a <strong className="text-teal-600">leading incubator</strong> that transforms innovative ideas into successful ventures, creating a vibrant entrepreneurial ecosystem.
                      </p>
                      
                      <div className="grid gap-3">
                        <div className="flex items-center gap-3 p-3 bg-teal-50 rounded-lg">
                          <Rocket className="w-5 h-5 text-teal-600 flex-shrink-0" />
                          <span className="text-gray-700">Sustainable Growth</span>
                        </div>
                        <div className="flex items-center gap-3 p-3 bg-teal-50 rounded-lg">
                          <Award className="w-5 h-5 text-teal-600 flex-shrink-0" />
                          <span className="text-gray-700">Positive Social Impact</span>
                        </div>
                        <div className="flex items-center gap-3 p-3 bg-teal-50 rounded-lg">
                          <Users className="w-5 h-5 text-teal-600 flex-shrink-0" />
                          <span className="text-gray-700">Vibrant Ecosystem</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-16 bg-gradient-to-r from-blue-900 via-blue-800 to-teal-700">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Idea?
              </h3>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Join our ecosystem of innovators and entrepreneurs. Let's build the future together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-white text-blue-900 font-semibold rounded-full hover:bg-gray-100 transition-all duration-200 hover:scale-105 hover:shadow-lg">
                  Start Your Journey
                </button>
                <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-blue-900 transition-all duration-200">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default KnowUs;
