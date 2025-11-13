import { Unit } from '../../types';

// UNIT 10: PRESENT TENSE
// Verified for Bohairic dialect consistency
// Based on OUTLINE OF BOHAIRIC COPTIC MORPHOLOGY pages 2-3

const unit10: Unit = {
  id: 'unit-10',
  title: 'Present Tense',
  description: 'Express current actions and states',
  order: 10,
  color: '#58CC02',
  lessons: [
    {
      id: 'lesson-10-1',
      unitId: 'unit-10',
      title: 'Present Tense - Singular',
      description: 'I do, you do, he/she does',
      order: 1,
      xpReward: 25,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-10-1-1',
          type: 'multiple_choice',
          question: 'How do you say "I hear/listen" in present tense?',
          correctAnswer: 'ϯⲥⲱⲧⲙ',
          options: ['ϯⲥⲱⲧⲙ', 'ⲁⲓⲥⲱⲧⲙ', 'ⲛⲁⲓⲥⲱⲧⲙ', 'ϯⲛⲁⲥⲱⲧⲙ'],
          explanation: 'ϯⲥⲱⲧⲙ = ϯ (I, present) + ⲥⲱⲧⲙ (hear) = "I hear/am hearing"'
        },
        {
          id: 'ex-10-1-2',
          type: 'matching',
          question: 'Match present tense pronouns',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ϯ-', english: 'I (present)' },
            { coptic: 'ⲕ-', english: 'you do (m)' },
            { coptic: 'ⲧⲉ-', english: 'you do (f)' },
            { coptic: 'ϥ-', english: 'he does' }
          ]
        },
        {
          id: 'ex-10-1-3',
          type: 'translation',
          question: 'Translate: ⲕⲥⲱⲧⲙ',
          questionCoptic: 'ⲕⲥⲱⲧⲙ',
          correctAnswer: 'you (m) hear',
          options: ['you (m) hear', 'I hear', 'he hears', 'you (f) hear'],
          explanation: 'ⲕⲥⲱⲧⲙ = ⲕ (you, m, present) + ⲥⲱⲧⲙ (hear)'
        },
        {
          id: 'ex-10-1-4',
          type: 'sentence_building',
          question: 'Build: "She eats"',
          correctAnswer: 'ⲥⲟⲩⲱⲙ',
          wordBank: ['ⲥ', 'ⲟⲩⲱⲙ', 'ⲧⲉ', 'ϥ'],
          explanation: 'ⲥⲟⲩⲱⲙ = ⲥ (she, present) + ⲟⲩⲱⲙ (eat)'
        },
        {
          id: 'ex-10-1-5',
          type: 'multiple_choice',
          question: 'What is the present tense prefix for "you (feminine)"?',
          correctAnswer: 'ⲧⲉ-',
          options: ['ⲧⲉ-', 'ⲕ-', 'ⲥ-', 'ϯ-'],
          explanation: 'ⲧⲉ- is used for "you do" when addressing a female'
        },
        {
          id: 'ex-10-1-6',
          type: 'translation',
          question: 'Translate: ϥⲛⲁⲩ',
          questionCoptic: 'ϥⲛⲁⲩ',
          correctAnswer: 'he sees',
          options: ['he sees', 'I see', 'you see', 'she sees'],
          explanation: 'ϥⲛⲁⲩ = ϥ (he, present) + ⲛⲁⲩ (see) = "he sees"'
        },
        {
          id: 'ex-10-1-7',
          type: 'fill_blank',
          question: 'Complete: ___ ⲟⲩⲱⲙ = I eat',
          correctAnswer: 'ϯ',
          options: ['ϯ', 'ⲕ', 'ϥ', 'ⲥ'],
          explanation: 'ϯ is the present tense prefix for "I do"'
        },
        {
          id: 'ex-10-1-8',
          type: 'matching',
          question: 'Match complete present tense verbs',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ϯⲙⲟϣⲓ', english: 'I walk' },
            { coptic: 'ⲕⲙⲟϣⲓ', english: 'you (m) walk' },
            { coptic: 'ⲧⲉⲙⲟϣⲓ', english: 'you (f) walk' },
            { coptic: 'ϥⲙⲟϣⲓ', english: 'he walks' }
          ]
        }
      ]
    },
    {
      id: 'lesson-10-2',
      unitId: 'unit-10',
      title: 'Present Tense - Plural',
      description: 'we do, you (pl) do, they do',
      order: 2,
      xpReward: 25,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-10-2-1',
          type: 'matching',
          question: 'Match plural present tense pronouns',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲧⲉⲛ-', english: 'we do' },
            { coptic: 'ⲧⲉⲧⲛ-', english: 'you (pl) do' },
            { coptic: 'ⲥⲉ-', english: 'they do' }
          ]
        },
        {
          id: 'ex-10-2-2',
          type: 'translation',
          question: 'Translate: ⲧⲉⲛⲥⲱⲧⲙ',
          questionCoptic: 'ⲧⲉⲛⲥⲱⲧⲙ',
          correctAnswer: 'we hear',
          options: ['we hear', 'you (pl) hear', 'they hear', 'I hear'],
          explanation: 'ⲧⲉⲛⲥⲱⲧⲙ = ⲧⲉⲛ (we, present) + ⲥⲱⲧⲙ (hear)'
        },
        {
          id: 'ex-10-2-3',
          type: 'multiple_choice',
          question: 'How do you say "they see"?',
          correctAnswer: 'ⲥⲉⲛⲁⲩ',
          options: ['ⲥⲉⲛⲁⲩ', 'ⲧⲉⲛⲛⲁⲩ', 'ⲧⲉⲧⲛⲛⲁⲩ', 'ϥⲛⲁⲩ'],
          explanation: 'ⲥⲉⲛⲁⲩ = ⲥⲉ (they, present) + ⲛⲁⲩ (see)'
        },
        {
          id: 'ex-10-2-4',
          type: 'sentence_building',
          question: 'Build: "You (plural) eat"',
          correctAnswer: 'ⲧⲉⲧⲛⲟⲩⲱⲙ',
          wordBank: ['ⲧⲉⲧⲛ', 'ⲟⲩⲱⲙ', 'ⲧⲉⲛ', 'ⲥⲉ'],
          explanation: 'ⲧⲉⲧⲛⲟⲩⲱⲙ = ⲧⲉⲧⲛ (you pl, present) + ⲟⲩⲱⲙ (eat)'
        },
        {
          id: 'ex-10-2-5',
          type: 'translation',
          question: 'Translate: ⲥⲉⲙⲟϣⲓ',
          questionCoptic: 'ⲥⲉⲙⲟϣⲓ',
          correctAnswer: 'they walk',
          options: ['they walk', 'we walk', 'you walk', 'I walk'],
          explanation: 'ⲥⲉⲙⲟϣⲓ = ⲥⲉ (they, present) + ⲙⲟϣⲓ (walk) - Bohairic verb form!'
        },
        {
          id: 'ex-10-2-6',
          type: 'fill_blank',
          question: 'Complete: ___ ⲥⲱ = we drink',
          correctAnswer: 'ⲧⲉⲛ',
          options: ['ⲧⲉⲛ', 'ⲧⲉⲧⲛ', 'ⲥⲉ', 'ϯ'],
          explanation: 'ⲧⲉⲛ is the present tense prefix for "we do"'
        },
        {
          id: 'ex-10-2-7',
          type: 'matching',
          question: 'Match present tense sentences',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲧⲉⲛⲓ̀ⲣⲓ', english: 'we do/make' },
            { coptic: 'ⲧⲉⲧⲛⲓ̀ⲣⲓ', english: 'you (pl) do/make' },
            { coptic: 'ⲥⲉⲓ̀ⲣⲓ', english: 'they do/make' }
          ]
        },
        {
          id: 'ex-10-2-8',
          type: 'multiple_choice',
          question: 'What is "you (plural) give" in Coptic?',
          correctAnswer: 'ⲧⲉⲧⲛϯ',
          options: ['ⲧⲉⲧⲛϯ', 'ⲧⲉⲛϯ', 'ⲥⲉϯ', 'ⲕϯ'],
          explanation: 'ⲧⲉⲧⲛϯ = ⲧⲉⲧⲛ (you pl, present) + Ϯ (give)'
        }
      ]
    },
    {
      id: 'lesson-10-3',
      unitId: 'unit-10',
      title: 'Present Tense Practice',
      description: 'Master all present tense forms',
      order: 3,
      xpReward: 25,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-10-3-1',
          type: 'matching',
          question: 'Match all present tense forms of "to hear"',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ϯⲥⲱⲧⲙ', english: 'I hear' },
            { coptic: 'ⲕⲥⲱⲧⲙ', english: 'you (m) hear' },
            { coptic: 'ⲧⲉⲥⲱⲧⲙ', english: 'you (f) hear' },
            { coptic: 'ϥⲥⲱⲧⲙ', english: 'he hears' }
          ]
        },
        {
          id: 'ex-10-3-2',
          type: 'matching',
          question: 'Match more present forms of "to hear"',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲥⲥⲱⲧⲙ', english: 'she hears' },
            { coptic: 'ⲧⲉⲛⲥⲱⲧⲙ', english: 'we hear' },
            { coptic: 'ⲧⲉⲧⲛⲥⲱⲧⲙ', english: 'you (pl) hear' },
            { coptic: 'ⲥⲉⲥⲱⲧⲙ', english: 'they hear' }
          ]
        },
        {
          id: 'ex-10-3-3',
          type: 'translation',
          question: 'Translate: ⲧⲉⲛϣⲉⲛⲓ ⲉϯⲉⲕⲕⲗⲏⲥⲓⲁ',
          questionCoptic: 'ⲧⲉⲛϣⲉⲛⲓ ⲉϯⲉⲕⲕⲗⲏⲥⲓⲁ',
          correctAnswer: 'we go to church',
          options: ['we go to church', 'they go to church', 'you go to church', 'I go to church'],
          explanation: 'ⲧⲉⲛϣⲉⲛⲓ ⲉϯⲉⲕⲕⲗⲏⲥⲓⲁ = we go to the church (Bohairic ϣⲉⲛⲓ not ⲃⲱⲕ!)'
        },
        {
          id: 'ex-10-3-4',
          type: 'sentence_building',
          question: 'Build: "They love God"',
          correctAnswer: 'ⲥⲉⲙⲉⲛⲣⲉ ⲙⲫϯ',
          wordBank: ['ⲥⲉ', 'ⲙⲉⲛⲣⲉ', 'ⲙ', 'ⲫϯ'],
          explanation: 'ⲥⲉⲙⲉⲛⲣⲉ ⲙⲫϯ = they love God (Bohairic: ⲙⲉⲛⲣⲉ not ⲙⲉⲣⲓ, ⲫϯ not ⲫⲛⲟⲩϯ)'
        },
        {
          id: 'ex-10-3-5',
          type: 'fill_blank',
          question: 'Complete: ___ ⲛⲁⲩ ⲉϯⲉⲕⲕⲗⲏⲥⲓⲁ = I see the church',
          correctAnswer: 'ϯ',
          options: ['ϯ', 'ⲕ', 'ⲧⲉⲛ', 'ⲥⲉ'],
          explanation: 'ϯⲛⲁⲩ ⲉϯⲉⲕⲕⲗⲏⲥⲓⲁ = I see the church'
        },
        {
          id: 'ex-10-3-6',
          type: 'translation',
          question: 'Translate: ⲥⲉⲥⲁϫⲓ ⲙⲙⲉⲧⲣⲉⲙⲛ̀ⲭⲏⲙⲓ',
          questionCoptic: 'ⲥⲉⲥⲁϫⲓ ⲙⲙⲉⲧⲣⲉⲙⲛ̀ⲭⲏⲙⲓ',
          correctAnswer: 'they speak Coptic',
          options: ['they speak Coptic', 'we speak Coptic', 'I speak Coptic', 'you speak Coptic'],
          explanation: 'ⲥⲉⲥⲁϫⲓ ⲙⲙⲉⲧⲣⲉⲙⲛ̀ⲭⲏⲙⲓ = they speak (in) Coptic (ⲙⲉⲧⲣⲉⲙⲛ̀ⲭⲏⲙⲓ = the Coptic language)'
        },
        {
          id: 'ex-10-3-7',
          type: 'multiple_choice',
          question: 'How do you say "she gives"?',
          correctAnswer: 'ⲥϯ',
          options: ['ⲥϯ', 'ϥϯ', 'ϯϯ', 'ⲧⲉϯ'],
          explanation: 'ⲥϯ = ⲥ (she, present) + Ϯ (give) = "she gives"'
        },
        {
          id: 'ex-10-3-8',
          type: 'sentence_building',
          question: 'Build: "We eat bread"',
          correctAnswer: 'ⲧⲉⲛⲟⲩⲱⲙ ⲛⲟⲩⲱⲓⲕ',
          wordBank: ['ⲧⲉⲛ', 'ⲟⲩⲱⲙ', 'ⲛ', 'ⲟⲩⲱⲓⲕ'],
          explanation: 'ⲧⲉⲛⲟⲩⲱⲙ ⲛⲟⲩⲱⲓⲕ = we eat bread (ⲱⲓⲕ = bread, NOT ⲟⲩⲱⲙ which is the verb!)'
        }
      ]
    }
  ]
};

export default unit10;
