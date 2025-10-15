"use client";

import { Card } from "@/components/ui/card";
import { Truck, ThumbsUp, RotateCcw, ShieldCheck, Tag } from "lucide-react";
import { motion, easeInOut } from "framer-motion";
import { useSmallMediumDevice } from "@/hooks/use-small-medium-device";

const iconMap = {
  Truck,
  ThumbsUp,
  RotateCcw,
  ShieldCheck,
  Tag,
};

interface Feature {
  icon: string;
  title: string;
  subtitle: string;
}

interface FeaturesScrollContainerProps {
  features: Feature[];
}

export default function FeaturesScrollContainer({
  features,
}: FeaturesScrollContainerProps) {
  const isSmallMedium = useSmallMediumDevice();

  // Calculate dynamic width for small/medium devices
  const calculateDynamicWidth = (title: string, subtitle: string) => {
    // Base width calculations
    const titleLength = title.length;
    const subtitleLength = subtitle.length;
    const maxTextLength = Math.max(titleLength, subtitleLength);
    
    // Dynamic width based on text content (min 120px, max 200px)
    const dynamicWidth = Math.max(120, Math.min(200, maxTextLength * 8 + 80));
    return dynamicWidth;
  };

  // Container variant for initial fade-in
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  // Item variant for initial entrance
  const itemVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <Card className="w-full rounded-md border p-2 mb-4">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {isSmallMedium ? (
          <div className="flex overflow-x-auto pb-2 scrollbar-hide">
            {features.map((item, index) => {
              const IconComponent = iconMap[item.icon as keyof typeof iconMap];
              return (
                <div key={index} className="flex items-center">
                  <motion.div
                    className="flex-shrink-0 flex items-center justify-center py-4 px-3"
                    style={{ minWidth: calculateDynamicWidth(item.title, item.subtitle) }}
                    variants={itemVariants}
                    animate={{
                      y: [0, -6, 0], // continuous up-down motion
                    }}
                    transition={{
                      duration: 2 + index * 0.2, // slightly offset for each item
                      repeat: Infinity,
                      ease: easeInOut,
                    }}
                  >
                    {IconComponent && (
                      <IconComponent className="h-8 w-8 text-primary/70 mr-4" />
                    )}
                    <div className="flex flex-col items-center text-center">
                      <h3 className="font-semibold text-sm">{item.title}</h3>
                      <p className="text-xs text-primary/70">{item.subtitle}</p>
                    </div>
                  </motion.div>
                  {/* Vertical divider - hide for last item */}
                  {index < features.length - 1 && (
                    <div className="h-16 w-px bg-primary/20 mx-2" />
                  )}
                </div>
              );
            })}
          </div>
        ) : (
          <div className="flex">
            {features.map((item, index) => {
              const IconComponent = iconMap[item.icon as keyof typeof iconMap];
              return (
                <div key={index} className="flex items-center flex-1">
                  <motion.div
                    className="flex items-center justify-center py-4 w-full"
                    variants={itemVariants}
                    animate={{
                      y: [0, -6, 0], // continuous up-down motion
                    }}
                    transition={{
                      duration: 2 + index * 0.2, // stagger motion per item
                      repeat: Infinity,
                      ease: easeInOut,
                    }}
                  >
                    {IconComponent && (
                      <IconComponent className="h-8 w-8 text-primary/70 mr-4" />
                    )}
                    <div className="flex flex-col items-center text-center">
                      <h3 className="font-semibold">{item.title}</h3>
                      <p className="text-sm text-primary/70">{item.subtitle}</p>
                    </div>
                  </motion.div>
                  {/* Vertical divider - hide for last item */}
                  {index < features.length - 1 && (
                    <div className="h-16 w-px bg-primary/20" />
                  )}
                </div>
              );
            })}
          </div>
        )}
      </motion.div>
    </Card>
  );
}