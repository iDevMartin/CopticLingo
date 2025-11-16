import { Lesson } from '../../types';

// UNIT 29 TEST: ADVANCED LITURGICAL COPTIC
// Comprehensive test covering all 10 lessons in Unit 29
// Tests knowledge of doxologies, hymns, liturgical prayers, and psalms

const unit29Test: Lesson = {
  id: 'test-29',
  unitId: 'unit-29',
  title: 'Unit 29 Test: Advanced Liturgical Coptic',
  description: 'Comprehensive test of doxologies, hymns, liturgical prayers, and Psalms',
  order: 14,
  xpReward: 150,
  isLocked: true,
  completed: false,
  exercises: [
    {
      id: 'test-29-1',
      type: 'translation',
      question: 'Translate: ϯϣⲉⲛⲉ ⲁⲣⲉ ⲙⲁⲣⲓⲁ ϯⲡⲁⲣⲑⲉⲛⲟⲥ',
      questionCoptic: 'ϯϣⲉⲛⲉ ⲁⲣⲉ ⲙⲁⲣⲓⲁ ϯⲡⲁⲣⲑⲉⲛⲟⲥ',
      correctAnswer: 'Hail to you, Mary the Virgin',
      options: ['Hail to you, Mary the Virgin', 'Greetings Mary the Virgin', 'Peace to Mary the Virgin', 'Blessed are you, Virgin Mary'],
      explanation: 'Theotokos greeting - Marian doxology'
    },
    {
      id: 'test-29-2',
      type: 'matching',
      question: 'Match Marian titles',
      correctAnswer: 'matched',
      pairs: [
        { coptic: 'ⲑⲉⲟⲧⲟⲕⲟⲥ', english: 'God-bearer' },
        { coptic: 'ⲡⲁⲣⲑⲉⲛⲟⲥ', english: 'virgin' },
        { coptic: 'ⲙⲁⲩ ⲙⲫϯ', english: 'Mother of God' },
        { coptic: 'ⲧⲁⲭⲩⲙⲛⲏ', english: 'the bride' }
      ]
    },
    {
      id: 'test-29-3',
      type: 'multiple_choice',
      question: 'What does ⲑⲉⲟⲧⲟⲕⲟⲥ mean?',
      questionCoptic: 'ⲑⲉⲟⲧⲟⲕⲟⲥ',
      correctAnswer: 'God-bearer/Mother of God',
      options: ['God-bearer/Mother of God', 'Holy Virgin', 'Blessed Mother', 'Saint Mary'],
      explanation: 'ⲑⲉⲟⲧⲟⲕⲟⲥ = God-bearer, from Greek Theotokos'
    },
    {
      id: 'test-29-4',
      type: 'translation',
      question: 'Translate: ⲧⲁⲩⲃⲟⲩⲧⲱⲧⲥ ⲛⲉⲙ ⲧⲁⲓⲏⲟⲩⲧ ⲉⲙⲁϣⲱ',
      questionCoptic: 'ⲧⲁⲩⲃⲟⲩⲧⲱⲧⲥ ⲛⲉⲙ ⲧⲁⲓⲏⲟⲩⲧ ⲉⲙⲁϣⲱ',
      correctAnswer: 'The honored and highly exalted',
      options: ['The honored and highly exalted', 'Glorified and praised', 'Blessed and holy', 'Pure and righteous'],
      explanation: 'Marian attributes in doxology'
    },
    {
      id: 'test-29-5',
      type: 'fill_blank',
      question: 'Complete: ⲱⲣⲡ ___ = intercede for us',
      correctAnswer: 'ⲉⲣⲟⲛ',
      options: ['ⲉⲣⲟⲛ', 'ⲙⲙⲟⲛ', 'ⲛⲁⲛ', 'ⲉⲧⲟⲓ'],
      explanation: 'ⲱⲣⲡ ⲉⲣⲟⲛ = intercede for us'
    },
    {
      id: 'test-29-6',
      type: 'translation',
      question: 'Translate: ⲡⲓⲥⲟⲗⲥⲉⲗ ⲛ̀ⲧⲉⲧ̀ⲫⲉ',
      questionCoptic: 'ⲡⲓⲥⲟⲗⲥⲉⲗ ⲛ̀ⲧⲉⲧ̀ⲫⲉ',
      correctAnswer: 'The star of heaven',
      options: ['The star of heaven', 'The heavenly light', 'The morning star', 'The celestial sign'],
      explanation: 'ⲡⲓⲥⲟⲗⲥⲉⲗ = the star (another Marian title)'
    },
    {
      id: 'test-29-7',
      type: 'sentence_building',
      question: 'Build: "The beautiful dove"',
      correctAnswer: 'ϯϭⲣⲟⲙⲡⲓ ⲉⲑⲛⲉⲥⲱⲥ',
      wordBank: ['ϯ', 'ϭⲣⲟⲙⲡⲓ', 'ⲉⲑⲛⲉⲥⲱⲥ', 'ⲙⲁⲩ'],
      explanation: 'Marian symbol - the dove represents purity'
    },
    {
      id: 'test-29-8',
      type: 'translation',
      question: 'Translate: ϩⲓⲧⲉⲛ ⲛⲉⲡⲣⲉⲥⲃⲓⲁ = Through your ___',
      questionCoptic: 'ϩⲓⲧⲉⲛ ⲛⲉⲡⲣⲉⲥⲃⲓⲁ',
      correctAnswer: 'intercessions',
      options: ['intercessions', 'prayers', 'blessings', 'mercy'],
      explanation: 'ⲡⲣⲉⲥⲃⲓⲁ = intercessions (from Greek presveia)'
    },
    {
      id: 'test-29-9',
      type: 'multiple_choice',
      question: 'What is "what verb means "to intercede"?',
      correctAnswer: 'ⲱⲣⲡ',
      options: ['ⲱⲣⲡ', 'ⲥⲁϫⲓ', 'ⲣⲱ', 'ⲥⲱⲧⲙ'],
      explanation: 'ⲱⲣⲡ = to intercede, to plead'
    },
    {
      id: 'test-29-10',
      type: 'matching',
      question: 'Match doxological vocabulary',
      correctAnswer: 'matched',
      pairs: [
        { coptic: 'ⲇⲟⲝⲁⲍⲉ', english: 'hallow/glorify' },
        { coptic: 'ⲇⲟⲝⲁ', english: 'glory' },
        { coptic: 'ⲧⲓⲙⲏ', english: 'honor' },
        { coptic: 'ⲁⲓⲓⲟⲩ', english: 'praise' }
      ]
    },
    {
      id: 'test-29-11',
      type: 'translation',
      question: 'Translate: ⲧⲁⲃⲏⲧⲉ ⲣⲟⲩ ⲭⲣⲓⲥⲧⲱⲙⲉⲛⲟⲓ',
      questionCoptic: 'ⲧⲁⲃⲏⲧⲉ ⲣⲟⲩ ⲭⲣⲓⲥⲧⲱⲙⲉⲛⲟⲓ',
      correctAnswer: 'Pray for us, O Christ',
      options: ['Pray for us, O Christ', 'Christ prays for us', 'O Christ hear our prayers', 'Christendom prays'],
      explanation: 'Invocation of Christ in liturgy'
    },
    {
      id: 'test-29-12',
      type: 'fill_blank',
      question: 'Complete: ⲫⲩⲗⲁⲗⲗⲁⲕⲓ ⲛⲟⲩⲥ = Glory be to the Father',
      correctAnswer: 'ⲇⲟⲝⲁ',
      options: ['ⲇⲟⲝⲁ', 'ⲧⲓⲙⲏ', 'ⲁⲓⲛⲟⲛ', 'ⲁⲓⲓⲟⲥ'],
      explanation: 'ⲇⲟⲝⲁ = glory (from Greek δόξα)'
    },
    {
      id: 'test-29-13',
      type: 'translation',
      question: 'Translate: ⲁⲗⲗⲏⲗⲟⲩⲓⲁ',
      questionCoptic: 'ⲁⲗⲗⲏⲗⲟⲩⲓⲁ',
      correctAnswer: 'Hallelujah',
      options: ['Hallelujah', 'Praise God', 'Glory to God', 'Amen'],
      explanation: 'ⲁⲗⲗⲏⲗⲟⲩⲓⲁ = Hallelujah (from Hebrew: "Praise the Lord")'
    },
    {
      id: 'test-29-14',
      type: 'matching',
      question: 'Match liturgical responses',
      correctAnswer: 'matched',
      pairs: [
        { coptic: 'ⲁⲙⲏⲛ', english: 'So be it / Amen' },
        { coptic: 'ⲁⲗⲗⲏⲗⲟⲩⲓⲁ', english: 'Hallelujah' },
        { coptic: 'ⲟⲩ ⲧⲓⲙⲏ ⲕⲁⲓ ⲇⲟⲝⲁ', english: 'Honor and glory' },
        { coptic: 'ⲁⲏⲧⲏ ⲛ̀ⲧⲟⲩⲩⲏⲣⲓ', english: 'Through the ages of ages' }
      ]
    },
    {
      id: 'test-29-15',
      type: 'translation',
      question: 'Translate: ⲟ ϫⲱⲣⲓ ⲧⲟⲩ ⲧⲏⲣⲟⲩⲧⲗⲱⲙⲟⲩ',
      questionCoptic: 'ⲟ ϫⲱⲣⲓ ⲧⲟⲩ ⲧⲏⲣⲟⲩⲧⲗⲱⲙⲟⲩ',
      correctAnswer: 'The Almighty One',
      options: ['The Almighty One', 'The one who is strong', 'The powerful Lord', 'The Ruler of all'],
      explanation: 'Attribute of God in doxology'
    },
    {
      id: 'test-29-16',
      type: 'fill_blank',
      question: 'Complete: ⲡⲏⲣⲕⲓⲛ ___ = Let us pray',
      correctAnswer: 'ⲧⲟⲩ ⲕⲩⲣⲓⲟⲩ',
      options: ['ⲧⲟⲩ ⲕⲩⲣⲓⲟⲩ', 'ⲡⲁⲧⲣⲟⲥ', 'ⲑⲉⲟⲛ', 'ⲧⲟⲥ ⲍⲁ'],
      explanation: 'Liturgical opening - let us pray to the Lord'
    },
    {
      id: 'test-29-17',
      type: 'translation',
      question: 'Translate: ⲕⲩⲣⲓⲟⲥ ⲙⲓⲗⲉⲉ ⲙⲉϩ',
      questionCoptic: 'ⲕⲩⲣⲓⲟⲥ ⲙⲓⲗⲉⲉ ⲙⲉϩ',
      correctAnswer: 'The Lord has mercy',
      options: ['The Lord has mercy', 'God is merciful', 'The Lord is compassion', 'All of the above'],
      explanation: 'Liturgical statement of divine compassion'
    },
    {
      id: 'test-29-18',
      type: 'sentence_building',
      question: 'Build: "Peace be with you"',
      correctAnswer: 'ϯϩⲓⲣⲏⲛⲏ ⲙⲉⲧⲁ ⲥⲟⲓ',
      wordBank: ['ϯ', 'ϩⲓⲣⲏⲛⲏ', 'ⲙⲉⲧⲁ', 'ⲥⲟⲓ'],
      explanation: 'Liturgical greeting'
    },
    {
      id: 'test-29-19',
      type: 'multiple_choice',
      question: 'What is "peace" in Coptic?',
      correctAnswer: 'ϩⲓⲣⲏⲛⲏ',
      options: ['ϩⲓⲣⲏⲛⲏ', 'ⲇⲓⲣⲁⲓⲟⲛ', 'ⲁⲓⲓⲟⲛ', 'ⲕⲁⲓⲣⲟⲥ'],
      explanation: 'ϩⲓⲣⲏⲛⲏ = peace (from Greek εἰρήνη)'
    },
    {
      id: 'test-29-20',
      type: 'fill_blank',
      question: 'Complete: ⲉⲧⲕⲣⲁⲧⲓ ___ = has the power / is almighty',
      correctAnswer: 'ⲧⲟ',
      options: ['ⲧⲟ', 'ⲧⲁ', 'ⲧⲉ', 'ⲧⲩ'],
      explanation: 'Theological affirmation'
    },
    {
      id: 'test-29-21',
      type: 'matching',
      question: 'Match psalm vocabulary',
      correctAnswer: 'matched',
      pairs: [
        { coptic: 'ⲧⲛⲟⲃⲉ', english: 'sin' },
        { coptic: 'ⲙⲟⲓⲱ', english: 'salvation/help' },
        { coptic: 'ⲑⲩⲙⲓⲁⲑⲉ', english: 'thanksgiving' },
        { coptic: 'ⲛⲏⲟⲩ', english: 'repentance' }
      ]
    },
    {
      id: 'test-29-22',
      type: 'translation',
      question: 'Translate: ⲟⲩ ⲣⲁⲏⲧⲉ ⲛⲏⲟⲩ ⲕⲁⲓ ⲃⲁⲡⲧⲓⲍⲉ',
      questionCoptic: 'ⲟⲩ ⲣⲁⲏⲧⲉ ⲛⲏⲟⲩ ⲕⲁⲓ ⲃⲁⲡⲧⲓⲍⲉ',
      correctAnswer: 'Do repentance and be baptized',
      options: ['Do repentance and be baptized', 'Repent and believe', 'Turn around and be saved', 'Repent for salvation'],
      explanation: 'Apostolic command'
    },
    {
      id: 'test-29-23',
      type: 'translation',
      question: 'Translate: ⲡⲉⲧⲣⲟⲩⲙ ⲛⲥⲟⲛ',
      questionCoptic: 'ⲡⲉⲧⲣⲟⲩⲙ ⲛⲥⲟⲛ',
      correctAnswer: 'The light of the world',
      options: ['The light of the world', 'The light shines', 'Light for all', 'The world\'s light'],
      explanation: 'Christ as light - John 8:12'
    },
    {
      id: 'test-29-24',
      type: 'fill_blank',
      question: 'Complete: ⲏ ⲣⲱⲧⲟⲕⲟⲛ ⲧⲓⲟⲛ ⲡⲁ___ = The bread of our life',
      correctAnswer: 'ⲑⲗⲁⲙⲛⲟⲭⲟ',
      options: ['ⲑⲗⲁⲙⲛⲟⲭⲟ', 'ⲡⲟⲧⲉ', 'ⲓⲟⲩ', 'ⲍⲱⲏ'],
      explanation: 'Eucharistic theology'
    },
    {
      id: 'test-29-25',
      type: 'translation',
      question: 'Translate: ⲃⲛⲩⲉ ⲟⲩ ⲅⲗⲟⲥⲧⲉ ⲕⲁⲓ ϫⲟⲣⲟⲓ',
      questionCoptic: 'ⲃⲛⲩⲉ ⲟⲩ ⲅⲗⲟⲥⲧⲉ ⲕⲁⲓ ϫⲟⲣⲟⲓ',
      correctAnswer: 'Come, let us rejoice and sing praise',
      options: ['Come, let us rejoice and sing praise', 'Come and be glad', 'Let us sing and praise', 'Come celebrate together'],
      explanation: 'Festive liturgical invitation'
    },
    {
      id: 'test-29-26',
      type: 'sentence_building',
      question: 'Build: "Glory be to God in the highest"',
      correctAnswer: 'ⲇⲟⲝⲁ ⲇⲉ ⲧⲱ ⲑⲉⲱ ⲉⲡⲓ ⲧⲁ ⲟⲩⲣⲁⲛⲧⲧ',
      wordBank: ['ⲇⲟⲝⲁ', 'ⲧⲱ', 'ⲑⲉⲱ', 'ⲉⲡⲓ', 'ⲟⲩⲣⲁⲛⲟⲥ'],
      explanation: 'Opening of the Gloria'
    },
    {
      id: 'test-29-27',
      type: 'matching',
      question: 'Match doxological endings',
      correctAnswer: 'matched',
      pairs: [
        { coptic: 'ⲉⲛ ⲁⲓⲱⲛⲓ ⲙⲓⲛ ⲁⲙⲏⲛ', english: 'Forever and ever. Amen.' },
        { coptic: 'ⲧⲟⲩ ⲕⲩⲣⲓⲟⲩ', english: 'Of the Lord' },
        { coptic: 'ⲧⲱ ⲑⲉⲱ ⲧⲓⲙⲏ', english: 'Honor to God' },
        { coptic: 'ⲛⲥⲟⲡⲏ ⲛ̀ⲧⲟⲓ', english: 'In this hour' }
      ]
    },
    {
      id: 'test-29-28',
      type: 'translation',
      question: 'Translate: ⲇⲟⲛⲁⲓ ⲛⲱⲙⲓⲛ ⲟⲣⲁⲛ ⲕⲁⲓ ⲕⲁⲧⲁ ⲧⲟⲛ ⲗⲟⲡⲩ',
      questionCoptic: 'ⲇⲟⲛⲁⲓ ⲛⲱⲙⲓⲛ ⲟⲣⲁⲛ ⲕⲁⲓ ⲕⲁⲧⲁ ⲧⲟⲛ ⲗⲟⲡⲩ',
      correctAnswer: 'Give us this day our daily bread',
      options: ['Give us this day our daily bread', 'Give us all we need', 'Provide for our needs', 'Feed us today'],
      explanation: 'Petition for daily provision'
    },
    {
      id: 'test-29-29',
      type: 'multiple_choice',
      question: 'What is "thanksgiving" in Coptic?',
      correctAnswer: 'ⲉⲩⲭⲁⲣⲓⲥⲧⲓⲁ',
      options: ['ⲉⲩⲭⲁⲣⲓⲥⲧⲓⲁ', 'ⲇⲟⲝⲁ', 'ⲧⲓⲙⲏ', 'ⲁⲩⲗⲟⲥ'],
      explanation: 'ⲉⲩⲭⲁⲣⲓⲥⲧⲓⲁ = thanksgiving (Eucharist literally means "thanksgiving")'
    },
    {
      id: 'test-29-30',
      type: 'sentence_building',
      question: 'Build: "Holy, holy, holy is the Lord God Almighty"',
      correctAnswer: 'ⲁⲅⲓⲟⲥ ⲁⲅⲓⲟⲥ ⲁⲅⲓⲟⲥ ⲕⲩⲣⲓⲟⲥ ⲑⲉⲓⲟⲥ ⲥⲁⲃⲁⲱⲑ',
      wordBank: ['ⲁⲅⲓⲟⲥ', 'ⲕⲩⲣⲓⲟⲥ', 'ⲑⲉⲟⲥ', 'ⲥⲁⲃⲁⲱⲑ'],
      explanation: 'The Trisagion - thrice-holy from the liturgy'
    }
  ]
};

export default unit29Test;
