"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function FacebookPixelTracker() {
  const pathname = usePathname();

  useEffect(() => {
    if (!window.fbq) return;

    window.fbq("track", "PageView");

  }, [pathname]);

  return null;
}