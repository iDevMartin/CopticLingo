import { Lesson } from '../../types';

// TEST FILE FOR UNIT 36: PAST CONTINUOUS TENSE
// Comprehensive test exercises covering all 4 lessons
// 25 exercises total - testing ⲛⲁⲓ-, ⲛⲁⲕ-, ⲛⲁϥ- prefixes and past continuous usage

const unit36Test: Lesson = {
id: 'lesson-36-test',
      unitId: 'unit-36',
      title: 'Past Continuous Comprehensive Test',
      description: 'Test all past continuous constructions and contexts',
      order: 1,
      xpReward: 150,
      isLocked: true,
      completed: false,
      exercises: [
        // Formation tests
        {
          id: 'test-36-1',
          type: 'multiple_choice',
          question: 'What prefix means "I was (doing)" in past continuous?',
          correctAnswer: 'ⲛⲁⲓ-',
          options: ['ⲛⲁⲓ-', 'ⲁⲓ-', 'ϯ-', 'ⲧⲉⲛ-'],
          explanation: 'ⲛⲁⲓ- = I was (doing) - past continuous/imperfect tense prefix'
        },
        {
          id: 'test-36-2',
          type: 'translation',
          question: 'Translate: ⲛⲁⲓⲙⲟϣⲓ',
          questionCoptic: 'ⲛⲁⲓⲙⲟϣⲓ',
          correctAnswer: 'I was walking',
          options: ['I was walking', 'I walked', 'I walk', 'I will walk'],
          explanation: 'ⲛⲁⲓⲙⲟϣⲓ = I was walking (past continuous form)'
        },
        {
          id: 'test-36-3',
          type: 'matching',
          question: 'Match past continuous prefixes (singular)',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲛⲁⲓ-', english: 'I was' },
            { coptic: 'ⲛⲁⲕ-', english: 'you (m) were' },
            { coptic: 'ⲛⲁⲣⲉ-', english: 'you (f) were' },
            { coptic: 'ⲛⲁϥ-', english: 'he was' }
          ]
        },
        {
          id: 'test-36-4',
          type: 'fill_blank',
          question: 'Complete: ___ⲥⲁϫⲓ = He was speaking',
          correctAnswer: 'ⲛⲁϥ',
          options: ['ⲛⲁϥ', 'ⲁϥ', 'ϥ', 'ⲛⲁⲕ'],
          explanation: 'ⲛⲁϥⲥⲁϫⲓ = he was speaking (ⲛⲁϥ- = he was)'
        },
        {
          id: 'test-36-5',
          type: 'sentence_building',
          question: 'Build: "We were eating"',
          correctAnswer: 'ⲛⲁⲛⲟⲩⲱⲙ',
          wordBank: ['ⲛⲁⲛ', 'ⲟⲩⲱⲙ', 'ⲁⲛ', 'ⲧⲉⲛ'],
          explanation: 'ⲛⲁⲛⲟⲩⲱⲙ = we were eating (ⲛⲁⲛ- + infinitive)'
        },
        // Usage and meaning tests
        {
          id: 'test-36-6',
          type: 'translation',
          question: 'Translate: ⲛⲁⲓⲱϣ ⲙ̀ⲡⲓϫⲱⲙ',
          questionCoptic: 'ⲛⲁⲓⲱϣ ⲙ̀ⲡⲓϫⲱⲙ',
          correctAnswer: 'I was reading the book',
          options: ['I was reading the book', 'I read the book', 'I am reading the book', 'I will read the book'],
          explanation: 'ⲛⲁⲓⲱϣ ⲙ̀ⲡⲓϫⲱⲙ = I was reading the book (ongoing past action)'
        },
        {
          id: 'test-36-7',
          type: 'matching',
          question: 'Match sentences with meanings',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲛⲁⲩϣⲉⲛⲓ ⲉϯⲉⲕⲕⲗⲏⲥⲓⲁ', english: 'They were going to church' },
            { coptic: 'ⲛⲁⲥⲥⲁϫⲓ ⲛⲉⲙⲏⲓ', english: 'She was speaking with me' },
            { coptic: 'ⲛⲁⲛⲥⲱⲧⲙ', english: 'We were listening' },
            { coptic: 'ⲛⲁⲕⲙⲟϣⲓ ⲙ̀ⲙⲁⲩ', english: 'You were walking there' }
          ]
        },
        {
          id: 'test-36-8',
          type: 'multiple_choice',
          question: 'Past continuous describes:',
          correctAnswer: 'Ongoing actions in the past',
          options: ['Ongoing actions in the past', 'Completed actions', 'Future intentions', 'Habitual past'],
          explanation: 'Past continuous (ⲛⲁⲓ-, ⲛⲁⲕ-, etc.) describes actions that were ongoing/incomplete in the past'
        },
        // Perfect vs Continuous comparison
        {
          id: 'test-36-9',
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
          id: 'test-36-10',
          type: 'translation',
          question: 'Translate: ⲛⲁⲓⲟⲩⲱⲙ ϩⲟⲧⲉ ⲁⲕⲓ̀',
          questionCoptic: 'ⲛⲁⲓⲟⲩⲱⲙ ϩⲟⲧⲉ ⲁⲕⲓ̀',
          correctAnswer: 'I was eating when you came',
          options: ['I was eating when you came', 'I ate before you came', 'I ate when you came', 'I will eat when you come'],
          explanation: 'ⲛⲁⲓⲟⲩⲱⲙ ϩⲟⲧⲉ ⲁⲕⲓ̀ = I was eating (continuous background) when you came (perfect main event)'
        },
        {
          id: 'test-36-11',
          type: 'fill_blank',
          question: 'Complete: ___ⲙⲟϣⲓ ϩⲟⲧⲉ ⲁⲓⲛⲁⲩ ⲉ̀ⲣⲟϥ = I was walking when I saw him',
          correctAnswer: 'ⲛⲁⲓ',
          options: ['ⲛⲁⲓ', 'ⲁⲓ', 'ϯ', 'ϯⲛⲁ'],
          explanation: 'ⲛⲁⲓⲙⲟϣⲓ (continuous background) + ⲁⲓⲛⲁⲩ (perfect main event) = narrative pattern'
        },
        {
          id: 'test-36-12',
          type: 'translation',
          question: 'Translate: ⲛⲁⲣⲉⲧⲉⲛⲥ̀ϧⲁⲓ',
          questionCoptic: 'ⲛⲁⲣⲉⲧⲉⲛⲥ̀ϧⲁⲓ',
          correctAnswer: 'You (pl) were writing',
          options: ['You (pl) were writing', 'You wrote', 'You are writing', 'We were writing'],
          explanation: 'ⲛⲁⲣⲉⲧⲉⲛⲥ̀ϧⲁⲓ = you (plural) were writing (ongoing past)'
        },
        // Narrative usage tests
        {
          id: 'test-36-13',
          type: 'translation',
          question: 'Translate: ⲛⲁⲓⲙⲟϣⲓ ϧⲉⲛ ϯⲙⲱⲓⲧ ϩⲟⲧⲉ ⲁⲓⲛⲁⲩ ⲉ̀ⲟⲩⲣⲱⲙⲓ',
          questionCoptic: 'ⲛⲁⲓⲙⲟϣⲓ ϧⲉⲛ ϯⲙⲱⲓⲧ ϩⲟⲧⲉ ⲁⲓⲛⲁⲩ ⲉ̀ⲟⲩⲣⲱⲙⲓ',
          correctAnswer: 'I was walking on the road when I saw a man',
          options: ['I was walking on the road when I saw a man', 'I walked and saw a man', 'I walk and see a man', 'I was walking to see a man'],
          explanation: 'Background (ⲛⲁⲓⲙⲟϣⲓ) + main event (ⲁⲓⲛⲁⲩ) - classic narrative pattern'
        },
        {
          id: 'test-36-14',
          type: 'sentence_building',
          question: 'Build: "The sun was setting when we arrived"',
          correctAnswer: 'ⲛⲁⲣⲉ ⲫⲣⲏ ϩⲱⲧⲡ ϩⲟⲧⲉ ⲁⲛⲓ̀',
          wordBank: ['ⲛⲁⲣⲉ', 'ⲫⲣⲏ', 'ϩⲱⲧⲡ', 'ϩⲟⲧⲉ', 'ⲁⲛⲓ̀'],
          explanation: 'ⲛⲁⲣⲉ ⲫⲣⲏ ϩⲱⲧⲡ ϩⲟⲧⲉ ⲁⲛⲓ̀ = the sun was setting when we arrived'
        },
        {
          id: 'test-36-15',
          type: 'translation',
          question: 'Translate: ⲛⲁⲩϣⲗⲏⲗ ϧⲉⲛ ϯⲉⲕⲕⲗⲏⲥⲓⲁ',
          questionCoptic: 'ⲛⲁⲩϣⲗⲏⲗ ϧⲉⲛ ϯⲉⲕⲕⲗⲏⲥⲓⲁ',
          correctAnswer: 'They were praying in the church',
          options: ['They were praying in the church', 'They prayed in church', 'They pray in church', 'They will pray in church'],
          explanation: 'ⲛⲁⲩϣⲗⲏⲗ ϧⲉⲛ ϯⲉⲕⲕⲗⲏⲥⲓⲁ = they were praying in the church (ongoing past)'
        },
        {
          id: 'test-36-16',
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
        // Plural forms test
        {
          id: 'test-36-17',
          type: 'matching',
          question: 'Match past continuous prefixes (plural)',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲛⲁⲥ-', english: 'she was' },
            { coptic: 'ⲛⲁⲛ-', english: 'we were' },
            { coptic: 'ⲛⲁⲣⲉⲧⲉⲛ-', english: 'you (pl) were' },
            { coptic: 'ⲛⲁⲩ-', english: 'they were' }
          ]
        },
        {
          id: 'test-36-18',
          type: 'translation',
          question: 'Translate: ⲛⲁⲩⲛⲁⲩ ⲉ̀ⲣⲟⲓ',
          questionCoptic: 'ⲛⲁⲩⲛⲁⲩ ⲉ̀ⲣⲟⲓ',
          correctAnswer: 'They were seeing me',
          options: ['They were seeing me', 'They saw me', 'They see me', 'They will see me'],
          explanation: 'ⲛⲁⲩⲛⲁⲩ ⲉ̀ⲣⲟⲓ = they were seeing me (past continuous)'
        },
        {
          id: 'test-36-19',
          type: 'fill_blank',
          question: 'Complete: ⲛⲁⲛⲥⲱⲧⲙ ⲉ̀ⲡⲓⲥⲁϫⲓ ⲛ̀ⲧⲉ Ⲡϭⲟⲓⲥ = We were listening to the word of the Lord',
          correctAnswer: 'ⲛⲁⲛ',
          options: ['ⲛⲁⲛ', 'ⲛⲁⲓ', 'ⲛⲁϥ', 'ⲛⲁⲩ'],
          explanation: 'ⲛⲁⲛⲥⲱⲧⲙ = we were listening (ⲛⲁⲛ- = we were)'
        },
        {
          id: 'test-36-20',
          type: 'sentence_building',
          question: 'Build: "People were coming to see Him"',
          correctAnswer: 'ⲛⲁⲩⲓ̀ ⲛ̀ϫⲉ ϩⲁⲛⲣⲱⲙⲓ ⲉⲛⲁⲩ ⲉ̀ⲣⲟϥ',
          wordBank: ['ⲛⲁⲩⲓ̀', 'ⲛ̀ϫⲉ', 'ϩⲁⲛⲣⲱⲙⲓ', 'ⲉⲛⲁⲩ', 'ⲉ̀ⲣⲟϥ'],
          explanation: 'ⲛⲁⲩⲓ̀ ⲛ̀ϫⲉ ϩⲁⲛⲣⲱⲙⲓ ⲉⲛⲁⲩ ⲉ̀ⲣⲟϥ = people were coming to see Him'
        },
        // Context and background usage
        {
          id: 'test-36-21',
          type: 'multiple_choice',
          question: 'In narrative, which typically describes the setting/background?',
          correctAnswer: 'Past continuous (ⲛⲁⲓ-)',
          options: ['Past continuous (ⲛⲁⲓ-)', 'Perfect past (ⲁⲓ-)', 'Present (ϯ-)', 'Future (ϯⲛⲁ-)'],
          explanation: 'Past continuous (ⲛⲁⲓ-, ⲛⲁⲕ-, etc.) describes background/setting; perfect (ⲁⲓ-, ⲁⲕ-) for main events'
        },
        {
          id: 'test-36-22',
          type: 'translation',
          question: 'Translate: ⲛⲁⲣⲉⲧⲉⲛⲙⲉⲛⲣⲉ ⲫϯ ϧⲉⲛ ⲛⲉⲧⲉⲛϩⲏⲧ',
          questionCoptic: 'ⲛⲁⲣⲉⲧⲉⲛⲙⲉⲛⲣⲉ ⲫϯ ϧⲉⲛ ⲛⲉⲧⲉⲛϩⲏⲧ',
          correctAnswer: 'You were loving God in your hearts',
          options: ['You were loving God in your hearts', 'You loved God in your hearts', 'You love God in your hearts', 'Love God in your hearts'],
          explanation: 'ⲛⲁⲣⲉⲧⲉⲛⲙⲉⲛⲣⲉ ⲫϯ ϧⲉⲛ ⲛⲉⲧⲉⲛϩⲏⲧ = you (pl) were loving God in your hearts'
        },
        {
          id: 'test-36-23',
          type: 'fill_blank',
          question: 'Complete: ⲛⲁⲓⲓ̀ ⲉⲡⲓⲏⲓ = I was coming to the house',
          correctAnswer: 'ⲛⲁⲓ',
          options: ['ⲛⲁⲓ', 'ⲁⲓ', 'ϯ', 'ϯⲛⲁ'],
          explanation: 'ⲛⲁⲓⲓ̀ ⲉⲡⲓⲏⲓ = I was coming to the house (ongoing past movement)'
        },
        {
          id: 'test-36-24',
          type: 'translation',
          question: 'Translate: ⲛⲁϥϣⲗⲏⲗ ϧⲉⲛ ϯⲉⲕⲕⲗⲏⲥⲓⲁ',
          questionCoptic: 'ⲛⲁϥϣⲗⲏⲗ ϧⲉⲛ ϯⲉⲕⲕⲗⲏⲥⲓⲁ',
          correctAnswer: 'He was praying in the church',
          options: ['He was praying in the church', 'He prayed in church', 'He prays in church', 'He will pray in church'],
          explanation: 'ⲛⲁϥϣⲗⲏⲗ ϧⲉⲛ ϯⲉⲕⲕⲗⲏⲥⲓⲁ = he was praying in the church (ongoing past)'
        },
        {
          id: 'test-36-25',
          type: 'matching',
          question: 'Match tense distinctions in context',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲁⲩⲙⲟⲩϯ ⲉ̀ⲣⲟϥ', english: 'They called him (done)' },
            { coptic: 'ⲛⲁⲩⲙⲟⲩϯ ⲉ̀ⲣⲟϥ', english: 'They were calling him (ongoing)' },
            { coptic: 'ⲁⲛⲟⲩⲱⲙ', english: 'We ate (done)' },
            { coptic: 'ⲛⲁⲛⲟⲩⲱⲙ', english: 'We were eating (ongoing)' }
          ]
        }
      ]
};

export default unit36Test;
