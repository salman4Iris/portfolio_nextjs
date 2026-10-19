/**
 * TESTIMONIALS DATA
 * Client and colleague testimonials
 * ES6+ strict TypeScript with readonly properties
 */

import type { Testimonial } from '@/types';

export const TESTIMONIALS: readonly Testimonial[] = [
  {
    id: 'daniel-adrian-ortelecan',
    author: 'Daniel Adrian Ortelecan',
    position: 'Lead Java Developer / Solution Architect',
    content:
      'I had the opportunity to work with Salman as his Lead/Solution Architect, and he stands out as a highly capable and dependable senior frontend engineer. His deep expertise in ReactJS, strong problem-solving skills, and ownership mindset enable him to deliver scalable, high-quality solutions even in complex environments. Salman is someone I could always trust with critical responsibilities, and I highly recommend him to any organization seeking top engineering talent. Wishing Salman continued success in his career.',
  },
  {
    id: 'randhir-singh',
    author: 'Randhir Singh',
    position: 'Lead Technology',
    company: 'Iris Software',
    content:
      'Hi, I had the opportunity to work with Salman on a trading platform, including the REMS application for our client MarketAxess. He consistently demonstrated strong technical expertise, ownership, and the ability to deliver high-quality solutions in a complex environment. Salman is reliable, collaborative, and a valuable addition to any engineering team. I highly recommend him and wish him great success ahead.',
  },
  {
    id: 'varun-sukheja',
    author: 'Varun Sukheja',
    position: 'Frontend Architect',
    company: 'Adobe',
    content:
      'I worked with Salman at MyGlamm while leading the Frontend team, and he was a solid developer to have on the team. He’s skilled with frontend frameworks like Angular and React, and more importantly, he’s a quick learner who takes real ownership of his work. Salman thinks very logically, approaches problems with clarity, and is always open to trying out-of-the-box ideas when needed. He’s dependable, easy to work with, and consistently brings a positive, responsible attitude to the team. I’d happily recommend him for any frontend role.',
  },
  {
    id: 'hinal-shah',
    author: 'Hinal Shah',
    position: 'Lead Experience Engineer',
    content:
      'I worked with Salman on the development of e-commerce and CMS platforms, where he consistently demonstrated strong ownership and a commitment to delivering high-quality solutions. As a Frontend Developer, he played a key role in building intuitive user experiences and ensuring smooth functionality across applications. Salman is proactive, detail-oriented, and approaches challenges with a solution-focused mindset. He collaborates effectively with the team, adapts quickly to evolving requirements, and can always be trusted to deliver reliable results. I highly recommend Salman for senior or lead roles and am confident he will be a valuable asset to any engineering organization.',
  },
  {
    id: 'kapil-thakur',
    author: 'Kapil Thakur',
    position: 'Principal Product Manager',
    company: 'Acko, Razorpay',
    content:
      'I had the opportunity to work closely with Salman on multiple SEO and conversion tracking initiatives, including implementations across Facebook Pixel, Google Analytics, and Adobe Analytics. Salman brings strong attention to detail and a structured approach to execution. His implementations were consistently precise, reliable, and aligned tightly with product and growth objectives. Beyond execution, he demonstrated good judgment in understanding business context and ensuring tracking setups translated into actionable insights. He is dependable, execution-focused, and capable of owning complex feature deployments end to end.',
  },
  {
    id: 'shahebaz-shaikh',
    author: 'Shahebaz Shaikh',
    position: 'Senior iOS Engineer',
    company: 'Pocket FM',
    content:
      'I had the opportunity to work with Salman at MyGlamm and was consistently impressed by his expertise in ReactJS, Angular, and Node.js. He played an important role in delivering our E-commerce mobile website, showcasing strong technical skills, ownership, and a collaborative mindset. Salman is reliable, proactive, and delivers high-quality solutions. I highly recommend him for any senior engineering role and wish him great success ahead.',
  },
  {
    id: 'darshana-kambli',
    author: 'Darshana Kambli',
    position: 'Quality Assurance Specialist, CSM®',
    content:
      'I would highly recommend Salman Khan as a talented React Developer. He has a strong understanding of modern JavaScript, React.js, and component-based architecture. Salman consistently delivers clean, scalable, and user-friendly solutions. His problem-solving skills and attention to detail truly make a difference in project outcomes. A reliable team member who is always eager to learn and improve.',
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
  return TESTIMONIALS.filter(
    (t: Testimonial): boolean => t.rating !== undefined && t.rating >= minRating
  );
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
  return TESTIMONIALS.filter(
    (t: Testimonial): boolean => t.company?.toLowerCase().includes(company.toLowerCase()) ?? false
  );
};
