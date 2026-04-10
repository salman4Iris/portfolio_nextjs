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
    <div className="group rounded-lg border border-gray-200 bg-white p-6 transition-all duration-300 hover:border-blue-400 hover:shadow-lg dark:border-gray-800 dark:bg-gray-900 dark:hover:border-blue-600">
      {/* HEADER */}
      <div className="mb-4 flex items-start justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{project.title}</h3>
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
            {project.company} • {project.role}
          </p>
        </div>
        {project.featured && (
          <span className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-200">
            Featured
          </span>
        )}
      </div>

      {/* DESCRIPTION */}
      <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">{project.shortDescription}</p>

      {/* TECHNOLOGIES */}
      <div className="mb-6 flex flex-wrap gap-2">
        {project.technologies.slice(0, 4).map(
          (tech: string): JSX.Element => (
            <span
              key={tech}
              className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-300"
            >
              {tech}
            </span>
          )
        )}
        {project.technologies.length > 4 && (
          <span className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-300">
            +{project.technologies.length - 4} more
          </span>
        )}
      </div>

      {/* FOOTER */}
      <div className="flex items-center justify-between">
        <span className="text-xs text-gray-500 dark:text-gray-500">{project.duration}</span>
        <Link
          href={`/projects#${project.id}`}
          className={cn(
            'inline-flex items-center text-sm font-medium text-blue-600 transition-colors',
            'hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300'
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
