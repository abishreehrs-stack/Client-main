'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function Footer() {
  const [legalModal, setLegalModal] = useState<'privacy' | 'terms' | 'compliance' | null>(null);

  return (
    <footer className="w-full bg-surface-container-low text-on-surface border-t border-glass-border pt-12 pb-10 sm:pt-16 sm:pb-12 transition-colors duration-300">
      <div className="max-w-container-max mx-auto px-4 sm:px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10">
        
        {/* Brand Column */}
        <div className="flex flex-col gap-3.5 sm:gap-4 sm:col-span-2 md:col-span-1">
          <Link href="/" className="flex items-center gap-2.5 sm:gap-3 group self-start">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-primary to-secondary flex items-center justify-center border border-glass-border shadow-md group-hover:scale-105 transition-transform shrink-0">
              <span className="material-symbols-outlined text-on-primary text-[20px] sm:text-[22px]">corporate_fare</span>
            </div>
            <div>
              <span className="font-extrabold text-lg sm:text-xl text-primary block leading-tight">Abishree HR</span>
              <span className="text-[9px] sm:text-[10px] text-on-surface-variant uppercase tracking-widest font-bold">Consultants</span>
            </div>
          </Link>
          <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
            Connecting exceptional leadership talent with visionary enterprises. Building resilient organizations with premier manpower search and statutory compliance frameworks.
          </p>
          <div className="flex items-center gap-2.5 pt-1">
            <a 
              href="mailto:contact@abishreehr.com" 
              aria-label="Email Advisory Desk" 
              className="w-10 h-10 rounded-xl bg-surface-container hover:bg-primary hover:text-on-primary border border-glass-border flex items-center justify-center text-primary transition-all shadow-sm active:scale-95"
            >
              <span className="material-symbols-outlined text-[18px]">mail</span>
            </a>
            <a 
              href="tel:+919876500112" 
              aria-label="Call Advisory Desk" 
              className="w-10 h-10 rounded-xl bg-surface-container hover:bg-primary hover:text-on-primary border border-glass-border flex items-center justify-center text-primary transition-all shadow-sm active:scale-95"
            >
              <span className="material-symbols-outlined text-[18px]">call</span>
            </a>
            <Link 
              href="/contact" 
              aria-label="Book Consultation" 
              className="w-10 h-10 rounded-xl bg-surface-container hover:bg-primary hover:text-on-primary border border-glass-border flex items-center justify-center text-primary transition-all shadow-sm active:scale-95"
            >
              <span className="material-symbols-outlined text-[18px]">support_agent</span>
            </Link>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xs font-extrabold text-primary uppercase tracking-wider mb-3 sm:mb-4">Quick Links</h4>
          <ul className="flex flex-col gap-2 text-xs sm:text-sm text-on-surface-variant">
            <li>
              <Link href="/" className="hover:text-primary transition-colors py-1 flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[16px] text-primary">chevron_right</span> 
                <span>Home Overview</span>
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-primary transition-colors py-1 flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[16px] text-primary">chevron_right</span> 
                <span>HR Consulting Services</span>
              </Link>
            </li>
            <li>
              <Link href="/openings" className="hover:text-primary transition-colors py-1 flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[16px] text-primary">chevron_right</span> 
                <span>Career Opportunities</span>
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-primary transition-colors py-1 flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[16px] text-primary">chevron_right</span> 
                <span>Consultation Desk</span>
              </Link>
            </li>
          </ul>
        </div>

        {/* Core Practices */}
        <div>
          <h4 className="text-xs font-extrabold text-primary uppercase tracking-wider mb-3 sm:mb-4">Core Practices</h4>
          <ul className="flex flex-col gap-2 text-xs sm:text-sm text-on-surface-variant">
            <li>
              <Link href="/services" className="hover:text-primary transition-colors py-1 flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[16px] text-secondary">verified</span> 
                <span>Executive Search & C-Suite</span>
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-primary transition-colors py-1 flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[16px] text-secondary">verified</span> 
                <span>Technical & Engineering Squads</span>
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-primary transition-colors py-1 flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[16px] text-secondary">verified</span> 
                <span>Statutory Compliance & POSH</span>
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-primary transition-colors py-1 flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[16px] text-secondary">verified</span> 
                <span>HR Policy & Infrastructure</span>
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-primary transition-colors py-1 flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[16px] text-secondary">verified</span> 
                <span>Leadership Talent Mapping</span>
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-xs font-extrabold text-primary uppercase tracking-wider mb-3 sm:mb-4">Headquarters</h4>
          <div className="flex flex-col gap-2.5 text-xs sm:text-sm text-on-surface-variant">
            <div className="flex items-start gap-2">
              <span className="material-symbols-outlined text-primary text-[18px] mt-0.5 shrink-0">location_on</span>
              <span>Level 7, Infinity Glass Towers, Cyber City, Bangalore - 560100</span>
            </div>
            <a href="mailto:contact@abishreehr.com" className="flex items-center gap-2 hover:text-primary transition-colors py-0.5">
              <span className="material-symbols-outlined text-primary text-[18px] shrink-0">mail</span>
              <span>contact@abishreehr.com</span>
            </a>
            <a href="tel:+919876500112" className="flex items-center gap-2 hover:text-primary transition-colors py-0.5">
              <span className="material-symbols-outlined text-primary text-[18px] shrink-0">call</span>
              <span>+91 98765 00112</span>
            </a>
            <div className="pt-1 text-[11px] text-on-surface-variant">
              <span>Operating Hours: Mon - Fri (9:00 AM – 7:00 PM IST)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Legal Bar */}
      <div className="max-w-container-max mx-auto px-4 sm:px-6 mt-8 sm:mt-12 pt-5 sm:pt-6 border-t border-glass-border flex flex-col sm:flex-row items-center justify-between text-[11px] sm:text-xs text-on-surface-variant gap-3.5 text-center sm:text-left">
        <div>© 2026 Abishree HR Consultants. All rights reserved.</div>
        <div className="flex gap-4 sm:gap-6 flex-wrap justify-center">
          <button 
            onClick={() => setLegalModal('privacy')} 
            className="hover:text-primary cursor-pointer transition-colors py-1"
          >
            Privacy Policy
          </button>
          <button 
            onClick={() => setLegalModal('terms')} 
            className="hover:text-primary cursor-pointer transition-colors py-1"
          >
            Terms of Service
          </button>
          <button 
            onClick={() => setLegalModal('compliance')} 
            className="hover:text-primary cursor-pointer transition-colors py-1"
          >
            Statutory Compliance Notice
          </button>
        </div>
      </div>

      {/* Legal & Compliance Modal */}
      {legalModal && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/65 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="glass-card rounded-t-3xl sm:rounded-3xl max-w-xl w-full p-5 sm:p-8 flex flex-col gap-4 sm:gap-5 shadow-2xl border-t sm:border border-glass-border max-h-[88vh] sm:max-h-[85vh] overflow-y-auto pb-safe">
            
            {/* Mobile drag bar */}
            <div className="w-12 h-1.5 rounded-full bg-on-surface-variant/30 mx-auto sm:hidden shrink-0" />

            <div className="flex items-center justify-between pb-3 border-b border-glass-border">
              <div className="flex items-center gap-2 text-primary font-bold text-sm sm:text-lg">
                <span className="material-symbols-outlined text-[20px] sm:text-[24px]">
                  {legalModal === 'privacy' ? 'security' : legalModal === 'terms' ? 'gavel' : 'verified_user'}
                </span>
                <span>
                  {legalModal === 'privacy' && 'Privacy & Candidate Data Protection Policy'}
                  {legalModal === 'terms' && 'Terms of Executive Service & Mandates'}
                  {legalModal === 'compliance' && 'Statutory Compliance & Labor Law Notice'}
                </span>
              </div>
              <button 
                onClick={() => setLegalModal(null)} 
                className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-on-surface hover:text-primary transition-colors shrink-0"
              >
                <span className="material-symbols-outlined text-[20px]">close</span>
              </button>
            </div>

            <div className="text-xs sm:text-sm text-on-surface-variant leading-relaxed flex flex-col gap-2.5">
              {legalModal === 'privacy' && (
                <>
                  <p><strong>Candidate Data Confidentiality:</strong> Abishree HR Consultants adheres strictly to the Digital Personal Data Protection (DPDP) Act 2023 and global confidentiality standards.</p>
                  <p>We never disclose candidate resumes, current compensation, or identity to prospective employers without prior informed consent.</p>
                  <p>All client organizational mandates, internal hiring projections, and proprietary search criteria are protected under non-disclosure agreements.</p>
                </>
              )}

              {legalModal === 'terms' && (
                <>
                  <p><strong>Executive Retained & Contingency Search:</strong> All professional recruitment mandates are conducted under agreed SLA frameworks with clear milestone commitments.</p>
                  <p><strong>90-Day Placement Replacement Guarantee:</strong> In the event that a placed executive departs within 90 days of onboarding, Abishree HR conducts an immediate, prioritized replacement search at zero additional fee.</p>
                  <p>Inquiries submitted through this platform are assigned directly to specialized senior practice partners.</p>
                </>
              )}

              {legalModal === 'compliance' && (
                <>
                  <p><strong>Statutory Labor Law Adherence:</strong> Abishree HR Consultants is a certified corporate advisory firm compliant with Central & State Labor Regulations across India.</p>
                  <p>We champion <strong>Equal Opportunity Employment</strong>, ensuring zero discrimination on gender, religion, background, or physical ability in all talent searches.</p>
                  <p>Our POSH & Statutory Audit advisory practices operate in compliance with the Sexual Harassment of Women at Workplace Act 2013 and Ministry of Labour guidelines.</p>
                </>
              )}
            </div>

            <div className="pt-3 border-t border-glass-border flex justify-end">
              <button
                onClick={() => setLegalModal(null)}
                className="bg-primary text-on-primary font-bold text-xs px-6 py-3 rounded-xl shadow w-full sm:w-auto"
              >
                Close Notice
              </button>
            </div>
          </div>
        </div>
      )}

    </footer>
  );
}
