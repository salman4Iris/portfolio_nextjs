/**
 * HERO COMPONENT
 * Main landing hero section with call-to-action
 * ES6+ TypeScript React component
 */

'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { SITE_METADATA, ABOUT_CONTENT } from '@/content/site-config';
import { calculateTotalExperienceYears } from '@/content/experience';
import { PROJECTS } from '@/content/projects';

/**
 * HERO COMPONENT
 * Displays main hero section with gradient background and CTA
 * @returns Hero section JSX element
 */
export const Hero = (): JSX.Element => {
  const totalYears: number = calculateTotalExperienceYears();
  const skillPills: readonly string[] = ['React', 'Next.js','Angular','TypeScript','Node.js','Tailwind CSS','Github Copilot','AI/ML','Generative AI','Figma','Micro-frontends','System Design'];

  return (
    <section className="relative isolate min-h-[calc(100vh-5rem)] w-full overflow-hidden bg-[var(--home-background)] px-4 py-16 text-slate-900 sm:px-6 sm:py-20 dark:text-white lg:px-8 lg:py-24">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_60%_28%,rgba(193,57,190,0.2),transparent_34%),radial-gradient(circle_at_72%_82%,rgba(0,180,255,0.16),transparent_30%)] dark:bg-[radial-gradient(circle_at_60%_28%,rgba(193,57,190,0.32),transparent_34%),radial-gradient(circle_at_72%_82%,rgba(0,180,255,0.22),transparent_30%)]" />
      <div className="absolute inset-0 -z-10 opacity-40 [background-image:radial-gradient(rgba(118,167,214,0.6)_1px,transparent_1px)] [background-size:96px_96px]" />

      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-8">
        <div className="relative z-10 order-2 lg:order-1">
          <p className="mb-3 text-xl font-medium text-slate-600 sm:text-2xl dark:text-slate-400">
            Hey there! I&apos;m
          </p>
          <h1 className="max-w-xl text-4xl font-black leading-[1.08] tracking-tight sm:text-7xl lg:text-8xl">
            Salman
            <br />
            <span className="bg-gradient-to-r from-slate-950 via-slate-700 to-blue-600 bg-clip-text text-transparent dark:from-white dark:via-slate-100 dark:to-cyan-300">
              Khan.
            </span>
          </h1>

          <p className="mt-6 text-xl font-bold text-slate-900 sm:mt-8 sm:text-3xl dark:text-slate-100">
            <span className="text-cyan-400">Senior Software Engineer</span>
          </p>
          <p className="mt-6 max-w-xl text-base leading-7 text-slate-600 sm:text-lg dark:text-slate-400">
            {ABOUT_CONTENT.bio}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {skillPills.map(
              (skill: string, index: number): JSX.Element => (
                <span
                  key={skill}
                  className={cn(
                    'rounded-full px-4 py-2 text-sm font-bold text-white shadow-lg',
                    index % 4 === 0 && 'bg-cyan-500',
                    index % 4 === 1 && 'bg-pink-500',
                    index % 4 === 2 && 'bg-amber-500',
                    index % 4 === 3 && 'bg-blue-600'
                  )}
                >
                  {skill}
                </span>
              )
            )}
          </div>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/projects"
              className={cn(
                'inline-flex items-center justify-center rounded-lg px-8 py-4 font-semibold',
                'bg-gradient-to-r from-cyan-500 to-pink-500 text-white transition-all duration-200',
                'hover:-translate-y-0.5 hover:shadow-lg hover:shadow-cyan-500/30'
              )}
            >
              View My Work
              <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Link>
            <Link
              href="/contact"
              className={cn(
                'inline-flex items-center justify-center rounded-lg px-8 py-4 font-semibold',
                'border border-slate-300 bg-white/60 text-slate-900 transition-all duration-200 dark:border-slate-600 dark:bg-slate-800/60 dark:text-white',
                'hover:-translate-y-0.5 hover:border-cyan-400 hover:bg-white dark:hover:bg-slate-800'
              )}
            >
              Let&apos;s Talk
              <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </Link>
          </div>
        </div>

        <div className="relative order-1 flex min-h-[15rem] flex-col items-center justify-center lg:order-2 lg:min-h-[38rem]">
          {SITE_METADATA.profileImage && (
            <div className="relative h-32 w-32 sm:h-56 sm:w-56 lg:h-[27rem] lg:w-[27rem]">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400 via-blue-500 to-pink-500 p-1 shadow-[0_0_80px_rgba(26,184,235,0.22)]">
                <div className="relative h-full w-full overflow-hidden rounded-full bg-slate-100">
                  <Image
                    src={SITE_METADATA.profileImage}
                    alt={SITE_METADATA.author}
                    fill
                    className="object-cover object-center"
                    priority
                    sizes="(max-width: 768px) 18rem, (max-width: 1024px) 24rem, 27rem"
                  />
                </div>
              </div>
            </div>
          )}

          <div className="mt-5 hidden w-fit rounded-xl border border-slate-200 bg-white/95 p-5 shadow-2xl backdrop-blur dark:border-white/10 dark:bg-[#172235]/95 sm:block">
            <div className="mb-3 flex gap-2">
              <span className="h-3 w-3 rounded-full bg-red-500" />
              <span className="h-3 w-3 rounded-full bg-amber-400" />
              <span className="h-3 w-3 rounded-full bg-green-500" />
            </div>
            <code className="block text-xs leading-6 text-cyan-300">
              <span className="text-pink-400">const</span> developer = {'{'}
              <br />
              &nbsp;&nbsp;name: <span className="text-amber-300">&apos;Salman&apos;</span>,
              <br />
              &nbsp;&nbsp;skills: <span className="text-amber-300">&apos;React + AI&apos;</span>,
              <br />
              &nbsp;&nbsp;passion: <span className="text-pink-400">true</span>
              <br />
              {'}'};
            </code>
          </div>

          <div className="mt-5 flex w-full max-w-xs justify-center gap-3">
            <div className="flex-1 rounded-xl border border-slate-200 bg-white/95 px-4 py-3 shadow-2xl backdrop-blur dark:border-white/10 dark:bg-[#172235]/95">
              <div className="bg-gradient-to-r from-cyan-300 to-pink-400 bg-clip-text text-2xl font-black text-transparent sm:text-3xl">
                {PROJECTS.length}+
              </div>
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">Projects</p>
            </div>

            <div className="flex-1 rounded-xl border border-slate-200 bg-white/95 px-4 py-3 shadow-2xl backdrop-blur dark:border-white/10 dark:bg-[#172235]/95">
              <div className="bg-gradient-to-r from-pink-400 to-amber-300 bg-clip-text text-2xl font-black text-transparent sm:text-3xl">
                {totalYears}+
              </div>
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">Years experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
