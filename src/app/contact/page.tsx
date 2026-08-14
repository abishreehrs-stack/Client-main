'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { API_BASE } from '@/config/api';

export default function ContactPage() {
  const [serviceInterest, setServiceInterest] = useState('Executive Search & Leadership Hiring');
  const [headcountScope, setHeadcountScope] = useState('1-5 Key Roles');
  const [targetTimeline, setTargetTimeline] = useState('Immediate / Urgent (within 14 days)');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [organization, setOrganization] = useState('');
  const [message, setMessage] = useState('');

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const practiceOptions = [
    { id: 'Executive Search & Leadership Hiring', label: 'Executive Search', icon: 'psychology' },
    { id: 'Technical & Engineering Staffing', label: 'Tech Staffing', icon: 'developer_mode' },
    { id: 'Statutory Labor Law & POSH Compliance', label: 'Labor Compliance', icon: 'verified_user' },
    { id: 'HR Strategy & Policy Advisory', label: 'HR Strategy', icon: 'tune' },
    { id: 'General Corporate Consultation', label: 'Other Advisory', icon: 'forum' },
  ];

  const faqs = [
    {
      q: 'What is your typical turnaround time for executive leadership mandates?',
      a: 'For retained C-suite and VP executive searches, we present a calibrated shortlist of vetted finalists with competency dossiers within 14 to 21 business days. For technical engineering sprint teams, initial candidates are delivered within 7 business days.'
    },
    {
      q: 'How does Abishree HR ensure confidentiality for sensitive transitions?',
      a: 'We operate under strict Non-Disclosure Agreements (NDAs). Confidential stealth searches are managed exclusively by senior partners, using discreet off-market candidate outreach without disclosing client brand identity until the final interview stage.'
    },
    {
      q: 'What is your placement retention guarantee?',
      a: 'We provide a 90-day placement replacement guarantee on all executive search mandates. If an executive departs or fails to integrate within the initial 90 days, we conduct a prioritized replacement search at zero additional professional fee.'
    },
    {
      q: 'How does your statutory labor audit safeguard against legal penalties?',
      a: 'Our statutory compliance team audits all records against Indian Central and State Labor Codes, PF/ESI contributions, POSH committee setups, and contractor compliance. We provide an actionable risk matrix and resolve discrepancies before regulatory inspections.'
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setErrorMsg('');

    try {
      const payload = {
        name,
        email,
        phone,
        serviceInterest: `${serviceInterest} [Scope: ${headcountScope} | Timeline: ${targetTimeline} | Org: ${organization}]`,
        message,
      };

      const res = await fetch(`${API_BASE}/api/inquiries`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error('Failed to send consultation request. Please ensure the server is active.');

      setSubmitted(true);
    } catch (err: any) {
      setErrorMsg(err.message || 'Error submitting message. Please check your network connection.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="w-full flex flex-col min-h-screen">
      
      {/* ---------------- 1. HERO SHOWCASE ---------------- */}
      <section 
        className="relative py-20 sm:py-24 border-b border-glass-border overflow-hidden transition-colors duration-500 text-center"
        style={{ background: 'var(--section-gradient-1)' }}
      >
        {/* Background Image Layer */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10 dark:opacity-15 pointer-events-none"
          style={{ backgroundImage: `url('https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1600')` }}
        />

        {/* Ambient Typographic Watermark */}
        <div className="absolute inset-0 pointer-events-none select-none overflow-hidden flex items-center justify-center z-0 opacity-[0.03] dark:opacity-[0.06] text-[8.5vw] font-black uppercase tracking-[0.25em] whitespace-nowrap text-on-surface">
          CONSULTATION DESK • 4-HOUR SLA • DIRECT PARTNER ASSIGNMENT
        </div>

        <div className="relative z-10 max-w-container-max mx-auto px-4 sm:px-6 flex flex-col items-center">
          
          <div className="inline-flex items-center gap-2 bg-surface/90 backdrop-blur-md border border-glass-border px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full shadow-sm mb-4 sm:mb-6">
            <span className="material-symbols-outlined text-primary text-[18px] sm:text-[20px]">support_agent</span>
            <span className="text-[10px] sm:text-xs font-extrabold text-primary uppercase tracking-widest">
              Executive Consultation Desk
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl md:text-6xl font-extrabold text-on-surface tracking-tight max-w-4xl leading-[1.18] sm:leading-[1.15] mb-4 sm:mb-6">
            Connect with Our <span className="text-primary">Practice Partners</span>
          </h1>

          <p className="text-xs sm:text-base md:text-lg text-on-surface-variant max-w-2xl leading-relaxed mb-6">
            Discuss executive talent requirements, book a statutory labor audit, or architect an enterprise talent pipeline. Our senior partners respond within 4 business hours.
          </p>

          <div className="inline-flex items-center gap-2.5 sm:gap-3 glass-card px-4 py-2 sm:px-5 sm:py-2.5 rounded-2xl shadow-sm">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
            <span className="text-[11px] sm:text-xs font-extrabold text-on-surface">Consultation SLA: Priority Response in &lt;4 Hours</span>
          </div>

        </div>
      </section>

      {/* ---------------- 2. PRACTICE DESKS OVERVIEW (3-UP) ---------------- */}
      <section className="relative py-10 sm:py-16 bg-surface border-b border-glass-border transition-colors duration-300 overflow-hidden">
        {/* Ambient Typographic Watermark */}
        <div className="absolute inset-0 pointer-events-none select-none overflow-hidden flex items-center justify-center z-0 opacity-[0.02] dark:opacity-[0.04] text-[8vw] font-black uppercase tracking-[0.2em] whitespace-nowrap text-on-surface">
          EXECUTIVE SEARCH • TECH SOURCING • STATUTORY AUDIT
        </div>

        <div className="relative z-10 max-w-container-max mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          
          <div className="glass-card rounded-3xl p-5 sm:p-6 flex flex-col justify-between group shadow-md border border-glass-border hover:-translate-y-1 transition-all">
            <div className="flex flex-col gap-2.5 sm:gap-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-[20px] sm:text-[24px]">psychology</span>
              </div>
              <h3 className="text-base sm:text-lg font-extrabold text-on-surface group-hover:text-primary transition-colors leading-snug">
                Executive Search Desk
              </h3>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                Direct engagement for confidential C-suite, VP, and Board Advisory appointments.
              </p>
            </div>
            <a 
              href="mailto:executivesearch@abishreehr.com"
              className="cursor-pointer pt-3.5 sm:pt-4 mt-3 sm:mt-4 border-t border-glass-border text-xs font-bold text-primary hover:underline flex items-center gap-1 py-1"
            >
              <span className="truncate">executivesearch@abishreehr.com</span>
              <span className="material-symbols-outlined text-[14px]">mail</span>
            </a>
          </div>

          <div className="glass-card rounded-3xl p-5 sm:p-6 flex flex-col justify-between group shadow-md border border-glass-border hover:-translate-y-1 transition-all">
            <div className="flex flex-col gap-2.5 sm:gap-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined text-[20px] sm:text-[24px]">developer_mode</span>
              </div>
              <h3 className="text-base sm:text-lg font-extrabold text-on-surface group-hover:text-primary transition-colors leading-snug">
                Tech Staffing Desk
              </h3>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                Rapid sprint delivery for Fullstack, Cloud Infrastructure, and AI engineering teams.
              </p>
            </div>
            <a 
              href="mailto:techrecruiting@abishreehr.com"
              className="cursor-pointer pt-3.5 sm:pt-4 mt-3 sm:mt-4 border-t border-glass-border text-xs font-bold text-secondary hover:underline flex items-center gap-1 py-1"
            >
              <span className="truncate">techrecruiting@abishreehr.com</span>
              <span className="material-symbols-outlined text-[14px]">mail</span>
            </a>
          </div>

          <div className="glass-card rounded-3xl p-5 sm:p-6 flex flex-col justify-between group shadow-md border border-glass-border hover:-translate-y-1 transition-all">
            <div className="flex flex-col gap-2.5 sm:gap-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-tertiary/10 flex items-center justify-center text-tertiary">
                <span className="material-symbols-outlined text-[20px] sm:text-[24px]">verified_user</span>
              </div>
              <h3 className="text-base sm:text-lg font-extrabold text-on-surface group-hover:text-primary transition-colors leading-snug">
                Labor & Compliance Desk
              </h3>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                Statutory risk assessments, POSH compliance, and corporate labor law advisory.
              </p>
            </div>
            <a 
              href="mailto:compliance@abishreehr.com"
              className="cursor-pointer pt-3.5 sm:pt-4 mt-3 sm:mt-4 border-t border-glass-border text-xs font-bold text-tertiary hover:underline flex items-center gap-1 py-1"
            >
              <span className="truncate">compliance@abishreehr.com</span>
              <span className="material-symbols-outlined text-[14px]">mail</span>
            </a>
          </div>

        </div>
      </section>

      {/* ---------------- 3. CONSULTATION REQUEST FORM & OFFICES ---------------- */}
      <section className="relative py-12 sm:py-24 bg-surface transition-colors duration-300 overflow-hidden">
        {/* Ambient Typographic Watermark */}
        <div className="absolute inset-0 pointer-events-none select-none overflow-hidden flex items-center justify-center z-0 opacity-[0.02] dark:opacity-[0.04] text-[8vw] font-black uppercase tracking-[0.2em] whitespace-nowrap text-on-surface">
          CORPORATE MANDATES • BENGALURU • MUMBAI • HYDERABAD
        </div>

        <div className="relative z-10 max-w-container-max mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12">
          
          {/* Left Column: Form */}
          <div className="lg:col-span-7 flex flex-col gap-6 sm:gap-8">
            <div>
              <span className="text-[10px] sm:text-xs font-extrabold text-tertiary uppercase tracking-widest block mb-1.5 sm:mb-2">Direct Inquiry</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-on-surface">
                Request a <span className="text-primary">Consultation Mandate</span>
              </h2>
              <p className="text-xs sm:text-sm text-on-surface-variant mt-1">
                Fill out your organizational requirements below for immediate partner assignment.
              </p>
            </div>

            {submitted ? (
              <div className="glass-card rounded-3xl p-6 sm:p-10 text-center flex flex-col items-center gap-4 shadow-xl border border-primary">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                  <span className="material-symbols-outlined text-[30px] sm:text-[36px]">check_circle</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-on-surface">Consultation Request Received!</h3>
                <p className="text-xs sm:text-sm text-on-surface-variant max-w-md leading-relaxed">
                  Thank you, <strong>{name}</strong>. A Senior Practice Partner has been assigned to your inquiry and will reach out to <strong>{email}</strong> within 4 business hours.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setName('');
                    setEmail('');
                    setPhone('');
                    setOrganization('');
                    setMessage('');
                  }}
                  className="cursor-pointer bg-primary text-on-primary text-xs font-bold px-6 py-3 rounded-xl mt-3 shadow hover:bg-primary-fixed-dim transition-all active:scale-98"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="glass-card rounded-3xl p-5 sm:p-10 flex flex-col gap-4 sm:gap-6 shadow-xl border border-glass-border">
                
                {/* Practice Area Selector Pills */}
                <div className="flex flex-col gap-2">
                  <label className="text-[11px] sm:text-xs font-extrabold text-on-surface uppercase tracking-wider">
                    Select Practice Area of Interest:
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {practiceOptions.map((opt) => {
                      const isSelected = serviceInterest === opt.id;
                      return (
                        <button
                          key={opt.id}
                          type="button"
                          onClick={() => setServiceInterest(opt.id)}
                          className={`cursor-pointer p-2 sm:p-2.5 rounded-xl text-[11px] sm:text-xs font-bold flex items-center gap-1.5 sm:gap-2 transition-all text-left border ${
                            isSelected
                              ? 'bg-primary text-on-primary border-primary shadow-sm'
                              : 'glass-card text-on-surface-variant hover:text-primary hover:border-primary'
                          }`}
                        >
                          <span className="material-symbols-outlined text-[15px] sm:text-[16px] shrink-0">{opt.icon}</span>
                          <span className="truncate">{opt.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Scope and Timeline Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[11px] sm:text-xs font-bold text-on-surface">Headcount / Scope Size</label>
                    <select
                      value={headcountScope}
                      onChange={(e) => setHeadcountScope(e.target.value)}
                      className="cursor-pointer w-full bg-surface-container/60 border border-glass-border text-on-surface rounded-xl px-3.5 py-2.5 sm:px-4 sm:py-3 text-xs outline-none focus:border-primary font-medium"
                    >
                      <option value="1-5 Key Roles">1 - 5 Key Roles (Leadership / Niche)</option>
                      <option value="6-20 Squad / Scale">6 - 20 Roles (Tech Squad / Sprint)</option>
                      <option value="20+ Enterprise Mandate">20+ Roles (Enterprise Scale)</option>
                      <option value="Statutory Audit / POSH Advisory">Statutory Labor Law & POSH Audit</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-[11px] sm:text-xs font-bold text-on-surface">Target Hiring Timeline</label>
                    <select
                      value={targetTimeline}
                      onChange={(e) => setTargetTimeline(e.target.value)}
                      className="cursor-pointer w-full bg-surface-container/60 border border-glass-border text-on-surface rounded-xl px-3.5 py-2.5 sm:px-4 sm:py-3 text-xs outline-none focus:border-primary font-medium"
                    >
                      <option value="Immediate / Urgent (within 14 days)">Immediate / Urgent (&lt;14 Days)</option>
                      <option value="Within 30 Days">Within 30 Days</option>
                      <option value="Quarterly Planning">Quarterly Planning (Q3/Q4)</option>
                    </select>
                  </div>
                </div>

                {/* Contact Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[11px] sm:text-xs font-bold text-on-surface">Your Full Name *</label>
                    <input 
                      type="text"
                      required
                      placeholder="e.g. Vikram Mehta"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-surface-container/60 border border-glass-border text-on-surface rounded-xl px-3.5 py-2.5 sm:px-4 sm:py-3 text-xs outline-none focus:border-primary font-medium placeholder:text-on-surface-variant"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-[11px] sm:text-xs font-bold text-on-surface">Corporate / Work Email *</label>
                    <input 
                      type="email"
                      required
                      placeholder="e.g. vikram@company.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-surface-container/60 border border-glass-border text-on-surface rounded-xl px-3.5 py-2.5 sm:px-4 sm:py-3 text-xs outline-none focus:border-primary font-medium placeholder:text-on-surface-variant"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[11px] sm:text-xs font-bold text-on-surface">Phone Number *</label>
                    <input 
                      type="tel"
                      required
                      placeholder="e.g. +91 98765 43210"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-surface-container/60 border border-glass-border text-on-surface rounded-xl px-3.5 py-2.5 sm:px-4 sm:py-3 text-xs outline-none focus:border-primary font-medium placeholder:text-on-surface-variant"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-[11px] sm:text-xs font-bold text-on-surface">Organization / Company Name *</label>
                    <input 
                      type="text"
                      required
                      placeholder="e.g. Acme Innovations Pvt Ltd"
                      value={organization}
                      onChange={(e) => setOrganization(e.target.value)}
                      className="w-full bg-surface-container/60 border border-glass-border text-on-surface rounded-xl px-3.5 py-2.5 sm:px-4 sm:py-3 text-xs outline-none focus:border-primary font-medium placeholder:text-on-surface-variant"
                    />
                  </div>
                </div>

                {/* Message Field */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] sm:text-xs font-bold text-on-surface">Mandate Details / Specific Roles Required *</label>
                  <textarea 
                    rows={4}
                    required
                    placeholder="Provide a summary of the roles to be filled, key technical or leadership requirements, and compensation bandwidth..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-surface-container/60 border border-glass-border text-on-surface rounded-xl px-3.5 py-2.5 sm:px-4 sm:py-3 text-xs outline-none focus:border-primary font-medium placeholder:text-on-surface-variant resize-none"
                  />
                </div>

                {errorMsg && (
                  <div className="p-3 rounded-xl bg-tertiary/10 border border-tertiary text-tertiary text-xs font-bold">
                    {errorMsg}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={submitting}
                  className="cursor-pointer w-full bg-primary hover:bg-primary-fixed-dim text-on-primary font-bold text-xs sm:text-sm py-3.5 sm:py-4 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 active:scale-98 disabled:opacity-50"
                >
                  {submitting ? (
                    <span>Submitting Consultation Mandate...</span>
                  ) : (
                    <>
                      <span>Submit Mandate to Practice Partner</span>
                      <span className="material-symbols-outlined text-[18px]">send</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Regional Hubs & Operating Hours */}
          <div className="lg:col-span-5 flex flex-col gap-4 sm:gap-6">
            
            <div>
              <span className="text-[10px] sm:text-xs font-extrabold text-tertiary uppercase tracking-widest block mb-1.5 sm:mb-2">Offices & Presence</span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-on-surface">
                Regional Consulting Hubs
              </h3>
            </div>

            {/* Office 1 */}
            <div className="glass-card rounded-3xl p-5 sm:p-6 flex flex-col gap-2.5 sm:gap-3 shadow-md border border-glass-border hover:-translate-y-1 transition-all">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs sm:text-sm font-extrabold text-primary">
                  <span className="material-symbols-outlined text-[18px] sm:text-[20px]">location_city</span>
                  <span>Bengaluru Headquarters</span>
                </div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-primary/10 text-primary">HQ</span>
              </div>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                Prestige Tech Park, Outer Ring Road, Marathahalli, Bengaluru, Karnataka 560103
              </p>
              <a href="tel:+918049201100" className="cursor-pointer text-xs font-semibold text-on-surface hover:text-primary transition-colors flex items-center gap-2 pt-2 border-t border-glass-border py-1">
                <span className="material-symbols-outlined text-secondary text-[16px]">call</span>
                <span>+91 80 4920 1100</span>
              </a>
            </div>

            {/* Office 2 */}
            <div className="glass-card rounded-3xl p-5 sm:p-6 flex flex-col gap-2.5 sm:gap-3 shadow-md border border-glass-border hover:-translate-y-1 transition-all">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs sm:text-sm font-extrabold text-secondary">
                  <span className="material-symbols-outlined text-[18px] sm:text-[20px]">business</span>
                  <span>Mumbai Corporate Advisory Desk</span>
                </div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-secondary/10 text-secondary">Corporate</span>
              </div>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                Bandra Kurla Complex (BKC), G-Block, Bandra East, Mumbai, Maharashtra 400051
              </p>
              <a href="tel:+912261204400" className="cursor-pointer text-xs font-semibold text-on-surface hover:text-primary transition-colors flex items-center gap-2 pt-2 border-t border-glass-border py-1">
                <span className="material-symbols-outlined text-secondary text-[16px]">call</span>
                <span>+91 22 6120 4400</span>
              </a>
            </div>

            {/* Office 3 */}
            <div className="glass-card rounded-3xl p-5 sm:p-6 flex flex-col gap-2.5 sm:gap-3 shadow-md border border-glass-border hover:-translate-y-1 transition-all">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs sm:text-sm font-extrabold text-tertiary">
                  <span className="material-symbols-outlined text-[18px] sm:text-[20px]">domain</span>
                  <span>Hyderabad Engineering & Compliance Center</span>
                </div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-tertiary/10 text-tertiary">Tech & POSH</span>
              </div>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                HITEC City, Madhapur, Hyderabad, Telangana 500081
              </p>
              <a href="tel:+914048807700" className="cursor-pointer text-xs font-semibold text-on-surface hover:text-primary transition-colors flex items-center gap-2 pt-2 border-t border-glass-border py-1">
                <span className="material-symbols-outlined text-secondary text-[16px]">call</span>
                <span>+91 40 4880 7700</span>
              </a>
            </div>

            {/* Operating Hours Box */}
            <div className="glass-card rounded-3xl p-5 sm:p-6 flex flex-col gap-2 shadow-sm bg-surface-container/50">
              <div className="flex items-center gap-2 text-xs font-extrabold text-on-surface uppercase tracking-wider">
                <span className="material-symbols-outlined text-primary text-[18px]">schedule</span>
                <span>Advisory Desk Operating Hours</span>
              </div>
              <p className="text-xs text-on-surface-variant">
                Monday to Friday: <strong>9:00 AM – 7:00 PM IST</strong><br />
                Saturday: <strong>10:00 AM – 3:00 PM IST</strong> (Executive On-Call)
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ---------------- 4. INTERACTIVE FAQ ACCORDION ---------------- */}
      <section 
        className="relative py-14 sm:py-24 border-t border-glass-border transition-colors duration-500 overflow-hidden"
        style={{ background: 'var(--section-gradient-2)' }}
      >
        {/* Ambient Typographic Watermark */}
        <div className="absolute inset-0 pointer-events-none select-none overflow-hidden flex items-center justify-center z-0 opacity-[0.02] dark:opacity-[0.04] text-[8vw] font-black uppercase tracking-[0.2em] whitespace-nowrap text-on-surface">
          TRANSPARENCY • 90-DAY GUARANTEE • STATUTORY SAFETY
        </div>

        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 flex flex-col gap-6 sm:gap-10">
          
          <div className="text-center">
            <span className="text-[10px] sm:text-xs font-extrabold text-tertiary uppercase tracking-widest block mb-1.5 sm:mb-2">Clear Answers</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-on-surface">
              Frequently Asked <span className="text-primary">Questions</span>
            </h2>
          </div>

          <div className="flex flex-col gap-3 sm:gap-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div 
                  key={idx}
                  className="glass-card rounded-2xl overflow-hidden border border-glass-border transition-all"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="cursor-pointer w-full p-4 sm:p-5 text-left flex items-center justify-between gap-3 sm:gap-4 font-bold text-xs sm:text-sm text-on-surface hover:text-primary transition-colors"
                  >
                    <span>{faq.q}</span>
                    <span className={`material-symbols-outlined text-[18px] sm:text-[20px] shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-primary' : 'text-on-surface-variant'}`}>
                      expand_more
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-4 pb-4 sm:px-5 sm:pb-5 text-xs sm:text-sm text-on-surface-variant leading-relaxed border-t border-glass-border/40 pt-2.5 sm:pt-3 animate-in fade-in">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

    </div>
  );
}
