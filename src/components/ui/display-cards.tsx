
"use client";

import { cn } from "@/lib/utils";
import { Sparkles, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

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
  funding?: string;
  onClick?: () => void;
  ctaText?: string;
  featured?: boolean;
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
  funding,
  onClick,
  ctaText = "Learn More",
  featured = false
}: DisplayCardProps) {
  return (
    <div 
      className={cn(
        "relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:shadow-xl group",
        featured && "ring-2 ring-blue-200 bg-gradient-to-br from-blue-50 to-white",
        className
      )}
      onClick={onClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={(e) => {
        if (onClick && (e.key === 'Enter' || e.key === ' ')) {
          e.preventDefault();
          onClick();
        }
      }}
      aria-label={onClick ? `Visit ${title}` : undefined}
    >
      {/* Featured Badge */}
      {featured && (
        <div className="absolute top-4 right-4">
          <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
            <Sparkles className="w-3 h-3" />
            Featured
          </div>
        </div>
      )}

      {/* Category Badge */}
      {category && (
        <div className="mb-4">
          <span className="inline-block px-3 py-1 text-xs font-semibold bg-gray-100 text-gray-700 rounded-full group-hover:bg-blue-100 group-hover:text-blue-700 transition-colors">
            {category}
          </span>
        </div>
      )}
      
      {/* Header with Logo and Title */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1 min-w-0">
          <h3 className={cn(
            "text-xl font-bold line-clamp-2 group-hover:text-blue-600 transition-colors mb-2", 
            titleClassName
          )}>
            {title}
          </h3>
        </div>
        
        {logo ? (
          <div className="flex-shrink-0 w-16 h-16 ml-4 flex items-center justify-center bg-gray-50 rounded-xl group-hover:bg-white transition-colors">
            <img 
              src={logo} 
              alt={`${title} logo`} 
              className="max-h-14 max-w-14 object-contain" 
            />
          </div>
        ) : (
          <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-gray-100 group-hover:bg-blue-100 transition-colors">
            {icon}
          </div>
        )}
      </div>
      
      {/* Description */}
      {description && (
        <p className="text-gray-600 text-sm mb-6 line-clamp-3 leading-relaxed">
          {description}
        </p>
      )}
      
      {/* Footer with CTA */}
      <div className="flex items-center justify-between mt-auto">
        <div className="flex flex-col gap-2">
          {date && !funding && (
            <div className="text-xs text-gray-500">
              {date}
            </div>
          )}
        </div>
        
        {onClick && (
          <Button 
            variant="outline" 
            size="sm" 
            className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 border-blue-200 text-blue-600 hover:bg-blue-50"
            onClick={(e) => {
              e.stopPropagation();
              onClick();
            }}
          >
            {ctaText}
            <ExternalLink className="w-3 h-3 ml-2" />
          </Button>
        )}
      </div>
      
      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none" />
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
  gridClassName = "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
}: DisplayCardsProps) {
  return (
    <div className={cn("opacity-100 animate-in fade-in-0 duration-700", className)}>
      <div className={cn("grid gap-8", gridClassName)}>
        {cards.map((cardProps, index) => (
          <DisplayCard key={index} {...cardProps} />
        ))}
      </div>
    </div>
  );
}
