"use client";

import React, { useState, useMemo, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Plus } from 'lucide-react';

// تحسين مصفوفة البيانات خارج المكون لمنع إعادة تعريفها
const PROJECTS = [
  { id: 1, image: "/projects/liekasse.webp", alt: "Liekasse", link: "https://www.liekasse.de/", category: "شركات" },
  { id: 2, image: "/projects/linxgallery.webp", alt: "Linx Gallery", link: "https://linxgallery.com/", category: "شركات" },
  { id: 3, image: "/projects/urmall.webp", alt: "Urmall", link: "https://urmall.org/", category: "شركات" },
  { id: 4, image: "/projects/marketingx1.webp", alt: "Marketingx1", link: "https://marketingx1.com/", category: "شركات" },
  // { id: 5, image: "/projects/company.webp", alt: "Company", link: "#", category: "شركات" },
  // { id: 6, image: "/projects/sneakers.webp", alt: "Sneakers", link: "https://sneakers.raqamia.tech/", category: "تجارة إلكترونية" },
  // { id: 7, image: "/projects/travelagency.webp", alt: "Travel Agency", link: "#", category: "سياحة" },
  // { id: 8, image: "/projects/lawfirm.webp", alt: "Law Firm", link: "#", category: "شركات" },
  { id: 9, image: "/projects/dcfyemen.webp", alt: "Development Champions Forums", link: "https://dcfyemen.org/", category: "شركات" },
  { id: 10, image: "/projects/amdaadsd.webp", alt: "Amdaad SD", link: "https://amdaadsd.com/", category: "شركات" },
  { id: 11, image: "/projects/shawarmani.webp", alt: "Shawarmani", link: "https://www.shawarmani.com.au/", category: "مطاعم" },
  { id: 12, image: "/projects/dayrabathrooms.webp", alt: "Dayra Bathrooms", link: "https://www.dayrabathrooms.com.au/", category: "شركات" },
  { id: 13, image: "/projects/dayracarpentry.webp", alt: "Dayra Carpentry", link: "https://www.dayracarpentry.com.au/", category: "شركات" },
  { id: 14, image: "/projects/direct-luggage.webp", alt: "Direct-luggage", link: "https://direct-luggage.co.uk/", category: "تجارة إلكترونية" },
  { id: 15, image: "/projects/belleproperty.webp", alt: "belle Property", link: "https://bellepropertymawsonlakes.com.au/", category: "شركات" },
  { id: 16, image: "/projects/nutrimena.webp", alt: "Nutrimena", link: "https://nutrimena.com/", category: "تعليمي" },
  { id: 17, image: "/projects/sauditranslation.webp", alt: "Saudi Translation", link: "https://sauditranslation.com/", category: "شركات" },
  { id: 18, image: "/projects/shortsgame.webp", alt: "The Shorts Game", link: "https://theshortsgame.com/", category: "تعليمي" },
  { id: 19, image: "/projects/knvaz.webp", alt: "knvaz", link: "https://knvaz.com/", category: "تجارة إلكترونية" },
  { id: 20, image: "/projects/arkamstore.webp", alt: "Arkamstore", link: "https://arkamstore.com/", category: "تجارة إلكترونية" },
  { id: 21, image: "/projects/lean-solution.webp", alt: "Lean Solutions", link: "https://lean-solution.com/", category: "شركات" },
  { id: 22, image: "/projects/takweenacademu.webp", alt: "Takween Academy", link: "https://takweenacademy.ps/", category: "تعليمي" },
  // { id: 23, image: "/projects/botanicaksa.webp", alt: "Botanica KSA", link: "https://botanicaksa.net/", category: "تجارة إلكترونية" },
  { id: 24, image: "/projects/architecture.webp", alt: "Architecture", link: "https://architecture.raqamia.tech/", category: "معمارية" },
  { id: 25, image: "/projects/lamsaagency.webp", alt: "Lamsa Agency", link: "https://lamsaagency.com/", category: "شركات" },
  // { id: 26, image: "/projects/content-eg.webp", alt: "Content Egypt", link: "https://content-eg.com/", category: "شركات" },
  // { id: 27, image: "/projects/orvenza.webp", alt: "Orvenza", link: "https://orvenza.net/", category: "تجارة إلكترونية" },
  // { id: 28, image: "/projects/homez.webp", alt: "Homez", link: "https://realestate.raqamia.tech/", category: "عقارات" },
  { id: 29, image: "/projects/tours.webp", alt: "Tourio", link: "https://tours.raqamia.tech/", category: "سياحة" },
  { id: 30, image: "/projects/medical.webp", alt: "Medical", link: "https://medical.raqamia.tech/", category: "طبي" },
  { id: 31, image: "/projects/egypt.webp", alt: "Egypt", link: "https://egypt.raqamia.tech/", category: "سياحة" },
  { id: 32, image: "/projects/lytarbzon.webp", alt: "lytarbzon", link: "https://lytarbzon.com/", category: "تجارة إلكترونية" },
  { id: 33, image: "/projects/aplusacademy.webp", alt: "aplusacademy", link: "https://aplusacademy.tech/", category: "تعليمي" },
  { id: 34, image: "/projects/egyptiscallingtours.webp", alt: "egyptiscallingtours", link: "https://egyptiscallingtours.com/", category: "سياحة" },
  { id: 35, image: "/projects/jawaheraltasmeem.webp", alt: "jawaheraltasmeem", link: "https://jawaheraltasmeem.com/", category: "تجارة إلكترونية" },
 ];

