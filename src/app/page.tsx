'use client';

import React, { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import ApplyModal from '@/components/ApplyModal';
import { useSiteData } from '@/context/SiteDataContext';

export default function HomePage() {
  const { jobs: allJobs } = useSiteData();
  const [jobs, setJobs] = useState<any[]>([]);
  const [selectedJob, setSelectedJob] = useState<any | null>(null);

  // 1. Router Marquee Hero State
  const [activeHeroTab, setActiveHeroTab] = useState(0);
  const [isHeroPaused, setIsHeroPaused] = useState(false);

  // 2. Elastic Carousel State
  const [carouselIndex, setCarouselIndex] = useState(0);
  const carouselTrackRef = useRef<HTMLDivElement>(null);

  // 3. Testimonials Carousel State
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // Use cached jobs from SiteDataProvider — no fetch needed
  useEffect(() => {
    if (allJobs.length > 0) {
      setJobs(allJobs.slice(0, 3));
    } else {
      setJobs([
        {
          id: 'job-1',
          title: 'Senior Talent Acquisition Manager',
          department: 'Executive Search',
          location: 'Mumbai, India',
          type: 'Full-Time',
          salary: '₹18L - ₹25L / yr',
          description: 'Leading senior leadership hiring and corporate talent mapping for Fortune 500 client accounts.'
        },
        {
          id: 'job-2',
          title: 'Lead HR Operations Specialist',
          department: 'HR Advisory',
          location: 'Bengaluru, India',
          type: 'Full-Time',
          salary: '₹14L - ₹18L / yr',
          description: 'Managing statutory audit, labor risk mitigation, and compliance frameworks for fast-scaling partners.'
        },
        {
          id: 'job-3',
          title: 'Senior Technical Recruitment Lead',
          department: 'Tech Recruiting',
          location: 'Hyderabad (Remote)',
          type: 'Full-Time',
          salary: '₹12L - ₹16L / yr',
          description: 'Sourcing top tech talent in Fullstack, Cloud Infrastructure, and AI/ML across regional hubs.'
        }
      ]);
    }
  }, [allJobs]);

  // Hero Marquee Slides with Pexels imagery
  const heroSlides = [
    {
      id: 'exec-search',
      tabLabel: 'Executive Search',
      tabIcon: 'psychology',
      pill: 'C-Suite & Board Appointments',
      headline: 'Securing Visionary Leadership. Driving Scalable Growth.',
      description: 'We connect Fortune 500 enterprises and hyper-growth ventures with transformative C-suite leaders who possess the strategic acumen to lead modern markets.',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1600',
      badgeNum: '98.4%',
      badgeLabel: 'Executive Placement Retention',
      primaryCtaText: 'Explore Executive Search',
      primaryCtaHref: '/services',
      secondaryCtaText: 'View Leadership Roles',
      secondaryCtaHref: '/openings'
    },
    {
      id: 'tech-staffing',
      tabLabel: 'Tech Staffing',
      tabIcon: 'developer_mode',
      pill: 'Engineering, AI & Cloud Talent',
      headline: 'Scale High-Impact Tech Teams. Faster than Ever.',
      description: 'Rapid, vetted candidate delivery across Fullstack, Cloud Architecture, AI/ML, and DevOps. Build resilient engineering organizations with pre-screened talent.',
      image: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1600',
      badgeNum: '14 Days',
      badgeLabel: 'Average Time-to-Offer',
      primaryCtaText: 'Explore Tech Staffing',
      primaryCtaHref: '/services',
      secondaryCtaText: 'Browse Tech Openings',
      secondaryCtaHref: '/openings'
    },
    {
      id: 'hr-compliance',
      tabLabel: 'HR & Labor Compliance',
      tabIcon: 'verified_user',
      pill: 'Statutory Risk Mitigation',
      headline: '100% Risk-Free Operations. Complete Statutory Audits.',
      description: 'Navigate Indian labor laws, POSH frameworks, statutory PF/ESI audits, and custom employee handbooks with seasoned corporate HR counsel.',
      image: 'https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=1600',
      badgeNum: '100%',
      badgeLabel: 'Statutory Compliance Rating',
      primaryCtaText: 'Request Compliance Audit',
      primaryCtaHref: '/contact',
      secondaryCtaText: 'Our Advisory Scope',
      secondaryCtaHref: '/services'
    },
    {
      id: 'talent-architecture',
      tabLabel: 'HR Strategy & Mapping',
      tabIcon: 'insights',
      pill: 'Leadership Succession & OKRs',
      headline: 'Strategic Talent Architecture. Built for Hyper-Growth.',
      description: 'Competency mapping, compensation benchmarking, performance management frameworks, and leadership succession planning tailored for ambitious enterprises.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1600',
      badgeNum: '500+',
      badgeLabel: 'Leadership Mandates Delivered',
      primaryCtaText: 'Explore HR Strategy',
      primaryCtaHref: '/services',
      secondaryCtaText: 'Book Strategy Session',
      secondaryCtaHref: '/contact'
    },
    {
      id: 'career-seekers',
      tabLabel: 'Career Opportunities',
      tabIcon: 'badge',
      pill: 'Join Top Industry Leaders',
      headline: 'Step Into Your Next Big Role. Accelerate Your Career.',
      description: 'Discover verified openings across top Technology, Finance, Supply Chain, and Healthcare leaders with personalized placement advisory.',
      image: 'https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=1600',
      badgeNum: '10,000+',
      badgeLabel: 'Careers Transformed',
      primaryCtaText: 'View Hot Openings',
      primaryCtaHref: '/openings',
      secondaryCtaText: 'Submit Your Resume',
      secondaryCtaHref: '/contact'
    }
  ];

  // Elastic Carousel Practice Items with Pexels imagery
  const elasticPracticeCards = [
    {
      id: 'p-1',
      tag: 'Executive Search',
      icon: 'psychology',
      title: 'C-Suite & Board Advisory',
      description: 'Tailored executive search pipelines backed by deep industry mapping and confidential headhunting.',
      image: 'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['Confidential Mandates', 'Board Assessment', 'Global Mapping'],
      href: '/services'
    },
    {
      id: 'p-2',
      tag: 'Engineering & AI',
      icon: 'developer_mode',
      title: 'Fullstack & Cloud Squads',
      description: 'High-velocity technical recruiting for modern tech stacks, distributed systems, and AI engineering.',
      image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['Pre-Vetted Coders', 'Systems Leads', 'Sprint Headcount'],
      href: '/services'
    },
    {
      id: 'p-3',
      tag: 'Statutory Advisory',
      icon: 'verified_user',
      title: 'Labor Law & POSH Audit',
      description: 'Comprehensive risk audits, employee policy handbooks, and labor regulatory filings.',
      image: 'https://images.pexels.com/photos/4386476/pexels-photo-4386476.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['Statutory Compliance', 'POSH Training', 'Labor Law Counsel'],
      href: '/services'
    },
    {
      id: 'p-4',
      tag: 'HR Infrastructure',
      icon: 'tune',
      title: 'Workforce Strategy & OKRs',
      description: 'Scalable HR policy handbooks, compensation benchmarking, and performance appraisal frameworks.',
      image: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['Compensation Banding', 'OKRs Alignment', 'Policy Handbooks'],
      href: '/services'
    },
    {
      id: 'p-5',
      tag: 'Diversity & Inclusion',
      icon: 'group',
      title: 'D&I Leadership Search',
      description: 'Building diverse boards and inclusive leadership pipelines across gender, background, and specialized domains.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['Gender Diversity Mandates', 'Inclusive Culture', 'ESG Benchmarks'],
      href: '/services'
    },
    {
      id: 'p-6',
      tag: 'Global Mobility',
      icon: 'public',
      title: 'Pan-India & Cross-Border',
      description: 'Facilitating cross-city executive relocations, expatriate visa compliance, and multi-state workforce deployments.',
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['Multi-City Deployments', 'Relocation Advisory', 'State Labor Codes'],
      href: '/services'
    }
  ];

  // Testimonials Data with Pexels imagery
  const testimonials = [
    {
      id: 't-1',
      author: 'Rajesh Sharma',
      role: 'Chief Human Resources Officer',
      company: 'Horizon AI Labs',
      quote: 'Abishree HR Consultants transformed our senior leadership hiring pipeline. Their industry insight and swift turnaround helped us build our core AI team in record time.',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1600',
      rating: 5
    },
    {
      id: 't-2',
      author: 'Priya Nair',
      role: 'VP Operations & People',
      company: 'Apex Global Logistics',
      quote: 'The statutory compliance audit and multi-state labor frameworks conducted by Abishree HR saved our company significant exposure risks during rapid expansion.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1600',
      rating: 5
    },
    {
      id: 't-3',
      author: 'Arunav Sengupta',
      role: 'Head of Engineering',
      company: 'Novus Cloud Systems',
      quote: 'Their tech recruitment team understands real engineering requirements. Every candidate presented had stellar architectural depth and immediate cultural alignment.',
      image: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1600',
      rating: 5
    }
  ];

  // Router Marquee Autoplay Timer
  useEffect(() => {
    if (isHeroPaused) return;
    const interval = setInterval(() => {
      setActiveHeroTab((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isHeroPaused, heroSlides.length]);

  const slideLeft = () => {
    setCarouselIndex((prev) => Math.max(0, prev - 1));
  };

  const slideRight = () => {
    setCarouselIndex((prev) => Math.min(elasticPracticeCards.length - 1, prev + 1));
  };

  const currentHero = heroSlides[activeHeroTab];

  return (
    <div className="flex flex-col w-full overflow-hidden">
      
      {/* ---------------- 1. ADOBE-INSPIRED ROUTER MARQUEE HERO ---------------- */}
      <section 
        className="relative w-full min-h-[90vh] flex flex-col justify-between overflow-hidden pt-6 pb-8 transition-colors duration-500"
        onMouseEnter={() => setIsHeroPaused(true)}
        onMouseLeave={() => setIsHeroPaused(false)}
      >
        {/* Ambient Typographic Watermark */}
        <div className="absolute inset-0 pointer-events-none select-none overflow-hidden flex items-center justify-center z-0 opacity-[0.03] dark:opacity-[0.06] text-[10vw] font-black uppercase tracking-[0.25em] whitespace-nowrap text-on-surface">
          EXECUTIVE SEARCH • TALENT MAPPING • STATUTORY AUDIT
        </div>

        {/* Background Gliding Image Layer */}
        {heroSlides.map((slide, idx) => (
          <div
            key={slide.id}
            className={`absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-out transform ${
              idx === activeHeroTab ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
            }`}
            style={{ backgroundImage: `url('${slide.image}')` }}
          />
        ))}

        {/* Adaptive Theme Gradient Overlay */}
        <div 
          className="absolute inset-0 transition-all duration-500 pointer-events-none"
          style={{ background: 'var(--hero-overlay)' }}
        />

        {/* Hero Content Area */}
        <div className="relative z-10 max-w-container-max w-full mx-auto px-6 pt-12 sm:pt-16 pb-8 grid grid-cols-1 md:grid-cols-12 gap-8 items-center flex-1">
          <div className="col-span-1 md:col-span-8 flex flex-col items-start gap-6 animate-in fade-in duration-500">
            
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2.5 bg-surface-container/90 backdrop-blur-md border border-glass-border px-4 py-2 rounded-full shadow-sm">
              <span className="material-symbols-outlined text-primary text-[20px]">{currentHero.tabIcon}</span>
              <span className="font-extrabold text-xs text-primary uppercase tracking-wider">{currentHero.pill}</span>
            </div>

            {/* Display Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-on-surface leading-[1.12] tracking-tight transition-all duration-300">
              {currentHero.headline.split('. ')[0]}.<br />
              <span className="text-primary">{currentHero.headline.split('. ')[1] || ''}</span>
            </h1>

            {/* Narrative Subtitle */}
            <p className="text-base sm:text-lg text-on-surface-variant max-w-2xl leading-relaxed font-normal">
              {currentHero.description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link 
                href={currentHero.primaryCtaHref} 
                className="cursor-pointer bg-primary hover:bg-primary-fixed-dim text-on-primary font-bold text-sm px-8 py-4 rounded-xl shadow-lg transition-all transform hover:-translate-y-0.5 hover:shadow-xl flex items-center gap-2"
              >
                <span>{currentHero.primaryCtaText}</span>
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </Link>
              <Link 
                href={currentHero.secondaryCtaHref} 
                className="cursor-pointer glass-card hover:border-primary text-on-surface hover:text-primary font-bold text-sm px-7 py-4 rounded-xl transition-all flex items-center gap-2"
              >
                <span>{currentHero.secondaryCtaText}</span>
                <span className="material-symbols-outlined text-[18px]">explore</span>
              </Link>
            </div>

            {/* Floating Impact Metric Chip */}
            <div className="inline-flex items-center gap-3 glass-card px-4 py-2 rounded-2xl shadow-sm mt-2">
              <span className="text-xl font-black text-primary">{currentHero.badgeNum}</span>
              <span className="text-xs text-on-surface-variant font-bold uppercase tracking-wider">{currentHero.badgeLabel}</span>
            </div>

          </div>
        </div>

        {/* Interactive Router Marquee Tab Navigation Bar */}
        <div className="relative z-10 max-w-container-max w-full mx-auto px-6 mt-6">
          <div className="glass-card rounded-2xl p-2 sm:p-3 flex items-center justify-between gap-2 overflow-x-auto no-scrollbar shadow-lg">
            {heroSlides.map((slide, idx) => {
              const isActive = idx === activeHeroTab;
              return (
                <button
                  key={slide.id}
                  onClick={() => setActiveHeroTab(idx)}
                  className={`cursor-pointer flex-1 min-w-[150px] sm:min-w-0 flex flex-col items-start p-3 rounded-xl transition-all duration-300 relative text-left group ${
                    isActive 
                      ? 'bg-surface shadow-md' 
                      : 'hover:bg-surface-container/60 opacity-80 hover:opacity-100'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`material-symbols-outlined text-[18px] ${isActive ? 'text-primary' : 'text-on-surface-variant'}`}>
                      {slide.tabIcon}
                    </span>
                    <span className={`text-xs font-extrabold truncate ${isActive ? 'text-primary' : 'text-on-surface'}`}>
                      {slide.tabLabel}
                    </span>
                  </div>
                  <span className="text-[10px] text-on-surface-variant line-clamp-1 font-medium hidden sm:block">
                    {slide.pill}
                  </span>

                  {/* Active Progress Bar */}
                  {isActive && !isHeroPaused && (
                    <div className="absolute bottom-0 left-2 right-2 h-0.5 bg-surface-container rounded-full overflow-hidden">
                      <div className="h-full bg-primary animate-progress" />
                    </div>
                  )}
                  {isActive && isHeroPaused && (
                    <div className="absolute bottom-0 left-2 right-2 h-0.5 bg-primary rounded-full" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------------- 2. ELASTIC GLIDING PICTURE CAROUSEL (PRACTICE AREAS) ---------------- */}
      <section className="relative py-24 transition-colors duration-500 overflow-hidden" style={{ background: 'var(--section-gradient-1)' }}>
        
        {/* Ambient Typographic Watermark */}
        <div className="absolute inset-0 pointer-events-none select-none overflow-hidden flex items-center justify-center z-0 opacity-[0.02] dark:opacity-[0.04] text-[9vw] font-black uppercase tracking-[0.2em] whitespace-nowrap text-on-surface">
          PRACTICE CAPABILITIES • SEARCH • COMPLIANCE • ADVISORY
        </div>

        <div className="relative z-10 max-w-container-max mx-auto px-6">
          
          {/* Header with Navigation Controls */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-tertiary mb-2">
                <span className="w-2 h-2 rounded-full bg-tertiary" />
                <span>End-to-End Capabilities</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-on-surface tracking-tight">
                Everything You Need for <span className="text-primary">Talent & HR</span>
              </h2>
              <p className="text-sm sm:text-base text-on-surface-variant max-w-xl mt-2 leading-relaxed">
                Explore our full suite of executive search, technical staffing, and statutory labor compliance solutions.
              </p>
            </div>

            {/* Slider Arrow Controls */}
            <div className="flex items-center gap-3 self-end sm:self-auto">
              <button
                onClick={slideLeft}
                disabled={carouselIndex === 0}
                aria-label="Previous Slide"
                className="cursor-pointer w-12 h-12 rounded-full glass-card flex items-center justify-center text-on-surface hover:text-primary disabled:opacity-40 transition-all shadow-sm active:scale-95"
              >
                <span className="material-symbols-outlined text-[24px]">chevron_left</span>
              </button>
              <button
                onClick={slideRight}
                disabled={carouselIndex >= elasticPracticeCards.length - 2}
                aria-label="Next Slide"
                className="cursor-pointer w-12 h-12 rounded-full glass-card flex items-center justify-center text-on-surface hover:text-primary disabled:opacity-40 transition-all shadow-sm active:scale-95"
              >
                <span className="material-symbols-outlined text-[24px]">chevron_right</span>
              </button>
            </div>
          </div>

          {/* Gliding Cards Track */}
          <div className="overflow-hidden">
            <div 
              ref={carouselTrackRef}
              className="flex gap-6 transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${carouselIndex * 340}px)` }}
            >
              {elasticPracticeCards.map((card) => (
                <div 
                  key={card.id}
                  className="w-[320px] sm:w-[380px] shrink-0 glass-card rounded-3xl overflow-hidden flex flex-col justify-between group shadow-lg"
                >
                  {/* Picture Glider Image Box */}
                  <div className="relative h-48 sm:h-56 overflow-hidden">
                    <img 
                      src={card.image} 
                      alt={card.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                    <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 bg-surface/90 backdrop-blur-md px-3 py-1 rounded-full border border-glass-border shadow-sm">
                      <span className="material-symbols-outlined text-primary text-[16px]">{card.icon}</span>
                      <span className="text-[11px] font-extrabold text-primary uppercase tracking-wider">{card.tag}</span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 flex flex-col gap-3 flex-1 justify-between">
                    <div>
                      <h3 className="text-xl font-extrabold text-on-surface group-hover:text-primary transition-colors leading-snug mb-2">
                        {card.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed mb-4">
                        {card.description}
                      </p>

                      <ul className="flex flex-col gap-1.5 pt-2 border-t border-glass-border/60">
                        {card.features.map((f, fIdx) => (
                          <li key={fIdx} className="flex items-center gap-2 text-xs font-semibold text-on-surface">
                            <span className="material-symbols-outlined text-primary text-[16px]">check_circle</span>
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4 mt-2 border-t border-glass-border">
                      <Link 
                        href={card.href}
                        className="cursor-pointer text-xs font-extrabold text-primary flex items-center justify-between group-hover:underline"
                      >
                        <span>Explore Practice</span>
                        <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Indicator Dots */}
          <div className="flex justify-center items-center gap-2 mt-8">
            {elasticPracticeCards.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCarouselIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`cursor-pointer h-2 rounded-full transition-all duration-300 ${
                  idx === carouselIndex ? 'w-8 bg-primary' : 'w-2 bg-outline-variant hover:bg-outline'
                }`}
              />
            ))}
          </div>

        </div>
      </section>

      {/* ---------------- 3. FEATURED INNOVATION & 3-UP STAGGER GRID ---------------- */}
      <section className="relative py-24 bg-surface transition-colors duration-500 border-t border-glass-border overflow-hidden">
        
        {/* Ambient Typographic Watermark */}
        <div className="absolute inset-0 pointer-events-none select-none overflow-hidden flex items-center justify-center z-0 opacity-[0.02] dark:opacity-[0.04] text-[8vw] font-black uppercase tracking-[0.2em] whitespace-nowrap text-on-surface">
          INNOVATION • AI TALENT MAPPING • RETENTION MATRIX
        </div>

        <div className="relative z-10 max-w-container-max mx-auto px-6 flex flex-col gap-12">
          
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-extrabold text-tertiary uppercase tracking-widest block mb-2">Features & Innovations</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-on-surface tracking-tight">
              Explore What's <span className="text-primary">New in HR Advisory</span>
            </h2>
            <p className="text-sm sm:text-base text-on-surface-variant mt-2">
              Discover advanced talent mapping and AI-assisted recruitment workflows built for scale.
            </p>
          </div>

          {/* Full-Width Featured Spotlight Card */}
          <div className="glass-card rounded-3xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 shadow-xl border border-glass-border group">
            <div className="lg:col-span-6 p-8 sm:p-12 flex flex-col justify-between gap-6">
              <div className="flex flex-col gap-3">
                <div className="inline-flex items-center gap-2 bg-primary/10 px-3.5 py-1.5 rounded-full border border-glass-border text-primary text-xs font-extrabold uppercase tracking-wider self-start">
                  <span className="material-symbols-outlined text-[18px]">insights</span>
                  <span>AI Talent Intelligence 2026</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-on-surface leading-tight group-hover:text-primary transition-colors">
                  Turn Market Talent Signals into Rapid Organizational Impact.
                </h3>
                <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed">
                  Leverage our AI-assisted talent mapping matrix to benchmark compensation, forecast leadership availability, and secure top-tier executive talent with precision.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/services"
                  className="cursor-pointer bg-primary hover:bg-primary-fixed-dim text-on-primary font-bold text-xs px-6 py-3.5 rounded-xl shadow-md transition-all flex items-center gap-2"
                >
                  <span>Learn More</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </Link>
                <Link
                  href="/contact"
                  className="cursor-pointer glass-card text-on-surface font-bold text-xs px-6 py-3.5 rounded-xl transition-all"
                >
                  Book Discovery Session
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 relative min-h-[260px] lg:min-h-full overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=1200" 
                alt="Talent Intelligence" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-transparent lg:block hidden" />
            </div>
          </div>

          {/* 3-Up Stagger Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-card rounded-3xl p-6 flex flex-col justify-between group shadow-md">
              <div className="flex flex-col gap-3">
                <div className="h-44 rounded-2xl overflow-hidden mb-2">
                  <img 
                    src="https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=800" 
                    alt="Confidential Search"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                </div>
                <div className="inline-flex items-center gap-1.5 text-xs font-bold text-primary">
                  <span className="material-symbols-outlined text-[18px]">lock</span>
                  <span>Confidential Headhunting</span>
                </div>
                <h4 className="text-lg font-bold text-on-surface group-hover:text-primary transition-colors">
                  Zero-Leak C-Suite Replacements
                </h4>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  Stealth executive searches ensuring zero operational disruption and maximum confidentiality.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-glass-border">
                <Link href="/services" className="cursor-pointer text-xs font-bold text-primary flex items-center gap-1 hover:underline">
                  <span>Explore Search</span>
                  <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                </Link>
              </div>
            </div>

            <div className="glass-card rounded-3xl p-6 flex flex-col justify-between group shadow-md">
              <div className="flex flex-col gap-3">
                <div className="h-44 rounded-2xl overflow-hidden mb-2">
                  <img 
                    src="https://images.pexels.com/photos/3182781/pexels-photo-3182781.jpeg?auto=compress&cs=tinysrgb&w=800" 
                    alt="Sprint Staffing"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                </div>
                <div className="inline-flex items-center gap-1.5 text-xs font-bold text-secondary">
                  <span className="material-symbols-outlined text-[18px]">bolt</span>
                  <span>Sprint Tech Sourcing</span>
                </div>
                <h4 className="text-lg font-bold text-on-surface group-hover:text-primary transition-colors">
                  Pre-Vetted Engineering Talent
                </h4>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  Immediate hiring pipelines for React, Next.js, Cloud Infrastructure, and AI teams.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-glass-border">
                <Link href="/services" className="cursor-pointer text-xs font-bold text-secondary flex items-center gap-1 hover:underline">
                  <span>View Tech Stack</span>
                  <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                </Link>
              </div>
            </div>

            <div className="glass-card rounded-3xl p-6 flex flex-col justify-between group shadow-md">
              <div className="flex flex-col gap-3">
                <div className="h-44 rounded-2xl overflow-hidden mb-2">
                  <img 
                    src="https://images.pexels.com/photos/5668772/pexels-photo-5668772.jpeg?auto=compress&cs=tinysrgb&w=800" 
                    alt="Labor Law Audits"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                </div>
                <div className="inline-flex items-center gap-1.5 text-xs font-bold text-tertiary">
                  <span className="material-symbols-outlined text-[18px]">verified_user</span>
                  <span>Labor Compliance Audit</span>
                </div>
                <h4 className="text-lg font-bold text-on-surface group-hover:text-primary transition-colors">
                  Multi-State Statutory Audit
                </h4>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  Mitigate litigation risk with comprehensive PF/ESI audits, POSH setups, and contract drafting.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-glass-border">
                <Link href="/services" className="cursor-pointer text-xs font-bold text-tertiary flex items-center gap-1 hover:underline">
                  <span>Audit Framework</span>
                  <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ---------------- 4. FULL-BLEED TESTIMONIAL SLIDER ---------------- */}
      <section className="relative py-28 overflow-hidden transition-colors duration-500 text-on-surface">
        {/* Full-Bleed Background Images */}
        {testimonials.map((t, idx) => (
          <div
            key={t.id}
            className={`absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-out transform ${
              idx === activeTestimonial ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
            }`}
            style={{ backgroundImage: `url('${t.image}')` }}
          />
        ))}

        {/* Ambient Dark/Light Glass Overlay */}
        <div 
          className="absolute inset-0 transition-all duration-500 pointer-events-none"
          style={{ background: 'var(--hero-overlay)' }}
        />

        <div className="relative z-10 max-w-container-max mx-auto px-6 flex flex-col justify-between min-h-[380px]">
          <div className="max-w-3xl flex flex-col gap-6 animate-in fade-in duration-500">
            <div className="flex items-center gap-1 text-amber-500">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="material-symbols-outlined text-[22px]">star</span>
              ))}
            </div>

            <blockquote className="text-2xl sm:text-4xl font-extrabold leading-tight tracking-tight text-on-surface">
              "{testimonials[activeTestimonial].quote}"
            </blockquote>

            <div className="flex items-center gap-4 pt-2">
              <div>
                <div className="text-lg font-black text-primary">{testimonials[activeTestimonial].author}</div>
                <div className="text-xs font-semibold text-on-surface-variant">
                  {testimonials[activeTestimonial].role} • <span className="text-secondary font-bold">{testimonials[activeTestimonial].company}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial Switcher Thumbnails */}
          <div className="flex items-center gap-3 pt-8 mt-6 border-t border-glass-border">
            {testimonials.map((t, idx) => (
              <button
                key={t.id}
                onClick={() => setActiveTestimonial(idx)}
                className={`cursor-pointer px-4 py-2 rounded-xl text-xs font-bold transition-all border ${
                  idx === activeTestimonial
                    ? 'bg-primary text-on-primary border-primary shadow-md'
                    : 'glass-card text-on-surface-variant hover:text-primary'
                }`}
              >
                {t.author.split(' ')[0]} ({t.company.split(' ')[0]})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- 5. HOT JOBS BENTO GRID ---------------- */}
      <section className="relative py-24 bg-surface border-t border-glass-border transition-colors duration-300 overflow-hidden">
        {/* Ambient Typographic Watermark */}
        <div className="absolute inset-0 pointer-events-none select-none overflow-hidden flex items-center justify-center z-0 opacity-[0.02] dark:opacity-[0.04] text-[9vw] font-black uppercase tracking-[0.2em] whitespace-nowrap text-on-surface">
          ACTIVE MANDATES • VERIFIED OPENINGS • EXECUTIVE HIRING
        </div>

        <div className="relative z-10 max-w-container-max mx-auto px-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-extrabold text-tertiary uppercase tracking-widest block mb-2">Featured Opportunities</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-on-surface">Hot <span className="text-primary">Jobs</span></h2>
            </div>
            <Link 
              href="/openings" 
              className="cursor-pointer text-primary font-bold text-sm flex items-center gap-1.5 hover:underline group"
            >
              <span>View All 25+ Openings</span>
              <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </Link>
          </div>

          {/* Jobs Bento Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {jobs.map((job) => (
              <div 
                key={job.id} 
                className="glass-card rounded-3xl p-7 flex flex-col justify-between group relative overflow-hidden shadow-lg"
              >
                <div className="flex flex-col gap-3.5">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[11px] font-bold text-primary px-3 py-1 rounded-full bg-primary/10 border border-glass-border">
                      {job.department}
                    </span>
                    <span className="text-xs text-on-surface-variant font-semibold">{job.type}</span>
                  </div>

                  <h3 className="text-xl font-extrabold text-on-surface group-hover:text-primary transition-colors leading-snug">
                    {job.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-on-surface-variant line-clamp-3 leading-relaxed">
                    {job.description}
                  </p>
                </div>

                <div className="pt-5 mt-5 border-t border-glass-border flex flex-col gap-3.5">
                  <div className="flex items-center justify-between text-xs text-on-surface-variant font-medium">
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-[16px] text-primary">location_on</span>
                      {job.location}
                    </span>
                    <span className="text-secondary font-bold">{job.salary}</span>
                  </div>

                  <button
                    onClick={() => setSelectedJob(job)}
                    className="cursor-pointer w-full bg-primary hover:bg-primary-fixed-dim text-on-primary text-xs font-bold py-3 rounded-xl transition-all shadow-md flex items-center justify-center gap-1.5 active:scale-95"
                  >
                    <span>Apply Now</span>
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- 6. CTA BANNER SECTION ---------------- */}
      <section className="relative py-20 bg-surface border-t border-glass-border transition-colors duration-300 overflow-hidden">
        {/* Ambient Typographic Watermark */}
        <div className="absolute inset-0 pointer-events-none select-none overflow-hidden flex items-center justify-center z-0 opacity-[0.02] dark:opacity-[0.04] text-[8vw] font-black uppercase tracking-[0.25em] whitespace-nowrap text-on-surface">
          CONNECT • CONSULT • SCALE • SUCCEED
        </div>

        <div className="relative z-10 max-w-container-max mx-auto px-6">
          <div 
            className="p-10 sm:p-14 rounded-3xl border border-glass-border shadow-xl flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden"
            style={{ background: 'var(--banner-gradient)' }}
          >
            <div className="flex flex-col gap-3 text-center md:text-left z-10">
              <span className="text-xs font-extrabold text-tertiary uppercase tracking-widest">Accelerate Your Talent Growth</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-on-surface tracking-tight">
                Ready to Build Your High-Performance Team?
              </h2>
              <p className="text-sm sm:text-base text-on-surface-variant max-w-xl">
                Partner with Abishree HR Consultants for specialized executive mandates, technical staffing, and compliance advisory.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 z-10">
              <Link 
                href="/contact" 
                className="cursor-pointer bg-primary hover:bg-primary-fixed-dim text-on-primary font-bold text-sm px-8 py-4 rounded-xl shadow-lg transition-all transform hover:-translate-y-0.5"
              >
                Connect with an Advisor
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Apply Modal Component */}
      {selectedJob && (
        <ApplyModal job={selectedJob} onClose={() => setSelectedJob(null)} />
      )}

    </div>
  );
}
