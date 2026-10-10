// "use client";

// import React, { useEffect, useRef } from 'react';
// import Image from 'next/image';
// import { Trophy, Star } from 'lucide-react';
// import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion';

// // Separate Counter Component for reusability
// const Counter = ({ value, suffix = "" }) => {
//   const count = useMotionValue(0);
//   const rounded = useTransform(count, (latest) => Math.round(latest) + suffix);
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true });

//   useEffect(() => {
//     if (isInView) {
//       const controls = animate(count, value, { duration: 2, ease: "easeOut" });
//       return controls.stop;
//     }
//   }, [isInView, count, value]);

//   return <motion.p ref={ref} className="text-2xl font-bold text-white">{rounded}</motion.p>;
// };

// const BrandLogos = () => {
//   const brands = [
//     { name: "Brand 2", src: "/clients/logo.webp" },
//     { name: "Brand 4", src: "/clients/cropped-logo-H-1.webp" },
//     { name: "Brand 5", src: "/clients/logo-home-01-1-scaled-e1745697658360.webp" },
//     { name: "Loris", src: "/clients/Loris_Logo_Siyah-2-01.webp" },
//     { name: "LPS", src: "/clients/LPS-logo-copy-0.webp" },
//     { name: "Brand 8", src: "/clients/P2-scaled-e1750729689107-1.webp" },
//     { name: "Brand 9", src: "/clients/1718045598.webp" },
//     { name: "Tank", src: "/clients/TANK_logo-transparent_for_website-scaled.webp" },
//     { name: "Brand 11", src: "/clients/Untitled-1-02_crppoed-1.webp" },
//     { name: "Brand 12", src: "/clients/لوجو-الفرقه-الشجاعه-واضح-جدا1.webp" },
//     { name: "Brand 13", src: "/clients/T_20250513_191652_0000-scaled-e1747226411805-2048x1666-1.webp" },
//     { name: "Brand 14", src: "/clients/36eecf104be717a206c59e761c15058da8606c8b-5-1-768x264-1.webp" },
//     { name: "Brand 15", src: "/clients/cropped-cropped-logo-.pdf_20250910_220349_0000-2.webp" },
//     { name: "Brand 16", src: "/clients/4_20250414_195949_0001-300x96-1.webp" },
//     { name: "Belle", src: "/clients/belle-logo.webp" },
//     { name: "Brand 18", src: "/clients/cropped-Asset-1-1-1.webp" },
//     { name: "Brand 19", src: "/clients/WhatsApp-Image-2025-10-27-at-1.40.02-PM.jpeg" },
//     { name: "Brand 20", src: "/clients/logo-2048x2048-1.webp" },
//     { name: "DCF", src: "/clients/DCF-Logo-21-2-e1762939932233.webp" },
//     { name: "Brand 22", src: "/clients/3@2x.webp" },
//     { name: "Brand 23", src: "/clients/Asset-3@2x.webp" },
//     { name: "Brand 24", src: "/clients/logo-white-1-600x171-1.webp" },
//     { name: "Brand 25", src: "/clients/white-logo-1024x334-1.webp" },
//     { name: "Virox", src: "/clients/virox.svg" },
//   ];

//   return (
//     <section id="clients" className="bg-[#050505] py-24 relative overflow-hidden" dir="rtl">
//       {/* Decorative Blur Backgrounds */}
//       <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#95f8f2]/5 rounded-full blur-[120px] -z-1" />
//       <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-[100px] -z-1" />

//       <div className="container mx-auto px-6">
//         <div className="flex flex-col lg:flex-row items-center gap-16">
          
//           {/* Content Area */}
//           <motion.div 
//             initial={{ opacity: 0, x: 50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="w-full lg:w-5/12 text-right"
//           >
//             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#95f8f2]/10 border border-[#95f8f2]/20 mb-6">
//               <Star className="w-3.5 h-3.5 text-[#95f8f2] fill-[#95f8f2]" />
//               <span className="text-[#95f8f2] text-xs font-bold uppercase tracking-wider">شراكات نجاح</span>
//             </div>

//             <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
//               نضع بصمتنا في <span className="text-transparent bg-clip-text bg-gradient-to-l from-white to-[#95f8f2]">أقوى العلامات</span> التجارية
//             </h2>
            
//             <p className="text-gray-400 text-lg leading-relaxed mb-8">
//               خلال رحلتنا مع <span className="text-white font-semibold">رقمية</span>، كان لنا شرف التعاون مع أكثر من <span className="text-white text-xl font-bold underline decoration-[#95f8f2]">+300</span> براند في مختلف القطاعات داخل مصر وخارجها.
//             </p>

//             <div className="flex gap-8 border-t border-white/10 pt-8">
//               <div>
//                 {/* Applied Counter Component */}
//                 <Counter value={300} suffix="+" />
//                 <p className="text-sm text-gray-500">عميل سعيد</p>
//               </div>
//               <div className="w-[1px] bg-white/10" />
//               <div>
//                 {/* Applied Counter Component */}
//                 <Counter value={50} suffix="+" />
//                 <p className="text-sm text-gray-500">مشروع دولي</p>
//               </div>
//             </div>
//           </motion.div>

//           {/* Logo Grid */}
//           <motion.div 
//             initial={{ opacity: 0, scale: 0.9 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="w-full lg:w-7/12 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 md:gap-5"
//           >
//             {brands.map((brand, index) => (
//               <div 
//                 key={index} 
//                 className="group relative bg-[#0D0D0D] rounded-full aspect-square flex items-center justify-center p-3 border border-white/5 hover:border-[#95f8f2]/40 transition-all duration-300 shadow-[0px_4px_20px_rgba(0,0,0,0.4)]"
//               >
//                 <div className="w-full h-full relative overflow-hidden rounded-full flex items-center justify-center bg-white/5 transition-colors group-hover:bg-[#95f8f2]/5">
//                   <Image
//                     src={brand.src}
//                     alt={brand.name}
//                     width={60}
//                     height={60}
//                     className="object-contain max-w-[70%] max-h-[70%] grayscale brightness-90 contrast-125 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500"
//                   />
//                 </div>
//               </div>
//             ))}
//           </motion.div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default BrandLogos;


