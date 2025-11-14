import { Unit } from '../../types';

// UNIT 30: READING & COMPOSITION
// Verified for Bohairic dialect consistency
// Integrative unit: reading passages, composition, conversation

const unit30: Unit = {
  id: 'unit-30',
  title: 'Reading & Composition',
  description: 'Practice reading, writing, and composing in Coptic',
  order: 30,
  color: '#FF9600',
  lessons: [
    {
      id: 'lesson-30-1',
      unitId: 'unit-30',
      title: 'Reading Comprehension - A Letter',
      description: 'Read and understand a complete Coptic letter',
      order: 1,
      xpReward: 60,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-30-1-1',
          type: 'translation',
          question: 'Read the opening: ⲡⲁⲥⲟⲛ ⲙⲙⲉⲛⲣⲏⲧ ⲡⲁⲩⲗⲟⲥ ϣⲁϥⲉⲣⲁⲥⲡⲁⲍⲉⲥⲑⲉ ⲙ̀ⲙⲱⲧⲉⲛ',
          questionCoptic: 'ⲡⲁⲥⲟⲛ ⲙⲙⲉⲛⲣⲏⲧ ⲡⲁⲩⲗⲟⲥ ϣⲁϥⲉⲣⲁⲥⲡⲁⲍⲉⲥⲑⲉ ⲙ̀ⲙⲱⲧⲉⲛ',
          correctAnswer: 'My beloved brother Paul greets you',
          options: ['My beloved brother Paul greets you', 'Brother Paul loves you', 'Paul your beloved greets', 'My dear Paul says hello'],
          explanation: 'ⲡⲁⲥⲟⲛ ⲙⲙⲉⲛⲣⲏⲧ = my beloved brother + ⲡⲁⲩⲗⲟⲥ = Paul + ϣⲁϥⲉⲣⲁⲥⲡⲁⲍⲉⲥⲑⲉ ⲙ̀ⲙⲱⲧⲉⲛ = he greets you'
        },
        {
          id: 'ex-30-1-2',
          type: 'multiple_choice',
          question: 'What does ⲁⲥⲡⲁⲍⲉⲥⲑⲉ mean?',
          questionCoptic: 'ⲁⲥⲡⲁⲍⲉⲥⲑⲉ',
          correctAnswer: 'to greet/salute',
          options: ['to greet/salute', 'to write', 'to visit', 'to bless'],
          explanation: 'ⲁⲥⲡⲁⲍⲉⲥⲑⲉ (aspazesthe, from Greek) = to greet, to salute'
        },
        {
          id: 'ex-30-1-3',
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
          id: 'ex-30-1-4',
          type: 'translation',
          question: 'Translate: ϯⲥ̀ϧⲁⲓ ⲛⲁⲕ ϩⲓⲛⲁ ⲛⲧⲉⲕⲉⲙⲓ ⲉⲑⲃⲉ ⲡⲉⲛⲁϩⲓ',
          questionCoptic: 'ϯⲥ̀ϧⲁⲓ ⲛⲁⲕ ϩⲓⲛⲁ ⲛⲧⲉⲕⲉⲙⲓ ⲉⲑⲃⲉ ⲡⲉⲛⲁϩⲓ',
          correctAnswer: 'I write to you so that you may know about our situation',
          options: ['I write to you so that you may know about our situation', 'I tell you to know our life', 'Writing to inform you of our condition', 'I write for you to learn of us'],
          explanation: 'ϯⲥ̀ϧⲁⲓ ⲛⲁⲕ = I write to you + ϩⲓⲛⲁ ⲛⲧⲉⲕⲉⲙⲓ = so that you may know + ⲉⲑⲃⲉ ⲡⲉⲛⲁϩⲓ = about our situation (Bohairic ⲥ̀ϧⲁⲓ not ⲥϩⲁⲓ!)'
        },
        {
          id: 'ex-30-1-5',
          type: 'sentence_building',
          question: 'Build: "We are all well"',
          correctAnswer: 'ⲧⲉⲛⲟⲓ ⲛ̀ⲣⲉⲙⲣⲁϣ ⲧⲏⲣⲉⲛ',
          wordBank: ['ⲧⲉⲛⲟⲓ', 'ⲛ̀ⲣⲉⲙⲣⲁϣ', 'ⲧⲏⲣⲉⲛ', 'ⲧⲏⲣⲟⲩ'],
          explanation: 'ⲧⲉⲛⲟⲓ ⲛ̀ⲣⲉⲙⲣⲁϣ = we are well (literally "happy ones") + ⲧⲏⲣⲉⲛ = all of us'
        },
        {
          id: 'ex-30-1-6',
          type: 'multiple_choice',
          question: 'A typical letter closing would be:',
          correctAnswer: 'ϧⲉⲛ ⲫⲣⲁⲛ ⲙⲡϭⲟⲓⲥ (In the Lord\'s name)',
          options: ['ϧⲉⲛ ⲫⲣⲁⲛ ⲙⲡϭⲟⲓⲥ (In the Lord\'s name)', 'ⲁⲙⲏⲛ (Amen)', 'ⲉⲛⲉϩ (Forever)', 'All of the above'],
          explanation: 'Coptic letters typically close with Christian formulas invoking the Lord\'s name or blessing'
        },
        {
          id: 'ex-30-1-7',
          type: 'fill_blank',
          question: 'Complete letter closing: ⲟⲩϫⲁⲓ ϧⲉⲛ ___ = Farewell in the Lord',
          correctAnswer: 'ⲡϭⲟⲓⲥ',
          options: ['ⲡϭⲟⲓⲥ', 'ⲫϯ', 'ⲡⲉⲭⲣⲓⲥⲧⲟⲥ', 'ⲡⲓⲡ̀ⲛⲉⲩⲙⲁ'],
          explanation: 'ⲟⲩϫⲁⲓ ϧⲉⲛ ⲡϭⲟⲓⲥ = farewell in the Lord - common Christian letter closing'
        },
        {
          id: 'ex-30-1-8',
          type: 'translation',
          question: 'Translate: ⲁⲣⲓⲡⲁⲙⲉⲩⲓ ⲛ̀ⲧⲁⲥⲱⲛⲓ ⲛⲉⲙ ⲛⲉⲥϣⲏⲣⲓ',
          questionCoptic: 'ⲁⲣⲓⲡⲁⲙⲉⲩⲓ ⲛ̀ⲧⲁⲥⲱⲛⲓ ⲛⲉⲙ ⲛⲉⲥϣⲏⲣⲓ',
          correctAnswer: 'Remember my sister and her children',
          options: ['Remember my sister and her children', 'Think of my sister with her sons', 'My sister and children remember', 'Remind my sister of her children'],
          explanation: 'ⲁⲣⲓⲡⲁⲙⲉⲩⲓ = remember + ⲛ̀ⲧⲁⲥⲱⲛⲓ = my sister + ⲛⲉⲙ ⲛⲉⲥϣⲏⲣⲓ = and her children (Bohairic: ⲥⲱⲛⲓ not ⲥⲱⲛⲉ, ϣⲏⲣⲓ not ⲥⲏⲣⲓ!)'
        }
      ]
    },
    {
      id: 'lesson-30-2',
      unitId: 'unit-30',
      title: 'Writing Simple Sentences',
      description: 'Compose your own Coptic sentences',
      order: 2,
      xpReward: 60,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-30-2-1',
          type: 'sentence_building',
          question: 'Write: "I love reading"',
          correctAnswer: 'ϯⲙⲉⲛⲣⲉ ⲙ̀ⲡⲓⲱϣ',
          wordBank: ['ϯⲙⲉⲛⲣⲉ', 'ⲙ̀ⲡⲓⲱϣ', 'ⲙⲡⲓⲥ̀ϧⲁⲓ', 'ⲙ̀ⲙⲟϥ'],
          explanation: 'ϯⲙⲉⲛⲣⲉ = I love + ⲙ̀ⲡⲓⲱϣ = the reading (verbal noun) - Bohairic ⲙⲉⲛⲣⲉ not ⲙⲉⲣⲓ!'
        },
        {
          id: 'ex-30-2-2',
          type: 'sentence_building',
          question: 'Write: "My father is a teacher"',
          correctAnswer: 'ⲡⲁⲓⲱⲧ ⲟⲩⲣⲉϥⲧ̀ⲥⲁⲃⲟ ⲡⲉ',
          wordBank: ['ⲡⲁⲓⲱⲧ', 'ⲟⲩⲣⲉϥⲧ̀ⲥⲁⲃⲟ', 'ⲡⲉ', 'ⲧⲉ'],
          explanation: 'ⲡⲁⲓⲱⲧ = my father + ⲟⲩⲣⲉϥⲧ̀ⲥⲁⲃⲟ ⲡⲉ = is a teacher (masculine copula)'
        },
        {
          id: 'ex-30-2-3',
          type: 'sentence_building',
          question: 'Write: "We will go to church tomorrow"',
          correctAnswer: 'ⲧⲉⲛⲛⲁϣⲉⲛⲓ ⲉϯⲉⲕⲕⲗⲏⲥⲓⲁ ⲣⲁⲥϯ',
          wordBank: ['ⲧⲉⲛⲛⲁϣⲉⲛⲓ', 'ⲉϯⲉⲕⲕⲗⲏⲥⲓⲁ', 'ⲣⲁⲥϯ', 'ⲙⲫⲟⲟⲩ'],
          explanation: 'ⲧⲉⲛⲛⲁϣⲉⲛⲓ = we will go + ⲉϯⲉⲕⲕⲗⲏⲥⲓⲁ = to the church + ⲣⲁⲥϯ = tomorrow (Bohairic ϣⲉⲛⲓ not ⲃⲱⲕ!)'
        },
        {
          id: 'ex-30-2-4',
          type: 'sentence_building',
          question: 'Write: "The children are playing in the house"',
          correctAnswer: 'ⲛⲓϣⲏⲣⲓ ⲥⲉⲥⲱⲃⲉ ϧⲉⲛ ⲡⲓⲏⲓ',
          wordBank: ['ⲛⲓϣⲏⲣⲓ', 'ⲥⲉⲥⲱⲃⲉ', 'ϧⲉⲛ', 'ⲡⲓⲏⲓ'],
          explanation: 'ⲛⲓϣⲏⲣⲓ = the children + ⲥⲉⲥⲱⲃⲉ = they play + ϧⲉⲛ ⲡⲓⲏⲓ = in the house (Bohairic ϣⲏⲣⲓ not ⲥⲏⲣⲓ!)'
        },
        {
          id: 'ex-30-2-5',
          type: 'sentence_building',
          question: 'Write: "She was reading the book"',
          correctAnswer: 'ⲛⲁⲥⲱϣ ⲙ̀ⲡⲓϫⲱⲙ',
          wordBank: ['ⲛⲁⲥⲱϣ', 'ⲙ̀ⲡⲓϫⲱⲙ', 'ⲁⲥⲱϣ', 'ⲛ̀ⲟⲩϫⲱⲙ'],
          explanation: 'ⲛⲁⲥⲱϣ = she was reading (past continuous) + ⲙ̀ⲡⲓϫⲱⲙ = the book'
        },
        {
          id: 'ex-30-2-6',
          type: 'sentence_building',
          question: 'Write: "Before I came, they left"',
          correctAnswer: 'ⲙⲡⲁⲧⲓⲓ̀ ⲁⲩϣⲉⲛⲱⲟⲩ',
          wordBank: ['ⲙⲡⲁⲧⲓⲓ̀', 'ⲁⲩϣⲉⲛⲱⲟⲩ', 'ⲙⲉⲛⲉⲛⲥⲁ', 'ⲉⲃⲟⲗ'],
          explanation: 'ⲙⲡⲁⲧⲓⲓ̀ = before I came + ⲁⲩϣⲉⲛⲱⲟⲩ = they went (Bohairic: ⲓ̀ not ⲉⲓ, ϣⲉⲛⲓ not ⲃⲱⲕ!)'
        },
        {
          id: 'ex-30-2-7',
          type: 'sentence_building',
          question: 'Write: "God made us to love him"',
          correctAnswer: 'ⲫϯ ⲁϥⲧⲁⲙⲟⲛ ⲉⲙⲉⲛⲣⲉ ⲙ̀ⲙⲟϥ',
          wordBank: ['ⲫϯ', 'ⲁϥⲧⲁⲙⲟⲛ', 'ⲉⲙⲉⲛⲣⲉ', 'ⲙ̀ⲙⲟϥ'],
          explanation: 'ⲫϯ = God + ⲁϥⲧⲁⲙⲟⲛ = he made us + ⲉⲙⲉⲛⲣⲉ ⲙ̀ⲙⲟϥ = to love him (Bohairic: ⲫϯ not ⲫⲛⲟⲩϯ, ⲙⲉⲛⲣⲉ not ⲙⲉⲣⲓ!)'
        },
        {
          id: 'ex-30-2-8',
          type: 'sentence_building',
          question: 'Write: "I write so that you may believe"',
          correctAnswer: 'ϯⲥ̀ϧⲁⲓ ϩⲓⲛⲁ ⲛⲧⲉⲕⲛⲁϩϯ',
          wordBank: ['ϯⲥ̀ϧⲁⲓ', 'ϩⲓⲛⲁ', 'ⲛⲧⲉⲕⲛⲁϩϯ', 'ⲉⲑⲃⲉ'],
          explanation: 'ϯⲥ̀ϧⲁⲓ = I write + ϩⲓⲛⲁ ⲛⲧⲉⲕⲛⲁϩϯ = so that you may believe (purpose clause) - Bohairic ⲥ̀ϧⲁⲓ not ⲥϩⲁⲓ!'
        }
      ]
    },
    {
      id: 'lesson-30-3',
      unitId: 'unit-30',
      title: 'Composing a Prayer',
      description: 'Write your own prayer in Coptic',
      order: 3,
      xpReward: 60,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-30-3-1',
          type: 'sentence_building',
          question: 'Begin: "O Lord my God"',
          correctAnswer: 'ⲱ ⲡϭⲟⲓⲥ ⲡⲁⲛⲟⲩϯ',
          wordBank: ['ⲱ', 'ⲡϭⲟⲓⲥ', 'ⲡⲁⲛⲟⲩϯ', 'ⲡⲉⲛⲓⲱⲧ'],
          explanation: 'ⲱ = O (vocative) + ⲡϭⲟⲓⲥ = Lord + ⲡⲁⲛⲟⲩϯ = my God'
        },
        {
          id: 'ex-30-3-2',
          type: 'sentence_building',
          question: 'Add: "I thank you"',
          correctAnswer: 'ϯϣⲉⲡϩⲙⲟⲧ ⲛⲧⲟⲧⲕ',
          wordBank: ['ϯϣⲉⲡϩⲙⲟⲧ', 'ⲛⲧⲟⲧⲕ', 'ⲙ̀ⲙⲟⲕ', 'ⲛⲁⲕ'],
          explanation: 'ϯϣⲉⲡϩⲙⲟⲧ ⲛⲧⲟⲧⲕ = I give thanks to you'
        },
        {
          id: 'ex-30-3-3',
          type: 'sentence_building',
          question: 'Add: "for all your blessings"',
          correctAnswer: 'ⲉⲑⲃⲉ ⲛⲉⲕⲥⲙⲟⲩ ⲧⲏⲣⲟⲩ',
          wordBank: ['ⲉⲑⲃⲉ', 'ⲛⲉⲕⲥⲙⲟⲩ', 'ⲧⲏⲣⲟⲩ', 'ⲛⲓⲃⲉⲛ'],
          explanation: 'ⲉⲑⲃⲉ = because of/for + ⲛⲉⲕⲥⲙⲟⲩ = your blessings + ⲧⲏⲣⲟⲩ = all'
        },
        {
          id: 'ex-30-3-4',
          type: 'sentence_building',
          question: 'Add petition: "Hear my prayer"',
          correctAnswer: 'ⲥⲱⲧⲙ ⲉⲧⲁⲡⲣⲟⲥⲉⲩⲭⲏ',
          wordBank: ['ⲥⲱⲧⲙ', 'ⲉⲧⲁⲡⲣⲟⲥⲉⲩⲭⲏ', 'ⲙ̀ⲙⲟⲓ', 'ⲉⲣⲟⲓ'],
          explanation: 'ⲥⲱⲧⲙ = hear (imperative) + ⲉⲧⲁⲡⲣⲟⲥⲉⲩⲭⲏ = my prayer'
        },
        {
          id: 'ex-30-3-5',
          type: 'sentence_building',
          question: 'Add: "and have mercy on me"',
          correctAnswer: 'ⲟⲩⲟϩ ⲛⲁⲓ ⲛⲏⲓ',
          wordBank: ['ⲟⲩⲟϩ', 'ⲛⲁⲓ', 'ⲛⲏⲓ', 'ⲙ̀ⲙⲟⲓ'],
          explanation: 'ⲟⲩⲟϩ = and + ⲛⲁⲓ ⲛⲏⲓ = have mercy on me'
        },
        {
          id: 'ex-30-3-6',
          type: 'sentence_building',
          question: 'Add: "according to your great mercy"',
          correctAnswer: 'ⲕⲁⲧⲁ ⲡⲉⲕⲛⲓϣϯ ⲛ̀ⲛⲁⲓ',
          wordBank: ['ⲕⲁⲧⲁ', 'ⲡⲉⲕⲛⲓϣϯ', 'ⲛ̀ⲛⲁⲓ', 'ⲙ̀ⲙⲓⲗⲉⲟⲥ'],
          explanation: 'ⲕⲁⲧⲁ = according to + ⲡⲉⲕⲛⲓϣϯ ⲛ̀ⲛⲁⲓ = your great mercy'
        },
        {
          id: 'ex-30-3-7',
          type: 'sentence_building',
          question: 'Add closing: "Through Christ our Lord"',
          correctAnswer: 'ϩⲓⲧⲉⲛ ⲡⲓⲭⲣⲓⲥⲧⲟⲥ ⲡⲉⲛϭⲟⲓⲥ',
          wordBank: ['ϩⲓⲧⲉⲛ', 'ⲡⲓⲭⲣⲓⲥⲧⲟⲥ', 'ⲡⲉⲛϭⲟⲓⲥ', 'ⲁⲙⲏⲛ'],
          explanation: 'ϩⲓⲧⲉⲛ = through + ⲡⲓⲭⲣⲓⲥⲧⲟⲥ ⲡⲉⲛϭⲟⲓⲥ = Christ our Lord'
        },
        {
          id: 'ex-30-3-8',
          type: 'sentence_building',
          question: 'End: "Amen"',
          correctAnswer: 'ⲁⲙⲏⲛ',
          wordBank: ['ⲁⲙⲏⲛ', 'ⲁⲗⲗⲏⲗⲟⲩⲓⲁ', 'ⲁⲝⲓⲟⲥ', 'ⲉⲛⲉϩ'],
          explanation: 'ⲁⲙⲏⲛ (amen) = so be it - the universal prayer ending'
        }
      ]
    },
    {
      id: 'lesson-30-4',
      unitId: 'unit-30',
      title: 'Free Composition & Conversation',
      description: 'Practice composing and conversing freely',
      order: 4,
      xpReward: 60,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-30-4-1',
          type: 'sentence_building',
          question: 'Introduce yourself: "My name is..."',
          correctAnswer: 'ⲡⲁⲣⲁⲛ ⲡⲉ...',
          wordBank: ['ⲡⲁⲣⲁⲛ', 'ⲡⲉ', 'ⲧⲉ', 'ⲛⲉ'],
          explanation: 'ⲡⲁⲣⲁⲛ ⲡⲉ = my name is (masculine copula) - add your name after ⲡⲉ'
        },
        {
          id: 'ex-30-4-2',
          type: 'sentence_building',
          question: 'Express greeting: "Peace be with you"',
          correctAnswer: 'ϯϩⲓⲣⲏⲛⲏ ⲛⲉⲙⲱⲧⲉⲛ',
          wordBank: ['ϯϩⲓⲣⲏⲛⲏ', 'ⲛⲉⲙⲱⲧⲉⲛ', 'ⲛⲉⲙⲁⲕ', 'ⲛⲉⲙⲁϥ'],
          explanation: 'ϯϩⲓⲣⲏⲛⲏ ⲛⲉⲙⲱⲧⲉⲛ = the peace with you (plural) - traditional greeting'
        },
        {
          id: 'ex-30-4-3',
          type: 'sentence_building',
          question: 'Ask: "How are you?"',
          correctAnswer: 'ⲭⲛⲁϣⲧⲉ ⲉⲣⲟⲕ',
          wordBank: ['ⲭⲛⲁϣⲧⲉ', 'ⲉⲣⲟⲕ', 'ⲉⲣⲟ', 'ⲙ̀ⲙⲟⲕ'],
          explanation: 'ⲭⲛⲁϣⲧⲉ ⲉⲣⲟⲕ = how are you? (literally "what about you?")'
        },
        {
          id: 'ex-30-4-4',
          type: 'sentence_building',
          question: 'Answer: "I am well, thank you"',
          correctAnswer: 'ϯⲟⲓ ⲕⲁⲗⲱⲥ ϣⲉⲡϩⲙⲟⲧ',
          wordBank: ['ϯⲟⲓ', 'ⲕⲁⲗⲱⲥ', 'ϣⲉⲡϩⲙⲟⲧ', 'ⲛⲁⲛⲉϥ'],
          explanation: 'ϯⲟⲓ ⲕⲁⲗⲱⲥ = I am well + ϣⲉⲡϩⲙⲟⲧ = thanks'
        },
        {
          id: 'ex-30-4-5',
          type: 'sentence_building',
          question: 'Describe: "Today is a good day"',
          correctAnswer: 'ⲫⲟⲟⲩ ⲟⲩⲉϩⲟⲟⲩ ⲉⲛⲁⲛⲉϥ ⲡⲉ',
          wordBank: ['ⲫⲟⲟⲩ', 'ⲟⲩⲉϩⲟⲟⲩ', 'ⲉⲛⲁⲛⲉϥ', 'ⲡⲉ'],
          explanation: 'ⲫⲟⲟⲩ = today + ⲟⲩⲉϩⲟⲟⲩ ⲉⲛⲁⲛⲉϥ ⲡⲉ = is a good day'
        },
        {
          id: 'ex-30-4-6',
          type: 'sentence_building',
          question: 'Express desire: "I want to learn more"',
          correctAnswer: 'ϯⲟⲩⲱϣ ⲉⲉⲙⲓ ⲛ̀ϩⲟⲩⲟ',
          wordBank: ['ϯⲟⲩⲱϣ', 'ⲉⲉⲙⲓ', 'ⲛ̀ϩⲟⲩⲟ', 'ⲉⲃⲟⲗ'],
          explanation: 'ϯⲟⲩⲱϣ = I want + ⲉⲉⲙⲓ = to know + ⲛ̀ϩⲟⲩⲟ = more'
        },
        {
          id: 'ex-30-4-7',
          type: 'sentence_building',
          question: 'State intention: "I will study every day"',
          correctAnswer: 'ϯⲛⲁⲉⲙⲓ ⲙ̀ⲙⲏⲛⲓ ⲛⲓⲃⲉⲛ',
          wordBank: ['ϯⲛⲁⲉⲙⲓ', 'ⲙ̀ⲙⲏⲛⲓ', 'ⲛⲓⲃⲉⲛ', 'ⲧⲏⲣⲟⲩ'],
          explanation: 'ϯⲛⲁⲉⲙⲓ = I will learn/study + ⲙ̀ⲙⲏⲛⲓ ⲛⲓⲃⲉⲛ = every day'
        },
        {
          id: 'ex-30-4-8',
          type: 'sentence_building',
          question: 'Express completion: "I have finished this course"',
          correctAnswer: 'ⲁⲓϫⲱⲕ ⲉⲃⲟⲗ ⲙ̀ⲡⲁⲓⲕⲩⲣⲥⲟⲥ',
          wordBank: ['ⲁⲓϫⲱⲕ', 'ⲉⲃⲟⲗ', 'ⲙ̀ⲡⲁⲓⲕⲩⲣⲥⲟⲥ', 'ⲛⲉⲙ'],
          explanation: 'ⲁⲓϫⲱⲕ ⲉⲃⲟⲗ = I have completed + ⲙ̀ⲡⲁⲓⲕⲩⲣⲥⲟⲥ = this course - Congratulations! You have completed all 30 units of Bohairic Coptic!'
        }
      ]
    }
  ]
};

export default unit30;
