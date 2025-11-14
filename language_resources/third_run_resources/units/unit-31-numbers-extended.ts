import { Unit } from '../../types';

// UNIT 31: NUMBERS 11-100 & ORDINALS
// Bohairic dialect - Essential counting and numerical concepts
// Fills gap: Extended numbers beyond 1-10

const unit31: Unit = {
  id: 'unit-31',
  title: 'Numbers 11-100',
  description: 'Master counting, tens, and ordinal numbers',
  order: 31,
  color: '#FFD700',
  lessons: [
    {
      id: 'lesson-31-1',
      unitId: 'unit-31',
      title: 'Numbers 11-20',
      description: 'Learn numbers from eleven to twenty',
      order: 1,
      xpReward: 20,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-31-1-1',
          type: 'multiple_choice',
          question: 'How do you say "11" in Coptic?',
          correctAnswer: 'ⲙⲏⲧⲟⲩⲁⲓ',
          options: ['ⲙⲏⲧⲟⲩⲁⲓ', 'ⲙⲏⲧⲥⲛⲁⲩ', 'ⲟⲩⲁⲓⲙⲏⲧ', 'ⲙⲏⲧ'],
          explanation: 'ⲙⲏⲧⲟⲩⲁⲓ = 11 (ⲙⲏⲧ = 10 + ⲟⲩⲁⲓ = 1)'
        },
        {
          id: 'ex-31-1-2',
          type: 'matching',
          question: 'Match numbers 11-14',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲙⲏⲧⲟⲩⲁⲓ', english: '11' },
            { coptic: 'ⲙⲏⲧⲥⲛⲁⲩ', english: '12' },
            { coptic: 'ⲙⲏⲧϣⲟⲙⲧ', english: '13' },
            { coptic: 'ⲙⲏⲧϥⲧⲟⲟⲩ', english: '14' }
          ]
        },
        {
          id: 'ex-31-1-3',
          type: 'translation',
          question: 'Translate: ⲙⲏⲧϯⲟⲩ',
          questionCoptic: 'ⲙⲏⲧϯⲟⲩ',
          correctAnswer: '15',
          options: ['15', '14', '16', '5'],
          explanation: 'ⲙⲏⲧϯⲟⲩ = 15 (ⲙⲏⲧ = 10 + ϯⲟⲩ = 5)'
        },
        {
          id: 'ex-31-1-4',
          type: 'fill_blank',
          question: 'Complete: ___ = 16',
          correctAnswer: 'ⲙⲏⲧⲥⲟⲟⲩ',
          options: ['ⲙⲏⲧⲥⲟⲟⲩ', 'ⲙⲏⲧϯⲟⲩ', 'ⲥⲟⲟⲩⲙⲏⲧ', 'ⲥⲟⲟⲩ'],
          explanation: 'ⲙⲏⲧⲥⲟⲟⲩ = 16 (ⲙⲏⲧ + ⲥⲟⲟⲩ = 6)'
        },
        {
          id: 'ex-31-1-5',
          type: 'matching',
          question: 'Match numbers 17-20',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲙⲏⲧϣⲁϣϥ', english: '17' },
            { coptic: 'ⲙⲏⲧϣⲙⲏⲛ', english: '18' },
            { coptic: 'ⲙⲏⲧⲯⲓⲧ', english: '19' },
            { coptic: 'ϫⲟⲩⲧ', english: '20' }
          ]
        },
        {
          id: 'ex-31-1-6',
          type: 'translation',
          question: 'Translate: ⲙⲏⲧϣⲁϣϥ ⲛ̀ⲣⲱⲙⲓ',
          questionCoptic: 'ⲙⲏⲧϣⲁϣϥ ⲛ̀ⲣⲱⲙⲓ',
          correctAnswer: '17 men',
          options: ['17 men', '7 men', '18 men', '10 men'],
          explanation: 'ⲙⲏⲧϣⲁϣϥ = 17 + ⲛ̀ⲣⲱⲙⲓ = men (ⲛ̀ connects number to noun)'
        },
        {
          id: 'ex-31-1-7',
          type: 'sentence_building',
          question: 'Build: "19 days"',
          correctAnswer: 'ⲙⲏⲧⲯⲓⲧ ⲛ̀ⲉϩⲟⲟⲩ',
          wordBank: ['ⲙⲏⲧⲯⲓⲧ', 'ⲛ̀', 'ⲉϩⲟⲟⲩ', 'ⲙⲏⲧ'],
          explanation: 'ⲙⲏⲧⲯⲓⲧ ⲛ̀ⲉϩⲟⲟⲩ = 19 days'
        },
        {
          id: 'ex-31-1-8',
          type: 'multiple_choice',
          question: 'How many is ϫⲟⲩⲧ?',
          questionCoptic: 'ϫⲟⲩⲧ',
          correctAnswer: '20',
          options: ['20', '12', '10', '30'],
          explanation: 'ϫⲟⲩⲧ (jout) = 20 (different pattern from teens)'
        }
      ]
    },
    {
      id: 'lesson-31-2',
      unitId: 'unit-31',
      title: 'Tens: 20, 30, 40...100',
      description: 'Count by tens',
      order: 2,
      xpReward: 20,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-31-2-1',
          type: 'matching',
          question: 'Match the tens',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ϫⲟⲩⲧ', english: '20' },
            { coptic: 'ⲙⲁⲃ', english: '30' },
            { coptic: 'ϩⲙⲉ', english: '40' },
            { coptic: 'ⲧⲉⲃⲓ', english: '50' }
          ]
        },
        {
          id: 'ex-31-2-2',
          type: 'matching',
          question: 'Match more tens',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲥⲉ', english: '60' },
            { coptic: 'ϣϥⲉ', english: '70' },
            { coptic: 'ϣⲙⲏⲛⲉ', english: '80' },
            { coptic: 'ⲡⲥⲧⲁⲓⲟⲩ', english: '90' }
          ]
        },
        {
          id: 'ex-31-2-3',
          type: 'multiple_choice',
          question: 'What is "100" in Coptic?',
          correctAnswer: 'ϣⲉ',
          options: ['ϣⲉ', 'ⲥⲉ', 'ϩⲙⲉ', 'ⲙⲏⲧ'],
          explanation: 'ϣⲉ (she) = 100'
        },
        {
          id: 'ex-31-2-4',
          type: 'translation',
          question: 'Translate: ϩⲙⲉ ⲛ̀ⲣⲱⲙⲓ',
          questionCoptic: 'ϩⲙⲉ ⲛ̀ⲣⲱⲙⲓ',
          correctAnswer: '40 men',
          options: ['40 men', '4 men', '14 men', '50 men'],
          explanation: 'ϩⲙⲉ = 40 + ⲛ̀ⲣⲱⲙⲓ = men'
        },
        {
          id: 'ex-31-2-5',
          type: 'fill_blank',
          question: 'Complete: ___ ⲛ̀ϣⲏⲣⲓ = 70 sons',
          correctAnswer: 'ϣϥⲉ',
          options: ['ϣϥⲉ', 'ⲥⲉ', 'ϣⲙⲏⲛⲉ', 'ϣⲁϣϥ'],
          explanation: 'ϣϥⲉ = 70'
        },
        {
          id: 'ex-31-2-6',
          type: 'sentence_building',
          question: 'Build: "90 years"',
          correctAnswer: 'ⲡⲥⲧⲁⲓⲟⲩ ⲛ̀ⲣⲟⲙⲡⲓ',
          wordBank: ['ⲡⲥⲧⲁⲓⲟⲩ', 'ⲛ̀', 'ⲣⲟⲙⲡⲓ', 'ϣⲙⲏⲛⲉ'],
          explanation: 'ⲡⲥⲧⲁⲓⲟⲩ ⲛ̀ⲣⲟⲙⲡⲓ = 90 years'
        },
        {
          id: 'ex-31-2-7',
          type: 'multiple_choice',
          question: 'How do you say "60 days"?',
          correctAnswer: 'ⲥⲉ ⲛ̀ⲉϩⲟⲟⲩ',
          options: ['ⲥⲉ ⲛ̀ⲉϩⲟⲟⲩ', 'ⲥⲟⲟⲩ ⲛ̀ⲉϩⲟⲟⲩ', 'ϣϥⲉ ⲛ̀ⲉϩⲟⲟⲩ', 'ϣⲉ ⲛ̀ⲉϩⲟⲟⲩ'],
          explanation: 'ⲥⲉ = 60 + ⲛ̀ⲉϩⲟⲟⲩ = days'
        }
      ]
    },
    {
      id: 'lesson-31-3',
      unitId: 'unit-31',
      title: 'Compound Numbers',
      description: '21, 35, 67, etc.',
      order: 3,
      xpReward: 25,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-31-3-1',
          type: 'multiple_choice',
          question: 'How do you say "21"?',
          correctAnswer: 'ϫⲟⲩⲧⲟⲩⲁⲓ',
          options: ['ϫⲟⲩⲧⲟⲩⲁⲓ', 'ⲙⲁⲃⲟⲩⲁⲓ', 'ϫⲟⲩⲧ ⲛⲉⲙ ⲟⲩⲁⲓ', 'ϫⲟⲩⲧⲙⲏⲧ'],
          explanation: 'ϫⲟⲩⲧⲟⲩⲁⲓ = 21 (ϫⲟⲩⲧ + ⲟⲩⲁⲓ)'
        },
        {
          id: 'ex-31-3-2',
          type: 'translation',
          question: 'Translate: ⲙⲁⲃϣⲟⲙⲧ',
          questionCoptic: 'ⲙⲁⲃϣⲟⲙⲧ',
          correctAnswer: '33',
          options: ['33', '13', '23', '43'],
          explanation: 'ⲙⲁⲃϣⲟⲙⲧ = 33 (ⲙⲁⲃ = 30 + ϣⲟⲙⲧ = 3)'
        },
        {
          id: 'ex-31-3-3',
          type: 'sentence_building',
          question: 'Build: "45"',
          correctAnswer: 'ϩⲙⲉϯⲟⲩ',
          wordBank: ['ϩⲙⲉ', 'ϯⲟⲩ', 'ⲧⲉⲃⲓ', 'ϥⲧⲟⲟⲩ'],
          explanation: 'ϩⲙⲉϯⲟⲩ = 45 (ϩⲙⲉ = 40 + ϯⲟⲩ = 5)'
        },
        {
          id: 'ex-31-3-4',
          type: 'fill_blank',
          question: 'Complete: ___ = 67',
          correctAnswer: 'ⲥⲉϣⲁϣϥ',
          options: ['ⲥⲉϣⲁϣϥ', 'ϣϥⲉⲥⲟⲟⲩ', 'ϩⲙⲉϣⲁϣϥ', 'ϣϥⲉϣⲁϣϥ'],
          explanation: 'ⲥⲉϣⲁϣϥ = 67 (ⲥⲉ = 60 + ϣⲁϣϥ = 7)'
        },
        {
          id: 'ex-31-3-5',
          type: 'matching',
          question: 'Match compound numbers',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ϫⲟⲩⲧϥⲧⲟⲟⲩ', english: '24' },
            { coptic: 'ⲧⲉⲃⲓⲥⲛⲁⲩ', english: '52' },
            { coptic: 'ϣϥⲉⲯⲓⲧ', english: '79' },
            { coptic: 'ⲡⲥⲧⲁⲓⲟⲩⲥⲟⲟⲩ', english: '96' }
          ]
        },
        {
          id: 'ex-31-3-6',
          type: 'translation',
          question: 'Translate: ϣⲙⲏⲛⲉϣⲙⲏⲛ ⲛ̀ⲣⲱⲙⲓ',
          questionCoptic: 'ϣⲙⲏⲛⲉϣⲙⲏⲛ ⲛ̀ⲣⲱⲙⲓ',
          correctAnswer: '88 men',
          options: ['88 men', '80 men', '18 men', '8 men'],
          explanation: 'ϣⲙⲏⲛⲉϣⲙⲏⲛ = 88 (ϣⲙⲏⲛⲉ = 80 + ϣⲙⲏⲛ = 8)'
        }
      ]
    },
    {
      id: 'lesson-31-4',
      unitId: 'unit-31',
      title: 'Ordinal Numbers',
      description: 'First, second, third...',
      order: 4,
      xpReward: 25,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-31-4-1',
          type: 'multiple_choice',
          question: 'How do you say "first"?',
          correctAnswer: 'ⲡⲓϩⲟⲩⲓⲧ',
          options: ['ⲡⲓϩⲟⲩⲓⲧ', 'ⲡⲓⲙⲁϩⲥⲛⲁⲩ', 'ⲡⲓⲙⲁϩϣⲟⲙⲧ', 'ⲟⲩⲁⲓ'],
          explanation: 'ⲡⲓϩⲟⲩⲓⲧ (pi-houit) = the first (from ⲟⲩⲁⲓ = one)'
        },
        {
          id: 'ex-31-4-2',
          type: 'matching',
          question: 'Match ordinal numbers',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲡⲓϩⲟⲩⲓⲧ', english: 'first' },
            { coptic: 'ⲡⲓⲙⲁϩⲥⲛⲁⲩ', english: 'second' },
            { coptic: 'ⲡⲓⲙⲁϩϣⲟⲙⲧ', english: 'third' },
            { coptic: 'ⲡⲓⲙⲁϩϥⲧⲟⲟⲩ', english: 'fourth' }
          ]
        },
        {
          id: 'ex-31-4-3',
          type: 'translation',
          question: 'Translate: ⲡⲓⲙⲁϩϯⲟⲩ ⲛ̀ⲉϩⲟⲟⲩ',
          questionCoptic: 'ⲡⲓⲙⲁϩϯⲟⲩ ⲛ̀ⲉϩⲟⲟⲩ',
          correctAnswer: 'The fifth day',
          options: ['The fifth day', 'The third day', 'Five days', 'The first day'],
          explanation: 'ⲡⲓⲙⲁϩϯⲟⲩ ⲛ̀ⲉϩⲟⲟⲩ = the fifth day (ⲙⲁϩ- = ordinal prefix)'
        },
        {
          id: 'ex-31-4-4',
          type: 'fill_blank',
          question: 'Complete: ___ ⲛ̀ⲣⲱⲙⲓ = the seventh man',
          correctAnswer: 'ⲡⲓⲙⲁϩϣⲁϣϥ',
          options: ['ⲡⲓⲙⲁϩϣⲁϣϥ', 'ϣⲁϣϥ', 'ⲡⲓⲙⲁϩⲥⲟⲟⲩ', 'ⲙⲁϩϣⲁϣϥ'],
          explanation: 'ⲡⲓⲙⲁϩϣⲁϣϥ = the seventh (ⲙⲁϩ + ϣⲁϣϥ = 7)'
        },
        {
          id: 'ex-31-4-5',
          type: 'sentence_building',
          question: 'Build: "the tenth hour"',
          correctAnswer: 'ⲡⲓⲙⲁϩⲙⲏⲧ ⲛ̀ⲁϫⲡ',
          wordBank: ['ⲡⲓⲙⲁϩⲙⲏⲧ', 'ⲛ̀', 'ⲁϫⲡ', 'ⲙⲏⲧ'],
          explanation: 'ⲡⲓⲙⲁϩⲙⲏⲧ ⲛ̀ⲁϫⲡ = the tenth hour (ⲁϫⲡ = hour)'
        },
        {
          id: 'ex-31-4-6',
          type: 'multiple_choice',
          question: 'What pattern creates ordinal numbers?',
          correctAnswer: 'ⲙⲁϩ- + number',
          options: ['ⲙⲁϩ- + number', 'number + -ⲙⲁϩ', 'ⲛ̀ + number', 'number alone'],
          explanation: 'Ordinals use ⲙⲁϩ- prefix (except "first" = ⲡⲓϩⲟⲩⲓⲧ)'
        }
      ]
    }
  ]
};

export default unit31;
