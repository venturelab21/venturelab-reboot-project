
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import MeityTideProgram from "./pages/MeityTideProgram";
import SISFSProgram from "./pages/SISFSProgram";
import VentureLabProgram from "./pages/VentureLabProgram";
import Portfolio from "./pages/Portfolio";
import KnowUs from "./pages/KnowUs";

// Create a QueryClient instance
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/programs/meity-tide" element={<MeityTideProgram />} />
          <Route path="/programs/sisfs" element={<SISFSProgram />} />
          <Route path="/programs/venture-lab" element={<VentureLabProgram />} />
          <Route path="/portfolio" element={<Portfolio />} />
          {/* About Us Routes */}
          <Route path="/about/know-us" element={<KnowUs />} />
          <Route path="/about/team" element={<NotFound />} />
          <Route path="/about/council" element={<NotFound />} />
          <Route path="/mentors" element={<NotFound />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
