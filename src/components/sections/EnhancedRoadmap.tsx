"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ProgressRing } from "@/components/ui/chart";
import { 
  CheckCircle, 
  Clock, 
  Zap, 
  Users, 
  Globe, 
  DollarSign, 
  ChevronRight,
  Calendar,
  Target
} from "lucide-react";

const roadmapData = [
  {
    id: "mvp",
    phase: "Этап 1: MVP",
    title: "Минимально жизнеспособный продукт",
    status: "completed",
    progress: 100,
    duration: "3 месяца",
    investment: "$50K",
    icon: <CheckCircle className="w-6 h-6" />,
    color: "#10b981",
    tasks: [
      "✅ API и база данных PostgreSQL",
      "✅ Парсер для Ficbook.net",
      "✅ Веб-интерфейс поиска",
      "✅ Базовая читалка",
      "✅ Автоматический деплой (Docker + Railway)"
    ],
    metrics: {
      users: "1K+",
      stories: "100K+",
      satisfaction: "89%"
    }
  },
  {
    id: "growth",
    phase: "Этап 2: Рост в РФ",
    title: "Расширение российского рынка",
    status: "in-progress",
    progress: 75,
    duration: "2 месяца",
    investment: "$75K",
    icon: <Zap className="w-6 h-6" />,
    color: "#6366f1",
    tasks: [
      "✅ Парсер для Author.Today",
      "✅ Интеграция с Litnet",
      "🔄 Улучшенная читалка v2.0",
      "🔄 Мониторинг и аналитика",
      "⏳ Система уведомлений"
    ],
    metrics: {
      users: "10K+",
      stories: "500K+",
      satisfaction: "92%"
    }
  },
  {
    id: "features",
    phase: "Этап 3: Пользовательские функции",
    title: "Персонализация и социальные функции",
    status: "planned",
    progress: 0,
    duration: "2 месяца",
    investment: "$100K",
    icon: <Users className="w-6 h-6" />,
    color: "#8b5cf6",
    tasks: [
      "⏳ Система регистрации и профилей",
      "⏳ Закладки и история чтения",
      "⏳ Подписки на авторов",
      "⏳ Персональные рекомендации",
      "⏳ Социальные функции (комментарии, рейтинги)"
    ],
    metrics: {
      users: "50K+",
      stories: "1M+",
      satisfaction: "94%"
    }
  },
  {
    id: "mobile",
    phase: "Этап 4: UX & Mobile",
    title: "Мобильное приложение и улучшенный UX",
    status: "planned",
    progress: 0,
    duration: "3 месяца",
    investment: "$150K",
    icon: <Target className="w-6 h-6" />,
    color: "#f59e0b",
    tasks: [
      "⏳ PWA-приложение",
      "⏳ Оффлайн чтение",
      "⏳ Настройки читалки (шрифты, темы)",
      "⏳ Экспорт в форматы (EPUB, PDF)",
      "⏳ Голосовое чтение (TTS)"
    ],
    metrics: {
      users: "100K+",
      stories: "2M+",
      satisfaction: "96%"
    }
  },
  {
    id: "international",
    phase: "Этап 5: Международный рынок",
    title: "Глобальная экспансия",
    status: "planned",
    progress: 0,
    duration: "4 месяца",
    investment: "$200K",
    icon: <Globe className="w-6 h-6" />,
    color: "#06d6a0",
    tasks: [
      "⏳ Парсер для AO3",
      "⏳ Интеграция с Fanfiction.net",
      "⏳ Локализация интерфейса (EN, ES, FR)",
      "⏳ Мультиязычный поиск",
      "⏳ Региональные серверы"
    ],
    metrics: {
      users: "1M+",
      stories: "10M+",
      satisfaction: "95%"
    }
  },
  {
    id: "monetization",
    phase: "Этап 6: Монетизация",
    title: "Устойчивая бизнес-модель",
    status: "planned",
    progress: 0,
    duration: "3 месяца",
    investment: "$250K",
    icon: <DollarSign className="w-6 h-6" />,
    color: "#ef4444",
    tasks: [
      "⏳ Pro-аккаунты с расширенными функциями",
      "⏳ Система монетизации для авторов",
      "⏳ Партнерская программа",
      "⏳ Нативная реклама",
      "⏳ Корпоративные решения"
    ],
    metrics: {
      users: "2M+",
      revenue: "$500K+/мес",
      satisfaction: "97%"
    }
  }
];

