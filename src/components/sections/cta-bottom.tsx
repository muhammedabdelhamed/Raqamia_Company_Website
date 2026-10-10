"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { MessageCircle, ArrowLeft, Sparkles } from 'lucide-react';

const CTABottom: React.FC = () => {
  return (
    <section className="performance-section relative w-full overflow-hidden bg-[#050505] py-20 md:py-32" dir="rtl">
      
      {/* Background Wave Image with subtle animation */}
      <motion.div 
        initial={{ opacity: 0, scale: 1.1 }}
        whileInView={{ opacity: 0.6, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none"
      >
        <div className="relative w-full h-full max-w-[100%]">
          <Image
            src="/2c24d27b5743778bfbea8ece0104fc2a-18.webp"
            alt="Decorative background"
            fill
            className="object-contain opacity-40 md:opacity-60"
            sizes="100vw"
            loading="lazy"
          />
        </div>
      </motion.div>

      {/* Content Container */}
      <div className="container relative z-10 mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Top Icon Badge */}
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-3xl bg-[#95f8f2]/10 border border-[#95f8f2]/20 mb-8 backdrop-blur-sm">
            <Sparkles className="w-8 h-8 text-[#95f8f2]" />
          </div>

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-8 leading-[1.15] tracking-tight">
            جاهز تطلق متجرك على <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-l from-white to-[#95f8f2]">
              Shopify & Wordpress؟
            </span>
          </h2>

          <p className="text-gray-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            انضم إلى أكثر من 300 علامة تجارية وثقت بنا لتحويل فكرتها إلى واقع رقمي يدر الأرباح. الاستشارة مجانية تماماً!
          </p>

          {/* Action Buttons Group */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://wa.me/201080404531?text=اريد%20حجز%20استشارة%20مجانية"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
    window.fbq?.('track', 'Contact', { method: 'whatsapp' });
  }}
              className="group relative flex items-center justify-center gap-3 overflow-hidden rounded-2xl bg-[#95f8f2] px-12 py-5 text-lg font-black text-black transition-all shadow-[0_20px_40px_rgba(36,219,129,0.3)] hover:shadow-[0_25px_50px_rgba(36,219,129,0.4)]"
            >
              <MessageCircle className="w-6 h-6" />
              <span>ابدأ محادثة واتساب</span>
              <ArrowLeft className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-2" />
            </motion.a>
            
            <div className="flex items-center gap-2 text-gray-500 font-medium">
              <div className="w-2 h-2 rounded-full bg-[#95f8f2] animate-pulse" />
              <span>متواجدون الآن للرد على استفساراتك</span>
            </div>
          </div>

          {/* Trust Badges */}
          {/* <div className="mt-16 pt-8 border-t border-white/5 flex flex-wrap justify-center gap-8 opacity-40 grayscale group-hover:grayscale-0 transition-all">
             <span className="text-white font-bold tracking-widest uppercase">WordPress Partner</span>
             <span className="text-white font-bold tracking-widest uppercase">Shopify Expert</span>
             <span className="text-white font-bold tracking-widest uppercase">CRO Focused</span>
          </div> */}
        </motion.div>
      </div>
    </section>
  );
};

export default CTABottom;
