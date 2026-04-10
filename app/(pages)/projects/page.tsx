/**
 * PROJECTS PAGE
 * Portfolio projects showcase with filtering
 * ES6+ TypeScript
 */

'use client';

import React, { useState, useMemo } from 'react';
import SectionWrapper from '@/components/SectionWrapper';
import ProjectCard from '@/components/ProjectCard';
import { PROJECTS } from '@/content/projects';
import type { Project } from '@/types';

export default function ProjectsPage(): JSX.Element {
  const [selectedTech, setSelectedTech] = useState<string | null>(null);

  // GET ALL UNIQUE TECHNOLOGIES
  const allTechnologies: string[] = useMemo(() => {
    const techSet: Set<string> = new Set();
    PROJECTS.forEach((project: Project): void => {
      project.technologies.forEach((tech: string): void => {
        techSet.add(tech);
      });
    });
    return Array.from(techSet).sort();
  }, []);

  // FILTER PROJECTS
  const filteredProjects: readonly Project[] = useMemo(() => {
    if (!selectedTech) return PROJECTS;
    return PROJECTS.filter((project: Project): boolean =>
      project.technologies.includes(selectedTech)
    );
  }, [selectedTech]);

  return (
    <div className="w-full">
      {/* HEADER */}
      <SectionWrapper className="py-12">
        <div className="mb-12">
          <h1 className="mb-4 text-5xl font-bold text-gray-900 dark:text-white md:text-6xl">
            Projects
          </h1>
          <p className="max-w-2xl text-lg text-gray-600 dark:text-gray-400">
            A comprehensive collection of projects I&apos;ve led and contributed to, showcasing
            expertise across different domains and technologies.
          </p>
        </div>

        {/* FILTER BUTTONS */}
        <div>
          <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">Filter by Technology</h3>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedTech(null)}
              className={`rounded-full px-4 py-2 font-medium transition-all ${
                selectedTech === null
                  ? 'bg-blue-600 text-white'
                  : 'border border-gray-300 text-gray-700 hover:border-gray-400 dark:border-gray-600 dark:text-gray-300'
              }`}
            >
              All Projects
            </button>
            {allTechnologies.map(
              (tech: string): JSX.Element => (
                <button
                  key={tech}
                  onClick={() => setSelectedTech(tech)}
                  className={`rounded-full px-4 py-2 font-medium transition-all ${
                    selectedTech === tech
                      ? 'bg-blue-600 text-white'
                      : 'border border-gray-300 text-gray-700 hover:border-gray-400 dark:border-gray-600 dark:text-gray-300'
                  }`}
                >
                  {tech}
                </button>
              )
            )}
          </div>
        </div>
      </SectionWrapper>

      {/* PROJECTS GRID */}
      <SectionWrapper className="bg-gray-50 dark:bg-gray-900">
        <div className="mb-8">
          <p className="text-gray-600 dark:text-gray-400">
            Showing {filteredProjects.length} project
            {filteredProjects.length !== 1 ? 's' : ''}
          </p>
        </div>

        {filteredProjects.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map(
              (project: Project): JSX.Element => (
                <ProjectCard key={project.id} project={project} />
              )
            )}
          </div>
        ) : (
          <div className="rounded-lg border-2 border-dashed border-gray-300 bg-white p-12 text-center dark:border-gray-700 dark:bg-gray-900">
            <p className="text-gray-600 dark:text-gray-400">
              No projects found for the selected technology.
            </p>
          </div>
        )}
      </SectionWrapper>
    </div>
  );
}
