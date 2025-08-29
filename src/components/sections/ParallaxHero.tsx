"use client";

import { motion, useScroll, useTransform, useSpring, useReducedMotion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Users, Zap, Clock } from "lucide-react";

export function ParallaxHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const shouldReduceMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const mq = typeof window !== "undefined" ? window.matchMedia("(max-width: 768px)") : null;
    const update = () => setIsMobile(!!mq?.matches);
    update();
    mq?.addEventListener?.("change", update);
    return () => mq?.removeEventListener?.("change", update);
  }, []);
  useEffect(() => {
    setMounted(true);
  }, []);
  const motionEnabled = mounted && !shouldReduceMotion && !isMobile;

  // Parallax transforms (disabled on mobile/reduced motion)
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", motionEnabled ? "50%" : "0%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", motionEnabled ? "30%" : "0%"]);
  const cardsY = useTransform(scrollYProgress, [0, 1], ["0%", motionEnabled ? "20%" : "0%"]);

  // Smooth spring animations
  const smoothBackgroundY = useSpring(backgroundY, { stiffness: 100, damping: 30 });
  const smoothTextY = useSpring(textY, { stiffness: 100, damping: 30 });
  const smoothCardsY = useSpring(cardsY, { stiffness: 100, damping: 30 });

  // Mouse parallax effect
  let rafId: number | null = null;
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!motionEnabled || !containerRef.current) return;
    if (rafId) cancelAnimationFrame(rafId);
    const { clientX, clientY } = e;
    rafId = requestAnimationFrame(() => {
      const { innerWidth, innerHeight } = window;
      const xPos = (clientX / innerWidth - 0.5) * 16; // немного меньше амплитуды
      const yPos = (clientY / innerHeight - 0.5) * 16;
      const elements = containerRef.current!.querySelectorAll('.mouse-parallax');
      elements.forEach((el, index) => {
        const speed = (index + 1) * 0.08;
        (el as HTMLElement).style.transform = `translate3d(${xPos * speed}px, ${yPos * speed}px, 0)`;
      });
    });
  };

  // Floating particles
  const FloatingParticles = () => {
    if (!motionEnabled) return null;
    const particles = Array.from({ length: 10 }, (_, i) => ({
      id: i,
      size: Math.random() * 4 + 2,
      initialX: Math.random() * 100,
      initialY: Math.random() * 100,
      duration: Math.random() * 20 + 10,
      delay: Math.random() * 5,
    }));

    return (
      <div className="hidden md:block absolute inset-0 overflow-hidden" suppressHydrationWarning>
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute bg-white/10 rounded-full will-change-transform"
            style={{
              width: particle.size,
              height: particle.size,
              left: `${particle.initialX}%`,
              top: `${particle.initialY}%`,
            }}
            animate={{
              y: [-20, -100],
              x: [0, Math.random() * 40 - 20],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    );
  };

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800 text-white overflow-hidden [transform:translateZ(0)]"
      onMouseMove={motionEnabled ? handleMouseMove : undefined}
    >
      {/* Animated Background */}
      <motion.div
        style={{ y: motionEnabled ? smoothBackgroundY : undefined }}
        className="absolute inset-0"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/80 via-purple-600/80 to-indigo-800/80" />
        <FloatingParticles />
        
        {/* Large background shapes */}
        <motion.div
          animate={motionEnabled ? {
            scale: [1, 1.1, 1],
            rotate: [0, 5, -5, 0],
          } : undefined}
          transition={motionEnabled ? {
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          } : undefined}
          className="hidden md:block absolute top-10 left-10 w-96 h-96 bg-white/5 rounded-full blur-3xl"
        />
        
        <motion.div
          animate={motionEnabled ? {
            scale: [1, 0.9, 1.2, 1],
            rotate: [0, -10, 10, 0],
          } : undefined}
          transition={motionEnabled ? {
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          } : undefined}
          className="hidden md:block absolute bottom-20 right-20 w-80 h-80 bg-purple-300/10 rounded-full blur-3xl"
        />
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          
          {/* Left Content with Text Parallax */}
          <motion.div
            style={{ y: smoothTextY }}
            className="space-y-8 will-change-transform transform-gpu"
          >
            {/* Badges */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-wrap gap-3"
            >
              <div className="mouse-parallax">
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30 text-sm px-4 py-2">
                  🚀 MVP Готов к запуску
                </Badge>
              </div>
              <div className="mouse-parallax">
                <Badge variant="secondary" className="bg-green-500/20 text-green-100 border-green-300/30 text-sm px-4 py-2">
                  🔥 Популярный рынок
                </Badge>
              </div>
            </motion.div>

            {/* Main Title with Stagger Animation */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-white drop-shadow-lg"
              >
                Fanfiq
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="mouse-parallax"
              >
                <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3">
                  <span className="text-2xl lg:text-3xl font-medium text-blue-100">
                    ✨ &ldquo;Spotify для фанфиков&rdquo;
                  </span>
                </div>
              </motion.div>
            </div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="text-xl text-blue-50 md:text-blue-100 leading-relaxed max-w-xl mouse-parallax"
            >
              Единая точка входа для миллионов читателей фанфиков.
              Агрегируем контент с самых популярных платформ в одном удобном приложении.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.div
                whileHover={motionEnabled ? { scale: 1.05, y: -2 } : undefined}
                whileTap={motionEnabled ? { scale: 0.95 } : undefined}
                className="mouse-parallax"
              >
                <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg font-semibold shadow-2xl">
                  🚀 Начать читать
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={motionEnabled ? { scale: 1.05, y: -2 } : undefined}
                whileTap={motionEnabled ? { scale: 0.95 } : undefined}
                className="mouse-parallax"
              >
                <Button size="lg" variant="outline" className="px-8 py-4 text-lg bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20">
                  📖 Изучить возможности
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Content with Cards Parallax */}
          <motion.div
            style={{ y: smoothCardsY }}
            className="relative"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="grid grid-cols-2 gap-6"
            >
              {/* Animated Stats Cards */}
              <motion.div
                className="col-span-2 mouse-parallax will-change-transform transform-gpu"
                whileHover={{ 
                  scale: 1.02,
                  rotateY: 5,
                  rotateX: 5,
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 text-center shadow-2xl">
                  <Users className="w-16 h-16 mx-auto mb-4 text-blue-200" />
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 1 }}
                    className="text-5xl font-bold mb-2"
                  >
                    50M+
                  </motion.div>
                  <div className="text-blue-100 text-lg">Глобальных пользователей</div>
                </div>
              </motion.div>

              <motion.div
                className="mouse-parallax will-change-transform transform-gpu"
                whileHover={{ 
                  scale: 1.05,
                  rotateY: -10,
                  rotateX: 5,
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 text-center shadow-xl">
                  <Zap className="w-12 h-12 mx-auto mb-3 text-yellow-200" />
                  <div className="text-3xl font-bold mb-1">14x</div>
                  <div className="text-yellow-100 text-sm">Ускорение с ИИ</div>
                </div>
              </motion.div>

              <motion.div
                className="mouse-parallax will-change-transform transform-gpu"
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 10,
                  rotateX: 5,
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 text-center shadow-xl">
                  <Clock className="w-12 h-12 mx-auto mb-3 text-green-200" />
                  <div className="text-3xl font-bold mb-1">6 нед</div>
                  <div className="text-green-100 text-sm">До готовности</div>
                </div>
              </motion.div>

              {/* Floating Logo */}
              <motion.div
                className="col-span-2 flex justify-center mouse-parallax"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.8, duration: 1 }}
              >
                <motion.div
                  animate={motionEnabled ? { rotate: [0, 5, -5, 0], scale: [1, 1.1, 1], y: [0, -10, 0] } : undefined}
                  transition={motionEnabled ? { duration: 6, repeat: Infinity, ease: "easeInOut" } : undefined}
                  whileHover={motionEnabled ? { scale: 1.2, rotate: 15, transition: { duration: 0.3 } } : undefined}
                  className="w-32 h-32 bg-gradient-to-r from-white/20 to-blue-200/20 backdrop-blur-lg border border-white/30 rounded-full flex items-center justify-center shadow-2xl cursor-pointer"
                >
                  <BookOpen className="w-16 h-16 text-white" />
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center text-white/60"
          >
            <span className="text-sm mb-2">Прокрутите вниз</span>
            <motion.div
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Background Gradient Animation */}
      <motion.div
        className="absolute inset-0"
        style={{ y: motionEnabled ? smoothBackgroundY : undefined }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/50 via-purple-600/50 to-indigo-800/50" />
        
        {/* Animated background elements */}
        <motion.div
          animate={motionEnabled ? {
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          } : undefined}
          transition={motionEnabled ? {
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          } : undefined}
          className="hidden md:block absolute top-20 left-1/4 w-72 h-72 bg-white rounded-full blur-3xl"
        />
        
        <motion.div
          animate={motionEnabled ? {
            scale: [1, 0.8, 1.3, 1],
            opacity: [0.05, 0.15, 0.05],
          } : undefined}
          transition={motionEnabled ? {
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          } : undefined}
          className="hidden md:block absolute bottom-32 right-1/4 w-96 h-96 bg-purple-300 rounded-full blur-3xl"
        />
      </motion.div>
    </section>
  );
}
