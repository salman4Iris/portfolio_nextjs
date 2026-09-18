/**
 * CERTIFICATIONS DATA
 * Educational certifications and credentials
 * ES6+ strict TypeScript with readonly properties
 */

import type { Certification } from '@/types';

export const CERTIFICATIONS: readonly Certification[] = [
  {
    id: 'btech-cse',
    title: 'B.E. / B.Tech. in Computer Engineering',
    issuer: "Pillai's HOC College of Engineering, Mumbai University, Mumbai",
    issueDate: '2016-06-15',
    credentialId: 'CSE-2016',
    image: undefined,
  },
  {
    id: 'diploma-ce',
    title: 'Diploma in Computer Engineering',
    issuer: 'Abdul Razzak Kalsekar Polytechnic, Mumbai',
    issueDate: '2013-06-15',
    credentialId: 'DCE-2013',
    image: undefined,
  },
];

/**
 * UDEMY COURSES DATA
 * Professional development courses from Udemy
 * Expandable structure for future certificate additions
 */
export const UDEMY_COURSES: readonly Certification[] = [
  {
    id: 'github-copilot-beginner-to-pro',
    title: 'GitHub Copilot: Beginner to Pro - AI for Coding & Development',
    issuer: 'Udemy',
    issueDate: '2026',
    image: undefined,
  },
  {
    id: 'artificial-intelligence-chatgpt',
    title: 'The Complete Artificial Intelligence and ChatGPT Course',
    issuer: 'Udemy',
    issueDate: '2026',
    image: undefined,
  },
  {
    id: 'generative-ai-for-beginners',
    title: 'Generative AI for Beginners',
    issuer: 'Udemy',
    issueDate: '2026',
    image: undefined,
  },
];

/**
 * GET CERTIFICATION BY ID
 * Retrieves a certification by its ID
 * @param id - Certification identifier
 * @returns Certification or undefined if not found
 */
export const getCertificationById = (id: string): Certification | undefined => {
  const allCertifications: readonly Certification[] = [...CERTIFICATIONS, ...UDEMY_COURSES];
  return allCertifications.find((cert: Certification): boolean => cert.id === id);
};

/**
 * GET ALL CERTIFICATIONS
 * Returns all certifications and udemy courses
 * @returns Array of all certifications
 */
export const getAllCertifications = (): readonly Certification[] => {
  return [...CERTIFICATIONS, ...UDEMY_COURSES];
};

/**
 * GET CERTIFICATIONS BY ISSUER
 * Filters certifications by issuer
 * @param issuer - Issuer name to search for
 * @returns Array of certifications from that issuer
 */
export const getCertificationsByIssuer = (issuer: string): readonly Certification[] => {
  return getAllCertifications().filter((cert: Certification): boolean =>
    cert.issuer.toLowerCase().includes(issuer.toLowerCase())
  );
};

/**
 * GET UDEMY COURSES
 * Returns only Udemy courses
 * @returns Array of Udemy courses
 */
export const getUdemyCourses = (): readonly Certification[] => {
  return UDEMY_COURSES;
};

/**
 * ADD UDEMY COURSE
 * Helper function to document structure for adding new Udemy courses
 * @returns Template object for new Udemy course
 */
export const getUdemyCourseTemplate = (): Omit<Certification, 'id'> => {
  return {
    title: 'Course Title',
    issuer: 'Udemy',
    issueDate: new Date().toISOString().split('T')[0],
    credentialId: 'UC-XXXXXX',
    credentialUrl: 'https://udemy.com/certificate/...',
    expiryDate: undefined,
    image: undefined,
  };
};
