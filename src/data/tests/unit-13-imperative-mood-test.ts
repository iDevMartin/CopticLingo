import { TestUnit } from '../../types';

// TEST UNIT 13: IMPERATIVE MOOD
// Comprehensive test covering all 4 lessons
// 30 exercises testing commands, prohibitions, polite requests, and common imperatives

const unit13Test: TestUnit = {
  id: 'test-unit-13',
  unitId: 'unit-13',
  title: 'Imperative Mood Test',
  description: 'Test your knowledge of commands and requests',
  order: 13,
  exercises: [
    // Lesson 13-1: Positive Commands - exercises 1-8
    {
      id: 'test-13-1',
      type: 'multiple_choice',
      question: 'What is the singular imperative prefix?',
      correctAnswer: 'ⲁⲣⲓ-',
      options: ['ⲁⲣⲓ-', 'ⲙⲁⲣⲉⲛ-', 'ⲙ̀ⲡⲉⲣ-', 'ϣⲁ-'],
      explanation: 'ⲁⲣⲓ- is used for singular commands "do [verb]!"'
    },
    {
      id: 'test-13-2',
      type: 'translation',
      question: 'Translate: ⲁⲣⲓⲙⲟϣⲓ',
      questionCoptic: 'ⲁⲣⲓⲙⲟϣⲓ',
      correctAnswer: 'Walk! / Go!',
      options: ['Walk! / Go!', 'Do not walk', 'I walk', 'He walks'],
      explanation: 'ⲁⲣⲓⲙⲟϣⲓ = ⲁⲣⲓ (do!) + ⲙⲟϣⲓ (walk) = "Walk!"'
    },
    {
      id: 'test-13-3',
      type: 'matching',
      question: 'Match basic commands',
      correctAnswer: 'matched',
      pairs: [
        { coptic: 'ⲁⲣⲓϣⲉⲛⲓ', english: 'Go!' },
        { coptic: 'ⲁⲣⲓⲓ̀', english: 'Come!' },
        { coptic: 'ⲁⲣⲓⲟⲩⲱⲙ', english: 'Eat!' },
        { coptic: 'ⲁⲣⲓⲥⲱ', english: 'Drink!' }
      ]
    },
    {
      id: 'test-13-4',
      type: 'sentence_building',
      question: 'Build: "Listen!" (ⲥⲱⲧⲙ)',
      correctAnswer: 'ⲁⲣⲓⲥⲱⲧⲙ',
      wordBank: ['ⲁⲣⲓ', 'ⲥⲱⲧⲙ', 'ⲙⲁⲣⲉⲛ', 'ⲙ̀ⲡⲉⲣ'],
      explanation: 'ⲁⲣⲓⲥⲱⲧⲙ = ⲁⲣⲓ (do!) + ⲥⲱⲧⲙ (listen/hear)'
    },
    {
      id: 'test-13-5',
      type: 'multiple_choice',
      question: 'What is the plural/hortatory imperative prefix?',
      correctAnswer: 'ⲙⲁⲣⲉⲛ-',
      options: ['ⲙⲁⲣⲉⲛ-', 'ⲁⲣⲓ-', 'ⲙ̀ⲡⲉⲣ-', 'ϣⲁ-'],
      explanation: 'ⲙⲁⲣⲉⲛ- is used for "let us" or plural commands'
    },
    {
      id: 'test-13-6',
      type: 'translation',
      question: 'Translate: ⲙⲁⲣⲉⲛϣⲉⲛⲓ',
      questionCoptic: 'ⲙⲁⲣⲉⲛϣⲉⲛⲓ',
      correctAnswer: 'Let us go',
      options: ['Let us go', 'Go!', 'We go', 'They go'],
      explanation: 'ⲙⲁⲣⲉⲛϣⲉⲛⲓ = ⲙⲁⲣⲉⲛ (let us) + ϣⲉⲛⲓ (go) = "Let us go"'
    },
    {
      id: 'test-13-7',
      type: 'fill_blank',
      question: 'Complete: ___ ⲟⲩⲱⲙ = Let us eat',
      correctAnswer: 'ⲙⲁⲣⲉⲛ',
      options: ['ⲙⲁⲣⲉⲛ', 'ⲁⲣⲓ', 'ⲙ̀ⲡⲉⲣ', 'ⲧⲉⲛ'],
      explanation: 'ⲙⲁⲣⲉⲛⲟⲩⲱⲙ = ⲙⲁⲣⲉⲛ (let us) + ⲟⲩⲱⲙ (eat)'
    },
    {
      id: 'test-13-8',
      type: 'translation',
      question: 'Translate to Coptic: "Speak!" (ⲥⲁϫⲓ)',
      correctAnswer: 'ⲁⲣⲓⲥⲁϫⲓ',
      options: ['ⲁⲣⲓⲥⲁϫⲓ', 'ⲙⲁⲣⲉⲛⲥⲁϫⲓ', 'ⲙ̀ⲡⲉⲣⲥⲁϫⲓ', 'ϣⲁⲣⲉⲥⲁϫⲓ'],
      explanation: 'ⲁⲣⲓⲥⲁϫⲓ = ⲁⲣⲓ (do!) + ⲥⲁϫⲓ (speak)'
    },

    // Lesson 13-2: Negative Commands - exercises 9-16
    {
      id: 'test-13-9',
      type: 'multiple_choice',
      question: 'What is the negative imperative prefix?',
      correctAnswer: 'ⲙ̀ⲡⲉⲣ-',
      options: ['ⲙ̀ⲡⲉⲣ-', 'ⲁⲣⲓ-', 'ⲙⲁⲣⲉⲛ-', 'ⲙⲉⲛ-'],
      explanation: 'ⲙ̀ⲡⲉⲣ- means "do not" for negative commands'
    },
    {
      id: 'test-13-10',
      type: 'translation',
      question: 'Translate: ⲙ̀ⲡⲉⲣϣⲉⲛⲓ',
      questionCoptic: 'ⲙ̀ⲡⲉⲣϣⲉⲛⲓ',
      correctAnswer: 'Do not go!',
      options: ['Do not go!', 'Go!', 'We do not go', 'Let us not go'],
      explanation: 'ⲙ̀ⲡⲉⲣϣⲉⲛⲓ = ⲙ̀ⲡⲉⲣ (do not) + ϣⲉⲛⲓ (go)'
    },
    {
      id: 'test-13-11',
      type: 'matching',
      question: 'Match negative commands',
      correctAnswer: 'matched',
      pairs: [
        { coptic: 'ⲙ̀ⲡⲉⲣϣⲉⲛⲓ', english: 'Do not go!' },
        { coptic: 'ⲙ̀ⲡⲉⲣⲥⲱⲧⲙ', english: 'Do not listen!' },
        { coptic: 'ⲙ̀ⲡⲉⲣⲛⲁⲩ', english: 'Do not look!' },
        { coptic: 'ⲙ̀ⲡⲉⲣⲥⲱ', english: 'Do not drink!' }
      ]
    },
    {
      id: 'test-13-12',
      type: 'sentence_building',
      question: 'Build: "Do not speak!"',
      correctAnswer: 'ⲙ̀ⲡⲉⲣⲥⲁϫⲓ',
      wordBank: ['ⲙ̀ⲡⲉⲣ', 'ⲥⲁϫⲓ', 'ⲁⲣⲓ', 'ⲙⲁⲣⲉⲛ'],
      explanation: 'ⲙ̀ⲡⲉⲣⲥⲁϫⲓ = ⲙ̀ⲡⲉⲣ (do not) + ⲥⲁϫⲓ (speak)'
    },
    {
      id: 'test-13-13',
      type: 'fill_blank',
      question: 'Complete: ___ ⲟⲩⲱⲙ = Do not eat!',
      correctAnswer: 'ⲙ̀ⲡⲉⲣ',
      options: ['ⲙ̀ⲡⲉⲣ', 'ⲁⲣⲓ', 'ⲙⲁⲣⲉⲛ', 'ϣⲁ'],
      explanation: 'ⲙ̀ⲡⲉⲣⲟⲩⲱⲙ = ⲙ̀ⲡⲉⲣ (do not) + ⲟⲩⲱⲙ (eat)'
    },
    {
      id: 'test-13-14',
      type: 'translation',
      question: 'Translate to Coptic: "Do not sit!" (ϩⲙⲟⲥ)',
      correctAnswer: 'ⲙ̀ⲡⲉⲣϩⲙⲟⲥ',
      options: ['ⲙ̀ⲡⲉⲣϩⲙⲟⲥ', 'ⲁⲣⲓϩⲙⲟⲥ', 'ⲙⲁⲣⲉⲛϩⲙⲟⲥ', 'ⲙⲉⲛϩⲙⲟⲥ'],
      explanation: 'ⲙ̀ⲡⲉⲣϩⲙⲟⲥ = ⲙ̀ⲡⲉⲣ (do not) + ϩⲙⲟⲥ (sit)'
    },
    {
      id: 'test-13-15',
      type: 'multiple_choice',
      question: 'How do you say "Do not come!"?',
      correctAnswer: 'ⲙ̀ⲡⲉⲣⲓ̀',
      options: ['ⲙ̀ⲡⲉⲣⲓ̀', 'ⲁⲣⲓⲓ̀', 'ⲙⲁⲣⲉⲛⲓ̀', 'ⲙⲉⲛⲓ̀'],
      explanation: 'ⲙ̀ⲡⲉⲣⲓ̀ = ⲙ̀ⲡⲉⲣ (do not) + ⲓ̀ (come) - Bohairic ⲓ̀ not ⲉⲓ!'
    },
    {
      id: 'test-13-16',
      type: 'matching',
      question: 'Match positive and negative commands',
      correctAnswer: 'matched',
      pairs: [
        { coptic: 'ⲁⲣⲓϣⲉⲛⲓ', english: 'Go!' },
        { coptic: 'ⲙ̀ⲡⲉⲣϣⲉⲛⲓ', english: 'Do not go!' },
        { coptic: 'ⲁⲣⲓⲥⲁϫⲓ', english: 'Speak!' },
        { coptic: 'ⲙ̀ⲡⲉⲣⲥⲁϫⲓ', english: 'Do not speak!' }
      ]
    },

    // Lesson 13-3: Polite Requests - exercises 17-23
    {
      id: 'test-13-17',
      type: 'multiple_choice',
      question: 'What word makes commands more polite?',
      correctAnswer: 'ⲡⲁⲣⲁⲕⲁⲗⲓ',
      options: ['ⲡⲁⲣⲁⲕⲁⲗⲓ', 'ⲁⲣⲓ', 'ⲙ̀ⲡⲉⲣ', 'ⲙⲁⲣⲉⲛ'],
      explanation: 'ⲡⲁⲣⲁⲕⲁⲗⲓ = "please" (from Greek παρακαλῶ)'
    },
    {
      id: 'test-13-18',
      type: 'translation',
      question: 'Translate: ⲁⲣⲓϣⲉⲛⲓ ⲡⲁⲣⲁⲕⲁⲗⲓ',
      questionCoptic: 'ⲁⲣⲓϣⲉⲛⲓ ⲡⲁⲣⲁⲕⲁⲗⲓ',
      correctAnswer: 'Please go',
      options: ['Please go', 'Go!', 'Do not go', 'Let us go'],
      explanation: 'ⲁⲣⲓϣⲉⲛⲓ ⲡⲁⲣⲁⲕⲁⲗⲓ = "Go, please" or "Please go"'
    },
    {
      id: 'test-13-19',
      type: 'matching',
      question: 'Match polite requests',
      correctAnswer: 'matched',
      pairs: [
        { coptic: 'ⲁⲣⲓⲓ̀ ⲡⲁⲣⲁⲕⲁⲗⲓ', english: 'Please come' },
        { coptic: 'ⲁⲣⲓⲟⲩⲱⲙ ⲡⲁⲣⲁⲕⲁⲗⲓ', english: 'Please eat' },
        { coptic: 'ⲁⲣⲓⲥⲱ ⲡⲁⲣⲁⲕⲁⲗⲓ', english: 'Please drink' },
        { coptic: 'ⲁⲣⲓϩⲙⲟⲥ ⲡⲁⲣⲁⲕⲁⲗⲓ', english: 'Please sit' }
      ]
    },
    {
      id: 'test-13-20',
      type: 'sentence_building',
      question: 'Build: "Please sit" (polite)',
      correctAnswer: 'ⲁⲣⲓϩⲙⲟⲥ ⲡⲁⲣⲁⲕⲁⲗⲓ',
      wordBank: ['ⲁⲣⲓ', 'ϩⲙⲟⲥ', 'ⲡⲁⲣⲁⲕⲁⲗⲓ', 'ⲙ̀ⲡⲉⲣ'],
      explanation: 'ⲁⲣⲓϩⲙⲟⲥ ⲡⲁⲣⲁⲕⲁⲗⲓ = "Sit, please"'
    },
    {
      id: 'test-13-21',
      type: 'fill_blank',
      question: 'Complete: ⲁⲣⲓⲥⲱⲧⲙ ___ = Please listen',
      correctAnswer: 'ⲡⲁⲣⲁⲕⲁⲗⲓ',
      options: ['ⲡⲁⲣⲁⲕⲁⲗⲓ', 'ⲙ̀ⲡⲉⲣ', 'ⲙⲁⲣⲉⲛ', 'ⲛⲁⲕ'],
      explanation: 'ⲡⲁⲣⲁⲕⲁⲗⲓ = "please"'
    },
    {
      id: 'test-13-22',
      type: 'translation',
      question: 'Translate: ⲙ̀ⲡⲉⲣⲥⲁϫⲓ ⲡⲁⲣⲁⲕⲁⲗⲓ',
      questionCoptic: 'ⲙ̀ⲡⲉⲣⲥⲁϫⲓ ⲡⲁⲣⲁⲕⲁⲗⲓ',
      correctAnswer: 'Please do not speak',
      options: ['Please do not speak', 'Speak please', 'Do not speak!', 'Let us not speak'],
      explanation: 'ⲙ̀ⲡⲉⲣⲥⲁϫⲓ ⲡⲁⲣⲁⲕⲁⲗⲓ = "Please do not speak" (polite prohibition)'
    },
    {
      id: 'test-13-23',
      type: 'translation',
      question: 'Translate to Coptic: "Please speak"',
      correctAnswer: 'ⲁⲣⲓⲥⲁϫⲓ ⲡⲁⲣⲁⲕⲁⲗⲓ',
      options: ['ⲁⲣⲓⲥⲁϫⲓ ⲡⲁⲣⲁⲕⲁⲗⲓ', 'ⲙ̀ⲡⲉⲣⲥⲁϫⲓ', 'ⲙⲁⲣⲉⲛⲥⲁϫⲓ', 'ⲁⲣⲓⲥⲁϫⲓ'],
      explanation: 'ⲁⲣⲓⲥⲁϫⲓ ⲡⲁⲣⲁⲕⲁⲗⲓ = "Speak, please"'
    },

    // Lesson 13-4: Common Command Verbs - exercises 24-30
    {
      id: 'test-13-24',
      type: 'matching',
      question: 'Match common commands',
      correctAnswer: 'matched',
      pairs: [
        { coptic: 'ⲁⲣⲓϣⲉⲛⲓ', english: 'Go!' },
        { coptic: 'ⲁⲣⲓⲓ̀', english: 'Come!' },
        { coptic: 'ⲁⲣⲓⲛⲁⲩ', english: 'Look!/See!' },
        { coptic: 'ⲁⲣⲓϯ', english: 'Give!' }
      ]
    },
    {
      id: 'test-13-25',
      type: 'translation',
      question: 'Translate: ⲁⲣⲓϯⲛⲁⲓ',
      questionCoptic: 'ⲁⲣⲓϯⲛⲁⲓ',
      correctAnswer: 'Give this!',
      options: ['Give this!', 'Take this!', 'Do this!', 'See this!'],
      explanation: 'ⲁⲣⲓϯⲛⲁⲓ = ⲁⲣⲓ (do!) + ϯ (give) + ⲛⲁⲓ (this)'
    },
    {
      id: 'test-13-26',
      type: 'sentence_building',
      question: 'Build: "Read!" (ⲱϣ)',
      correctAnswer: 'ⲁⲣⲓⲱϣ',
      wordBank: ['ⲁⲣⲓ', 'ⲱϣ', 'ⲙ̀ⲡⲉⲣ', 'ⲙⲁⲣⲉⲛ'],
      explanation: 'ⲁⲣⲓⲱϣ = ⲁⲣⲓ (do!) + ⲱϣ (read)'
    },
    {
      id: 'test-13-27',
      type: 'fill_blank',
      question: 'Complete: ⲁⲣⲓ___ = Look!',
      correctAnswer: 'ⲛⲁⲩ',
      options: ['ⲛⲁⲩ', 'ⲥⲱⲧⲙ', 'ⲥⲁϫⲓ', 'ⲱϣ'],
      explanation: 'ⲁⲣⲓⲛⲁⲩ = ⲁⲣⲓ (do!) + ⲛⲁⲩ (see/look)'
    },
    {
      id: 'test-13-28',
      type: 'matching',
      question: 'Match more commands',
      correctAnswer: 'matched',
      pairs: [
        { coptic: 'ⲁⲣⲓⲱϣ', english: 'Read!' },
        { coptic: 'ⲁⲣⲓⲥϧⲁⲓ', english: 'Write!' },
        { coptic: 'ⲁⲣⲓϭⲓ', english: 'Take!' },
        { coptic: 'ⲁⲣⲓⲟϩⲓ ⲉⲣⲁⲧ', english: 'Stand!' }
      ]
    },
    {
      id: 'test-13-29',
      type: 'translation',
      question: 'Translate to Coptic: "Write!" (ⲥϧⲁⲓ)',
      correctAnswer: 'ⲁⲣⲓⲥϧⲁⲓ',
      options: ['ⲁⲣⲓⲥϧⲁⲓ', 'ⲙ̀ⲡⲉⲣⲥϧⲁⲓ', 'ⲙⲁⲣⲉⲛⲥϧⲁⲓ', 'ⲁⲣⲓⲱϣ'],
      explanation: 'ⲁⲣⲓⲥϧⲁⲓ = ⲁⲣⲓ (do!) + ⲥϧⲁⲓ (write) - Bohairic ⲥϧⲁⲓ not ⲥϩⲁⲓ!'
    },
    {
      id: 'test-13-30',
      type: 'matching',
      question: 'Match commands with objects',
      correctAnswer: 'matched',
      pairs: [
        { coptic: 'ⲁⲣⲓⲱϣ ⲙⲡⲓϫⲱⲙ', english: 'Read the book!' },
        { coptic: 'ⲁⲣⲓⲥⲱ ⲙⲡⲓⲙⲱⲟⲩ', english: 'Drink the water!' },
        { coptic: 'ⲁⲣⲓⲛⲁⲩ ⲉⲫⲁⲓ', english: 'Look at this!' },
        { coptic: 'ⲁⲣⲓϯ ⲙⲡⲓⲱⲓⲕ', english: 'Give the bread!' }
      ]
    }
  ]
};

export default unit13Test;
