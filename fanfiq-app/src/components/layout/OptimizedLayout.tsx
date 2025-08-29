"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface OptimizedLayoutProps {
  children: React.ReactNode;
  className?: string;
  maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "full";
}

export function OptimizedLayout({ 
  children, 
  className,
  maxWidth = "xl" 
}: OptimizedLayoutProps) {
  const getMaxWidth = () => {
    switch (maxWidth) {
      case "sm": return "max-w-screen-sm";
      case "md": return "max-w-screen-md";
      case "lg": return "max-w-screen-lg";
      case "xl": return "max-w-screen-xl";
      case "2xl": return "max-w-screen-2xl";
      case "full": return "max-w-full";
      default: return "max-w-screen-xl";
    }
  };

  return (
    <div className={cn(
      "w-full mx-auto px-4 sm:px-6 lg:px-8",
      getMaxWidth(),
      className
    )}>
      {children}
    </div>
  );
}

interface ResponsiveGridProps {
  children: React.ReactNode;
  cols?: {
    default: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
  };
  gap?: number;
  className?: string;
}

export function ResponsiveGrid({ 
  children, 
  cols = { default: 1, md: 2, lg: 3 },
  gap = 6,
  className 
}: ResponsiveGridProps) {
  const getGridClasses = () => {
    const classes = [`grid-cols-${cols.default}`];
    
    if (cols.sm) classes.push(`sm:grid-cols-${cols.sm}`);
    if (cols.md) classes.push(`md:grid-cols-${cols.md}`);
    if (cols.lg) classes.push(`lg:grid-cols-${cols.lg}`);
    if (cols.xl) classes.push(`xl:grid-cols-${cols.xl}`);
    
    classes.push(`gap-${gap}`);
    
    return classes.join(" ");
  };

  return (
    <div className={cn("grid", getGridClasses(), className)}>
      {children}
    </div>
  );
}

interface FluidTextProps {
  children: React.ReactNode;
  variant?: "heading" | "body" | "caption";
  className?: string;
}

export function FluidText({ 
  children, 
  variant = "body",
  className 
}: FluidTextProps) {
  const getTextClasses = () => {
    switch (variant) {
      case "heading":
        return "text-balance max-w-[30ch] mx-auto leading-tight";
      case "body":
        return "text-pretty max-w-[65ch] leading-relaxed";
      case "caption":
        return "text-pretty max-w-[50ch] leading-normal";
      default:
        return "text-pretty max-w-[65ch] leading-relaxed";
    }
  };

  return (
    <div className={cn(getTextClasses(), className)}>
      {children}
    </div>
  );
}

interface SectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  padding?: "sm" | "md" | "lg" | "xl";
  background?: "default" | "muted" | "gradient";
}

export function Section({ 
  children, 
  id,
  className,
  padding = "lg",
  background = "default"
}: SectionProps) {
  const getPaddingClasses = () => {
    switch (padding) {
      case "sm": return "py-10";
      case "md": return "py-16";
      case "lg": return "py-20";
      case "xl": return "py-24 lg:py-32";
      default: return "py-20";
    }
  };

  const getBackgroundClasses = () => {
    switch (background) {
      case "muted": return "bg-muted/30";
      case "gradient": return "bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50";
      default: return "bg-background";
    }
  };

  return (
    <section 
      id={id}
      className={cn(
        getPaddingClasses(),
        getBackgroundClasses(),
        "relative overflow-hidden",
        className
      )}
    >
      <OptimizedLayout>
        {children}
      </OptimizedLayout>
    </section>
  );
}
