import { Unit } from '../../types';

// UNIT 42: MARKET & DAILY DIALOGUES
// Bohairic dialect - Practical everyday conversations
// Advanced application: Real-world communicative competence

const unit42: Unit = {
  id: 'unit-42',
  title: 'Market & Daily Dialogues',
  description: 'Practical conversations: shopping, directions, greetings, arrangements',
  order: 42,
  color: '#FF9800',
  lessons: [
    {
      id: 'lesson-42-1',
      unitId: 'unit-42',
      title: 'Shopping & Buying',
      description: 'Market conversations and transactions',
      order: 1,
      xpReward: 30,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-42-1-1',
          type: 'matching',
          question: 'Match shopping vocabulary',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ϯⲁⲅⲟⲣⲁ', english: 'the market' },
            { coptic: 'ⲡⲓϣⲱⲡⲓ', english: 'the shop/store' },
            { coptic: 'ⲡⲓⲱ̀ⲛⲓ', english: 'the price' },
            { coptic: 'ⲡⲓϣⲟⲡ', english: 'the purchase/buying' }
          ]
        },
        {
          id: 'ex-42-1-2',
          type: 'translation',
          question: 'Translate: Ⲟⲩⲏⲣ ⲡⲉ ⲡⲓⲱ̀ⲛⲓ ⲙ̀ⲡⲁⲓ?',
          questionCoptic: 'Ⲟⲩⲏⲣ ⲡⲉ ⲡⲓⲱ̀ⲛⲓ ⲙ̀ⲡⲁⲓ?',
          correctAnswer: 'What is the price of this?',
          options: ['What is the price of this?', 'How much is this?', 'This is the price', 'Is this expensive?'],
          explanation: 'Ⲟⲩⲏⲣ ⲡⲉ ⲡⲓⲱ̀ⲛⲓ ⲙ̀ⲡⲁⲓ? = what is the price of this? (ⲟⲩⲏⲣ = what, ⲱ̀ⲛⲓ = price)'
        },
        {
          id: 'ex-42-1-3',
          type: 'fill_blank',
          question: 'Complete: Ϯⲛⲁ___ ⲡⲁⲓ = I will buy this',
          correctAnswer: 'ϣⲟⲡ',
          options: ['ϣⲟⲡ', 'Ϯ', 'ϭⲓ', 'ⲱ̀ⲛⲓ'],
          explanation: 'Ϯⲛⲁϣⲟⲡ ⲡⲁⲓ = I will buy this (ϣⲟⲡ = to buy)'
        },
        {
          id: 'ex-42-1-4',
          type: 'sentence_building',
          question: 'Build: "Do you have bread?"',
          correctAnswer: 'Ⲟⲩⲟⲛⲧⲁⲕ ⲱⲓⲕ?',
          wordBank: ['Ⲟⲩⲟⲛⲧⲁⲕ', 'ⲱⲓⲕ', 'ⲙ̀ⲙⲁⲩ', 'ⲟⲩ'],
          explanation: 'Ⲟⲩⲟⲛⲧⲁⲕ ⲱⲓⲕ? = do you have bread? (lit. \"there is to-you bread?\")'
        },
        {
          id: 'ex-42-1-5',
          type: 'translation',
          question: 'Translate: Ⲁⲓϣⲟⲡ ⲛ̀ϣⲟⲙⲧ ⲛ̀ⲱⲓⲕ',
          questionCoptic: 'Ⲁⲓϣⲟⲡ ⲛ̀ϣⲟⲙⲧ ⲛ̀ⲱⲓⲕ',
          correctAnswer: 'I bought three loaves',
          options: ['I bought three loaves', 'I will buy three loaves', 'Three loaves were bought', 'Buy three loaves'],
          explanation: 'Ⲁⲓϣⲟⲡ ⲛ̀ϣⲟⲙⲧ ⲛ̀ⲱⲓⲕ = I bought three loaves (ϣⲟⲙⲧ ⲛ̀ⲱⲓⲕ = three of bread)'
        },
        {
          id: 'ex-42-1-6',
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
          id: 'ex-42-1-7',
          type: 'translation',
          question: 'Translate: Ⲙⲁϯ ⲛⲏⲓ ⲙ̀ⲡⲓⲗⲁϩⲁⲛⲟⲛ',
          questionCoptic: 'Ⲙⲁϯ ⲛⲏⲓ ⲙ̀ⲡⲓⲗⲁϩⲁⲛⲟⲛ',
          correctAnswer: 'Give me the vegetables',
          options: ['Give me the vegetables', 'I gave vegetables', 'The vegetables are given', 'Take vegetables'],
          explanation: 'Ⲙⲁϯ ⲛⲏⲓ ⲙ̀ⲡⲓⲗⲁϩⲁⲛⲟⲛ = give me the vegetables (imperative + indirect object)'
        },
        {
          id: 'ex-42-1-8',
          type: 'multiple_choice',
          question: 'How do you say "too expensive"?',
          correctAnswer: 'ⲥⲁϣ ⲡⲓⲱ̀ⲛⲓ ⲙ̀ⲙⲁϣⲱ',
          options: ['ⲥⲁϣ ⲡⲓⲱ̀ⲛⲓ ⲙ̀ⲙⲁϣⲱ', 'ⲡⲓⲱ̀ⲛⲓ ⲛⲁⲛⲉϥ', 'ⲡⲓⲱ̀ⲛⲓ ⲕⲟⲩϫⲓ', 'ⲡⲓⲱ̀ⲛⲓ ϩⲟⲩⲟ̀'],
          explanation: 'ⲥⲁϣ ⲡⲓⲱ̀ⲛⲓ ⲙ̀ⲙⲁϣⲱ = the price is very expensive (ⲥⲁϣ = expensive, ⲙ̀ⲙⲁϣⲱ = very)'
        }
      ]
    },
    {
      id: 'lesson-42-2',
      unitId: 'unit-42',
      title: 'Asking for Directions',
      description: 'Navigate and give directions',
      order: 2,
      xpReward: 30,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-42-2-1',
          type: 'matching',
          question: 'Match direction vocabulary',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲥⲁⲟⲩⲓ̀ⲛⲁⲙ', english: 'right side' },
            { coptic: 'ⲥⲁϩ̀ⲃⲟⲩⲣ', english: 'left side' },
            { coptic: 'ⲉ̀ⲑ̀ⲏ', english: 'forward/ahead' },
            { coptic: 'ⲉ̀ⲫⲁϩⲟⲩ', english: 'backward/behind' }
          ]
        },
        {
          id: 'ex-42-2-2',
          type: 'translation',
          question: 'Translate: Ⲑⲱⲛ ⲡⲉ ⲡⲓⲏⲓ?',
          questionCoptic: 'Ⲑⲱⲛ ⲡⲉ ⲡⲓⲏⲓ?',
          correctAnswer: 'Where is the house?',
          options: ['Where is the house?', 'What is the house?', 'Who is at the house?', 'When is the house?'],
          explanation: 'Ⲑⲱⲛ ⲡⲉ ⲡⲓⲏⲓ? = where is the house? (ⲑⲱⲛ = where)'
        },
        {
          id: 'ex-42-2-3',
          type: 'fill_blank',
          question: 'Complete: Ⲙⲟϣⲓ ___ = Walk forward',
          correctAnswer: 'ⲉ̀ⲑ̀ⲏ',
          options: ['ⲉ̀ⲑ̀ⲏ', 'ⲉ̀ⲫⲁϩⲟⲩ', 'ⲥⲁⲟⲩⲓ̀ⲛⲁⲙ', 'ⲥⲁϩ̀ⲃⲟⲩⲣ'],
          explanation: 'Ⲙⲟϣⲓ ⲉ̀ⲑ̀ⲏ = walk forward/ahead (imperative + direction)'
        },
        {
          id: 'ex-42-2-4',
          type: 'sentence_building',
          question: 'Build: "Turn to the right"',
          correctAnswer: 'Ⲕⲱϯ ⲥⲁⲟⲩⲓ̀ⲛⲁⲙ',
          wordBank: ['Ⲕⲱϯ', 'ⲥⲁⲟⲩⲓ̀ⲛⲁⲙ', 'ⲥⲁϩ̀ⲃⲟⲩⲣ', 'ⲉ̀ⲑ̀ⲏ'],
          explanation: 'Ⲕⲱϯ ⲥⲁⲟⲩⲓ̀ⲛⲁⲙ = turn to the right (ⲕⲱϯ = to turn)'
        },
        {
          id: 'ex-42-2-5',
          type: 'translation',
          question: 'Translate: Ⲡⲓⲏⲓ ϧⲉⲛ ⲡⲁⲓⲙⲁ ⲥⲁⲟⲩⲓ̀ⲛⲁⲙ',
          questionCoptic: 'Ⲡⲓⲏⲓ ϧⲉⲛ ⲡⲁⲓⲙⲁ ⲥⲁⲟⲩⲓ̀ⲛⲁⲙ',
          correctAnswer: 'The house is in this place on the right',
          options: ['The house is in this place on the right', 'Turn right at this house', 'This is the right house', 'The house is nearby'],
          explanation: 'Ⲡⲓⲏⲓ ϧⲉⲛ ⲡⲁⲓⲙⲁ ⲥⲁⲟⲩⲓ̀ⲛⲁⲙ = the house is in this place on the right'
        },
        {
          id: 'ex-42-2-6',
          type: 'matching',
          question: 'Match location prepositions',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ϧⲁⲧⲉⲛ', english: 'under/below' },
            { coptic: 'ϩⲓϫⲉⲛ', english: 'on/upon' },
            { coptic: 'ϧⲉⲛ', english: 'in/inside' },
            { coptic: 'ϩⲓⲣⲉⲛ', english: 'near/beside' }
          ]
        },
        {
          id: 'ex-42-2-7',
          type: 'translation',
          question: 'Translate: Ⲥⲁⲃⲟⲛⲓ ⲙ̀ⲙⲟⲓ ⲉ̀ⲡⲓⲙⲁ',
          questionCoptic: 'Ⲥⲁⲃⲟⲛⲓ ⲙ̀ⲙⲟⲓ ⲉ̀ⲡⲓⲙⲁ',
          correctAnswer: 'Show me the place',
          options: ['Show me the place', 'I showed the place', 'The place is shown', 'Go to the place'],
          explanation: 'Ⲥⲁⲃⲟⲛⲓ ⲙ̀ⲙⲟⲓ ⲉ̀ⲡⲓⲙⲁ = show me the place (ⲥⲁⲃⲟⲛⲓ = to show, teach)'
        },
        {
          id: 'ex-42-2-8',
          type: 'multiple_choice',
          question: 'How far is "ⲟⲩϩⲱⲟⲩ"?',
          correctAnswer: 'far away',
          options: ['far away', 'nearby', 'very close', 'right here'],
          explanation: 'ⲟⲩϩⲱⲟⲩ (u-hoo-u) = far away, distant'
        }
      ]
    },
    {
      id: 'lesson-42-3',
      unitId: 'unit-42',
      title: 'Greetings & Introductions',
      description: 'Meet people and introduce yourself',
      order: 3,
      xpReward: 35,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-42-3-1',
          type: 'matching',
          question: 'Match daily greetings',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'Ⲛⲁⲛⲉⲥⲑⲉ ⲛ̀ⲧⲟⲟⲧⲕ?', english: 'How are you? (m)' },
            { coptic: 'Ⲛⲁⲛⲉⲥⲑⲉ ⲛ̀ⲧⲟ?', english: 'How are you? (f)' },
            { coptic: 'Ⲭⲉⲣⲉ', english: 'Hello/Greetings' },
            { coptic: 'Ⲟⲩϫⲁⲓ ϧⲉⲛ Ⲡϭⲟⲓⲥ', english: 'Farewell in the Lord' }
          ]
        },
        {
          id: 'ex-42-3-2',
          type: 'translation',
          question: 'Translate: Ⲛⲓⲙ ⲡⲉ ⲡⲉⲕⲣⲁⲛ?',
          questionCoptic: 'Ⲛⲓⲙ ⲡⲉ ⲡⲉⲕⲣⲁⲛ?',
          correctAnswer: 'What is your name?',
          options: ['What is your name?', 'Who are you?', 'What do you want?', 'Where are you from?'],
          explanation: 'Ⲛⲓⲙ ⲡⲉ ⲡⲉⲕⲣⲁⲛ? = what is your name? (lit. \"who is your name?\")'
        },
        {
          id: 'ex-42-3-3',
          type: 'fill_blank',
          question: 'Complete: Ⲡⲁⲣⲁⲛ ⲡⲉ ___ = My name is...',
          correctAnswer: '[name]',
          options: ['[name]', 'ⲡⲁⲣⲁⲛ', 'ⲡⲉⲕⲣⲁⲛ', 'ⲟⲩⲣⲁⲛ'],
          explanation: 'Ⲡⲁⲣⲁⲛ ⲡⲉ [name] = my name is [name] (ⲡⲁⲣⲁⲛ = my name)'
        },
        {
          id: 'ex-42-3-4',
          type: 'sentence_building',
          question: 'Build: "I am well, thank you"',
          correctAnswer: 'Ⲕⲁⲗⲱⲥ, Ϣⲉⲡϩ̀ⲙⲟⲧ',
          wordBank: ['Ⲕⲁⲗⲱⲥ', 'Ϣⲉⲡϩ̀ⲙⲟⲧ', 'ⲛⲁⲛⲉⲥ', 'ϧⲉⲛ'],
          explanation: 'Ⲕⲁⲗⲱⲥ, Ϣⲉⲡϩ̀ⲙⲟⲧ = well/good, thank you (Ϣⲉⲡϩ̀ⲙⲟⲧ = receive grace/thanks)'
        },
        {
          id: 'ex-42-3-5',
          type: 'translation',
          question: 'Translate: Ⲣⲁϣⲓ ϧⲉⲛ ⲡⲓⲥⲟⲩⲱⲛ ⲙ̀ⲙⲱⲕ',
          questionCoptic: 'Ⲣⲁϣⲓ ϧⲉⲛ ⲡⲓⲥⲟⲩⲱⲛ ⲙ̀ⲙⲱⲕ',
          correctAnswer: 'Pleased to meet you / Happy in knowing you',
          options: ['Pleased to meet you / Happy in knowing you', 'I know you well', 'Do you know me?', 'We should meet'],
          explanation: 'Ⲣⲁϣⲓ ϧⲉⲛ ⲡⲓⲥⲟⲩⲱⲛ ⲙ̀ⲙⲱⲕ = happy in knowing you (ⲣⲁϣⲓ = to rejoice, ⲥⲟⲩⲱⲛ = knowing)'
        },
        {
          id: 'ex-42-3-6',
          type: 'matching',
          question: 'Match introductions',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'Ⲁⲛⲟⲕ ⲟⲩⲙⲁⲑⲏⲧⲏⲥ', english: 'I am a student' },
            { coptic: 'Ⲛ̀ⲑⲟⲕ ⲟⲩⲟⲩⲏⲃ?', english: 'Are you a priest?' },
            { coptic: 'Ⲛ̀ⲑⲟⲥ ⲟⲩⲥⲁϩ', english: 'She is a teacher (f)' },
            { coptic: 'Ⲁⲛⲟⲛ ϩⲁⲛⲭ̀ⲣⲓⲥⲧⲓⲁⲛⲟⲥ', english: 'We are Christians' }
          ]
        },
        {
          id: 'ex-42-3-7',
          type: 'translation',
          question: 'Translate: Ⲉⲕⲟⲩⲱϩ ϧⲉⲛ ⲁϣ ⲙ̀ⲙⲁ?',
          questionCoptic: 'Ⲉⲕⲟⲩⲱϩ ϧⲉⲛ ⲁϣ ⲙ̀ⲙⲁ?',
          correctAnswer: 'Where do you live? / In what place do you dwell?',
          options: ['Where do you live? / In what place do you dwell?', 'What place is this?', 'Do you live here?', 'Where is your house?'],
          explanation: 'Ⲉⲕⲟⲩⲱϩ ϧⲉⲛ ⲁϣ ⲙ̀ⲙⲁ? = where do you live? (ⲟⲩⲱϩ = to dwell, ⲁϣ ⲙ̀ⲙⲁ = what place)'
        },
        {
          id: 'ex-42-3-8',
          type: 'multiple_choice',
          question: 'How do you say "Nice to meet you"?',
          correctAnswer: 'Ⲣⲁϣⲓ ϧⲉⲛ ⲡⲓⲥⲟⲩⲱⲛ ⲙ̀ⲙⲱⲕ',
          options: ['Ⲣⲁϣⲓ ϧⲉⲛ ⲡⲓⲥⲟⲩⲱⲛ ⲙ̀ⲙⲱⲕ', 'Ⲭⲉⲣⲉ ⲛⲉⲙⲱⲕ', 'Ⲛⲁⲛⲉⲥⲑⲉ', 'Ϣⲉⲡϩ̀ⲙⲟⲧ'],
          explanation: 'Ⲣⲁϣⲓ ϧⲉⲛ ⲡⲓⲥⲟⲩⲱⲛ ⲙ̀ⲙⲱⲕ = happy in knowing you / pleased to meet you'
        }
      ]
    },
    {
      id: 'lesson-42-4',
      unitId: 'unit-42',
      title: 'Making Arrangements',
      description: 'Plan meetings and make appointments',
      order: 4,
      xpReward: 35,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-42-4-1',
          type: 'translation',
          question: 'Translate: Ⲑⲛⲁⲩ ⲁⲕⲛⲁϣⲉ?',
          questionCoptic: 'Ⲑⲛⲁⲩ ⲁⲕⲛⲁϣⲉ?',
          correctAnswer: 'When will you go?',
          options: ['When will you go?', 'Where will you go?', 'Why will you go?', 'How will you go?'],
          explanation: 'Ⲑⲛⲁⲩ ⲁⲕⲛⲁϣⲉ? = when will you go? (ⲑⲛⲁⲩ = when, future tense)'
        },
        {
          id: 'ex-42-4-2',
          type: 'matching',
          question: 'Match time expressions',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲥⲁϥ', english: 'yesterday' },
            { coptic: 'ⲫⲟⲟⲩ', english: 'today' },
            { coptic: 'ⲣⲁⲥϯ', english: 'tomorrow' },
            { coptic: 'ϯⲛⲟⲩ', english: 'now' }
          ]
        },
        {
          id: 'ex-42-4-3',
          type: 'fill_blank',
          question: 'Complete: Ϯⲛⲁⲓ̀ ___ = I will come tomorrow',
          correctAnswer: 'ⲣⲁⲥϯ',
          options: ['ⲣⲁⲥϯ', 'ⲥⲁϥ', 'ⲫⲟⲟⲩ', 'ϯⲛⲟⲩ'],
          explanation: 'Ϯⲛⲁⲓ̀ ⲣⲁⲥϯ = I will come tomorrow (ⲣⲁⲥϯ = tomorrow)'
        },
        {
          id: 'ex-42-4-4',
          type: 'sentence_building',
          question: 'Build: "Let us meet today"',
          correctAnswer: 'Ⲙⲁⲣⲉⲛⲧⲱⲟⲩϯ ⲙ̀ⲫⲟⲟⲩ',
          wordBank: ['Ⲙⲁⲣⲉⲛ', 'ⲧⲱⲟⲩϯ', 'ⲙ̀ⲫⲟⲟⲩ', 'ⲣⲁⲥϯ'],
          explanation: 'Ⲙⲁⲣⲉⲛⲧⲱⲟⲩϯ ⲙ̀ⲫⲟⲟⲩ = let us meet today (ⲙⲁⲣⲉⲛ- = let us, ⲧⲱⲟⲩϯ = to meet)'
        },
        {
          id: 'ex-42-4-5',
          type: 'translation',
          question: 'Translate: Ⲁϫⲡ ⲁϣ ⲁⲕⲛⲁⲓ̀?',
          questionCoptic: 'Ⲁϫⲡ ⲁϣ ⲁⲕⲛⲁⲓ̀?',
          correctAnswer: 'What time will you come?',
          options: ['What time will you come?', 'When did you come?', 'Where will you come?', 'How will you come?'],
          explanation: 'Ⲁϫⲡ ⲁϣ ⲁⲕⲛⲁⲓ̀? = at what hour will you come? (ⲁϫⲡ ⲁϣ = what hour/time)'
        },
        {
          id: 'ex-42-4-6',
          type: 'matching',
          question: 'Match arrangement vocabulary',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲙⲁⲣⲉⲛ-', english: 'let us (hortative)' },
            { coptic: 'ⲧⲱⲟⲩϯ', english: 'to meet/gather' },
            { coptic: 'ϣⲉⲛⲓ', english: 'to go' },
            { coptic: 'ϭⲱ', english: 'to wait/remain' }
          ]
        },
        {
          id: 'ex-42-4-7',
          type: 'translation',
          question: 'Translate: Ⲁⲣⲓⲱⲟⲩ ⲛⲏⲓ ϧⲁⲧⲉⲛ ⲡⲓⲏⲓ',
          questionCoptic: 'Ⲁⲣⲓⲱⲟⲩ ⲛⲏⲓ ϧⲁⲧⲉⲛ ⲡⲓⲏⲓ',
          correctAnswer: 'Wait for me at the house',
          options: ['Wait for me at the house', 'I waited at the house', 'Meet me at the house', 'Come to my house'],
          explanation: 'Ⲁⲣⲓⲱⲟⲩ ⲛⲏⲓ ϧⲁⲧⲉⲛ ⲡⲓⲏⲓ = wait for me at the house (ⲁⲣⲓⲱⲟⲩ = imperative wait)'
        },
        {
          id: 'ex-42-4-8',
          type: 'multiple_choice',
          question: 'What does "ⲙⲁⲣⲉⲛϣⲉⲛⲁⲛ" mean?',
          correctAnswer: 'Let us go',
          options: ['Let us go', 'We went', 'We will go', 'Go away'],
          explanation: 'ⲙⲁⲣⲉⲛϣⲉⲛⲁⲛ = let us go (ⲙⲁⲣⲉⲛ- = let us + ϣⲉⲛⲁⲛ = go-we, hortative mood)'
        }
      ]
    }
  ]
};

export default unit42;
