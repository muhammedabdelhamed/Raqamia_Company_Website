"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Globe, 
  ShoppingBag, 
  Link, 
  ArrowLeft, 
  Zap, 
  ShieldCheck 
} from 'lucide-react';

const services = [
  {
    title: "تطوير مواقع ووردبريس",
    description: "بناء مواقع سريعة، آمنة، وقابلة للتوسع باستخدام أحدث تقنيات WordPress.",
    icon: <Globe className="w-6 h-6" />,
    features: [
      "برمجة قوالب وإضافات مخصصة",
      "بناء باستخدام Elementor & Gutenberg",
      "تحسين الأمان وسرعة الأداء"
    ],
    color: "from-[#95f8f2]/20"
  },
  {
    title: "تطوير متاجر شوبيفاي",
    description: "تحويل فكرتك إلى متجر عالمي يحقق مبيعات حقيقية بتجربة مستخدم سلسة.",
    icon: <ShoppingBag className="w-6 h-6" />,
    features: [
      "تخصيص قوالب Liquid احترافية",
      "ربط التطبيقات وبوابات الدفع",
      "تحسين تجربة الشراء للهواتف"
    ],
    color: "from-[#95f8f2]/20"
  },
{
  title: "إستضافة المواقع",
  description: "نساعدك في إطلاق موقعك بسرعة واحترافية مع إعداد كامل وجاهزية للنشر.",
  icon: <Globe className="w-6 h-6" />,
  features: [
    "رفع الموقع على الاستضافة وربطه بالدومين",
    "إعداد WordPress أو Shopify بشكل كامل",
    "ضبط الإعدادات الأساسية والأمان"
  ],
    color: "from-[#95f8f2]/20"
},
{
  title: "شراء النطاقات",
  description: "نوفر لك أفضل النطاقات المناسبة لعلامتك التجارية بأسعار تنافسية.",
  icon: <Link className="w-6 h-6" />,
  features: [
    "حجز الدومين باسمك بسهولة",
    "اقتراح أسماء نطاقات مميزة",
    "ربط الدومين مع الموقع والاستضافة"
  ],
  color: "from-green-500/20"
}

];

export default function ServicesSection() {
  return (
    <section id="services" dir="rtl" className="performance-section relative py-20 lg:py-32 overflow-hidden bg-[#050505]">
      {/* Background Decorative Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#95f8f2]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-16 lg:gap-24">
          
          {/* Content Side */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full lg:w-5/12 lg:sticky lg:top-32"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
              <Zap className="w-4 h-4 text-[#95f8f2] fill-[#95f8f2]" />
              <span className="text-xs font-bold text-[#95f8f2] uppercase tracking-widest">خدماتنا المتكاملة</span>
            </div>

            <h2 className="text-4xl md:text-6xl font-black text-white leading-[1.1] mb-8">
              نحول التحديات <br /> إلى <span className="text-transparent bg-clip-text bg-gradient-to-l from-white to-[#95f8f2]">فرص نمو</span>
            </h2>
            
            <p className="text-xl text-gray-400 mb-10 leading-relaxed max-w-md">
              في رقمية، لا نقدم مجرد خدمات تقنية، بل نبني منظومات بيع ذكية تبدأ من التصميم وتنتهي بتحقيق الأرباح.
            </p>

            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://wa.me/201080404531?text=اريد%20حجز%20استشارة%20مجانية"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
    window.fbq?.('track', 'Contact', { method: 'whatsapp' });
  }}
              className="inline-flex items-center gap-4 bg-[#95f8f2] text-black px-10 py-5 rounded-2xl font-black text-lg transition-all shadow-[0_10px_30px_rgba(36,219,129,0.3)]"
            >
              <span>ابدأ رحلتك معنا</span>
              <ArrowLeft className="w-5 h-5" />
            </motion.a>
          </motion.div>

          {/* Services Grid */}
          <div className="w-full lg:w-7/12 grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative p-8 rounded-[35px] bg-[#0D0D0D] border border-white/5 hover:border-[#95f8f2]/40 transition-all duration-500 overflow-hidden"
              >
                {/* Visual Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-8 text-[#95f8f2] group-hover:bg-[#95f8f2] group-hover:text-black transition-all duration-500 shadow-xl">
                    {service.icon}
                  </div>
                  
                  <h3 className="text-2xl font-black text-white mb-4 group-hover:text-[#95f8f2] transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-gray-500 text-sm leading-relaxed mb-6 group-hover:text-gray-300 transition-colors">
                    {service.description}
                  </p>
                  
                  <div className="h-[1px] w-full bg-white/5 mb-6" />

                  <ul className="space-y-4">
                    {service.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-3 text-sm text-gray-400 group-hover:text-white transition-colors">
                        <ShieldCheck className="w-4 h-4 text-[#95f8f2] opacity-70" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
