'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { useSiteData } from '@/context/SiteDataContext';

export default function ServicesPage() {
  const { services: cachedServices } = useSiteData();
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = [
    { id: 'All', label: 'All Practices', icon: 'apps' },
    { id: 'Executive Search', label: 'Executive Search', icon: 'psychology' },
    { id: 'Tech Staffing', label: 'Tech Staffing', icon: 'developer_mode' },
    { id: 'Compliance', label: 'Labor Compliance', icon: 'verified_user' },
    { id: 'Infrastructure', label: 'HR Advisory', icon: 'tune' },
  ];

  const staticServices = [
    {
      id: 'srv-1',
      category: 'Executive Search',
      title: 'C-Suite & Board Appointments',
      icon: 'psychology',
      tagline: 'Securing Transformative Leadership for High-Growth Enterprises',
      description: 'Discreet, retained executive search combining global market intelligence, competitor talent mapping, and rigorous leadership psychometric assessments to place CXOs, VPs, and Board Members.',
      timeline: '21-35 Business Days',
      retentionRate: '98.4%',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1200',
      deliverables: [
        'Confidential C-Suite Mandates & Board Succession',
        'Competitor Compensation & Talent Mapping',
        'Multi-Tier Leadership Competency Vetting',
        '90-Day Placement Replacement Guarantee'
      ]
    },
    {
      id: 'srv-2',
      category: 'Tech Staffing',
      title: 'Fullstack, AI & Cloud Engineering Squads',
      icon: 'developer_mode',
      tagline: 'High-Velocity Technical Recruitment for Digital Transformations',
      description: 'Rapid deployment of pre-screened software architects, backend engineers, ML/AI practitioners, and DevOps leads vetted for technical depth and cultural synergy.',
      timeline: '7-14 Business Days',
      retentionRate: '94.2%',
      image: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1200',
      deliverables: [
        'Hands-on Code Assessment & Tech Screening',
        'Sprint-Based Scale-Up for Product Launches',
        'Distributed & Remote Engineering Sourcing',
        'Niche Stack Headhunting (Rust, Go, Kubernetes, PyTorch)'
      ]
    },
    {
      id: 'srv-3',
      category: 'Compliance',
      title: 'Statutory Labor Law & POSH Advisory',
      icon: 'verified_user',
      tagline: '100% Risk Mitigation & Regulatory Alignment across Indian States',
      description: 'End-to-end statutory audits ensuring full compliance with the New Indian Labor Codes, PF/ESI regulations, Factories Act, POSH mandates, and state-specific Shops & Establishment laws.',
      timeline: 'Ongoing or 10-Day Audit',
      retentionRate: '100% Risk-Free',
      image: 'https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=1200',
      deliverables: [
        'Comprehensive Statutory HR Health Audits',
        'POSH Internal Committee (IC) Setup & Annual Filing',
        'Custom Corporate Policies & Employee Handbooks',
        'Government Representation & Notice Handling'
      ]
    },
    {
      id: 'srv-4',
      category: 'Infrastructure',
      title: 'Leadership Succession & Talent Mapping',
      icon: 'insights',
      tagline: 'Strategic Workforce Architecture for High-Growth Ventures',
      description: 'Comprehensive market intelligence, competency matrix design, executive talent pipelining, and structured organizational succession roadmaps for scalable corporate growth.',
      timeline: '14-21 Business Days',
      retentionRate: '99.2% Accuracy',
      image: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=1200',
      deliverables: [
        'Executive Competency & Benchmark Mapping',
        'Succession Planning & Talent Risk Audits',
        'Competitor Compensation Intelligence',
        'CXO Readiness Scorecards'
      ]
    },
    {
      id: 'srv-5',
      category: 'Executive Search',
      title: 'Confidential Stealth Replacements',
      icon: 'lock',
      tagline: 'Protected Headhunting for Sensitive Operational Transitions',
      description: 'Ultra-confidential talent sourcing for roles where public market signaling would create operational vulnerability or market speculation.',
      timeline: 'Custom Confidential SLA',
      retentionRate: '100% Discretion',
      image: 'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=1200',
      deliverables: [
        'Strict NDA-Enforced Candidate Approach',
        'Off-Market Strategic Candidate Pipelining',
        'Zero-Leak Succession Strategy',
        'Leadership Advisory on Transition Timing'
      ]
    },
    {
      id: 'srv-6',
      category: 'Infrastructure',
      title: 'HR Infrastructure & Policy Design',
      icon: 'tune',
      tagline: 'Building Scalable People Operations for Growing Ventures',
      description: 'From compensation banding and performance appraisal frameworks to leave policies and standard operating procedures (SOPs), we architect modern HR ecosystems.',
      timeline: '14-28 Business Days',
      retentionRate: 'Scalable to 5000+',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200',
      deliverables: [
        'Job Leveling & Compensation Benchmarking',
        'OKRs & Performance Management Frameworks',
        'Standardized Onboarding & Exit Protocols',
        'HRMS Software Selection & Implementation'
      ]
    }
  ];

  const engagementSteps = [
    {
      step: '01',
      title: 'Discovery & Market Mapping',
      icon: 'travel_explore',
      description: 'We align on business goals, organizational culture, mandatory technical competency, and map the competitive candidate landscape.'
    },
    {
      step: '02',
      title: 'Rigorous Vetting & Behavioral Screen',
      icon: 'fact_check',
      description: 'Our senior consultants evaluate leadership track records, problem-solving depth, and conduct confidential reference checks.'
    },
    {
      step: '03',
      title: 'Curated Executive Presentation',
      icon: 'co_present',
      description: 'You receive a detailed dossier of top candidates with compensation benchmarks, competency scorecards, and availability.'
    },
    {
      step: '04',
      title: 'Offer Advisory & 90-Day Guarantee',
      icon: 'verified',
      description: 'We facilitate offer negotiations, smooth resignation transitions, and back every placement with our executive replacement guarantee.'
    }
  ];

  // Use cached services from D1 if available, otherwise use static data
  const services = useMemo(() => {
    if (cachedServices.length > 0) {
      return cachedServices.map((s: any) => ({
        id: s.id,
        category: s.category || 'Executive Search',
        title: s.title || '',
        icon: s.icon || 'star',
        tagline: s.tagline || '',
        description: s.description || '',
        timeline: s.timeline || '',
        retentionRate: s.retentionRate || '',
        image: s.image || 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1200',
        deliverables: Array.isArray(s.deliverables) ? s.deliverables : []
      }));
    }
    return staticServices;
  }, [cachedServices]);

  const filteredServices = activeCategory === 'All'
    ? services
    : services.filter(s => s.category === activeCategory);

  return (
    <div className="w-full flex flex-col min-h-screen">
      
      {/* ---------------- 1. HERO SHOWCASE WITH METRICS ---------------- */}
      <section 
        className="relative py-20 sm:py-24 border-b border-glass-border overflow-hidden transition-colors duration-500"
        style={{ background: 'var(--section-gradient-1)' }}
      >
        {/* Background Image Layer */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10 dark:opacity-15 pointer-events-none"
          style={{ backgroundImage: `url('https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1600')` }}
        />

        {/* Ambient Typographic Watermark */}
        <div className="absolute inset-0 pointer-events-none select-none overflow-hidden flex items-center justify-center z-0 opacity-[0.03] dark:opacity-[0.06] text-[10vw] font-black uppercase tracking-[0.25em] whitespace-nowrap text-on-surface">
          STRATEGY • COMPLIANCE • TALENT • LEADERSHIP
        </div>

        <div className="relative z-10 max-w-container-max mx-auto px-4 sm:px-6 flex flex-col items-center text-center">
          
          <div className="inline-flex items-center gap-2 bg-surface/90 backdrop-blur-md border border-glass-border px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full shadow-sm mb-4 sm:mb-6">
            <span className="material-symbols-outlined text-primary text-[18px] sm:text-[20px]">corporate_fare</span>
            <span className="text-[10px] sm:text-xs font-extrabold text-primary uppercase tracking-widest">Enterprise HR Solutions</span>
          </div>

          <h1 className="text-2xl sm:text-4xl md:text-6xl font-extrabold text-on-surface tracking-tight max-w-4xl leading-[1.18] sm:leading-[1.15] mb-4 sm:mb-6">
            Strategic Practice Areas Engineered for <span className="text-primary">Corporate Growth</span>
          </h1>

          <p className="text-xs sm:text-base md:text-lg text-on-surface-variant max-w-2xl leading-relaxed mb-8 sm:mb-10">
            From confidential C-suite executive headhunting and rapid technical team build-outs to statutory labor audits and strategic HR advisory frameworks.
          </p>

          {/* Key Metrics Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 w-full max-w-4xl">
            <div className="glass-card rounded-2xl p-3.5 sm:p-5 text-center shadow-md">
              <div className="text-xl sm:text-3xl font-black text-primary mb-0.5 sm:mb-1">98.4%</div>
              <div className="text-[10px] sm:text-xs text-on-surface-variant font-bold uppercase tracking-wider">Placement Retention</div>
            </div>
            <div className="glass-card rounded-2xl p-3.5 sm:p-5 text-center shadow-md">
              <div className="text-xl sm:text-3xl font-black text-secondary mb-0.5 sm:mb-1">14 Days</div>
              <div className="text-[10px] sm:text-xs text-on-surface-variant font-bold uppercase tracking-wider">Avg Sourcing Speed</div>
            </div>
            <div className="glass-card rounded-2xl p-3.5 sm:p-5 text-center shadow-md">
              <div className="text-xl sm:text-3xl font-black text-tertiary mb-0.5 sm:mb-1">100%</div>
              <div className="text-[10px] sm:text-xs text-on-surface-variant font-bold uppercase tracking-wider">Statutory Safety</div>
            </div>
            <div className="glass-card rounded-2xl p-3.5 sm:p-5 text-center shadow-md">
              <div className="text-xl sm:text-3xl font-black text-quaternary mb-0.5 sm:mb-1">500+</div>
              <div className="text-[10px] sm:text-xs text-on-surface-variant font-bold uppercase tracking-wider">Retained Mandates</div>
            </div>
          </div>

        </div>
      </section>

      {/* ---------------- 2. INTERACTIVE PRACTICE CATEGORY FILTER & SOLUTIONS ---------------- */}
      <section className="relative py-14 sm:py-20 bg-surface transition-colors duration-300 overflow-hidden">
        {/* Ambient Typographic Watermark */}
        <div className="absolute inset-0 pointer-events-none select-none overflow-hidden flex items-center justify-center z-0 opacity-[0.02] dark:opacity-[0.04] text-[9vw] font-black uppercase tracking-[0.2em] whitespace-nowrap text-on-surface">
          EXCELLENCE • TALENT ECOSYSTEM • RETENTION
        </div>

        <div className="relative z-10 max-w-container-max mx-auto px-4 sm:px-6 flex flex-col gap-8 sm:gap-12">
          
          {/* Category Pills Bar (Scrollable on mobile) */}
          <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto touch-scroll no-scrollbar py-1 w-full justify-start sm:justify-center">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`cursor-pointer inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs font-extrabold transition-all border shrink-0 ${
                    isActive
                      ? 'bg-primary text-on-primary border-primary shadow-md scale-102'
                      : 'glass-card text-on-surface-variant hover:text-primary hover:border-primary'
                  }`}
                >
                  <span className="material-symbols-outlined text-[16px] sm:text-[18px]">{cat.icon}</span>
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>

          {/* Practice Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {filteredServices.map((srv) => (
              <div 
                key={srv.id} 
                className="glass-card rounded-3xl overflow-hidden shadow-lg flex flex-col justify-between group border border-glass-border"
              >
                {/* Visual Header with Real Pexels Photo */}
                <div className="relative h-48 sm:h-64 overflow-hidden">
                  <img 
                    src={srv.image} 
                    alt={srv.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent" />
                  
                  {/* Category Pill on top */}
                  <div className="absolute top-3.5 left-3.5 sm:top-5 sm:left-5 inline-flex items-center gap-1.5 sm:gap-2 bg-surface/90 backdrop-blur-md px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full border border-glass-border shadow-sm">
                    <span className="material-symbols-outlined text-primary text-[15px] sm:text-[18px]">{srv.icon}</span>
                    <span className="text-[10px] sm:text-xs font-extrabold text-primary uppercase tracking-wider">{srv.category}</span>
                  </div>

                  {/* Stat Badge on top right */}
                  <div className="absolute top-3.5 right-3.5 sm:top-5 sm:right-5 inline-flex items-center gap-1 bg-surface/90 backdrop-blur-md px-3 py-1 sm:px-3 sm:py-1.5 rounded-full border border-glass-border shadow-sm text-[10px] sm:text-xs font-black text-secondary">
                    <span className="material-symbols-outlined text-[14px] sm:text-[16px]">verified</span>
                    <span>{srv.retentionRate}</span>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-5 sm:p-8 flex flex-col gap-4 sm:gap-6 flex-1 justify-between">
                  <div className="flex flex-col gap-2.5 sm:gap-3">
                    <h3 className="text-xl sm:text-2xl font-extrabold text-on-surface group-hover:text-primary transition-colors leading-snug">
                      {srv.title}
                    </h3>
                    <p className="text-xs font-bold text-primary italic">
                      "{srv.tagline}"
                    </p>
                    <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed font-normal">
                      {srv.description}
                    </p>

                    {/* Key Deliverables Bullet Points */}
                    {srv.deliverables && srv.deliverables.length > 0 && (
                      <div className="mt-1 pt-3 sm:pt-4 border-t border-glass-border flex flex-col gap-2">
                        <span className="text-[11px] sm:text-xs font-extrabold text-on-surface uppercase tracking-wider">Practice Deliverables:</span>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-2 text-xs text-on-surface font-semibold">
                          {srv.deliverables.map((item: string, idx: number) => (
                            <li key={idx} className="flex items-center gap-2">
                              <span className="material-symbols-outlined text-primary text-[15px] shrink-0">check_circle</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  {/* Footer Action */}
                  <div className="pt-4 sm:pt-5 border-t border-glass-border flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="text-xs text-on-surface-variant flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-tertiary text-[16px] sm:text-[18px]">timer</span>
                      <span>SLA: <strong>{srv.timeline}</strong></span>
                    </div>

                    <Link 
                      href="/contact" 
                      className="cursor-pointer bg-primary hover:bg-primary-fixed-dim text-on-primary font-bold text-xs px-5 py-3 rounded-xl shadow transition-all flex items-center justify-center gap-1.5 active:scale-98"
                    >
                      <span>Inquire Practice</span>
                      <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                    </Link>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ---------------- 3. THE 4-STEP RECRUITMENT & AUDIT METHODOLOGY ---------------- */}
      <section 
        className="relative py-14 sm:py-24 border-t border-glass-border transition-colors duration-500 overflow-hidden"
        style={{ background: 'var(--section-gradient-2)' }}
      >
        {/* Background Image Layer */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-5 dark:opacity-10 pointer-events-none"
          style={{ backgroundImage: `url('https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=1600')` }}
        />

        {/* Ambient Typographic Watermark */}
        <div className="absolute inset-0 pointer-events-none select-none overflow-hidden flex items-center justify-center z-0 opacity-[0.03] dark:opacity-[0.05] text-[8vw] font-black uppercase tracking-[0.25em] whitespace-nowrap text-on-surface">
          METHODOLOGY • VETTING • CALIBRATION • ASSURANCE
        </div>

        <div className="relative z-10 max-w-container-max mx-auto px-4 sm:px-6 flex flex-col gap-8 sm:gap-12">
          
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-[10px] sm:text-xs font-extrabold text-tertiary uppercase tracking-widest block mb-1.5 sm:mb-2">Our Execution Rigor</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-on-surface tracking-tight leading-snug">
              The 4-Step Executive <span className="text-primary">Engagement Framework</span>
            </h2>
            <p className="text-xs sm:text-base text-on-surface-variant mt-1.5 sm:mt-2">
              Every mandate follows structured protocols guaranteeing speed, cultural alignment, and zero legal exposure.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {engagementSteps.map((step) => (
              <div key={step.step} className="glass-card rounded-3xl p-5 sm:p-6 flex flex-col justify-between group shadow-md border border-glass-border">
                <div className="flex flex-col gap-3 sm:gap-4">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl sm:text-3xl font-black text-primary/30 group-hover:text-primary transition-colors">
                      {step.step}
                    </span>
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary border border-glass-border">
                      <span className="material-symbols-outlined text-[18px] sm:text-[20px]">{step.icon}</span>
                    </div>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-on-surface group-hover:text-primary transition-colors leading-snug">
                    {step.title}
                  </h3>

                  <p className="text-xs text-on-surface-variant leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="w-full h-1 bg-surface-container rounded-full overflow-hidden mt-4 sm:mt-6">
                  <div className="h-full bg-primary w-1/3 group-hover:w-full transition-all duration-500" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ---------------- 4. STATUTORY COMPLIANCE ASSURANCE BANNER ---------------- */}
      <section className="relative py-12 sm:py-20 bg-surface border-t border-glass-border overflow-hidden">
        {/* Ambient Typographic Watermark */}
        <div className="absolute inset-0 pointer-events-none select-none overflow-hidden flex items-center justify-center z-0 opacity-[0.02] dark:opacity-[0.04] text-[8vw] font-black uppercase tracking-[0.2em] whitespace-nowrap text-on-surface">
          100% STATUTORY AUDIT • RISK MITIGATION
        </div>

        <div className="relative z-10 max-w-container-max mx-auto px-4 sm:px-6">
          <div 
            className="p-6 sm:p-14 rounded-3xl border border-glass-border shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 relative overflow-hidden"
            style={{ background: 'var(--banner-gradient)' }}
          >
            <div className="flex flex-col gap-2.5 sm:gap-3 text-center md:text-left z-10">
              <span className="text-[10px] sm:text-xs font-extrabold text-tertiary uppercase tracking-widest">Confidential Practice Advisory</span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-on-surface tracking-tight leading-snug">
                Need a Custom Mandate or Labor Law Audit?
              </h2>
              <p className="text-xs sm:text-base text-on-surface-variant max-w-xl">
                Speak directly with our senior practice partners for confidential talent search or corporate statutory audits.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 z-10 w-full sm:w-auto">
              <Link 
                href="/contact" 
                className="cursor-pointer bg-primary hover:bg-primary-fixed-dim text-on-primary font-bold text-xs sm:text-sm px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl shadow-lg transition-all transform hover:-translate-y-0.5 text-center active:scale-98"
              >
                Schedule Partner Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
