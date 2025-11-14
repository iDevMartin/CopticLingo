import { Unit } from '../../types';

// UNIT 9: PAST CONTINUOUS TENSE
// Verified for Bohairic dialect consistency
// Based on OUTLINE OF BOHAIRIC COPTIC MORPHOLOGY pages 4-5

const unit9: Unit = {
  id: 'unit-9',
  title: 'Past Continuous Tense',
  description: 'Express ongoing past actions: "was doing"',
  order: 9,
  color: '#1CB0F6',
  lessons: [
    {
      id: 'lesson-9-1',
      unitId: 'unit-9',
      title: 'Past Continuous - Singular',
      description: 'I was doing, you were doing, he/she was doing',
      order: 1,
      xpReward: 25,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-9-1-1',
          type: 'multiple_choice',
          question: 'How do you say "I was hearing" in past continuous?',
          correctAnswer: 'ⲛⲁⲓⲥⲱⲧⲙ',
          options: ['ⲛⲁⲓⲥⲱⲧⲙ', 'ⲁⲓⲥⲱⲧⲙ', 'ϯⲥⲱⲧⲙ', 'ϯⲛⲁⲥⲱⲧⲙ'],
          explanation: 'ⲛⲁⲓⲥⲱⲧⲙ = ⲛⲁⲓ (I was) + ⲥⲱⲧⲙ (hear) = "I was hearing"'
        },
        {
          id: 'ex-9-1-2',
          type: 'matching',
          question: 'Match past continuous pronouns',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲛⲁⲓ-', english: 'I was' },
            { coptic: 'ⲛⲁⲕ-', english: 'you were (m)' },
            { coptic: 'ⲛⲁⲣⲉ-', english: 'you were (f)' },
            { coptic: 'ⲛⲁϥ-', english: 'he was' }
          ]
        },
        {
          id: 'ex-9-1-3',
          type: 'translation',
          question: 'Translate: ⲛⲁⲕⲟⲩⲱⲙ',
          questionCoptic: 'ⲛⲁⲕⲟⲩⲱⲙ',
          correctAnswer: 'you (m) were eating',
          options: ['you (m) were eating', 'I was eating', 'he was eating', 'you (f) were eating'],
          explanation: 'ⲛⲁⲕⲟⲩⲱⲙ = ⲛⲁⲕ (you were, m) + ⲟⲩⲱⲙ (eat)'
        },
        {
          id: 'ex-9-1-4',
          type: 'sentence_building',
          question: 'Build: "She was seeing"',
          correctAnswer: 'ⲛⲁⲥⲛⲁⲩ',
          wordBank: ['ⲛⲁⲥ', 'ⲛⲁⲩ', 'ⲛⲁⲣⲉ', 'ⲛⲁϥ'],
          explanation: 'ⲛⲁⲥⲛⲁⲩ = ⲛⲁⲥ (she was) + ⲛⲁⲩ (see)'
        },
        {
          id: 'ex-9-1-5',
          type: 'multiple_choice',
          question: 'What is the past continuous prefix for "you (feminine)"?',
          correctAnswer: 'ⲛⲁⲣⲉ-',
          options: ['ⲛⲁⲣⲉ-', 'ⲛⲁⲕ-', 'ⲛⲁⲥ-', 'ⲛⲁⲓ-'],
          explanation: 'ⲛⲁⲣⲉ- is "you were" for feminine in past continuous'
        },
        {
          id: 'ex-9-1-6',
          type: 'translation',
          question: 'Translate: ⲛⲁϥⲙⲟϣⲓ',
          questionCoptic: 'ⲛⲁϥⲙⲟϣⲓ',
          correctAnswer: 'he was walking',
          options: ['he was walking', 'I was walking', 'you were walking', 'she was walking'],
          explanation: 'ⲛⲁϥⲙⲟϣⲓ = ⲛⲁϥ (he was) + ⲙⲟϣⲓ (walk) - Bohairic ⲙⲟϣⲓ not ⲙⲟⲟϣⲉ!'
        },
        {
          id: 'ex-9-1-7',
          type: 'fill_blank',
          question: 'Complete: ___ ⲥⲱ = I was drinking',
          correctAnswer: 'ⲛⲁⲓ',
          options: ['ⲛⲁⲓ', 'ⲛⲁⲕ', 'ⲛⲁϥ', 'ⲛⲁⲥ'],
          explanation: 'ⲛⲁⲓ is the past continuous prefix for "I was"'
        },
        {
          id: 'ex-9-1-8',
          type: 'matching',
          question: 'Match complete past continuous verbs',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲛⲁⲓⲓ̀ⲣⲓ', english: 'I was doing' },
            { coptic: 'ⲛⲁⲕⲓ̀ⲣⲓ', english: 'you (m) were doing' },
            { coptic: 'ⲛⲁⲣⲉⲓ̀ⲣⲓ', english: 'you (f) were doing' },
            { coptic: 'ⲛⲁϥⲓ̀ⲣⲓ', english: 'he was doing' }
          ]
        }
      ]
    },
    {
      id: 'lesson-9-2',
      unitId: 'unit-9',
      title: 'Past Continuous - Plural',
      description: 'we were doing, you (pl) were doing, they were doing',
      order: 2,
      xpReward: 25,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-9-2-1',
          type: 'matching',
          question: 'Match plural past continuous pronouns',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲛⲁⲛ-', english: 'we were' },
            { coptic: 'ⲛⲁⲣⲉⲧⲉⲛ-', english: 'you (pl) were' },
            { coptic: 'ⲛⲁⲩ-', english: 'they were' }
          ]
        },
        {
          id: 'ex-9-2-2',
          type: 'translation',
          question: 'Translate: ⲛⲁⲛⲥⲱⲧⲙ',
          questionCoptic: 'ⲛⲁⲛⲥⲱⲧⲙ',
          correctAnswer: 'we were hearing',
          options: ['we were hearing', 'you were hearing', 'they were hearing', 'I was hearing'],
          explanation: 'ⲛⲁⲛⲥⲱⲧⲙ = ⲛⲁⲛ (we were) + ⲥⲱⲧⲙ (hear)'
        },
        {
          id: 'ex-9-2-3',
          type: 'multiple_choice',
          question: 'How do you say "they were going"?',
          correctAnswer: 'ⲛⲁⲩϣⲉⲛⲓ',
          options: ['ⲛⲁⲩϣⲉⲛⲓ', 'ⲛⲁⲛϣⲉⲛⲓ', 'ⲛⲁⲣⲉⲧⲉⲛϣⲉⲛⲓ', 'ⲛⲁϥϣⲉⲛⲓ'],
          explanation: 'ⲛⲁⲩϣⲉⲛⲓ = ⲛⲁⲩ (they were) + ϣⲉⲛⲓ (go) - Bohairic ϣⲉⲛⲓ not ⲃⲱⲕ!'
        },
        {
          id: 'ex-9-2-4',
          type: 'sentence_building',
          question: 'Build: "You (plural) were coming"',
          correctAnswer: 'ⲛⲁⲣⲉⲧⲉⲛⲓ̀',
          wordBank: ['ⲛⲁⲣⲉⲧⲉⲛ', 'ⲓ̀', 'ⲛⲁⲛ', 'ⲛⲁⲩ'],
          explanation: 'ⲛⲁⲣⲉⲧⲉⲛⲓ̀ = ⲛⲁⲣⲉⲧⲉⲛ (you pl were) + ⲓ̀ (come) - Bohairic ⲓ̀ not ⲉⲓ!'
        },
        {
          id: 'ex-9-2-5',
          type: 'translation',
          question: 'Translate: ⲛⲁⲩϯ',
          questionCoptic: 'ⲛⲁⲩϯ',
          correctAnswer: 'they were giving',
          options: ['they were giving', 'we were giving', 'you were giving', 'I was giving'],
          explanation: 'ⲛⲁⲩϯ = ⲛⲁⲩ (they were) + Ϯ (give)'
        },
        {
          id: 'ex-9-2-6',
          type: 'fill_blank',
          question: 'Complete: ___ ⲟⲩⲱⲙ = we were eating',
          correctAnswer: 'ⲛⲁⲛ',
          options: ['ⲛⲁⲛ', 'ⲛⲁⲣⲉⲧⲉⲛ', 'ⲛⲁⲩ', 'ⲛⲁⲓ'],
          explanation: 'ⲛⲁⲛ is "we were" in past continuous'
        },
        {
          id: 'ex-9-2-7',
          type: 'matching',
          question: 'Match past continuous sentences',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲛⲁⲛⲛⲁⲩ', english: 'we were seeing' },
            { coptic: 'ⲛⲁⲣⲉⲧⲉⲛⲛⲁⲩ', english: 'you (pl) were seeing' },
            { coptic: 'ⲛⲁⲩⲛⲁⲩ', english: 'they were seeing' }
          ]
        },
        {
          id: 'ex-9-2-8',
          type: 'multiple_choice',
          question: 'What is "you (plural) were saying" in Coptic?',
          correctAnswer: 'ⲛⲁⲣⲉⲧⲉⲛϫⲱ',
          options: ['ⲛⲁⲣⲉⲧⲉⲛϫⲱ', 'ⲛⲁⲛϫⲱ', 'ⲛⲁⲩϫⲱ', 'ⲛⲁⲕϫⲱ'],
          explanation: 'ⲛⲁⲣⲉⲧⲉⲛϫⲱ = ⲛⲁⲣⲉⲧⲉⲛ (you pl were) + ϫⲱ (say)'
        }
      ]
    },
    {
      id: 'lesson-9-3',
      unitId: 'unit-9',
      title: 'Past Continuous Practice',
      description: 'Master ongoing past actions',
      order: 3,
      xpReward: 25,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-9-3-1',
          type: 'matching',
          question: 'Match all forms of "was/were praying"',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲛⲁⲓⲉⲣⲡⲣⲟⲥⲉⲩⲭⲉⲥⲑⲉ', english: 'I was praying' },
            { coptic: 'ⲛⲁⲕⲉⲣⲡⲣⲟⲥⲉⲩⲭⲉⲥⲑⲉ', english: 'you (m) were praying' },
            { coptic: 'ⲛⲁⲣⲉⲉⲣⲡⲣⲟⲥⲉⲩⲭⲉⲥⲑⲉ', english: 'you (f) were praying' },
            { coptic: 'ⲛⲁϥⲉⲣⲡⲣⲟⲥⲉⲩⲭⲉⲥⲑⲉ', english: 'he was praying' }
          ]
        },
        {
          id: 'ex-9-3-2',
          type: 'translation',
          question: 'Translate: ⲛⲁⲛⲙⲟϣⲓ ⲉϯⲉⲕⲕⲗⲏⲥⲓⲁ',
          questionCoptic: 'ⲛⲁⲛⲙⲟϣⲓ ⲉϯⲉⲕⲕⲗⲏⲥⲓⲁ',
          correctAnswer: 'we were walking to church',
          options: ['we were walking to church', 'they were walking to church', 'you were walking to church', 'I was walking to church'],
          explanation: 'ⲛⲁⲛⲙⲟϣⲓ ⲉϯⲉⲕⲕⲗⲏⲥⲓⲁ = we were walking to the church (Bohairic ⲙⲟϣⲓ not ⲙⲟⲟϣⲉ!)'
        },
        {
          id: 'ex-9-3-3',
          type: 'sentence_building',
          question: 'Build: "They were reading the book"',
          correctAnswer: 'ⲛⲁⲩⲱϣ ⲙⲡⲓϫⲱⲙ',
          wordBank: ['ⲛⲁⲩ', 'ⲱϣ', 'ⲙ', 'ⲡⲓϫⲱⲙ'],
          explanation: 'ⲛⲁⲩⲱϣ ⲙⲡⲓϫⲱⲙ = they were reading the book'
        },
        {
          id: 'ex-9-3-4',
          type: 'fill_blank',
          question: 'Complete: ___ ⲥⲁϫⲓ = she was speaking',
          correctAnswer: 'ⲛⲁⲥ',
          options: ['ⲛⲁⲥ', 'ⲛⲁϥ', 'ⲛⲁⲓ', 'ⲛⲁⲣⲉ'],
          explanation: 'ⲛⲁⲥⲥⲁϫⲓ = she was speaking'
        },
        {
          id: 'ex-9-3-5',
          type: 'translation',
          question: 'Translate: ⲛⲁⲩⲙⲉⲛⲣⲉ ⲙⲫϯ',
          questionCoptic: 'ⲛⲁⲩⲙⲉⲛⲣⲉ ⲙⲫϯ',
          correctAnswer: 'they were loving God',
          options: ['they were loving God', 'we were loving God', 'I was loving God', 'you were loving God'],
          explanation: 'ⲛⲁⲩⲙⲉⲛⲣⲉ ⲙⲫϯ = they were loving God (Bohairic: ⲙⲉⲛⲣⲉ not ⲙⲉⲣⲓ, ⲫϯ not ⲫⲛⲟⲩϯ)'
        },
        {
          id: 'ex-9-3-6',
          type: 'multiple_choice',
          question: 'How do you say "I was writing"?',
          correctAnswer: 'ⲛⲁⲓⲥ̀ϧⲁⲓ',
          options: ['ⲛⲁⲓⲥ̀ϧⲁⲓ', 'ⲛⲁⲕⲥ̀ϧⲁⲓ', 'ⲛⲁϥⲥ̀ϧⲁⲓ', 'ⲛⲁⲥⲥ̀ϧⲁⲓ'],
          explanation: 'ⲛⲁⲓⲥ̀ϧⲁⲓ = ⲛⲁⲓ (I was) + ⲥ̀ϧⲁⲓ (write) - Bohairic ⲥ̀ϧⲁⲓ not ⲥϩⲁⲓ!'
        },
        {
          id: 'ex-9-3-7',
          type: 'matching',
          question: 'Distinguish past simple vs past continuous',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲁⲓⲥⲱⲧⲙ', english: 'I heard (simple past)' },
            { coptic: 'ⲛⲁⲓⲥⲱⲧⲙ', english: 'I was hearing (continuous)' },
            { coptic: 'ⲁϥϣⲉⲛⲓ', english: 'he went (simple past)' },
            { coptic: 'ⲛⲁϥϣⲉⲛⲓ', english: 'he was going (continuous)' }
          ]
        },
        {
          id: 'ex-9-3-8',
          type: 'sentence_building',
          question: 'Build: "You (f) were sitting"',
          correctAnswer: 'ⲛⲁⲣⲉϩⲉⲙⲥⲓ',
          wordBank: ['ⲛⲁⲣⲉ', 'ϩⲉⲙⲥⲓ', 'ⲛⲁⲕ', 'ⲛⲁⲥ'],
          explanation: 'ⲛⲁⲣⲉϩⲉⲙⲥⲓ = you (f) were sitting (Bohairic ϩⲉⲙⲥⲓ not ϩⲙⲟⲟⲥ!)'
        }
      ]
    }
  ]
};

export default unit9;
