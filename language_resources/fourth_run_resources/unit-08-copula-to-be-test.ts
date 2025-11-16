import { TestUnit } from '../../types';

// TEST UNIT 8: COPULA ("TO BE")
// Comprehensive test covering all 4 lessons
// 30 exercises testing copula forms, nominal sentences, and usage

const unit8Test: TestUnit = {
  id: 'test-unit-8',
  unitId: 'unit-8',
  title: 'Copula (To Be) Test',
  description: 'Test your knowledge of copula sentences',
  order: 8,
  exercises: [
    // Lesson 8-1: Introduction to Copula - exercises 1-8
    {
      id: 'test-8-1',
      type: 'multiple_choice',
      question: 'Which copula is used with masculine singular nouns?',
      correctAnswer: 'ⲡⲉ',
      options: ['ⲡⲉ', 'ⲧⲉ', 'ⲛⲉ', 'ⲡⲓ'],
      explanation: 'ⲡⲉ is the masculine singular copula meaning "is" or "he is"'
    },
    {
      id: 'test-8-2',
      type: 'matching',
      question: 'Match copula forms with their usage',
      correctAnswer: 'matched',
      pairs: [
        { coptic: 'ⲡⲉ', english: 'masculine singular' },
        { coptic: 'ⲧⲉ', english: 'feminine singular' },
        { coptic: 'ⲛⲉ', english: 'plural (all genders)' }
      ]
    },
    {
      id: 'test-8-3',
      type: 'translation',
      question: 'Translate: ⲫⲁⲓ ⲡⲉ ⲡⲓⲣⲱⲙⲓ',
      questionCoptic: 'ⲫⲁⲓ ⲡⲉ ⲡⲓⲣⲱⲙⲓ',
      correctAnswer: 'This is the man',
      options: ['This is the man', 'This is a man', 'That is the man', 'He is the man'],
      explanation: 'ⲫⲁⲓ ⲡⲉ ⲡⲓⲣⲱⲙⲓ = This is the man (ⲫⲁⲓ = this, ⲡⲉ = copula, ⲡⲓⲣⲱⲙⲓ = the man)'
    },
    {
      id: 'test-8-4',
      type: 'fill_blank',
      question: 'Complete: ⲑⲁⲓ ___ ϯⲥⲱⲛⲓ = This is the sister',
      correctAnswer: 'ⲧⲉ',
      options: ['ⲧⲉ', 'ⲡⲉ', 'ⲛⲉ', 'ϯ'],
      explanation: 'ⲧⲉ is the feminine singular copula (ϯⲥⲱⲛⲓ is feminine)'
    },
    {
      id: 'test-8-5',
      type: 'sentence_building',
      question: 'Build: "These are the brothers"',
      correctAnswer: 'ⲛⲁⲓ ⲛⲉ ⲛⲓⲥⲛⲏⲟⲩ',
      wordBank: ['ⲛⲁⲓ', 'ⲛⲉ', 'ⲛⲓⲥⲛⲏⲟⲩ', 'ⲡⲉ'],
      explanation: 'ⲛⲁⲓ ⲛⲉ ⲛⲓⲥⲛⲏⲟⲩ = These are the brothers (ⲛⲁⲓ = these, ⲛⲉ = plural copula)'
    },
    {
      id: 'test-8-6',
      type: 'translation',
      question: 'Translate: ⲛⲑⲟⲕ ⲡⲉ ⲡⲓⲙⲁⲑⲏⲧⲏⲥ',
      questionCoptic: 'ⲛⲑⲟⲕ ⲡⲉ ⲡⲓⲙⲁⲑⲏⲧⲏⲥ',
      correctAnswer: 'You (m) are the disciple',
      options: ['You (m) are the disciple', 'You are a disciple', 'I am the disciple', 'He is the disciple'],
      explanation: 'ⲛⲑⲟⲕ ⲡⲉ ⲡⲓⲙⲁⲑⲏⲧⲏⲥ = You are the disciple (pronoun + copula + noun)'
    },
    {
      id: 'test-8-7',
      type: 'multiple_choice',
      question: 'How do you say "I am a teacher" (masculine)?',
      correctAnswer: 'ⲁⲛⲟⲕ ⲟⲩⲥⲁϩ ⲡⲉ',
      options: ['ⲁⲛⲟⲕ ⲟⲩⲥⲁϩ ⲡⲉ', 'ⲁⲛⲟⲕ ⲡⲉ ⲡⲓⲥⲁϩ', 'ⲁⲛⲟⲕ ⲟⲩⲥⲁϩ ⲧⲉ', 'ⲁⲛⲟⲕ ⲟⲩⲥⲁϩ ⲛⲉ'],
      explanation: 'ⲁⲛⲟⲕ ⲟⲩⲥⲁϩ ⲡⲉ = I am a teacher (pronoun + indefinite noun + copula)'
    },
    {
      id: 'test-8-8',
      type: 'translation',
      question: 'Translate to Coptic: "This is a book"',
      correctAnswer: 'ⲫⲁⲓ ⲟⲩϫⲱⲙ ⲡⲉ',
      options: ['ⲫⲁⲓ ⲟⲩϫⲱⲙ ⲡⲉ', 'ⲫⲁⲓ ⲡⲉ ⲡⲓϫⲱⲙ', 'ⲫⲁⲓ ⲟⲩϫⲱⲙ ⲧⲉ', 'ⲫⲁⲓ ϫⲱⲙ ⲡⲉ'],
      explanation: 'ⲫⲁⲓ ⲟⲩϫⲱⲙ ⲡⲉ = This is a book (demonstrative + indefinite noun + copula)'
    },

    // Lesson 8-2: Copula with Definite Nouns - exercises 9-15
    {
      id: 'test-8-9',
      type: 'translation',
      question: 'Translate: ⲛⲑⲟⲥ ⲧⲉ ϯⲙⲁⲩ',
      questionCoptic: 'ⲛⲑⲟⲥ ⲧⲉ ϯⲙⲁⲩ',
      correctAnswer: 'She is the mother',
      options: ['She is the mother', 'She is a mother', 'This is the mother', 'You (f) are the mother'],
      explanation: 'ⲛⲑⲟⲥ ⲧⲉ ϯⲙⲁⲩ = She is the mother (pronoun + copula + definite noun)'
    },
    {
      id: 'test-8-10',
      type: 'multiple_choice',
      question: 'What is the word order for "He is the father"?',
      correctAnswer: 'ⲛⲑⲟϥ ⲡⲉ ⲡⲓⲓⲱⲧ',
      options: ['ⲛⲑⲟϥ ⲡⲉ ⲡⲓⲓⲱⲧ', 'ⲡⲓⲓⲱⲧ ⲡⲉ ⲛⲑⲟϥ', 'ⲛⲑⲟϥ ⲡⲓⲓⲱⲧ ⲡⲉ', 'ⲡⲉ ⲛⲑⲟϥ ⲡⲓⲓⲱⲧ'],
      explanation: 'ⲛⲑⲟϥ ⲡⲉ ⲡⲓⲓⲱⲧ = Pronoun + Copula + Definite Noun (standard word order)'
    },
    {
      id: 'test-8-11',
      type: 'matching',
      question: 'Match Coptic sentences with English',
      correctAnswer: 'matched',
      pairs: [
        { coptic: 'ⲁⲛⲟⲕ ⲡⲉ ⲡⲓⲥⲁϩ', english: 'I am the teacher' },
        { coptic: 'ⲛⲑⲟ ⲧⲉ ϯⲥⲱⲛⲓ', english: 'You (f) are the sister' },
        { coptic: 'ⲛⲑⲱⲟⲩ ⲛⲉ ⲛⲓⲁⲗⲟⲩ', english: 'They are the children' }
      ]
    },
    {
      id: 'test-8-12',
      type: 'fill_blank',
      question: 'Complete: ⲁⲛⲟⲛ ___ ⲛⲓⲙⲁⲑⲏⲧⲏⲥ = We are the disciples',
      correctAnswer: 'ⲛⲉ',
      options: ['ⲛⲉ', 'ⲡⲉ', 'ⲧⲉ', 'ⲧⲉⲛ'],
      explanation: 'ⲛⲉ is the plural copula for "we/you(pl)/they are"'
    },
    {
      id: 'test-8-13',
      type: 'sentence_building',
      question: 'Build: "You (plural) are the teachers"',
      correctAnswer: 'ⲛⲑⲱⲧⲉⲛ ⲛⲉ ⲛⲓⲥⲁϩ',
      wordBank: ['ⲛⲑⲱⲧⲉⲛ', 'ⲛⲉ', 'ⲛⲓⲥⲁϩ', 'ⲡⲉ'],
      explanation: 'ⲛⲑⲱⲧⲉⲛ ⲛⲉ ⲛⲓⲥⲁϩ = You (pl) are the teachers'
    },
    {
      id: 'test-8-14',
      type: 'translation',
      question: 'Translate: ⲫϯ ⲡⲉ ⲡⲓⲁⲅⲁⲑⲟⲥ',
      questionCoptic: 'ⲫϯ ⲡⲉ ⲡⲓⲁⲅⲁⲑⲟⲥ',
      correctAnswer: 'God is the Good One',
      options: ['God is the Good One', 'God is good', 'This is God', 'He is God'],
      explanation: 'ⲫϯ ⲡⲉ ⲡⲓⲁⲅⲁⲑⲟⲥ = God is the Good One (Bohairic ⲫϯ not ⲫⲛⲟⲩϯ!)'
    },
    {
      id: 'test-8-15',
      type: 'translation',
      question: 'Translate to Coptic: "They are the apostles"',
      correctAnswer: 'ⲛⲑⲱⲟⲩ ⲛⲉ ⲛⲓⲁⲡⲟⲥⲧⲟⲗⲟⲥ',
      options: ['ⲛⲑⲱⲟⲩ ⲛⲉ ⲛⲓⲁⲡⲟⲥⲧⲟⲗⲟⲥ', 'ⲛⲑⲱⲟⲩ ⲡⲉ ⲛⲓⲁⲡⲟⲥⲧⲟⲗⲟⲥ', 'ⲛⲁⲓ ⲛⲉ ⲛⲓⲁⲡⲟⲥⲧⲟⲗⲟⲥ', 'ⲛⲑⲱⲟⲩ ϩⲁⲛⲁⲡⲟⲥⲧⲟⲗⲟⲥ ⲛⲉ'],
      explanation: 'ⲛⲑⲱⲟⲩ ⲛⲉ ⲛⲓⲁⲡⲟⲥⲧⲟⲗⲟⲥ = They are the apostles (pronoun + copula + definite)'
    },

    // Lesson 8-3: Copula with Indefinite Nouns - exercises 16-23
    {
      id: 'test-8-16',
      type: 'multiple_choice',
      question: 'What does ⲁⲛⲟⲕ ⲟⲩⲣⲱⲙⲓ ⲡⲉ mean?',
      questionCoptic: 'ⲁⲛⲟⲕ ⲟⲩⲣⲱⲙⲓ ⲡⲉ',
      correctAnswer: 'I am a man',
      options: ['I am a man', 'I am the man', 'I am men', 'This is a man'],
      explanation: 'ⲁⲛⲟⲕ ⲟⲩⲣⲱⲙⲓ ⲡⲉ = I am a man (ⲟⲩ- makes it indefinite "a")'
    },
    {
      id: 'test-8-17',
      type: 'matching',
      question: 'Match indefinite copula sentences',
      correctAnswer: 'matched',
      pairs: [
        { coptic: 'ⲛⲑⲟⲕ ⲟⲩⲥⲟⲛ ⲡⲉ', english: 'you (m) are a brother' },
        { coptic: 'ⲛⲑⲟ ⲟⲩϣⲉⲣⲓ ⲧⲉ', english: 'you (f) are a daughter' },
        { coptic: 'ⲛⲑⲟϥ ⲟⲩⲙⲁⲑⲏⲧⲏⲥ ⲡⲉ', english: 'he is a disciple' },
        { coptic: 'ⲛⲑⲟⲥ ⲟⲩⲙⲁⲩ ⲧⲉ', english: 'she is a mother' }
      ]
    },
    {
      id: 'test-8-18',
      type: 'translation',
      question: 'Translate: ⲛⲑⲱⲟⲩ ϩⲁⲛⲥⲁϩ ⲛⲉ',
      questionCoptic: 'ⲛⲑⲱⲟⲩ ϩⲁⲛⲥⲁϩ ⲛⲉ',
      correctAnswer: 'They are teachers',
      options: ['They are teachers', 'They are the teachers', 'We are teachers', 'They teach'],
      explanation: 'ⲛⲑⲱⲟⲩ ϩⲁⲛⲥⲁϩ ⲛⲉ = They are teachers (ϩⲁⲛ- = plural indefinite)'
    },
    {
      id: 'test-8-19',
      type: 'fill_blank',
      question: 'Complete: ⲁⲛⲟⲛ ___ ⲁⲗⲟⲩ ⲛⲉ = We are children',
      correctAnswer: 'ϩⲁⲛ',
      options: ['ϩⲁⲛ', 'ⲛⲓ', 'ⲟⲩ', 'ⲛⲉ'],
      explanation: 'ϩⲁⲛ- is the plural indefinite article (ϩⲁⲛⲁⲗⲟⲩ = children/some children)'
    },
    {
      id: 'test-8-20',
      type: 'sentence_building',
      question: 'Build: "She is a woman"',
      correctAnswer: 'ⲛⲑⲟⲥ ⲟⲩϩⲓⲙⲓ ⲧⲉ',
      wordBank: ['ⲛⲑⲟⲥ', 'ⲟⲩϩⲓⲙⲓ', 'ⲧⲉ', 'ⲡⲉ'],
      explanation: 'ⲛⲑⲟⲥ ⲟⲩϩⲓⲙⲓ ⲧⲉ = She is a woman (Bohairic ϩⲓⲙⲓ not ⲥϩⲓⲙⲉ!)'
    },
    {
      id: 'test-8-21',
      type: 'multiple_choice',
      question: 'How do you say "We are disciples"?',
      correctAnswer: 'ⲁⲛⲟⲛ ϩⲁⲛⲙⲁⲑⲏⲧⲏⲥ ⲛⲉ',
      options: ['ⲁⲛⲟⲛ ϩⲁⲛⲙⲁⲑⲏⲧⲏⲥ ⲛⲉ', 'ⲁⲛⲟⲛ ⲛⲓⲙⲁⲑⲏⲧⲏⲥ ⲛⲉ', 'ⲁⲛⲟⲛ ⲟⲩⲙⲁⲑⲏⲧⲏⲥ ⲛⲉ', 'ⲁⲛⲟⲛ ⲙⲁⲑⲏⲧⲏⲥ ⲛⲉ'],
      explanation: 'ⲁⲛⲟⲛ ϩⲁⲛⲙⲁⲑⲏⲧⲏⲥ ⲛⲉ = We are disciples (ϩⲁⲛ- for plural indefinite)'
    },
    {
      id: 'test-8-22',
      type: 'translation',
      question: 'Translate to Coptic: "This is a house"',
      correctAnswer: 'ⲫⲁⲓ ⲟⲩⲏⲓ ⲡⲉ',
      options: ['ⲫⲁⲓ ⲟⲩⲏⲓ ⲡⲉ', 'ⲫⲁⲓ ⲡⲉ ⲡⲓⲏⲓ', 'ⲫⲁⲓ ⲏⲓ ⲡⲉ', 'ⲫⲁⲓ ⲟⲩⲏⲓ ⲧⲉ'],
      explanation: 'ⲫⲁⲓ ⲟⲩⲏⲓ ⲡⲉ = This is a house (ⲟⲩ- + masculine noun + ⲡⲉ)'
    },
    {
      id: 'test-8-23',
      type: 'translation',
      question: 'Translate: ⲁⲛⲟⲕ ⲟⲩϣⲉⲣⲓ ⲧⲉ',
      questionCoptic: 'ⲁⲛⲟⲕ ⲟⲩϣⲉⲣⲓ ⲧⲉ',
      correctAnswer: 'I (f) am a daughter',
      options: ['I (f) am a daughter', 'I (m) am a son', 'She is a daughter', 'I am the daughter'],
      explanation: 'ⲁⲛⲟⲕ ⲟⲩϣⲉⲣⲓ ⲧⲉ = I (female) am a daughter (use ϣ not ⲥ!)'
    },

    // Lesson 8-4: Negation and Questions with Copula - exercises 24-30
    {
      id: 'test-8-24',
      type: 'translation',
      question: 'Translate: ⲁⲛⲟⲕ ⲁⲛ ⲡⲉ ⲡⲓⲥⲁϩ',
      questionCoptic: 'ⲁⲛⲟⲕ ⲁⲛ ⲡⲉ ⲡⲓⲥⲁϩ',
      correctAnswer: 'I am not the teacher',
      options: ['I am not the teacher', 'I am the teacher', 'I am not a teacher', 'You are not the teacher'],
      explanation: 'ⲁⲛⲟⲕ ⲁⲛ ⲡⲉ ⲡⲓⲥⲁϩ = I am not the teacher (ⲁⲛ = negative marker after pronoun)'
    },
    {
      id: 'test-8-25',
      type: 'multiple_choice',
      question: 'How do you say "She is not a mother"?',
      correctAnswer: 'ⲛⲑⲟⲥ ⲁⲛ ⲟⲩⲙⲁⲩ ⲧⲉ',
      options: ['ⲛⲑⲟⲥ ⲁⲛ ⲟⲩⲙⲁⲩ ⲧⲉ', 'ⲛⲑⲟⲥ ⲟⲩⲙⲁⲩ ⲁⲛ ⲧⲉ', 'ⲛⲑⲟⲥ ⲟⲩⲙⲁⲩ ⲧⲉ ⲁⲛ', 'ⲁⲛ ⲛⲑⲟⲥ ⲟⲩⲙⲁⲩ ⲧⲉ'],
      explanation: 'ⲛⲑⲟⲥ ⲁⲛ ⲟⲩⲙⲁⲩ ⲧⲉ = She is not a mother (ⲁⲛ comes after pronoun)'
    },
    {
      id: 'test-8-26',
      type: 'matching',
      question: 'Match negative copula sentences',
      correctAnswer: 'matched',
      pairs: [
        { coptic: 'ⲫⲁⲓ ⲁⲛ ⲡⲉ ⲡⲓϫⲱⲙ', english: 'this is not the book' },
        { coptic: 'ⲑⲁⲓ ⲁⲛ ⲧⲉ ϯⲧⲣⲁⲡⲉⲍⲁ', english: 'this is not the table' },
        { coptic: 'ⲛⲁⲓ ⲁⲛ ⲛⲉ ⲛⲓⲣⲱⲙⲓ', english: 'these are not the men' }
      ]
    },
    {
      id: 'test-8-27',
      type: 'fill_blank',
      question: 'Complete: ⲛⲑⲱⲟⲩ ___ ϩⲁⲛⲥⲁϩ ⲛⲉ = They are not teachers',
      correctAnswer: 'ⲁⲛ',
      options: ['ⲁⲛ', 'ⲛⲉ', 'ⲙⲡⲉ', 'ⲟⲩ'],
      explanation: 'ⲁⲛ is the negative marker for copula sentences (placed after pronoun)'
    },
    {
      id: 'test-8-28',
      type: 'sentence_building',
      question: 'Build: "You (m) are not a disciple"',
      correctAnswer: 'ⲛⲑⲟⲕ ⲁⲛ ⲟⲩⲙⲁⲑⲏⲧⲏⲥ ⲡⲉ',
      wordBank: ['ⲛⲑⲟⲕ', 'ⲁⲛ', 'ⲟⲩⲙⲁⲑⲏⲧⲏⲥ', 'ⲡⲉ'],
      explanation: 'ⲛⲑⲟⲕ ⲁⲛ ⲟⲩⲙⲁⲑⲏⲧⲏⲥ ⲡⲉ = You (m) are not a disciple'
    },
    {
      id: 'test-8-29',
      type: 'translation',
      question: 'Translate: ⲁⲛⲟⲛ ⲁⲛ ⲛⲉ ⲛⲓⲁⲡⲟⲥⲧⲟⲗⲟⲥ',
      questionCoptic: 'ⲁⲛⲟⲛ ⲁⲛ ⲛⲉ ⲛⲓⲁⲡⲟⲥⲧⲟⲗⲟⲥ',
      correctAnswer: 'We are not the apostles',
      options: ['We are not the apostles', 'We are the apostles', 'They are not the apostles', 'We are not apostles'],
      explanation: 'ⲁⲛⲟⲛ ⲁⲛ ⲛⲉ ⲛⲓⲁⲡⲟⲥⲧⲟⲗⲟⲥ = We are not the apostles (pronoun + ⲁⲛ + copula + definite noun)'
    },
    {
      id: 'test-8-30',
      type: 'multiple_choice',
      question: 'Which sentence correctly negates "This is a woman"?',
      correctAnswer: 'ⲑⲁⲓ ⲁⲛ ⲟⲩϩⲓⲙⲓ ⲧⲉ',
      options: ['ⲑⲁⲓ ⲁⲛ ⲟⲩϩⲓⲙⲓ ⲧⲉ', 'ⲑⲁⲓ ⲟⲩϩⲓⲙⲓ ⲁⲛ ⲧⲉ', 'ⲑⲁⲓ ⲟⲩϩⲓⲙⲓ ⲧⲉ ⲁⲛ', 'ⲁⲛ ⲑⲁⲓ ⲟⲩϩⲓⲙⲓ ⲧⲉ'],
      explanation: 'ⲑⲁⲓ ⲁⲛ ⲟⲩϩⲓⲙⲓ ⲧⲉ = This is not a woman (ⲁⲛ after demonstrative - Bohairic ϩⲓⲙⲓ not ⲥϩⲓⲙⲉ!)'
    }
  ]
};

export default unit8Test;
