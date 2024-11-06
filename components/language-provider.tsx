"use client";

import { createContext, useContext, useState } from "react";

type Language = "en" | "ar" | "fr" | "es";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  const translations = {
    en: {
      "nav.home": "Home",
      "nav.interpretation": "AI Dream Interpretation",
      "nav.journal": "Dream Journal",
      "nav.overview": "Dreams Overview",
      "nav.blog": "Blog",
    },
    ar: {
      "nav.home": "الرئيسية",
      "nav.interpretation": "تفسير الأحلام بالذكاء الاصطناعي",
      "nav.journal": "يوميات الأحلام",
      "nav.overview": "نظرة عامة على الأحلام",
      "nav.blog": "المدونة",
    },
    fr: {
      "nav.home": "Accueil",
      "nav.interpretation": "Interprétation IA des Rêves",
      "nav.journal": "Journal des Rêves",
      "nav.overview": "Aperçu des Rêves",
      "nav.blog": "Blog",
    },
    es: {
      "nav.home": "Inicio",
      "nav.interpretation": "Interpretación IA de Sueños",
      "nav.journal": "Diario de Sueños",
      "nav.overview": "Resumen de Sueños",
      "nav.blog": "Blog",
    },
  };

  const t = (key: string) => translations[language][key as keyof typeof translations[typeof language]] || key;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};