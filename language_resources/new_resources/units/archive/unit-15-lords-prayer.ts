import { Unit } from '../../types';

// UNIT 15: THE LORD'S PRAYER (ⲡⲉⲛⲓⲱⲧ)
// Verified for Bohairic dialect consistency
// Traditional liturgical text

const unit15: Unit = {
  id: 'unit-15',
  title: 'The Lord\'s Prayer',
  description: 'Learn the most important Christian prayer in Coptic',
  order: 15,
  color: '#FFD700',
  lessons: [
    {
      id: 'lesson-15-1',
      unitId: 'unit-15',
      title: 'Opening Address',
      description: 'Our Father who art in heaven',
      order: 1,
      xpReward: 30,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-15-1-1',
          type: 'translation',
          question: 'Translate: ⲡⲉⲛⲓⲱⲧ',
          questionCoptic: 'ⲡⲉⲛⲓⲱⲧ',
          correctAnswer: 'Our Father',
          options: ['Our Father', 'My Father', 'Your Father', 'The Father'],
          explanation: 'ⲡⲉⲛⲓⲱⲧ = ⲡⲉⲛ (our) + ⲓⲱⲧ (father) - the opening of the Lord\'s Prayer'
        },
        {
          id: 'ex-15-1-2',
          type: 'multiple_choice',
          question: 'What does ⲉⲧϧⲉⲛ ⲛⲓⲫⲏⲟⲩⲓ mean?',
          questionCoptic: 'ⲉⲧϧⲉⲛ ⲛⲓⲫⲏⲟⲩⲓ',
          correctAnswer: 'who art in heaven',
          options: ['who art in heaven', 'in the earth', 'in the church', 'with the angels'],
          explanation: 'ⲉⲧϧⲉⲛ ⲛⲓⲫⲏⲟⲩⲓ = who/which (is) in the heavens'
        },
        {
          id: 'ex-15-1-3',
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
          id: 'ex-15-1-4',
          type: 'sentence_building',
          question: 'Build: "Our Father who art in heaven"',
          correctAnswer: 'ⲡⲉⲛⲓⲱⲧ ⲉⲧϧⲉⲛ ⲛⲓⲫⲏⲟⲩⲓ',
          wordBank: ['ⲡⲉⲛⲓⲱⲧ', 'ⲉⲧϧⲉⲛ', 'ⲛⲓⲫⲏⲟⲩⲓ', 'ⲙⲙⲟⲛ'],
          explanation: 'ⲡⲉⲛⲓⲱⲧ ⲉⲧϧⲉⲛ ⲛⲓⲫⲏⲟⲩⲓ is the complete opening phrase'
        },
        {
          id: 'ex-15-1-5',
          type: 'multiple_choice',
          question: 'What is "heaven" (singular) in Coptic?',
          correctAnswer: 'ⲫⲉ',
          options: ['ⲫⲉ', 'ⲕⲁϩⲓ', 'ⲫⲓⲟⲙ', 'ⲡⲟⲗⲓⲥ'],
          explanation: 'ⲫⲉ (ve) means "heaven" or "sky" - the plural is ⲛⲓⲫⲏⲟⲩⲓ'
        },
        {
          id: 'ex-15-1-6',
          type: 'fill_blank',
          question: 'Complete: ___ ⲉⲧϧⲉⲛ ⲛⲓⲫⲏⲟⲩⲓ = Our Father in heaven',
          correctAnswer: 'ⲡⲉⲛⲓⲱⲧ',
          options: ['ⲡⲉⲛⲓⲱⲧ', 'ⲡⲁⲓⲱⲧ', 'ⲫⲓⲱⲧ', 'ⲡⲟⲩⲓⲱⲧ'],
          explanation: 'ⲡⲉⲛⲓⲱⲧ (our father) begins the prayer'
        },
        {
          id: 'ex-15-1-7',
          type: 'translation',
          question: 'Translate: ⲛⲓⲫⲏⲟⲩⲓ',
          questionCoptic: 'ⲛⲓⲫⲏⲟⲩⲓ',
          correctAnswer: 'the heavens',
          options: ['the heavens', 'the heaven', 'heaven is', 'from heaven'],
          explanation: 'ⲛⲓⲫⲏⲟⲩⲓ (nivyoui) is the plural "the heavens"'
        },
        {
          id: 'ex-15-1-8',
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
      id: 'lesson-15-2',
      unitId: 'unit-15',
      title: 'First Petitions',
      description: 'Hallowed be thy name, thy kingdom come',
      order: 2,
      xpReward: 30,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-15-2-1',
          type: 'translation',
          question: 'Translate: ⲙⲁⲣⲉϥⲧⲟⲩⲃⲟ ⲛϫⲉ ⲡⲉⲕⲣⲁⲛ',
          questionCoptic: 'ⲙⲁⲣⲉϥⲧⲟⲩⲃⲟ ⲛϫⲉ ⲡⲉⲕⲣⲁⲛ',
          correctAnswer: 'Hallowed be thy name',
          options: ['Hallowed be thy name', 'Blessed is your name', 'Holy is the name', 'Your name is holy'],
          explanation: 'ⲙⲁⲣⲉϥⲧⲟⲩⲃⲟ = may it be holy/hallowed + ⲛϫⲉ ⲡⲉⲕⲣⲁⲛ = thy name'
        },
        {
          id: 'ex-15-2-2',
          type: 'multiple_choice',
          question: 'What does ⲧⲟⲩⲃⲟ mean?',
          questionCoptic: 'ⲧⲟⲩⲃⲟ',
          correctAnswer: 'holy/hallowed',
          options: ['holy/hallowed', 'blessed', 'great', 'eternal'],
          explanation: 'ⲧⲟⲩⲃⲟ (toubo) means "holy" or "to make holy/hallow"'
        },
        {
          id: 'ex-15-2-3',
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
          id: 'ex-15-2-4',
          type: 'translation',
          question: 'Translate: ⲙⲁⲣⲉⲥⲓ ⲛϫⲉ ⲧⲉⲕⲙⲉⲧⲟⲩⲣⲟ',
          questionCoptic: 'ⲙⲁⲣⲉⲥⲓ ⲛϫⲉ ⲧⲉⲕⲙⲉⲧⲟⲩⲣⲟ',
          correctAnswer: 'Thy kingdom come',
          options: ['Thy kingdom come', 'Your kingdom is here', 'The kingdom comes', 'May the kingdom be'],
          explanation: 'ⲙⲁⲣⲉⲥⲓ = may it come + ⲛϫⲉ ⲧⲉⲕⲙⲉⲧⲟⲩⲣⲟ = thy kingdom'
        },
        {
          id: 'ex-15-2-5',
          type: 'multiple_choice',
          question: 'What is "kingdom" in Coptic?',
          correctAnswer: 'ⲙⲉⲧⲟⲩⲣⲟ',
          options: ['ⲙⲉⲧⲟⲩⲣⲟ', 'ⲟⲩⲣⲟ', 'ⲣⲱⲙⲓ', 'ⲉⲕⲕⲗⲏⲥⲓⲁ'],
          explanation: 'ⲙⲉⲧⲟⲩⲣⲟ (metouro) means "kingdom" - literally "the state of being a king"'
        },
        {
          id: 'ex-15-2-6',
          type: 'sentence_building',
          question: 'Build: "Thy kingdom come"',
          correctAnswer: 'ⲙⲁⲣⲉⲥⲓ ⲛϫⲉ ⲧⲉⲕⲙⲉⲧⲟⲩⲣⲟ',
          wordBank: ['ⲙⲁⲣⲉⲥⲓ', 'ⲛϫⲉ', 'ⲧⲉⲕⲙⲉⲧⲟⲩⲣⲟ', 'ⲉⲧϧⲉⲛ'],
          explanation: 'ⲙⲁⲣⲉⲥⲓ ⲛϫⲉ ⲧⲉⲕⲙⲉⲧⲟⲩⲣⲟ = may come + thy kingdom'
        },
        {
          id: 'ex-15-2-7',
          type: 'fill_blank',
          question: 'Complete: ⲙⲁⲣⲉϥ___ ⲛϫⲉ ⲡⲉⲕⲣⲁⲛ = Hallowed be thy name',
          correctAnswer: 'ⲧⲟⲩⲃⲟ',
          options: ['ⲧⲟⲩⲃⲟ', 'ⲓ̀', 'ⲉⲓ', 'ⲙⲟϣⲓ'],
          explanation: 'ⲧⲟⲩⲃⲟ (be holy/hallowed) completes the phrase'
        },
        {
          id: 'ex-15-2-8',
          type: 'matching',
          question: 'Match imperative expressions',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲙⲁⲣⲉϥⲧⲟⲩⲃⲟ', english: 'may it be holy' },
            { coptic: 'ⲙⲁⲣⲉⲥⲓ', english: 'may it come' },
            { coptic: 'ⲙⲁⲣⲉϥϣⲱⲡⲓ', english: 'may it be/happen' }
          ]
        }
      ]
    },
    {
      id: 'lesson-15-3',
      unitId: 'unit-15',
      title: 'God\'s Will and Daily Bread',
      description: 'Thy will be done, give us our daily bread',
      order: 3,
      xpReward: 30,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-15-3-1',
          type: 'translation',
          question: 'Translate: ⲙⲁⲣⲉϥϣⲱⲡⲓ ⲛϫⲉ ⲡⲉⲕⲟⲩⲱϣ',
          questionCoptic: 'ⲙⲁⲣⲉϥϣⲱⲡⲓ ⲛϫⲉ ⲡⲉⲕⲟⲩⲱϣ',
          correctAnswer: 'Thy will be done',
          options: ['Thy will be done', 'Your will comes', 'May your wish happen', 'The will is done'],
          explanation: 'ⲙⲁⲣⲉϥϣⲱⲡⲓ = may it happen/be + ⲛϫⲉ ⲡⲉⲕⲟⲩⲱϣ = thy will'
        },
        {
          id: 'ex-15-3-2',
          type: 'multiple_choice',
          question: 'What does ⲟⲩⲱϣ mean?',
          questionCoptic: 'ⲟⲩⲱϣ',
          correctAnswer: 'will/wish',
          options: ['will/wish', 'work', 'word', 'way'],
          explanation: 'ⲟⲩⲱϣ (ouōsh) means "will" or "wish/desire"'
        },
        {
          id: 'ex-15-3-3',
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
          id: 'ex-15-3-4',
          type: 'translation',
          question: 'Translate: ⲙⲏⲓϥ ⲛⲁⲛ ⲙⲫⲟⲟⲩ',
          questionCoptic: 'ⲙⲏⲓϥ ⲛⲁⲛ ⲙⲫⲟⲟⲩ',
          correctAnswer: 'Give us today',
          options: ['Give us today', 'Given to us', 'Give them today', 'Today we give'],
          explanation: 'ⲙⲏⲓϥ = give (imperative) + ⲛⲁⲛ = to us + ⲙⲫⲟⲟⲩ = today'
        },
        {
          id: 'ex-15-3-5',
          type: 'multiple_choice',
          question: 'What is "our daily bread" in Coptic?',
          correctAnswer: 'ⲡⲉⲛⲱⲓⲕ ⲛ̀ⲧⲉⲣⲁⲥϯ',
          options: ['ⲡⲉⲛⲱⲓⲕ ⲛ̀ⲧⲉⲣⲁⲥϯ', 'ⲡⲓⲱⲓⲕ ⲙⲫⲟⲟⲩ', 'ⲟⲩⲱⲓⲕ ⲛⲁⲛ', 'ⲡⲉⲛⲟⲩⲱⲙ'],
          explanation: 'ⲡⲉⲛⲱⲓⲕ ⲛ̀ⲧⲉⲣⲁⲥϯ = our bread + of + tomorrow (meaning daily/for the coming day)'
        },
        {
          id: 'ex-15-3-6',
          type: 'sentence_building',
          question: 'Build: "Give us today our daily bread"',
          correctAnswer: 'ⲙⲏⲓϥ ⲛⲁⲛ ⲙⲫⲟⲟⲩ ⲙⲡⲉⲛⲱⲓⲕ ⲛ̀ⲧⲉⲣⲁⲥϯ',
          wordBank: ['ⲙⲏⲓϥ', 'ⲛⲁⲛ', 'ⲙⲫⲟⲟⲩ', 'ⲙⲡⲉⲛⲱⲓⲕ', 'ⲛ̀ⲧⲉⲣⲁⲥϯ'],
          explanation: 'ⲙⲏⲓϥ ⲛⲁⲛ ⲙⲫⲟⲟⲩ ⲙⲡⲉⲛⲱⲓⲕ ⲛ̀ⲧⲉⲣⲁⲥϯ = give us today our bread of tomorrow'
        },
        {
          id: 'ex-15-3-7',
          type: 'fill_blank',
          question: 'Complete: ⲙⲏⲓϥ ___ ⲙⲫⲟⲟⲩ = Give us today',
          correctAnswer: 'ⲛⲁⲛ',
          options: ['ⲛⲁⲛ', 'ⲛⲁⲕ', 'ⲛⲁϥ', 'ⲛⲱⲟⲩ'],
          explanation: 'ⲛⲁⲛ (to us) is the suffix pronoun meaning "us"'
        },
        {
          id: 'ex-15-3-8',
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
      id: 'lesson-15-4',
      unitId: 'unit-15',
      title: 'Forgiveness',
      description: 'Forgive us our trespasses',
      order: 4,
      xpReward: 30,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-15-4-1',
          type: 'translation',
          question: 'Translate: ⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ⲉⲃⲟⲗ',
          questionCoptic: 'ⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ⲉⲃⲟⲗ',
          correctAnswer: 'Forgive us our trespasses',
          options: ['Forgive us our trespasses', 'Remove our sins', 'Our debts forgive', 'Send away our sins'],
          explanation: 'ⲭⲁ...ⲉⲃⲟⲗ = forgive/let go + ⲛⲉⲛⲛⲟⲃⲓ = our sins + ⲛⲁⲛ = to us'
        },
        {
          id: 'ex-15-4-2',
          type: 'multiple_choice',
          question: 'What does ⲛⲟⲃⲓ mean?',
          questionCoptic: 'ⲛⲟⲃⲓ',
          correctAnswer: 'sin/trespass',
          options: ['sin/trespass', 'debt', 'mistake', 'fault'],
          explanation: 'ⲛⲟⲃⲓ (nobi) means "sin" or "trespass" - plural is ⲛⲉⲛⲛⲟⲃⲓ (our sins)'
        },
        {
          id: 'ex-15-4-3',
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
          id: 'ex-15-4-4',
          type: 'translation',
          question: 'Translate: ⲙⲫⲣⲏϯ ϩⲱⲛ ⲉⲧⲉⲛⲭⲱ ⲉⲃⲟⲗ',
          questionCoptic: 'ⲙⲫⲣⲏϯ ϩⲱⲛ ⲉⲧⲉⲛⲭⲱ ⲉⲃⲟⲗ',
          correctAnswer: 'As we forgive',
          options: ['As we forgive', 'When we forgive', 'If we forgive', 'We who forgive'],
          explanation: 'ⲙⲫⲣⲏϯ = as/like + ϩⲱⲛ = also/too + ⲉⲧⲉⲛⲭⲱ ⲉⲃⲟⲗ = we forgive'
        },
        {
          id: 'ex-15-4-5',
          type: 'multiple_choice',
          question: 'What is the verb "to forgive" in Coptic?',
          correctAnswer: 'ⲭⲁ...ⲉⲃⲟⲗ',
          options: ['ⲭⲁ...ⲉⲃⲟⲗ', 'ⲭⲱ', 'ⲉⲃⲟⲗ', 'ⲭⲁⲓ'],
          explanation: 'ⲭⲁ...ⲉⲃⲟⲗ (kha...ebol) is a compound verb meaning "to forgive" - literally "let go out"'
        },
        {
          id: 'ex-15-4-6',
          type: 'sentence_building',
          question: 'Build: "Forgive us our sins"',
          correctAnswer: 'ⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ⲉⲃⲟⲗ',
          wordBank: ['ⲭⲁ', 'ⲛⲉⲛⲛⲟⲃⲓ', 'ⲛⲁⲛ', 'ⲉⲃⲟⲗ'],
          explanation: 'ⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ⲉⲃⲟⲗ = let go + our sins + to us + out'
        },
        {
          id: 'ex-15-4-7',
          type: 'fill_blank',
          question: 'Complete: ⲭⲁ ___ ⲛⲁⲛ ⲉⲃⲟⲗ = Forgive us our sins',
          correctAnswer: 'ⲛⲉⲛⲛⲟⲃⲓ',
          options: ['ⲛⲉⲛⲛⲟⲃⲓ', 'ⲡⲉⲛⲛⲟⲃⲓ', 'ⲛⲟⲃⲓ', 'ⲟⲩⲛⲟⲃⲓ'],
          explanation: 'ⲛⲉⲛⲛⲟⲃⲓ (our sins) uses the plural possessive prefix ⲛⲉⲛ-'
        },
        {
          id: 'ex-15-4-8',
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
      id: 'lesson-15-5',
      unitId: 'unit-15',
      title: 'Deliverance from Evil',
      description: 'Lead us not into temptation, deliver us from evil',
      order: 5,
      xpReward: 30,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-15-5-1',
          type: 'translation',
          question: 'Translate: ⲟⲩⲟϩ ⲙⲡⲉⲣⲉⲛⲧⲉⲛ ⲉϧⲟⲩⲛ ⲉⲡⲓⲣⲁⲥⲙⲟⲥ',
          questionCoptic: 'ⲟⲩⲟϩ ⲙⲡⲉⲣⲉⲛⲧⲉⲛ ⲉϧⲟⲩⲛ ⲉⲡⲓⲣⲁⲥⲙⲟⲥ',
          correctAnswer: 'And lead us not into temptation',
          options: ['And lead us not into temptation', 'Do not bring temptation', 'Lead not into trial', 'And temptation lead not'],
          explanation: 'ⲟⲩⲟϩ = and + ⲙⲡⲉⲣⲉⲛⲧⲉⲛ = lead us not + ⲉϧⲟⲩⲛ = into + ⲉⲡⲓⲣⲁⲥⲙⲟⲥ = temptation'
        },
        {
          id: 'ex-15-5-2',
          type: 'multiple_choice',
          question: 'What does ⲡⲓⲣⲁⲥⲙⲟⲥ mean?',
          questionCoptic: 'ⲡⲓⲣⲁⲥⲙⲟⲥ',
          correctAnswer: 'temptation/trial',
          options: ['temptation/trial', 'evil', 'sin', 'danger'],
          explanation: 'ⲡⲓⲣⲁⲥⲙⲟⲥ (pirasmos) means "temptation" or "trial/testing"'
        },
        {
          id: 'ex-15-5-3',
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
          id: 'ex-15-5-4',
          type: 'translation',
          question: 'Translate: ⲁⲗⲗⲁ ⲛⲁϩⲙⲉⲛ ⲉⲃⲟⲗϩⲁ ⲡⲓⲡⲉⲧϩⲱⲟⲩ',
          questionCoptic: 'ⲁⲗⲗⲁ ⲛⲁϩⲙⲉⲛ ⲉⲃⲟⲗϩⲁ ⲡⲓⲡⲉⲧϩⲱⲟⲩ',
          correctAnswer: 'But deliver us from evil',
          options: ['But deliver us from evil', 'But save us from the evil one', 'Deliver from all evil', 'But rescue from bad'],
          explanation: 'ⲁⲗⲗⲁ = but + ⲛⲁϩⲙⲉⲛ = deliver us + ⲉⲃⲟⲗϩⲁ = from + ⲡⲓⲡⲉⲧϩⲱⲟⲩ = the evil (one)'
        },
        {
          id: 'ex-15-5-5',
          type: 'multiple_choice',
          question: 'What is "evil" or "the evil one" in Coptic?',
          correctAnswer: 'ⲡⲓⲡⲉⲧϩⲱⲟⲩ',
          options: ['ⲡⲓⲡⲉⲧϩⲱⲟⲩ', 'ⲡⲓⲛⲟⲃⲓ', 'ⲡⲓⲥⲁⲧⲁⲛⲁⲥ', 'ⲡⲓϩⲱⲟⲩ'],
          explanation: 'ⲡⲓⲡⲉⲧϩⲱⲟⲩ (pipethōou) = the one who is evil/the evil one'
        },
        {
          id: 'ex-15-5-6',
          type: 'sentence_building',
          question: 'Build: "Lead us not into temptation"',
          correctAnswer: 'ⲙⲡⲉⲣⲉⲛⲧⲉⲛ ⲉϧⲟⲩⲛ ⲉⲡⲓⲣⲁⲥⲙⲟⲥ',
          wordBank: ['ⲙⲡⲉⲣⲉⲛⲧⲉⲛ', 'ⲉϧⲟⲩⲛ', 'ⲉⲡⲓⲣⲁⲥⲙⲟⲥ', 'ⲉⲃⲟⲗ'],
          explanation: 'ⲙⲡⲉⲣⲉⲛⲧⲉⲛ ⲉϧⲟⲩⲛ ⲉⲡⲓⲣⲁⲥⲙⲟⲥ = lead not us + into + temptation'
        },
        {
          id: 'ex-15-5-7',
          type: 'fill_blank',
          question: 'Complete: ⲛⲁϩⲙⲉⲛ ___ ⲡⲓⲡⲉⲧϩⲱⲟⲩ = Deliver us from evil',
          correctAnswer: 'ⲉⲃⲟⲗϩⲁ',
          options: ['ⲉⲃⲟⲗϩⲁ', 'ⲉϧⲟⲩⲛ', 'ⲉⲃⲟⲗ', 'ϧⲉⲛ'],
          explanation: 'ⲉⲃⲟⲗϩⲁ (ebolha) means "from" in the sense of deliverance'
        },
        {
          id: 'ex-15-5-8',
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
      id: 'lesson-15-6',
      unitId: 'unit-15',
      title: 'Doxology',
      description: 'For thine is the kingdom, power, and glory',
      order: 6,
      xpReward: 30,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-15-6-1',
          type: 'translation',
          question: 'Translate: ϫⲉ ⲑⲱⲕ ⲧⲉ ϯⲙⲉⲧⲟⲩⲣⲟ',
          questionCoptic: 'ϫⲉ ⲑⲱⲕ ⲧⲉ ϯⲙⲉⲧⲟⲩⲣⲟ',
          correctAnswer: 'For thine is the kingdom',
          options: ['For thine is the kingdom', 'Because yours is the kingdom', 'The kingdom is yours', 'You have the kingdom'],
          explanation: 'ϫⲉ = for/because + ⲑⲱⲕ ⲧⲉ = yours is (fem.) + ϯⲙⲉⲧⲟⲩⲣⲟ = the kingdom'
        },
        {
          id: 'ex-15-6-2',
          type: 'multiple_choice',
          question: 'What does ⲑⲱⲕ mean?',
          questionCoptic: 'ⲑⲱⲕ',
          correctAnswer: 'yours (emphatic)',
          options: ['yours (emphatic)', 'you', 'your', 'thine'],
          explanation: 'ⲑⲱⲕ (thōk) is the emphatic possessive pronoun "yours" (masculine addressee)'
        },
        {
          id: 'ex-15-6-3',
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
          id: 'ex-15-6-4',
          type: 'translation',
          question: 'Translate: ⲛⲉⲙ ϯϫⲟⲙ ⲛⲉⲙ ⲡⲓⲱⲟⲩ',
          questionCoptic: 'ⲛⲉⲙ ϯϫⲟⲙ ⲛⲉⲙ ⲡⲓⲱⲟⲩ',
          correctAnswer: 'And the power and the glory',
          options: ['And the power and the glory', 'With power and glory', 'The power with glory', 'Power and glory together'],
          explanation: 'ⲛⲉⲙ = and/with + ϯϫⲟⲙ = the power + ⲛⲉⲙ = and + ⲡⲓⲱⲟⲩ = the glory'
        },
        {
          id: 'ex-15-6-5',
          type: 'multiple_choice',
          question: 'What is "power/strength" in Coptic?',
          correctAnswer: 'ϫⲟⲙ',
          options: ['ϫⲟⲙ', 'ϭⲟⲙ', 'ⲱⲟⲩ', 'ⲙⲉⲧⲟⲩⲣⲟ'],
          explanation: 'ϫⲟⲙ (jom) means "power" or "strength" - with article: ϯϫⲟⲙ'
        },
        {
          id: 'ex-15-6-6',
          type: 'sentence_building',
          question: 'Build: "Forever and ever. Amen"',
          correctAnswer: 'ϣⲁ ⲉⲛⲉϩ ⲛⲉⲙ ϣⲁ ⲉⲛⲉϩ ⲛ̀ⲧⲉⲛⲓⲉⲛⲉϩ ⲁⲙⲏⲛ',
          wordBank: ['ϣⲁ', 'ⲉⲛⲉϩ', 'ⲛⲉⲙ', 'ⲛ̀ⲧⲉⲛⲓⲉⲛⲉϩ', 'ⲁⲙⲏⲛ'],
          explanation: 'ϣⲁ ⲉⲛⲉϩ ⲛⲉⲙ ϣⲁ ⲉⲛⲉϩ ⲛ̀ⲧⲉⲛⲓⲉⲛⲉϩ ⲁⲙⲏⲛ = unto eternity and unto eternity of eternities, amen'
        },
        {
          id: 'ex-15-6-7',
          type: 'fill_blank',
          question: 'Complete: ϫⲉ ⲑⲱⲕ ⲧⲉ ϯⲙⲉⲧⲟⲩⲣⲟ ⲛⲉⲙ ϯϫⲟⲙ ⲛⲉⲙ ⲡⲓ___ = For thine is the kingdom and power and the glory',
          correctAnswer: 'ⲱⲟⲩ',
          options: ['ⲱⲟⲩ', 'ⲟⲩⲱⲟⲩ', 'ⲥⲙⲟⲩ', 'ⲣⲁⲛ'],
          explanation: 'ⲱⲟⲩ (ōou) means "glory" - with article: ⲡⲓⲱⲟⲩ'
        },
        {
          id: 'ex-15-6-8',
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
    }
  ]
};

export default unit15;
