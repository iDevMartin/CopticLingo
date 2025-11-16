import { Lesson } from '../../types';

// UNIT 26 TEST: EXTENDED VOCABULARY
// Comprehensive test covering all 5 lessons in Unit 26
// Tests knowledge of nature, body parts, emotions, adjectives, and action verbs

const unit26Test: Lesson = {
  id: 'test-26',
  unitId: 'unit-26',
  title: 'Unit 26 Test: Extended Vocabulary',
  description: 'Comprehensive test of nature, body, emotions, adjectives, and verbs',
  order: 6,
  xpReward: 100,
  isLocked: true,
  completed: false,
  exercises: [
    // Nature & Weather vocabulary
    {
      id: 'test-26-1',
      type: 'matching',
      question: 'Match nature vocabulary',
      correctAnswer: 'matched',
      pairs: [
        { coptic: 'ⲡⲓⲓⲁⲣⲟ', english: 'river' },
        { coptic: 'ⲫⲓⲟⲙ', english: 'sea' },
        { coptic: 'ⲧⲱⲟⲩ', english: 'mountain' },
        { coptic: 'ϣⲏⲛ', english: 'tree' }
      ]
    },
    {
      id: 'test-26-2',
      type: 'translation',
      question: 'Translate: ⲫⲣⲏ ϣⲁϥϣⲁⲓ',
      questionCoptic: 'ⲫⲣⲏ ϣⲁϥϣⲁⲓ',
      correctAnswer: 'The sun shines',
      options: ['The sun shines', 'The sun rises', 'The sun sets', 'Sunshine'],
      explanation: 'ⲫⲣⲏ = the sun + ϣⲁϥϣⲁⲓ = it shines'
    },
    {
      id: 'test-26-3',
      type: 'fill_blank',
      question: 'Complete: ⲡⲓ___ ϩⲉⲛⲟⲩⲱⲓⲛⲓ ⲛⲉ = The stars are lights',
      correctAnswer: 'ⲥⲓⲟⲩ',
      options: ['ⲥⲓⲟⲩ', 'ⲣⲏ', 'ⲓⲟϩ', 'ⲟⲩⲱⲓⲛⲓ'],
      explanation: 'ⲡⲓⲥⲓⲟⲩ = the stars (plural)'
    },
    {
      id: 'test-26-4',
      type: 'multiple_choice',
      question: 'What is "wind" in Coptic?',
      correctAnswer: 'ⲡⲓⲑⲏⲟⲩ',
      options: ['ⲡⲓⲑⲏⲟⲩ', 'ⲡⲓⲁⲏⲣ', 'ⲡⲓⲡ̀ⲛⲉⲩⲙⲁ', 'ⲡⲓⲭⲱⲙ'],
      explanation: 'ⲡⲓⲑⲏⲟⲩ (pi-thēou) = the wind'
    },
    // Body Parts
    {
      id: 'test-26-5',
      type: 'translation',
      question: 'Translate: ⲧⲁⲁⲫⲉ',
      questionCoptic: 'ⲧⲁⲁⲫⲉ',
      correctAnswer: 'My head',
      options: ['My head', 'The head', 'Head', 'My mind'],
      explanation: 'ⲧⲁⲁⲫⲉ = my head'
    },
    {
      id: 'test-26-6',
      type: 'matching',
      question: 'Match body parts',
      correctAnswer: 'matched',
      pairs: [
        { coptic: 'ⲁⲫⲉ', english: 'head' },
        { coptic: 'ⲃⲁⲗ', english: 'eye' },
        { coptic: 'ⲙⲁⲁϫⲓ', english: 'ear' },
        { coptic: 'ⲣⲱϥ', english: 'mouth' }
      ]
    },
    {
      id: 'test-26-7',
      type: 'multiple_choice',
      question: 'What is "hand" in Coptic?',
      correctAnswer: 'ϫⲓϫ',
      options: ['ϫⲓϫ', 'ϭⲓϫ', 'ⲧⲟⲧⲥ', 'ⲙⲏⲣ'],
      explanation: 'ϫⲓϫ (jij) = hand or arm'
    },
    {
      id: 'test-26-8',
      type: 'fill_blank',
      question: 'Complete: ⲡⲓ___ ⲛ̀ⲧⲉⲡⲓⲣⲱⲙⲓ = The heart of the person',
      correctAnswer: 'ϩⲏⲧ',
      options: ['ϩⲏⲧ', 'ⲁⲫⲉ', 'ⲃⲁⲗ', 'ⲣⲱϥ'],
      explanation: 'ⲡⲓϩⲏⲧ = the heart'
    },
    // Emotions & States
    {
      id: 'test-26-9',
      type: 'translation',
      question: 'Translate: ϯⲭⲣⲱⲙ',
      questionCoptic: 'ϯⲭⲣⲱⲙ',
      correctAnswer: 'I am angry',
      options: ['I am angry', 'I hate', 'I am sad', 'I am jealous'],
      explanation: 'ϯⲭⲣⲱⲙ = I am angry'
    },
    {
      id: 'test-26-10',
      type: 'matching',
      question: 'Match emotions',
      correctAnswer: 'matched',
      pairs: [
        { coptic: 'ⲣⲁϣⲓ', english: 'to rejoice/be happy' },
        { coptic: 'ⲣⲓⲙⲓ', english: 'to weep/cry' },
        { coptic: 'ⲟⲓ ⲛ̀ϩⲟϯ', english: 'to be afraid' },
        { coptic: 'ⲭⲣⲱⲙ', english: 'to be angry' }
      ]
    },
    {
      id: 'test-26-11',
      type: 'multiple_choice',
      question: 'What is "to be sad" in Coptic?',
      correctAnswer: 'ⲙ̀ⲕⲁϩⲛ̀ϩⲏⲧ',
      options: ['ⲙ̀ⲕⲁϩⲛ̀ϩⲏⲧ', 'ⲭⲣⲱⲙ', 'ⲣⲁϣⲓ', 'ϣⲫⲏⲣⲓ'],
      explanation: 'ⲙ̀ⲕⲁϩⲛ̀ϩⲏⲧ = sad (literally "pained of heart")'
    },
    {
      id: 'test-26-12',
      type: 'translation',
      question: 'Translate: ϯⲟⲓ ⲛ̀ϩⲟϯ',
      questionCoptic: 'ϯⲟⲓ ⲛ̀ϩⲟϯ',
      correctAnswer: 'I am afraid',
      options: ['I am afraid', 'I fear', 'I am frightened', 'All of the above'],
      explanation: 'ϯⲟⲓ ⲛ̀ϩⲟϯ = I am afraid'
    },
    // Descriptive Adjectives
    {
      id: 'test-26-13',
      type: 'translation',
      question: 'Translate: ⲟⲩⲛⲓϣϯ',
      questionCoptic: 'ⲟⲩⲛⲓϣϯ',
      correctAnswer: 'Great/large',
      options: ['Great/large', 'Small', 'Good', 'Beautiful'],
      explanation: 'ⲟⲩⲛⲓϣϯ = great, large'
    },
    {
      id: 'test-26-14',
      type: 'matching',
      question: 'Match adjectives',
      correctAnswer: 'matched',
      pairs: [
        { coptic: 'ⲛⲓϣϯ', english: 'great/big' },
        { coptic: 'ⲕⲟⲩϫⲓ', english: 'small' },
        { coptic: 'ⲛⲁⲛⲉϥ', english: 'good' },
        { coptic: 'ϩⲱⲟⲩ', english: 'bad/evil' }
      ]
    },
    {
      id: 'test-26-15',
      type: 'multiple_choice',
      question: 'What is "beautiful" in Coptic?',
      correctAnswer: 'ⲛⲉⲥⲱⲥ',
      options: ['ⲛⲉⲥⲱⲥ', 'ⲛⲁⲛⲉϥ', 'ⲛⲓϣϯ', 'ⲟⲩⲱⲓⲛⲓ'],
      explanation: 'ⲛⲉⲥⲱⲥ = beautiful'
    },
    {
      id: 'test-26-16',
      type: 'fill_blank',
      question: 'Complete: ⲟⲩϣⲏⲣⲓ ___ = A righteous son',
      correctAnswer: 'ⲛ̀ⲑⲙⲏⲓ',
      options: ['ⲛ̀ⲑⲙⲏⲓ', 'ⲛ̀ϩⲱⲟⲩ', 'ⲛ̀ⲛⲓϣϯ', 'ⲛ̀ⲕⲟⲩϫⲓ'],
      explanation: 'ⲛ̀ⲑⲙⲏⲓ = righteous'
    },
    // Action Verbs
    {
      id: 'test-26-17',
      type: 'translation',
      question: 'Translate: ϯϥⲁⲓ',
      questionCoptic: 'ϯϥⲁⲓ',
      correctAnswer: 'I carry/bear',
      options: ['I carry/bear', 'I give', 'I take', 'I bring'],
      explanation: 'ϯϥⲁⲓ = I carry'
    },
    {
      id: 'test-26-18',
      type: 'matching',
      question: 'Match action verbs',
      correctAnswer: 'matched',
      pairs: [
        { coptic: 'ϥⲁⲓ', english: 'to carry' },
        { coptic: 'ϩⲓⲟⲩⲓ̀', english: 'to throw/cast' },
        { coptic: 'ⲁⲟⲩⲱⲛ', english: 'to open' },
        { coptic: 'ⲙⲁϣⲑⲁⲙ', english: 'to close/shut' }
      ]
    },
    {
      id: 'test-26-19',
      type: 'multiple_choice',
      question: 'What is "to open" in Coptic?',
      correctAnswer: 'ⲁⲟⲩⲱⲛ',
      options: ['ⲁⲟⲩⲱⲛ', 'ⲙⲁϣⲑⲁⲙ', 'ϥⲁⲓ', 'ϩⲓⲟⲩⲓ̀'],
      explanation: 'ⲁⲟⲩⲱⲛ = to open'
    },
    {
      id: 'test-26-20',
      type: 'fill_blank',
      question: 'Complete: ⲁϥ___ ⲛ̀ⲟⲩⲏⲓ = He built a house',
      correctAnswer: 'ⲕⲱⲧ',
      options: ['ⲕⲱⲧ', 'ⲑⲁⲙⲓⲟ', 'ϥⲁⲓ', 'ϩⲓⲟⲩⲓ̀'],
      explanation: 'ⲕⲱⲧ = to build'
    },
    {
      id: 'test-26-21',
      type: 'translation',
      question: 'Translate: ⲁⲩϩⲓⲟⲩⲓ̀ ⲙ̀ⲙⲟϥ ⲉⲃⲟⲗ',
      questionCoptic: 'ⲁⲩϩⲓⲟⲩⲓ̀ ⲙ̀ⲙⲟϥ ⲉⲃⲟⲗ',
      correctAnswer: 'They cast him out',
      options: ['They cast him out', 'They threw him away', 'They expelled him', 'All of the above'],
      explanation: 'ⲁⲩϩⲓⲟⲩⲓ̀ ⲙ̀ⲙⲟϥ ⲉⲃⲟⲗ = they threw him out'
    },
    // Comprehensive exercises
    {
      id: 'test-26-22',
      type: 'sentence_building',
      question: 'Build: "The rain falls"',
      correctAnswer: 'ϯⲙⲟⲩⲛϩⲱⲟⲩ ϣⲁϥϩⲉⲓ',
      wordBank: ['ϯⲙⲟⲩⲛϩⲱⲟⲩ', 'ϣⲁϥϩⲉⲓ', 'ⲉⲃⲟⲗ', 'ⲉϧⲣⲏⲓ'],
      explanation: 'The rain (subject) + falls (verb)'
    },
    {
      id: 'test-26-23',
      type: 'translation',
      question: 'Translate: ⲡⲓⲕⲁϩⲓ ⲛⲉⲙ ⲧ̀ⲫⲉ',
      questionCoptic: 'ⲡⲓⲕⲁϩⲓ ⲛⲉⲙ ⲧ̀ⲫⲉ',
      correctAnswer: 'The earth and the heaven',
      options: ['The earth and the heaven', 'The land and the sky', 'Heaven and earth', 'All of the above'],
      explanation: 'ⲡⲓⲕⲁϩⲓ = earth + ⲛⲉⲙ = and + ⲧ̀ⲫⲉ = heaven'
    },
    {
      id: 'test-26-24',
      type: 'sentence_building',
      question: 'Build: "His hand is strong"',
      correctAnswer: 'ⲧⲉϥϫⲓϫ ⲟⲓ ⲛ̀ϫⲱⲣⲓ',
      wordBank: ['ⲧⲉϥ', 'ϫⲓϫ', 'ⲟⲓ', 'ⲛ̀ϫⲱⲣⲓ'],
      explanation: 'His hand (subject) + is strong (adjective predicate)'
    },
    {
      id: 'test-26-25',
      type: 'translation',
      question: 'Translate: ⲛⲁⲙⲁⲁϫⲓ ϣⲁⲩⲥⲱⲧⲙ',
      questionCoptic: 'ⲛⲁⲙⲁⲁϫⲓ ϣⲁⲩⲥⲱⲧⲙ',
      correctAnswer: 'My ears hear',
      options: ['My ears hear', 'My ears heard', 'I hear with my ears', 'Hearing with ears'],
      explanation: 'My ears (subject) + hear (verb)'
    },
    {
      id: 'test-26-26',
      type: 'matching',
      question: 'Match feelings and physical states',
      correctAnswer: 'matched',
      pairs: [
        { coptic: 'ⲣⲁϣⲓ ⲙ̀ⲙⲟϥ', english: 'his heart rejoices' },
        { coptic: 'ϯⲙⲉⲛⲣⲉ', english: 'I love' },
        { coptic: 'ⲡⲁϩⲏⲧ', english: 'my heart' },
        { coptic: 'ⲛⲁⲛⲉϥ', english: 'good' }
      ]
    },
    {
      id: 'test-26-27',
      type: 'fill_blank',
      question: 'Complete: ⲟⲩⲣⲱⲙⲓ ⲛ̀___ = A humble person',
      correctAnswer: 'ⲣⲉⲙϩⲏⲧ',
      options: ['ⲣⲉⲙϩⲏⲧ', 'ϣⲫⲏⲣⲓ', 'ⲥⲁⲃⲉ', 'ⲛⲁⲛⲉϥ'],
      explanation: 'ⲟⲩⲣⲱⲙⲓ ⲛ̀ⲣⲉⲙϩⲏⲧ = a humble person'
    },
    {
      id: 'test-26-28',
      type: 'translation',
      question: 'Translate: ⲟⲩϩⲓⲙⲓ ⲛ̀ⲥⲁⲃⲉ',
      questionCoptic: 'ⲟⲩϩⲓⲙⲓ ⲛ̀ⲥⲁⲃⲉ',
      correctAnswer: 'A wise woman',
      options: ['A wise woman', 'The wise woman', 'A woman is wise', 'Wise women'],
      explanation: 'A woman (ⲟⲩϩⲓⲙⲓ) who is wise (ⲛ̀ⲥⲁⲃⲉ)'
    },
    {
      id: 'test-26-29',
      type: 'multiple_choice',
      question: 'What is "to marvel/wonder" in Coptic?',
      correctAnswer: 'ⲉⲣϣⲫⲏⲣⲓ',
      options: ['ⲉⲣϣⲫⲏⲣⲓ', 'ⲣⲁϣⲓ', 'ⲛⲁⲩ', 'ⲥⲱⲧⲙ'],
      explanation: 'ⲉⲣϣⲫⲏⲣⲓ = to marvel, to wonder'
    },
    {
      id: 'test-26-30',
      type: 'sentence_building',
      question: 'Build: "She weeps because of sadness"',
      correctAnswer: 'ⲥⲣⲓⲙⲓ ⲉⲑⲃⲉ ⲡⲓⲙ̀ⲕⲁϩⲛ̀ϩⲏⲧ',
      wordBank: ['ⲥⲣⲓⲙⲓ', 'ⲉⲑⲃⲉ', 'ⲡⲓ', 'ⲙ̀ⲕⲁϩⲛ̀ϩⲏⲧ'],
      explanation: 'She weeps (verb) + because of (preposition) + the sadness (object)'
    }
  ]
};

export default unit26Test;
