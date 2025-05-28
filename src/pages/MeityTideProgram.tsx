
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SmartphoneNfc, Brain, Cpu, Car, Smartphone, Activity, CheckCircle, DollarSign, Users, Cloud } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const MeityTideProgram = () => {
  const focusAreas = [
    { icon: <SmartphoneNfc size={20} />, title: "Internet of Things (IoT)" },
    { icon: <Brain size={20} />, title: "Artificial Intelligence & Machine Learning (AI-ML)" },
    { icon: <Cpu size={20} />, title: "Blockchain" },
    { icon: <Car size={20} />, title: "E-mobility" },
    { icon: <Smartphone size={20} />, title: "Smart Infrastructure" },
    { icon: <Activity size={20} />, title: "CleanTech & HealthTech" }
  ];

  const benefits = [
    { icon: <DollarSign size={20} />, title: "EIR Grant", desc: "INR 4 Lakhs for prototype validation and development" },
    { icon: <DollarSign size={20} />, title: "MVP Grant", desc: "INR 7 Lakhs for product development support" },
    { icon: <Users size={20} />, title: "Tailored Support", desc: "6 months of customized hand-holding" },
    { icon: <Cloud size={20} />, title: "Cloud Credits", desc: "₹5,000 worth of cloud credit support" }
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

        {/* Compact program header */}
        <section className="py-8 bg-gradient-to-r from-blue-900 to-blue-700">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-block bg-blue-200 text-blue-800 px-3 py-1 rounded-full mb-3 text-sm font-medium">Ministry of Electronics & IT</span>
              <h1 className="text-3xl md:text-4xl font-display font-bold mb-3 text-white">MeitY TIDE 2.0 Program</h1>
              <p className="text-lg text-blue-100">Supporting technology entrepreneurs building solutions for tomorrow</p>
            </div>
          </div>
        </section>

        {/* Main content */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              
              {/* About section - more compact */}
              <div className="grid lg:grid-cols-3 gap-8 mb-10">
                <div className="lg:col-span-2">
                  <h2 className="text-2xl font-display font-bold mb-4">About The Scheme</h2>
                  <p className="text-gray-700 mb-4">
                    TIDE 2.0 scheme by MeitY aims to support technology startups working in emerging technologies through financial and technical support. The scheme empowers 52+ incubators in India and supports nearly 2000 tech start-ups over 5 years.
                  </p>
                </div>
                
                {/* Key stats card */}
                <Card className="lg:col-span-1">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg">Program Impact</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Incubators</span>
                      <span className="font-semibold text-blue-600">52+</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Startups Supported</span>
                      <span className="font-semibold text-blue-600">2000+</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Duration</span>
                      <span className="font-semibold text-blue-600">5 Years</span>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Focus Areas - more compact grid */}
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="text-xl">Focus Areas</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {focusAreas.map((area, index) => (
                      <div key={index} className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                        <div className="text-blue-600 flex-shrink-0">
                          {area.icon}
                        </div>
                        <span className="text-sm font-medium text-gray-800">{area.title}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Tabs defaultValue="eligibility" className="mb-10">
                <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
                  <TabsTrigger value="eligibility">Eligibility</TabsTrigger>
                  <TabsTrigger value="benefits">Benefits</TabsTrigger>
                  <TabsTrigger value="process">Process</TabsTrigger>
                  <TabsTrigger value="faq">FAQ</TabsTrigger>
                </TabsList>
                
                <TabsContent value="eligibility" className="pt-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <Card>
                      <CardContent className="pt-4">
                        <div className="flex items-start space-x-3">
                          <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
                          <div>
                            <h4 className="font-medium text-blue-600 mb-1">Tech Innovator</h4>
                            <p className="text-sm text-gray-700">Working full-time on developing solutions with required expertise.</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardContent className="pt-4">
                        <div className="flex items-start space-x-3">
                          <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
                          <div>
                            <h4 className="font-medium text-blue-600 mb-1">Focus Area Match</h4>
                            <p className="text-sm text-gray-700">Product/solution catering to our focus areas.</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardContent className="pt-4">
                        <div className="flex items-start space-x-3">
                          <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
                          <div>
                            <h4 className="font-medium text-blue-600 mb-1">India-based</h4>
                            <p className="text-sm text-gray-700">Startup registered or will be registered in India.</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardContent className="pt-4">
                        <div className="flex items-start space-x-3">
                          <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
                          <div>
                            <h4 className="font-medium text-blue-600 mb-1">First Time</h4>
                            <p className="text-sm text-gray-700">Haven't availed TIDE 2.0 support previously.</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
                
                <TabsContent value="benefits" className="pt-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    {benefits.map((benefit, index) => (
                      <Card key={index}>
                        <CardContent className="pt-4">
                          <div className="flex items-start space-x-3">
                            <div className="text-blue-600 mt-1 flex-shrink-0">
                              {benefit.icon}
                            </div>
                            <div>
                              <h4 className="font-medium text-blue-600 mb-1">{benefit.title}</h4>
                              <p className="text-sm text-gray-700">{benefit.desc}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                    
                    {/* Additional benefits */}
                    <Card className="md:col-span-2">
                      <CardContent className="pt-4">
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="flex items-start space-x-3">
                            <Users className="text-blue-600 mt-1 flex-shrink-0" size={20} />
                            <div>
                              <h4 className="font-medium text-blue-600 mb-1">Co-working Space</h4>
                              <p className="text-sm text-gray-700">Access to co-working facilities if based in Ahmedabad</p>
                            </div>
                          </div>
                          <div className="flex items-start space-x-3">
                            <Activity className="text-blue-600 mt-1 flex-shrink-0" size={20} />
                            <div>
                              <h4 className="font-medium text-blue-600 mb-1">Network Access</h4>
                              <p className="text-sm text-gray-700">Access to mentor network and industry connections</p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
                
                <TabsContent value="process" className="pt-4">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex items-start space-x-4">
                        <div className="flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full flex-shrink-0">
                          <span className="text-blue-800 font-bold text-sm">1</span>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-1">Submit Application</h4>
                          <p className="text-sm text-gray-600">Complete online application with startup details</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-4">
                        <div className="flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full flex-shrink-0">
                          <span className="text-blue-800 font-bold text-sm">2</span>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-1">Screening</h4>
                          <p className="text-sm text-gray-600">Review based on innovation and market potential</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex items-start space-x-4">
                        <div className="flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full flex-shrink-0">
                          <span className="text-blue-800 font-bold text-sm">3</span>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-1">Pitch Presentation</h4>
                          <p className="text-sm text-gray-600">Present to expert panel of judges</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-4">
                        <div className="flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full flex-shrink-0">
                          <span className="text-blue-800 font-bold text-sm">4</span>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-1">Selection & Onboarding</h4>
                          <p className="text-sm text-gray-600">Begin receiving program support</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="faq" className="pt-4">
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
                </TabsContent>
              </Tabs>

              {/* Compact call to action */}
              <Card className="bg-blue-50 border-blue-200">
                <CardContent className="pt-6">
                  <div className="text-center">
                    <h3 className="text-xl font-bold mb-2">Ready to Apply?</h3>
                    <p className="text-gray-700 mb-4">Join 2000+ startups being supported by MeitY TIDE 2.0</p>
                    <Button 
                      size="lg" 
                      className="bg-blue-600 hover:bg-blue-700 rounded-full"
                      onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSeyMtKDE9QoME77OQw8OkcW0WteTAyQsdEYFohHG690MKEAUg/viewform', '_blank')}
                    >
                      Apply Now
                    </Button>
                  </div>
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
