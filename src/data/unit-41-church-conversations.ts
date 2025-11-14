import { Unit } from '../../types';

// UNIT 41: CHURCH CONVERSATIONS
// Bohairic dialect - Practical dialogues for church settings
// Advanced application: Real conversational Coptic for liturgical contexts

const unit41: Unit = {
  id: 'unit-41',
  title: 'Church Conversations',
  description: 'Speak Coptic in church: greetings, services, sacraments, questions',
  order: 41,
  color: '#9C27B0',
  lessons: [
    {
      id: 'lesson-41-1',
      unitId: 'unit-41',
      title: 'Liturgical Greetings',
      description: 'Church greetings and blessings',
      order: 1,
      xpReward: 30,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-41-1-1',
          type: 'matching',
          question: 'Match common church greetings',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'Ⲭⲉⲣⲉ ⲛⲉⲙⲱⲧⲉⲛ', english: 'Greetings to you (pl)' },
            { coptic: 'Ⲓⲣⲏⲛⲏ ⲛⲉⲙⲱⲧⲉⲛ', english: 'Peace be with you' },
            { coptic: 'Ⲛⲉⲙ ⲡⲉⲕⲡ̀ⲛⲉⲩⲙⲁ', english: 'And with your spirit' },
            { coptic: 'Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ ⲁⲛⲉⲥⲧⲏ', english: 'Christ is risen' }
          ]
        },
        {
          id: 'ex-41-1-2',
          type: 'translation',
          question: 'Translate: Ⲡⲓⲉ̀ⲥⲙⲟⲩ ⲙ̀Ⲫϯ ϣⲱⲡⲓ ⲛⲉⲙⲁⲕ',
          questionCoptic: 'Ⲡⲓⲉ̀ⲥⲙⲟⲩ ⲙ̀Ⲫϯ ϣⲱⲡⲓ ⲛⲉⲙⲁⲕ',
          correctAnswer: 'The blessing of God be with you',
          options: ['The blessing of God be with you', 'God bless you', 'May God bless', 'Blessed be God'],
          explanation: 'Ⲡⲓⲉ̀ⲥⲙⲟⲩ ⲙ̀Ⲫϯ ϣⲱⲡⲓ ⲛⲉⲙⲁⲕ = the blessing of God be with you (common liturgical blessing)'
        },
        {
          id: 'ex-41-1-3',
          type: 'fill_blank',
          question: 'Complete greeting: Ⲭⲉⲣⲉ ___ ⲙ̀ⲡⲁⲥⲱⲧⲏⲣ = Hail my Savior',
          correctAnswer: 'ⲡⲁ',
          options: ['ⲡⲁ', 'ⲫⲁ', 'ⲡⲓ', 'ⲟⲩ'],
          explanation: 'Ⲭⲉⲣⲉ ⲡⲁⲥⲱⲧⲏⲣ = hail/greetings my Savior (possessive + noun)'
        },
        {
          id: 'ex-41-1-4',
          type: 'sentence_building',
          question: 'Build: "Pray for us"',
          correctAnswer: 'Ⲧⲱⲃϩ ⲉ̀ϩ̀ⲣⲏⲓ ⲉ̀ϫⲱⲛ',
          wordBank: ['Ⲧⲱⲃϩ', 'ⲉ̀ϩ̀ⲣⲏⲓ', 'ⲉ̀ϫⲱⲛ', 'ⲛⲁⲛ'],
          explanation: 'Ⲧⲱⲃϩ ⲉ̀ϩ̀ⲣⲏⲓ ⲉ̀ϫⲱⲛ = pray for us (lit. \"pray concerning us\")'
        },
        {
          id: 'ex-41-1-5',
          type: 'translation',
          question: 'Translate: Ⲁⲙⲱⲓⲛⲓ ⲙ̀ⲡⲉⲛⲓⲱⲧ ⲉⲑⲟⲩⲁⲃ',
          questionCoptic: 'Ⲁⲙⲱⲓⲛⲓ ⲙ̀ⲡⲉⲛⲓⲱⲧ ⲉⲑⲟⲩⲁⲃ',
          correctAnswer: 'Come, our holy father',
          options: ['Come, our holy father', 'Our father is holy', 'The holy father came', 'Greet the holy father'],
          explanation: 'Ⲁⲙⲱⲓⲛⲓ ⲙ̀ⲡⲉⲛⲓⲱⲧ ⲉⲑⲟⲩⲁⲃ = come, our holy father (addressing priest)'
        },
        {
          id: 'ex-41-1-6',
          type: 'matching',
          question: 'Match responses and blessings',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'Ⲁⲙⲏⲛ', english: 'Amen / So be it' },
            { coptic: 'Ⲁⲗⲏⲑⲱⲥ ⲁⲛⲉⲥⲧⲏ', english: 'Truly He is risen' },
            { coptic: 'Ⲇⲟⲝⲁ ⲥⲓ Ⲕⲩⲣⲓⲉ', english: 'Glory to You, O Lord' },
            { coptic: 'Ⲡⲓⲉ̀ⲥⲙⲟⲩ ⲙ̀ⲡⲉⲛⲁⲃ', english: 'Our father\'s blessing' }
          ]
        },
        {
          id: 'ex-41-1-7',
          type: 'multiple_choice',
          question: 'What is the proper response to "Ⲓⲣⲏⲛⲏ ⲛⲉⲙⲱⲧⲉⲛ"?',
          correctAnswer: 'Ⲛⲉⲙ ⲡⲉⲕⲡ̀ⲛⲉⲩⲙⲁ',
          options: ['Ⲛⲉⲙ ⲡⲉⲕⲡ̀ⲛⲉⲩⲙⲁ', 'Ⲁⲙⲏⲛ', 'Ⲭⲉⲣⲉ', 'Ⲇⲟⲝⲁ ⲥⲓ'],
          explanation: 'Ⲓⲣⲏⲛⲏ ⲛⲉⲙⲱⲧⲉⲛ (Peace be with you) → Ⲛⲉⲙ ⲡⲉⲕⲡ̀ⲛⲉⲩⲙⲁ (And with your spirit)'
        },
        {
          id: 'ex-41-1-8',
          type: 'translation',
          question: 'Translate: Ⲁⲝⲓⲟⲛ ⲕⲉ ⲇⲓⲕⲉⲟⲛ',
          questionCoptic: 'Ⲁⲝⲓⲟⲛ ⲕⲉ ⲇⲓⲕⲉⲟⲛ',
          correctAnswer: 'Meet and right / Fitting and proper',
          options: ['Meet and right / Fitting and proper', 'Holy and just', 'Worthy and good', 'Right and true'],
          explanation: 'Ⲁⲝⲓⲟⲛ ⲕⲉ ⲇⲓⲕⲉⲟⲛ (from Greek) = meet and right (liturgical response)'
        }
      ]
    },
    {
      id: 'lesson-41-2',
      unitId: 'unit-41',
      title: 'Discussing Services & Prayers',
      description: 'Talk about liturgy, services, and prayer times',
      order: 2,
      xpReward: 30,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-41-2-1',
          type: 'matching',
          question: 'Match liturgical services',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲡⲓⲕⲩⲣⲓⲁⲕⲟⲛ', english: 'Divine Liturgy' },
            { coptic: 'ϯⲁ̀ⲅⲓⲁ ⲕⲟⲓⲛⲱⲛⲓⲁ', english: 'Holy Communion' },
            { coptic: 'ⲡⲓⲁ̀ⲅⲡⲉⲩⲙⲁ', english: 'Agpeya (Book of Hours)' },
            { coptic: 'ⲡⲓⲉⲩⲭⲟⲗⲟⲅⲓⲟⲛ', english: 'Euchologion (Prayer Book)' }
          ]
        },
        {
          id: 'ex-41-2-2',
          type: 'translation',
          question: 'Translate: Ⲁϫⲡ ⲁϣ ⲡⲉ ϯϣⲟⲩϣⲱⲟⲩϣⲓ?',
          questionCoptic: 'Ⲁϫⲡ ⲁϣ ⲡⲉ ϯϣⲟⲩϣⲱⲟⲩϣⲓ?',
          correctAnswer: 'What time is the liturgy?',
          options: ['What time is the liturgy?', 'When is the service?', 'What hour is prayer?', 'How long is the liturgy?'],
          explanation: 'Ⲁϫⲡ ⲁϣ ⲡⲉ ϯϣⲟⲩϣⲱⲟⲩϣⲓ? = what time is the liturgy? (ⲁϫⲡ = hour, ⲁϣ = what)'
        },
        {
          id: 'ex-41-2-3',
          type: 'fill_blank',
          question: 'Complete: Ⲁⲓⲛⲁϣⲉ ⲉ̀___ = I will go to church',
          correctAnswer: 'ϯⲉⲕⲕⲗⲏⲥⲓⲁ',
          options: ['ϯⲉⲕⲕⲗⲏⲥⲓⲁ', 'ⲡⲓⲉⲣⲫⲉⲓ', 'ⲡⲓϣⲟⲩϣⲱⲟⲩϣⲓ', 'ⲡⲓⲏⲓ'],
          explanation: 'Ⲁⲓⲛⲁϣⲉ ⲉ̀ϯⲉⲕⲕⲗⲏⲥⲓⲁ = I will go to the church (ⲉ̀ + definite article)'
        },
        {
          id: 'ex-41-2-4',
          type: 'sentence_building',
          question: 'Build: "We prayed the Agpeya"',
          correctAnswer: 'Ⲁⲛⲉⲣϣⲁⲗⲉⲩⲓⲛ ⲙ̀ⲡⲓⲁ̀ⲅⲡⲉⲩⲙⲁ',
          wordBank: ['Ⲁⲛ', 'ⲉⲣϣⲁⲗⲉⲩⲓⲛ', 'ⲙ̀ⲡⲓⲁ̀ⲅⲡⲉⲩⲙⲁ', 'ⲟⲩϣⲱⲟⲩϣⲓ'],
          explanation: 'Ⲁⲛⲉⲣϣⲁⲗⲉⲩⲓⲛ ⲙ̀ⲡⲓⲁ̀ⲅⲡⲉⲩⲙⲁ = we prayed the Agpeya (ⲉⲣϣⲁⲗⲉⲩⲓⲛ = to pray hours)'
        },
        {
          id: 'ex-41-2-5',
          type: 'matching',
          question: 'Match prayer times',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ϣⲗⲏⲗ ⲛ̀ϣⲟⲣⲡ', english: 'Prime prayer (6am)' },
            { coptic: 'ϣⲗⲏⲗ ⲛ̀ⲁ̀ⲧⲟⲩⲏⲓ', english: 'Terce prayer (9am)' },
            { coptic: 'ϣⲗⲏⲗ ⲙ̀ⲫⲏⲧ', english: 'Sext prayer (noon)' },
            { coptic: 'ϣⲗⲏⲗ ⲙ̀ⲫⲁⲓ', english: 'None prayer (3pm)' }
          ]
        },
        {
          id: 'ex-41-2-6',
          type: 'translation',
          question: 'Translate: Ⲁⲕⲱϣ ⲙ̀ⲡⲓⲉⲩⲁⲅⲅⲉⲗⲓⲟⲛ ⲙ̀ⲫⲟⲟⲩ?',
          questionCoptic: 'Ⲁⲕⲱϣ ⲙ̀ⲡⲓⲉⲩⲁⲅⲅⲉⲗⲓⲟⲛ ⲙ̀ⲫⲟⲟⲩ?',
          correctAnswer: 'Did you read today\'s Gospel?',
          options: ['Did you read today\'s Gospel?', 'Read the Gospel today', 'The Gospel was read today', 'Will you read the Gospel?'],
          explanation: 'Ⲁⲕⲱϣ ⲙ̀ⲡⲓⲉⲩⲁⲅⲅⲉⲗⲓⲟⲛ ⲙ̀ⲫⲟⲟⲩ? = did you read today\'s Gospel? (ⲙ̀ⲫⲟⲟⲩ = of today)'
        },
        {
          id: 'ex-41-2-7',
          type: 'multiple_choice',
          question: 'What is "fasting" in Bohairic?',
          correctAnswer: 'ⲡⲓⲛⲏⲥⲧⲓⲁ',
          options: ['ⲡⲓⲛⲏⲥⲧⲓⲁ', 'ⲡⲓⲟⲩⲱⲙ', 'ⲡⲓϣⲗⲏⲗ', 'ⲡⲓⲥⲱⲟⲩϣⲓ'],
          explanation: 'ⲡⲓⲛⲏⲥⲧⲓⲁ (pi-nistia) = the fasting (from Greek νηστεία)'
        },
        {
          id: 'ex-41-2-8',
          type: 'translation',
          question: 'Translate: Ϯϣⲟⲩϣⲱⲟⲩϣⲓ ⲛⲁⲉⲣϩⲏⲧⲥ ⲁϫⲡ ⲁϣ?',
          questionCoptic: 'Ϯϣⲟⲩϣⲱⲟⲩϣⲓ ⲛⲁⲉⲣϩⲏⲧⲥ ⲁϫⲡ ⲁϣ?',
          correctAnswer: 'What time will the liturgy start?',
          options: ['What time will the liturgy start?', 'When did the liturgy begin?', 'The liturgy begins at what hour?', 'How long is the liturgy?'],
          explanation: 'Ϯϣⲟⲩϣⲱⲟⲩϣⲓ ⲛⲁⲉⲣϩⲏⲧⲥ ⲁϫⲡ ⲁϣ? = the liturgy will start at what hour? (ⲉⲣϩⲏⲧⲥ = to begin)'
        }
      ]
    },
    {
      id: 'lesson-41-3',
      unitId: 'unit-41',
      title: 'Sacramental Vocabulary',
      description: 'Mysteries, baptism, confession, anointing',
      order: 3,
      xpReward: 35,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-41-3-1',
          type: 'matching',
          question: 'Match the seven mysteries (sacraments)',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲡⲓⲱⲙⲥ', english: 'Baptism' },
            { coptic: 'ⲡⲓⲭ̀ⲣⲓⲥⲙⲁ', english: 'Chrismation/Myron' },
            { coptic: 'ⲡⲓⲉⲩⲭⲁⲣⲓⲥⲧⲓⲟⲛ', english: 'Eucharist' },
            { coptic: 'ⲡⲓⲉⲣⲟⲙⲟⲗⲟⲅⲓⲥⲑⲉ', english: 'Confession/Repentance' }
          ]
        },
        {
          id: 'ex-41-3-2',
          type: 'matching',
          question: 'Match more sacraments',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲡⲓⲅⲁⲙⲟⲥ', english: 'Matrimony/Marriage' },
            { coptic: 'ϯⲭⲓⲣⲟⲧⲟⲛⲓⲁ', english: 'Ordination/Priesthood' },
            { coptic: 'ⲡⲓⲉⲩⲭⲉⲗⲉⲟⲛ', english: 'Unction of the Sick' },
            { coptic: 'ⲛⲓⲙⲩⲥⲧⲏⲣⲓⲟⲛ', english: 'The Mysteries/Sacraments' }
          ]
        },
        {
          id: 'ex-41-3-3',
          type: 'translation',
          question: 'Translate: Ⲁⲓϭⲓ ⲛ̀ϯⲕⲟⲓⲛⲱⲛⲓⲁ ⲙ̀ⲫⲟⲟⲩ',
          questionCoptic: 'Ⲁⲓϭⲓ ⲛ̀ϯⲕⲟⲓⲛⲱⲛⲓⲁ ⲙ̀ⲫⲟⲟⲩ',
          correctAnswer: 'I received communion today',
          options: ['I received communion today', 'I will receive communion', 'Today is communion', 'I took the communion'],
          explanation: 'Ⲁⲓϭⲓ ⲛ̀ϯⲕⲟⲓⲛⲱⲛⲓⲁ ⲙ̀ⲫⲟⲟⲩ = I received/took communion today'
        },
        {
          id: 'ex-41-3-4',
          type: 'fill_blank',
          question: 'Complete: Ⲁⲛⲟⲩⲱⲙⲥ ⲙ̀ⲡⲓⲁ̀ⲗⲟⲩ ϧⲉⲛ ___ = We baptized the boy in water',
          correctAnswer: 'ⲡⲓⲙⲱⲟⲩ',
          options: ['ⲡⲓⲙⲱⲟⲩ', 'ⲡⲓⲭ̀ⲣⲓⲥⲙⲁ', 'ⲡⲓⲛⲉϩ', 'ⲡⲓⲏⲣⲡ'],
          explanation: 'Ⲁⲛⲟⲩⲱⲙⲥ ⲙ̀ⲡⲓⲁ̀ⲗⲟⲩ ϧⲉⲛ ⲡⲓⲙⲱⲟⲩ = we baptized the boy in the water'
        },
        {
          id: 'ex-41-3-5',
          type: 'sentence_building',
          question: 'Build: "I confessed my sins"',
          correctAnswer: 'Ⲁⲓⲉⲣⲟⲙⲟⲗⲟⲅⲓⲥⲑⲉ ⲛ̀ⲛⲁⲛⲟⲃⲓ',
          wordBank: ['Ⲁⲓ', 'ⲉⲣⲟⲙⲟⲗⲟⲅⲓⲥⲑⲉ', 'ⲛ̀ⲛⲁⲛⲟⲃⲓ', 'ⲙ̀'],
          explanation: 'Ⲁⲓⲉⲣⲟⲙⲟⲗⲟⲅⲓⲥⲑⲉ ⲛ̀ⲛⲁⲛⲟⲃⲓ = I confessed my sins (ⲉⲣⲟⲙⲟⲗⲟⲅⲓⲥⲑⲉ = to confess)'
        },
        {
          id: 'ex-41-3-6',
          type: 'translation',
          question: 'Translate: Ⲡⲓⲟⲩⲏⲃ ⲛⲁⲧⲁϩⲥ ⲙ̀ⲡⲓⲙⲩⲣⲟⲛ',
          questionCoptic: 'Ⲡⲓⲟⲩⲏⲃ ⲛⲁⲧⲁϩⲥ ⲙ̀ⲡⲓⲙⲩⲣⲟⲛ',
          correctAnswer: 'The priest will anoint with myron',
          options: ['The priest will anoint with myron', 'The priest anointed', 'Myron from the priest', 'The priest has myron'],
          explanation: 'Ⲡⲓⲟⲩⲏⲃ ⲛⲁⲧⲁϩⲥ ⲙ̀ⲡⲓⲙⲩⲣⲟⲛ = the priest will anoint with myron (ⲧⲁϩⲥ = to anoint)'
        },
        {
          id: 'ex-41-3-7',
          type: 'multiple_choice',
          question: 'What is the Coptic word for "priest"?',
          correctAnswer: 'ⲡⲓⲟⲩⲏⲃ',
          options: ['ⲡⲓⲟⲩⲏⲃ', 'ⲡⲓⲇⲓⲁⲕⲱⲛ', 'ⲡⲓⲉ̀ⲡⲓⲥⲕⲟⲡⲟⲥ', 'ⲡⲓⲙⲁⲑⲏⲧⲏⲥ'],
          explanation: 'ⲡⲓⲟⲩⲏⲃ (pi-uib) = the priest (from Greek ἱερεύς via Coptic)'
        },
        {
          id: 'ex-41-3-8',
          type: 'translation',
          question: 'Translate: Ⲁⲩϭⲓⲥⲓ ⲙ̀ⲡⲓⲁ̀ⲗⲟⲩ ⲛⲉⲙ ϯⲁ̀ⲗⲟⲩ ϧⲉⲛ ⲟⲩⲅⲁⲙⲟⲥ',
          questionCoptic: 'Ⲁⲩϭⲓⲥⲓ ⲙ̀ⲡⲓⲁ̀ⲗⲟⲩ ⲛⲉⲙ ϯⲁ̀ⲗⲟⲩ ϧⲉⲛ ⲟⲩⲅⲁⲙⲟⲥ',
          correctAnswer: 'They joined the boy and the girl in marriage',
          options: ['They joined the boy and the girl in marriage', 'The boy married the girl', 'A wedding for the boy and girl', 'They blessed the marriage'],
          explanation: 'Ⲁⲩϭⲓⲥⲓ ⲙ̀ⲡⲓⲁ̀ⲗⲟⲩ ⲛⲉⲙ ϯⲁ̀ⲗⲟⲩ ϧⲉⲛ ⲟⲩⲅⲁⲙⲟⲥ = they joined the boy and girl in marriage (ϭⲓⲥⲓ = to raise up, join)'
        }
      ]
    },
    {
      id: 'lesson-41-4',
      unitId: 'unit-41',
      title: 'Church Questions & Answers',
      description: 'Asking and responding about church matters',
      order: 4,
      xpReward: 35,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-41-4-1',
          type: 'translation',
          question: 'Translate: Ⲁⲕⲛⲏⲥⲧⲉⲩⲓⲛ ⲙ̀ⲫⲟⲟⲩ?',
          questionCoptic: 'Ⲁⲕⲛⲏⲥⲧⲉⲩⲓⲛ ⲙ̀ⲫⲟⲟⲩ?',
          correctAnswer: 'Did you fast today?',
          options: ['Did you fast today?', 'Are you fasting today?', 'Will you fast today?', 'Today is a fast'],
          explanation: 'Ⲁⲕⲛⲏⲥⲧⲉⲩⲓⲛ ⲙ̀ⲫⲟⲟⲩ? = did you fast today? (ⲛⲏⲥⲧⲉⲩⲓⲛ = to fast)'
        },
        {
          id: 'ex-41-4-2',
          type: 'matching',
          question: 'Match questions and answers',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'Ⲛⲓⲙ ⲡⲉ ⲡⲓⲟⲩⲏⲃ?', english: 'Who is the priest?' },
            { coptic: 'Ⲑⲱⲛ ⲡⲉ ⲡⲓⲉⲡⲓⲥⲕⲟⲡⲟⲥ?', english: 'Where is the bishop?' },
            { coptic: 'Ⲟⲩ ⲡⲉ ⲡⲁⲓ?', english: 'What is this?' },
            { coptic: 'Ⲉⲑⲃⲉⲟⲩ ⲁⲕⲓ̀?', english: 'Why did you come?' }
          ]
        },
        {
          id: 'ex-41-4-3',
          type: 'fill_blank',
          question: 'Complete question: ___ ⲡⲉ ⲫⲣⲁⲛ ⲙ̀ⲡⲓⲁ̀ⲅⲓⲟⲥ? = What is the saint\'s name?',
          correctAnswer: 'Ⲟⲩ',
          options: ['Ⲟⲩ', 'Ⲛⲓⲙ', 'Ⲑⲱⲛ', 'Ⲁϣ'],
          explanation: 'Ⲟⲩ ⲡⲉ ⲫⲣⲁⲛ ⲙ̀ⲡⲓⲁ̀ⲅⲓⲟⲥ? = what is the name of the saint? (ⲟⲩ = what)'
        },
        {
          id: 'ex-41-4-4',
          type: 'sentence_building',
          question: 'Build: "When is the feast?"',
          correctAnswer: 'Ⲑⲛⲁⲩ ⲡⲉ ⲡⲓⲓ̀ⲏⲧ?',
          wordBank: ['Ⲑⲛⲁⲩ', 'ⲡⲉ', 'ⲡⲓⲓ̀ⲏⲧ', 'ⲟⲩ'],
          explanation: 'Ⲑⲛⲁⲩ ⲡⲉ ⲡⲓⲓ̀ⲏⲧ? = when is the feast? (ⲑⲛⲁⲩ = when, ⲡⲓⲓ̀ⲏⲧ = feast)'
        },
        {
          id: 'ex-41-4-5',
          type: 'translation',
          question: 'Translate: Ⲁⲕⲉⲣⲟⲙⲟⲗⲟⲅⲓⲥⲑⲉ ⲛ̀ⲥⲁ ϯϣⲟⲩϣⲱⲟⲩϣⲓ?',
          questionCoptic: 'Ⲁⲕⲉⲣⲟⲙⲟⲗⲟⲅⲓⲥⲑⲉ ⲛ̀ⲥⲁ ϯϣⲟⲩϣⲱⲟⲩϣⲓ?',
          correctAnswer: 'Did you confess after the liturgy?',
          options: ['Did you confess after the liturgy?', 'Will you confess?', 'Confess after liturgy', 'You confessed in liturgy'],
          explanation: 'Ⲁⲕⲉⲣⲟⲙⲟⲗⲟⲅⲓⲥⲑⲉ ⲛ̀ⲥⲁ ϯϣⲟⲩϣⲱⲟⲩϣⲓ? = did you confess after the liturgy? (ⲛ̀ⲥⲁ = after)'
        },
        {
          id: 'ex-41-4-6',
          type: 'matching',
          question: 'Match church roles',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲡⲓⲇⲓⲁⲕⲱⲛ', english: 'the deacon' },
            { coptic: 'ⲡⲓⲉ̀ⲡⲓⲥⲕⲟⲡⲟⲥ', english: 'the bishop' },
            { coptic: 'ⲡⲓⲁⲛⲁⲅⲛⲱⲥⲧⲏⲥ', english: 'the reader' },
            { coptic: 'ⲡⲓⲯⲁⲗⲧⲏⲥ', english: 'the cantor/chanter' }
          ]
        },
        {
          id: 'ex-41-4-7',
          type: 'translation',
          question: 'Translate: Ⲁⲓⲥⲱⲧⲙ ⲉ̀ⲡⲓⲕⲁⲧⲏⲭⲏⲥⲓⲥ',
          questionCoptic: 'Ⲁⲓⲥⲱⲧⲙ ⲉ̀ⲡⲓⲕⲁⲧⲏⲭⲏⲥⲓⲥ',
          correctAnswer: 'I listened to the sermon/teaching',
          options: ['I listened to the sermon/teaching', 'I heard the catechism', 'The sermon was heard', 'I will hear teaching'],
          explanation: 'Ⲁⲓⲥⲱⲧⲙ ⲉ̀ⲡⲓⲕⲁⲧⲏⲭⲏⲥⲓⲥ = I listened to the sermon/catechism (from Greek κατήχησις)'
        },
        {
          id: 'ex-41-4-8',
          type: 'multiple_choice',
          question: 'How do you ask "Where is the altar?"',
          correctAnswer: 'Ⲑⲱⲛ ⲡⲉ ⲡⲓⲙⲁⲛⲉⲣϣⲱⲟⲩϣⲓ?',
          options: ['Ⲑⲱⲛ ⲡⲉ ⲡⲓⲙⲁⲛⲉⲣϣⲱⲟⲩϣⲓ?', 'Ⲟⲩ ⲡⲉ ⲡⲓⲙⲁⲛⲉⲣϣⲱⲟⲩϣⲓ?', 'Ⲛⲓⲙ ⲡⲉ ⲡⲓⲙⲁⲛⲉⲣϣⲱⲟⲩϣⲓ?', 'Ⲑⲛⲁⲩ ⲡⲉ ⲡⲓⲙⲁⲛⲉⲣϣⲱⲟⲩϣⲓ?'],
          explanation: 'Ⲑⲱⲛ ⲡⲉ ⲡⲓⲙⲁⲛⲉⲣϣⲱⲟⲩϣⲓ? = where is the altar? (ⲑⲱⲛ = where, ⲙⲁⲛⲉⲣϣⲱⲟⲩϣⲓ = place of worship)'
        }
      ]
    }
  ]
};

export default unit41;
