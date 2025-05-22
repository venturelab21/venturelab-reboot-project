
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
  onClick?: () => void;
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
  category,
  onClick
}: DisplayCardProps) {
  return (
    <div 
      className={cn(
        "relative overflow-hidden rounded-lg border border-gray-200 bg-white p-6 transition-all duration-300 hover:shadow-lg",
        className
      )}
      onClick={onClick}
      role={onClick ? "button" : undefined}
    >
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
  cards = [],
  className,
  gridClassName
}: DisplayCardsProps) {
  return (
    <div className={cn("opacity-100 animate-in fade-in-0 duration-700", className)}>
      <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", gridClassName)}>
        {cards.map((cardProps, index) => (
          <DisplayCard key={index} {...cardProps} />
        ))}
      </div>
    </div>
  );
}
