import { Unit } from '../../types';

// UNIT 8: "TO BE" - COPULA SENTENCES
// Corrected for Bohairic dialect consistency
// Based on OUTLINE OF BOHAIRIC COPTIC MORPHOLOGY

const unit8: Unit = {
  id: 'unit-8',
  title: '"To Be" - Copula Sentences',
  description: 'Form basic sentences with ⲡⲉ, ⲧⲉ, ⲛⲉ',
  order: 8,
  color: '#FF4B4B',
  lessons: [
    {
      id: 'lesson-8-1',
      unitId: 'unit-8',
      title: 'Copula: "to be" (Present)',
      description: 'Learn ⲡⲉ, ⲧⲉ, ⲛⲉ for "is/am/are"',
      order: 1,
      xpReward: 20,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-8-1-1',
          type: 'multiple_choice',
          question: 'What is the masculine copula "is/am"?',
          correctAnswer: 'ⲡⲉ',
          options: ['ⲡⲉ', 'ⲧⲉ', 'ⲛⲉ', 'ⲟⲩ'],
          explanation: 'ⲡⲉ (pe) = "is/am" for masculine singular subjects/predicates'
        },
        {
          id: 'ex-8-1-2',
          type: 'translation',
          question: 'Translate: ⲁⲛⲟⲕ ⲡⲉ',
          questionCoptic: 'ⲁⲛⲟⲕ ⲡⲉ',
          correctAnswer: 'I am (male)',
          options: ['I am (male)', 'You are', 'He is', 'She is'],
          explanation: 'ⲁⲛⲟⲕ ⲡⲉ = "I am" (when speaker is male or predicate is masculine)'
        },
        {
          id: 'ex-8-1-3',
          type: 'sentence_building',
          question: 'Build: "I am a man"',
          correctAnswer: 'ⲁⲛⲟⲕ ⲟⲩⲣⲱⲙⲓ ⲡⲉ',
          wordBank: ['ⲁⲛⲟⲕ', 'ⲟⲩⲣⲱⲙⲓ', 'ⲡⲉ', 'ⲧⲉ'],
          explanation: 'ⲁⲛⲟⲕ ⲟⲩⲣⲱⲙⲓ ⲡⲉ = "I am a man" (subject + predicate + copula)'
        },
        {
          id: 'ex-8-1-4',
          type: 'multiple_choice',
          question: 'What is the feminine copula?',
          correctAnswer: 'ⲧⲉ',
          options: ['ⲧⲉ', 'ⲡⲉ', 'ⲛⲉ', 'ⲟⲩ'],
          explanation: 'ⲧⲉ (te) = "is/am" for feminine singular'
        },
        {
          id: 'ex-8-1-5',
          type: 'translation',
          question: 'Translate: ⲁⲛⲟⲕ ⲧⲉ',
          questionCoptic: 'ⲁⲛⲟⲕ ⲧⲉ',
          correctAnswer: 'I am (female)',
          options: ['I am (female)', 'You are', 'She is', 'He is'],
          explanation: 'ⲁⲛⲟⲕ ⲧⲉ = "I am" (when speaker is female or predicate is feminine)'
        },
        {
          id: 'ex-8-1-6',
          type: 'multiple_choice',
          question: 'What is the plural copula?',
          correctAnswer: 'ⲛⲉ',
          options: ['ⲛⲉ', 'ⲡⲉ', 'ⲧⲉ', 'ⲟⲩ'],
          explanation: 'ⲛⲉ (ne) = "are" for plural'
        },
        {
          id: 'ex-8-1-7',
          type: 'translation',
          question: 'Translate: ⲛ̀ⲑⲟϥ ⲡⲉ ⲡⲓⲣⲱⲙⲓ',
          questionCoptic: 'ⲛ̀ⲑⲟϥ ⲡⲉ ⲡⲓⲣⲱⲙⲓ',
          correctAnswer: 'He is the man',
          options: ['He is the man', 'She is the woman', 'I am the man', 'They are the men'],
          explanation: 'ⲛ̀ⲑⲟϥ ⲡⲉ ⲡⲓⲣⲱⲙⲓ = "He is the man"'
        },
        {
          id: 'ex-8-1-8',
          type: 'matching',
          question: 'Match the copulas',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲡⲉ', english: 'is/am (masc.)' },
            { coptic: 'ⲧⲉ', english: 'is/am (fem.)' },
            { coptic: 'ⲛⲉ', english: 'are (plural)' }
          ]
        },
        {
          id: 'ex-8-1-9',
          type: 'translation',
          question: 'Translate to Coptic: "She is a woman"',
          correctAnswer: 'ⲛ̀ⲑⲟⲥ ⲟⲩϩⲓⲙⲓ ⲧⲉ',
          options: ['ⲛ̀ⲑⲟⲥ ⲟⲩϩⲓⲙⲓ ⲧⲉ', 'ⲛ̀ⲑⲟϥ ⲟⲩⲣⲱⲙⲓ ⲡⲉ', 'ⲁⲛⲟⲕ ⲟⲩϩⲓⲙⲓ ⲧⲉ', 'ⲛ̀ⲑⲱⲟⲩ ϩⲁⲛϩⲓⲙⲓ ⲛⲉ'],
          explanation: 'ⲛ̀ⲑⲟⲥ ⲟⲩϩⲓⲙⲓ ⲧⲉ = "She is a woman"'
        },
        {
          id: 'ex-8-1-10',
          type: 'sentence_building',
          question: 'Build: "He is a father"',
          correctAnswer: 'ⲛ̀ⲑⲟϥ ⲟⲩⲓⲱⲧ ⲡⲉ',
          wordBank: ['ⲛ̀ⲑⲟϥ', 'ⲟⲩⲓⲱⲧ', 'ⲡⲉ', 'ⲧⲉ'],
          explanation: 'ⲛ̀ⲑⲟϥ ⲟⲩⲓⲱⲧ ⲡⲉ = "He is a father"'
        }
      ]
    },
    {
      id: 'lesson-8-2',
      unitId: 'unit-8',
      title: 'Copula with Pronouns',
      description: 'Use copula with all subject pronouns',
      order: 2,
      xpReward: 20,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-8-2-1',
          type: 'matching',
          question: 'Match pronouns with copula',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲁⲛⲟⲕ ⲡⲉ', english: 'I am (m)' },
            { coptic: 'ⲁⲛⲟⲕ ⲧⲉ', english: 'I am (f)' },
            { coptic: 'ⲛ̀ⲑⲟϥ ⲡⲉ', english: 'He is' },
            { coptic: 'ⲛ̀ⲑⲟⲥ ⲧⲉ', english: 'She is' }
          ]
        },
        {
          id: 'ex-8-2-2',
          type: 'translation',
          question: 'Translate: ⲛ̀ⲑⲱⲕ ⲟⲩⲁⲗⲟⲩ ⲡⲉ',
          questionCoptic: 'ⲛ̀ⲑⲱⲕ ⲟⲩⲁⲗⲟⲩ ⲡⲉ',
          correctAnswer: 'You (m) are a boy',
          options: ['You (m) are a boy', 'You (f) are a girl', 'He is a boy', 'I am a boy'],
          explanation: 'ⲛ̀ⲑⲱⲕ ⲟⲩⲁⲗⲟⲩ ⲡⲉ = "You (masculine) are a boy"'
        },
        {
          id: 'ex-8-2-3',
          type: 'sentence_building',
          question: 'Build: "You (f) are a woman"',
          correctAnswer: 'ⲛ̀ⲑⲟ ⲟⲩϩⲓⲙⲓ ⲧⲉ',
          wordBank: ['ⲛ̀ⲑⲟ', 'ⲟⲩϩⲓⲙⲓ', 'ⲧⲉ', 'ⲡⲉ'],
          explanation: 'ⲛ̀ⲑⲟ ⲟⲩϩⲓⲙⲓ ⲧⲉ = "You (feminine) are a woman"'
        },
        {
          id: 'ex-8-2-4',
          type: 'multiple_choice',
          question: 'What is "We are" with plural copula?',
          correctAnswer: 'ⲁⲛⲟⲛ ⲛⲉ',
          options: ['ⲁⲛⲟⲛ ⲛⲉ', 'ⲁⲛⲟⲕ ⲡⲉ', 'ⲛ̀ⲑⲱⲟⲩ ⲛⲉ', 'ⲛ̀ⲑⲱⲧⲉⲛ ⲛⲉ'],
          explanation: 'ⲁⲛⲟⲛ ⲛⲉ = "We are" (plural copula)'
        },
        {
          id: 'ex-8-2-5',
          type: 'translation',
          question: 'Translate: ⲛ̀ⲑⲱⲧⲉⲛ ϩⲁⲛⲁⲗⲟⲩ ⲛⲉ',
          questionCoptic: 'ⲛ̀ⲑⲱⲧⲉⲛ ϩⲁⲛⲁⲗⲟⲩ ⲛⲉ',
          correctAnswer: 'You (pl) are children',
          options: ['You (pl) are children', 'They are children', 'We are children', 'You (m) are a child'],
          explanation: 'ⲛ̀ⲑⲱⲧⲉⲛ ϩⲁⲛⲁⲗⲟⲩ ⲛⲉ = "You (plural) are children"'
        },
        {
          id: 'ex-8-2-6',
          type: 'sentence_building',
          question: 'Build: "They are teachers"',
          correctAnswer: 'ⲛ̀ⲑⲱⲟⲩ ϩⲁⲛⲥⲁϩ ⲛⲉ',
          wordBank: ['ⲛ̀ⲑⲱⲟⲩ', 'ϩⲁⲛⲥⲁϩ', 'ⲛⲉ', 'ⲡⲉ'],
          explanation: 'ⲛ̀ⲑⲱⲟⲩ ϩⲁⲛⲥⲁϩ ⲛⲉ = "They are teachers"'
        },
        {
          id: 'ex-8-2-7',
          type: 'fill_blank',
          question: 'Complete: ⲛ̀ⲑⲟϥ ___ ⲡⲓⲣⲱⲙⲓ = He is the man',
          correctAnswer: 'ⲡⲉ',
          options: ['ⲡⲉ', 'ⲧⲉ', 'ⲛⲉ', 'ⲟⲩ'],
          explanation: 'Use ⲡⲉ for masculine singular subjects'
        },
        {
          id: 'ex-8-2-8',
          type: 'multiple_choice',
          question: 'How do you say "We are brothers"?',
          correctAnswer: 'ⲁⲛⲟⲛ ϩⲁⲛⲥⲛⲏⲟⲩ ⲛⲉ',
          options: ['ⲁⲛⲟⲛ ϩⲁⲛⲥⲛⲏⲟⲩ ⲛⲉ', 'ⲁⲛⲟⲕ ⲟⲩⲥⲟⲛ ⲡⲉ', 'ⲛ̀ⲑⲱⲟⲩ ϩⲁⲛⲥⲛⲏⲟⲩ ⲛⲉ', 'ⲁⲛⲟⲛ ⲟⲩⲥⲟⲛ ⲡⲉ'],
          explanation: 'ⲁⲛⲟⲛ ϩⲁⲛⲥⲛⲏⲟⲩ ⲛⲉ = "We are brothers"'
        },
        {
          id: 'ex-8-2-9',
          type: 'translation',
          question: 'Translate to Coptic: "I am a teacher" (male)',
          correctAnswer: 'ⲁⲛⲟⲕ ⲟⲩⲥⲁϩ ⲡⲉ',
          options: ['ⲁⲛⲟⲕ ⲟⲩⲥⲁϩ ⲡⲉ', 'ⲁⲛⲟⲕ ⲟⲩⲥⲁϩ ⲧⲉ', 'ⲛ̀ⲑⲟϥ ⲟⲩⲥⲁϩ ⲡⲉ', 'ⲁⲛⲟⲛ ϩⲁⲛⲥⲁϩ ⲛⲉ'],
          explanation: 'ⲁⲛⲟⲕ ⲟⲩⲥⲁϩ ⲡⲉ = "I am a teacher" (masculine)'
        },
        {
          id: 'ex-8-2-10',
          type: 'matching',
          question: 'Match full copula sentences',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲁⲛⲟⲛ ϩⲁⲛⲥⲁϩ ⲛⲉ', english: 'We are teachers' },
            { coptic: 'ⲛ̀ⲑⲱⲧⲉⲛ ϩⲁⲛⲁⲗⲟⲩ ⲛⲉ', english: 'You (pl) are children' },
            { coptic: 'ⲛ̀ⲑⲱⲟⲩ ϩⲁⲛⲣⲱⲙⲓ ⲛⲉ', english: 'They are men' }
          ]
        }
      ]
    },
    {
      id: 'lesson-8-3',
      unitId: 'unit-8',
      title: 'Copula with Definite Articles',
      description: 'Use copula with "the"',
      order: 3,
      xpReward: 20,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-8-3-1',
          type: 'translation',
          question: 'Translate: ⲫⲁⲓ ⲡⲉ ⲡⲓⲣⲱⲙⲓ',
          questionCoptic: 'ⲫⲁⲓ ⲡⲉ ⲡⲓⲣⲱⲙⲓ',
          correctAnswer: 'This is the man',
          options: ['This is the man', 'That is the man', 'This is a man', 'He is the man'],
          explanation: 'ⲫⲁⲓ ⲡⲉ ⲡⲓⲣⲱⲙⲓ = "This is the man"'
        },
        {
          id: 'ex-8-3-2',
          type: 'sentence_building',
          question: 'Build: "This is the woman"',
          correctAnswer: 'ⲑⲁⲓ ⲧⲉ ϯϩⲓⲙⲓ',
          wordBank: ['ⲑⲁⲓ', 'ⲧⲉ', 'ϯ', 'ϩⲓⲙⲓ'],
          explanation: 'ⲑⲁⲓ ⲧⲉ ϯϩⲓⲙⲓ = "This is the woman"'
        },
        {
          id: 'ex-8-3-3',
          type: 'multiple_choice',
          question: 'What does ⲫⲏ ⲡⲉ ⲡⲓⲁⲗⲟⲩ mean?',
          questionCoptic: 'ⲫⲏ ⲡⲉ ⲡⲓⲁⲗⲟⲩ',
          correctAnswer: 'That is the boy',
          options: ['That is the boy', 'This is the boy', 'He is the boy', 'That is a boy'],
          explanation: 'ⲫⲏ ⲡⲉ ⲡⲓⲁⲗⲟⲩ = "That is the boy"'
        },
        {
          id: 'ex-8-3-4',
          type: 'translation',
          question: 'Translate: ⲛⲁⲓ ⲛⲉ ⲛⲓⲁⲗⲟⲩ',
          questionCoptic: 'ⲛⲁⲓ ⲛⲉ ⲛⲓⲁⲗⲟⲩ',
          correctAnswer: 'These are the boys',
          options: ['These are the boys', 'Those are the boys', 'They are boys', 'These are boys'],
          explanation: 'ⲛⲁⲓ ⲛⲉ ⲛⲓⲁⲗⲟⲩ = "These are the boys"'
        },
        {
          id: 'ex-8-3-5',
          type: 'sentence_building',
          question: 'Build: "Those are the books"',
          correctAnswer: 'ⲛⲏ ⲛⲉ ⲛⲓϫⲱⲙ',
          wordBank: ['ⲛⲏ', 'ⲛⲉ', 'ⲛⲓ', 'ϫⲱⲙ'],
          explanation: 'ⲛⲏ ⲛⲉ ⲛⲓϫⲱⲙ = "Those are the books"'
        },
        {
          id: 'ex-8-3-6',
          type: 'fill_blank',
          question: 'Complete: ⲑⲏ ___ ϯⲉⲕⲕⲗⲏⲥⲓⲁ = That is the church',
          correctAnswer: 'ⲧⲉ',
          options: ['ⲧⲉ', 'ⲡⲉ', 'ⲛⲉ', 'ⲟⲩ'],
          explanation: 'Use ⲧⲉ for feminine singular (ⲉⲕⲕⲗⲏⲥⲓⲁ is feminine)'
        },
        {
          id: 'ex-8-3-7',
          type: 'matching',
          question: 'Match demonstrative copula phrases',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲫⲁⲓ ⲡⲉ ⲡⲓⲓⲱⲧ', english: 'This is the father' },
            { coptic: 'ⲑⲁⲓ ⲧⲉ ϯⲙⲁⲩ', english: 'This is the mother' },
            { coptic: 'ⲛⲁⲓ ⲛⲉ ⲛⲓⲥⲛⲏⲟⲩ', english: 'These are the brothers' }
          ]
        },
        {
          id: 'ex-8-3-8',
          type: 'multiple_choice',
          question: 'How do you say "That is the house"?',
          correctAnswer: 'ⲑⲏ ⲧⲉ ϯϩⲓ',
          options: ['ⲑⲏ ⲧⲉ ϯϩⲓ', 'ⲫⲏ ⲡⲉ ⲡⲓϩⲓ', 'ⲑⲁⲓ ⲧⲉ ϯϩⲓ', 'ⲛⲏ ⲛⲉ ⲛⲓϩⲓ'],
          explanation: 'ⲑⲏ ⲧⲉ ϯϩⲓ = "That is the house" (ϩⲓ is feminine)'
        },
        {
          id: 'ex-8-3-9',
          type: 'translation',
          question: 'Translate to Coptic: "This is the book"',
          correctAnswer: 'ⲫⲁⲓ ⲡⲉ ⲡⲓϫⲱⲙ',
          options: ['ⲫⲁⲓ ⲡⲉ ⲡⲓϫⲱⲙ', 'ⲑⲁⲓ ⲧⲉ ϯϫⲱⲙ', 'ⲫⲏ ⲡⲉ ⲡⲓϫⲱⲙ', 'ⲛⲁⲓ ⲛⲉ ⲛⲓϫⲱⲙ'],
          explanation: 'ⲫⲁⲓ ⲡⲉ ⲡⲓϫⲱⲙ = "This is the book" (ϫⲱⲙ is masculine)'
        },
        {
          id: 'ex-8-3-10',
          type: 'sentence_building',
          question: 'Build: "These are the sisters"',
          correctAnswer: 'ⲛⲁⲓ ⲛⲉ ⲛⲓⲥⲱⲛⲓ',
          wordBank: ['ⲛⲁⲓ', 'ⲛⲉ', 'ⲛⲓ', 'ⲥⲱⲛⲓ'],
          explanation: 'ⲛⲁⲓ ⲛⲉ ⲛⲓⲥⲱⲛⲓ = "These are the sisters"'
        }
      ]
    },
    {
      id: 'lesson-8-4',
      unitId: 'unit-8',
      title: 'Advanced Copula Applications',
      description: 'Copula in subordinate clauses and complex uses',
      order: 4,
      xpReward: 25,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-8-4-1',
          type: 'translation',
          question: 'Translate: ⲁⲓⲉ̀ⲙⲓ ϫⲉ ⲛ̀ⲑⲟϥ ⲡⲉ ⲡⲓⲥⲁϩ',
          questionCoptic: 'ⲁⲓⲉ̀ⲙⲓ ϫⲉ ⲛ̀ⲑⲟϥ ⲡⲉ ⲡⲓⲥⲁϩ',
          correctAnswer: 'I knew that he is the teacher',
          options: ['I knew that he is the teacher', 'I know that he is the teacher', 'He is the teacher', 'I am the teacher'],
          explanation: 'ⲁⲓⲉ̀ⲙⲓ ϫⲉ = I knew that + ⲛ̀ⲑⲟϥ ⲡⲉ ⲡⲓⲥⲁϩ = he is the teacher (copula in subordinate clause)'
        },
        {
          id: 'ex-8-4-2',
          type: 'multiple_choice',
          question: 'What does ⲡⲉϫⲁϥ ϫⲉ ⲁⲛⲟⲕ ⲡⲉ mean?',
          questionCoptic: 'ⲡⲉϫⲁϥ ϫⲉ ⲁⲛⲟⲕ ⲡⲉ',
          correctAnswer: 'He said that it is I',
          options: ['He said that it is I', 'He said I am', 'I said that he is', 'He is'],
          explanation: 'ⲡⲉϫⲁϥ ϫⲉ = he said that + ⲁⲛⲟⲕ ⲡⲉ = it is I (emphatic copula construction)'
        },
        {
          id: 'ex-8-4-3',
          type: 'matching',
          question: 'Match copula with participles',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲡⲉⲧⲟⲩⲱⲙ ⲡⲉ', english: 'he is the one eating' },
            { coptic: 'ⲑⲏⲉⲧⲥⲁϫⲓ ⲧⲉ', english: 'she is the one speaking' },
            { coptic: 'ⲛⲏⲉⲧⲙⲟϣⲓ ⲛⲉ', english: 'they are the ones walking' }
          ]
        },
        {
          id: 'ex-8-4-4',
          type: 'translation',
          question: 'Translate: ⲫϯ ⲡⲉ ⲡⲉⲛⲛⲟϩⲉⲙ',
          questionCoptic: 'ⲫϯ ⲡⲉ ⲡⲉⲛⲛⲟϩⲉⲙ',
          correctAnswer: 'God is our savior',
          options: ['God is our savior', 'God is the savior', 'Our God is savior', 'He is our savior'],
          explanation: 'ⲫϯ ⲡⲉ = God is (masc. copula) + ⲡⲉⲛⲛⲟϩⲉⲙ = our savior (Bohairic ⲫϯ not ⲫⲛⲟⲩϯ!)'
        },
        {
          id: 'ex-8-4-5',
          type: 'sentence_building',
          question: 'Build: "The question is whether you are ready"',
          correctAnswer: 'ϯϧⲓⲛⲓ ⲧⲉ ⲓⲥϫⲉ ⲕⲥⲉⲃⲧⲱⲧ',
          wordBank: ['ϯϧⲓⲛⲓ', 'ⲧⲉ', 'ⲓⲥϫⲉ', 'ⲕⲥⲉⲃⲧⲱⲧ'],
          explanation: 'ϯϧⲓⲛⲓ ⲧⲉ = the question is (fem.) + ⲓⲥϫⲉ ⲕⲥⲉⲃⲧⲱⲧ = whether you are ready'
        },
        {
          id: 'ex-8-4-6',
          type: 'fill_blank',
          question: 'Complete: ⲡⲁⲓ ___ ⲫⲏⲉⲧⲁⲓⲛⲁⲩ ⲉ̀ⲣⲟϥ = This is what I saw',
          correctAnswer: 'ⲡⲉ',
          options: ['ⲡⲉ', 'ⲧⲉ', 'ⲛⲉ', 'ⲟⲩ'],
          explanation: 'ⲡⲁⲓ ⲡⲉ = this is (masculine) + ⲫⲏⲉⲧⲁⲓⲛⲁⲩ ⲉ̀ⲣⲟϥ = what I saw (copula with relative clause)'
        },
        {
          id: 'ex-8-4-7',
          type: 'multiple_choice',
          question: 'What is the difference between existential and identificational copula?',
          correctAnswer: 'Identificational uses definite articles',
          options: ['Identificational uses definite articles', 'Existential uses definite articles', 'They are the same', 'Existential is plural only'],
          explanation: 'Existential: ⲟⲩⲣⲱⲙⲓ ⲡⲉ (he is a man), Identificational: ⲫⲁⲓ ⲡⲉ ⲡⲓⲣⲱⲙⲓ (this is THE man)'
        },
        {
          id: 'ex-8-4-8',
          type: 'translation',
          question: 'Translate: ⲫⲏⲉⲧⲥⲱⲧⲙ ⲡⲉ ⲡⲓⲙⲁⲑⲏⲧⲏⲥ',
          questionCoptic: 'ⲫⲏⲉⲧⲥⲱⲧⲙ ⲡⲉ ⲡⲓⲙⲁⲑⲏⲧⲏⲥ',
          correctAnswer: 'He who hears is the disciple',
          options: ['He who hears is the disciple', 'The disciple hears', 'He hears the disciple', 'The one who hears'],
          explanation: 'ⲫⲏⲉⲧⲥⲱⲧⲙ = he who hears (relative) + ⲡⲉ = is + ⲡⲓⲙⲁⲑⲏⲧⲏⲥ = the disciple'
        },
        {
          id: 'ex-8-4-9',
          type: 'sentence_building',
          question: 'Build: "The truth is that we are brothers"',
          correctAnswer: 'ϯⲙⲉⲑⲙⲏⲓ ⲧⲉ ϫⲉ ⲁⲛⲟⲛ ϩⲁⲛⲥⲛⲏⲟⲩ',
          wordBank: ['ϯⲙⲉⲑⲙⲏⲓ', 'ⲧⲉ', 'ϫⲉ', 'ⲁⲛⲟⲛ', 'ϩⲁⲛⲥⲛⲏⲟⲩ'],
          explanation: 'ϯⲙⲉⲑⲙⲏⲓ ⲧⲉ = the truth is (fem.) + ϫⲉ ⲁⲛⲟⲛ ϩⲁⲛⲥⲛⲏⲟⲩ = that we are brothers'
        },
        {
          id: 'ex-8-4-10',
          type: 'translation',
          question: 'Translate to Coptic: "It is you (m) who knows"',
          correctAnswer: 'ⲛ̀ⲑⲟⲕ ⲡⲉ ⲫⲏⲉⲧⲉ̀ⲙⲓ',
          options: ['ⲛ̀ⲑⲟⲕ ⲡⲉ ⲫⲏⲉⲧⲉ̀ⲙⲓ', 'ⲕⲉ̀ⲙⲓ', 'ⲫⲏⲉⲧⲉ̀ⲙⲓ ⲡⲉ', 'ⲛ̀ⲑⲟⲕ ⲉ̀ⲙⲓ'],
          explanation: 'ⲛ̀ⲑⲟⲕ ⲡⲉ = it is you (emphatic) + ⲫⲏⲉⲧⲉ̀ⲙⲓ = the one who knows (relative + copula)'
        }
      ]
    }
  ]
};

export default unit8;
