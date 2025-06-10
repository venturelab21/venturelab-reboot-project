import React, { useState, useMemo } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Spotlight } from "@/components/ui/spotlight";
import { EnhancedCard } from "@/components/ui/enhanced-card";
import { FilterBar } from "@/components/ui/filter-bar";
import { CalendarDays, Users, Zap, Bell } from "lucide-react";
import { Link } from "react-router-dom";

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  category: string;
  description: string;
  image: string;
  registrationLink: string;
  featured?: boolean;
  attendees?: number;
}

const upcomingEvents: Event[] = [
  {
    id: 1,
    title: "Startup Pitch Competition 2024",
    date: "June 15, 2025",
    time: "10:00 AM - 2:00 PM",
    location: "Main Auditorium, Thapar University",
    category: "Competition",
    description: "Join us for an exciting startup pitch competition where aspiring entrepreneurs present their innovative business ideas to a panel of industry experts and investors. Win prizes worth ₹5 lakhs.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    registrationLink: "/register/pitch-competition",
    featured: true,
    attendees: 250
  },
  {
    id: 2,
    title: "AI & Innovation Workshop Series",
    date: "July 5, 2025",
    time: "2:00 PM - 5:00 PM",
    location: "VentureLab Innovation Hub",
    category: "Workshop",
    description: "A comprehensive hands-on workshop series designed to help entrepreneurs and students learn practical AI skills for bringing innovative ideas to market. Learn from industry experts.",
    image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    registrationLink: "/register/innovation-workshop",
    attendees: 150
  },
  {
    id: 3,
    title: "Annual Entrepreneurship Summit",
    date: "August 20-22, 2025",
    time: "9:00 AM - 6:00 PM",
    location: "Conference Center, Thapar University",
    category: "Conference",
    description: "A three-day summit featuring keynote speakers, panel discussions, and networking opportunities focused on entrepreneurship and innovation.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    registrationLink: "/register/summit"
  }
];

const pastEvents: Event[] = [
  {
    id: 4,
    title: "Fundraising Masterclass",
    date: "April 12, 2025",
    time: "3:00 PM - 5:00 PM",
    location: "Virtual (Zoom)",
    category: "Workshop",
    description: "An intensive masterclass on fundraising strategies for startups, led by successful entrepreneurs and venture capitalists.",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    registrationLink: ""
  },
  {
    id: 5,
    title: "Product Development Workshop",
    date: "March 8, 2025",
    time: "10:00 AM - 4:00 PM",
    location: "Engineering Block, Thapar University",
    category: "Workshop",
    description: "A comprehensive workshop covering the entire product development lifecycle from ideation to market launch.",
    image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    registrationLink: ""
  }
];

const Events = () => {
  const [activeTab, setActiveTab] = useState("upcoming");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  
  const categories = ["All", "Workshop", "Conference", "Competition", "Webinar", "Networking"];
  
  const currentEvents = activeTab === "upcoming" ? upcomingEvents : pastEvents;
  
  const filteredEvents = useMemo(() => {
    return currentEvents.filter(event => {
      const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                           event.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === "All" || event.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [currentEvents, searchTerm, selectedCategory]);

  const stats = [
    { label: "Events This Year", value: "25+", icon: CalendarDays },
    { label: "Total Attendees", value: "2000+", icon: Users },
    { label: "Expert Speakers", value: "50+", icon: Zap }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Enhanced Hero Section */}
        <section className="bg-gradient-to-br from-purple-50 via-blue-50 to-teal-50 py-24 relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <CalendarDays className="w-4 h-4" />
                Upcoming Events
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
                Events &
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600"> Workshops</span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Join our vibrant community of entrepreneurs, innovators, and industry leaders. 
                Participate in workshops, competitions, and networking events that accelerate your journey.
              </p>

              {/* Stats */}
              <div className="flex flex-wrap justify-center gap-8 mb-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center group">
                    <div className="flex items-center justify-center w-16 h-16 mx-auto mb-3 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full group-hover:scale-110 transition-transform duration-300">
                      <stat.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
                    <div className="text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <Spotlight className="from-purple-500/20 via-blue-500/10 to-transparent" size={400} />
        </section>

        {/* Enhanced Tabs */}
        <section className="bg-white border-b border-gray-100">
          <div className="container mx-auto px-4 py-6">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 bg-gray-100">
                <TabsTrigger value="upcoming" className="text-sm font-medium">
                  Upcoming Events
                </TabsTrigger>
                <TabsTrigger value="past" className="text-sm font-medium">
                  Past Events
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </section>

        {/* Filter Bar */}
        <FilterBar
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          viewMode={viewMode}
          onViewModeChange={setViewMode}
          resultCount={filteredEvents.length}
        />

        {/* Events Grid */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            {filteredEvents.length === 0 ? (
              <div className="text-center py-16">
                <div className="text-gray-400 text-6xl mb-4">📅</div>
                <h3 className="text-xl font-semibold text-gray-600 mb-2">No events found</h3>
                <p className="text-gray-500">Try adjusting your search or filter criteria.</p>
              </div>
            ) : (
              <div className={`grid gap-8 ${
                viewMode === "list" 
                  ? "grid-cols-1" 
                  : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
              }`}>
                {filteredEvents.map((event) => (
                  <EnhancedCard
                    key={event.id}
                    title={event.title}
                    description={event.description}
                    image={event.image}
                    category={event.category}
                    date={event.date}
                    time={event.time}
                    location={event.location}
                    featured={event.featured}
                    type="event"
                    ctaText={activeTab === "upcoming" ? "Register Now" : "View Details"}
                    onClick={() => window.open(event.registrationLink, '_blank')}
                    className={viewMode === "list" ? "flex-row" : ""}
                  />
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <Bell className="w-16 h-16 text-white mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Never Miss an Event
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Subscribe to our newsletter and be the first to know about upcoming workshops, competitions, and networking events.
              </p>
              <div className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-1 px-6 py-3 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-full font-medium">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Events;
