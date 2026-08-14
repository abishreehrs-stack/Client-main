'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { useSiteData } from '@/context/SiteDataContext';

export default function ClientsPage() {
  const { clients: cachedClients } = useSiteData();
  const [activeSector, setActiveSector] = useState('All');

  const sectors = [
    { id: 'All', label: 'All Sectors', icon: 'apps' },
    { id: 'Technology', label: 'Technology & AI', icon: 'terminal' },
    { id: 'Fintech', label: 'Fintech & Banking', icon: 'account_balance' },
    { id: 'Healthcare', label: 'Healthcare & Pharma', icon: 'medical_services' },
    { id: 'Logistics', label: 'Supply Chain & Mfg', icon: 'local_shipping' },
  ];

  const staticPartners = [
    {
      id: 'c-1',
      name: 'Horizon AI Labs',
      sector: 'Technology',
      logoText: 'HAL',
      location: 'Bengaluru, India',
      placements: '45+ Placements',
      focus: 'AI Researchers, Cloud Architects & CPO Search',
      relationship: 'Strategic Talent Partner Since 2021'
    },
    {
      id: 'c-2',
      name: 'Apex Global Logistics',
      sector: 'Logistics',
      logoText: 'AGL',
      location: 'Mumbai, India',
      placements: '120+ Staff Placed',
      focus: 'Supply Chain Directors & Multi-State Labor Compliance',
      relationship: 'Managed Talent & Labor Compliance Partner'
    },
    {
      id: 'c-3',
      name: 'Lumina Health Networks',
      sector: 'Healthcare',
      logoText: 'LHN',
      location: 'Hyderabad, India',
      placements: '30+ Key Roles',
      focus: 'Medical Operations VPs & Clinical Tech Leads',
      relationship: 'Executive Search Retained Client'
    },
    {
      id: 'c-4',
      name: 'Equinox Financial Advisors',
      sector: 'Fintech',
      logoText: 'EFA',
      location: 'Mumbai & GIFT City',
      placements: '60+ Placements',
      focus: 'Wealth Managers, CFO Advisory & Statutory Audit',
      relationship: 'Full-Scope HR Partner'
    },
    {
      id: 'c-5',
      name: 'Novus Cloud Systems',
      sector: 'Technology',
      logoText: 'NCS',
      location: 'Pune, India',
      placements: '85+ Engineers',
      focus: 'DevOps, SRE Leads & Fullstack Engineering Squads',
      relationship: 'Sprint Staffing Partner'
    },
    {
      id: 'c-6',
      name: 'Zenith Biopharma',
      sector: 'Healthcare',
      logoText: 'ZBP',
      location: 'Ahmedabad, India',
      placements: '25+ Leadership Roles',
      focus: 'Regulatory Affairs Heads & Plant HR Directors',
      relationship: 'Statutory & Executive Mandate'
    },
    {
      id: 'c-7',
      name: 'Starlight Retail & Supply',
      sector: 'Logistics',
      logoText: 'SRS',
      location: 'Delhi NCR, India',
      placements: '150+ Roles',
      focus: 'Warehouse Operations, Regional HR Leads & POSH Audit',
      relationship: 'Compliance & Staffing Partner'
    },
    {
      id: 'c-8',
      name: 'Vanguard Capital Markets',
      sector: 'Fintech',
      logoText: 'VCM',
      location: 'Bengaluru & Singapore',
      placements: '18+ Executive Roles',
      focus: 'Chief Risk Officer (CRO) & Quantitative Strategists',
      relationship: 'Executive Search Retained'
    }
  ];

  const caseStudies = [
    {
      id: 'cs-1',
      title: 'Scaling an AI Core: 40 Engineers in 45 Days',
      client: 'Horizon AI Labs',
      sector: 'Artificial Intelligence & Cloud',
      challenge: 'Following a $30M Series B round, the client needed to build an entire distributed AI/ML engineering division in Bengaluru within strict 60-day deadlines.',
      solution: 'Abishree HR deployed a dedicated sprint pod, evaluated over 450 engineers using technical code screens, and presented 65 pre-vetted finalists.',
      result: '42 offers accepted in 45 days with a 95.2% 1-year retention rate and 22% faster time-to-productivity.'
    },
    {
      id: 'cs-2',
      title: 'Multi-State Statutory Audit & Risk Mitigation',
      client: 'Apex Global Logistics',
      sector: 'Supply Chain & Freight',
      challenge: 'Rapid pan-India expansion across 12 states left the company exposed to inconsistent state labor filings, PF/ESI reconciliation discrepancies, and POSH committee gaps.',
      solution: 'Our legal and statutory compliance desk conducted a comprehensive 360-degree labor audit, harmonized employee contracts, and implemented centralized HR policy handbooks.',
      result: '100% clean audit certification across all 12 states with zero statutory penalties incurred.'
    },
    {
      id: 'cs-3',
      title: 'Confidential C-Suite Medical Director Search',
      client: 'Lumina Health Networks',
      sector: 'Hospital & Healthcare Tech',
      challenge: 'A critical leadership transition required confidential headhunting of a nationally recognized Chief Medical Officer without public disclosure.',
      solution: 'Leveraging our confidential executive search protocols, our partners conducted discreet off-market outreach across premier healthcare institutions.',
      result: 'Candidate successfully onboarded within 35 business days with seamless board integration.'
    }
  ];

  const testimonials = [
    {
      author: 'Rajesh Sharma',
      role: 'Chief Human Resources Officer',
      company: 'Horizon AI Labs',
      quote: 'Abishree HR Consultants transformed our technical hiring trajectory. Their deep understanding of engineering requirements and prompt execution made them an invaluable partner.',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      author: 'Priya Nair',
      role: 'VP Operations & People',
      company: 'Apex Global Logistics',
      quote: 'The labor law compliance audit and statutory risk frameworks executed by Abishree HR gave our board total peace of mind during our nationwide expansion.',
      image: 'https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      author: 'Arunav Sengupta',
      role: 'Head of Engineering',
      company: 'Novus Cloud Systems',
      quote: 'Their tech recruitment team actually understands software architecture. Every single engineer presented had genuine depth and immediate cultural alignment.',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  // Use cached clients from D1 if available, otherwise use static data
  const partners = useMemo(() => {
    if (cachedClients.length > 0) {
      return cachedClients.map((c: any) => ({
        id: c.id,
        name: c.name || '',
        sector: c.sector || 'Technology',
        logoText: c.logoText || c.name?.substring(0, 3)?.toUpperCase() || '',
        location: c.location || 'India',
        placements: c.placements || '',
        focus: c.focus || '',
        relationship: c.relationship || ''
      }));
    }
    return staticPartners;
  }, [cachedClients]);

  const filteredPartners = activeSector === 'All'
    ? partners
    : partners.filter(p => p.sector === activeSector);

  return (
    <div className="w-full flex flex-col min-h-screen">
      
      {/* ---------------- 1. HERO SHOWCASE ---------------- */}
      <section 
        className="relative py-20 sm:py-24 border-b border-glass-border overflow-hidden transition-colors duration-500"
        style={{ background: 'var(--section-gradient-1)' }}
      >
        {/* Background Image Layer */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10 dark:opacity-15 pointer-events-none"
          style={{ backgroundImage: `url('https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1600')` }}
        />

        {/* Ambient Typographic Watermark */}
        <div className="absolute inset-0 pointer-events-none select-none overflow-hidden flex items-center justify-center z-0 opacity-[0.03] dark:opacity-[0.06] text-[9vw] font-black uppercase tracking-[0.25em] whitespace-nowrap text-on-surface">
          GLOBAL PARTNERSHIPS • 250+ ENTERPRISES • PAN-INDIA ECOSYSTEM
        </div>

        <div className="relative z-10 max-w-container-max mx-auto px-4 sm:px-6 flex flex-col items-center text-center">
          
          <div className="inline-flex items-center gap-2 bg-surface/90 backdrop-blur-md border border-glass-border px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full shadow-sm mb-4 sm:mb-6">
            <span className="material-symbols-outlined text-primary text-[18px] sm:text-[20px]">verified</span>
            <span className="text-[10px] sm:text-xs font-extrabold text-primary uppercase tracking-widest">Enterprise Client Ecosystem</span>
          </div>

          <h1 className="text-2xl sm:text-4xl md:text-6xl font-extrabold text-on-surface tracking-tight max-w-4xl leading-[1.18] sm:leading-[1.15] mb-4 sm:mb-6">
            Trusted by Industry Leaders Across <span className="text-primary">18+ Sectors</span>
          </h1>

          <p className="text-xs sm:text-base md:text-lg text-on-surface-variant max-w-2xl leading-relaxed mb-8 sm:mb-10">
            From high-growth tech unicorns and fintech pioneers to healthcare conglomerates and logistics giants, discover how we fuel sustainable enterprise growth.
          </p>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 w-full max-w-4xl">
            <div className="glass-card rounded-2xl p-3.5 sm:p-5 text-center shadow-md">
              <div className="text-xl sm:text-3xl font-black text-primary mb-0.5 sm:mb-1">250+</div>
              <div className="text-[10px] sm:text-xs text-on-surface-variant font-bold uppercase tracking-wider">Corporate Clients</div>
            </div>
            <div className="glass-card rounded-2xl p-3.5 sm:p-5 text-center shadow-md">
              <div className="text-xl sm:text-3xl font-black text-secondary mb-0.5 sm:mb-1">10,000+</div>
              <div className="text-[10px] sm:text-xs text-on-surface-variant font-bold uppercase tracking-wider">Talent Placed</div>
            </div>
            <div className="glass-card rounded-2xl p-3.5 sm:p-5 text-center shadow-md">
              <div className="text-xl sm:text-3xl font-black text-tertiary mb-0.5 sm:mb-1">98.4%</div>
              <div className="text-[10px] sm:text-xs text-on-surface-variant font-bold uppercase tracking-wider">Client Retention</div>
            </div>
            <div className="glass-card rounded-2xl p-3.5 sm:p-5 text-center shadow-md">
              <div className="text-xl sm:text-3xl font-black text-quaternary mb-0.5 sm:mb-1">18+</div>
              <div className="text-[10px] sm:text-xs text-on-surface-variant font-bold uppercase tracking-wider">Industry Verticals</div>
            </div>
          </div>

        </div>
      </section>

      {/* ---------------- 2. PARTNER ECOSYSTEM & SECTOR TABS ---------------- */}
      <section className="relative py-14 sm:py-20 bg-surface transition-colors duration-300 overflow-hidden">
        {/* Ambient Typographic Watermark */}
        <div className="absolute inset-0 pointer-events-none select-none overflow-hidden flex items-center justify-center z-0 opacity-[0.02] dark:opacity-[0.04] text-[8vw] font-black uppercase tracking-[0.2em] whitespace-nowrap text-on-surface">
          INDUSTRY LEADERSHIP • RETENTION • GOVERNANCE
        </div>

        <div className="relative z-10 max-w-container-max mx-auto px-4 sm:px-6 flex flex-col gap-8 sm:gap-12">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 sm:gap-6">
            <div>
              <span className="text-[10px] sm:text-xs font-extrabold text-tertiary uppercase tracking-widest block mb-1.5 sm:mb-2">Our Network</span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-on-surface tracking-tight leading-snug">
                Featured Client <span className="text-primary">Partnerships</span>
              </h2>
            </div>

            {/* Sector Tabs (Scrollable on mobile) */}
            <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto touch-scroll no-scrollbar py-1">
              {sectors.map((sec) => {
                const isActive = activeSector === sec.id;
                return (
                  <button
                    key={sec.id}
                    onClick={() => setActiveSector(sec.id)}
                    className={`cursor-pointer inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs font-extrabold transition-all border shrink-0 ${
                      isActive
                        ? 'bg-primary text-on-primary border-primary shadow-md'
                        : 'glass-card text-on-surface-variant hover:text-primary hover:border-primary'
                    }`}
                  >
                    <span className="material-symbols-outlined text-[15px] sm:text-[16px]">{sec.icon}</span>
                    <span>{sec.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Partner Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {filteredPartners.map((partner) => (
              <div 
                key={partner.id} 
                className="glass-card rounded-3xl p-5 sm:p-6 flex flex-col justify-between group shadow-md border border-glass-border hover:-translate-y-1 transition-all"
              >
                <div className="flex flex-col gap-3 sm:gap-4">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-primary/10 border border-glass-border flex items-center justify-center font-black text-primary text-xs sm:text-sm tracking-wider">
                      {partner.logoText}
                    </div>
                    <span className="text-[10px] sm:text-[11px] font-bold text-secondary px-2.5 py-0.5 sm:py-1 rounded-full bg-secondary/10 border border-glass-border">
                      {partner.sector}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-base sm:text-lg font-extrabold text-on-surface group-hover:text-primary transition-colors leading-snug">
                      {partner.name}
                    </h3>
                    <div className="text-xs text-on-surface-variant flex items-center gap-1 mt-0.5">
                      <span className="material-symbols-outlined text-[14px] text-primary">location_on</span>
                      <span>{partner.location}</span>
                    </div>
                  </div>

                  <div className="p-3 rounded-2xl bg-surface-container/50 text-xs">
                    <div className="font-extrabold text-primary mb-0.5">{partner.placements}</div>
                    <div className="text-on-surface-variant line-clamp-2 leading-relaxed">{partner.focus}</div>
                  </div>
                </div>

                <div className="pt-3.5 sm:pt-4 mt-3 sm:mt-4 border-t border-glass-border text-[10px] sm:text-[11px] font-semibold text-on-surface-variant">
                  {partner.relationship}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ---------------- 3. EXECUTIVE CASE STUDIES ---------------- */}
      <section 
        className="relative py-14 sm:py-24 border-t border-glass-border transition-colors duration-500 overflow-hidden"
        style={{ background: 'var(--section-gradient-2)' }}
      >
        {/* Ambient Typographic Watermark */}
        <div className="absolute inset-0 pointer-events-none select-none overflow-hidden flex items-center justify-center z-0 opacity-[0.025] dark:opacity-[0.04] text-[8vw] font-black uppercase tracking-[0.2em] whitespace-nowrap text-on-surface">
          CASE STUDIES • IMPACT • RETENTION • METRICS
        </div>

        <div className="relative z-10 max-w-container-max mx-auto px-4 sm:px-6 flex flex-col gap-8 sm:gap-12">
          
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-[10px] sm:text-xs font-extrabold text-tertiary uppercase tracking-widest block mb-1.5 sm:mb-2">Proven Impact</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-on-surface tracking-tight leading-snug">
              Executive Client <span className="text-primary">Case Studies</span>
            </h2>
            <p className="text-xs sm:text-base text-on-surface-variant mt-1.5 sm:mt-2">
              Real-world talent bottlenecks solved with precision executive search and compliance frameworks.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            {caseStudies.map((cs) => (
              <div key={cs.id} className="glass-card rounded-3xl p-5 sm:p-8 flex flex-col justify-between group shadow-lg border border-glass-border">
                <div className="flex flex-col gap-4 sm:gap-5">
                  <div>
                    <div className="text-[11px] sm:text-xs font-extrabold text-secondary uppercase tracking-wider mb-1">{cs.sector}</div>
                    <h3 className="text-lg sm:text-xl font-extrabold text-on-surface group-hover:text-primary transition-colors leading-snug">
                      {cs.title}
                    </h3>
                    <div className="text-xs font-bold text-primary mt-1">Client: {cs.client}</div>
                  </div>

                  <div className="flex flex-col gap-2.5 sm:gap-3 text-xs leading-relaxed">
                    <div className="p-3 rounded-2xl bg-surface-container/60">
                      <span className="font-extrabold text-tertiary block mb-1 uppercase tracking-wider">The Challenge</span>
                      <p className="text-on-surface-variant">{cs.challenge}</p>
                    </div>

                    <div className="p-3 rounded-2xl bg-surface-container/60">
                      <span className="font-extrabold text-primary block mb-1 uppercase tracking-wider">Our Solution</span>
                      <p className="text-on-surface-variant">{cs.solution}</p>
                    </div>

                    <div className="p-3 rounded-2xl bg-primary/10 border border-glass-border">
                      <span className="font-extrabold text-primary block mb-1 uppercase tracking-wider">Measurable Outcome</span>
                      <p className="font-bold text-on-surface">{cs.result}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ---------------- 4. EXECUTIVE TESTIMONIALS ---------------- */}
      <section className="relative py-14 sm:py-24 bg-surface border-t border-glass-border transition-colors duration-300 overflow-hidden">
        {/* Ambient Typographic Watermark */}
        <div className="absolute inset-0 pointer-events-none select-none overflow-hidden flex items-center justify-center z-0 opacity-[0.025] dark:opacity-[0.04] text-[8vw] font-black uppercase tracking-[0.2em] whitespace-nowrap text-on-surface">
          CLIENT TRUST • 98.4% RETENTION • EXECUTIVE ENDORSEMENTS
        </div>

        <div className="relative z-10 max-w-container-max mx-auto px-4 sm:px-6 flex flex-col gap-8 sm:gap-12">
          
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-[10px] sm:text-xs font-extrabold text-tertiary uppercase tracking-widest block mb-1.5 sm:mb-2">Client Testimonials</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-on-surface tracking-tight leading-snug">
              What Corporate Leaders <span className="text-primary">Say About Us</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {testimonials.map((t, idx) => (
              <div key={idx} className="glass-card rounded-3xl p-5 sm:p-7 flex flex-col justify-between group shadow-md border border-glass-border">
                <div className="flex flex-col gap-3 sm:gap-4">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="material-symbols-outlined text-[18px] sm:text-[20px]">star</span>
                    ))}
                  </div>

                  <blockquote className="text-xs sm:text-sm text-on-surface italic leading-relaxed">
                    "{t.quote}"
                  </blockquote>
                </div>

                <div className="flex items-center gap-3 pt-4 sm:pt-5 mt-4 sm:mt-5 border-t border-glass-border">
                  <img 
                    src={t.image} 
                    alt={t.author} 
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover border-2 border-primary shadow-sm"
                  />
                  <div>
                    <div className="text-xs font-extrabold text-on-surface">{t.author}</div>
                    <div className="text-[10px] sm:text-[11px] text-on-surface-variant font-medium">{t.role}</div>
                    <div className="text-[10px] sm:text-[11px] font-bold text-primary">{t.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ---------------- 5. PARTNERSHIP CTA BANNER ---------------- */}
      <section className="relative py-12 sm:py-20 bg-surface border-t border-glass-border overflow-hidden">
        {/* Ambient Typographic Watermark */}
        <div className="absolute inset-0 pointer-events-none select-none overflow-hidden flex items-center justify-center z-0 opacity-[0.02] dark:opacity-[0.04] text-[8vw] font-black uppercase tracking-[0.2em] whitespace-nowrap text-on-surface">
          SCALE YOUR WORKFORCE • MANDATES • RETENTION
        </div>

        <div className="relative z-10 max-w-container-max mx-auto px-4 sm:px-6">
          <div 
            className="p-6 sm:p-14 rounded-3xl border border-glass-border shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 relative overflow-hidden"
            style={{ background: 'var(--banner-gradient)' }}
          >
            <div className="flex flex-col gap-2.5 sm:gap-3 text-center md:text-left z-10">
              <span className="text-[10px] sm:text-xs font-extrabold text-tertiary uppercase tracking-widest">Enterprise Talent Solutions</span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-on-surface tracking-tight leading-snug">
                Ready to Join Our Client Partner Network?
              </h2>
              <p className="text-xs sm:text-base text-on-surface-variant max-w-xl">
                Experience accelerated C-suite search, vetted engineering squads, and risk-free statutory compliance.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 z-10 w-full sm:w-auto">
              <Link 
                href="/contact" 
                className="cursor-pointer bg-primary hover:bg-primary-fixed-dim text-on-primary font-bold text-xs sm:text-sm px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl shadow-lg transition-all transform hover:-translate-y-0.5 text-center active:scale-98"
              >
                Inquire About Corporate Mandates
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
