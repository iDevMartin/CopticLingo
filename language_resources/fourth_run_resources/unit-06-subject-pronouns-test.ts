import { TestUnit } from '../../types';

// TEST UNIT 6: SUBJECT PRONOUNS
// Comprehensive test covering all 4 lessons
// 30 exercises testing vocabulary, grammar patterns, translations, and usage

const unit6Test: TestUnit = {
  id: 'test-unit-6',
  unitId: 'unit-6',
  title: 'Subject Pronouns Test',
  description: 'Test your knowledge of personal pronouns',
  order: 6,
  exercises: [
    // Lesson 6-1: Singular Pronouns (Part 1) - exercises 1-8
    {
      id: 'test-6-1',
      type: 'multiple_choice',
      question: 'What is "I" in Coptic?',
      correctAnswer: 'ⲁⲛⲟⲕ',
      options: ['ⲁⲛⲟⲕ', 'ⲛ̀ⲑⲟⲕ', 'ⲛ̀ⲑⲟϥ', 'ⲁⲛⲟⲛ'],
      explanation: 'ⲁⲛⲟⲕ (anok) = "I" (independent pronoun)'
    },
    {
      id: 'test-6-2',
      type: 'translation',
      question: 'Translate: ⲛ̀ⲑⲟⲕ ⲡⲉ ⲡⲓⲙⲁⲑⲏⲧⲏⲥ',
      questionCoptic: 'ⲛ̀ⲑⲟⲕ ⲡⲉ ⲡⲓⲙⲁⲑⲏⲧⲏⲥ',
      correctAnswer: 'You are the disciple',
      options: ['You are the disciple', 'I am the disciple', 'He is the disciple', 'You are a disciple'],
      explanation: 'ⲛ̀ⲑⲟⲕ ⲡⲉ ⲡⲓⲙⲁⲑⲏⲧⲏⲥ = You (masculine) are the disciple'
    },
    {
      id: 'test-6-3',
      type: 'matching',
      question: 'Match the singular pronouns',
      correctAnswer: 'matched',
      pairs: [
        { coptic: 'ⲁⲛⲟⲕ', english: 'I' },
        { coptic: 'ⲛ̀ⲑⲟⲕ', english: 'you (m)' },
        { coptic: 'ⲛ̀ⲑⲟ', english: 'you (f)' },
        { coptic: 'ⲛ̀ⲑⲟϥ', english: 'he' }
      ]
    },
    {
      id: 'test-6-4',
      type: 'fill_blank',
      question: 'Complete: ___ ⲧⲉ ϯⲥⲱⲛⲓ = You (f) are the sister',
      correctAnswer: 'ⲛ̀ⲑⲟ',
      options: ['ⲛ̀ⲑⲟ', 'ⲛ̀ⲑⲟⲕ', 'ⲁⲛⲟⲕ', 'ⲛ̀ⲑⲟⲥ'],
      explanation: 'ⲛ̀ⲑⲟ (ntho) is the pronoun for "you (feminine)"'
    },
    {
      id: 'test-6-5',
      type: 'translation',
      question: 'Translate to Coptic: "She is a mother"',
      correctAnswer: 'ⲛ̀ⲑⲟⲥ ⲟⲩⲙⲁⲩ ⲧⲉ',
      options: ['ⲛ̀ⲑⲟⲥ ⲟⲩⲙⲁⲩ ⲧⲉ', 'ⲁⲛⲟⲕ ⲟⲩⲙⲁⲩ ⲧⲉ', 'ⲛ̀ⲑⲟ ⲟⲩⲙⲁⲩ ⲧⲉ', 'ⲛ̀ⲑⲟϥ ⲟⲩⲙⲁⲩ ⲡⲉ'],
      explanation: 'ⲛ̀ⲑⲟⲥ ⲟⲩⲙⲁⲩ ⲧⲉ = She is a mother'
    },
    {
      id: 'test-6-6',
      type: 'multiple_choice',
      question: 'What does ⲛ̀ⲑⲟϥ ⲡⲉ ⲡⲓⲓⲱⲧ mean?',
      questionCoptic: 'ⲛ̀ⲑⲟϥ ⲡⲉ ⲡⲓⲓⲱⲧ',
      correctAnswer: 'He is the father',
      options: ['He is the father', 'I am the father', 'You are the father', 'He is a father'],
      explanation: 'ⲛ̀ⲑⲟϥ ⲡⲉ ⲡⲓⲓⲱⲧ = He is the father'
    },
    {
      id: 'test-6-7',
      type: 'sentence_building',
      question: 'Build: "I am a man"',
      correctAnswer: 'ⲁⲛⲟⲕ ⲟⲩⲣⲱⲙⲓ ⲡⲉ',
      wordBank: ['ⲁⲛⲟⲕ', 'ⲟⲩⲣⲱⲙⲓ', 'ⲡⲉ', 'ⲧⲉ'],
      explanation: 'ⲁⲛⲟⲕ ⲟⲩⲣⲱⲙⲓ ⲡⲉ = I am a man'
    },
    {
      id: 'test-6-8',
      type: 'translation',
      question: 'Translate: ⲁⲛⲟⲕ ⲟⲩϣⲉⲣⲓ ⲧⲉ',
      questionCoptic: 'ⲁⲛⲟⲕ ⲟⲩϣⲉⲣⲓ ⲧⲉ',
      correctAnswer: 'I am a daughter',
      options: ['I am a daughter', 'I am a son', 'She is a daughter', 'You are a daughter'],
      explanation: 'ⲁⲛⲟⲕ ⲟⲩϣⲉⲣⲓ ⲧⲉ = I (female) am a daughter'
    },

    // Lesson 6-2: Plural Pronouns - exercises 9-16
    {
      id: 'test-6-9',
      type: 'matching',
      question: 'Match the plural pronouns',
      correctAnswer: 'matched',
      pairs: [
        { coptic: 'ⲁⲛⲟⲛ', english: 'we' },
        { coptic: 'ⲛ̀ⲑⲱⲧⲉⲛ', english: 'you (pl)' },
        { coptic: 'ⲛ̀ⲑⲱⲟⲩ', english: 'they' }
      ]
    },
    {
      id: 'test-6-10',
      type: 'translation',
      question: 'Translate: ⲁⲛⲟⲛ ⲛⲉ ⲛⲓⲣⲱⲙⲓ',
      questionCoptic: 'ⲁⲛⲟⲛ ⲛⲉ ⲛⲓⲣⲱⲙⲓ',
      correctAnswer: 'We are the men',
      options: ['We are the men', 'They are the men', 'You are the men', 'We are men'],
      explanation: 'ⲁⲛⲟⲛ ⲛⲉ ⲛⲓⲣⲱⲙⲓ = We are the men'
    },
    {
      id: 'test-6-11',
      type: 'multiple_choice',
      question: 'How do you say "they are the sisters"?',
      correctAnswer: 'ⲛ̀ⲑⲱⲟⲩ ⲛⲉ ⲛⲓⲥⲱⲛⲓ',
      options: ['ⲛ̀ⲑⲱⲟⲩ ⲛⲉ ⲛⲓⲥⲱⲛⲓ', 'ⲁⲛⲟⲛ ⲛⲉ ⲛⲓⲥⲱⲛⲓ', 'ⲛ̀ⲑⲱⲧⲉⲛ ⲛⲉ ⲛⲓⲥⲱⲛⲓ', 'ⲛ̀ⲑⲱⲟⲩ ϩⲁⲛⲥⲱⲛⲓ ⲛⲉ'],
      explanation: 'ⲛ̀ⲑⲱⲟⲩ ⲛⲉ ⲛⲓⲥⲱⲛⲓ = They are the sisters'
    },
    {
      id: 'test-6-12',
      type: 'fill_blank',
      question: 'Complete: ___ ϩⲁⲛⲁⲗⲟⲩ ⲛⲉ = You (pl) are children',
      correctAnswer: 'ⲛ̀ⲑⲱⲧⲉⲛ',
      options: ['ⲛ̀ⲑⲱⲧⲉⲛ', 'ⲁⲛⲟⲛ', 'ⲛ̀ⲑⲱⲟⲩ', 'ⲛ̀ⲑⲟⲕ'],
      explanation: 'ⲛ̀ⲑⲱⲧⲉⲛ (nthōten) = "you (plural)"'
    },
    {
      id: 'test-6-13',
      type: 'sentence_building',
      question: 'Build: "We are teachers"',
      correctAnswer: 'ⲁⲛⲟⲛ ϩⲁⲛⲥⲁϩ ⲛⲉ',
      wordBank: ['ⲁⲛⲟⲛ', 'ϩⲁⲛⲥⲁϩ', 'ⲛⲉ', 'ⲡⲉ'],
      explanation: 'ⲁⲛⲟⲛ ϩⲁⲛⲥⲁϩ ⲛⲉ = We are teachers'
    },
    {
      id: 'test-6-14',
      type: 'translation',
      question: 'Translate to Coptic: "They are women"',
      correctAnswer: 'ⲛ̀ⲑⲱⲟⲩ ϩⲁⲛϩⲓⲙⲓ ⲛⲉ',
      options: ['ⲛ̀ⲑⲱⲟⲩ ϩⲁⲛϩⲓⲙⲓ ⲛⲉ', 'ⲛ̀ⲑⲱⲟⲩ ⲛⲉ ⲛⲓϩⲓⲙⲓ', 'ⲁⲛⲟⲛ ϩⲁⲛϩⲓⲙⲓ ⲛⲉ', 'ⲛ̀ⲑⲱⲧⲉⲛ ϩⲁⲛϩⲓⲙⲓ ⲛⲉ'],
      explanation: 'ⲛ̀ⲑⲱⲟⲩ ϩⲁⲛϩⲓⲙⲓ ⲛⲉ = They are women'
    },
    {
      id: 'test-6-15',
      type: 'multiple_choice',
      question: 'What is the Coptic word for "our" in "our father"?',
      correctAnswer: 'ⲡⲉⲛ-',
      options: ['ⲡⲉⲛ-', 'ⲡⲉⲧⲛ-', 'ⲡⲟⲩ-', 'ⲡⲁ-'],
      explanation: 'ⲡⲉⲛⲓⲱⲧ = our father (ⲡⲉⲛ- = our, from ⲁⲛⲟⲛ "we")'
    },
    {
      id: 'test-6-16',
      type: 'translation',
      question: 'Translate: ⲛ̀ⲑⲱⲧⲉⲛ ⲛⲉ ⲛⲓⲥⲛⲏⲟⲩ',
      questionCoptic: 'ⲛ̀ⲑⲱⲧⲉⲛ ⲛⲉ ⲛⲓⲥⲛⲏⲟⲩ',
      correctAnswer: 'You (pl) are the brothers',
      options: ['You (pl) are the brothers', 'We are the brothers', 'They are the brothers', 'You are brothers'],
      explanation: 'ⲛ̀ⲑⲱⲧⲉⲛ ⲛⲉ ⲛⲓⲥⲛⲏⲟⲩ = You (plural) are the brothers'
    },

    // Lesson 6-3: Pronoun Review & Practice - exercises 17-23
    {
      id: 'test-6-17',
      type: 'matching',
      question: 'Match all pronouns with English',
      correctAnswer: 'matched',
      pairs: [
        { coptic: 'ⲁⲛⲟⲕ', english: 'I' },
        { coptic: 'ⲛ̀ⲑⲟⲥ', english: 'she' },
        { coptic: 'ⲁⲛⲟⲛ', english: 'we' },
        { coptic: 'ⲛ̀ⲑⲱⲟⲩ', english: 'they' }
      ]
    },
    {
      id: 'test-6-18',
      type: 'translation',
      question: 'Translate: ⲛ̀ⲑⲟϥ ⲟⲩⲥⲟⲛ ⲡⲉ',
      questionCoptic: 'ⲛ̀ⲑⲟϥ ⲟⲩⲥⲟⲛ ⲡⲉ',
      correctAnswer: 'He is a brother',
      options: ['He is a brother', 'I am a brother', 'He is the brother', 'She is a sister'],
      explanation: 'ⲛ̀ⲑⲟϥ ⲟⲩⲥⲟⲛ ⲡⲉ = He is a brother'
    },
    {
      id: 'test-6-19',
      type: 'sentence_building',
      question: 'Build: "You (f) are a daughter"',
      correctAnswer: 'ⲛ̀ⲑⲟ ⲟⲩϣⲉⲣⲓ ⲧⲉ',
      wordBank: ['ⲛ̀ⲑⲟ', 'ⲟⲩϣⲉⲣⲓ', 'ⲧⲉ', 'ⲡⲉ'],
      explanation: 'ⲛ̀ⲑⲟ ⲟⲩϣⲉⲣⲓ ⲧⲉ = You (feminine) are a daughter'
    },
    {
      id: 'test-6-20',
      type: 'multiple_choice',
      question: 'Which sentence is correct?',
      correctAnswer: 'ⲁⲛⲟⲛ ϩⲁⲛⲙⲁⲑⲏⲧⲏⲥ ⲛⲉ',
      options: ['ⲁⲛⲟⲛ ϩⲁⲛⲙⲁⲑⲏⲧⲏⲥ ⲛⲉ', 'ⲁⲛⲟⲛ ⲟⲩⲙⲁⲑⲏⲧⲏⲥ ⲡⲉ', 'ⲁⲛⲟⲛ ⲛⲓⲙⲁⲑⲏⲧⲏⲥ ⲧⲉ', 'ⲁⲛⲟⲛ ⲙⲁⲑⲏⲧⲏⲥ ⲛⲉ'],
      explanation: 'ⲁⲛⲟⲛ ϩⲁⲛⲙⲁⲑⲏⲧⲏⲥ ⲛⲉ = We are disciples (plural indefinite requires ϩⲁⲛ-)'
    },
    {
      id: 'test-6-21',
      type: 'fill_blank',
      question: 'Complete: ⲛ̀ⲑⲟⲥ ___ ϯⲙⲁⲩ = She is the mother',
      correctAnswer: 'ⲧⲉ',
      options: ['ⲧⲉ', 'ⲡⲉ', 'ⲛⲉ', 'ⲟⲩ'],
      explanation: 'ⲧⲉ is the feminine singular copula'
    },
    {
      id: 'test-6-22',
      type: 'translation',
      question: 'Translate to Coptic: "They are the children"',
      correctAnswer: 'ⲛ̀ⲑⲱⲟⲩ ⲛⲉ ⲛⲓⲁⲗⲟⲩ',
      options: ['ⲛ̀ⲑⲱⲟⲩ ⲛⲉ ⲛⲓⲁⲗⲟⲩ', 'ⲛ̀ⲑⲱⲟⲩ ϩⲁⲛⲁⲗⲟⲩ ⲛⲉ', 'ⲁⲛⲟⲛ ⲛⲉ ⲛⲓⲁⲗⲟⲩ', 'ⲛ̀ⲑⲱⲧⲉⲛ ⲛⲉ ⲛⲓⲁⲗⲟⲩ'],
      explanation: 'ⲛ̀ⲑⲱⲟⲩ ⲛⲉ ⲛⲓⲁⲗⲟⲩ = They are the children (definite article)'
    },
    {
      id: 'test-6-23',
      type: 'translation',
      question: 'Translate: ⲁⲛⲟⲕ ⲡⲉ ⲡⲓⲥⲁϩ',
      questionCoptic: 'ⲁⲛⲟⲕ ⲡⲉ ⲡⲓⲥⲁϩ',
      correctAnswer: 'I am the teacher',
      options: ['I am the teacher', 'You are the teacher', 'I am a teacher', 'He is the teacher'],
      explanation: 'ⲁⲛⲟⲕ ⲡⲉ ⲡⲓⲥⲁϩ = I am the teacher'
    },

    // Lesson 6-4: Pronoun Forms in Different Contexts - exercises 24-30
    {
      id: 'test-6-24',
      type: 'multiple_choice',
      question: 'What is the emphatic form "we ourselves"?',
      correctAnswer: 'ⲁⲛⲟⲛ ϩⲱⲛ',
      options: ['ⲁⲛⲟⲛ ϩⲱⲛ', 'ⲁⲛⲟⲛ ⲙ̀ⲙⲓⲛ ⲙ̀ⲙⲱⲛ', 'ⲁⲛⲟⲛ ⲛⲉ', 'ⲁⲛⲟⲛ ϩⲱ'],
      explanation: 'ⲁⲛⲟⲛ ϩⲱⲛ = we ourselves (emphatic particle ϩⲱ- + suffix)'
    },
    {
      id: 'test-6-25',
      type: 'translation',
      question: 'Translate: ⲛⲉⲙⲁϥ',
      questionCoptic: 'ⲛⲉⲙⲁϥ',
      correctAnswer: 'with him',
      options: ['with him', 'to him', 'from him', 'about him'],
      explanation: 'ⲛⲉⲙⲁϥ = with him (ⲛⲉⲙ- = with + suffix -ⲁϥ = him)'
    },
    {
      id: 'test-6-26',
      type: 'matching',
      question: 'Match prepositional forms',
      correctAnswer: 'matched',
      pairs: [
        { coptic: 'ⲉ̀ⲣⲟⲓ', english: 'to me' },
        { coptic: 'ⲛⲉⲙⲁⲕ', english: 'with you (m)' },
        { coptic: 'ϩⲁⲣⲟⲥ', english: 'with her' },
        { coptic: 'ⲛⲉⲙⲱⲛ', english: 'with us' }
      ]
    },
    {
      id: 'test-6-27',
      type: 'fill_blank',
      question: 'Complete: ⲛ̀ⲑⲟϥ ___ ⲫⲏⲉⲧⲉ̀ⲙⲓ = He himself who knows',
      correctAnswer: 'ϩⲱϥ',
      options: ['ϩⲱϥ', 'ⲡⲉ', 'ⲙ̀ⲙⲓⲛ ⲙ̀ⲙⲟϥ', 'ⲛⲉ'],
      explanation: 'ϩⲱϥ is the emphatic particle meaning "himself"'
    },
    {
      id: 'test-6-28',
      type: 'sentence_building',
      question: 'Build: "with us" (ⲛⲉⲙ = with)',
      correctAnswer: 'ⲛⲉⲙⲱⲛ',
      wordBank: ['ⲛⲉⲙ', 'ⲱⲛ', 'ⲁⲛⲟⲛ', 'ⲉⲣⲟⲛ'],
      explanation: 'ⲛⲉⲙⲱⲛ = with us (ⲛⲉⲙ- + suffix -ⲱⲛ)'
    },
    {
      id: 'test-6-29',
      type: 'translation',
      question: 'Translate: ϧⲉⲛ ⲛⲏⲧⲛ',
      questionCoptic: 'ϧⲉⲛ ⲛⲏⲧⲛ',
      correctAnswer: 'in you (pl)',
      options: ['in you (pl)', 'with you (pl)', 'to you (pl)', 'from you (pl)'],
      explanation: 'ϧⲉⲛ ⲛⲏⲧⲛ = in you (plural) - preposition + suffix'
    },
    {
      id: 'test-6-30',
      type: 'multiple_choice',
      question: 'What does ⲁⲛⲟⲕ ⲙ̀ⲙⲓⲛ ⲙ̀ⲙⲟⲓ mean?',
      questionCoptic: 'ⲁⲛⲟⲕ ⲙ̀ⲙⲓⲛ ⲙ̀ⲙⲟⲓ',
      correctAnswer: 'I myself / I by myself',
      options: ['I myself / I by myself', 'I am me', 'I and myself', 'I am alone'],
      explanation: 'ⲁⲛⲟⲕ ⲙ̀ⲙⲓⲛ ⲙ̀ⲙⲟⲓ = I by myself (emphatic construction)'
    }
  ]
};

export default unit6Test;
