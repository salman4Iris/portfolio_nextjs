/**
 * PROJECT CARD COMPONENT
 * Individual project showcase card
 * ES6+ TypeScript React component
 */

import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import type { Project } from '@/types';

interface ProjectCardProps {
  readonly project: Project;
}

/**
 * PROJECT CARD COMPONENT
 * Displays a project with title, description, and technologies
 * @param props - Component props containing project data
 * @returns Project card JSX element
 */
export const ProjectCard = ({ project }: ProjectCardProps): JSX.Element => {
  return (
    <div className="surface-card group h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-950/10">
      {/* HEADER */}
      <div className="mb-4 flex items-start justify-between">
        <div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">{project.title}</h3>
          <p className="mt-1 text-sm text-[var(--home-muted)]">
            {project.company} • {project.role}
          </p>
        </div>
        {project.featured && (
          <span className="inline-flex items-center rounded-full bg-cyan-100 px-2.5 py-0.5 text-xs font-bold text-cyan-800 dark:bg-cyan-950 dark:text-cyan-200">
            Featured
          </span>
        )}
      </div>

      {/* DESCRIPTION */}
      <p className="mb-4 text-sm leading-6 text-[var(--home-muted)]">{project.shortDescription}</p>

      {/* TECHNOLOGIES */}
      <div className="mb-6 flex flex-wrap gap-2">
        {project.technologies.slice(0, 4).map(
          (tech: string): JSX.Element => (
            <span
              key={tech}
              className="inline-flex items-center rounded-full bg-[var(--home-surface-muted)] px-2.5 py-0.5 text-xs font-medium text-slate-600 dark:text-slate-300"
            >
              {tech}
            </span>
          )
        )}
        {project.technologies.length > 4 && (
          <span className="inline-flex items-center rounded-full bg-[var(--home-surface-muted)] px-2.5 py-0.5 text-xs font-medium text-slate-600 dark:text-slate-300">
            +{project.technologies.length - 4} more
          </span>
        )}
      </div>

      {/* FOOTER */}
      <div className="flex items-center justify-between">
        <span className="text-xs text-[var(--home-muted)]">{project.duration}</span>
        <Link
          href={`/projects#${project.id}`}
          className={cn(
            'inline-flex items-center text-sm font-bold text-cyan-600 transition-colors',
            'hover:text-pink-600 dark:text-cyan-400 dark:hover:text-pink-400'
          )}
        >
          View Details
          <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
