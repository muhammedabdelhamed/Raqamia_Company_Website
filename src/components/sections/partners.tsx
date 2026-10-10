"use client";

import React from 'react';
import Image from 'next/image';
import { Handshake } from 'lucide-react';
import { motion } from 'framer-motion';

const PartnersCarousel = () => {
  const brands = [
    { name: "Shopify", src: "/partners/shopify.svg" },
    { name: "WordPress", src: "/partners/wordpress-icon-1.svg" },
    { name: "Hostinger", src: "/partners/Hostinger.png" },
    { name: "GoDaddy", src: "/partners/godaddy.png" },
  ];

  // Duplicating array for infinite scroll illusion
  const doubleBrands = [...brands, ...brands];

  return (
    <section id="partners" className="performance-section bg-[#050505] py-20 md:py-24 relative overflow-hidden" dir="rtl">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#95f8f2]/5 rounded-full blur-[120px] -z-1" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-[100px] -z-1" />

      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Content Area */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full lg:w-5/12 text-right"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#95f8f2]/10 border border-[#95f8f2]/20 mb-6">
              <Handshake className="w-4 h-4 text-[#95f8f2]" />
              <span className="text-[#95f8f2] text-xs font-bold uppercase tracking-wider">شراكات استراتيجية</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
              نبني جسور النجاح مع <span className="text-transparent bg-clip-text bg-gradient-to-l from-white to-[#95f8f2]">أبرز الشركاء</span>
            </h2>
            
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              في <span className="text-white font-semibold">رقمية</span>، لا نعتبرهم مجرد عملاء، بل شركاء نجاح نتقاسم معهم الرؤية والشغف للوصول إلى القمة.
            </p>

            {/* <div className="grid grid-cols-2 gap-6 border-t border-white/10 pt-8">
              <div className="bg-[#0D0D0D] p-5 rounded-xl border border-white/5">
                <Counter value={300} suffix="+" />
                <p className="text-sm text-gray-500 mt-1">شريك نجاح محلي</p>
              </div>
              <div className="bg-[#0D0D0D] p-5 rounded-xl border border-white/5">
                <Counter value={50} suffix="+" />
                <p className="text-sm text-gray-500 mt-1">علامة تجارية دولية</p>
              </div>
            </div> */}
          </motion.div>

          {/* Pure Framer Motion Auto-Carousel */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full lg:w-7/12 relative"
          >
            {/* Fade effect on the edges */}
            <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-[#050505] via-[#050505]/50 to-transparent z-10 pointer-events-none" />
            <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-[#050505] via-[#050505]/50 to-transparent z-10 pointer-events-none" />

            <div className="flex overflow-hidden py-4">
              <motion.div 
                className="flex gap-6 shrink-0"
                animate={{ x: ["0%", "50%"] }} // Translating positively because of RTL
                transition={{
                  ease: "linear",
                  duration: 10, // Control the speed here (higher = slower)
                  repeat: Infinity,
                }}
                // Slows down smooth on hover, spins back up on leave
                whileHover={{ animationPlayState: "paused" }} 
              >
                {doubleBrands.map((brand, index) => (
                  <div 
                    key={index} 
                    className="group relative bg-[#0D0D0D] rounded-xl flex-shrink-0 w-[140px] h-[100px] flex items-center justify-center p-4 border border-white/5 hover:border-[#95f8f2]/40 transition-all duration-300"
                  >
                    <Image
                      src={brand.src}
                      alt={brand.name}
                      width={100}
                      height={50}
                      className="object-contain max-w-full max-h-full opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                    />
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default PartnersCarousel;
