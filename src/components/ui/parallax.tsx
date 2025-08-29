"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

interface ParallaxContainerProps {
  children: React.ReactNode;
  speed?: number;
  className?: string;
  direction?: "up" | "down" | "left" | "right";
}

export function ParallaxContainer({ 
  children, 
  speed = 0.5, 
  className,
  direction = "up" 
}: ParallaxContainerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const distance = 100 * speed;
  
  // All useTransform calls must be at the top level
  const upTransform = useTransform(scrollYProgress, [0, 1], [distance, -distance]);
  const downTransform = useTransform(scrollYProgress, [0, 1], [-distance, distance]);
  const leftTransform = useTransform(scrollYProgress, [0, 1], [distance, -distance]);
  const rightTransform = useTransform(scrollYProgress, [0, 1], [-distance, distance]);
  
  const transform = direction === "down" 
    ? downTransform
    : direction === "left"
    ? leftTransform  
    : direction === "right"
    ? rightTransform
    : upTransform; // default "up"
  const springTransform = useSpring(transform, { stiffness: 100, damping: 30 });

  return (
    <div ref={ref} className={cn("relative overflow-hidden", className)}>
      <motion.div
        style={{
          [direction === "left" || direction === "right" ? "x" : "y"]: springTransform
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}

interface ParallaxElementProps {
  children: React.ReactNode;
  speed?: number;
  className?: string;
  rotate?: boolean;
  scale?: boolean;
}

export function ParallaxElement({ 
  children, 
  speed = 0.3, 
  className,
  rotate = false,
  scale = false
}: ParallaxElementProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [50 * speed, -50 * speed]);
  const rotateX = useTransform(scrollYProgress, [0, 1], rotate ? [0, 360] : [0, 0]);
  const scaleValue = useTransform(scrollYProgress, [0, 1], scale ? [0.8, 1.2] : [1, 1]);

  return (
    <div ref={ref} className={className}>
      <motion.div
        style={{
          y: useSpring(y, { stiffness: 100, damping: 30 }),
          rotateX: useSpring(rotateX, { stiffness: 100, damping: 30 }),
          scale: useSpring(scaleValue, { stiffness: 100, damping: 30 }),
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}

// Floating elements for background
export function FloatingElements() {
  const floatingElements = [
    { size: "w-4 h-4", delay: 0, duration: 20, color: "bg-blue-400/20" },
    { size: "w-6 h-6", delay: 2, duration: 25, color: "bg-purple-400/20" },
    { size: "w-3 h-3", delay: 4, duration: 18, color: "bg-indigo-400/20" },
    { size: "w-5 h-5", delay: 1, duration: 22, color: "bg-blue-300/20" },
    { size: "w-2 h-2", delay: 3, duration: 16, color: "bg-purple-300/20" },
    { size: "w-7 h-7", delay: 5, duration: 28, color: "bg-indigo-300/20" },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {floatingElements.map((element, index) => (
        <motion.div
          key={index}
          className={cn(
            "absolute rounded-full",
            element.size,
            element.color
          )}
          initial={{
            x: Math.random() * window.innerWidth,
            y: window.innerHeight + 100,
          }}
          animate={{
            y: -100,
            x: Math.random() * window.innerWidth,
          }}
          transition={{
            duration: element.duration,
            delay: element.delay,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            left: `${Math.random() * 100}%`,
          }}
        />
      ))}
    </div>
  );
}

// Parallax Background with animated shapes
export function ParallaxBackground() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, -200]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -100]);
  const y3 = useTransform(scrollY, [0, 1000], [0, -50]);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Layer 1 - Fastest */}
      <motion.div
        style={{ y: y1 }}
        className="absolute inset-0"
      >
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-xl" />
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-indigo-400/10 to-blue-400/10 rounded-full blur-lg" />
      </motion.div>

      {/* Layer 2 - Medium */}
      <motion.div
        style={{ y: y2 }}
        className="absolute inset-0"
      >
        <div className="absolute top-60 left-1/4 w-40 h-40 bg-gradient-to-r from-purple-400/8 to-indigo-400/8 rounded-full blur-2xl" />
        <div className="absolute top-80 right-1/3 w-28 h-28 bg-gradient-to-r from-blue-400/8 to-purple-400/8 rounded-full blur-xl" />
      </motion.div>

      {/* Layer 3 - Slowest */}
      <motion.div
        style={{ y: y3 }}
        className="absolute inset-0"
      >
        <div className="absolute top-32 right-10 w-20 h-20 bg-gradient-to-r from-indigo-400/12 to-blue-400/12 rounded-full blur-lg" />
        <div className="absolute top-96 left-1/2 w-36 h-36 bg-gradient-to-r from-purple-400/6 to-indigo-400/6 rounded-full blur-3xl" />
      </motion.div>

      {/* Floating particles */}
      <FloatingElements />
    </div>
  );
}

// Mouse parallax effect
interface MouseParallaxProps {
  children: React.ReactNode;
  strength?: number;
  className?: string;
}

export function MouseParallax({ children, strength = 0.1, className }: MouseParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return;

      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;

      const xPos = (clientX / innerWidth - 0.5) * strength * 100;
      const yPos = (clientY / innerHeight - 0.5) * strength * 100;

      ref.current.style.transform = `translate(${xPos}px, ${yPos}px)`;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [strength]);

  return (
    <div className={className}>
      <div
        ref={ref}
        className="transition-transform duration-1000 ease-out"
      >
        {children}
      </div>
    </div>
  );
}

// Tilt effect for cards
interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  tiltMaxAngleX?: number;
  tiltMaxAngleY?: number;
  perspective?: number;
  scale?: number;
}

export function TiltCard({
  children,
  className,
  tiltMaxAngleX = 10,
  tiltMaxAngleY = 10,
  perspective = 1000,
  scale = 1.02
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * tiltMaxAngleX;
      const rotateY = ((centerX - x) / centerX) * tiltMaxAngleY;

      element.style.transform = `
        perspective(${perspective}px) 
        rotateX(${rotateX}deg) 
        rotateY(${rotateY}deg) 
        scale(${scale})
      `;
    };

    const handleMouseLeave = () => {
      element.style.transform = `
        perspective(${perspective}px) 
        rotateX(0deg) 
        rotateY(0deg) 
        scale(1)
      `;
    };

    element.addEventListener("mousemove", handleMouseMove);
    element.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      element.removeEventListener("mousemove", handleMouseMove);
      element.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [tiltMaxAngleX, tiltMaxAngleY, perspective, scale]);

  return (
    <div
      ref={ref}
      className={cn("transition-transform duration-200 ease-out", className)}
      style={{ transformStyle: "preserve-3d" }}
    >
      {children}
    </div>
  );
}