const CATEGORIES = ["الكل", "تجارة إلكترونية", "شركات","سياحة", "تعليمي", "طبي", "معمارية", "محاماة "];

const ProjectCard = React.memo(({ project }: { project: typeof PROJECTS[0] }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  // التحقق مما إذا كان المشروع "منتظراً"
  const isComingSoon = project.category === "قريباً";

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
      className="transform-gpu"
    >
      <a 
        href={isComingSoon ? "#" : project.link} 
        target={isComingSoon ? "_self" : "_blank"}
        rel="noopener noreferrer"
        onClick={(e) => isComingSoon && e.preventDefault()} // منع الضغط إذا كان قريباً
        className={`group relative block aspect-[4/5] overflow-hidden rounded-[32px] bg-[#0D0D0D] border border-white/5 transition-colors duration-500 ${
          isComingSoon ? "cursor-default" : "hover:border-[#95f8f2]/40"
        }`}
      >
        <div className="relative w-full h-full overflow-hidden">
          {/* حاوية الصورة مع تأثير Blur إذا كان المشروع قادماً */}
          <div className="absolute inset-0 w-full h-full overflow-hidden">
            <Image
              src={project.image.replace('/projects/', '/projects/thumbs/')}
              alt={project.alt}
              width={800}
              height={1000}
              onLoad={() => setIsLoaded(true)}
              className={`w-full h-full object-cover object-top transition-[opacity,transform] duration-700 motion-safe:group-hover:scale-[1.03] ${
                isLoaded ? "opacity-100" : "opacity-0"
              } ${isComingSoon ? "blur-xl scale-110 grayscale" : ""}`}
              sizes="(max-width: 767px) calc(100vw - 40px), (max-width: 1199px) calc(50vw - 36px), 400px"
              loading="lazy"
            />
          </div>
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent opacity-90 z-10 pointer-events-none" />
          
          {/* محتوى الكارد */}
          <div className="absolute inset-0 p-8 flex flex-col justify-end z-20">
            <div className="flex justify-between items-end">
              <div className="transform translate-y-0 transition-transform duration-500 ease-out">
                <span className={`px-3 py-1 rounded-full text-[10px] font-bold mb-3 inline-block ${
                  isComingSoon ? "bg-white/10 text-white/50" : "bg-[#95f8f2]/10 text-[#95f8f2]"
                }`}>
                  {isComingSoon ? "قريباً جداً" : project.category}
                </span>
                <h3 className="text-white text-2xl font-extrabold tracking-tight">
                  {isComingSoon ? "مشروع ننتظره جميعاً" : project.alt}
                </h3>
              </div>
              
              {!isComingSoon && (
                <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center text-white group-hover:bg-[#95f8f2] group-hover:text-black group-hover:rotate-12 transition-all duration-500 ease-out">
                  <ArrowUpRight className="w-7 h-7" />
                </div>
              )}
            </div>
          </div>
        </div>
      </a>
    </motion.div>
  );
});

ProjectCard.displayName = "ProjectCard";

