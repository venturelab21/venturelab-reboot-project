
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import EligibilitySection from "./EligibilitySection";
import BenefitsSection from "./BenefitsSection";
import ApplicationProcess from "./ApplicationProcess";
import FAQSection from "./FAQSection";

const ProgramTabs = () => {
  return (
    <Tabs defaultValue="eligibility" className="mb-12">
      <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
        <TabsTrigger value="eligibility">Eligibility</TabsTrigger>
        <TabsTrigger value="benefits">Benefits</TabsTrigger>
        <TabsTrigger value="process">Application</TabsTrigger>
        <TabsTrigger value="faq">FAQ</TabsTrigger>
      </TabsList>
      
      <TabsContent value="eligibility" className="pt-4">
        <EligibilitySection />
      </TabsContent>
      
      <TabsContent value="benefits" className="pt-4">
        <BenefitsSection />
      </TabsContent>
      
      <TabsContent value="process" className="pt-4">
        <ApplicationProcess />
      </TabsContent>
      
      <TabsContent value="faq" className="pt-4">
        <FAQSection />
      </TabsContent>
    </Tabs>
  );
};

export default ProgramTabs;
