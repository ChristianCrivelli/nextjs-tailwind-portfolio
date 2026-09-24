export interface Certification {
  title: string;
  issuer: string;
  completedDate: string; // YYYY-MM
  length: string;
  credentialId?: string;
  pdfPath?: string; // e.g. /certifications/introduction-to-r.pdf
}

// Only certifications that back up a skill/tag actually claimed elsewhere on
// the site (see app/data/skills.ts, app/data/education.ts) are listed here —
// a short DataCamp intro course on its own isn't worth a line, but Introduction
// to R + Intermediate R together are the real basis for the "R" skill claim.
export const certifications: Certification[] = [
  {
    title: 'Intermediate R',
    issuer: 'DataCamp',
    completedDate: '2026-09',
    length: '6 hrs',
    credentialId: '31,387,288',
    pdfPath: '/certifications/intermediate-r.pdf',
  },
  {
    title: 'Introduction to R',
    issuer: 'DataCamp',
    completedDate: '2023-10',
    length: '4 hrs',
    credentialId: '31,311,432',
    pdfPath: '/certifications/introduction-to-r.pdf',
  },
];
