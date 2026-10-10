import React from 'react';
import Image from 'next/image';

const projects = [
  {
    id: 1,
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/8205205b-e60e-44cf-8c02-e45e461bd9cf-e-cart-co/assets/images/areeza-scaled-6.webp',
    alt: 'Project 1',
  },
  {
    id: 2,
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/8205205b-e60e-44cf-8c02-e45e461bd9cf-e-cart-co/assets/images/Avens-scaled-7.webp',
    alt: 'Project 2',
  },
  {
    id: 3,
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/8205205b-e60e-44cf-8c02-e45e461bd9cf-e-cart-co/assets/images/Glowlight-scaled-8.webp',
    alt: 'Project 3',
  },
  {
    id: 4,
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/8205205b-e60e-44cf-8c02-e45e461bd9cf-e-cart-co/assets/images/Qayro-scaled-11.webp',
    alt: 'Project 4',
  },
  {
    id: 5,
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/8205205b-e60e-44cf-8c02-e45e461bd9cf-e-cart-co/assets/images/mansoj-scaled-9.webp',
    alt: 'Project 5',
  },
  {
    id: 6,
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/8205205b-e60e-44cf-8c02-e45e461bd9cf-e-cart-co/assets/images/Next-Rich-scaled-10.webp',
    alt: 'Project 6',
  },
];

const PortfolioSection = () => {
  return (
    <section 
      id="projects" 
      className="relative py-[100px] overflow-hidden bg-background"
      dir="rtl"
    >
      <div className="container mx-auto px-[20px] max-w-[1200px]">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-4 mb-[50px] animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <div className="flex items-center gap-2 bg-[#1a1a1a]/50 border border-white/10 px-4 py-2 rounded-lg">
            {/* eslint-disable-next-line @next/next/no-img-element -- legacy section kept outside the active page */}
            <img
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/8205205b-e60e-44cf-8c02-e45e461bd9cf-e-cart-co/assets/svgs/19eedb805702510f6ea16bedca199895-8.svg" 
              alt="Icon" 
              className="w-5 h-5"
            />
            <span className="text-foreground font-bold text-[18px]">مشاريعنا</span>
          </div>
          
          <h2 className="text-[32px] md:text-[40px] font-extrabold text-foreground leading-tight">
            المشاريع الأخيرة
          </h2>
          
          <p className="text-[#A9A9A9] text-[18px] max-w-[600px]">
            ألقِ نظرة على بعضٍ من أحدث مشاريعنا.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] mb-[60px]">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="group relative overflow-hidden rounded-[20px] border border-white/5 bg-[#0a0a0a] transition-all duration-500 hover:border-[#90bd26]/30 hover:scale-[1.02]"
            >
              <div className="aspect-[4/3] relative">
                <Image
                  src={project.image}
                  alt={project.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* View More CTA */}
        <div className="flex justify-center mt-10">
          <a
            href="https://www.behance.net/ecartsolutions"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-center gap-3 bg-[#90bd26] text-[#000000] px-[35px] py-[15px] rounded-[10px] font-bold text-[18px] transition-all duration-300 hover:scale-[1.05] hover:shadow-[0_0_20px_rgba(144,189,38,0.4)]"
          >
            <span className="order-2">شاهد المزيد من أعمالنا</span>
            <svg 
              className="w-6 h-6 order-1" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M15 13.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"/>
              <path d="M12 18h.01"/>
              <path d="M12 2a10 10 0 0 0-10 10c0 4.478 2.943 8.268 7 9.54V15h2.5a2.5 2.5 0 0 0 0-5H9a.5.5 0 0 1 0-1h3.5a3.5 3.5 0 1 0 0-7H12Z"/>
            </svg>
          </a>
        </div>
      </div>

      {/* Background Decoratives */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-[#90bd26]/5 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#90bd26]/3 rounded-full blur-[100px] pointer-events-none -z-10" />
    </section>
  );
};

export default PortfolioSection;