const PortfolioGrid = () => {
  const [activeTab, setActiveTab] = useState("الكل");
  const [visibleCount, setVisibleCount] = useState(6);
  const [loading, setLoading] = useState(false);
const filteredProjects = useMemo(() => {
  // 1. فلترة المشاريع بناءً على التبويب النشط
  const filtered = activeTab === "الكل" 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === activeTab);

  // 2. الترتيب: جعل المشاريع المضافة حديثاً (ID الأكبر) تظهر أولاً
  // مع الحفاظ على منطق "قريباً" إذا كنت تريده في المقدمة دائماً
  return [...filtered].sort((a, b) => {
    // إذا كنت تريد "قريباً" دائماً في الأول:
    if (a.category === "قريباً" && b.category !== "قريباً") return -1;
    if (a.category !== "قريباً" && b.category === "قريباً") return 1;

    // لترتيب باقي المشاريع من الأحدث للأقدم (حسب الـ ID):
    return b.id - a.id; 
  });
}, [activeTab]);

  const handleLoadMore = useCallback(() => {
    setLoading(true);
    // تقليل وقت الـ setTimeout لتجربة أسرع
    setTimeout(() => {
      setVisibleCount(prev => prev + 3);
      setLoading(false);
    }, 400);
  }, []);

  const handleTabChange = useCallback((cat: string) => {
    setActiveTab(cat);
    setVisibleCount(6);
  }, []);

  return (
    <section id="projects" className="performance-section bg-[#050505] py-20 md:py-24 relative overflow-hidden" dir="rtl" aria-labelledby="projects-title">
      {/* Background Glow - Optimized with CSS translate instead of left-1/2 */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-[#95f8f2]/5 blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-5 max-w-7xl relative z-10">
        
        <div className="flex flex-col lg:flex-row justify-between items-end gap-10 mb-20">
          <div className="max-w-2xl text-right">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1.5 rounded-full bg-[#95f8f2]/10 border border-[#95f8f2]/20 mb-6"
            >
              <span className="text-[#95f8f2] text-sm font-bold">معرض الأعمال</span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              id="projects-title"
              className="text-white text-4xl md:text-6xl font-black mb-6 leading-[1.2]"
            >
              نصنع <span className="text-transparent bg-clip-text bg-gradient-to-l from-white to-[#95f8f2]">قصص نجاح</span> <br />رقمية استثنائية
            </motion.h2>
            <p className="text-gray-400 text-lg leading-relaxed">نحن لا نبني مواقع فقط، بل نبتكر تجارب بصرية تترك أثراً وتدعم نمو علامتك التجارية في السوق.</p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 bg-[#0D0D0D]/80 p-2 rounded-2xl border border-white/5 backdrop-blur-md">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => handleTabChange(cat)}
                aria-pressed={activeTab === cat}
                className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 relative ${
                  activeTab === cat 
                  ? "text-black" 
                  : "text-gray-500 hover:text-white"
                }`}
              >
                {activeTab === cat && (
                  <motion.div 
                    layoutId="activeTab"
                    className="absolute inset-0 bg-[#95f8f2] rounded-xl shadow-[0_8px_20px_rgba(36,219,129,0.25)]"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Animated Grid - Optimized Layout */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 min-h-[600px]">
          <AnimatePresence mode="popLayout" initial={false}>
            {filteredProjects.slice(0, visibleCount).map((project) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Load More Button */}
        {visibleCount < filteredProjects.length && (
          <div className="flex justify-center mt-20">
            <button
              onClick={handleLoadMore}
              disabled={loading}
              className="group relative px-12 py-5 rounded-full bg-[#95f8f2] text-black font-black flex items-center gap-4 transition-all duration-300 disabled:opacity-50 overflow-hidden shadow-[0_10px_30px_-10px_rgba(36,219,129,0.5)] hover:shadow-[0_15px_40px_-5px_rgba(36,219,129,0.6)]"
            >
              <span className="relative z-10 flex items-center gap-3">
                {loading ? (
                  <div className="animate-spin h-5 w-5 border-2 border-black border-t-transparent rounded-full" />
                ) : (
                  <>
                    <Plus className="w-6 h-6 transform group-hover:rotate-90 transition-transform duration-300" />
                    <span className="text-lg">استكشاف المزيد</span>
                  </>
                )}
              </span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default PortfolioGrid;
