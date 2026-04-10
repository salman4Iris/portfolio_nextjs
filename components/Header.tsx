/**
 * HEADER COMPONENT
 * Main navigation header with theme toggle
 * ES6+ TypeScript React component
 */

'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { NAVIGATION_ITEMS, SITE_METADATA } from '@/content/site-config';
import { cn } from '@/lib/utils';
import type { NavigationItem } from '@/types';

/**
 * HEADER COMPONENT
 * Displays navigation menu and theme toggle
 * @returns Navigation header JSX element
 */
export const Header = (): JSX.Element => {
  const { theme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  useEffect((): void => {
    setIsMounted(true);
  }, []);

  const toggleTheme = (): void => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  if (!isMounted) {
    return <header className="h-16 border-b border-gray-200 dark:border-gray-800" />;
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white dark:border-gray-800 dark:bg-black">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* LOGO */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-purple-600">
            <span className="text-lg font-bold text-white">SK</span>
          </div>
          <span className="hidden font-semibold text-gray-900 dark:text-white sm:inline">
            Salman Khan
          </span>
        </Link>

        {/* DESKTOP NAVIGATION */}
        <div className="hidden items-center space-x-1 md:flex">
          {NAVIGATION_ITEMS.map(
            (item: NavigationItem): JSX.Element => (
              <Link
                key={item.id}
                href={item.href}
                className={cn(
                  'px-3 py-2 text-sm font-medium transition-colors',
                  'text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white'
                )}
                target={item.isExternal ? '_blank' : undefined}
                rel={item.isExternal ? 'noopener noreferrer' : undefined}
              >
                {item.label}
              </Link>
            )
          )}
        </div>

        {/* SOCIAL LINKS & RESUME */}
        <div className="hidden items-center space-x-3 md:flex">
          {/* Download Resume */}
          {SITE_METADATA.resumeLink && (
            <a
              href={SITE_METADATA.resumeLink}
              download
              className="rounded-lg p-2 text-gray-600 transition-colors hover:bg-gray-100 hover:text-green-600 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-green-400"
              aria-label="Download Resume"
              title="Download Resume"
            >
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9H13V6h-2v5H8.5l3.5 3.5 3.5-3.5z" />
              </svg>
            </a>
          )}

          {/* LinkedIn */}
          <a
            href={SITE_METADATA.socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg p-2 text-gray-600 transition-colors hover:bg-gray-100 hover:text-blue-600 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-blue-400"
            aria-label="LinkedIn"
          >
            <svg
              className="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>

          {/* GitHub */}
          <a
            href={SITE_METADATA.socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg p-2 text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white"
            aria-label="GitHub"
          >
            <svg
              className="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>

          {/* Email */}
          <a
            href={`mailto:${SITE_METADATA.socialLinks.email}`}
            className="rounded-lg p-2 text-gray-600 transition-colors hover:bg-gray-100 hover:text-red-600 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-red-400"
            aria-label="Email"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </a>
        </div>

        {/* THEME TOGGLE & MOBILE MENU */}
        <div className="flex items-center space-x-4">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="rounded-lg bg-gray-100 p-2 text-gray-600 transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zM4.22 4.22a1 1 0 011.415 0l.707.707a1 1 0 01-1.415 1.415l-.707-.707a1 1 0 010-1.415zm11.313 1.414a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.415l.707-.707zM10 7a3 3 0 100 6 3 3 0 000-6zm-7 3a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zm16 0a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM4.22 15.78a1 1 0 001.415 0l.707-.707a1 1 0 00-1.415-1.415l-.707.707a1 1 0 000 1.415zm11.313-1.414a1 1 0 001.414 1.414l.707-.707a1 1 0 00-1.414-1.415l-.707.707zM10 18a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1z" />
              </svg>
            ) : (
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            )}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="rounded-lg bg-gray-100 p-2 text-gray-600 transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 md:hidden"
            aria-label="Toggle menu"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* MOBILE NAVIGATION */}
      {isMenuOpen && (
        <div className="border-t border-gray-200 dark:border-gray-800 md:hidden">
          <div className="space-y-1 px-4 py-2">
            {NAVIGATION_ITEMS.map(
              (item: NavigationItem): JSX.Element => (
                <Link
                  key={item.id}
                  href={item.href}
                  className={cn(
                    'block rounded-lg px-3 py-2 text-base font-medium transition-colors',
                    'text-gray-600 hover:bg-gray-100 hover:text-gray-900',
                    'dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white'
                  )}
                  onClick={(): void => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              )
            )}
          </div>
        </div>
      )}
    </header>
  );
};
