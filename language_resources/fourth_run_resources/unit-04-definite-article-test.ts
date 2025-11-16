import { Lesson } from '../../types';

// UNIT 4 TEST: THE DEFINITE ARTICLE
// Comprehensive test covering all 4 lessons in Unit 4
// Tests masculine, feminine, and plural definite articles and usage patterns

const unit4Test: Lesson = {
  id: 'test-4',
  unitId: 'unit-4',
  title: 'Unit 4 Test: The Definite Article',
  description: 'Comprehensive test of Coptic definite articles (Ⲡⲓ, Ϯ, Ⲛⲓ)',
  order: 5,
  xpReward: 50,
  isLocked: true,
  completed: false,
  exercises: [
    // Masculine Articles
    {
      id: 'test-4-1',
      type: 'multiple_choice',
      question: 'What is the masculine definite article?',
      correctAnswer: 'Ⲡⲓ',
      options: ['Ⲡⲓ', 'Ϯ', 'Ⲛⲓ', 'ⲟⲩ'],
      explanation: 'Ⲡⲓ (pi) is the masculine singular definite article "the"'
    },
    {
      id: 'test-4-2',
      type: 'translation',
      question: 'Translate: ⲡⲓⲣⲱⲙⲓ',
      questionCoptic: 'ⲡⲓⲣⲱⲙⲓ',
      correctAnswer: 'the man',
      options: ['the man', 'a man', 'the woman', 'man'],
      explanation: 'ⲡⲓⲣⲱⲙⲓ = Ⲡⲓ (the, masc.) + ⲣⲱⲙⲓ (man) = "the man"'
    },
    {
      id: 'test-4-3',
      type: 'matching',
      question: 'Match masculine articles',
      correctAnswer: 'matched',
      pairs: [
        { coptic: 'ⲡⲓⲣⲱⲙⲓ', english: 'the man' },
        { coptic: 'ⲡⲓϣⲏⲣⲓ', english: 'the son' },
        { coptic: 'ⲫⲓⲱⲧ', english: 'the father' },
        { coptic: 'ⲡⲓⲃⲁⲗ', english: 'the eye' }
      ]
    },
    {
      id: 'test-4-4',
      type: 'sentence_building',
      question: 'Build: "the father"',
      correctAnswer: 'ⲫⲓⲱⲧ',
      wordBank: ['ⲫ', 'ⲓⲱⲧ', 'ⲙⲁⲩ', 'ⲛⲓ'],
      explanation: 'ⲫⲓⲱⲧ = Ⲫ (the, masc. before vowel - Π→Φ) + ⲓⲱⲧ (father)'
    },
    {
      id: 'test-4-5',
      type: 'multiple_choice',
      question: 'Which form is used before voiced consonants?',
      correctAnswer: 'Ⲫ-',
      options: ['Ⲫ-', 'Ⲡⲓ-', 'Ϯ-', 'Ⲛⲓ-'],
      explanation: 'Ⲫ- (ph-) is used before voiced consonants by phonological rule'
    },
    // Feminine Articles
    {
      id: 'test-4-6',
      type: 'multiple_choice',
      question: 'What is the feminine definite article?',
      correctAnswer: 'Ϯ',
      options: ['Ⲡⲓ', 'Ϯ', 'Ⲛⲓ', 'ⲟⲩ'],
      explanation: 'Ϯ (ti) is the feminine singular definite article "the"'
    },
    {
      id: 'test-4-7',
      type: 'translation',
      question: 'Translate: ϯϩⲓⲙⲓ',
      questionCoptic: 'ϯϩⲓⲙⲓ',
      correctAnswer: 'the woman',
      options: ['the woman', 'a woman', 'woman', 'the women'],
      explanation: 'ϯϩⲓⲙⲓ = Ϯ (the, fem.) + ϩⲓⲙⲓ (woman) = "the woman"'
    },
    {
      id: 'test-4-8',
      type: 'matching',
      question: 'Match feminine articles',
      correctAnswer: 'matched',
      pairs: [
        { coptic: 'ϯϩⲓⲙⲓ', english: 'the woman' },
        { coptic: 'ϯⲙⲁⲩ', english: 'the mother' },
        { coptic: 'ϯⲧⲣⲁⲡⲉⲍⲁ', english: 'the table' },
        { coptic: 'ϯϩⲓ', english: 'the house' }
      ]
    },
    {
      id: 'test-4-9',
      type: 'fill_blank',
      question: 'Complete: ___ ϩⲓⲙⲓ = the woman',
      correctAnswer: 'ϯ',
      options: ['ϯ', 'ⲡⲓ', 'ⲛⲓ', 'ⲟⲩ'],
      explanation: 'Ϯ is the feminine definite article'
    },
    {
      id: 'test-4-10',
      type: 'multiple_choice',
      question: 'How do you say "the sister"?',
      correctAnswer: 'ϯⲥⲱⲛⲓ',
      options: ['ϯⲥⲱⲛⲓ', 'ⲡⲓⲥⲱⲛⲓ', 'ⲛⲓⲥⲱⲛⲓ', 'ⲟⲩⲥⲱⲛⲓ'],
      explanation: 'ϯⲥⲱⲛⲓ (tisōni) = "the sister"'
    },
    // Plural Articles
    {
      id: 'test-4-11',
      type: 'multiple_choice',
      question: 'What is the plural definite article?',
      correctAnswer: 'Ⲛⲓ',
      options: ['Ⲡⲓ', 'Ϯ', 'Ⲛⲓ', 'ⲟⲩ'],
      explanation: 'Ⲛⲓ (ni) is the plural definite article "the" (for both genders)'
    },
    {
      id: 'test-4-12',
      type: 'translation',
      question: 'Translate: ⲛⲓⲣⲱⲙⲓ',
      questionCoptic: 'ⲛⲓⲣⲱⲙⲓ',
      correctAnswer: 'the men',
      options: ['the men', 'the man', 'men', 'a man'],
      explanation: 'ⲛⲓⲣⲱⲙⲓ = Ⲛⲓ (the, plural) + ⲣⲱⲙⲓ (men) = "the men"'
    },
    {
      id: 'test-4-13',
      type: 'matching',
      question: 'Match plural articles',
      correctAnswer: 'matched',
      pairs: [
        { coptic: 'ⲛⲓⲣⲱⲙⲓ', english: 'the men' },
        { coptic: 'ⲛⲓϩⲓⲙⲓ', english: 'the women' },
        { coptic: 'ⲛⲓⲥⲱⲛⲓ', english: 'the sisters' },
        { coptic: 'ⲛⲓⲥⲛⲏⲟⲩ', english: 'the brothers' }
      ]
    },
    {
      id: 'test-4-14',
      type: 'fill_blank',
      question: 'Complete: ___ ⲥⲱⲛⲓ = the sisters',
      correctAnswer: 'ⲛⲓ',
      options: ['ⲛⲓ', 'ⲡⲓ', 'ϯ', 'ⲟⲩ'],
      explanation: 'Ⲛⲓ is the plural definite article'
    },
    {
      id: 'test-4-15',
      type: 'sentence_building',
      question: 'Build: "the books"',
      correctAnswer: 'ⲛⲓϫⲱⲙ',
      wordBank: ['ⲛⲓ', 'ϫⲱⲙ', 'ⲡⲓ', 'ϯ'],
      explanation: 'ⲛⲓϫⲱⲙ = Ⲛⲓ (the, plural) + ϫⲱⲙ (books)'
    },
    // Article Usage Patterns & Gender Recognition
    {
      id: 'test-4-16',
      type: 'multiple_choice',
      question: 'Which uses NO article in Coptic?',
      correctAnswer: 'Ⲫϯ (God)',
      options: ['Ⲫϯ (God)', 'ⲡⲓⲣⲱⲙⲓ (the man)', 'ϯϩⲓⲙⲓ (the woman)', 'ⲛⲓⲣⲱⲙⲓ (the men)'],
      explanation: 'Ⲫϯ (God) is a proper noun and takes NO article'
    },
    {
      id: 'test-4-17',
      type: 'matching',
      question: 'Match article usage patterns',
      correctAnswer: 'matched',
      pairs: [
        { coptic: 'Ⲫϯ', english: 'God (no article)' },
        { coptic: 'ⲡⲓⲱⲓⲕ', english: 'the bread (specific)' },
        { coptic: 'ⲟⲩⲱⲓⲕ', english: 'a bread (indefinite)' },
        { coptic: 'ⲱⲓⲕ', english: 'bread (generic)' }
      ]
    },
    {
      id: 'test-4-18',
      type: 'fill_blank',
      question: 'Complete with correct article: ___ ⲣⲱⲙⲓ (the man)',
      correctAnswer: 'ⲡⲓ',
      options: ['ⲡⲓ', 'ϯ', 'ⲛⲓ', 'ⲟⲩ'],
      explanation: 'ⲣⲱⲙⲓ is masculine, so uses Ⲡⲓ (the)'
    },
    {
      id: 'test-4-19',
      type: 'fill_blank',
      question: 'Complete with correct article: ___ ϩⲓ (the house)',
      correctAnswer: 'ϯ',
      options: ['ϯ', 'ⲡⲓ', 'ⲛⲓ', 'ⲟⲩ'],
      explanation: 'ϩⲓ is feminine, so uses Ϯ (the)'
    },
    {
      id: 'test-4-20',
      type: 'multiple_choice',
      question: 'Which article goes with ⲓⲱⲧ (father)?',
      correctAnswer: 'ⲫ',
      options: ['ⲫ', 'ϯ', 'ⲑ', 'ⲛⲓ'],
      explanation: 'ⲓⲱⲧ (father) is masculine, uses Ⲫ before vowel → ⲫⲓⲱⲧ'
    },
    // Comprehensive Mixed Practice
    {
      id: 'test-4-21',
      type: 'translation',
      question: 'Translate: ⲡⲓϫⲱⲙ',
      questionCoptic: 'ⲡⲓϫⲱⲙ',
      correctAnswer: 'the book',
      options: ['the book', 'a book', 'book', 'the books'],
      explanation: 'ⲡⲓϫⲱⲙ means "the book"'
    },
    {
      id: 'test-4-22',
      type: 'translation',
      question: 'Translate: ϯϣⲉⲣⲓ',
      questionCoptic: 'ϯϣⲉⲣⲓ',
      correctAnswer: 'the daughter',
      options: ['the daughter', 'a daughter', 'daughter', 'the daughters'],
      explanation: 'ϯϣⲉⲣⲓ (tisheri) = "the daughter"'
    },
    {
      id: 'test-4-23',
      type: 'translation',
      question: 'Translate: ⲛⲓⲃⲁⲗ',
      questionCoptic: 'ⲛⲓⲃⲁⲗ',
      correctAnswer: 'the eyes',
      options: ['the eyes', 'the eye', 'eyes', 'an eye'],
      explanation: 'ⲛⲓⲃⲁⲗ (nibal) = "the eyes"'
    },
    {
      id: 'test-4-24',
      type: 'sentence_building',
      question: 'Build: "the son"',
      correctAnswer: 'ⲡⲓϣⲏⲣⲓ',
      wordBank: ['ⲡⲓ', 'ϣⲏⲣⲓ', 'ϯ', 'ⲙⲁⲩ'],
      explanation: 'ⲡⲓϣⲏⲣⲓ = Ⲡⲓ (the, masc.) + ϣⲏⲣⲓ (son)'
    },
    {
      id: 'test-4-25',
      type: 'sentence_building',
      question: 'Build: "the mother"',
      correctAnswer: 'ϯⲙⲁⲩ',
      wordBank: ['ϯ', 'ⲙⲁⲩ', 'ⲡⲓ', 'ⲓⲱⲧ'],
      explanation: 'ϯⲙⲁⲩ = Ϯ (the, fem.) + ⲙⲁⲩ (mother)'
    },
    {
      id: 'test-4-26',
      type: 'translation',
      question: 'Translate to Coptic: "the eyes"',
      correctAnswer: 'ⲛⲓⲃⲁⲗ',
      options: ['ⲛⲓⲃⲁⲗ', 'ⲡⲓⲃⲁⲗ', 'ϯⲃⲁⲗ', 'ⲟⲩⲃⲁⲗ'],
      explanation: 'ⲛⲓⲃⲁⲗ = Ⲛⲓ (the, plural) + ⲃⲁⲗ (eyes)'
    },
    {
      id: 'test-4-27',
      type: 'translation',
      question: 'Translate to Coptic: "the hands"',
      correctAnswer: 'ⲛⲓϫⲓϫ',
      options: ['ⲛⲓϫⲓϫ', 'ⲡⲓϫⲓϫ', 'ϯϫⲓϫ', 'ⲟⲩϫⲓϫ'],
      explanation: 'ⲛⲓϫⲓϫ = Ⲛⲓ (the, plural) + ϫⲓϫ (hands)'
    },
    {
      id: 'test-4-28',
      type: 'matching',
      question: 'Match comprehensive definite articles',
      correctAnswer: 'matched',
      pairs: [
        { coptic: 'ⲡⲓ-', english: 'the (masc. sing.)' },
        { coptic: 'Ϯ-', english: 'the (fem. sing.)' },
        { coptic: 'Ⲛⲓ-', english: 'the (plural)' },
        { coptic: 'Ⲫ-', english: 'the (masc. before vowel)' }
      ]
    },
    {
      id: 'test-4-29',
      type: 'multiple_choice',
      question: 'Which is correct for "the house"?',
      correctAnswer: 'ϯϩⲓ',
      options: ['ϯϩⲓ', 'ⲡⲓϩⲓ', 'ⲫϩⲓ', 'ⲡϩⲓ'],
      explanation: 'ϯϩⲓ (tihi) = "the house" (ϩⲓ is FEMININE, so uses Ϯ- not Ⲡⲓ-!)'
    },
    {
      id: 'test-4-30',
      type: 'translation',
      question: 'Translate: ϧⲉⲛ ⲫⲣⲁⲛ ⲙ̀Ⲫⲓⲱⲧ',
      questionCoptic: 'ϧⲉⲛ ⲫⲣⲁⲛ ⲙ̀Ⲫⲓⲱⲧ',
      correctAnswer: 'in the name of the Father',
      options: ['in the name of the Father', 'in name of Father', 'the Father\'s name', 'Father\'s name'],
      explanation: 'ϧⲉⲛ ⲫⲣⲁⲛ (in the name) + ⲙ̀Ⲫⲓⲱⲧ (of the Father)'
    }
  ]
};

export default unit4Test;
