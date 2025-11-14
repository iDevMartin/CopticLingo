import { Unit } from '../../types';

// UNIT 45: ADVANCED COMPOSITION
// Bohairic dialect - Writing in Coptic
// Advanced application: Active production of original Coptic text

const unit45: Unit = {
  id: 'unit-45',
  title: 'Advanced Composition',
  description: 'Write in Coptic: prayers, narratives, letters, translations',
  order: 45,
  color: '#E91E63',
  lessons: [
    {
      id: 'lesson-45-1',
      unitId: 'unit-45',
      title: 'Writing Simple Prayers',
      description: 'Compose original prayers in Coptic',
      order: 1,
      xpReward: 40,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-45-1-1',
          type: 'sentence_building',
          question: 'Build a prayer opening: "O Lord, have mercy"',
          correctAnswer: 'Ⲱ̀ Ⲡϭⲟⲓⲥ ⲛⲁⲓ ⲛⲁⲛ',
          wordBank: ['Ⲱ̀', 'Ⲡϭⲟⲓⲥ', 'ⲛⲁⲓ', 'ⲛⲁⲛ'],
          explanation: 'Ⲱ̀ Ⲡϭⲟⲓⲥ ⲛⲁⲓ ⲛⲁⲛ = O Lord, have mercy on us (standard prayer opening)'
        },
        {
          id: 'ex-45-1-2',
          type: 'multiple_choice',
          question: 'How would you say "We glorify You"?',
          correctAnswer: 'Ⲧⲉⲛϯⲱ̀ⲟⲩ ⲛⲁⲕ',
          options: ['Ⲧⲉⲛϯⲱ̀ⲟⲩ ⲛⲁⲕ', 'Ⲧⲉⲛⲉⲣⲱ̀ⲟⲩ', 'Ⲁⲛϯⲱ̀ⲟⲩ', 'Ϯⲱ̀ⲟⲩ ⲛⲁⲛ'],
          explanation: 'Ⲧⲉⲛϯⲱ̀ⲟⲩ ⲛⲁⲕ = we give glory to you (present tense + indirect object)'
        },
        {
          id: 'ex-45-1-3',
          type: 'translation',
          question: 'Translate this prayer phrase: Ⲧⲉⲛϯϩⲟ ⲉ̀ⲣⲟⲕ ⲛⲁⲓ ⲛⲁⲛ',
          questionCoptic: 'Ⲧⲉⲛϯϩⲟ ⲉ̀ⲣⲟⲕ ⲛⲁⲓ ⲛⲁⲛ',
          correctAnswer: 'We call upon You, have mercy on us',
          options: ['We call upon You, have mercy on us', 'We cry to You for mercy', 'Calling You for compassion', 'We ask Your mercy'],
          explanation: 'Ⲧⲉⲛϯϩⲟ ⲉ̀ⲣⲟⲕ ⲛⲁⲓ ⲛⲁⲛ = we call upon you, have mercy on us (prayer formula)'
        },
        {
          id: 'ex-45-1-4',
          type: 'fill_blank',
          question: 'Complete the praise: Ⲇⲟⲝⲁ ⲥⲓ ___ = Glory to God',
          correctAnswer: 'Ⲫϯ',
          options: ['Ⲫϯ', 'Ⲑⲉⲟⲥ', 'Ⲕⲩⲣⲓⲟⲥ', 'Ⲡⲁⲧⲏⲣ'],
          explanation: 'Ⲇⲟⲝⲁ ⲥⲓ Ⲫϯ = glory to God (doxology, from Greek δόξα σοι Θεός)'
        },
        {
          id: 'ex-45-1-5',
          type: 'sentence_building',
          question: 'Build: "Bless us, O our Father"',
          correctAnswer: 'Ⲥ̀ⲙⲟⲩ ⲉ̀ⲣⲟⲛ Ⲱ̀ Ⲡⲉⲛⲓⲱⲧ',
          wordBank: ['Ⲥ̀ⲙⲟⲩ', 'ⲉ̀ⲣⲟⲛ', 'Ⲱ̀', 'Ⲡⲉⲛⲓⲱⲧ'],
          explanation: 'Ⲥ̀ⲙⲟⲩ ⲉ̀ⲣⲟⲛ Ⲱ̀ Ⲡⲉⲛⲓⲱⲧ = bless us, O our Father (imperative + vocative)'
        },
        {
          id: 'ex-45-1-6',
          type: 'matching',
          question: 'Match prayer vocabulary',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'Ⲧⲉⲛⲟⲩⲱϣⲧ ⲙ̀ⲙⲟⲕ', english: 'We worship You' },
            { coptic: 'Ⲧⲉⲛⲥ̀ⲙⲟⲩ ⲉ̀ⲣⲟⲕ', english: 'We bless You' },
            { coptic: 'Ⲧⲉⲛϣⲉⲡϩ̀ⲙⲟⲧ ⲛ̀ⲧⲟⲧⲕ', english: 'We give thanks to You' },
            { coptic: 'Ⲧⲉⲛϯϩⲟ ⲉ̀ⲣⲟⲕ', english: 'We call upon You' }
          ]
        },
        {
          id: 'ex-45-1-7',
          type: 'translation',
          question: 'Translate: Ⲁⲣⲓⲃⲟⲏ̀ⲑⲓⲛ ⲉ̀ⲣⲟⲛ Ⲱ̀ Ⲫϯ',
          questionCoptic: 'Ⲁⲣⲓⲃⲟⲏ̀ⲑⲓⲛ ⲉ̀ⲣⲟⲛ Ⲱ̀ Ⲫϯ',
          correctAnswer: 'Help us, O God',
          options: ['Help us, O God', 'God helps us', 'We need help, God', 'Helping God'],
          explanation: 'Ⲁⲣⲓⲃⲟⲏ̀ⲑⲓⲛ ⲉ̀ⲣⲟⲛ Ⲱ̀ Ⲫϯ = help us, O God (imperative from Greek βοηθέω)'
        },
        {
          id: 'ex-45-1-8',
          type: 'multiple_choice',
          question: 'How do you end a prayer "Amen"?',
          correctAnswer: 'Ⲁⲙⲏⲛ',
          options: ['Ⲁⲙⲏⲛ', 'Ⲁⲗⲏⲑⲱⲥ', 'Ⲕⲁⲗⲱⲥ', 'Ⲧⲉⲗⲟⲥ'],
          explanation: 'Ⲁⲙⲏⲛ (Amen) = so be it, truly (from Hebrew אָמֵן via Greek ἀμήν)'
        }
      ]
    },
    {
      id: 'lesson-45-2',
      unitId: 'unit-45',
      title: 'Narrative Writing',
      description: 'Tell simple stories in Coptic',
      order: 2,
      xpReward: 40,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-45-2-1',
          type: 'sentence_building',
          question: 'Build: "Once there was a man"',
          correctAnswer: 'Ⲟⲩⲥⲏⲟⲩ ⲛⲉ ⲟⲩⲟⲛ ⲟⲩⲣⲱⲙⲓ',
          wordBank: ['Ⲟⲩⲥⲏⲟⲩ', 'ⲛⲉ', 'ⲟⲩⲟⲛ', 'ⲟⲩⲣⲱⲙⲓ'],
          explanation: 'Ⲟⲩⲥⲏⲟⲩ ⲛⲉ ⲟⲩⲟⲛ ⲟⲩⲣⲱⲙⲓ = one time, there was a man (narrative opening)'
        },
        {
          id: 'ex-45-2-2',
          type: 'multiple_choice',
          question: 'How do you say "He went to the city"?',
          correctAnswer: 'Ⲁϥϣⲉⲛⲁϥ ⲉ̀ϯⲃⲁⲕⲓ',
          options: ['Ⲁϥϣⲉⲛⲁϥ ⲉ̀ϯⲃⲁⲕⲓ', 'Ⲛⲁϥϣⲉⲛⲓ ⲉ̀ϯⲃⲁⲕⲓ', 'Ⲁϥⲙⲟϣⲓ ϯⲃⲁⲕⲓ', 'Ϥⲛⲁϣⲉ ⲉ̀ϯⲃⲁⲕⲓ'],
          explanation: 'Ⲁϥϣⲉⲛⲁϥ ⲉ̀ϯⲃⲁⲕⲓ = he went to the city (perfect tense narrative)'
        },
        {
          id: 'ex-45-2-3',
          type: 'translation',
          question: 'Translate this sentence: Ⲉⲧⲁϥⲓ̀ ⲉ̀ⲡⲓⲏⲓ ⲁϥⲛⲁⲩ ⲉ̀ⲡⲉϥⲓⲱⲧ',
          questionCoptic: 'Ⲉⲧⲁϥⲓ̀ ⲉ̀ⲡⲓⲏⲓ ⲁϥⲛⲁⲩ ⲉ̀ⲡⲉϥⲓⲱⲧ',
          correctAnswer: 'When he came to the house, he saw his father',
          options: ['When he came to the house, he saw his father', 'He came home and saw father', 'Coming home he found father', 'His father saw him at home'],
          explanation: 'Ⲉⲧⲁϥⲓ̀ ⲉ̀ⲡⲓⲏⲓ ⲁϥⲛⲁⲩ ⲉ̀ⲡⲉϥⲓⲱⲧ = when he came to the house, he saw his father (temporal + narrative)'
        },
        {
          id: 'ex-45-2-4',
          type: 'fill_blank',
          question: 'Complete: Ⲙⲉⲛⲉⲛⲥⲁ ⲛⲁⲓ ___ = After these things...',
          correctAnswer: 'ⲇⲉ',
          options: ['ⲇⲉ', 'ⲟⲩⲛ', 'ⲅⲁⲣ', 'ⲙⲉⲛ'],
          explanation: 'Ⲙⲉⲛⲉⲛⲥⲁ ⲛⲁⲓ ⲇⲉ = after these things, and/now (transitional narrative marker)'
        },
        {
          id: 'ex-45-2-5',
          type: 'sentence_building',
          question: 'Build: "He said to him, \'Come\'"',
          correctAnswer: 'Ⲡⲉϫⲁϥ ⲛⲁϥ ϫⲉ Ⲁⲙⲟⲩ',
          wordBank: ['Ⲡⲉϫⲁϥ', 'ⲛⲁϥ', 'ϫⲉ', 'Ⲁⲙⲟⲩ'],
          explanation: 'Ⲡⲉϫⲁϥ ⲛⲁϥ ϫⲉ Ⲁⲙⲟⲩ = he said to him, \"come\" (direct speech in narrative)'
        },
        {
          id: 'ex-45-2-6',
          type: 'matching',
          question: 'Match narrative connectors',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'Ⲟⲩⲟϩ', english: 'And (next event)' },
            { coptic: 'Ⲧⲟⲧⲉ', english: 'Then, at that time' },
            { coptic: 'Ⲙⲉⲛⲉⲛⲥⲁ ⲛⲁⲓ', english: 'After these things' },
            { coptic: 'Ϧⲁϫⲱϥ ⲙ̀ⲫⲟⲟⲩ', english: 'On that day' }
          ]
        },
        {
          id: 'ex-45-2-7',
          type: 'translation',
          question: 'Translate: Ⲛⲁϥⲟⲩⲱϣ ⲉ̀ϣⲉⲛⲁϥ ⲁⲗⲗⲁ ⲙ̀ⲡⲉϥⲉϣϫⲉⲙϭⲟⲙ',
          questionCoptic: 'Ⲛⲁϥⲟⲩⲱϣ ⲉ̀ϣⲉⲛⲁϥ ⲁⲗⲗⲁ ⲙ̀ⲡⲉϥⲉϣϫⲉⲙϭⲟⲙ',
          correctAnswer: 'He wanted to go, but he was not able',
          options: ['He wanted to go, but he was not able', 'He wished to leave but couldn\'t', 'Wanting to go, he had no power', 'He couldn\'t go though he wanted'],
          explanation: 'Ⲛⲁϥⲟⲩⲱϣ ⲉ̀ϣⲉⲛⲁϥ ⲁⲗⲗⲁ ⲙ̀ⲡⲉϥⲉϣϫⲉⲙϭⲟⲙ = he was wanting to go, but he could not (narrative contrast)'
        },
        {
          id: 'ex-45-2-8',
          type: 'multiple_choice',
          question: 'How do you conclude a narrative "And so it happened"?',
          correctAnswer: 'Ⲟⲩⲟϩ ⲁⲥϣⲱⲡⲓ ⲙ̀ⲡⲁⲓⲣⲏϯ',
          options: ['Ⲟⲩⲟϩ ⲁⲥϣⲱⲡⲓ ⲙ̀ⲡⲁⲓⲣⲏϯ', 'Ⲁⲥϣⲱⲡⲓ ⲟⲩⲛ', 'Ⲙⲡⲁⲓⲣⲏϯ ⲁⲥϣⲱⲡⲓ', 'Ⲛⲁⲓϣⲱⲡⲓ'],
          explanation: 'Ⲟⲩⲟϩ ⲁⲥϣⲱⲡⲓ ⲙ̀ⲡⲁⲓⲣⲏϯ = and it happened thus (narrative conclusion)'
        }
      ]
    },
    {
      id: 'lesson-45-3',
      unitId: 'unit-45',
      title: 'Letter Writing',
      description: 'Compose simple letters in Coptic',
      order: 3,
      xpReward: 45,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-45-3-1',
          type: 'sentence_building',
          question: 'Build letter opening: "To my beloved brother"',
          correctAnswer: 'Ⲛ̀ⲧⲟⲧ ⲙ̀ⲡⲁⲙⲉⲛⲣⲓⲧ ⲛ̀ⲥⲟⲛ',
          wordBank: ['Ⲛ̀ⲧⲟⲧ', 'ⲙ̀ⲡⲁ', 'ⲙⲉⲛⲣⲓⲧ', 'ⲛ̀ⲥⲟⲛ'],
          explanation: 'Ⲛ̀ⲧⲟⲧ ⲙ̀ⲡⲁⲙⲉⲛⲣⲓⲧ ⲛ̀ⲥⲟⲛ = to my beloved brother (letter addressee)'
        },
        {
          id: 'ex-45-3-2',
          type: 'multiple_choice',
          question: 'How do you say "Grace and peace to you"?',
          correctAnswer: 'Ⲡⲓϩ̀ⲙⲟⲧ ⲛⲉⲙⲱⲕ ⲛⲉⲙ ϯϩⲓⲣⲏⲛⲏ',
          options: ['Ⲡⲓϩ̀ⲙⲟⲧ ⲛⲉⲙⲱⲕ ⲛⲉⲙ ϯϩⲓⲣⲏⲛⲏ', 'Ⲟⲩϩ̀ⲙⲟⲧ ⲛⲉⲙ ⲟⲩϩⲓⲣⲏⲛⲏ', 'Ϩ̀ⲙⲟⲧ ⲛⲉⲙⲁⲕ', 'Ϯϩⲓⲣⲏⲛⲏ ⲛⲁⲕ'],
          explanation: 'Ⲡⲓϩ̀ⲙⲟⲧ ⲛⲉⲙⲱⲕ ⲛⲉⲙ ϯϩⲓⲣⲏⲛⲏ = the grace (be) with you and the peace (Pauline greeting)'
        },
        {
          id: 'ex-45-3-3',
          type: 'translation',
          question: 'Translate: Ϯⲥ̀ϧⲁⲓ ⲛⲁⲕ ⲉ̀ⲧⲁⲙⲟⲕ',
          questionCoptic: 'Ϯⲥ̀ϧⲁⲓ ⲛⲁⲕ ⲉ̀ⲧⲁⲙⲟⲕ',
          correctAnswer: 'I write to you to inform you',
          options: ['I write to you to inform you', 'I am writing to tell you', 'Writing to inform you', 'I wrote to you'],
          explanation: 'Ϯⲥ̀ϧⲁⲓ ⲛⲁⲕ ⲉ̀ⲧⲁⲙⲟⲕ = I write to you to inform you (letter purpose statement)'
        },
        {
          id: 'ex-45-3-4',
          type: 'fill_blank',
          question: 'Complete: Ⲁⲓⲣⲁϣⲓ ⲉ̀ⲙⲁϣⲱ ⲉ̀ⲧⲁⲥⲱⲧⲙ ϫⲉ ___ = I rejoiced greatly to hear that...',
          correctAnswer: 'ⲕⲟⲩⲟϫ',
          options: ['ⲕⲟⲩⲟϫ', 'ⲁⲕϣⲱⲛⲓ', 'ⲛⲁⲛⲉⲥ', 'ⲁⲕⲓ̀'],
          explanation: 'Ⲁⲓⲣⲁϣⲓ ⲉ̀ⲙⲁϣⲱ ⲉ̀ⲧⲁⲥⲱⲧⲙ ϫⲉ ⲕⲟⲩⲟϫ = I rejoiced greatly to hear that you are well'
        },
        {
          id: 'ex-45-3-5',
          type: 'sentence_building',
          question: 'Build: "Please send me news"',
          correctAnswer: 'Ⲟⲩⲱⲣⲡ ⲛⲏⲓ ⲛ̀ⲟⲩⲁⲅⲅⲉⲗⲓⲁ',
          wordBank: ['Ⲟⲩⲱⲣⲡ', 'ⲛⲏⲓ', 'ⲛ̀ⲟⲩ', 'ⲁⲅⲅⲉⲗⲓⲁ'],
          explanation: 'Ⲟⲩⲱⲣⲡ ⲛⲏⲓ ⲛ̀ⲟⲩⲁⲅⲅⲉⲗⲓⲁ = send me news/message (imperative request)'
        },
        {
          id: 'ex-45-3-6',
          type: 'matching',
          question: 'Match letter phrases',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'Ϯⲉⲣⲫ̀ⲙⲉⲩⲓ̀ ⲙ̀ⲙⲱⲕ', english: 'I remember you' },
            { coptic: 'Ϯⲧⲱⲃϩ ⲉ̀ϩ̀ⲣⲏⲓ ⲉ̀ϫⲱⲕ', english: 'I pray for you' },
            { coptic: 'Ⲁⲣⲓⲥ̀ⲫ̀ⲙⲉⲩⲓ̀ ⲙ̀ⲙⲟⲓ', english: 'Remember me' },
            { coptic: 'Ⲟⲩϫⲁⲓ ϧⲉⲛ Ⲡϭⲟⲓⲥ', english: 'Farewell in the Lord' }
          ]
        },
        {
          id: 'ex-45-3-7',
          type: 'translation',
          question: 'Translate: Ⲙⲁⲣⲉⲛⲥⲟⲩⲧⲱⲛ ⲉ̀ⲣⲟⲛ ϧⲉⲛ ⲛⲓⲉⲩⲭⲏ',
          questionCoptic: 'Ⲙⲁⲣⲉⲛⲥⲟⲩⲧⲱⲛ ⲉ̀ⲣⲟⲛ ϧⲉⲛ ⲛⲓⲉⲩⲭⲏ',
          correctAnswer: 'Let us remember each other in prayers',
          options: ['Let us remember each other in prayers', 'We remember in prayer', 'Remember us in prayers', 'Let us pray together'],
          explanation: 'Ⲙⲁⲣⲉⲛⲥⲟⲩⲧⲱⲛ ⲉ̀ⲣⲟⲛ ϧⲉⲛ ⲛⲓⲉⲩⲭⲏ = let us remember one another in the prayers'
        },
        {
          id: 'ex-45-3-8',
          type: 'multiple_choice',
          question: 'How do you close a letter "Your brother in Christ"?',
          correctAnswer: 'Ⲡⲉⲕⲥⲟⲛ ϧⲉⲛ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ',
          options: ['Ⲡⲉⲕⲥⲟⲛ ϧⲉⲛ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ', 'Ⲟⲩⲥⲟⲛ ⲙ̀Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ', 'Ⲡⲁⲥⲟⲛ ⲛⲁⲕ', 'Ⲥⲟⲛ ϧⲉⲛ Ⲓⲏⲥⲟⲩⲥ'],
          explanation: 'Ⲡⲉⲕⲥⲟⲛ ϧⲉⲛ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ = your brother in Christ (letter signature)'
        }
      ]
    },
    {
      id: 'lesson-45-4',
      unitId: 'unit-45',
      title: 'Translation Practice',
      description: 'Translate English passages to Bohairic',
      order: 4,
      xpReward: 50,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-45-4-1',
          type: 'translation',
          question: 'Translate to Coptic: "God is love"',
          questionCoptic: 'God is love',
          correctAnswer: 'Ⲫϯ ⲟⲩⲁⲅⲁⲡⲏ ⲡⲉ',
          options: ['Ⲫϯ ⲟⲩⲁⲅⲁⲡⲏ ⲡⲉ', 'Ⲫϯ ⲡⲉ ⲟⲩⲁⲅⲁⲡⲏ', 'Ⲟⲩⲁⲅⲁⲡⲏ ⲡⲉ Ⲫϯ', 'Ⲡⲉ Ⲫϯ ⲁⲅⲁⲡⲏ'],
          explanation: 'Ⲫϯ ⲟⲩⲁⲅⲁⲡⲏ ⲡⲉ = God is love (nominal sentence: subject + predicate + copula)'
        },
        {
          id: 'ex-45-4-2',
          type: 'sentence_building',
          question: 'Translate: "In the beginning was the Word"',
          correctAnswer: 'Ϧⲉⲛ ϯⲁⲣⲭⲏ ⲛⲉ ⲡⲓⲥⲁϫⲓ ϣⲟⲡ',
          wordBank: ['Ϧⲉⲛ', 'ϯⲁⲣⲭⲏ', 'ⲛⲉ', 'ⲡⲓⲥⲁϫⲓ', 'ϣⲟⲡ'],
          explanation: 'Ϧⲉⲛ ϯⲁⲣⲭⲏ ⲛⲉ ⲡⲓⲥⲁϫⲓ ϣⲟⲡ = in the beginning, the Word was existing (John 1:1)'
        },
        {
          id: 'ex-45-4-3',
          type: 'multiple_choice',
          question: 'Translate: "Love one another"',
          correctAnswer: 'Ⲙⲉⲛⲣⲉ ⲛⲉⲧⲉⲛⲉ̀ⲣⲏⲟⲩ',
          options: ['Ⲙⲉⲛⲣⲉ ⲛⲉⲧⲉⲛⲉ̀ⲣⲏⲟⲩ', 'Ⲁⲣⲓⲙⲉⲛⲣⲉ ⲙ̀ⲙⲱⲧⲉⲛ', 'Ⲙⲉⲛⲣⲓⲧⲉⲛ ⲛⲉⲧⲉⲛⲉ̀ⲣⲏⲟⲩ', 'Ⲙⲁⲣⲉⲧⲉⲛⲙⲉⲛⲣⲉ'],
          explanation: 'Ⲙⲉⲛⲣⲉ ⲛⲉⲧⲉⲛⲉ̀ⲣⲏⲟⲩ = love one another (imperative + reciprocal pronoun)'
        },
        {
          id: 'ex-45-4-4',
          type: 'translation',
          question: 'Translate: "Blessed are the pure in heart"',
          questionCoptic: 'Blessed are the pure in heart',
          correctAnswer: 'Ⲱⲟⲩⲛⲓⲁⲧⲟⲩ ⲛ̀ⲛⲓⲕⲁⲑⲁⲣⲟⲥ ϧⲉⲛ ⲡⲟⲩϩⲏⲧ',
          options: ['Ⲱⲟⲩⲛⲓⲁⲧⲟⲩ ⲛ̀ⲛⲓⲕⲁⲑⲁⲣⲟⲥ ϧⲉⲛ ⲡⲟⲩϩⲏⲧ', 'Ⲥ̀ⲙⲁⲣⲱⲟⲩⲧ ⲛ̀ⲛⲓⲕⲁⲑⲁⲣⲟⲥ', 'Ⲛⲓⲕⲁⲑⲁⲣⲟⲥ ⲥ̀ⲙⲁⲣⲱⲟⲩⲧ', 'Ⲱⲟⲩⲛⲓⲁⲧⲟⲩ ⲛⲓⲕⲁⲑⲁⲣⲟⲥ'],
          explanation: 'Ⲱⲟⲩⲛⲓⲁⲧⲟⲩ ⲛ̀ⲛⲓⲕⲁⲑⲁⲣⲟⲥ ϧⲉⲛ ⲡⲟⲩϩⲏⲧ = blessed (are) the pure ones in their heart (Beatitude)'
        },
        {
          id: 'ex-45-4-5',
          type: 'sentence_building',
          question: 'Translate: "Give us this day our daily bread"',
          correctAnswer: 'Ⲡⲉⲛⲱⲓⲕ ⲛ̀ⲧⲉ ⲣⲁⲥϯ ⲙⲏⲓϥ ⲛⲁⲛ ⲙ̀ⲫⲟⲟⲩ',
          wordBank: ['Ⲡⲉⲛⲱⲓⲕ', 'ⲛ̀ⲧⲉ', 'ⲣⲁⲥϯ', 'ⲙⲏⲓϥ', 'ⲛⲁⲛ', 'ⲙ̀ⲫⲟⲟⲩ'],
          explanation: 'Ⲡⲉⲛⲱⲓⲕ ⲛ̀ⲧⲉ ⲣⲁⲥϯ ⲙⲏⲓϥ ⲛⲁⲛ ⲙ̀ⲫⲟⲟⲩ = our bread of tomorrow, give it to us today (Lord\'s Prayer)'
        },
        {
          id: 'ex-45-4-6',
          type: 'translation',
          question: 'Translate: "Your will be done"',
          questionCoptic: 'Your will be done',
          correctAnswer: 'Ⲙⲁⲣⲉϥϣⲱⲡⲓ ⲛ̀ϫⲉ ⲡⲉⲕⲟⲩⲱϣ',
          options: ['Ⲙⲁⲣⲉϥϣⲱⲡⲓ ⲛ̀ϫⲉ ⲡⲉⲕⲟⲩⲱϣ', 'Ⲡⲉⲕⲟⲩⲱϣ ⲛⲁϣⲱⲡⲓ', 'Ⲁⲣⲓⲣⲓ ⲙ̀ⲡⲉⲕⲟⲩⲱϣ', 'Ⲛⲁϣⲱⲡⲓ ⲛ̀ϫⲉ ⲟⲩⲱϣ'],
          explanation: 'Ⲙⲁⲣⲉϥϣⲱⲡⲓ ⲛ̀ϫⲉ ⲡⲉⲕⲟⲩⲱϣ = let it happen, your will (jussive + nominative marker)'
        },
        {
          id: 'ex-45-4-7',
          type: 'matching',
          question: 'Match English to Coptic phrases',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'Ϯⲛⲁϩϯ ⲛⲉⲙ ϯϩⲉⲗⲡⲓⲥ ⲛⲉⲙ ϯⲁⲅⲁⲡⲏ', english: 'Faith, hope, and love' },
            { coptic: 'Ⲫⲣⲁⲛ ⲙ̀Ⲫⲓⲱⲧ ⲛⲉⲙ Ⲡⲓϣⲏⲣⲓ', english: 'The name of the Father and Son' },
            { coptic: 'Ⲉ̀ⲡ̀ⲱⲟⲩ ⲙ̀Ⲫϯ', english: 'To the glory of God' },
            { coptic: 'Ϧⲉⲛ ⲧ̀ⲫⲉ ⲛⲉⲙ ϩⲓϫⲉⲛ ⲡⲓⲕⲁϩⲓ', english: 'In heaven and on earth' }
          ]
        },
        {
          id: 'ex-45-4-8',
          type: 'sentence_building',
          question: 'Translate: "The Lord is my shepherd"',
          correctAnswer: 'Ⲡϭⲟⲓⲥ ⲡⲉ ⲡⲁⲙⲁⲛⲉ̀ⲥⲱⲟⲩ',
          wordBank: ['Ⲡϭⲟⲓⲥ', 'ⲡⲉ', 'ⲡⲁ', 'ⲙⲁⲛⲉ̀ⲥⲱⲟⲩ'],
          explanation: 'Ⲡϭⲟⲓⲥ ⲡⲉ ⲡⲁⲙⲁⲛⲉ̀ⲥⲱⲟⲩ = the Lord is my shepherd (Psalm 23:1, nominal sentence)'
        }
      ]
    }
  ]
};

export default unit45;
