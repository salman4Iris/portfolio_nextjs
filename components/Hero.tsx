/**
 * HERO COMPONENT
 * Main landing hero section with call-to-action
 * ES6+ TypeScript React component
 */

'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { SITE_METADATA } from '@/content/site-config';
import { calculateTotalExperienceYears } from '@/content/experience';
import { PROJECTS } from '@/content/projects';

const HERO_ROLES: readonly string[] = [
  'Web Developer',
  'Problem Solver',
  'UI/UX Designer',
  'Creative Coder',
  'Tech Enthusiast',
];

/**
 * HERO COMPONENT
 * Displays main hero section with gradient background and CTA
 * @returns Hero section JSX element
 */
export const Hero = (): JSX.Element => {
  const totalYears: number = calculateTotalExperienceYears();
  const [roleIndex, setRoleIndex] = useState<number>(0);
  const [visibleRoleLength, setVisibleRoleLength] = useState<number>(0);
  const [isDeletingRole, setIsDeletingRole] = useState<boolean>(false);
  const skillPills: readonly string[] = [
    'React',
    'Next.js',
    'Angular',
    'TypeScript',
    'Node.js',
    'Micro-frontends',
    'AI/ML',
    'Generative AI',
    'React Flow',
    'AG Grid',
    'Tailwind CSS',
    'System Design',
  ];
  const heroBio: JSX.Element = (
    <>
      Senior Software Engineer with a strong track record of designing robust frontend architectures
      and agentic AI interfaces. Over 9+ years, I&apos;ve architected enterprise-grade applications
      for global leaders (including ETS and MarketAxess) leveraging{' '}
      <strong>React, Next.js, Angular, TypeScript, React Flow, and AG Grid</strong>. Experienced in
      delivering micro-frontend systems, node-based LLM orchestrations, and scalable UI platforms
      that bridge complex backends with intuitive user experiences.
    </>
  );

  useEffect((): (() => void) => {
    const currentRole: string = HERO_ROLES[roleIndex];
    const hasFinishedTyping: boolean = visibleRoleLength === currentRole.length;
    const hasFinishedDeleting: boolean = visibleRoleLength === 0;
    const delay: number = hasFinishedTyping && !isDeletingRole ? 1400 : isDeletingRole ? 55 : 100;
    const timeoutId: ReturnType<typeof setTimeout> = setTimeout((): void => {
      if (hasFinishedTyping && !isDeletingRole) {
        setIsDeletingRole(true);
        return;
      }

      if (hasFinishedDeleting && isDeletingRole) {
        setIsDeletingRole(false);
        setRoleIndex((currentIndex: number): number => (currentIndex + 1) % HERO_ROLES.length);
        return;
      }

      setVisibleRoleLength(
        (currentLength: number): number => currentLength + (isDeletingRole ? -1 : 1)
      );
    }, delay);

    return (): void => clearTimeout(timeoutId);
  }, [isDeletingRole, roleIndex, visibleRoleLength]);

  return (
    <section className="relative isolate min-h-[calc(100vh-4.75rem)] w-full overflow-hidden bg-[var(--home-background)] px-4 py-12 text-slate-900 sm:px-6 sm:py-16 dark:text-white lg:px-8 lg:py-20">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_60%_28%,rgba(193,57,190,0.17),transparent_34%),radial-gradient(circle_at_72%_82%,rgba(0,180,255,0.14),transparent_30%)] dark:bg-[radial-gradient(circle_at_60%_28%,rgba(193,57,190,0.25),transparent_34%),radial-gradient(circle_at_72%_82%,rgba(0,180,255,0.18),transparent_30%)]" />
      <div className="absolute inset-0 -z-10 opacity-35 [background-image:radial-gradient(rgba(118,137,198,0.55)_1px,transparent_1px)] [background-size:88px_88px]" />

      <div className="mx-auto grid max-w-7xl items-center gap-10 sm:gap-14 lg:grid-cols-2 lg:gap-12">
        <div className="relative z-10 order-2 lg:order-1">
          <p className="mb-3 text-lg font-medium text-slate-600 sm:text-2xl dark:text-slate-400">
            Hey there! I&apos;m
          </p>
          <h1 className="max-w-xl text-4xl font-black leading-[1.04] tracking-tight sm:text-6xl lg:text-7xl xl:text-8xl">
            Salman{' '}
            <span className="bg-gradient-to-r from-slate-950 via-indigo-800 to-cyan-700 bg-clip-text text-transparent dark:from-white dark:via-slate-100 dark:to-cyan-300">
              Khan.
            </span>
          </h1>

          <p className="mt-4 min-h-8 text-xl font-bold sm:text-2xl lg:text-3xl">
            <span className="sr-only">I am a Web Developer</span>
            <span aria-hidden="true">
              <span className="whitespace-nowrap">I am a </span>
              <span className="inline-block min-w-[16ch] bg-gradient-to-r from-cyan-600 to-violet-600 bg-clip-text text-transparent dark:from-cyan-300 dark:to-fuchsia-300">
                {HERO_ROLES[roleIndex].slice(0, visibleRoleLength)}
              </span>
              <span className="ml-0.5 inline-block animate-pulse text-cyan-600 dark:text-cyan-300 motion-reduce:animate-none">
                |
              </span>
            </span>
          </p>

          <p className="mt-6 max-w-xl text-base leading-7 text-slate-600 sm:text-lg dark:text-slate-400">
            {heroBio}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {skillPills.map(
              (skill: string, index: number): JSX.Element => (
                <span
                  key={skill}
                  className={cn(
                    'rounded-full border px-3 py-1.5 text-xs font-semibold shadow-sm sm:px-4 sm:py-2 sm:text-sm',
                    index % 4 === 0 &&
                      'border-cyan-200 bg-cyan-50 text-cyan-800 dark:border-cyan-300/20 dark:bg-cyan-400/10 dark:text-cyan-200',
                    index % 4 === 1 &&
                      'border-fuchsia-200 bg-fuchsia-50 text-fuchsia-800 dark:border-fuchsia-300/20 dark:bg-fuchsia-400/10 dark:text-fuchsia-200',
                    index % 4 === 2 &&
                      'border-amber-200 bg-amber-50 text-amber-800 dark:border-amber-300/20 dark:bg-amber-400/10 dark:text-amber-200',
                    index % 4 === 3 &&
                      'border-indigo-200 bg-indigo-50 text-indigo-800 dark:border-indigo-300/20 dark:bg-indigo-400/10 dark:text-indigo-200'
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
                'inline-flex min-h-12 items-center justify-center rounded-full px-7 py-3.5 font-semibold shadow-lg shadow-cyan-700/15',
                'bg-gradient-to-r from-cyan-600 to-violet-600 text-white transition-all duration-200',
                'hover:-translate-y-0.5 hover:shadow-xl hover:shadow-violet-500/25'
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
                'border border-[var(--home-border)] bg-white/65 text-slate-900 transition-all duration-200 dark:bg-white/5 dark:text-white',
                'hover:-translate-y-0.5 hover:border-cyan-400 hover:bg-white dark:hover:bg-white/10'
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

        <div className="relative order-1 flex min-h-[13rem] flex-col items-center justify-center sm:min-h-[18rem] lg:order-2 lg:min-h-[38rem]">
          {SITE_METADATA.profileImage && (
            <div className="relative h-32 w-32 sm:h-56 sm:w-56 lg:h-[23rem] lg:w-[23rem] xl:h-[27rem] xl:w-[27rem]">
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

          <div className="mt-5 hidden w-fit rounded-2xl border border-[var(--home-border)] bg-white/80 p-5 shadow-xl shadow-indigo-950/10 backdrop-blur dark:bg-[#151b30]/85 sm:block">
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

          <div className="mt-5 flex w-full max-w-sm justify-center gap-3">
            <div className="flex-1 rounded-2xl border border-[var(--home-border)] bg-white/85 px-4 py-4 shadow-xl shadow-indigo-950/10 backdrop-blur dark:bg-[#151b30]/85 sm:px-5">
              <div className="bg-gradient-to-r from-cyan-300 to-pink-400 bg-clip-text text-2xl font-black text-transparent sm:text-3xl">
                {PROJECTS.length}+
              </div>
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">Projects</p>
            </div>

            <div className="flex-1 rounded-2xl border border-[var(--home-border)] bg-white/85 px-4 py-4 shadow-xl shadow-indigo-950/10 backdrop-blur dark:bg-[#151b30]/85 sm:px-5">
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
