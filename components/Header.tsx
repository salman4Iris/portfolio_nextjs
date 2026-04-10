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
