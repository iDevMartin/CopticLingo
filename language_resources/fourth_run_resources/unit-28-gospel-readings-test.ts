import { Lesson } from '../../types';

// UNIT 28 TEST: GOSPEL READINGS & PARABLES
// Comprehensive test covering all 13 lessons in Unit 28
// Tests knowledge of biblical passages, parables, and Beatitudes

const unit28Test: Lesson = {
  id: 'test-28',
  unitId: 'unit-28',
  title: 'Unit 28 Test: Gospel Readings & Parables',
  description: 'Comprehensive test of biblical passages, parables, and Beatitudes',
  order: 14,
  xpReward: 150,
  isLocked: true,
  completed: false,
  exercises: [
    {
      id: 'test-28-1',
      type: 'translation',
      question: 'Translate: ⲁⲡⲓⲣⲉϥϫⲟ ⲓ̀ ⲉⲃⲟⲗ ⲉϫⲟ',
      questionCoptic: 'ⲁⲡⲓⲣⲉϥϫⲟ ⲓ̀ ⲉⲃⲟⲗ ⲉϫⲟ',
      correctAnswer: 'The sower went out to sow',
      options: ['The sower went out to sow', 'The sower came to sow', 'A man went to plant', 'The farmer sowed'],
      explanation: 'ⲁⲡⲓⲣⲉϥϫⲟ ⲓ̀ ⲉⲃⲟⲗ ⲉϫⲟ = the sower went out to sow (Parable of Sower)'
    },
    {
      id: 'test-28-2',
      type: 'matching',
      question: 'Match parable vocabulary',
      correctAnswer: 'matched',
      pairs: [
        { coptic: 'ⲣⲉϥϫⲟ', english: 'sower' },
        { coptic: 'ϭⲣⲟϫ', english: 'seed' },
        { coptic: 'ⲓⲟϩⲓ', english: 'field' },
        { coptic: 'ⲱⲥϧ', english: 'harvest' }
      ]
    },
    {
      id: 'test-28-3',
      type: 'multiple_choice',
      question: 'What is ⲣⲉϥϫⲟ?',
      questionCoptic: 'ⲣⲉϥϫⲟ',
      correctAnswer: 'sower (one who sows)',
      options: ['sower (one who sows)', 'seed', 'field', 'harvest'],
      explanation: 'ⲣⲉϥϫⲟ = sower (ⲣⲉϥ- "one who" + ϫⲟ "sow")'
    },
    {
      id: 'test-28-4',
      type: 'translation',
      question: 'Translate: ϩⲁⲛⲟⲩⲟⲛ ⲁⲩϩⲉⲓ ϩⲓϫⲉⲛ ⲡⲓⲙⲱⲓⲧ',
      questionCoptic: 'ϩⲁⲛⲟⲩⲟⲛ ⲁⲩϩⲉⲓ ϩⲓϫⲉⲛ ⲡⲓⲙⲱⲓⲧ',
      correctAnswer: 'Some fell on the path',
      options: ['Some fell on the path', 'They fell on the road', 'Seeds on the way', 'Some came to the path'],
      explanation: 'ϩⲁⲛⲟⲩⲟⲛ = some + ⲁⲩϩⲉⲓ = fell + ϩⲓϫⲉⲛ ⲡⲓⲙⲱⲓⲧ = on the path'
    },
    {
      id: 'test-28-5',
      type: 'fill_blank',
      question: 'Complete: ϩⲁⲛⲕⲉⲟⲩⲟⲛ ⲁⲩϩⲉⲓ ϩⲓϫⲉⲛ ___= Others fell on good soil',
      correctAnswer: 'ⲡⲓⲕⲁϩⲓ ⲉⲑⲛⲁⲛⲉϥ',
      options: ['ⲡⲓⲕⲁϩⲓ ⲉⲑⲛⲁⲛⲉϥ', 'ⲛⲓⲡⲉⲧⲣⲁ', 'ⲛⲓϣⲟⲛϯ', 'ⲡⲓⲙⲱⲓⲧ'],
      explanation: 'ⲡⲓⲕⲁϩⲓ ⲉⲑⲛⲁⲛⲉϥ = the good soil'
    },
    {
      id: 'test-28-6',
      type: 'translation',
      question: 'Translate: ⲁⲛⲓϩⲁⲗⲁϯ ⲟⲩⲟⲙⲟⲩ',
      questionCoptic: 'ⲁⲛⲓϩⲁⲗⲁϯ ⲟⲩⲟⲙⲟⲩ',
      correctAnswer: 'The birds ate them',
      options: ['The birds ate them', 'The birds came', 'Birds were eating', 'The birds finished'],
      explanation: 'ⲁⲛⲓϩⲁⲗⲁϯ ⲟⲩⲟⲙⲟⲩ = the birds ate them'
    },
    {
      id: 'test-28-7',
      type: 'translation',
      question: 'Translate: ⲁϥⲟⲡⲧ ⲛ̀ⲟⲩⲧⲁϩ ⲛⲉⲙ ⲙⲁⲃ ⲛⲉⲙ ⲙⲁⲃϣⲉ',
      questionCoptic: 'ⲁϥⲟⲡⲧ ⲛ̀ⲟⲩⲧⲁϩ ⲛⲉⲙ ⲙⲁⲃ ⲛⲉⲙ ⲙⲁⲃϣⲉ',
      correctAnswer: 'It bore fruit: one hundred, sixty, and thirty',
      options: ['It bore fruit: one hundred, sixty, and thirty', 'Three harvests came', 'Many seeds grew', 'The yield was great'],
      explanation: 'ⲁϥⲟⲡⲧ = it bore + ⲛ̀ⲟⲩⲧⲁϩ (100), ⲙⲁⲃ (60), ⲙⲁⲃϣⲉ (30)'
    },
    {
      id: 'test-28-8',
      type: 'matching',
      question: 'Match Gospel story vocabulary',
      correctAnswer: 'matched',
      pairs: [
        { coptic: 'ⲁⲛⲟⲕ ⲡⲉ ⲡⲓⲙⲁⲛⲉⲥⲱⲟⲩ ⲉⲑⲛⲁⲛⲉϥ', english: 'I am the good shepherd' },
        { coptic: 'ⲡⲓⲙⲁⲛⲉⲥⲱⲟⲩ', english: 'shepherd' },
        { coptic: 'ⲉⲥⲱⲟⲩ', english: 'sheep' },
        { coptic: 'ⲟϩⲓ', english: 'lamb' }
      ]
    },
    {
      id: 'test-28-9',
      type: 'translation',
      question: 'Translate: ⲡⲓⲙⲁⲛⲉⲥⲱⲟⲩ ⲉⲑⲛⲁⲛⲉϥ ϣⲁϥⲭⲱ ⲛ̀ⲧⲉϥⲯⲩⲭⲏ',
      questionCoptic: 'ⲡⲓⲙⲁⲛⲉⲥⲱⲟⲩ ⲉⲑⲛⲁⲛⲉϥ ϣⲁϥⲭⲱ ⲛ̀ⲧⲉϥⲯⲩⲭⲏ',
      correctAnswer: 'The good shepherd lays down his life',
      options: ['The good shepherd lays down his life', 'The shepherd gives his soul', 'Good shepherds die', 'The shepherd sacrifices himself'],
      explanation: 'Good Shepherd discourse from John 10'
    },
    {
      id: 'test-28-10',
      type: 'multiple_choice',
      question: 'What is "sheep" in Coptic?',
      correctAnswer: 'ⲉⲥⲱⲟⲩ',
      options: ['ⲉⲥⲱⲟⲩ', 'ⲟϩⲓ', 'ⲙⲁⲛⲉⲥⲱⲟⲩ', 'ⲓⲟϩⲓ'],
      explanation: 'ⲉⲥⲱⲟⲩ = sheep (plural), ⲟϩⲓ = lamb'
    },
    {
      id: 'test-28-11',
      type: 'fill_blank',
      question: 'Complete: ⲁⲛⲟⲕ ⲡⲉ ___ = I am the light',
      correctAnswer: 'ⲟ ϥⲱⲥ',
      options: ['ⲟ ϥⲱⲥ', 'ⲟⲩⲱⲓⲛⲓ', 'ⲡⲓⲡ̀ⲛⲉⲩⲙⲁ', 'ⲏ ϣⲉⲣⲕⲏⲛ'],
      explanation: 'ⲟ ϥⲱⲥ = the light (from John 8:12)'
    },
    {
      id: 'test-28-12',
      type: 'translation',
      question: 'Translate: ⲟⲓ ⲛ̀ⲕⲗⲁⲓⲱⲙⲉⲛⲟⲓ ⲧⲓⲅⲉ ⲟⲓ ⲙⲁⲕⲁⲣⲓⲟⲓ',
      questionCoptic: 'ⲟⲓ ⲛ̀ⲕⲗⲁⲓⲱⲙⲉⲛⲟⲓ ⲧⲓⲅⲉ ⲟⲓ ⲙⲁⲕⲁⲣⲓⲟⲓ',
      correctAnswer: 'Blessed are those who mourn',
      options: ['Blessed are those who mourn', 'Happy are the sad', 'Blessed are the weepers', 'All of the above'],
      explanation: 'Second Beatitude from Matthew 5'
    },
    {
      id: 'test-28-13',
      type: 'matching',
      question: 'Match Beatitudes',
      correctAnswer: 'matched',
      pairs: [
        { coptic: 'ⲟⲓ ⲙⲁⲕⲁⲣⲓⲟⲓ ⲟⲓ ⲡ̀ⲧⲱⲭⲟⲓ ⲧⲟ ⲡ̀ⲛⲉⲩⲙⲁⲧⲓ', english: 'Blessed are the poor in spirit' },
        { coptic: 'ⲟⲓ ⲧⲏⲣⲟⲩ ⲟⲓ ⲕⲁⲓ ⲇⲱⲕⲟⲩⲛⲧⲉⲣ ⲉⲛⲉⲕⲉⲥ', english: 'Blessed are the persecuted' },
        { coptic: 'ⲟⲓ ⲁ̀ⲙⲁⲥⲉⲓ ⲑⲇⲩ', english: 'Blessed are the merciful' },
        { coptic: 'ⲟⲓ ⲉⲛⲁⲣⲕⲓ ⲕⲁⲓ ⲗ̀ⲡⲘ', english: 'Blessed are the righteous' }
      ]
    },
    {
      id: 'test-28-14',
      type: 'translation',
      question: 'Translate: ⲙⲁⲕⲁⲣⲓⲟⲥ ⲟⲩⲧⲓⲥ ⲣⲏⲛⲓ ⲕⲓ ⲟⲩ ⲧⲟⲩ ⲕⲩⲣⲓⲟⲩ',
      questionCoptic: 'ⲙⲁⲕⲁⲣⲓⲟⲥ ⲟⲩⲧⲓⲥ ⲣⲏⲛⲓ ⲕⲓ ⲟⲩ ⲧⲟⲩ ⲕⲩⲣⲓⲟⲩ',
      correctAnswer: 'Blessed is he who believes in the Lord',
      options: ['Blessed is he who believes in the Lord', 'Happy are those who trust God', 'Blessed the faithful ones', 'All of the above'],
      explanation: 'Beatitude of faith'
    },
    {
      id: 'test-28-15',
      type: 'fill_blank',
      question: 'Complete: ⲟⲓ ⲧⲓⲣⲟⲕⲟⲓ ⲧⲓⲛⲟⲥ ⲗⲟⲟ = Blessed are the meek',
      correctAnswer: 'ⲟⲓ ⲙⲁⲕⲁⲣⲓⲟⲓ',
      options: ['ⲟⲓ ⲙⲁⲕⲁⲣⲓⲟⲓ', 'ⲡⲉⲛⲓⲱⲧ', 'ⲟⲓ ⲙⲛⲏⲝⲟⲓ', 'ⲁⲙⲏⲛ'],
      explanation: 'Beatitude structure with ⲟⲓ ⲙⲁⲕⲁⲣⲓⲟⲓ = blessed are'
    },
    {
      id: 'test-28-16',
      type: 'translation',
      question: 'Translate: ⲉⲧⲓ ⲁⲫⲓⲥⲇⲩⲛⲉⲙⲟⲥ ⲧⲟⲡⲟⲛ ⲧⲉⲗⲓ',
      questionCoptic: 'ⲉⲧⲓ ⲁⲫⲓⲥⲇⲩⲛⲉⲙⲟⲥ ⲧⲟⲡⲟⲛ ⲧⲉⲗⲓ',
      correctAnswer: 'Concerning the place of completion',
      options: ['Concerning the place of completion', 'In the place of perfection', 'About the end place', 'At the place of fulfillment'],
      explanation: 'Eschatological reference in Gospel'
    },
    {
      id: 'test-28-17',
      type: 'sentence_building',
      question: 'Build: "I know my sheep"',
      correctAnswer: 'ⲅⲛⲱⲛⲁⲓ ⲧⲁ ⲉⲙⲁ',
      wordBank: ['ⲅⲛⲱⲛⲁⲓ', 'ⲧⲁ', 'ⲉⲙⲁ', 'ⲥⲉ'],
      explanation: 'I know (verb) my (possessive) sheep (object)'
    },
    {
      id: 'test-28-18',
      type: 'matching',
      question: 'Match Gospel miracle vocabulary',
      correctAnswer: 'matched',
      pairs: [
        { coptic: 'ⲛⲟⲟⲩⲡ', english: 'miracle/sign' },
        { coptic: 'ⲇⲩⲛⲁⲙⲓⲥ', english: 'power' },
        { coptic: 'ⲭⲁⲣⲓⲥⲙⲁ', english: 'grace/gift' },
        { coptic: 'ⲥⲱⲣⲓⲁ', english: 'healing/salvation' }
      ]
    },
    {
      id: 'test-28-19',
      type: 'translation',
      question: 'Translate: ϣⲁⲛϩⲙⲟⲭⲟⲥ ⲧⲓⲥ ⲙⲏ ⲓⲇⲓ',
      questionCoptic: 'ϣⲁⲛϩⲙⲟⲭⲟⲥ ⲧⲓⲥ ⲙⲏ ⲓⲇⲓ',
      correctAnswer: 'And he that follows me',
      options: ['And he that follows me', 'One who comes after me', 'Those who believe', 'The disciples follow'],
      explanation: 'Conditional clause in Gospel teaching'
    },
    {
      id: 'test-28-20',
      type: 'multiple_choice',
      question: 'What is "disciple" in Coptic?',
      correctAnswer: 'ⲙⲁⲑⲏⲧⲏⲥ',
      options: ['ⲙⲁⲑⲏⲧⲏⲥ', 'ⲁⲡⲟⲥⲧⲟⲗⲟⲥ', 'ϫⲁⲓⲣⲉ', 'ⲇⲟⲗⲟⲥ'],
      explanation: 'ⲙⲁⲑⲏⲧⲏⲥ = disciple, student'
    },
    {
      id: 'test-28-21',
      type: 'fill_blank',
      question: 'Complete: ⲙⲁⲕⲁⲣⲓⲟⲓ ⲛ̀ⲉⲓⲛⲣⲟϩ___ = Blessed are the pure in heart',
      correctAnswer: 'ⲧⲁ ⲕⲁⲣⲏⲏ',
      options: ['ⲧⲁ ⲕⲁⲣⲏⲏ', 'ⲧⲁ ⲙⲁⲧⲩ', 'ⲧⲁ ϥⲱⲥ', 'ⲧⲁ ⲛⲟⲩⲫⲓⲁ'],
      explanation: 'Beatitude of purity - ⲧⲁ ⲕⲁⲣⲏⲏ = the heart'
    },
    {
      id: 'test-28-22',
      type: 'translation',
      question: 'Translate: ⲡⲓ ⲣⲏⲙⲁ ⲧⲟⲩ ⲕⲩⲣⲓⲟⲩ',
      questionCoptic: 'ⲡⲓ ⲣⲏⲙⲁ ⲧⲟⲩ ⲕⲩⲣⲓⲟⲩ',
      correctAnswer: 'The word of the Lord',
      options: ['The word of the Lord', 'The Lord\'s word', 'Speech of God', 'The divine word'],
      explanation: 'ⲡⲓ ⲣⲏⲙⲁ = the word (from Greek ρῆμα)'
    },
    {
      id: 'test-28-23',
      type: 'sentence_building',
      question: 'Build: "The birds of the heaven"',
      correctAnswer: 'ⲛⲓϩⲁⲗⲁϯ ⲛ̀ⲧⲉ ⲡⲓⲫⲉ',
      wordBank: ['ⲛⲓϩⲁⲗⲁϯ', 'ⲛ̀ⲧⲉ', 'ⲡⲓ', 'ⲫⲉ'],
      explanation: 'Birds (subject) + of (particle) + the heaven'
    },
    {
      id: 'test-28-24',
      type: 'translation',
      question: 'Translate: ⲙⲁⲕⲁⲣⲓⲟⲡ ⲡ̀ⲛⲟⲟⲩⲥ',
      questionCoptic: 'ⲙⲁⲕⲁⲣⲓⲟⲡ ⲡ̀ⲛⲟⲟⲩⲥ',
      correctAnswer: 'Blessed are the faithful/truth-keepers',
      options: ['Blessed are the faithful/truth-keepers', 'Happy are the believers', 'Blessed ones who believe', 'Those who keep the truth'],
      explanation: 'Beatitude of faithfulness'
    },
    {
      id: 'test-28-25',
      type: 'matching',
      question: 'Match gospel concepts',
      correctAnswer: 'matched',
      pairs: [
        { coptic: 'ⲧⲟ ⲕⲏⲣⲩⲅⲙⲁ', english: 'the preaching/gospel' },
        { coptic: 'ⲩⲡⲟⲇⲓⲅⲙⲁ', english: 'example' },
        { coptic: 'ⲃⲁⲡⲧⲓⲍⲉⲩ', english: 'baptize' },
        { coptic: 'ⲡⲓⲡⲓⲧⲓⲛ', english: 'faith/belief' }
      ]
    },
    {
      id: 'test-28-26',
      type: 'translation',
      question: 'Translate: ⲛⲁ ⲙⲉ ⲉⲛ ⲧⲱ ⲃⲁⲥⲓⲗⲉⲓⲁ',
      questionCoptic: 'ⲛⲁ ⲙⲉ ⲉⲛ ⲧⲱ ⲃⲁⲥⲓⲗⲉⲓⲁ',
      correctAnswer: 'Theirs is the kingdom',
      options: ['Theirs is the kingdom', 'They are in the kingdom', 'The kingdom belongs to them', 'All of the above'],
      explanation: 'Culmination of the first Beatitude'
    },
    {
      id: 'test-28-27',
      type: 'fill_blank',
      question: 'Complete: ⲁⲙⲏⲛ ⲁⲙⲏⲛ ⲗⲟⲓⲧⲟⲥ ⲩⲙⲓⲛ = Truly, truly I say to you',
      correctAnswer: 'ⲗⲓⲕⲟⲛ',
      options: ['ⲗⲓⲕⲟⲛ', 'ϣⲁⲛⲉ', 'ⲕⲁⲥⲓ', 'ⲛⲓⲑⲏⲟⲩ'],
      explanation: 'ⲗⲓⲕⲟⲛ = truly (Hebrew origin)'
    },
    {
      id: 'test-28-28',
      type: 'translation',
      question: 'Translate: ⲟ ⲓⲁⲭⲟⲛ ⲟⲩ ⲁⲗϯⲧⲏⲥ ⲁⲣⲁ ⲡⲉⲓ',
      questionCoptic: 'ⲟ ⲓⲁⲭⲟⲛ ⲟⲩ ⲁⲗϯⲧⲏⲥ ⲁⲣⲁ ⲡⲉⲓ',
      correctAnswer: 'The healing of this illness',
      options: ['The healing of this illness', 'This sickness comes from God', 'The cure for this disease', 'Healing that is true'],
      explanation: 'Medical/healing terminology in Gospel'
    },
    {
      id: 'test-28-29',
      type: 'multiple_choice',
      question: 'Which Beatitude emphasizes mercy?',
      correctAnswer: 'ⲟⲓ ⲟⲓⲕⲧⲓⲣⲙⲟⲛⲉⲥ ⲣⲁ ⲟⲓⲕⲧⲓⲣⲧⲏⲑⲏⲥⲟⲛⲧⲁⲓ',
      options: ['ⲟⲓ ⲟⲓⲕⲧⲓⲣⲙⲟⲛⲉⲥ ⲣⲁ ⲟⲓⲕⲧⲓⲣⲧⲏⲑⲏⲥⲟⲛⲧⲁⲓ', 'ⲟⲓ ⲗ̀ⲯⲟⲣ ⲙⲛ ⲛⲓⲇⲓⲕⲏⲟⲗⲟⲅⲓⲁ', 'ⲟⲓ ⲕⲁⲑⲁⲣⲟⲓ', 'ⲟⲓ ⲡⲣⲁⲓⲥⲟⲗⲟⲅⲟⲓ'],
      explanation: 'The merciful Beatitude - blessed are the merciful'
    },
    {
      id: 'test-28-30',
      type: 'sentence_building',
      question: 'Build: "Go and preach the gospel to all nations"',
      correctAnswer: 'ϭⲱⲗⲧⲉ ⲕⲁⲓ ⲕⲏⲣⲩⲣⲥⲁⲧⲉ ⲧⲟ ⲉⲩⲁⲅⲅⲉⲗⲓⲟⲛ ⲡⲁⲥⲁⲓⲥ ⲧⲁ ⲉⲑⲛⲏ',
      wordBank: ['ϭⲱⲗⲧⲉ', 'ⲕⲁⲓ', 'ⲕⲏⲣⲩⲥⲥⲉⲧⲉ', 'ⲧⲟ ⲉⲩⲁⲅⲅⲉⲗⲓⲟⲛ', 'ⲡⲁⲥⲁⲓⲥ', 'ⲧⲁ ⲉⲑⲛⲏ'],
      explanation: 'Great Commission from Matthew 28'
    }
  ]
};

export default unit28Test;
