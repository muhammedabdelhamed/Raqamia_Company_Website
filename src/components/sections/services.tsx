import React from 'react';
import Image from 'next/image';

const Services = () => {
  const assets = [
    {
      id: "store-dev",
      icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/8205205b-e60e-44cf-8c02-e45e461bd9cf-e-cart-co/assets/icons/1-1-3.png",
      title: "Shopify Store Development",
      items: [
        "Premium Theme Setup",
        "Store Pages (Home, PLP, PDP, Checkout, Policies)",
        "Payment & Shipping Integrations"
      ]
    },
    {
      id: "ui-ux",
      icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/8205205b-e60e-44cf-8c02-e45e461bd9cf-e-cart-co/assets/icons/5-1-4.png",
      title: "UI/UX Optimisation",
      items: [
        "Responsive & Mobile-first Design",
        "Speed Optimisation",
        "Custom Liquid Development"
      ]
    },
    {
      id: "cro",
      icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/8205205b-e60e-44cf-8c02-e45e461bd9cf-e-cart-co/assets/icons/2-1-5.png",
      title: "Conversion Rate Optimisation (CRO)",
      items: [
        "Funnel Audit",
        "PDP & Checkout Optimisation",
        "Upsell & Cross-sell Strategies"
      ]
    },
    {
      id: "growth",
      icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/8205205b-e60e-44cf-8c02-e45e461bd9cf-e-cart-co/assets/icons/6-1-6.png",
      title: "Ongoing Growth Support",
      items: [
        "Store Maintenance & Updates",
        "Marketing Integrations (Meta, TikTok, Google)",
        "Analytics & Reporting"
      ]
    }
  ];

  return (
    <section id="services" className="relative py-24 bg-[#000000] overflow-hidden" dir="rtl">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container relative z-10 mx-auto px-5 lg:px-10 max-w-[1200px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Right Column: Text and Stats */}
          <div className="order-1 lg:order-2 flex flex-col items-start text-right">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#1a1a1a] border border-white/10 mb-6">
              <span className="text-[#a9a9a9] text-sm font-medium">خدماتنا</span>
              <div className="w-4 h-4 text-primary">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                </svg>
              </div>
            </div>

            <h2 className="text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6 font-display">
              اكتشف خدمات فريق <span className="text-primary">E-cart</span>
            </h2>

            <p className="text-lg text-[#a9a9a9] leading-relaxed mb-10 max-w-lg">
              إحنا في eCart مش بس بنقدم خدمة بناء موقع، لكن بنوفّر منظومة متكاملة تخلي متجرك الإلكتروني يبيع بفعالية من أول يوم.
            </p>

            <div className="grid grid-cols-3 gap-8 mb-12 w-full">
              <div className="flex flex-col">
                <span className="text-4xl lg:text-5xl font-bold text-white mb-2">+8</span>
                <span className="text-sm text-[#a9a9a9]">سنوات خبرة</span>
              </div>
              <div className="flex flex-col">
                <span className="text-4xl lg:text-5xl font-bold text-white mb-2">+120</span>
                <span className="text-sm text-[#a9a9a9]">المشاريع</span>
              </div>
              <div className="flex flex-col">
                <span className="text-4xl lg:text-5xl font-bold text-white mb-2">+300</span>
                <span className="text-sm text-[#a9a9a9]">العملاء</span>
              </div>
            </div>

            <a 
              href="https://wa.link/3tvu5g"
              className="inline-flex items-center justify-center px-10 py-4 bg-primary text-black font-bold rounded-lg transition-transform hover:scale-105 active:scale-95 text-base"
            >
              احجز اجتماعًا &larr;
            </a>
          </div>

          {/* Left Column: Services Grid */}
          <div className="order-2 lg:order-1 grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            {assets.map((service) => (
              <div 
                key={service.id}
                className="glass-card group p-8 rounded-xl bg-[#0a0a0a]/80 border border-white/5 backdrop-blur-xl transition-all hover:border-primary/20 hover:bg-[#111111]"
              >
                <div className="w-14 h-14 rounded-lg bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Image 
                    src={service.icon}
                    alt={service.title}
                    width={32}
                    height={32}
                    className="object-contain"
                  />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4 font-display text-left" dir="ltr">
                  {service.title}
                </h3>
                
                <ul className="space-y-3 list-none p-0 m-0" dir="ltr">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-[#a9a9a9] text-left leading-relaxed">
                      <span className="text-primary mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>

        {/* Feature List Overlays (Floating Info) */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-20" dir="rtl">
          {[
            "120 متجر Shopify تم بناؤه وتسليمه بنجاح لعملاء محليين وعالميين.",
            "تركيز أساسي على تحسين معدل التحويل (CRO) لضمان زيادة المبيعات.",
            "خبرة مع أكثر من 300 براند في مختلف القطاعات.",
            "فريق متكامل يجمع بين التطوير، التسويق، إدارة البيانات، وتجربة المستخدم.",
            "شفافية كاملة في كل خطوة وجدول زمني محدد."
          ].map((text, idx) => (
            <div 
              key={idx}
              className="px-5 py-4 bg-[#0a0a0a] border border-white/5 rounded-md text-sm text-[#a9a9a9] text-center leading-relaxed flex items-center justify-center hover:border-primary/30 transition-colors"
            >
              {text}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
