'use client';

import React, { useEffect, useState } from 'react';
import ApplyModal from '@/components/ApplyModal';
import { useSiteData } from '@/context/SiteDataContext';

export default function OpeningsPage() {
  const { jobs: cachedJobs, loading: siteLoading } = useSiteData();
  const [jobs, setJobs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [selectedDept, setSelectedDept] = useState('All');
  const [selectedWorkMode, setSelectedWorkMode] = useState('All');
  const [selectedJob, setSelectedJob] = useState<any | null>(null);

  const departments = ['All', 'Executive Search', 'HR Advisory', 'Tech Recruiting'];
  const workModes = ['All', 'Remote', 'Hybrid', 'On-Site'];

  const sampleJobs = [
    {
      id: 'job-1',
      title: 'Senior Talent Acquisition Manager',
      department: 'Executive Search',
      location: 'Mumbai, India',
      workMode: 'Hybrid',
      experience: '6-10 Years',
      type: 'Full-Time',
      salary: '₹18L - ₹25L / yr',
      postedDate: '2 Days Ago',
      description: 'Lead executive search mandates and competitor talent mapping for Fortune 500 leadership appointments.',
      skills: ['C-Suite Headhunting', 'Competency Vetting', 'Executive Networking', 'Compensation Structuring']
    },
    {
      id: 'job-2',
      title: 'Lead HR Operations & Compliance Specialist',
      department: 'HR Advisory',
      location: 'Bengaluru, India',
      workMode: 'Hybrid',
      experience: '5-8 Years',
      type: 'Full-Time',
      salary: '₹14L - ₹18L / yr',
      postedDate: 'Just Now',
      description: 'Manage statutory labor law audits, POSH committee frameworks, and multi-state compliance roadmaps.',
      skills: ['Indian Labor Codes', 'Statutory Audits', 'POSH Compliance', 'Policy Architecture']
    },
    {
      id: 'job-3',
      title: 'Senior Technical Recruitment Lead',
      department: 'Tech Recruiting',
      location: 'Hyderabad, India',
      workMode: 'Remote',
      experience: '4-7 Years',
      type: 'Full-Time',
      salary: '₹12L - ₹16L / yr',
      postedDate: '3 Days Ago',
      description: 'Source and evaluate top software engineering talent across Fullstack, Cloud Infrastructure, and AI/ML pipelines.',
      skills: ['Fullstack & AI Sourcing', 'Tech Screening', 'Sprint Headcount', 'Candidate Experience']
    },
    {
      id: 'job-4',
      title: 'Senior HR Business Partner (HRBP)',
      department: 'HR Advisory',
      location: 'Pune, India',
      workMode: 'Hybrid',
      experience: '5-9 Years',
      type: 'Full-Time',
      salary: '₹14L - ₹19L / yr',
      postedDate: '1 Week Ago',
      description: 'Oversee organizational design, talent development frameworks, and executive stakeholder alignment across business units.',
      skills: ['Organizational Design', 'Talent Strategy', 'Stakeholder Management', 'Performance Systems']
    },
    {
      id: 'job-5',
      title: 'Principal Consultant - Leadership Hiring',
      department: 'Executive Search',
      location: 'Delhi NCR, India',
      workMode: 'Hybrid',
      experience: '8-14 Years',
      type: 'Full-Time',
      salary: '₹24L - ₹32L / yr',
      postedDate: '4 Days Ago',
      description: 'Manage CXO retained executive search mandates for high-growth tech unicorns and industrial conglomerates.',
      skills: ['Board Retained Search', 'CXO Advisory', 'Client Management', 'Strategic Talent Pipelining']
    },
    {
      id: 'job-6',
      title: 'HR Business Partner (HRBP)',
      department: 'HR Advisory',
      location: 'Bengaluru, India',
      workMode: 'Hybrid',
      experience: '4-7 Years',
      type: 'Full-Time',
      salary: '₹12L - ₹16L / yr',
      postedDate: '5 Days Ago',
      description: 'Drive talent development, performance appraisal frameworks, and employee engagement programs for scaling clients.',
      skills: ['HR Strategy', 'Performance Management', 'Employee Engagement', 'Talent Development']
    }
  ];

  // Use cached data from SiteDataProvider
  useEffect(() => {
    if (!siteLoading) {
      if (cachedJobs.length > 0) {
        setJobs(cachedJobs.map((j: any, i: number) => ({
          ...j,
          workMode: j.workMode || (i % 3 === 0 ? 'Remote' : i % 3 === 1 ? 'Hybrid' : 'On-Site'),
          experience: j.experience || '4-8 Years',
          postedDate: j.postedDate || 'Active',
          skills: j.skills || ['Leadership', 'HR Strategy', 'Consulting']
        })));
      } else {
        setJobs(sampleJobs);
      }
      setLoading(false);
    }
  }, [cachedJobs, siteLoading]);

  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(search.toLowerCase()) ||
                          job.description?.toLowerCase().includes(search.toLowerCase()) ||
                          job.location?.toLowerCase().includes(search.toLowerCase());
    const matchesDept = selectedDept === 'All' || job.department === selectedDept;
    const matchesMode = selectedWorkMode === 'All' || job.workMode === selectedWorkMode;
    return matchesSearch && matchesDept && matchesMode;
  });

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
          style={{ backgroundImage: `url('https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=1600')` }}
        />

        {/* Ambient Typographic Watermark */}
        <div className="absolute inset-0 pointer-events-none select-none overflow-hidden flex items-center justify-center z-0 opacity-[0.03] dark:opacity-[0.06] text-[9vw] font-black uppercase tracking-[0.25em] whitespace-nowrap text-on-surface">
          CAREER EXPANSION • TALENT REGISTRY • EXECUTIVE SEARCH
        </div>

        <div className="relative z-10 max-w-container-max mx-auto px-4 sm:px-6 flex flex-col items-center text-center">
          
          <div className="inline-flex items-center gap-2 bg-surface/90 backdrop-blur-md border border-glass-border px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full shadow-sm mb-4 sm:mb-6">
            <span className="material-symbols-outlined text-primary text-[18px] sm:text-[20px]">work</span>
            <span className="text-[10px] sm:text-xs font-extrabold text-primary uppercase tracking-widest">
              {jobs.length} Verified Career Openings
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl md:text-6xl font-extrabold text-on-surface tracking-tight max-w-4xl leading-[1.18] sm:leading-[1.15] mb-4 sm:mb-6">
            Step Into High-Impact <span className="text-primary">Leadership Roles</span>
          </h1>

          <p className="text-xs sm:text-base md:text-lg text-on-surface-variant max-w-2xl leading-relaxed mb-6 sm:mb-10">
            Join premier corporate organizations and hyper-growth ventures. Explore verified opportunities with market-leading compensation.
          </p>

          {/* Search Box */}
          <div className="w-full max-w-2xl glass-card rounded-2xl p-1.5 sm:p-3 flex items-center gap-2 sm:gap-3 shadow-xl border border-glass-border">
            <span className="material-symbols-outlined text-primary text-[20px] sm:text-[24px] pl-2 sm:pl-3">search</span>
            <input 
              type="text" 
              placeholder="Search by job title, skill, or location..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="bg-transparent border-none outline-none text-xs sm:text-sm text-on-surface placeholder:text-on-surface-variant flex-1 font-medium py-1"
            />
            {search && (
              <button 
                onClick={() => setSearch('')}
                className="cursor-pointer text-on-surface-variant hover:text-on-surface text-xs font-bold px-2 py-1"
              >
                Clear
              </button>
            )}
          </div>

        </div>
      </section>

      {/* ---------------- 2. MULTI-DIMENSIONAL FILTERS & JOB LISTINGS ---------------- */}
      <section className="relative py-12 sm:py-20 bg-surface transition-colors duration-300 overflow-hidden">
        {/* Ambient Typographic Watermark */}
        <div className="absolute inset-0 pointer-events-none select-none overflow-hidden flex items-center justify-center z-0 opacity-[0.02] dark:opacity-[0.04] text-[8vw] font-black uppercase tracking-[0.2em] whitespace-nowrap text-on-surface">
          HIGH IMPACT OPPORTUNITIES • BENCHMARKED COMPENSATION
        </div>

        <div className="relative z-10 max-w-container-max mx-auto px-4 sm:px-6 flex flex-col gap-6 sm:gap-10">
          
          {/* Filters Bar */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 sm:gap-6 pb-4 sm:pb-6 border-b border-glass-border">
            {/* Department Filter (Scrollable on mobile) */}
            <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto touch-scroll no-scrollbar py-1">
              <span className="text-[11px] sm:text-xs font-bold text-on-surface-variant mr-1 shrink-0">Practice:</span>
              {departments.map((dept) => {
                const isActive = selectedDept === dept;
                return (
                  <button
                    key={dept}
                    onClick={() => setSelectedDept(dept)}
                    className={`cursor-pointer px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs font-bold transition-all border shrink-0 ${
                      isActive
                        ? 'bg-primary text-on-primary border-primary shadow-md'
                        : 'glass-card text-on-surface-variant hover:text-primary hover:border-primary'
                    }`}
                  >
                    {dept}
                  </button>
                );
              })}
            </div>

            {/* Work Mode Toggle */}
            <div className="flex items-center gap-2 self-start md:self-auto overflow-x-auto touch-scroll no-scrollbar py-1">
              <span className="text-[11px] sm:text-xs font-bold text-on-surface-variant mr-1 shrink-0">Work Mode:</span>
              <div className="glass-card rounded-xl p-1 flex items-center gap-1 border border-glass-border shrink-0">
                {workModes.map((mode) => {
                  const isActive = selectedWorkMode === mode;
                  return (
                    <button
                      key={mode}
                      onClick={() => setSelectedWorkMode(mode)}
                      className={`cursor-pointer px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg text-xs font-bold transition-all ${
                        isActive
                          ? 'bg-primary text-on-primary shadow-sm'
                          : 'text-on-surface-variant hover:text-on-surface'
                      }`}
                    >
                      {mode}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Jobs Count & Results */}
          <div className="flex items-center justify-between text-[11px] sm:text-xs font-extrabold text-on-surface-variant uppercase tracking-wider">
            <span>Showing {filteredJobs.length} Open Positions</span>
            {search && <span className="truncate max-w-[180px]">Filtered by: "{search}"</span>}
          </div>

          {loading ? (
            <div className="text-center py-20 text-on-surface-variant font-bold text-sm">
              Loading current openings...
            </div>
          ) : filteredJobs.length === 0 ? (
            <div className="glass-card rounded-3xl p-8 sm:p-12 text-center flex flex-col items-center gap-4 max-w-lg mx-auto">
              <span className="material-symbols-outlined text-primary text-[40px] sm:text-[48px]">search_off</span>
              <h3 className="text-lg sm:text-xl font-bold text-on-surface">No matching positions found</h3>
              <p className="text-xs text-on-surface-variant">
                Try adjusting your search criteria or practice area filters.
              </p>
              <button
                onClick={() => { setSearch(''); setSelectedDept('All'); setSelectedWorkMode('All'); }}
                className="cursor-pointer bg-primary text-on-primary font-bold text-xs px-6 py-3 rounded-xl mt-2 shadow hover:bg-primary-fixed-dim transition-all active:scale-98"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {filteredJobs.map((job) => (
                <div 
                  key={job.id} 
                  className="glass-card rounded-3xl p-5 sm:p-7 flex flex-col justify-between group shadow-lg border border-glass-border hover:-translate-y-1 transition-all"
                >
                  <div className="flex flex-col gap-3 sm:gap-4">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[10px] sm:text-[11px] font-extrabold text-primary px-3 py-1 rounded-full bg-primary/10 border border-glass-border">
                        {job.department}
                      </span>
                      <span className="text-[10px] sm:text-[11px] font-bold text-secondary px-2.5 py-0.5 rounded-full bg-secondary/10">
                        {job.workMode}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-lg sm:text-xl font-extrabold text-on-surface group-hover:text-primary transition-colors leading-snug">
                        {job.title}
                      </h3>
                      <div className="text-xs text-on-surface-variant flex items-center gap-2 mt-1">
                        <span className="flex items-center gap-0.5">
                          <span className="material-symbols-outlined text-[14px] text-primary">location_on</span>
                          {job.location}
                        </span>
                        <span>•</span>
                        <span>{job.experience}</span>
                      </div>
                    </div>

                    <p className="text-xs text-on-surface-variant line-clamp-3 leading-relaxed">
                      {job.description}
                    </p>

                    {/* Skill Tags */}
                    {job.skills && (
                      <div className="flex items-center gap-1.5 flex-wrap pt-1 sm:pt-2">
                        {job.skills.slice(0, 3).map((skill: string, idx: number) => (
                          <span key={idx} className="text-[10px] font-semibold text-on-surface-variant px-2 py-0.5 rounded-md bg-surface-container">
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="pt-4 sm:pt-5 mt-4 sm:mt-5 border-t border-glass-border flex flex-col gap-3 sm:gap-3.5">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-secondary font-black text-xs sm:text-sm">{job.salary}</span>
                      <span className="text-[10px] sm:text-[11px] text-on-surface-variant font-medium">{job.postedDate}</span>
                    </div>

                    <button
                      onClick={() => setSelectedJob(job)}
                      className="cursor-pointer w-full bg-primary hover:bg-primary-fixed-dim text-on-primary text-xs font-bold py-3.5 rounded-xl transition-all shadow-md flex items-center justify-center gap-1.5 active:scale-98"
                    >
                      <span>Apply for Position</span>
                      <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>
      </section>

      {/* ---------------- 3. CANDIDATE VALUE PILLARS ---------------- */}
      <section 
        className="relative py-14 sm:py-24 border-t border-glass-border transition-colors duration-500 overflow-hidden"
        style={{ background: 'var(--section-gradient-2)' }}
      >
        {/* Background Image Layer */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-5 dark:opacity-10 pointer-events-none"
          style={{ backgroundImage: `url('https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1600')` }}
        />

        {/* Ambient Typographic Watermark */}
        <div className="absolute inset-0 pointer-events-none select-none overflow-hidden flex items-center justify-center z-0 opacity-[0.025] dark:opacity-[0.05] text-[8vw] font-black uppercase tracking-[0.2em] whitespace-nowrap text-on-surface">
          CONFIDENTIALITY • FAIR COMPENSATION • CXO ACCESS
        </div>

        <div className="relative z-10 max-w-container-max mx-auto px-4 sm:px-6 flex flex-col gap-8 sm:gap-12">
          
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-[10px] sm:text-xs font-extrabold text-tertiary uppercase tracking-widest block mb-1.5 sm:mb-2">The Candidate Experience</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-on-surface tracking-tight leading-snug">
              Why Senior Professionals <span className="text-primary">Trust Abishree HR</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8">
            <div className="glass-card rounded-3xl p-5 sm:p-8 flex flex-col gap-3 sm:gap-4 shadow-md">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-[20px] sm:text-[24px]">lock</span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-on-surface">100% Confidentiality</h3>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                Your resume and identity are guarded under strict NDAs. We never share your profile without your express prior consent.
              </p>
            </div>

            <div className="glass-card rounded-3xl p-5 sm:p-8 flex flex-col gap-3 sm:gap-4 shadow-md">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined text-[20px] sm:text-[24px]">price_check</span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-on-surface">Compensation Benchmarking</h3>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                We advocate for fair market compensation, performance incentives, equity structuring, and clear leadership progression.
              </p>
            </div>

            <div className="glass-card rounded-3xl p-5 sm:p-8 flex flex-col gap-3 sm:gap-4 shadow-md">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-tertiary/10 flex items-center justify-center text-tertiary">
                <span className="material-symbols-outlined text-[20px] sm:text-[24px]">meeting_room</span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-on-surface">Direct C-Suite Access</h3>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                Skip generic automated applicant tracking filters and present your portfolio directly to hiring CXOs and board members.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ---------------- 4. GENERAL TALENT POOL RESUME DROP ---------------- */}
      <section className="relative py-12 sm:py-20 bg-surface border-t border-glass-border overflow-hidden">
        {/* Ambient Typographic Watermark */}
        <div className="absolute inset-0 pointer-events-none select-none overflow-hidden flex items-center justify-center z-0 opacity-[0.02] dark:opacity-[0.04] text-[8vw] font-black uppercase tracking-[0.2em] whitespace-nowrap text-on-surface">
          EXECUTIVE TALENT POOL • CONFIDENTIAL REGISTRY
        </div>

        <div className="relative z-10 max-w-container-max mx-auto px-4 sm:px-6">
          <div 
            className="p-6 sm:p-14 rounded-3xl border border-glass-border shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 relative overflow-hidden"
            style={{ background: 'var(--banner-gradient)' }}
          >
            <div className="flex flex-col gap-2.5 sm:gap-3 text-center md:text-left z-10">
              <span className="text-[10px] sm:text-xs font-extrabold text-tertiary uppercase tracking-widest">Executive Talent Registry</span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-on-surface tracking-tight leading-snug">
                Don't See an Exact Match Today?
              </h2>
              <p className="text-xs sm:text-base text-on-surface-variant max-w-xl">
                Submit your profile to our confidential executive candidate registry for unlisted leadership mandates.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 z-10 w-full sm:w-auto">
              <button
                onClick={() => setSelectedJob({
                  id: 'general-talent-pool',
                  title: 'Executive Talent Registry Application',
                  department: 'General Candidate Pool',
                  location: 'Pan-India / Global',
                  salary: 'Competitive'
                })}
                className="cursor-pointer bg-primary hover:bg-primary-fixed-dim text-on-primary font-bold text-xs sm:text-sm px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl shadow-lg transition-all transform hover:-translate-y-0.5 text-center active:scale-98"
              >
                Submit Resume to Talent Pool
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Apply Modal */}
      {selectedJob && (
        <ApplyModal job={selectedJob} onClose={() => setSelectedJob(null)} />
      )}

    </div>
  );
}
