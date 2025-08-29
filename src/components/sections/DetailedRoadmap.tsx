"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { CheckCircle, Clock, Zap, Users, Globe, DollarSign, Code, Database, Search, BookOpen, Shield, Target } from "lucide-react";

const detailedRoadmap = [
  {
    id: "mvp",
    phase: "Этап 1: MVP",
    title: "Минимально жизнеспособный продукт",
    status: "completed",
    progress: 100,
    icon: <CheckCircle className="w-6 h-6" />,
    color: "bg-green-500",
    traditionalTime: "59–80 ч",
    aiTime: "12–18 ч",
    savings: "4.5x быстрее",
    tasks: [
      "✅ API и база данных PostgreSQL с полнотекстовым поиском",
      "✅ Парсер для Ficbook.net (автоматический сбор контента)",
      "✅ Веб-интерфейс поиска с фильтрами",
      "✅ Базовая читалка с настройками",
      "✅ Автоматический деплой (Docker + Railway)"
    ],
    details: {
      backend: "FastAPI + PostgreSQL + Redis",
      frontend: "Next.js + Tailwind + shadcn/ui", 
      infrastructure: "Docker + Railway + GitHub Actions",
      features: "Поиск, чтение, базовые фильтры"
    }
  },
  {
    id: "growth",
    phase: "Этап 2: Рост в РФ",
    title: "Расширение российского рынка",
    status: "in-progress",
    progress: 75,
    icon: <Zap className="w-6 h-6" />,
    color: "bg-blue-500",
    traditionalTime: "58–77 ч",
    aiTime: "12–18 ч",
    savings: "4x быстрее",
    tasks: [
      "✅ Парсер для Author.Today (интеграция API)",
      "✅ Интеграция с Litnet и Fanfics.me",
      "🔄 Улучшенная читалка v2.0 (темы, шрифты, закладки)",
      "🔄 Система мониторинга и логирования",
      "⏳ Push-уведомления для новых глав"
    ],
    details: {
      parsers: "3 новых парсера + универсальный движок",
      reader: "Читалка с настройками и синхронизацией",
      monitoring: "Grafana + Prometheus + логирование",
      performance: "Кэширование + оптимизация запросов"
    }
  },
  {
    id: "features",
    phase: "Этап 3: Функции пользователей",
    title: "Персонализация и социальные функции",
    status: "planned",
    progress: 0,
    icon: <Users className="w-6 h-6" />,
    color: "bg-purple-500",
    traditionalTime: "55–75 ч",
    aiTime: "12–15 ч",
    savings: "4.5x быстрее",
    tasks: [
      "⏳ Система регистрации и авторизации (OAuth + JWT)",
      "⏳ Профили пользователей с настройками",
      "⏳ Безлимитные закладки и история чтения",
      "⏳ Подписки на авторов и уведомления",
      "⏳ Система рекомендаций на базе ML"
    ],
    details: {
      auth: "OAuth (Google, VK) + собственная регистрация",
      profiles: "Настройки читалки, статистика, достижения",
      social: "Подписки, комментарии, рейтинги",
      ml: "Рекомендательная система на основе предпочтений"
    }
  },
  {
    id: "mobile",
    phase: "Этап 4: UX & Mobile",
    title: "Мобильное приложение и улучшенный UX",
    status: "planned",
    progress: 0,
    icon: <Target className="w-6 h-6" />,
    color: "bg-orange-500",
    traditionalTime: "62–83 ч",
    aiTime: "12–18 ч",
    savings: "4.5x быстрее",
    tasks: [
      "⏳ PWA-приложение с оффлайн режимом",
      "⏳ Мобильная читалка с жестами",
      "⏳ Настройки шрифтов, тем, яркости",
      "⏳ Экспорт в форматы (EPUB, PDF, TXT)",
      "⏳ Голосовое чтение (Text-to-Speech)"
    ],
    details: {
      pwa: "Service Workers + offline кэширование",
      mobile: "Touch жесты, адаптивный UI",
      export: "Генерация EPUB/PDF на сервере",
      tts: "Web Speech API + голосовые движки"
    }
  },
  {
    id: "international",
    phase: "Этап 5: Международный рынок",
    title: "Глобальная экспансия",
    status: "planned",
    progress: 0,
    icon: <Globe className="w-6 h-6" />,
    color: "bg-indigo-500",
    traditionalTime: "72–98 ч",
    aiTime: "15–21 ч",
    savings: "4.5x быстрее",
    tasks: [
      "⏳ Парсер для AO3 (Archive of Our Own)",
      "⏳ Интеграция с Fanfiction.net",
      "⏳ Локализация интерфейса (EN, ES, FR, DE)",
      "⏳ Мультиязычный поиск и индексация",
      "⏳ Региональные CDN серверы"
    ],
    details: {
      platforms: "AO3, FF.net + 10+ международных платформ",
      i18n: "Полная локализация на 5 языков",
      search: "Мультиязычная индексация с NLP",
      cdn: "Глобальная сеть для быстрой загрузки"
    }
  },
  {
    id: "monetization",
    phase: "Этап 6: Монетизация",
    title: "Устойчивая бизнес-модель",
    status: "planned",
    progress: 0,
    icon: <DollarSign className="w-6 h-6" />,
    color: "bg-emerald-500",
    traditionalTime: "67–93 ч",
    aiTime: "15–21 ч",
    savings: "4x быстрее",
    tasks: [
      "⏳ Pro-аккаунты ($3–5/мес) с расширенными функциями",
      "⏳ Система монетизации для авторов",
      "⏳ Партнерская программа с издательствами",
      "⏳ Нативная реклама (CPM $2–4)",
      "⏳ Корпоративные решения для библиотек"
    ],
    details: {
      subscription: "3 уровня подписки + корпоративные планы",
      creators: "Донаты, платные главы, эксклюзивный контент",
      partnerships: "5–10% от продаж книг авторов",
      advertising: "Нативная реклама в результатах поиска"
    }
  }
];

