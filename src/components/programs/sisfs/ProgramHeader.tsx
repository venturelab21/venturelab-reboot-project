
import { Link } from "react-router-dom";

const ProgramHeader = () => {
  return (
    <section className="py-12 bg-gradient-to-r from-blue-700 to-blue-500">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block bg-blue-200 text-blue-800 px-3 py-1 rounded-full mb-4 text-sm font-medium">Department for Promotion of Industry and Internal Trade</span>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 text-white">Startup India Seed Fund Scheme</h1>
          <p className="text-xl text-blue-100">Financial assistance for proof of concept, prototype development, product trials, market entry, and commercialization</p>
        </div>
      </div>
    </section>
  );
};

export default ProgramHeader;
