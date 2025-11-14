import { Unit } from '../../types';

// UNIT 14: SUFFIX PRONOUNS (OBJECT PRONOUNS)
// Verified for Bohairic dialect consistency
// Based on OUTLINE OF BOHAIRIC COPTIC MORPHOLOGY pages 11-12

const unit14: Unit = {
  id: 'unit-14',
  title: 'Suffix Pronouns',
  description: 'Learn object pronouns attached to verbs and prepositions',
  order: 14,
  color: '#00CD9C',
  lessons: [
    {
      id: 'lesson-14-1',
      unitId: 'unit-14',
      title: 'Suffix Pronouns - Singular',
      description: 'me, you (m/f), him, her',
      order: 1,
      xpReward: 25,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-14-1-1',
          type: 'multiple_choice',
          question: 'What is the suffix pronoun for "me"?',
          correctAnswer: '-ⲓ',
          options: ['-ⲓ', '-ⲕ', '-ϥ', '-ⲛ'],
          explanation: '-ⲓ is the suffix pronoun meaning "me" (attached to verbs/prepositions)'
        },
        {
          id: 'ex-14-1-2',
          type: 'matching',
          question: 'Match singular suffix pronouns',
          correctAnswer: 'matched',
          pairs: [
            { coptic: '-ⲓ', english: 'me' },
            { coptic: '-ⲕ', english: 'you (m)' },
            { coptic: '-ⲉ', english: 'you (f)' },
            { coptic: '-ϥ', english: 'him' }
          ]
        },
        {
          id: 'ex-14-1-3',
          type: 'translation',
          question: 'Translate: ⲁϥⲛⲁⲩ ⲉ̀ⲣⲟⲓ',
          questionCoptic: 'ⲁϥⲛⲁⲩ ⲉ̀ⲣⲟⲓ',
          correctAnswer: 'he saw me',
          options: ['he saw me', 'he saw you', 'I saw him', 'he saw her'],
          explanation: 'ⲁϥⲛⲁⲩ ⲉ̀ⲣⲟⲓ = he saw + to-me = "he saw me"'
        },
        {
          id: 'ex-14-1-4',
          type: 'multiple_choice',
          question: 'What does ⲁⲓⲛⲁⲩ ⲉ̀ⲣⲟⲕ mean?',
          questionCoptic: 'ⲁⲓⲛⲁⲩ ⲉ̀ⲣⲟⲕ',
          correctAnswer: 'I saw you (m)',
          options: ['I saw you (m)', 'I saw you (f)', 'you saw me', 'I saw him'],
          explanation: 'ⲁⲓⲛⲁⲩ ⲉ̀ⲣⲟⲕ = I saw + to-you(m) = "I saw you"'
        },
        {
          id: 'ex-14-1-5',
          type: 'sentence_building',
          question: 'Build: "She loves him"',
          correctAnswer: 'ⲥⲙⲉⲛⲣⲉ ⲙⲙⲟϥ',
          wordBank: ['ⲥ', 'ⲙⲉⲛⲣⲉ', 'ⲙⲙⲟ', 'ϥ'],
          explanation: 'ⲥⲙⲉⲛⲣⲉ ⲙⲙⲟϥ = she loves + him = "she loves him" (Bohairic ⲙⲉⲛⲣⲉ not ⲙⲉⲣⲓ!)'
        },
        {
          id: 'ex-14-1-6',
          type: 'translation',
          question: 'Translate: ⲁⲓⲥⲱⲧⲙ ⲉ̀ⲣⲟⲥ',
          questionCoptic: 'ⲁⲓⲥⲱⲧⲙ ⲉ̀ⲣⲟⲥ',
          correctAnswer: 'I heard her',
          options: ['I heard her', 'I heard him', 'she heard me', 'I heard you'],
          explanation: 'ⲁⲓⲥⲱⲧⲙ ⲉ̀ⲣⲟⲥ = I heard + to-her = "I heard her"'
        },
        {
          id: 'ex-14-1-7',
          type: 'fill_blank',
          question: 'Complete: ⲁⲕⲛⲁⲩ ⲉ̀ⲣⲟ___ = you saw her',
          correctAnswer: 'ⲥ',
          options: ['ⲥ', 'ϥ', 'ⲓ', 'ⲕ'],
          explanation: '-ⲥ is the suffix pronoun for "her"'
        },
        {
          id: 'ex-14-1-8',
          type: 'matching',
          question: 'Match complete phrases',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲁϥⲛⲁⲩ ⲉ̀ⲣⲟⲓ', english: 'he saw me' },
            { coptic: 'ⲁⲓⲛⲁⲩ ⲉ̀ⲣⲟⲕ', english: 'I saw you (m)' },
            { coptic: 'ⲁⲥⲛⲁⲩ ⲉ̀ⲣⲟϥ', english: 'she saw him' },
            { coptic: 'ⲁⲓⲛⲁⲩ ⲉ̀ⲣⲟ', english: 'I saw you (f)' }
          ]
        }
      ]
    },
    {
      id: 'lesson-14-2',
      unitId: 'unit-14',
      title: 'Suffix Pronouns - Plural',
      description: 'us, you (plural), them',
      order: 2,
      xpReward: 25,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-14-2-1',
          type: 'matching',
          question: 'Match plural suffix pronouns',
          correctAnswer: 'matched',
          pairs: [
            { coptic: '-ⲛ', english: 'us' },
            { coptic: '-ⲧⲉⲛ', english: 'you (plural)' },
            { coptic: '-ⲟⲩ', english: 'them' }
          ]
        },
        {
          id: 'ex-14-2-2',
          type: 'translation',
          question: 'Translate: ⲁϥⲛⲁⲩ ⲉ̀ⲣⲟⲛ',
          questionCoptic: 'ⲁϥⲛⲁⲩ ⲉ̀ⲣⲟⲛ',
          correctAnswer: 'he saw us',
          options: ['he saw us', 'he saw you', 'he saw them', 'we saw him'],
          explanation: 'ⲁϥⲛⲁⲩ ⲉ̀ⲣⲟⲛ = he saw + to-us = "he saw us"'
        },
        {
          id: 'ex-14-2-3',
          type: 'multiple_choice',
          question: 'What does ⲁⲓⲥⲱⲧⲙ ⲉ̀ⲣⲱⲧⲉⲛ mean?',
          questionCoptic: 'ⲁⲓⲥⲱⲧⲙ ⲉ̀ⲣⲱⲧⲉⲛ',
          correctAnswer: 'I heard you (plural)',
          options: ['I heard you (plural)', 'I heard them', 'I heard us', 'you heard me'],
          explanation: 'ⲁⲓⲥⲱⲧⲙ ⲉ̀ⲣⲱⲧⲉⲛ = I heard + to-you(pl) = "I heard you all"'
        },
        {
          id: 'ex-14-2-4',
          type: 'sentence_building',
          question: 'Build: "We love them"',
          correctAnswer: 'ⲧⲉⲛⲙⲉⲛⲣⲉ ⲙⲙⲱⲟⲩ',
          wordBank: ['ⲧⲉⲛ', 'ⲙⲉⲛⲣⲉ', 'ⲙⲙⲱ', 'ⲟⲩ'],
          explanation: 'ⲧⲉⲛⲙⲉⲛⲣⲉ ⲙⲙⲱⲟⲩ = we love + them = "we love them" (Bohairic ⲙⲉⲛⲣⲉ not ⲙⲉⲣⲓ!)'
        },
        {
          id: 'ex-14-2-5',
          type: 'translation',
          question: 'Translate: ⲁⲩⲛⲁⲩ ⲉ̀ⲣⲟⲛ',
          questionCoptic: 'ⲁⲩⲛⲁⲩ ⲉ̀ⲣⲟⲛ',
          correctAnswer: 'they saw us',
          options: ['they saw us', 'they saw you', 'we saw them', 'they saw them'],
          explanation: 'ⲁⲩⲛⲁⲩ ⲉ̀ⲣⲟⲛ = they saw + to-us = "they saw us"'
        },
        {
          id: 'ex-14-2-6',
          type: 'fill_blank',
          question: 'Complete: ⲁⲛⲥⲱⲧⲙ ⲉ̀ⲣⲱ___ = we heard them',
          correctAnswer: 'ⲟⲩ',
          options: ['ⲟⲩ', 'ⲛ', 'ⲧⲉⲛ', 'ϥ'],
          explanation: '-ⲟⲩ is the suffix pronoun for "them"'
        },
        {
          id: 'ex-14-2-7',
          type: 'matching',
          question: 'Match all suffix pronouns',
          correctAnswer: 'matched',
          pairs: [
            { coptic: '-ⲓ', english: 'me' },
            { coptic: '-ⲛ', english: 'us' },
            { coptic: '-ⲧⲉⲛ', english: 'you (pl)' },
            { coptic: '-ⲟⲩ', english: 'them' }
          ]
        },
        {
          id: 'ex-14-2-8',
          type: 'multiple_choice',
          question: 'What is "God loves us" in Coptic?',
          correctAnswer: 'ⲫϯ ⲙⲉⲛⲣⲉ ⲙⲙⲟⲛ',
          options: ['ⲫϯ ⲙⲉⲛⲣⲉ ⲙⲙⲟⲛ', 'ⲫϯ ⲙⲉⲛⲣⲉ ⲙⲙⲱⲟⲩ', 'ⲫϯ ⲙⲉⲛⲣⲉ ⲙⲙⲟⲓ', 'ⲧⲉⲛⲙⲉⲛⲣⲉ ⲙⲫϯ'],
          explanation: 'ⲫϯ ⲙⲉⲛⲣⲉ ⲙⲙⲟⲛ = God loves + us (Bohairic: ⲫϯ not ⲫⲛⲟⲩϯ, ⲙⲉⲛⲣⲉ not ⲙⲉⲣⲓ!)'
        }
      ]
    },
    {
      id: 'lesson-14-3',
      unitId: 'unit-14',
      title: 'Suffix Pronouns with Prepositions',
      description: 'Using suffixes with common prepositions',
      order: 3,
      xpReward: 25,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-14-3-1',
          type: 'multiple_choice',
          question: 'What does ⲉ̀ⲣⲟⲓ mean?',
          questionCoptic: 'ⲉ̀ⲣⲟⲓ',
          correctAnswer: 'to me / at me',
          options: ['to me / at me', 'from me', 'with me', 'in me'],
          explanation: 'ⲉ̀ⲣⲟ- is the preposition "to/at" + suffix pronouns'
        },
        {
          id: 'ex-14-3-2',
          type: 'matching',
          question: 'Match preposition + suffix forms',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲉ̀ⲣⲟⲓ', english: 'to me' },
            { coptic: 'ⲉ̀ⲣⲟⲕ', english: 'to you (m)' },
            { coptic: 'ⲉ̀ⲣⲟϥ', english: 'to him' },
            { coptic: 'ⲉ̀ⲣⲟⲥ', english: 'to her' }
          ]
        },
        {
          id: 'ex-14-3-3',
          type: 'translation',
          question: 'Translate: ⲛⲉⲙⲏⲓ',
          questionCoptic: 'ⲛⲉⲙⲏⲓ',
          correctAnswer: 'with me',
          options: ['with me', 'to me', 'from me', 'in me'],
          explanation: 'ⲛⲉⲙ- is "with" + suffix = ⲛⲉⲙⲏⲓ "with me"'
        },
        {
          id: 'ex-14-3-4',
          type: 'sentence_building',
          question: 'Build: "He came with us"',
          correctAnswer: 'ⲁϥⲓ̀ ⲛⲉⲙⲁⲛ',
          wordBank: ['ⲁϥ', 'ⲓ̀', 'ⲛⲉⲙⲁ', 'ⲛ'],
          explanation: 'ⲁϥⲓ̀ ⲛⲉⲙⲁⲛ = he came with-us (Bohairic ⲓ̀ not ⲉⲓ!)'
        },
        {
          id: 'ex-14-3-5',
          type: 'multiple_choice',
          question: 'What does ⲙⲙⲟϥ mean?',
          questionCoptic: 'ⲙⲙⲟϥ',
          correctAnswer: 'of him / from him',
          options: ['of him / from him', 'to him', 'with him', 'in him'],
          explanation: 'ⲙⲙⲟ- is used with verbs meaning "of/from/about" + suffix'
        },
        {
          id: 'ex-14-3-6',
          type: 'translation',
          question: 'Translate: ⲁϥϫⲱ ⲙⲙⲟⲥ',
          questionCoptic: 'ⲁϥϫⲱ ⲙⲙⲟⲥ',
          correctAnswer: 'he said it / he spoke of it',
          options: ['he said it / he spoke of it', 'he heard it', 'he saw it', 'he loved it'],
          explanation: 'ⲁϥϫⲱ ⲙⲙⲟⲥ = he said + of-it = "he said it"'
        },
        {
          id: 'ex-14-3-7',
          type: 'matching',
          question: 'Match prepositions with suffixes',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲉ̀ⲣⲟⲛ', english: 'to us' },
            { coptic: 'ⲛⲉⲙⲱⲟⲩ', english: 'with them' },
            { coptic: 'ⲙⲙⲟⲓ', english: 'of me' },
            { coptic: 'ⲉ̀ⲣⲱⲧⲉⲛ', english: 'to you (pl)' }
          ]
        },
        {
          id: 'ex-14-3-8',
          type: 'fill_blank',
          question: 'Complete: ⲁϥⲙⲟⲩϯ ⲉ̀ⲣⲱ___ = he called to them',
          correctAnswer: 'ⲟⲩ',
          options: ['ⲟⲩ', 'ⲛ', 'ⲓ', 'ϥ'],
          explanation: 'ⲁϥⲙⲟⲩϯ ⲉ̀ⲣⲱⲟⲩ = he called to-them (Bohairic ⲙⲟⲩϯ not ⲙⲟⲩⲧⲉ!)'
        }
      ]
    }
  ]
};

export default unit14;
