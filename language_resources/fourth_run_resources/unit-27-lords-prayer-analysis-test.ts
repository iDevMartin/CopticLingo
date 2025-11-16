import { Lesson } from '../../types';

// UNIT 27 TEST: THE LORD'S PRAYER (ⲡⲉⲛⲓⲱⲧ)
// Comprehensive test covering all 10 lessons in Unit 27
// Tests knowledge of the complete Lord's Prayer with grammatical analysis

const unit27Test: Lesson = {
  id: 'test-27',
  unitId: 'unit-27',
  title: 'Unit 27 Test: The Lord\'s Prayer',
  description: 'Comprehensive test of the complete Lord\'s Prayer with deep grammatical analysis',
  order: 11,
  xpReward: 150,
  isLocked: true,
  completed: false,
  exercises: [
    // Opening address and basic prayers
    {
      id: 'test-27-1',
      type: 'translation',
      question: 'Translate: ⲡⲉⲛⲓⲱⲧ',
      questionCoptic: 'ⲡⲉⲛⲓⲱⲧ',
      correctAnswer: 'Our Father',
      options: ['Our Father', 'My Father', 'Your Father', 'The Father'],
      explanation: 'ⲡⲉⲛⲓⲱⲧ = our father (opening of the Lord\'s Prayer)'
    },
    {
      id: 'test-27-2',
      type: 'translation',
      question: 'Translate: ⲉⲧϧⲉⲛ ⲛⲓⲫⲏⲟⲩⲓ',
      questionCoptic: 'ⲉⲧϧⲉⲛ ⲛⲓⲫⲏⲟⲩⲓ',
      correctAnswer: 'who art in heaven',
      options: ['who art in heaven', 'in the earth', 'in the church', 'with the angels'],
      explanation: 'ⲉⲧϧⲉⲛ = who is in + ⲛⲓⲫⲏⲟⲩⲓ = the heavens'
    },
    {
      id: 'test-27-3',
      type: 'matching',
      question: 'Match possessive pronouns review',
      correctAnswer: 'matched',
      pairs: [
        { coptic: 'ⲡⲉⲛⲓⲱⲧ', english: 'our father' },
        { coptic: 'ⲡⲁⲓⲱⲧ', english: 'my father' },
        { coptic: 'ⲡⲉⲕⲓⲱⲧ', english: 'your father (m)' },
        { coptic: 'ⲡⲟⲩⲓⲱⲧ', english: 'their father' }
      ]
    },
    {
      id: 'test-27-4',
      type: 'multiple_choice',
      question: 'What is "heaven" (singular) in Coptic?',
      correctAnswer: 'ⲫⲉ',
      options: ['ⲫⲉ', 'ⲕⲁϩⲓ', 'ⲫⲓⲟⲙ', 'ⲡⲟⲗⲓⲥ'],
      explanation: 'ⲫⲉ = heaven/sky (singular)'
    },
    {
      id: 'test-27-5',
      type: 'sentence_building',
      question: 'Build: "Our Father who art in heaven"',
      correctAnswer: 'ⲡⲉⲛⲓⲱⲧ ⲉⲧϧⲉⲛ ⲛⲓⲫⲏⲟⲩⲓ',
      wordBank: ['ⲡⲉⲛⲓⲱⲧ', 'ⲉⲧϧⲉⲛ', 'ⲛⲓⲫⲏⲟⲩⲓ', 'ⲙⲙⲟⲛ'],
      explanation: 'Complete opening phrase of the Lord\'s Prayer'
    },
    {
      id: 'test-27-6',
      type: 'fill_blank',
      question: 'Complete: ___ ⲉⲧϧⲉⲛ ⲛⲓⲫⲏⲟⲩⲓ = Our Father in heaven',
      correctAnswer: 'ⲡⲉⲛⲓⲱⲧ',
      options: ['ⲡⲉⲛⲓⲱⲧ', 'ⲡⲁⲓⲱⲧ', 'ⲫⲓⲱⲧ', 'ⲡⲟⲩⲓⲱⲧ'],
      explanation: 'ⲡⲉⲛⲓⲱⲧ = our father'
    },
    // The petition phrases
    {
      id: 'test-27-7',
      type: 'translation',
      question: 'Translate: ⲙⲁⲣⲉⲧⲣⲁⲛ ⲇⲟⲝⲁⲍⲉ',
      questionCoptic: 'ⲙⲁⲣⲉⲧⲣⲁⲛ ⲇⲟⲝⲁⲍⲉ',
      correctAnswer: 'Let your name be hallowed',
      options: ['Let your name be hallowed', 'Your name is holy', 'May your name be glorified', 'All of the above'],
      explanation: 'Petition for the sanctification of God\'s name'
    },
    {
      id: 'test-27-8',
      type: 'matching',
      question: 'Match prayer petitions',
      correctAnswer: 'matched',
      pairs: [
        { coptic: 'ⲙⲁⲣⲉ...ⲇⲟⲝⲁⲍⲉ', english: 'hallowed be your name' },
        { coptic: 'ⲙⲁⲣⲉⲧⲉⲕⲃⲟⲩⲏⲑⲉⲓⲁ ⲩⲟⲩⲛⲟⲩ', english: 'your kingdom come' },
        { coptic: 'ⲙⲁⲣⲉⲧⲉⲕⲙⲓⲑⲓⲁ ϣⲱⲣⲙ', english: 'your will be done' },
        { coptic: 'ⲡⲁⲣ', english: 'give/grant' }
      ]
    },
    {
      id: 'test-27-9',
      type: 'translation',
      question: 'Translate: ⲙⲁⲣⲉⲧⲉⲕⲃⲟⲩⲏⲑⲉⲓⲁ ⲩⲟⲩⲛⲟⲩ',
      questionCoptic: 'ⲙⲁⲣⲉⲧⲉⲕⲃⲟⲩⲏⲑⲉⲓⲁ ⲩⲟⲩⲛⲟⲩ',
      correctAnswer: 'Your kingdom come',
      options: ['Your kingdom come', 'Let your kingdom come', 'May your kingdom arrive', 'All of the above'],
      explanation: 'Second petition - the arrival of God\'s kingdom'
    },
    {
      id: 'test-27-10',
      type: 'fill_blank',
      question: 'Complete: ___ ⲛⲁⲧⲛ = Give us our daily bread',
      correctAnswer: 'ⲡⲁⲣ',
      options: ['ⲡⲁⲣ', 'ⲃⲗⲗⲟ', 'ⲓ̀ ⲉⲃⲟⲗ', 'ⲥⲁϫⲓ'],
      explanation: 'ⲡⲁⲣ = give/grant (imperative)'
    },
    // Grammatical analysis and deeper understanding
    {
      id: 'test-27-11',
      type: 'multiple_choice',
      question: 'What grammatical form is "ⲙⲁⲣⲉ"?',
      correctAnswer: 'Third person imperative/jussive (let)',
      options: ['Third person imperative/jussive (let)', 'Past tense', 'Future tense', 'Present continuous'],
      explanation: 'ⲙⲁⲣⲉ forms commands directed at a third party ("let/may")'
    },
    {
      id: 'test-27-12',
      type: 'translation',
      question: 'Translate: ⲙⲁⲣⲟⲛ ⲁ̀ⲛⲧ ⲛ̀ⲛⲉⲛⲡⲉⲧⲛⲟⲃⲉ',
      questionCoptic: 'ⲙⲁⲣⲟⲛ ⲁ̀ⲛⲧ ⲛ̀ⲛⲉⲛⲡⲉⲧⲛⲟⲃⲉ',
      correctAnswer: 'Forgive us our sins',
      options: ['Forgive us our sins', 'Forgive us our debts', 'Let our sins be forgiven', 'All of the above'],
      explanation: 'Petition for forgiveness - ⲧⲛⲟⲃⲉ = sins'
    },
    {
      id: 'test-27-13',
      type: 'matching',
      question: 'Match forgiveness-related vocabulary',
      correctAnswer: 'matched',
      pairs: [
        { coptic: 'ⲁ̀ⲛⲧ', english: 'forgiveness' },
        { coptic: 'ⲡⲉⲧⲛⲟⲃⲉ', english: 'sinner/sin' },
        { coptic: 'ⲓⲟⲙ', english: 'remit/forgive' },
        { coptic: 'ⲝⲏⲟⲩ', english: 'debt' }
      ]
    },
    {
      id: 'test-27-14',
      type: 'translation',
      question: 'Translate: ⲉⲣⲉ ⲁⲛⲟⲛ ⲥⲁϫⲛ ⲛ̀ⲛⲉⲧⲟⲩⲡⲛⲟⲃⲉ ⲙⲙⲟⲛ',
      questionCoptic: 'ⲉⲣⲉ ⲁⲛⲟⲛ ⲥⲁϫⲛ ⲛ̀ⲛⲉⲧⲟⲩⲡⲛⲟⲃⲉ ⲙⲙⲟⲛ',
      correctAnswer: 'As we also forgive those who trespass against us',
      options: ['As we also forgive those who trespass against us', 'We forgive those who forgive us', 'Like we forgive those who sin against us', 'All of the above'],
      explanation: 'Conditional clause comparing God\'s forgiveness to ours'
    },
    {
      id: 'test-27-15',
      type: 'fill_blank',
      question: 'Complete: ⲙⲏⲧⲣⲉⲛ ⲏⲧⲓⲉⲟⲗⲟⲅⲓⲁ ⲉ___ = Don\'t lead us into temptation',
      correctAnswer: 'ⲑⲉⲓⲣⲁⲥⲙⲟⲥ',
      options: ['ⲑⲉⲓⲣⲁⲥⲙⲟⲥ', 'ⲡⲉⲧⲣⲁ', 'ⲡⲟⲛⲏⲣⲟⲥ', 'ⲇⲟⲝⲁⲍⲉ'],
      explanation: 'ⲑⲉⲓⲣⲁⲥⲙⲟⲥ = temptation/trial'
    },
    // Continuation phrases
    {
      id: 'test-27-16',
      type: 'translation',
      question: 'Translate: ⲁⲛⲁⲕⲁⲗⲩⲯⲁ ⲙⲛ ⲧⲟ ⲡⲟⲛⲏⲣⲟⲩ',
      questionCoptic: 'ⲁⲛⲁⲕⲁⲗⲩⲯⲁ ⲙⲛ ⲧⲟ ⲡⲟⲛⲏⲣⲟⲩ',
      correctAnswer: 'Deliver us from evil',
      options: ['Deliver us from evil', 'Save us from the evil one', 'Rescue us from harm', 'All of the above'],
      explanation: 'Final petition - protection from evil'
    },
    {
      id: 'test-27-17',
      type: 'matching',
      question: 'Match final petition vocabulary',
      correctAnswer: 'matched',
      pairs: [
        { coptic: 'ⲁⲛⲁⲕⲁⲗⲩⲯⲁ', english: 'deliver/rescue' },
        { coptic: 'ⲧⲟ ⲡⲟⲛⲏⲣⲟⲩ', english: 'the evil one' },
        { coptic: 'ⲕⲁⲕⲟⲉⲙⲟⲛ', english: 'evil' },
        { coptic: 'ϧⲓⲧⲉⲛ', english: 'through/by' }
      ]
    },
    {
      id: 'test-27-18',
      type: 'sentence_building',
      question: 'Build: "Give us this day our daily bread"',
      correctAnswer: 'ⲡⲁⲣ ⲛⲁⲛ ⲫⲟⲟⲩ ⲛ̀ⲡⲉⲛⲗⲁⲭⲁⲛⲟⲛ ⲉⲧⲣⲁⲥϯ',
      wordBank: ['ⲡⲁⲣ', 'ⲛⲁⲛ', 'ⲫⲟⲟⲩ', 'ⲛ̀ⲡⲉⲛⲗⲁⲭⲁⲛⲟⲛ', 'ⲉⲧⲣⲁⲥϯ'],
      explanation: 'Give (verb) us (object) today (temporal) our daily bread'
    },
    // Complex grammatical structures
    {
      id: 'test-27-19',
      type: 'translation',
      question: 'Translate: ⲑⲓⲁ ⲡⲓ ⲝⲣⲓⲥⲧⲟⲥ ⲡⲉⲛⲇⲟⲧⲟⲥ ⲉⲛ ⲧⲱ ⲁⲓⲱⲛⲓ ⲙⲓⲛ',
      questionCoptic: 'ⲑⲓⲁ ⲡⲓ ⲝⲣⲓⲥⲧⲟⲥ ⲡⲉⲛⲇⲟⲧⲟⲥ ⲉⲛ ⲧⲱ ⲁⲓⲱⲛⲓ ⲙⲓⲛ',
      correctAnswer: 'Through Christ our Lord forever and ever',
      options: ['Through Christ our Lord forever and ever', 'By Jesus Christ our God forever', 'Through Jesus Christ the Lord in eternity', 'All of the above'],
      explanation: 'Traditional doxological ending'
    },
    {
      id: 'test-27-20',
      type: 'multiple_choice',
      question: 'What is "ⲁⲙⲏⲛ"?',
      correctAnswer: 'So be it / Amen (universal prayer ending)',
      options: ['So be it / Amen (universal prayer ending)', 'Thank you', 'Praise God', 'Hallelujah'],
      explanation: 'ⲁⲙⲏⲛ = Amen (from Hebrew/Greek origin)'
    },
    {
      id: 'test-27-21',
      type: 'fill_blank',
      question: 'Complete: ⲧⲉⲕ___ ⲧⲟⲩⲛⲟⲩ ⲕⲁⲓ ⲧⲟ ⲕⲣⲁⲧⲟⲥ = Your power and the glory',
      correctAnswer: 'ⲃⲁⲥⲓⲗⲉⲓⲁ',
      options: ['ⲃⲁⲥⲓⲗⲉⲓⲁ', 'ⲇⲟⲝⲁ', 'ⲓⲥⲭⲩⲥ', 'ⲕⲣⲁⲧⲟⲥ'],
      explanation: 'ⲧⲉⲕⲃⲁⲥⲓⲗⲉⲓⲁ = your kingdom'
    },
    // Context and significance
    {
      id: 'test-27-22',
      type: 'matching',
      question: 'Match prayer concepts',
      correctAnswer: 'matched',
      pairs: [
        { coptic: 'ⲧⲉⲣⲓⲛⲧⲏ ⲧⲟⲩ ⲭⲣⲓⲥⲧⲟⲩ', english: 'will/kingdom of Christ' },
        { coptic: 'ⲡⲉⲧⲭⲣⲟⲓⲧⲟⲥ', english: 'the anointed (Christ)' },
        { coptic: 'ⲇⲓⲁⲙⲛⲓⲕⲟⲙⲓⲛⲟⲥ', english: 'everlasting' },
        { coptic: 'ⲉⲃⲟⲗ ⲙⲛ ⲧⲉⲗⲓⲁ', english: 'completely/entirely' }
      ]
    },
    {
      id: 'test-27-23',
      type: 'translation',
      question: 'Translate the phrase: "Our Father who art in heaven"',
      questionCoptic: 'ⲡⲉⲛⲓⲱⲧ ⲉⲧϧⲉⲛ ⲛⲓⲫⲏⲟⲩⲓ',
      correctAnswer: 'Our Father who art in heaven',
      options: ['Our Father who art in heaven', 'Our Father in the heavens', 'Father of all in heaven', 'The one who is our Father in heaven'],
      explanation: 'Opening invocation of the Lord\'s Prayer'
    },
    {
      id: 'test-27-24',
      type: 'sentence_building',
      question: 'Build: "Forgive us as we forgive"',
      correctAnswer: 'ⲙⲁⲣⲟⲛ ⲁ̀ⲛⲧ ⲉⲣⲉ ⲁⲛⲟⲛ ⲥⲁϫⲛ',
      wordBank: ['ⲙⲁⲣⲟⲛ', 'ⲁ̀ⲛⲧ', 'ⲉⲣⲉ', 'ⲁⲛⲟⲛ', 'ⲥⲁϫⲛ'],
      explanation: 'Forgive (command) us (object) as we (conditional) forgive'
    },
    {
      id: 'test-27-25',
      type: 'translation',
      question: 'What does "ⲡⲉⲣⲓⲛ ⲧⲏⲥ ⲃⲁⲥⲓⲗⲉⲓⲁⲥ" mean?',
      questionCoptic: 'ⲡⲉⲣⲓⲛ ⲧⲏⲥ ⲃⲁⲥⲓⲗⲉⲓⲁⲥ',
      correctAnswer: 'Concerning the kingdom',
      options: ['Concerning the kingdom', 'About the reign', 'Through the kingdom', 'In the kingdom'],
      explanation: 'Preposition + article + kingdom'
    },
    {
      id: 'test-27-26',
      type: 'matching',
      question: 'Match articles used in prayer context',
      correctAnswer: 'matched',
      pairs: [
        { coptic: 'ⲛⲓⲫⲏⲟⲩⲓ', english: 'the heavens' },
        { coptic: 'ⲧⲁⲕⲧⲃⲁⲛⲁ', english: 'the kingdom' },
        { coptic: 'ⲙ̀ⲕⲁⲟⲩⲏⲣ', english: 'the evil one' },
        { coptic: 'ⲡⲓⲁⲓⲱⲛ ⲧⲓⲧⲟⲩ', english: 'the eternal age' }
      ]
    },
    {
      id: 'test-27-27',
      type: 'fill_blank',
      question: 'Complete: ⲁⲗⲗⲏⲗⲟⲩⲓⲁ = ___',
      correctAnswer: 'Hallelujah',
      options: ['Hallelujah', 'Praise God', 'Glory to God', 'Amen'],
      explanation: 'ⲁⲗⲗⲏⲗⲟⲩⲓⲁ = Hallelujah (from Hebrew, meaning "Praise the Lord")'
    },
    {
      id: 'test-27-28',
      type: 'translation',
      question: 'Translate: ⲟϫⲱ ⲙ̀ⲡⲉⲛⲉⲛⲧⲁⲩⲛⲟⲃⲉ ⲙⲙⲟⲛ',
      questionCoptic: 'ⲟϫⲱ ⲙ̀ⲡⲉⲛⲉⲛⲧⲁⲩⲛⲟⲃⲉ ⲙⲙⲟⲛ',
      correctAnswer: 'And forgive us those who trespassed against us',
      options: ['And forgive us those who trespassed against us', 'And forgive our trespasses', 'And forgive our sins', 'All of the above'],
      explanation: 'Petition for forgiveness acknowledging others\' faults'
    },
    {
      id: 'test-27-29',
      type: 'multiple_choice',
      question: 'Which phrase petitions for God\'s kingdom?',
      correctAnswer: 'ⲙⲁⲣⲉⲧⲉⲕⲃⲟⲩⲏⲑⲉⲓⲁ ⲩⲟⲩⲛⲟⲩ',
      options: ['ⲙⲁⲣⲉⲧⲉⲕⲃⲟⲩⲏⲑⲉⲓⲁ ⲩⲟⲩⲛⲟⲩ', 'ⲙⲁⲣⲉⲧⲣⲁⲛ ⲇⲟⲝⲁⲍⲉ', 'ⲡⲁⲣ ⲛⲁⲛ ⲧⲟⲛ ⲁⲣⲧⲟⲛ', 'ⲁⲛⲁⲕⲁⲗⲩⲯⲁ ⲙⲛ'],
      explanation: 'Your kingdom come - petition for the arrival of God\'s reign'
    },
    {
      id: 'test-27-30',
      type: 'sentence_building',
      question: 'Complete the doxological ending: "For thine is the kingdom..."',
      correctAnswer: 'ⲧⲉⲕ ⲅⲁⲣ ⲏ ⲃⲁⲥⲓⲗⲉⲓⲁ ⲕⲁⲓ ⲧⲟ ⲕⲣⲁⲧⲟⲥ ⲕⲁⲓ ⲧⲉ ⲇⲟⲝⲁ ⲉⲛ ⲧⲱ ⲁⲓⲱⲛⲓ ⲙⲓⲛ ⲁⲙⲏⲛ',
      wordBank: ['ⲧⲉⲕ', 'ⲃⲁⲥⲓⲗⲉⲓⲁ', 'ⲕⲣⲁⲧⲟⲥ', 'ⲇⲟⲝⲁ', 'ⲁⲓⲱⲛⲓ ⲙⲓⲛ', 'ⲁⲙⲏⲛ'],
      explanation: 'Traditional doxological ending assigning all glory to God'
    }
  ]
};

export default unit27Test;
