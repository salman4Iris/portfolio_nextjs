/**
 * SKILLS PAGE
 * Technical and soft skills showcase
 * ES6+ TypeScript
 */

import React from 'react';
import SectionWrapper from '@/components/SectionWrapper';
import SkillCard from '@/components/SkillCard';
import { getSkillsByCategory, sortSkillsByProficiency } from '@/content/skills';
import { SkillCategory } from '@/types';
import type { Skill } from '@/types';

export default function SkillsPage(): JSX.Element {
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
      <SectionWrapper className="py-12">
        <div className="mb-12">
          <h1 className="mb-4 text-5xl font-bold text-gray-900 dark:text-white md:text-6xl">
            Skills
          </h1>
          <p className="max-w-2xl text-lg text-gray-600 dark:text-gray-400">
            A comprehensive overview of my technical expertise and soft skills, developed through 9+
            years of professional experience.
          </p>
        </div>
      </SectionWrapper>

      {/* ALL SKILLS VIEW */}
      <SectionWrapper className="bg-gradient-to-b from-blue-50 to-transparent dark:from-blue-950 dark:to-transparent">
        <div className="mb-12">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">All Skills</h2>
          <p className="mb-6 text-gray-600 dark:text-gray-400">Sorted by proficiency level</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {allSkillsSorted.map(
            (skill: Skill): JSX.Element => (
              <SkillCard key={skill.id} skill={skill} />
            )
          )}
        </div>
      </SectionWrapper>

      {/* CATEGORIZED VIEW */}
      <SectionWrapper className="bg-gray-50 dark:bg-gray-900">
        <div className="space-y-16">
          {Object.entries(skillsByCategory).map(([category, skills]): JSX.Element | null => {
            if ((skills as readonly Skill[]).length === 0) return null;
            return (
              <div key={category}>
                <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
                  {categoryNames[category as SkillCategory]}
                </h2>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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

      {/* SUMMARY */}
      <SectionWrapper className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
        <div className="rounded-lg bg-white/10 p-8 text-center backdrop-blur-sm">
          <h3 className="mb-4 text-2xl font-bold text-white">Always Learning & Growing</h3>
          <p className="mb-6 max-w-2xl mx-auto text-blue-100">
            I stay at the forefront of web development by continuously learning new technologies,
            following best practices, and contributing to the developer community through mentoring
            and knowledge sharing.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="rounded-lg bg-white/20 px-4 py-2">
              <p className="text-sm font-medium text-white">
                Latest Tech: Next.js 14+, React 19, TypeScript 5
              </p>
            </div>
            <div className="rounded-lg bg-white/20 px-4 py-2">
              <p className="text-sm font-medium text-white">Methodology: Agile, TDD, Clean Code</p>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
