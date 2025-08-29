"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, BookOpen, Search, Users, Star, Menu, X, Zap, Shield, Target, TrendingUp, Clock } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { AnimatedStats } from "@/components/sections/AnimatedStats";
import { InteractiveCharts } from "@/components/sections/InteractiveCharts";
import { EnhancedRoadmap } from "@/components/sections/EnhancedRoadmap";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <HeroSection />

      {/* Features Section */}
      <FeaturesSection />

      {/* Animated Stats */}
      <AnimatedStats />

      {/* Interactive Charts */}
      <InteractiveCharts />

      {/* Enhanced Roadmap */}
      <EnhancedRoadmap />

      {/* Pricing Section */}
      <PricingSection />

      {/* Final CTA Section */}
      <FinalCTASection />

      {/* Footer */}
      <Footer />
    </div>
  );
}

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <motion.div
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-foreground">Fanfiq</span>
          </motion.div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
              Возможности
            </a>
            <a href="#market" className="text-muted-foreground hover:text-foreground transition-colors">
              Рынок
            </a>
            <a href="#roadmap" className="text-muted-foreground hover:text-foreground transition-colors">
              Дорожная карта
            </a>
            <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">
              Тарифы
            </a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
              Войти
            </Button>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
              Начать читать
            </Button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Открыть меню"
          >
            <motion.div
              animate={{ rotate: isMenuOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.div>
          </button>
        </div>

        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden py-4 border-t border-border overflow-hidden"
          >
            <nav className="flex flex-col space-y-4">
              <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
                Возможности
              </a>
              <a href="#market" className="text-muted-foreground hover:text-foreground transition-colors">
                Рынок
              </a>
              <a href="#roadmap" className="text-muted-foreground hover:text-foreground transition-colors">
                Дорожная карта
              </a>
              <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">
                Тарифы
              </a>
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="ghost" className="justify-start">
                  Войти
                </Button>
                <Button className="justify-start bg-primary text-primary-foreground">
                  Начать читать
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}

function HeroSection() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800 text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-black/10" />
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Badge variant="secondary" className="mb-6 bg-white/20 text-white border-white/30">
              🚀 MVP Готов к запуску
            </Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-balance"
          >
            Fanfiq
            <span className="block text-2xl md:text-3xl font-medium text-blue-200 mt-2">
              "Spotify для фанфиков"
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto text-pretty"
          >
            Единая точка входа для миллионов читателей фанфиков.
            Агрегируем контент с самых популярных платформ в одном удобном приложении.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 px-8">
              Начать читать
            </Button>
            <Button size="lg" variant="outline" className="px-8 bg-transparent border-white text-white hover:bg-white/10">
              Изучить возможности
            </Button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-sm text-blue-200 mt-4"
          >
            Бесплатная регистрация • 14 дней бесплатно • Без обязательств
          </motion.p>
        </div>
      </div>
    </section>
  );
}

