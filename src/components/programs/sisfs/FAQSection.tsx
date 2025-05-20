
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQSection = () => {
  return (
    <>
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
            Currently, applications are open for the SISFS program. Please check the official Startup India website for updates on future application windows.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
};

export default FAQSection;
