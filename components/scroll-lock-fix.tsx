"use client";

import { useEffect } from "react";

const OVERRIDE_STYLE_ID = "lunette-scroll-lock-override";

/**
 * Annule le "gap" (margin-right/padding-right) ajouté par react-remove-scroll-bar
 * qui crée une bande blanche à gauche de la scrollbar.
 * Ré-append le <style> à la fin de head pour qu'il override les styles de la lib
 * (injectés quand le Select s'ouvre).
 */
function ensureOverrideStyleLast() {
  if (typeof document === "undefined") return;
  let style = document.getElementById(OVERRIDE_STYLE_ID) as HTMLStyleElement | null;
  if (!style) {
    style = document.createElement("style");
    style.id = OVERRIDE_STYLE_ID;
    style.textContent = `
      body[data-scroll-locked],
      body[style*="overflow: hidden"],
      body[style*="overflow:hidden"] {
        overflow-y: scroll !important;
        padding-right: 0 !important;
        margin-right: 0 !important;
      }
      html[data-scroll-locked],
      html[style*="overflow: hidden"],
      html[style*="overflow:hidden"] {
        overflow-y: scroll !important;
      }
    `;
  }
  document.head.appendChild(style);
}

/**
 * Force body/html à garder la scrollbar et supprime le gap (bande blanche).
 */
function enforceScrollbar() {
  const body = document.body;
  const html = document.documentElement;

  if (body.style.overflow === "hidden" || body.style.overflowY === "hidden") {
    body.style.overflowY = "scroll";
    body.style.overflow = "auto";
  }
  body.style.paddingRight = "0";
  body.style.marginRight = "0";

  if (html.style.overflow === "hidden" || html.style.overflowY === "hidden") {
    html.style.overflowY = "scroll";
    html.style.overflow = "auto";
  }
}

/**
 * Empêche react-remove-scroll de cacher la scrollbar et supprime la bande blanche
 * (gap) créée par react-remove-scroll-bar.
 */
export function ScrollLockFix() {
  useEffect(() => {
    ensureOverrideStyleLast();

    const observer = new MutationObserver(() => {
      enforceScrollbar();
      if (document.body.hasAttribute("data-scroll-locked")) {
        ensureOverrideStyleLast();
      }
    });

    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["style", "data-scroll-locked"],
      subtree: false,
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["style", "data-scroll-locked"],
      subtree: false,
    });

    const interval = setInterval(() => {
      enforceScrollbar();
      if (document.body.hasAttribute("data-scroll-locked")) {
        ensureOverrideStyleLast();
      }
    }, 80);

    return () => {
      observer.disconnect();
      clearInterval(interval);
    };
  }, []);

  return null;
}
