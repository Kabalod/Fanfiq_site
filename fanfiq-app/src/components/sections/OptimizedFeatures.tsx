"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, BookOpen, Users, Shield, Zap, Target } from "lucide-react";
import { Section, FluidText, ResponsiveGrid } from "@/components/layout/OptimizedLayout";

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
    <Section id="features" background="muted" padding="xl">
      {/* Background decorations */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-blue-400/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/5 rounded-full blur-3xl" />

      <div className="relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <FluidText variant="heading">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Всё необходимое для комфортного чтения
            </h2>
          </FluidText>
          <FluidText variant="body" className="mx-auto">
            <p className="text-xl text-muted-foreground">
              Мощные инструменты для поиска, чтения и взаимодействия с фанфик-сообществом
            </p>
          </FluidText>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <ResponsiveGrid 
            cols={{ default: 1, md: 2, lg: 3 }}
            gap={6}
            className="lg:gap-8"
          >
            {features.map((feature, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="border-border hover:shadow-2xl transition-all duration-500 hover:scale-105 h-full bg-white/80 backdrop-blur-sm">
                  <CardHeader className="pb-4">
                    <motion.div
                      className="mb-4"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {feature.icon}
                    </motion.div>
                    <FluidText variant="heading">
                      <CardTitle className="text-xl text-card-foreground">
                        {feature.title}
                      </CardTitle>
                    </FluidText>
                  </CardHeader>
                  <CardContent>
                    <FluidText variant="body">
                      <p className="text-muted-foreground">
                        {feature.description}
                      </p>
                    </FluidText>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </ResponsiveGrid>
        </motion.div>
      </div>
    </Section>
  );
}
