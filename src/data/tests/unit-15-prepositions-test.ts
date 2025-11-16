import { TestUnit } from '../../types';

// TEST UNIT 15: PREPOSITIONS
// Comprehensive test covering all 5 lessons
// 30 exercises testing spatial and relational prepositions

const unit15Test: TestUnit = {
  id: 'test-unit-15',
  unitId: 'unit-15',
  title: 'Prepositions Test',
  description: 'Test your knowledge of spatial and relational prepositions',
  order: 15,
  exercises: [
    // Lesson 15-1: Basic Prepositions Part 1 - exercises 1-6
    {
      id: 'test-15-1',
      type: 'multiple_choice',
      question: 'What does ϧⲉⲛ mean?',
      questionCoptic: 'ϧⲉⲛ',
      correctAnswer: 'in/inside',
      options: ['in/inside', 'to', 'from', 'on'],
      explanation: 'ϧⲉⲛ (khen) = in, inside (basic locative preposition)'
    },
    {
      id: 'test-15-2',
      type: 'matching',
      question: 'Match basic prepositions',
      correctAnswer: 'matched',
      pairs: [
        { coptic: 'ϧⲉⲛ', english: 'in/inside' },
        { coptic: 'ⲉ̀', english: 'to/toward' },
        { coptic: 'ⲉ̀ⲃⲟⲗ', english: 'from/out of' },
        { coptic: 'ϩⲓ', english: 'on/upon' }
      ]
    },
    {
      id: 'test-15-3',
      type: 'translation',
      question: 'Translate: ⲁϥⲓ̀ ⲉ̀ϯⲉⲕⲕⲗⲏⲥⲓⲁ',
      questionCoptic: 'ⲁϥⲓ̀ ⲉ̀ϯⲉⲕⲕⲗⲏⲥⲓⲁ',
      correctAnswer: 'he came to church',
      options: ['he came to church', 'he is in church', 'he came from church', 'he went to church'],
      explanation: 'ⲁϥⲓ̀ = he came + ⲉ̀ = to + ϯⲉⲕⲕⲗⲏⲥⲓⲁ = the church (Bohairic ⲓ̀ not ⲉⲓ!)'
    },
    {
      id: 'test-15-4',
      type: 'fill_blank',
      question: 'Complete: ⲡⲓϫⲱⲙ ⲭⲏ ___ ⲡⲓⲧⲣⲁⲡⲉⲍⲁ = the book is on the table',
      correctAnswer: 'ϩⲓ',
      options: ['ϩⲓ', 'ϧⲉⲛ', 'ⲉ̀', 'ⲛⲉⲙ'],
      explanation: 'ϩⲓ (hi) = on, upon - used for surface contact'
    },
    {
      id: 'test-15-5',
      type: 'sentence_building',
      question: 'Build: "He went out from the house"',
      correctAnswer: 'ⲁϥϣⲉⲛⲓ ⲉ̀ⲃⲟⲗ ϧⲉⲛ ⲡⲓⲏⲓ',
      wordBank: ['ⲁϥϣⲉⲛⲓ', 'ⲉ̀ⲃⲟⲗ', 'ϧⲉⲛ', 'ⲡⲓⲏⲓ'],
      explanation: 'ⲁϥϣⲉⲛⲓ = he went + ⲉ̀ⲃⲟⲗ ϧⲉⲛ = out from + ⲡⲓⲏⲓ = the house (Bohairic ϣⲉⲛⲓ not ⲃⲱⲕ!)'
    },
    {
      id: 'test-15-6',
      type: 'translation',
      question: 'Translate: ϯⲙⲟϣⲓ ϧⲉⲛ ⲡⲓⲕⲁϩⲓ',
      questionCoptic: 'ϯⲙⲟϣⲓ ϧⲉⲛ ⲡⲓⲕⲁϩⲓ',
      correctAnswer: 'I walk in the land',
      options: ['I walk in the land', 'I walk on the land', 'I walked in the land', 'I will walk in the land'],
      explanation: 'ϯⲙⲟϣⲓ = I walk + ϧⲉⲛ = in + ⲡⲓⲕⲁϩⲓ = the land/earth (Bohairic ⲙⲟϣⲓ not ⲙⲟⲟϣⲉ!)'
    },

    // Lesson 15-2: Basic Prepositions Part 2 - exercises 7-12
    {
      id: 'test-15-7',
      type: 'multiple_choice',
      question: 'What does ⲛⲉⲙ mean?',
      questionCoptic: 'ⲛⲉⲙ',
      correctAnswer: 'with',
      options: ['with', 'to', 'from', 'in'],
      explanation: 'ⲛⲉⲙ (nem) = with (comitative preposition)'
    },
    {
      id: 'test-15-8',
      type: 'matching',
      question: 'Match directional prepositions',
      correctAnswer: 'matched',
      pairs: [
        { coptic: 'ⲛⲉⲙ', english: 'with' },
        { coptic: 'ⲉ̀ϩ̀ⲣⲏⲓ', english: 'up/upward' },
        { coptic: 'ⲉ̀ⲡⲉⲥⲏⲧ', english: 'down/downward' },
        { coptic: 'ⲥⲁⲃⲟⲗ', english: 'outside' }
      ]
    },
    {
      id: 'test-15-9',
      type: 'translation',
      question: 'Translate: ⲁⲓϣⲉⲛⲓ ⲛⲉⲙⲁⲥ',
      questionCoptic: 'ⲁⲓϣⲉⲛⲓ ⲛⲉⲙⲁⲥ',
      correctAnswer: 'I went with her',
      options: ['I went with her', 'I went with him', 'I went to her', 'she went with me'],
      explanation: 'ⲁⲓϣⲉⲛⲓ = I went + ⲛⲉⲙⲁⲥ = with her (ⲛⲉⲙ + suffix -ⲁⲥ) (Bohairic ϣⲉⲛⲓ not ⲃⲱⲕ!)'
    },
    {
      id: 'test-15-10',
      type: 'fill_blank',
      question: 'Complete: ⲁⲙⲟⲩ ___ ⲉ̀ⲃⲟⲗ ϩⲁ ⲡⲓⲧⲱⲟⲩ = come down from the mountain',
      correctAnswer: 'ⲉ̀ⲡⲉⲥⲏⲧ',
      options: ['ⲉ̀ⲡⲉⲥⲏⲧ', 'ⲉ̀ϩ̀ⲣⲏⲓ', 'ϧⲉⲛ', 'ⲥⲁⲃⲟⲗ'],
      explanation: 'ⲉ̀ⲡⲉⲥⲏⲧ = down, downward (directional)'
    },
    {
      id: 'test-15-11',
      type: 'translation',
      question: 'Translate: ϥϣⲉⲛⲓ ⲉ̀ϩ̀ⲣⲏⲓ ⲉ̀ⲧ̀ⲫⲉ',
      questionCoptic: 'ϥϣⲉⲛⲓ ⲉ̀ϩ̀ⲣⲏⲓ ⲉ̀ⲧ̀ⲫⲉ',
      correctAnswer: 'he goes up to heaven',
      options: ['he goes up to heaven', 'he came down from heaven', 'he is in heaven', 'he went down to heaven'],
      explanation: 'ϥϣⲉⲛⲓ = he goes + ⲉ̀ϩ̀ⲣⲏⲓ = up + ⲉ̀ = to + ⲧ̀ⲫⲉ = heaven (Bohairic ϣⲉⲛⲓ not ⲃⲱⲕ!)'
    },
    {
      id: 'test-15-12',
      type: 'sentence_building',
      question: 'Build: "We walk with you (plural)"',
      correctAnswer: 'ⲧⲉⲛⲙⲟϣⲓ ⲛⲉⲙⲱⲧⲉⲛ',
      wordBank: ['ⲧⲉⲛⲙⲟϣⲓ', 'ⲛⲉⲙⲱⲧⲉⲛ', 'ⲛⲉⲙⲁⲕ', 'ⲛⲉⲙⲁϥ'],
      explanation: 'ⲧⲉⲛⲙⲟϣⲓ = we walk + ⲛⲉⲙⲱⲧⲉⲛ = with you (pl.) (Bohairic ⲙⲟϣⲓ not ⲙⲟⲟϣⲉ!)'
    },

    // Lesson 15-3: Compound Prepositions - exercises 13-18
    {
      id: 'test-15-13',
      type: 'multiple_choice',
      question: 'What does ⲉ̀ⲃⲟⲗ ϩⲓⲧⲉⲛ mean?',
      questionCoptic: 'ⲉ̀ⲃⲟⲗ ϩⲓⲧⲉⲛ',
      correctAnswer: 'through/by means of',
      options: ['through/by means of', 'from inside', 'because of', 'outside of'],
      explanation: 'ⲉ̀ⲃⲟⲗ ϩⲓⲧⲉⲛ = through, by means of, via (compound preposition)'
    },
    {
      id: 'test-15-14',
      type: 'matching',
      question: 'Match compound prepositions',
      correctAnswer: 'matched',
      pairs: [
        { coptic: 'ⲉ̀ⲃⲟⲗ ϩⲓⲧⲉⲛ', english: 'through/by means of' },
        { coptic: 'ⲉⲑⲃⲉ', english: 'because of' },
        { coptic: 'ϩⲓϫⲉⲛ', english: 'on/upon' },
        { coptic: 'ⲕⲁⲧⲁ', english: 'according to' }
      ]
    },
    {
      id: 'test-15-15',
      type: 'translation',
      question: 'Translate: ⲁⲓⲓ̀ ⲉ̀ⲃⲟⲗ ϩⲓⲧⲉⲛ ⲡⲓⲣⲟ',
      questionCoptic: 'ⲁⲓⲓ̀ ⲉ̀ⲃⲟⲗ ϩⲓⲧⲉⲛ ⲡⲓⲣⲟ',
      correctAnswer: 'I came through the door',
      options: ['I came through the door', 'I opened the door', 'I went to the door', 'I came from the door'],
      explanation: 'ⲁⲓⲓ̀ = I came + ⲉ̀ⲃⲟⲗ ϩⲓⲧⲉⲛ = through + ⲡⲓⲣⲟ = the door (Bohairic ⲓ̀ not ⲉⲓ!)'
    },
    {
      id: 'test-15-16',
      type: 'fill_blank',
      question: 'Complete: ___ ⲫϯ ⲁⲛⲓ̀ = because of God we came',
      correctAnswer: 'ⲉⲑⲃⲉ',
      options: ['ⲉⲑⲃⲉ', 'ϩⲓⲧⲉⲛ', 'ⲕⲁⲧⲁ', 'ⲛⲉⲙ'],
      explanation: 'ⲉⲑⲃⲉ (ethve) = because of, concerning (Bohairic ⲫϯ not ⲫⲛⲟⲩϯ!)'
    },
    {
      id: 'test-15-17',
      type: 'sentence_building',
      question: 'Build: "According to the scripture"',
      correctAnswer: 'ⲕⲁⲧⲁ ϯⲅⲣⲁⲫⲏ',
      wordBank: ['ⲕⲁⲧⲁ', 'ϯⲅⲣⲁⲫⲏ', 'ⲉⲑⲃⲉ', 'ⲙ̀ⲡⲉⲙⲑⲟ'],
      explanation: 'ⲕⲁⲧⲁ (kata, from Greek) = according to + ϯⲅⲣⲁⲫⲏ = the scripture'
    },
    {
      id: 'test-15-18',
      type: 'translation',
      question: 'Translate: ⲙⲡⲉⲙⲑⲟ ⲙⲫϯ',
      questionCoptic: 'ⲙⲡⲉⲙⲑⲟ ⲙⲫϯ',
      correctAnswer: 'before God / in God\'s presence',
      options: ['before God / in God\'s presence', 'after God', 'with God', 'according to God'],
      explanation: 'ⲙⲡⲉⲙⲑⲟ = before, in the presence of + ⲙⲫϯ = of God (Bohairic ⲫϯ not ⲫⲛⲟⲩϯ!)'
    },

    // Lesson 15-4: Prepositions with Pronouns - exercises 19-24
    {
      id: 'test-15-19',
      type: 'multiple_choice',
      question: 'How do you say "to me"?',
      correctAnswer: 'ⲉⲣⲟⲓ',
      options: ['ⲉⲣⲟⲓ', 'ⲛⲉⲙⲏⲓ', 'ⲙ̀ⲙⲟⲓ', 'ϧⲁⲣⲟⲓ'],
      explanation: 'ⲉⲣⲟⲓ = ⲉ̀ (to) + suffix -ⲣⲟⲓ (me) = to me'
    },
    {
      id: 'test-15-20',
      type: 'matching',
      question: 'Match prepositions with pronouns',
      correctAnswer: 'matched',
      pairs: [
        { coptic: 'ⲉⲣⲟⲓ', english: 'to me' },
        { coptic: 'ⲛⲉⲙⲁⲕ', english: 'with you (m)' },
        { coptic: 'ⲙ̀ⲙⲟϥ', english: 'of him/it' },
        { coptic: 'ϧⲁⲣⲟⲥ', english: 'to her' }
      ]
    },
    {
      id: 'test-15-21',
      type: 'translation',
      question: 'Translate: ⲁϥϫⲟⲥ ⲛⲏⲓ',
      questionCoptic: 'ⲁϥϫⲟⲥ ⲛⲏⲓ',
      correctAnswer: 'he said it to me',
      options: ['he said it to me', 'he told me', 'I told him', 'he said to you'],
      explanation: 'ⲁϥϫⲟⲥ = he said it + ⲛⲏⲓ (ⲛⲁ- = to + -ⲓ = me) = to me'
    },
    {
      id: 'test-15-22',
      type: 'fill_blank',
      question: 'Complete: ϯϣⲟⲡ ___ = I am with them',
      correctAnswer: 'ⲛⲉⲙⲱⲟⲩ',
      options: ['ⲛⲉⲙⲱⲟⲩ', 'ⲛⲉⲙⲁϥ', 'ⲉⲣⲱⲟⲩ', 'ⲙ̀ⲙⲱⲟⲩ'],
      explanation: 'ⲛⲉⲙⲱⲟⲩ = ⲛⲉⲙ (with) + suffix -ⲱⲟⲩ (them) = with them'
    },
    {
      id: 'test-15-23',
      type: 'sentence_building',
      question: 'Build: "Because of you (m), I believe"',
      correctAnswer: 'ⲉⲑⲃⲏⲧⲕ ϯⲛⲁϩϯ',
      wordBank: ['ⲉⲑⲃⲉ', 'ⲑⲏⲧⲕ', 'ϯⲛⲁϩϯ', 'ⲛⲁⲕ'],
      explanation: 'ⲉⲑⲃⲏⲧⲕ = ⲉⲑⲃⲉ (because of) + suffix -ⲏⲧⲕ (you, m) + ϯⲛⲁϩϯ = I believe'
    },
    {
      id: 'test-15-24',
      type: 'translation',
      question: 'Translate: ⲁⲛⲙⲟϣⲓ ⲛⲉⲙⲱⲧⲉⲛ',
      questionCoptic: 'ⲁⲛⲙⲟϣⲓ ⲛⲉⲙⲱⲧⲉⲛ',
      correctAnswer: 'we walked with you (plural)',
      options: ['we walked with you (plural)', 'you walked with us', 'we walk with you', 'they walked with you'],
      explanation: 'ⲁⲛⲙⲟϣⲓ = we walked + ⲛⲉⲙⲱⲧⲉⲛ = with you (pl.) (Bohairic ⲙⲟϣⲓ not ⲙⲟⲟϣⲉ!)'
    },

    // Lesson 15-5: Location & Direction - exercises 25-30
    {
      id: 'test-15-25',
      type: 'multiple_choice',
      question: 'How do you say "here"?',
      correctAnswer: 'ⲙⲡⲁⲓⲙⲁ',
      options: ['ⲙⲡⲁⲓⲙⲁ', 'ⲉⲧⲙ̀ⲙⲁⲩ', 'ⲡⲓⲙⲁ', 'ⲙⲡⲓⲙⲁ'],
      explanation: 'ⲙⲡⲁⲓⲙⲁ (em-pai-ma) = here, in this place'
    },
    {
      id: 'test-15-26',
      type: 'matching',
      question: 'Match location expressions',
      correctAnswer: 'matched',
      pairs: [
        { coptic: 'ⲙⲡⲁⲓⲙⲁ', english: 'here' },
        { coptic: 'ⲉⲧⲙ̀ⲙⲁⲩ', english: 'there' },
        { coptic: 'ⲥⲁⲡϣⲱⲓ', english: 'above' },
        { coptic: 'ⲥⲁⲡⲉⲥⲏⲧ', english: 'below' }
      ]
    },
    {
      id: 'test-15-27',
      type: 'translation',
      question: 'Translate: ⲁⲓϣⲉⲛⲓ ⲉ̀ⲡⲓⲙⲁ ⲉⲧⲙ̀ⲙⲁⲩ',
      questionCoptic: 'ⲁⲓϣⲉⲛⲓ ⲉ̀ⲡⲓⲙⲁ ⲉⲧⲙ̀ⲙⲁⲩ',
      correctAnswer: 'I went to that place / I went there',
      options: ['I went to that place / I went there', 'I am in that place', 'I came from there', 'I was there'],
      explanation: 'ⲁⲓϣⲉⲛⲓ = I went + ⲉ̀ = to + ⲡⲓⲙⲁ ⲉⲧⲙ̀ⲙⲁⲩ = that place (Bohairic ϣⲉⲛⲓ not ⲃⲱⲕ!)'
    },
    {
      id: 'test-15-28',
      type: 'fill_blank',
      question: 'Complete: ϥϧⲉⲛ ⲡⲓⲙⲁ ___ = he is in that place/there',
      correctAnswer: 'ⲉⲧⲙ̀ⲙⲁⲩ',
      options: ['ⲉⲧⲙ̀ⲙⲁⲩ', 'ⲙⲡⲁⲓⲙⲁ', 'ⲥⲁⲡϣⲱⲓ', 'ⲥⲁⲡⲉⲥⲏⲧ'],
      explanation: 'ⲉⲧⲙ̀ⲙⲁⲩ = there (literally "which is there")'
    },
    {
      id: 'test-15-29',
      type: 'sentence_building',
      question: 'Build: "Come here to me"',
      correctAnswer: 'ⲁⲙⲟⲩ ⲙⲡⲁⲓⲙⲁ ϩⲁⲣⲟⲓ',
      wordBank: ['ⲁⲙⲟⲩ', 'ⲙⲡⲁⲓⲙⲁ', 'ϩⲁⲣⲟⲓ', 'ⲉⲧⲙ̀ⲙⲁⲩ'],
      explanation: 'ⲁⲙⲟⲩ = come + ⲙⲡⲁⲓⲙⲁ = here + ϩⲁⲣⲟⲓ = to me (ϩⲁ- = to/toward + -ⲣⲟⲓ = me)'
    },
    {
      id: 'test-15-30',
      type: 'translation',
      question: 'Translate: ϥⲛⲏⲟⲩ ⲉ̀ⲃⲟⲗ ⲥⲁⲡϣⲱⲓ',
      questionCoptic: 'ϥⲛⲏⲟⲩ ⲉ̀ⲃⲟⲗ ⲥⲁⲡϣⲱⲓ',
      correctAnswer: 'it is coming down from above',
      options: ['it is coming down from above', 'it went up', 'it is above', 'it came from below'],
      explanation: 'ϥⲛⲏⲟⲩ = it is coming + ⲉ̀ⲃⲟⲗ ⲥⲁⲡϣⲱⲓ = from above (down from the height)'
    }
  ]
};

export default unit15Test;
