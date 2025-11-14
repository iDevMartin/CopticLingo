import { Unit } from '../../types';

// UNIT 33: COLORS & DESCRIPTIVE ADJECTIVES
// Bohairic dialect - Essential descriptive vocabulary
// Fills gap: Colors, size, shape, and quality adjectives

const unit33: Unit = {
  id: 'unit-33',
  title: 'Colors & Descriptions',
  description: 'Master colors, sizes, shapes, and quality adjectives',
  order: 33,
  color: '#E91E63',
  lessons: [
    {
      id: 'lesson-33-1',
      unitId: 'unit-33',
      title: 'Basic Colors',
      description: 'Learn essential color vocabulary',
      order: 1,
      xpReward: 20,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-33-1-1',
          type: 'multiple_choice',
          question: 'What is "white" in Coptic?',
          correctAnswer: 'ⲟⲩⲃⲁϣ',
          options: ['ⲟⲩⲃⲁϣ', 'ⲭⲁⲙⲉ', 'ⲕⲁϣⲛⲓ', 'ⲟⲩⲱϣ'],
          explanation: 'ⲟⲩⲃⲁϣ (oubash) = white (from ancient Egyptian root for "bright/pure")'
        },
        {
          id: 'ex-33-1-2',
          type: 'matching',
          question: 'Match basic colors',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲟⲩⲃⲁϣ', english: 'white' },
            { coptic: 'ⲭⲁⲙⲉ', english: 'black' },
            { coptic: 'ⲕⲁϣⲛⲓ', english: 'red' },
            { coptic: 'ⲟⲩⲱϣ', english: 'green/blue' }
          ]
        },
        {
          id: 'ex-33-1-3',
          type: 'translation',
          question: 'Translate: ⲟⲩϩ̀ⲃⲱⲥ ⲛ̀ⲟⲩⲃⲁϣ',
          questionCoptic: 'ⲟⲩϩ̀ⲃⲱⲥ ⲛ̀ⲟⲩⲃⲁϣ',
          correctAnswer: 'A white garment',
          options: ['A white garment', 'White garments', 'The white garment', 'A bright garment'],
          explanation: 'ⲟⲩϩ̀ⲃⲱⲥ ⲛ̀ⲟⲩⲃⲁϣ = a white garment (ⲛ̀ links noun + adjective)'
        },
        {
          id: 'ex-33-1-4',
          type: 'fill_blank',
          question: 'Complete: ⲡⲓⲏⲣⲡ ___ = the red wine',
          correctAnswer: 'ⲛ̀ⲕⲁϣⲛⲓ',
          options: ['ⲛ̀ⲕⲁϣⲛⲓ', 'ⲛ̀ⲟⲩⲃⲁϣ', 'ⲛ̀ⲭⲁⲙⲉ', 'ⲕⲁϣⲛⲓ'],
          explanation: 'ⲡⲓⲏⲣⲡ ⲛ̀ⲕⲁϣⲛⲓ = the red wine (ⲛ̀ connects adjective)'
        },
        {
          id: 'ex-33-1-5',
          type: 'matching',
          question: 'Match more colors',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲟⲩⲱⲧⲉⲃ', english: 'yellow/golden' },
            { coptic: 'ⲥⲁⲛⲧⲉⲣⲁⲕⲓⲛⲏ', english: 'purple' },
            { coptic: 'ⲭⲟⲩⲱⲧ', english: 'gray' },
            { coptic: 'ⲃⲉⲣⲥⲓ', english: 'brown' }
          ]
        },
        {
          id: 'ex-33-1-6',
          type: 'sentence_building',
          question: 'Build: "The black book"',
          correctAnswer: 'ⲡⲓϫⲱⲙ ⲛ̀ⲭⲁⲙⲉ',
          wordBank: ['ⲡⲓϫⲱⲙ', 'ⲛ̀', 'ⲭⲁⲙⲉ', 'ⲟⲩⲃⲁϣ'],
          explanation: 'ⲡⲓϫⲱⲙ ⲛ̀ⲭⲁⲙⲉ = the black book'
        },
        {
          id: 'ex-33-1-7',
          type: 'multiple_choice',
          question: 'How do you say "green/blue"?',
          correctAnswer: 'ⲟⲩⲱϣ',
          options: ['ⲟⲩⲱϣ', 'ⲕⲁϣⲛⲓ', 'ⲟⲩⲱⲧⲉⲃ', 'ⲟⲩⲃⲁϣ'],
          explanation: 'ⲟⲩⲱϣ (ouosh) = green/blue (ancient Egyptian did not distinguish green from blue)'
        },
        {
          id: 'ex-33-1-8',
          type: 'translation',
          question: 'Translate: ϯϩⲓⲙⲓ ⲛ̀ⲟⲩⲱⲧⲉⲃ',
          questionCoptic: 'ϯϩⲓⲙⲓ ⲛ̀ⲟⲩⲱⲧⲉⲃ',
          correctAnswer: 'The golden woman / The yellow woman',
          options: ['The golden woman / The yellow woman', 'A golden woman', 'The white woman', 'The beautiful woman'],
          explanation: 'ϯϩⲓⲙⲓ ⲛ̀ⲟⲩⲱⲧⲉⲃ = the golden/yellow woman (ⲟⲩⲱⲧⲉⲃ = gold-colored)'
        }
      ]
    },
    {
      id: 'lesson-33-2',
      unitId: 'unit-33',
      title: 'Size & Shape',
      description: 'Adjectives for describing size and shape',
      order: 2,
      xpReward: 20,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-33-2-1',
          type: 'matching',
          question: 'Match size adjectives',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲛⲓϣϯ', english: 'big/great' },
            { coptic: 'ⲕⲟⲩϫⲓ', english: 'small/little' },
            { coptic: 'ϣⲁϣ', english: 'long/tall' },
            { coptic: 'ⲕⲁϩⲓ', english: 'short' }
          ]
        },
        {
          id: 'ex-33-2-2',
          type: 'translation',
          question: 'Translate: ⲟⲩⲛⲓϣϯ ⲛ̀ϩⲓ',
          questionCoptic: 'ⲟⲩⲛⲓϣϯ ⲛ̀ϩⲓ',
          correctAnswer: 'A big house',
          options: ['A big house', 'The big house', 'Big houses', 'A great house'],
          explanation: 'ⲟⲩⲛⲓϣϯ ⲛ̀ϩⲓ = a big/great house'
        },
        {
          id: 'ex-33-2-3',
          type: 'fill_blank',
          question: 'Complete: ⲟⲩ___ ⲛ̀ⲁ̀ⲗⲟⲩ = a small boy',
          correctAnswer: 'ⲕⲟⲩϫⲓ',
          options: ['ⲕⲟⲩϫⲓ', 'ⲛⲓϣϯ', 'ⲕⲁϩⲓ', 'ϣⲁϣ'],
          explanation: 'ⲟⲩⲕⲟⲩϫⲓ ⲛ̀ⲁ̀ⲗⲟⲩ = a small/little boy'
        },
        {
          id: 'ex-33-2-4',
          type: 'matching',
          question: 'Match shape and dimension words',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲥⲟⲗⲥⲉⲗ', english: 'round/circular' },
            { coptic: 'ⲟⲩⲱϣ', english: 'wide/broad' },
            { coptic: 'ϭⲓⲃⲓ', english: 'narrow' },
            { coptic: 'ⲥⲟⲩⲧⲱⲛ', english: 'straight' }
          ]
        },
        {
          id: 'ex-33-2-5',
          type: 'sentence_building',
          question: 'Build: "A long road"',
          correctAnswer: 'ⲟⲩϣⲁϣ ⲙ̀ⲙⲱⲓⲧ',
          wordBank: ['ⲟⲩϣⲁϣ', 'ⲙ̀', 'ⲙⲱⲓⲧ', 'ⲕⲁϩⲓ'],
          explanation: 'ⲟⲩϣⲁϣ ⲙ̀ⲙⲱⲓⲧ = a long road (ⲙ̀ links before ⲙ)'
        },
        {
          id: 'ex-33-2-6',
          type: 'translation',
          question: 'Translate: ⲡⲓⲣⲱⲙⲓ ⲙ̀ϣⲁϣ',
          questionCoptic: 'ⲡⲓⲣⲱⲙⲓ ⲙ̀ϣⲁϣ',
          correctAnswer: 'The tall man',
          options: ['The tall man', 'The long man', 'A tall man', 'The short man'],
          explanation: 'ⲡⲓⲣⲱⲙⲓ ⲙ̀ϣⲁϣ = the tall man (ϣⲁϣ = long/tall)'
        },
        {
          id: 'ex-33-2-7',
          type: 'multiple_choice',
          question: 'What is the opposite of ⲛⲓϣϯ (big)?',
          correctAnswer: 'ⲕⲟⲩϫⲓ',
          options: ['ⲕⲟⲩϫⲓ', 'ϣⲁϣ', 'ⲕⲁϩⲓ', 'ⲟⲩⲱϣ'],
          explanation: 'ⲕⲟⲩϫⲓ (kouji) = small/little, opposite of ⲛⲓϣϯ (big/great)'
        },
        {
          id: 'ex-33-2-8',
          type: 'fill_blank',
          question: 'Complete: ⲟⲩⲕⲁϩⲓ ⲛ̀___ = a short table',
          correctAnswer: 'ⲧⲣⲁⲡⲉⲍⲁ',
          options: ['ⲧⲣⲁⲡⲉⲍⲁ', 'ϩⲓ', 'ⲙⲱⲓⲧ', 'ⲙⲟⲩϯ'],
          explanation: 'ⲟⲩⲕⲁϩⲓ ⲛ̀ⲧⲣⲁⲡⲉⲍⲁ = a short table'
        }
      ]
    },
    {
      id: 'lesson-33-3',
      unitId: 'unit-33',
      title: 'Quality Descriptors',
      description: 'Good, bad, beautiful, ugly adjectives',
      order: 3,
      xpReward: 25,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-33-3-1',
          type: 'matching',
          question: 'Match quality adjectives',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲛⲁⲛⲉϥ', english: 'good/beautiful' },
            { coptic: 'ϩⲱⲟⲩ', english: 'bad/evil' },
            { coptic: 'ⲥⲁⲓⲉ', english: 'wise' },
            { coptic: 'ⲥⲟϫ', english: 'foolish' }
          ]
        },
        {
          id: 'ex-33-3-2',
          type: 'translation',
          question: 'Translate: ⲟⲩⲛⲁⲛⲉϥ ⲙ̀ⲙⲁ',
          questionCoptic: 'ⲟⲩⲛⲁⲛⲉϥ ⲙ̀ⲙⲁ',
          correctAnswer: 'A good place',
          options: ['A good place', 'The good place', 'Good places', 'A beautiful place'],
          explanation: 'ⲟⲩⲛⲁⲛⲉϥ ⲙ̀ⲙⲁ = a good/beautiful place'
        },
        {
          id: 'ex-33-3-3',
          type: 'fill_blank',
          question: 'Complete: ⲡⲓⲉϩⲟⲟⲩ ___ = the bad day',
          correctAnswer: 'ⲛ̀ϩⲱⲟⲩ',
          options: ['ⲛ̀ϩⲱⲟⲩ', 'ⲛ̀ⲛⲁⲛⲉϥ', 'ⲙ̀ϩⲱⲟⲩ', 'ϩⲱⲟⲩ'],
          explanation: 'ⲡⲓⲉϩⲟⲟⲩ ⲛ̀ϩⲱⲟⲩ = the bad/evil day'
        },
        {
          id: 'ex-33-3-4',
          type: 'matching',
          question: 'Match more quality words',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲥⲁⲃⲉ', english: 'wise/intelligent' },
            { coptic: 'ⲧⲁⲓⲏⲟⲩⲧ', english: 'honored/precious' },
            { coptic: 'ϣⲁⲙⲙⲟ', english: 'strange/foreign' },
            { coptic: 'ⲃⲉⲣⲓ', english: 'new' }
          ]
        },
        {
          id: 'ex-33-3-5',
          type: 'sentence_building',
          question: 'Build: "A wise man"',
          correctAnswer: 'ⲟⲩⲥⲁⲓⲉ ⲛ̀ⲣⲱⲙⲓ',
          wordBank: ['ⲟⲩⲥⲁⲓⲉ', 'ⲛ̀', 'ⲣⲱⲙⲓ', 'ⲥⲟϫ'],
          explanation: 'ⲟⲩⲥⲁⲓⲉ ⲛ̀ⲣⲱⲙⲓ = a wise man'
        },
        {
          id: 'ex-33-3-6',
          type: 'translation',
          question: 'Translate: ⲟⲩⲃⲉⲣⲓ ⲛ̀ϫⲱⲙ',
          questionCoptic: 'ⲟⲩⲃⲉⲣⲓ ⲛ̀ϫⲱⲙ',
          correctAnswer: 'A new book',
          options: ['A new book', 'The new book', 'New books', 'A strange book'],
          explanation: 'ⲟⲩⲃⲉⲣⲓ ⲛ̀ϫⲱⲙ = a new book (ⲃⲉⲣⲓ = new)'
        },
        {
          id: 'ex-33-3-7',
          type: 'multiple_choice',
          question: 'What is the opposite of ⲛⲁⲛⲉϥ (good)?',
          correctAnswer: 'ϩⲱⲟⲩ',
          options: ['ϩⲱⲟⲩ', 'ⲥⲁⲓⲉ', 'ⲃⲉⲣⲓ', 'ⲥⲟϫ'],
          explanation: 'ϩⲱⲟⲩ (hou) = bad/evil, opposite of ⲛⲁⲛⲉϥ (good/beautiful)'
        },
        {
          id: 'ex-33-3-8',
          type: 'translation',
          question: 'Translate: ⲫϯ ⲛⲁⲛⲉϥ',
          questionCoptic: 'ⲫϯ ⲛⲁⲛⲉϥ',
          correctAnswer: 'God is good',
          options: ['God is good', 'The good God', 'Good God', 'God the good'],
          explanation: 'ⲫϯ ⲛⲁⲛⲉϥ = God is good (predicate adjective with copula implied)'
        }
      ]
    },
    {
      id: 'lesson-33-4',
      unitId: 'unit-33',
      title: 'Comparative & Superlative',
      description: 'Bigger, biggest, more, most',
      order: 4,
      xpReward: 25,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-33-4-1',
          type: 'multiple_choice',
          question: 'How do you say "more/greater"?',
          correctAnswer: 'ϩⲟⲩⲟ̀',
          options: ['ϩⲟⲩⲟ̀', 'ⲛⲓϣϯ', 'ⲉ̀ϩⲟⲧⲉ', 'ⲙⲁⲗⲗⲟⲛ'],
          explanation: 'ϩⲟⲩⲟ̀ (houo) = more/greater (comparative particle)'
        },
        {
          id: 'ex-33-4-2',
          type: 'translation',
          question: 'Translate: ϩⲟⲩⲟ̀ ⲉ̀ⲫⲁⲓ',
          questionCoptic: 'ϩⲟⲩⲟ̀ ⲉ̀ⲫⲁⲓ',
          correctAnswer: 'Greater than this',
          options: ['Greater than this', 'More than this', 'Better than this', 'Bigger than this'],
          explanation: 'ϩⲟⲩⲟ̀ ⲉ̀ⲫⲁⲓ = more/greater than this (ϩⲟⲩⲟ̀ ⲉ̀- = comparative construction)'
        },
        {
          id: 'ex-33-4-3',
          type: 'sentence_building',
          question: 'Build: "Bigger than that"',
          correctAnswer: 'ⲟⲩⲛⲓϣϯ ⲉ̀ⲫⲏ',
          wordBank: ['ⲟⲩⲛⲓϣϯ', 'ⲉ̀', 'ⲫⲏ', 'ⲫⲁⲓ'],
          explanation: 'ⲟⲩⲛⲓϣϯ ⲉ̀ⲫⲏ = bigger than that (lit. "big to-that")'
        },
        {
          id: 'ex-33-4-4',
          type: 'fill_blank',
          question: 'Complete: ⲫⲁⲓ ___ ⲉ̀ⲫⲏ = This is better than that',
          correctAnswer: 'ⲛⲁⲛⲉϥ',
          options: ['ⲛⲁⲛⲉϥ', 'ϩⲟⲩⲟ̀', 'ⲛⲓϣϯ', 'ⲕⲟⲩϫⲓ'],
          explanation: 'ⲫⲁⲓ ⲛⲁⲛⲉϥ ⲉ̀ⲫⲏ = this is better/more good than that'
        },
        {
          id: 'ex-33-4-5',
          type: 'matching',
          question: 'Match comparative expressions',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ϩⲟⲩⲟ̀ ⲉ̀', english: 'more than' },
            { coptic: 'ⲙ̀ⲫⲣⲏϯ ⲛ̀', english: 'like/similar to' },
            { coptic: 'ⲉ̀ϩⲟⲧⲉ', english: 'than (comparison)' },
            { coptic: 'ⲙⲁⲗⲗⲟⲛ', english: 'rather/more' }
          ]
        },
        {
          id: 'ex-33-4-6',
          type: 'translation',
          question: 'Translate: ⲫⲁⲓ ⲛⲓϣϯ ⲉ̀ϩⲟⲧⲉ ⲫⲏ',
          questionCoptic: 'ⲫⲁⲓ ⲛⲓϣϯ ⲉ̀ϩⲟⲧⲉ ⲫⲏ',
          correctAnswer: 'This is bigger than that',
          options: ['This is bigger than that', 'This is big like that', 'That is bigger than this', 'This is very big'],
          explanation: 'ⲫⲁⲓ ⲛⲓϣϯ ⲉ̀ϩⲟⲧⲉ ⲫⲏ = this is big(ger) than that (ⲉ̀ϩⲟⲧⲉ = than)'
        },
        {
          id: 'ex-33-4-7',
          type: 'multiple_choice',
          question: 'How do you express "very" or "exceedingly"?',
          correctAnswer: 'ⲉⲙⲁϣⲱ',
          options: ['ⲉⲙⲁϣⲱ', 'ϩⲟⲩⲟ̀', 'ⲙⲁⲗⲗⲟⲛ', 'ⲛⲓϣϯ'],
          explanation: 'ⲉⲙⲁϣⲱ (emasho) = very/exceedingly/greatly'
        },
        {
          id: 'ex-33-4-8',
          type: 'translation',
          question: 'Translate: ⲛⲁⲛⲉϥ ⲉⲙⲁϣⲱ',
          questionCoptic: 'ⲛⲁⲛⲉϥ ⲉⲙⲁϣⲱ',
          correctAnswer: 'Very good/exceedingly good',
          options: ['Very good/exceedingly good', 'Better than good', 'More good', 'The best'],
          explanation: 'ⲛⲁⲛⲉϥ ⲉⲙⲁϣⲱ = very good, exceedingly good (superlative intensifier)'
        }
      ]
    }
  ]
};

export default unit33;
