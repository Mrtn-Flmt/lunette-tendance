"use client";

import { useI18n } from "@/lib/i18n/context";
import type { Locale } from "@/lib/i18n/context";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Globe } from "lucide-react";

const LOCALES: { value: Locale; label: string }[] = [
  { value: "fr", label: "Français" },
  { value: "en", label: "English" },
];

export function LanguageSwitcher() {
  const { locale, setLocale, t } = useI18n();

  return (
    <Select value={locale} onValueChange={(v) => setLocale(v as Locale)}>
      <SelectTrigger
        className="w-[140px] border-slate-200 bg-white/80 backdrop-blur-sm hover:bg-white focus:ring-slate-400"
        aria-label={t("common.lang")}
      >
        <Globe className="mr-2 h-4 w-4 text-slate-500" />
        <SelectValue placeholder={t("common.lang")} />
      </SelectTrigger>
      <SelectContent align="end" className="border-slate-200">
        {LOCALES.map(({ value, label }) => (
          <SelectItem key={value} value={value}>
            {label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
