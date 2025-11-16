import { TestUnit } from '../../types';

// TEST UNIT 7: POSSESSIVE PRONOUNS
// Comprehensive test covering all 4 lessons
// 30 exercises testing vocabulary, grammar patterns, translations, and usage

const unit7Test: TestUnit = {
  id: 'test-unit-7',
  unitId: 'unit-7',
  title: 'Possessive Pronouns Test',
  description: 'Test your knowledge of possessive pronouns',
  order: 7,
  exercises: [
    // Lesson 7-1: My, Your, His, Her (Masculine Nouns) - exercises 1-8
    {
      id: 'test-7-1',
      type: 'translation',
      question: 'Translate: ⲡⲁⲓⲱⲧ',
      questionCoptic: 'ⲡⲁⲓⲱⲧ',
      correctAnswer: 'my father',
      options: ['my father', 'your father', 'his father', 'our father'],
      explanation: 'ⲡⲁⲓⲱⲧ = ⲡⲁ (my) + ⲓⲱⲧ (father)'
    },
    {
      id: 'test-7-2',
      type: 'matching',
      question: 'Match possessive pronouns (masculine)',
      correctAnswer: 'matched',
      pairs: [
        { coptic: 'ⲡⲁ-', english: 'my' },
        { coptic: 'ⲡⲉⲕ-', english: 'your (m)' },
        { coptic: 'ⲡⲉϥ-', english: 'his' },
        { coptic: 'ⲡⲉⲥ-', english: 'her' }
      ]
    },
    {
      id: 'test-7-3',
      type: 'fill_blank',
      question: 'Complete: ___ ⲣⲁⲛ = your (m) name',
      correctAnswer: 'ⲡⲉⲕ',
      options: ['ⲡⲉⲕ', 'ⲡⲁ', 'ⲡⲉϥ', 'ⲡⲉⲥ'],
      explanation: 'ⲡⲉⲕⲣⲁⲛ = your (masculine) name'
    },
    {
      id: 'test-7-4',
      type: 'sentence_building',
      question: 'Build: "his son"',
      correctAnswer: 'ⲡⲉϥϣⲏⲣⲓ',
      wordBank: ['ⲡⲉϥ', 'ϣⲏⲣⲓ', 'ⲡⲉⲥ', 'ⲥⲏⲣⲓ'],
      explanation: 'ⲡⲉϥϣⲏⲣⲓ = his son (use ϣ not ⲥ!)'
    },
    {
      id: 'test-7-5',
      type: 'multiple_choice',
      question: 'How do you say "her brother"?',
      correctAnswer: 'ⲡⲉⲥⲥⲟⲛ',
      options: ['ⲡⲉⲥⲥⲟⲛ', 'ⲡⲉϥⲥⲟⲛ', 'ⲡⲁⲥⲟⲛ', 'ⲡⲉⲕⲥⲟⲛ'],
      explanation: 'ⲡⲉⲥⲥⲟⲛ = ⲡⲉⲥ (her) + ⲥⲟⲛ (brother)'
    },
    {
      id: 'test-7-6',
      type: 'translation',
      question: 'Translate to Coptic: "my name"',
      correctAnswer: 'ⲡⲁⲣⲁⲛ',
      options: ['ⲡⲁⲣⲁⲛ', 'ⲡⲉⲕⲣⲁⲛ', 'ⲡⲉϥⲣⲁⲛ', 'ⲡⲓⲣⲁⲛ'],
      explanation: 'ⲡⲁⲣⲁⲛ = my name'
    },
    {
      id: 'test-7-7',
      type: 'translation',
      question: 'Translate: ⲡⲉϥⲣⲁⲛ ⲡⲉ Ⲓⲏⲥⲟⲩⲥ',
      questionCoptic: 'ⲡⲉϥⲣⲁⲛ ⲡⲉ Ⲓⲏⲥⲟⲩⲥ',
      correctAnswer: 'His name is Jesus',
      options: ['His name is Jesus', 'Her name is Jesus', 'My name is Jesus', 'Your name is Jesus'],
      explanation: 'ⲡⲉϥⲣⲁⲛ ⲡⲉ Ⲓⲏⲥⲟⲩⲥ = His name is Jesus'
    },
    {
      id: 'test-7-8',
      type: 'multiple_choice',
      question: 'Which is correct for "my son"?',
      correctAnswer: 'ⲡⲁϣⲏⲣⲓ',
      options: ['ⲡⲁϣⲏⲣⲓ', 'ⲡⲁⲥⲏⲣⲓ', 'ⲧⲁϣⲏⲣⲓ', 'ⲡⲓϣⲏⲣⲓ'],
      explanation: 'ⲡⲁϣⲏⲣⲓ = my son (use ϣ not ⲥ!)'
    },

    // Lesson 7-2: Possessives with Feminine Nouns - exercises 9-16
    {
      id: 'test-7-9',
      type: 'translation',
      question: 'Translate: ⲧⲁⲙⲁⲩ',
      questionCoptic: 'ⲧⲁⲙⲁⲩ',
      correctAnswer: 'my mother',
      options: ['my mother', 'your mother', 'his mother', 'her mother'],
      explanation: 'ⲧⲁⲙⲁⲩ = ⲧⲁ (my, fem.) + ⲙⲁⲩ (mother)'
    },
    {
      id: 'test-7-10',
      type: 'matching',
      question: 'Match possessives (feminine nouns)',
      correctAnswer: 'matched',
      pairs: [
        { coptic: 'ⲧⲁ-', english: 'my' },
        { coptic: 'ⲧⲉⲕ-', english: 'your (m)' },
        { coptic: 'ⲧⲉϥ-', english: 'his' },
        { coptic: 'ⲧⲉⲥ-', english: 'her' }
      ]
    },
    {
      id: 'test-7-11',
      type: 'sentence_building',
      question: 'Build: "your (m) sister"',
      correctAnswer: 'ⲧⲉⲕⲥⲱⲛⲓ',
      wordBank: ['ⲧⲉⲕ', 'ⲥⲱⲛⲓ', 'ⲧⲁ', 'ⲥⲱⲛⲉ'],
      explanation: 'ⲧⲉⲕⲥⲱⲛⲓ = your (m) sister (Bohairic -ⲓ ending!)'
    },
    {
      id: 'test-7-12',
      type: 'fill_blank',
      question: 'Complete: ___ ϩⲓ = her house',
      correctAnswer: 'ⲧⲉⲥ',
      options: ['ⲧⲉⲥ', 'ⲧⲉϥ', 'ⲧⲁ', 'ⲡⲉⲥ'],
      explanation: 'ⲧⲉⲥϩⲓ = her house (ϩⲓ is feminine)'
    },
    {
      id: 'test-7-13',
      type: 'translation',
      question: 'Translate to Coptic: "his mother"',
      correctAnswer: 'ⲧⲉϥⲙⲁⲩ',
      options: ['ⲧⲉϥⲙⲁⲩ', 'ⲧⲉⲥⲙⲁⲩ', 'ⲧⲁⲙⲁⲩ', 'ⲡⲉϥⲙⲁⲩ'],
      explanation: 'ⲧⲉϥⲙⲁⲩ = his mother (ⲧⲉϥ with feminine noun)'
    },
    {
      id: 'test-7-14',
      type: 'multiple_choice',
      question: 'What does ⲧⲁϩⲓⲙⲓ mean?',
      questionCoptic: 'ⲧⲁϩⲓⲙⲓ',
      correctAnswer: 'my wife/woman',
      options: ['my wife/woman', 'my sister', 'my mother', 'my daughter'],
      explanation: 'ⲧⲁϩⲓⲙⲓ = my woman/wife (Bohairic ϩⲓⲙⲓ not ⲥϩⲓⲙⲉ!)'
    },
    {
      id: 'test-7-15',
      type: 'translation',
      question: 'Translate: ⲧⲉⲕⲧⲣⲁⲡⲉⲍⲁ',
      questionCoptic: 'ⲧⲉⲕⲧⲣⲁⲡⲉⲍⲁ',
      correctAnswer: 'your (m) table',
      options: ['your (m) table', 'my table', 'his table', 'her table'],
      explanation: 'ⲧⲉⲕⲧⲣⲁⲡⲉⲍⲁ = your (m) table'
    },
    {
      id: 'test-7-16',
      type: 'sentence_building',
      question: 'Build: "my daughter"',
      correctAnswer: 'ⲧⲁϣⲉⲣⲓ',
      wordBank: ['ⲧⲁ', 'ϣⲉⲣⲓ', 'ⲡⲁ', 'ⲥⲉⲣⲓ'],
      explanation: 'ⲧⲁϣⲉⲣⲓ = my daughter (use ϣ not ⲥ!)'
    },

    // Lesson 7-3: Plural Possessives - exercises 17-23
    {
      id: 'test-7-17',
      type: 'matching',
      question: 'Match plural possessives (masculine)',
      correctAnswer: 'matched',
      pairs: [
        { coptic: 'ⲡⲉⲛ-', english: 'our' },
        { coptic: 'ⲡⲉⲧⲛ-', english: 'your (pl)' },
        { coptic: 'ⲡⲟⲩ-', english: 'their' }
      ]
    },
    {
      id: 'test-7-18',
      type: 'translation',
      question: 'Translate: ⲡⲉⲛⲓⲱⲧ',
      questionCoptic: 'ⲡⲉⲛⲓⲱⲧ',
      correctAnswer: 'our father',
      options: ['our father', 'your father', 'their father', 'my father'],
      explanation: 'ⲡⲉⲛⲓⲱⲧ = our father (Lord\'s Prayer: ϬⲈ ⲠⲈⲚⲒⲰⲦ!)'
    },
    {
      id: 'test-7-19',
      type: 'fill_blank',
      question: 'Complete: ___ ⲥⲟⲛ = your (pl) brother',
      correctAnswer: 'ⲡⲉⲧⲛ',
      options: ['ⲡⲉⲧⲛ', 'ⲡⲉⲛ', 'ⲡⲟⲩ', 'ⲡⲉⲕ'],
      explanation: 'ⲡⲉⲧⲛⲥⲟⲛ = your (plural) brother'
    },
    {
      id: 'test-7-20',
      type: 'sentence_building',
      question: 'Build: "their name"',
      correctAnswer: 'ⲡⲟⲩⲣⲁⲛ',
      wordBank: ['ⲡⲟⲩ', 'ⲣⲁⲛ', 'ⲡⲉⲛ', 'ⲡⲉⲧⲛ'],
      explanation: 'ⲡⲟⲩⲣⲁⲛ = their name'
    },
    {
      id: 'test-7-21',
      type: 'matching',
      question: 'Match plural possessives (feminine)',
      correctAnswer: 'matched',
      pairs: [
        { coptic: 'ⲧⲉⲛ-', english: 'our' },
        { coptic: 'ⲧⲉⲧⲛ-', english: 'your (pl)' },
        { coptic: 'ⲧⲟⲩ-', english: 'their' }
      ]
    },
    {
      id: 'test-7-22',
      type: 'translation',
      question: 'Translate to Coptic: "our mothers"',
      correctAnswer: 'ⲛⲉⲛⲙⲁⲩ',
      options: ['ⲛⲉⲛⲙⲁⲩ', 'ⲧⲉⲛⲙⲁⲩ', 'ⲛⲟⲩⲙⲁⲩ', 'ⲡⲉⲛⲙⲁⲩ'],
      explanation: 'ⲛⲉⲛⲙⲁⲩ = our mothers (ⲛⲉⲛ with plural noun)'
    },
    {
      id: 'test-7-23',
      type: 'multiple_choice',
      question: 'What is "their sons" in Coptic?',
      correctAnswer: 'ⲛⲟⲩϣⲏⲣⲓ',
      options: ['ⲛⲟⲩϣⲏⲣⲓ', 'ⲛⲉⲛϣⲏⲣⲓ', 'ⲡⲟⲩϣⲏⲣⲓ', 'ⲛⲉⲧⲛϣⲏⲣⲓ'],
      explanation: 'ⲛⲟⲩϣⲏⲣⲓ = their sons (ⲛⲟⲩ with plural noun)'
    },

    // Lesson 7-4: Complex Possessive Constructions - exercises 24-30
    {
      id: 'test-7-24',
      type: 'translation',
      question: 'Translate: ⲡⲏⲓ ⲙⲡⲁⲓⲱⲧ',
      questionCoptic: 'ⲡⲏⲓ ⲙⲡⲁⲓⲱⲧ',
      correctAnswer: 'my father\'s house',
      options: ['my father\'s house', 'my house', 'the father\'s house', 'his house'],
      explanation: 'ⲡⲏⲓ ⲙⲡⲁⲓⲱⲧ = the house of my father (double possessive)'
    },
    {
      id: 'test-7-25',
      type: 'matching',
      question: 'Match body parts with possessives',
      correctAnswer: 'matched',
      pairs: [
        { coptic: 'ⲧⲁⲁ̀ⲫⲉ', english: 'my head' },
        { coptic: 'ⲡⲉⲕⲃⲁⲗ', english: 'your eyes' },
        { coptic: 'ⲧⲉϥϫⲓϫ', english: 'his hand' },
        { coptic: 'ⲡⲉⲥϩⲏⲧ', english: 'her heart' }
      ]
    },
    {
      id: 'test-7-26',
      type: 'sentence_building',
      question: 'Build: "his brother\'s name"',
      correctAnswer: 'ⲫⲣⲁⲛ ⲙⲡⲉϥⲥⲟⲛ',
      wordBank: ['ⲫⲣⲁⲛ', 'ⲙ', 'ⲡⲉϥⲥⲟⲛ', 'ⲡⲉⲥ'],
      explanation: 'ⲫⲣⲁⲛ ⲙⲡⲉϥⲥⲟⲛ = the name of his brother'
    },
    {
      id: 'test-7-27',
      type: 'fill_blank',
      question: 'Complete: ⲡⲉϥ___ ⲛⲁⲛⲉϥ = his heart is good',
      correctAnswer: 'ϩⲏⲧ',
      options: ['ϩⲏⲧ', 'ⲃⲁⲗ', 'ⲁ̀ⲫⲉ', 'ϫⲓϫ'],
      explanation: 'ϩⲏⲧ = heart (masculine in Bohairic)'
    },
    {
      id: 'test-7-28',
      type: 'translation',
      question: 'Translate: ⲧⲁϫⲓϫ ⲟⲩⲃⲁϣ',
      questionCoptic: 'ⲧⲁϫⲓϫ ⲟⲩⲃⲁϣ',
      correctAnswer: 'my hand hurts',
      options: ['my hand hurts', 'my hands hurt', 'your hand hurts', 'his hand hurts'],
      explanation: 'ⲧⲁϫⲓϫ ⲟⲩⲃⲁϣ = my hand is-painful'
    },
    {
      id: 'test-7-29',
      type: 'multiple_choice',
      question: 'How do you say "their father\'s book"?',
      correctAnswer: 'ⲡⲓϫⲱⲙ ⲙⲡⲟⲩⲓⲱⲧ',
      options: ['ⲡⲓϫⲱⲙ ⲙⲡⲟⲩⲓⲱⲧ', 'ⲡⲟⲩϫⲱⲙ ⲙⲡⲓⲓⲱⲧ', 'ⲡⲓϫⲱⲙ ⲙⲡⲉⲛⲓⲱⲧ', 'ⲡⲟⲩϫⲱⲙ'],
      explanation: 'ⲡⲓϫⲱⲙ ⲙⲡⲟⲩⲓⲱⲧ = the book of their father'
    },
    {
      id: 'test-7-30',
      type: 'translation',
      question: 'Translate to Coptic: "our sister\'s house"',
      correctAnswer: 'ⲡⲏⲓ ⲛⲧⲉⲛⲥⲱⲛⲓ',
      options: ['ⲡⲏⲓ ⲛⲧⲉⲛⲥⲱⲛⲓ', 'ⲧⲉⲛϩⲓ', 'ⲡⲏⲓ ⲙⲡⲉⲛⲥⲱⲛⲓ', 'ⲧⲉⲛⲥⲱⲛⲓ ⲙⲡⲏⲓ'],
      explanation: 'ⲡⲏⲓ ⲛⲧⲉⲛⲥⲱⲛⲓ = the house of our sister (ⲛ̀ⲧⲉ genitive)'
    }
  ]
};

export default unit7Test;
