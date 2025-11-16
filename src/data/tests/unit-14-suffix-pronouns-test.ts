import { TestUnit } from '../../types';

// TEST UNIT 14: SUFFIX PRONOUNS (OBJECT PRONOUNS)
// Comprehensive test covering all 4 lessons
// 30 exercises testing suffix pronouns with verbs, prepositions, and compound forms

const unit14Test: TestUnit = {
  id: 'test-unit-14',
  unitId: 'unit-14',
  title: 'Suffix Pronouns Test',
  description: 'Test your knowledge of object pronouns',
  order: 14,
  exercises: [
    // Lesson 14-1: Suffix Pronouns Singular - exercises 1-8
    {
      id: 'test-14-1',
      type: 'multiple_choice',
      question: 'What is the suffix pronoun for "me"?',
      correctAnswer: '-ⲓ',
      options: ['-ⲓ', '-ⲕ', '-ϥ', '-ⲛ'],
      explanation: '-ⲓ is the suffix pronoun meaning "me" (attached to verbs/prepositions)'
    },
    {
      id: 'test-14-2',
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
      id: 'test-14-3',
      type: 'translation',
      question: 'Translate: ⲁϥⲛⲁⲩ ⲉ̀ⲣⲟⲓ',
      questionCoptic: 'ⲁϥⲛⲁⲩ ⲉ̀ⲣⲟⲓ',
      correctAnswer: 'he saw me',
      options: ['he saw me', 'he saw you', 'I saw him', 'he saw her'],
      explanation: 'ⲁϥⲛⲁⲩ ⲉ̀ⲣⲟⲓ = he saw + to-me = "he saw me"'
    },
    {
      id: 'test-14-4',
      type: 'fill_blank',
      question: 'Complete: ⲁⲕⲛⲁⲩ ⲉ̀ⲣⲟ___ = you saw her',
      correctAnswer: 'ⲥ',
      options: ['ⲥ', 'ϥ', 'ⲓ', 'ⲕ'],
      explanation: '-ⲥ is the suffix pronoun for "her"'
    },
    {
      id: 'test-14-5',
      type: 'sentence_building',
      question: 'Build: "She loves him"',
      correctAnswer: 'ⲥⲙⲉⲛⲣⲉ ⲙⲙⲟϥ',
      wordBank: ['ⲥ', 'ⲙⲉⲛⲣⲉ', 'ⲙⲙⲟ', 'ϥ'],
      explanation: 'ⲥⲙⲉⲛⲣⲉ ⲙⲙⲟϥ = she loves + him (Bohairic ⲙⲉⲛⲣⲉ not ⲙⲉⲣⲓ!)'
    },
    {
      id: 'test-14-6',
      type: 'translation',
      question: 'Translate: ⲁⲓⲥⲱⲧⲙ ⲉ̀ⲣⲟⲥ',
      questionCoptic: 'ⲁⲓⲥⲱⲧⲙ ⲉ̀ⲣⲟⲥ',
      correctAnswer: 'I heard her',
      options: ['I heard her', 'I heard him', 'she heard me', 'I heard you'],
      explanation: 'ⲁⲓⲥⲱⲧⲙ ⲉ̀ⲣⲟⲥ = I heard + to-her = "I heard her"'
    },
    {
      id: 'test-14-7',
      type: 'multiple_choice',
      question: 'What does ⲁⲓⲛⲁⲩ ⲉ̀ⲣⲟⲕ mean?',
      questionCoptic: 'ⲁⲓⲛⲁⲩ ⲉ̀ⲣⲟⲕ',
      correctAnswer: 'I saw you (m)',
      options: ['I saw you (m)', 'I saw you (f)', 'you saw me', 'I saw him'],
      explanation: 'ⲁⲓⲛⲁⲩ ⲉ̀ⲣⲟⲕ = I saw + to-you(m) = "I saw you"'
    },
    {
      id: 'test-14-8',
      type: 'matching',
      question: 'Match complete phrases',
      correctAnswer: 'matched',
      pairs: [
        { coptic: 'ⲁϥⲛⲁⲩ ⲉ̀ⲣⲟⲓ', english: 'he saw me' },
        { coptic: 'ⲁⲓⲛⲁⲩ ⲉ̀ⲣⲟⲕ', english: 'I saw you (m)' },
        { coptic: 'ⲁⲥⲛⲁⲩ ⲉ̀ⲣⲟϥ', english: 'she saw him' },
        { coptic: 'ⲁⲓⲛⲁⲩ ⲉ̀ⲣⲟ', english: 'I saw you (f)' }
      ]
    },

    // Lesson 14-2: Suffix Pronouns Plural - exercises 9-15
    {
      id: 'test-14-9',
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
      id: 'test-14-10',
      type: 'translation',
      question: 'Translate: ⲁϥⲛⲁⲩ ⲉ̀ⲣⲟⲛ',
      questionCoptic: 'ⲁϥⲛⲁⲩ ⲉ̀ⲣⲟⲛ',
      correctAnswer: 'he saw us',
      options: ['he saw us', 'he saw you', 'he saw them', 'we saw him'],
      explanation: 'ⲁϥⲛⲁⲩ ⲉ̀ⲣⲟⲛ = he saw + to-us = "he saw us"'
    },
    {
      id: 'test-14-11',
      type: 'multiple_choice',
      question: 'What does ⲁⲓⲥⲱⲧⲙ ⲉ̀ⲣⲱⲧⲉⲛ mean?',
      questionCoptic: 'ⲁⲓⲥⲱⲧⲙ ⲉ̀ⲣⲱⲧⲉⲛ',
      correctAnswer: 'I heard you (plural)',
      options: ['I heard you (plural)', 'I heard them', 'I heard us', 'you heard me'],
      explanation: 'ⲁⲓⲥⲱⲧⲙ ⲉ̀ⲣⲱⲧⲉⲛ = I heard + to-you(pl) = "I heard you all"'
    },
    {
      id: 'test-14-12',
      type: 'sentence_building',
      question: 'Build: "We love them"',
      correctAnswer: 'ⲧⲉⲛⲙⲉⲛⲣⲉ ⲙⲙⲱⲟⲩ',
      wordBank: ['ⲧⲉⲛ', 'ⲙⲉⲛⲣⲉ', 'ⲙⲙⲱ', 'ⲟⲩ'],
      explanation: 'ⲧⲉⲛⲙⲉⲛⲣⲉ ⲙⲙⲱⲟⲩ = we love + them (Bohairic ⲙⲉⲛⲣⲉ not ⲙⲉⲣⲓ!)'
    },
    {
      id: 'test-14-13',
      type: 'fill_blank',
      question: 'Complete: ⲁⲛⲥⲱⲧⲙ ⲉ̀ⲣⲱ___ = we heard them',
      correctAnswer: 'ⲟⲩ',
      options: ['ⲟⲩ', 'ⲛ', 'ⲧⲉⲛ', 'ϥ'],
      explanation: '-ⲟⲩ is the suffix pronoun for "them"'
    },
    {
      id: 'test-14-14',
      type: 'translation',
      question: 'Translate: ⲁⲩⲛⲁⲩ ⲉ̀ⲣⲟⲛ',
      questionCoptic: 'ⲁⲩⲛⲁⲩ ⲉ̀ⲣⲟⲛ',
      correctAnswer: 'they saw us',
      options: ['they saw us', 'they saw you', 'we saw them', 'they saw them'],
      explanation: 'ⲁⲩⲛⲁⲩ ⲉ̀ⲣⲟⲛ = they saw + to-us = "they saw us"'
    },
    {
      id: 'test-14-15',
      type: 'multiple_choice',
      question: 'What is "God loves us" in Coptic?',
      correctAnswer: 'ⲫϯ ⲙⲉⲛⲣⲉ ⲙⲙⲟⲛ',
      options: ['ⲫϯ ⲙⲉⲛⲣⲉ ⲙⲙⲟⲛ', 'ⲫϯ ⲙⲉⲛⲣⲉ ⲙⲙⲱⲟⲩ', 'ⲫϯ ⲙⲉⲛⲣⲉ ⲙⲙⲟⲓ', 'ⲧⲉⲛⲙⲉⲛⲣⲉ ⲙⲫϯ'],
      explanation: 'ⲫϯ ⲙⲉⲛⲣⲉ ⲙⲙⲟⲛ = God loves + us (Bohairic: ⲫϯ not ⲫⲛⲟⲩϯ, ⲙⲉⲛⲣⲉ not ⲙⲉⲣⲓ!)'
    },

    // Lesson 14-3: Suffix Pronouns with Prepositions - exercises 16-23
    {
      id: 'test-14-16',
      type: 'multiple_choice',
      question: 'What does ⲉ̀ⲣⲟⲓ mean?',
      questionCoptic: 'ⲉ̀ⲣⲟⲓ',
      correctAnswer: 'to me / at me',
      options: ['to me / at me', 'from me', 'with me', 'in me'],
      explanation: 'ⲉ̀ⲣⲟ- is the preposition "to/at" + suffix pronouns'
    },
    {
      id: 'test-14-17',
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
      id: 'test-14-18',
      type: 'translation',
      question: 'Translate: ⲛⲉⲙⲏⲓ',
      questionCoptic: 'ⲛⲉⲙⲏⲓ',
      correctAnswer: 'with me',
      options: ['with me', 'to me', 'from me', 'in me'],
      explanation: 'ⲛⲉⲙ- is "with" + suffix = ⲛⲉⲙⲏⲓ "with me"'
    },
    {
      id: 'test-14-19',
      type: 'sentence_building',
      question: 'Build: "He came with us"',
      correctAnswer: 'ⲁϥⲓ̀ ⲛⲉⲙⲁⲛ',
      wordBank: ['ⲁϥ', 'ⲓ̀', 'ⲛⲉⲙⲁ', 'ⲛ'],
      explanation: 'ⲁϥⲓ̀ ⲛⲉⲙⲁⲛ = he came with-us (Bohairic ⲓ̀ not ⲉⲓ!)'
    },
    {
      id: 'test-14-20',
      type: 'multiple_choice',
      question: 'What does ⲙⲙⲟϥ mean?',
      questionCoptic: 'ⲙⲙⲟϥ',
      correctAnswer: 'of him / from him',
      options: ['of him / from him', 'to him', 'with him', 'in him'],
      explanation: 'ⲙⲙⲟ- is used with verbs meaning "of/from/about" + suffix'
    },
    {
      id: 'test-14-21',
      type: 'translation',
      question: 'Translate: ⲁϥϫⲱ ⲙⲙⲟⲥ',
      questionCoptic: 'ⲁϥϫⲱ ⲙⲙⲟⲥ',
      correctAnswer: 'he said it / he spoke of it',
      options: ['he said it / he spoke of it', 'he heard it', 'he saw it', 'he loved it'],
      explanation: 'ⲁϥϫⲱ ⲙⲙⲟⲥ = he said + of-it = "he said it"'
    },
    {
      id: 'test-14-22',
      type: 'fill_blank',
      question: 'Complete: ⲁϥⲙⲟⲩϯ ⲉ̀ⲣⲱ___ = he called to them',
      correctAnswer: 'ⲟⲩ',
      options: ['ⲟⲩ', 'ⲛ', 'ⲓ', 'ϥ'],
      explanation: 'ⲁϥⲙⲟⲩϯ ⲉ̀ⲣⲱⲟⲩ = he called to-them (Bohairic ⲙⲟⲩϯ not ⲙⲟⲩⲧⲉ!)'
    },
    {
      id: 'test-14-23',
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

    // Lesson 14-4: Compound Forms - exercises 24-30
    {
      id: 'test-14-24',
      type: 'translation',
      question: 'Translate: ⲁϥⲓ̀ ⲉ̀ⲃⲟⲗ ϩⲓⲧⲟⲧϥ',
      questionCoptic: 'ⲁϥⲓ̀ ⲉ̀ⲃⲟⲗ ϩⲓⲧⲟⲧϥ',
      correctAnswer: 'it came out through him',
      options: ['it came out through him', 'he came out through it', 'it came with him', 'he came from him'],
      explanation: 'ⲁϥⲓ̀ ⲉ̀ⲃⲟⲗ ϩⲓⲧⲟⲧϥ = it came out through-him (compound preposition ϩⲓⲧⲟⲧ- + suffix -ϥ)'
    },
    {
      id: 'test-14-25',
      type: 'multiple_choice',
      question: 'What does ϩⲓⲧⲟⲧ- mean in compound prepositions?',
      questionCoptic: 'ϩⲓⲧⲟⲧ-',
      correctAnswer: 'through / by means of',
      options: ['through / by means of', 'with', 'to', 'from'],
      explanation: 'ϩⲓⲧⲟⲧ- = through, by means of (compound preposition taking suffix pronouns - Bohairic form)'
    },
    {
      id: 'test-14-26',
      type: 'matching',
      question: 'Match compound prepositions with suffixes',
      correctAnswer: 'matched',
      pairs: [
        { coptic: 'ϩⲓⲧⲟⲧⲓ', english: 'through me' },
        { coptic: 'ϧⲁⲧⲟⲧⲕ', english: 'under you (m)' },
        { coptic: 'ⲉ̀ⲃⲟⲗ ϩⲓⲧⲟⲧϥ', english: 'out through him' },
        { coptic: 'ⲉ̀ϧⲟⲩⲛ ⲉ̀ⲣⲟⲥ', english: 'into her' }
      ]
    },
    {
      id: 'test-14-27',
      type: 'translation',
      question: 'Translate: ⲁⲩⲧⲁⲙⲟⲓ ⲉ̀ⲣⲟϥ',
      questionCoptic: 'ⲁⲩⲧⲁⲙⲟⲓ ⲉ̀ⲣⲟϥ',
      correctAnswer: 'they told me about him',
      options: ['they told me about him', 'they told him about me', 'I told them about him', 'he told me about them'],
      explanation: 'ⲁⲩⲧⲁⲙⲟⲓ ⲉ̀ⲣⲟϥ = they told-me about-him (double suffix construction: verb + -ⲓ, preposition + -ϥ)'
    },
    {
      id: 'test-14-28',
      type: 'fill_blank',
      question: 'Complete: ⲁϥⲧⲁⲙⲟ___ = he told you (m)',
      correctAnswer: 'ⲕ',
      options: ['ⲕ', 'ⲥ', 'ϥ', 'ⲛ'],
      explanation: 'ⲁϥⲧⲁⲙⲟⲕ = he told + you (verb ⲧⲁⲙⲟ- takes suffix -ⲕ directly)'
    },
    {
      id: 'test-14-29',
      type: 'translation',
      question: 'Translate: ⲁⲓⲥ̀ϧⲁⲓ ⲛⲁϥ ⲙⲙⲟϥ',
      questionCoptic: 'ⲁⲓⲥ̀ϧⲁⲓ ⲛⲁϥ ⲙⲙⲟϥ',
      correctAnswer: 'I wrote it for him',
      options: ['I wrote it for him', 'I wrote to him about it', 'He wrote it for me', 'I wrote him'],
      explanation: 'ⲁⲓⲥ̀ϧⲁⲓ = I wrote + ⲛⲁϥ = for-him + ⲙⲙⲟϥ = it (double suffix: indirect object + direct object)'
    },
    {
      id: 'test-14-30',
      type: 'matching',
      question: 'Match complex suffix constructions',
      correctAnswer: 'matched',
      pairs: [
        { coptic: 'ⲉ̀ⲃⲟⲗ ϩⲁⲣⲟⲓ', english: 'away from me' },
        { coptic: 'ⲉ̀ϧⲟⲩⲛ ⲉ̀ⲣⲱⲧⲉⲛ', english: 'into you (pl)' },
        { coptic: 'ⲥⲁⲡⲉⲥⲏⲧ ⲙⲙⲟϥ', english: 'below it / south of it' },
        { coptic: 'ⲥⲁⲃⲟⲗ ⲙⲙⲱⲟⲩ', english: 'outside them' }
      ]
    }
  ]
};

export default unit14Test;
