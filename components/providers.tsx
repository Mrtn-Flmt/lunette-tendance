"use client";

import { I18nProvider } from "@/lib/i18n/context";
import { ScrollLockFix } from "@/components/scroll-lock-fix";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <I18nProvider>
      <ScrollLockFix />
      {children}
    </I18nProvider>
  );
}
