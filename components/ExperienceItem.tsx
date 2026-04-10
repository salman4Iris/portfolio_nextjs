/**
 * EXPERIENCE ITEM COMPONENT
 * Individual experience timeline item
 * ES6+ TypeScript React component
 */

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
export const ExperienceItem = ({
  experience,
}: ExperienceItemProps): JSX.Element => {
  const duration: string = calculateDuration(
    experience.startDate,
    experience.endDate
  );

  return (
    <div className="relative pb-12">
      {/* TIMELINE DOT */}
      <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-full border-4 border-white bg-gradient-to-br from-blue-500 to-purple-600 dark:border-gray-900">
        <svg
          className="h-6 w-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      </div>

      {/* CONTENT */}
      <div className="ml-0 space-y-4 md:ml-20">
        {/* HEADER */}
        <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {experience.position}
            </h3>
            <p className="text-base font-medium text-gray-600 dark:text-gray-400">
              {experience.company}
            </p>
          </div>
          <div className="flex flex-col items-start gap-1 md:items-end">
            <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-800 dark:bg-blue-900 dark:text-blue-200">
              {duration}
            </span>
            <p className="text-xs text-gray-500 dark:text-gray-500">
              {formatDate(experience.startDate, 'short')} -{' '}
              {experience.isCurrent ? 'Present' : formatDate(experience.endDate, 'short')}
            </p>
          </div>
        </div>

        {/* DESCRIPTION */}
        <p className="text-gray-600 dark:text-gray-400">
          {experience.description}
        </p>

        {/* KEY RESULTS */}
        {experience.keyResults.length > 0 && (
          <div>
            <h4 className="mb-2 font-semibold text-gray-900 dark:text-white">
              Key Results
            </h4>
            <ul className="space-y-1">
              {experience.keyResults.map((result: string, index: number): JSX.Element => (
                <li
                  key={index}
                  className="flex gap-2 text-sm text-gray-600 dark:text-gray-400"
                >
                  <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                  {result}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* TECHNOLOGIES */}
        {experience.technologies.length > 0 && (
          <div>
            <h4 className="mb-2 font-semibold text-gray-900 dark:text-white">
              Technologies
            </h4>
            <div className="flex flex-wrap gap-2">
              {experience.technologies.map(
                (tech: string): JSX.Element => (
                  <span
                    key={tech}
                    className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-300"
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
            <h4 className="mb-2 font-semibold text-gray-900 dark:text-white">
              Achievements
            </h4>
            <ul className="space-y-1">
              {experience.achievements
                .slice(0, 3)
                .map((achievement: string, index: number): JSX.Element => (
                  <li
                    key={index}
                    className="flex gap-2 text-sm text-gray-600 dark:text-gray-400"
                  >
                    <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-green-500 flex-shrink-0" />
                    {achievement}
                  </li>
                ))}
              {experience.achievements.length > 3 && (
                <li className="text-sm font-medium text-blue-600 dark:text-blue-400">
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
