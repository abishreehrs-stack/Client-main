'use client';

import React, { useState } from 'react';
import { API_BASE } from '@/config/api';

interface ApplyModalProps {
  job: any;
  onClose: () => void;
}

export default function ApplyModal({ job, onClose }: ApplyModalProps) {
  const [applicantName, setApplicantName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [experience, setExperience] = useState('');
  const [notes, setNotes] = useState('');
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setErrorMsg('');

    try {
      const payload = {
        applicantName,
        email,
        phone,
        experience,
        notes,
        resumeFileName: resumeFile ? resumeFile.name : '',
        jobTitle: job.title
      };

      const res = await fetch(`${API_BASE}/api/jobs/${job.id}/apply`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        throw new Error('Failed to submit application. Make sure backend server is running.');
      }

      setSuccess(true);
    } catch (err: any) {
      setErrorMsg(err.message || 'Error submitting application');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-surface border border-glass-border rounded-3xl w-full max-w-lg overflow-hidden shadow-2xl p-6 sm:p-8 relative transition-colors duration-300">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute top-5 right-5 text-on-surface-variant hover:text-primary p-1.5 rounded-full hover:bg-surface-container transition-colors"
        >
          <span className="material-symbols-outlined text-[24px]">close</span>
        </button>

        {success ? (
          <div className="py-8 text-center flex flex-col items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary border border-glass-border flex items-center justify-center shadow-inner">
              <span className="material-symbols-outlined text-[36px]">check_circle</span>
            </div>
            <h3 className="text-2xl font-extrabold text-on-surface">Application Submitted!</h3>
            <p className="text-sm text-on-surface-variant max-w-xs leading-relaxed">
              Thank you, <span className="text-primary font-bold">{applicantName}</span>. Our recruitment specialists for <span className="text-secondary font-bold">{job.title}</span> will review your profile shortly.
            </p>
            <button
              onClick={onClose}
              className="mt-4 bg-primary hover:bg-primary-fixed-dim text-on-primary font-bold px-8 py-3 rounded-xl transition-all shadow-md"
            >
              Done
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-glass-border text-primary text-xs font-bold uppercase tracking-wider mb-2">
                <span className="material-symbols-outlined text-[16px]">work</span>
                <span>Direct Application</span>
              </div>
              <h3 className="text-2xl font-extrabold text-on-surface">{job.title}</h3>
              <p className="text-xs text-on-surface-variant mt-1 font-medium">{job.department} • {job.location}</p>
            </div>

            {errorMsg && (
              <div className="mb-4 p-3.5 bg-tertiary/10 border border-tertiary/30 text-tertiary text-xs rounded-xl flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px]">error</span>
                <span>{errorMsg}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label className="block text-xs font-bold text-on-surface-variant mb-1.5">Full Name *</label>
                <input
                  type="text"
                  required
                  value={applicantName}
                  onChange={(e) => setApplicantName(e.target.value)}
                  placeholder="e.g. Rahul Sharma"
                  className="w-full bg-surface-container border border-glass-border rounded-xl px-4 py-2.5 text-sm text-on-surface focus:outline-none focus:border-primary transition-all"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-on-surface-variant mb-1.5">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="rahul@example.com"
                    className="w-full bg-surface-container border border-glass-border rounded-xl px-4 py-2.5 text-sm text-on-surface focus:outline-none focus:border-primary transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-on-surface-variant mb-1.5">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98765 43210"
                    className="w-full bg-surface-container border border-glass-border rounded-xl px-4 py-2.5 text-sm text-on-surface focus:outline-none focus:border-primary transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-on-surface-variant mb-1.5">Total Experience (Years) *</label>
                <input
                  type="text"
                  required
                  value={experience}
                  onChange={(e) => setExperience(e.target.value)}
                  placeholder="e.g. 5 Years"
                  className="w-full bg-surface-container border border-glass-border rounded-xl px-4 py-2.5 text-sm text-on-surface focus:outline-none focus:border-primary transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-on-surface-variant mb-1.5">Upload Resume (PDF/Doc)</label>
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={(e) => e.target.files && setResumeFile(e.target.files[0])}
                  className="w-full text-xs text-on-surface-variant file:mr-3 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-bold file:bg-primary file:text-on-primary hover:file:opacity-90 file:cursor-pointer cursor-pointer"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-on-surface-variant mb-1.5">Cover Note / Key Highlights</label>
                <textarea
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Briefly state your core expertise..."
                  className="w-full bg-surface-container border border-glass-border rounded-xl px-4 py-2.5 text-sm text-on-surface focus:outline-none focus:border-primary transition-all"
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="mt-2 bg-primary hover:bg-primary-fixed-dim text-on-primary font-bold py-3.5 rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 disabled:opacity-50 hover:scale-[1.01] active:scale-[0.99]"
              >
                {submitting ? (
                  <span>Submitting Application...</span>
                ) : (
                  <>
                    <span>Submit Application</span>
                    <span className="material-symbols-outlined text-[18px]">send</span>
                  </>
                )}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
