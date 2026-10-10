"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Facebook, Linkedin, Instagram } from 'lucide-react';
import { FaTiktok } from 'react-icons/fa';


export default function Footer() {
  const paymentMethods = [
    { src: "/ma_symbol.svg", alt: "Mastercard" },
    { src: "/visa.svg", alt: "Visa" },
    { src: "/paypal-icon.webp", alt: "PayPal" },
    // { src: "/payoneer-svgrepo-com.svg", alt: "Payoneer_logo" },
    { src: "/InstaPay-logobase.net.svg", alt: "InstaPay" },
  ];

  return (
    <footer className="w-full bg-[#000000] pt-[60px] pb-[40px] px-4 md:px-0 border-t border-[#222222] font-sans rtl" dir="rtl">
      <div className="max-w-[1140px] mx-auto container">
        
        {/* Logo Section */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start mb-12">
          <div className="flex-shrink-0">
            <Link href="/" aria-label="الرئيسية">
              <Image 
                src="/Raqamia.webp"
                alt="Raqamia Logo"
                width={200}
                height={100}
                // أزلنا h-auto واستخدمنا الأبعاد لضمان ثبات المساحة
                className="w-[140px] md:w-[160px] object-contain"
              />
            </Link>
          </div>
        </div>

{/* Payment Methods */}
<div className="flex flex-wrap justify-center md:justify-start gap-3 mb-8">
  {paymentMethods.map((method, index) => (
    <div 
      key={index} 
      className="bg-[#1A1A1A] px-3 py-2 rounded-[8px] border border-[#222222] hover:border-[#95f8f2] transition-colors duration-300 flex items-center justify-center w-[70px] h-[40px]"
    >
      <Image 
        src={method.src} 
        alt={method.alt} 
        width={60} 
        height={30} 
        className="max-h-full max-w-full object-contain"
      />
    </div>
  ))}
</div>

        <div className="w-full h-[1px] bg-[#222222] mb-8" />

        <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-6 md:gap-0">
<div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-2 text-[14px] font-normal tracking-wide w-full text-center md:text-start">
  <span className="text-[#95f8f2] font-bold w-full md:w-auto">
    جميع الحقوق محفوظة Raqamia Tech © - المملوكة لـ Eslam Gamal
  </span>
</div>

          <div className="flex items-center gap-3">
            {/* WhatsApp - نقل الصورة داخلياً يحل مشكلة الـ Cache */}
            {/* <a 
              href="https://wa.me/201025990911?text=اريد%20حجز%20استشارة%20مجانية" 
              className="w-10 h-10 flex items-center justify-center rounded-full bg-[#1A1A1A] hover:bg-[#95f8f2] transition-colors duration-300 group"
              aria-label="تواصل معنا عبر واتساب"
            >
              <Image 
                src="/whatsapp.svg.webp" // يفضل رفعها محلياً
                alt="WhatsApp Icon" 
                width={20} 
                height={20}
                className="group-hover:brightness-0 group-hover:invert"
              />
            </a> */}
            
            <a href="https://www.linkedin.com/company/raqamia/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-11 h-11 flex items-center justify-center rounded-full bg-[#1A1A1A] hover:bg-[#95f8f2] transition-colors duration-300 group">
              <Linkedin size={18} className="text-[#A4A4A4] group-hover:text-[#000000]" />
            </a>

            <a href="https://www.instagram.com/raqamia_tech" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-11 h-11 flex items-center justify-center rounded-full bg-[#1A1A1A] hover:bg-[#95f8f2] transition-colors duration-300 group">
              <Instagram size={18} className="text-[#A4A4A4] group-hover:text-[#000000]" />
            </a>

            <a href="https://www.facebook.com/share/1HYew2Wz4L/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-11 h-11 flex items-center justify-center rounded-full bg-[#1A1A1A] hover:bg-[#95f8f2] transition-colors duration-300 group">
              <Facebook size={18} className="text-[#A4A4A4] group-hover:text-[#000000]" />
            </a>

            <a href="https://www.tiktok.com/@raqamia2" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="w-11 h-11 flex items-center justify-center rounded-full bg-[#1A1A1A] hover:bg-[#95f8f2] transition-colors duration-300 group">
              <FaTiktok className="text-[#A4A4A4] group-hover:text-[#000000]" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
