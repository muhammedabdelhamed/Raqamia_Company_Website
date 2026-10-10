"use client";
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, MessageCircle } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Add a scroll listener to change background opacity
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'الرئيسية', href: '#' },
    { name: 'مشاريعنا', href: '#projects' },
    { name: 'من نحن', href: '#about' },
    { name: 'خدماتنا', href: '#services' },
    { name: 'عملاؤنا', href: '#clients' },
    { name: 'الأسعار', href: '#prices' },
    { name: 'آراء العملاء', href: '#testimonials' },
  ];

  return (
    <header className="site-header fixed top-0 left-0 right-0 z-[1000] px-3 sm:px-4 pt-3 sm:pt-6 transition-all duration-300">
      <nav className="container mx-auto max-w-7xl">
        <div 
          className={`flex items-center justify-between px-4 sm:px-6 py-2.5 sm:py-3 rounded-[20px] sm:rounded-[24px] border border-white/10 backdrop-blur-[12px] transition-all duration-500 ${
            scrolled ? 'bg-black/60 shadow-2xl' : 'bg-white/5'
          }`}
        >
          {/* Logo Container */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="block group" aria-label="رقمية - الرئيسية">
              <Image 
                src="/Raqamia.webp" 
                alt="Raqamia Logo" 
                width={250}      
                height={100}      
                priority          
                // INCREASED SIZE HERE: Changed h-8 to h-12 and md:h-9 to md:h-16
                className="h-10 sm:h-12 md:h-16 w-auto object-contain transition-transform group-hover:scale-105"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center justify-center">
            <ul className="flex items-center gap-6 list-none m-0 p-0">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-gray-300 text-[14px] font-medium transition-all hover:text-[#95f8f2] relative group"
                  >
                    {link.name}
                    <span className="absolute -bottom-1 right-0 w-0 h-[2px] bg-[#95f8f2] transition-all group-hover:w-full" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <a 
              href="https://wa.me/201080404531" 
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#95f8f2] text-black text-[14px] font-black transition-all hover:shadow-[0_0_20px_rgba(36,219,129,0.4)] hover:scale-105 active:scale-95"
            >
              <MessageCircle className="w-4 h-4" />
              تواصل معنا
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            type="button"
            className="lg:hidden min-w-11 min-h-11 text-white p-2 hover:bg-white/5 rounded-xl transition-colors flex items-center justify-center"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'إغلاق قائمة التنقل' : 'فتح قائمة التنقل'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              id="mobile-navigation"
              className="lg:hidden mt-3 max-h-[calc(100dvh-7rem)] overflow-y-auto overscroll-contain rounded-[24px] border border-white/10 bg-black/95 backdrop-blur-xl shadow-2xl"
              dir="rtl"
            >
              <ul className="flex flex-col p-6 gap-2">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href} 
                      className="block text-gray-300 text-lg font-bold py-3 px-4 rounded-xl hover:bg-white/5 hover:text-[#95f8f2] transition-all"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
                <li className="mt-4 pt-4 border-t border-white/5">
                  <a 
                    href="https://wa.me/201080404531" 
                    className="flex items-center justify-center gap-3 w-full px-6 py-4 rounded-2xl bg-[#95f8f2] text-black text-lg font-black"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <MessageCircle className="w-6 h-6" />
                    تواصل معنا الآن
                  </a>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;
