import { Lesson } from '../../types';

// UNIT 33 TEST: COLORS & DESCRIPTIVE ADJECTIVES
// Comprehensive test covering all 4 lessons in Unit 33
// Tests colors, sizes, shapes, and quality adjectives

const unit33Test: Lesson = {
  id: 'test-33',
  unitId: 'unit-33',
  title: 'Unit 33 Test: Colors & Descriptions',
  description: 'Comprehensive test of colors, sizes, shapes, and quality adjectives',
  order: 5,
  xpReward: 100,
  isLocked: true,
  completed: false,
  exercises: [
    {
      id: 'test-33-1',
      type: 'multiple_choice',
      question: 'What is "white" in Coptic?',
      correctAnswer: 'ⲟⲩⲃⲁϣ',
      options: ['ⲟⲩⲃⲁϣ', 'ⲭⲁⲙⲉ', 'ⲕⲁϣⲛⲓ', 'ⲟⲩⲱϣ'],
      explanation: 'ⲟⲩⲃⲁϣ = white'
    },
    {
      id: 'test-33-2',
      type: 'matching',
      question: 'Match basic colors',
      correctAnswer: 'matched',
      pairs: [
        { coptic: 'ⲟⲩⲃⲁϣ', english: 'white' },
        { coptic: 'ⲭⲁⲙⲉ', english: 'black' },
        { coptic: 'ⲕⲁϣⲛⲓ', english: 'red' },
        { coptic: 'ⲟⲩⲱϣ', english: 'green/blue' }
      ]
    },
    {
      id: 'test-33-3',
      type: 'translation',
      question: 'Translate: ⲟⲩϩ̀ⲃⲱⲥ ⲛ̀ⲟⲩⲃⲁϣ',
      questionCoptic: 'ⲟⲩϩ̀ⲃⲱⲥ ⲛ̀ⲟⲩⲃⲁϣ',
      correctAnswer: 'A white garment',
      options: ['A white garment', 'White garments', 'The white garment', 'A bright garment'],
      explanation: 'White garment - ⲛ̀ links noun + adjective'
    },
    {
      id: 'test-33-4',
      type: 'fill_blank',
      question: 'Complete: ⲡⲓⲏⲣⲡ ___ = the red wine',
      correctAnswer: 'ⲛ̀ⲕⲁϣⲛⲓ',
      options: ['ⲛ̀ⲕⲁϣⲛⲓ', 'ⲛ̀ⲟⲩⲃⲁϣ', 'ⲛ̀ⲭⲁⲙⲉ', 'ⲕⲁϣⲛⲓ'],
      explanation: 'ⲡⲓⲏⲣⲡ ⲛ̀ⲕⲁϣⲛⲓ = the red wine'
    },
    {
      id: 'test-33-5',
      type: 'matching',
      question: 'Match more colors',
      correctAnswer: 'matched',
      pairs: [
        { coptic: 'ⲟⲩⲱⲧⲉⲃ', english: 'yellow/golden' },
        { coptic: 'ⲥⲁⲛⲧⲉⲣⲁⲕⲓⲛⲏ', english: 'purple' },
        { coptic: 'ⲭⲟⲩⲱⲧ', english: 'gray' },
        { coptic: 'ⲃⲉⲣⲥⲓ', english: 'brown' }
      ]
    },
    {
      id: 'test-33-6',
      type: 'sentence_building',
      question: 'Build: "The black book"',
      correctAnswer: 'ⲡⲓϫⲱⲙ ⲛ̀ⲭⲁⲙⲉ',
      wordBank: ['ⲡⲓϫⲱⲙ', 'ⲛ̀', 'ⲭⲁⲙⲉ', 'ⲟⲩⲃⲁϣ'],
      explanation: 'The black book'
    },
    {
      id: 'test-33-7',
      type: 'multiple_choice',
      question: 'What is "beautiful" in Coptic?',
      correctAnswer: 'ⲛⲉⲥⲱⲥ',
      options: ['ⲛⲉⲥⲱⲥ', 'ⲛⲁⲛⲉϥ', 'ⲛⲓϣϯ', 'ⲟⲩⲱⲓⲛⲓ'],
      explanation: 'ⲛⲉⲥⲱⲥ = beautiful'
    },
    {
      id: 'test-33-8',
      type: 'translation',
      question: 'Translate: ϯϩⲓⲙⲓ ⲛ̀ⲟⲩⲱⲧⲉⲃ',
      questionCoptic: 'ϯϩⲓⲙⲓ ⲛ̀ⲟⲩⲱⲧⲉⲃ',
      correctAnswer: 'The golden woman',
      options: ['The golden woman', 'A golden woman', 'The white woman', 'The beautiful woman'],
      explanation: 'The golden/yellow woman'
    },
    {
      id: 'test-33-9',
      type: 'matching',
      question: 'Match size adjectives',
      correctAnswer: 'matched',
      pairs: [
        { coptic: 'ⲛⲓϣϯ', english: 'big/great' },
        { coptic: 'ⲕⲟⲩϫⲓ', english: 'small' },
        { coptic: 'ϣⲁϣ', english: 'long/tall' },
        { coptic: 'ⲕⲁϩⲓ', english: 'short' }
      ]
    },
    {
      id: 'test-33-10',
      type: 'translation',
      question: 'Translate: ⲟⲩⲛⲓϣϯ ⲛ̀ϩⲓ',
      questionCoptic: 'ⲟⲩⲛⲓϣϯ ⲛ̀ϩⲓ',
      correctAnswer: 'A big house',
      options: ['A big house', 'The big house', 'Big houses', 'A great house'],
      explanation: 'A big/great house'
    },
    {
      id: 'test-33-11',
      type: 'fill_blank',
      question: 'Complete: ⲟⲩ___ ⲛ̀ⲁ̀ⲗⲟⲩ = a small boy',
      correctAnswer: 'ⲕⲟⲩϫⲓ',
      options: ['ⲕⲟⲩϫⲓ', 'ⲛⲓϣϯ', 'ⲕⲁϩⲓ', 'ϣⲁϣ'],
      explanation: 'A small boy'
    },
    {
      id: 'test-33-12',
      type: 'matching',
      question: 'Match shape adjectives',
      correctAnswer: 'matched',
      pairs: [
        { coptic: 'ⲥⲟⲗⲥⲉⲗ', english: 'round/circular' },
        { coptic: 'ⲟⲩⲱϣ', english: 'wide/broad' },
        { coptic: 'ϭⲓⲃⲓ', english: 'narrow' },
        { coptic: 'ⲥⲟⲩⲧⲱⲛ', english: 'straight' }
      ]
    },
    {
      id: 'test-33-13',
      type: 'sentence_building',
      question: 'Build: "A long road"',
      correctAnswer: 'ⲟⲩϣⲁϣ ⲙ̀ⲙⲱⲓⲧ',
      wordBank: ['ⲟⲩϣⲁϣ', 'ⲙ̀', 'ⲙⲱⲓⲧ', 'ⲕⲁϩⲓ'],
      explanation: 'A long road'
    },
    {
      id: 'test-33-14',
      type: 'translation',
      question: 'Translate: ⲡⲓⲣⲱⲙⲓ ⲙ̀ϣⲁϣ',
      questionCoptic: 'ⲡⲓⲣⲱⲙⲓ ⲙ̀ϣⲁϣ',
      correctAnswer: 'The tall man',
      options: ['The tall man', 'The long man', 'A tall man', 'The short man'],
      explanation: 'The tall man (ϣⲁϣ = long/tall)'
    },
    {
      id: 'test-33-15',
      type: 'multiple_choice',
      question: 'What is the opposite of ⲛⲓϣϯ (big)?',
      correctAnswer: 'ⲕⲟⲩϫⲓ',
      options: ['ⲕⲟⲩϫⲓ', 'ϣⲁϣ', 'ⲕⲁϩⲓ', 'ⲟⲩⲱϣ'],
      explanation: 'ⲕⲟⲩϫⲓ = small, opposite of big'
    },
    {
      id: 'test-33-16',
      type: 'fill_blank',
      question: 'Complete: ⲟⲩⲕⲁϩⲓ ⲛ̀___ = a short table',
      correctAnswer: 'ⲧⲣⲁⲡⲉⲍⲁ',
      options: ['ⲧⲣⲁⲡⲉⲍⲁ', 'ϩⲓ', 'ⲙⲱⲓⲧ', 'ⲙⲟⲩϯ'],
      explanation: 'A short table'
    },
    {
      id: 'test-33-17',
      type: 'matching',
      question: 'Match quality adjectives',
      correctAnswer: 'matched',
      pairs: [
        { coptic: 'ⲛⲁⲛⲉϥ', english: 'good' },
        { coptic: 'ϩⲱⲟⲩ', english: 'bad/evil' },
        { coptic: 'ⲛⲉⲥⲱⲥ', english: 'beautiful' },
        { coptic: 'ⲁⲥⲑⲉⲛⲏⲥ', english: 'weak/sick' }
      ]
    },
    {
      id: 'test-33-18',
      type: 'sentence_building',
      question: 'Build: "A wise woman"',
      correctAnswer: 'ⲟⲩϩⲓⲙⲓ ⲛ̀ⲥⲁⲃⲉ',
      wordBank: ['ⲟⲩ', 'ϩⲓⲙⲓ', 'ⲛ̀ⲥⲁⲃⲉ', 'ⲛ̀ⲥⲁⲃⲏ'],
      explanation: 'A wise woman'
    },
    {
      id: 'test-33-19',
      type: 'translation',
      question: 'Translate: ⲟⲩⲣⲱⲙⲓ ⲛ̀ⲣⲉⲙϩⲏⲧ',
      questionCoptic: 'ⲟⲩⲣⲱⲙⲓ ⲛ̀ⲣⲉⲙϩⲏⲧ',
      correctAnswer: 'A humble person',
      options: ['A humble person', 'A proud person', 'A gentle person', 'A wise person'],
      explanation: 'A humble person (literally gentle of heart)'
    },
    {
      id: 'test-33-20',
      type: 'fill_blank',
      question: 'Complete: ⲡⲓϫⲱⲣⲓ ⲛ̀___ = the strong immortal',
      correctAnswer: 'ⲁⲑⲙⲟⲩ',
      options: ['ⲁⲑⲙⲟⲩ', 'ⲛⲓϣϯ', 'ⲛⲁⲛⲉϥ', 'ⲥⲁⲃⲉ'],
      explanation: 'The mighty immortal one'
    },
    {
      id: 'test-33-21',
      type: 'translation',
      question: 'Translate: ⲟⲩϣⲏⲣⲓ ⲛ̀ⲑⲙⲏⲓ',
      questionCoptic: 'ⲟⲩϣⲏⲣⲓ ⲛ̀ⲑⲙⲏⲓ',
      correctAnswer: 'A righteous son',
      options: ['A righteous son', 'A good son', 'A just son', 'A wise son'],
      explanation: 'A righteous son (ⲛ̀ⲑⲙⲏⲓ = righteous)'
    },
    {
      id: 'test-33-22',
      type: 'sentence_building',
      question: 'Build: "Beautiful and good"',
      correctAnswer: 'ⲛⲉⲥⲱⲥ ⲛⲉⲙ ⲛⲁⲛⲉϥ',
      wordBank: ['ⲛⲉⲥⲱⲥ', 'ⲛⲉⲙ', 'ⲛⲁⲛⲉϥ', 'ⲙⲛ'],
      explanation: 'Beautiful and good'
    },
    {
      id: 'test-33-23',
      type: 'translation',
      question: 'Translate: ⲟⲩϩ̀ⲃⲱⲥ ⲡⲟⲣϫⲏⲛⲏ',
      questionCoptic: 'ⲟⲩϩ̀ⲃⲱⲥ ⲡⲟⲣϫⲏⲛⲏ',
      correctAnswer: 'A purple garment',
      options: ['A purple garment', 'A royal garment', 'A sacred robe', 'A fine robe'],
      explanation: 'Purple garment (sander = purple/royal color)'
    },
    {
      id: 'test-33-24',
      type: 'fill_blank',
      question: 'Complete: ϫⲟⲩⲓⲧ ⲛⲓϣϯ ⲛ̀___ = the great ten',
      correctAnswer: 'ϩⲙⲉ',
      options: ['ϩⲙⲉ', 'ⲡⲥⲧⲁⲓⲟⲩ', 'ⲙⲏⲧ', 'ⲧⲉⲃⲓ'],
      explanation: 'The great ten (100)'
    },
    {
      id: 'test-33-25',
      type: 'translation',
      question: 'Translate: ⲡⲓⲏⲓ ⲛ̀ⲟⲩⲱϣ',
      questionCoptic: 'ⲡⲓⲏⲓ ⲛ̀ⲟⲩⲱϣ',
      correctAnswer: 'The green/wide house',
      options: ['The green/wide house', 'The broad house', 'A wide dwelling', 'The spacious home'],
      explanation: 'Wide house (ⲟⲩⲱϣ can mean both green and wide)'
    }
  ]
};

export default unit33Test;
