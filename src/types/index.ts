export interface RoadmapItem {
  id: string;
  title: string;
  description: string;
  status: 'completed' | 'in-progress' | 'planned';
  duration: string;
  effort: {
    traditional: string;
    ai: string;
  };
  progress?: number;
}

export interface MarketData {
  platform: string;
  users: number;
  percentage: number;
  color: string;
}

export interface MonetizationOption {
  id: string;
  title: string;
  price: string;
  audience: string;
  calculation: string;
  features: string[];
  color: string;
}

export interface NavigationItem {
  id: string;
  label: string;
  href: string;
}

export interface AlertItem {
  id: string;
  type: 'success' | 'warning' | 'error' | 'info';
  title: string;
  message: string;
  icon: string;
}
