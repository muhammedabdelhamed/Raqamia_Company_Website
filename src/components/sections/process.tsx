"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  PenTool, 
  Layout, 
  Microscope, 
  Rocket, 
  TrendingUp, 
  RefreshCw 
} from 'lucide-react';

const processSteps = [
  {
    id: 1,
    title: 'إكتشاف',
    description: 'نفهم نشاطك، أهدافك، والتحديات اللي بتواجهك عشان نحدد الخطة المناسبة.',
    icon: <Search className="w-6 h-6" />,
  },
  {
    id: 2,
    title: 'تخطيط',
    description: 'نجهز خريطة عمل واضحة (Timeline + Deliverables) عشان كل خطوة تبقى واضحة ليك.',
    icon: <PenTool className="w-6 h-6" />,
  },
  {
    id: 3,
    title: 'تصميم وتطوير',
    description: 'بناء أو تحسين المتجر باستخدام أفضل الثيمات والتقنيات مع تخصيص يناسب البراند.',
    icon: <Layout className="w-6 h-6" />,
  },
  {
    id: 4,
    title: 'اختبار',
    description: 'مراجعة السرعة، تجربة المستخدم، الدفع، والشحن، والتأكد إن كل شيء يعمل بسلاسة.',
    icon: <Microscope className="w-6 h-6" />,
  },
  {
    id: 5,
    title: 'إطلاق',
    description: 'تسليم متجر جاهز للبيع Online وربطه بأدوات التسويق والتحليل فوراً.',
    icon: <Rocket className="w-6 h-6" />,
  },
  {
    id: 6,
    title: 'تحسين',
    description: 'متابعة الأداء بعد الإطلاق، وتحسين مستمر لزيادة المبيعات وتقليل التكاليف.',
    icon: <TrendingUp className="w-6 h-6" />,
  },
];

const ProcessSection = () => {
  return (
    <section className="bg-[#050505] py-24 relative overflow-hidden" dir="rtl">
      {/* Visual background accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#95f8f2]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6"
          >
             <RefreshCw className="w-4 h-4 text-[#95f8f2]" />
             <span className="text-gray-400 text-xs font-bold uppercase tracking-widest">منهجية العمل</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
            رحلتك نحو <span className="text-[#95f8f2]">النمو</span> في 6 خطوات
          </h2>
          <p className="text-gray-500 text-lg max-w-xl font-light">
            نتبع مساراً تقنياً دقيقاً لضمان تحويل فكرتك إلى متجر إلكتروني يحقق مبيعات مستدامة.
          </p>
        </div>

        {/* 3x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {processSteps.map((step, index) => (
            <motion.div 
              key={step.id} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative p-10 rounded-[40px] bg-[#0D0D0D] border border-white/5 hover:border-[#95f8f2]/30 transition-all duration-500 overflow-hidden"
            >
              {/* Animated Background Number */}
              <span className="absolute -bottom-4 left-6 text-[140px] font-black text-white/[0.02] leading-none pointer-events-none select-none transition-all duration-500 group-hover:text-[#95f8f2]/[0.05] group-hover:-translate-y-4">
                0{step.id}
              </span>

              {/* Icon Box */}
              <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 mb-10 text-white group-hover:bg-[#95f8f2] group-hover:text-black group-hover:scale-110 transition-all duration-500 shadow-xl">
                {step.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-white mb-4 transition-colors group-hover:text-[#95f8f2]">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 text-sm leading-[1.8] font-light group-hover:text-gray-300 transition-colors relative z-10">
                {step.description}
              </p>
              
              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#95f8f2]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;