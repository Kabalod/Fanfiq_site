# Fanfiq - Современная React лендинговая страница

## 🚀 Описание проекта

Fanfiq — это современное React приложение для лендинговой страницы проекта фанфик-платформы. Построено с использованием Next.js 15, TypeScript, Tailwind CSS, shadcn/ui и Framer Motion.

## ✨ Особенности

- **🎨 Современный дизайн** - Использует shadcn/ui компоненты
- **📱 Полностью адаптивный** - Работает на всех устройствах
- **⚡ Быстрая анимация** - Framer Motion для плавных переходов
- **🌙 Темная тема** - Поддержка светлой и темной темы
- **🔧 TypeScript** - Полная типизация для надежности
- **🎯 SEO оптимизация** - Правильные метаданные и структура

## 🛠 Технологии

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Components:** shadcn/ui
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Fonts:** Inter (Google Fonts)

## 📦 Установка и запуск

### Предварительные требования

- Node.js 18+
- npm или yarn

### Установка зависимостей

```bash
npm install
```

### Запуск в режиме разработки

```bash
npm run dev
```

Приложение будет доступно на http://localhost:3000

### Сборка для продакшена

```bash
npm run build
npm start
```

## 📁 Структура проекта

```
fanfiq-app/
├── src/
│   ├── app/
│   │   ├── layout.tsx      # Корневой layout
│   │   ├── page.tsx        # Главная страница
│   │   └── globals.css     # Глобальные стили
│   ├── components/
│   │   ├── ui/            # Переиспользуемые UI компоненты
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── badge.tsx
│   │   │   └── ...
│   │   └── sections/      # Компоненты секций страницы
│   │       └── ...
│   ├── hooks/             # Пользовательские хуки
│   ├── lib/               # Утилиты и константы
│   └── types/             # TypeScript типы
├── public/                # Статические файлы
├── package.json
├── tailwind.config.ts
├── next.config.ts
└── README.md
```

## 🎨 Дизайн система

### Цветовая палитра

Проект использует современную дизайн-систему с CSS переменными:

- **Primary:** Синий (#6366f1)
- **Secondary:** Фиолетовый (#8b5cf6)
- **Accent:** Синий акцент (#6366f1)
- **Background:** Светло-серый (#f8fafc)
- **Foreground:** Темно-серый (#374151)

### Компоненты

Все компоненты построены с использованием shadcn/ui:

- **Button** - Кнопки с различными вариантами
- **Card** - Карточки для контента
- **Badge** - Значки и лейблы
- **Progress** - Индикаторы прогресса
- **Alert** - Уведомления
- **Avatar** - Аватары пользователей

## 🚀 Деплой

### Vercel (рекомендуется)

1. Импортируйте репозиторий на Vercel
2. Vercel автоматически настроит сборку
3. Сайт будет доступен по сгенерированному URL

### Другие платформы

Проект можно развернуть на:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 📊 Производительность

- **First Contentful Paint:** < 1.5s
- **Largest Contentful Paint:** < 2.5s
- **First Input Delay:** < 100ms
- **Cumulative Layout Shift:** < 0.1

## 🔧 Разработка

### Добавление новых компонентов

```bash
npx shadcn@latest add [component-name]
```

### Стиль кода

Проект использует ESLint для поддержания качества кода. Запустите:

```bash
npm run lint
```

## 📞 Контакты

- **Email:** team@fanfiq.com
- **GitHub:** https://github.com/Kabalod/Fanfiq_site

## 📝 Лицензия

Все права защищены © 2024 Fanfiq

---

**Made with ❤️ for the fanfiction community**