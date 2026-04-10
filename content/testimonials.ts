/**
 * TESTIMONIALS DATA
 * Client and colleague testimonials
 * ES6+ strict TypeScript with readonly properties
 */

import type { Testimonial } from '@/types';

export const TESTIMONIALS: readonly Testimonial[] = [
  {
    id: 'testimonial-1',
    author: 'John Smith',
    position: 'Product Manager',
    company: 'Iris Software Pvt. Ltd.',
    content:
      'Salman is an exceptional developer who consistently delivers high-quality solutions. His technical expertise and leadership abilities have been instrumental in the success of our major projects. He goes above and beyond to mentor junior developers and foster a culture of excellence.',
    rating: 5,
    image: undefined,
  },
  {
    id: 'testimonial-2',
    author: 'Sarah Johnson',
    position: 'Senior Manager',
    company: 'MyGlamm',
    content:
      'Working with Salman on the e-commerce platform was a pleasure. His attention to detail, performance optimization skills, and ability to handle complex requirements made a significant impact on the project. He delivered the MyGlamm website migration from Angular to React seamlessly.',
    rating: 5,
    image: undefined,
  },
  {
    id: 'testimonial-3',
    author: 'Michael Chen',
    position: 'Client Lead',
    company: 'Marketaxess',
    content:
      'Salman demonstrated outstanding client management and technical prowess. His ability to understand complex trading requirements and translate them into elegant solutions was remarkable. The REMS project benefited greatly from his expertise and communication.',
    rating: 5,
    image: undefined,
  },
];

/**
 * GET TESTIMONIAL BY ID
 * Retrieves a testimonial by its ID
 * @param id - Testimonial identifier
 * @returns Testimonial or undefined if not found
 */
export const getTestimonialById = (id: string): Testimonial | undefined => {
  return TESTIMONIALS.find((t: Testimonial): boolean => t.id === id);
};

/**
 * GET HIGH RATED TESTIMONIALS
 * Returns testimonials with rating above threshold
 * @param minRating - Minimum rating threshold (1-5)
 * @returns Array of testimonials above threshold
 */
export const getHighRatedTestimonials = (minRating: number = 4): readonly Testimonial[] => {
  return TESTIMONIALS.filter((t: Testimonial): boolean => t.rating >= minRating);
};

/**
 * GET ALL TESTIMONIALS
 * Returns all testimonials
 * @returns Array of all testimonials
 */
export const getAllTestimonials = (): readonly Testimonial[] => {
  return TESTIMONIALS;
};

/**
 * GET TESTIMONIALS BY COMPANY
 * Filters testimonials by company
 * @param company - Company name to filter
 * @returns Array of testimonials from that company
 */
export const getTestimonialsByCompany = (company: string): readonly Testimonial[] => {
  return TESTIMONIALS.filter((t: Testimonial): boolean =>
    t.company.toLowerCase().includes(company.toLowerCase())
  );
};
