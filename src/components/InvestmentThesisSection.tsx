import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight, Sparkles } from "lucide-react";

const InvestmentThesisSection = () => {
  const investmentAreas = [
    {
      title: "FinTech",
      description: "Driving digital finance, embedded banking, and inclusive financial infrastructure",
      tagline: "Future of Finance",
      gradient: "from-blue-50 to-blue-100",
      iconBg: "bg-blue-500",
      textColor: "text-blue-700",
      hoverGradient: "hover:from-blue-100 hover:to-blue-200",
      icon: (
        <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
        </svg>
      ),
    },
    {
      title: "Consumer Internet",
      description: "Building scalable platforms that connect users, create communities, and enhance digital experiences",
      tagline: "Digital Connection",
      gradient: "from-green-50 to-emerald-100",
      iconBg: "bg-green-500",
      textColor: "text-green-700",
      hoverGradient: "hover:from-green-100 hover:to-emerald-200",
      icon: (
        <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0 9c-5 0-9-4-9-9s4-9 9-9" />
        </svg>
      ),
    },
    {
      title: "B2B SaaS",
      description: "Building software solutions that help businesses optimize operations, enhance productivity, and scale efficiently",
      tagline: "Business Innovation",
      gradient: "from-purple-50 to-violet-100",
      iconBg: "bg-purple-500",
      textColor: "text-purple-700",
      hoverGradient: "hover:from-purple-100 hover:to-violet-200",
      icon: (
        <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
    {
      title: "Deep Tech",
      description: "Advancing cutting-edge technologies including AI, quantum computing, biotech, and emerging sciences",
      tagline: "Frontier Innovation",
      gradient: "from-orange-50 to-amber-100",
      iconBg: "bg-orange-500",
      textColor: "text-orange-700",
      hoverGradient: "hover:from-orange-100 hover:to-amber-200",
      icon: (
        <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
    },
    {
      title: "Healthcare",
      description: "Building platforms for preventive care, digital health, and longevity",
      tagline: "Digital Wellness",
      gradient: "from-pink-50 to-rose-100",
      iconBg: "bg-pink-500",
      textColor: "text-pink-700",
      hoverGradient: "hover:from-pink-100 hover:to-rose-200",
      icon: (
        <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
    },
    {
      title: "Moonshot Opportunity",
      description: "Exploring moonshot ideas and deep-tech frontiers that defy categorization",
      tagline: "Beyond Boundaries",
      gradient: "from-indigo-50 to-blue-100",
      iconBg: "bg-indigo-500",
      textColor: "text-indigo-700",
      hoverGradient: "hover:from-indigo-100 hover:to-blue-200",
      icon: (
        <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50" id="investment-thesis">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced header section */}
        <div className="mb-20 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full mb-6 border border-blue-200">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium tracking-wider uppercase">From First Belief to First Breakthrough</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 font-display text-gray-900">
            Sector Focus
          </h2>
          
          {/* Updated text with consistent formatting */}
          <div className="max-w-4xl mx-auto space-y-4">
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
              We invest at the pre-seed stage in technology products, services, or processes across FinTech, Consumer Internet, Healthcare, B2B SaaS, and Deep Tech.
            </p>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              We also back Moonshot Opportunities that challenge the status quo and reshape industries.
            </p>
          </div>
        </div>

        {/* Enhanced interactive grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {investmentAreas.map((area, index) => (
            <Card 
              key={index} 
              className={`group relative cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl border-0 rounded-2xl bg-gradient-to-br ${area.gradient} ${area.hoverGradient} overflow-hidden`}
            >
              <CardContent className="p-8">
                {/* Icon with background */}
                <div className={`inline-flex items-center justify-center w-16 h-16 ${area.iconBg} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  {area.icon}
                </div>
                
                {/* Content */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className={`text-xl font-bold ${area.textColor}`}>
                      {area.title}
                    </h3>
                    <ChevronRight className={`w-5 h-5 ${area.textColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  </div>
                  
                  <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">
                    {area.tagline}
                  </p>
                  
                  <p className="text-gray-700 leading-relaxed text-sm">
                    {area.description}
                  </p>
                </div>

                {/* Hover overlay effect */}
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Enhanced bottom quote section */}
        <div className="relative">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-12 text-center shadow-2xl">
            <div className="absolute inset-0 bg-grid-pattern opacity-10 rounded-3xl"></div>
            <div className="relative z-10">
              <svg className="w-12 h-12 text-blue-200 mx-auto mb-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
              </svg>
              <p className="text-2xl md:text-3xl font-bold text-white leading-relaxed max-w-4xl mx-auto">
                We back founders at the earliest stage—when conviction matters more than traction—and help turn early sparks into enduring companies.
              </p>
              <div className="w-24 h-1 bg-blue-300 rounded-full mx-auto mt-8"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestmentThesisSection;
