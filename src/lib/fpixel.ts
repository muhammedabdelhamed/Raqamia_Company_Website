export const FB_PIXEL_ID = '699980969539303';

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    dataLayer: unknown[];
  }
}

export const pageview = () => {
  if (typeof window.fbq !== "undefined") {
    window.fbq?.("track", "PageView");
  }
};

export const event = (name: string, options = {}) => {
  if (typeof window.fbq !== "undefined") {
    window.fbq?.("track", name, options);
  }
};
