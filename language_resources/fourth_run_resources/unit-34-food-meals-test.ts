import { Lesson } from '../../types';

// UNIT 34 TEST: FOOD & MEALS
// Comprehensive test covering all 4 lessons in Unit 34
// Tests food vocabulary, meals, and dining-related terms

const unit34Test: Lesson = {
  id: 'test-34',
  unitId: 'unit-34',
  title: 'Unit 34 Test: Food & Meals',
  description: 'Comprehensive test of food, drink, and dining vocabulary',
  order: 5,
  xpReward: 100,
  isLocked: true,
  completed: false,
  exercises: [
    {
      id: 'test-34-1',
      type: 'multiple_choice',
      question: 'What is "bread" in Coptic?',
      correctAnswer: 'ⲱⲓⲕ',
      options: ['ⲱⲓⲕ', 'ⲏⲣⲡ', 'ⲙⲱⲟⲩ', 'ⲉⲃⲓⲱ'],
      explanation: 'ⲱⲓⲕ = bread'
    },
    {
      id: 'test-34-2',
      type: 'matching',
      question: 'Match grains and breads',
      correctAnswer: 'matched',
      pairs: [
        { coptic: 'ⲱⲓⲕ', english: 'bread' },
        { coptic: 'ⲥⲱⲟⲩ', english: 'wheat/grain' },
        { coptic: 'ⲣⲓⲍⲁ', english: 'rice' },
        { coptic: 'ⲓⲱⲧ', english: 'barley' }
      ]
    },
    {
      id: 'test-34-3',
      type: 'translation',
      question: 'Translate: ⲡⲓⲱⲓⲕ ⲛ̀ⲟⲩⲃⲁϣ',
      questionCoptic: 'ⲡⲓⲱⲓⲕ ⲛ̀ⲟⲩⲃⲁϣ',
      correctAnswer: 'The white bread',
      options: ['The white bread', 'White bread', 'A white bread', 'The bread is white'],
      explanation: 'White bread'
    },
    {
      id: 'test-34-4',
      type: 'matching',
      question: 'Match vegetables',
      correctAnswer: 'matched',
      pairs: [
        { coptic: 'ⲥⲁϣⲉⲛ', english: 'onion' },
        { coptic: 'ⲕⲉⲗⲱⲗⲓ', english: 'garlic' },
        { coptic: 'ⲃⲉⲣⲓ', english: 'cucumber' },
        { coptic: 'ⲗⲁⲭⲁⲛⲟⲛ', english: 'vegetables' }
      ]
    },
    {
      id: 'test-34-5',
      type: 'fill_blank',
      question: 'Complete: ___ = vegetables',
      correctAnswer: 'ⲗⲁⲭⲁⲛⲟⲛ',
      options: ['ⲗⲁⲭⲁⲛⲟⲛ', 'ⲥⲁϣⲉⲛ', 'ⲃⲉⲣⲓ', 'ⲱⲓⲕ'],
      explanation: 'ⲗⲁⲭⲁⲛⲟⲛ = vegetables (from Greek)'
    },
    {
      id: 'test-34-6',
      type: 'sentence_building',
      question: 'Build: "I eat bread"',
      correctAnswer: 'ϯⲟⲩⲱⲙ ⲛ̀ⲟⲩⲱⲓⲕ',
      wordBank: ['ϯⲟⲩⲱⲙ', 'ⲛ̀', 'ⲟⲩⲱⲓⲕ', 'ⲙⲱⲟⲩ'],
      explanation: 'I eat bread'
    },
    {
      id: 'test-34-7',
      type: 'translation',
      question: 'Translate: ⲁⲓⲟⲩⲱⲙ ⲛ̀ⲟⲩⲥⲁϣⲉⲛ',
      questionCoptic: 'ⲁⲓⲟⲩⲱⲙ ⲛ̀ⲟⲩⲥⲁϣⲉⲛ',
      correctAnswer: 'I ate an onion',
      options: ['I ate an onion', 'I eat onions', 'I will eat an onion', 'I am eating an onion'],
      explanation: 'Past tense'
    },
    {
      id: 'test-34-8',
      type: 'matching',
      question: 'Match fruits',
      correctAnswer: 'matched',
      pairs: [
        { coptic: 'ⲉ̀ⲗⲟⲟⲗⲉ', english: 'grape' },
        { coptic: 'ⲕⲛⲧⲉ', english: 'fig' },
        { coptic: 'ⲉⲃⲓⲱ', english: 'honey' },
        { coptic: 'ⲁⲡⲟⲧ', english: 'fruit' }
      ]
    },
    {
      id: 'test-34-9',
      type: 'translation',
      question: 'Translate: ϩⲁⲛⲉ̀ⲗⲟⲟⲗⲉ ⲛ̀ⲛⲁⲛⲉⲩ',
      questionCoptic: 'ϩⲁⲛⲉ̀ⲗⲟⲟⲗⲉ ⲛ̀ⲛⲁⲛⲉⲩ',
      correctAnswer: 'Good grapes',
      options: ['Good grapes', 'The good grapes', 'A good grape', 'Beautiful fruits'],
      explanation: 'Good grapes'
    },
    {
      id: 'test-34-10',
      type: 'matching',
      question: 'Match meats and proteins',
      correctAnswer: 'matched',
      pairs: [
        { coptic: 'ⲁϥ', english: 'meat' },
        { coptic: 'ⲧⲉⲃⲧ', english: 'fish' },
        { coptic: 'ⲁⲗⲉⲕⲧⲱⲣ', english: 'chicken' },
        { coptic: 'ⲕⲁⲗⲁⲩϫⲓ', english: 'egg' }
      ]
    },
    {
      id: 'test-34-11',
      type: 'fill_blank',
      question: 'Complete: ϯⲟⲩⲱⲙ ⲛ̀ⲟⲩ___ = I eat fish',
      correctAnswer: 'ⲧⲉⲃⲧ',
      options: ['ⲧⲉⲃⲧ', 'ⲁϥ', 'ⲕⲁⲗⲁⲩϫⲓ', 'ⲁⲗⲉⲕⲧⲱⲣ'],
      explanation: 'ⲧⲉⲃⲧ = fish'
    },
    {
      id: 'test-34-12',
      type: 'matching',
      question: 'Match dairy products',
      correctAnswer: 'matched',
      pairs: [
        { coptic: 'ⲉⲣⲱⲧⲉ', english: 'milk' },
        { coptic: 'ϩⲁⲗⲟϯ', english: 'butter' },
        { coptic: 'ϧⲓⲃⲓ', english: 'cheese' },
        { coptic: 'ⲉⲃⲓⲱ', english: 'honey' }
      ]
    },
    {
      id: 'test-34-13',
      type: 'sentence_building',
      question: 'Build: "The honey is sweet"',
      correctAnswer: 'ⲡⲓⲉⲃⲓⲱ ϩⲟⲗϫ',
      wordBank: ['ⲡⲓⲉⲃⲓⲱ', 'ϩⲟⲗϫ', 'ⲛⲁⲛⲉϥ', 'ⲉⲣⲱⲧⲉ'],
      explanation: 'Honey is sweet'
    },
    {
      id: 'test-34-14',
      type: 'translation',
      question: 'Translate: ⲁⲓⲥⲱ ⲛ̀ⲟⲩⲉⲣⲱⲧⲉ',
      questionCoptic: 'ⲁⲓⲥⲱ ⲛ̀ⲟⲩⲉⲣⲱⲧⲉ',
      correctAnswer: 'I drank milk',
      options: ['I drank milk', 'I drink milk', 'I will drink milk', 'I am drinking milk'],
      explanation: 'Past tense of drinking'
    },
    {
      id: 'test-34-15',
      type: 'multiple_choice',
      question: 'What is "fish" in Coptic?',
      correctAnswer: 'ⲧⲉⲃⲧ',
      options: ['ⲧⲉⲃⲧ', 'ⲁϥ', 'ⲙⲱⲟⲩ', 'ⲉⲗⲟⲟⲗⲉ'],
      explanation: 'ⲧⲉⲃⲧ = fish'
    },
    {
      id: 'test-34-16',
      type: 'matching',
      question: 'Match drinks and beverages',
      correctAnswer: 'matched',
      pairs: [
        { coptic: 'ⲉⲣⲱⲧⲉ', english: 'milk' },
        { coptic: 'ⲏⲣⲡ', english: 'wine' },
        { coptic: 'ⲟⲩⲧⲓⲛ', english: 'oil' },
        { coptic: 'ⲩⲇⲱⲣ', english: 'water' }
      ]
    },
    {
      id: 'test-34-17',
      type: 'sentence_building',
      question: 'Build: "Drinking water and wine"',
      correctAnswer: 'ⲥⲱ ⲛ̀ⲟⲩⲩⲇⲱⲣ ⲛⲉⲙ ⲟⲩⲏⲣⲡ',
      wordBank: ['ⲥⲱ', 'ⲛ̀ⲟⲩ', 'ⲩⲇⲱⲣ', 'ⲏⲣⲡ', 'ⲛⲉⲙ'],
      explanation: 'Drinking water and wine'
    },
    {
      id: 'test-34-18',
      type: 'translation',
      question: 'Translate: ⲛⲓϣⲟⲩⲗⲓ ⲛ̀ⲥⲁⲗⲧ',
      questionCoptic: 'ⲛⲓϣⲟⲩⲗⲓ ⲛ̀ⲥⲁⲗⲧ',
      correctAnswer: 'Leavened loaves',
      options: ['Leavened loaves', 'Salt loaves', 'Bread with salt', 'Salty bread'],
      explanation: 'Loaves with seasoning'
    },
    {
      id: 'test-34-19',
      type: 'fill_blank',
      question: 'Complete: ⲧⲉⲃⲧ ⲟⲩ___ = fresh fish',
      correctAnswer: 'ⲛⲏⲟⲩ',
      options: ['ⲛⲏⲟⲩ', 'ⲕⲟⲩϫⲓ', 'ⲛⲁⲛⲉϥ', 'ⲣⲟⲩ'],
      explanation: 'Fresh fish'
    },
    {
      id: 'test-34-20',
      type: 'translation',
      question: 'Translate: ϯⲙⲉⲗⲓ ⲉ̀ⲣⲟⲕ ⲛ̀ⲟⲩⲉⲃⲓⲱ',
      questionCoptic: 'ϯⲙⲉⲗⲓ ⲉ̀ⲣⲟⲕ ⲛ̀ⲟⲩⲉⲃⲓⲱ',
      correctAnswer: 'I give you honey',
      options: ['I give you honey', 'You give me honey', 'I have honey', 'The honey is yours'],
      explanation: 'I give to you honey'
    },
    {
      id: 'test-34-21',
      type: 'sentence_building',
      question: 'Build: "Break bread together"',
      correctAnswer: 'ⲛⲓⲟⲡ ⲙ̀ⲟⲩⲱⲓⲕ ⲙⲛⲏⲓ',
      wordBank: ['ⲛⲓⲟⲡ', 'ⲙ̀ⲟⲩ', 'ⲱⲓⲕ', 'ⲙⲛⲏⲓ'],
      explanation: 'Breaking bread (Eucharistic reference)'
    },
    {
      id: 'test-34-22',
      type: 'translation',
      question: 'Translate: ⲥⲱⲟⲩ ⲟⲩⲛⲓϣϯ',
      questionCoptic: 'ⲥⲱⲟⲩ ⲟⲩⲛⲓϣϯ',
      correctAnswer: 'Much grain/wheat',
      options: ['Much grain/wheat', 'A grain of wheat', 'Much food', 'Plenty of bread'],
      explanation: 'Great/much wheat'
    },
    {
      id: 'test-34-23',
      type: 'fill_blank',
      question: 'Complete: ⲛⲉ___ ⲛ̀ⲕⲟⲣⲉ = figs gathered',
      correctAnswer: 'ⲕⲛⲧⲉ',
      options: ['ⲕⲛⲧⲉ', 'ⲉ̀ⲗⲟⲟⲗⲉ', 'ⲕⲛⲧⲓ', 'ⲁⲡⲟⲧ'],
      explanation: 'Figs are picked/gathered'
    },
    {
      id: 'test-34-24',
      type: 'translation',
      question: 'Translate: ⲣⲁⲛⲉϥ ⲉ̀ⲣⲟⲓ ⲛ̀ⲟⲩⲱⲏ',
      questionCoptic: 'ⲣⲁⲛⲉϥ ⲉ̀ⲣⲟⲓ ⲛ̀ⲟⲩⲱⲏ',
      correctAnswer: 'He brings me food',
      options: ['He brings me food', 'I bring him food', 'He eats with me', 'Food comes to me'],
      explanation: 'Food provision'
    },
    {
      id: 'test-34-25',
      type: 'sentence_building',
      question: 'Build: "Wine and bread for the feast"',
      correctAnswer: 'ⲏⲣⲡ ⲛⲉⲙ ⲱⲓⲕ ⲛ̀ⲧⲁⲁⲩⲙⲓⲛⲁ',
      wordBank: ['ⲏⲣⲡ', 'ⲱⲓⲕ', 'ⲛ̀ⲧⲁⲁⲩⲙⲓⲛⲁ', 'ⲛⲉⲙ'],
      explanation: 'Wine and bread for the celebration'
    }
  ]
};

export default unit34Test;
