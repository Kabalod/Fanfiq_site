"use client";

import { motion } from 'framer-motion';
import { useActiveSection } from '@/hooks/use-active-section';
import { navigationItems } from '@/lib/data';
import { cn } from '@/lib/utils';

interface SidebarProps {
  className?: string;
}

export function Sidebar({ className }: SidebarProps) {
  const activeSection = useActiveSection(navigationItems.map(item => item.id));

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <motion.aside
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className={cn(
        "w-64 bg-white border-r border-gray-200 sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto",
        className
      )}
    >
      <nav className="p-6">
        <div className="mb-6">
          <h2 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
            Содержание
          </h2>
        </div>

        <ul className="space-y-1">
          {navigationItems.map((item, index) => (
            <motion.li
              key={item.id}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <button
                onClick={() => scrollToSection(item.href)}
                className={cn(
                  "w-full text-left px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 hover:bg-gray-50",
                  activeSection === item.id
                    ? "bg-blue-50 border-l-3 border-blue-500 text-blue-700"
                    : "text-gray-700 hover:border-l-3 hover:border-gray-300"
                )}
              >
                {item.label}
              </button>
            </motion.li>
          ))}
        </ul>
      </nav>
    </motion.aside>
  );
}
