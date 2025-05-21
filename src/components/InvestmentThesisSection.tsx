
import { Card, CardContent } from "@/components/ui/card";
import { Cube, Recycle, Activity, Factory, Health, Leaf } from "lucide-react";

const InvestmentThesisSection = () => {
  const investmentAreas = [
    {
      title: "FinTech",
      description: "Driving digital finance, embedded banking, and inclusive financial infrastructure",
      icon: <Cube className="h-12 w-12 text-blue-700" />,
    },
    {
      title: "CleanTech",
      description: "Powering sustainability through energy innovation, mobility, and circular models",
      icon: <Recycle className="h-12 w-12 text-blue-700" />,
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
      icon: <Health className="h-12 w-12 text-blue-700" />,
    },
    {
      title: "The Emerging Unknown",
      description: "Exploring moonshot ideas and deep-tech frontiers that defy categorization",
      icon: <Activity className="h-12 w-12 text-blue-700" />,
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-blue-700 font-medium mb-2">Our Investment Thesis</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">Where Innovation Meets Opportunity</h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            We invest at the pre-seed stage, partnering with visionary founders building technology-first products, 
            services, or processes that unlock scalable impact across consumer, enterprise, and healthcare sectors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {investmentAreas.map((area, index) => (
            <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="mb-4 p-3 rounded-full bg-blue-100/80">
                  {area.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{area.title}</h3>
                <p className="text-gray-600">{area.description}</p>
              </CardContent>
            </Card>
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
