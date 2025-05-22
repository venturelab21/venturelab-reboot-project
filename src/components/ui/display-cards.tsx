
"use client";

import { cn } from "@/lib/utils";
import { Sparkles } from "lucide-react";

interface DisplayCardProps {
  className?: string;
  icon?: React.ReactNode;
  title?: string;
  description?: string;
  date?: string;
  iconClassName?: string;
  titleClassName?: string;
  logo?: string;
  category?: string;
}

function DisplayCard({
  className,
  icon = <Sparkles className="size-4 text-blue-300" />,
  title = "Featured",
  description = "Discover amazing content",
  date = "Just now",
  iconClassName = "text-blue-500",
  titleClassName = "text-blue-500",
  logo,
  category
}: DisplayCardProps) {
  return (
    <div className={cn(
      "relative overflow-hidden rounded-lg border border-gray-200 bg-white p-6 transition-all duration-300 hover:shadow-lg",
      className
    )}>
      {category && (
        <div className="mb-3">
          <span className="inline-block px-3 py-1 text-xs bg-gray-100 text-gray-700 rounded-full">
            {category}
          </span>
        </div>
      )}
      
      <div className="flex items-center justify-between mt-2">
        <h3 className={cn("text-xl font-semibold line-clamp-2 max-w-[60%] group-hover:text-blue-600 transition-colors", titleClassName)}>
          {title}
        </h3>
        
        {logo ? (
          <div className="flex-shrink-0 w-24 h-16 flex items-center justify-center">
            <img 
              src={logo} 
              alt={`${title} logo`} 
              className="max-h-16 max-w-24 object-contain" 
            />
          </div>
        ) : (
          <div className="flex items-center justify-center h-12 w-12 rounded-full bg-gray-100">
            {icon}
          </div>
        )}
      </div>
      
      {description && (
        <p className="text-gray-600 text-sm mb-4 line-clamp-2 mt-3">
          {description}
        </p>
      )}
      
      {date && (
        <div className="text-xs text-gray-500 mt-auto">
          {date}
        </div>
      )}
    </div>
  );
}

interface DisplayCardsProps {
  cards?: DisplayCardProps[];
  className?: string;
  gridClassName?: string;
}

export default function DisplayCards({
  cards,
  className,
  gridClassName
}: DisplayCardsProps) {
  const defaultCards = [{
    className: "[grid-area:stack] hover:-translate-y-10 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0"
  }, {
    className: "[grid-area:stack] translate-x-16 translate-y-10 hover:-translate-y-1 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0"
  }, {
    className: "[grid-area:stack] translate-x-32 translate-y-20 hover:translate-y-10"
  }];
  
  const displayCards = cards || defaultCards;
  
  return (
    <div className={cn("opacity-100 animate-in fade-in-0 duration-700", className)}>
      <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", gridClassName)}>
        {displayCards.map((cardProps, index) => (
          <DisplayCard key={index} {...cardProps} />
        ))}
      </div>
    </div>
  );
}
