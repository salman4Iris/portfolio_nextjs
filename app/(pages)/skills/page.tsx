/**
 * SKILLS PAGE
 * Technical and soft skills showcase
 * ES6+ TypeScript
 */

import React from 'react';
import SectionWrapper from '@/components/SectionWrapper';
import SkillCard from '@/components/SkillCard';
import { getAllCertifications } from '@/content/certifications';
import { getSkillsByCategory, sortSkillsByProficiency } from '@/content/skills';
import { SkillCategory } from '@/types';
import type { Certification, Skill } from '@/types';

export default function SkillsPage(): JSX.Element {
  const certifications: readonly Certification[] = getAllCertifications();
  const skillsByCategory: Record<SkillCategory, readonly Skill[]> = {
    [SkillCategory.FRONTEND]: getSkillsByCategory(SkillCategory.FRONTEND),
    [SkillCategory.BACKEND]: getSkillsByCategory(SkillCategory.BACKEND),
    [SkillCategory.DATABASES]: getSkillsByCategory(SkillCategory.DATABASES),
    [SkillCategory.DEVOPS]: getSkillsByCategory(SkillCategory.DEVOPS),
    [SkillCategory.TOOLS]: getSkillsByCategory(SkillCategory.TOOLS),
    [SkillCategory.SOFT_SKILLS]: getSkillsByCategory(SkillCategory.SOFT_SKILLS),
  };

  const allSkillsSorted: readonly Skill[] = sortSkillsByProficiency();

  const categoryNames: Record<SkillCategory, string> = {
    [SkillCategory.FRONTEND]: 'Frontend Development',
    [SkillCategory.BACKEND]: 'Backend Development',
    [SkillCategory.DATABASES]: 'Databases',
    [SkillCategory.DEVOPS]: 'DevOps & Tools',
    [SkillCategory.TOOLS]: 'Tools & Technologies',
    [SkillCategory.SOFT_SKILLS]: 'Soft Skills',
  };

  return (
    <div className="w-full">
      {/* HEADER */}
      <SectionWrapper className="pt-14 pb-6 sm:pt-20 sm:pb-8">
        <div className="mb-12">
          <h1 className="page-title mb-4">Skills</h1>
          <p className="max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-400">
            A practical overview of my frontend architecture, AI interface, full-stack, and
            engineering skills developed through 9+ years of professional experience.
          </p>
        </div>
      </SectionWrapper>

      {/* ALL SKILLS VIEW */}
      <SectionWrapper className="bg-[var(--home-section)] pt-8 sm:pt-12">
        <div className="mb-12">
          <h2 className="mb-4 text-3xl font-black tracking-tight text-slate-900 dark:text-white">
            All Skills
          </h2>
          <p className="mb-6 text-slate-600 dark:text-slate-400">Sorted by proficiency level</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {allSkillsSorted.map(
            (skill: Skill): JSX.Element => (
              <SkillCard key={skill.id} skill={skill} />
            )
          )}
        </div>
      </SectionWrapper>

      {/* CATEGORIZED VIEW */}
      <SectionWrapper className="bg-[var(--home-background)]">
        <div className="space-y-16">
          {Object.entries(skillsByCategory).map(([category, skills]): JSX.Element | null => {
            if ((skills as readonly Skill[]).length === 0) return null;
            return (
              <div key={category}>
                <h2 className="mb-6 text-2xl font-black tracking-tight text-slate-900 dark:text-white">
                  {categoryNames[category as SkillCategory]}
                </h2>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {(skills as readonly Skill[]).map(
                    (skill: Skill): JSX.Element => (
                      <SkillCard key={skill.id} skill={skill} />
                    )
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </SectionWrapper>

      {/* CERTIFICATIONS */}
      <SectionWrapper className="bg-[var(--home-section)]">
        <div className="mb-10">
          <p className="eyebrow mb-3">Learning &amp; credentials</p>
          <h2 className="mb-4 text-3xl font-black tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Certifications
          </h2>
          <p className="max-w-2xl leading-7 text-slate-600 dark:text-slate-400">
            Professional courses and academic credentials, with verification links where available.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((certification: Certification): JSX.Element => {
            const issueDate: string = new Intl.DateTimeFormat('en', {
              month: 'short',
              year: 'numeric',
            }).format(new Date(`${certification.issueDate.slice(0, 7)}-01T12:00:00`));

            return (
              <article key={certification.id} className="surface-card flex h-full flex-col p-5">
                <div className="mb-4">
                  <p className="text-xs font-bold tracking-wide text-cyan-700 uppercase dark:text-cyan-300">
                    {certification.issuer}
                  </p>
                  <h3 className="mt-2 text-lg font-bold text-slate-900 dark:text-white">
                    {certification.title}
                  </h3>
                </div>

                <div className="mt-auto space-y-3">
                  <p className="text-sm text-slate-600 dark:text-slate-400">Issued {issueDate}</p>
                  {certification.credentialId && (
                    <p className="break-all text-xs text-slate-500 dark:text-slate-400">
                      Credential ID: {certification.credentialId}
                    </p>
                  )}
                  {certification.credentialUrl && (
                    <a
                      href={certification.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex font-bold text-cyan-700 transition-colors hover:text-pink-600 dark:text-cyan-300 dark:hover:text-pink-400"
                    >
                      View credential{' '}
                      <span className="ml-1" aria-hidden="true">
                        ↗
                      </span>
                    </a>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </SectionWrapper>

      {/* SUMMARY */}
      <SectionWrapper className="bg-gradient-to-br from-cyan-600 via-indigo-600 to-fuchsia-600">
        <div className="rounded-3xl border border-white/20 bg-white/10 p-6 text-center shadow-xl shadow-indigo-950/10 backdrop-blur-sm sm:p-10">
          <h3 className="mb-4 text-2xl font-black text-white">Always Learning & Growing</h3>
          <p className="mx-auto mb-6 max-w-2xl leading-7 text-indigo-50">
            I stay at the forefront of web development by continuously learning new technologies,
            following best practices, and contributing to the developer community through mentoring
            and knowledge sharing.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="rounded-full border border-white/20 bg-white/15 px-4 py-2">
              <p className="text-sm font-medium text-white">
                Current Focus: AgentStudio, MCP, React Flow, Next.js, Python
              </p>
            </div>
            <div className="rounded-full border border-white/20 bg-white/15 px-4 py-2">
              <p className="text-sm font-medium text-white">Methodology: Agile, TDD, Clean Code</p>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
