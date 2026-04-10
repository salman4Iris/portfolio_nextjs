/**
 * ABOUT PAGE
 * Portfolio about/profile page
 * ES6+ TypeScript
 */

import React from 'react';
import SectionWrapper from '@/components/SectionWrapper';
import { ABOUT_CONTENT } from '@/content/site-config';
import { calculateTotalExperienceYears } from '@/content/experience';

export default function AboutPage(): JSX.Element {
  const totalYears: number = calculateTotalExperienceYears();

  return (
    <div className="w-full">
      {/* HERO */}
      <SectionWrapper className="py-20">
        <div className="mb-12 space-y-4">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white md:text-6xl">About Me</h1>
          <p className="max-w-2xl text-xl text-gray-600 dark:text-gray-400">
            {ABOUT_CONTENT.subtitle}
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-2">
          {/* BIO */}
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-400">
              {ABOUT_CONTENT.bio}
            </p>

            <div className="space-y-3">
              <h3 className="font-semibold text-gray-900 dark:text-white">Key Highlights</h3>
              <ul className="space-y-2">
                {ABOUT_CONTENT.highlights.map(
                  (highlight: string, index: number): JSX.Element => (
                    <li key={index} className="flex gap-3 text-gray-600 dark:text-gray-400">
                      <span className="mt-1 inline-block h-2 w-2 rounded-full bg-blue-600 dark:bg-blue-400 flex-shrink-0" />
                      {highlight}
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>

          {/* STATS */}
          <div className="space-y-6">
            <div className="rounded-lg border border-gray-200 bg-gradient-to-br from-blue-50 to-indigo-50 p-8 dark:border-gray-800 dark:from-gray-900 dark:to-gray-800">
              <div className="space-y-8">
                {/* EXPERIENCE YEARS */}
                <div>
                  <div className="rounded-lg bg-white/50 p-6 dark:bg-gray-800/50">
                    <div className="text-4xl font-bold text-blue-600 dark:text-blue-400">
                      {totalYears}+
                    </div>
                    <p className="mt-2 text-gray-600 dark:text-gray-400">
                      Years of Professional Experience
                    </p>
                  </div>
                </div>

                {/* PROJECTS */}
                <div>
                  <div className="rounded-lg bg-white/50 p-6 dark:bg-gray-800/50">
                    <div className="text-4xl font-bold text-purple-600 dark:text-purple-400">
                      8+
                    </div>
                    <p className="mt-2 text-gray-600 dark:text-gray-400">Major Projects Lead</p>
                  </div>
                </div>

                {/* TEAM */}
                <div>
                  <div className="rounded-lg bg-white/50 p-6 dark:bg-gray-800/50">
                    <div className="text-4xl font-bold text-green-600 dark:text-green-400">10+</div>
                    <p className="mt-2 text-gray-600 dark:text-gray-400">Developers Mentored</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* EXPERTISE SECTION */}
      <SectionWrapper className="bg-gray-50 dark:bg-gray-900">
        <div className="mb-12">
          <h2 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">
            Areas of Expertise
          </h2>
          <p className="max-w-2xl text-gray-600 dark:text-gray-400">
            Specializing in full-stack web development with deep expertise across multiple
            technologies and domains.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: 'Frontend Development',
              description: 'React, Next.js, TypeScript, Tailwind CSS, and modern UI frameworks',
              icon: '🎨',
            },
            {
              title: 'Backend Development',
              description: 'Node.js, Express, Java, REST APIs, and database design',
              icon: '⚙️',
            },
            {
              title: 'System Architecture',
              description: 'Scalable application design, performance optimization, CI/CD',
              icon: '🏗️',
            },
            {
              title: 'Team Leadership',
              description: 'Technical mentoring, agile methodologies, project management',
              icon: '👥',
            },
            {
              title: 'Trading Systems',
              description: 'Financial platforms, regulatory compliance, real-time data processing',
              icon: '📈',
            },
            {
              title: 'E-Commerce',
              description: 'Payment integration, checkout optimization, analytics integration',
              icon: '🛒',
            },
          ].map((item, index) => (
            <div
              key={index}
              className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900"
            >
              <div className="mb-4 text-4xl">{item.icon}</div>
              <h3 className="mb-2 font-semibold text-gray-900 dark:text-white">{item.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{item.description}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>
    </div>
  );
}
