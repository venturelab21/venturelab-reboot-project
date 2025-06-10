
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Users, Zap, Cog, Database } from "lucide-react";

const InvestmentThesisSection = () => {
  const sectors = [
    {
      icon: TrendingUp,
      title: "Early-stage VC & Strategy",
      description: "Supporting visionary entrepreneurs at the earliest stages with strategic guidance and capital."
    },
    {
      icon: Users,
      title: "Growth & Scaling",
      description: "Helping established startups navigate rapid growth phases and market expansion."
    },
    {
      icon: Zap,
      title: "Fintech & Enterprise",
      description: "Investing in financial technology and enterprise solutions that transform industries."
    },
    {
      icon: Cog,
      title: "Product & Operations",
      description: "Supporting companies with strong product-market fit and operational excellence."
    },
    {
      icon: Database,
      title: "Deep Tech & Research",
      description: "Backing breakthrough technologies and research-driven innovations."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        <div className="flex justify-center mb-3">
          <div className="w-20 h-1 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full mb-6 text-sm font-semibold tracking-wide uppercase">
            Investment Thesis
          </div>
          <h2 className="heading-xl text-gray-900 mb-6">
            Strategic Focus Areas
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            We invest in transformative startups across key sectors where technology meets opportunity, 
            providing capital, expertise, and networks to accelerate growth and market impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {sectors.map((sector, index) => {
            const IconComponent = sector.icon;
            return (
              <Card key={index} className="group bg-white border border-gray-200 hover:border-blue-200 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <CardContent className="p-8 text-center">
                  <div className="flex justify-center items-center mb-6">
                    <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center group-hover:bg-blue-100 transition-colors duration-300">
                      <IconComponent className="w-8 h-8 text-blue-600" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-200">
                    {sector.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {sector.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-50 to-teal-50 rounded-full border border-blue-100">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            <span className="text-blue-700 font-medium">
              Actively seeking innovative startups in these sectors
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestmentThesisSection;
