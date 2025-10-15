"use client";

import { cn } from "@/lib/utils";
import React from "react";

// 🔹 Define ActionItem + StoreHeaderData here
export type ActionItem = {
  icon: React.ElementType;
  label: string;
  onClick?: () => void;
};

export interface StoreHeaderData {
  title?: string;
  actions?: ActionItem[];
  className?: string;
}

interface StoreHeaderProps {
  storeHeaderData: StoreHeaderData;
}

// Brand component
const StoreBrand = ({ title }: { title: string }) => (
  // for sm device this section should be hidden
  <div className="text-sm font-medium text-primary/70 hidden sm:block">
    {title}
  </div>
);

// Action button
const HeaderAction = ({
  icon: Icon,
  label,
  onClick,
  className,
}: ActionItem & { className?: string }) => (
  <button
    onClick={onClick}
    className={cn(
      "flex items-center gap-2 text-xs sm:text-sm text-primary/70 hover:text-primary/90 transition-colors",
      className
    )}
  >
    <Icon className="size-4 sm:size-3" />
    <span>{label}</span>
  </button>
);

// Main header
const StoreHeader: React.FC<StoreHeaderProps> = ({ storeHeaderData }) => {
  const {
    title = "Welcome to Worldwide Electronics Store",
    actions = [],
    className = "",
  } = storeHeaderData;

  return (
    <header
      className={`bg-primary-foreground border-b border-primary/10 ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center sm:justify-between h-10">
          <StoreBrand title={title} />
          <div className="flex items-stretch gap-4">
            {actions.map((action, i) => (
              <HeaderAction
                key={i}
                {...action}
                className={
                  i < actions.length - 1
                    ? "border-r border-primary/20 pr-4"
                    : ""
                }
              />
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default StoreHeader;
