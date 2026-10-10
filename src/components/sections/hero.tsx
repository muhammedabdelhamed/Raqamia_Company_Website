import React from 'react';
import Image from 'next/image';
import { ArrowDown, MessageCircle } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="hero-section relative min-h-screen w-full flex items-center pt-28 pb-16 overflow-hidden bg-[#050505]" aria-labelledby="hero-title">
      
      {/* 1. Background Layers */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#95f8f2]/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="hero-noise absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay" />
      </div>

      <div className="container relative z-10 mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* --- COLUMN 1: Text Content --- */}
        <div className="flex flex-col items-center text-center lg:items-start lg:text-right order-2 lg:order-1">
          <h1
            id="hero-title"
            className="hero-reveal mb-6 text-white text-[clamp(2.25rem,7vw,3.75rem)] font-extrabold leading-[1.2] tracking-tight"
          >
            نبتكر، نصمّم، ونطور مواقعك
            على <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#95f8f2] to-[#73ffbc]">WordPress & Shopify</span>
          </h1>

          <p
            className="hero-reveal hero-reveal-delay-1 max-w-xl mb-10 text-gray-400 text-lg md:text-xl leading-relaxed font-normal"
          >
            حلول احترافية للمواقع الشخصية ومواقع الأعمال لزيادة مبيعاتك وتواجدك الرقمي بأحدث التقنيات العالمية.
          </p>

          <div
            className="hero-reveal hero-reveal-delay-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full lg:w-auto"
          >
            <a 
              href="#projects" 
              className="group min-h-12 justify-center relative px-8 py-4 bg-[#95f8f2] text-black font-bold rounded-full transition-transform hover:scale-[1.03] active:scale-95 flex items-center gap-2 shadow-[0_0_20px_rgba(36,219,129,0.3)]"
            >
              <ArrowDown className="w-5 h-5 transition-transform group-hover:translate-y-1" />
              <span>شاهد سابقة أعمالنا</span>
            </a>

            <a 
              href="https://wa.me/201080404531" 
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-12 justify-center px-8 py-4 bg-white/5 border border-white/10 text-white font-semibold rounded-full backdrop-blur-md transition-colors hover:bg-white/10 hover:border-[#95f8f2]/50 flex items-center gap-2"
            >
              <MessageCircle className="w-5 h-5 text-[#95f8f2]" />
              <span>إحجز إستشارتك المجانية</span>
            </a>
          </div>
        </div>

        {/* --- COLUMN 2: World Map --- */}
        <div
          className="relative flex justify-center items-center order-1 lg:order-2"
        >
          <div className="relative w-full aspect-[16/10] max-w-[650px]">
            <div className="absolute inset-0 bg-[#95f8f2]/5 rounded-full animate-pulse blur-3xl" />
            
            <Image 
              src="/White_on_black_dotted_world_map_vector-optimized.webp"
              alt="خريطة توضح انتشار أعمال رقمية عالميًا"
              fill
              className="object-contain opacity-40"
              priority
              fetchPriority="high"
              sizes="(max-width: 1023px) 100vw, 50vw"
            />
            
            {/* Location Points */}
            <MapPoint top="49%" left="55%" label="مصر" />
            <MapPoint top="44%" left="56%" label="تركيا" />
            <MapPoint top="51%" left="61%" label="الإمارات" />
            <MapPoint top="52%" left="59%" label="السعودية" />
            {/* <MapPoint top="47%" left="59.5%" label="الأردن" /> */}
            <MapPoint top="38%" left="49%" label="فرنسا" />
            <MapPoint top="41%" left="20%" label="أمريكا" />
            <MapPoint top="72%" left="84%" label="أستراليا" />
          </div>
        </div>

      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-3" aria-hidden="true">
        <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-[#95f8f2] to-transparent opacity-50" />
        <span className="text-[10px] uppercase tracking-[0.2em] text-gray-500 rotate-90 mb-4">Scroll</span>
      </div>
    </section>
  );
};

/**
 * Helper component for Map Points with labels
 */
const MapPoint = ({ top, left, label }: { top: string; left: string; label: string }) => (
  <div 
    className="absolute group z-20 -translate-x-1/2 -translate-y-1/2" 
    style={{ top, left }}
  >
    {/* Ping Animation */}
    <div className="absolute inset-0 w-2 h-2 bg-[#95f8f2] rounded-full animate-ping opacity-75" />
    
    {/* Actual Dot */}
    <div className="relative w-2 h-2 bg-[#95f8f2] rounded-full shadow-[0_0_10px_#95f8f2]" />
    
    {/* Label (Visible on hover) */}
    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-2 py-1 bg-[#050505]/80 border border-white/10 rounded text-[10px] text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
      {label}
    </div>
  </div>
);

export default HeroSection;
