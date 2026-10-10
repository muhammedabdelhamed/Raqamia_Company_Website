import React from 'react';
import Image from 'next/image';
import { Trophy } from 'lucide-react';

/**
 * Clients Section - "Trusted Brands"
 * Features a circular logo grid on the right (RTL context) and description text with a trophy badge on the left.
 */

const clientLogos = [
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/8205205b-e60e-44cf-8c02-e45e461bd9cf-e-cart-co/assets/images/SUTRA-1-3.png", alt: "Sutra" },
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/8205205b-e60e-44cf-8c02-e45e461bd9cf-e-cart-co/assets/images/Untitled-design-3-4.png", alt: "Client Logo" },
  // Fallback logos based on the circular grid in screenshots
  { src: "https://e-cart.co/wp-content/uploads/2025/10/8f7ec5b3a2452c04707cafd14d53ac8ee43c13ee-1024x297.png", alt: "Ecart Client" }, // Example using found asset URL
];

// Mocking some logo circular items to fill the grid as seen in screenshots
const brands = Array.from({ length: 18 }).map((_, i) => ({
  id: i,
  src: i % 2 === 0 ? clientLogos[0].src : clientLogos[1].src,
  alt: `Brand ${i + 1}`,
}));

export default function ClientsSection() {
  return (
    <section className="relative py-[100px] overflow-hidden bg-black" dir="rtl">
      <div className="container mx-auto px-5 lg:px-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          
          {/* Circular Logo Grid Side */}
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <div className="grid grid-cols-4 md:grid-cols-6 gap-4 md:gap-6 justify-items-center">
              {brands.map((brand) => (
                <div 
                  key={brand.id} 
                  className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#1a1a1a] border border-white/10 flex items-center justify-center p-2 hover:border-[#90bd26] transition-colors duration-300"
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={brand.src}
                      alt={brand.alt}
                      fill
                      className="object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                </div>
              ))}
              {/* Extra branding circles as seen in design */}
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#1a1a1a] border border-white/5 flex items-center justify-center text-[10px] text-muted-foreground transition-all duration-300 hover:text-primary">
                +300
              </div>
            </div>
          </div>

          {/* Text Content Side */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2 flex flex-col items-start text-right">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-lg bg-white/5 border border-white/10 text-white/80 text-sm font-medium">
              <span className="text-primary text-xs">موثوق من</span>
              <Trophy size={14} className="text-primary" />
            </div>

            {/* Heading */}
            <h2 className="text-[32px] md:text-[40px] font-bold text-white mb-6 leading-tight">
              موثوق من أبرز العلامات التجارية
            </h2>

            {/* Description */}
            <p className="text-[#a9a9a9] text-base md:text-lg leading-relaxed max-w-[540px]">
              خلال رحلتنا مع رقمية كان لينا شرف التعاون مع أكثر من 300 براند في مختلف القطاعات داخل مصر وخارجها. 
              هدفنا مش بس نبني موقع… هدفنا نبني متجر يبيع ويكبر معاك.
            </p>

            {/* Sub-note/Stats */}
            <div className="mt-8 pt-8 border-t border-white/10 w-full">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-[#90bd26]/10 rounded-lg">
                  <div className="text-[#90bd26] font-bold text-xl">8+</div>
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm">سنوات من الخبرة العملية</h4>
                  <p className="text-[#a9a9a9] text-xs">كشركاء رسميين لـ Shopify</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Decorative background glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-[#90bd26]/5 blur-[120px] rounded-full -z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#90bd26]/5 blur-[100px] rounded-full -z-10 pointer-events-none" />
    </section>
  );
}