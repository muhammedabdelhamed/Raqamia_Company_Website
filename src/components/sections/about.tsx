import React from 'react';
import Image from 'next/image';

const AboutSection = () => {
  return (
    <section 
      id="about" 
      className="relative w-full py-[100px] bg-background overflow-hidden"
      dir="rtl"
    >
      <div className="container mx-auto px-5 max-w-[1200px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side: Mockup Image */}
          <div className="relative group flex justify-center lg:justify-start order-2 lg:order-1">
            <div className="relative w-full max-w-[500px] aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-white/10 glass-card">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/8205205b-e60e-44cf-8c02-e45e461bd9cf-e-cart-co/assets/images/2c24d27b5743778bfbea8ece0104fc2a-18.png"
                alt="E-cart Business Card Mockup"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 500px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
            </div>
            {/* Subtle glow effect behind image */}
            <div className="absolute -z-10 w-2/3 h-2/3 bg-primary/10 blur-[100px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full" />
          </div>

          {/* Right Side: Content */}
          <div className="flex flex-col space-y-8 order-1 lg:order-2">
            
            {/* Tag / Badge */}
            <div className="flex items-center self-start gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-lg">
              <Image 
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/8205205b-e60e-44cf-8c02-e45e461bd9cf-e-cart-co/assets/icons/f7d547ba9294253eae1636c6c55477e9-1.png"
                alt="About Icon"
                width={20}
                height={20}
                className="object-contain"
              />
              <span className="text-white text-sm font-bold font-display">تعرف علينا</span>
            </div>

            {/* Main Headlines */}
            <div className="space-y-4">
              <h2 className="text-[32px] md:text-[40px] font-extrabold text-white leading-tight">
                إيكارت هي شركة متخصصة في إنشاء وتطوير وتحسين متاجر Shopify باحترافية عالية
              </h2>
              <p className="text-muted-foreground text-lg md:text-xl font-medium leading-relaxed max-w-[540px]">
                من خلال خبرتنا الطويلة اللي بتزيد عن ٨ سنوات في مجال التجارة الإلكترونية والتسويق الرقمي، قدرنا نساعد أكثر من ٣٠٠ براند محلي وعالمي
              </p>
            </div>

            {/* Benefits List */}
            <ul className="space-y-5">
              {[
                "زيادة المبيعات بشكل مستمر",
                "تقليل التكاليف والمشاكل التشغيلية",
                "ربط التسويق بالمبيعات لتحقيق أعلى عائد على الاستثمار (ROI)",
                "تحسين تجربة العملاء (UX)"
              ].map((benefit, index) => (
                <li key={index} className="flex items-center gap-4 group">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center transition-colors group-hover:bg-primary/20">
                    <svg 
                      width="18" 
                      height="18" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      className="text-primary"
                      stroke="currentColor" 
                      strokeWidth="3" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <span className="text-white text-lg font-bold font-display group-hover:text-primary transition-colors">
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;