"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { Star } from 'lucide-react';
import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion';

// 1. Define types to fix the "implicitly has an any type" error
interface CounterProps {
  value: number;
  suffix?: string;
}

const Counter = ({ value, suffix = "" }: CounterProps) => {
  const count = useMotionValue(0);
  // 2. Explicitly type the transform latest value
  const rounded = useTransform(count, (latest: number) => Math.round(latest) + suffix);
  
  // 3. Explicitly type the ref as an HTMLParagraphElement
  const ref = useRef<HTMLParagraphElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, { duration: 2, ease: "easeOut" });
      return controls.stop;
    }
  }, [isInView, count, value]);

  return <motion.p ref={ref} className="text-2xl font-bold text-white">{rounded}</motion.p>;
};

const BrandLogos = () => {
  const brands = [
    // { name: "Brand 8", src: "/clients/P2-scaled-e1750729689107-1.webp" },
    // { name: "Brand 12", src: "/clients/لوجو-الفرقه-الشجاعه-واضح-جدا1.webp" },
    // { name: "Brand 13", src: "/clients/T_20250513_191652_0000-scaled-e1747226411805-2048x1666-1.webp" },
    // { name: "Brand 2", src: "/clients/logo.webp" },
    // { name: "Brand 4", src: "/clients/cropped-logo-H-1.webp" },
    // { name: "Brand 19", src: "/clients/border.webp" },
    // { name: "Brand 20", src: "/clients/axis.webp" },
    // { name: "Brand 25", src: "/clients/white-logo-1024x334-1.webp" },
    // { name: "Brand 15", src: "/clients/emaretsgallery.webp" },
    // { name: "Brand 16", src: "/clients/4_20250414_195949_0001-300x96-1.webp" },
    { name: "Brand 5", src: "/clients/logo-home-01-1-scaled-e1745697658360.webp" },
    { name: "Loris", src: "/clients/Loris_Logo_Siyah-2-01.webp" },
    { name: "LPS", src: "/clients/LPS-logo-copy-0.webp" },
    { name: "Brand 9", src: "/clients/1718045598.webp" },
    { name: "Tank", src: "/clients/TANK_logo-transparent_for_website-scaled.webp" },
    { name: "Brand 11", src: "/clients/Untitled-1-02_crppoed-1.webp" },
    { name: "Brand 14", src: "/clients/36eecf104be717a206c59e761c15058da8606c8b-5-1-768x264-1.webp" },
    { name: "Belle", src: "/clients/belle-logo.webp" },
    { name: "Brand 18", src: "/clients/cropped-Asset-1-1-1.webp" },
    { name: "DCF", src: "/clients/DCF-Logo-21-2-e1762939932233.webp" },
    { name: "Brand 22", src: "/clients/3@2x.webp" },
    { name: "Brand 23", src: "/clients/Asset-3@2x.webp" },
    { name: "Brand 24", src: "/clients/logo-white-1-600x171-1.webp" },
    { name: "Virox", src: "/clients/virox.svg" },
    { name: "Virox", src: "/clients/5-1 (1).webp" },
    { name: "Virox", src: "/clients/MX1-white (1).png" },
  ];

  return (
    <section id="clients" className="performance-section bg-[#050505] py-20 md:py-24 relative overflow-hidden" dir="rtl">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#95f8f2]/5 rounded-full blur-[120px] -z-1" />
      
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
              <Star className="w-3.5 h-3.5 text-[#95f8f2] fill-[#95f8f2]" />
              <span className="text-[#95f8f2] text-xs font-bold uppercase tracking-wider">شراكات نجاح</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
              نضع بصمتنا في <span className="text-transparent bg-clip-text bg-gradient-to-l from-white to-[#95f8f2]">أقوى العلامات</span> التجارية
            </h2>
            
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              خلال رحلتنا مع <span className="text-white font-semibold">رقمية</span>، كان لنا شرف التعاون مع أكثر من <span className="text-white text-xl font-bold underline decoration-[#95f8f2]">+300</span> براند.
            </p>

            <div className="flex gap-8 border-t border-white/10 pt-8">
              <div>
                <Counter value={300} suffix="+" />
                <p className="text-sm text-gray-500">عميل سعيد</p>
              </div>
              <div className="w-[1px] bg-white/10" />
              <div>
                <Counter value={50} suffix="+" />
                <p className="text-sm text-gray-500">مشروع دولي</p>
              </div>
            </div>
          </motion.div>

          {/* Logo Grid - Showing all in multiple rows */}
          <motion.div 
            className="w-full lg:w-7/12 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 md:gap-5"
          >
            {brands.map((brand, index) => (
              <div 
                key={index} 
                className="group relative bg-[#0D0D0D] rounded-full aspect-square flex items-center justify-center p-3 border border-white/5 hover:border-[#95f8f2]/40 transition-all duration-300"
              >
                <div className="w-full h-full relative overflow-hidden rounded-full flex items-center justify-center bg-white/5 transition-colors group-hover:bg-[#95f8f2]/5">
                  <Image
                    src={brand.src}
                    alt={brand.name}
                    width={60}
                    height={60}
                    className="object-contain max-w-[70%] max-h-[70%]  brightness-90 contrast-125 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500"
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BrandLogos;
