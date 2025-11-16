import { Unit } from '../../types';

// TEST FILE FOR UNIT 44: READING EPISTLES
// Comprehensive test exercises covering all 4 lessons
// 25 exercises total - testing New Testament letter analysis

const unit44Test: Unit = {
  id: 'unit-44-test',
  title: 'Unit 44 Test: Reading Epistles',
  description: 'Comprehensive test of New Testament letter reading and comprehension',
  order: 44.5,
  color: '#673AB7',
  lessons: [
    {
      id: 'lesson-44-test',
      unitId: 'unit-44-test',
      title: 'Epistles Comprehensive Test',
      description: 'Test reading and understanding of NT letters',
      order: 1,
      xpReward: 150,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'test-44-1',
          type: 'translation',
          question: 'Translate: Ⲡⲁⲩⲗⲟⲥ ⲡⲓⲁ̀ⲡⲟⲥⲧⲟⲗⲟⲥ ⲛ̀ⲧⲉ Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ',
          questionCoptic: 'Ⲡⲁⲩⲗⲟⲥ ⲡⲓⲁ̀ⲡⲟⲥⲧⲟⲗⲟⲥ ⲛ̀ⲧⲉ Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ',
          correctAnswer: 'Paul, apostle of Jesus Christ',
          options: ['Paul, apostle of Jesus Christ', 'Paul the apostle to Christ', 'Paul, Christ\'s apostle', 'Apostle Paul of Jesus'],
          explanation: 'Standard Pauline letter opening'
        },
        {
          id: 'test-44-2',
          type: 'matching',
          question: 'Match greeting formulas',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'Ⲡⲓϩ̀ⲙⲟⲧ ⲛⲉⲙⲱⲧⲉⲛ', english: 'Grace be with you' },
            { coptic: 'Ϯϣⲉⲡϩ̀ⲙⲟⲧ ⲛ̀ⲧⲉⲛ Ⲫϯ', english: 'We give thanks to God' },
            { coptic: 'Ⲛⲉⲙ ⲧ̀ϩⲓⲣⲏⲛⲏ ⲉ̀ⲃⲟⲗ ϩⲓⲧⲉⲛ Ⲫϯ', english: 'And peace from God' },
            { coptic: 'Ϯⲉⲣⲫ̀ⲙⲉⲩⲓ̀ ⲛ̀ⲛⲏⲧⲉⲛ', english: 'I remember you' }
          ]
        },
        {
          id: 'test-44-3',
          type: 'translation',
          question: 'Translate: Ⲛ̀ⲧⲉⲛ Ⲫϯ Ⲡⲉⲛⲓⲱⲧ ⲛⲉⲙ Ⲡⲉⲛϭⲟⲓⲥ Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ',
          questionCoptic: 'Ⲛ̀ⲧⲉⲛ Ⲫϯ Ⲡⲉⲛⲓⲱⲧ ⲛⲉⲙ Ⲡⲉⲛϭⲟⲓⲥ Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ',
          correctAnswer: 'From God our Father and our Lord Jesus Christ',
          options: ['From God our Father and our Lord Jesus Christ', 'By God the Father and Christ', 'God and Jesus our Lord', 'The Father and the Lord Christ'],
          explanation: 'Standard salutation source formula'
        },
        {
          id: 'test-44-4',
          type: 'fill_blank',
          question: 'Complete: Ϯϣⲉⲡϩ̀ⲙⲟⲧ ___ Ⲫϯ ⲛ̀ⲥⲏⲟⲩ ⲛⲓⲃⲉⲛ = I thank God always',
          correctAnswer: 'ⲛ̀ⲧⲉⲛ',
          options: ['ⲛ̀ⲧⲉⲛ', 'ⲙ̀', 'ⲉ̀', 'ϧⲉⲛ'],
          explanation: 'Pauline thanksgiving phrase'
        },
        {
          id: 'test-44-5',
          type: 'sentence_building',
          question: 'Build: "Grace and peace to you"',
          correctAnswer: 'Ⲡⲓϩ̀ⲙⲟⲧ ⲛⲉⲙⲱⲧⲉⲛ ⲛⲉⲙ ϯϩⲓⲣⲏⲛⲏ',
          wordBank: ['Ⲡⲓϩ̀ⲙⲟⲧ', 'ⲛⲉⲙⲱⲧⲉⲛ', 'ⲛⲉⲙ', 'ϯϩⲓⲣⲏⲛⲏ'],
          explanation: 'Standard Pauline greeting wish'
        },
        {
          id: 'test-44-6',
          type: 'translation',
          question: 'Translate: Ϯⲧⲱⲃϩ ⲉ̀ϩ̀ⲣⲏⲓ ⲉ̀ϫⲱⲧⲉⲛ ⲛ̀ⲥⲏⲟⲩ ⲛⲓⲃⲉⲛ',
          questionCoptic: 'Ϯⲧⲱⲃϩ ⲉ̀ϩ̀ⲣⲏⲓ ⲉ̀ϫⲱⲧⲉⲛ ⲛ̀ⲥⲏⲟⲩ ⲛⲓⲃⲉⲛ',
          correctAnswer: 'I pray for you always',
          options: ['I pray for you always', 'Always praying for you', 'Pray for me always', 'I always remember you'],
          explanation: 'Intercession phrase'
        },
        {
          id: 'test-44-7',
          type: 'matching',
          question: 'Match Pauline themes',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'Ⲁⲅⲁⲡⲏ', english: 'love / charity' },
            { coptic: 'Ⲃⲓⲟⲋⲱ', english: 'faith' },
            { coptic: 'Ⲉⲩⲁⲅⲅⲉⲗⲓⲟⲛ', english: 'gospel' },
            { coptic: 'Ⲥⲁⲣⲝ ⲟⲩⲟⲥ', english: 'flesh / sinfulness' }
          ]
        },
        {
          id: 'test-44-8',
          type: 'fill_blank',
          question: 'Complete: Ⲉⲓⲟⲓ ⲙⲉⲛ ___ ⲛ̀ⲟⲩⲁⲗⲏⲑⲓⲁ = The truth of the gospel',
          correctAnswer: 'ⲙ̀ⲟⲩⲁⲗⲏⲑⲓⲁ',
          options: ['ⲙ̀ⲟⲩⲁⲗⲏⲑⲓⲁ', 'ⲛ̀ⲧⲉ', 'ⲁⲩⲧⲉ', 'ⲟⲩⲁⲗⲏⲑⲟⲥ'],
          explanation: 'Gospel truth phrase'
        },
        {
          id: 'test-44-9',
          type: 'translation',
          question: 'Translate: Ⲟⲩⲁⲛⲕⲟⲥⲙⲏⲡⲟⲣⲟⲣ',
          questionCoptic: 'Ⲟⲩⲁⲛⲕⲟⲥⲙⲏⲡⲟⲣⲟⲣ',
          correctAnswer: 'An ambassadors / messengers',
          options: ['An ambassadors / messengers', 'The message sent', 'Messenger to the world', 'Cosmic message'],
          explanation: 'Role description in epistolary context'
        },
        {
          id: 'test-44-10',
          type: 'matching',
          question: 'Match spiritual weapons/armor',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'Ⲙⲁϭⲓ ⲙ̀ⲡⲓϩ̀ⲙⲟⲧ', english: 'helmet of salvation' },
            { coptic: 'Ⲓⲣⲓⲥ ⲛ̀ⲧⲉ ⲟⲩⲁⲗⲏⲑⲓⲁ', english: 'breastplate of truth' },
            { coptic: 'Ⲣⲟⲙⲫⲁⲓⲁ ⲛ̀ⲧⲉ ⲡⲏ', english: 'sword of the spirit' },
            { coptic: 'Ⲑⲩⲣⲉⲟⲗⲟⲅⲓⲟⲛ', english: 'shield of faith' }
          ]
        },
        {
          id: 'test-44-11',
          type: 'fill_blank',
          question: 'Complete: Ⲙⲏⲧⲣⲁⲧⲏⲥ ⲁⲁϥ ____ = I bear the marks',
          correctAnswer: 'ⲧⲩⲥⲙⲁ',
          options: ['ⲧⲩⲥⲙⲁ', 'ⲕⲩⲣⲓⲟⲥ', 'ⲗⲟⲅⲟⲥ', 'ϣⲣⲏⲙⲟⲥ'],
          explanation: 'Stigmata/marks reference'
        },
        {
          id: 'test-44-12',
          type: 'sentence_building',
          question: 'Build: "Christ is my life"',
          correctAnswer: 'Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ ⲡⲉ ⲡⲁⲫⲱⲉ',
          wordBank: ['Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ', 'ⲡⲉ', 'ⲡⲁⲫⲱⲉ', 'ⲙ̀'],
          explanation: 'Life centered in Christ'
        },
        {
          id: 'test-44-13',
          type: 'translation',
          question: 'Translate: Ⲥⲟⲩⲛⲟⲩⲍⲓⲁ ⲙⲉⲛ ⲟⲩⲛ ⲛ̀ⲟⲩⲁ ⲛ̀ⲧⲕⲁⲡⲉⲩⲛⲓⲁ',
          questionCoptic: 'Ⲥⲩⲛⲇⲏⲝⲓⲥ ⲙⲉⲛ ⲟⲩⲛ ⲛ̀ⲟⲩⲁ ⲛ̀ⲧⲏⲣⲟⲥ',
          correctAnswer: 'Conscience indeed speaks all',
          options: ['Conscience indeed speaks all', 'Our entire conscience', 'And conscience witnesses', 'Conscience of all things'],
          explanation: 'Conscience theme in letter'
        },
        {
          id: 'test-44-14',
          type: 'matching',
          question: 'Match fruits of the Spirit',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'Ⲁⲅⲁⲡⲏ', english: 'love' },
            { coptic: 'Ⲉⲓⲣⲏⲛⲏ', english: 'peace' },
            { coptic: 'Ⲙⲁⲕⲣⲟⲑⲩⲙⲓⲁ', english: 'patience / long-suffering' },
            { coptic: 'Ⲭⲁⲣⲁ', english: 'joy' }
          ]
        },
        {
          id: 'test-44-15',
          type: 'fill_blank',
          question: 'Complete: Ⲟⲩⲡⲛⲉⲩⲙⲁ ⲏⲧⲛ̀ ___ = The Spirit itself bears witness',
          correctAnswer: 'ⲙⲁⲣⲧⲩⲣⲉⲓ',
          options: ['ⲙⲁⲣⲧⲩⲣⲉⲓ', 'ⲗⲟⲅⲟⲥ', 'ⲁⲝⲏⲧⲏ', 'ⲥⲟⲡⲏ'],
          explanation: 'Holy Spirit testimony'
        },
        {
          id: 'test-44-16',
          type: 'sentence_building',
          question: 'Build: "Therefore stand firm in faith"',
          correctAnswer: 'Ⲟⲩⲛ ⲟϥⲓ ⲙ̀ⲙⲁⲓ ϧⲉⲛ ⲟⲩⲛⲁϣϣⲁϥ',
          wordBank: ['Ⲟⲩⲛ', 'ⲟϥⲓ', 'ⲙ̀ⲙⲁⲓ', 'ϧⲉⲛ', 'ⲟⲩⲛⲁϣϣⲁϥ'],
          explanation: 'Exhortation to perseverance'
        },
        {
          id: 'test-44-17',
          type: 'translation',
          question: 'Translate: Ⲧⲁⲛ ⲡⲟⲗⲧⲓⲥ ⲏⲣⲟⲛ ⲙ̀ⲧⲉ ⲃⲟⲩ',
          questionCoptic: 'Ⲧⲁⲛ ⲡⲟⲗⲓⲥ ⲏⲛ ⲙ̀ⲧⲉ ⲛ̀ⲟⲩⲣⲁⲛⲟⲥ',
          correctAnswer: 'Our citizenship is in heaven',
          options: ['Our citizenship is in heaven', 'We live as citizens', 'Heaven is our city', 'Our state is heavenly'],
          explanation: 'Citizenship in heaven theme'
        },
        {
          id: 'test-44-18',
          type: 'matching',
          question: 'Match doctrinal themes',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'Ⲁⲛⲁⲥⲧⲁⲥⲓⲥ', english: 'resurrection' },
            { coptic: 'Ⲣⲓⲋⲓⲛⲏ', english: 'justification' },
            { coptic: 'Ⲁⲝⲓⲱⲙⲁ', english: 'redemption' },
            { coptic: 'Ⲟⲩⲣⲁⲛⲟⲛ', english: 'heaven' }
          ]
        },
        {
          id: 'test-44-19',
          type: 'fill_blank',
          question: 'Complete: Ϭⲟⲥ ⲇⲟⲩⲗⲟⲥ ⲏⲥⲟⲩⲛⲟⲩ ___ = The servant of the Lord',
          correctAnswer: 'ⲡⲓϭⲟⲓⲥ',
          options: ['ⲡⲓϭⲟⲓⲥ', 'ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ', 'ⲡⲉⲛϭⲟⲓⲥ', 'ⲟⲩⲁⲣⲭⲟⲛ'],
          explanation: 'Servant role terminology'
        },
        {
          id: 'test-44-20',
          type: 'sentence_building',
          question: 'Build: "The love of Christ compels us"',
          correctAnswer: 'Ⲧⲉ ⲁⲅⲁⲡⲏ ⲛ̀ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ ⲁⲕⲁⲕⲕⲓⲥⲓⲛ ⲉⲣⲟⲛ',
          wordBank: ['Ⲧⲉ', 'ⲁⲅⲁⲡⲏ', 'ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ', 'ⲁⲕⲁⲕⲓⲥⲓⲛ', 'ⲉⲣⲟⲛ'],
          explanation: 'Motivational force reference'
        },
        {
          id: 'test-44-21',
          type: 'translation',
          question: 'Translate: Ⲁⲛⲁϭⲧⲟⲣ ⲙⲉⲛ ⲟⲩⲛ ⲧⲁ ⲁⲛⲁ',
          questionCoptic: 'Ⲁⲛⲁⲅⲑⲁⲡⲉⲍⲱ ⲙⲉⲛ ⲧⲁ ⲧⲁ',
          correctAnswer: 'Set your minds on things above',
          options: ['Set your minds on things above', 'Think about heavenly things', 'Above all things', 'Heavenly thoughts'],
          explanation: 'Exhortation to higher thinking'
        },
        {
          id: 'test-44-22',
          type: 'matching',
          question: 'Match closing exhortations',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'Ⲡⲣⲟⲣⲓⲍⲟⲙⲁⲓ', english: 'be watchful / vigilant' },
            { coptic: 'Ϭⲟⲡⲛⲓⲁⲁⲧⲱ', english: 'give thanks' },
            { coptic: 'Ⲡⲁⲧⲱⲃϩ ⲉ̀ⲫⲟⲣⲟⲣⲓⲥ', english: 'pray without ceasing' },
            { coptic: 'Ⲉⲧⲁⲕⲧⲓⲁ ⲛⲓⲃⲉⲛ', english: 'overcome all things' }
          ]
        },
        {
          id: 'test-44-23',
          type: 'fill_blank',
          question: 'Complete: Ϯⲑⲉ ⲧⲛ̀ ____ ⲉ̀ⲕⲟⲥ = The grace with you',
          correctAnswer: 'ⲭⲁⲣⲓⲥ',
          options: ['ⲭⲁⲣⲓⲥ', 'ⲙⲁⲗⲁⲕⲟⲥ', 'ⲇⲟⲝⲁ', 'ⲁⲗⲟⲩ'],
          explanation: 'Closing benediction'
        },
        {
          id: 'test-44-24',
          type: 'sentence_building',
          question: 'Build: "Sealed with the Holy Spirit"',
          correctAnswer: 'Ⲛⲧⲟⲧⲉⲛ ⲙ̀ⲡⲓⲡ̀ⲛⲉⲩⲙⲁ ⲉⲑⲟⲩⲁⲃ',
          wordBank: ['Ⲛⲧⲟⲧⲉⲛ', 'ⲙ̀ⲡⲓ', 'ⲡ̀ⲛⲉⲩⲙⲁ', 'ⲉⲑⲟⲩⲁⲃ'],
          explanation: 'Seal metaphor for spiritual assurance'
        },
        {
          id: 'test-44-25',
          type: 'translation',
          question: 'Translate: Ⲕⲁⲛ ⲟⲩⲛⲟⲩ ϭⲟⲩ ⲕⲉ ⲕⲁⲃⲟⲧ',
          questionCoptic: 'Ⲕⲁⲓ ⲉⲛ ⲧⲟⲩⲧⲟⲓⲥ ⲕⲁⲓ ⲧⲟⲩⲧⲟ',
          correctAnswer: 'And in these and this also',
          options: ['And in these and this also', 'And these things', 'In addition to all', 'And moreover'],
          explanation: 'Conjunction for additional points'
        }
      ]
    }
  ]
};

export default unit44Test;
