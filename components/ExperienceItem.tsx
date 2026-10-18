/**
 * EXPERIENCE ITEM COMPONENT
 * Individual experience timeline item
 * ES6+ TypeScript React component
 */

import React from 'react';
import { formatDate, calculateDuration } from '@/lib/utils';
import type { Experience } from '@/types';

interface ExperienceItemProps {
  readonly experience: Experience;
}

/**
 * EXPERIENCE ITEM COMPONENT
 * Displays a work experience entry with details
 * @param props - Component props containing experience data
 * @returns Experience item JSX element
 */
export const ExperienceItem = ({ experience }: ExperienceItemProps): JSX.Element => {
  const duration: string = calculateDuration(experience.startDate, experience.endDate);

  return (
    <div className="relative pb-12">
      {/* TIMELINE DOT */}
      <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-full border-4 border-[var(--home-background)] bg-gradient-to-br from-cyan-500 to-violet-600 shadow-lg shadow-violet-500/20">
        <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      </div>

      {/* CONTENT */}
      <div className="surface-card ml-0 space-y-5 pt-[4.5rem] md:ml-20 md:pt-6">
        {/* HEADER */}
        <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
          <div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              {experience.position}
            </h3>
            <p className="text-base font-medium text-[var(--home-muted)]">{experience.company}</p>
          </div>
          <div className="flex flex-col items-start gap-1 md:items-end">
            <span className="inline-flex items-center rounded-full bg-cyan-100 px-3 py-1 text-xs font-semibold text-cyan-800 dark:bg-cyan-950 dark:text-cyan-200">
              {duration}
            </span>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {formatDate(experience.startDate, 'short')} -{' '}
              {experience.isCurrent ? 'Present' : formatDate(experience.endDate, 'short')}
            </p>
          </div>
        </div>

        {/* DESCRIPTION */}
        <p className="text-[var(--home-muted)]">{experience.description}</p>

        {/* KEY RESULTS */}
        {experience.keyResults.length > 0 && (
          <div>
            <h4 className="mb-2 font-semibold text-slate-900 dark:text-white">Key Results</h4>
            <ul className="space-y-1">
              {experience.keyResults.map(
                (result: string, index: number): JSX.Element => (
                  <li key={index} className="flex gap-2 text-sm text-slate-600 dark:text-slate-400">
                    <span className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-500" />
                    {result}
                  </li>
                )
              )}
            </ul>
          </div>
        )}

        {/* TECHNOLOGIES */}
        {experience.technologies.length > 0 && (
          <div>
            <h4 className="mb-2 font-semibold text-slate-900 dark:text-white">Technologies</h4>
            <div className="flex flex-wrap gap-2">
              {experience.technologies.map(
                (tech: string): JSX.Element => (
                  <span
                    key={tech}
                    className="inline-flex items-center rounded-full bg-[var(--home-surface-muted)] px-3 py-1 text-xs font-medium text-slate-700 dark:text-slate-300"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>
          </div>
        )}

        {/* ACHIEVEMENTS */}
        {experience.achievements.length > 0 && (
          <div>
            <h4 className="mb-2 font-semibold text-slate-900 dark:text-white">Achievements</h4>
            <ul className="space-y-1">
              {experience.achievements.slice(0, 3).map(
                (achievement: string, index: number): JSX.Element => (
                  <li key={index} className="flex gap-2 text-sm text-slate-600 dark:text-slate-400">
                    <span className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-fuchsia-500" />
                    {achievement}
                  </li>
                )
              )}
              {experience.achievements.length > 3 && (
                <li className="text-sm font-medium text-cyan-700 dark:text-cyan-300">
                  +{experience.achievements.length - 3} more achievements
                </li>
              )}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExperienceItem;
