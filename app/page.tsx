/**
 * HOME PAGE
 * Main landing page with hero, portfolio highlights, and contact CTA
 * ES6+ TypeScript
 */

import React from 'react';
import Link from 'next/link';
import { Hero } from '@/components/Hero';
import SectionWrapper from '@/components/SectionWrapper';
import ProjectCard from '@/components/ProjectCard';
import ExperienceItem from '@/components/ExperienceItem';
import SkillCard from '@/components/SkillCard';
import { DigitalExperienceCarousel } from '@/components/DigitalExperienceCarousel';
import { TestimonialsCarousel } from '@/components/TestimonialsCarousel';
import { ABOUT_CONTENT, SITE_METADATA } from '@/content/site-config';
import { getFeaturedBlogPosts } from '@/content/blog';
import { getSortedExperiences, calculateTotalExperienceYears } from '@/content/experience';
import { getFeaturedProjects } from '@/content/projects';
import { sortSkillsByProficiency } from '@/content/skills';
import { TESTIMONIALS } from '@/content/testimonials';
import type { BlogPost, Experience, Project, Skill } from '@/types';

export default function Home(): JSX.Element {
  const featuredProjects: readonly Project[] = getFeaturedProjects();
  const experiences: readonly Experience[] = getSortedExperiences();
  const skills: readonly Skill[] = sortSkillsByProficiency();
  const featuredBlogPosts: readonly BlogPost[] = getFeaturedBlogPosts();
  const totalYears: number = calculateTotalExperienceYears();

  return (
    <div className="w-full bg-[var(--home-background)]">
      <Hero />

      <SectionWrapper id="about" className="bg-[var(--home-background)]">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="eyebrow mb-3">Know more about me</p>
            <h2 className="mb-5 text-3xl font-black tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              {ABOUT_CONTENT.title}
            </h2>
            <p className="max-w-3xl text-base leading-8 text-slate-600 sm:text-lg dark:text-slate-400">
              {ABOUT_CONTENT.bio}
            </p>
            <Link
              href="/about"
              className="mt-7 inline-flex items-center gap-2 font-bold text-cyan-600 transition-colors hover:text-pink-500 dark:text-cyan-400"
            >
              Read more about me <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="surface-card p-5">
              <p className="text-3xl font-black text-cyan-500">{featuredProjects.length}+</p>
              <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">Projects delivered</p>
            </div>
            <div className="surface-card p-5">
              <p className="text-3xl font-black text-pink-500">{totalYears}+</p>
              <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">Years experience</p>
            </div>
            <div className="surface-card p-5">
              <p className="text-3xl font-black text-amber-500">{experiences.length}</p>
              <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">Career chapters</p>
            </div>
            <div className="surface-card p-5">
              <p className="text-3xl font-black text-indigo-600 dark:text-indigo-300">
                {skills.length}+
              </p>
              <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">Core skills</p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-[var(--home-section)]">
        <div className="mb-10">
          <p className="eyebrow mb-3">What I do</p>
          <h2 className="mb-4 text-3xl font-black tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Building useful digital experiences
          </h2>
          <p className="max-w-2xl text-base leading-7 text-slate-600 sm:text-lg dark:text-slate-400">
            {ABOUT_CONTENT.subtitle}. I bring product thinking, frontend architecture, and delivery
            discipline to complex systems.
          </p>
        </div>

        <DigitalExperienceCarousel highlights={ABOUT_CONTENT.highlights.slice(0, 6)} />
      </SectionWrapper>

      <SectionWrapper id="experience" className="bg-[var(--home-background)]">
        <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="eyebrow mb-3">Career timeline</p>
            <h2 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              Experience
            </h2>
          </div>
          <Link href="/experience" className="font-bold text-pink-600 dark:text-pink-400">
            View full experience →
          </Link>
        </div>
        <div className="space-y-8">
          {experiences.slice(0, 2).map(
            (experience: Experience): JSX.Element => (
              <ExperienceItem key={experience.id} experience={experience} />
            )
          )}
        </div>
      </SectionWrapper>

      <SectionWrapper id="skills" className="bg-[var(--home-section)]">
        <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="eyebrow mb-3">Technical toolkit</p>
            <h2 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              Skills &amp; strengths
            </h2>
          </div>
          <Link href="/skills" className="font-bold text-cyan-600 dark:text-cyan-400">
            View all skills →
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
          {skills.slice(0, 6).map(
            (skill: Skill): JSX.Element => (
              <SkillCard key={skill.id} skill={skill} />
            )
          )}
        </div>
      </SectionWrapper>

      <SectionWrapper id="projects" className="bg-[var(--home-background)]">
        <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="eyebrow mb-3">Selected work</p>
            <h2 className="mb-4 text-3xl font-black tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              Featured projects
            </h2>
            <p className="max-w-2xl text-lg text-slate-600 dark:text-slate-400">
              A selection of recent work across AI interfaces, financial workflows, and commerce.
            </p>
          </div>
          <Link href="/projects" className="font-bold text-cyan-600 dark:text-cyan-400">
            View all projects →
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.slice(0, 3).map(
            (project: Project): JSX.Element => (
              <ProjectCard key={project.id} project={project} />
            )
          )}
        </div>
      </SectionWrapper>

      <SectionWrapper id="testimonials" className="bg-[var(--home-section)]">
        <div className="mb-10">
          <p className="eyebrow mb-3">Trusted collaboration</p>
          <h2 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            What colleagues say
          </h2>
        </div>
        <TestimonialsCarousel testimonials={TESTIMONIALS} />
      </SectionWrapper>

      <SectionWrapper id="blog" className="bg-[var(--home-background)]">
        <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="eyebrow mb-3">From the notebook</p>
            <h2 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              Latest writing
            </h2>
          </div>
          <Link href="/blog" className="font-bold text-cyan-600 dark:text-cyan-400">
            Read all articles →
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {featuredBlogPosts.slice(0, 3).map(
            (post: BlogPost): JSX.Element => (
              <article key={post.id} className="surface-card">
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.16em] text-cyan-600 dark:text-cyan-400">
                  {post.tags[0]} · {post.readingTime} min read
                </p>
                <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">
                  {post.title}
                </h3>
                <p className="mb-5 text-sm leading-6 text-slate-600 dark:text-slate-400">
                  {post.excerpt}
                </p>
                <Link
                  href={`/blog#${post.id}`}
                  className="font-bold text-pink-600 dark:text-pink-400"
                >
                  Read article →
                </Link>
              </article>
            )
          )}
        </div>
      </SectionWrapper>

      <SectionWrapper
        id="contact"
        className="bg-gradient-to-br from-cyan-600 via-indigo-600 to-fuchsia-600 py-16 sm:py-20"
      >
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-cyan-100">
            Let&apos;s work together
          </p>
          <h2 className="mb-5 text-4xl font-black text-white sm:text-5xl">
            Have a challenging product to build?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg leading-8 text-blue-100">
            I&apos;m always interested in thoughtful products, complex frontend problems, and teams
            that care about the details.
          </p>
          <Link
            href="/contact"
            className="inline-flex min-h-12 items-center gap-2 rounded-full bg-white px-7 py-3.5 font-bold text-indigo-800 shadow-lg shadow-indigo-950/15 transition-transform hover:-translate-y-1"
          >
            Start a conversation <span aria-hidden="true">→</span>
          </Link>
          <p className="mt-6 text-sm text-blue-100">{SITE_METADATA.email}</p>
        </div>
      </SectionWrapper>
    </div>
  );
}
