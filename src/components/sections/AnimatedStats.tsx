"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedCounter, ProgressRing } from "@/components/ui/chart";
import { Users, TrendingUp, Clock, Zap, BookOpen, Star } from "lucide-react";

const statsData = [
  {
    icon: <Users className="w-8 h-8" />,
    value: 2000000,
    suffix: "+",
    label: "Читателей в России",
    color: "#6366f1",
    progress: 85,
  },
  {
    icon: <Users className="w-8 h-8" />,
    value: 50000000,
    suffix: "+",
    label: "Глобальных пользователей",
    color: "#8b5cf6",
    progress: 92,
  },
  {
    icon: <Zap className="w-8 h-8" />,
    value: 14,
    suffix: "x",
    label: "Ускорение с ИИ",
    color: "#f59e0b",
    progress: 95,
  },
  {
    icon: <Clock className="w-8 h-8" />,
    value: 6,
    suffix: " нед",
    label: "До полной готовности",
    color: "#06d6a0",
    progress: 75,
  },
  {
    icon: <BookOpen className="w-8 h-8" />,
    value: 10000000,
    suffix: "+",
    label: "Фанфиков в базе",
    color: "#ef4444",
    progress: 88,
  },
  {
    icon: <Star className="w-8 h-8" />,
    value: 98,
    suffix: "%",
    label: "Удовлетворенность",
    color: "#10b981",
    progress: 98,
  },
];

export function AnimatedStats() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Впечатляющие результаты
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Цифры, которые говорят о нашем успехе и потенциале роста
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {statsData.map((stat, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="relative overflow-hidden group hover:shadow-2xl transition-all duration-300 hover:scale-105">
                {/* Background gradient */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                  style={{
                    background: `linear-gradient(135deg, ${stat.color}22, ${stat.color}44)`,
                  }}
                />
                
                <CardContent className="p-8 text-center relative">
                  {/* Icon */}
                  <motion.div
                    className="mb-6 mx-auto w-16 h-16 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: `${stat.color}20`, color: stat.color }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {stat.icon}
                  </motion.div>

                  {/* Progress Ring */}
                  <div className="relative mb-6">
                    <ProgressRing
                      progress={stat.progress}
                      size={100}
                      color={stat.color}
                      className="relative"
                    />
                  </div>

                  {/* Animated Counter */}
                  <div className="mb-2">
                    <AnimatedCounter
                      from={0}
                      to={stat.value}
                      duration={2}
                      suffix={stat.suffix}
                      className="text-3xl font-bold"
                      style={{ color: stat.color }}
                    />
                  </div>

                  {/* Label */}
                  <p className="text-gray-600 font-medium">{stat.label}</p>

                  {/* Decorative elements */}
                  <div className="absolute top-4 right-4 w-2 h-2 rounded-full opacity-20" 
                       style={{ backgroundColor: stat.color }} />
                  <div className="absolute bottom-4 left-4 w-1 h-1 rounded-full opacity-30" 
                       style={{ backgroundColor: stat.color }} />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional animated elements */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center space-x-2 bg-white rounded-full px-6 py-3 shadow-lg">
            <TrendingUp className="w-5 h-5 text-green-500" />
            <span className="text-gray-700 font-medium">
              Рост аудитории +127% за год
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
