import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FileText, Calendar, DollarSign, ArrowRight, Info } from "lucide-react";

const SISFSProgram = () => {
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
                  <BreadcrumbPage>SISFS</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div>

        {/* Program header */}
        <section className="py-12 bg-gradient-to-r from-blue-700 to-blue-500">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-block bg-blue-200 text-blue-800 px-3 py-1 rounded-full mb-4 text-sm font-medium">Department for Promotion of Industry and Internal Trade</span>
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 text-white">Startup India Seed Fund Scheme</h1>
              <p className="text-xl text-blue-100">Financial assistance for proof of concept, prototype development, product trials, market entry, and commercialization</p>
            </div>
          </div>
        </section>

        {/* About the scheme */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-display font-bold mb-6">Overview</h2>
              <p className="text-lg text-gray-700 mb-8">
                Startup India Seed Fund Scheme promoted by DPIIT aims to provide Financial assistance to startups for proof of concept, prototype development, product
                trials, market entry and commercialization. This support will enable these startups to graduate to a level where they will become ready for venture capital investments.
              </p>

              {/* Focus Areas Card with icons */}
              <div className="mb-12">
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-semibold mb-5">Offerings</h3>
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="flex items-center p-6 border border-gray-200 rounded-lg">
                        <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mr-4">
                          <FileText size={24} />
                        </div>
                        <div>
                          <h4 className="font-medium text-lg mb-1">Up to Rs. 20 Lakhs</h4>
                          <p className="text-gray-600 text-sm">Funding support for validation of Proof of Concept, prototype development, or product trials</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center p-6 border border-gray-200 rounded-lg">
                        <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mr-4">
                          <FileText size={24} />
                        </div>
                        <div>
                          <h4 className="font-medium text-lg mb-1">Up to Rs. 50 Lakhs</h4>
                          <p className="text-gray-600 text-sm">Investment for market entry, commercialization, and scaling through convertible instruments</p>
                        </div>
                      </div>
                    </div>
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
                      <div className="flex items-center mb-2">
                        <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-3">
                          <FileText size={20} />
                        </div>
                        <h4 className="font-medium text-blue-600">DPIIT Recognition</h4>
                      </div>
                      <p className="text-gray-700 text-sm">Startup must have DPIIT recognition at the time of application.</p>
                    </div>
                    
                    <div className="border border-gray-200 rounded-lg p-5">
                      <div className="flex items-center mb-2">
                        <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-3">
                          <Calendar size={20} />
                        </div>
                        <h4 className="font-medium text-blue-600">Incorporation Period</h4>
                      </div>
                      <p className="text-gray-700 text-sm">Startup should not be more than 2 years old at the time of application submission.</p>
                    </div>
                    
                    <div className="border border-gray-200 rounded-lg p-5">
                      <div className="flex items-center mb-2">
                        <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-3">
                          <DollarSign size={20} />
                        </div>
                        <h4 className="font-medium text-blue-600">Previous Funding</h4>
                      </div>
                      <p className="text-gray-700 text-sm">Startup should not have received more than Rs. 10 lakhs of monetary support from Government.</p>
                    </div>
                    
                    <div className="border border-gray-200 rounded-lg p-5">
                      <div className="flex items-center mb-2">
                        <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-3">
                          <Info size={20} />
                        </div>
                        <h4 className="font-medium text-blue-600">Promoter Majority</h4>
                      </div>
                      <p className="text-gray-700 text-sm">Indian promoters must hold at least 51% shareholding at the time of application.</p>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="benefits" className="pt-4">
                  <h3 className="text-xl font-semibold mb-4">Program Benefits</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="border border-gray-200 rounded-lg p-5">
                      <div className="flex items-center mb-2">
                        <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-3">
                          <DollarSign size={20} />
                        </div>
                        <h4 className="font-medium text-blue-600">Seed Capital</h4>
                      </div>
                      <p className="text-gray-700 text-sm">Financial assistance to enable proof of concept, prototype development and product trials.</p>
                    </div>
                    
                    <div className="border border-gray-200 rounded-lg p-5">
                      <div className="flex items-center mb-2">
                        <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-3">
                          <ArrowRight size={20} />
                        </div>
                        <h4 className="font-medium text-blue-600">Market Launch Support</h4>
                      </div>
                      <p className="text-gray-700 text-sm">Funding for market entry, commercialization, and business scale up.</p>
                    </div>
                    
                    <div className="border border-gray-200 rounded-lg p-5">
                      <div className="flex items-center mb-2">
                        <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-3">
                          <FileText size={20} />
                        </div>
                        <h4 className="font-medium text-blue-600">Mentorship</h4>
                      </div>
                      <p className="text-gray-700 text-sm">Expert guidance and mentoring from industry professionals and successful entrepreneurs.</p>
                    </div>
                    
                    <div className="border border-gray-200 rounded-lg p-5">
                      <div className="flex items-center mb-2">
                        <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-3">
                          <Info size={20} />
                        </div>
                        <h4 className="font-medium text-blue-600">Incubation Support</h4>
                      </div>
                      <p className="text-gray-700 text-sm">Access to infrastructure, networking opportunities and business development support.</p>
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
                      <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900">Incubator Selection</h3>
                      <p className="mb-2 text-base font-normal text-gray-600">Apply through a SISFS-approved incubator in your region or sector.</p>
                    </li>
                    <li className="mb-10 ml-6">
                      <span className="absolute flex items-center justify-center w-8 h-8 bg-blue-200 rounded-full -left-4 ring-4 ring-white">
                        <span className="text-blue-800 font-bold">2</span>
                      </span>
                      <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900">Evaluation by Incubator</h3>
                      <p className="mb-2 text-base font-normal text-gray-600">Your startup will be evaluated based on innovation, market potential, and team capability.</p>
                    </li>
                    <li className="mb-10 ml-6">
                      <span className="absolute flex items-center justify-center w-8 h-8 bg-blue-200 rounded-full -left-4 ring-4 ring-white">
                        <span className="text-blue-800 font-bold">3</span>
                      </span>
                      <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900">Funding Approval</h3>
                      <p className="mb-2 text-base font-normal text-gray-600">If selected, you'll receive the approved funding in milestone-based tranches.</p>
                    </li>
                    <li className="ml-6">
                      <span className="absolute flex items-center justify-center w-8 h-8 bg-blue-200 rounded-full -left-4 ring-4 ring-white">
                        <span className="text-blue-800 font-bold">4</span>
                      </span>
                      <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900">Ongoing Support</h3>
                      <p className="mb-2 text-base font-normal text-gray-600">Receive mentoring, networking opportunities, and resources to help you succeed.</p>
                    </li>
                  </ol>
                </TabsContent>
                
                <TabsContent value="faq" className="pt-4">
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>What is the Startup India Seed Fund Scheme (SISFS)?</AccordionTrigger>
                      <AccordionContent>
                        SISFS is a Rs. 945 crore scheme aimed at providing financial assistance to startups for proof of concept, prototype development, product trials, market entry, and commercialization.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger>How much funding can a startup get under SISFS?</AccordionTrigger>
                      <AccordionContent>
                        Startups can receive up to Rs. 20 lakhs as grant for proof of concept and up to Rs. 50 lakhs of investment for market entry, commercialization, and scaling through convertible debentures or debt instruments.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                      <AccordionTrigger>Do I need to be part of an incubator to apply?</AccordionTrigger>
                      <AccordionContent>
                        Yes, startups need to apply through incubators approved under the SISFS scheme. The incubator will evaluate your application and recommend it to the Government if approved.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                      <AccordionTrigger>Is there any equity dilution involved?</AccordionTrigger>
                      <AccordionContent>
                        The initial proof of concept grant does not involve equity dilution. However, the market entry funding may be provided through convertible instruments, which could later convert to equity.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-5">
                      <AccordionTrigger>Is the scheme still open for applications?</AccordionTrigger>
                      <AccordionContent>
                        Currently, applications are closed for the SISFS program. Please check the official Startup India website for updates on future application windows.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </TabsContent>
              </Tabs>

              {/* Call to action */}
              <div className="bg-blue-50 rounded-xl p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Status: Application Open</h3>
                <Button size="lg" className="bg-blue-500 hover:bg-blue-600 rounded-full">
                  Application Open
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

export default SISFSProgram;
