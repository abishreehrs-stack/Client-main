'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem('abishree_theme');
    if (stored === 'light') {
      setIsDarkTheme(false);
      document.documentElement.classList.remove('dark');
    } else {
      setIsDarkTheme(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = !isDarkTheme;
    setIsDarkTheme(nextTheme);
    if (nextTheme) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('abishree_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('abishree_theme', 'light');
    }
  };

  const navItems = [
    { label: 'Home', href: '/', icon: 'home' },
    { label: 'Services', href: '/services', icon: 'psychology' },
    { label: 'Openings', href: '/openings', icon: 'work' },
    { label: 'Contact', href: '/contact', icon: 'support_agent' },
  ];

  return (
    <>
      <header className="fixed top-0 w-full z-50 glass-nav shadow-[0_4px_20px_rgba(0,0,0,0.04)] transition-colors duration-300">
        <div className="h-16 md:h-20 max-w-container-max mx-auto px-4 sm:px-6 flex items-center justify-between">
          
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-2.5 sm:gap-3 group">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-primary to-secondary flex items-center justify-center border border-glass-border shadow-md group-hover:scale-105 transition-transform shrink-0">
              <span className="material-symbols-outlined text-on-primary text-[20px] sm:text-[22px]">corporate_fare</span>
            </div>
            <div>
              <span className="font-extrabold text-lg sm:text-xl text-primary tracking-tight block leading-tight">Abishree HR</span>
              <span className="block text-[9px] sm:text-[10px] text-on-surface-variant tracking-widest uppercase font-bold">Consultants</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`transition-all duration-200 py-1 text-sm font-semibold relative ${
                    isActive
                      ? 'text-primary font-bold'
                      : 'text-on-surface-variant hover:text-primary'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Action Controls */}
          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* Theme Toggle Button */}
            {mounted && (
              <button
                onClick={toggleTheme}
                aria-label="Toggle Theme"
                className="p-2 sm:p-2.5 rounded-xl bg-surface-container hover:bg-surface-container-high border border-glass-border text-primary transition-all shadow-sm flex items-center justify-center hover:scale-105 active:scale-95 min-w-[40px] min-h-[40px]"
                title={isDarkTheme ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
              >
                <span className="material-symbols-outlined text-[18px] sm:text-[20px]">
                  {isDarkTheme ? 'light_mode' : 'dark_mode'}
                </span>
              </button>
            )}

            {/* Desktop Get in Touch CTA */}
            <Link
              href="/contact"
              className="cursor-pointer hidden sm:inline-flex items-center gap-2 bg-primary hover:bg-primary-fixed-dim text-on-primary text-xs font-bold px-4 py-2.5 rounded-xl shadow-md transition-all hover:-translate-y-0.5 active:scale-95"
            >
              <span className="material-symbols-outlined text-[18px]">support_agent</span>
              <span>Get in Touch</span>
            </Link>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
              className="md:hidden p-2 text-on-surface hover:text-primary rounded-xl bg-surface-container/60 border border-glass-border flex items-center justify-center min-w-[40px] min-h-[40px]"
            >
              <span className="material-symbols-outlined text-[24px]">
                {mobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Full Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden glass-nav border-b border-glass-border px-5 py-5 flex flex-col gap-4 animate-in fade-in slide-in-from-top-3 duration-250 shadow-2xl max-h-[calc(100vh-4rem)] overflow-y-auto">
            
            {/* Nav Links List */}
            <div className="flex flex-col gap-1.5">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center gap-3 text-sm font-bold py-3 px-4 rounded-xl transition-all ${
                      isActive 
                        ? 'bg-primary text-on-primary shadow-md' 
                        : 'text-on-surface-variant hover:text-primary hover:bg-surface-container'
                    }`}
                  >
                    <span className="material-symbols-outlined text-[20px]">{item.icon}</span>
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </div>

            {/* Quick Contact & Action Buttons */}
            <div className="pt-3 border-t border-glass-border flex flex-col gap-2.5">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="cursor-pointer flex items-center justify-center gap-2 bg-primary hover:bg-primary-fixed-dim text-on-primary text-sm font-bold py-3.5 px-4 rounded-xl shadow-md active:scale-98"
              >
                <span className="material-symbols-outlined text-[18px]">support_agent</span>
                <span>Connect with an Advisor</span>
              </Link>

              <div className="grid grid-cols-2 gap-2 pt-1">
                <a
                  href="tel:+919876500112"
                  className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-surface-container hover:bg-surface-container-high text-xs font-bold text-primary border border-glass-border shadow-sm"
                >
                  <span className="material-symbols-outlined text-[16px]">call</span>
                  <span>Call Desk</span>
                </a>
                <a
                  href="mailto:contact@abishreehr.com"
                  className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-surface-container hover:bg-surface-container-high text-xs font-bold text-primary border border-glass-border shadow-sm"
                >
                  <span className="material-symbols-outlined text-[16px]">mail</span>
                  <span>Email Us</span>
                </a>
              </div>
            </div>

          </div>
        )}
      </header>

      {/* Backdrop overlay for mobile menu */}
      {mobileMenuOpen && (
        <div 
          onClick={() => setMobileMenuOpen(false)}
          className="fixed inset-0 bg-black/40 backdrop-blur-xs z-40 md:hidden"
        />
      )}
    </>
  );
}
