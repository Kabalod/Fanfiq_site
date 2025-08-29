import { RoadmapItem, MarketData, MonetizationOption, NavigationItem, AlertItem } from '@/types';

export const navigationItems: NavigationItem[] = [
  { id: 'overview', label: '1. Обзор проекта', href: '#overview' },
  { id: 'problem-solution', label: '2. Проблема и решение', href: '#problem-solution' },
  { id: 'market', label: '3. Анализ рынка', href: '#market' },
  { id: 'architecture', label: '4. Техническая архитектура', href: '#architecture' },
  { id: 'roadmap', label: '5. Дорожная карта', href: '#roadmap' },
  { id: 'monetization', label: '6. Модель монетизации', href: '#monetization' },
  { id: 'development', label: '7. Оценка разработки', href: '#development' },
  { id: 'conclusion', label: '8. Заключение', href: '#conclusion' },
];

export const roadmapItems: RoadmapItem[] = [
  {
    id: 'mvp',
    title: '1. MVP',
    description: 'API, база данных, парсер Ficbook.net, веб-интерфейс',
    status: 'completed',
    duration: 'Завершено',
    effort: {
      traditional: '59–80 ч',
      ai: '12–18 ч (ИИ)',
    },
    progress: 100,
  },
  {
    id: 'russia-growth',
    title: '2. Рост в РФ',
    description: 'Author.Today, Litnet, первая версия читалки',
    status: 'in-progress',
    duration: '≈ 7 дней',
    effort: {
      traditional: '58–77 ч',
      ai: '12–18 ч (ИИ)',
    },
    progress: 75,
  },
  {
    id: 'user-features',
    title: '3. Функции пользователей',
    description: 'Регистрация, закладки, история, подписки',
    status: 'planned',
    duration: '≈ 1 неделя',
    effort: {
      traditional: '55–75 ч',
      ai: '12–15 ч (ИИ)',
    },
  },
  {
    id: 'ux-mobile',
    title: '4. UX & Mobile',
    description: 'Читалка с настройками, PWA-приложение',
    status: 'planned',
    duration: '≈ 1 неделя',
    effort: {
      traditional: '62–83 ч',
      ai: '12–18 ч (ИИ)',
    },
  },
  {
    id: 'international',
    title: '5. Международный рынок',
    description: 'AO3, Fanfiction.net, локализация EN',
    status: 'planned',
    duration: '≈ 1 неделя',
    effort: {
      traditional: '72–98 ч',
      ai: '15–21 ч (ИИ)',
    },
  },
  {
    id: 'monetization',
    title: '6. Монетизация',
    description: 'Pro-аккаунты, рекомендации, реклама',
    status: 'planned',
    duration: '≈ 1 неделя',
    effort: {
      traditional: '67–93 ч',
      ai: '15–21 ч (ИИ)',
    },
  },
];

export const marketData: MarketData[] = [
  { platform: 'AO3', users: 5000000, percentage: 50, color: '#8b5cf6' },
  { platform: 'Ficbook', users: 2000000, percentage: 20, color: '#3b82f6' },
  { platform: 'Wattpad', users: 2500000, percentage: 25, color: '#06d6a0' },
  { platform: 'Другие', users: 500000, percentage: 5, color: '#64748b' },
];

export const monetizationOptions: MonetizationOption[] = [
  {
    id: 'pro-accounts',
    title: '💎 Pro-аккаунты',
    price: '$3–5/мес',
    audience: '× 5% аудитории',
    calculation: '50,000 пользователей = $90k–$150k/мес',
    features: ['Расширенные фильтры', 'Без рекламы', 'Оффлайн чтение'],
    color: 'blue',
  },
  {
    id: 'advertising',
    title: '📢 Реклама',
    price: '$2–4 CPM',
    audience: 'Весь трафик',
    calculation: 'Нативная интеграция в поиск и читалку',
    features: ['Нативная реклама', 'Таргетированная', 'Ненавязчивая'],
    color: 'orange',
  },
  {
    id: 'partnerships',
    title: '🤝 Партнёрства',
    price: '5–10%',
    audience: 'от продаж',
    calculation: 'Авторы и издательства',
    features: ['Продвижение книг', 'Эксклюзивный контент', 'Совместные проекты'],
    color: 'purple',
  },
];

export const alertItems: AlertItem[] = [
  {
    id: 'mvp-ready',
    type: 'success',
    title: '🚀 MVP готов к запуску',
    message: 'Базовый функционал полностью реализован и протестирован',
    icon: '🚀',
  },
  {
    id: 'investment-needed',
    type: 'warning',
    title: '⚠️ Требуется инвестирование',
    message: 'Для масштабирования проекта необходимы инвестиции в инфраструктуру',
    icon: '⚠️',
  },
  {
    id: 'team-ready',
    type: 'info',
    title: '✅ Команда готова',
    message: 'ИИ-ассистент + разработчик готовы к реализации следующих этапов',
    icon: '✅',
  },
];

export const statsData = {
  russiaUsers: 2000000,
  globalUsers: 50000000,
  acceleration: 14,
  timeToComplete: 6,
};
