/**
 * SKILL CARD COMPONENT
 * Individual skill display card
 * ES6+ TypeScript React component
 */

import React from 'react';
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
    EXPERT: 'bg-cyan-100 text-cyan-800 dark:bg-cyan-950 dark:text-cyan-200',
    ADVANCED: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-950 dark:text-indigo-200',
    INTERMEDIATE: 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-200',
    BEGINNER: 'bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-200',
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
    <div className="surface-card p-4 transition-transform hover:-translate-y-1 sm:p-5">
      {/* HEADER */}
      <div className="mb-3 flex items-start justify-between">
        <div>
          <h4 className="font-bold text-slate-900 dark:text-white">{skill.name}</h4>
          <p className="text-xs text-[var(--home-muted)]">
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
      <div className="h-2 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">
        <div
          className="h-full bg-gradient-to-r from-cyan-400 to-pink-500 transition-all duration-300"
          style={{ width: `${proficiencyPercent}%` }}
        />
      </div>
    </div>
  );
};

export default SkillCard;
