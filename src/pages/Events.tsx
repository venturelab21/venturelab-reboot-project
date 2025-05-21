
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Spotlight } from "@/components/ui/spotlight";
import { CalendarDays, MapPin, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { AspectRatio } from "@/components/ui/aspect-ratio";

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
}

const upcomingEvents: Event[] = [
  {
    id: 1,
    title: "Startup Pitch Competition",
    date: "June 15, 2025",
    time: "10:00 AM - 2:00 PM",
    location: "Main Auditorium, Thapar University",
    category: "Competition",
    description: "Join us for an exciting startup pitch competition where aspiring entrepreneurs present their innovative business ideas to a panel of industry experts and investors.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    registrationLink: "/register/pitch-competition"
  },
  {
    id: 2,
    title: "Innovation Workshop Series",
    date: "July 5, 2025",
    time: "2:00 PM - 5:00 PM",
    location: "VentureLab Innovation Hub",
    category: "Workshop",
    description: "A hands-on workshop series designed to help entrepreneurs and students learn practical skills for bringing innovative ideas to market.",
    image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    registrationLink: "/register/innovation-workshop"
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
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  
  const categories = ["All", "Workshop", "Conference", "Competition", "Webinar"];
  
  const filterEvents = (events: Event[]) => {
    return events.filter(event => {
      const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                           event.description.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory = selectedCategory === "All" || event.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  };
  
  const filteredUpcomingEvents = filterEvents(upcomingEvents);
  const filteredPastEvents = filterEvents(pastEvents);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-blue-50 to-white py-20 relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex justify-center mb-2">
                <div className="w-20 h-1 bg-blue-500"></div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Events & Workshops</h1>
              <p className="text-lg text-gray-600 mb-8">
                Join us for exciting events, workshops, and networking opportunities to boost your entrepreneurial journey
              </p>
            </div>
          </div>
          <Spotlight 
            className="from-blue-500/20 via-blue-500/10 to-transparent" 
            size={300}
          />
        </section>

        {/* Filter Section */}
        <section className="py-10 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
              <div className="w-full md:w-1/3">
                <Input
                  type="text"
                  placeholder="Search events..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="bg-white"
                />
              </div>
              <div className="flex gap-2 flex-wrap">
                {categories.map((category) => (
                  <Badge
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    className="cursor-pointer"
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Events Listing Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="upcoming" className="w-full mb-8">
              <TabsList className="grid w-full md:w-[400px] grid-cols-2">
                <TabsTrigger value="upcoming">Upcoming Events</TabsTrigger>
                <TabsTrigger value="past">Past Events</TabsTrigger>
              </TabsList>
              
              {/* Upcoming Events Tab */}
              <TabsContent value="upcoming" className="mt-8">
                {filteredUpcomingEvents.length === 0 ? (
                  <div className="text-center py-16">
                    <p className="text-gray-500">No upcoming events found matching your criteria.</p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredUpcomingEvents.map((event) => (
                      <div key={event.id} className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-100 flex flex-col h-full transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
                        <div className="relative">
                          <AspectRatio ratio={16/9}>
                            <img 
                              src={event.image} 
                              alt={event.title} 
                              className="w-full h-full object-cover"
                            />
                          </AspectRatio>
                          <div className="absolute top-3 right-3">
                            <Badge>{event.category}</Badge>
                          </div>
                        </div>
                        <div className="p-6 flex-grow">
                          <h3 className="text-xl font-semibold mb-3">{event.title}</h3>
                          <div className="flex items-center text-gray-500 mb-2">
                            <CalendarDays size={16} className="mr-2" />
                            <span>{event.date}</span>
                          </div>
                          <div className="flex items-center text-gray-500 mb-2">
                            <Clock size={16} className="mr-2" />
                            <span>{event.time}</span>
                          </div>
                          <div className="flex items-center text-gray-500 mb-4">
                            <MapPin size={16} className="mr-2" />
                            <span>{event.location}</span>
                          </div>
                          <p className="text-gray-600 line-clamp-3 mb-6">{event.description}</p>
                        </div>
                        <div className="px-6 pb-6">
                          <Button className="w-full" asChild>
                            <Link to={event.registrationLink}>Register Now</Link>
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </TabsContent>
              
              {/* Past Events Tab */}
              <TabsContent value="past" className="mt-8">
                {filteredPastEvents.length === 0 ? (
                  <div className="text-center py-16">
                    <p className="text-gray-500">No past events found matching your criteria.</p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredPastEvents.map((event) => (
                      <div key={event.id} className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 flex flex-col h-full">
                        <div className="relative">
                          <AspectRatio ratio={16/9}>
                            <img 
                              src={event.image} 
                              alt={event.title}
                              className="w-full h-full object-cover opacity-80"
                            />
                          </AspectRatio>
                          <div className="absolute top-3 right-3">
                            <Badge variant="outline">{event.category}</Badge>
                          </div>
                          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-20 flex items-center justify-center">
                            <span className="bg-black bg-opacity-75 text-white px-3 py-1 rounded-md text-sm font-medium">Event Completed</span>
                          </div>
                        </div>
                        <div className="p-6">
                          <h3 className="text-xl font-semibold mb-3">{event.title}</h3>
                          <div className="flex items-center text-gray-500 mb-2">
                            <CalendarDays size={16} className="mr-2" />
                            <span>{event.date}</span>
                          </div>
                          <div className="flex items-center text-gray-500 mb-2">
                            <Clock size={16} className="mr-2" />
                            <span>{event.time}</span>
                          </div>
                          <div className="flex items-center text-gray-500 mb-4">
                            <MapPin size={16} className="mr-2" />
                            <span>{event.location}</span>
                          </div>
                          <p className="text-gray-600 line-clamp-3">{event.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Subscribe Section */}
        <section className="py-16 bg-blue-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
              <p className="text-gray-600 mb-8">
                Subscribe to our newsletter to receive notifications about upcoming events and workshops
              </p>
              <div className="flex flex-col md:flex-row gap-3 max-w-md mx-auto">
                <Input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="bg-white"
                />
                <Button>Subscribe</Button>
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
