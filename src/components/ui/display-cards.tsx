"use client";

import { cn } from "@/lib/utils";
import { Sparkles } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
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
  return <Card className={cn("relative overflow-hidden hover:shadow-lg transition-all duration-300", className)} onClick={onClick}>
      
      
    </Card>;
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
  return <div className={cn("opacity-100 animate-in fade-in-0 duration-700", className)}>
      <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", gridClassName)}>
        {displayCards.map((cardProps, index) => <DisplayCard key={index} {...cardProps} />)}
      </div>
    </div>;
}