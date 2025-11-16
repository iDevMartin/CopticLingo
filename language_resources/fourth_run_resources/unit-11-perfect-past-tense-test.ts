import { TestUnit } from '../../types';

// TEST UNIT 11: PAST TENSE (PERFECT)
// Comprehensive test covering all 4 lessons
// 30 exercises testing past tense conjugation, usage, and narratives

const unit11Test: TestUnit = {
  id: 'test-unit-11',
  unitId: 'unit-11',
  title: 'Past Tense Test',
  description: 'Test your knowledge of completed past actions',
  order: 11,
  exercises: [
    // Lesson 11-1: Past Tense Singular - exercises 1-8
    {
      id: 'test-11-1',
      type: 'multiple_choice',
      question: 'How do you say "I heard" in past tense?',
      correctAnswer: 'ⲁⲓⲥⲱⲧⲙ',
      options: ['ⲁⲓⲥⲱⲧⲙ', 'ϯⲥⲱⲧⲙ', 'ⲛⲁⲓⲥⲱⲧⲙ', 'ϯⲛⲁⲥⲱⲧⲙ'],
      explanation: 'ⲁⲓⲥⲱⲧⲙ = ⲁⲓ (I, past) + ⲥⲱⲧⲙ (hear) = "I heard"'
    },
    {
      id: 'test-11-2',
      type: 'matching',
      question: 'Match past tense pronouns',
      correctAnswer: 'matched',
      pairs: [
        { coptic: 'ⲁⲓ-', english: 'I did' },
        { coptic: 'ⲁⲕ-', english: 'you (m) did' },
        { coptic: 'ⲁⲣⲉ-', english: 'you (f) did' },
        { coptic: 'ⲁϥ-', english: 'he did' }
      ]
    },
    {
      id: 'test-11-3',
      type: 'translation',
      question: 'Translate: ⲁⲕⲟⲩⲱⲙ',
      questionCoptic: 'ⲁⲕⲟⲩⲱⲙ',
      correctAnswer: 'you (m) ate',
      options: ['you (m) ate', 'I ate', 'he ate', 'you (f) ate'],
      explanation: 'ⲁⲕⲟⲩⲱⲙ = ⲁⲕ (you, m, past) + ⲟⲩⲱⲙ (eat)'
    },
    {
      id: 'test-11-4',
      type: 'sentence_building',
      question: 'Build: "She saw"',
      correctAnswer: 'ⲁⲥⲛⲁⲩ',
      wordBank: ['ⲁⲥ', 'ⲛⲁⲩ', 'ⲁⲣⲉ', 'ⲁϥ'],
      explanation: 'ⲁⲥⲛⲁⲩ = ⲁⲥ (she, past) + ⲛⲁⲩ (see)'
    },
    {
      id: 'test-11-5',
      type: 'fill_blank',
      question: 'Complete: ___ ⲥⲱ = I drank',
      correctAnswer: 'ⲁⲓ',
      options: ['ⲁⲓ', 'ⲁⲕ', 'ⲁϥ', 'ⲁⲥ'],
      explanation: 'ⲁⲓ is the past tense prefix for "I did"'
    },
    {
      id: 'test-11-6',
      type: 'translation',
      question: 'Translate: ⲁϥⲙⲟϣⲓ',
      questionCoptic: 'ⲁϥⲙⲟϣⲓ',
      correctAnswer: 'he walked',
      options: ['he walked', 'I walked', 'you walked', 'she walked'],
      explanation: 'ⲁϥⲙⲟϣⲓ = ⲁϥ (he, past) + ⲙⲟϣⲓ (walk) - Bohairic ⲙⲟϣⲓ not ⲙⲟⲟϣⲉ!'
    },
    {
      id: 'test-11-7',
      type: 'multiple_choice',
      question: 'What is the past tense prefix for "you (feminine)"?',
      correctAnswer: 'ⲁⲣⲉ-',
      options: ['ⲁⲣⲉ-', 'ⲁⲕ-', 'ⲁⲥ-', 'ⲁⲓ-'],
      explanation: 'ⲁⲣⲉ- is used for "you did" when addressing a female'
    },
    {
      id: 'test-11-8',
      type: 'matching',
      question: 'Match complete past tense verbs',
      correctAnswer: 'matched',
      pairs: [
        { coptic: 'ⲁⲓⲓ̀ⲣⲓ', english: 'I did/made' },
        { coptic: 'ⲁⲕⲓ̀ⲣⲓ', english: 'you (m) did' },
        { coptic: 'ⲁⲣⲉⲓ̀ⲣⲓ', english: 'you (f) did' },
        { coptic: 'ⲁϥⲓ̀ⲣⲓ', english: 'he did' }
      ]
    },

    // Lesson 11-2: Past Tense Plural - exercises 9-15
    {
      id: 'test-11-9',
      type: 'matching',
      question: 'Match plural past tense pronouns',
      correctAnswer: 'matched',
      pairs: [
        { coptic: 'ⲁⲛ-', english: 'we did' },
        { coptic: 'ⲁⲣⲉⲧⲉⲛ-', english: 'you (pl) did' },
        { coptic: 'ⲁⲩ-', english: 'they did' }
      ]
    },
    {
      id: 'test-11-10',
      type: 'translation',
      question: 'Translate: ⲁⲛⲥⲱⲧⲙ',
      questionCoptic: 'ⲁⲛⲥⲱⲧⲙ',
      correctAnswer: 'we heard',
      options: ['we heard', 'you (pl) heard', 'they heard', 'I heard'],
      explanation: 'ⲁⲛⲥⲱⲧⲙ = ⲁⲛ (we, past) + ⲥⲱⲧⲙ (hear)'
    },
    {
      id: 'test-11-11',
      type: 'multiple_choice',
      question: 'How do you say "they went"?',
      correctAnswer: 'ⲁⲩϣⲉⲛⲓ',
      options: ['ⲁⲩϣⲉⲛⲓ', 'ⲁⲛϣⲉⲛⲓ', 'ⲁⲣⲉⲧⲉⲛϣⲉⲛⲓ', 'ⲁϥϣⲉⲛⲓ'],
      explanation: 'ⲁⲩϣⲉⲛⲓ = ⲁⲩ (they, past) + ϣⲉⲛⲓ (go) - Bohairic ϣⲉⲛⲓ not ⲃⲱⲕ!'
    },
    {
      id: 'test-11-12',
      type: 'sentence_building',
      question: 'Build: "You (plural) came"',
      correctAnswer: 'ⲁⲣⲉⲧⲉⲛⲓ̀',
      wordBank: ['ⲁⲣⲉⲧⲉⲛ', 'ⲓ̀', 'ⲁⲛ', 'ⲁⲩ'],
      explanation: 'ⲁⲣⲉⲧⲉⲛⲓ̀ = ⲁⲣⲉⲧⲉⲛ (you pl, past) + ⲓ̀ (come) - Bohairic ⲓ̀ not ⲉⲓ!'
    },
    {
      id: 'test-11-13',
      type: 'translation',
      question: 'Translate: ⲁⲩϯ',
      questionCoptic: 'ⲁⲩϯ',
      correctAnswer: 'they gave',
      options: ['they gave', 'we gave', 'you gave', 'I gave'],
      explanation: 'ⲁⲩϯ = ⲁⲩ (they, past) + Ϯ (give)'
    },
    {
      id: 'test-11-14',
      type: 'fill_blank',
      question: 'Complete: ___ ⲟⲩⲱⲙ = we ate',
      correctAnswer: 'ⲁⲛ',
      options: ['ⲁⲛ', 'ⲁⲣⲉⲧⲉⲛ', 'ⲁⲩ', 'ⲁⲓ'],
      explanation: 'ⲁⲛ is the past tense prefix for "we did"'
    },
    {
      id: 'test-11-15',
      type: 'matching',
      question: 'Match past tense sentences',
      correctAnswer: 'matched',
      pairs: [
        { coptic: 'ⲁⲛⲛⲁⲩ', english: 'we saw' },
        { coptic: 'ⲁⲣⲉⲧⲉⲛⲛⲁⲩ', english: 'you (pl) saw' },
        { coptic: 'ⲁⲩⲛⲁⲩ', english: 'they saw' }
      ]
    },

    // Lesson 11-3: Past Tense Practice - exercises 16-23
    {
      id: 'test-11-16',
      type: 'matching',
      question: 'Match all past forms of "to love"',
      correctAnswer: 'matched',
      pairs: [
        { coptic: 'ⲁⲓⲙⲉⲛⲣⲉ', english: 'I loved' },
        { coptic: 'ⲁⲕⲙⲉⲛⲣⲉ', english: 'you (m) loved' },
        { coptic: 'ⲁⲛⲙⲉⲛⲣⲉ', english: 'we loved' },
        { coptic: 'ⲁⲩⲙⲉⲛⲣⲉ', english: 'they loved' }
      ]
    },
    {
      id: 'test-11-17',
      type: 'translation',
      question: 'Translate: ⲁⲛϣⲉⲛⲓ ⲉϯⲉⲕⲕⲗⲏⲥⲓⲁ',
      questionCoptic: 'ⲁⲛϣⲉⲛⲓ ⲉϯⲉⲕⲕⲗⲏⲥⲓⲁ',
      correctAnswer: 'we went to church',
      options: ['we went to church', 'they went to church', 'you went to church', 'I went to church'],
      explanation: 'ⲁⲛϣⲉⲛⲓ ⲉϯⲉⲕⲕⲗⲏⲥⲓⲁ = we went to the church (Bohairic ϣⲉⲛⲓ not ⲃⲱⲕ!)'
    },
    {
      id: 'test-11-18',
      type: 'sentence_building',
      question: 'Build: "They called his name"',
      correctAnswer: 'ⲁⲩⲙⲟⲩϯ ⲉⲡⲉϥⲣⲁⲛ',
      wordBank: ['ⲁⲩ', 'ⲙⲟⲩϯ', 'ⲉ', 'ⲡⲉϥⲣⲁⲛ'],
      explanation: 'ⲁⲩⲙⲟⲩϯ ⲉⲡⲉϥⲣⲁⲛ = they called his name (Bohairic ⲙⲟⲩϯ not ⲙⲟⲩⲧⲉ!)'
    },
    {
      id: 'test-11-19',
      type: 'fill_blank',
      question: 'Complete: ___ ⲥⲱⲧⲙ ⲉⲧⲉϥⲥⲙⲏ = I heard his voice',
      correctAnswer: 'ⲁⲓ',
      options: ['ⲁⲓ', 'ⲁⲕ', 'ⲁⲛ', 'ⲁⲩ'],
      explanation: 'ⲁⲓⲥⲱⲧⲙ ⲉⲧⲉϥⲥⲙⲏ = I heard his voice'
    },
    {
      id: 'test-11-20',
      type: 'translation',
      question: 'Translate: ⲁϥⲥ̀ⲙⲟⲩ ⲉ̀ⲣⲱⲟⲩ',
      questionCoptic: 'ⲁϥⲥ̀ⲙⲟⲩ ⲉ̀ⲣⲱⲟⲩ',
      correctAnswer: 'he blessed them',
      options: ['he blessed them', 'he blessed us', 'I blessed them', 'they blessed him'],
      explanation: 'ⲁϥⲥ̀ⲙⲟⲩ ⲉ̀ⲣⲱⲟⲩ = he blessed them'
    },
    {
      id: 'test-11-21',
      type: 'multiple_choice',
      question: 'How do you say "she wrote"?',
      correctAnswer: 'ⲁⲥⲥ̀ϧⲁⲓ',
      options: ['ⲁⲥⲥ̀ϧⲁⲓ', 'ⲁϥⲥ̀ϧⲁⲓ', 'ⲁⲓⲥ̀ϧⲁⲓ', 'ⲁⲣⲉⲥ̀ϧⲁⲓ'],
      explanation: 'ⲁⲥⲥ̀ϧⲁⲓ = ⲁⲥ (she, past) + ⲥ̀ϧⲁⲓ (write) - Bohairic ⲥ̀ϧⲁⲓ not ⲥϩⲁⲓ!'
    },
    {
      id: 'test-11-22',
      type: 'translation',
      question: 'Translate: ⲁⲣⲉⲧⲉⲛⲓ̀ⲣⲓ ⲙⲡⲉϥⲟⲩⲱϣ',
      questionCoptic: 'ⲁⲣⲉⲧⲉⲛⲓ̀ⲣⲓ ⲙⲡⲉϥⲟⲩⲱϣ',
      correctAnswer: 'you (pl) did his will',
      options: ['you (pl) did his will', 'we did his will', 'they did his will', 'you (m) did his will'],
      explanation: 'ⲁⲣⲉⲧⲉⲛⲓ̀ⲣⲓ ⲙⲡⲉϥⲟⲩⲱϣ = you (pl) did his will'
    },
    {
      id: 'test-11-23',
      type: 'sentence_building',
      question: 'Build: "We opened the door"',
      correctAnswer: 'ⲁⲛⲟⲩⲱⲛ ⲙⲡⲓⲣⲟ',
      wordBank: ['ⲁⲛ', 'ⲟⲩⲱⲛ', 'ⲙ', 'ⲡⲓⲣⲟ'],
      explanation: 'ⲁⲛⲟⲩⲱⲛ ⲙⲡⲓⲣⲟ = we opened the door'
    },

    // Lesson 11-4: Past Tense Narratives - exercises 24-30
    {
      id: 'test-11-24',
      type: 'translation',
      question: 'Translate: ⲁⲓⲧⲱⲛⲓ ⲟⲩⲟϩ ⲁⲓϣⲉⲛⲓ ⲉ̀ϯⲉⲕⲕⲗⲏⲥⲓⲁ',
      questionCoptic: 'ⲁⲓⲧⲱⲛⲓ ⲟⲩⲟϩ ⲁⲓϣⲉⲛⲓ ⲉ̀ϯⲉⲕⲕⲗⲏⲥⲓⲁ',
      correctAnswer: 'I got up and went to church',
      options: ['I got up and went to church', 'I woke up and go to church', 'I get up and went to church', 'I will get up and go to church'],
      explanation: 'ⲁⲓⲧⲱⲛⲓ ⲟⲩⲟϩ ⲁⲓϣⲉⲛⲓ = I got up and I went (narrative sequence - Bohairic ⲧⲱⲛⲓ not ⲧⲱⲟⲩⲛ!)'
    },
    {
      id: 'test-11-25',
      type: 'multiple_choice',
      question: 'Which conjunction connects past events in sequence?',
      correctAnswer: 'ⲟⲩⲟϩ',
      options: ['ⲟⲩⲟϩ', 'ⲁⲗⲗⲁ', 'ⲏ̀', 'ⲉ̀ϣⲱⲡ'],
      explanation: 'ⲟⲩⲟϩ = and (Bohairic - used to connect sequential past actions)'
    },
    {
      id: 'test-11-26',
      type: 'matching',
      question: 'Match narrative sequences',
      correctAnswer: 'matched',
      pairs: [
        { coptic: 'ⲁϥⲓ̀ ⲟⲩⲟϩ ⲁϥⲛⲁⲩ', english: 'he came and saw' },
        { coptic: 'ⲁⲛⲥⲱⲧⲙ ⲟⲩⲟϩ ⲁⲛⲓ̀ⲣⲓ', english: 'we heard and did' },
        { coptic: 'ⲁⲥⲟⲩⲱⲛ ⲟⲩⲟϩ ⲁⲥϣⲉⲛⲓ ⲉ̀ϧⲟⲩⲛ', english: 'she opened and went in' }
      ]
    },
    {
      id: 'test-11-27',
      type: 'translation',
      question: 'Translate: ⲙⲉⲛⲉⲛⲥⲁ ⲛⲁⲓ ⲁϥϫⲱ ⲙⲙⲟⲥ',
      questionCoptic: 'ⲙⲉⲛⲉⲛⲥⲁ ⲛⲁⲓ ⲁϥϫⲱ ⲙⲙⲟⲥ',
      correctAnswer: 'after these things he said it',
      options: ['after these things he said it', 'before these things he said it', 'during these things he said it', 'he said these things'],
      explanation: 'ⲙⲉⲛⲉⲛⲥⲁ ⲛⲁⲓ = after these (things) + ⲁϥϫⲱ ⲙⲙⲟⲥ = he said it'
    },
    {
      id: 'test-11-28',
      type: 'fill_blank',
      question: 'Complete: ⲙ̀ⲫⲟⲟⲩ ⲉ̀ⲧⲉⲙⲙⲁⲩ ___ ϣⲉⲛⲓ = on that day I went',
      correctAnswer: 'ⲁⲓ',
      options: ['ⲁⲓ', 'ϯ', 'ϯⲛⲁ', 'ⲛⲁⲓ'],
      explanation: 'ⲙ̀ⲫⲟⲟⲩ ⲉ̀ⲧⲉⲙⲙⲁⲩ = on that day (time expression) + ⲁⲓϣⲉⲛⲓ = I went'
    },
    {
      id: 'test-11-29',
      type: 'sentence_building',
      question: 'Build: "Yesterday we saw him and spoke to him"',
      correctAnswer: 'ⲥⲁϥ ⲁⲛⲛⲁⲩ ⲉ̀ⲣⲟϥ ⲟⲩⲟϩ ⲁⲛⲥⲁϫⲓ ⲛⲉⲙⲁϥ',
      wordBank: ['ⲥⲁϥ', 'ⲁⲛⲛⲁⲩ', 'ⲉ̀ⲣⲟϥ', 'ⲟⲩⲟϩ', 'ⲁⲛⲥⲁϫⲓ', 'ⲛⲉⲙⲁϥ'],
      explanation: 'ⲥⲁϥ = yesterday + ⲁⲛⲛⲁⲩ ⲉ̀ⲣⲟϥ = we saw him + ⲟⲩⲟϩ ⲁⲛⲥⲁϫⲓ ⲛⲉⲙⲁϥ = and we spoke with him'
    },
    {
      id: 'test-11-30',
      type: 'translation',
      question: 'Translate: ⲁⲩⲓ̀ ⲛⲉⲙⲁϥ ⲟⲩⲟϩ ⲁⲩϩⲉⲙⲥⲓ ⲛⲉⲙⲁϥ',
      questionCoptic: 'ⲁⲩⲓ̀ ⲛⲉⲙⲁϥ ⲟⲩⲟϩ ⲁⲩϩⲉⲙⲥⲓ ⲛⲉⲙⲁϥ',
      correctAnswer: 'they came with him and sat with him',
      options: ['they came with him and sat with him', 'they came to him and sat with him', 'he came with them and sat with them', 'they will come and sit'],
      explanation: 'ⲁⲩⲓ̀ ⲛⲉⲙⲁϥ ⲟⲩⲟϩ ⲁⲩϩⲉⲙⲥⲓ ⲛⲉⲙⲁϥ = narrative sequence with repeated preposition (Bohairic ⲓ̀ not ⲉⲓ!)'
    }
  ]
};

export default unit11Test;
