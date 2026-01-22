"use client";

import React, { createContext, useContext, useEffect, useState, useCallback } from "react";
import fr from "@/locales/fr.json";
import en from "@/locales/en.json";

export type Locale = "fr" | "en";

const translations: Record<Locale, Record<string, unknown>> = { fr, en };

const LOCALE_STORAGE_KEY = "lunette-locale";

function getNested(obj: Record<string, unknown>, path: string): string | undefined {
  const keys = path.split(".");
  let current: unknown = obj;
  for (const key of keys) {
    if (current == null || typeof current !== "object") return undefined;
    current = (current as Record<string, unknown>)[key];
  }
  return typeof current === "string" ? current : undefined;
}

interface I18nContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
}

const I18nContext = createContext<I18nContextValue | null>(null);

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("fr");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(LOCALE_STORAGE_KEY) as Locale | null;
      if (stored === "fr" || stored === "en") setLocaleState(stored);
    } catch {
      /* ignore */
    }
    setMounted(true);
  }, []);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    try {
      localStorage.setItem(LOCALE_STORAGE_KEY, next);
      if (typeof document !== "undefined") document.documentElement.lang = next === "en" ? "en" : "fr";
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;
    document.documentElement.lang = locale === "en" ? "en" : "fr";
  }, [mounted, locale]);

  const t = useCallback(
    (key: string): string => {
      const dict = translations[locale] as Record<string, unknown>;
      const value = getNested(dict, key);
      return value ?? key;
    },
    [locale]
  );

  return (
    <I18nContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
