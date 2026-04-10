/**
 * CONTACT PAGE
 * Contact form and information
 * ES6+ TypeScript
 */

'use client';

import { FormEvent, ChangeEvent, useState } from 'react';
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

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = event.target;
    setFormData((prev: ContactFormData): ContactFormData => ({
      ...prev,
      [name]: value,
    }));
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
      <SectionWrapper className="py-12">
        <div className="mb-12">
          <h1 className="mb-4 text-5xl font-bold text-gray-900 dark:text-white md:text-6xl">
            Get In Touch
          </h1>
          <p className="max-w-2xl text-lg text-gray-600 dark:text-gray-400">
            Have a project in mind or want to discuss opportunities? I&apos;d love to hear
            from you. Feel free to reach out via the form or through the contact
            details below.
          </p>
        </div>
      </SectionWrapper>

      {/* CONTACT CONTENT */}
      <SectionWrapper className="bg-gray-50 dark:bg-gray-900 pb-20">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* CONTACT INFORMATION */}
          <div className="space-y-8">
            <div>
              <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
                Contact Information
              </h2>
              <p className="mb-8 text-gray-600 dark:text-gray-400">
                Reach out through any of these channels, and I&apos;ll get back to you as
                soon as possible.
              </p>
            </div>

            {/* EMAIL */}
            <div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
              <h3 className="mb-2 font-semibold text-gray-900 dark:text-white">
                Email
              </h3>
              <a
                href={`mailto:${SITE_METADATA.email}`}
                className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
              >
                {SITE_METADATA.email}
              </a>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                I respond to emails within 24 hours
              </p>
            </div>

            {/* PHONE */}
            <div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
              <h3 className="mb-2 font-semibold text-gray-900 dark:text-white">
                Phone
              </h3>
              <a
                href={`tel:${SITE_METADATA.phone}`}
                className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
              >
                {SITE_METADATA.phone}
              </a>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                Available for calls during business hours (IST)
              </p>
            </div>

            {/* LOCATION */}
            <div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
              <h3 className="mb-2 font-semibold text-gray-900 dark:text-white">
                Location
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {SITE_METADATA.location}
              </p>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                Timezone: {SITE_METADATA.timezone}
              </p>
            </div>

            {/* SOCIAL LINKS */}
            <div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
              <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">
                Connect
              </h3>
              <div className="flex gap-4">
                {SITE_METADATA.socialLinks.linkedin && (
                  <a
                    href={SITE_METADATA.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-blue-50 px-4 py-2 text-blue-600 hover:bg-blue-100 dark:bg-blue-950 dark:text-blue-400 dark:hover:bg-blue-900"
                  >
                    LinkedIn
                  </a>
                )}
                {SITE_METADATA.socialLinks.github && (
                  <a
                    href={SITE_METADATA.socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-gray-200 px-4 py-2 text-gray-900 hover:bg-gray-300 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
                  >
                    GitHub
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* CONTACT FORM */}
          <div>
            <div className="rounded-lg border border-gray-200 bg-white p-8 dark:border-gray-800 dark:bg-gray-900">
              <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
                Send a Message
              </h2>

              {submitStatus === 'success' && (
                <div className="mb-6 rounded-lg bg-green-50 p-4 text-green-800 dark:bg-green-950 dark:text-green-200">
                  ✓ Message sent successfully! I&apos;ll respond soon.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 rounded-lg bg-red-50 p-4 text-red-800 dark:bg-red-950 dark:text-red-200">
                  ✗ Error sending message. Please try again or contact me directly.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* NAME */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400"
                    placeholder="Your name"
                  />
                </div>

                {/* EMAIL */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400"
                    placeholder="your@email.com"
                  />
                </div>

                {/* PHONE (Optional) */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                    Phone (Optional)
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400"
                    placeholder="+91 (optional)"
                  />
                </div>

                {/* SUBJECT */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400"
                    placeholder="Subject of your message"
                  />
                </div>

                {/* MESSAGE */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400"
                    placeholder="Your message..."
                  />
                </div>

                {/* SUBMIT BUTTON */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 font-semibold text-white transition-all hover:shadow-lg disabled:opacity-50"
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
