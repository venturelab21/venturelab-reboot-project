
import { Button } from "@/components/ui/button";

const CallToAction = () => {
  return (
    <div className="bg-blue-50 rounded-xl p-8 text-center">
      <h3 className="text-2xl font-bold mb-4">Status: Application Open</h3>
      <Button 
        size="lg" 
        className="bg-blue-500 hover:bg-blue-600 rounded-full"
        onClick={() => window.open('https://seedfund.startupindia.gov.in/', '_blank')}
      >
        Application Open
      </Button>
    </div>
  );
};

export default CallToAction;
