
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const CallToAction = () => {
  return (
    <Card className="bg-gradient-to-r from-blue-600 to-blue-700 text-white border-0 shadow-2xl mt-16">
      <CardContent className="p-12 text-center">
        <h3 className="text-3xl md:text-4xl font-bold mb-4">Ready to Apply?</h3>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
          Transform your innovative idea into a thriving business with government-backed funding support through SISFS.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-white text-blue-700 hover:bg-blue-50 rounded-full px-12 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
            onClick={() => window.open('https://seedfund.startupindia.gov.in/', '_blank')}
          >
            Apply Now →
          </Button>
          <Button 
            variant="outline"
            size="lg" 
            className="border-blue-200 text-blue-100 hover:bg-blue-600/50 rounded-full px-12 py-4 text-lg backdrop-blur-sm"
            onClick={() => window.open('https://seedfund.startupindia.gov.in/', '_blank')}
          >
            Learn More
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default CallToAction;
