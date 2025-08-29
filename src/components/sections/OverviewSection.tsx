"use client";

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export function OverviewSection() {
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
    <motion.section
      id="overview"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      className="py-16 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={itemVariants} className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            1. Обзор проекта
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6" />
        </motion.div>

        <motion.div variants={itemVariants} className="mb-12">
          <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-0">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <CardTitle className="text-xl mb-3">Название проекта</CardTitle>
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold">F</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-blue-600">Fanfiq</h3>
                      <p className="text-gray-600">Универсальный поиск и читалка фанфиков</p>
                    </div>
                  </div>
                </div>
                <div>
                  <CardTitle className="text-xl mb-3">Ключевая концепция</CardTitle>
                  <Badge variant="secondary" className="text-lg px-4 py-2 mb-2">
                    "Spotify для фанфиков"
                  </Badge>
                  <p className="text-gray-600 text-sm">
                    Единая точка входа для миллионов читателей
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Card>
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Описание проекта</h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                <strong>Fanfiq</strong> — это инновационная поисковая система и универсальная читалка фанфиков,
                которая объединяет контент с самых популярных платформ (Ficbook, AO3, Wattpad и др.)
                и делает его удобным для поиска и чтения в одном приложении.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.section>
  );
}
