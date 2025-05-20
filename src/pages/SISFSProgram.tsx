
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/programs/sisfs/Breadcrumbs";
import ProgramHeader from "@/components/programs/sisfs/ProgramHeader";
import ProgramOverview from "@/components/programs/sisfs/ProgramOverview";

const SISFSProgram = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Breadcrumbs />
        <ProgramHeader />
        <ProgramOverview />
      </main>
      <Footer />
    </div>
  );
};

export default SISFSProgram;
