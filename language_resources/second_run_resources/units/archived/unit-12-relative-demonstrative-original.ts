import { Unit } from '../../types';

// UNIT 12: RELATIVE & DEMONSTRATIVE PRONOUNS
// Verified for Bohairic dialect consistency
// Based on OUTLINE OF BOHAIRIC COPTIC MORPHOLOGY pages 12-13

const unit12: Unit = {
  id: 'unit-12',
  title: 'Relative & Demonstrative Pronouns',
  description: 'Learn "who/which/that" and "this/that"',
  order: 12,
  color: '#FF4B4B',
  lessons: [
    {
      id: 'lesson-12-1',
      unitId: 'unit-12',
      title: 'Relative Pronouns - "who/which"',
      description: 'ⲉⲧ and ⲉⲧⲉ for relative clauses',
      order: 1,
      xpReward: 25,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-12-1-1',
          type: 'multiple_choice',
          question: 'What is the relative pronoun meaning "who/which/that"?',
          correctAnswer: 'ⲉⲧ',
          options: ['ⲉⲧ', 'ⲛⲁⲓ', 'ⲫⲁⲓ', 'ⲫⲏ'],
          explanation: 'ⲉⲧ is the relative pronoun "who/which/that" used to connect clauses'
        },
        {
          id: 'ex-12-1-2',
          type: 'translation',
          question: 'Translate: ⲡⲓⲣⲱⲙⲓ ⲉⲧⲙⲟϣⲓ',
          questionCoptic: 'ⲡⲓⲣⲱⲙⲓ ⲉⲧⲙⲟϣⲓ',
          correctAnswer: 'the man who walks',
          options: ['the man who walks', 'the man who sees', 'the walking man', 'the man walks'],
          explanation: 'ⲡⲓⲣⲱⲙⲓ ⲉⲧⲙⲟϣⲓ = the man who walks (ⲉⲧ links the relative clause)'
        },
        {
          id: 'ex-12-1-3',
          type: 'sentence_building',
          question: 'Build: "The woman who hears"',
          correctAnswer: 'ϯϩⲓⲙⲓ ⲉⲧⲥⲱⲧⲙ',
          wordBank: ['ϯ', 'ϩⲓⲙⲓ', 'ⲉⲧ', 'ⲥⲱⲧⲙ'],
          explanation: 'ϯϩⲓⲙⲓ ⲉⲧⲥⲱⲧⲙ = the woman who hears (Bohairic ϩⲓⲙⲓ not ⲥϩⲓⲙⲉ!)'
        },
        {
          id: 'ex-12-1-4',
          type: 'multiple_choice',
          question: 'What does ⲡⲓϫⲱⲙ ⲉⲧⲛⲁⲛⲉϥ mean?',
          questionCoptic: 'ⲡⲓϫⲱⲙ ⲉⲧⲛⲁⲛⲉϥ',
          correctAnswer: 'the book that is good',
          options: ['the book that is good', 'the good book', 'the book is good', 'the book reads'],
          explanation: 'ⲡⲓϫⲱⲙ ⲉⲧⲛⲁⲛⲉϥ = the book which is good (ⲉⲧ + copula)'
        },
        {
          id: 'ex-12-1-5',
          type: 'translation',
          question: 'Translate: ⲛⲓⲣⲱⲙⲓ ⲉⲧⲥⲁϫⲓ',
          questionCoptic: 'ⲛⲓⲣⲱⲙⲓ ⲉⲧⲥⲁϫⲓ',
          correctAnswer: 'the people who speak',
          options: ['the people who speak', 'the man who speaks', 'the speaking people', 'people speak'],
          explanation: 'ⲛⲓⲣⲱⲙⲓ ⲉⲧⲥⲁϫⲓ = the people who speak (ⲉⲧ with plural)'
        },
        {
          id: 'ex-12-1-6',
          type: 'fill_blank',
          question: 'Complete: ⲡⲓⲁⲗⲟⲩ ___ ⲙⲟϣⲓ = the boy who walks',
          correctAnswer: 'ⲉⲧ',
          options: ['ⲉⲧ', 'ⲫⲁⲓ', 'ⲛⲁⲓ', 'ⲉϥ'],
          explanation: 'ⲉⲧ is the relative pronoun connecting "the boy" to "walks"'
        },
        {
          id: 'ex-12-1-7',
          type: 'matching',
          question: 'Match relative clause phrases',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲡⲓⲣⲱⲙⲓ ⲉⲧⲛⲁⲩ', english: 'the man who sees' },
            { coptic: 'ϯϩⲓⲙⲓ ⲉⲧⲟⲩⲱⲙ', english: 'the woman who eats' },
            { coptic: 'ⲡⲓⲁⲗⲟⲩ ⲉⲧϣⲉⲛⲓ', english: 'the boy who goes' },
            { coptic: 'ϯⲁⲗⲟⲩ ⲉⲧⲓ̀', english: 'the girl who comes' }
          ]
        },
        {
          id: 'ex-12-1-8',
          type: 'sentence_building',
          question: 'Build: "The church that is big"',
          correctAnswer: 'ϯⲉⲕⲕⲗⲏⲥⲓⲁ ⲉⲧⲛⲓϣϯ',
          wordBank: ['ϯ', 'ⲉⲕⲕⲗⲏⲥⲓⲁ', 'ⲉⲧ', 'ⲛⲓϣϯ'],
          explanation: 'ϯⲉⲕⲕⲗⲏⲥⲓⲁ ⲉⲧⲛⲓϣϯ = the church that is big'
        }
      ]
    },
    {
      id: 'lesson-12-2',
      unitId: 'unit-12',
      title: 'Demonstrative Pronouns - Singular',
      description: 'this/that (masculine & feminine)',
      order: 2,
      xpReward: 25,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-12-2-1',
          type: 'matching',
          question: 'Match demonstrative pronouns',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲫⲁⲓ', english: 'this (m)' },
            { coptic: 'ⲑⲁⲓ', english: 'this (f)' },
            { coptic: 'ⲫⲏ', english: 'that (m)' },
            { coptic: 'ⲑⲏ', english: 'that (f)' }
          ]
        },
        {
          id: 'ex-12-2-2',
          type: 'translation',
          question: 'Translate: ⲫⲁⲓ ⲡⲉ ⲡⲁⲓⲱⲧ',
          questionCoptic: 'ⲫⲁⲓ ⲡⲉ ⲡⲁⲓⲱⲧ',
          correctAnswer: 'this is my father',
          options: ['this is my father', 'that is my father', 'this is my mother', 'he is my father'],
          explanation: 'ⲫⲁⲓ ⲡⲉ ⲡⲁⲓⲱⲧ = this is my father (ⲫⲁⲓ = this, masculine)'
        },
        {
          id: 'ex-12-2-3',
          type: 'multiple_choice',
          question: 'How do you say "this woman"?',
          correctAnswer: 'ⲑⲁⲓϩⲓⲙⲓ',
          options: ['ⲑⲁⲓϩⲓⲙⲓ', 'ⲫⲁⲓϩⲓⲙⲓ', 'ⲑⲏϩⲓⲙⲓ', 'ϯϩⲓⲙⲓ'],
          explanation: 'ⲑⲁⲓϩⲓⲙⲓ = this woman (ⲑⲁⲓ = this, feminine)'
        },
        {
          id: 'ex-12-2-4',
          type: 'sentence_building',
          question: 'Build: "That is the church"',
          correctAnswer: 'ⲑⲏ ⲧⲉ ϯⲉⲕⲕⲗⲏⲥⲓⲁ',
          wordBank: ['ⲑⲏ', 'ⲧⲉ', 'ϯ', 'ⲉⲕⲕⲗⲏⲥⲓⲁ'],
          explanation: 'ⲑⲏ ⲧⲉ ϯⲉⲕⲕⲗⲏⲥⲓⲁ = that is the church (ⲑⲏ = that, feminine)'
        },
        {
          id: 'ex-12-2-5',
          type: 'translation',
          question: 'Translate: ⲫⲏ ⲡⲉ ⲡⲓⲣⲱⲙⲓ',
          questionCoptic: 'ⲫⲏ ⲡⲉ ⲡⲓⲣⲱⲙⲓ',
          correctAnswer: 'that is the man',
          options: ['that is the man', 'this is the man', 'that man', 'he is the man'],
          explanation: 'ⲫⲏ ⲡⲉ ⲡⲓⲣⲱⲙⲓ = that is the man (ⲫⲏ = that, masculine)'
        },
        {
          id: 'ex-12-2-6',
          type: 'fill_blank',
          question: 'Complete: ___ ⲧⲉ ⲧⲁⲙⲁⲩ = this is my mother',
          correctAnswer: 'ⲑⲁⲓ',
          options: ['ⲑⲁⲓ', 'ⲫⲁⲓ', 'ⲑⲏ', 'ⲫⲏ'],
          explanation: 'ⲑⲁⲓ is "this" (feminine) matching ⲙⲁⲩ (mother, feminine)'
        },
        {
          id: 'ex-12-2-7',
          type: 'matching',
          question: 'Match demonstrative phrases',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲫⲁⲓⲣⲱⲙⲓ', english: 'this man' },
            { coptic: 'ⲑⲁⲓϩⲓⲙⲓ', english: 'this woman' },
            { coptic: 'ⲫⲏⲣⲱⲙⲓ', english: 'that man' },
            { coptic: 'ⲑⲏϩⲓⲙⲓ', english: 'that woman' }
          ]
        },
        {
          id: 'ex-12-2-8',
          type: 'multiple_choice',
          question: 'What is the demonstrative pronoun for "this" (masculine)?',
          correctAnswer: 'ⲫⲁⲓ',
          options: ['ⲫⲁⲓ', 'ⲑⲁⲓ', 'ⲫⲏ', 'ⲛⲁⲓ'],
          explanation: 'ⲫⲁⲓ = this (masculine), used with masculine nouns'
        }
      ]
    },
    {
      id: 'lesson-12-3',
      unitId: 'unit-12',
      title: 'Demonstrative Pronouns - Plural',
      description: 'these/those',
      order: 3,
      xpReward: 25,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-12-3-1',
          type: 'multiple_choice',
          question: 'What is the plural demonstrative for "these"?',
          correctAnswer: 'ⲛⲁⲓ',
          options: ['ⲛⲁⲓ', 'ⲛⲏ', 'ⲫⲁⲓ', 'ⲑⲁⲓ'],
          explanation: 'ⲛⲁⲓ = these (plural demonstrative)'
        },
        {
          id: 'ex-12-3-2',
          type: 'translation',
          question: 'Translate: ⲛⲁⲓ ⲛⲉ ⲛⲓⲣⲱⲙⲓ',
          questionCoptic: 'ⲛⲁⲓ ⲛⲉ ⲛⲓⲣⲱⲙⲓ',
          correctAnswer: 'these are the people',
          options: ['these are the people', 'those are the people', 'these people', 'the people'],
          explanation: 'ⲛⲁⲓ ⲛⲉ ⲛⲓⲣⲱⲙⲓ = these are the people (ⲛⲁⲓ = these)'
        },
        {
          id: 'ex-12-3-3',
          type: 'sentence_building',
          question: 'Build: "Those are the books"',
          correctAnswer: 'ⲛⲏ ⲛⲉ ⲛⲓϫⲱⲙ',
          wordBank: ['ⲛⲏ', 'ⲛⲉ', 'ⲛⲓ', 'ϫⲱⲙ'],
          explanation: 'ⲛⲏ ⲛⲉ ⲛⲓϫⲱⲙ = those are the books (ⲛⲏ = those)'
        },
        {
          id: 'ex-12-3-4',
          type: 'multiple_choice',
          question: 'What does ⲛⲁⲓⲁⲗⲱⲟⲩⲓ mean?',
          questionCoptic: 'ⲛⲁⲓⲁⲗⲱⲟⲩⲓ',
          correctAnswer: 'these children',
          options: ['these children', 'those children', 'the children', 'some children'],
          explanation: 'ⲛⲁⲓⲁⲗⲱⲟⲩⲓ = these children (ⲛⲁⲓ + ⲁⲗⲱⲟⲩⲓ)'
        },
        {
          id: 'ex-12-3-5',
          type: 'translation',
          question: 'Translate: ⲛⲏ ⲛⲉ ⲛⲁⲥⲛⲏⲟⲩ',
          questionCoptic: 'ⲛⲏ ⲛⲉ ⲛⲁⲥⲛⲏⲟⲩ',
          correctAnswer: 'those are my brothers',
          options: ['those are my brothers', 'these are my brothers', 'my brothers', 'the brothers'],
          explanation: 'ⲛⲏ ⲛⲉ ⲛⲁⲥⲛⲏⲟⲩ = those are my brothers (ⲛⲏ = those)'
        },
        {
          id: 'ex-12-3-6',
          type: 'fill_blank',
          question: 'Complete: ___ ⲛⲉ ⲛⲓⲉⲕⲕⲗⲏⲥⲓⲁ = these are the churches',
          correctAnswer: 'ⲛⲁⲓ',
          options: ['ⲛⲁⲓ', 'ⲛⲏ', 'ⲫⲁⲓ', 'ⲛⲓ'],
          explanation: 'ⲛⲁⲓ = these (plural demonstrative)'
        },
        {
          id: 'ex-12-3-7',
          type: 'matching',
          question: 'Match all demonstrative pronouns',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲫⲁⲓ', english: 'this (m)' },
            { coptic: 'ⲑⲁⲓ', english: 'this (f)' },
            { coptic: 'ⲛⲁⲓ', english: 'these' },
            { coptic: 'ⲛⲏ', english: 'those' }
          ]
        },
        {
          id: 'ex-12-3-8',
          type: 'sentence_building',
          question: 'Build: "These are God\'s children"',
          correctAnswer: 'ⲛⲁⲓ ⲛⲉ ⲛⲓϣⲏⲣⲓ ⲛ̀ⲧⲉⲫϯ',
          wordBank: ['ⲛⲁⲓ', 'ⲛⲉ', 'ⲛⲓϣⲏⲣⲓ', 'ⲛ̀ⲧⲉⲫϯ'],
          explanation: 'ⲛⲁⲓ ⲛⲉ ⲛⲓϣⲏⲣⲓ ⲛ̀ⲧⲉⲫϯ = these are God\'s children (Bohairic ϣⲏⲣⲓ not ⲥⲏⲣⲓ!)'
        }
      ]
    }
  ]
};

export default unit12;
