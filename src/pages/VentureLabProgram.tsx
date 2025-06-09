import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProgramsBreadcrumb from "@/components/programs/ProgramsBreadcrumb";
import { 
  Globe, 
  Users, 
  GraduationCap, 
  Network, 
  BookOpen, 
  ChartBar, 
  Briefcase, 
  Building, 
  Compass, 
  LineChart,
  Clock,
  Target,
  Lightbulb,
  TrendingUp,
  Heart,
  Award,
  Handshake
} from "lucide-react";

const VentureLabProgram = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Breadcrumb navigation */}
        <ProgramsBreadcrumb currentProgram="VentureLab Program" />

        {/* Enhanced Hero Section */}
        <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-teal-700 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-5xl mx-auto text-center">
              <div className="inline-block bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full mb-6 text-sm font-medium">
                THAPAR INSTITUTE OF ENGINEERING & TECHNOLOGY
              </div>
              <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 text-white leading-tight">
                VentureLab Program
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed max-w-4xl mx-auto">
                Launch your thriving business in a year with VentureLab's comprehensive mentorship, 
                network access, skill development, and funding support
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button 
                  size="lg" 
                  className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-4 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                  onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSf9RnajMtd43Pj3-XxbSnN5Gc8Ze93a1XkOvrcb9WQ5HG17qQ/viewform', '_blank')}
                >
                  Apply Now
                  <TrendingUp className="ml-2 w-5 h-5" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg rounded-full backdrop-blur-sm"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Words of Wisdom section */}
        <section className="py-20 bg-gradient-to-r from-gray-50 to-blue-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-display font-bold mb-4 text-gray-900">Words of Wisdom</h2>
                <p className="text-lg text-gray-600">Insights from our Managing Director</p>
              </div>
              
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                <div className="flex flex-col lg:flex-row">
                  <div className="lg:w-1/3 bg-gradient-to-br from-blue-600 to-teal-600 p-8 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <img 
                          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face" 
                          alt="Managing Director" 
                          className="w-24 h-24 rounded-full object-cover"
                        />
                      </div>
                      <h3 className="text-white font-semibold text-lg mb-2">Managing Director</h3>
                      <p className="text-blue-100 text-sm">VentureLab Leadership</p>
                    </div>
                  </div>
                  
                  <div className="lg:w-2/3 p-8 lg:p-12">
                    <div className="relative">
                      <div className="text-6xl text-blue-200 absolute -top-4 -left-2">"</div>
                      <blockquote className="text-xl lg:text-2xl text-gray-700 leading-relaxed mb-6 pl-8">
                        Fantastic idea is one thing, converting this idea into a successful business requires a great deal more. A good business model, access to the right markets, adequate financing, the right contacts and the skills of the team determine success or failure for more than eighty per cent.
                      </blockquote>
                    </div>
                    
                    <div className="space-y-4 text-gray-700">
                      <p className="leading-relaxed">
                        Venture Lab Thapar exists to help entrepreneurs to fine-tune their skills. The Venture Lab Business Development Program was set up especially for this purpose. This is a one-year program in which entrepreneurs are equipped with the right set of tools to achieve ambitions.
                      </p>
                      <p className="leading-relaxed">
                        You receive training and will be coached, and experts are available to assist you in drawing up expansion plans. In addition, there will be a focus on personal development and teambuilding. Venture Lab develops your potential enabling you to prepare your business for national or international expansion.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced About the program */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-display font-bold mb-6 text-gray-900">About The Program</h2>
                <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                  It does not matter whether you are a student, staff member, have a start-up, a scale-up or have been an entrepreneur for a longer period of time. Venture Lab is available for entrepreneurs in the Punjab region with expansion plans.
                </p>
              </div>

              {/* Program Features Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                <div className="group p-6 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Globe className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-center mb-3 text-gray-900">International Networks</h3>
                  <p className="text-gray-600 text-center text-sm leading-relaxed">
                    Access to international networks and relations for global expansion opportunities
                  </p>
                </div>

                <div className="group p-6 rounded-xl bg-gradient-to-br from-teal-50 to-teal-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-teal-500 to-teal-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-center mb-3 text-gray-900">Team Development</h3>
                  <p className="text-gray-600 text-center text-sm leading-relaxed">
                    Personal and team development programs to enhance leadership and collaboration
                  </p>
                </div>

                <div className="group p-6 rounded-xl bg-gradient-to-br from-purple-50 to-purple-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-500 to-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Handshake className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-center mb-3 text-gray-900">Mentorship</h3>
                  <p className="text-gray-600 text-center text-sm leading-relaxed">
                    One-year individual coaching and business development program with expert guidance
                  </p>
                </div>

                <div className="group p-6 rounded-xl bg-gradient-to-br from-orange-50 to-orange-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-center mb-3 text-gray-900">Funding Access</h3>
                  <p className="text-gray-600 text-center text-sm leading-relaxed">
                    Connect with investors and access funding opportunities for business growth
                  </p>
                </div>

                <div className="group p-6 rounded-xl bg-gradient-to-br from-green-50 to-green-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Network className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-center mb-3 text-gray-900">Business Advisory</h3>
                  <p className="text-gray-600 text-center text-sm leading-relaxed">
                    Stimulating ecosystem of partner organizations and expert advisory services
                  </p>
                </div>

                <div className="group p-6 rounded-xl bg-gradient-to-br from-red-50 to-red-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-red-500 to-red-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Building className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-center mb-3 text-gray-900">Workspace & Resources</h3>
                  <p className="text-gray-600 text-center text-sm leading-relaxed">
                    Flexible workplaces, meeting rooms and access to research databases
                  </p>
                </div>
              </div>

              {/* Enhanced Program Flow */}
              <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8 lg:p-12">
                <h3 className="text-3xl font-bold text-center mb-12 text-gray-900">Program Flow</h3>
                <div className="relative">
                  {/* Desktop Timeline */}
                  <div className="hidden lg:block">
                    <div className="relative flex justify-between items-center">
                      <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-blue-300 to-teal-300 rounded-full"></div>
                      
                      {[
                        { step: 1, title: "Assessment", desc: "Selection process", icon: Target, color: "blue" },
                        { step: 2, title: "Business Modeling", desc: "Sustainable models", icon: Lightbulb, color: "teal" },
                        { step: 3, title: "Coaching", desc: "Training & mentoring", icon: Users, color: "purple" },
                        { step: 4, title: "Market Access", desc: "Networks & partners", icon: Globe, color: "orange" },
                        { step: 5, title: "Funding", desc: "Investment support", icon: TrendingUp, color: "green" }
                      ].map((item, index) => (
                        <div key={index} className="relative flex flex-col items-center z-10">
                          <div className={`w-16 h-16 rounded-full bg-gradient-to-r from-${item.color}-500 to-${item.color}-600 flex items-center justify-center mb-4 shadow-lg hover:scale-110 transition-transform duration-300`}>
                            <item.icon className="w-8 h-8 text-white" />
                          </div>
                          <div className="bg-white rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow duration-300 min-w-[160px]">
                            <div className="text-center">
                              <div className={`text-xs font-bold text-${item.color}-600 mb-1`}>STEP {item.step}</div>
                              <h4 className="font-bold text-gray-900 mb-1">{item.title}</h4>
                              <p className="text-xs text-gray-600">{item.desc}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Mobile Timeline */}
                  <div className="lg:hidden space-y-6">
                    {[
                      { step: 1, title: "Assessment for Selection", desc: "Evaluating entrepreneurs and business ideas for program fit", icon: Target },
                      { step: 2, title: "Business Modeling", desc: "Building and refining sustainable business models", icon: Lightbulb },
                      { step: 3, title: "Coaching & Training", desc: "Intensive coaching, strategy development, mentoring and team building", icon: Users },
                      { step: 4, title: "Access to Markets", desc: "Connecting with networks, partners and potential customers", icon: Globe },
                      { step: 5, title: "Access to Funding", desc: "Support for securing investment and financial resources", icon: TrendingUp }
                    ].map((item, index) => (
                      <div key={index} className="flex items-start space-x-4 group">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-teal-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                          {item.step}
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-lg flex-1 group-hover:shadow-xl transition-shadow duration-300">
                          <h4 className="font-bold text-gray-900 mb-2 flex items-center">
                            <item.icon className="w-5 h-5 mr-2 text-blue-600" />
                            {item.title}
                          </h4>
                          <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <Tabs defaultValue="coaching" className="mt-16">
                <TabsList className="grid w-full grid-cols-2 md:grid-cols-3">
                  <TabsTrigger value="coaching">Coaching</TabsTrigger>
                  <TabsTrigger value="value">Value Creation</TabsTrigger>
                  <TabsTrigger value="faq">FAQ</TabsTrigger>
                </TabsList>
                
                <TabsContent value="coaching" className="pt-8">
                  
                  <div className="flex flex-col md:flex-row gap-8 items-start">
                    <div className="md:w-1/2">
                      <h3 className="text-xl font-semibold mb-4">A Personal Coach</h3>
                      <p className="text-gray-700 mb-4">
                        The personal coach has a central role in the Venture Lab program. A personal coach will be available for each participant for intensive coaching for a year.
                      </p>
                      <p className="text-gray-700 mb-4">
                        In addition, the participants can use expert coaching to gain more in-depth knowledge. The expert coaches provide expert coaching surrounding knowledge-intensive subjects including patents and legal or financial affairs.
                      </p>
                      <h3 className="text-xl font-semibold mb-4 mt-6">Venture Lab Coaching</h3>
                      <p className="text-gray-700 mb-4">
                        The entrepreneur and the coach jointly assess which training courses are useful, taking into consideration the personal and business needs of participant. The coach guides the entrepreneur towards Venture Lab meetings where they can broaden and deepen their knowledge and increase their network and approach investors.
                      </p>
                      <div className="mt-4 grid grid-cols-2 gap-4">
                        <div className="bg-teal-50 p-4 rounded-lg border border-teal-100">
                          <div className="flex items-center mb-2">
                            <Clock className="text-teal-600 mr-2" size={20} />
                            <span className="font-medium">48 Hours</span>
                          </div>
                          <p className="text-sm text-gray-600">Intensive coaching by a personal coach</p>
                        </div>
                        <div className="bg-teal-50 p-4 rounded-lg border border-teal-100">
                          <div className="flex items-center mb-2">
                            <ChartBar className="text-teal-600 mr-2" size={20} />
                            <span className="font-medium">Quarterly Monitoring</span>
                          </div>
                          <p className="text-sm text-gray-600">Progress via Business Panel presentations</p>
                        </div>
                      </div>
                    </div>
                    <div className="md:w-1/2">
                      <div className="rounded-lg overflow-hidden">
                        <img 
                          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                          alt="Coaching session" 
                          className="w-full h-auto"
                        />
                      </div>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="value" className="pt-8">
                  
                  <h3 className="text-xl font-semibold mb-4">Organizational Capital Framework</h3>
                  <p className="text-gray-700 mb-6">For accelerated business growth through strategic capital development</p>
                  
                  <div className="flex justify-center mb-6">
                    <img 
                      src="/lovable-uploads/435cd590-d5db-4afc-b706-94875c512b17.png" 
                      alt="Organizational Capital Framework showing Strategic, Economic, Cultural and Social Capital interconnected through Opportunity Recognition, Preparation and Exploitation" 
                      className="max-w-full h-auto rounded-lg shadow-lg"
                    />
                  </div>
                </TabsContent>
                
                <TabsContent value="faq" className="pt-8">
                  
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>Who can apply to the VentureLab Program?</AccordionTrigger>
                      <AccordionContent>
                        Students, staff members, startups, scale-ups, or established entrepreneurs in the Punjab region with expansion plans can apply. The program is designed to support entrepreneurs at any stage of their journey.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger>How long is the VentureLab Program?</AccordionTrigger>
                      <AccordionContent>
                        The VentureLab Program is a comprehensive one-year program that provides intensive coaching, training, and support for entrepreneurs.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                      <AccordionTrigger>What kind of support will I receive?</AccordionTrigger>
                      <AccordionContent>
                        You will receive personal coaching (48 hours), expert coaching for specialized subjects, access to international networks, workspace facilities if needed, and support in developing your business model and strategy.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                      <AccordionTrigger>Is there any fee for the program?</AccordionTrigger>
                      <AccordionContent>
                        Please contact the VentureLab team for details about program fees and potential scholarships or subsidies that may be available to qualified applicants.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-5">
                      <AccordionTrigger>What happens after the program ends?</AccordionTrigger>
                      <AccordionContent>
                        After completing the program, you will join the VentureLab alumni network, which provides ongoing access to resources, events, and potential investors. The program aims to prepare your business for national or international expansion.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </TabsContent>
              </Tabs>

              {/* Enhanced Call to action */}
              <div className="mt-20 bg-gradient-to-r from-blue-600 to-teal-600 rounded-2xl p-8 lg:p-12 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
                <div className="relative z-10">
                  <h3 className="text-3xl lg:text-4xl font-bold mb-4 text-white">Ready to Scale Your Business?</h3>
                  <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
                    Join our comprehensive one-year program and unlock your entrepreneurial potential with expert guidance, 
                    funding access, and a thriving network of innovators.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button 
                      size="lg" 
                      className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                      onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSf9RnajMtd43Pj3-XxbSnN5Gc8Ze93a1XkOvrcb9WQ5HG17qQ/viewform', '_blank')}
                    >
                      Apply Now
                      <Award className="ml-2 w-5 h-5" />
                    </Button>
                    <Button 
                      variant="outline" 
                      size="lg" 
                      className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg rounded-full backdrop-blur-sm"
                    >
                      Download Brochure
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default VentureLabProgram;
