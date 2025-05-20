
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@/components/ui/breadcrumb";
import { Spotlight } from "@/components/ui/spotlight";

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
          </div>
        </div>

        {/* About Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-display font-bold mb-6 text-blue-900">Our Story</h2>
              <div className="prose max-w-none">
                <p className="mb-4">
                  Venture Lab TIET (Registered as Science & Technology Entrepreneur's Park, TIET) was established as a joint venture between the National Science and Technology Entrepreneurship Development Board (NSTEDB), Department of Science and Technology (DST) and Thapar Institute of Engineering & Technology (TIET) in April 2005, with the vision to support innovation-driven startups and empower early-stage founders to build scalable and sustainable ventures.
                </p>
                <p className="mb-4">
                  We are strongly backed by the Meity Startup hub and Startup India to incubate technology-based start-ups focused on economic and social impacts.
                </p>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="/lovable-uploads/85776a30-8cf3-44c7-b7c1-8ffab94fb713.png" 
                alt="Venture Lab Thapar team" 
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="mt-16">
            <h2 className="text-3xl font-display font-bold mb-6 text-blue-900 text-center">Our Mission</h2>
            <div className="w-20 h-1 bg-blue-900 mx-auto mb-8"></div>
            <p className="text-lg text-center max-w-3xl mx-auto">
              To foster innovation and entrepreneurship by providing a supportive ecosystem for startups to grow and succeed, contributing to economic development and job creation.
            </p>
          </div>

          <div className="mt-16">
            <h2 className="text-3xl font-display font-bold mb-6 text-blue-900 text-center">Our Vision</h2>
            <div className="w-20 h-1 bg-blue-900 mx-auto mb-8"></div>
            <p className="text-lg text-center max-w-3xl mx-auto">
              To be a leading incubator that transforms innovative ideas into successful ventures, creating a vibrant entrepreneurial ecosystem that drives sustainable growth and positive social impact.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default KnowUs;
