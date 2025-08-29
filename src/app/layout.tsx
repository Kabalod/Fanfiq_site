import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Fanfiq - Умный поиск и читалка фанфиков",
  description: "Единая точка входа для миллионов читателей фанфиков. Агрегируем контент с самых популярных платформ в одном удобном приложении.",
  keywords: ["фанфики", "читалка", "поиск", "AO3", "Ficbook", "Wattpad"],
  authors: [{ name: "Fanfiq Team" }],
  creator: "Fanfiq",
  publisher: "Fanfiq",
  openGraph: {
    title: "Fanfiq - Умный поиск и читалка фанфиков",
    description: "Единая точка входа для миллионов читателей фанфиков",
    type: "website",
    locale: "ru_RU",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fanfiq - Умный поиск и читалка фанфиков",
    description: "Единая точка входа для миллионов читателей фанфиков",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body
        className={`${inter.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
