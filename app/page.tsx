/**
 * HOME PAGE
 * Main landing page with hero section and featured projects
 * ES6+ TypeScript
 */

import { Hero } from '@/components/Hero';
import SectionWrapper from '@/components/SectionWrapper';
import ProjectCard from '@/components/ProjectCard';
import { getFeaturedProjects } from '@/content/projects';
import type { Project } from '@/types';

export default function Home(): JSX.Element {
  const featuredProjects: readonly Project[] = getFeaturedProjects();

  return (
    <div className="w-full">
      {/* HERO SECTION */}
      <Hero />

      {/* FEATURED PROJECTS SECTION */}
      <SectionWrapper className="bg-gray-50 dark:bg-gray-900">
        <div className="mb-12">
          <h2 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">
            Featured Projects
          </h2>
          <p className="max-w-2xl text-lg text-gray-600 dark:text-gray-400">
            A selection of my recent work showcasing expertise in modern web
            development, system design, and leadership.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.slice(0, 3).map((project: Project): JSX.Element => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="mt-8 text-center">
          <a
            href="/projects"
            className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 font-semibold text-white transition-all hover:shadow-lg"
          >
            View All Projects
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </a>
        </div>
      </SectionWrapper>

      {/* CTA SECTION */}
      <SectionWrapper className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
        <div className="text-center">
          <h2 className="mb-4 text-4xl font-bold text-white">
            Let&apos;s Work Together
          </h2>
          <p className="mb-8 max-w-2xl mx-auto text-lg text-blue-100">
            Have a project in mind? I&apos;d love to discuss how I can help bring your ideas to life.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-3 font-semibold text-blue-600 transition-all hover:bg-gray-100"
          >
            Get In Touch
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </a>
        </div>
      </SectionWrapper>
    </div>
  );
}
