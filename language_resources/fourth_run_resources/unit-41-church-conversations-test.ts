import { Unit } from '../../types';

// TEST FILE FOR UNIT 41: CHURCH CONVERSATIONS
// Comprehensive test exercises covering all 4 lessons
// 25 exercises total - testing liturgical greetings and church vocabulary

const unit41Test: Unit = {
  id: 'unit-41-test',
  title: 'Unit 41 Test: Church Conversations',
  description: 'Comprehensive test of church dialogues and liturgical language',
  order: 41.5,
  color: '#9C27B0',
  lessons: [
    {
      id: 'lesson-41-test',
      unitId: 'unit-41-test',
      title: 'Church Conversations Comprehensive Test',
      description: 'Test all liturgical greetings and church settings dialogue',
      order: 1,
      xpReward: 150,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'test-41-1',
          type: 'matching',
          question: 'Match liturgical greetings',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'Ⲭⲉⲣⲉ ⲛⲉⲙⲱⲧⲉⲛ', english: 'Greetings to you (pl)' },
            { coptic: 'Ⲓⲣⲏⲛⲏ ⲛⲉⲙⲱⲧⲉⲛ', english: 'Peace be with you' },
            { coptic: 'Ⲛⲉⲙ ⲡⲉⲕⲡ̀ⲛⲉⲩⲙⲁ', english: 'And with your spirit' },
            { coptic: 'Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ ⲁⲛⲉⲥⲧⲏ', english: 'Christ is risen' }
          ]
        },
        {
          id: 'test-41-2',
          type: 'translation',
          question: 'Translate: Ⲡⲓⲉ̀ⲥⲙⲟⲩ ⲙ̀Ⲫϯ ϣⲱⲡⲓ ⲛⲉⲙⲁⲕ',
          questionCoptic: 'Ⲡⲓⲉ̀ⲥⲙⲟⲩ ⲙ̀Ⲫϯ ϣⲱⲡⲓ ⲛⲉⲙⲁⲕ',
          correctAnswer: 'The blessing of God be with you',
          options: ['The blessing of God be with you', 'God bless you', 'May God bless', 'Blessed be God'],
          explanation: 'Ⲡⲓⲉ̀ⲥⲙⲟⲩ ⲙ̀Ⲫϯ ϣⲱⲡⲓ ⲛⲉⲙⲁⲕ = the blessing of God be with you (common liturgical)'
        },
        {
          id: 'test-41-3',
          type: 'fill_blank',
          question: 'Complete: Ⲭⲉⲣⲉ ___ ⲙ̀ⲡⲁⲥⲱⲧⲏⲣ = Hail my Savior',
          correctAnswer: 'ⲡⲁ',
          options: ['ⲡⲁ', 'ⲫⲁ', 'ⲡⲓ', 'ⲟⲩ'],
          explanation: 'Ⲭⲉⲣⲉ ⲡⲁⲥⲱⲧⲏⲣ = hail my Savior (possessive + noun)'
        },
        {
          id: 'test-41-4',
          type: 'sentence_building',
          question: 'Build: "Pray for us"',
          correctAnswer: 'Ⲧⲱⲃϩ ⲉ̀ϩ̀ⲣⲏⲓ ⲉ̀ϫⲱⲛ',
          wordBank: ['Ⲧⲱⲃϩ', 'ⲉ̀ϩ̀ⲣⲏⲓ', 'ⲉ̀ϫⲱⲛ', 'ⲛⲁⲛ'],
          explanation: 'Ⲧⲱⲃϩ ⲉ̀ϩ̀ⲣⲏⲓ ⲉ̀ϫⲱⲛ = pray for us (lit. "pray concerning us")'
        },
        {
          id: 'test-41-5',
          type: 'translation',
          question: 'Translate: Ⲁⲙⲱⲓⲛⲓ ⲙ̀ⲡⲉⲛⲓⲱⲧ ⲉⲑⲟⲩⲁⲃ',
          questionCoptic: 'Ⲁⲙⲱⲓⲛⲓ ⲙ̀ⲡⲉⲛⲓⲱⲧ ⲉⲑⲟⲩⲁⲃ',
          correctAnswer: 'Come, our holy father',
          options: ['Come, our holy father', 'Our father is holy', 'The holy father came', 'Greet the holy father'],
          explanation: 'Ⲁⲙⲱⲓⲛⲓ ⲙ̀ⲡⲉⲛⲓⲱⲧ ⲉⲑⲟⲩⲁⲃ = come, our holy father (addressing priest)'
        },
        {
          id: 'test-41-6',
          type: 'matching',
          question: 'Match liturgical responses',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'Ⲁⲙⲏⲛ', english: 'Amen / So be it' },
            { coptic: 'Ⲁⲗⲏⲑⲱⲥ ⲁⲛⲉⲥⲧⲏ', english: 'Truly He is risen' },
            { coptic: 'Ⲇⲟⲝⲁ ⲥⲓ Ⲕⲩⲣⲓⲉ', english: 'Glory to You, O Lord' },
            { coptic: 'Ⲡⲓⲉ̀ⲥⲙⲟⲩ ⲙ̀ⲡⲉⲛⲁⲃ', english: 'Our father\'s blessing' }
          ]
        },
        {
          id: 'test-41-7',
          type: 'multiple_choice',
          question: 'What is the proper response to "Ⲓⲣⲏⲛⲏ ⲛⲉⲙⲱⲧⲉⲛ"?',
          correctAnswer: 'Ⲛⲉⲙ ⲡⲉⲕⲡ̀ⲛⲉⲩⲙⲁ',
          options: ['Ⲛⲉⲙ ⲡⲉⲕⲡ̀ⲛⲉⲩⲙⲁ', 'Ⲁⲙⲏⲛ', 'Ⲭⲉⲣⲉ', 'Ⲇⲟⲝⲁ ⲥⲓ'],
          explanation: 'Ⲓⲣⲏⲛⲏ ⲛⲉⲙⲱⲧⲉⲛ (Peace be with you) → Ⲛⲉⲙ ⲡⲉⲕⲡ̀ⲛⲉⲩⲙⲁ (And with your spirit)'
        },
        {
          id: 'test-41-8',
          type: 'translation',
          question: 'Translate: Ⲁⲝⲓⲟⲛ ⲕⲉ ⲇⲓⲕⲉⲟⲛ',
          questionCoptic: 'Ⲁⲝⲓⲟⲛ ⲕⲉ ⲇⲓⲕⲉⲟⲛ',
          correctAnswer: 'Meet and right / Fitting and proper',
          options: ['Meet and right / Fitting and proper', 'Holy and just', 'Worthy and good', 'Right and true'],
          explanation: 'Ⲁⲝⲓⲟⲛ ⲕⲉ ⲇⲓⲕⲉⲟⲛ (from Greek) = meet and right (liturgical response)'
        },
        {
          id: 'test-41-9',
          type: 'matching',
          question: 'Match church settings',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ϯⲉⲕⲕⲗⲏⲥⲓⲁ', english: 'the church' },
            { coptic: 'ⲡⲓⲁⲓⲟⲛ', english: 'the sanctuary / altar area' },
            { coptic: 'ⲡⲓⲉⲩⲛⲟⲙⲟⲛ', english: 'the (outer) narthex' },
            { coptic: 'ⲡⲓⲙⲁ ⲛ̀ⲧⲉ ⲥⲁⲫⲏⲛ', english: 'the place of readers / choir area' }
          ]
        },
        {
          id: 'test-41-10',
          type: 'translation',
          question: 'Translate: Ⲛⲁⲓⲥⲟⲥ ⲛⲉⲙⲟⲥ ⲡⲉ ⲡⲓⲗⲏⲙⲟⲣ',
          questionCoptic: 'Ⲛⲁⲓⲥⲟⲥ ⲛⲉⲙⲟⲥ ⲡⲉ ⲡⲓⲗⲏⲙⲟⲣ',
          correctAnswer: 'The deacon and the worker / minister',
          options: ['The deacon and the worker / minister', 'The deacons work', 'The deacon is working', 'A worker is a deacon'],
          explanation: 'Church office terms describing ritual participants'
        },
        {
          id: 'test-41-11',
          type: 'fill_blank',
          question: 'Complete: Ⲡ̀ⲇⲓⲁⲕⲟⲛⲟⲥ ___ ⲏ ⲡⲓⲁⲓⲟⲛ = The deacon stands in the altar',
          correctAnswer: 'ⲟϩⲓ ϧⲉⲛ',
          options: ['ⲟϩⲓ ϧⲉⲛ', 'ϧⲉⲛ', 'ⲟϩⲓ', 'ⲉⲃⲟⲗ'],
          explanation: 'ⲟϩⲓ ϧⲉⲛ = to stand in (locative phrase)'
        },
        {
          id: 'test-41-12',
          type: 'sentence_building',
          question: 'Build: "The priest blesses the people"',
          correctAnswer: 'Ⲡⲓⲕⲁⲣⲡⲟⲥ ⲥ̀ⲙⲟⲩ ⲉ̀ⲣⲟ ⲛ̀ⲇⲟⲥ',
          wordBank: ['Ⲡⲓⲕⲁⲣⲡⲟⲥ', 'ⲥ̀ⲙⲟⲩ', 'ⲉ̀ⲣⲟ', 'ⲛ̀ⲇⲟⲥ'],
          explanation: 'Ⲡⲓⲕⲁⲣⲡⲟⲥ ⲥ̀ⲙⲟⲩ ⲉ̀ⲣⲟ ⲛ̀ⲇⲟⲥ = the priest blesses the people'
        },
        {
          id: 'test-41-13',
          type: 'translation',
          question: 'Translate: Ⲧⲉⲛⲫ̀ⲓ ⲏ ⲡⲓⲁⲩⲗⲁⲗⲓⲟⲛ',
          questionCoptic: 'Ⲧⲉⲛⲫ̀ⲓ ⲏ ⲡⲓⲁⲩⲗⲁⲗⲓⲟⲛ',
          correctAnswer: 'We sing the hymn / We chant the psalm',
          options: ['We sing the hymn / We chant the psalm', 'The hymn is sung', 'Sing the psalms', 'The psalms are hymns'],
          explanation: 'Ⲫ̀ⲓ = to sing, chant; ⲡⲓⲁⲩⲗⲁⲗⲓⲟⲛ = the psalm/hymn'
        },
        {
          id: 'test-41-14',
          type: 'matching',
          question: 'Match liturgical objects and actions',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲧⲉ ⲓⲁⲙⲟⲛ', english: 'the readings' },
            { coptic: 'ⲧⲟ ⲡ̀ⲉⲩⲁⲅⲅⲉⲗⲓⲟⲛ', english: 'the Gospel' },
            { coptic: 'ⲟⲩⲣⲁⲛ', english: 'the incense' },
            { coptic: 'ⲧⲟⲥ ⲇ̀ⲣⲱⲙⲉⲛⲟⲛ', english: 'the Liturgy' }
          ]
        },
        {
          id: 'test-41-15',
          type: 'fill_blank',
          question: 'Complete: ⲁⲛⲟⲛⲟ ⲧⲟⲟⲩ ___ = Let us read the Scripture',
          correctAnswer: 'ⲓⲁⲙⲟⲛ',
          options: ['ⲓⲁⲙⲟⲛ', 'ⲛⲓⲗⲟⲅⲟⲥ', 'ⲥⲟⲟⲩ', 'ⲡⲓⲡⲉ'],
          explanation: 'ⲓⲁⲙⲟⲛ = the readings/scriptures'
        },
        {
          id: 'test-41-16',
          type: 'sentence_building',
          question: 'Build: "May God hear our prayers"',
          correctAnswer: 'Ⲫϯ ⲥⲉⲡⲧⲟⲩ ⲛ̀ⲧⲉⲛⲧⲱⲃϩ',
          wordBank: ['Ⲫϯ', 'ⲥⲉⲡⲧⲟⲩ', 'ⲛ̀ⲧⲉⲛ', 'ⲧⲱⲃϩ'],
          explanation: 'Ⲫϯ ⲥⲉⲡⲧⲟⲩ ⲛ̀ⲧⲉⲛⲧⲱⲃϩ = may God hear our prayers'
        },
        {
          id: 'test-41-17',
          type: 'translation',
          question: 'Translate: Ⲟⲩⲡ̀ⲣⲏⲛⲏ ⲁⲣⲓⲃⲟⲏ̀ⲑⲓⲓ ⲛⲁⲛ',
          questionCoptic: 'Ⲟⲩⲡ̀ⲣⲏⲛⲏ ⲁⲣⲓⲃⲟⲏ̀ⲑⲓⲓ ⲛⲁⲛ',
          correctAnswer: 'In peace help us',
          options: ['In peace help us', 'Help us with peace', 'Peace and help to us', 'Help us peacefully'],
          explanation: 'ⲡ̀ⲣⲏⲛⲏ = peace; ⲃⲟⲏ̀ⲑⲉⲓ = to help'
        },
        {
          id: 'test-41-18',
          type: 'matching',
          question: 'Match religious officials',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'Ⲡ̀ⲏⲡⲓⲥⲕⲟⲡⲟⲥ', english: 'the bishop' },
            { coptic: 'Ⲡⲓⲡ̀ⲣⲉⲥⲃⲩⲧⲉⲣⲟⲥ', english: 'the priest / elder' },
            { coptic: 'Ⲡ̀ⲇⲓⲁⲕⲟⲛⲟⲥ', english: 'the deacon' },
            { coptic: 'ⲡⲓⲕⲓⲃⲱⲧ', english: 'the reader' }
          ]
        },
        {
          id: 'test-41-19',
          type: 'fill_blank',
          question: 'Complete: Ⲫⲏⲁⲛ ___ ⲛⲁⲡⲧⲓ ⲛⲏⲓ = Let the priests gather us',
          correctAnswer: 'ⲟϩⲓ',
          options: ['ⲟϩⲓ', 'ⲉⲣ', 'ϧⲉⲛ', 'ⲛ̀'],
          explanation: 'ⲟϩⲓ = to stand / gather (imperative)'
        },
        {
          id: 'test-41-20',
          type: 'sentence_building',
          question: 'Build: "In the name of the Father"',
          correctAnswer: 'Ⲙ̀ⲗⲁⲁⲩ ⲙ̀ⲡⲓⲓⲱⲧ',
          wordBank: ['Ⲙ̀ⲗⲁⲁⲩ', 'ⲙ̀ⲡⲓ', 'ⲓⲱⲧ', 'ⲛ̀ⲧⲉ'],
          explanation: 'Ⲙ̀ⲗⲁⲁⲩ ⲙ̀ⲡⲓⲓⲱⲧ = in the name of the Father (standard formula)'
        },
        {
          id: 'test-41-21',
          type: 'translation',
          question: 'Translate: Ⲕⲁⲗⲟⲩⲙⲉⲛⲁ ⲕⲁⲩⲙⲏⲥ ⲕⲁⲭⲣⲓⲑⲩ',
          questionCoptic: 'Ⲕⲁⲗⲟⲩⲙⲉⲛⲁ ⲕⲁⲩⲙⲏⲥ ⲕⲁⲭⲣⲓⲑⲩ',
          correctAnswer: 'Welcome / Greetings (formal triple greeting)',
          options: ['Welcome / Greetings (formal triple greeting)', 'Joyful greetings', 'Well received', 'Rejoiced and greeted'],
          explanation: 'Triple greeting combining formal salutation'
        },
        {
          id: 'test-41-22',
          type: 'matching',
          question: 'Match sacramental terms',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲛⲓⲕⲁⲉⲣⲟⲥ ⲡⲉ ⲟⲩ', english: 'the Holy Mysteries / Sacraments' },
            { coptic: 'ⲧⲉ ⲇ̀ⲙⲉⲣⲓⲥ ⲛ̀ⲧⲉ ⲫϯ', english: 'the Divine Liturgy' },
            { coptic: 'ⲛⲓⲗⲟⲗⲟ ⲛ̀ⲧⲉ ⲡϯ', english: 'words/saying of God' },
            { coptic: 'ⲧⲁⲩⲣⲁ ⲛ̀ⲧⲉ ⲗⲟⲛ ⲕⲟⲓⲗ', english: 'the Kingdom of Heaven' }
          ]
        },
        {
          id: 'test-41-23',
          type: 'fill_blank',
          question: 'Complete: Ⲧⲉⲛⲥ̀ⲙⲟⲩ ⲛⲁⲕ ⲫϯ ⲉⲑⲟⲩⲁⲃ ⲙ̀___  = We bless You, Holy God in all things',
          correctAnswer: 'ⲫϣⲓ ⲛⲓⲃⲉⲛ',
          options: ['ⲫϣⲓ ⲛⲓⲃⲉⲛ', 'ⲛⲓⲃⲓ ⲛⲓⲃⲉⲛ', 'ⲏⲧⲛ̀', 'ⲏⲧ ⲧⲏⲣⲟⲥ'],
          explanation: 'Common liturgical doxology'
        },
        {
          id: 'test-41-24',
          type: 'sentence_building',
          question: 'Build: "Praise be to God always"',
          correctAnswer: 'Ⲗⲱⲃϣⲣⲉⲙ ⲙ̀ⲥⲡⲗⲓⲣⲟⲛ ⲛ̀ⲥⲏⲟⲩ ⲛⲓⲃⲉⲛ',
          wordBank: ['Ⲗⲱⲃϣⲣⲉⲙ', 'ⲙ̀', 'ⲛ̀ⲥⲏⲟⲩ', 'ⲛⲓⲃⲉⲛ'],
          explanation: 'Praise always - common doxological phrase'
        },
        {
          id: 'test-41-25',
          type: 'translation',
          question: 'Translate: Ⲟⲩ ⲡⲁⲛⲧⲱⲛ ⲇⲟⲩⲗⲟⲩ ⲥⲟⲩ Ⲡⲁⲓⲧⲁ ⲡⲁⲙⲡⲕⲏⲛⲟⲛ',
          questionCoptic: 'Ⲟⲩ ⲡⲁⲛⲧⲱⲛ ⲇⲟⲩⲗⲟⲩ ⲥⲟⲩ Ⲡⲁⲓⲧⲁ ⲡⲁⲙⲡⲕⲏⲛⲟⲛ',
          correctAnswer: 'We are servants of Thee O Father most holy',
          options: ['We are servants of Thee O Father most holy', 'All servants serve the holy Father', 'Servants holy in all respects', 'Holy Father, we serve You'],
          explanation: 'Liturgical confession of servitude and holiness - mixed Coptic/Greek'
        }
      ]
    }
  ]
};

export default unit41Test;
