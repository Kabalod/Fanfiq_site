"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { CheckCircle, Zap, Users, Globe, DollarSign } from "lucide-react";

const roadmapData = [
  {
    id: "mvp",
    phase: "Этап 1: MVP",
    title: "Минимально жизнеспособный продукт",
    status: "completed",
    progress: 100,
    duration: "3 месяца",
    icon: <CheckCircle className="w-6 h-6" />,
    color: "bg-green-500",
    tasks: [
      "✅ API и база данных PostgreSQL",
      "✅ Парсер для Ficbook.net", 
      "✅ Веб-интерфейс поиска",
      "✅ Базовая читалка"
    ]
  },
  {
    id: "growth",
    phase: "Этап 2: Рост в РФ",
    title: "Расширение российского рынка",
    status: "in-progress",
    progress: 75,
    duration: "2 месяца",
    icon: <Zap className="w-6 h-6" />,
    color: "bg-blue-500",
    tasks: [
      "✅ Парсер для Author.Today",
      "✅ Интеграция с Litnet",
      "🔄 Улучшенная читалка v2.0",
      "⏳ Система уведомлений"
    ]
  },
  {
    id: "features",
    phase: "Этап 3: Пользовательские функции",
    title: "Персонализация и социальные функции",
    status: "planned",
    progress: 0,
    duration: "2 месяца",
    icon: <Users className="w-6 h-6" />,
    color: "bg-purple-500",
    tasks: [
      "⏳ Система регистрации",
      "⏳ Закладки и история",
      "⏳ Подписки на авторов",
      "⏳ Персональные рекомендации"
    ]
  },
  {
    id: "international",
    phase: "Этап 4: Международный рынок",
    title: "Глобальная экспансия",
    status: "planned",
    progress: 0,
    duration: "4 месяца",
    icon: <Globe className="w-6 h-6" />,
    color: "bg-indigo-500",
    tasks: [
      "⏳ Парсер для AO3",
      "⏳ Интеграция с Fanfiction.net",
      "⏳ Локализация (EN, ES, FR)",
      "⏳ Мультиязычный поиск"
    ]
  },
  {
    id: "monetization",
    phase: "Этап 5: Монетизация",
    title: "Устойчивая бизнес-модель",
    status: "planned",
    progress: 0,
    duration: "3 месяца",
    icon: <DollarSign className="w-6 h-6" />,
    color: "bg-green-500",
    tasks: [
      "⏳ Pro-аккаунты",
      "⏳ Система монетизации авторов",
      "⏳ Партнерская программа",
      "⏳ Нативная реклама"
    ]
  }
];

export function SimpleRoadmapSection() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed": return "bg-green-100 text-green-800";
      case "in-progress": return "bg-blue-100 text-blue-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "completed": return "✅ Завершено";
      case "in-progress": return "🔄 В работе";
      default: return "⏳ Планируется";
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Дорожная карта развития
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Пошаговый план развития Fanfiq от MVP до глобальной платформы
          </p>
        </motion.div>

        <div className="space-y-8">
          {roadmapData.map((phase, index) => (
            <motion.div
              key={phase.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <Card className="overflow-hidden hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div 
                        className={`w-12 h-12 rounded-full flex items-center justify-center text-white ${phase.color}`}
                      >
                        {phase.icon}
                      </div>
                      <div>
                        <CardTitle className="text-xl">{phase.phase}</CardTitle>
                        <p className="text-gray-600 text-base">{phase.title}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <Badge className={getStatusColor(phase.status)}>
                        {getStatusText(phase.status)}
                      </Badge>
                      <div className="text-right min-w-[80px]">
                        <div className="text-2xl font-bold text-blue-600 mb-1">
                          {phase.progress}%
                        </div>
                        <div className="text-sm text-gray-500">
                          {phase.duration}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <Progress value={phase.progress} className="h-2" />
                  </div>
                </CardHeader>

                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-lg mb-3">Ключевые задачи</h4>
                      <ul className="space-y-2">
                        {phase.tasks.map((task, taskIndex) => (
                          <motion.li
                            key={taskIndex}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: taskIndex * 0.1, duration: 0.4 }}
                            className="text-gray-700"
                          >
                            {task}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex items-center justify-center">
                      <div className="text-center p-6 bg-gray-50 rounded-lg">
                        <div className="text-3xl font-bold text-gray-800 mb-2">
                          {phase.duration}
                        </div>
                        <div className="text-gray-600">
                          Длительность этапа
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
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
          className="mt-16"
        >
          <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-6">Итоговые цели проекта</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <div className="text-4xl font-bold mb-2">2M+</div>
                  <div className="text-blue-100">Активных пользователей</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">17 мес</div>
                  <div className="text-blue-100">Общее время разработки</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">$500K+</div>
                  <div className="text-blue-100">Месячная выручка</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
