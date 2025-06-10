
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@/components/ui/breadcrumb";
import { Card, CardContent } from "@/components/ui/card";
import { Spotlight } from "@/components/ui/spotlight";
import { Lightbulb, Target, Eye, Building2, Users, Award, Calendar, Sparkles } from "lucide-react";

const KnowUs = () => {
  const keyHighlights = [
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Established 2005",
      description: "Joint venture between NSTEDB, DST & TIET"
    },
    {
      icon: <Building2 className="w-6 h-6" />,
      title: "MeitY Backed",
      description: "Supported by Startup India initiatives"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Innovation Focus",
      description: "Technology-based startup incubation"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Impact Driven",
      description: "Economic and social development"
    }
  ];

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

        {/* Enhanced Header with Animation */}
        <div className="bg-gradient-to-br from-blue-50 via-white to-teal-50 py-20 relative overflow-hidden">
          <Spotlight className="-top-40 left-0 from-blue-500/20 via-blue-500/10 to-transparent" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center animate-fade-in">
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-6 border border-blue-200">
                <Sparkles className="w-4 h-4" />
                <span className="text-sm font-medium tracking-wider uppercase">About Us</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 leading-tight">
                About <span className="text-blue-900">Venture</span><span className="text-teal-600">Lab</span> <span className="text-blue-900">Thapar</span>
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-900 to-teal-600 mx-auto mb-8 rounded-full"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Empowering innovation and entrepreneurship through dedicated support, mentorship, and resources for the next generation of startups.
              </p>
            </div>
          </div>
        </div>

        {/* Key Highlights Section */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {keyHighlights.map((highlight, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 bg-gradient-to-br from-gray-50 to-white">
                  <CardContent className="p-6 text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-600 rounded-xl mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                      {highlight.icon}
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">{highlight.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{highlight.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Our Story Section */}
        <div className="py-20 bg-gradient-to-br from-blue-900 to-blue-800 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="animate-fade-in">
                  <div className="inline-flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                      <Lightbulb className="w-6 h-6 text-blue-600" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-display font-bold">Our Story</h2>
                  </div>
                  
                  <div className="space-y-6 text-blue-100 leading-relaxed">
                    <p className="text-lg md:text-xl leading-relaxed">
                      <span className="font-semibold text-white">Venture Lab TIET</span> (Registered as Science & Technology Entrepreneur's Park, TIET) was established as a joint venture between the National Science and Technology Entrepreneurship Development Board (NSTEDB), Department of Science and Technology (DST) and Thapar Institute of Engineering & Technology (TIET) in <span className="font-semibold text-white">April 2005</span>.
                    </p>
                    
                    <p className="text-lg leading-relaxed">
                      Our vision has always been to <span className="font-semibold text-white">support innovation-driven startups</span> and empower early-stage founders to build scalable and sustainable ventures.
                    </p>
                    
                    <p className="text-lg leading-relaxed">
                      We are strongly backed by the <span className="font-semibold text-white">Meity Startup hub and Startup India</span> to incubate technology-based start-ups focused on economic and social impacts.
                    </p>
                  </div>
                </div>
                
                <div className="relative animate-fade-in-delay-1">
                  <div className="bg-gradient-to-br from-blue-600/20 to-teal-600/20 rounded-3xl p-8 backdrop-blur-sm border border-white/10">
                    <div className="grid grid-cols-2 gap-6">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-white mb-2">19+</div>
                        <div className="text-blue-200 text-sm">Years of Experience</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-white mb-2">100+</div>
                        <div className="text-blue-200 text-sm">Startups Supported</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-white mb-2">₹50Cr+</div>
                        <div className="text-blue-200 text-sm">Funding Facilitated</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-white mb-2">5000+</div>
                        <div className="text-blue-200 text-sm">Jobs Created</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Our Mission Section */}
        <div className="py-20 bg-gradient-to-br from-teal-50 to-blue-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-3 mb-8 animate-fade-in">
                <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center">
                  <Target className="w-6 h-6 text-teal-600" />
                </div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900">Our Mission</h2>
              </div>
              
              <Card className="border-0 shadow-xl bg-white/70 backdrop-blur-sm animate-fade-in-delay-1">
                <CardContent className="p-8 md:p-12">
                  <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8">
                    To foster <span className="font-bold text-teal-600">innovation and entrepreneurship</span> by providing a supportive ecosystem for startups to grow and succeed, contributing to <span className="font-bold text-blue-600">economic development and job creation</span>.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6 mt-8">
                    <div className="text-center p-4">
                      <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Users className="w-8 h-8 text-teal-600" />
                      </div>
                      <h3 className="font-bold text-gray-900 mb-2">Foster Innovation</h3>
                      <p className="text-gray-600 text-sm">Creating an environment where innovative ideas can flourish</p>
                    </div>
                    
                    <div className="text-center p-4">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Building2 className="w-8 h-8 text-blue-600" />
                      </div>
                      <h3 className="font-bold text-gray-900 mb-2">Support Ecosystem</h3>
                      <p className="text-gray-600 text-sm">Providing comprehensive support for startup growth</p>
                    </div>
                    
                    <div className="text-center p-4">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Award className="w-8 h-8 text-green-600" />
                      </div>
                      <h3 className="font-bold text-gray-900 mb-2">Economic Impact</h3>
                      <p className="text-gray-600 text-sm">Contributing to sustainable economic development</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Our Vision Section */}
        <div className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-3 mb-8 animate-fade-in">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center backdrop-blur-sm">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-display font-bold">Our Vision</h2>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/10 animate-fade-in-delay-1">
                <p className="text-xl md:text-2xl leading-relaxed mb-8 text-gray-100">
                  To be a <span className="font-bold text-white">leading incubator</span> that transforms innovative ideas into successful ventures, creating a <span className="font-bold text-white">vibrant entrepreneurial ecosystem</span> that drives sustainable growth and positive social impact.
                </p>
                
                <div className="grid md:grid-cols-2 gap-8 mt-12">
                  <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                    <h3 className="text-xl font-bold mb-4 text-white">Leading Innovation Hub</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Establishing ourselves as the premier destination for startups seeking comprehensive support and guidance in their entrepreneurial journey.
                    </p>
                  </div>
                  
                  <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                    <h3 className="text-xl font-bold mb-4 text-white">Sustainable Impact</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Creating lasting positive change through ventures that drive both economic growth and meaningful social transformation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default KnowUs;
