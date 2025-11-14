import { Unit } from '../../types';

// UNIT 36: PAST CONTINUOUS TENSE
// Bohairic dialect - Imperfect/continuous past tense
// Fills gap: Expressing ongoing past actions ("I was doing")

const unit36: Unit = {
  id: 'unit-36',
  title: 'Past Continuous Tense',
  description: 'Express ongoing actions in the past: "I was doing"',
  order: 36,
  color: '#3F51B5',
  lessons: [
    {
      id: 'lesson-36-1',
      unitId: 'unit-36',
      title: 'Formation: ⲛⲁⲓ-, ⲛⲁⲕ-, ⲛⲁϥ-',
      description: 'Learn past continuous prefixes',
      order: 1,
      xpReward: 25,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-36-1-1',
          type: 'multiple_choice',
          question: 'What prefix means "I was (doing)"?',
          correctAnswer: 'ⲛⲁⲓ-',
          options: ['ⲛⲁⲓ-', 'ⲁⲓ-', 'ϯ-', 'ⲛⲁ-'],
          explanation: 'ⲛⲁⲓ- = I was (doing) - past continuous/imperfect tense prefix'
        },
        {
          id: 'ex-36-1-2',
          type: 'matching',
          question: 'Match past continuous prefixes (singular)',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲛⲁⲓ-', english: 'I was (doing)' },
            { coptic: 'ⲛⲁⲕ-', english: 'you (m) were (doing)' },
            { coptic: 'ⲛⲁⲣⲉ-', english: 'you (f) were (doing)' },
            { coptic: 'ⲛⲁϥ-', english: 'he was (doing)' }
          ]
        },
        {
          id: 'ex-36-1-3',
          type: 'translation',
          question: 'Translate: ⲛⲁⲓⲙⲟϣⲓ',
          questionCoptic: 'ⲛⲁⲓⲙⲟϣⲓ',
          correctAnswer: 'I was walking',
          options: ['I was walking', 'I walked', 'I walk', 'I will walk'],
          explanation: 'ⲛⲁⲓⲙⲟϣⲓ = I was walking (past continuous)'
        },
        {
          id: 'ex-36-1-4',
          type: 'matching',
          question: 'Match past continuous prefixes (plural)',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲛⲁⲥ-', english: 'she was (doing)' },
            { coptic: 'ⲛⲁⲛ-', english: 'we were (doing)' },
            { coptic: 'ⲛⲁⲣⲉⲧⲉⲛ-', english: 'you (pl) were (doing)' },
            { coptic: 'ⲛⲁⲩ-', english: 'they were (doing)' }
          ]
        },
        {
          id: 'ex-36-1-5',
          type: 'fill_blank',
          question: 'Complete: ___ⲥⲁϫⲓ = He was speaking',
          correctAnswer: 'ⲛⲁϥ',
          options: ['ⲛⲁϥ', 'ⲁϥ', 'ϥ', 'ⲛⲁⲓ'],
          explanation: 'ⲛⲁϥⲥⲁϫⲓ = he was speaking (ⲛⲁϥ- = he was)'
        },
        {
          id: 'ex-36-1-6',
          type: 'sentence_building',
          question: 'Build: "We were eating"',
          correctAnswer: 'ⲛⲁⲛⲟⲩⲱⲙ',
          wordBank: ['ⲛⲁⲛ', 'ⲟⲩⲱⲙ', 'ⲁⲛ', 'ⲧⲉⲛ'],
          explanation: 'ⲛⲁⲛⲟⲩⲱⲙ = we were eating (ⲛⲁⲛ- + infinitive)'
        },
        {
          id: 'ex-36-1-7',
          type: 'translation',
          question: 'Translate: ⲛⲁⲣⲉⲥⲱⲧⲙ',
          questionCoptic: 'ⲛⲁⲣⲉⲥⲱⲧⲙ',
          correctAnswer: 'You (f) were listening',
          options: ['You (f) were listening', 'You (m) were listening', 'She was listening', 'You listened'],
          explanation: 'ⲛⲁⲣⲉⲥⲱⲧⲙ = you (feminine) were listening (past continuous)'
        },
        {
          id: 'ex-36-1-8',
          type: 'multiple_choice',
          question: 'What is the pattern for past continuous?',
          correctAnswer: 'ⲛⲁ- prefix + subject + infinitive',
          options: ['ⲛⲁ- prefix + subject + infinitive', 'ⲁ- prefix + subject + infinitive', 'subject prefix + infinitive', 'ⲛⲁ- + verb'],
          explanation: 'Past continuous uses ⲛⲁ- + subject marker + infinitive verb'
        }
      ]
    },
    {
      id: 'lesson-36-2',
      unitId: 'unit-36',
      title: 'Usage & Meaning',
      description: 'When to use past continuous',
      order: 2,
      xpReward: 25,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-36-2-1',
          type: 'multiple_choice',
          question: 'Past continuous describes:',
          correctAnswer: 'Ongoing actions in the past',
          options: ['Ongoing actions in the past', 'Completed actions', 'Future intentions', 'Habitual actions'],
          explanation: 'Past continuous (ⲛⲁⲓ-, ⲛⲁⲕ-, etc.) describes actions that were ongoing in the past'
        },
        {
          id: 'ex-36-2-2',
          type: 'translation',
          question: 'Translate: ⲛⲁⲓⲱϣ ⲙ̀ⲡⲓϫⲱⲙ',
          questionCoptic: 'ⲛⲁⲓⲱϣ ⲙ̀ⲡⲓϫⲱⲙ',
          correctAnswer: 'I was reading the book',
          options: ['I was reading the book', 'I read the book', 'I am reading the book', 'I will read the book'],
          explanation: 'ⲛⲁⲓⲱϣ ⲙ̀ⲡⲓϫⲱⲙ = I was reading the book (ongoing past action)'
        },
        {
          id: 'ex-36-2-3',
          type: 'matching',
          question: 'Match sentences with contexts',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲛⲁⲩϣⲉⲛⲓ ⲉϯⲉⲕⲕⲗⲏⲥⲓⲁ', english: 'They were going to church' },
            { coptic: 'ⲛⲁⲥⲥⲁϫⲓ ⲛⲉⲙⲏⲓ', english: 'She was speaking with me' },
            { coptic: 'ⲛⲁⲛⲥⲱⲧⲙ', english: 'We were listening' },
            { coptic: 'ⲛⲁⲕⲙⲟϣⲓ ⲙ̀ⲙⲁⲩ', english: 'You were walking there' }
          ]
        },
        {
          id: 'ex-36-2-4',
          type: 'fill_blank',
          question: 'Complete: ⲛⲁϥ___ ϧⲉⲛ ϯⲉⲕⲕⲗⲏⲥⲓⲁ = He was praying in the church',
          correctAnswer: 'ϣⲗⲏⲗ',
          options: ['ϣⲗⲏⲗ', 'ⲙⲟϣⲓ', 'ⲥⲁϫⲓ', 'ⲛⲁⲩ'],
          explanation: 'ⲛⲁϥϣⲗⲏⲗ ϧⲉⲛ ϯⲉⲕⲕⲗⲏⲥⲓⲁ = he was praying in the church'
        },
        {
          id: 'ex-36-2-5',
          type: 'sentence_building',
          question: 'Build: "They were seeing me"',
          correctAnswer: 'ⲛⲁⲩⲛⲁⲩ ⲉ̀ⲣⲟⲓ',
          wordBank: ['ⲛⲁⲩⲛⲁⲩ', 'ⲉ̀ⲣⲟⲓ', 'ⲁⲩⲛⲁⲩ', 'ⲉ̀ⲣⲟⲕ'],
          explanation: 'ⲛⲁⲩⲛⲁⲩ ⲉ̀ⲣⲟⲓ = they were seeing me (past continuous + prepositional phrase)'
        },
        {
          id: 'ex-36-2-6',
          type: 'translation',
          question: 'Translate: ⲛⲁⲣⲉⲧⲉⲛⲥ̀ϧⲁⲓ',
          questionCoptic: 'ⲛⲁⲣⲉⲧⲉⲛⲥ̀ϧⲁⲓ',
          correctAnswer: 'You (pl) were writing',
          options: ['You (pl) were writing', 'You wrote', 'You are writing', 'We were writing'],
          explanation: 'ⲛⲁⲣⲉⲧⲉⲛⲥ̀ϧⲁⲓ = you (plural) were writing (ongoing past)'
        },
        {
          id: 'ex-36-2-7',
          type: 'multiple_choice',
          question: 'Which expresses background action in a narrative?',
          correctAnswer: 'ⲛⲁⲓⲙⲟϣⲓ',
          options: ['ⲛⲁⲓⲙⲟϣⲓ', 'ⲁⲓⲙⲟϣⲓ', 'ϯⲙⲟϣⲓ', 'ϯⲛⲁⲙⲟϣⲓ'],
          explanation: 'ⲛⲁⲓⲙⲟϣⲓ (I was walking) describes background/ongoing action - perfect for narratives'
        },
        {
          id: 'ex-36-2-8',
          type: 'translation',
          question: 'Translate: ⲛⲁⲓⲓ̀ ⲉⲡⲓⲏⲓ',
          questionCoptic: 'ⲛⲁⲓⲓ̀ ⲉⲡⲓⲏⲓ',
          correctAnswer: 'I was coming to the house',
          options: ['I was coming to the house', 'I came to the house', 'I come to the house', 'I will come to the house'],
          explanation: 'ⲛⲁⲓⲓ̀ ⲉⲡⲓⲏⲓ = I was coming to the house (ongoing past movement)'
        }
      ]
    },
    {
      id: 'lesson-36-3',
      unitId: 'unit-36',
      title: 'Perfect vs Continuous',
      description: 'Distinguish completed from ongoing past',
      order: 3,
      xpReward: 30,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-36-3-1',
          type: 'matching',
          question: 'Match: Perfect (completed) vs Continuous (ongoing)',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲁⲓⲛⲁⲩ', english: 'I saw (completed)' },
            { coptic: 'ⲛⲁⲓⲛⲁⲩ', english: 'I was seeing (ongoing)' },
            { coptic: 'ⲁϥⲥⲁϫⲓ', english: 'He spoke (completed)' },
            { coptic: 'ⲛⲁϥⲥⲁϫⲓ', english: 'He was speaking (ongoing)' }
          ]
        },
        {
          id: 'ex-36-3-2',
          type: 'multiple_choice',
          question: 'Which means "I walked" (completed action)?',
          correctAnswer: 'ⲁⲓⲙⲟϣⲓ',
          options: ['ⲁⲓⲙⲟϣⲓ', 'ⲛⲁⲓⲙⲟϣⲓ', 'ϯⲙⲟϣⲓ', 'ϯⲛⲁⲙⲟϣⲓ'],
          explanation: 'ⲁⲓⲙⲟϣⲓ = I walked (perfect/completed). ⲛⲁⲓⲙⲟϣⲓ = I was walking (continuous)'
        },
        {
          id: 'ex-36-3-3',
          type: 'translation',
          question: 'Translate: ⲛⲁⲓⲟⲩⲱⲙ ϩⲟⲧⲉ ⲁⲕⲓ̀',
          questionCoptic: 'ⲛⲁⲓⲟⲩⲱⲙ ϩⲟⲧⲉ ⲁⲕⲓ̀',
          correctAnswer: 'I was eating when you came',
          options: ['I was eating when you came', 'I ate before you came', 'I ate when you came', 'I will eat when you come'],
          explanation: 'ⲛⲁⲓⲟⲩⲱⲙ ϩⲟⲧⲉ ⲁⲕⲓ̀ = I was eating (continuous) when you came (perfect)'
        },
        {
          id: 'ex-36-3-4',
          type: 'fill_blank',
          question: 'Complete: ___ⲙⲟϣⲓ ϩⲟⲧⲉ ⲁⲓⲛⲁⲩ ⲉ̀ⲣⲟϥ = I was walking when I saw him',
          correctAnswer: 'ⲛⲁⲓ',
          options: ['ⲛⲁⲓ', 'ⲁⲓ', 'ϯ', 'ϯⲛⲁ'],
          explanation: 'ⲛⲁⲓⲙⲟϣⲓ (continuous) + ⲁⲓⲛⲁⲩ (perfect) = background + main event'
        },
        {
          id: 'ex-36-3-5',
          type: 'sentence_building',
          question: 'Build: "He was speaking (when) I entered"',
          correctAnswer: 'ⲛⲁϥⲥⲁϫⲓ ϩⲟⲧⲉ ⲁⲓϣⲉ ⲉ̀ϧⲟⲩⲛ',
          wordBank: ['ⲛⲁϥⲥⲁϫⲓ', 'ϩⲟⲧⲉ', 'ⲁⲓϣⲉ', 'ⲉ̀ϧⲟⲩⲛ'],
          explanation: 'ⲛⲁϥⲥⲁϫⲓ ϩⲟⲧⲉ ⲁⲓϣⲉ ⲉ̀ϧⲟⲩⲛ = he was speaking when I entered'
        },
        {
          id: 'ex-36-3-6',
          type: 'matching',
          question: 'Identify tense in context',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲁⲩⲙⲟⲩϯ ⲉ̀ⲣⲟϥ', english: 'They called him (done)' },
            { coptic: 'ⲛⲁⲩⲙⲟⲩϯ ⲉ̀ⲣⲟϥ', english: 'They were calling him (ongoing)' },
            { coptic: 'ⲁⲛⲟⲩⲱⲙ', english: 'We ate (done)' },
            { coptic: 'ⲛⲁⲛⲟⲩⲱⲙ', english: 'We were eating (ongoing)' }
          ]
        },
        {
          id: 'ex-36-3-7',
          type: 'translation',
          question: 'Translate: ⲁϥϣⲉⲛⲓ ⲉ̀ⲫⲏⲓ ⲉ̀ⲛⲁⲓⲥⲁϫⲓ ⲛⲉⲙⲁⲕ',
          questionCoptic: 'ⲁϥϣⲉⲛⲓ ⲉ̀ⲫⲏⲓ ⲉ̀ⲛⲁⲓⲥⲁϫⲓ ⲛⲉⲙⲁⲕ',
          correctAnswer: 'He went home while I was speaking with you',
          options: ['He went home while I was speaking with you', 'He was going home when I spoke', 'He goes home and I speak', 'He will go while I speak'],
          explanation: 'ⲁϥϣⲉⲛⲓ (perfect) + ⲉ̀ⲛⲁⲓⲥⲁϫⲓ (circumstantial continuous) = main + background'
        },
        {
          id: 'ex-36-3-8',
          type: 'multiple_choice',
          question: 'In narrative, which typically describes the setting/background?',
          correctAnswer: 'Past continuous (ⲛⲁⲓ-)',
          options: ['Past continuous (ⲛⲁⲓ-)', 'Perfect past (ⲁⲓ-)', 'Present (ϯ-)', 'Future (ϯⲛⲁ-)'],
          explanation: 'Past continuous (ⲛⲁⲓ-, ⲛⲁⲕ-, etc.) describes background/setting; perfect (ⲁⲓ-, ⲁⲕ-) for main events'
        }
      ]
    },
    {
      id: 'lesson-36-4',
      unitId: 'unit-36',
      title: 'Practice in Narratives',
      description: 'Use past continuous in stories',
      order: 4,
      xpReward: 30,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-36-4-1',
          type: 'translation',
          question: 'Translate: ⲛⲁⲓⲙⲟϣⲓ ϧⲉⲛ ϯⲙⲱⲓⲧ ϩⲟⲧⲉ ⲁⲓⲛⲁⲩ ⲉ̀ⲟⲩⲣⲱⲙⲓ',
          questionCoptic: 'ⲛⲁⲓⲙⲟϣⲓ ϧⲉⲛ ϯⲙⲱⲓⲧ ϩⲟⲧⲉ ⲁⲓⲛⲁⲩ ⲉ̀ⲟⲩⲣⲱⲙⲓ',
          correctAnswer: 'I was walking on the road when I saw a man',
          options: ['I was walking on the road when I saw a man', 'I walked and saw a man', 'I walk and see a man', 'I was walking to see a man'],
          explanation: 'Background (ⲛⲁⲓⲙⲟϣⲓ) + main event (ⲁⲓⲛⲁⲩ) - classic narrative pattern'
        },
        {
          id: 'ex-36-4-2',
          type: 'sentence_building',
          question: 'Build: "The sun was setting when we arrived"',
          correctAnswer: 'ⲛⲁⲣⲉ ⲫⲣⲏ ϩⲱⲧⲡ ϩⲟⲧⲉ ⲁⲛⲓ̀',
          wordBank: ['ⲛⲁⲣⲉ', 'ⲫⲣⲏ', 'ϩⲱⲧⲡ', 'ϩⲟⲧⲉ', 'ⲁⲛⲓ̀'],
          explanation: 'ⲛⲁⲣⲉ ⲫⲣⲏ ϩⲱⲧⲡ ϩⲟⲧⲉ ⲁⲛⲓ̀ = the sun was setting when we arrived'
        },
        {
          id: 'ex-36-4-3',
          type: 'translation',
          question: 'Translate: ⲛⲁⲩϣⲗⲏⲗ ϧⲉⲛ ϯⲉⲕⲕⲗⲏⲥⲓⲁ',
          questionCoptic: 'ⲛⲁⲩϣⲗⲏⲗ ϧⲉⲛ ϯⲉⲕⲕⲗⲏⲥⲓⲁ',
          correctAnswer: 'They were praying in the church',
          options: ['They were praying in the church', 'They prayed in church', 'They pray in church', 'They will pray in church'],
          explanation: 'ⲛⲁⲩϣⲗⲏⲗ ϧⲉⲛ ϯⲉⲕⲕⲗⲏⲥⲓⲁ = they were praying in the church (ongoing past)'
        },
        {
          id: 'ex-36-4-4',
          type: 'fill_blank',
          question: 'Complete narrative: ⲛⲁⲓⲱϣ ___ ⲁϥⲙⲟⲩϯ ⲉ̀ⲣⲟⲓ = I was reading when he called me',
          correctAnswer: 'ϩⲟⲧⲉ',
          options: ['ϩⲟⲧⲉ', 'ⲟⲩⲟϩ', 'ⲁⲗⲗⲁ', 'ϫⲉ'],
          explanation: 'ϩⲟⲧⲉ = when (connects continuous background with main event)'
        },
        {
          id: 'ex-36-4-5',
          type: 'translation',
          question: 'Translate: ⲛⲁⲛⲥⲱⲧⲙ ⲉ̀ⲡⲓⲥⲁϫⲓ ⲛ̀ⲧⲉ Ⲡϭⲟⲓⲥ',
          questionCoptic: 'ⲛⲁⲛⲥⲱⲧⲙ ⲉ̀ⲡⲓⲥⲁϫⲓ ⲛ̀ⲧⲉ Ⲡϭⲟⲓⲥ',
          correctAnswer: 'We were listening to the word of the Lord',
          options: ['We were listening to the word of the Lord', 'We listened to the word', 'We listen to the Lord', 'We heard the word'],
          explanation: 'ⲛⲁⲛⲥⲱⲧⲙ ⲉ̀ⲡⲓⲥⲁϫⲓ ⲛ̀ⲧⲉ Ⲡϭⲟⲓⲥ = we were listening to the word of the Lord'
        },
        {
          id: 'ex-36-4-6',
          type: 'matching',
          question: 'Match narrative sequences',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲛⲁϥⲥⲁϫⲓ ⲁⲓⲥⲱⲧⲙ', english: 'He was speaking, I listened' },
            { coptic: 'ⲛⲁⲓⲙⲟϣⲓ ⲁⲓⲛⲁⲩ', english: 'I was walking, I saw' },
            { coptic: 'ⲛⲁⲥⲥ̀ϧⲁⲓ ⲁⲛⲓ̀', english: 'She was writing, we came' },
            { coptic: 'ⲛⲁⲩⲟⲩⲱⲙ ⲁϥϣⲉⲛⲓ', english: 'They were eating, he left' }
          ]
        },
        {
          id: 'ex-36-4-7',
          type: 'sentence_building',
          question: 'Build: "People were coming to see Him"',
          correctAnswer: 'ⲛⲁⲩⲓ̀ ⲛ̀ϫⲉ ϩⲁⲛⲣⲱⲙⲓ ⲉⲛⲁⲩ ⲉ̀ⲣⲟϥ',
          wordBank: ['ⲛⲁⲩⲓ̀', 'ⲛ̀ϫⲉ', 'ϩⲁⲛⲣⲱⲙⲓ', 'ⲉⲛⲁⲩ', 'ⲉ̀ⲣⲟϥ'],
          explanation: 'ⲛⲁⲩⲓ̀ ⲛ̀ϫⲉ ϩⲁⲛⲣⲱⲙⲓ ⲉⲛⲁⲩ ⲉ̀ⲣⲟϥ = people were coming to see Him'
        },
        {
          id: 'ex-36-4-8',
          type: 'translation',
          question: 'Translate: ⲛⲁⲣⲉⲧⲉⲛⲙⲉⲛⲣⲉ ⲫϯ ϧⲉⲛ ⲛⲉⲧⲉⲛϩⲏⲧ',
          questionCoptic: 'ⲛⲁⲣⲉⲧⲉⲛⲙⲉⲛⲣⲉ ⲫϯ ϧⲉⲛ ⲛⲉⲧⲉⲛϩⲏⲧ',
          correctAnswer: 'You were loving God in your hearts',
          options: ['You were loving God in your hearts', 'You loved God in your hearts', 'You love God in your hearts', 'Love God in your hearts'],
          explanation: 'ⲛⲁⲣⲉⲧⲉⲛⲙⲉⲛⲣⲉ ⲫϯ ϧⲉⲛ ⲛⲉⲧⲉⲛϩⲏⲧ = you (pl) were loving God in your hearts'
        }
      ]
    }
  ]
};

export default unit36;
