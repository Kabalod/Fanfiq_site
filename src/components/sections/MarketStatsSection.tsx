"use client";

import React from "react";
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
    <section className="section-padding bg-gradient-to-br from-white via-slate-50 to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-900 relative overflow-hidden">
      {/* Enhanced background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/3 to-indigo-500/5" />
      <div className="absolute top-40 left-20 w-96 h-96 bg-gradient-to-br from-blue-400/8 to-indigo-400/4 rounded-full blur-3xl" />
      
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-fluid-4xl font-bold text-foreground mb-6">
            Впечатляющие результаты
          </h2>
          <p className="text-fluid-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Цифры, которые говорят о нашем успехе и потенциале роста
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {statsData.map((stat, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="card-enhanced hover:scale-105 group h-full">
                <CardContent className="p-8 text-center relative">
                  {/* Enhanced Icon */}
                  <motion.div
                    className={`mb-8 mx-auto w-20 h-20 rounded-3xl flex items-center justify-center ${stat.bgColor} ${stat.color} group-hover:shadow-lg transition-all duration-300`}
                    whileHover={{ scale: 1.15, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                  >
                    {React.cloneElement(stat.icon, { 
                      className: "w-10 h-10" 
                    })}
                  </motion.div>

                  {/* Enhanced Value */}
                  <div className={`text-fluid-4xl font-black mb-4 ${stat.color} group-hover:scale-105 transition-transform duration-300`}>
                    {stat.value}
                  </div>

                  {/* Enhanced Label */}
                  <p className="text-fluid-base text-muted-foreground font-semibold leading-tight">
                    {stat.label}
                  </p>

                  {/* Enhanced decorative elements */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced additional info */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl px-8 py-4 shadow-lg border border-green-200/50 dark:border-green-700/30">
            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-white" />
            </div>
            <div className="text-left">
              <div className="text-fluid-lg font-bold text-green-700 dark:text-green-300">
                +127% за год
              </div>
              <div className="text-fluid-sm text-green-600 dark:text-green-400 font-medium">
                Рост аудитории
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
