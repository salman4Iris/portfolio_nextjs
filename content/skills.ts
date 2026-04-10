/**
 * SKILLS DATA
 * Salman Khan's technical and soft skills
 * ES6+ strict TypeScript with readonly properties
 */

import type { Skill } from '@/types';
import { SkillCategory, ProficiencyLevel } from '@/types';

export const SKILLS: readonly Skill[] = [
  // FRONTEND SKILLS
  {
    id: 'react',
    name: 'React',
    category: SkillCategory.FRONTEND,
    proficiency: ProficiencyLevel.EXPERT,
    yearsOfExperience: 7,
    relatedProjects: ['myglamm-mobile', 'popxo', 'rems', 'oneview'],
  },
  {
    id: 'nextjs',
    name: 'Next.js',
    category: SkillCategory.FRONTEND,
    proficiency: ProficiencyLevel.ADVANCED,
    yearsOfExperience: 5,
    relatedProjects: ['myglamm-mobile', 'popxo'],
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    category: SkillCategory.FRONTEND,
    proficiency: ProficiencyLevel.EXPERT,
    yearsOfExperience: 6,
  },
  {
    id: 'javascript',
    name: 'JavaScript (ES6+)',
    category: SkillCategory.FRONTEND,
    proficiency: ProficiencyLevel.EXPERT,
    yearsOfExperience: 9,
  },
  {
    id: 'angular',
    name: 'Angular',
    category: SkillCategory.FRONTEND,
    proficiency: ProficiencyLevel.ADVANCED,
    yearsOfExperience: 6,
    relatedProjects: ['linx-accountmaster', 'instrument-admin', 'lococcitane'],
  },
  {
    id: 'redux',
    name: 'Redux',
    category: SkillCategory.FRONTEND,
    proficiency: ProficiencyLevel.EXPERT,
    yearsOfExperience: 6,
    relatedProjects: ['rems', 'myglamm-mobile', 'popxo'],
  },
  {
    id: 'tailwindcss',
    name: 'Tailwind CSS',
    category: SkillCategory.FRONTEND,
    proficiency: ProficiencyLevel.ADVANCED,
    yearsOfExperience: 3,
  },
  {
    id: 'html5',
    name: 'HTML5',
    category: SkillCategory.FRONTEND,
    proficiency: ProficiencyLevel.EXPERT,
    yearsOfExperience: 9,
  },
  {
    id: 'css3',
    name: 'CSS3',
    category: SkillCategory.FRONTEND,
    proficiency: ProficiencyLevel.EXPERT,
    yearsOfExperience: 9,
  },
  {
    id: 'responsive-design',
    name: 'Responsive Design',
    category: SkillCategory.FRONTEND,
    proficiency: ProficiencyLevel.EXPERT,
    yearsOfExperience: 8,
  },
  {
    id: 'material-design',
    name: 'Material Design',
    category: SkillCategory.FRONTEND,
    proficiency: ProficiencyLevel.ADVANCED,
    yearsOfExperience: 5,
  },
  {
    id: 'ag-grid',
    name: 'AG Grid',
    category: SkillCategory.FRONTEND,
    proficiency: ProficiencyLevel.ADVANCED,
    yearsOfExperience: 4,
  },

  // BACKEND SKILLS
  {
    id: 'nodejs',
    name: 'Node.js',
    category: SkillCategory.BACKEND,
    proficiency: ProficiencyLevel.ADVANCED,
    yearsOfExperience: 5,
  },
  {
    id: 'java',
    name: 'Java',
    category: SkillCategory.BACKEND,
    proficiency: ProficiencyLevel.ADVANCED,
    yearsOfExperience: 4,
  },
  {
    id: 'expressjs',
    name: 'Express.js',
    category: SkillCategory.BACKEND,
    proficiency: ProficiencyLevel.ADVANCED,
    yearsOfExperience: 4,
  },
  {
    id: 'rest-api',
    name: 'REST API Design',
    category: SkillCategory.BACKEND,
    proficiency: ProficiencyLevel.EXPERT,
    yearsOfExperience: 7,
  },

  // DATABASE SKILLS
  {
    id: 'mongodb',
    name: 'MongoDB',
    category: SkillCategory.DATABASES,
    proficiency: ProficiencyLevel.ADVANCED,
    yearsOfExperience: 5,
  },
  {
    id: 'sql',
    name: 'SQL',
    category: SkillCategory.DATABASES,
    proficiency: ProficiencyLevel.EXPERT,
    yearsOfExperience: 8,
  },
  {
    id: 'oracle',
    name: 'Oracle SQL',
    category: SkillCategory.DATABASES,
    proficiency: ProficiencyLevel.ADVANCED,
    yearsOfExperience: 5,
  },

  // DEVOPS SKILLS
  {
    id: 'docker',
    name: 'Docker',
    category: SkillCategory.DEVOPS,
    proficiency: ProficiencyLevel.INTERMEDIATE,
    yearsOfExperience: 3,
  },
  {
    id: 'cicd',
    name: 'CI/CD Pipelines',
    category: SkillCategory.DEVOPS,
    proficiency: ProficiencyLevel.ADVANCED,
    yearsOfExperience: 4,
  },
  {
    id: 'git',
    name: 'Git & GitHub',
    category: SkillCategory.DEVOPS,
    proficiency: ProficiencyLevel.EXPERT,
    yearsOfExperience: 9,
  },
  {
    id: 'aws',
    name: 'AWS',
    category: SkillCategory.DEVOPS,
    proficiency: ProficiencyLevel.INTERMEDIATE,
    yearsOfExperience: 3,
  },

  // TOOLS & OTHERS
  {
    id: 'jest',
    name: 'Jest Testing',
    category: SkillCategory.TOOLS,
    proficiency: ProficiencyLevel.ADVANCED,
    yearsOfExperience: 5,
  },
  {
    id: 'tdd',
    name: 'Test-Driven Development',
    category: SkillCategory.TOOLS,
    proficiency: ProficiencyLevel.ADVANCED,
    yearsOfExperience: 5,
  },
  {
    id: 'seo',
    name: 'SEO Optimization',
    category: SkillCategory.TOOLS,
    proficiency: ProficiencyLevel.ADVANCED,
    yearsOfExperience: 4,
  },
  {
    id: 'github-copilot',
    name: 'GitHub Copilot',
    category: SkillCategory.TOOLS,
    proficiency: ProficiencyLevel.EXPERT,
    yearsOfExperience: 2,
  },

  // SOFT SKILLS
  {
    id: 'leadership',
    name: 'Team Leadership',
    category: SkillCategory.SOFT_SKILLS,
    proficiency: ProficiencyLevel.ADVANCED,
    yearsOfExperience: 4,
  },
  {
    id: 'mentoring',
    name: 'Mentoring & Coaching',
    category: SkillCategory.SOFT_SKILLS,
    proficiency: ProficiencyLevel.ADVANCED,
    yearsOfExperience: 5,
  },
  {
    id: 'agile',
    name: 'Agile Methodologies',
    category: SkillCategory.SOFT_SKILLS,
    proficiency: ProficiencyLevel.EXPERT,
    yearsOfExperience: 8,
  },
  {
    id: 'communication',
    name: 'Communication',
    category: SkillCategory.SOFT_SKILLS,
    proficiency: ProficiencyLevel.ADVANCED,
    yearsOfExperience: 9,
  },
  {
    id: 'problem-solving',
    name: 'Problem Solving',
    category: SkillCategory.SOFT_SKILLS,
    proficiency: ProficiencyLevel.EXPERT,
    yearsOfExperience: 9,
  },
  {
    id: 'client-management',
    name: 'Client Management',
    category: SkillCategory.SOFT_SKILLS,
    proficiency: ProficiencyLevel.ADVANCED,
    yearsOfExperience: 6,
  },
];

