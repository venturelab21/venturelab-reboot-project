
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Calendar, MapPin, Clock, Users } from "lucide-react";

interface EnhancedCardProps {
  className?: string;
  title: string;
  description?: string;
  image?: string;
  category?: string;
  date?: string;
  time?: string;
  location?: string;
  funding?: string;
  onClick?: () => void;
  ctaText?: string;
  type?: "portfolio" | "event" | "default";
  featured?: boolean;
}

export function EnhancedCard({
  className,
  title,
  description,
  image,
  category,
  date,
  time,
  location,
  funding,
  onClick,
  ctaText = "Learn More",
  type = "default",
  featured = false
}: EnhancedCardProps) {
  return (
    <div 
      className={cn(
        "group relative overflow-hidden rounded-2xl bg-white border border-gray-100 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 cursor-pointer",
        featured && "ring-2 ring-blue-200 bg-gradient-to-br from-blue-50/50 to-white",
        className
      )}
      onClick={onClick}
    >
      {/* Image Container */}
      {image && (
        <div className="relative h-48 overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Category Badge */}
          {category && (
            <div className="absolute top-4 right-4">
              <Badge 
                variant={featured ? "default" : "secondary"}
                className="backdrop-blur-sm bg-white/90 text-gray-900 font-medium"
              >
                {category}
              </Badge>
            </div>
          )}
          
          {/* Featured Badge */}
          {featured && (
            <div className="absolute top-4 left-4">
              <Badge className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white border-0">
                ⭐ Featured
              </Badge>
            </div>
          )}
        </div>
      )}

      {/* Content */}
      <div className="p-6 flex flex-col h-full">
        <div className="flex-grow">
          <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300">
            {title}
          </h3>
          
          {description && (
            <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed">
              {description}
            </p>
          )}

          {/* Event Details */}
          {type === "event" && (
            <div className="space-y-2 mb-4">
              {date && (
                <div className="flex items-center text-gray-500 text-sm">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{date}</span>
                </div>
              )}
              {time && (
                <div className="flex items-center text-gray-500 text-sm">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>{time}</span>
                </div>
              )}
              {location && (
                <div className="flex items-center text-gray-500 text-sm">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span className="line-clamp-1">{location}</span>
                </div>
              )}
            </div>
          )}

          {/* Portfolio Details */}
          {type === "portfolio" && funding && (
            <div className="mb-4">
              <Badge variant="outline" className="text-green-600 border-green-200 bg-green-50">
                💰 {funding}
              </Badge>
            </div>
          )}
        </div>

        {/* CTA Button */}
        <Button 
          variant="outline" 
          size="sm" 
          className="w-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 border-blue-200 text-blue-600 hover:bg-blue-50"
          onClick={(e) => {
            e.stopPropagation();
            onClick?.();
          }}
        >
          {ctaText}
          <ExternalLink className="w-4 h-4 ml-2" />
        </Button>
      </div>

      {/* Hover Effect Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none" />
    </div>
  );
}
