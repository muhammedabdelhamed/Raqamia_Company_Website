"use client";

import { useEffect } from "react";

const GA_ID = "G-87E27M4F5Y";
const FB_PIXEL_ID = "699980969539303";

type FacebookQueue = ((...args: unknown[]) => void) & {
  callMethod?: (...args: unknown[]) => void;
  queue: unknown[];
  loaded: boolean;
  version: string;
};

function appendScript(id: string, src: string) {
  if (document.getElementById(id)) return;
  const script = document.createElement("script");
  script.id = id;
  script.src = src;
  script.async = true;
  document.head.appendChild(script);
}

function loadAnalytics() {
  if (document.documentElement.dataset.analyticsLoaded === "true") return;
  document.documentElement.dataset.analyticsLoaded = "true";

  window.dataLayer = window.dataLayer || [];
  const gtag = (...args: unknown[]) => window.dataLayer.push(args);
  gtag("js", new Date());
  gtag("config", GA_ID, { page_path: window.location.pathname });
  appendScript("google-analytics", `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`);

  if (!window.fbq) {
    const fbq = ((...args: unknown[]) => {
      if (fbq.callMethod) fbq.callMethod(...args);
      else fbq.queue.push(args);
    }) as FacebookQueue;
    fbq.queue = [];
    fbq.loaded = true;
    fbq.version = "2.0";
    window.fbq = fbq;
  }
  window.fbq?.("init", FB_PIXEL_ID);
  window.fbq?.("track", "PageView");
  appendScript("facebook-pixel", "https://connect.facebook.net/en_US/fbevents.js");
}

export default function DeferredAnalytics() {
  useEffect(() => {
    const events: Array<keyof WindowEventMap> = ["pointerdown", "keydown", "touchstart"];
    const onFirstInteraction = () => loadAnalytics();
    events.forEach((event) => window.addEventListener(event, onFirstInteraction, { once: true, passive: true }));

    const timer = window.setTimeout(loadAnalytics, 10_000);
    return () => {
      window.clearTimeout(timer);
      events.forEach((event) => window.removeEventListener(event, onFirstInteraction));
    };
  }, []);

  return null;
}
