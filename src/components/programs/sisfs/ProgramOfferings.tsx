
import { Banknote, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ProgramOfferings = () => {
  return (
    <div className="mb-16">
      <div className="text-center mb-12">
        <h3 className="text-3xl md:text-4xl font-display font-bold mb-4 text-gray-900">Program Offerings</h3>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Comprehensive funding support tailored to different stages of your startup journey
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8">
        <Card className="relative overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800 border-0 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <CardContent className="p-8 relative z-10">
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-16 h-16 bg-blue-500/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500/30 transition-colors">
                <Banknote className="text-blue-400" size={32} />
              </div>
              <div>
                <h4 className="text-2xl font-bold text-white mb-2">Up to ₹20 Lakhs</h4>
                <p className="text-blue-200 font-medium">Proof of Concept & Validation</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Funding support for validation of proof of concept, prototype development, product trials, and initial market testing to establish viability.
            </p>
          </CardContent>
        </Card>
        
        <Card className="relative overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800 border-0 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group">
          <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <CardContent className="p-8 relative z-10">
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-16 h-16 bg-green-500/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-green-500/30 transition-colors">
                <TrendingUp className="text-green-400" size={32} />
              </div>
              <div>
                <h4 className="text-2xl font-bold text-white mb-2">Up to ₹50 Lakhs</h4>
                <p className="text-green-200 font-medium">Market Entry & Scaling</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Investment for market entry, commercialization, and scaling through convertible debentures or debt instruments for growth acceleration.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ProgramOfferings;
