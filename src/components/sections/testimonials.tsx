"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, MessageSquareQuote } from 'lucide-react';

interface Testimonial {
  text: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  language: 'ar' | 'en';
}

const testimonials: Testimonial[] = [
  {
    language: 'ar',
    rating: 5,
    text: "شكراً رقمية على تصميم الموقع على شوبيفاي، تجربتنا معاكم لذيذة وممتازة. الفريق كان متعاون وفاهم احتياجاتنا، وقدروا يصمموا لنا موقع شكله بروفيشنال وبسيط جداً في الاستخدام.",
    author: "عبدالرحمن أيمن",
    role: "المدير التنفيذي",
    company: "La Vie",
    avatar: "/avatars/user1.png",
  },
  {
    language: 'ar',
    rating: 5,
    text: "اعتقد ده الوقت المناسب علشان اشكركم علي الاحترافيه ف التعامل والقوه ف المتابعه والصبر علي الاستفسارات والتعديلات دمتـم شاطرين وان شاء الله نطلع المشروع الثاني مع بعض.",
    author: "أحمد زكي",
    role: "مؤسس الشركة",
    company: "Mercado EG",
    avatar: "/avatars/user3.png",
  },
  {
    language: 'ar',
    rating: 5,
    text: "التعامل معاهم كويس جدا الويب سايت حقيقي كان شكله احترافي و مبهر عارفين يطلعوا حاجة بروفيشنال تساعد البراند أنه يكبر.",
    author: "سمية هاشم",
    role: "مؤسسة العلامة التجارية",
    company: "Inseason Brand",
    avatar: "/avatars/user4.png",
  },
  {
    language: 'ar',
    rating: 5,
    text: "حبيت اشكركم على الاحترافية ودقة الأداء من 2022 وانا برشحكم لكل عملائي وكل مرة بتشرفوني تسلم ايديكم.",
    author: "عمار ياسر",
    role: "مدير تسويق",
    company: "وكالة خاصة",
    avatar: "/avatars/user5.png",
  },
  {
    language: 'ar',
    rating: 5,
    text: "تجربة رائعة من حيث سرعة التنفيذ والاهتمام بأدق التفاصيل التقنية. الموقع أصبح أسرع بكثير مما ساعدنا في تحسين تجربة العميل وزيادة التحويلات.",
    author: "سارة محمود",
    role: "مديرة العمليات",
    company: "Drippin",
    avatar: "/avatars/user6.png",
  },
  {
    language: 'ar',
    rating: 5,
    text: "حابب اشيد بالمرونه وحل المشاكل اللي عندهم، كان عندي مشكله هما مكنوش سبب فيها ومع ذلك حلولي المشكله وكانوا مرنين جدا معايا.",
    author: "إسلام كويتي",
    role: "المؤسس",
    company: "E-Store",
    avatar: "/avatars/user7.png",
  }
];

const TestimonialsSection = () => {
  // We double the testimonials to create the infinite loop effect
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section id="testimonials" className="performance-section bg-[#050505] py-16 md:py-24 relative overflow-hidden" dir="rtl">
      {/* Dynamic Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[800px] h-[300px] md:h-[800px] bg-[#95f8f2]/5 blur-[80px] md:blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10 mb-12 md:mb-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center"
        >
          <div className="flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-white/5 border border-white/10 rounded-full mb-4 md:mb-6">
            <MessageSquareQuote className="w-3.5 h-3.5 md:w-4 md:h-4 text-[#95f8f2]" />
            <span className="text-[10px] md:text-xs font-bold text-[#95f8f2] uppercase tracking-widest">قصص النجاح</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4 md:mb-6 leading-tight">
            ماذا يقول <span className="text-[#95f8f2]">شركاؤنا</span>
          </h2>
          <p className="text-gray-400 text-sm md:text-lg max-w-2xl font-light">
             إليك آراء بعض أصحاب الأعمال الذين وثقوا بنا في رحلتهم الرقمية
          </p>
        </motion.div>
      </div>

      {/* Infinite Carousel Container */}
      <div className="relative flex overflow-hidden">
        <motion.div 
          className="flex gap-4 md:gap-6 px-4"
          animate={{
            // In RTL, animating x to positive 50% moves the rail correctly for an infinite loop
            x: ["0%", "50%"], 
          }}
          transition={{
            ease: "linear",
            duration: 35, // Balanced speed for readability
            repeat: Infinity,
          }}
          // Pauses the carousel on desktop hover or mobile touch
          whileHover={{ animationPlayState: "paused" }}
          whileTap={{ animationPlayState: "paused" }}
        >
          {duplicatedTestimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="w-[280px] sm:w-[350px] md:w-[450px] flex-shrink-0"
            >
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </motion.div>

        {/* Gradient Fades for depth */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-40 bg-gradient-to-r from-[#050505] to-transparent z-20" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-40 bg-gradient-to-l from-[#050505] to-transparent z-20" />
      </div>
    </section>
  );
};

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  return (
    <div className="relative h-full p-6 md:p-8 rounded-[24px] md:rounded-[32px] border border-white/5 bg-[#0D0D0D] hover:border-[#95f8f2]/30 transition-all duration-500 flex flex-col justify-between group">
      {/* Decorative Quote Icon */}
      <Quote className="absolute top-6 left-6 md:left-8 w-6 h-6 md:w-8 md:h-8 text-white/5 group-hover:text-[#95f8f2]/10 transition-colors" />

      <div>
        {/* Star Rating */}
        <div className="flex items-center gap-1 mb-4 md:mb-6">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-3 h-3 md:w-3.5 md:h-3.5 fill-[#f1c40f] text-[#f1c40f]" />
          ))}
        </div>

        {/* Quote Text */}
        <p className="text-sm md:text-[15px] leading-[1.6] md:leading-[1.8] mb-6 md:mb-8 text-right font-light text-gray-300">
          {testimonial.text}
        </p>
      </div>

      {/* Author Info */}
      <div className="flex items-center gap-3 md:gap-4 border-t border-white/5 pt-4 md:pt-6">
        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#1a1a1a] border border-white/10 flex items-center justify-center overflow-hidden flex-shrink-0">
          <span className="text-[#95f8f2] font-bold text-base md:text-lg">
            {testimonial.author.charAt(0)}
          </span>
        </div>
        <div className="text-right overflow-hidden">
          <h4 className="text-white font-bold text-xs md:text-sm truncate">{testimonial.author}</h4>
          <p className="text-[10px] md:text-[11px] text-gray-500 font-medium truncate">
            {/* {testimonial.company} */}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
