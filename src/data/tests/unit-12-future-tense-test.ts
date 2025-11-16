import { TestUnit } from '../../types';

// TEST UNIT 12: FUTURE TENSE
// Comprehensive test covering all 4 lessons
// 30 exercises testing future tense conjugation, conditionals, and temporal clauses

const unit12Test: TestUnit = {
  id: 'test-unit-12',
  unitId: 'unit-12',
  title: 'Future Tense Test',
  description: 'Test your knowledge of future actions',
  order: 12,
  exercises: [
    // Lesson 12-1: Future Tense Singular - exercises 1-8
    {
      id: 'test-12-1',
      type: 'multiple_choice',
      question: 'How do you say "I will hear" in future tense?',
      correctAnswer: 'ϯⲛⲁⲥⲱⲧⲙ',
      options: ['ϯⲛⲁⲥⲱⲧⲙ', 'ⲁⲓⲥⲱⲧⲙ', 'ϯⲥⲱⲧⲙ', 'ⲛⲁⲓⲥⲱⲧⲙ'],
      explanation: 'ϯⲛⲁⲥⲱⲧⲙ = ϯⲛⲁ (I will) + ⲥⲱⲧⲙ (hear) = "I will hear"'
    },
    {
      id: 'test-12-2',
      type: 'matching',
      question: 'Match future tense pronouns',
      correctAnswer: 'matched',
      pairs: [
        { coptic: 'ϯⲛⲁ-', english: 'I will' },
        { coptic: 'ⲕⲛⲁ-', english: 'you (m) will' },
        { coptic: 'ⲧⲉⲛⲁ-', english: 'you (f) will' },
        { coptic: 'ϥⲛⲁ-', english: 'he will' }
      ]
    },
    {
      id: 'test-12-3',
      type: 'translation',
      question: 'Translate: ⲕⲛⲁⲟⲩⲱⲙ',
      questionCoptic: 'ⲕⲛⲁⲟⲩⲱⲙ',
      correctAnswer: 'you (m) will eat',
      options: ['you (m) will eat', 'I will eat', 'he will eat', 'you (f) will eat'],
      explanation: 'ⲕⲛⲁⲟⲩⲱⲙ = ⲕⲛⲁ (you will, m) + ⲟⲩⲱⲙ (eat)'
    },
    {
      id: 'test-12-4',
      type: 'sentence_building',
      question: 'Build: "She will see"',
      correctAnswer: 'ⲥⲛⲁⲛⲁⲩ',
      wordBank: ['ⲥⲛⲁ', 'ⲛⲁⲩ', 'ⲧⲉⲛⲁ', 'ϥⲛⲁ'],
      explanation: 'ⲥⲛⲁⲛⲁⲩ = ⲥⲛⲁ (she will) + ⲛⲁⲩ (see)'
    },
    {
      id: 'test-12-5',
      type: 'fill_blank',
      question: 'Complete: ___ ⲙⲟϣⲓ = he will walk',
      correctAnswer: 'ϥⲛⲁ',
      options: ['ϥⲛⲁ', 'ⲥⲛⲁ', 'ϯⲛⲁ', 'ⲧⲉⲛⲁ'],
      explanation: 'ϥⲛⲁⲙⲟϣⲓ = he will walk (Bohairic ⲙⲟϣⲓ not ⲙⲟⲟϣⲉ!)'
    },
    {
      id: 'test-12-6',
      type: 'translation',
      question: 'Translate: ⲧⲉⲛⲁⲥⲱ',
      questionCoptic: 'ⲧⲉⲛⲁⲥⲱ',
      correctAnswer: 'you (f) will drink',
      options: ['you (f) will drink', 'I will drink', 'you (m) will drink', 'she will drink'],
      explanation: 'ⲧⲉⲛⲁⲥⲱ = ⲧⲉⲛⲁ (you will, f) + ⲥⲱ (drink)'
    },
    {
      id: 'test-12-7',
      type: 'multiple_choice',
      question: 'What is "I will write" in future tense?',
      correctAnswer: 'ϯⲛⲁⲥ̀ϧⲁⲓ',
      options: ['ϯⲛⲁⲥ̀ϧⲁⲓ', 'ⲁⲓⲥ̀ϧⲁⲓ', 'ϯⲥ̀ϧⲁⲓ', 'ⲕⲛⲁⲥ̀ϧⲁⲓ'],
      explanation: 'ϯⲛⲁⲥ̀ϧⲁⲓ = I will write (Bohairic ⲥ̀ϧⲁⲓ not ⲥϩⲁⲓ!)'
    },
    {
      id: 'test-12-8',
      type: 'matching',
      question: 'Match complete future tense verbs',
      correctAnswer: 'matched',
      pairs: [
        { coptic: 'ϯⲛⲁⲓ̀ⲣⲓ', english: 'I will do' },
        { coptic: 'ⲕⲛⲁⲓ̀ⲣⲓ', english: 'you (m) will do' },
        { coptic: 'ⲧⲉⲛⲁⲓ̀ⲣⲓ', english: 'you (f) will do' },
        { coptic: 'ϥⲛⲁⲓ̀ⲣⲓ', english: 'he will do' }
      ]
    },

    // Lesson 12-2: Future Tense Plural - exercises 9-16
    {
      id: 'test-12-9',
      type: 'matching',
      question: 'Match plural future tense pronouns',
      correctAnswer: 'matched',
      pairs: [
        { coptic: 'ⲧⲉⲛⲛⲁ-', english: 'we will' },
        { coptic: 'ⲧⲉⲧⲛⲛⲁ-', english: 'you (pl) will' },
        { coptic: 'ⲥⲉⲛⲁ-', english: 'they will' }
      ]
    },
    {
      id: 'test-12-10',
      type: 'translation',
      question: 'Translate: ⲧⲉⲛⲛⲁⲥⲱⲧⲙ',
      questionCoptic: 'ⲧⲉⲛⲛⲁⲥⲱⲧⲙ',
      correctAnswer: 'we will hear',
      options: ['we will hear', 'you will hear', 'they will hear', 'I will hear'],
      explanation: 'ⲧⲉⲛⲛⲁⲥⲱⲧⲙ = ⲧⲉⲛⲛⲁ (we will) + ⲥⲱⲧⲙ (hear)'
    },
    {
      id: 'test-12-11',
      type: 'multiple_choice',
      question: 'How do you say "they will go"?',
      correctAnswer: 'ⲥⲉⲛⲁϣⲉⲛⲓ',
      options: ['ⲥⲉⲛⲁϣⲉⲛⲓ', 'ⲧⲉⲛⲛⲁϣⲉⲛⲓ', 'ⲧⲉⲧⲛⲛⲁϣⲉⲛⲓ', 'ϥⲛⲁϣⲉⲛⲓ'],
      explanation: 'ⲥⲉⲛⲁϣⲉⲛⲓ = ⲥⲉⲛⲁ (they will) + ϣⲉⲛⲓ (go) - Bohairic ϣⲉⲛⲓ not ⲃⲱⲕ!'
    },
    {
      id: 'test-12-12',
      type: 'sentence_building',
      question: 'Build: "You (plural) will come"',
      correctAnswer: 'ⲧⲉⲧⲛⲛⲁⲓ̀',
      wordBank: ['ⲧⲉⲧⲛⲛⲁ', 'ⲓ̀', 'ⲧⲉⲛⲛⲁ', 'ⲥⲉⲛⲁ'],
      explanation: 'ⲧⲉⲧⲛⲛⲁⲓ̀ = ⲧⲉⲧⲛⲛⲁ (you pl will) + ⲓ̀ (come) - Bohairic ⲓ̀ not ⲉⲓ!'
    },
    {
      id: 'test-12-13',
      type: 'translation',
      question: 'Translate: ⲥⲉⲛⲁϯ',
      questionCoptic: 'ⲥⲉⲛⲁϯ',
      correctAnswer: 'they will give',
      options: ['they will give', 'we will give', 'you will give', 'I will give'],
      explanation: 'ⲥⲉⲛⲁϯ = ⲥⲉⲛⲁ (they will) + Ϯ (give)'
    },
    {
      id: 'test-12-14',
      type: 'fill_blank',
      question: 'Complete: ___ ⲟⲩⲱⲙ = we will eat',
      correctAnswer: 'ⲧⲉⲛⲛⲁ',
      options: ['ⲧⲉⲛⲛⲁ', 'ⲧⲉⲧⲛⲛⲁ', 'ⲥⲉⲛⲁ', 'ϯⲛⲁ'],
      explanation: 'ⲧⲉⲛⲛⲁ is "we will" in future tense'
    },
    {
      id: 'test-12-15',
      type: 'matching',
      question: 'Match future tense sentences',
      correctAnswer: 'matched',
      pairs: [
        { coptic: 'ⲧⲉⲛⲛⲁⲛⲁⲩ', english: 'we will see' },
        { coptic: 'ⲧⲉⲧⲛⲛⲁⲛⲁⲩ', english: 'you (pl) will see' },
        { coptic: 'ⲥⲉⲛⲁⲛⲁⲩ', english: 'they will see' }
      ]
    },
    {
      id: 'test-12-16',
      type: 'multiple_choice',
      question: 'What is "you (plural) will say" in Coptic?',
      correctAnswer: 'ⲧⲉⲧⲛⲛⲁϫⲱ',
      options: ['ⲧⲉⲧⲛⲛⲁϫⲱ', 'ⲧⲉⲛⲛⲁϫⲱ', 'ⲥⲉⲛⲁϫⲱ', 'ⲕⲛⲁϫⲱ'],
      explanation: 'ⲧⲉⲧⲛⲛⲁϫⲱ = ⲧⲉⲧⲛⲛⲁ (you pl will) + ϫⲱ (say)'
    },

    // Lesson 12-3: Future Tense Practice - exercises 17-23
    {
      id: 'test-12-17',
      type: 'matching',
      question: 'Compare all tenses of "to hear"',
      correctAnswer: 'matched',
      pairs: [
        { coptic: 'ϯⲥⲱⲧⲙ', english: 'I hear (present)' },
        { coptic: 'ⲁⲓⲥⲱⲧⲙ', english: 'I heard (past)' },
        { coptic: 'ⲛⲁⲓⲥⲱⲧⲙ', english: 'I was hearing (past cont.)' },
        { coptic: 'ϯⲛⲁⲥⲱⲧⲙ', english: 'I will hear (future)' }
      ]
    },
    {
      id: 'test-12-18',
      type: 'translation',
      question: 'Translate: ⲧⲉⲛⲛⲁϣⲉⲛⲓ ⲉϯⲉⲕⲕⲗⲏⲥⲓⲁ',
      questionCoptic: 'ⲧⲉⲛⲛⲁϣⲉⲛⲓ ⲉϯⲉⲕⲕⲗⲏⲥⲓⲁ',
      correctAnswer: 'we will go to church',
      options: ['we will go to church', 'they will go to church', 'you will go to church', 'I will go to church'],
      explanation: 'ⲧⲉⲛⲛⲁϣⲉⲛⲓ ⲉϯⲉⲕⲕⲗⲏⲥⲓⲁ = we will go to the church (Bohairic ϣⲉⲛⲓ not ⲃⲱⲕ!)'
    },
    {
      id: 'test-12-19',
      type: 'sentence_building',
      question: 'Build: "They will love God"',
      correctAnswer: 'ⲥⲉⲛⲁⲙⲉⲛⲣⲉ ⲙⲫϯ',
      wordBank: ['ⲥⲉⲛⲁ', 'ⲙⲉⲛⲣⲉ', 'ⲙ', 'ⲫϯ'],
      explanation: 'ⲥⲉⲛⲁⲙⲉⲛⲣⲉ ⲙⲫϯ = they will love God (Bohairic: ⲙⲉⲛⲣⲉ not ⲙⲉⲣⲓ, ⲫϯ not ⲫⲛⲟⲩϯ)'
    },
    {
      id: 'test-12-20',
      type: 'fill_blank',
      question: 'Complete: ___ ⲉⲣⲡⲣⲟⲥⲉⲩⲭⲉⲥⲑⲉ = she will pray',
      correctAnswer: 'ⲥⲛⲁ',
      options: ['ⲥⲛⲁ', 'ϥⲛⲁ', 'ϯⲛⲁ', 'ⲧⲉⲛⲁ'],
      explanation: 'ⲥⲛⲁⲉⲣⲡⲣⲟⲥⲉⲩⲭⲉⲥⲑⲉ = she will pray'
    },
    {
      id: 'test-12-21',
      type: 'translation',
      question: 'Translate: ϥⲛⲁⲥ̀ⲙⲟⲩ ⲉ̀ⲣⲟⲛ',
      questionCoptic: 'ϥⲛⲁⲥ̀ⲙⲟⲩ ⲉ̀ⲣⲟⲛ',
      correctAnswer: 'he will bless us',
      options: ['he will bless us', 'he will bless them', 'I will bless us', 'they will bless him'],
      explanation: 'ϥⲛⲁⲥ̀ⲙⲟⲩ ⲉ̀ⲣⲟⲛ = he will bless us'
    },
    {
      id: 'test-12-22',
      type: 'multiple_choice',
      question: 'How do you say "I will read"?',
      correctAnswer: 'ϯⲛⲁⲱϣ',
      options: ['ϯⲛⲁⲱϣ', 'ⲁⲓⲱϣ', 'ϯⲱϣ', 'ⲕⲛⲁⲱϣ'],
      explanation: 'ϯⲛⲁⲱϣ = ϯⲛⲁ (I will) + ⲱϣ (read)'
    },
    {
      id: 'test-12-23',
      type: 'matching',
      question: 'Match future expressions',
      correctAnswer: 'matched',
      pairs: [
        { coptic: 'ϯⲛⲁⲓ̀', english: 'I will come' },
        { coptic: 'ⲕⲛⲁϣⲉⲛⲓ', english: 'you (m) will go' },
        { coptic: 'ⲥⲛⲁⲛⲁⲩ', english: 'she will see' },
        { coptic: 'ⲧⲉⲛⲛⲁϫⲱ', english: 'we will say' }
      ]
    },

    // Lesson 12-4: Future with Conditionals - exercises 24-30
    {
      id: 'test-12-24',
      type: 'translation',
      question: 'Translate: ⲉϣⲱⲡ ⲁⲕϣⲁⲛⲓ̀ ϯⲛⲁⲛⲁⲩ ⲉ̀ⲣⲟⲕ',
      questionCoptic: 'ⲉϣⲱⲡ ⲁⲕϣⲁⲛⲓ̀ ϯⲛⲁⲛⲁⲩ ⲉ̀ⲣⲟⲕ',
      correctAnswer: 'if you come, I will see you',
      options: ['if you come, I will see you', 'if you came, I saw you', 'when you come, I see you', 'you will come and I will see you'],
      explanation: 'ⲉϣⲱⲡ ⲁⲕϣⲁⲛⲓ̀ = if you come (conditional) + ϯⲛⲁⲛⲁⲩ ⲉ̀ⲣⲟⲕ = I will see you (future)'
    },
    {
      id: 'test-12-25',
      type: 'multiple_choice',
      question: 'Which word introduces a conditional clause with future result?',
      correctAnswer: 'ⲉϣⲱⲡ',
      options: ['ⲉϣⲱⲡ', 'ⲟⲩⲟϩ', 'ϫⲉ', 'ⲙⲉⲛⲉⲛⲥⲁ'],
      explanation: 'ⲉϣⲱⲡ = if (introduces conditional clauses - Bohairic form)'
    },
    {
      id: 'test-12-26',
      type: 'matching',
      question: 'Match conditional and temporal clauses',
      correctAnswer: 'matched',
      pairs: [
        { coptic: 'ⲉϣⲱⲡ ⲁⲕϣⲁⲛⲓ̀', english: 'if you come' },
        { coptic: 'ϩⲟⲧⲁⲛ ⲁϥϣⲁⲛⲓ̀', english: 'when he comes' },
        { coptic: 'ϣⲁⲧⲉⲛⲓ̀', english: 'until we come' },
        { coptic: 'ⲙⲡⲁⲧⲉϥⲓ̀', english: 'before he comes' }
      ]
    },
    {
      id: 'test-12-27',
      type: 'translation',
      question: 'Translate: ϩⲟⲧⲁⲛ ⲁϥϣⲁⲛⲥⲱⲧⲙ ϥⲛⲁⲓ̀ⲣⲓ',
      questionCoptic: 'ϩⲟⲧⲁⲛ ⲁϥϣⲁⲛⲥⲱⲧⲙ ϥⲛⲁⲓ̀ⲣⲓ',
      correctAnswer: 'when he hears, he will do (it)',
      options: ['when he hears, he will do (it)', 'if he hears, he did it', 'when he heard, he will do it', 'he will hear and do it'],
      explanation: 'ϩⲟⲧⲁⲛ ⲁϥϣⲁⲛⲥⲱⲧⲙ = when he hears (temporal) + ϥⲛⲁⲓ̀ⲣⲓ = he will do (future consequence)'
    },
    {
      id: 'test-12-28',
      type: 'fill_blank',
      question: 'Complete: ___ ⲁⲕϣⲁⲛⲟⲩⲱϣ ⲕⲛⲁⲓ̀ⲣⲓ = if you want, you will do',
      correctAnswer: 'ⲉϣⲱⲡ',
      options: ['ⲉϣⲱⲡ', 'ϩⲟⲧⲁⲛ', 'ϫⲉ', 'ⲟⲩⲟϩ'],
      explanation: 'ⲉϣⲱⲡ = if (conditional marker for future result clauses)'
    },
    {
      id: 'test-12-29',
      type: 'sentence_building',
      question: 'Build: "If they believe, they will be saved"',
      correctAnswer: 'ⲉϣⲱⲡ ⲁⲩϣⲁⲛⲛⲁϩϯ ⲥⲉⲛⲁⲛⲟϩⲉⲙ',
      wordBank: ['ⲉϣⲱⲡ', 'ⲁⲩϣⲁⲛ', 'ⲛⲁϩϯ', 'ⲥⲉⲛⲁ', 'ⲛⲟϩⲉⲙ'],
      explanation: 'ⲉϣⲱⲡ ⲁⲩϣⲁⲛⲛⲁϩϯ = if they believe + ⲥⲉⲛⲁⲛⲟϩⲉⲙ = they will be saved (conditional + future)'
    },
    {
      id: 'test-12-30',
      type: 'translation',
      question: 'Translate: ⲙⲡⲁⲧⲉϥⲓ̀ ⲧⲉⲛⲛⲁϣⲉⲛⲓ',
      questionCoptic: 'ⲙⲡⲁⲧⲉϥⲓ̀ ⲧⲉⲛⲛⲁϣⲉⲛⲓ',
      correctAnswer: 'before he comes, we will go',
      options: ['before he comes, we will go', 'after he comes, we will go', 'when he comes, we will go', 'if he comes, we will go'],
      explanation: 'ⲙⲡⲁⲧⲉϥⲓ̀ = before he comes + ⲧⲉⲛⲛⲁϣⲉⲛⲓ = we will go (temporal + future - Bohairic ⲓ̀ not ⲉⲓ!)'
    }
  ]
};

export default unit12Test;
