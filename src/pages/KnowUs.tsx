
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@/components/ui/breadcrumb";
import { Spotlight } from "@/components/ui/spotlight";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, Target, Eye, Calendar, Users, Lightbulb, Rocket, Heart } from "lucide-react";

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
            <div className="text-center animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 leading-tight">
                About <span className="text-blue-900">Venture</span><span className="text-teal-600">Lab</span> <span className="text-blue-900">Thapar</span>
              </h1>
              <div className="w-20 h-1 bg-blue-900 mx-auto mb-8"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Empowering innovation-driven startups and early-stage founders since 2005
              </p>
            </div>
          </div>
        </div>

        {/* Our Story Section */}
        <div className="bg-gradient-to-br from-blue-50 to-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16 animate-fade-in-delay-1">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                  <Building2 className="w-8 h-8 text-blue-600" />
                </div>
                <h2 className="text-4xl font-display font-bold mb-4 text-blue-900">Our Story</h2>
                <div className="w-16 h-1 bg-blue-600 mx-auto"></div>
              </div>

              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-8 animate-fade-in-delay-2">
                  {/* Timeline Item 1 */}
                  <Card className="hover-lift border-l-4 border-l-blue-600 hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full flex-shrink-0">
                          <Calendar className="w-5 h-5 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg mb-2 text-blue-900">Established in 2005</h3>
                          <p className="text-gray-700 leading-relaxed">
                            <strong>Venture Lab TIET</strong> was established as a joint venture between the <strong>National Science and Technology Entrepreneurship Development Board (NSTEDB)</strong>, Department of Science and Technology (DST) and <strong>Thapar Institute of Engineering & Technology (TIET)</strong>.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Timeline Item 2 */}
                  <Card className="hover-lift border-l-4 border-l-teal-600 hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="flex items-center justify-center w-10 h-10 bg-teal-100 rounded-full flex-shrink-0">
                          <Rocket className="w-5 h-5 text-teal-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg mb-2 text-teal-900">Our Vision</h3>
                          <p className="text-gray-700 leading-relaxed">
                            To support <strong>innovation-driven startups</strong> and empower early-stage founders to build <strong>scalable and sustainable ventures</strong>.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="animate-fade-in-delay-3">
                  <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
                    <CardContent className="p-8">
                      <div className="flex items-center space-x-3 mb-6">
                        <Users className="w-6 h-6 text-blue-600" />
                        <h3 className="font-semibold text-xl text-blue-900">Strong Backing</h3>
                      </div>
                      <p className="text-gray-700 leading-relaxed mb-6">
                        We are strongly backed by the <strong>Meity Startup hub</strong> and <strong>Startup India</strong> to incubate technology-based start-ups focused on economic and social impacts.
                      </p>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="text-center p-4 bg-blue-50 rounded-lg">
                          <div className="text-2xl font-bold text-blue-900">19+</div>
                          <div className="text-sm text-gray-600">Years of Experience</div>
                        </div>
                        <div className="text-center p-4 bg-teal-50 rounded-lg">
                          <div className="text-2xl font-bold text-teal-900">100+</div>
                          <div className="text-sm text-gray-600">Startups Supported</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Our Mission Section */}
        <div className="bg-gradient-to-br from-teal-50 to-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-100 rounded-full mb-6 animate-fade-in">
                <Target className="w-8 h-8 text-teal-600" />
              </div>
              <h2 className="text-4xl font-display font-bold mb-6 text-teal-900 animate-fade-in-delay-1">Our Mission</h2>
              <div className="w-16 h-1 bg-teal-600 mx-auto mb-12 animate-fade-in-delay-1"></div>
              
              <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl hover-lift animate-fade-in-delay-2">
                <CardContent className="p-12">
                  <p className="text-xl text-gray-700 leading-relaxed mb-8">
                    To foster <strong className="text-teal-900">innovation and entrepreneurship</strong> by providing a supportive ecosystem for startups to grow and succeed, contributing to <strong className="text-teal-900">economic development and job creation</strong>.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6 mt-8">
                    <div className="text-center p-6 bg-teal-50 rounded-xl hover:bg-teal-100 transition-colors duration-300">
                      <Lightbulb className="w-8 h-8 text-teal-600 mx-auto mb-4" />
                      <h3 className="font-semibold text-teal-900 mb-2">Innovation</h3>
                      <p className="text-sm text-gray-600">Supporting cutting-edge ideas and technologies</p>
                    </div>
                    <div className="text-center p-6 bg-teal-50 rounded-xl hover:bg-teal-100 transition-colors duration-300">
                      <Users className="w-8 h-8 text-teal-600 mx-auto mb-4" />
                      <h3 className="font-semibold text-teal-900 mb-2">Ecosystem</h3>
                      <p className="text-sm text-gray-600">Building supportive startup communities</p>
                    </div>
                    <div className="text-center p-6 bg-teal-50 rounded-xl hover:bg-teal-100 transition-colors duration-300">
                      <Heart className="w-8 h-8 text-teal-600 mx-auto mb-4" />
                      <h3 className="font-semibold text-teal-900 mb-2">Impact</h3>
                      <p className="text-sm text-gray-600">Creating economic and social value</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Our Vision Section */}
        <div className="bg-gradient-to-br from-blue-900 to-blue-800 py-20 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6 animate-fade-in">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-4xl font-display font-bold mb-6 animate-fade-in-delay-1">Our Vision</h2>
              <div className="w-16 h-1 bg-white mx-auto mb-12 animate-fade-in-delay-1"></div>
              
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover-lift animate-fade-in-delay-2">
                <CardContent className="p-12">
                  <p className="text-xl leading-relaxed mb-8">
                    To be a <strong>leading incubator</strong> that transforms innovative ideas into successful ventures, creating a vibrant entrepreneurial ecosystem that drives <strong>sustainable growth</strong> and <strong>positive social impact</strong>.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-8 mt-8">
                    <div className="text-left">
                      <h3 className="font-semibold text-lg mb-4 flex items-center">
                        <Rocket className="w-5 h-5 mr-3" />
                        Future Goals
                      </h3>
                      <ul className="space-y-2 text-white/90">
                        <li>• Transform innovative ideas into successful ventures</li>
                        <li>• Create vibrant entrepreneurial ecosystems</li>
                        <li>• Drive sustainable growth initiatives</li>
                      </ul>
                    </div>
                    <div className="text-left">
                      <h3 className="font-semibold text-lg mb-4 flex items-center">
                        <Heart className="w-5 h-5 mr-3" />
                        Social Impact
                      </h3>
                      <ul className="space-y-2 text-white/90">
                        <li>• Positive community development</li>
                        <li>• Job creation and economic growth</li>
                        <li>• Technology-driven solutions</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default KnowUs;
