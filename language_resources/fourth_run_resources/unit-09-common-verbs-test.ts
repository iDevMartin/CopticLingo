import { TestUnit } from '../../types';

// TEST UNIT 9: COMMON VERBS
// Comprehensive test covering all 4 lessons
// 30 exercises testing essential action verbs, meanings, and usage

const unit9Test: TestUnit = {
  id: 'test-unit-9',
  unitId: 'unit-9',
  title: 'Common Verbs Test',
  description: 'Test your knowledge of essential action words',
  order: 9,
  exercises: [
    // Lesson 9-1: Basic Action Verbs Part 1 - exercises 1-8
    {
      id: 'test-9-1',
      type: 'translation',
      question: 'Translate: ⲟⲩⲱⲙ',
      questionCoptic: 'ⲟⲩⲱⲙ',
      correctAnswer: 'to eat',
      options: ['to eat', 'to drink', 'to see', 'to hear'],
      explanation: 'ⲟⲩⲱⲙ = to eat (NOT the noun "bread" which is ⲱⲓⲕ!)'
    },
    {
      id: 'test-9-2',
      type: 'matching',
      question: 'Match basic action verbs',
      correctAnswer: 'matched',
      pairs: [
        { coptic: 'ⲟⲩⲱⲙ', english: 'to eat' },
        { coptic: 'ⲥⲱ', english: 'to drink' },
        { coptic: 'ⲛⲁⲩ', english: 'to see' },
        { coptic: 'ⲥⲱⲧⲙ', english: 'to hear' }
      ]
    },
    {
      id: 'test-9-3',
      type: 'multiple_choice',
      question: 'What is "to walk" in Coptic?',
      correctAnswer: 'ⲙⲟϣⲓ',
      options: ['ⲙⲟϣⲓ', 'ϣⲉⲛⲓ', 'ⲓ̀', 'ⲧⲱⲛϥ'],
      explanation: 'ⲙⲟϣⲓ = to walk (Bohairic form)'
    },
    {
      id: 'test-9-4',
      type: 'fill_blank',
      question: 'Complete: to drink = ___',
      correctAnswer: 'ⲥⲱ',
      options: ['ⲥⲱ', 'ⲟⲩⲱⲙ', 'ⲥⲱⲧⲙ', 'ⲛⲁⲩ'],
      explanation: 'ⲥⲱ = to drink'
    },
    {
      id: 'test-9-5',
      type: 'translation',
      question: 'Translate: Ϭⲓ',
      questionCoptic: 'Ϭⲓ',
      correctAnswer: 'to take/receive',
      options: ['to take/receive', 'to give', 'to put', 'to send'],
      explanation: 'Ϭⲓ = to take/receive (Bohairic uses Ϭ not ϫ for this verb)'
    },
    {
      id: 'test-9-6',
      type: 'multiple_choice',
      question: 'What does ⲭⲁ mean?',
      questionCoptic: 'ⲭⲁ',
      correctAnswer: 'to put/place',
      options: ['to put/place', 'to take', 'to send', 'to give'],
      explanation: 'ⲭⲁ = to put or to place'
    },
    {
      id: 'test-9-7',
      type: 'sentence_building',
      question: 'Build the verb phrase: "to send"',
      correctAnswer: 'ⲟⲩⲱⲣⲡ',
      wordBank: ['ⲟⲩⲱⲣⲡ', 'Ϭⲓ', 'ⲭⲁ', 'Ϯ'],
      explanation: 'ⲟⲩⲱⲣⲡ = to send'
    },
    {
      id: 'test-9-8',
      type: 'matching',
      question: 'Match more verbs',
      correctAnswer: 'matched',
      pairs: [
        { coptic: 'ⲙⲟϣⲓ', english: 'to walk' },
        { coptic: 'ⲭⲁ', english: 'to put' },
        { coptic: 'Ϭⲓ', english: 'to take' },
        { coptic: 'ⲟⲩⲱⲣⲡ', english: 'to send' }
      ]
    },

    // Lesson 9-2: Basic Action Verbs Part 2 - exercises 9-15
    {
      id: 'test-9-9',
      type: 'translation',
      question: 'Translate: ϣⲉⲛⲓ',
      questionCoptic: 'ϣⲉⲛⲓ',
      correctAnswer: 'to go',
      options: ['to go', 'to come', 'to walk', 'to run'],
      explanation: 'ϣⲉⲛⲓ = to go (Bohairic form, NOT ⲃⲱⲕ!)'
    },
    {
      id: 'test-9-10',
      type: 'multiple_choice',
      question: 'What is "to come" in Coptic?',
      correctAnswer: 'ⲓ̀',
      options: ['ⲓ̀', 'ϣⲉⲛⲓ', 'ⲙⲟϣⲓ', 'ⲧⲱⲛϥ'],
      explanation: 'ⲓ̀ = to come (Bohairic form, NOT ⲉⲓ!)'
    },
    {
      id: 'test-9-11',
      type: 'matching',
      question: 'Match communication and action verbs',
      correctAnswer: 'matched',
      pairs: [
        { coptic: 'ϫⲱ', english: 'to say/speak' },
        { coptic: 'ⲓ̀ⲣⲓ', english: 'to do/make' },
        { coptic: 'ⲙⲟⲩϯ', english: 'to call' },
        { coptic: 'Ϯ', english: 'to give' }
      ]
    },
    {
      id: 'test-9-12',
      type: 'fill_blank',
      question: 'Complete: to do/make = ___',
      correctAnswer: 'ⲓ̀ⲣⲓ',
      options: ['ⲓ̀ⲣⲓ', 'ϫⲱ', 'ⲙⲟⲩϯ', 'Ϯ'],
      explanation: 'ⲓ̀ⲣⲓ = to do or to make (Bohairic infinitive)'
    },
    {
      id: 'test-9-13',
      type: 'translation',
      question: 'Translate: ⲙⲟⲩϯ',
      questionCoptic: 'ⲙⲟⲩϯ',
      correctAnswer: 'to call/name',
      options: ['to call/name', 'to say', 'to hear', 'to give'],
      explanation: 'ⲙⲟⲩϯ = to call or to name (Bohairic form, NOT ⲙⲟⲩⲧⲉ!)'
    },
    {
      id: 'test-9-14',
      type: 'multiple_choice',
      question: 'What does ⲥ̀ⲙⲟⲩ mean?',
      questionCoptic: 'ⲥ̀ⲙⲟⲩ',
      correctAnswer: 'to bless',
      options: ['to bless', 'to curse', 'to pray', 'to praise'],
      explanation: 'ⲥ̀ⲙⲟⲩ = to bless'
    },
    {
      id: 'test-9-15',
      type: 'translation',
      question: 'Translate to Coptic: "to prepare"',
      correctAnswer: 'ⲥⲉⲃⲧⲉ',
      options: ['ⲥⲉⲃⲧⲉ', 'ⲓ̀ⲣⲓ', 'ⲥ̀ⲙⲟⲩ', 'ⲙⲟⲩϯ'],
      explanation: 'ⲥⲉⲃⲧⲉ = to prepare'
    },

    // Lesson 9-3: More Essential Verbs - exercises 16-23
    {
      id: 'test-9-16',
      type: 'matching',
      question: 'Match cognitive verbs',
      correctAnswer: 'matched',
      pairs: [
        { coptic: 'ⲉ̀ⲙⲓ', english: 'to know' },
        { coptic: 'ⲙⲉⲩⲓ̀', english: 'to think' },
        { coptic: 'ⲟⲩⲱϣ', english: 'to want' },
        { coptic: 'ⲙⲉⲛⲣⲉ', english: 'to love' }
      ]
    },
    {
      id: 'test-9-17',
      type: 'translation',
      question: 'Translate: ⲙⲉⲛⲣⲉ',
      questionCoptic: 'ⲙⲉⲛⲣⲉ',
      correctAnswer: 'to love',
      options: ['to love', 'to hate', 'to know', 'to want'],
      explanation: 'ⲙⲉⲛⲣⲉ = to love (Bohairic form, NOT ⲙⲉⲣⲓ!)'
    },
    {
      id: 'test-9-18',
      type: 'multiple_choice',
      question: 'What is "to open" in Coptic?',
      correctAnswer: 'ⲟⲩⲱⲛ',
      options: ['ⲟⲩⲱⲛ', 'ⲙⲁϣⲑⲁⲙ', 'ⲟⲩⲱⲙ', 'ⲟⲩⲱϣ'],
      explanation: 'ⲟⲩⲱⲛ = to open'
    },
    {
      id: 'test-9-19',
      type: 'fill_blank',
      question: 'Complete: to hate = ___',
      correctAnswer: 'ⲙⲟⲥϯ',
      options: ['ⲙⲟⲥϯ', 'ⲙⲉⲛⲣⲉ', 'ⲙⲟⲩϯ', 'ⲙⲉⲩⲓ̀'],
      explanation: 'ⲙⲟⲥϯ = to hate'
    },
    {
      id: 'test-9-20',
      type: 'matching',
      question: 'Match position and state verbs',
      correctAnswer: 'matched',
      pairs: [
        { coptic: 'ϩⲉⲙⲥⲓ', english: 'to sit' },
        { coptic: 'ⲟ̀ϩⲓ ⲉ̀ⲣⲁⲧ', english: 'to stand' },
        { coptic: 'ⲉⲛⲕⲟⲧ', english: 'to sleep' },
        { coptic: 'ⲧⲱⲛϥ', english: 'to rise/get up' }
      ]
    },
    {
      id: 'test-9-21',
      type: 'translation',
      question: 'Translate: ⲥ̀ϧⲁⲓ',
      questionCoptic: 'ⲥ̀ϧⲁⲓ',
      correctAnswer: 'to write',
      options: ['to write', 'to read', 'to say', 'to hear'],
      explanation: 'ⲥ̀ϧⲁⲓ = to write (Bohairic form, NOT ⲥϩⲁⲓ!)'
    },
    {
      id: 'test-9-22',
      type: 'multiple_choice',
      question: 'What does ⲱϣ mean?',
      questionCoptic: 'ⲱϣ',
      correctAnswer: 'to read',
      options: ['to read', 'to write', 'to speak', 'to hear'],
      explanation: 'ⲱϣ = to read'
    },
    {
      id: 'test-9-23',
      type: 'sentence_building',
      question: 'Build: "to tell/inform"',
      correctAnswer: 'ⲧⲁⲙⲟ',
      wordBank: ['ⲧⲁⲙⲟ', 'ϫⲱ', 'ⲥⲁϫⲓ', 'ⲙⲟⲩϯ'],
      explanation: 'ⲧⲁⲙⲟ = to tell or to inform'
    },

    // Lesson 9-4: Verb Combinations and Phrases - exercises 24-30
    {
      id: 'test-9-24',
      type: 'translation',
      question: 'Translate: ϣⲉⲛⲓ ⲉ̀',
      questionCoptic: 'ϣⲉⲛⲓ ⲉ̀',
      correctAnswer: 'go to',
      options: ['go to', 'come from', 'walk to', 'go out'],
      explanation: 'ϣⲉⲛⲓ ⲉ̀ = go to (verb + preposition combination)'
    },
    {
      id: 'test-9-25',
      type: 'multiple_choice',
      question: 'What does ⲓ̀ ⲉ̀ⲃⲟⲗ mean?',
      questionCoptic: 'ⲓ̀ ⲉ̀ⲃⲟⲗ',
      correctAnswer: 'come out / go out',
      options: ['come out / go out', 'come in', 'come to', 'come from'],
      explanation: 'ⲓ̀ ⲉ̀ⲃⲟⲗ = come out / go out (compound expression)'
    },
    {
      id: 'test-9-26',
      type: 'matching',
      question: 'Match verb + preposition combinations',
      correctAnswer: 'matched',
      pairs: [
        { coptic: 'ϣⲉⲛⲓ ⲉ̀ϧⲟⲩⲛ', english: 'go in / enter' },
        { coptic: 'ⲓ̀ ⲉ̀ⲃⲟⲗ', english: 'come out / exit' },
        { coptic: 'ⲟ̀ϩⲓ ⲉ̀ⲣⲁⲧ', english: 'stand up / stand' },
        { coptic: 'ⲙⲟϣⲓ ⲛⲉⲙ', english: 'walk with' }
      ]
    },
    {
      id: 'test-9-27',
      type: 'fill_blank',
      question: 'Complete: ⲁⲩϣⲉⲛⲓ ___ ϯⲉⲕⲕⲗⲏⲥⲓⲁ = they went to church',
      correctAnswer: 'ⲉ̀',
      options: ['ⲉ̀', 'ⲉ̀ⲃⲟⲗ', 'ⲛⲉⲙ', 'ϧⲉⲛ'],
      explanation: 'ϣⲉⲛⲓ ⲉ̀ = go to (motion toward requires ⲉ̀ preposition)'
    },
    {
      id: 'test-9-28',
      type: 'translation',
      question: 'Translate: Ϭⲓ ϩⲏⲧ',
      questionCoptic: 'Ϭⲓ ϩⲏⲧ',
      correctAnswer: 'take heart / be encouraged',
      options: ['take heart / be encouraged', 'take hand', 'give heart', 'lose heart'],
      explanation: 'Ϭⲓ ϩⲏⲧ = take heart, be encouraged (idiomatic expression)'
    },
    {
      id: 'test-9-29',
      type: 'sentence_building',
      question: 'Build: "They came out of the house"',
      correctAnswer: 'ⲁⲩⲓ̀ ⲉ̀ⲃⲟⲗ ϧⲉⲛ ⲡⲓⲏⲓ',
      wordBank: ['ⲁⲩ', 'ⲓ̀', 'ⲉ̀ⲃⲟⲗ', 'ϧⲉⲛ', 'ⲡⲓⲏⲓ'],
      explanation: 'ⲁⲩⲓ̀ ⲉ̀ⲃⲟⲗ ϧⲉⲛ ⲡⲓⲏⲓ = they came out from the house (Bohairic ⲓ̀ not ⲉⲓ!)'
    },
    {
      id: 'test-9-30',
      type: 'matching',
      question: 'Match idiomatic verb phrases',
      correctAnswer: 'matched',
      pairs: [
        { coptic: 'Ϯ ϩⲏⲧ', english: 'pay attention (give heart)' },
        { coptic: 'ϫⲱ ⲙⲙⲟⲥ', english: 'say it / speak of it' },
        { coptic: 'ⲓ̀ⲣⲓ ⲛⲁϩϯ', english: 'believe (make faith)' }
      ]
    }
  ]
};

export default unit9Test;
