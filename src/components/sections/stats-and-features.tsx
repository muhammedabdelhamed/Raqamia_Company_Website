"use client";

import React, { useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion';
import { Users, Layout, Zap, Rocket, ShieldCheck, Heart } from 'lucide-react';

// Define the interface for the props
interface CounterProps {
  value: number;
  suffix?: string;
}

const Counter = ({ value, suffix = "" }: CounterProps) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest: number) => Math.round(latest) + suffix);
  const ref = useRef<HTMLParagraphElement>(null); // Added type for the ref
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, { duration: 2.5, ease: "easeOut" });
      return controls.stop;
    }
  }, [isInView, count, value]);

  return <motion.p ref={ref} className="text-3xl md:text-4xl font-black text-white mb-1">{rounded}</motion.p>;
};

const StatsAndFeatures = () => {
  const stats = [
    { label: "عميل يثق بنا", value: 300, suffix: "+", icon: <Users className="w-5 h-5" /> },
    { label: "مشروع ناجح", value: 120, suffix: "+", icon: <Layout className="w-5 h-5" /> },
    { label: "سنوات خبرة", value: 5, suffix: "+", icon: <Zap className="w-5 h-5" /> },
  ];

  const features = [
    {
      title: "شركاء رسميين",
      desc: "شركاء لـ WordPress & Shopify بخبرة عملية أكثر من 8 سنوات.",
      icon: <Rocket className="w-6 h-6 text-[#95f8f2]" />,
    },
    {
      title: "معدل التحويل (CRO)",
      desc: "نركز على تحسين البيع لضمان أعلى عائد لكل زائر.",
      icon: <Zap className="w-6 h-6 text-[#95f8f2]" />,
    },
    {
      title: "فريق متكامل",
      desc: "تطوير، تسويق، وإدارة بيانات تحت سقف واحد.",
      icon: <Users className="w-6 h-6 text-[#95f8f2]" />,
    },
    {
      title: "شفافية مطلقة",
      desc: "جدول زمني واضح وتقارير دورية لكل خطوة.",
      icon: <ShieldCheck className="w-6 h-6 text-[#95f8f2]" />,
    },
  ];

  return (
    <section className="bg-[#050505] text-white py-24 relative overflow-hidden" dir="rtl">
      {/* Visual background accents */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#95f8f2]/10 blur-[120px] rounded-full" />
      
      <div className="container mx-auto max-w-7xl px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:items-center">
          
          {/* Left Column: Branding & Stats */}
          <div className="w-full lg:w-5/12">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full mb-6">
                <Heart className="w-4 h-4 text-[#95f8f2] fill-[#95f8f2]" />
                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">لماذا رقمية؟</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-black mb-8 leading-[1.2]">
                شريكك الذي <span className="text-[#95f8f2]">يفهم</span> لغة التجارة الرقمية
              </h2>

              <p className="text-gray-400 text-lg leading-relaxed mb-12">
                نحن نؤمن أن نجاح متجرك يبدأ من شريك مجرب. هدفنا ليس بناء موقع فحسب، بل محرك مبيعات ينمو معك باستمرار.
              </p>

              {/* Stats Row with Counters */}
              <div className="grid grid-cols-3 gap-4 border-t border-white/10 pt-10">
                {stats.map((stat, i) => (
                  <div key={i} className="text-right">
                    <Counter value={stat.value} suffix={stat.suffix} />
                    <p className="text-sm text-gray-500 font-medium">{stat.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column: Feature Bento Grid */}
          <div className="w-full lg:w-7/12 grid grid-cols-1 md:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group p-8 rounded-[32px] bg-[#0D0D0D] border border-white/5 hover:border-[#95f8f2]/40 transition-all duration-500 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#95f8f2]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#95f8f2]/20 transition-all duration-500">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-500 leading-relaxed text-sm group-hover:text-gray-300 transition-colors">
                    {feature.desc}
                  </p>
                </div>
              </motion.div>
            ))}
            
            {/* Special Large Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-2 p-6 rounded-[32px] bg-gradient-to-r from-[#0D0D0D] to-[#151515] border border-white/5 flex items-center justify-between"
            >
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 rounded-full bg-[#95f8f2] animate-ping" />
                <p className="text-sm font-medium text-gray-400">نحن متاحون الآن لمشاريع جديدة لعام 2026</p>
              </div>
              <button className="text-sm font-bold text-[#95f8f2] hover:underline underline-offset-4">
                <a href="https://wa.me/201025990911?text=اريد%20حجز%20استشارة%20مجانية" 
                onClick={() => {
    window.fbq?.('track', 'Contact', { method: 'whatsapp' });
  }}
 target="_blank" rel="noopener noreferrer"> تواصل معنا</a>
              </button>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default StatsAndFeatures;
