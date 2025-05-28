
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
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
  Clock
} from "lucide-react";

const VentureLabProgram = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Breadcrumb navigation */}
        <div className="bg-gray-50 py-4">
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
                  <BreadcrumbPage>VentureLab Program</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div>

        {/* Program header */}
        <section className="py-12 bg-gradient-to-r from-teal-700 to-teal-500">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-block bg-teal-200 text-teal-800 px-3 py-1 rounded-full mb-4 text-sm font-medium">Thapar Institute of Engineering & Technology</span>
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 text-white">VentureLab Program</h1>
              <p className="text-xl text-teal-100">Launch your thriving business in a year with VentureLab's mentorship, network, skills, and funding support</p>
            </div>
          </div>
        </section>

        {/* Words of Wisdom section */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col gap-8">
                <div>
                  <h2 className="text-3xl font-display font-bold mb-6">Words of Wisdom from the MD</h2>
                  <blockquote className="italic text-lg text-gray-700 mb-6">
                    "Fantastic idea is one thing, converting this idea into a successful business requires a great deal more. A good business model, access to the right markets, adequate financing, the right contacts and the skills of the team determine success or failure for more than eighty per cent."
                  </blockquote>
                  <p className="text-gray-700 mb-4">
                    Venture Lab Thapar exists to help entrepreneurs to fine-tune their skills. The Venture Lab Business Development Program was set up especially for this purpose. This is a one-year program in which entrepreneurs are equipped with the right set of tools to achieve ambitions.
                  </p>
                  <p className="text-gray-700">
                    You receive training and will be coached, and experts are available to assist you in drawing up expansion plans. In addition, there will be a focus on personal development and teambuilding. Venture Lab develops your potential enabling you to prepare your business for national or international expansion.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About the program */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-display font-bold mb-6">About The Program</h2>
              <p className="text-lg text-gray-700 mb-8">
                It does not matter whether you are a student, staff member, have a start-up, a scale-up or have been an entrepreneur for a longer period of time. Venture Lab is available for entrepreneurs in the Punjab region with expansion plans. Venture Lab offers individual support to managing directors and business developers or at team level, to groups or departments within the organization.
              </p>

              {/* Program Offerings Card with icons */}
              <div className="mb-12">
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-semibold mb-5">Program Offerings</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="flex items-start">
                        <div className="h-10 w-10 rounded-full bg-teal-100 flex items-center justify-center text-teal-600 mr-3 flex-shrink-0">
                          <Globe size={20} />
                        </div>
                        <div>
                          <span className="font-medium">Access to international networks and relations</span>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="h-10 w-10 rounded-full bg-teal-100 flex items-center justify-center text-teal-600 mr-3 flex-shrink-0">
                          <Users size={20} />
                        </div>
                        <div>
                          <span className="font-medium">Personal and Team development</span>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="h-10 w-10 rounded-full bg-teal-100 flex items-center justify-center text-teal-600 mr-3 flex-shrink-0">
                          <GraduationCap size={20} />
                        </div>
                        <div>
                          <span className="font-medium">A One-Year Individual and Business Development Program</span>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="h-10 w-10 rounded-full bg-teal-100 flex items-center justify-center text-teal-600 mr-3 flex-shrink-0">
                          <Network size={20} />
                        </div>
                        <div>
                          <span className="font-medium">A stimulating and motivating ecosystem of partner organizations</span>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="h-10 w-10 rounded-full bg-teal-100 flex items-center justify-center text-teal-600 mr-3 flex-shrink-0">
                          <BookOpen size={20} />
                        </div>
                        <div>
                          <span className="font-medium">Specializations in energy, IT and health services</span>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="h-10 w-10 rounded-full bg-teal-100 flex items-center justify-center text-teal-600 mr-3 flex-shrink-0">
                          <Building size={20} />
                        </div>
                        <div>
                          <span className="font-medium">Flexible workplaces, meeting rooms and access to research databases</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Tabs defaultValue="approach" className="mb-12">
                <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
                  <TabsTrigger value="approach">Approach</TabsTrigger>
                  <TabsTrigger value="coaching">Coaching</TabsTrigger>
                  <TabsTrigger value="value">Value Creation</TabsTrigger>
                  <TabsTrigger value="faq">FAQ</TabsTrigger>
                </TabsList>
                
                <TabsContent value="approach" className="pt-4">
                  <h3 className="text-xl font-semibold mb-4">Program Flow</h3>
                  <div className="bg-gray-100 p-6 rounded-lg mb-6">
                    <h4 className="font-medium text-lg mb-4 text-center">How we do it</h4>
                    <div className="relative flex flex-col space-y-8">
                      <div className="flex items-center space-x-4">
                        <div className="w-16 h-16 bg-blue-600 text-white rounded flex items-center justify-center text-sm font-medium shrink-0">
                          Step 1
                        </div>
                        <div className="bg-white p-4 rounded shadow-sm flex-1">
                          <h5 className="font-medium mb-1">Assessment for Selection</h5>
                          <p className="text-sm text-gray-600">Evaluating entrepreneurs and business ideas for program fit</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-4">
                        <div className="w-16 h-16 bg-blue-600 text-white rounded flex items-center justify-center text-sm font-medium shrink-0">
                          Step 2
                        </div>
                        <div className="bg-white p-4 rounded shadow-sm flex-1">
                          <h5 className="font-medium mb-1">Business Modeling</h5>
                          <p className="text-sm text-gray-600">Building and refining sustainable business models</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-4">
                        <div className="w-16 h-16 bg-blue-600 text-white rounded flex items-center justify-center text-sm font-medium shrink-0">
                          Step 3
                        </div>
                        <div className="bg-white p-4 rounded shadow-sm flex-1">
                          <h5 className="font-medium mb-1">Coaching & Training</h5>
                          <p className="text-sm text-gray-600">Intensive coaching, strategy development, mentoring and team building</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-4">
                        <div className="w-16 h-16 bg-blue-600 text-white rounded flex items-center justify-center text-sm font-medium shrink-0">
                          Step 4
                        </div>
                        <div className="bg-white p-4 rounded shadow-sm flex-1">
                          <h5 className="font-medium mb-1">Access to Markets</h5>
                          <p className="text-sm text-gray-600">Connecting with networks, partners and potential customers</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-4">
                        <div className="w-16 h-16 bg-blue-600 text-white rounded flex items-center justify-center text-sm font-medium shrink-0">
                          Step 5
                        </div>
                        <div className="bg-white p-4 rounded shadow-sm flex-1">
                          <h5 className="font-medium mb-1">Access to Funding</h5>
                          <p className="text-sm text-gray-600">Support for securing investment and financial resources</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                
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
                  <h3 className="text-xl font-semibold mb-4">Value Creation Model</h3>
                  <p className="text-gray-700 mb-6">For accelerated business growth</p>
                  
                  <div className="flex justify-center mb-6">
                    <img 
                      src="/lovable-uploads/8e91c143-a821-4bf7-a67e-5dec7def2963.png" 
                      alt="Value Creation Model for accelerated business growth" 
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
              <div className="bg-teal-50 rounded-xl p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Ready to Scale Your Business?</h3>
                <p className="text-lg mb-6">Join our comprehensive one-year program and unlock your entrepreneurial potential</p>
                <Button 
                  size="lg" 
                  className="bg-teal-600 hover:bg-teal-700 rounded-full"
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
