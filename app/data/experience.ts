export interface ExperienceEntry {
  employer: string;
  role: string;
  startDate: string; // 'YYYY-MM'
  endDate?: string;   // omit if current
  location?: string;
  highlights: string[];
}

export const experience: ExperienceEntry[] = [
  {
    employer: 'The Social Hub',
    role: 'Waiter',
    startDate: '2026-02',
    location: 'Maastricht, Netherlands',
    highlights: [
      'Provide food and drink service across a fast-paced hospitality venue, balancing multiple tables during peak hours without sacrificing accuracy or pace.',
      'Coordinate with kitchen and bar staff to keep order timing consistent during high-volume shifts.',
    ],
  },
  {
    employer: 'Dunkin\' Donuts',
    role: 'Barista',
    startDate: '2024-12',
    endDate: '2025-07',
    location: 'Maastricht, Netherlands',
    highlights: [
      'Prepared coffee and specialty drinks to order during high-volume rush periods, maintaining consistency and speed under pressure.',
      'Handled point-of-sale transactions and cash management accurately across busy shifts.',
    ],
  },
  {
    employer: 'Brasserie Monopole',
    role: 'Waiter',
    startDate: '2024-04',
    endDate: '2025-02',
    location: 'Maastricht, Netherlands',
    highlights: [
      'Delivered table service in a busy brasserie, coordinating with kitchen staff to keep order delivery on time during peak service.',
      'Built rapport with regular guests, contributing to a consistent, positive dining experience.',
    ],
  },
];
