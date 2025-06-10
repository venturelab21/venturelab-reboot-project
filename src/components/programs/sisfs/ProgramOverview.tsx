
import { Lightbulb, Target, TrendingUp } from "lucide-react";
import ProgramOfferings from "./ProgramOfferings";
import ProgramTabs from "./ProgramTabs";
import CallToAction from "./CallToAction";

const ProgramOverview = () => {
  return (
    <section id="program-overview" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Overview Section */}
          <div className="mb-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-gray-900">Overview</h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  The Startup India Seed Fund Scheme, promoted by DPIIT, aims to provide financial assistance to startups for proof of concept, prototype development, product trials, market entry, and commercialization.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  This support enables startups to graduate to a level where they become ready for venture capital investments, fostering innovation and entrepreneurship across India.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-blue-50 rounded-xl border border-blue-100 hover:shadow-md transition-all">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Lightbulb className="text-blue-600" size={32} />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Innovation</h3>
                  <p className="text-sm text-gray-600">Supporting breakthrough ideas</p>
                </div>
                
                <div className="text-center p-6 bg-green-50 rounded-xl border border-green-100 hover:shadow-md transition-all">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="text-green-600" size={32} />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Validation</h3>
                  <p className="text-sm text-gray-600">Proof of concept development</p>
                </div>
                
                <div className="text-center p-6 bg-purple-50 rounded-xl border border-purple-100 hover:shadow-md transition-all">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="text-purple-600" size={32} />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Growth</h3>
                  <p className="text-sm text-gray-600">Market entry & scaling</p>
                </div>
              </div>
            </div>
          </div>

          <ProgramOfferings />
          <ProgramTabs />
          <CallToAction />
        </div>
      </div>
    </section>
  );
};

export default ProgramOverview;
