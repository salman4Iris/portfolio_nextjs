/**
 * CONTACT PAGE
 * Contact form and information
 * ES6+ TypeScript
 */

'use client';

import React, { FormEvent, ChangeEvent, useState } from 'react';
import SectionWrapper from '@/components/SectionWrapper';
import { SITE_METADATA } from '@/content/site-config';
import type { ContactFormData } from '@/types';

export default function ContactPage(): JSX.Element {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
    phone: '',
  });

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = event.target;
    setFormData(
      (prev: ContactFormData): ContactFormData => ({
        ...prev,
        [name]: value,
      })
    );
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      // TODO: Replace with your email service (Resend, EmailJS, etc.)
      console.log('Form submitted:', formData);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        phone: '',
      });

      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    } catch {
      setSubmitStatus('error');
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full">
      {/* HEADER */}
      <SectionWrapper className="pt-14 pb-6 sm:pt-20 sm:pb-8">
        <div className="mb-12">
          <h1 className="page-title mb-4">Get In Touch</h1>
          <p className="max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-400">
            Have a project in mind or want to discuss opportunities? I&apos;d love to hear from you.
            Feel free to reach out via the form or through the contact details below.
          </p>
        </div>
      </SectionWrapper>

      {/* CONTACT CONTENT */}
      <SectionWrapper className="bg-[var(--home-section)] pt-8 sm:pt-12">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* CONTACT INFORMATION */}
          <div className="space-y-8">
            <div>
              <h2 className="mb-6 text-2xl font-black tracking-tight text-slate-900 dark:text-white">
                Contact Information
              </h2>
              <p className="mb-8 leading-7 text-slate-600 dark:text-slate-400">
                Reach out through any of these channels, and I&apos;ll get back to you as soon as
                possible.
              </p>
            </div>

            {/* EMAIL */}
            <div className="surface-card">
              <h3 className="mb-2 font-bold text-slate-900 dark:text-white">Email</h3>
              <a
                href={`mailto:${SITE_METADATA.email}`}
                className="break-all font-medium text-cyan-700 hover:text-violet-700 dark:text-cyan-300 dark:hover:text-violet-300"
              >
                {SITE_METADATA.email}
              </a>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                I respond to emails within 24 hours
              </p>
            </div>

            {/* PHONE */}
            <div className="surface-card">
              <h3 className="mb-2 font-bold text-slate-900 dark:text-white">Phone</h3>
              <a
                href={`tel:${SITE_METADATA.phone}`}
                className="font-medium text-cyan-700 hover:text-violet-700 dark:text-cyan-300 dark:hover:text-violet-300"
              >
                {SITE_METADATA.phone}
              </a>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                Available for calls during business hours (IST)
              </p>
            </div>

            {/* LOCATION */}
            <div className="surface-card">
              <h3 className="mb-2 font-bold text-slate-900 dark:text-white">Location</h3>
              <p className="text-slate-600 dark:text-slate-400">{SITE_METADATA.location}</p>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                Timezone: {SITE_METADATA.timezone}
              </p>
            </div>

            {/* SOCIAL LINKS */}
            <div className="surface-card">
              <h3 className="mb-4 font-bold text-slate-900 dark:text-white">Connect</h3>
              <div className="flex flex-wrap gap-3">
                {SITE_METADATA.socialLinks.linkedin && (
                  <a
                    href={SITE_METADATA.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-cyan-800 transition-colors hover:bg-cyan-100 dark:border-cyan-300/20 dark:bg-cyan-400/10 dark:text-cyan-200 dark:hover:bg-cyan-400/20"
                  >
                    LinkedIn
                  </a>
                )}
                {SITE_METADATA.socialLinks.github && (
                  <a
                    href={SITE_METADATA.socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center gap-2 rounded-full border border-[var(--home-border)] bg-white/60 px-4 py-2 text-slate-800 transition-colors hover:bg-white dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
                  >
                    GitHub
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* CONTACT FORM */}
          <div>
            <div className="surface-card p-5 sm:p-8">
              <h2 className="mb-6 text-2xl font-black tracking-tight text-slate-900 dark:text-white">
                Send a Message
              </h2>

              {submitStatus === 'success' && (
                <div className="mb-6 rounded-2xl border border-green-200 bg-green-50 p-4 text-green-800 dark:border-green-400/20 dark:bg-green-400/10 dark:text-green-200">
                  ✓ Message sent successfully! I&apos;ll respond soon.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 rounded-2xl border border-red-200 bg-red-50 p-4 text-red-800 dark:border-red-400/20 dark:bg-red-400/10 dark:text-red-200">
                  ✗ Error sending message. Please try again or contact me directly.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* NAME */}
                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-800 dark:text-slate-200">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-[var(--home-border)] bg-white/75 px-4 py-3 text-slate-900 placeholder-slate-500 transition-shadow focus:border-cyan-500 focus:outline-none focus:ring-4 focus:ring-cyan-500/15 dark:bg-white/5 dark:text-white dark:placeholder-slate-400"
                    placeholder="Your name"
                  />
                </div>

                {/* EMAIL */}
                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-800 dark:text-slate-200">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-[var(--home-border)] bg-white/75 px-4 py-3 text-slate-900 placeholder-slate-500 transition-shadow focus:border-cyan-500 focus:outline-none focus:ring-4 focus:ring-cyan-500/15 dark:bg-white/5 dark:text-white dark:placeholder-slate-400"
                    placeholder="your@email.com"
                  />
                </div>

                {/* PHONE (Optional) */}
                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-800 dark:text-slate-200">
                    Phone (Optional)
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-[var(--home-border)] bg-white/75 px-4 py-3 text-slate-900 placeholder-slate-500 transition-shadow focus:border-cyan-500 focus:outline-none focus:ring-4 focus:ring-cyan-500/15 dark:bg-white/5 dark:text-white dark:placeholder-slate-400"
                    placeholder="+91 (optional)"
                  />
                </div>

                {/* SUBJECT */}
                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-800 dark:text-slate-200">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-[var(--home-border)] bg-white/75 px-4 py-3 text-slate-900 placeholder-slate-500 transition-shadow focus:border-cyan-500 focus:outline-none focus:ring-4 focus:ring-cyan-500/15 dark:bg-white/5 dark:text-white dark:placeholder-slate-400"
                    placeholder="Subject of your message"
                  />
                </div>

                {/* MESSAGE */}
                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-800 dark:text-slate-200">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full rounded-xl border border-[var(--home-border)] bg-white/75 px-4 py-3 text-slate-900 placeholder-slate-500 transition-shadow focus:border-cyan-500 focus:outline-none focus:ring-4 focus:ring-cyan-500/15 dark:bg-white/5 dark:text-white dark:placeholder-slate-400"
                    placeholder="Your message..."
                  />
                </div>

                {/* SUBMIT BUTTON */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-full bg-gradient-to-r from-cyan-600 to-violet-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-violet-600/15 transition-all hover:-translate-y-0.5 hover:shadow-xl disabled:opacity-50"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