export function DetailedRoadmap() {
  const totalTraditional = 373; // 59+58+55+62+72+67
  const totalAI = 27; // 12+12+12+12+15+15 (минимальные значения)
  const totalAIMax = 36; // 18+18+15+18+21+21 (максимальные значения)

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed": return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300";
      case "in-progress": return "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300";
      default: return "bg-gray-100 text-gray-800 dark:bg-gray-800/30 dark:text-gray-300";
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
    <section className="section-padding bg-gradient-to-br from-slate-50 via-indigo-50 to-blue-50 dark:from-slate-900 dark:via-indigo-900 dark:to-blue-900 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-indigo-400/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-purple-400/10 to-pink-400/5 rounded-full blur-3xl" />

      <div className="container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-fluid-4xl font-bold text-foreground mb-6">
            Детальная дорожная карта разработки
          </h2>
          <p className="text-fluid-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Пошаговый план развития Fanfiq от MVP до глобальной платформы с детальным сравнением времени разработки
          </p>
        </motion.div>

        {/* Time Comparison Overview */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <Card className="card-enhanced">
            <CardHeader className="text-center pb-6">
              <CardTitle className="text-fluid-3xl text-gradient mb-4">
                Сравнение времени разработки
              </CardTitle>
              <p className="text-fluid-lg text-muted-foreground">
                Революционное ускорение с ИИ-ассистентом
              </p>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Traditional Development */}
                <div className="text-center p-6 bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 rounded-2xl">
                  <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-fluid-3xl font-black text-red-600 dark:text-red-400 mb-2">
                    {totalTraditional}–506 ч
                  </div>
                  <div className="text-fluid-base text-red-700 dark:text-red-300 font-semibold mb-2">
                    (2.5–3 месяца)
                  </div>
                  <div className="text-fluid-sm text-red-600 dark:text-red-400">
                    Middle-разработчик
                  </div>
                </div>

                {/* AI Development */}
                <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-fluid-3xl font-black text-green-600 dark:text-green-400 mb-2">
                    {totalAI}–{totalAIMax} ч
                  </div>
                  <div className="text-fluid-base text-green-700 dark:text-green-300 font-semibold mb-2">
                    (6–9 рабочих дней)
                  </div>
                  <div className="text-fluid-sm text-green-600 dark:text-green-400">
                    С ИИ-ассистентом
                  </div>
                </div>

                {/* Acceleration */}
                <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl">
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-fluid-3xl font-black text-blue-600 dark:text-blue-400 mb-2">
                    ~14x
                  </div>
                  <div className="text-fluid-base text-blue-700 dark:text-blue-300 font-semibold mb-2">
                    ускорение
                  </div>
                  <div className="text-fluid-sm text-blue-600 dark:text-blue-400">
                    с ИИ-технологиями
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Detailed Phases */}
        <div className="space-y-8">
          {detailedRoadmap.map((phase, index) => (
            <motion.div
              key={phase.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <Card className="card-enhanced overflow-hidden">
                <CardHeader className="pb-6">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                    <div className="flex items-center space-x-4">
                      <div 
                        className={`w-16 h-16 rounded-2xl flex items-center justify-center text-white ${phase.color} shadow-lg`}
                      >
                        {phase.icon}
                      </div>
                      <div>
                        <CardTitle className="text-fluid-2xl text-card-foreground mb-2">
                          {phase.phase}
                        </CardTitle>
                        <p className="text-fluid-lg text-muted-foreground">
                          {phase.title}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                      <Badge className={getStatusColor(phase.status)}>
                        {getStatusText(phase.status)}
                      </Badge>
                      <div className="text-center lg:text-right min-w-[120px]">
                        <div className="text-fluid-3xl font-bold text-primary mb-1">
                          {phase.progress}%
                        </div>
                        <Progress value={phase.progress} className="h-3 w-full lg:w-24" />
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-8">
                  {/* Time Comparison */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20 p-6 rounded-xl">
                      <h4 className="font-bold text-red-800 dark:text-red-300 mb-3 flex items-center">
                        <Clock className="w-5 h-5 mr-2" />
                        Без ИИ
                      </h4>
                      <div className="text-2xl font-bold text-red-600 dark:text-red-400 mb-1">
                        {phase.traditionalTime}
                      </div>
                      <div className="text-sm text-red-700 dark:text-red-300">
                        Традиционная разработка
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 p-6 rounded-xl">
                      <h4 className="font-bold text-green-800 dark:text-green-300 mb-3 flex items-center">
                        <Zap className="w-5 h-5 mr-2" />
                        С ИИ
                      </h4>
                      <div className="text-2xl font-bold text-green-600 dark:text-green-400 mb-1">
                        {phase.aiTime}
                      </div>
                      <div className="text-sm text-green-700 dark:text-green-300">
                        С ИИ-ассистентом
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 p-6 rounded-xl">
                      <h4 className="font-bold text-blue-800 dark:text-blue-300 mb-3 flex items-center">
                        <Target className="w-5 h-5 mr-2" />
                        Экономия
                      </h4>
                      <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">
                        {phase.savings}
                      </div>
                      <div className="text-sm text-blue-700 dark:text-blue-300">
                        Ускорение времени
                      </div>
                    </div>
                  </div>

                  {/* Tasks and Technical Details */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Tasks */}
                    <div>
                      <h4 className="font-bold text-fluid-lg text-card-foreground mb-4 flex items-center">
                        <CheckCircle className="w-6 h-6 mr-2 text-primary" />
                        Ключевые задачи
                      </h4>
                      <ul className="space-y-3">
                        {phase.tasks.map((task, taskIndex) => (
                          <motion.li
                            key={taskIndex}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: taskIndex * 0.1, duration: 0.4 }}
                            className="text-fluid-base text-muted-foreground leading-relaxed"
                          >
                            {task}
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Technical Details */}
                    <div>
                      <h4 className="font-bold text-fluid-lg text-card-foreground mb-4 flex items-center">
                        <Code className="w-6 h-6 mr-2 text-accent" />
                        Технические детали
                      </h4>
                      <div className="space-y-3">
                        {Object.entries(phase.details).map(([key, value], detailIndex) => (
                          <motion.div
                            key={key}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: detailIndex * 0.1, duration: 0.4 }}
                            className="bg-muted/50 p-4 rounded-lg"
                          >
                            <div className="text-sm font-semibold text-card-foreground capitalize mb-1">
                              {key === 'backend' ? 'Backend' :
                               key === 'frontend' ? 'Frontend' :
                               key === 'infrastructure' ? 'Инфраструктура' :
                               key === 'features' ? 'Функции' :
                               key === 'parsers' ? 'Парсеры' :
                               key === 'reader' ? 'Читалка' :
                               key === 'monitoring' ? 'Мониторинг' :
                               key === 'performance' ? 'Производительность' :
                               key === 'auth' ? 'Авторизация' :
                               key === 'profiles' ? 'Профили' :
                               key === 'social' ? 'Социальные функции' :
                               key === 'ml' ? 'Машинное обучение' :
                               key === 'pwa' ? 'PWA' :
                               key === 'mobile' ? 'Мобильная версия' :
                               key === 'export' ? 'Экспорт' :
                               key === 'tts' ? 'Голосовое чтение' :
                               key === 'platforms' ? 'Платформы' :
                               key === 'i18n' ? 'Локализация' :
                               key === 'search' ? 'Поиск' :
                               key === 'cdn' ? 'CDN' :
                               key === 'subscription' ? 'Подписки' :
                               key === 'creators' ? 'Авторы' :
                               key === 'partnerships' ? 'Партнерства' :
                               key === 'advertising' ? 'Реклама' : key}:
                            </div>
                            <div className="text-sm text-muted-foreground leading-relaxed">
                              {value}
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Final Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-20"
        >
          <Card className="bg-gradient-to-br from-indigo-600 to-purple-600 text-white border-0 shadow-2xl">
            <CardContent className="p-12 text-center">
              <h3 className="text-fluid-3xl font-bold mb-8">
                Итоговая экономия времени
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div>
                  <div className="text-fluid-4xl font-black mb-2">
                    {totalTraditional}–506 ч
                  </div>
                  <div className="text-blue-100 text-fluid-lg font-medium">
                    Без ИИ (2.5–3 месяца)
                  </div>
                </div>
                <div>
                  <div className="text-fluid-4xl font-black mb-2">
                    {totalAI}–{totalAIMax} ч
                  </div>
                  <div className="text-blue-100 text-fluid-lg font-medium">
                    С ИИ (6–9 дней)
                  </div>
                </div>
                <div>
                  <div className="text-fluid-4xl font-black mb-2 text-yellow-300">
                    ~14x
                  </div>
                  <div className="text-blue-100 text-fluid-lg font-medium">
                    Ускорение разработки
                  </div>
                </div>
              </div>
              <p className="text-fluid-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                ИИ-ассистент позволяет сократить время разработки с месяцев до недель, 
                обеспечивая при этом высокое качество кода и современную архитектуру.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
