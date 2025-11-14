import { Unit } from '../../types';

// UNIT 27: THE LORD'S PRAYER (ⲡⲉⲛⲓⲱⲧ)
// Verified for Bohairic dialect consistency
// Complete study from basic learning to deep grammatical analysis

const unit27: Unit = {
  id: 'unit-27',
  title: 'The Lord\'s Prayer',
  description: 'Learn and analyze the most important Christian prayer: ⲡⲉⲛⲓⲱⲧ',
  order: 27,
  color: '#FFD700',
  lessons: [
    // BASIC LORD'S PRAYER LESSONS (from archived unit-15)
    {
      id: 'lesson-27-1',
      unitId: 'unit-27',
      title: 'Opening Address',
      description: 'Our Father who art in heaven',
      order: 1,
      xpReward: 30,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-27-1-1',
          type: 'translation',
          question: 'Translate: ⲡⲉⲛⲓⲱⲧ',
          questionCoptic: 'ⲡⲉⲛⲓⲱⲧ',
          correctAnswer: 'Our Father',
          options: ['Our Father', 'My Father', 'Your Father', 'The Father'],
          explanation: 'ⲡⲉⲛⲓⲱⲧ = ⲡⲉⲛ (our) + ⲓⲱⲧ (father) - the opening of the Lord\'s Prayer'
        },
        {
          id: 'ex-27-1-2',
          type: 'multiple_choice',
          question: 'What does ⲉⲧϧⲉⲛ ⲛⲓⲫⲏⲟⲩⲓ mean?',
          questionCoptic: 'ⲉⲧϧⲉⲛ ⲛⲓⲫⲏⲟⲩⲓ',
          correctAnswer: 'who art in heaven',
          options: ['who art in heaven', 'in the earth', 'in the church', 'with the angels'],
          explanation: 'ⲉⲧϧⲉⲛ ⲛⲓⲫⲏⲟⲩⲓ = who/which (is) in the heavens'
        },
        {
          id: 'ex-27-1-3',
          type: 'matching',
          question: 'Match prayer components',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲡⲉⲛⲓⲱⲧ', english: 'our father' },
            { coptic: 'ⲉⲧϧⲉⲛ', english: 'who is in' },
            { coptic: 'ⲛⲓⲫⲏⲟⲩⲓ', english: 'the heavens' },
            { coptic: 'ⲫⲉ', english: 'heaven/sky' }
          ]
        },
        {
          id: 'ex-27-1-4',
          type: 'sentence_building',
          question: 'Build: "Our Father who art in heaven"',
          correctAnswer: 'ⲡⲉⲛⲓⲱⲧ ⲉⲧϧⲉⲛ ⲛⲓⲫⲏⲟⲩⲓ',
          wordBank: ['ⲡⲉⲛⲓⲱⲧ', 'ⲉⲧϧⲉⲛ', 'ⲛⲓⲫⲏⲟⲩⲓ', 'ⲙⲙⲟⲛ'],
          explanation: 'ⲡⲉⲛⲓⲱⲧ ⲉⲧϧⲉⲛ ⲛⲓⲫⲏⲟⲩⲓ is the complete opening phrase'
        },
        {
          id: 'ex-27-1-5',
          type: 'multiple_choice',
          question: 'What is "heaven" (singular) in Coptic?',
          correctAnswer: 'ⲫⲉ',
          options: ['ⲫⲉ', 'ⲕⲁϩⲓ', 'ⲫⲓⲟⲙ', 'ⲡⲟⲗⲓⲥ'],
          explanation: 'ⲫⲉ (ve) means "heaven" or "sky" - the plural is ⲛⲓⲫⲏⲟⲩⲓ'
        },
        {
          id: 'ex-27-1-6',
          type: 'fill_blank',
          question: 'Complete: ___ ⲉⲧϧⲉⲛ ⲛⲓⲫⲏⲟⲩⲓ = Our Father in heaven',
          correctAnswer: 'ⲡⲉⲛⲓⲱⲧ',
          options: ['ⲡⲉⲛⲓⲱⲧ', 'ⲡⲁⲓⲱⲧ', 'ⲫⲓⲱⲧ', 'ⲡⲟⲩⲓⲱⲧ'],
          explanation: 'ⲡⲉⲛⲓⲱⲧ (our father) begins the prayer'
        },
        {
          id: 'ex-27-1-7',
          type: 'translation',
          question: 'Translate: ⲛⲓⲫⲏⲟⲩⲓ',
          questionCoptic: 'ⲛⲓⲫⲏⲟⲩⲓ',
          correctAnswer: 'the heavens',
          options: ['the heavens', 'the heaven', 'heaven is', 'from heaven'],
          explanation: 'ⲛⲓⲫⲏⲟⲩⲓ (nivyoui) is the plural "the heavens"'
        },
        {
          id: 'ex-27-1-8',
          type: 'matching',
          question: 'Match possessive pronouns review',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲡⲉⲛⲓⲱⲧ', english: 'our father' },
            { coptic: 'ⲡⲁⲓⲱⲧ', english: 'my father' },
            { coptic: 'ⲡⲉⲕⲓⲱⲧ', english: 'your father (m)' },
            { coptic: 'ⲡⲟⲩⲓⲱⲧ', english: 'their father' }
          ]
        }
      ]
    },
    {
      id: 'lesson-27-2',
      unitId: 'unit-27',
      title: 'First Petitions',
      description: 'Hallowed be thy name, thy kingdom come',
      order: 2,
      xpReward: 30,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-27-2-1',
          type: 'translation',
          question: 'Translate: ⲙⲁⲣⲉϥⲧⲟⲩⲃⲟ ⲛϫⲉ ⲡⲉⲕⲣⲁⲛ',
          questionCoptic: 'ⲙⲁⲣⲉϥⲧⲟⲩⲃⲟ ⲛϫⲉ ⲡⲉⲕⲣⲁⲛ',
          correctAnswer: 'Hallowed be thy name',
          options: ['Hallowed be thy name', 'Blessed is your name', 'Holy is the name', 'Your name is holy'],
          explanation: 'ⲙⲁⲣⲉϥⲧⲟⲩⲃⲟ = may it be holy/hallowed + ⲛϫⲉ ⲡⲉⲕⲣⲁⲛ = thy name'
        },
        {
          id: 'ex-27-2-2',
          type: 'multiple_choice',
          question: 'What does ⲧⲟⲩⲃⲟ mean?',
          questionCoptic: 'ⲧⲟⲩⲃⲟ',
          correctAnswer: 'holy/hallowed',
          options: ['holy/hallowed', 'blessed', 'great', 'eternal'],
          explanation: 'ⲧⲟⲩⲃⲟ (toubo) means "holy" or "to make holy/hallow"'
        },
        {
          id: 'ex-27-2-3',
          type: 'matching',
          question: 'Match prayer vocabulary',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲣⲁⲛ', english: 'name' },
            { coptic: 'ⲧⲟⲩⲃⲟ', english: 'holy/hallowed' },
            { coptic: 'ⲙⲁⲣⲉϥ', english: 'may it' },
            { coptic: 'ⲡⲉⲕⲣⲁⲛ', english: 'your name' }
          ]
        },
        {
          id: 'ex-27-2-4',
          type: 'translation',
          question: 'Translate: ⲙⲁⲣⲉⲥⲓ̀ ⲛϫⲉ ⲧⲉⲕⲙⲉⲧⲟⲩⲣⲟ',
          questionCoptic: 'ⲙⲁⲣⲉⲥⲓ̀ ⲛϫⲉ ⲧⲉⲕⲙⲉⲧⲟⲩⲣⲟ',
          correctAnswer: 'Thy kingdom come',
          options: ['Thy kingdom come', 'Your kingdom is here', 'The kingdom comes', 'May the kingdom be'],
          explanation: 'ⲙⲁⲣⲉⲥⲓ̀ = may it come + ⲛϫⲉ ⲧⲉⲕⲙⲉⲧⲟⲩⲣⲟ = thy kingdom (Bohairic ⲓ̀ not ⲉⲓ!)'
        },
        {
          id: 'ex-27-2-5',
          type: 'multiple_choice',
          question: 'What is "kingdom" in Coptic?',
          correctAnswer: 'ⲙⲉⲧⲟⲩⲣⲟ',
          options: ['ⲙⲉⲧⲟⲩⲣⲟ', 'ⲟⲩⲣⲟ', 'ⲣⲱⲙⲓ', 'ⲉⲕⲕⲗⲏⲥⲓⲁ'],
          explanation: 'ⲙⲉⲧⲟⲩⲣⲟ (metouro) means "kingdom" - literally "the state of being a king"'
        },
        {
          id: 'ex-27-2-6',
          type: 'sentence_building',
          question: 'Build: "Thy kingdom come"',
          correctAnswer: 'ⲙⲁⲣⲉⲥⲓ̀ ⲛϫⲉ ⲧⲉⲕⲙⲉⲧⲟⲩⲣⲟ',
          wordBank: ['ⲙⲁⲣⲉⲥⲓ̀', 'ⲛϫⲉ', 'ⲧⲉⲕⲙⲉⲧⲟⲩⲣⲟ', 'ⲉⲧϧⲉⲛ'],
          explanation: 'ⲙⲁⲣⲉⲥⲓ̀ ⲛϫⲉ ⲧⲉⲕⲙⲉⲧⲟⲩⲣⲟ = may come + thy kingdom (Bohairic ⲓ̀ not ⲉⲓ!)'
        },
        {
          id: 'ex-27-2-7',
          type: 'fill_blank',
          question: 'Complete: ⲙⲁⲣⲉϥ___ ⲛϫⲉ ⲡⲉⲕⲣⲁⲛ = Hallowed be thy name',
          correctAnswer: 'ⲧⲟⲩⲃⲟ',
          options: ['ⲧⲟⲩⲃⲟ', 'ⲓ̀', 'ⲉⲓ', 'ⲙⲟϣⲓ'],
          explanation: 'ⲧⲟⲩⲃⲟ (be holy/hallowed) completes the phrase'
        },
        {
          id: 'ex-27-2-8',
          type: 'matching',
          question: 'Match imperative expressions',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲙⲁⲣⲉϥⲧⲟⲩⲃⲟ', english: 'may it be holy' },
            { coptic: 'ⲙⲁⲣⲉⲥⲓ̀', english: 'may it come' },
            { coptic: 'ⲙⲁⲣⲉϥϣⲱⲡⲓ', english: 'may it be/happen' }
          ]
        }
      ]
    },
    {
      id: 'lesson-27-3',
      unitId: 'unit-27',
      title: 'God\'s Will and Daily Bread',
      description: 'Thy will be done, give us our daily bread',
      order: 3,
      xpReward: 30,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-27-3-1',
          type: 'translation',
          question: 'Translate: ⲙⲁⲣⲉϥϣⲱⲡⲓ ⲛϫⲉ ⲡⲉⲕⲟⲩⲱϣ',
          questionCoptic: 'ⲙⲁⲣⲉϥϣⲱⲡⲓ ⲛϫⲉ ⲡⲉⲕⲟⲩⲱϣ',
          correctAnswer: 'Thy will be done',
          options: ['Thy will be done', 'Your will comes', 'May your wish happen', 'The will is done'],
          explanation: 'ⲙⲁⲣⲉϥϣⲱⲡⲓ = may it happen/be + ⲛϫⲉ ⲡⲉⲕⲟⲩⲱϣ = thy will'
        },
        {
          id: 'ex-27-3-2',
          type: 'multiple_choice',
          question: 'What does ⲟⲩⲱϣ mean?',
          questionCoptic: 'ⲟⲩⲱϣ',
          correctAnswer: 'will/wish',
          options: ['will/wish', 'work', 'word', 'way'],
          explanation: 'ⲟⲩⲱϣ (ouōsh) means "will" or "wish/desire"'
        },
        {
          id: 'ex-27-3-3',
          type: 'matching',
          question: 'Match Lord\'s Prayer phrases',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲡⲉⲕⲟⲩⲱϣ', english: 'your will' },
            { coptic: 'ϣⲱⲡⲓ', english: 'to happen/be' },
            { coptic: 'ϧⲉⲛ ⲫⲉ', english: 'in heaven' },
            { coptic: 'ϩⲓϫⲉⲛ ⲡⲓⲕⲁϩⲓ', english: 'on earth' }
          ]
        },
        {
          id: 'ex-27-3-4',
          type: 'translation',
          question: 'Translate: ⲙⲏⲓϥ ⲛⲁⲛ ⲙⲫⲟⲟⲩ',
          questionCoptic: 'ⲙⲏⲓϥ ⲛⲁⲛ ⲙⲫⲟⲟⲩ',
          correctAnswer: 'Give us today',
          options: ['Give us today', 'Given to us', 'Give them today', 'Today we give'],
          explanation: 'ⲙⲏⲓϥ = give (imperative) + ⲛⲁⲛ = to us + ⲙⲫⲟⲟⲩ = today'
        },
        {
          id: 'ex-27-3-5',
          type: 'multiple_choice',
          question: 'What is "our daily bread" in Coptic?',
          correctAnswer: 'ⲡⲉⲛⲱⲓⲕ ⲛ̀ⲧⲉⲣⲁⲥϯ',
          options: ['ⲡⲉⲛⲱⲓⲕ ⲛ̀ⲧⲉⲣⲁⲥϯ', 'ⲡⲓⲱⲓⲕ ⲙⲫⲟⲟⲩ', 'ⲟⲩⲱⲓⲕ ⲛⲁⲛ', 'ⲡⲉⲛⲟⲩⲱⲙ'],
          explanation: 'ⲡⲉⲛⲱⲓⲕ ⲛ̀ⲧⲉⲣⲁⲥϯ = our bread + of + tomorrow (meaning daily/for the coming day)'
        },
        {
          id: 'ex-27-3-6',
          type: 'sentence_building',
          question: 'Build: "Give us today our daily bread"',
          correctAnswer: 'ⲙⲏⲓϥ ⲛⲁⲛ ⲙⲫⲟⲟⲩ ⲙⲡⲉⲛⲱⲓⲕ ⲛ̀ⲧⲉⲣⲁⲥϯ',
          wordBank: ['ⲙⲏⲓϥ', 'ⲛⲁⲛ', 'ⲙⲫⲟⲟⲩ', 'ⲙⲡⲉⲛⲱⲓⲕ', 'ⲛ̀ⲧⲉⲣⲁⲥϯ'],
          explanation: 'ⲙⲏⲓϥ ⲛⲁⲛ ⲙⲫⲟⲟⲩ ⲙⲡⲉⲛⲱⲓⲕ ⲛ̀ⲧⲉⲣⲁⲥϯ = give us today our bread of tomorrow'
        },
        {
          id: 'ex-27-3-7',
          type: 'fill_blank',
          question: 'Complete: ⲙⲏⲓϥ ___ ⲙⲫⲟⲟⲩ = Give us today',
          correctAnswer: 'ⲛⲁⲛ',
          options: ['ⲛⲁⲛ', 'ⲛⲁⲕ', 'ⲛⲁϥ', 'ⲛⲱⲟⲩ'],
          explanation: 'ⲛⲁⲛ (to us) is the suffix pronoun meaning "us"'
        },
        {
          id: 'ex-27-3-8',
          type: 'matching',
          question: 'Match prayer imperatives',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲙⲏⲓϥ', english: 'give (imperative)' },
            { coptic: 'ⲭⲁ...ⲉⲃⲟⲗ', english: 'forgive' },
            { coptic: 'ⲙⲡⲉⲣⲉⲛⲧⲉⲛ', english: 'lead not' },
            { coptic: 'ⲛⲁϩⲙⲉⲛ', english: 'deliver us' }
          ]
        }
      ]
    },
    {
      id: 'lesson-27-4',
      unitId: 'unit-27',
      title: 'Forgiveness',
      description: 'Forgive us our trespasses',
      order: 4,
      xpReward: 30,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-27-4-1',
          type: 'translation',
          question: 'Translate: ⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ⲉⲃⲟⲗ',
          questionCoptic: 'ⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ⲉⲃⲟⲗ',
          correctAnswer: 'Forgive us our trespasses',
          options: ['Forgive us our trespasses', 'Remove our sins', 'Our debts forgive', 'Send away our sins'],
          explanation: 'ⲭⲁ...ⲉⲃⲟⲗ = forgive/let go + ⲛⲉⲛⲛⲟⲃⲓ = our sins + ⲛⲁⲛ = to us'
        },
        {
          id: 'ex-27-4-2',
          type: 'multiple_choice',
          question: 'What does ⲛⲟⲃⲓ mean?',
          questionCoptic: 'ⲛⲟⲃⲓ',
          correctAnswer: 'sin/trespass',
          options: ['sin/trespass', 'debt', 'mistake', 'fault'],
          explanation: 'ⲛⲟⲃⲓ (nobi) means "sin" or "trespass" - plural is ⲛⲉⲛⲛⲟⲃⲓ (our sins)'
        },
        {
          id: 'ex-27-4-3',
          type: 'matching',
          question: 'Match forgiveness vocabulary',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲭⲁ...ⲉⲃⲟⲗ', english: 'forgive/let go' },
            { coptic: 'ⲛⲟⲃⲓ', english: 'sin/trespass' },
            { coptic: 'ⲛⲉⲛⲛⲟⲃⲓ', english: 'our sins' },
            { coptic: 'ⲛⲁⲛ', english: 'to us' }
          ]
        },
        {
          id: 'ex-27-4-4',
          type: 'translation',
          question: 'Translate: ⲙⲫⲣⲏϯ ϩⲱⲛ ⲉⲧⲉⲛⲭⲱ ⲉⲃⲟⲗ',
          questionCoptic: 'ⲙⲫⲣⲏϯ ϩⲱⲛ ⲉⲧⲉⲛⲭⲱ ⲉⲃⲟⲗ',
          correctAnswer: 'As we forgive',
          options: ['As we forgive', 'When we forgive', 'If we forgive', 'We who forgive'],
          explanation: 'ⲙⲫⲣⲏϯ = as/like + ϩⲱⲛ = also/too + ⲉⲧⲉⲛⲭⲱ ⲉⲃⲟⲗ = we forgive'
        },
        {
          id: 'ex-27-4-5',
          type: 'multiple_choice',
          question: 'What is the verb "to forgive" in Coptic?',
          correctAnswer: 'ⲭⲁ...ⲉⲃⲟⲗ',
          options: ['ⲭⲁ...ⲉⲃⲟⲗ', 'ⲭⲱ', 'ⲉⲃⲟⲗ', 'ⲭⲁⲓ'],
          explanation: 'ⲭⲁ...ⲉⲃⲟⲗ (kha...ebol) is a compound verb meaning "to forgive" - literally "let go out"'
        },
        {
          id: 'ex-27-4-6',
          type: 'sentence_building',
          question: 'Build: "Forgive us our sins"',
          correctAnswer: 'ⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ⲉⲃⲟⲗ',
          wordBank: ['ⲭⲁ', 'ⲛⲉⲛⲛⲟⲃⲓ', 'ⲛⲁⲛ', 'ⲉⲃⲟⲗ'],
          explanation: 'ⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ⲉⲃⲟⲗ = let go + our sins + to us + out'
        },
        {
          id: 'ex-27-4-7',
          type: 'fill_blank',
          question: 'Complete: ⲭⲁ ___ ⲛⲁⲛ ⲉⲃⲟⲗ = Forgive us our sins',
          correctAnswer: 'ⲛⲉⲛⲛⲟⲃⲓ',
          options: ['ⲛⲉⲛⲛⲟⲃⲓ', 'ⲡⲉⲛⲛⲟⲃⲓ', 'ⲛⲟⲃⲓ', 'ⲟⲩⲛⲟⲃⲓ'],
          explanation: 'ⲛⲉⲛⲛⲟⲃⲓ (our sins) uses the plural possessive prefix ⲛⲉⲛ-'
        },
        {
          id: 'ex-27-4-8',
          type: 'matching',
          question: 'Match sin and forgiveness terms',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲛⲟⲃⲓ', english: 'sin/trespass' },
            { coptic: 'ⲡⲁⲣⲁⲡⲧⲱⲙⲁ', english: 'transgression' },
            { coptic: 'ⲭⲱ ⲉⲃⲟⲗ', english: 'to forgive' },
            { coptic: 'ⲙⲉⲧⲁⲛⲟⲓⲁ', english: 'repentance' }
          ]
        }
      ]
    },
    {
      id: 'lesson-27-5',
      unitId: 'unit-27',
      title: 'Deliverance from Evil',
      description: 'Lead us not into temptation, deliver us from evil',
      order: 5,
      xpReward: 30,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-27-5-1',
          type: 'translation',
          question: 'Translate: ⲟⲩⲟϩ ⲙⲡⲉⲣⲉⲛⲧⲉⲛ ⲉϧⲟⲩⲛ ⲉⲡⲓⲣⲁⲥⲙⲟⲥ',
          questionCoptic: 'ⲟⲩⲟϩ ⲙⲡⲉⲣⲉⲛⲧⲉⲛ ⲉϧⲟⲩⲛ ⲉⲡⲓⲣⲁⲥⲙⲟⲥ',
          correctAnswer: 'And lead us not into temptation',
          options: ['And lead us not into temptation', 'Do not bring temptation', 'Lead not into trial', 'And temptation lead not'],
          explanation: 'ⲟⲩⲟϩ = and + ⲙⲡⲉⲣⲉⲛⲧⲉⲛ = lead us not + ⲉϧⲟⲩⲛ = into + ⲉⲡⲓⲣⲁⲥⲙⲟⲥ = temptation'
        },
        {
          id: 'ex-27-5-2',
          type: 'multiple_choice',
          question: 'What does ⲡⲓⲣⲁⲥⲙⲟⲥ mean?',
          questionCoptic: 'ⲡⲓⲣⲁⲥⲙⲟⲥ',
          correctAnswer: 'temptation/trial',
          options: ['temptation/trial', 'evil', 'sin', 'danger'],
          explanation: 'ⲡⲓⲣⲁⲥⲙⲟⲥ (pirasmos) means "temptation" or "trial/testing"'
        },
        {
          id: 'ex-27-5-3',
          type: 'matching',
          question: 'Match deliverance vocabulary',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲙⲡⲉⲣⲉⲛⲧⲉⲛ', english: 'lead us not' },
            { coptic: 'ⲡⲓⲣⲁⲥⲙⲟⲥ', english: 'temptation' },
            { coptic: 'ⲛⲁϩⲙⲉⲛ', english: 'deliver us' },
            { coptic: 'ⲡⲓⲡⲉⲧϩⲱⲟⲩ', english: 'the evil one' }
          ]
        },
        {
          id: 'ex-27-5-4',
          type: 'translation',
          question: 'Translate: ⲁⲗⲗⲁ ⲛⲁϩⲙⲉⲛ ⲉⲃⲟⲗϩⲁ ⲡⲓⲡⲉⲧϩⲱⲟⲩ',
          questionCoptic: 'ⲁⲗⲗⲁ ⲛⲁϩⲙⲉⲛ ⲉⲃⲟⲗϩⲁ ⲡⲓⲡⲉⲧϩⲱⲟⲩ',
          correctAnswer: 'But deliver us from evil',
          options: ['But deliver us from evil', 'But save us from the evil one', 'Deliver from all evil', 'But rescue from bad'],
          explanation: 'ⲁⲗⲗⲁ = but + ⲛⲁϩⲙⲉⲛ = deliver us + ⲉⲃⲟⲗϩⲁ = from + ⲡⲓⲡⲉⲧϩⲱⲟⲩ = the evil (one)'
        },
        {
          id: 'ex-27-5-5',
          type: 'multiple_choice',
          question: 'What is "evil" or "the evil one" in Coptic?',
          correctAnswer: 'ⲡⲓⲡⲉⲧϩⲱⲟⲩ',
          options: ['ⲡⲓⲡⲉⲧϩⲱⲟⲩ', 'ⲡⲓⲛⲟⲃⲓ', 'ⲡⲓⲥⲁⲧⲁⲛⲁⲥ', 'ⲡⲓϩⲱⲟⲩ'],
          explanation: 'ⲡⲓⲡⲉⲧϩⲱⲟⲩ (pipethōou) = the one who is evil/the evil one'
        },
        {
          id: 'ex-27-5-6',
          type: 'sentence_building',
          question: 'Build: "Lead us not into temptation"',
          correctAnswer: 'ⲙⲡⲉⲣⲉⲛⲧⲉⲛ ⲉϧⲟⲩⲛ ⲉⲡⲓⲣⲁⲥⲙⲟⲥ',
          wordBank: ['ⲙⲡⲉⲣⲉⲛⲧⲉⲛ', 'ⲉϧⲟⲩⲛ', 'ⲉⲡⲓⲣⲁⲥⲙⲟⲥ', 'ⲉⲃⲟⲗ'],
          explanation: 'ⲙⲡⲉⲣⲉⲛⲧⲉⲛ ⲉϧⲟⲩⲛ ⲉⲡⲓⲣⲁⲥⲙⲟⲥ = lead not us + into + temptation'
        },
        {
          id: 'ex-27-5-7',
          type: 'fill_blank',
          question: 'Complete: ⲛⲁϩⲙⲉⲛ ___ ⲡⲓⲡⲉⲧϩⲱⲟⲩ = Deliver us from evil',
          correctAnswer: 'ⲉⲃⲟⲗϩⲁ',
          options: ['ⲉⲃⲟⲗϩⲁ', 'ⲉϧⲟⲩⲛ', 'ⲉⲃⲟⲗ', 'ϧⲉⲛ'],
          explanation: 'ⲉⲃⲟⲗϩⲁ (ebolha) means "from" in the sense of deliverance'
        },
        {
          id: 'ex-27-5-8',
          type: 'matching',
          question: 'Match negative imperatives',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲙⲡⲉⲣ-', english: 'do not (imperative)' },
            { coptic: 'ⲙⲡⲉⲣⲉⲛⲧⲉⲛ', english: 'lead us not' },
            { coptic: 'ⲙⲡⲉⲣⲭⲁ', english: 'do not leave' },
            { coptic: 'ⲙⲡⲉⲣⲉⲣⲡⲓⲣⲁⲍⲓⲛ', english: 'do not tempt' }
          ]
        }
      ]
    },
    {
      id: 'lesson-27-6',
      unitId: 'unit-27',
      title: 'Doxology',
      description: 'For thine is the kingdom, power, and glory',
      order: 6,
      xpReward: 30,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-27-6-1',
          type: 'translation',
          question: 'Translate: ϫⲉ ⲑⲱⲕ ⲧⲉ ϯⲙⲉⲧⲟⲩⲣⲟ',
          questionCoptic: 'ϫⲉ ⲑⲱⲕ ⲧⲉ ϯⲙⲉⲧⲟⲩⲣⲟ',
          correctAnswer: 'For thine is the kingdom',
          options: ['For thine is the kingdom', 'Because yours is the kingdom', 'The kingdom is yours', 'You have the kingdom'],
          explanation: 'ϫⲉ = for/because + ⲑⲱⲕ ⲧⲉ = yours is (fem.) + ϯⲙⲉⲧⲟⲩⲣⲟ = the kingdom'
        },
        {
          id: 'ex-27-6-2',
          type: 'multiple_choice',
          question: 'What does ⲑⲱⲕ mean?',
          questionCoptic: 'ⲑⲱⲕ',
          correctAnswer: 'yours (emphatic)',
          options: ['yours (emphatic)', 'you', 'your', 'thine'],
          explanation: 'ⲑⲱⲕ (thōk) is the emphatic possessive pronoun "yours" (masculine addressee)'
        },
        {
          id: 'ex-27-6-3',
          type: 'matching',
          question: 'Match doxology vocabulary',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ϯⲙⲉⲧⲟⲩⲣⲟ', english: 'the kingdom' },
            { coptic: 'ϯϫⲟⲙ', english: 'the power' },
            { coptic: 'ⲡⲓⲱⲟⲩ', english: 'the glory' },
            { coptic: 'ϣⲁ ⲉⲛⲉϩ', english: 'forever' }
          ]
        },
        {
          id: 'ex-27-6-4',
          type: 'translation',
          question: 'Translate: ⲛⲉⲙ ϯϫⲟⲙ ⲛⲉⲙ ⲡⲓⲱⲟⲩ',
          questionCoptic: 'ⲛⲉⲙ ϯϫⲟⲙ ⲛⲉⲙ ⲡⲓⲱⲟⲩ',
          correctAnswer: 'And the power and the glory',
          options: ['And the power and the glory', 'With power and glory', 'The power with glory', 'Power and glory together'],
          explanation: 'ⲛⲉⲙ = and/with + ϯϫⲟⲙ = the power + ⲛⲉⲙ = and + ⲡⲓⲱⲟⲩ = the glory'
        },
        {
          id: 'ex-27-6-5',
          type: 'multiple_choice',
          question: 'What is "power/strength" in Coptic?',
          correctAnswer: 'ϫⲟⲙ',
          options: ['ϫⲟⲙ', 'ϭⲟⲙ', 'ⲱⲟⲩ', 'ⲙⲉⲧⲟⲩⲣⲟ'],
          explanation: 'ϫⲟⲙ (jom) means "power" or "strength" - with article: ϯϫⲟⲙ'
        },
        {
          id: 'ex-27-6-6',
          type: 'sentence_building',
          question: 'Build: "Forever and ever. Amen"',
          correctAnswer: 'ϣⲁ ⲉⲛⲉϩ ⲛⲉⲙ ϣⲁ ⲉⲛⲉϩ ⲛ̀ⲧⲉⲛⲓⲉⲛⲉϩ ⲁⲙⲏⲛ',
          wordBank: ['ϣⲁ', 'ⲉⲛⲉϩ', 'ⲛⲉⲙ', 'ⲛ̀ⲧⲉⲛⲓⲉⲛⲉϩ', 'ⲁⲙⲏⲛ'],
          explanation: 'ϣⲁ ⲉⲛⲉϩ ⲛⲉⲙ ϣⲁ ⲉⲛⲉϩ ⲛ̀ⲧⲉⲛⲓⲉⲛⲉϩ ⲁⲙⲏⲛ = unto eternity and unto eternity of eternities, amen'
        },
        {
          id: 'ex-27-6-7',
          type: 'fill_blank',
          question: 'Complete: ϫⲉ ⲑⲱⲕ ⲧⲉ ϯⲙⲉⲧⲟⲩⲣⲟ ⲛⲉⲙ ϯϫⲟⲙ ⲛⲉⲙ ⲡⲓ___ = For thine is the kingdom and power and the glory',
          correctAnswer: 'ⲱⲟⲩ',
          options: ['ⲱⲟⲩ', 'ⲟⲩⲱⲟⲩ', 'ⲥⲙⲟⲩ', 'ⲣⲁⲛ'],
          explanation: 'ⲱⲟⲩ (ōou) means "glory" - with article: ⲡⲓⲱⲟⲩ'
        },
        {
          id: 'ex-27-6-8',
          type: 'matching',
          question: 'Match eternal expressions',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ϣⲁ ⲉⲛⲉϩ', english: 'forever' },
            { coptic: 'ⲉⲛⲉϩ', english: 'eternity' },
            { coptic: 'ⲛⲓⲉⲛⲉϩ', english: 'the eternities' },
            { coptic: 'ⲁⲙⲏⲛ', english: 'amen' }
          ]
        }
      ]
    },
    // ADVANCED GRAMMATICAL ANALYSIS LESSONS (from existing unit-27)
    {
      id: 'lesson-27-7',
      unitId: 'unit-27',
      title: 'Advanced Analysis: Opening Address',
      description: 'Grammatical deep-dive into ⲡⲉⲛⲓⲱⲧ',
      order: 7,
      xpReward: 50,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-27-7-1',
          type: 'translation',
          question: 'Analyze: ⲡⲉⲛⲓⲱⲧ = ⲡⲉⲛ + ⲓⲱⲧ',
          questionCoptic: 'ⲡⲉⲛⲓⲱⲧ',
          correctAnswer: 'our + father',
          options: ['our + father', 'the + father', 'my + father', 'father + our'],
          explanation: 'ⲡⲉⲛⲓⲱⲧ breaks down to ⲡⲉⲛ- (our, 1st person plural possessive) + ⲓⲱⲧ (father)'
        },
        {
          id: 'ex-27-7-2',
          type: 'multiple_choice',
          question: 'What grammatical form is ⲡⲉⲛ-?',
          correctAnswer: '1st person plural possessive pronoun',
          options: ['1st person plural possessive pronoun', '1st person singular possessive', 'definite article', 'independent pronoun'],
          explanation: 'ⲡⲉⲛ- (pen-) is the 1st person plural possessive: "our"'
        },
        {
          id: 'ex-27-7-3',
          type: 'matching',
          question: 'Match possessive pronouns',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲡⲁⲓⲱⲧ', english: 'my father' },
            { coptic: 'ⲡⲉⲕⲓⲱⲧ', english: 'your father' },
            { coptic: 'ⲡⲉⲛⲓⲱⲧ', english: 'our father' },
            { coptic: 'ⲡⲟⲩⲓⲱⲧ', english: 'their father' }
          ]
        },
        {
          id: 'ex-27-7-4',
          type: 'translation',
          question: 'Analyze: ⲉⲧϧⲉⲛ ⲛⲓⲫⲏⲟⲩⲓ = ⲉⲧ + ϧⲉⲛ + ⲛⲓⲫⲏⲟⲩⲓ',
          questionCoptic: 'ⲉⲧϧⲉⲛ ⲛⲓⲫⲏⲟⲩⲓ',
          correctAnswer: 'who + in + the heavens',
          options: ['who + in + the heavens', 'that + from + heaven', 'which + to + the sky', 'who + under + heavens'],
          explanation: 'ⲉⲧ- (relative "who") + ϧⲉⲛ (in) + ⲛⲓⲫⲏⲟⲩⲓ (the heavens, plural)'
        },
        {
          id: 'ex-27-7-5',
          type: 'sentence_building',
          question: 'Build the complete opening',
          correctAnswer: 'ⲡⲉⲛⲓⲱⲧ ⲉⲧϧⲉⲛ ⲛⲓⲫⲏⲟⲩⲓ',
          wordBank: ['ⲡⲉⲛⲓⲱⲧ', 'ⲉⲧ', 'ϧⲉⲛ', 'ⲛⲓⲫⲏⲟⲩⲓ'],
          explanation: 'ⲡⲉⲛⲓⲱⲧ ⲉⲧϧⲉⲛ ⲛⲓⲫⲏⲟⲩⲓ = Our Father who is in the heavens'
        },
        {
          id: 'ex-27-7-6',
          type: 'multiple_choice',
          question: 'Why plural "heavens" (ⲛⲓⲫⲏⲟⲩⲓ) not singular?',
          correctAnswer: 'Hebrew/Semitic idiom preserved in biblical language',
          options: ['Hebrew/Semitic idiom preserved in biblical language', 'Grammatical error', 'Multiple sky levels', 'Poetic emphasis'],
          explanation: 'Biblical Greek and Coptic preserve the Hebrew plural "heavens" (shamayim) as a Semitic idiom'
        },
        {
          id: 'ex-27-7-7',
          type: 'fill_blank',
          question: 'The relative pronoun ___ connects "Father" to "who is in heavens"',
          correctAnswer: 'ⲉⲧ',
          options: ['ⲉⲧ', 'ⲉⲧⲁ', 'ⲫⲏ', 'ⲡⲓ'],
          explanation: 'ⲉⲧ- (et-) is the relative pronoun meaning "who/which/that"'
        },
        {
          id: 'ex-27-7-8',
          type: 'translation',
          question: 'Theological meaning: Why "Our" Father not "My" Father?',
          questionCoptic: 'ⲡⲉⲛⲓⲱⲧ',
          correctAnswer: 'Emphasizes communal prayer and universal family of believers',
          options: ['Emphasizes communal prayer and universal family of believers', 'Grammatical convention only', 'Royal plural', 'Plural of majesty'],
          explanation: 'Jesus teaches us to pray as a community, recognizing God as Father of all believers, not just individually'
        }
      ]
    },
    {
      id: 'lesson-27-8',
      unitId: 'unit-27',
      title: 'Advanced Analysis: Hallowed Be Thy Name',
      description: 'Deep analysis of ⲙⲁⲣⲉϥⲧⲟⲩⲃⲟ',
      order: 8,
      xpReward: 50,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-27-8-1',
          type: 'translation',
          question: 'Analyze: ⲙⲁⲣⲉϥⲧⲟⲩⲃⲟ = ⲙⲁⲣⲉ + ϥ + ⲧⲟⲩⲃⲟ',
          questionCoptic: 'ⲙⲁⲣⲉϥⲧⲟⲩⲃⲟ',
          correctAnswer: 'let + it/he + be holy',
          options: ['let + it/he + be holy', 'make + him + holy', 'may + you + sanctify', 'will + it + holy'],
          explanation: 'ⲙⲁⲣⲉ- (jussive "let") + ϥ (it/he) + ⲧⲟⲩⲃⲟ (be holy/sanctified)'
        },
        {
          id: 'ex-27-8-2',
          type: 'multiple_choice',
          question: 'What is the mood of ⲙⲁⲣⲉ-?',
          correctAnswer: 'Jussive (let it be)',
          options: ['Jussive (let it be)', 'Imperative (command)', 'Indicative (statement)', 'Subjunctive (wish)'],
          explanation: 'ⲙⲁⲣⲉ- (mare-) forms the jussive mood expressing a wish or permission: "let/may it be"'
        },
        {
          id: 'ex-27-8-3',
          type: 'matching',
          question: 'Match petition structures',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲙⲁⲣⲉϥⲧⲟⲩⲃⲟ', english: 'let it be holy' },
            { coptic: 'ⲙⲁⲣⲉⲥⲓ̀', english: 'let it come' },
            { coptic: 'ⲙⲁⲣⲉϥϣⲱⲡⲓ', english: 'let it be/happen' },
            { coptic: 'ⲙⲁⲣⲉϥϫⲱⲕ', english: 'let it be fulfilled' }
          ]
        },
        {
          id: 'ex-27-8-4',
          type: 'translation',
          question: 'Analyze: ⲛ̀ϫⲉ ⲡⲉⲕⲣⲁⲛ = ⲛ̀ϫⲉ + ⲡⲉⲕ + ⲣⲁⲛ',
          questionCoptic: 'ⲛ̀ϫⲉ ⲡⲉⲕⲣⲁⲛ',
          correctAnswer: '(focus particle) + your + name',
          options: ['(focus particle) + your + name', 'by + your + name', 'with + the + name', 'from + your + name'],
          explanation: 'ⲛ̀ϫⲉ (enje) is a focus/emphasis particle + ⲡⲉⲕⲣⲁⲛ (your name)'
        },
        {
          id: 'ex-27-8-5',
          type: 'sentence_building',
          question: 'Build: "Let your name be holy"',
          correctAnswer: 'ⲙⲁⲣⲉϥⲧⲟⲩⲃⲟ ⲛ̀ϫⲉ ⲡⲉⲕⲣⲁⲛ',
          wordBank: ['ⲙⲁⲣⲉϥⲧⲟⲩⲃⲟ', 'ⲛ̀ϫⲉ', 'ⲡⲉⲕⲣⲁⲛ', 'ⲙ̀ⲙⲟϥ'],
          explanation: 'ⲙⲁⲣⲉϥⲧⲟⲩⲃⲟ ⲛ̀ϫⲉ ⲡⲉⲕⲣⲁⲛ = let it be holy - your name (word order with ⲛ̀ϫⲉ)'
        },
        {
          id: 'ex-27-8-6',
          type: 'multiple_choice',
          question: 'What is ⲧⲟⲩⲃⲟ grammatically?',
          correctAnswer: 'Infinitive (to be holy)',
          options: ['Infinitive (to be holy)', 'Past tense', 'Present tense', 'Participle'],
          explanation: 'ⲧⲟⲩⲃⲟ (toubo) is the infinitive "to be holy/sanctified"'
        },
        {
          id: 'ex-27-8-7',
          type: 'fill_blank',
          question: 'The verb ⲧⲟⲩⲃⲟ is related to the adjective ___',
          correctAnswer: 'ⲉⲑⲟⲩⲁⲃ',
          options: ['ⲉⲑⲟⲩⲁⲃ', 'ⲧⲟⲩⲃⲉ', 'ⲟⲩⲁⲃ', 'ⲑⲟⲩⲃ'],
          explanation: 'ⲧⲟⲩⲃⲟ (verb "to be holy") comes from ⲉⲑⲟⲩⲁⲃ (adjective "holy")'
        },
        {
          id: 'ex-27-8-8',
          type: 'translation',
          question: 'Theological meaning: How do we "hallow" God\'s name?',
          questionCoptic: 'ⲙⲁⲣⲉϥⲧⲟⲩⲃⲟ ⲛ̀ϫⲉ ⲡⲉⲕⲣⲁⲛ',
          correctAnswer: 'By honoring God in our words, thoughts, and actions',
          options: ['By honoring God in our words, thoughts, and actions', 'By saying prayers only', 'God makes his own name holy', 'Through magic words'],
          explanation: 'We ask that God\'s name be treated as holy (hallowed) through our reverent lives and worship'
        }
      ]
    },
    {
      id: 'lesson-27-9',
      unitId: 'unit-27',
      title: 'Advanced Analysis: Thy Kingdom Come',
      description: 'Deep analysis of ⲙⲁⲣⲉⲥⲓ̀',
      order: 9,
      xpReward: 50,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-27-9-1',
          type: 'translation',
          question: 'Analyze: ⲙⲁⲣⲉⲥⲓ̀ = ⲙⲁⲣⲉ + ⲥ + ⲓ̀',
          questionCoptic: 'ⲙⲁⲣⲉⲥⲓ̀',
          correctAnswer: 'let + it/she + come',
          options: ['let + it/she + come', 'may + you + come', 'will + it + arrive', 'let + them + come'],
          explanation: 'ⲙⲁⲣⲉ- (jussive) + ⲥ (it/she) + ⲓ̀ (come) - Bohairic ⲓ̀ not ⲉⲓ!'
        },
        {
          id: 'ex-27-9-2',
          type: 'multiple_choice',
          question: 'What is the subject of ⲙⲁⲣⲉⲥⲓ̀?',
          correctAnswer: 'ⲧⲉⲕⲙⲉⲧⲟⲩⲣⲟ (your kingdom, feminine)',
          options: ['ⲧⲉⲕⲙⲉⲧⲟⲩⲣⲟ (your kingdom, feminine)', 'ⲡⲉⲕⲣⲁⲛ (your name)', 'ⲫϯ (God)', 'ⲡⲉⲕⲟⲩⲱϣ (your will)'],
          explanation: 'ⲙⲉⲧⲟⲩⲣⲟ (kingdom) is feminine, hence the pronoun ⲥ (she/it)'
        },
        {
          id: 'ex-27-9-3',
          type: 'matching',
          question: 'Match coming/arrival vocabulary',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲓ̀', english: 'to come' },
            { coptic: 'ⲧⲁϩⲟ', english: 'to arrive/reach' },
            { coptic: 'ϣⲉⲛⲓ', english: 'to go' },
            { coptic: 'ⲙⲟϣⲓ', english: 'to walk/proceed' }
          ]
        },
        {
          id: 'ex-27-9-4',
          type: 'translation',
          question: 'Analyze: ⲛ̀ϫⲉ ⲧⲉⲕⲙⲉⲧⲟⲩⲣⲟ = ⲛ̀ϫⲉ + ⲧⲉⲕ + ⲙⲉⲧⲟⲩⲣⲟ',
          questionCoptic: 'ⲛ̀ϫⲉ ⲧⲉⲕⲙⲉⲧⲟⲩⲣⲟ',
          correctAnswer: '(focus) + your + kingdom',
          options: ['(focus) + your + kingdom', 'by + your + reign', 'from + the + kingdom', 'with + your + rule'],
          explanation: 'ⲛ̀ϫⲉ (focus marker) + ⲧⲉⲕⲙⲉⲧⲟⲩⲣⲟ (your kingdom, from ⲙⲉⲧⲟⲩⲣⲟ "kingship/kingdom")'
        },
        {
          id: 'ex-27-9-5',
          type: 'sentence_building',
          question: 'Build: "Let your kingdom come"',
          correctAnswer: 'ⲙⲁⲣⲉⲥⲓ̀ ⲛ̀ϫⲉ ⲧⲉⲕⲙⲉⲧⲟⲩⲣⲟ',
          wordBank: ['ⲙⲁⲣⲉⲥⲓ̀', 'ⲛ̀ϫⲉ', 'ⲧⲉⲕⲙⲉⲧⲟⲩⲣⲟ', 'ⲉϧⲣⲏⲓ'],
          explanation: 'ⲙⲁⲣⲉⲥⲓ̀ ⲛ̀ϫⲉ ⲧⲉⲕⲙⲉⲧⲟⲩⲣⲟ = let it come - your kingdom (Bohairic ⲓ̀ not ⲉⲓ!)'
        },
        {
          id: 'ex-27-9-6',
          type: 'multiple_choice',
          question: 'Why feminine pronoun ⲥ for kingdom?',
          correctAnswer: 'ⲙⲉⲧⲟⲩⲣⲟ is grammatically feminine',
          options: ['ⲙⲉⲧⲟⲩⲣⲟ is grammatically feminine', 'Error in text', 'Poetic choice', 'Abstract nouns always feminine'],
          explanation: 'The noun ⲙⲉⲧⲟⲩⲣⲟ (kingdom) is feminine gender in Coptic, taking feminine pronouns'
        },
        {
          id: 'ex-27-9-7',
          type: 'fill_blank',
          question: 'Complete the word: ⲙⲉⲧⲟⲩⲣⲟ = ⲙⲉⲧ- + ___',
          correctAnswer: 'ⲟⲩⲣⲟ',
          options: ['ⲟⲩⲣⲟ', 'ⲉⲣⲟ', 'ⲣⲟⲩ', 'ⲟⲩⲱⲣ'],
          explanation: 'ⲙⲉⲧⲟⲩⲣⲟ breaks down to ⲙⲉⲧ- (abstract noun prefix) + ⲟⲩⲣⲟ (king) = "kingship/kingdom"'
        },
        {
          id: 'ex-27-9-8',
          type: 'translation',
          question: 'Theological meaning: What does God\'s kingdom "coming" mean?',
          questionCoptic: 'ⲙⲁⲣⲉⲥⲓ̀ ⲛ̀ϫⲉ ⲧⲉⲕⲙⲉⲧⲟⲩⲣⲟ',
          correctAnswer: 'God\'s reign established in hearts now, fully at Christ\'s return',
          options: ['God\'s reign established in hearts now, fully at Christ\'s return', 'Political revolution', 'Death', 'Church buildings'],
          explanation: 'We pray for God\'s rule to be realized: partially now in believers\' lives, completely at the Second Coming'
        }
      ]
    },
    {
      id: 'lesson-27-10',
      unitId: 'unit-27',
      title: 'Advanced Analysis: Daily Bread',
      description: 'Deep analysis of ⲡⲉⲛⲱⲓⲕ ⲛ̀ⲧⲉⲣⲁⲥϯ',
      order: 10,
      xpReward: 50,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-27-10-1',
          type: 'translation',
          question: 'Analyze: ⲡⲉⲛⲱⲓⲕ = ⲡⲉⲛ + ⲱⲓⲕ',
          questionCoptic: 'ⲡⲉⲛⲱⲓⲕ',
          correctAnswer: 'our + bread',
          options: ['our + bread', 'the + bread', 'my + food', 'their + bread'],
          explanation: 'ⲡⲉⲛⲱⲓⲕ = ⲡⲉⲛ- (our) + ⲱⲓⲕ (bread/loaf)'
        },
        {
          id: 'ex-27-10-2',
          type: 'multiple_choice',
          question: 'What is ⲛ̀ⲧⲉⲣⲁⲥϯ literally?',
          correctAnswer: 'of tomorrow/coming',
          options: ['of tomorrow/coming', 'of today', 'of yesterday', 'daily'],
          explanation: 'ⲛ̀ⲧⲉⲣⲁⲥϯ comes from ⲣⲁⲥϯ (tomorrow) - "the bread of tomorrow" = daily sustenance'
        },
        {
          id: 'ex-27-10-3',
          type: 'matching',
          question: 'Match bread/food vocabulary',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲱⲓⲕ', english: 'bread/loaf' },
            { coptic: 'ⲟⲩⲱⲙ', english: 'food/eating' },
            { coptic: 'ⲣⲁⲥϯ', english: 'tomorrow' },
            { coptic: 'ⲙⲏⲓϥ', english: 'give it' }
          ]
        },
        {
          id: 'ex-27-10-4',
          type: 'translation',
          question: 'Analyze: ⲙⲏⲓϥ ⲛⲁⲛ = ⲙⲏⲓϥ + ⲛⲁⲛ',
          questionCoptic: 'ⲙⲏⲓϥ ⲛⲁⲛ',
          correctAnswer: 'give it + to us',
          options: ['give it + to us', 'give + us', 'bring it + us', 'take it + from us'],
          explanation: 'ⲙⲏⲓϥ = give it (imperative + object suffix) + ⲛⲁⲛ = to us (dative)'
        },
        {
          id: 'ex-27-10-5',
          type: 'sentence_building',
          question: 'Build: "Give us our daily bread today"',
          correctAnswer: 'ⲙⲏⲓϥ ⲛⲁⲛ ⲙⲫⲟⲟⲩ ⲙⲡⲉⲛⲱⲓⲕ ⲛ̀ⲧⲉⲣⲁⲥϯ',
          wordBank: ['ⲙⲏⲓϥ', 'ⲛⲁⲛ', 'ⲙⲫⲟⲟⲩ', 'ⲙⲡⲉⲛⲱⲓⲕ', 'ⲛ̀ⲧⲉⲣⲁⲥϯ'],
          explanation: 'ⲙⲏⲓϥ ⲛⲁⲛ ⲙⲫⲟⲟⲩ ⲙⲡⲉⲛⲱⲓⲕ ⲛ̀ⲧⲉⲣⲁⲥϯ = give it to us today - our bread of tomorrow'
        },
        {
          id: 'ex-27-10-6',
          type: 'multiple_choice',
          question: 'The word order ⲙⲏⲓϥ ⲛⲁⲛ shows what pattern?',
          correctAnswer: 'Verb + Object Suffix + Indirect Object',
          options: ['Verb + Object Suffix + Indirect Object', 'Subject + Verb + Object', 'Verb + Subject + Object', 'Object + Verb + Subject'],
          explanation: 'Coptic word order: ⲙⲏⲓϥ (give it, verb with direct object suffix -ϥ) + ⲛⲁⲛ (to us, indirect object)'
        },
        {
          id: 'ex-27-10-7',
          type: 'fill_blank',
          question: 'Complete: ⲙⲫⲟⲟⲩ = ⲙ̀ + ___',
          correctAnswer: 'ⲫⲟⲟⲩ',
          options: ['ⲫⲟⲟⲩ', 'ⲑⲟⲟⲩ', 'ⲫⲏⲟⲩⲓ', 'ⲣⲁⲥϯ'],
          explanation: 'ⲙⲫⲟⲟⲩ = ⲙ̀- (on/in) + ⲫⲟⲟⲩ (the day) = "today"'
        },
        {
          id: 'ex-27-10-8',
          type: 'translation',
          question: 'Theological meaning: Why "bread of tomorrow" given today?',
          questionCoptic: 'ⲡⲉⲛⲱⲓⲕ ⲛ̀ⲧⲉⲣⲁⲥϯ',
          correctAnswer: 'Trust God for daily needs, not hoarding or anxiety',
          options: ['Trust God for daily needs, not hoarding or anxiety', 'Save food for tomorrow', 'Only eat once daily', 'Bread tastes better tomorrow'],
          explanation: 'We ask for "tomorrow\'s bread today" - teaching dependence on God day by day, not anxiety about the future'
        }
      ]
    }
  ]
};

export default unit27;
