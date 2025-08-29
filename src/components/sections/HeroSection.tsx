"use client";

import { motion } from 'framer-motion';
import { ArrowRight, Users, Clock, Zap } from 'lucide-react';
import { statsData } from '@/lib/data';

export function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800 text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-black/10" />
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Badges */}
            <div className="flex flex-wrap gap-3">
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-sm font-medium"
              >
                🚀 MVP Готов
              </motion.span>
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="inline-flex items-center px-4 py-2 bg-green-500/20 backdrop-blur-sm border border-green-300/30 rounded-full text-sm font-medium"
              >
                🔥 Популярный рынок
              </motion.span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-4xl md:text-6xl font-bold leading-tight"
              >
                Fanfiq
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-xl md:text-2xl font-medium text-blue-200"
              >
                "Spotify для фанфиков"
              </motion.p>
            </div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-lg text-blue-100 leading-relaxed"
            >
              Единая точка входа для миллионов читателей фанфиков.
              Агрегируем контент с самых популярных платформ в одном удобном приложении.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
              >
                🚀 Начать использовать
                <ArrowRight className="ml-2 w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center px-8 py-3 border border-white/30 text-white font-medium rounded-lg hover:bg-white/10 transition-colors backdrop-blur-sm"
              >
                📖 Изучить документацию
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Stats Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-2 gap-4"
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-center"
            >
              <Users className="w-8 h-8 mx-auto mb-3 text-blue-200" />
              <div className="text-2xl md:text-3xl font-bold mb-1">
                {(statsData.russiaUsers / 1000000).toFixed(1)}M+
              </div>
              <div className="text-sm text-blue-100">Читателей в России</div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-center"
            >
              <Users className="w-8 h-8 mx-auto mb-3 text-purple-200" />
              <div className="text-2xl md:text-3xl font-bold mb-1">
                {(statsData.globalUsers / 1000000).toFixed(0)}M+
              </div>
              <div className="text-sm text-purple-100">Глобальных пользователей</div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-center"
            >
              <Zap className="w-8 h-8 mx-auto mb-3 text-yellow-200" />
              <div className="text-2xl md:text-3xl font-bold mb-1">
                {statsData.acceleration}x
              </div>
              <div className="text-sm text-yellow-100">Ускорение с ИИ</div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-center"
            >
              <Clock className="w-8 h-8 mx-auto mb-3 text-green-200" />
              <div className="text-2xl md:text-3xl font-bold mb-1">
                {statsData.timeToComplete} нед
              </div>
              <div className="text-sm text-green-100">До полной готовности</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
