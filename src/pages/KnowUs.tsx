
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@/components/ui/breadcrumb";
import { Spotlight } from "@/components/ui/spotlight";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Target, Eye, Users, Award, Lightbulb } from "lucide-react";

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
            <h1 className="text-4xl md:text-5xl font-display font-bold text-center mb-6">
              About <span className="text-blue-900">Venture</span><span className="text-teal-600">Lab</span> <span className="text-blue-900">Thapar</span>
            </h1>
            <div className="w-20 h-1 bg-blue-900 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto leading-relaxed">
              Empowering innovation-driven startups and early-stage founders to build scalable ventures
            </p>
          </div>
        </div>

        {/* Our Story Section */}
        <div className="py-16 bg-gradient-to-br from-blue-50 to-white">
          <div className="container mx-auto px-4">
            <Card className="max-w-6xl mx-auto shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="text-center pb-8">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-blue-100 rounded-full">
                    <BookOpen className="h-8 w-8 text-blue-900" />
                  </div>
                </div>
                <CardTitle className="text-3xl font-display font-bold text-blue-900">Our Story</CardTitle>
                <div className="w-16 h-1 bg-blue-900 mx-auto mt-4"></div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="space-y-6">
                    <div className="relative">
                      <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-blue-500 to-teal-500 rounded-full"></div>
                      <div className="pl-6">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                          <span className="font-semibold text-blue-900">Established 2005</span>
                        </div>
                        <p className="text-gray-700 leading-relaxed">
                          Venture Lab TIET was established as a joint venture between the <strong>National Science and Technology Entrepreneurship Development Board (NSTEDB)</strong>, Department of Science and Technology (DST) and Thapar Institute of Engineering & Technology (TIET).
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-gradient-to-r from-blue-100 to-teal-100 p-6 rounded-lg">
                      <div className="flex items-center gap-3 mb-3">
                        <Award className="h-6 w-6 text-blue-900" />
                        <h3 className="font-semibold text-blue-900">Our Vision</h3>
                      </div>
                      <p className="text-gray-700">
                        Supporting innovation-driven startups and empowering early-stage founders to build scalable and sustainable ventures.
                      </p>
                    </div>
                    <div className="bg-gradient-to-r from-teal-100 to-blue-100 p-6 rounded-lg">
                      <div className="flex items-center gap-3 mb-3">
                        <Users className="h-6 w-6 text-teal-600" />
                        <h3 className="font-semibold text-teal-600">Strong Backing</h3>
                      </div>
                      <p className="text-gray-700">
                        Supported by <strong>Meity Startup Hub</strong> and <strong>Startup India</strong> to incubate technology-based start-ups focused on economic and social impacts.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Mission and Vision Section */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              
              {/* Mission Card */}
              <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
                <CardHeader className="text-center pb-6">
                  <div className="flex justify-center mb-4">
                    <div className="p-4 bg-white/10 rounded-full group-hover:bg-white/20 transition-colors duration-300">
                      <Target className="h-10 w-10 text-white" />
                    </div>
                  </div>
                  <CardTitle className="text-2xl font-display font-bold">Our Mission</CardTitle>
                  <div className="w-16 h-1 bg-white/30 mx-auto mt-4"></div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-blue-100 leading-relaxed text-center text-lg">
                      To foster <strong className="text-white">innovation</strong> and <strong className="text-white">entrepreneurship</strong> by providing a supportive ecosystem for startups to grow and succeed.
                    </p>
                    <div className="grid grid-cols-2 gap-4 mt-6">
                      <div className="text-center p-4 bg-white/10 rounded-lg">
                        <Lightbulb className="h-6 w-6 text-blue-200 mx-auto mb-2" />
                        <p className="text-sm text-blue-200">Innovation</p>
                      </div>
                      <div className="text-center p-4 bg-white/10 rounded-lg">
                        <Users className="h-6 w-6 text-blue-200 mx-auto mb-2" />
                        <p className="text-sm text-blue-200">Job Creation</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Vision Card */}
              <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-teal-600 to-teal-700 text-white">
                <CardHeader className="text-center pb-6">
                  <div className="flex justify-center mb-4">
                    <div className="p-4 bg-white/10 rounded-full group-hover:bg-white/20 transition-colors duration-300">
                      <Eye className="h-10 w-10 text-white" />
                    </div>
                  </div>
                  <CardTitle className="text-2xl font-display font-bold">Our Vision</CardTitle>
                  <div className="w-16 h-1 bg-white/30 mx-auto mt-4"></div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-teal-100 leading-relaxed text-center text-lg">
                      To be a <strong className="text-white">leading incubator</strong> that transforms innovative ideas into successful ventures, creating a vibrant entrepreneurial ecosystem.
                    </p>
                    <div className="grid grid-cols-2 gap-4 mt-6">
                      <div className="text-center p-4 bg-white/10 rounded-lg">
                        <Award className="h-6 w-6 text-teal-200 mx-auto mb-2" />
                        <p className="text-sm text-teal-200">Excellence</p>
                      </div>
                      <div className="text-center p-4 bg-white/10 rounded-lg">
                        <Target className="h-6 w-6 text-teal-200 mx-auto mb-2" />
                        <p className="text-sm text-teal-200">Impact</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Key Highlights Section */}
        <div className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-display font-bold text-blue-900 mb-4">Why Choose VentureLab?</h2>
              <div className="w-20 h-1 bg-blue-900 mx-auto"></div>
            </div>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-8 w-8 text-blue-900" />
                </div>
                <h3 className="font-semibold text-blue-900 mb-2">Expert Mentorship</h3>
                <p className="text-gray-600 text-sm">Access to industry experts and successful entrepreneurs</p>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-teal-600" />
                </div>
                <h3 className="font-semibold text-teal-600 mb-2">Funding Support</h3>
                <p className="text-gray-600 text-sm">Strategic funding opportunities and investor connections</p>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-blue-900" />
                </div>
                <h3 className="font-semibold text-blue-900 mb-2">Community Network</h3>
                <p className="text-gray-600 text-sm">Vibrant ecosystem of entrepreneurs and innovators</p>
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
