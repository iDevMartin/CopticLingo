import { TestUnit } from '../../types';

// TEST UNIT 10: PRESENT TENSE
// Comprehensive test covering all 4 lessons
// 30 exercises testing present tense conjugation, usage, and constructions

const unit10Test: TestUnit = {
  id: 'test-unit-10',
  unitId: 'unit-10',
  title: 'Present Tense Test',
  description: 'Test your knowledge of present tense conjugation',
  order: 10,
  exercises: [
    // Lesson 10-1: Present Tense Singular - exercises 1-8
    {
      id: 'test-10-1',
      type: 'multiple_choice',
      question: 'How do you say "I hear" in present tense?',
      correctAnswer: 'ϯⲥⲱⲧⲙ',
      options: ['ϯⲥⲱⲧⲙ', 'ⲁⲓⲥⲱⲧⲙ', 'ϯⲛⲁⲥⲱⲧⲙ', 'ⲛⲁⲓⲥⲱⲧⲙ'],
      explanation: 'ϯⲥⲱⲧⲙ = ϯ (I, present) + ⲥⲱⲧⲙ (hear) = "I hear"'
    },
    {
      id: 'test-10-2',
      type: 'matching',
      question: 'Match present tense pronouns',
      correctAnswer: 'matched',
      pairs: [
        { coptic: 'ϯ-', english: 'I (present)' },
        { coptic: 'ⲕ-', english: 'you (m, present)' },
        { coptic: 'ⲧⲉ-', english: 'you (f, present)' },
        { coptic: 'ϥ-', english: 'he (present)' }
      ]
    },
    {
      id: 'test-10-3',
      type: 'translation',
      question: 'Translate: ⲕⲟⲩⲱⲙ',
      questionCoptic: 'ⲕⲟⲩⲱⲙ',
      correctAnswer: 'you (m) eat',
      options: ['you (m) eat', 'I eat', 'he eats', 'you (f) eat'],
      explanation: 'ⲕⲟⲩⲱⲙ = ⲕ (you, m, present) + ⲟⲩⲱⲙ (eat)'
    },
    {
      id: 'test-10-4',
      type: 'sentence_building',
      question: 'Build: "She sees"',
      correctAnswer: 'ⲥⲛⲁⲩ',
      wordBank: ['ⲥ', 'ⲛⲁⲩ', 'ⲧⲉ', 'ϥ'],
      explanation: 'ⲥⲛⲁⲩ = ⲥ (she, present) + ⲛⲁⲩ (see)'
    },
    {
      id: 'test-10-5',
      type: 'fill_blank',
      question: 'Complete: ___ ⲙⲟϣⲓ = you (f) walk',
      correctAnswer: 'ⲧⲉ',
      options: ['ⲧⲉ', 'ⲕ', 'ϯ', 'ⲥ'],
      explanation: 'ⲧⲉ is the present tense prefix for "you (feminine)"'
    },
    {
      id: 'test-10-6',
      type: 'translation',
      question: 'Translate: ϥⲥⲱ',
      questionCoptic: 'ϥⲥⲱ',
      correctAnswer: 'he drinks',
      options: ['he drinks', 'I drink', 'you drink', 'she drinks'],
      explanation: 'ϥⲥⲱ = ϥ (he, present) + ⲥⲱ (drink) = "he drinks"'
    },
    {
      id: 'test-10-7',
      type: 'multiple_choice',
      question: 'What is "I write" in present tense?',
      correctAnswer: 'ϯⲥ̀ϧⲁⲓ',
      options: ['ϯⲥ̀ϧⲁⲓ', 'ⲁⲓⲥ̀ϧⲁⲓ', 'ⲕⲥ̀ϧⲁⲓ', 'ϯⲛⲁⲥ̀ϧⲁⲓ'],
      explanation: 'ϯⲥ̀ϧⲁⲓ = I write (present tense - Bohairic ⲥ̀ϧⲁⲓ not ⲥϩⲁⲓ!)'
    },
    {
      id: 'test-10-8',
      type: 'matching',
      question: 'Match complete present tense verbs',
      correctAnswer: 'matched',
      pairs: [
        { coptic: 'ϯⲓ̀ⲣⲓ', english: 'I do' },
        { coptic: 'ⲕⲓ̀ⲣⲓ', english: 'you (m) do' },
        { coptic: 'ⲧⲉⲓ̀ⲣⲓ', english: 'you (f) do' },
        { coptic: 'ϥⲓ̀ⲣⲓ', english: 'he does' }
      ]
    },

    // Lesson 10-2: Present Tense Plural - exercises 9-16
    {
      id: 'test-10-9',
      type: 'matching',
      question: 'Match plural present tense pronouns',
      correctAnswer: 'matched',
      pairs: [
        { coptic: 'ⲧⲉⲛ-', english: 'we (present)' },
        { coptic: 'ⲧⲉⲧⲉⲛ-', english: 'you (pl, present)' },
        { coptic: 'ⲥⲉ-', english: 'they (present)' }
      ]
    },
    {
      id: 'test-10-10',
      type: 'translation',
      question: 'Translate: ⲧⲉⲛⲥⲱⲧⲙ',
      questionCoptic: 'ⲧⲉⲛⲥⲱⲧⲙ',
      correctAnswer: 'we hear',
      options: ['we hear', 'you (pl) hear', 'they hear', 'I hear'],
      explanation: 'ⲧⲉⲛⲥⲱⲧⲙ = ⲧⲉⲛ (we, present) + ⲥⲱⲧⲙ (hear)'
    },
    {
      id: 'test-10-11',
      type: 'multiple_choice',
      question: 'How do you say "they go"?',
      correctAnswer: 'ⲥⲉϣⲉⲛⲓ',
      options: ['ⲥⲉϣⲉⲛⲓ', 'ⲧⲉⲛϣⲉⲛⲓ', 'ⲧⲉⲧⲉⲛϣⲉⲛⲓ', 'ⲁⲩϣⲉⲛⲓ'],
      explanation: 'ⲥⲉϣⲉⲛⲓ = ⲥⲉ (they, present) + ϣⲉⲛⲓ (go) - Bohairic ϣⲉⲛⲓ not ⲃⲱⲕ!'
    },
    {
      id: 'test-10-12',
      type: 'sentence_building',
      question: 'Build: "You (plural) come"',
      correctAnswer: 'ⲧⲉⲧⲉⲛⲓ̀',
      wordBank: ['ⲧⲉⲧⲉⲛ', 'ⲓ̀', 'ⲧⲉⲛ', 'ⲥⲉ'],
      explanation: 'ⲧⲉⲧⲉⲛⲓ̀ = ⲧⲉⲧⲉⲛ (you pl, present) + ⲓ̀ (come) - Bohairic ⲓ̀ not ⲉⲓ!'
    },
    {
      id: 'test-10-13',
      type: 'translation',
      question: 'Translate: ⲥⲉϯ',
      questionCoptic: 'ⲥⲉϯ',
      correctAnswer: 'they give',
      options: ['they give', 'we give', 'you give', 'I give'],
      explanation: 'ⲥⲉϯ = ⲥⲉ (they, present) + Ϯ (give)'
    },
    {
      id: 'test-10-14',
      type: 'fill_blank',
      question: 'Complete: ___ ⲟⲩⲱⲙ = we eat',
      correctAnswer: 'ⲧⲉⲛ',
      options: ['ⲧⲉⲛ', 'ⲧⲉⲧⲉⲛ', 'ⲥⲉ', 'ϯ'],
      explanation: 'ⲧⲉⲛ is the present tense prefix for "we"'
    },
    {
      id: 'test-10-15',
      type: 'matching',
      question: 'Match present tense sentences',
      correctAnswer: 'matched',
      pairs: [
        { coptic: 'ⲧⲉⲛⲛⲁⲩ', english: 'we see' },
        { coptic: 'ⲧⲉⲧⲉⲛⲛⲁⲩ', english: 'you (pl) see' },
        { coptic: 'ⲥⲉⲛⲁⲩ', english: 'they see' }
      ]
    },
    {
      id: 'test-10-16',
      type: 'multiple_choice',
      question: 'What is "you (plural) say" in Coptic?',
      correctAnswer: 'ⲧⲉⲧⲉⲛϫⲱ',
      options: ['ⲧⲉⲧⲉⲛϫⲱ', 'ⲧⲉⲛϫⲱ', 'ⲥⲉϫⲱ', 'ⲕϫⲱ'],
      explanation: 'ⲧⲉⲧⲉⲛϫⲱ = ⲧⲉⲧⲉⲛ (you pl, present) + ϫⲱ (say)'
    },

    // Lesson 10-3: Present Tense Practice - exercises 17-23
    {
      id: 'test-10-17',
      type: 'matching',
      question: 'Compare all tenses of "to hear"',
      correctAnswer: 'matched',
      pairs: [
        { coptic: 'ϯⲥⲱⲧⲙ', english: 'I hear (present)' },
        { coptic: 'ⲁⲓⲥⲱⲧⲙ', english: 'I heard (past)' },
        { coptic: 'ⲛⲁⲓⲥⲱⲧⲙ', english: 'I was hearing (imperfect)' },
        { coptic: 'ϯⲛⲁⲥⲱⲧⲙ', english: 'I will hear (future)' }
      ]
    },
    {
      id: 'test-10-18',
      type: 'translation',
      question: 'Translate: ⲧⲉⲛϣⲉⲛⲓ ⲉϯⲉⲕⲕⲗⲏⲥⲓⲁ',
      questionCoptic: 'ⲧⲉⲛϣⲉⲛⲓ ⲉϯⲉⲕⲕⲗⲏⲥⲓⲁ',
      correctAnswer: 'we go to church',
      options: ['we go to church', 'they go to church', 'you go to church', 'I go to church'],
      explanation: 'ⲧⲉⲛϣⲉⲛⲓ ⲉϯⲉⲕⲕⲗⲏⲥⲓⲁ = we go to the church (Bohairic ϣⲉⲛⲓ not ⲃⲱⲕ!)'
    },
    {
      id: 'test-10-19',
      type: 'sentence_building',
      question: 'Build: "They love God"',
      correctAnswer: 'ⲥⲉⲙⲉⲛⲣⲉ ⲙⲫϯ',
      wordBank: ['ⲥⲉ', 'ⲙⲉⲛⲣⲉ', 'ⲙ', 'ⲫϯ'],
      explanation: 'ⲥⲉⲙⲉⲛⲣⲉ ⲙⲫϯ = they love God (Bohairic: ⲙⲉⲛⲣⲉ not ⲙⲉⲣⲓ, ⲫϯ not ⲫⲛⲟⲩϯ)'
    },
    {
      id: 'test-10-20',
      type: 'fill_blank',
      question: 'Complete: ___ ⲉⲣⲡⲣⲟⲥⲉⲩⲭⲉⲥⲑⲉ = she prays',
      correctAnswer: 'ⲥ',
      options: ['ⲥ', 'ϥ', 'ϯ', 'ⲧⲉ'],
      explanation: 'ⲥⲉⲣⲡⲣⲟⲥⲉⲩⲭⲉⲥⲑⲉ = she prays'
    },
    {
      id: 'test-10-21',
      type: 'translation',
      question: 'Translate: ϥⲥ̀ⲙⲟⲩ ⲉ̀ⲣⲟⲛ',
      questionCoptic: 'ϥⲥ̀ⲙⲟⲩ ⲉ̀ⲣⲟⲛ',
      correctAnswer: 'he blesses us',
      options: ['he blesses us', 'he blesses them', 'I bless us', 'they bless him'],
      explanation: 'ϥⲥ̀ⲙⲟⲩ ⲉ̀ⲣⲟⲛ = he blesses us (present + preposition + suffix)'
    },
    {
      id: 'test-10-22',
      type: 'multiple_choice',
      question: 'How do you say "I read"?',
      correctAnswer: 'ϯⲱϣ',
      options: ['ϯⲱϣ', 'ⲁⲓⲱϣ', 'ⲕⲱϣ', 'ϯⲛⲁⲱϣ'],
      explanation: 'ϯⲱϣ = ϯ (I, present) + ⲱϣ (read) = "I read"'
    },
    {
      id: 'test-10-23',
      type: 'matching',
      question: 'Match present tense expressions',
      correctAnswer: 'matched',
      pairs: [
        { coptic: 'ϯⲓ̀', english: 'I come' },
        { coptic: 'ⲕϣⲉⲛⲓ', english: 'you (m) go' },
        { coptic: 'ⲥⲛⲁⲩ', english: 'she sees' },
        { coptic: 'ⲧⲉⲛϫⲱ', english: 'we say' }
      ]
    },

    // Lesson 10-4: Present Habitual and Continuous - exercises 24-30
    {
      id: 'test-10-24',
      type: 'translation',
      question: 'Translate: ϣⲁⲓⲥⲱⲧⲙ ⲉ̀ⲣⲟϥ ⲙⲙⲏⲛⲓ',
      questionCoptic: 'ϣⲁⲓⲥⲱⲧⲙ ⲉ̀ⲣⲟϥ ⲙⲙⲏⲛⲓ',
      correctAnswer: 'I hear/listen to him every day',
      options: ['I hear/listen to him every day', 'I heard him every day', 'I will hear him every day', 'I am hearing him'],
      explanation: 'ϣⲁⲓⲥⲱⲧⲙ ⲉ̀ⲣⲟϥ ⲙⲙⲏⲛⲓ = habitual present: I hear him daily (ϣⲁ- = habitual marker)'
    },
    {
      id: 'test-10-25',
      type: 'multiple_choice',
      question: 'Which prefix indicates habitual action in present?',
      correctAnswer: 'ϣⲁ-',
      options: ['ϣⲁ-', 'ⲛⲁ-', 'ⲁ-', 'ⲙⲉ-'],
      explanation: 'ϣⲁ- is the habitual present prefix (indicates regular/repeated action)'
    },
    {
      id: 'test-10-26',
      type: 'matching',
      question: 'Match habitual present forms',
      correctAnswer: 'matched',
      pairs: [
        { coptic: 'ϣⲁⲓⲓ̀ⲣⲓ', english: 'I usually do' },
        { coptic: 'ϣⲁⲕⲓ̀ⲣⲓ', english: 'you (m) usually do' },
        { coptic: 'ϣⲁϥⲓ̀ⲣⲓ', english: 'he usually does' }
      ]
    },
    {
      id: 'test-10-27',
      type: 'fill_blank',
      question: 'Complete: ϣⲁⲛϣⲉⲛⲓ ⲉϯⲉⲕⲕⲗⲏⲥⲓⲁ ___ = we go to church every week',
      correctAnswer: 'ⲥⲁⲃⲃⲁⲧⲟⲛ ⲛⲓⲃⲉⲛ',
      options: ['ⲥⲁⲃⲃⲁⲧⲟⲛ ⲛⲓⲃⲉⲛ', 'ⲙⲙⲏⲛⲓ', 'ϯⲛⲟⲩ', 'ⲥⲁϥ'],
      explanation: 'ⲥⲁⲃⲃⲁⲧⲟⲛ ⲛⲓⲃⲉⲛ = every week (time expression for habitual action)'
    },
    {
      id: 'test-10-28',
      type: 'translation',
      question: 'Translate: ϯⲟⲩⲱⲙ ϯⲛⲟⲩ',
      questionCoptic: 'ϯⲟⲩⲱⲙ ϯⲛⲟⲩ',
      correctAnswer: 'I am eating now',
      options: ['I am eating now', 'I ate now', 'I eat daily', 'I will eat now'],
      explanation: 'ϯⲟⲩⲱⲙ ϯⲛⲟⲩ = I am eating now (present + ϯⲛⲟⲩ = now, continuous action)'
    },
    {
      id: 'test-10-29',
      type: 'sentence_building',
      question: 'Build: "They usually come every day"',
      correctAnswer: 'ϣⲁⲩⲓ̀ ⲙⲙⲏⲛⲓ',
      wordBank: ['ϣⲁⲩ', 'ⲓ̀', 'ⲙⲙⲏⲛⲓ', 'ϯⲛⲟⲩ'],
      explanation: 'ϣⲁⲩⲓ̀ ⲙⲙⲏⲛⲓ = they habitually come every day (ϣⲁ- + ⲙⲙⲏⲛⲓ = habitual + every day)'
    },
    {
      id: 'test-10-30',
      type: 'multiple_choice',
      question: 'How do you say "We are praying now"?',
      correctAnswer: 'ⲧⲉⲛⲉⲣⲡⲣⲟⲥⲉⲩⲭⲉⲥⲑⲉ ϯⲛⲟⲩ',
      options: ['ⲧⲉⲛⲉⲣⲡⲣⲟⲥⲉⲩⲭⲉⲥⲑⲉ ϯⲛⲟⲩ', 'ϣⲁⲛⲉⲣⲡⲣⲟⲥⲉⲩⲭⲉⲥⲑⲉ', 'ⲁⲛⲉⲣⲡⲣⲟⲥⲉⲩⲭⲉⲥⲑⲉ', 'ⲧⲉⲛⲛⲁⲉⲣⲡⲣⲟⲥⲉⲩⲭⲉⲥⲑⲉ'],
      explanation: 'ⲧⲉⲛⲉⲣⲡⲣⲟⲥⲉⲩⲭⲉⲥⲑⲉ ϯⲛⲟⲩ = we are praying now (present continuous with time marker)'
    }
  ]
};

export default unit10Test;
