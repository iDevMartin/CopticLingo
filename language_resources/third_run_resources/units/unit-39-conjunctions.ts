import { Unit } from '../../types';

// UNIT 39: CONJUNCTIONS & DISCOURSE MARKERS
// Bohairic dialect - Connecting sentences and clauses
// Fills gap: Essential for complex sentence formation and reading

const unit39: Unit = {
  id: 'unit-39',
  title: 'Conjunctions & Connectors',
  description: 'Link sentences and ideas: and, but, or, for, therefore',
  order: 39,
  color: '#009688',
  lessons: [
    {
      id: 'lesson-39-1',
      unitId: 'unit-39',
      title: 'Coordinating Conjunctions',
      description: 'And, but, or - connecting equal parts',
      order: 1,
      xpReward: 25,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-39-1-1',
          type: 'multiple_choice',
          question: 'What is "and" in Coptic?',
          correctAnswer: 'ⲟⲩⲟϩ / ⲛⲉⲙ',
          options: ['ⲟⲩⲟϩ / ⲛⲉⲙ', 'ⲁⲗⲗⲁ', 'ⲏ̀', 'ϫⲉ'],
          explanation: 'ⲟⲩⲟϩ = and (between clauses), ⲛⲉⲙ = and/with (between nouns)'
        },
        {
          id: 'ex-39-1-2',
          type: 'matching',
          question: 'Match basic conjunctions',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲟⲩⲟϩ', english: 'and (clauses)' },
            { coptic: 'ⲛⲉⲙ', english: 'and/with (nouns)' },
            { coptic: 'ⲁⲗⲗⲁ', english: 'but' },
            { coptic: 'ⲏ̀', english: 'or' }
          ]
        },
        {
          id: 'ex-39-1-3',
          type: 'translation',
          question: 'Translate: ⲁⲓⲓ̀ ⲟⲩⲟϩ ⲁⲓⲛⲁⲩ',
          questionCoptic: 'ⲁⲓⲓ̀ ⲟⲩⲟϩ ⲁⲓⲛⲁⲩ',
          correctAnswer: 'I came and I saw',
          options: ['I came and I saw', 'I came but I saw', 'I came or I saw', 'When I came I saw'],
          explanation: 'ⲁⲓⲓ̀ ⲟⲩⲟϩ ⲁⲓⲛⲁⲩ = I came and I saw (ⲟⲩⲟϩ connects clauses)'
        },
        {
          id: 'ex-39-1-4',
          type: 'fill_blank',
          question: 'Complete: ⲡⲓⲓⲱⲧ ___ ⲡⲓϣⲏⲣⲓ = the father and the son',
          correctAnswer: 'ⲛⲉⲙ',
          options: ['ⲛⲉⲙ', 'ⲟⲩⲟϩ', 'ⲁⲗⲗⲁ', 'ⲏ̀'],
          explanation: 'ⲡⲓⲓⲱⲧ ⲛⲉⲙ ⲡⲓϣⲏⲣⲓ = the father and the son (ⲛⲉⲙ with nouns)'
        },
        {
          id: 'ex-39-1-5',
          type: 'sentence_building',
          question: 'Build: "He spoke, but I did not listen"',
          correctAnswer: 'ⲁϥⲥⲁϫⲓ ⲁⲗⲗⲁ ⲙ̀ⲡⲓⲥⲱⲧⲙ',
          wordBank: ['ⲁϥⲥⲁϫⲓ', 'ⲁⲗⲗⲁ', 'ⲙ̀ⲡⲓⲥⲱⲧⲙ', 'ⲟⲩⲟϩ'],
          explanation: 'ⲁϥⲥⲁϫⲓ ⲁⲗⲗⲁ ⲙ̀ⲡⲓⲥⲱⲧⲙ = he spoke but I did not listen (ⲁⲗⲗⲁ = but, contrast)'
        },
        {
          id: 'ex-39-1-6',
          type: 'translation',
          question: 'Translate: ⲁⲕⲛⲁϣⲉⲛⲓ ⲏ̀ ⲁⲕⲛⲁⲟ̀ϩⲓ ⲉ̀ⲣⲁⲧⲕ',
          questionCoptic: 'ⲁⲕⲛⲁϣⲉⲛⲓ ⲏ̀ ⲁⲕⲛⲁⲟ̀ϩⲓ ⲉ̀ⲣⲁⲧⲕ',
          correctAnswer: 'Will you go or will you stay?',
          options: ['Will you go or will you stay?', 'You went and stayed', 'Go or stay', 'You will go and stay'],
          explanation: 'ⲁⲕⲛⲁϣⲉⲛⲓ ⲏ̀ ⲁⲕⲛⲁⲟ̀ϩⲓ ⲉ̀ⲣⲁⲧⲕ = will you go or will you stay? (ⲏ̀ = or)'
        },
        {
          id: 'ex-39-1-7',
          type: 'multiple_choice',
          question: 'Which conjunction shows CONTRAST?',
          correctAnswer: 'ⲁⲗⲗⲁ',
          options: ['ⲁⲗⲗⲁ', 'ⲟⲩⲟϩ', 'ⲛⲉⲙ', 'ⲏ̀'],
          explanation: 'ⲁⲗⲗⲁ (alla) = but (from Greek ἀλλά) - shows contrast'
        },
        {
          id: 'ex-39-1-8',
          type: 'translation',
          question: 'Translate: ⲡⲓⲓⲱⲧ ⲛⲉⲙ ⲡⲓϣⲏⲣⲓ ⲛⲉⲙ ⲡⲓⲡ̀ⲛⲉⲩⲙⲁ ⲉⲑⲟⲩⲁⲃ',
          questionCoptic: 'ⲡⲓⲓⲱⲧ ⲛⲉⲙ ⲡⲓϣⲏⲣⲓ ⲛⲉⲙ ⲡⲓⲡ̀ⲛⲉⲩⲙⲁ ⲉⲑⲟⲩⲁⲃ',
          correctAnswer: 'The Father and the Son and the Holy Spirit',
          options: ['The Father and the Son and the Holy Spirit', 'The Holy Trinity', 'Father, Son, Spirit', 'The three persons'],
          explanation: 'ⲡⲓⲓⲱⲧ ⲛⲉⲙ ⲡⲓϣⲏⲣⲓ ⲛⲉⲙ ⲡⲓⲡ̀ⲛⲉⲩⲙⲁ ⲉⲑⲟⲩⲁⲃ = the Father and the Son and the Holy Spirit'
        }
      ]
    },
    {
      id: 'lesson-39-2',
      unitId: 'unit-39',
      title: 'Subordinating Conjunctions',
      description: 'That, if, because - dependent clauses',
      order: 2,
      xpReward: 25,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-39-2-1',
          type: 'matching',
          question: 'Match subordinating conjunctions',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ϫⲉ', english: 'that (reporting)' },
            { coptic: 'ⲉϣⲱⲡ', english: 'if' },
            { coptic: 'ϩⲓⲛⲁ', english: 'so that, in order that' },
            { coptic: 'ϩⲟⲧⲉ', english: 'when' }
          ]
        },
        {
          id: 'ex-39-2-2',
          type: 'translation',
          question: 'Translate: ⲁϥϫⲟⲥ ϫⲉ ϯⲛⲁⲓ̀',
          questionCoptic: 'ⲁϥϫⲟⲥ ϫⲉ ϯⲛⲁⲓ̀',
          correctAnswer: 'He said that I will come',
          options: ['He said that I will come', 'He said "I will come"', 'He says I came', 'I said he will come'],
          explanation: 'ⲁϥϫⲟⲥ ϫⲉ ϯⲛⲁⲓ̀ = he said that I will come (ϫⲉ introduces reported speech)'
        },
        {
          id: 'ex-39-2-3',
          type: 'fill_blank',
          question: 'Complete: ___ ⲁⲕϣⲁⲛⲛⲁϩϯ ⲁⲕⲛⲁϭⲓ = If you believe, you will receive',
          correctAnswer: 'ⲉϣⲱⲡ',
          options: ['ⲉϣⲱⲡ', 'ϫⲉ', 'ⲟⲩⲟϩ', 'ϩⲓⲛⲁ'],
          explanation: 'ⲉϣⲱⲡ ⲁⲕϣⲁⲛⲛⲁϩϯ ⲁⲕⲛⲁϭⲓ = if you believe, you will receive'
        },
        {
          id: 'ex-39-2-4',
          type: 'sentence_building',
          question: 'Build: "so that you may know"',
          correctAnswer: 'ϩⲓⲛⲁ ⲛ̀ⲧⲉⲕⲉ̀ⲙⲓ',
          wordBank: ['ϩⲓⲛⲁ', 'ⲛ̀ⲧⲉⲕ', 'ⲉ̀ⲙⲓ', 'ϫⲉ'],
          explanation: 'ϩⲓⲛⲁ ⲛ̀ⲧⲉⲕⲉ̀ⲙⲓ = so that you may know (purpose clause)'
        },
        {
          id: 'ex-39-2-5',
          type: 'matching',
          question: 'Match more subordinators',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲉⲑⲃⲉ', english: 'because of, for the sake of' },
            { coptic: 'ϣⲁⲛ-', english: 'until, if ever' },
            { coptic: 'ⲕⲁⲓⲡⲉⲣ', english: 'although' },
            { coptic: 'ⲕⲁⲧⲁ', english: 'according to' }
          ]
        },
        {
          id: 'ex-39-2-6',
          type: 'translation',
          question: 'Translate: ⲁⲓⲓ̀ ϩⲓⲛⲁ ⲛ̀ⲧⲁϯⲥ̀ⲃⲱ',
          questionCoptic: 'ⲁⲓⲓ̀ ϩⲓⲛⲁ ⲛ̀ⲧⲁϯⲥ̀ⲃⲱ',
          correctAnswer: 'I came so that I may teach',
          options: ['I came so that I may teach', 'I came to teach', 'I came and taught', 'I will come to teach'],
          explanation: 'ⲁⲓⲓ̀ ϩⲓⲛⲁ ⲛ̀ⲧⲁϯⲥ̀ⲃⲱ = I came so that I may teach (purpose)'
        },
        {
          id: 'ex-39-2-7',
          type: 'multiple_choice',
          question: 'Which introduces PURPOSE clauses?',
          correctAnswer: 'ϩⲓⲛⲁ',
          options: ['ϩⲓⲛⲁ', 'ϫⲉ', 'ⲉϣⲱⲡ', 'ⲟⲩⲟϩ'],
          explanation: 'ϩⲓⲛⲁ (hina) = so that, in order that (from Greek ἵνα) - purpose clauses'
        },
        {
          id: 'ex-39-2-8',
          type: 'translation',
          question: 'Translate: ⲁⲓⲓ̀ ⲉⲑⲃⲉ ⲫⲁⲓ',
          questionCoptic: 'ⲁⲓⲓ̀ ⲉⲑⲃⲉ ⲫⲁⲓ',
          correctAnswer: 'I came because of this',
          options: ['I came because of this', 'I came for this', 'This is why I came', 'I came therefore'],
          explanation: 'ⲁⲓⲓ̀ ⲉⲑⲃⲉ ⲫⲁⲓ = I came because of this (ⲉⲑⲃⲉ = because of, for the sake of)'
        }
      ]
    },
    {
      id: 'lesson-39-3',
      unitId: 'unit-39',
      title: 'Discourse Markers',
      description: 'For, therefore, then - logical connectors',
      order: 3,
      xpReward: 30,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-39-3-1',
          type: 'matching',
          question: 'Match discourse markers',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲅⲁⲣ', english: 'for, because (explanatory)' },
            { coptic: 'ⲟⲩⲛ', english: 'therefore, then' },
            { coptic: 'ⲇⲉ', english: 'and, but, now (transitional)' },
            { coptic: 'ⲙⲉⲛ', english: 'indeed, on the one hand' }
          ]
        },
        {
          id: 'ex-39-3-2',
          type: 'multiple_choice',
          question: 'What does ⲅⲁⲣ do in a sentence?',
          correctAnswer: 'Explains/gives reason for previous statement',
          options: ['Explains/gives reason for previous statement', 'Contrasts with previous statement', 'Adds new information', 'Asks a question'],
          explanation: 'ⲅⲁⲣ (gar) = for, because - explains or gives reason (from Greek γάρ)'
        },
        {
          id: 'ex-39-3-3',
          type: 'translation',
          question: 'Translate: ⲙⲉⲛⲣⲉ ⲫϯ ⲅⲁⲣ ⲁϥⲙⲉⲛⲣⲓⲧⲉⲛ ⲛ̀ϣⲟⲣⲡ',
          questionCoptic: 'ⲙⲉⲛⲣⲉ ⲫϯ ⲅⲁⲣ ⲁϥⲙⲉⲛⲣⲓⲧⲉⲛ ⲛ̀ϣⲟⲣⲡ',
          correctAnswer: 'Love God, for He loved us first',
          options: ['Love God, for He loved us first', 'Love God and He will love you', 'God loves us first', 'We love God first'],
          explanation: 'ⲙⲉⲛⲣⲉ ⲫϯ ⲅⲁⲣ ⲁϥⲙⲉⲛⲣⲓⲧⲉⲛ ⲛ̀ϣⲟⲣⲡ = love God, for He loved us first (ⲅⲁⲣ explains why)'
        },
        {
          id: 'ex-39-3-4',
          type: 'fill_blank',
          question: 'Complete: ⲫϯ ___ ⲟⲩⲁⲅⲁⲡⲏ ⲡⲉ = For God is love',
          correctAnswer: 'ⲅⲁⲣ',
          options: ['ⲅⲁⲣ', 'ⲟⲩⲛ', 'ⲇⲉ', 'ⲙⲉⲛ'],
          explanation: 'ⲫϯ ⲅⲁⲣ ⲟⲩⲁⲅⲁⲡⲏ ⲡⲉ = for God is love (explanatory)'
        },
        {
          id: 'ex-39-3-5',
          type: 'sentence_building',
          question: 'Build: "Therefore believe"',
          correctAnswer: 'ⲛⲁϩϯ ⲟⲩⲛ',
          wordBank: ['ⲛⲁϩϯ', 'ⲟⲩⲛ', 'ⲅⲁⲣ', 'ⲇⲉ'],
          explanation: 'ⲛⲁϩϯ ⲟⲩⲛ = believe therefore (ⲟⲩⲛ = therefore, then - concluding)'
        },
        {
          id: 'ex-39-3-6',
          type: 'translation',
          question: 'Translate: Ⲓⲏⲥⲟⲩⲥ ⲇⲉ ⲁϥⲉⲣⲟⲩⲱⲓⲛⲓ',
          questionCoptic: 'Ⲓⲏⲥⲟⲩⲥ ⲇⲉ ⲁϥⲉⲣⲟⲩⲱⲓⲛⲓ',
          correctAnswer: 'But Jesus answered / Now Jesus answered',
          options: ['But Jesus answered / Now Jesus answered', 'And Jesus answered', 'Jesus therefore answered', 'Jesus answered'],
          explanation: 'Ⲓⲏⲥⲟⲩⲥ ⲇⲉ ⲁϥⲉⲣⲟⲩⲱⲓⲛⲓ = but/now Jesus answered (ⲇⲉ = transitional, mild contrast)'
        },
        {
          id: 'ex-39-3-7',
          type: 'matching',
          question: 'Match positions of discourse markers',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲅⲁⲣ (postpositive)', english: 'comes AFTER first word' },
            { coptic: 'ⲟⲩⲛ (postpositive)', english: 'comes AFTER verb' },
            { coptic: 'ⲇⲉ (postpositive)', english: 'comes AFTER subject' },
            { coptic: 'ⲟⲩⲟϩ (initial)', english: 'comes BEFORE clause' }
          ]
        },
        {
          id: 'ex-39-3-8',
          type: 'translation',
          question: 'Translate: ⲁϥⲥⲱⲧⲙ ⲟⲩⲛ ⲁϥⲛⲁϩϯ',
          questionCoptic: 'ⲁϥⲥⲱⲧⲙ ⲟⲩⲛ ⲁϥⲛⲁϩϯ',
          correctAnswer: 'He heard, therefore he believed',
          options: ['He heard, therefore he believed', 'He heard and believed', 'He believed when he heard', 'Therefore he heard and believed'],
          explanation: 'ⲁϥⲥⲱⲧⲙ ⲟⲩⲛ ⲁϥⲛⲁϩϯ = he heard, therefore he believed (ⲟⲩⲛ = therefore, conclusion)'
        }
      ]
    },
    {
      id: 'lesson-39-4',
      unitId: 'unit-39',
      title: 'Complex Sentence Building',
      description: 'Combining multiple connectors',
      order: 4,
      xpReward: 30,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-39-4-1',
          type: 'translation',
          question: 'Translate: ⲁϥϫⲟⲥ ϫⲉ ⲉϣⲱⲡ ⲁⲕϣⲁⲛⲛⲁϩϯ ⲁⲕⲛⲁⲛⲟϩⲉⲙ',
          questionCoptic: 'ⲁϥϫⲟⲥ ϫⲉ ⲉϣⲱⲡ ⲁⲕϣⲁⲛⲛⲁϩϯ ⲁⲕⲛⲁⲛⲟϩⲉⲙ',
          correctAnswer: 'He said that if you believe, you will be saved',
          options: ['He said that if you believe, you will be saved', 'He said to believe and be saved', 'If he believes, you will be saved', 'He believed and was saved'],
          explanation: 'ⲁϥϫⲟⲥ ϫⲉ ⲉϣⲱⲡ ⲁⲕϣⲁⲛⲛⲁϩϯ ⲁⲕⲛⲁⲛⲟϩⲉⲙ = he said (ϫⲉ) that if (ⲉϣⲱⲡ) you believe, you will be saved'
        },
        {
          id: 'ex-39-4-2',
          type: 'sentence_building',
          question: 'Build: "I came so that you may have life"',
          correctAnswer: 'ⲁⲓⲓ̀ ϩⲓⲛⲁ ⲛ̀ⲧⲉⲧⲉⲛϭⲓ ⲛ̀ⲟⲩⲱⲛϧ',
          wordBank: ['ⲁⲓⲓ̀', 'ϩⲓⲛⲁ', 'ⲛ̀ⲧⲉⲧⲉⲛϭⲓ', 'ⲛ̀ⲟⲩⲱⲛϧ'],
          explanation: 'ⲁⲓⲓ̀ ϩⲓⲛⲁ ⲛ̀ⲧⲉⲧⲉⲛϭⲓ ⲛ̀ⲟⲩⲱⲛϧ = I came so that you may have life'
        },
        {
          id: 'ex-39-4-3',
          type: 'fill_blank',
          question: 'Complete: ⲁⲛⲛⲁϩϯ ___ ⲁⲛⲛⲟϩⲉⲙ = We believed and (so) we were saved',
          correctAnswer: 'ⲟⲩⲟϩ',
          options: ['ⲟⲩⲟϩ', 'ⲁⲗⲗⲁ', 'ⲏ̀', 'ⲉϣⲱⲡ'],
          explanation: 'ⲁⲛⲛⲁϩϯ ⲟⲩⲟϩ ⲁⲛⲛⲟϩⲉⲙ = we believed and (so) we were saved'
        },
        {
          id: 'ex-39-4-4',
          type: 'translation',
          question: 'Translate: ⲙⲉⲛⲣⲉ ⲫϯ ⲛⲉⲙ ⲡⲉⲕⲡ̀ⲗⲏⲥⲓⲟⲛ ⲕⲁⲧⲁ ⲛⲓⲉⲛⲧⲟⲗⲏ',
          questionCoptic: 'ⲙⲉⲛⲣⲉ ⲫϯ ⲛⲉⲙ ⲡⲉⲕⲡ̀ⲗⲏⲥⲓⲟⲛ ⲕⲁⲧⲁ ⲛⲓⲉⲛⲧⲟⲗⲏ',
          correctAnswer: 'Love God and your neighbor according to the commandments',
          options: ['Love God and your neighbor according to the commandments', 'God loves you and your neighbor', 'The commandments say to love', 'Love according to God'],
          explanation: 'ⲙⲉⲛⲣⲉ ⲫϯ ⲛⲉⲙ (and) ⲡⲉⲕⲡ̀ⲗⲏⲥⲓⲟⲛ ⲕⲁⲧⲁ (according to) ⲛⲓⲉⲛⲧⲟⲗⲏ'
        },
        {
          id: 'ex-39-4-5',
          type: 'matching',
          question: 'Match complex conjunction combinations',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ϫⲉ ⲉϣⲱⲡ', english: 'that if' },
            { coptic: 'ⲟⲩⲟϩ ⲟⲩⲛ', english: 'and therefore' },
            { coptic: 'ⲁⲗⲗⲁ ⲅⲁⲣ', english: 'but for/because' },
            { coptic: 'ϩⲓⲛⲁ ⲟⲩⲛ', english: 'so that therefore' }
          ]
        },
        {
          id: 'ex-39-4-6',
          type: 'translation',
          question: 'Translate: ⲫϯ ⲙⲉⲛ ⲟⲩⲁⲅⲁⲡⲏ ⲡⲉ ⲁⲛⲟⲛ ⲇⲉ ϩⲁⲛⲣⲉϥⲉⲣⲛⲟⲃⲓ',
          questionCoptic: 'ⲫϯ ⲙⲉⲛ ⲟⲩⲁⲅⲁⲡⲏ ⲡⲉ ⲁⲛⲟⲛ ⲇⲉ ϩⲁⲛⲣⲉϥⲉⲣⲛⲟⲃⲓ',
          correctAnswer: 'God indeed is love, but we are sinners',
          options: ['God indeed is love, but we are sinners', 'God loves us sinners', 'God is love and we sin', 'We are sinners but God loves'],
          explanation: 'ⲫϯ ⲙⲉⲛ (indeed) ⲟⲩⲁⲅⲁⲡⲏ ⲡⲉ, ⲁⲛⲟⲛ ⲇⲉ (but) ϩⲁⲛⲣⲉϥⲉⲣⲛⲟⲃⲓ (ⲙⲉⲛ...ⲇⲉ = on one hand...on other hand)'
        },
        {
          id: 'ex-39-4-7',
          type: 'sentence_building',
          question: 'Build: "He spoke, for He is the Truth"',
          correctAnswer: 'ⲁϥⲥⲁϫⲓ ⲛ̀ⲑⲟϥ ⲅⲁⲣ ⲡⲉ ϯⲙⲉⲑⲙⲏⲓ',
          wordBank: ['ⲁϥⲥⲁϫⲓ', 'ⲛ̀ⲑⲟϥ', 'ⲅⲁⲣ', 'ⲡⲉ', 'ϯⲙⲉⲑⲙⲏⲓ'],
          explanation: 'ⲁϥⲥⲁϫⲓ ⲛ̀ⲑⲟϥ ⲅⲁⲣ ⲡⲉ ϯⲙⲉⲑⲙⲏⲓ = he spoke, for He is the Truth (ⲅⲁⲣ explains)'
        },
        {
          id: 'ex-39-4-8',
          type: 'translation',
          question: 'Translate: ⲉϣⲱⲡ ⲟⲩⲛ ⲁⲕⲛⲁϩϯ ⲁⲣⲓⲙⲉⲩⲓ̀ ⲉⲑⲃⲉ ⲫⲁⲓ ϩⲓⲛⲁ ⲛ̀ⲧⲉⲕⲉ̀ⲙⲓ',
          questionCoptic: 'ⲉϣⲱⲡ ⲟⲩⲛ ⲁⲕⲛⲁϩϯ ⲁⲣⲓⲙⲉⲩⲓ̀ ⲉⲑⲃⲉ ⲫⲁⲓ ϩⲓⲛⲁ ⲛ̀ⲧⲉⲕⲉ̀ⲙⲓ',
          correctAnswer: 'If therefore you believe, think about this so that you may know',
          options: ['If therefore you believe, think about this so that you may know', 'Therefore believe and think to know', 'If you think, you will know', 'Believe and know this'],
          explanation: 'ⲉϣⲱⲡ ⲟⲩⲛ (if therefore) ⲁⲕⲛⲁϩϯ, ⲁⲣⲓⲙⲉⲩⲓ̀ ⲉⲑⲃⲉ (about) ⲫⲁⲓ ϩⲓⲛⲁ (so that) ⲛ̀ⲧⲉⲕⲉ̀ⲙⲓ - multiple conjunctions working together'
        }
      ]
    }
  ]
};

export default unit39;
