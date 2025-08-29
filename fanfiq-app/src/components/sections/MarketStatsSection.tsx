"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Users, TrendingUp, Clock, Zap } from "lucide-react";

const statsData = [
  {
    icon: <Users className="w-8 h-8" />,
    value: "2M+",
    label: "Читателей в России",
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    icon: <Users className="w-8 h-8" />,
    value: "50M+",
    label: "Глобальных пользователей",
    color: "text-purple-600",
    bgColor: "bg-purple-50",
  },
  {
    icon: <Zap className="w-8 h-8" />,
    value: "14x",
    label: "Ускорение с ИИ",
    color: "text-yellow-600",
    bgColor: "bg-yellow-50",
  },
  {
    icon: <Clock className="w-8 h-8" />,
    value: "6 нед",
    label: "До полной готовности",
    color: "text-green-600",
    bgColor: "bg-green-50",
  },
];

export function MarketStatsSection() {
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
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {statsData.map((stat, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="relative overflow-hidden group hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <CardContent className="p-8 text-center relative">
                  {/* Icon */}
                  <motion.div
                    className={`mb-6 mx-auto w-16 h-16 rounded-full flex items-center justify-center ${stat.bgColor} ${stat.color}`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {stat.icon}
                  </motion.div>

                  {/* Value */}
                  <div className={`text-4xl font-bold mb-2 ${stat.color}`}>
                    {stat.value}
                  </div>

                  {/* Label */}
                  <p className="text-gray-600 font-medium text-center">
                    {stat.label}
                  </p>

                  {/* Decorative elements */}
                  <div className={`absolute top-4 right-4 w-2 h-2 rounded-full opacity-20 ${stat.bgColor.replace('bg-', 'bg-')}`} />
                  <div className={`absolute bottom-4 left-4 w-1 h-1 rounded-full opacity-30 ${stat.bgColor.replace('bg-', 'bg-')}`} />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional info */}
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
