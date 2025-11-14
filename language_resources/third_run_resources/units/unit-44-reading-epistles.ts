import { Unit } from '../../types';

// UNIT 44: READING EPISTLES
// Bohairic dialect - New Testament letter analysis
// Advanced application: Pauline and Catholic epistles

const unit44: Unit = {
  id: 'unit-44',
  title: 'Reading Epistles',
  description: 'Read NT letters: Pauline greetings, 1 Cor 13, Philippians 2, James',
  order: 44,
  color: '#673AB7',
  lessons: [
    {
      id: 'lesson-44-1',
      unitId: 'unit-44',
      title: 'Pauline Salutations',
      description: 'Opening and closing formulas in Paul\'s letters',
      order: 1,
      xpReward: 35,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-44-1-1',
          type: 'translation',
          question: 'Translate: Ⲡⲁⲩⲗⲟⲥ ⲡⲓⲁ̀ⲡⲟⲥⲧⲟⲗⲟⲥ ⲛ̀ⲧⲉ Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ',
          questionCoptic: 'Ⲡⲁⲩⲗⲟⲥ ⲡⲓⲁ̀ⲡⲟⲥⲧⲟⲗⲟⲥ ⲛ̀ⲧⲉ Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ',
          correctAnswer: 'Paul, apostle of Jesus Christ',
          options: ['Paul, apostle of Jesus Christ', 'Paul the apostle to Christ', 'Paul, Christ\'s apostle', 'Apostle Paul of Jesus'],
          explanation: 'Ⲡⲁⲩⲗⲟⲥ ⲡⲓⲁ̀ⲡⲟⲥⲧⲟⲗⲟⲥ ⲛ̀ⲧⲉ Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ = Paul, the apostle of Jesus Christ (standard opening)'
        },
        {
          id: 'ex-44-1-2',
          type: 'matching',
          question: 'Match standard greetings',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'Ⲡⲓϩ̀ⲙⲟⲧ ⲛⲉⲙⲱⲧⲉⲛ', english: 'Grace be with you' },
            { coptic: 'Ϯϣⲉⲡϩ̀ⲙⲟⲧ ⲛ̀ⲧⲉⲛ Ⲫϯ', english: 'We give thanks to God' },
            { coptic: 'Ⲛⲉⲙ ⲧ̀ϩⲓⲣⲏⲛⲏ ⲉ̀ⲃⲟⲗ ϩⲓⲧⲉⲛ Ⲫϯ', english: 'And peace from God' },
            { coptic: 'Ϯⲉⲣⲫ̀ⲙⲉⲩⲓ̀ ⲛ̀ⲛⲏⲧⲉⲛ', english: 'I remember you' }
          ]
        },
        {
          id: 'ex-44-1-3',
          type: 'translation',
          question: 'Translate: Ⲛ̀ⲧⲉⲛ Ⲫϯ Ⲡⲉⲛⲓⲱⲧ ⲛⲉⲙ Ⲡⲉⲛϭⲟⲓⲥ Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ',
          questionCoptic: 'Ⲛ̀ⲧⲉⲛ Ⲫϯ Ⲡⲉⲛⲓⲱⲧ ⲛⲉⲙ Ⲡⲉⲛϭⲟⲓⲥ Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ',
          correctAnswer: 'From God our Father and our Lord Jesus Christ',
          options: ['From God our Father and our Lord Jesus Christ', 'By God the Father and Christ', 'God and Jesus our Lord', 'The Father and the Lord Christ'],
          explanation: 'Ⲛ̀ⲧⲉⲛ Ⲫϯ Ⲡⲉⲛⲓⲱⲧ ⲛⲉⲙ Ⲡⲉⲛϭⲟⲓⲥ Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ = from God our Father and our Lord Jesus Christ'
        },
        {
          id: 'ex-44-1-4',
          type: 'fill_blank',
          question: 'Complete: Ϯϣⲉⲡϩ̀ⲙⲟⲧ ___ Ⲫϯ ⲛ̀ⲥⲏⲟⲩ ⲛⲓⲃⲉⲛ = I thank God always',
          correctAnswer: 'ⲛ̀ⲧⲉⲛ',
          options: ['ⲛ̀ⲧⲉⲛ', 'ⲙ̀', 'ⲉ̀', 'ϧⲉⲛ'],
          explanation: 'Ϯϣⲉⲡϩ̀ⲙⲟⲧ ⲛ̀ⲧⲉⲛ Ⲫϯ ⲛ̀ⲥⲏⲟⲩ ⲛⲓⲃⲉⲛ = I give thanks to God always (Pauline thanksgiving)'
        },
        {
          id: 'ex-44-1-5',
          type: 'sentence_building',
          question: 'Build: "Grace and peace to you"',
          correctAnswer: 'Ⲡⲓϩ̀ⲙⲟⲧ ⲛⲉⲙⲱⲧⲉⲛ ⲛⲉⲙ ϯϩⲓⲣⲏⲛⲏ',
          wordBank: ['Ⲡⲓϩ̀ⲙⲟⲧ', 'ⲛⲉⲙⲱⲧⲉⲛ', 'ⲛⲉⲙ', 'ϯϩⲓⲣⲏⲛⲏ'],
          explanation: 'Ⲡⲓϩ̀ⲙⲟⲧ ⲛⲉⲙⲱⲧⲉⲛ ⲛⲉⲙ ϯϩⲓⲣⲏⲛⲏ = the grace (be) with you and the peace (standard greeting)'
        },
        {
          id: 'ex-44-1-6',
          type: 'translation',
          question: 'Translate: Ϯⲧⲱⲃϩ ⲉ̀ϩ̀ⲣⲏⲓ ⲉ̀ϫⲱⲧⲉⲛ ⲛ̀ⲥⲏⲟⲩ ⲛⲓⲃⲉⲛ',
          questionCoptic: 'Ϯⲧⲱⲃϩ ⲉ̀ϩ̀ⲣⲏⲓ ⲉ̀ϫⲱⲧⲉⲛ ⲛ̀ⲥⲏⲟⲩ ⲛⲓⲃⲉⲛ',
          correctAnswer: 'I pray for you always',
          options: ['I pray for you always', 'Always praying for you', 'Pray for me always', 'I always remember you'],
          explanation: 'Ϯⲧⲱⲃϩ ⲉ̀ϩ̀ⲣⲏⲓ ⲉ̀ϫⲱⲧⲉⲛ ⲛ̀ⲥⲏⲟⲩ ⲛⲓⲃⲉⲛ = I pray concerning you at all times'
        },
        {
          id: 'ex-44-1-7',
          type: 'matching',
          question: 'Match closing formulas',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'Ⲡⲓϩ̀ⲙⲟⲧ ⲛⲉⲙⲱⲧⲉⲛ ⲧⲏⲣⲟⲩ', english: 'Grace be with you all' },
            { coptic: 'Ⲁⲙⲏⲛ', english: 'Amen / So be it' },
            { coptic: 'Ⲡⲓⲁⲥⲡⲁⲥⲙⲟⲥ ϧⲉⲛ ⲧⲁϫⲓϫ', english: 'The greeting in my hand' },
            { coptic: 'Ⲡⲉⲛϭⲟⲓⲥ ⲛⲉⲙⲱⲧⲉⲛ', english: 'The Lord be with you' }
          ]
        },
        {
          id: 'ex-44-1-8',
          type: 'translation',
          question: 'Translate: Ⲛⲁⲓ ⲁⲓⲥ̀ϧⲁⲓ ⲙ̀ⲙⲱⲟⲩ ϧⲉⲛ ⲧⲁϫⲓϫ',
          questionCoptic: 'Ⲛⲁⲓ ⲁⲓⲥ̀ϧⲁⲓ ⲙ̀ⲙⲱⲟⲩ ϧⲉⲛ ⲧⲁϫⲓϫ',
          correctAnswer: 'These things I wrote in my own hand',
          options: ['These things I wrote in my own hand', 'I wrote this by hand', 'My hand wrote these', 'Written by my hand'],
          explanation: 'Ⲛⲁⲓ ⲁⲓⲥ̀ϧⲁⲓ ⲙ̀ⲙⲱⲟⲩ ϧⲉⲛ ⲧⲁϫⲓϫ = these I wrote them in my hand (Paul\'s personal signature)'
        }
      ]
    },
    {
      id: 'lesson-44-2',
      unitId: 'unit-44',
      title: '1 Corinthians 13: Love Chapter',
      description: 'The greatest of these is love',
      order: 2,
      xpReward: 40,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-44-2-1',
          type: 'translation',
          question: 'Translate: Ⲁⲓϣⲁⲛⲥⲁϫⲓ ⲛ̀ⲛⲓⲁⲥⲡⲓ ⲛ̀ⲧⲉ ⲛⲓⲣⲱⲙⲓ ⲛⲉⲙ ⲛⲁ ⲛⲓⲁⲅⲅⲉⲗⲟⲥ',
          questionCoptic: 'Ⲁⲓϣⲁⲛⲥⲁϫⲓ ⲛ̀ⲛⲓⲁⲥⲡⲓ ⲛ̀ⲧⲉ ⲛⲓⲣⲱⲙⲓ ⲛⲉⲙ ⲛⲁ ⲛⲓⲁⲅⲅⲉⲗⲟⲥ',
          correctAnswer: 'If I speak in the tongues of men and of angels',
          options: ['If I speak in the tongues of men and of angels', 'I spoke to men and angels', 'Speaking human and angelic languages', 'The tongues of men are angelic'],
          explanation: 'Ⲁⲓϣⲁⲛⲥⲁϫⲓ ⲛ̀ⲛⲓⲁⲥⲡⲓ ⲛ̀ⲧⲉ ⲛⲓⲣⲱⲙⲓ ⲛⲉⲙ ⲛⲁ ⲛⲓⲁⲅⲅⲉⲗⲟⲥ = if I speak the tongues of men and of angels (1 Cor 13:1)'
        },
        {
          id: 'ex-44-2-2',
          type: 'matching',
          question: 'Match attributes of love',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'Ϯⲁⲅⲁⲡⲏ ⲟⲩⲣⲉϥⲱⲟⲩⲛ̀ϩⲏⲧ', english: 'Love is patient' },
            { coptic: 'Ϯⲁⲅⲁⲡⲏ ⲟⲩⲣⲉϥⲉⲣⲭ̀ⲣⲏⲥⲧⲉⲩⲉⲥⲑⲉ', english: 'Love is kind' },
            { coptic: 'Ⲙⲉⲥⲭⲟϩ', english: 'It is not jealous' },
            { coptic: 'Ⲙⲉⲥϣⲟⲩϣⲟⲩ ⲙ̀ⲙⲟⲥ', english: 'It does not boast' }
          ]
        },
        {
          id: 'ex-44-2-3',
          type: 'translation',
          question: 'Translate: Ⲙⲉⲥⲓ̀ⲣⲓ ⲙ̀ⲡⲓⲁⲧϩⲱⲃ',
          questionCoptic: 'Ⲙⲉⲥⲓ̀ⲣⲓ ⲙ̀ⲡⲓⲁⲧϩⲱⲃ',
          correctAnswer: 'It does not do wrong / It does not behave badly',
          options: ['It does not do wrong / It does not behave badly', 'It is not shameful', 'No bad deeds', 'Wrong is not done'],
          explanation: 'Ⲙⲉⲥⲓ̀ⲣⲓ ⲙ̀ⲡⲓⲁⲧϩⲱⲃ = it does not do what is shameful/wrong (describing love)'
        },
        {
          id: 'ex-44-2-4',
          type: 'fill_blank',
          question: 'Complete: Ⲙⲉⲥⲕⲱϯ ___ ⲛ̀ⲛⲉⲥⲫⲏⲉⲧⲥⲁ = It does not seek its own',
          correctAnswer: 'ⲛ̀ⲥⲁ',
          options: ['ⲛ̀ⲥⲁ', 'ⲙ̀', 'ⲉ̀', 'ϧⲉⲛ'],
          explanation: 'Ⲙⲉⲥⲕⲱϯ ⲛ̀ⲥⲁ ⲛⲉⲥⲫⲏⲉⲧⲥⲁ = it does not seek after its own things (love is not selfish)'
        },
        {
          id: 'ex-44-2-5',
          type: 'sentence_building',
          question: 'Build: "Love never fails"',
          correctAnswer: 'Ϯⲁⲅⲁⲡⲏ ⲙⲉⲥϩⲉⲓ ⲉ̀ⲃⲟⲗ ⲉ̀ⲛⲉϩ',
          wordBank: ['Ϯⲁⲅⲁⲡⲏ', 'ⲙⲉⲥ', 'ϩⲉⲓ', 'ⲉ̀ⲃⲟⲗ', 'ⲉ̀ⲛⲉϩ'],
          explanation: 'Ϯⲁⲅⲁⲡⲏ ⲙⲉⲥϩⲉⲓ ⲉ̀ⲃⲟⲗ ⲉ̀ⲛⲉϩ = love never falls away (love never fails)'
        },
        {
          id: 'ex-44-2-6',
          type: 'translation',
          question: 'Translate: Ϣⲁⲣⲉ ⲛⲓⲡ̀ⲣⲟⲫⲏⲧⲓⲁ ⲗⲱϫⲙ ϣⲁⲣⲉ ⲛⲓⲁⲥⲡⲓ ⲭⲱ ⲉ̀ⲃⲟⲗ',
          questionCoptic: 'Ϣⲁⲣⲉ ⲛⲓⲡ̀ⲣⲟⲫⲏⲧⲓⲁ ⲗⲱϫⲙ ϣⲁⲣⲉ ⲛⲓⲁⲥⲡⲓ ⲭⲱ ⲉ̀ⲃⲟⲗ',
          correctAnswer: 'Prophecies will cease, tongues will stop',
          options: ['Prophecies will cease, tongues will stop', 'Prophecy and tongues end', 'Prophets cease speaking', 'Languages will end'],
          explanation: 'Ϣⲁⲣⲉ ⲛⲓⲡ̀ⲣⲟⲫⲏⲧⲓⲁ ⲗⲱϫⲙ ϣⲁⲣⲉ ⲛⲓⲁⲥⲡⲓ ⲭⲱ ⲉ̀ⲃⲟⲗ = prophecies will be destroyed, tongues will cease'
        },
        {
          id: 'ex-44-2-7',
          type: 'matching',
          question: 'Match the three that remain',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'Ϯⲛⲁϩϯ', english: 'faith' },
            { coptic: 'Ϯϩⲉⲗⲡⲓⲥ', english: 'hope' },
            { coptic: 'Ϯⲁⲅⲁⲡⲏ', english: 'love' },
            { coptic: 'Ⲟⲩⲛⲓϣϯ ⲇⲉ ⲡⲁⲣⲁ ⲛⲁⲓ', english: 'But the greatest of these' }
          ]
        },
        {
          id: 'ex-44-2-8',
          type: 'translation',
          question: 'Translate: Ϯⲛⲟⲩ ⲥⲉⲛⲁϣⲱⲡⲓ ⲛ̀ϫⲉ ⲡⲁⲓϣⲟⲙⲧ ϯⲛⲁϩϯ ϯϩⲉⲗⲡⲓⲥ ϯⲁⲅⲁⲡⲏ',
          questionCoptic: 'Ϯⲛⲟⲩ ⲥⲉⲛⲁϣⲱⲡⲓ ⲛ̀ϫⲉ ⲡⲁⲓϣⲟⲙⲧ ϯⲛⲁϩϯ ϯϩⲉⲗⲡⲓⲥ ϯⲁⲅⲁⲡⲏ',
          correctAnswer: 'Now these three remain: faith, hope, love',
          options: ['Now these three remain: faith, hope, love', 'Three things now: faith, hope, love', 'Faith, hope and love will remain', 'These three are now'],
          explanation: 'Ϯⲛⲟⲩ ⲥⲉⲛⲁϣⲱⲡⲓ ⲛ̀ϫⲉ ⲡⲁⲓϣⲟⲙⲧ ϯⲛⲁϩϯ ϯϩⲉⲗⲡⲓⲥ ϯⲁⲅⲁⲡⲏ = now these three will remain: faith, hope, love'
        }
      ]
    },
    {
      id: 'lesson-44-3',
      unitId: 'unit-44',
      title: 'Philippians 2: Christ Hymn',
      description: 'He humbled Himself and became obedient unto death',
      order: 3,
      xpReward: 40,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-44-3-1',
          type: 'translation',
          question: 'Translate: Ⲫⲁⲓ ⲉⲧⲭⲏ ϧⲉⲛ ⲑ̀ⲙⲟⲣⲫⲏ ⲙ̀Ⲫϯ',
          questionCoptic: 'Ⲫⲁⲓ ⲉⲧⲭⲏ ϧⲉⲛ ⲑ̀ⲙⲟⲣⲫⲏ ⲙ̀Ⲫϯ',
          correctAnswer: 'He who was in the form of God',
          options: ['He who was in the form of God', 'This one in God\'s form', 'Being in God\'s likeness', 'The form of God'],
          explanation: 'Ⲫⲁⲓ ⲉⲧⲭⲏ ϧⲉⲛ ⲑ̀ⲙⲟⲣⲫⲏ ⲙ̀Ⲫϯ = this one who was in the form of God (Phil 2:6)'
        },
        {
          id: 'ex-44-3-2',
          type: 'matching',
          question: 'Match Christ\'s descent',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'Ⲙ̀ⲡⲉϥⲙⲉⲩⲓ̀ ϫⲉ ⲟⲩϩⲱⲗⲉⲙ ⲡⲉ', english: 'He did not consider it robbery' },
            { coptic: 'Ⲁϥⲑ̀ⲃⲃⲓⲟϥ ⲙ̀ⲙⲓⲛ ⲙ̀ⲙⲟϥ', english: 'He emptied Himself' },
            { coptic: 'Ⲁϥϭⲓ ⲛ̀ⲟⲩⲙⲟⲣⲫⲏ ⲙ̀ⲃⲱⲕ', english: 'He took the form of a servant' },
            { coptic: 'Ⲁϥⲑⲉⲃⲃⲓⲟϥ', english: 'He humbled Himself' }
          ]
        },
        {
          id: 'ex-44-3-3',
          type: 'translation',
          question: 'Translate: Ⲁϥϣⲱⲡⲓ ϧⲉⲛ ⲟⲩⲓ̀ⲛⲓ ⲛ̀ⲣⲱⲙⲓ',
          questionCoptic: 'Ⲁϥϣⲱⲡⲓ ϧⲉⲛ ⲟⲩⲓ̀ⲛⲓ ⲛ̀ⲣⲱⲙⲓ',
          correctAnswer: 'He became in the likeness of men',
          options: ['He became in the likeness of men', 'He was like a man', 'In human form He came', 'Made in man\'s image'],
          explanation: 'Ⲁϥϣⲱⲡⲓ ϧⲉⲛ ⲟⲩⲓ̀ⲛⲓ ⲛ̀ⲣⲱⲙⲓ = he became in a likeness of man (incarnation)'
        },
        {
          id: 'ex-44-3-4',
          type: 'fill_blank',
          question: 'Complete: Ⲁϥⲑⲉⲃⲃⲓⲟϥ ___ ⲁϥⲟⲓ ⲛ̀ⲣⲉⲧⲥⲱⲧⲙ = He humbled Himself, becoming obedient',
          correctAnswer: 'ⲁϥⲉⲣ',
          options: ['ⲁϥⲉⲣ', 'ⲁϥϣⲱⲡⲓ', 'ⲁϥⲓ̀ⲣⲓ', 'ⲁϥⲭⲏ'],
          explanation: 'Ⲁϥⲑⲉⲃⲃⲓⲟϥ ⲁϥⲉⲣⲣⲉⲧⲥⲱⲧⲙ = he humbled himself, he became obedient'
        },
        {
          id: 'ex-44-3-5',
          type: 'sentence_building',
          question: 'Build: "Even unto death on a cross"',
          correctAnswer: 'Ϣⲁ ⲉ̀ϩ̀ⲣⲏⲓ ⲉ̀ⲫ̀ⲙⲟⲩ ⲙ̀ⲫ̀ⲙⲟⲩ ⲙ̀ⲡⲓⲥ̀ⲧⲁⲩⲣⲟⲥ',
          wordBank: ['Ϣⲁ', 'ⲉ̀ϩ̀ⲣⲏⲓ', 'ⲉ̀ⲫ̀ⲙⲟⲩ', 'ⲙ̀ⲫ̀ⲙⲟⲩ', 'ⲙ̀ⲡⲓⲥ̀ⲧⲁⲩⲣⲟⲥ'],
          explanation: 'Ϣⲁ ⲉ̀ϩ̀ⲣⲏⲓ ⲉ̀ⲫ̀ⲙⲟⲩ ⲙ̀ⲫ̀ⲙⲟⲩ ⲙ̀ⲡⲓⲥ̀ⲧⲁⲩⲣⲟⲥ = unto the death, the death of the cross'
        },
        {
          id: 'ex-44-3-6',
          type: 'translation',
          question: 'Translate: Ⲉⲑⲃⲉ ⲫⲁⲓ Ⲫϯ ⲁϥϭⲓⲥⲓ ⲙ̀ⲙⲟϥ',
          questionCoptic: 'Ⲉⲑⲃⲉ ⲫⲁⲓ Ⲫϯ ⲁϥϭⲓⲥⲓ ⲙ̀ⲙⲟϥ',
          correctAnswer: 'Therefore God highly exalted Him',
          options: ['Therefore God highly exalted Him', 'For this God raised Him', 'Because of this God lifted Him', 'God exalted Him for this'],
          explanation: 'Ⲉⲑⲃⲉ ⲫⲁⲓ Ⲫϯ ⲁϥϭⲓⲥⲓ ⲙ̀ⲙⲟϥ = because of this, God highly raised him (exaltation)'
        },
        {
          id: 'ex-44-3-7',
          type: 'matching',
          question: 'Match Christ\'s exaltation',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'Ⲁϥⲉⲣϩ̀ⲙⲟⲧ ⲛⲁϥ ⲙ̀ⲡⲓⲣⲁⲛ', english: 'He gave Him the name' },
            { coptic: 'Ⲫⲏⲉⲧⲥⲁⲡ̀ϣⲱⲓ ⲛ̀ⲣⲁⲛ ⲛⲓⲃⲉⲛ', english: 'The name above every name' },
            { coptic: 'Ⲕⲉⲗⲓ ⲛⲓⲃⲉⲛ ⲛⲁⲕⲱⲗϫ', english: 'Every knee shall bow' },
            { coptic: 'Ⲗⲁⲥ ⲛⲓⲃⲉⲛ ⲛⲁⲟⲩⲱⲛϩ ⲉ̀ⲃⲟⲗ', english: 'Every tongue shall confess' }
          ]
        },
        {
          id: 'ex-44-3-8',
          type: 'translation',
          question: 'Translate: Ϫⲉ Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ Ⲡϭⲟⲓⲥ ⲡⲉ ⲉ̀ⲡ̀ⲱⲟⲩ ⲙ̀Ⲫϯ Ⲫⲓⲱⲧ',
          questionCoptic: 'Ϫⲉ Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ Ⲡϭⲟⲓⲥ ⲡⲉ ⲉ̀ⲡ̀ⲱⲟⲩ ⲙ̀Ⲫϯ Ⲫⲓⲱⲧ',
          correctAnswer: 'That Jesus Christ is Lord, to the glory of God the Father',
          options: ['That Jesus Christ is Lord, to the glory of God the Father', 'Jesus Christ the Lord glorifies the Father', 'Christ is Lord of God\'s glory', 'The Father\'s glory is Christ the Lord'],
          explanation: 'Ϫⲉ Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ Ⲡϭⲟⲓⲥ ⲡⲉ ⲉ̀ⲡ̀ⲱⲟⲩ ⲙ̀Ⲫϯ Ⲫⲓⲱⲧ = that Jesus Christ is Lord, to the glory of God the Father'
        }
      ]
    },
    {
      id: 'lesson-44-4',
      unitId: 'unit-44',
      title: 'James: Faith and Works',
      description: 'Faith without works is dead',
      order: 4,
      xpReward: 40,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-44-4-1',
          type: 'translation',
          question: 'Translate: Ⲟⲩⲱϣⲧ ⲙ̀ⲙⲱⲧⲉⲛ ⲛⲁⲥ̀ⲛⲏⲟⲩ ϧⲉⲛ ⲡⲓⲣⲁⲥⲙⲟⲥ',
          questionCoptic: 'Ⲟⲩⲱϣⲧ ⲙ̀ⲙⲱⲧⲉⲛ ⲛⲁⲥ̀ⲛⲏⲟⲩ ϧⲉⲛ ⲡⲓⲣⲁⲥⲙⲟⲥ',
          correctAnswer: 'Count it all joy, my brothers, in trial',
          options: ['Count it all joy, my brothers, in trial', 'Be joyful in trials', 'My brothers rejoice in testing', 'All joy in trials, brothers'],
          explanation: 'Ⲟⲩⲱϣⲧ ⲙ̀ⲙⲱⲧⲉⲛ ⲛⲁⲥ̀ⲛⲏⲟⲩ ϧⲉⲛ ⲡⲓⲣⲁⲥⲙⲟⲥ = count (it) my brothers as all joy in the trial (James 1:2)'
        },
        {
          id: 'ex-44-4-2',
          type: 'matching',
          question: 'Match wisdom vocabulary',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'Ϯⲥⲟⲫⲓⲁ', english: 'wisdom' },
            { coptic: 'Ⲙⲁⲣⲉϥⲁⲓⲧⲉⲓ ⲛ̀ⲧⲉⲛ Ⲫϯ', english: 'Let him ask of God' },
            { coptic: 'Ⲁϥϯ ⲛ̀ⲟⲩⲙⲉⲧⲁ̀ⲡⲗⲟⲩⲥ', english: 'He gives generously' },
            { coptic: 'Ⲙⲁⲣⲉϥⲁⲓⲧⲉⲓ ϧⲉⲛ ⲟⲩⲛⲁϩϯ', english: 'Let him ask in faith' }
          ]
        },
        {
          id: 'ex-44-4-3',
          type: 'translation',
          question: 'Translate: Ϣⲱⲡⲓ ⲛ̀ⲣⲉϥⲓ̀ⲣⲓ ⲙ̀ⲡⲓⲥⲁϫⲓ ⲙ̀ⲙⲟⲛ ⲛ̀ⲣⲉϥⲥⲱⲧⲙ ⲙ̀ⲙⲁⲩⲁⲧⲟⲩ',
          questionCoptic: 'Ϣⲱⲡⲓ ⲛ̀ⲣⲉϥⲓ̀ⲣⲓ ⲙ̀ⲡⲓⲥⲁϫⲓ ⲙ̀ⲙⲟⲛ ⲛ̀ⲣⲉϥⲥⲱⲧⲙ ⲙ̀ⲙⲁⲩⲁⲧⲟⲩ',
          correctAnswer: 'Be doers of the word, not hearers only',
          options: ['Be doers of the word, not hearers only', 'Do the word, not just hear it', 'Hearing alone is not enough', 'Doers are not just listeners'],
          explanation: 'Ϣⲱⲡⲓ ⲛ̀ⲣⲉϥⲓ̀ⲣⲓ ⲙ̀ⲡⲓⲥⲁϫⲓ ⲙ̀ⲙⲟⲛ ⲛ̀ⲣⲉϥⲥⲱⲧⲙ ⲙ̀ⲙⲁⲩⲁⲧⲟⲩ = be doers of the word, not hearers only (James 1:22)'
        },
        {
          id: 'ex-44-4-4',
          type: 'fill_blank',
          question: 'Complete: Ⲟⲩ ⲡⲉ ⲡⲓϩ̀ⲏⲟⲩ ⲛⲁⲥ̀ⲛⲏⲟⲩ ⲉϣϫⲉ ⲟⲩⲟⲛ ⲟⲩⲁⲓ ⲛⲁϫⲟⲥ ϫⲉ ⲟⲩⲟⲛ ___ ⲙ̀ⲙⲁⲩ',
          correctAnswer: 'ⲛⲁϩϯ',
          options: ['ⲛⲁϩϯ', 'ⲁⲅⲁⲡⲏ', 'ϩⲱⲃ', 'ⲥⲟⲫⲓⲁ'],
          explanation: 'Ⲟⲩⲟⲛ ⲛⲁϩϯ ⲙ̀ⲙⲁⲩ = (if someone says) I have faith (setting up faith vs works argument)'
        },
        {
          id: 'ex-44-4-5',
          type: 'sentence_building',
          question: 'Build: "Show me your faith without works"',
          correctAnswer: 'Ⲙⲁⲧⲁⲙⲟⲓ ⲉ̀ⲧⲉⲕⲛⲁϩϯ ⲭⲱⲣⲓⲥ ⲛⲓϩ̀ⲃⲏⲟⲩⲓ̀',
          wordBank: ['Ⲙⲁⲧⲁⲙⲟⲓ', 'ⲉ̀ⲧⲉⲕⲛⲁϩϯ', 'ⲭⲱⲣⲓⲥ', 'ⲛⲓϩ̀ⲃⲏⲟⲩⲓ̀'],
          explanation: 'Ⲙⲁⲧⲁⲙⲟⲓ ⲉ̀ⲧⲉⲕⲛⲁϩϯ ⲭⲱⲣⲓⲥ ⲛⲓϩ̀ⲃⲏⲟⲩⲓ̀ = show me your faith apart from the works'
        },
        {
          id: 'ex-44-4-6',
          type: 'translation',
          question: 'Translate: Ⲁⲛⲟⲕ ϯⲛⲁⲧⲁⲙⲟⲕ ⲉ̀ⲧⲁⲛⲁϩϯ ⲉ̀ⲃⲟⲗ ϧⲉⲛ ⲛⲁϩ̀ⲃⲏⲟⲩⲓ̀',
          questionCoptic: 'Ⲁⲛⲟⲕ ϯⲛⲁⲧⲁⲙⲟⲕ ⲉ̀ⲧⲁⲛⲁϩϯ ⲉ̀ⲃⲟⲗ ϧⲉⲛ ⲛⲁϩ̀ⲃⲏⲟⲩⲓ̀',
          correctAnswer: 'I will show you my faith by my works',
          options: ['I will show you my faith by my works', 'My works show my faith', 'I show faith through works', 'Faith is shown by works'],
          explanation: 'Ⲁⲛⲟⲕ ϯⲛⲁⲧⲁⲙⲟⲕ ⲉ̀ⲧⲁⲛⲁϩϯ ⲉ̀ⲃⲟⲗ ϧⲉⲛ ⲛⲁϩ̀ⲃⲏⲟⲩⲓ̀ = I will show you my faith from/by my works'
        },
        {
          id: 'ex-44-4-7',
          type: 'matching',
          question: 'Match faith and works statements',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'Ϯⲛⲁϩϯ ⲁⲧⲉ ⲛⲓϩ̀ⲃⲏⲟⲩⲓ̀ ⲙⲱⲟⲩⲧ', english: 'Faith without works is dead' },
            { coptic: 'Ⲛⲓⲛⲓϥⲓ ϣⲁⲩⲛⲁϩϯ', english: 'Even demons believe' },
            { coptic: 'Ⲁⲃⲣⲁⲁⲙ ⲡⲉⲛⲓⲱⲧ ⲁϥⲉⲣⲇⲓⲕⲉⲟⲛ', english: 'Abraham our father was justified' },
            { coptic: 'Ⲙ̀ⲫ̀ⲣⲏϯ ⲙ̀ⲡⲓⲥⲱⲙⲁ', english: 'Like the body' }
          ]
        },
        {
          id: 'ex-44-4-8',
          type: 'translation',
          question: 'Translate: Ⲙ̀ⲫ̀ⲣⲏϯ ⲅⲁⲣ ⲙ̀ⲡⲓⲥⲱⲙⲁ ⲁⲧⲉ ⲡⲓⲡ̀ⲛⲉⲩⲙⲁ ⲙⲱⲟⲩⲧ ⲡⲁⲓⲣⲏϯ ⲟⲛ ϯⲛⲁϩϯ ⲁⲧⲉ ⲛⲓϩ̀ⲃⲏⲟⲩⲓ̀ ⲙⲱⲟⲩⲧ',
          questionCoptic: 'Ⲙ̀ⲫ̀ⲣⲏϯ ⲅⲁⲣ ⲙ̀ⲡⲓⲥⲱⲙⲁ ⲁⲧⲉ ⲡⲓⲡ̀ⲛⲉⲩⲙⲁ ⲙⲱⲟⲩⲧ ⲡⲁⲓⲣⲏϯ ⲟⲛ ϯⲛⲁϩϯ ⲁⲧⲉ ⲛⲓϩ̀ⲃⲏⲟⲩⲓ̀ ⲙⲱⲟⲩⲧ',
          correctAnswer: 'For as the body without spirit is dead, so also faith without works is dead',
          options: ['For as the body without spirit is dead, so also faith without works is dead', 'Body needs spirit, faith needs works', 'Dead body, dead faith', 'Like dead bodies are faithless works'],
          explanation: 'Ⲙ̀ⲫ̀ⲣⲏϯ ⲅⲁⲣ ⲙ̀ⲡⲓⲥⲱⲙⲁ ⲁⲧⲉ ⲡⲓⲡ̀ⲛⲉⲩⲙⲁ ⲙⲱⲟⲩⲧ ⲡⲁⲓⲣⲏϯ ⲟⲛ ϯⲛⲁϩϯ ⲁⲧⲉ ⲛⲓϩ̀ⲃⲏⲟⲩⲓ̀ ⲙⲱⲟⲩⲧ = for as the body without spirit is dead, thus also faith without works is dead (James 2:26)'
        }
      ]
    }
  ]
};

export default unit44;
