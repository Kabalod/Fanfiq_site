"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Chart } from "@/components/ui/chart";
import { Badge } from "@/components/ui/badge";
import { BarChart3, PieChart, TrendingUp, Users } from "lucide-react";

const marketData = [
  { name: "AO3", value: 5000000, percentage: 50, color: "#6366f1" },
  { name: "Ficbook", value: 2000000, percentage: 20, color: "#8b5cf6" },
  { name: "Wattpad", value: 2500000, percentage: 25, color: "#06d6a0" },
  { name: "Другие", value: 500000, percentage: 5, color: "#f59e0b" },
];

const growthData = [
  { name: "2020", value: 15000000 },
  { name: "2021", value: 22000000 },
  { name: "2022", value: 31000000 },
  { name: "2023", value: 42000000 },
  { name: "2024", value: 50000000 },
];

const userEngagementData = [
  { name: "Ежедневные", value: 12000000 },
  { name: "Еженедельные", value: 25000000 },
  { name: "Ежемесячные", value: 35000000 },
  { name: "Случайные", value: 15000000 },
];

const revenueProjection = [
  { name: "Q1 2024", value: 50000 },
  { name: "Q2 2024", value: 125000 },
  { name: "Q3 2024", value: 280000 },
  { name: "Q4 2024", value: 450000 },
  { name: "Q1 2025", value: 650000 },
  { name: "Q2 2025", value: 920000 },
];

type ChartType = "market" | "growth" | "engagement" | "revenue";

export function InteractiveCharts() {
  const [activeChart, setActiveChart] = useState<ChartType>("market");

  const chartConfigs = {
    market: {
      title: "Распределение рынка фанфиков",
      subtitle: "По количеству активных пользователей",
      data: marketData,
      type: "pie" as const,
      icon: <PieChart className="w-5 h-5" />,
      colors: ["#6366f1", "#8b5cf6", "#06d6a0", "#f59e0b"],
    },
    growth: {
      title: "Рост глобальной аудитории",
      subtitle: "Количество читателей фанфиков по годам",
      data: growthData,
      type: "area" as const,
      icon: <TrendingUp className="w-5 h-5" />,
      colors: ["#6366f1"],
    },
    engagement: {
      title: "Активность пользователей",
      subtitle: "Частота чтения фанфиков",
      data: userEngagementData,
      type: "bar" as const,
      icon: <Users className="w-5 h-5" />,
      colors: ["#8b5cf6"],
    },
    revenue: {
      title: "Прогноз доходов",
      subtitle: "Ожидаемая выручка в долларах США",
      data: revenueProjection,
      type: "line" as const,
      icon: <BarChart3 className="w-5 h-5" />,
      colors: ["#06d6a0"],
    },
  };

  const currentConfig = chartConfigs[activeChart];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Аналитика и прогнозы
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Детальный анализ рынка и перспективы развития Fanfiq
          </p>
        </motion.div>

        {/* Chart Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {Object.entries(chartConfigs).map(([key, config]) => (
            <Button
              key={key}
              variant={activeChart === key ? "default" : "outline"}
              onClick={() => setActiveChart(key as ChartType)}
              className="flex items-center space-x-2"
            >
              {config.icon}
              <span>{config.title}</span>
            </Button>
          ))}
        </motion.div>

        {/* Chart Display */}
        <motion.div
          layout
          className="max-w-6xl mx-auto"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeChart}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="overflow-hidden shadow-2xl">
                <CardHeader className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-2xl flex items-center space-x-3">
                        {currentConfig.icon}
                        <span>{currentConfig.title}</span>
                      </CardTitle>
                      <p className="text-blue-100 mt-2">{currentConfig.subtitle}</p>
                    </div>
                    <Badge variant="secondary" className="bg-white/20 text-white">
                      {activeChart === "revenue" ? "Прогноз" : "Актуальные данные"}
                    </Badge>
                  </div>
                </CardHeader>
                
                <CardContent className="p-8">
                  <div className="h-96 w-full">
                    <Chart
                      data={currentConfig.data}
                      type={currentConfig.type}
                      colors={currentConfig.colors}
                      className="w-full h-full"
                    />
                  </div>

                  {/* Chart Insights */}
                  <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                    {activeChart === "market" && (
                      <>
                        <div className="text-center p-4 bg-blue-50 rounded-lg">
                          <div className="text-2xl font-bold text-blue-600 mb-1">50%</div>
                          <div className="text-sm text-gray-600">AO3 доминирует</div>
                        </div>
                        <div className="text-center p-4 bg-purple-50 rounded-lg">
                          <div className="text-2xl font-bold text-purple-600 mb-1">10M+</div>
                          <div className="text-sm text-gray-600">Общая аудитория</div>
                        </div>
                        <div className="text-center p-4 bg-green-50 rounded-lg">
                          <div className="text-2xl font-bold text-green-600 mb-1">4</div>
                          <div className="text-sm text-gray-600">Основные платформы</div>
                        </div>
                      </>
                    )}

                    {activeChart === "growth" && (
                      <>
                        <div className="text-center p-4 bg-blue-50 rounded-lg">
                          <div className="text-2xl font-bold text-blue-600 mb-1">+233%</div>
                          <div className="text-sm text-gray-600">Рост за 4 года</div>
                        </div>
                        <div className="text-center p-4 bg-purple-50 rounded-lg">
                          <div className="text-2xl font-bold text-purple-600 mb-1">50M</div>
                          <div className="text-sm text-gray-600">Текущая аудитория</div>
                        </div>
                        <div className="text-center p-4 bg-green-50 rounded-lg">
                          <div className="text-2xl font-bold text-green-600 mb-1">+19%</div>
                          <div className="text-sm text-gray-600">Годовой рост</div>
                        </div>
                      </>
                    )}

                    {activeChart === "engagement" && (
                      <>
                        <div className="text-center p-4 bg-blue-50 rounded-lg">
                          <div className="text-2xl font-bold text-blue-600 mb-1">35M</div>
                          <div className="text-sm text-gray-600">Ежемесячные читатели</div>
                        </div>
                        <div className="text-center p-4 bg-purple-50 rounded-lg">
                          <div className="text-2xl font-bold text-purple-600 mb-1">12M</div>
                          <div className="text-sm text-gray-600">Ежедневные читатели</div>
                        </div>
                        <div className="text-center p-4 bg-green-50 rounded-lg">
                          <div className="text-2xl font-bold text-green-600 mb-1">34%</div>
                          <div className="text-sm text-gray-600">Активность</div>
                        </div>
                      </>
                    )}

                    {activeChart === "revenue" && (
                      <>
                        <div className="text-center p-4 bg-blue-50 rounded-lg">
                          <div className="text-2xl font-bold text-blue-600 mb-1">$920K</div>
                          <div className="text-sm text-gray-600">Прогноз Q2 2025</div>
                        </div>
                        <div className="text-center p-4 bg-purple-50 rounded-lg">
                          <div className="text-2xl font-bold text-purple-600 mb-1">+1740%</div>
                          <div className="text-sm text-gray-600">Рост за 18 мес</div>
                        </div>
                        <div className="text-center p-4 bg-green-50 rounded-lg">
                          <div className="text-2xl font-bold text-green-600 mb-1">$2.3M</div>
                          <div className="text-sm text-gray-600">Годовой ARR</div>
                        </div>
                      </>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