/**
 * GET SKILLS BY CATEGORY
 * Retrieves all skills in a specific category
 * @param category - Skill category to filter
 * @returns Array of skills in that category
 */
export const getSkillsByCategory = (category: SkillCategory): readonly Skill[] => {
  return SKILLS.filter((skill: Skill): boolean => skill.category === category);
};

/**
 * GET EXPERT SKILLS
 * Returns only expert-level skills
 * @returns Array of expert skills
 */
export const getExpertSkills = (): readonly Skill[] => {
  return SKILLS.filter((skill: Skill): boolean => skill.proficiency === ProficiencyLevel.EXPERT);
};

/**
 * GET SKILLS BY PROFICIENCY
 * Filters skills by proficiency level
 * @param proficiency - Proficiency level to filter
 * @returns Array of skills at that proficiency level
 */
export const getSkillsByProficiency = (proficiency: ProficiencyLevel): readonly Skill[] => {
  return SKILLS.filter((skill: Skill): boolean => skill.proficiency === proficiency);
};

/**
 * SORT SKILLS BY PROFICIENCY
 * Returns all skills sorted by proficiency level
 * @returns Sorted skills array
 */
export const sortSkillsByProficiency = (): readonly Skill[] => {
  const proficiencyOrder: Record<ProficiencyLevel, number> = {
    [ProficiencyLevel.EXPERT]: 0,
    [ProficiencyLevel.ADVANCED]: 1,
    [ProficiencyLevel.INTERMEDIATE]: 2,
    [ProficiencyLevel.BEGINNER]: 3,
  };

  const sorted: Skill[] = [...SKILLS];
  return sorted.sort(
    (a: Skill, b: Skill): number =>
      proficiencyOrder[a.proficiency] - proficiencyOrder[b.proficiency]
  );
};