function FeaturesSection() {
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
    <section id="features" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Всё необходимое для комфортного чтения
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Мощные инструменты для поиска, чтения и взаимодействия с фанфик-сообществом
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="border-border hover:shadow-lg transition-all duration-300 hover:scale-105 h-full">
                <CardHeader>
                  <div className="mb-4">{feature.icon}</div>
                  <CardTitle className="text-xl text-card-foreground">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function MarketSection() {
  const stats = [
    { label: "Читателей в России", value: "2M+", icon: <Users className="w-6 h-6" /> },
    { label: "Глобальных пользователей", value: "50M+", icon: <Users className="w-6 h-6" /> },
    { label: "Ускорение с ИИ", value: "14x", icon: <Zap className="w-6 h-6" /> },
    { label: "До полной готовности", value: "6 нед", icon: <Clock className="w-6 h-6" /> },
  ];

  return (
    <section id="market" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Огромный рынок фанфиков
          </h2>
          <p className="text-xl text-muted-foreground">Миллионы читателей ждут единой платформы</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="text-accent mb-4">{stat.icon}</div>
                  <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                  <p className="text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-foreground mb-4">Распределение платформ</h3>
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-white font-bold text-lg">AO3</span>
                    </div>
                    <div className="text-2xl font-bold text-foreground">50%</div>
                    <p className="text-muted-foreground">5M+ пользователей</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-white font-bold text-lg">FB</span>
                    </div>
                    <div className="text-2xl font-bold text-foreground">20%</div>
                    <p className="text-muted-foreground">2M+ пользователей</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-white font-bold text-lg">WP</span>
                    </div>
                    <div className="text-2xl font-bold text-foreground">25%</div>
                    <p className="text-muted-foreground">2.5M+ пользователей</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gray-500 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-white font-bold text-lg">Др</span>
                    </div>
                    <div className="text-2xl font-bold text-foreground">5%</div>
                    <p className="text-muted-foreground">500K+ пользователей</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

function RoadmapSection() {
  const phases = [
    {
      phase: "Этап 1: MVP",
      status: "Завершено",
      items: ["API и база данных", "Парсер Ficbook.net", "Веб-интерфейс поиска"],
      progress: 100,
      color: "bg-green-500",
    },
    {
      phase: "Этап 2: Рост в РФ",
      status: "В работе",
      items: ["Парсеры для Author.Today", "Litnet и другие платформы", "Первая версия читалки"],
      progress: 75,
      color: "bg-blue-500",
    },
    {
      phase: "Этап 3: Функции",
      status: "Планируется",
      items: ["Регистрация и профили", "Закладки и история", "Система рекомендаций"],
      progress: 0,
      color: "bg-gray-400",
    },
    {
      phase: "Этап 4: Монетизация",
      status: "Планируется",
      items: ["Pro-аккаунты", "Реклама и партнерства", "Платные подписки"],
      progress: 0,
      color: "bg-gray-400",
    },
  ];

  return (
    <section id="roadmap" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Дорожная карта развития
          </h2>
          <p className="text-xl text-muted-foreground">От MVP к полноценной экосистеме</p>
        </motion.div>

        <div className="space-y-8">
          {phases.map((phase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <Card className="overflow-hidden">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-xl text-card-foreground">{phase.phase}</CardTitle>
                      <Badge
                        variant={phase.status === "Завершено" ? "default" : phase.status === "В работе" ? "secondary" : "outline"}
                        className="mt-2"
                      >
                        {phase.status}
                      </Badge>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-accent">{phase.progress}%</div>
                      <div className="w-24 h-2 bg-muted rounded-full mt-2">
                        <div
                          className={`h-full rounded-full transition-all duration-1000 ${phase.color}`}
                          style={{ width: `${phase.progress}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {phase.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                        <span className="text-card-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PricingSection() {
  const plans = [
    {
      name: "Бесплатно",
      price: "₽0",
      period: "/месяц",
      description: "Идеально для знакомства с платформой",
      features: [
        "Поиск по миллионам фанфиков",
        "Базовая читалка",
        "Закладки (до 50)",
        "История чтения",
        "Мобильное приложение",
      ],
      popular: false,
    },
    {
      name: "Pro",
      price: "₽299",
      period: "/месяц",
      description: "Для активных читателей",
      features: [
        "Все функции бесплатного плана",
        "Безлимитные закладки",
        "Расширенные фильтры поиска",
        "Оффлайн чтение",
        "Персональные рекомендации",
        "Поддержка авторов",
      ],
      popular: true,
    },
    {
      name: "Автор",
      price: "₽499",
      period: "/месяц",
      description: "Для писателей и авторов",
      features: [
        "Все функции Pro",
        "Публикация фанфиков",
        "Аналитика просмотров",
        "Монетизация контента",
        "Прямое взаимодействие с читателями",
        "Приоритетная поддержка",
      ],
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Гибкие тарифы для каждого
          </h2>
          <p className="text-xl text-muted-foreground">Выберите план, подходящий именно вам</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <Card className={`border-border relative ${plan.popular ? "ring-2 ring-accent" : ""}`}>
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-accent text-accent-foreground">
                    Популярный
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-card-foreground">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-card-foreground">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                  <CardDescription className="mt-2">{plan.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                        <span className="text-card-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full ${plan.popular ? "bg-accent text-accent-foreground hover:bg-accent/90" : "bg-primary text-primary-foreground hover:bg-primary/90"}`}
                  >
                    {plan.name === "Бесплатно" ? "Начать бесплатно" : "Выбрать тариф"}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Готовы открыть мир фанфиков?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Присоединяйтесь к миллионам читателей, которые уже нашли свою любимую историю.
            Начните читать бесплатно уже сегодня!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 px-8">
              Начать читать бесплатно
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10 px-8 bg-transparent"
            >
              Связаться с нами
            </Button>
          </div>
          <p className="text-sm text-blue-200 mt-4">14 дней бесплатно • Без обязательств • Мгновенная регистрация</p>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-card-foreground">Fanfiq</span>
            </div>
            <p className="text-muted-foreground mb-4">
              Единая точка входа для миллионов читателей фанфиков.
              Агрегируем контент с самых популярных платформ.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-card-foreground transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
              <a href="#" className="text-muted-foreground hover:text-card-foreground transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                </svg>
              </a>
              <a href="#" className="text-muted-foreground hover:text-card-foreground transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-card-foreground mb-4">Продукт</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-muted-foreground hover:text-card-foreground transition-colors">
                  Возможности
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-card-foreground transition-colors">
                  Читалка
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-card-foreground transition-colors">
                  Для авторов
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-card-foreground transition-colors">
                  API
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-card-foreground mb-4">Компания</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-muted-foreground hover:text-card-foreground transition-colors">
                  О нас
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-card-foreground transition-colors">
                  Блог
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-card-foreground transition-colors">
                  Карьера
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-card-foreground transition-colors">
                  Контакты
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-card-foreground mb-4">Поддержка</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-muted-foreground hover:text-card-foreground transition-colors">
                  Справка
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-card-foreground transition-colors">
                  Документация
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-card-foreground transition-colors">
                  Сообщество
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-card-foreground transition-colors">
                  Статус
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="text-muted-foreground">© 2024 Fanfiq. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}
