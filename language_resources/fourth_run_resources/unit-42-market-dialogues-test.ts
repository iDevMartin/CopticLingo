import { Unit } from '../../types';

// TEST FILE FOR UNIT 42: MARKET & DAILY DIALOGUES
// Comprehensive test exercises covering all 4 lessons
// 25 exercises total - testing market transactions and practical conversations

const unit42Test: Unit = {
  id: 'unit-42-test',
  title: 'Unit 42 Test: Market & Daily Dialogues',
  description: 'Comprehensive test of market conversations and daily practical language',
  order: 42.5,
  color: '#FF9800',
  lessons: [
    {
      id: 'lesson-42-test',
      unitId: 'unit-42-test',
      title: 'Market & Daily Dialogues Comprehensive Test',
      description: 'Test all market and practical dialogue scenarios',
      order: 1,
      xpReward: 150,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'test-42-1',
          type: 'matching',
          question: 'Match market vocabulary',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ϯⲁⲅⲟⲣⲁ', english: 'the market' },
            { coptic: 'ⲡⲓϣⲱⲡⲓ', english: 'the shop/store' },
            { coptic: 'ⲡⲓⲱ̀ⲛⲓ', english: 'the price' },
            { coptic: 'ⲡⲓϣⲟⲡ', english: 'the purchase/buying' }
          ]
        },
        {
          id: 'test-42-2',
          type: 'translation',
          question: 'Translate: Ⲟⲩⲏⲣ ⲡⲉ ⲡⲓⲱ̀ⲛⲓ ⲙ̀ⲡⲁⲓ?',
          questionCoptic: 'Ⲟⲩⲏⲣ ⲡⲉ ⲡⲓⲱ̀ⲛⲓ ⲙ̀ⲡⲁⲓ?',
          correctAnswer: 'What is the price of this?',
          options: ['What is the price of this?', 'How much is this?', 'This is the price', 'Is this expensive?'],
          explanation: 'Ⲟⲩⲏⲣ ⲡⲉ ⲡⲓⲱ̀ⲛⲓ ⲙ̀ⲡⲁⲓ? = what is the price of this?'
        },
        {
          id: 'test-42-3',
          type: 'fill_blank',
          question: 'Complete: Ϯⲛⲁ___ ⲡⲁⲓ = I will buy this',
          correctAnswer: 'ϣⲟⲡ',
          options: ['ϣⲟⲡ', 'Ϯ', 'ϭⲓ', 'ⲱ̀ⲛⲓ'],
          explanation: 'Ϯⲛⲁϣⲟⲡ ⲡⲁⲓ = I will buy this (ϣⲟⲡ = to buy)'
        },
        {
          id: 'test-42-4',
          type: 'sentence_building',
          question: 'Build: "Do you have bread?"',
          correctAnswer: 'Ⲟⲩⲟⲛⲧⲁⲕ ⲱⲓⲕ?',
          wordBank: ['Ⲟⲩⲟⲛⲧⲁⲕ', 'ⲱⲓⲕ', 'ⲙ̀ⲙⲁⲩ', 'ⲟⲩ'],
          explanation: 'Ⲟⲩⲟⲛⲧⲁⲕ ⲱⲓⲕ? = do you have bread? (lit. "there is to-you bread?")'
        },
        {
          id: 'test-42-5',
          type: 'translation',
          question: 'Translate: Ⲁⲓϣⲟⲡ ⲛ̀ϣⲟⲙⲧ ⲛ̀ⲱⲓⲕ',
          questionCoptic: 'Ⲁⲓϣⲟⲡ ⲛ̀ϣⲟⲙⲧ ⲛ̀ⲱⲓⲕ',
          correctAnswer: 'I bought three loaves',
          options: ['I bought three loaves', 'I will buy three loaves', 'Three loaves were bought', 'Buy three loaves'],
          explanation: 'Ⲁⲓϣⲟⲡ ⲛ̀ϣⲟⲙⲧ ⲛ̀ⲱⲓⲕ = I bought three loaves'
        },
        {
          id: 'test-42-6',
          type: 'matching',
          question: 'Match transaction phrases',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'Ϯⲟⲩⲱϣ ⲛ̀ϣⲟⲡ', english: 'I want to buy' },
            { coptic: 'Ⲙⲁϯ ⲛⲏⲓ', english: 'Give me' },
            { coptic: 'Ϭⲓ ⲡⲓϩⲟⲙⲛⲧ', english: 'Take the payment' },
            { coptic: 'Ⲡⲁⲓ ϩⲟⲩⲟ̀', english: 'This is too much' }
          ]
        },
        {
          id: 'test-42-7',
          type: 'translation',
          question: 'Translate: Ⲙⲁϯ ⲛⲏⲓ ⲙ̀ⲡⲓⲗⲁϩⲁⲛⲟⲛ',
          questionCoptic: 'Ⲙⲁϯ ⲛⲏⲓ ⲙ̀ⲡⲓⲗⲁϩⲁⲛⲟⲛ',
          correctAnswer: 'Give me the vegetables',
          options: ['Give me the vegetables', 'I gave vegetables', 'The vegetables are given', 'Take vegetables'],
          explanation: 'Ⲙⲁϯ ⲛⲏⲓ ⲙ̀ⲡⲓⲗⲁϩⲁⲛⲟⲛ = give me the vegetables'
        },
        {
          id: 'test-42-8',
          type: 'multiple_choice',
          question: 'How do you say "too expensive"?',
          correctAnswer: 'ⲥⲁϣ ⲡⲓⲱ̀ⲛⲓ ⲙ̀ⲙⲁϣⲱ',
          options: ['ⲥⲁϣ ⲡⲓⲱ̀ⲛⲓ ⲙ̀ⲙⲁϣⲱ', 'ⲡⲓⲱ̀ⲛⲓ ⲛⲁⲛⲉϥ', 'ⲡⲓⲱ̀ⲛⲓ ⲕⲟⲩϫⲓ', 'ⲡⲓⲱ̀ⲛⲓ ϩⲟⲩⲟ̀'],
          explanation: 'ⲥⲁϣ ⲡⲓⲱ̀ⲛⲓ ⲙ̀ⲙⲁϣⲱ = the price is very expensive'
        },
        {
          id: 'test-42-9',
          type: 'matching',
          question: 'Match foods and goods',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲱⲓⲕ', english: 'bread' },
            { coptic: 'ⲧⲟⲗⲟⲧ', english: 'oil' },
            { coptic: 'ⲟⲩⲁ ⲙⲟⲩⲧ', english: 'fish' },
            { coptic: 'ⲕⲟⲕ', english: 'honey' }
          ]
        },
        {
          id: 'test-42-10',
          type: 'translation',
          question: 'Translate: Ⲟⲩⲣ ⲟⲩⲑⲩⲥⲓⲁ ⲡⲉ ⲧⲉⲛⲥⲟⲣⲟⲥ',
          questionCoptic: 'Ⲟⲩⲣ ⲟⲩⲑⲩⲥⲓⲁ ⲡⲉ ⲧⲉⲛⲟⲙⲁ',
          correctAnswer: 'The land and its name',
          options: ['The land and its name', 'The sacred land', 'The land offering', 'This land'],
          explanation: 'Discussion of land/territory and identification'
        },
        {
          id: 'test-42-11',
          type: 'fill_blank',
          question: 'Complete: ⲟⲩⲟⲛ ⲙ̀___ⲃⲟⲗ ⲡⲉ ⲡⲓϣⲱⲡⲓ = There is outside the shop',
          correctAnswer: 'ⲃⲟⲗ',
          options: ['ⲃⲟⲗ', 'ⲑⲏ', 'ⲙⲁⲑⲟ', 'ⲟⲣ'],
          explanation: 'ⲃⲟⲗ = outside, exterior'
        },
        {
          id: 'test-42-12',
          type: 'sentence_building',
          question: 'Build: "The merchant sells good goods"',
          correctAnswer: 'Ⲡⲟⲣⲉⲟⲡⲟⲗⲉⲥ ⲡⲟⲗⲉⲓ ⲭⲱⲅⲁ ⲛⲁⲛⲓ',
          wordBank: ['Ⲡⲟⲣⲉⲟⲡⲟⲗⲉⲥ', 'ⲡⲟⲗⲉⲓ', 'ⲭⲣ̀ⲙⲁⲧⲁ', 'ⲛⲁⲛⲓ'],
          explanation: 'Merchant transaction description'
        },
        {
          id: 'test-42-13',
          type: 'translation',
          question: 'Translate: Ⲛⲁⲗⲟⲙⲛⲧ ⲛ̀ⲛⲓϣ ⲉⲣⲁⲧⲉⲛ',
          questionCoptic: 'Ⲛⲁⲗⲟⲙⲛⲧ ⲛ̀ⲛⲓϣ ⲉⲣⲁⲧⲉⲛ',
          correctAnswer: 'They saw some things that happened',
          options: ['They saw some things that happened', 'What happened to you (pl)', 'Things happened to them', 'They saw and things happened'],
          explanation: 'Narrative of observation and events'
        },
        {
          id: 'test-42-14',
          type: 'matching',
          question: 'Match directions and places',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲁⲝⲟⲛ', english: 'right' },
            { coptic: 'ⲁⲣⲓⲥⲧⲉⲣⲁ', english: 'left' },
            { coptic: 'ⲁⲩⲁ', english: 'above / here' },
            { coptic: 'ⲕⲁⲧⲟ', english: 'below / down' }
          ]
        },
        {
          id: 'test-42-15',
          type: 'fill_blank',
          question: 'Complete: ⲡⲓⲡⲟⲗⲉ ⲡⲉ ___ ⲧⲉ ⲡⲟⲗⲓⲥ = The city is great',
          correctAnswer: 'ⲣ̀ⲙⲁⲁⲩ',
          options: ['ⲣ̀ⲙⲁⲁⲩ', 'ⲧⲱⲣ̀', 'ⲉⲑⲟⲩⲁⲃ', 'ⲕⲟⲩϫⲓ'],
          explanation: 'ⲣ̀ⲙⲁⲁⲩ = great, big'
        },
        {
          id: 'test-42-16',
          type: 'sentence_building',
          question: 'Build: "Where is the inn / lodging?"',
          correctAnswer: 'Ⲟⲩⲉⲩⲣ ⲡⲉ ⲡⲓⲥⲟⲧⲛⲉ?',
          wordBank: ['Ⲟⲩⲉⲩⲣ', 'ⲡⲉ', 'ⲡⲓ', 'ⲥⲟⲧⲛⲉ'],
          explanation: 'Ⲟⲩⲉⲩⲣ ⲡⲉ ⲡⲓⲥⲟⲧⲛⲉ? = where is the lodging/inn?'
        },
        {
          id: 'test-42-17',
          type: 'translation',
          question: 'Translate: Ⲁⲓϣⲁ ⲛⲛ̀ⲅⲟ ⲛⲁⲧⲟⲩϣ',
          questionCoptic: 'Ⲁⲓϣⲁ ⲛⲛ̀ⲅⲟ ⲛⲁⲧⲟⲩϣ',
          correctAnswer: 'I went to the city that was nearby',
          options: ['I went to the city that was nearby', 'I go to the nearby place', 'The city went near me', 'Going to nearby cities'],
          explanation: 'Travel narrative with relative clause'
        },
        {
          id: 'test-42-18',
          type: 'matching',
          question: 'Match money and payment',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲟⲩⲟⲯⲩ', english: 'a coin' },
            { coptic: 'ⲡⲓⲕⲟⲩⲕⲁⲛⲟⲛ', english: 'the tax' },
            { coptic: 'ⲡⲓⲗⲁⲧⲩⲥ', english: 'the talent / weight' },
            { coptic: 'ⲟⲩⲇⲣⲁⲭⲙⲁ', english: 'a drachma' }
          ]
        },
        {
          id: 'test-42-19',
          type: 'fill_blank',
          question: 'Complete: ⲁⲩⲭⲓⲧ ⲙ̀ ___ ⲛ̀ⲇⲟⲥ = They received payment from the people',
          correctAnswer: 'ⲉⲇⲁⲝⲓⲁ',
          options: ['ⲉⲇⲁⲭⲓⲁ', 'ⲙⲓϣⲓ', 'ⲛⲟⲙⲟⲥ', 'ⲗⲟⲓⲡⲟⲥ'],
          explanation: 'Payment reception in commerce'
        },
        {
          id: 'test-42-20',
          type: 'sentence_building',
          question: 'Build: "I need water"',
          correctAnswer: 'Ϯⲟⲩⲱϣ ⲉ̀ⲏ',
          wordBank: ['Ϯⲟⲩⲱϣ', 'ⲉ̀', 'ⲏ', 'ⲕⲁⲧⲁⲥⲕⲉⲩⲁⲍⲟ'],
          explanation: 'Expression of need/desire'
        },
        {
          id: 'test-42-21',
          type: 'translation',
          question: 'Translate: Ⲛⲁⲣⲟ ⲛⲟⲩⲟⲙⲟⲛⲓⲁ ⲙ̀ⲧⲓⲓ ⲙ̀ⲡⲉⲓⲙⲁ',
          questionCoptic: 'Ⲛⲁⲣⲟ ⲛⲟⲩⲟⲙⲟⲛⲁ ⲙ̀ⲧⲓⲓ ⲙ̀ⲡⲉⲓⲙⲁ',
          correctAnswer: 'They made an agreement in this place',
          options: ['They made an agreement in this place', 'Agreement was of this place', 'They agreed that place', 'The place has agreement'],
          explanation: 'Business agreement/contract scenario'
        },
        {
          id: 'test-42-22',
          type: 'matching',
          question: 'Match dialogue patterns',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'Ⲟⲩⲱⲧ? / Ⲟⲩⲟⲛⲧⲁⲕ', english: 'Do you have / There is for you' },
            { coptic: 'Ⲟⲩⲉⲩⲣ? / Ⲙ̀ⲙⲁⲩ', english: 'Where? / Over there' },
            { coptic: 'Ⲟⲩⲏⲣ? / ⲙ̀ⲡⲟⲟⲩ', english: 'What? / Nothing' },
            { coptic: 'Ⲡⲉ ⲟⲩⲏⲣ? / ⲛ̀', english: 'What is it? / Yes' }
          ]
        },
        {
          id: 'test-42-23',
          type: 'fill_blank',
          question: 'Complete: Ⲙ̀ⲡ___ ⲟⲩⲣ ⲛ̀ⲕⲉⲓⲁ = There is not a little knowledge',
          correctAnswer: 'ⲟⲓⲛ',
          options: ['ⲟⲓⲛ', 'ⲧⲟⲗ', 'ⲣⲟⲙⲡⲉ', 'ⲡⲟⲓ'],
          explanation: 'Negation of possession'
        },
        {
          id: 'test-42-24',
          type: 'sentence_building',
          question: 'Build: "Take this and give me that"',
          correctAnswer: 'Ϭⲓ ⲡⲁⲓ ⲙⲁϯ ⲛⲏⲓ ⲙ̀ⲡⲁⲓ',
          wordBank: ['Ϭⲓ', 'ⲡⲁⲓ', 'ⲙⲁϯ', 'ⲙ̀ⲡⲁⲓ'],
          explanation: 'Two imperative clauses in exchange'
        },
        {
          id: 'test-42-25',
          type: 'translation',
          question: 'Translate: Ⲭⲁⲓⲣⲉ ⲙ̀ⲡⲟⲩⲃⲓ ⲛ̀ⲧⲙⲉⲗⲟⲥ',
          questionCoptic: 'Ⲭⲁⲓⲣⲉ ⲙ̀ⲡⲟⲩⲃⲓ ⲛ̀ⲧⲙⲉⲗⲟⲥ',
          correctAnswer: 'Greetings with the wages of sin',
          options: ['Greetings with the wages of sin', 'The reward of sin is greetings', 'Rejoice in judgment', 'Sinful wages'],
          explanation: 'Philosophical/theological reference in dialogue context'
        }
      ]
    }
  ]
};

export default unit42Test;
