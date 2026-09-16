export interface EducationEntry {
  institution: string;
  degree: string;
  startDate: string;
  endDate?: string;
  status: 'completed' | 'in-progress';
  skills?: string[];
  relevantCoursework?: string[];
  // Pre-emptive: the programme's official mandatory courses, added ahead of
  // actually taking them so the data is ready to go. NOT rendered anywhere
  // yet (EducationTimeline only reads `skills` / `relevantCoursework`) —
  // intentional, so nothing displays as an acquired skill before it's
  // earned. Move each course into `relevantCoursework` (and add matching
  // tags to any project/skill it touches) as it's actually completed.
  // Source: https://curriculum.maastrichtuniversity.nl/education/master/business-intelligence-and-smart-services/courses-curriculum
  // (4 mandatory courses + Smart Service Skills + Smart Service Project +
  // thesis proposal course; electives aren't published anywhere public).
  plannedCoursework?: string[];
  logo?: string;
}

export const education: EducationEntry[] = [
  {
    institution: 'Maastricht University School of Business and Economics',
    degree: "Master's degree, Business Intelligence and Smart Services",
    startDate: '2026-08',
    endDate: '2027-07',
    status: 'in-progress',
    plannedCoursework: [
      'Business Intelligence and Data Governance',
      'Machine Learning for Smart Services',
      'Smart Service Skills',
      'Smart Service Project',
      "Writing a Master's Thesis Proposal: BISS",
    ],
  },
  {
    institution: 'Maastricht University School of Business and Economics',
    degree: "Bachelor's degree, Business Analytics",
    startDate: '2023-09',
    endDate: '2026-07',
    status: 'completed',
    skills: ['SQL', 'Microsoft Excel', 'Python', 'R', 'Statistical Data Analysis'],
    relevantCoursework: [
      'Data Engineering and Data Governance',
      'An Analytical Approach to Separating Fact from Fiction',
    ],
  },
];