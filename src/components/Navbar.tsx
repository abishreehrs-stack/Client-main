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
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Openings', href: '/openings' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <header className="fixed top-0 w-full z-50 glass-nav shadow-[0_4px_20px_rgba(0,0,0,0.04)] transition-colors duration-300">
      <div className="h-20 max-w-container-max mx-auto px-6 flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-primary to-secondary flex items-center justify-center border border-glass-border shadow-md group-hover:scale-105 transition-transform">
            <span className="material-symbols-outlined text-on-primary text-[22px]">corporate_fare</span>
          </div>
          <div>
            <span className="font-extrabold text-xl text-primary tracking-tight block">Abishree HR</span>
            <span className="block text-[10px] text-on-surface-variant tracking-widest uppercase font-bold">Consultants</span>
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
        <div className="flex items-center gap-3">
          
          {/* Theme Toggle Button */}
          {mounted && (
            <button
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              className="p-2.5 rounded-xl bg-surface-container hover:bg-surface-container-high border border-glass-border text-primary transition-all shadow-sm flex items-center justify-center hover:scale-105 active:scale-95"
              title={isDarkTheme ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
            >
              <span className="material-symbols-outlined text-[20px]">
                {isDarkTheme ? 'light_mode' : 'dark_mode'}
              </span>
            </button>
          )}

          {/* Get in Touch direct CTA */}
          <Link
            href="/contact"
            className="cursor-pointer hidden sm:inline-flex items-center gap-2 bg-primary hover:bg-primary-fixed-dim text-on-primary text-xs font-bold px-4 py-2.5 rounded-xl shadow-md transition-all hover:-translate-y-0.5 active:scale-95"
          >
            <span className="material-symbols-outlined text-[18px]">support_agent</span>
            <span>Get in Touch</span>
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="md:hidden p-2 text-on-surface hover:text-primary rounded-lg"
          >
            <span className="material-symbols-outlined text-[26px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-nav border-b border-glass-border px-6 py-6 flex flex-col gap-3 animate-in fade-in slide-in-from-top-2 duration-200">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-base font-semibold py-2.5 px-3 rounded-lg transition-colors ${
                  isActive ? 'bg-primary/10 text-primary font-bold' : 'text-on-surface-variant hover:text-primary'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="cursor-pointer flex items-center justify-center gap-2 bg-primary text-on-primary text-sm font-bold px-4 py-3 rounded-xl mt-2 shadow-md"
          >
            <span className="material-symbols-outlined text-[18px]">support_agent</span>
            <span>Get in Touch</span>
          </Link>
        </div>
      )}
    </header>
  );
}
