
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Box, RecycleIcon, Leaf, Factory, Heart, TrendingUp } from "lucide-react";

const InvestmentThesisSection = () => {
  const investmentAreas = [
    {
      title: "FinTech",
      description: "Driving digital finance, embedded banking, and inclusive financial infrastructure",
      icon: <Box className="h-12 w-12 text-blue-700" />,
    },
    {
      title: "CleanTech",
      description: "Powering sustainability through energy innovation, mobility, and circular models",
      icon: <RecycleIcon className="h-12 w-12 text-blue-700" />,
    },
    {
      title: "Lifestyle",
      description: "Enhancing everyday life through wellness, learning, travel, productivity, and culture",
      icon: <Leaf className="h-12 w-12 text-blue-700" />,
    },
    {
      title: "Industry 4.0",
      description: "Enabling smart manufacturing, automation, IoT, and industrial intelligence",
      icon: <Factory className="h-12 w-12 text-blue-700" />,
    },
    {
      title: "HealthTech and Wellness",
      description: "Building platforms for preventive care, digital health, and longevity",
      icon: <Heart className="h-12 w-12 text-blue-700" />,
    },
    {
      title: "Moonshot Opportunity",
      description: "Exploring moonshot ideas and deep-tech frontiers that defy categorization",
      icon: <TrendingUp className="h-12 w-12 text-blue-700" />,
    },
  ];

  return (
    <section className="py-20 bg-white" id="investment-thesis">
      <div className="container mx-auto px-4">
        {/* Top section with heading and description */}
        <div className="mb-16">
          <p className="uppercase text-gray-600 font-medium tracking-wider text-sm mb-1">From First Belief to First Breakthrough</p>
          
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 lg:mb-0 font-display text-gray-900 lg:max-w-xl">
              Sector Focus
            </h2>
            <p className="text-gray-700 max-w-2xl lg:text-lg">
              We invest at the pre-seed stage in technology products, services, or processes across FinTech, CleanTech, HealthTech, Lifestyle, and Industry 4.0—and back moonshot innovations that challenge the status quo and reshape industries.
            </p>
          </div>
        </div>

        {/* Traditional grid for all investment areas */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-20">
          {investmentAreas.map((area, index) => (
            <div key={index} className="border p-6 flex flex-col items-center text-center">
              <div className="mb-5 text-blue-700">
                {area.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900">
                {area.title}
              </h3>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-700 max-w-3xl mx-auto">
            We back founders at the earliest stage—when conviction matters more than traction—and help
            turn early sparks into enduring companies.
          </p>
        </div>
      </div>
    </section>
  );
};

export default InvestmentThesisSection;
