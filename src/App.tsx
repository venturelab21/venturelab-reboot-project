
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import MeityTideProgram from "./pages/MeityTideProgram";
import SISFSProgram from "./pages/SISFSProgram";
import VentureLabProgram from "./pages/VentureLabProgram";
import Portfolio from "./pages/Portfolio";
import KnowUs from "./pages/KnowUs";
import Events from "./pages/Events";
import MeetOurTeam from "./pages/MeetOurTeam";
import GoverningCouncil from "./pages/GoverningCouncil";
import Contact from "./pages/Contact";
import Careers from "./pages/Careers";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";

// Create a QueryClient instance
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <Toaster />
    <Sonner />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/programs/meity-tide" element={<MeityTideProgram />} />
        <Route path="/programs/sisfs" element={<SISFSProgram />} />
        <Route path="/programs/venture-lab" element={<VentureLabProgram />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/events" element={<Events />} />
        <Route path="/partners" element={<NotFound />} />
        {/* About Us Routes */}
        <Route path="/about/know-us" element={<KnowUs />} />
        <Route path="/about/team" element={<MeetOurTeam />} />
        <Route path="/about/council" element={<GoverningCouncil />} />
        <Route path="/mentors" element={<NotFound />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/careers" element={<Careers />} />
        {/* Blog Routes */}
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;
