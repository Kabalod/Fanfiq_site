"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, BookOpen, Search, Users, Menu, X } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { ParallaxHero } from "@/components/sections/ParallaxHero";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <Header />

      {/* Hero Section with Advanced Parallax */}
      <ParallaxHero />

      {/* Features Section */}
      <FeaturesSection />

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
            <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">
              Тарифы
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
              Контакты
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
  ];

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
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Всё необходимое для комфортного чтения
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Мощные инструменты для поиска, чтения и взаимодействия с фанфик-сообществом
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
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
              <Card className={`border-border relative h-full ${plan.popular ? "ring-2 ring-accent" : ""}`}>
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
          <h2 className="text-4xl font-bold text-white mb-6">
            Готовы открыть мир фанфиков?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Присоединяйтесь к миллионам читателей, которые уже нашли свою любимую историю.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 px-8">
              Начать читать бесплатно
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8 bg-transparent">
              Связаться с нами
            </Button>
          </div>
        </motion.div>
    </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-card-foreground">Fanfiq</span>
          </div>
          <p className="text-muted-foreground">© 2024 Fanfiq. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}