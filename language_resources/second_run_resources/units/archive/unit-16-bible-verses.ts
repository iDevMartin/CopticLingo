import { Unit } from '../../types';

// UNIT 16: BIBLE VERSES & SCRIPTURE READING
// Verified for Bohairic dialect consistency
// Key Biblical passages

const unit16: Unit = {
  id: 'unit-16',
  title: 'Bible Verses & Scripture',
  description: 'Read and understand key Bible verses in Coptic',
  order: 16,
  color: '#58CC02',
  lessons: [
    {
      id: 'lesson-16-1',
      unitId: 'unit-16',
      title: 'John 3:16 - God\'s Love',
      description: 'The most famous Bible verse',
      order: 1,
      xpReward: 35,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-16-1-1',
          type: 'translation',
          question: 'Translate: ⲫϯ ⲅⲁⲣ ⲁϥⲙⲉⲛⲣⲉ ⲙⲡⲓⲕⲟⲥⲙⲟⲥ',
          questionCoptic: 'ⲫϯ ⲅⲁⲣ ⲁϥⲙⲉⲛⲣⲉ ⲙⲡⲓⲕⲟⲥⲙⲟⲥ',
          correctAnswer: 'For God so loved the world',
          options: ['For God so loved the world', 'God loves the world', 'God is love', 'The world loves God'],
          explanation: 'ⲫϯ ⲅⲁⲣ = for God + ⲁϥⲙⲉⲛⲣⲉ = he loved (past) + ⲙⲡⲓⲕⲟⲥⲙⲟⲥ = the world (Bohairic: ⲫϯ not ⲫⲛⲟⲩϯ, ⲙⲉⲛⲣⲉ not ⲙⲉⲣⲓ!)'
        },
        {
          id: 'ex-16-1-2',
          type: 'multiple_choice',
          question: 'What does ⲅⲁⲣ mean in this context?',
          questionCoptic: 'ⲅⲁⲣ',
          correctAnswer: 'for/because',
          options: ['for/because', 'and', 'but', 'therefore'],
          explanation: 'ⲅⲁⲣ (gar) is a conjunction meaning "for" or "because"'
        },
        {
          id: 'ex-16-1-3',
          type: 'matching',
          question: 'Match John 3:16 vocabulary',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲫϯ', english: 'God' },
            { coptic: 'ⲙⲉⲛⲣⲉ', english: 'to love' },
            { coptic: 'ⲕⲟⲥⲙⲟⲥ', english: 'world' },
            { coptic: 'ⲙⲟⲛⲟⲅⲉⲛⲏⲥ', english: 'only-begotten' }
          ]
        },
        {
          id: 'ex-16-1-4',
          type: 'translation',
          question: 'Translate: ϩⲱⲥⲧⲉ ⲡⲉϥϣⲏⲣⲓ ⲙⲙⲁⲩⲁⲧϥ ⲉⲧⲁϥⲧⲏⲓϥ',
          questionCoptic: 'ϩⲱⲥⲧⲉ ⲡⲉϥϣⲏⲣⲓ ⲙⲙⲁⲩⲁⲧϥ ⲉⲧⲁϥⲧⲏⲓϥ',
          correctAnswer: 'That he gave his only begotten Son',
          options: ['That he gave his only begotten Son', 'He gives his son', 'His only son gave', 'The son was given'],
          explanation: 'ϩⲱⲥⲧⲉ = that/so that + ⲡⲉϥϣⲏⲣⲓ ⲙⲙⲁⲩⲁⲧϥ = his only son + ⲉⲧⲁϥⲧⲏⲓϥ = he gave him (Bohairic ϣⲏⲣⲓ not ⲥⲏⲣⲓ!)'
        },
        {
          id: 'ex-16-1-5',
          type: 'multiple_choice',
          question: 'What is "only begotten" in Coptic?',
          correctAnswer: 'ⲙⲟⲛⲟⲅⲉⲛⲏⲥ',
          options: ['ⲙⲟⲛⲟⲅⲉⲛⲏⲥ', 'ⲙⲙⲁⲩⲁⲧϥ', 'ⲙⲟⲛⲟⲥ', 'ⲅⲉⲛⲟⲥ'],
          explanation: 'ⲙⲟⲛⲟⲅⲉⲛⲏⲥ (monogenēs) or ⲙⲙⲁⲩⲁⲧϥ = only-begotten/unique'
        },
        {
          id: 'ex-16-1-6',
          type: 'sentence_building',
          question: 'Build: "For God loved the world"',
          correctAnswer: 'ⲫϯ ⲅⲁⲣ ⲁϥⲙⲉⲛⲣⲉ ⲙⲡⲓⲕⲟⲥⲙⲟⲥ',
          wordBank: ['ⲫϯ', 'ⲅⲁⲣ', 'ⲁϥ', 'ⲙⲉⲛⲣⲉ', 'ⲙ', 'ⲡⲓⲕⲟⲥⲙⲟⲥ'],
          explanation: 'ⲫϯ ⲅⲁⲣ ⲁϥⲙⲉⲛⲣⲉ ⲙⲡⲓⲕⲟⲥⲙⲟⲥ - the opening of John 3:16 (Bohairic forms!)'
        },
        {
          id: 'ex-16-1-7',
          type: 'fill_blank',
          question: 'Complete: ⲫϯ ⲅⲁⲣ ⲁϥⲙⲉⲛⲣⲉ ⲙⲡⲓ___ = For God loved the world',
          correctAnswer: 'ⲕⲟⲥⲙⲟⲥ',
          options: ['ⲕⲟⲥⲙⲟⲥ', 'ⲕⲁϩⲓ', 'ⲫⲉ', 'ⲣⲱⲙⲓ'],
          explanation: 'ⲕⲟⲥⲙⲟⲥ (kosmos) means "world" in Biblical Greek/Coptic'
        },
        {
          id: 'ex-16-1-8',
          type: 'matching',
          question: 'Match theological vocabulary',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲁϥⲧⲏⲓϥ', english: 'he gave him' },
            { coptic: 'ϩⲱⲥⲧⲉ', english: 'so that/in order that' },
            { coptic: 'ⲟⲩⲟⲛ ⲛⲓⲃⲉⲛ', english: 'everyone/all' },
            { coptic: 'ⲉⲑⲛⲁϩϯ', english: 'believing/who believes' }
          ]
        }
      ]
    },
    {
      id: 'lesson-16-2',
      unitId: 'unit-16',
      title: 'Psalm 23:1 - The Good Shepherd',
      description: 'The Lord is my shepherd',
      order: 2,
      xpReward: 35,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-16-2-1',
          type: 'translation',
          question: 'Translate: ⲡ̀ϭⲟⲓⲥ ⲡⲉⲧⲁⲙⲟⲛⲓ',
          questionCoptic: 'ⲡ̀ϭⲟⲓⲥ ⲡⲉⲧⲁⲙⲟⲛⲓ',
          correctAnswer: 'The Lord is my shepherd',
          options: ['The Lord is my shepherd', 'My Lord shepherds', 'The shepherd of the Lord', 'I am the Lord\'s shepherd'],
          explanation: 'ⲡ̀ϭⲟⲓⲥ = the Lord + ⲡⲉⲧⲁⲙⲟⲛⲓ = my shepherd (literally: he who shepherds me)'
        },
        {
          id: 'ex-16-2-2',
          type: 'multiple_choice',
          question: 'What is "shepherd" in Coptic?',
          correctAnswer: 'ⲙⲁⲛⲉⲥⲱⲟⲩ',
          options: ['ⲙⲁⲛⲉⲥⲱⲟⲩ', 'ⲙⲟⲛⲓ', 'ⲡⲟⲓⲙⲏⲛ', 'ⲡⲁⲥⲧⲱⲣ'],
          explanation: 'ⲙⲁⲛⲉⲥⲱⲟⲩ (manesōou) means "shepherd" - literally "keeper of sheep"'
        },
        {
          id: 'ex-16-2-3',
          type: 'matching',
          question: 'Match Psalm 23 vocabulary',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲡ̀ϭⲟⲓⲥ', english: 'the Lord' },
            { coptic: 'ⲙⲟⲛⲓ', english: 'to shepherd' },
            { coptic: 'ⲛⲛⲁϣⲁⲧ', english: 'I will not lack' },
            { coptic: 'ⲉⲥⲱⲟⲩ', english: 'sheep' }
          ]
        },
        {
          id: 'ex-16-2-4',
          type: 'translation',
          question: 'Translate: ⲛⲛⲁϣⲁⲧ ⲛ̀ϩⲗⲓ',
          questionCoptic: 'ⲛⲛⲁϣⲁⲧ ⲛ̀ϩⲗⲓ',
          correctAnswer: 'I shall not want',
          options: ['I shall not want', 'I do not lack', 'Nothing is lacking', 'I want nothing'],
          explanation: 'ⲛⲛⲁϣⲁⲧ = I will not lack + ⲛ̀ϩⲗⲓ = anything/nothing'
        },
        {
          id: 'ex-16-2-5',
          type: 'multiple_choice',
          question: 'What does ϣⲁⲧ mean?',
          questionCoptic: 'ϣⲁⲧ',
          correctAnswer: 'to lack/want',
          options: ['to lack/want', 'to have', 'to need', 'to desire'],
          explanation: 'ϣⲁⲧ (shat) means "to lack" or "to be in need" - ⲛⲛⲁϣⲁⲧ = I will not lack'
        },
        {
          id: 'ex-16-2-6',
          type: 'sentence_building',
          question: 'Build: "The Lord is my shepherd"',
          correctAnswer: 'ⲡ̀ϭⲟⲓⲥ ⲡⲉⲧⲁⲙⲟⲛⲓ',
          wordBank: ['ⲡ̀ϭⲟⲓⲥ', 'ⲡⲉⲧⲁ', 'ⲙⲟⲛⲓ', 'ⲡⲁ'],
          explanation: 'ⲡ̀ϭⲟⲓⲥ ⲡⲉⲧⲁⲙⲟⲛⲓ - the famous opening of Psalm 23'
        },
        {
          id: 'ex-16-2-7',
          type: 'fill_blank',
          question: 'Complete: ⲡ̀ϭⲟⲓⲥ ⲡⲉⲧⲁ___ = The Lord is my shepherd',
          correctAnswer: 'ⲙⲟⲛⲓ',
          options: ['ⲙⲟⲛⲓ', 'ⲧⲁⲙⲟ', 'ⲥⲱⲧⲙ', 'ⲥⲙⲟⲩ'],
          explanation: 'ⲙⲟⲛⲓ (moni) means "to shepherd" or "to tend flocks"'
        },
        {
          id: 'ex-16-2-8',
          type: 'matching',
          question: 'Match Psalm metaphors',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲡⲉⲧⲁⲙⲟⲛⲓ', english: 'my shepherd' },
            { coptic: 'ⲟⲩⲙⲁ ⲛ̀ⲭⲗⲟⲏ', english: 'green pasture' },
            { coptic: 'ⲟⲩⲙⲱⲓⲧ', english: 'a path' },
            { coptic: 'ϯⲡⲉ ⲛ̀ⲧⲉⲍⲱⲏ', english: 'valley of life' }
          ]
        }
      ]
    },
    {
      id: 'lesson-16-3',
      unitId: 'unit-16',
      title: 'Matthew 5:3 - First Beatitude',
      description: 'Blessed are the poor in spirit',
      order: 3,
      xpReward: 35,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-16-3-1',
          type: 'translation',
          question: 'Translate: ⲱⲟⲩⲛⲓⲁⲧⲟⲩ ⲛ̀ⲛⲓϩⲏⲕⲓ ϧⲉⲛ ⲡⲓⲡ̀ⲛⲉⲩⲙⲁ',
          questionCoptic: 'ⲱⲟⲩⲛⲓⲁⲧⲟⲩ ⲛ̀ⲛⲓϩⲏⲕⲓ ϧⲉⲛ ⲡⲓⲡ̀ⲛⲉⲩⲙⲁ',
          correctAnswer: 'Blessed are the poor in spirit',
          options: ['Blessed are the poor in spirit', 'Happy are the spiritual poor', 'The poor are blessed', 'Blessed spirits are poor'],
          explanation: 'ⲱⲟⲩⲛⲓⲁⲧⲟⲩ = blessed are + ⲛ̀ⲛⲓϩⲏⲕⲓ = the poor + ϧⲉⲛ ⲡⲓⲡ̀ⲛⲉⲩⲙⲁ = in spirit'
        },
        {
          id: 'ex-16-3-2',
          type: 'multiple_choice',
          question: 'What does ⲱⲟⲩⲛⲓⲁⲧⲟⲩ mean?',
          questionCoptic: 'ⲱⲟⲩⲛⲓⲁⲧⲟⲩ',
          correctAnswer: 'blessed are/happy are',
          options: ['blessed are/happy are', 'poor are', 'spiritual are', 'humble are'],
          explanation: 'ⲱⲟⲩⲛⲓⲁⲧⲟⲩ (ōouniatou) means "blessed are" or "happy are" - from Greek makarios'
        },
        {
          id: 'ex-16-3-3',
          type: 'matching',
          question: 'Match Beatitude vocabulary',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲱⲟⲩⲛⲓⲁⲧⲟⲩ', english: 'blessed are' },
            { coptic: 'ϩⲏⲕⲓ', english: 'poor' },
            { coptic: 'ⲡ̀ⲛⲉⲩⲙⲁ', english: 'spirit' },
            { coptic: 'ϯⲙⲉⲧⲟⲩⲣⲟ ⲛ̀ⲧⲉⲛⲓⲫⲏⲟⲩⲓ', english: 'kingdom of heaven' }
          ]
        },
        {
          id: 'ex-16-3-4',
          type: 'translation',
          question: 'Translate: ϫⲉ ⲑⲱⲟⲩ ⲧⲉ ϯⲙⲉⲧⲟⲩⲣⲟ ⲛ̀ⲧⲉⲛⲓⲫⲏⲟⲩⲓ',
          questionCoptic: 'ϫⲉ ⲑⲱⲟⲩ ⲧⲉ ϯⲙⲉⲧⲟⲩⲣⲟ ⲛ̀ⲧⲉⲛⲓⲫⲏⲟⲩⲓ',
          correctAnswer: 'For theirs is the kingdom of heaven',
          options: ['For theirs is the kingdom of heaven', 'Because the kingdom is theirs', 'The kingdom of heaven is', 'They have the kingdom'],
          explanation: 'ϫⲉ = for/because + ⲑⲱⲟⲩ ⲧⲉ = theirs is + ϯⲙⲉⲧⲟⲩⲣⲟ ⲛ̀ⲧⲉⲛⲓⲫⲏⲟⲩⲓ = the kingdom of heaven'
        },
        {
          id: 'ex-16-3-5',
          type: 'multiple_choice',
          question: 'What is "poor" in Coptic?',
          correctAnswer: 'ϩⲏⲕⲓ',
          options: ['ϩⲏⲕⲓ', 'ⲣⲙϩⲉ', 'ⲉⲃⲓⲏⲛ', 'ⲡⲧⲱⲭⲟⲥ'],
          explanation: 'ϩⲏⲕⲓ (hēki) means "poor" - plural: ⲛⲓϩⲏⲕⲓ (the poor)'
        },
        {
          id: 'ex-16-3-6',
          type: 'sentence_building',
          question: 'Build: "Blessed are the poor in spirit"',
          correctAnswer: 'ⲱⲟⲩⲛⲓⲁⲧⲟⲩ ⲛ̀ⲛⲓϩⲏⲕⲓ ϧⲉⲛ ⲡⲓⲡ̀ⲛⲉⲩⲙⲁ',
          wordBank: ['ⲱⲟⲩⲛⲓⲁⲧⲟⲩ', 'ⲛ̀', 'ⲛⲓϩⲏⲕⲓ', 'ϧⲉⲛ', 'ⲡⲓⲡ̀ⲛⲉⲩⲙⲁ'],
          explanation: 'ⲱⲟⲩⲛⲓⲁⲧⲟⲩ ⲛ̀ⲛⲓϩⲏⲕⲓ ϧⲉⲛ ⲡⲓⲡ̀ⲛⲉⲩⲙⲁ - the first Beatitude'
        },
        {
          id: 'ex-16-3-7',
          type: 'fill_blank',
          question: 'Complete: ⲱⲟⲩⲛⲓⲁⲧⲟⲩ ⲛ̀ⲛⲓϩⲏⲕⲓ ϧⲉⲛ ⲡⲓ___ = Blessed are the poor in spirit',
          correctAnswer: 'ⲡ̀ⲛⲉⲩⲙⲁ',
          options: ['ⲡ̀ⲛⲉⲩⲙⲁ', 'ⲥⲱⲙⲁ', 'ⲯⲩⲭⲏ', 'ⲕⲁⲣⲇⲓⲁ'],
          explanation: 'ⲡ̀ⲛⲉⲩⲙⲁ (pneuma) means "spirit" - with article: ⲡⲓⲡ̀ⲛⲉⲩⲙⲁ'
        },
        {
          id: 'ex-16-3-8',
          type: 'matching',
          question: 'Match more Beatitude terms',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲑⲱⲟⲩ', english: 'theirs (emphatic)' },
            { coptic: 'ⲙⲁⲕⲁⲣⲓⲟⲥ', english: 'blessed/happy' },
            { coptic: 'ⲧⲁⲡⲉⲓⲛⲟⲥ', english: 'humble' },
            { coptic: 'ⲡⲧⲱⲭⲟⲥ', english: 'poor (Greek)' }
          ]
        }
      ]
    }
  ]
};

export default unit16;
