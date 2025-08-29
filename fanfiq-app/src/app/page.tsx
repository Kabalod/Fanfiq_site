"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, BookOpen, Search, Users, Star, Menu, X, Zap, Shield, Target, TrendingUp, Clock, Globe, DollarSign } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { ParallaxHero } from "@/components/sections/ParallaxHero";
import { AnimatedStats } from "@/components/sections/AnimatedStats";
import { InteractiveCharts } from "@/components/sections/InteractiveCharts";
import { EnhancedRoadmap } from "@/components/sections/EnhancedRoadmap";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <Header />

      {/* Hero Section with Advanced Parallax */}
      <ParallaxHero />

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
      transition={{ duration: 0.8, ease: "easeOut" }}
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
            <a href="#stats" className="text-muted-foreground hover:text-foreground transition-colors">
              Статистика
            </a>
            <a href="#charts" className="text-muted-foreground hover:text-foreground transition-colors">
              Аналитика
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
              <a href="#stats" className="text-muted-foreground hover:text-foreground transition-colors">
                Статистика
              </a>
              <a href="#charts" className="text-muted-foreground hover:text-foreground transition-colors">
                Аналитика
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
    <section id="features" className="py-20 bg-muted/30 relative overflow-hidden">
      <div className="absolute top-20 left-10 w-64 h-64 bg-blue-400/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-foreground mb-4">
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
              <Card className="border-border hover:shadow-2xl transition-all duration-500 hover:scale-105 h-full bg-white/80 backdrop-blur-sm">
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
    <section id="pricing" className="py-20 bg-background relative overflow-hidden">
      <div className="absolute top-40 left-20 w-80 h-80 bg-gradient-to-r from-blue-400/3 to-purple-400/3 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Гибкие тарифы для каждого
          </h2>
          <p className="text-xl text-muted-foreground">Выберите план, подходящий именно вам</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <Card className={`border-border relative h-full ${
                plan.popular ? "ring-2 ring-accent shadow-2xl scale-105" : ""
              } hover:shadow-2xl transition-all duration-500`}>
                {plan.popular && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                  >
                    <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-accent text-accent-foreground">
                      🏆 Популярный
                    </Badge>
                  </motion.div>
                )}
                
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl text-card-foreground">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-5xl font-bold text-card-foreground">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                  <CardDescription className="mt-3 text-base">{plan.description}</CardDescription>
                </CardHeader>
                
                <CardContent className="flex-1">
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: featureIndex * 0.1, duration: 0.4 }}
                        className="flex items-center"
                      >
                        <CheckCircle className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                        <span className="text-card-foreground">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                  
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      className={`w-full ${
                        plan.popular 
                          ? "bg-accent text-accent-foreground hover:bg-accent/90" 
                          : "bg-primary text-primary-foreground hover:bg-primary/90"
                      }`}
                    >
                      {plan.name === "Бесплатно" ? "Начать бесплатно" : "Выбрать тариф"}
                    </Button>
                  </motion.div>
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
    <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 relative overflow-hidden">
      <div className="absolute inset-0 bg-black/10" />
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-purple-300/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Готовы открыть мир фанфиков?
          </h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto"
          >
            Присоединяйтесь к миллионам читателей, которые уже нашли свою любимую историю.
            Начните читать бесплатно уже сегодня!
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg font-semibold">
                🚀 Начать читать бесплатно
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg bg-transparent backdrop-blur-sm"
              >
                💼 Связаться с нами
              </Button>
            </motion.div>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-sm text-blue-200 mt-6"
          >
            14 дней бесплатно • Без обязательств • Мгновенная регистрация
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-card border-t border-border relative">
      <div className="absolute top-0 left-1/3 w-72 h-72 bg-gradient-to-r from-blue-400/3 to-purple-400/3 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid md:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
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
            </div>
          </motion.div>

          {/* Other footer columns */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            <h3 className="font-semibold text-card-foreground mb-4">Продукт</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-card-foreground transition-colors">Возможности</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-card-foreground transition-colors">Читалка</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-card-foreground transition-colors">Для авторов</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-card-foreground transition-colors">API</a></li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h3 className="font-semibold text-card-foreground mb-4">Компания</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-card-foreground transition-colors">О нас</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-card-foreground transition-colors">Блог</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-card-foreground transition-colors">Карьера</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-card-foreground transition-colors">Контакты</a></li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <h3 className="font-semibold text-card-foreground mb-4">Поддержка</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-card-foreground transition-colors">Справка</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-card-foreground transition-colors">Документация</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-card-foreground transition-colors">Сообщество</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-card-foreground transition-colors">Статус</a></li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="border-t border-border mt-12 pt-8 text-center"
        >
          <p className="text-muted-foreground">© 2024 Fanfiq. Все права защищены.</p>
        </motion.div>
      </div>
    </footer>
  );
}