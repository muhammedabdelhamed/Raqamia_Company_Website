"use client";

import React from 'react';
import { Search, PenTool, Layout, CheckCircle, Rocket, TrendingUp, RefreshCw } from 'lucide-react';

/**
 * ProcessSteps Component
 * 
 * A 6-step workflow section for "How We Work" featuring glassmorphic cards,
 * large background numbers, and technical icons.
 */

const steps = [
  {
    number: "1",
    title: "إكتشاف",
    description: "نفهم نشاطك، أهدافك، والتحديات اللي بتواجهك عشان نحدد الخطة المناسبة.",
    icon: <Search className="w-6 h-6 text-[#95f8f2]" />,
  },
  {
    number: "2",
    title: "تخطيط",
    description: "بنجهز خريطة عمل واضحة (Timeline + Deliverables) عشان كل خطوة تبقى واضحة ليك.",
    icon: <PenTool className="w-6 h-6 text-[#95f8f2]" />,
  },
  {
    number: "3",
    title: "تصميم وتطوير",
    description: "بناء أو تحسين المتجر باستخدام أفضل الثيمات والتقنيات مع تخصيص يناسب البراند.",
    icon: <Layout className="w-6 h-6 text-[#95f8f2]" />,
  },
  {
    number: "4",
    title: "اختبار",
    description: "مراجعة كل التفاصيل: السرعة، تجربة المستخدم، الدفع الشحن، والتأكد إن كل حاجة شغالة بسلاسة.",
    icon: <CheckCircle className="w-6 h-6 text-[#95f8f2]" />,
  },
  {
    number: "5",
    title: "إطلاق",
    description: "تسليم متجر جاهز للبيع Online وربطه بأدوات التسويق والتحليل.",
    icon: <Rocket className="w-6 h-6 text-[#95f8f2]" />,
  },
  {
    number: "6",
    title: "تحسين",
    description: "متابعة الأداء بعد الإطلاق، وتحسين مستمر لزيادة المبيعات وتقليل التكاليف.",
    icon: <TrendingUp className="w-6 h-6 text-[#95f8f2]" />,
  },
];

const ProcessSteps = () => {
  return (
    <section className="relative w-full py-[100px] bg-[#000000] overflow-hidden" dir="rtl">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#95f8f2]/5 rounded-full blur-[120px] pointer-events-none z-0" />

      <div className="container relative z-10 px-5 mx-auto max-w-[1140px]">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#1a1a1a] rounded-xl border border-[#222222] mb-6">
            <RefreshCw className="w-4 h-4 text-[#95f8f2]" />
            <span className="text-white text-sm font-medium">آلية العمل</span>
          </div>
          
          <h2 className="text-[36px] font-bold text-white mb-2 leading-tight">
            كيف نعمل
          </h2>
          <p className="text-[#a4a4a4] text-lg">
            خطواتنا الـ 6 البسيطة
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="relative group overflow-hidden glass-card p-[35px] border border-[#222222] rounded-[24px] bg-white/[0.03] backdrop-blur-md transition-all duration-300 hover:border-[#95f8f2]/30 hover:bg-white/[0.05]"
            >
              {/* Background Large Number */}
              <div className="absolute top-[-10px] left-[-10px] text-[120px] font-extrabold text-[#ffffff]/[0.03] select-none pointer-events-none leading-none">
                {step.number}
              </div>

              {/* Icon Container */}
              <div className="relative z-10 w-12 h-12 flex items-center justify-center bg-[#1a1a1a] border border-[#222222] rounded-xl mb-6 group-hover:bg-[#95f8f2]/10 transition-colors duration-300">
                {step.icon}
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-4 leading-tight">
                  {step.title}
                </h3>
                <p className="text-[#a4a4a4] text-base leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Hover Accent Line */}
              <div className="absolute bottom-0 right-0 w-0 h-[2px] bg-[#95f8f2] transition-all duration-500 group-hover:w-full" />
            </div>
          ))}
        </div>
      </div>

      {/* Subtle Visual Accents */}
      <div className="absolute top-[20%] right-[-100px] w-[300px] h-[300px] bg-[#95f8f2]/[0.03] rounded-full blur-[80px]" />
      <div className="absolute bottom-[10%] left-[-100px] w-[250px] h-[250px] bg-[#95f8f2]/[0.02] rounded-full blur-[60px]" />
    </section>
  );
};

export default ProcessSteps;
