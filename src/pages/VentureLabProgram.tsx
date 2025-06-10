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
  DollarSign,
  Target,
  TrendingUp,
  Award,
  Lightbulb,
  CheckCircle
} from "lucide-react";

const VentureLabProgram = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Breadcrumb navigation */}
        <ProgramsBreadcrumb currentProgram="VentureLab Program" />

        {/* Hero Section with Professional Gradient */}
        <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-20 w-32 h-32 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-20 w-40 h-40 bg-teal-300 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-blue-300 rounded-full blur-3xl"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full mb-6 border border-white/20">
                <span className="flex items-center text-sm">
                  <Award className="w-4 h-4 mr-2" />
                  Thapar Institute of Engineering & Technology
                </span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 text-white leading-tight">
                VentureLab Program
              </h1>
              <div className="w-24 h-1 bg-teal-400 mx-auto mb-6"></div>
              
              <p className="text-xl md:text-2xl text-blue-100 mb-4 font-medium">
                Launch your thriving business in a year
              </p>
              <p className="text-lg text-blue-200 mb-10 max-w-2xl mx-auto leading-relaxed">
                Transform your innovative ideas into successful ventures with comprehensive mentorship, strategic funding, and expert guidance
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-teal-500 hover:bg-teal-600 text-white rounded-full px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                  onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSf9RnajMtd43Pj3-XxbSnN5Gc8Ze93a1XkOvrcb9WQ5HG17qQ/viewform', '_blank')}
                >
                  Apply Now
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white/30 text-white hover:bg-white/10 rounded-full px-8 py-4 text-lg backdrop-blur-sm"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Words of Wisdom section - Enhanced with Speaker Image */}
        <section className="py-16 bg-gradient-to-r from-gray-50 to-blue-50">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-gray-900">Words of Wisdom</h2>
                <div className="w-20 h-1 bg-teal-500 mx-auto"></div>
              </div>
              
              <Card className="bg-white shadow-xl border-0 overflow-hidden">
                <CardContent className="p-0">
                  <div className="grid md:grid-cols-3 gap-0">
                    {/* Speaker Image */}
                    <div className="md:col-span-1 bg-gradient-to-br from-blue-600 to-teal-600 p-8 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-32 h-32 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center backdrop-blur-sm">
                          <img 
                            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
                            alt="Managing Director"
                            className="w-28 h-28 rounded-full object-cover border-4 border-white/30"
                          />
                        </div>
                        <h3 className="text-white font-semibold text-lg">Managing Director</h3>
                        <p className="text-blue-100 text-sm">VentureLab Thapar</p>
                      </div>
                    </div>
                    
                    {/* Quote Content */}
                    <div className="md:col-span-2 p-8 md:p-12">
                      <div className="relative">
                        <div className="text-6xl text-teal-500 font-serif absolute -top-4 -left-4 opacity-50">"</div>
                        <blockquote className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6 relative z-10 italic">
                          Fantastic idea is one thing, converting this idea into a successful business requires a great deal more. A good business model, access to the right markets, adequate financing, the right contacts and the skills of the team determine success or failure for more than eighty per cent.
                        </blockquote>
                        <div className="text-6xl text-teal-500 font-serif absolute -bottom-8 -right-4 opacity-50 rotate-180">"</div>
                      </div>
                      
                      <div className="space-y-4 text-gray-700 leading-relaxed">
                        <p>
                          Venture Lab Thapar exists to help entrepreneurs to fine-tune their skills. The Venture Lab Business Development Program was set up especially for this purpose. This is a one-year program in which entrepreneurs are equipped with the right set of tools to achieve ambitions.
                        </p>
                        <p>
                          You receive training and will be coached, and experts are available to assist you in drawing up expansion plans. In addition, there will be a focus on personal development and teambuilding. Venture Lab develops your potential enabling you to prepare your business for national or international expansion.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* About the program - Enhanced with Colorful Icons Grid */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                {/* Left: Program Description */}
                <div>
                  <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-gray-900">About The Program</h2>
                  <div className="w-20 h-1 bg-teal-500 mb-8"></div>
                  
                  <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                    <p>
                      It does not matter whether you are a student, staff member, have a start-up, a scale-up or have been an entrepreneur for a longer period of time. Venture Lab is available for entrepreneurs in the Punjab region with expansion plans.
                    </p>
                    <p>
                      Venture Lab offers individual support to managing directors and business developers or at team level, to groups or departments within the organization.
                    </p>
                  </div>
                  
                  <div className="mt-8">
                    <Button 
                      size="lg" 
                      className="bg-teal-600 hover:bg-teal-700 text-white rounded-full px-8"
                      onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSf9RnajMtd43Pj3-XxbSnN5Gc8Ze93a1XkOvrcb9WQ5HG17qQ/viewform', '_blank')}
                    >
                      Join the Program
                    </Button>
                  </div>
                </div>
                
                {/* Right: Program Features with Colorful Icons */}
                <div>
                  <h3 className="text-2xl font-bold mb-8 text-gray-900">Program Features</h3>
                  <div className="grid grid-cols-2 gap-6">
                    
                    <div className="group hover:transform hover:scale-105 transition-all duration-300">
                      <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl border border-blue-200 hover:shadow-lg transition-shadow">
                        <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 shadow-md">
                          <Users className="w-7 h-7 text-white" />
                        </div>
                        <h4 className="font-semibold text-blue-900 mb-2">Expert Mentorship</h4>
                        <p className="text-sm text-blue-700">Personal and team development guidance</p>
                      </div>
                    </div>
                    
                    <div className="group hover:transform hover:scale-105 transition-all duration-300">
                      <div className="bg-gradient-to-br from-green-50 to-emerald-100 p-6 rounded-2xl border border-green-200 hover:shadow-lg transition-shadow">
                        <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mb-4 shadow-md">
                          <DollarSign className="w-7 h-7 text-white" />
                        </div>
                        <h4 className="font-semibold text-green-900 mb-2">Funding Access</h4>
                        <p className="text-sm text-green-700">Support for securing investment resources</p>
                      </div>
                    </div>
                    
                    <div className="group hover:transform hover:scale-105 transition-all duration-300">
                      <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-2xl border border-purple-200 hover:shadow-lg transition-shadow">
                        <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 shadow-md">
                          <TrendingUp className="w-7 h-7 text-white" />
                        </div>
                        <h4 className="font-semibold text-purple-900 mb-2">Business Advisory</h4>
                        <p className="text-sm text-purple-700">Strategic business development support</p>
                      </div>
                    </div>
                    
                    <div className="group hover:transform hover:scale-105 transition-all duration-300">
                      <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-2xl border border-orange-200 hover:shadow-lg transition-shadow">
                        <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-4 shadow-md">
                          <Globe className="w-7 h-7 text-white" />
                        </div>
                        <h4 className="font-semibold text-orange-900 mb-2">Global Networks</h4>
                        <p className="text-sm text-orange-700">Access to international connections</p>
                      </div>
                    </div>
                    
                    <div className="group hover:transform hover:scale-105 transition-all duration-300">
                      <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-6 rounded-2xl border border-teal-200 hover:shadow-lg transition-shadow">
                        <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center mb-4 shadow-md">
                          <Building className="w-7 h-7 text-white" />
                        </div>
                        <h4 className="font-semibold text-teal-900 mb-2">Co-working Space</h4>
                        <p className="text-sm text-teal-700">Flexible workplaces and meeting rooms</p>
                      </div>
                    </div>
                    
                    <div className="group hover:transform hover:scale-105 transition-all duration-300">
                      <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-6 rounded-2xl border border-pink-200 hover:shadow-lg transition-shadow">
                        <div className="w-14 h-14 bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl flex items-center justify-center mb-4 shadow-md">
                          <BookOpen className="w-7 h-7 text-white" />
                        </div>
                        <h4 className="font-semibold text-pink-900 mb-2">Specializations</h4>
                        <p className="text-sm text-pink-700">Energy, IT and health services focus</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Program Flow - Visual Stepper with Animation */}
        <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-gray-900">Program Flow</h2>
                <div className="w-20 h-1 bg-teal-500 mx-auto mb-6"></div>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  A structured 5-step approach to transform your business idea into a thriving venture
                </p>
              </div>
              
              <div className="relative">
                {/* Desktop: Horizontal Flow */}
                <div className="hidden lg:block">
                  <div className="flex items-center justify-between relative">
                    {/* Connection Line */}
                    <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-teal-300 to-green-400 transform -translate-y-1/2 z-0"></div>
                    
                    {/* Step 1 */}
                    <div className="relative z-10 text-center group">
                      <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mb-4 mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <Target className="w-8 h-8 text-white" />
                      </div>
                      <div className="bg-white p-4 rounded-lg shadow-md border border-blue-100 max-w-xs">
                        <h4 className="font-semibold text-blue-900 mb-2">Assessment</h4>
                        <p className="text-sm text-gray-600">Evaluating entrepreneurs and business ideas</p>
                      </div>
                    </div>
                    
                    {/* Step 2 */}
                    <div className="relative z-10 text-center group">
                      <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mb-4 mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <Lightbulb className="w-8 h-8 text-white" />
                      </div>
                      <div className="bg-white p-4 rounded-lg shadow-md border border-purple-100 max-w-xs">
                        <h4 className="font-semibold text-purple-900 mb-2">Business Modeling</h4>
                        <p className="text-sm text-gray-600">Building sustainable business models</p>
                      </div>
                    </div>
                    
                    {/* Step 3 */}
                    <div className="relative z-10 text-center group">
                      <div className="w-20 h-20 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full flex items-center justify-center mb-4 mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <GraduationCap className="w-8 h-8 text-white" />
                      </div>
                      <div className="bg-white p-4 rounded-lg shadow-md border border-teal-100 max-w-xs">
                        <h4 className="font-semibold text-teal-900 mb-2">Coaching & Training</h4>
                        <p className="text-sm text-gray-600">Intensive coaching and mentoring</p>
                      </div>
                    </div>
                    
                    {/* Step 4 */}
                    <div className="relative z-10 text-center group">
                      <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mb-4 mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <Network className="w-8 h-8 text-white" />
                      </div>
                      <div className="bg-white p-4 rounded-lg shadow-md border border-orange-100 max-w-xs">
                        <h4 className="font-semibold text-orange-900 mb-2">Market Access</h4>
                        <p className="text-sm text-gray-600">Connecting with networks and customers</p>
                      </div>
                    </div>
                    
                    {/* Step 5 */}
                    <div className="relative z-10 text-center group">
                      <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mb-4 mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <DollarSign className="w-8 h-8 text-white" />
                      </div>
                      <div className="bg-white p-4 rounded-lg shadow-md border border-green-100 max-w-xs">
                        <h4 className="font-semibold text-green-900 mb-2">Funding Access</h4>
                        <p className="text-sm text-gray-600">Securing investment and resources</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Mobile: Vertical Flow */}
                <div className="lg:hidden space-y-6">
                  {[
                    { icon: Target, title: "Assessment", desc: "Evaluating entrepreneurs and business ideas", color: "blue" },
                    { icon: Lightbulb, title: "Business Modeling", desc: "Building sustainable business models", color: "purple" },
                    { icon: GraduationCap, title: "Coaching & Training", desc: "Intensive coaching and mentoring", color: "teal" },
                    { icon: Network, title: "Market Access", desc: "Connecting with networks and customers", color: "orange" },
                    { icon: DollarSign, title: "Funding Access", desc: "Securing investment and resources", color: "green" }
                  ].map((step, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div className={`w-16 h-16 bg-gradient-to-br from-${step.color}-500 to-${step.color}-600 rounded-full flex items-center justify-center shadow-lg flex-shrink-0`}>
                        <step.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="bg-white p-4 rounded-lg shadow-md border flex-1">
                        <h4 className={`font-semibold text-${step.color}-900 mb-1`}>{step.title}</h4>
                        <p className="text-sm text-gray-600">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Existing Tabs Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Tabs defaultValue="coaching" className="mb-12">
                <TabsList className="grid w-full grid-cols-2 md:grid-cols-3">
                  <TabsTrigger value="coaching">Coaching</TabsTrigger>
                  <TabsTrigger value="value">Value Creation</TabsTrigger>
                  <TabsTrigger value="faq">FAQ</TabsTrigger>
                </TabsList>
                
                <TabsContent value="coaching" className="pt-4">
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
                
                <TabsContent value="value" className="pt-4">
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
                
                <TabsContent value="faq" className="pt-4">
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

              {/* Call to action */}
              <div className="bg-gradient-to-r from-teal-500 to-blue-600 rounded-2xl p-8 text-center text-white">
                <h3 className="text-2xl font-bold mb-4">Ready to Scale Your Business?</h3>
                <p className="text-lg mb-6 text-blue-100">Join our comprehensive one-year program and unlock your entrepreneurial potential</p>
                <Button 
                  size="lg" 
                  className="bg-white text-teal-600 hover:bg-gray-100 rounded-full px-8 py-4 font-semibold"
                  onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSf9RnajMtd43Pj3-XxbSnN5Gc8Ze93a1XkOvrcb9WQ5HG17qQ/viewform', '_blank')}
                >
                  Apply Now
                </Button>
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
