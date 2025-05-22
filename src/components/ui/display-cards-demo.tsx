
"use client";

import DisplayCards from "@/components/ui/display-cards";
import { Box, RecycleIcon, Leaf } from "lucide-react";

const defaultCards = [
  {
    icon: <Box className="size-4 text-blue-300" />,
    title: "FinTech",
    description: "Driving digital finance, embedded banking, and inclusive financial infrastructure",
    category: "Finance",
    iconClassName: "text-blue-500",
    titleClassName: "text-blue-500",
    className: "hover:-translate-y-2 transition-transform duration-300"
  },
  {
    icon: <RecycleIcon className="size-4 text-blue-300" />,
    title: "CleanTech",
    description: "Powering sustainability through energy innovation, mobility, and circular models",
    category: "Environment",
    iconClassName: "text-blue-500",
    titleClassName: "text-blue-500",
    className: "hover:-translate-y-2 transition-transform duration-300"
  },
  {
    icon: <Leaf className="size-4 text-blue-300" />,
    title: "Lifestyle",
    description: "Enhancing everyday life through wellness, learning, travel, productivity, and culture",
    category: "Wellness",
    iconClassName: "text-blue-500",
    titleClassName: "text-blue-500",
    className: "hover:-translate-y-2 transition-transform duration-300"
  },
];

function DisplayCardsDemo() {
  return (
    <div className="flex min-h-[400px] w-full items-center justify-center py-20">
      <div className="w-full max-w-6xl">
        <DisplayCards cards={defaultCards} />
      </div>
    </div>
  );
}

export { DisplayCardsDemo };
