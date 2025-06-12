import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SmartphoneNfc, Brain, Cpu, Car, Smartphone, Activity, CheckCircle, DollarSign, Users, Cloud, Target, TrendingUp, Calendar, Zap } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const MeityTideProgram = () => {
  const focusAreas = [
    { 
      icon: <Brain size={24} />, 
      title: "AI & Machine Learning", 
      description: "Developing intelligent systems and automated solutions for various industries",
      color: "bg-blue-50 hover:bg-blue-100 border-blue-200"
    },
    { 
      icon: <Cpu size={24} />, 
      title: "Blockchain", 
      description: "Creating decentralized solutions for secure and transparent transactions",
      color: "bg-purple-50 hover:bg-purple-100 border-purple-200"
    },
    { 
      icon: <SmartphoneNfc size={24} />, 
      title: "Internet of Things", 
      description: "Building connected devices and smart sensor networks",
      color: "bg-green-50 hover:bg-green-100 border-green-200"
    },
    { 
      icon: <Car size={24} />, 
      title: "E-mobility", 
      description: "Innovative electric vehicle solutions and charging infrastructure",
      color: "bg-orange-50 hover:bg-orange-100 border-orange-200"
    },
    { 
      icon: <Smartphone size={24} />, 
      title: "Smart Infrastructure", 
      description: "Technology solutions for smart cities and digital infrastructure",
      color: "bg-indigo-50 hover:bg-indigo-100 border-indigo-200"
    },
    { 
      icon: <Activity size={24} />, 
      title: "CleanTech & HealthTech", 
      description: "Sustainable technology and healthcare innovation solutions",
      color: "bg-teal-50 hover:bg-teal-100 border-teal-200"
    }
  ];

  const benefits = [
    { icon: <DollarSign size={24} />, title: "EIR Grant", desc: "INR 4 Lakhs for prototype validation and development", color: "text-blue-600" },
    { icon: <DollarSign size={24} />, title: "MVP Grant", desc: "INR 7 Lakhs for product development support", color: "text-green-600" },
    { icon: <Users size={24} />, title: "Tailored Support", desc: "6 months of customized hand-holding", color: "text-purple-600" },
    { icon: <Cloud size={24} />, title: "Cloud Credits", desc: "₹5,000 worth of cloud credit support", color: "text-orange-600" }
  ];

  const eligibilityCriteria = [
    { icon: <Target size={20} />, title: "Tech Innovator", desc: "Working full-time on developing solutions with required expertise." },
    { icon: <Zap size={20} />, title: "Focus Area Match", desc: "Product/solution catering to our focus areas." },
    { icon: <TrendingUp size={20} />, title: "India-based", desc: "Startup registered or will be registered in India." },
    { icon: <CheckCircle size={20} />, title: "First Time", desc: "Haven't availed TIDE 2.0 support previously." }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Breadcrumb navigation */}
        <div className="bg-gray-50 py-3">
          <div className="container mx-auto px-4">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <Link to="/" className="text-blue-600 hover:underline">Home</Link>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <Link to="/programs" className="text-blue-600 hover:underline">Programs</Link>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>MeitY TIDE 2.0</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div>

        {/* Modern Hero Section */}
        <section className="relative py-16 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          <div className="container mx-auto px-4 relative">
            <div className="max-w-5xl mx-auto text-center">
              <span className="inline-block bg-blue-200/20 backdrop-blur-sm text-blue-100 px-4 py-2 rounded-full mb-6 text-sm font-medium border border-blue-300/30">
                Ministry of Electronics & Information Technology
              </span>
              <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 text-white leading-tight">
                MeitY TIDE 2.0
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed max-w-3xl mx-auto">
                Empowering technology entrepreneurs to build innovative solutions for tomorrow's digital India
              </p>
              <div className="flex justify-center">
                <Button 
                  size="lg" 
                  className="group relative bg-white text-blue-900 hover:bg-blue-50 hover:text-blue-800 rounded-full px-12 py-4 text-xl font-black shadow-2xl hover:shadow-white/30 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 border-2 border-white/20 hover:border-white/40 min-h-[64px] backdrop-blur-sm"
                  onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSeyMtKDE9QoME77OQw8OkcW0WteTAyQsdEYFohHG690MKEAUg/viewform', '_blank')}
                >
                  <span className="relative z-10 flex items-center font-black tracking-wide">
                    Apply Now
                    <span className="ml-3 transition-transform duration-300 group-hover:translate-x-1 text-2xl">→</span>
                  </span>
                  {/* Enhanced button glow effect */}
                  <div className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-30 transition-opacity duration-300 blur-xl scale-110"></div>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/10 to-blue-100/20 opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Program Impact Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-gray-900">Program Impact</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Supporting the startup ecosystem across India with comprehensive funding and mentorship
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="text-center p-8 bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="text-blue-600" size={32} />
                  </div>
                  <h3 className="text-4xl font-bold text-blue-600 mb-2">52+</h3>
                  <p className="text-gray-600 font-medium">Incubators Partnered</p>
                </Card>
                
                <Card className="text-center p-8 bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="text-green-600" size={32} />
                  </div>
                  <h3 className="text-4xl font-bold text-green-600 mb-2">37</h3>
                  <p className="text-gray-600 font-medium">Startups Supported</p>
                </Card>
                
                <Card className="text-center p-8 bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Calendar className="text-purple-600" size={32} />
                  </div>
                  <h3 className="text-4xl font-bold text-purple-600 mb-2">5</h3>
                  <p className="text-gray-600 font-medium">Years Duration</p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Focus Areas Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-gray-900">Focus Areas</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  We support startups working across cutting-edge technology domains
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {focusAreas.map((area, index) => (
                  <Card 
                    key={index} 
                    className={`p-6 cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 ${area.color}`}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="text-blue-600 flex-shrink-0 mt-1">
                        {area.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">{area.title}</h3>
                        <p className="text-sm text-gray-600 leading-relaxed">{area.description}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Main content */}
        <section id="program-details" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              
              <Tabs defaultValue="eligibility" className="mb-12">
                <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
                  <TabsTrigger value="eligibility" className="text-sm font-medium">Eligibility</TabsTrigger>
                  <TabsTrigger value="benefits" className="text-sm font-medium">Benefits</TabsTrigger>
                  <TabsTrigger value="process" className="text-sm font-medium">Process</TabsTrigger>
                  <TabsTrigger value="faq" className="text-sm font-medium">FAQ</TabsTrigger>
                </TabsList>
                
                <TabsContent value="eligibility" className="pt-4">
                  <Card className="p-8">
                    <h3 className="text-2xl font-bold mb-6 text-gray-900">Eligibility Criteria</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      {eligibilityCriteria.map((criterion, index) => (
                        <div key={index} className="flex items-start space-x-4 p-4 bg-white rounded-lg border border-gray-200">
                          <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                            <CheckCircle className="text-green-600" size={20} />
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2">{criterion.title}</h4>
                            <p className="text-sm text-gray-600 leading-relaxed">{criterion.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </Card>
                </TabsContent>
                
                <TabsContent value="benefits" className="pt-4">
                  <Card className="p-8">
                    <h3 className="text-2xl font-bold mb-6 text-gray-900">Program Benefits</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      {benefits.map((benefit, index) => (
                        <div key={index} className="flex items-start space-x-4 p-6 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                          <div className={`w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0 ${benefit.color}`}>
                            {benefit.icon}
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2">{benefit.title}</h4>
                            <p className="text-sm text-gray-600 leading-relaxed">{benefit.desc}</p>
                          </div>
                        </div>
                      ))}
                      
                      <div className="md:col-span-2 grid md:grid-cols-2 gap-6 mt-4">
                        <div className="flex items-start space-x-4 p-6 bg-white rounded-lg border border-gray-200">
                          <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                            <Users className="text-indigo-600" size={24} />
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2">Co-working Space</h4>
                            <p className="text-sm text-gray-600">Access to co-working facilities if based in Ahmedabad</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-4 p-6 bg-white rounded-lg border border-gray-200">
                          <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                            <Activity className="text-pink-600" size={24} />
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2">Network Access</h4>
                            <p className="text-sm text-gray-600">Access to mentor network and industry connections</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </TabsContent>
                
                <TabsContent value="process" className="pt-4">
                  <Card className="p-8">
                    <h3 className="text-2xl font-bold mb-6 text-gray-900">Application Process</h3>
                    <div className="space-y-8">
                      {[
                        { step: 1, title: "Submit Application", desc: "Complete online application with startup details", icon: <Target size={24} /> },
                        { step: 2, title: "Screening", desc: "Review based on innovation and market potential", icon: <CheckCircle size={24} /> },
                        { step: 3, title: "Pitch Presentation", desc: "Present to expert panel of judges", icon: <Users size={24} /> },
                        { step: 4, title: "Selection & Onboarding", desc: "Begin receiving program support", icon: <TrendingUp size={24} /> }
                      ].map((item, index) => (
                        <div key={index} className="flex items-start space-x-6">
                          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                            <span className="text-blue-800 font-bold text-lg">{item.step}</span>
                          </div>
                          <div className="pt-3">
                            <h4 className="text-xl font-semibold mb-2 text-gray-900">{item.title}</h4>
                            <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </Card>
                </TabsContent>
                
                <TabsContent value="faq" className="pt-4">
                  <Card className="p-8">
                    <h3 className="text-2xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h3>
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="item-1">
                        <AccordionTrigger className="text-left">What kind of startups does MeitY TIDE 2.0 support?</AccordionTrigger>
                        <AccordionContent>
                          Technology startups working in IoT, AI/ML, Blockchain, Smart Infrastructure, CleanTech, HealthTech, and E-mobility.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-2">
                        <AccordionTrigger className="text-left">What stage should my startup be in?</AccordionTrigger>
                        <AccordionContent>
                          Early-stage startups with MVP or proof of concept looking for support to develop and scale.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-3">
                        <AccordionTrigger className="text-left">Is there equity dilution?</AccordionTrigger>
                        <AccordionContent>
                          No, the support is grant-based and does not involve equity dilution.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-4">
                        <AccordionTrigger className="text-left">How long is the program?</AccordionTrigger>
                        <AccordionContent>
                          Typically 6 months, which may be extended based on performance and requirements.
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </Card>
                </TabsContent>
              </Tabs>

              {/* Strong Call to Action */}
              <Card className="bg-gradient-to-r from-blue-600 to-blue-700 text-white border-0 shadow-2xl">
                <CardContent className="p-12 text-center">
                  <h3 className="text-3xl md:text-4xl font-bold mb-4">Ready to Apply?</h3>
                  <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
                    Join 2000+ innovative startups being supported by MeitY TIDE 2.0. Transform your tech idea into a thriving business.
                  </p>
                  <Button 
                    size="lg" 
                    className="bg-white text-blue-700 hover:bg-blue-50 rounded-full px-12 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
                    onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSeyMtKDE9QoME77OQw8OkcW0WteTAyQsdEYFohHG690MKEAUg/viewform', '_blank')}
                  >
                    Apply Now →
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default MeityTideProgram;
