/**
 * ABOUT PAGE
 * Portfolio about/profile page
 * ES6+ TypeScript
 */

import React from 'react';
import SectionWrapper from '@/components/SectionWrapper';
import { ABOUT_CONTENT } from '@/content/site-config';
import { calculateTotalExperienceYears } from '@/content/experience';
import { PROJECTS } from '@/content/projects';

export default function AboutPage(): JSX.Element {
  const totalYears: number = calculateTotalExperienceYears();

  return (
    <div className="w-full">
      {/* HERO */}
      <SectionWrapper className="pt-14 sm:pt-20">
        <div className="mb-12 space-y-4">
          <h1 className="page-title">About Me</h1>
          <p className="max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl dark:text-slate-400">
            {ABOUT_CONTENT.subtitle}
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-2">
          {/* BIO */}
          <div className="space-y-6">
            <p className="text-base leading-8 text-slate-600 sm:text-lg dark:text-slate-400">
              {ABOUT_CONTENT.bio}
            </p>

            <div className="space-y-3">
              <h3 className="font-bold text-slate-900 dark:text-white">Key Highlights</h3>
              <ul className="space-y-2">
                {ABOUT_CONTENT.highlights.map(
                  (highlight: string, index: number): JSX.Element => (
                    <li key={index} className="flex gap-3 text-slate-600 dark:text-slate-400">
                      <span className="mt-2 inline-block h-2 w-2 shrink-0 rounded-full bg-gradient-to-br from-cyan-500 to-violet-600" />
                      {highlight}
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>

          {/* STATS */}
          <div className="space-y-6">
            <div className="surface-card space-y-5 bg-gradient-to-br from-white/70 to-indigo-50/50 p-5 sm:p-8 dark:from-[#151b30] dark:to-[#1c1d39]">
              <div className="space-y-8">
                {/* EXPERIENCE YEARS */}
                <div>
                  <div className="rounded-2xl border border-[var(--home-border)] bg-white/70 p-5 dark:bg-white/5 sm:p-6">
                    <div className="text-4xl font-black text-cyan-700 dark:text-cyan-300">
                      {totalYears}+
                    </div>
                    <p className="mt-2 text-slate-600 dark:text-slate-400">
                      Years of Professional Experience
                    </p>
                  </div>
                </div>

                {/* PROJECTS */}
                <div>
                  <div className="rounded-2xl border border-[var(--home-border)] bg-white/70 p-5 dark:bg-white/5 sm:p-6">
                    <div className="text-4xl font-black text-fuchsia-700 dark:text-fuchsia-300">
                      {PROJECTS.length}
                    </div>
                    <p className="mt-2 text-slate-600 dark:text-slate-400">Resume Projects</p>
                  </div>
                </div>

                {/* TEAM */}
                <div>
                  <div className="rounded-2xl border border-[var(--home-border)] bg-white/70 p-5 dark:bg-white/5 sm:p-6">
                    <div className="text-4xl font-black text-violet-700 dark:text-violet-300">
                      Yes
                    </div>
                    <p className="mt-2 text-slate-600 dark:text-slate-400">Developer mentoring</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* EXPERTISE SECTION */}
      <SectionWrapper className="bg-[var(--home-section)]">
        <div className="mb-12">
          <h2 className="mb-4 text-3xl font-black tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Areas of Expertise
          </h2>
          <p className="max-w-2xl leading-7 text-slate-600 dark:text-slate-400">
            Specializing in frontend architecture, agentic AI interfaces, enterprise platforms, and
            full-stack web development across multiple domains.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: 'Frontend Development',
              description:
                'React, Next.js, TypeScript, React Flow, Angular, and modern UI frameworks',
              icon: '🎨',
            },
            {
              title: 'Backend Development',
              description: 'Node.js, Express, Python tooling, Java, REST APIs, and databases',
              icon: '⚙️',
            },
            {
              title: 'System Architecture',
              description: 'Micro-frontends, SSR, Web Vitals, performance optimization, and CI/CD',
              icon: '🏗️',
            },
            {
              title: 'Team Leadership',
              description: 'Technical mentoring, agile methodologies, project management',
              icon: '👥',
            },
            {
              title: 'Agentic AI Interfaces',
              description:
                'AgentStudio, MCP workflows, conversational UI, and AI response rendering',
              icon: '🤖',
            },
            {
              title: 'Trading Systems',
              description: 'Financial platforms, regulatory compliance, real-time data processing',
              icon: '📈',
            },
            {
              title: 'E-Commerce',
              description: 'Payment integration, checkout optimization, analytics integration',
              icon: '🛒',
            },
          ].map((item, index) => (
            <div key={index} className="surface-card">
              <div className="mb-4 text-4xl">{item.icon}</div>
              <h3 className="mb-2 font-bold text-slate-900 dark:text-white">{item.title}</h3>
              <p className="text-sm leading-6 text-slate-600 dark:text-slate-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </SectionWrapper>
    </div>
  );
}
