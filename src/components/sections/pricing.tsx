"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, AlertTriangle, ArrowLeft, ChevronDown, Rocket, Crown, Star } from 'lucide-react';

const PricingSection = () => {
  const [openItem, setOpenItem] = useState<{ plan: number, idx: number } | null>({ plan: 0, idx: 0 });

  const plans = [
    {
      id: 0,
      name: "الخطة الأساسية",
      tag: "الأكثر طلباً",
      icon: <Rocket className="w-4 h-4" />,
      oldPrice: "10,000",
      newPrice: "8,000",
      features: [
        { title: "تصميم متجر إلكتروني", desc: "استخدام منصة WordPress أو Shopify حسب اختيارك." },
        { title: "قالب Template جاهز", desc: "تصميم احترافي جاهز مع تعديلات بسيطة تناسب هويتك البصرية." },
        { title: "إعداد المنتجات", desc: "إدخال وإعداد المنتجات الأساسية داخل المتجر ليكون جاهزاً للبيع." },
        { title: "الربط التقني", desc: "ربط بوابات الدفع والشحن لمتجر بلغة واحدة." },
        { title: "دعم فني", desc: "دعم فني متواصل لمدة 30 يوم لضمان استقرار المتجر." },
      ]
    },
    {
      id: 1,
      name: "الخطة الاحترافية",
      tag: "خيار النخبة",
      icon: <Crown className="w-4 h-4" />,
      oldPrice: "15,000",
      newPrice: "12,000",
      features: [
        { title: "تصميم مخصص", desc: "تصميم متطور لتحسين تجربة المستخدم وزيادة المبيعات." },
        { title: "تنظيم صفحات احترافي", desc: "هيكلة الصفحات بشكل استراتيجي لرفع معدلات التحويل." },
        { title: "متجر بلغتنين", desc: "إعداد المتجر باللغتين العربية والإنجليزية بالكامل." },
        { title: "أدوات التسويق", desc: "ربط Facebook Pixel و Email Marketing للتحليلات." },
        { title: "تهيئة SEO أساسي", desc: "تجهيز المتجر لمحركات البحث للظهور في النتائج الأولى." },
      ]
    }
  ];

  const toggleItem = (planId: number, featureIdx: number) => {
    if (openItem?.plan === planId && openItem?.idx === featureIdx) {
      setOpenItem(null);
    } else {
      setOpenItem({ plan: planId, idx: featureIdx });
    }
  };

  return (
    <section id="prices" className="performance-section relative w-full bg-[#050505] py-20 md:py-24 overflow-hidden" dir="rtl">
      {/* الخلفية */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#95f8f2]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-4"
          >
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            <span className="text-xl font-bold text-gray-400 uppercase tracking-widest">خصم 40% لأول 10 مشتركين فقط</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-black text-white">اختر خطة <span className="text-[#95f8f2]">نموك</span></h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {plans.map((plan) => (
            <motion.div 
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: plan.id * 0.2 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className={`w-full bg-[#0D0D0D] rounded-[40px] p-8 md:p-10 border transition-all duration-500 ${plan.id === 1 ? 'border-[#95f8f2]/30 shadow-[0_0_40px_rgba(36,219,129,0.1)]' : 'border-white/5'}`}>
                
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#95f8f2]/10 rounded-full mb-4">
                      <span className="text-[#95f8f2]">{plan.icon}</span>
                      <span className="text-[15px] font-bold text-[#95f8f2] uppercase tracking-[0.1em]">{plan.tag}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  </div>
                  <div className="text-left">
                    <div className="text-gray-500 line-through text-sm mb-1">{plan.oldPrice} ج.م</div>
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-black text-white">{plan.newPrice}</span>
                      <span className="text-[#95f8f2] text-xs font-bold">جنية</span>
                    </div>
                  </div>
                </div>

                {/* قائمة الميزات */}
                <div className="space-y-3 mb-10">
                  {plan.features.map((feature, idx) => {
                    const isOpen = openItem?.plan === plan.id && openItem?.idx === idx;
                    return (
                      <div 
                        key={idx} 
                        className={`rounded-2xl border transition-all duration-300 ${isOpen ? 'bg-white/5 border-white/10' : 'bg-transparent border-transparent'}`}
                      >
                        <button 
                          onClick={() => toggleItem(plan.id, idx)}
                          className="w-full flex items-center justify-between p-4 text-right"
                        >
                          <div className="flex items-center gap-3">
                            <CheckCircle2 className={`w-5 h-5 shrink-0 transition-colors ${isOpen ? 'text-[#95f8f2]' : 'text-gray-600'}`} />
                            <span className={`text-sm font-bold ${isOpen ? 'text-white' : 'text-gray-400'}`}>{feature.title}</span>
                          </div>
                          <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                        </button>
                        <AnimatePresence>
                          {isOpen && (
                            <motion.div 
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden"
                            >
                              <p className="px-12 pb-4 text-xs text-gray-500 leading-relaxed">
                                {feature.desc}
                              </p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>

                <a 
                  href={`https://wa.me/201080404531?text=اريد%20الاشتراك%20في%20${plan.name}`}
                  className={`w-full flex items-center justify-center gap-3 py-5 rounded-2xl font-black text-lg transition-all ${plan.id === 1 ? 'bg-[#95f8f2] text-black hover:shadow-[0_10px_30px_rgba(36,219,129,0.3)]' : 'bg-white/10 text-white hover:bg-white/20'}`}
                >
                  <span>ابدأ الآن</span>
                  <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-2" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* تذييل القسم */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 flex flex-col md:flex-row items-center justify-center gap-8 text-center"
        >
          <div className="flex gap-3 p-4 bg-yellow-500/5 rounded-2xl border border-yellow-500/10 max-w-md">
            <AlertTriangle className="w-5 h-5 text-yellow-500 shrink-0" />
            <p className="text-[11px] text-yellow-500/80 leading-relaxed font-medium">
              ملاحظة: الأسعار تشمل التنفيذ الفني، وتختلف التكلفة النهائية بناءً على أي طلبات برمجية خاصة إضافية.
            </p>
          </div>
          <div className="flex items-center gap-6 text-[12px] text-gray-500 font-bold uppercase tracking-widest">
            <span>50% عند التعاقد</span>
            <div className="w-2 h-2 bg-[#95f8f2] rounded-full animate-pulse" />
            <span>50% عند الاستلام</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
