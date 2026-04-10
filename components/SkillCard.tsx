/**
 * SKILL CARD COMPONENT
 * Individual skill display card
 * ES6+ TypeScript React component
 */

import { cn } from '@/lib/utils';
import type { Skill, ProficiencyLevel } from '@/types';

interface SkillCardProps {
  readonly skill: Skill;
}

/**
 * GET PROFICIENCY COLOR
 * Returns color based on proficiency level
 * @param proficiency - Proficiency level
 * @returns Color class name
 */
const getProficiencyColor = (proficiency: ProficiencyLevel): string => {
  const colorMap: Record<ProficiencyLevel, string> = {
    EXPERT: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
    ADVANCED: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
    INTERMEDIATE: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
    BEGINNER: 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200',
  };
  return colorMap[proficiency];
};

/**
 * SKILL CARD COMPONENT
 * Displays a skill with proficiency level
 * @param props - Component props containing skill data
 * @returns Skill card JSX element
 */
export const SkillCard = ({ skill }: SkillCardProps): JSX.Element => {
  const proficiencyMap: Record<string, number> = {
    BEGINNER: 25,
    INTERMEDIATE: 50,
    ADVANCED: 75,
    EXPERT: 100,
  };

  const proficiencyPercent: number = proficiencyMap[skill.proficiency] || 0;

  return (
    <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
      {/* HEADER */}
      <div className="mb-3 flex items-start justify-between">
        <div>
          <h4 className="font-semibold text-gray-900 dark:text-white">
            {skill.name}
          </h4>
          <p className="text-xs text-gray-500 dark:text-gray-500">
            {skill.yearsOfExperience} year{skill.yearsOfExperience > 1 ? 's' : ''} experience
          </p>
        </div>
      </div>

      {/* PROFICIENCY BADGE */}
      <div className="mb-3">
        <span
          className={cn(
            'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium',
            getProficiencyColor(skill.proficiency)
          )}
        >
          {skill.proficiency}
        </span>
      </div>

      {/* PROGRESS BAR */}
      <div className="h-2 w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
        <div
          className="h-full bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-300"
          style={{ width: `${proficiencyPercent}%` }}
        />
      </div>
    </div>
  );
};

export default SkillCard;
