/**
 * EXPERIENCE PAGE
 * Work experience timeline
 * ES6+ TypeScript
 */

import React from 'react';
import SectionWrapper from '@/components/SectionWrapper';
import ExperienceItem from '@/components/ExperienceItem';
import { getSortedExperiences, calculateTotalExperienceYears } from '@/content/experience';
import type { Experience } from '@/types';

export default function ExperiencePage(): JSX.Element {
  const experiences: readonly Experience[] = getSortedExperiences();
  const totalYears: number = calculateTotalExperienceYears();

  return (
    <div className="w-full">
      {/* HEADER */}
      <SectionWrapper className="pt-14 pb-6 sm:pt-20 sm:pb-8">
        <div className="mb-12">
          <h1 className="page-title mb-4">Experience</h1>
          <p className="max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-400">
            {totalYears}+ years of professional experience in full-stack web development, leading
            projects, and mentoring engineering teams.
          </p>
        </div>
      </SectionWrapper>

      {/* TIMELINE */}
      <SectionWrapper className="bg-[var(--home-section)] pt-8 sm:pt-12">
        <div className="relative max-w-4xl">
          {/* TIMELINE LINE */}
          <div className="absolute left-6 top-0 h-full w-0.5 -translate-x-1/2 bg-gradient-to-b from-cyan-500 via-violet-500 to-fuchsia-500" />

          {/* EXPERIENCES */}
          <div className="space-y-12">
            {experiences.map(
              (experience: Experience): JSX.Element => (
                <ExperienceItem key={experience.id} experience={experience} />
              )
            )}
          </div>

          {/* BOTTOM MARKER */}
          <div className="relative flex items-center justify-start pt-12">
            <div className="ml-4 h-4 w-4 rounded-full border-4 border-[var(--home-section)] bg-gradient-to-br from-cyan-400 to-violet-600" />
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
