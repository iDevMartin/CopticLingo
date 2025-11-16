import { Lesson } from '../../types';

// UNIT 31 TEST: NUMBERS EXTENDED (11-100 & ORDINALS)
// Comprehensive test covering all 4 lessons in Unit 31
// Tests counting, teen numbers, tens, compound numbers, and ordinals

const unit31Test: Lesson = {
  id: 'test-31',
  unitId: 'unit-31',
  title: 'Unit 31 Test: Numbers 11-100 & Ordinals',
  description: 'Comprehensive test of extended numbers and ordinal numbers',
  order: 5,
  xpReward: 100,
  isLocked: true,
  completed: false,
  exercises: [
    {
      id: 'test-31-1',
      type: 'matching',
      question: 'Match numbers 11-14',
      correctAnswer: 'matched',
      pairs: [
        { coptic: 'ⲙⲏⲧⲟⲩⲁⲓ', english: '11' },
        { coptic: 'ⲙⲏⲧⲥⲛⲁⲩ', english: '12' },
        { coptic: 'ⲙⲏⲧϣⲟⲙⲧ', english: '13' },
        { coptic: 'ⲙⲏⲧϥⲧⲟⲟⲩ', english: '14' }
      ]
    },
    {
      id: 'test-31-2',
      type: 'translation',
      question: 'Translate: ⲙⲏⲧϯⲟⲩ',
      questionCoptic: 'ⲙⲏⲧϯⲟⲩ',
      correctAnswer: '15',
      options: ['15', '14', '16', '5'],
      explanation: 'ⲙⲏⲧϯⲟⲩ = 15 (ⲙⲏⲧ = 10 + ϯⲟⲩ = 5)'
    },
    {
      id: 'test-31-3',
      type: 'fill_blank',
      question: 'Complete: ___ = 16',
      correctAnswer: 'ⲙⲏⲧⲥⲟⲟⲩ',
      options: ['ⲙⲏⲧⲥⲟⲟⲩ', 'ⲙⲏⲧϯⲟⲩ', 'ⲥⲟⲟⲩⲙⲏⲧ', 'ⲥⲟⲟⲩ'],
      explanation: 'ⲙⲏⲧⲥⲟⲟⲩ = 16'
    },
    {
      id: 'test-31-4',
      type: 'matching',
      question: 'Match numbers 17-20',
      correctAnswer: 'matched',
      pairs: [
        { coptic: 'ⲙⲏⲧϣⲁϣϥ', english: '17' },
        { coptic: 'ⲙⲏⲧϣⲙⲏⲛ', english: '18' },
        { coptic: 'ⲙⲏⲧⲯⲓⲧ', english: '19' },
        { coptic: 'ϫⲟⲩⲧ', english: '20' }
      ]
    },
    {
      id: 'test-31-5',
      type: 'translation',
      question: 'Translate: ⲙⲏⲧϣⲁϣϥ ⲛ̀ⲣⲱⲙⲓ',
      questionCoptic: 'ⲙⲏⲧϣⲁϣϥ ⲛ̀ⲣⲱⲙⲓ',
      correctAnswer: '17 men',
      options: ['17 men', '7 men', '18 men', '10 men'],
      explanation: '17 + men (ⲛ̀ connects number to noun)'
    },
    {
      id: 'test-31-6',
      type: 'matching',
      question: 'Match the tens',
      correctAnswer: 'matched',
      pairs: [
        { coptic: 'ϫⲟⲩⲧ', english: '20' },
        { coptic: 'ⲙⲁⲃ', english: '30' },
        { coptic: 'ϩⲙⲉ', english: '40' },
        { coptic: 'ⲧⲉⲃⲓ', english: '50' }
      ]
    },
    {
      id: 'test-31-7',
      type: 'matching',
      question: 'Match more tens',
      correctAnswer: 'matched',
      pairs: [
        { coptic: 'ⲥⲉ', english: '60' },
        { coptic: 'ϣϥⲉ', english: '70' },
        { coptic: 'ϣⲙⲏⲛⲉ', english: '80' },
        { coptic: 'ⲡⲥⲧⲁⲓⲟⲩ', english: '90' }
      ]
    },
    {
      id: 'test-31-8',
      type: 'multiple_choice',
      question: 'What is "100" in Coptic?',
      correctAnswer: 'ϣⲉ',
      options: ['ϣⲉ', 'ⲥⲉ', 'ϩⲙⲉ', 'ⲙⲏⲧ'],
      explanation: 'ϣⲉ = 100'
    },
    {
      id: 'test-31-9',
      type: 'translation',
      question: 'Translate: ϩⲙⲉ ⲛ̀ⲣⲱⲙⲓ',
      questionCoptic: 'ϩⲙⲉ ⲛ̀ⲣⲱⲙⲓ',
      correctAnswer: '40 men',
      options: ['40 men', '4 men', '14 men', '50 men'],
      explanation: '40 + men'
    },
    {
      id: 'test-31-10',
      type: 'fill_blank',
      question: 'Complete: ___ ⲛ̀ϣⲏⲣⲓ = 70 sons',
      correctAnswer: 'ϣϥⲉ',
      options: ['ϣϥⲉ', 'ⲥⲉ', 'ϣⲙⲏⲛⲉ', 'ϣⲁϣϥ'],
      explanation: 'ϣϥⲉ = 70'
    },
    {
      id: 'test-31-11',
      type: 'multiple_choice',
      question: 'How do you say "21"?',
      correctAnswer: 'ϫⲟⲩⲧⲟⲩⲁⲓ',
      options: ['ϫⲟⲩⲧⲟⲩⲁⲓ', 'ⲙⲁⲃⲟⲩⲁⲓ', 'ϫⲟⲩⲧ ⲛⲉⲙ ⲟⲩⲁⲓ', 'ϫⲟⲩⲧⲙⲏⲧ'],
      explanation: 'ϫⲟⲩⲧⲟⲩⲁⲓ = 21'
    },
    {
      id: 'test-31-12',
      type: 'translation',
      question: 'Translate: ⲙⲁⲃϣⲟⲙⲧ',
      questionCoptic: 'ⲙⲁⲃϣⲟⲙⲧ',
      correctAnswer: '33',
      options: ['33', '13', '23', '43'],
      explanation: 'ⲙⲁⲃϣⲟⲙⲧ = 33 (ⲙⲁⲃ = 30 + ϣⲟⲙⲧ = 3)'
    },
    {
      id: 'test-31-13',
      type: 'sentence_building',
      question: 'Build: "45"',
      correctAnswer: 'ϩⲙⲉϯⲟⲩ',
      wordBank: ['ϩⲙⲉ', 'ϯⲟⲩ', 'ⲧⲉⲃⲓ', 'ϥⲧⲟⲟⲩ'],
      explanation: 'ϩⲙⲉϯⲟⲩ = 45'
    },
    {
      id: 'test-31-14',
      type: 'fill_blank',
      question: 'Complete: ___ = 67',
      correctAnswer: 'ⲥⲉϣⲁϣϥ',
      options: ['ⲥⲉϣⲁϣϥ', 'ϣϥⲉⲥⲟⲟⲩ', 'ϩⲙⲉϣⲁϣϥ', 'ϣϥⲉϣⲁϣϥ'],
      explanation: 'ⲥⲉϣⲁϣϥ = 67'
    },
    {
      id: 'test-31-15',
      type: 'translation',
      question: 'Translate: ϣⲙⲏⲛⲉϣⲙⲏⲛ ⲛ̀ⲣⲱⲙⲓ',
      questionCoptic: 'ϣⲙⲏⲛⲉϣⲙⲏⲛ ⲛ̀ⲣⲱⲙⲓ',
      correctAnswer: '88 men',
      options: ['88 men', '80 men', '18 men', '8 men'],
      explanation: 'ϣⲙⲏⲛⲉϣⲙⲏⲛ = 88'
    },
    {
      id: 'test-31-16',
      type: 'multiple_choice',
      question: 'How do you say "first"?',
      correctAnswer: 'ⲡⲓϩⲟⲩⲓⲧ',
      options: ['ⲡⲓϩⲟⲩⲓⲧ', 'ⲡⲓⲙⲁϩⲥⲛⲁⲩ', 'ⲡⲓⲙⲁϩϣⲟⲙⲧ', 'ⲟⲩⲁⲓ'],
      explanation: 'ⲡⲓϩⲟⲩⲓⲧ = the first'
    },
    {
      id: 'test-31-17',
      type: 'matching',
      question: 'Match ordinal numbers',
      correctAnswer: 'matched',
      pairs: [
        { coptic: 'ⲡⲓϩⲟⲩⲓⲧ', english: 'first' },
        { coptic: 'ⲡⲓⲙⲁϩⲥⲛⲁⲩ', english: 'second' },
        { coptic: 'ⲡⲓⲙⲁϩϣⲟⲙⲧ', english: 'third' },
        { coptic: 'ⲡⲓⲙⲁϩϥⲧⲟⲟⲩ', english: 'fourth' }
      ]
    },
    {
      id: 'test-31-18',
      type: 'translation',
      question: 'Translate: ⲡⲓⲙⲁϩϯⲟⲩ ⲛ̀ⲉϩⲟⲟⲩ',
      questionCoptic: 'ⲡⲓⲙⲁϩϯⲟⲩ ⲛ̀ⲉϩⲟⲟⲩ',
      correctAnswer: 'The fifth day',
      options: ['The fifth day', 'The third day', 'Five days', 'The first day'],
      explanation: 'The (fifth) day'
    },
    {
      id: 'test-31-19',
      type: 'fill_blank',
      question: 'Complete: ___ ⲛ̀ⲣⲱⲙⲓ = the seventh man',
      correctAnswer: 'ⲡⲓⲙⲁϩϣⲁϣϥ',
      options: ['ⲡⲓⲙⲁϩϣⲁϣϥ', 'ϣⲁϣϥ', 'ⲡⲓⲙⲁϩⲥⲟⲟⲩ', 'ⲙⲁϩϣⲁϣϥ'],
      explanation: 'ⲡⲓⲙⲁϩϣⲁϣϥ = the seventh'
    },
    {
      id: 'test-31-20',
      type: 'sentence_building',
      question: 'Build: "the tenth hour"',
      correctAnswer: 'ⲡⲓⲙⲁϩⲙⲏⲧ ⲛ̀ⲁϫⲡ',
      wordBank: ['ⲡⲓⲙⲁϩⲙⲏⲧ', 'ⲛ̀', 'ⲁϫⲡ', 'ⲙⲏⲧ'],
      explanation: 'The tenth hour'
    },
    {
      id: 'test-31-21',
      type: 'multiple_choice',
      question: 'What pattern creates ordinal numbers?',
      correctAnswer: 'ⲙⲁϩ- + number',
      options: ['ⲙⲁϩ- + number', 'number + -ⲙⲁϩ', 'ⲛ̀ + number', 'number alone'],
      explanation: 'Ordinals use ⲙⲁϩ- prefix (except "first" = ⲡⲓϩⲟⲩⲓⲧ)'
    },
    {
      id: 'test-31-22',
      type: 'translation',
      question: 'Translate: ⲡⲓⲙⲁϩⲥⲉ ⲛ̀ⲡⲓⲉϩⲟⲟⲩ',
      questionCoptic: 'ⲡⲓⲙⲁϩⲥⲉ ⲛ̀ⲡⲓⲉϩⲟⲟⲩ',
      correctAnswer: 'The sixtieth day',
      options: ['The sixtieth day', 'The sixty days', 'Sixty days', 'On the sixtieth day'],
      explanation: 'Ordinal adjective modifying day'
    },
    {
      id: 'test-31-23',
      type: 'fill_blank',
      question: 'Complete: ⲡⲓⲙⲁϩ___ ⲛ̀ⲁϫⲡ = The twelfth hour',
      correctAnswer: 'ⲙⲏⲧⲥⲛⲁⲩ',
      options: ['ⲙⲏⲧⲥⲛⲁⲩ', 'ϫⲟⲩⲧ', 'ⲙⲏⲧ', 'ⲥⲛⲁⲩ'],
      explanation: 'ⲡⲓⲙⲁϩⲙⲏⲧⲥⲛⲁⲩ = the twelfth'
    },
    {
      id: 'test-31-24',
      type: 'sentence_building',
      question: 'Build: "I saw the first day"',
      correctAnswer: 'ⲁⲓⲛⲁⲩ ⲉ̀ⲣⲟϥ ⲡⲓϩⲟⲩⲓⲧ ⲛ̀ⲡⲓⲉϩⲟⲟⲩ',
      wordBank: ['ⲁⲓⲛⲁⲩ', 'ⲉ̀ⲣⲟϥ', 'ⲡⲓϩⲟⲩⲓⲧ', 'ⲡⲓⲉϩⲟⲟⲩ'],
      explanation: 'Past tense with ordinal adjective'
    },
    {
      id: 'test-31-25',
      type: 'translation',
      question: 'How do you say "It is the third time"?',
      questionCoptic: 'ϯⲧⲉ ⲛ̀ⲡⲓⲙⲁϩϣⲟⲙⲧ ⲛ̀ⲛⲁⲩ',
      correctAnswer: 'It is the third time',
      options: ['It is the third time', 'Three times it is', 'The third is time', 'This is the third'],
      explanation: 'Ordinal used with abstract noun "time"'
    }
  ]
};

export default unit31Test;
