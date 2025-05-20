
import ProgramOfferings from "./ProgramOfferings";
import ProgramTabs from "./ProgramTabs";
import CallToAction from "./CallToAction";

const ProgramOverview = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-display font-bold mb-6">Overview</h2>
          <p className="text-lg text-gray-700 mb-8">
            Startup India Seed Fund Scheme promoted by DPIIT aims to provide Financial assistance to startups for proof of concept, prototype development, product
            trials, market entry and commercialization. This support will enable these startups to graduate to a level where they will become ready for venture capital investments.
          </p>

          <ProgramOfferings />
          <ProgramTabs />
          <CallToAction />
        </div>
      </div>
    </section>
  );
};

export default ProgramOverview;
