/**
 * Learning Path Sections
 *
 * Groups the 45 units into themed sections for better organization
 * and progressive learning experience.
 */

export interface Section {
  id: string;
  order: number;
  title: string;
  description: string;
  icon: string;
  color: string;
  unitIds: string[];
}

export const sections: Section[] = [
  {
    id: 'foundation',
    order: 1,
    title: 'Foundation',
    description: 'Master the basics of Coptic',
    icon: '📚',
    color: '#3B82F6', // Blue
    unitIds: [
      'unit-1',
      'unit-2',
      'unit-3',
      'unit-4',
      'unit-5',
      'unit-6',
      'unit-7',
      'unit-8',
      'unit-9',
      'unit-10',
    ],
  },
  {
    id: 'core-grammar',
    order: 2,
    title: 'Core Grammar',
    description: 'Build your grammatical foundation',
    icon: '⚡',
    color: '#8B5CF6', // Purple
    unitIds: [
      'unit-11',
      'unit-12',
      'unit-13',
      'unit-14',
      'unit-15',
      'unit-16',
      'unit-17',
      'unit-18',
      'unit-19',
      'unit-20',
    ],
  },
  {
    id: 'advanced-grammar',
    order: 3,
    title: 'Advanced Grammar',
    description: 'Master complex structures',
    icon: '🎯',
    color: '#F59E0B', // Orange
    unitIds: [
      'unit-21',
      'unit-22',
      'unit-23',
      'unit-24',
      'unit-25',
      'unit-26',
    ],
  },
  {
    id: 'sacred-texts',
    order: 4,
    title: 'Sacred Texts',
    description: 'Read liturgical and biblical Coptic',
    icon: '✝️',
    color: '#EAB308', // Gold
    unitIds: [
      'unit-27',
      'unit-28',
      'unit-29',
      'unit-30',
    ],
  },
  {
    id: 'daily-life',
    order: 5,
    title: 'Daily Life',
    description: 'Practical vocabulary for everyday use',
    icon: '🏠',
    color: '#10B981', // Green
    unitIds: [
      'unit-31',
      'unit-32',
      'unit-33',
      'unit-34',
      'unit-35',
    ],
  },
  {
    id: 'advanced-structures',
    order: 6,
    title: 'Advanced Structures',
    description: 'Deep dive into complex patterns',
    icon: '🔬',
    color: '#14B8A6', // Teal
    unitIds: [
      'unit-36',
      'unit-37',
      'unit-38',
      'unit-39',
    ],
  },
  {
    id: 'real-world',
    order: 7,
    title: 'Real-World Practice',
    description: 'Apply your knowledge in conversations',
    icon: '🌍',
    color: '#EC4899', // Pink
    unitIds: [
      'unit-40',
      'unit-41',
      'unit-42',
      'unit-43',
      'unit-44',
      'unit-45',
    ],
  },
];

/**
 * Get section by unit ID
 */
export const getSectionByUnitId = (unitId: string): Section | undefined => {
  return sections.find((section) => section.unitIds.includes(unitId));
};

/**
 * Get section by section ID
 */
export const getSectionById = (sectionId: string): Section | undefined => {
  return sections.find((section) => section.id === sectionId);
};

/**
 * Get all units in a section
 */
export const getUnitsInSection = (sectionId: string, allUnits: any[]): any[] => {
  const section = getSectionById(sectionId);
  if (!section) return [];

  return section.unitIds
    .map((unitId) => allUnits.find((unit) => unit.id === unitId))
    .filter(Boolean);
};
