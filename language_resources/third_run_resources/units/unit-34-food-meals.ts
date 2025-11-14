import { Unit } from '../../types';

// UNIT 34: FOOD & MEALS
// Bohairic dialect - Essential culinary vocabulary
// Fills gap: Comprehensive food vocabulary for daily conversation

const unit34: Unit = {
  id: 'unit-34',
  title: 'Food & Meals',
  description: 'Master vocabulary for food, drink, and dining',
  order: 34,
  color: '#FF5722',
  lessons: [
    {
      id: 'lesson-34-1',
      unitId: 'unit-34',
      title: 'Breads, Grains & Vegetables',
      description: 'Essential staple foods',
      order: 1,
      xpReward: 20,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-34-1-1',
          type: 'multiple_choice',
          question: 'What is "bread" in Coptic?',
          correctAnswer: 'ⲱⲓⲕ',
          options: ['ⲱⲓⲕ', 'ⲏⲣⲡ', 'ⲙⲱⲟⲩ', 'ⲉⲃⲓⲱ'],
          explanation: 'ⲱⲓⲕ (oik) = bread (one of the most common Coptic words)'
        },
        {
          id: 'ex-34-1-2',
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
          id: 'ex-34-1-3',
          type: 'translation',
          question: 'Translate: ⲡⲓⲱⲓⲕ ⲛ̀ⲟⲩⲃⲁϣ',
          questionCoptic: 'ⲡⲓⲱⲓⲕ ⲛ̀ⲟⲩⲃⲁϣ',
          correctAnswer: 'The white bread',
          options: ['The white bread', 'White bread', 'A white bread', 'The bread is white'],
          explanation: 'ⲡⲓⲱⲓⲕ ⲛ̀ⲟⲩⲃⲁϣ = the white bread'
        },
        {
          id: 'ex-34-1-4',
          type: 'matching',
          question: 'Match vegetables',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲥⲁϣⲉⲛ', english: 'onion' },
            { coptic: 'ⲕⲉⲗⲱⲗⲓ', english: 'garlic' },
            { coptic: 'ⲃⲉⲣⲓ', english: 'cucumber' },
            { coptic: 'ⲗⲁⲭⲁⲛⲟⲛ', english: 'vegetables/greens' }
          ]
        },
        {
          id: 'ex-34-1-5',
          type: 'fill_blank',
          question: 'Complete: ___ = vegetables/greens',
          correctAnswer: 'ⲗⲁⲭⲁⲛⲟⲛ',
          options: ['ⲗⲁⲭⲁⲛⲟⲛ', 'ⲥⲁϣⲉⲛ', 'ⲃⲉⲣⲓ', 'ⲱⲓⲕ'],
          explanation: 'ⲗⲁⲭⲁⲛⲟⲛ (lakhanon) = vegetables/greens (from Greek λάχανον)'
        },
        {
          id: 'ex-34-1-6',
          type: 'sentence_building',
          question: 'Build: "I eat bread"',
          correctAnswer: 'ϯⲟⲩⲱⲙ ⲛ̀ⲟⲩⲱⲓⲕ',
          wordBank: ['ϯⲟⲩⲱⲙ', 'ⲛ̀', 'ⲟⲩⲱⲓⲕ', 'ⲙⲱⲟⲩ'],
          explanation: 'ϯⲟⲩⲱⲙ ⲛ̀ⲟⲩⲱⲓⲕ = I eat (some) bread'
        },
        {
          id: 'ex-34-1-7',
          type: 'translation',
          question: 'Translate: ⲁⲓⲟⲩⲱⲙ ⲛ̀ⲟⲩⲥⲁϣⲉⲛ',
          questionCoptic: 'ⲁⲓⲟⲩⲱⲙ ⲛ̀ⲟⲩⲥⲁϣⲉⲛ',
          correctAnswer: 'I ate an onion',
          options: ['I ate an onion', 'I eat onions', 'I will eat an onion', 'I am eating an onion'],
          explanation: 'ⲁⲓⲟⲩⲱⲙ ⲛ̀ⲟⲩⲥⲁϣⲉⲛ = I ate an onion (past tense)'
        },
        {
          id: 'ex-34-1-8',
          type: 'multiple_choice',
          question: 'How do you say "wheat/grain"?',
          correctAnswer: 'ⲥⲱⲟⲩ',
          options: ['ⲥⲱⲟⲩ', 'ⲱⲓⲕ', 'ⲓⲱⲧ', 'ⲣⲓⲍⲁ'],
          explanation: 'ⲥⲱⲟⲩ (sou) = wheat, grain'
        }
      ]
    },
    {
      id: 'lesson-34-2',
      unitId: 'unit-34',
      title: 'Fruits, Meats & Dairy',
      description: 'Proteins and sweet foods',
      order: 2,
      xpReward: 20,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-34-2-1',
          type: 'matching',
          question: 'Match fruits',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲉ̀ⲗⲟⲟⲗⲉ', english: 'grape' },
            { coptic: 'ⲕⲛⲧⲉ', english: 'fig' },
            { coptic: 'ⲉⲃⲓⲱ', english: 'honey/bee' },
            { coptic: 'ⲁⲡⲟⲧ', english: 'fruit' }
          ]
        },
        {
          id: 'ex-34-2-2',
          type: 'translation',
          question: 'Translate: ϩⲁⲛⲉ̀ⲗⲟⲟⲗⲉ ⲛ̀ⲛⲁⲛⲉⲩ',
          questionCoptic: 'ϩⲁⲛⲉ̀ⲗⲟⲟⲗⲉ ⲛ̀ⲛⲁⲛⲉⲩ',
          correctAnswer: 'Good grapes',
          options: ['Good grapes', 'The good grapes', 'A good grape', 'Beautiful fruits'],
          explanation: 'ϩⲁⲛⲉ̀ⲗⲟⲟⲗⲉ ⲛ̀ⲛⲁⲛⲉⲩ = (some) good grapes'
        },
        {
          id: 'ex-34-2-3',
          type: 'matching',
          question: 'Match meats and proteins',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲁϥ', english: 'meat/flesh' },
            { coptic: 'ⲧⲉⲃⲧ', english: 'fish' },
            { coptic: 'ⲁⲗⲉⲕⲧⲱⲣ', english: 'chicken/rooster' },
            { coptic: 'ⲕⲁⲗⲁⲩϫⲓ', english: 'egg' }
          ]
        },
        {
          id: 'ex-34-2-4',
          type: 'fill_blank',
          question: 'Complete: ϯⲟⲩⲱⲙ ⲛ̀ⲟⲩ___ = I eat fish',
          correctAnswer: 'ⲧⲉⲃⲧ',
          options: ['ⲧⲉⲃⲧ', 'ⲁϥ', 'ⲕⲁⲗⲁⲩϫⲓ', 'ⲁⲗⲉⲕⲧⲱⲣ'],
          explanation: 'ⲧⲉⲃⲧ (tebt) = fish'
        },
        {
          id: 'ex-34-2-5',
          type: 'matching',
          question: 'Match dairy and animal products',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲉⲣⲱⲧⲉ', english: 'milk' },
            { coptic: 'ϩⲁⲗⲟϯ', english: 'butter' },
            { coptic: 'ϧⲓⲃⲓ', english: 'cheese' },
            { coptic: 'ⲉⲃⲓⲱ', english: 'honey' }
          ]
        },
        {
          id: 'ex-34-2-6',
          type: 'sentence_building',
          question: 'Build: "The honey is sweet"',
          correctAnswer: 'ⲡⲓⲉⲃⲓⲱ ϩⲟⲗϫ',
          wordBank: ['ⲡⲓⲉⲃⲓⲱ', 'ϩⲟⲗϫ', 'ⲛⲁⲛⲉϥ', 'ⲉⲣⲱⲧⲉ'],
          explanation: 'ⲡⲓⲉⲃⲓⲱ ϩⲟⲗϫ = the honey is sweet (ϩⲟⲗϫ = sweet)'
        },
        {
          id: 'ex-34-2-7',
          type: 'translation',
          question: 'Translate: ⲁⲓⲥⲱ ⲛ̀ⲟⲩⲉⲣⲱⲧⲉ',
          questionCoptic: 'ⲁⲓⲥⲱ ⲛ̀ⲟⲩⲉⲣⲱⲧⲉ',
          correctAnswer: 'I drank milk',
          options: ['I drank milk', 'I drink milk', 'I will drink milk', 'I am drinking milk'],
          explanation: 'ⲁⲓⲥⲱ ⲛ̀ⲟⲩⲉⲣⲱⲧⲉ = I drank (some) milk (past tense)'
        },
        {
          id: 'ex-34-2-8',
          type: 'multiple_choice',
          question: 'What is "fish" in Coptic?',
          correctAnswer: 'ⲧⲉⲃⲧ',
          options: ['ⲧⲉⲃⲧ', 'ⲁϥ', 'ⲙⲱⲟⲩ', 'ⲉⲗⲟⲟⲗⲉ'],
          explanation: 'ⲧⲉⲃⲧ (tebt) = fish'
        }
      ]
    },
    {
      id: 'lesson-34-3',
      unitId: 'unit-34',
      title: 'Drinks & Condiments',
      description: 'Beverages and seasonings',
      order: 3,
      xpReward: 25,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-34-3-1',
          type: 'matching',
          question: 'Match beverages',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲙⲱⲟⲩ', english: 'water' },
            { coptic: 'ⲏⲣⲡ', english: 'wine' },
            { coptic: 'ⲍⲩⲑⲟⲥ', english: 'beer' },
            { coptic: 'ⲉⲣⲱⲧⲉ', english: 'milk' }
          ]
        },
        {
          id: 'ex-34-3-2',
          type: 'translation',
          question: 'Translate: ϯⲥⲱ ⲙ̀ⲡⲓⲙⲱⲟⲩ',
          questionCoptic: 'ϯⲥⲱ ⲙ̀ⲡⲓⲙⲱⲟⲩ',
          correctAnswer: 'I drink the water',
          options: ['I drink the water', 'I drank water', 'I will drink water', 'I am drinking water'],
          explanation: 'ϯⲥⲱ ⲙ̀ⲡⲓⲙⲱⲟⲩ = I drink the water (present tense)'
        },
        {
          id: 'ex-34-3-3',
          type: 'fill_blank',
          question: 'Complete: ⲡⲓ___ ⲛ̀ⲕⲁϣⲛⲓ = the red wine',
          correctAnswer: 'ⲏⲣⲡ',
          options: ['ⲏⲣⲡ', 'ⲙⲱⲟⲩ', 'ⲍⲩⲑⲟⲥ', 'ⲉⲣⲱⲧⲉ'],
          explanation: 'ⲡⲓⲏⲣⲡ ⲛ̀ⲕⲁϣⲛⲓ = the red wine'
        },
        {
          id: 'ex-34-3-4',
          type: 'matching',
          question: 'Match condiments and seasonings',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ϩⲙⲟⲩ', english: 'salt' },
            { coptic: 'ⲛⲉϩ', english: 'oil/fat' },
            { coptic: 'ⲉⲃⲓⲱ', english: 'honey' },
            { coptic: 'ϣⲁⲥⲓ', english: 'spice' }
          ]
        },
        {
          id: 'ex-34-3-5',
          type: 'sentence_building',
          question: 'Build: "Water is good"',
          correctAnswer: 'ⲡⲓⲙⲱⲟⲩ ⲛⲁⲛⲉϥ',
          wordBank: ['ⲡⲓⲙⲱⲟⲩ', 'ⲛⲁⲛⲉϥ', 'ϩⲱⲟⲩ', 'ⲏⲣⲡ'],
          explanation: 'ⲡⲓⲙⲱⲟⲩ ⲛⲁⲛⲉϥ = the water is good'
        },
        {
          id: 'ex-34-3-6',
          type: 'translation',
          question: 'Translate: ⲙⲁϮ ⲛⲏⲓ ⲙ̀ⲡⲓⲏⲣⲡ',
          questionCoptic: 'ⲙⲁϮ ⲛⲏⲓ ⲙ̀ⲡⲓⲏⲣⲡ',
          correctAnswer: 'Give me the wine',
          options: ['Give me the wine', 'I give you wine', 'Give him wine', 'Give me water'],
          explanation: 'ⲙⲁϮ ⲛⲏⲓ ⲙ̀ⲡⲓⲏⲣⲡ = give me the wine (imperative + indirect object)'
        },
        {
          id: 'ex-34-3-7',
          type: 'multiple_choice',
          question: 'What is "salt" in Coptic?',
          correctAnswer: 'ϩⲙⲟⲩ',
          options: ['ϩⲙⲟⲩ', 'ⲛⲉϩ', 'ⲉⲃⲓⲱ', 'ϣⲁⲥⲓ'],
          explanation: 'ϩⲙⲟⲩ (hmou) = salt'
        },
        {
          id: 'ex-34-3-8',
          type: 'translation',
          question: 'Translate: ⲁϥⲥⲱ ⲙ̀ⲡⲓⲍⲩⲑⲟⲥ',
          questionCoptic: 'ⲁϥⲥⲱ ⲙ̀ⲡⲓⲍⲩⲑⲟⲥ',
          correctAnswer: 'He drank the beer',
          options: ['He drank the beer', 'He drinks beer', 'He will drink beer', 'I drank the beer'],
          explanation: 'ⲁϥⲥⲱ ⲙ̀ⲡⲓⲍⲩⲑⲟⲥ = he drank the beer (past tense)'
        }
      ]
    },
    {
      id: 'lesson-34-4',
      unitId: 'unit-34',
      title: 'Meal Vocabulary & Phrases',
      description: 'Dining expressions and meal times',
      order: 4,
      xpReward: 25,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-34-4-1',
          type: 'matching',
          question: 'Match meal-related words',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲟⲩⲱⲙ', english: 'to eat/eating' },
            { coptic: 'ⲥⲱ', english: 'to drink/drinking' },
            { coptic: 'ⲧⲣⲁⲡⲉⲍⲁ', english: 'table' },
            { coptic: 'ⲫⲱⲕⲓ', english: 'dish/plate' }
          ]
        },
        {
          id: 'ex-34-4-2',
          type: 'translation',
          question: 'Translate: ⲁⲙⲱⲓⲛⲓ ⲁ̀ⲣⲉⲛⲟⲩⲱⲙ',
          questionCoptic: 'ⲁⲙⲱⲓⲛⲓ ⲁ̀ⲣⲉⲛⲟⲩⲱⲙ',
          correctAnswer: 'Come, let us eat',
          options: ['Come, let us eat', 'I came to eat', 'Come and eat', 'We came to eat'],
          explanation: 'ⲁⲙⲱⲓⲛⲓ ⲁ̀ⲣⲉⲛⲟⲩⲱⲙ = come, let us eat (imperative + hortative)'
        },
        {
          id: 'ex-34-4-3',
          type: 'matching',
          question: 'Match meal times and phrases',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ϯⲧⲱⲟⲩⲛⲓ', english: 'morning/breakfast time' },
            { coptic: 'ⲡⲓⲙⲉⲣⲓ', english: 'noon/midday' },
            { coptic: 'ⲡⲓϫⲱⲣϩ', english: 'evening/evening meal' },
            { coptic: 'ⲡⲓⲟⲩⲱⲙ', english: 'the meal/the eating' }
          ]
        },
        {
          id: 'ex-34-4-4',
          type: 'fill_blank',
          question: 'Complete: ϯⲟⲩⲱⲙ ϧⲉⲛ ___ = I eat in the morning',
          correctAnswer: 'ϯⲧⲱⲟⲩⲛⲓ',
          options: ['ϯⲧⲱⲟⲩⲛⲓ', 'ⲡⲓⲙⲉⲣⲓ', 'ⲡⲓϫⲱⲣϩ', 'ⲫⲟⲟⲩ'],
          explanation: 'ϯⲧⲱⲟⲩⲛⲓ = the morning, dawn'
        },
        {
          id: 'ex-34-4-5',
          type: 'sentence_building',
          question: 'Build: "I am hungry"',
          correctAnswer: 'ϯϩⲟⲕⲉⲣ',
          wordBank: ['ϯϩⲟⲕⲉⲣ', 'ϯⲓⲃⲓ', 'ϯⲟⲩⲱⲙ', 'ϯⲥⲱ'],
          explanation: 'ϯϩⲟⲕⲉⲣ = I am hungry (ϩⲟⲕⲉⲣ = to be hungry)'
        },
        {
          id: 'ex-34-4-6',
          type: 'translation',
          question: 'Translate: ϯⲓⲃⲓ',
          questionCoptic: 'ϯⲓⲃⲓ',
          correctAnswer: 'I am thirsty',
          options: ['I am thirsty', 'I am hungry', 'I drink', 'I am eating'],
          explanation: 'ϯⲓⲃⲓ = I am thirsty (ⲓⲃⲓ = to be thirsty)'
        },
        {
          id: 'ex-34-4-7',
          type: 'multiple_choice',
          question: 'How do you say "Bon appétit" (enjoy your meal)?',
          correctAnswer: 'ⲟⲩⲱⲙ ⲉⲛⲉϩ',
          options: ['ⲟⲩⲱⲙ ⲉⲛⲉϩ', 'ⲟⲩϫⲁⲓ', 'ϣⲉⲡϩⲙⲟⲧ', 'ⲙⲁⲣⲉⲛⲟⲩⲱⲙ'],
          explanation: 'ⲟⲩⲱⲙ ⲉⲛⲉϩ = eat well/eat in wellness (traditional blessing)'
        },
        {
          id: 'ex-34-4-8',
          type: 'translation',
          question: 'Translate: ⲁⲛⲟⲩⲱⲙ ⲛⲉⲙⲁⲛ ϧⲉⲛ ⲡⲓⲙⲉⲣⲓ',
          questionCoptic: 'ⲁⲛⲟⲩⲱⲙ ⲛⲉⲙⲁⲛ ϧⲉⲛ ⲡⲓⲙⲉⲣⲓ',
          correctAnswer: 'We ate together at noon',
          options: ['We ate together at noon', 'We eat together daily', 'We will eat at noon', 'We are eating now'],
          explanation: 'ⲁⲛⲟⲩⲱⲙ ⲛⲉⲙⲁⲛ ϧⲉⲛ ⲡⲓⲙⲉⲣⲓ = we ate together at noon (past tense)'
        }
      ]
    }
  ]
};

export default unit34;
