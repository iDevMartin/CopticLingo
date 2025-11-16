import { Lesson } from '../../types';

// UNIT 30 TEST: READING & COMPOSITION
// Comprehensive test covering all 4 lessons in Unit 30
// Tests reading comprehension, sentence composition, and practical conversation

const unit30Test: Lesson = {
  id: 'test-30',
  unitId: 'unit-30',
  title: 'Unit 30 Test: Reading & Composition',
  description: 'Comprehensive test of reading, writing, and conversational Coptic',
  order: 5,
  xpReward: 125,
  isLocked: true,
  completed: false,
  exercises: [
    {
      id: 'test-30-1',
      type: 'translation',
      question: 'Translate: ⲡⲁⲥⲟⲛ ⲙⲙⲉⲛⲣⲏⲧ ⲡⲁⲩⲗⲟⲥ ϣⲁϥⲉⲣⲁⲥⲡⲁⲍⲉⲥⲑⲉ ⲙ̀ⲙⲱⲧⲉⲛ',
      questionCoptic: 'ⲡⲁⲥⲟⲛ ⲙⲙⲉⲛⲣⲏⲧ ⲡⲁⲩⲗⲟⲥ ϣⲁϥⲉⲣⲁⲥⲡⲁⲍⲉⲥⲑⲉ ⲙ̀ⲙⲱⲧⲉⲛ',
      correctAnswer: 'My beloved brother Paul greets you',
      options: ['My beloved brother Paul greets you', 'Brother Paul loves you', 'Paul your beloved greets', 'My dear Paul says hello'],
      explanation: 'Letter opening - ⲁⲥⲡⲁⲍⲉⲥⲑⲉ = to greet'
    },
    {
      id: 'test-30-2',
      type: 'matching',
      question: 'Match letter vocabulary',
      correctAnswer: 'matched',
      pairs: [
        { coptic: 'ⲉⲡⲓⲥⲧⲟⲗⲏ', english: 'letter/epistle' },
        { coptic: 'ⲁⲥⲡⲁⲍⲉⲥⲑⲉ', english: 'to greet' },
        { coptic: 'ⲥⲟⲛ', english: 'brother' },
        { coptic: 'ⲥⲱⲛⲓ', english: 'sister' }
      ]
    },
    {
      id: 'test-30-3',
      type: 'translation',
      question: 'Translate: ϯⲥ̀ϧⲁⲓ ⲛⲁⲕ ϩⲓⲛⲁ ⲛⲧⲉⲕⲉⲙⲓ ⲉⲑⲃⲉ ⲡⲉⲛⲁϩⲓ',
      questionCoptic: 'ϯⲥ̀ϧⲁⲓ ⲛⲁⲕ ϩⲓⲛⲁ ⲛⲧⲉⲕⲉⲙⲓ ⲉⲑⲃⲉ ⲡⲉⲛⲁϩⲓ',
      correctAnswer: 'I write to you so that you may know about our situation',
      options: ['I write to you so that you may know about our situation', 'I tell you to know our life', 'Writing to inform you of our condition', 'I write for you to learn of us'],
      explanation: 'Letter body - purpose clause with ϩⲓⲛⲁ'
    },
    {
      id: 'test-30-4',
      type: 'fill_blank',
      question: 'Complete: ⲧⲉⲛⲟⲓ ⲛ̀ⲣⲉⲙⲣⲁϣ ___ = We are all well',
      correctAnswer: 'ⲧⲏⲣⲉⲛ',
      options: ['ⲧⲏⲣⲉⲛ', 'ⲧⲏⲣⲟⲩ', 'ⲧⲏ', 'ⲧⲏⲣⲁ'],
      explanation: 'ⲧⲏⲣⲉⲛ = all of us'
    },
    {
      id: 'test-30-5',
      type: 'sentence_building',
      question: 'Build: "Remember my sister and her children"',
      correctAnswer: 'ⲁⲣⲓⲡⲁⲙⲉⲩⲓ ⲛ̀ⲧⲁⲥⲱⲛⲓ ⲛⲉⲙ ⲛⲉⲥϣⲏⲣⲓ',
      wordBank: ['ⲁⲣⲓⲡⲁⲙⲉⲩⲓ', 'ⲛ̀ⲧⲁⲥⲱⲛⲓ', 'ⲛⲉⲙ', 'ⲛⲉⲥϣⲏⲣⲓ'],
      explanation: 'Letter closing request'
    },
    {
      id: 'test-30-6',
      type: 'translation',
      question: 'Translate: ϯⲙⲉⲛⲣⲉ ⲙ̀ⲡⲓⲱϣ',
      questionCoptic: 'ϯⲙⲉⲛⲣⲉ ⲙ̀ⲡⲓⲱϣ',
      correctAnswer: 'I love reading',
      options: ['I love reading', 'I love books', 'I read well', 'Reading is love'],
      explanation: 'ϯⲙⲉⲛⲣⲉ = I love + ⲙ̀ⲡⲓⲱϣ = the reading (verbal noun)'
    },
    {
      id: 'test-30-7',
      type: 'multiple_choice',
      question: 'What is "to write" in Coptic?',
      correctAnswer: 'ⲥ̀ϧⲁⲓ',
      options: ['ⲥ̀ϧⲁⲓ', 'ⲱϣ', 'ⲙⲁⲙϧⲟ', 'ϯⲥ̀'],
      explanation: 'ⲥ̀ϧⲁⲓ = to write (Bohairic ⲥ̀ϧⲁⲓ not ⲥϩⲁⲓ!)'
    },
    {
      id: 'test-30-8',
      type: 'sentence_building',
      question: 'Build: "My father is a teacher"',
      correctAnswer: 'ⲡⲁⲓⲱⲧ ⲟⲩⲣⲉϥⲧ̀ⲥⲁⲃⲟ ⲡⲉ',
      wordBank: ['ⲡⲁⲓⲱⲧ', 'ⲟⲩⲣⲉϥⲧ̀ⲥⲁⲃⲟ', 'ⲡⲉ', 'ⲧⲉ'],
      explanation: 'Copula with occupation'
    },
    {
      id: 'test-30-9',
      type: 'translation',
      question: 'Translate: ⲧⲉⲛⲛⲁϣⲉⲛⲓ ⲉϯⲉⲕⲕⲗⲏⲥⲓⲁ ⲣⲁⲥϯ',
      questionCoptic: 'ⲧⲉⲛⲛⲁϣⲉⲛⲓ ⲉϯⲉⲕⲕⲗⲏⲥⲓⲁ ⲣⲁⲥϯ',
      correctAnswer: 'We will go to church tomorrow',
      options: ['We will go to church tomorrow', 'We went to church yesterday', 'We are going to church', 'Tomorrow we go'],
      explanation: 'Future tense'
    },
    {
      id: 'test-30-10',
      type: 'fill_blank',
      question: 'Complete: ⲛⲓϣⲏⲣⲓ ___ ϧⲉⲛ ⲡⲓⲏⲓ = The children are playing in the house',
      correctAnswer: 'ⲥⲉⲥⲱⲃⲉ',
      options: ['ⲥⲉⲥⲱⲃⲉ', 'ⲟⲩⲱⲙ', 'ⲛⲁⲩ', 'ϣⲉⲛⲓ'],
      explanation: 'ⲥⲉⲥⲱⲃⲉ = they play (present tense)'
    },
    {
      id: 'test-30-11',
      type: 'translation',
      question: 'Translate: ⲛⲁⲥⲱϣ ⲙ̀ⲡⲓϫⲱⲙ',
      questionCoptic: 'ⲛⲁⲥⲱϣ ⲙ̀ⲡⲓϫⲱⲙ',
      correctAnswer: 'She was reading the book',
      options: ['She was reading the book', 'She read the book', 'She will read the book', 'She is reading'],
      explanation: 'Past continuous tense'
    },
    {
      id: 'test-30-12',
      type: 'sentence_building',
      question: 'Build: "Before I came, they left"',
      correctAnswer: 'ⲙⲡⲁⲧⲓⲓ̀ ⲁⲩϣⲉⲛⲱⲟⲩ',
      wordBank: ['ⲙⲡⲁⲧⲓⲓ̀', 'ⲁⲩϣⲉⲛⲱⲟⲩ', 'ⲙⲉⲛⲉⲛⲥⲁ', 'ⲉⲃⲟⲗ'],
      explanation: 'Time clause with perfective'
    },
    {
      id: 'test-30-13',
      type: 'translation',
      question: 'Translate: ⲫϯ ⲁϥⲧⲁⲙⲟⲛ ⲉⲙⲉⲛⲣⲉ ⲙ̀ⲙⲟϥ',
      questionCoptic: 'ⲫϯ ⲁϥⲧⲁⲙⲟⲛ ⲉⲙⲉⲛⲣⲉ ⲙ̀ⲙⲟϥ',
      correctAnswer: 'God made us to love him',
      options: ['God made us to love him', 'God made us love God', 'We made God our love', 'God loves us'],
      explanation: 'Purpose infinitive'
    },
    {
      id: 'test-30-14',
      type: 'fill_blank',
      question: 'Complete: ϯⲥ̀ϧⲁⲓ ϩⲓⲛⲁ ___ = I write so that you may believe',
      correctAnswer: 'ⲛⲧⲉⲕⲛⲁϩϯ',
      options: ['ⲛⲧⲉⲕⲛⲁϩϯ', 'ⲛⲧⲉⲕⲛⲁⲙⲉⲣⲓ', 'ⲛⲧⲉⲕⲛⲁⲟⲩⲱⲙ', 'ⲛⲧⲉⲕⲛⲁϣⲉⲛⲓ'],
      explanation: 'Purpose clause with subjunctive'
    },
    {
      id: 'test-30-15',
      type: 'sentence_building',
      question: 'Build: "O Lord my God"',
      correctAnswer: 'ⲱ ⲡϭⲟⲓⲥ ⲡⲁⲛⲟⲩϯ',
      wordBank: ['ⲱ', 'ⲡϭⲟⲓⲥ', 'ⲡⲁⲛⲟⲩϯ', 'ⲡⲉⲛⲓⲱⲧ'],
      explanation: 'Vocative prayer opening'
    },
    {
      id: 'test-30-16',
      type: 'translation',
      question: 'Translate: ϯϣⲉⲡϩⲙⲟⲧ ⲛⲧⲟⲧⲕ',
      questionCoptic: 'ϯϣⲉⲡϩⲙⲟⲧ ⲛⲧⲟⲧⲕ',
      correctAnswer: 'I thank you',
      options: ['I thank you', 'I give you thanks', 'I give thanks for you', 'Thank you'],
      explanation: 'Thanksgiving expression'
    },
    {
      id: 'test-30-17',
      type: 'matching',
      question: 'Match prayer components',
      correctAnswer: 'matched',
      pairs: [
        { coptic: 'ⲱ', english: 'O (vocative)' },
        { coptic: 'ϣⲉⲡϩⲙⲟⲧ', english: 'thanksgiving' },
        { coptic: 'ⲛⲁⲓ', english: 'mercy' },
        { coptic: 'ⲁⲙⲏⲛ', english: 'amen' }
      ]
    },
    {
      id: 'test-30-18',
      type: 'sentence_building',
      question: 'Build: "Hear my prayer"',
      correctAnswer: 'ⲥⲱⲧⲙ ⲉⲧⲁⲡⲣⲟⲥⲉⲩⲭⲏ',
      wordBank: ['ⲥⲱⲧⲙ', 'ⲉⲧⲁⲡⲣⲟⲥⲉⲩⲭⲏ', 'ⲙ̀ⲙⲟⲓ', 'ⲉⲣⲟⲓ'],
      explanation: 'Imperative petition'
    },
    {
      id: 'test-30-19',
      type: 'translation',
      question: 'Translate: ⲟⲩⲟϩ ⲛⲁⲓ ⲛⲏⲓ',
      questionCoptic: 'ⲟⲩⲟϩ ⲛⲁⲓ ⲛⲏⲓ',
      correctAnswer: 'And have mercy on me',
      options: ['And have mercy on me', 'And be merciful to me', 'And show me compassion', 'All of the above'],
      explanation: 'Prayer petition'
    },
    {
      id: 'test-30-20',
      type: 'fill_blank',
      question: 'Complete: ⲕⲁⲧⲁ ⲡⲉⲕⲛⲓϣϯ ___ = according to your great mercy',
      correctAnswer: 'ⲛ̀ⲛⲁⲓ',
      options: ['ⲛ̀ⲛⲁⲓ', 'ⲙ̀ⲙⲓⲗⲉⲟⲥ', 'ⲧⲓⲥ', 'ⲧⲕⲓⲣⲁ'],
      explanation: 'Descriptive phrase'
    },
    {
      id: 'test-30-21',
      type: 'sentence_building',
      question: 'Build: "Through Christ our Lord"',
      correctAnswer: 'ϩⲓⲧⲉⲛ ⲡⲓⲭⲣⲓⲥⲧⲟⲥ ⲡⲉⲛϭⲟⲓⲥ',
      wordBank: ['ϩⲓⲧⲉⲛ', 'ⲡⲓⲭⲣⲓⲥⲧⲟⲥ', 'ⲡⲉⲛϭⲟⲓⲥ', 'ⲁⲙⲏⲛ'],
      explanation: 'Prayer conclusion'
    },
    {
      id: 'test-30-22',
      type: 'translation',
      question: 'Translate: ⲡⲁⲣⲁⲛ ⲡⲉ...',
      questionCoptic: 'ⲡⲁⲣⲁⲛ ⲡⲉ...',
      correctAnswer: 'My name is...',
      options: ['My name is...', 'The name is...', 'My name', 'My named'],
      explanation: 'Self-introduction'
    },
    {
      id: 'test-30-23',
      type: 'sentence_building',
      question: 'Build: "Peace be with you"',
      correctAnswer: 'ϯϩⲓⲣⲏⲛⲏ ⲛⲉⲙⲱⲧⲉⲛ',
      wordBank: ['ϯ', 'ϩⲓⲣⲏⲛⲏ', 'ⲛⲉⲙⲱⲧⲉⲛ', 'ⲛⲉⲙⲁⲕ'],
      explanation: 'Traditional greeting'
    },
    {
      id: 'test-30-24',
      type: 'translation',
      question: 'Translate: ⲭⲛⲁϣⲧⲉ ⲉⲣⲟⲕ',
      questionCoptic: 'ⲭⲛⲁϣⲧⲉ ⲉⲣⲟⲕ',
      correctAnswer: 'How are you?',
      options: ['How are you?', 'What about you?', 'How do you do?', 'All of the above'],
      explanation: 'Greeting question'
    },
    {
      id: 'test-30-25',
      type: 'sentence_building',
      question: 'Build: "I am well, thank you"',
      correctAnswer: 'ϯⲟⲓ ⲕⲁⲗⲱⲥ ϣⲉⲡϩⲙⲟⲧ',
      wordBank: ['ϯⲟⲓ', 'ⲕⲁⲗⲱⲥ', 'ϣⲉⲡϩⲙⲟⲧ', 'ⲛⲁⲛⲉϥ'],
      explanation: 'Greeting response'
    }
  ]
};

export default unit30Test;
