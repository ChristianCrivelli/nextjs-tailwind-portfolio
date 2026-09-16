export interface LeadershipEntry {
  organization: string;
  role: string;
  startDate: string; // 'YYYY-MM'
  endDate?: string;   // omit if current
  location?: string;
  highlights: string[];
  tags?: string[];    // skill chips, drawn directly from the highlights above
  url?: string;
}

export const leadership: LeadershipEntry[] = [
  {
    organization: 'Mukti Sanctuary',
    role: 'Presidente da Assembleia Geral (President of the General Assembly)',
    startDate: '2024-08',
    location: 'Lisbon, Portugal',
    url: 'https://muktisanctuary.com/',
    highlights: [
      'Organizing General Assemblies for the non-profit animal rescue and community sanctuary.',
      "Handling the organization's IT needs.",
      "Leading data science and analytics work supporting the sanctuary's operations.",
    ],
    tags: ['Nonprofit Governance / Leadership', 'IT Administration', 'Data Science & Analytics (Volunteer)'],
  },
];
