"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { CheckCircle2, User, Sparkles, Rocket, Globe } from 'lucide-react';

const AboutUs = () => {
  const benefits = [
    { text: "زيادة المبيعات بشكل مستمر", icon: <Rocket className="w-5 h-5" /> },
    { text: "تقليل التكاليف والمشاكل التشغيلية", icon: <Sparkles className="w-5 h-5" /> },
    { text: "ربط التسويق بالمبيعات (ROI)", icon: <Globe className="w-5 h-5" /> },
    { text: "تحسين تجربة العملاء (UX)", icon: <CheckCircle2 className="w-5 h-5" /> }
  ];

  return (
    <section 
      id="about" 
      className="performance-section relative w-full py-20 lg:py-32 overflow-hidden bg-[#050505]"
      dir="rtl"
    >
      {/* Dynamic Background Elements */}
      <div className="absolute top-1/4 -right-20 w-[400px] h-[400px] bg-[#95f8f2]/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 -left-20 w-[300px] h-[300px] bg-blue-500/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Left Column: Visual Assets */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 relative"
          >
            {/* Main Image Container */}
            <div className="relative z-10 rounded-[40px] overflow-hidden border border-white/10 shadow-2xl">
              <div className="aspect-[4/5] md:aspect-square relative group">
                <Image
                  src="/about-us-optimized.webp"
                  alt="Raqamia Showcase"
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  sizes="(max-width: 1023px) calc(100vw - 48px), 50vw"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>
            </div>

            {/* Floating Experience Card */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-8 -right-8 z-20 bg-#95f8f2 p-6 rounded-[24px] shadow-[0_20px_50px_rgba(0,0,0,0.3)] hidden md:block"
            >
              {/* <div className="flex items-center gap-4">
                <div className="text-black">
                  <p className="text-[#95f8f2] text-4xl font-black leading-none">+5</p>
                  <p className="text-[#95f8f2] text-sm font-bold opacity-70">سنوات خبرة</p>
                </div>
                <div className="w-[1px] h-10 bg-black/10" />
                <div className="text-[#95f8f2] font-bold text-sm leading-tight">
                  خبراء في <br /> WordPress & Shopify
                </div>
              </div> */}
            </motion.div>

            {/* Decorative Dots Pattern */}
            <div className="absolute -top-10 -left-10 w-32 h-32 border-2 border-[#95f8f2]/20 rounded-full blur-xl animate-pulse" />
          </motion.div>

          {/* Right Column: Content */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#95f8f2]/10 border border-[#95f8f2]/20 rounded-full mb-8">
                <User className="w-4 h-4 text-[#95f8f2]" />
                <span className="text-[#95f8f2] text-xs font-bold uppercase tracking-widest">من نحن</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-black text-white mb-8 leading-[1.15]">
                رقمية.. شريكك في تحويل <span className="text-transparent bg-clip-text bg-gradient-to-l from-white via-white to-[#95f8f2]">الرؤية الرقمية</span> إلى واقع ملموس
              </h2>

              <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-10 font-light">
                نحن لسنا مجرد مطورين؛ نحن مهندسو نمو. بفضل خبرتنا التي تتجاوز <span className="text-white font-bold">5 سنوات</span>، قمنا بتمكين أكثر من <span className="text-white font-bold">300 علامة تجارية</span> من الهيمنة على السوق الرقمي.
              </p>

              {/* Enhanced Benefits Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                {benefits.map((benefit, index) => (
                  <motion.div 
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-[#95f8f2]/30 transition-all group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#95f8f2]/10 flex items-center justify-center text-[#95f8f2] group-hover:bg-[#95f8f2] group-hover:text-black transition-colors duration-300">
                      {benefit.icon}
                    </div>
                    <span className="text-white font-medium text-sm md:text-base">
                      {benefit.text}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Primary Call to Action */}
                              <a href="https://wa.me/201080404531?text=اريد%20حجز%20استشارة%20مجانية"
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => {
    window.fbq?.('track', 'Contact', { method: 'whatsapp' });
  }}
>
                <span className="relative group inline-flex min-h-12 overflow-hidden px-8 py-4 bg-[#95f8f2] text-black font-bold rounded-2xl transition-all duration-300 hover:shadow-[0_10px_30px_rgba(36,219,129,0.4)] hover:-translate-y-1">
                <span className="relative z-10 flex items-center gap-2">
                  ابدأ مشروعك الآن
                  <Rocket className="w-5 h-5" />
                </span>
              </span></a>


            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutUs;