export function EnhancedRoadmap() {
  const [selectedPhase, setSelectedPhase] = useState<string | null>(null);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed": return "bg-green-100 text-green-800";
      case "in-progress": return "bg-blue-100 text-blue-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed": return "✅ Завершено";
      case "in-progress": return "🔄 В работе";
      default: return "⏳ Планируется";
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Детальная дорожная карта
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Пошаговый план развития Fanfiq от MVP до глобальной платформы с устойчивой монетизацией
          </p>
        </motion.div>

        {/* Timeline Overview */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <Card className="bg-white shadow-xl">
            <CardHeader>
              <CardTitle className="text-center text-2xl">Общий прогресс проекта</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap justify-center gap-8 mb-8">
                <div className="text-center">
                  <ProgressRing progress={29} size={120} color="#6366f1" />
                  <p className="mt-2 font-semibold">Общий прогресс</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-600 mb-2">$625K</div>
                  <p className="text-gray-600">Общие инвестиции</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">17 мес</div>
                  <p className="text-gray-600">Время до завершения</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Roadmap Cards */}
        <div className="space-y-8">
          {roadmapData.map((phase, index) => (
            <motion.div
              key={phase.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <Card className={`overflow-hidden hover:shadow-2xl transition-all duration-300 ${
                selectedPhase === phase.id ? 'ring-2 ring-blue-500' : ''
              }`}>
                <CardHeader 
                  className="cursor-pointer"
                  onClick={() => setSelectedPhase(selectedPhase === phase.id ? null : phase.id)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div 
                        className="w-12 h-12 rounded-full flex items-center justify-center text-white"
                        style={{ backgroundColor: phase.color }}
                      >
                        {phase.icon}
                      </div>
                      <div>
                        <CardTitle className="text-xl">{phase.phase}</CardTitle>
                        <p className="text-gray-600">{phase.title}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <Badge className={getStatusColor(phase.status)}>
                        {getStatusIcon(phase.status)}
                      </Badge>
                      <ProgressRing 
                        progress={phase.progress} 
                        size={60} 
                        color={phase.color}
                      />
                      <ChevronRight 
                        className={`w-5 h-5 transition-transform ${
                          selectedPhase === phase.id ? 'rotate-90' : ''
                        }`} 
                      />
                    </div>
                  </div>
                </CardHeader>

                <AnimatePresence>
                  {selectedPhase === phase.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <CardContent className="pt-0 border-t">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                          {/* Tasks */}
                          <div>
                            <h4 className="font-semibold text-lg mb-4 flex items-center">
                              <Target className="w-5 h-5 mr-2" />
                              Ключевые задачи
                            </h4>
                            <ul className="space-y-2">
                              {phase.tasks.map((task, taskIndex) => (
                                <motion.li
                                  key={taskIndex}
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: taskIndex * 0.1 }}
                                  className="text-gray-700"
                                >
                                  {task}
                                </motion.li>
                              ))}
                            </ul>
                          </div>

                          {/* Metrics & Details */}
                          <div className="space-y-6">
                            <div>
                              <h4 className="font-semibold text-lg mb-4 flex items-center">
                                <Calendar className="w-5 h-5 mr-2" />
                                Детали этапа
                              </h4>
                              <div className="grid grid-cols-2 gap-4">
                                <div className="bg-gray-50 p-3 rounded-lg">
                                  <div className="text-sm text-gray-600">Длительность</div>
                                  <div className="font-semibold">{phase.duration}</div>
                                </div>
                                <div className="bg-gray-50 p-3 rounded-lg">
                                  <div className="text-sm text-gray-600">Инвестиции</div>
                                  <div className="font-semibold">{phase.investment}</div>
                                </div>
                              </div>
                            </div>

                            <div>
                              <h4 className="font-semibold text-lg mb-4">Ожидаемые результаты</h4>
                              <div className="grid grid-cols-1 gap-3">
                                {Object.entries(phase.metrics).map(([key, value]) => (
                                  <div key={key} className="flex justify-between items-center bg-gray-50 p-3 rounded-lg">
                                    <span className="text-gray-600 capitalize">
                                      {key === 'users' ? 'Пользователи' : 
                                       key === 'stories' ? 'Фанфики' : 
                                       key === 'satisfaction' ? 'Удовлетворенность' :
                                       key === 'revenue' ? 'Доход' : key}
                                    </span>
                                    <span className="font-semibold" style={{ color: phase.color }}>
                                      {value}
                                    </span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Итоговые цели</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <div className="text-3xl font-bold mb-2">2M+</div>
                  <div className="text-blue-100">Активных пользователей</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">$6M+</div>
                  <div className="text-blue-100">Годовая выручка</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">97%</div>
                  <div className="text-blue-100">Удовлетворенность</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
