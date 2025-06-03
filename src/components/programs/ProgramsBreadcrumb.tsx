
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link, useNavigate } from "react-router-dom";

interface ProgramsBreadcrumbProps {
  currentProgram: string;
}

const ProgramsBreadcrumb = ({ currentProgram }: ProgramsBreadcrumbProps) => {
  const navigate = useNavigate();

  const handleProgramsClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('/');
    
    // Wait for navigation to complete, then scroll to programs section
    setTimeout(() => {
      const programsSection = document.getElementById('programs-section');
      if (programsSection) {
        programsSection.scrollIntoView({
          behavior: 'smooth'
        });
      }
    }, 100);
  };

  return (
    <div className="bg-gray-50 py-4">
      <div className="container mx-auto px-4">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <Link to="/" className="text-blue-600 hover:underline">Home</Link>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <a 
                href="#" 
                onClick={handleProgramsClick}
                className="text-blue-600 hover:underline cursor-pointer"
              >
                Programs
              </a>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{currentProgram}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </div>
  );
};

export default ProgramsBreadcrumb;
