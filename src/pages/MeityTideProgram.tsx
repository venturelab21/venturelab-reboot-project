
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const MeityTideProgram = () => {
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
                  <BreadcrumbPage>MeitY TIDE 2.0</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div>

        {/* Program header */}
        <section className="py-12 bg-gradient-to-r from-blue-900 to-blue-700">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-block bg-blue-200 text-blue-800 px-3 py-1 rounded-full mb-4 text-sm font-medium">Ministry of Electronics & IT</span>
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 text-white">MeitY TIDE 2.0 Program</h1>
              <p className="text-xl text-blue-100">Supporting technology entrepreneurs building solutions for tomorrow</p>
            </div>
          </div>
        </section>

        {/* About the scheme */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-display font-bold mb-6">About The Scheme</h2>
              <p className="text-lg text-gray-700 mb-8">
                TIDE 2.0 scheme by the Ministry of Electronics & Information Technology (MeitY) aims to support technology 
                startups working in emerging technologies through financial and technical support. The scheme envisions 
                creating a holistic ecosystem to support technology startups and incubation centres through identifying 
                and creating necessary linkages. The Scheme empowers 52+ incubators in India and supports nearly 2000 
                tech start-ups over 5 years.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-semibold mb-3">Program Highlights</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Financial support up to INR 7 lakhs for product development</span>
                      </li>
                      <li className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Technical mentorship from industry experts</span>
                      </li>
                      <li className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Access to cloud credits worth INR 5,000</span>
                      </li>
                      <li className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Co-working space facilities</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-semibold mb-3">Focus Areas</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Internet of Things (IoT)</span>
                      </li>
                      <li className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Artificial Intelligence & Machine Learning (AI-ML)</span>
                      </li>
                      <li className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Blockchain</span>
                      </li>
                      <li className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>E-mobility</span>
                      </li>
                      <li className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Smart Infrastructure</span>
                      </li>
                      <li className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>CleanTech & HealthTech</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <Tabs defaultValue="eligibility" className="mb-12">
                <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
                  <TabsTrigger value="eligibility">Eligibility</TabsTrigger>
                  <TabsTrigger value="benefits">Benefits</TabsTrigger>
                  <TabsTrigger value="process">Application</TabsTrigger>
                  <TabsTrigger value="faq">FAQ</TabsTrigger>
                </TabsList>
                
                <TabsContent value="eligibility" className="pt-4">
                  <h3 className="text-xl font-semibold mb-4">Who Can Apply</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="border border-gray-200 rounded-lg p-5">
                      <h4 className="font-medium text-red-500 mb-2">Expert Innovator</h4>
                      <p className="text-gray-700 text-sm">You are working full-time on developing the solution and have the required expertise or relevant experience or know-how for the same.</p>
                    </div>
                    <div className="border border-gray-200 rounded-lg p-5">
                      <h4 className="font-medium text-red-500 mb-2">Revolutionary Solutions</h4>
                      <p className="text-gray-700 text-sm">The product/solution being developed is catering to any of the focus areas mentioned above.</p>
                    </div>
                    <div className="border border-gray-200 rounded-lg p-5">
                      <h4 className="font-medium text-red-500 mb-2">Igniting Innovation from India</h4>
                      <p className="text-gray-700 text-sm">Your startup is/will be registered in India.</p>
                    </div>
                    <div className="border border-gray-200 rounded-lg p-5">
                      <h4 className="font-medium text-red-500 mb-2">Tide 2.0 Untapped</h4>
                      <p className="text-gray-700 text-sm">You or your startup have not availed any support from Tide 2.0 scheme in the past.</p>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="benefits" className="pt-4">
                  <h3 className="text-xl font-semibold mb-4">What We Offer</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="border border-gray-200 rounded-lg p-5">
                      <h4 className="font-medium text-red-500 mb-2">EIR Grant</h4>
                      <p className="text-gray-700 text-sm">INR 4 Lakhs of prototype validation and development for EIR (Entrepreneur-in-Residence).</p>
                    </div>
                    <div className="border border-gray-200 rounded-lg p-5">
                      <h4 className="font-medium text-red-500 mb-2">Product Development Boost</h4>
                      <p className="text-gray-700 text-sm">INR 7 Lakhs of product development support to startups.</p>
                    </div>
                    <div className="border border-gray-200 rounded-lg p-5">
                      <h4 className="font-medium text-red-500 mb-2">Tailored Support</h4>
                      <p className="text-gray-700 text-sm">Customised hand-holding and problem resolving portfolio support for 6 months.</p>
                    </div>
                    <div className="border border-gray-200 rounded-lg p-5">
                      <h4 className="font-medium text-red-500 mb-2">Co-Work Oasis</h4>
                      <p className="text-gray-700 text-sm">Access to co-working space and related services if based out of Ahmedabad.</p>
                    </div>
                    <div className="border border-gray-200 rounded-lg p-5 md:col-span-2">
                      <h4 className="font-medium text-red-500 mb-2">Cloud Credit Boost</h4>
                      <p className="text-gray-700 text-sm">Access to service partners for cloud credit support worth ₹5,000.</p>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="process" className="pt-4">
                  <h3 className="text-xl font-semibold mb-4">Application Process</h3>
                  <ol className="relative border-l border-gray-200 ml-3">
                    <li className="mb-10 ml-6">
                      <span className="absolute flex items-center justify-center w-8 h-8 bg-blue-200 rounded-full -left-4 ring-4 ring-white">
                        <span className="text-blue-800 font-bold">1</span>
                      </span>
                      <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900">Submit Application</h3>
                      <p className="mb-2 text-base font-normal text-gray-600">Complete the online application form with your startup details and proposed solution.</p>
                    </li>
                    <li className="mb-10 ml-6">
                      <span className="absolute flex items-center justify-center w-8 h-8 bg-blue-200 rounded-full -left-4 ring-4 ring-white">
                        <span className="text-blue-800 font-bold">2</span>
                      </span>
                      <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900">Screening & Shortlisting</h3>
                      <p className="mb-2 text-base font-normal text-gray-600">Applications will be reviewed and shortlisted based on innovation, market potential, and team capability.</p>
                    </li>
                    <li className="mb-10 ml-6">
                      <span className="absolute flex items-center justify-center w-8 h-8 bg-blue-200 rounded-full -left-4 ring-4 ring-white">
                        <span className="text-blue-800 font-bold">3</span>
                      </span>
                      <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900">Pitch Presentation</h3>
                      <p className="mb-2 text-base font-normal text-gray-600">Shortlisted startups will present their ideas to an expert panel of judges.</p>
                    </li>
                    <li className="ml-6">
                      <span className="absolute flex items-center justify-center w-8 h-8 bg-blue-200 rounded-full -left-4 ring-4 ring-white">
                        <span className="text-blue-800 font-bold">4</span>
                      </span>
                      <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900">Selection & Onboarding</h3>
                      <p className="mb-2 text-base font-normal text-gray-600">Selected startups will be onboarded to the program and begin receiving support.</p>
                    </li>
                  </ol>
                </TabsContent>
                
                <TabsContent value="faq" className="pt-4">
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>What kind of startups does MeitY TIDE 2.0 support?</AccordionTrigger>
                      <AccordionContent>
                        MeitY TIDE 2.0 supports technology startups working in emerging areas such as IoT, AI/ML, Blockchain, Smart Infrastructure, CleanTech, HealthTech, and E-mobility.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger>What stage should my startup be in to apply?</AccordionTrigger>
                      <AccordionContent>
                        The program is ideal for early-stage startups that have a minimum viable product or proof of concept and are looking for support to develop and scale their solution.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                      <AccordionTrigger>Is there any equity dilution involved?</AccordionTrigger>
                      <AccordionContent>
                        No, the financial support provided under MeitY TIDE 2.0 is grant-based and does not involve equity dilution.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                      <AccordionTrigger>How long is the program duration?</AccordionTrigger>
                      <AccordionContent>
                        The program typically provides support for a period of 6 months, which may be extended based on performance and requirements.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-5">
                      <AccordionTrigger>Can I apply if my startup is not yet registered?</AccordionTrigger>
                      <AccordionContent>
                        You can apply with your idea, but if selected, you will need to register your startup before receiving any financial support.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </TabsContent>
              </Tabs>

              {/* Call to action */}
              <div className="bg-blue-50 rounded-xl p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Ready to Apply?</h3>
                <p className="text-lg mb-6">Join 2000+ startups being supported by MeitY TIDE 2.0 across India</p>
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 rounded-full">
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

export default MeityTideProgram;
