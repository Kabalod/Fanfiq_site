"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, BookOpen, Users, Shield, Zap, Target } from "lucide-react";
import React from "react";

const features = [
  {
    icon: <Search className="w-8 h-8 text-accent" />,
    title: "Умный поиск",
    description: "Мощный полнотекстовый поиск по миллионам фанфиков с фильтрами и рекомендациями.",
  },
  {
    icon: <BookOpen className="w-8 h-8 text-accent" />,
    title: "Универсальная читалка",
    description: "Современная читалка с настройками шрифтов, тем и синхронизацией между устройствами.",
  },
  {
    icon: <Users className="w-8 h-8 text-accent" />,
    title: "Сообщество авторов",
    description: "Прямое взаимодействие с авторами, поддержка творчества и монетизация контента.",
  },
  {
    icon: <Shield className="w-8 h-8 text-accent" />,
    title: "Безопасность и приватность",
    description: "Защита персональных данных, модерация контента и безопасная среда для чтения.",
  },
  {
    icon: <Zap className="w-8 h-8 text-accent" />,
    title: "Быстрая синхронизация",
    description: "Мгновенная синхронизация закладок, истории чтения и настроек между всеми устройствами.",
  },
  {
    icon: <Target className="w-8 h-8 text-accent" />,
    title: "Персонализация",
    description: "AI-рекомендации на основе ваших предпочтений и история чтения.",
  },
];

export function OptimizedFeatures() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="features" className="section-padding bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-900 relative overflow-hidden">
      {/* Enhanced background decorations */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-indigo-400/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-br from-purple-400/10 to-pink-400/5 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-indigo-400/3 to-purple-400/3 rounded-full blur-3xl" />

      <div className="relative z-10">
        {/* Section Header */}
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-fluid-4xl font-bold text-foreground mb-6 text-gradient">
              Всё необходимое для комфортного чтения
            </h2>
            <p className="text-fluid-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Мощные инструменты для поиска, чтения и взаимодействия с фанфик-сообществом
            </p>
          </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {features.map((feature, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="card-enhanced hover:scale-105 h-full group">
                  <CardHeader className="pb-6">
                    <motion.div
                      className="mb-6 w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {React.cloneElement(feature.icon, { 
                        className: "w-8 h-8 text-primary" 
                      })}
                    </motion.div>
                    <CardTitle className="text-fluid-xl text-card-foreground mb-3 group-hover:text-primary transition-colors">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-fluid-base text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
        </motion.div>
      </div>
    </section>
  );
}
