/**
 * HERO COMPONENT
 * Main landing hero section with call-to-action
 * ES6+ TypeScript React component
 */

'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { SITE_METADATA } from '@/content/site-config';

/**
 * HERO COMPONENT
 * Displays main hero section with gradient background and CTA
 * @returns Hero section JSX element
 */
export const Hero = (): JSX.Element => {
  return (
    <section className="relative w-full overflow-hidden bg-white px-4 py-20 dark:bg-black sm:px-6 lg:px-8">
      {/* BACKGROUND GRADIENT */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-black dark:to-gray-900" />
      <div className="absolute -top-40 right-0 -z-10 h-80 w-80 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 opacity-10 blur-3xl dark:opacity-5" />
      <div className="absolute -bottom-40 left-0 -z-10 h-80 w-80 rounded-full bg-gradient-to-tr from-purple-400 to-blue-600 opacity-10 blur-3xl dark:opacity-5" />

      {/* CONTENT */}
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* TEXT CONTENT */}
          <div>
            <div className="mb-6 inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-600 dark:border-blue-900 dark:bg-blue-950 dark:text-blue-400">
              👋 Welcome to my portfolio
            </div>

            <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white sm:text-6xl md:text-5xl">
              Senior Software
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Engineer
              </span>
            </h1>
          </div>

          {/* PROFILE IMAGE */}
          {SITE_METADATA.profileImage && (
            <div className="relative mx-auto w-full max-w-xs md:max-w-none">
              <div className="relative aspect-square overflow-hidden rounded-2xl bg-gradient-to-br from-blue-400 to-purple-600 p-1 shadow-2xl">
                <Image
                  src={SITE_METADATA.profileImage}
                  alt={SITE_METADATA.author}
                  fill
                  className="rounded-xl object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 opacity-20 blur-2xl" />
            </div>
          )}
        </div>

        {/* DESCRIPTION AND HIGHLIGHTS */}
        <div className="mt-12">

          <p className="mb-8 max-w-2xl text-lg leading-relaxed text-gray-600 dark:text-gray-400 sm:text-xl">
            With 9+ years of professional experience, I build scalable web applications using React,
            Next.js, TypeScript, and modern web technologies. Currently leading engineering teams at
            Iris Software Pvt. Ltd.
          </p>
        </div>

        {/* HIGHLIGHTS */}
        <div className="mb-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="rounded-lg border border-gray-200 bg-white/50 p-4 backdrop-blur-sm dark:border-gray-800 dark:bg-gray-900/50">
            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">9+</div>
            <p className="text-sm text-gray-600 dark:text-gray-400">Years Experience</p>
          </div>
          <div className="rounded-lg border border-gray-200 bg-white/50 p-4 backdrop-blur-sm dark:border-gray-800 dark:bg-gray-900/50">
            <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">50+</div>
            <p className="text-sm text-gray-600 dark:text-gray-400">Projects Completed</p>
          </div>
          <div className="rounded-lg border border-gray-200 bg-white/50 p-4 backdrop-blur-sm dark:border-gray-800 dark:bg-gray-900/50">
            <div className="text-2xl font-bold text-green-600 dark:text-green-400">Expert</div>
            <p className="text-sm text-gray-600 dark:text-gray-400">Full-Stack Dev</p>
          </div>
        </div>

        {/* CTA BUTTONS */}
        <div className="flex flex-col gap-4 sm:flex-row">
          <Link
            href="/projects"
            className={cn(
              'inline-flex items-center justify-center rounded-lg px-8 py-3 font-semibold',
              'text-white transition-all duration-200',
              'bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-lg hover:shadow-blue-500/50'
            )}
          >
            View My Projects
            <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </Link>
          <Link
            href="/contact"
            className={cn(
              'inline-flex items-center justify-center rounded-lg px-8 py-3 font-semibold',
              'text-gray-900 transition-all duration-200 dark:text-white',
              'border-2 border-gray-300 bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-900 dark:hover:bg-gray-800'
            )}
          >
            Get In Touch
            <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </Link>
        </div>

        {/* SOCIAL PROOF */}
        <div className="mt-16 border-t border-gray-200 pt-8 dark:border-gray-800">
          <p className="mb-4 text-sm font-medium text-gray-600 dark:text-gray-400">TRUSTED BY</p>
          <div className="flex flex-wrap items-center gap-8 text-sm text-gray-600 dark:text-gray-400">
            <span>Iris Software</span>
            <span>MyGlamm</span>
            <span>Marketaxess</span>
            <span>L&apos;OCCITANE</span>
          </div>
        </div>
      </div>
    </section>
  );
};
