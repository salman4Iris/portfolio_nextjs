/**
 * EXPERIENCE PAGE
 * Work experience timeline
 * ES6+ TypeScript
 */

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
      <SectionWrapper className="py-12">
        <div className="mb-12">
          <h1 className="mb-4 text-5xl font-bold text-gray-900 dark:text-white md:text-6xl">
            Experience
          </h1>
          <p className="max-w-2xl text-lg text-gray-600 dark:text-gray-400">
            {totalYears}+ years of professional experience in full-stack web development,
            leading projects, and mentoring engineering teams.
          </p>
        </div>
      </SectionWrapper>

      {/* TIMELINE */}
      <SectionWrapper className="bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl">
          {/* TIMELINE LINE */}
          <div className="absolute left-6 top-0 h-full w-0.5 bg-gradient-to-b from-blue-500 to-purple-600 md:left-auto md:right-auto md:w-0.5" />

          {/* EXPERIENCES */}
          <div className="space-y-12">
            {experiences.map((experience: Experience): JSX.Element => (
              <ExperienceItem key={experience.id} experience={experience} />
            ))}
          </div>

          {/* BOTTOM MARKER */}
          <div className="relative flex items-center justify-center pt-12">
            <div className="h-4 w-4 rounded-full border-4 border-white bg-gradient-to-br from-green-400 to-green-600 dark:border-gray-900" />
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
