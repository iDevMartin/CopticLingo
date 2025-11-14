import { Unit } from '../../types';

// UNIT 12: FUTURE TENSE
// Verified for Bohairic dialect consistency
// Based on OUTLINE OF BOHAIRIC COPTIC MORPHOLOGY pages 5-6

const unit12: Unit = {
  id: 'unit-12',
  title: 'Future Tense',
  description: 'Express future actions: "will do"',
  order: 12,
  color: '#CE82FF',
  lessons: [
    {
      id: 'lesson-12-1',
      unitId: 'unit-12',
      title: 'Future Tense - Singular',
      description: 'I will, you will, he/she will',
      order: 1,
      xpReward: 25,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-12-1-1',
          type: 'multiple_choice',
          question: 'How do you say "I will hear" in future tense?',
          correctAnswer: 'ϯⲛⲁⲥⲱⲧⲙ',
          options: ['ϯⲛⲁⲥⲱⲧⲙ', 'ⲁⲓⲥⲱⲧⲙ', 'ϯⲥⲱⲧⲙ', 'ⲛⲁⲓⲥⲱⲧⲙ'],
          explanation: 'ϯⲛⲁⲥⲱⲧⲙ = ϯⲛⲁ (I will) + ⲥⲱⲧⲙ (hear) = "I will hear"'
        },
        {
          id: 'ex-12-1-2',
          type: 'matching',
          question: 'Match future tense pronouns',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ϯⲛⲁ-', english: 'I will' },
            { coptic: 'ⲕⲛⲁ-', english: 'you will (m)' },
            { coptic: 'ⲧⲉⲛⲁ-', english: 'you will (f)' },
            { coptic: 'ϥⲛⲁ-', english: 'he will' }
          ]
        },
        {
          id: 'ex-12-1-3',
          type: 'translation',
          question: 'Translate: ⲕⲛⲁⲟⲩⲱⲙ',
          questionCoptic: 'ⲕⲛⲁⲟⲩⲱⲙ',
          correctAnswer: 'you (m) will eat',
          options: ['you (m) will eat', 'I will eat', 'he will eat', 'you (f) will eat'],
          explanation: 'ⲕⲛⲁⲟⲩⲱⲙ = ⲕⲛⲁ (you will, m) + ⲟⲩⲱⲙ (eat)'
        },
        {
          id: 'ex-12-1-4',
          type: 'sentence_building',
          question: 'Build: "She will see"',
          correctAnswer: 'ⲥⲛⲁⲛⲁⲩ',
          wordBank: ['ⲥⲛⲁ', 'ⲛⲁⲩ', 'ⲧⲉⲛⲁ', 'ϥⲛⲁ'],
          explanation: 'ⲥⲛⲁⲛⲁⲩ = ⲥⲛⲁ (she will) + ⲛⲁⲩ (see)'
        },
        {
          id: 'ex-12-1-5',
          type: 'multiple_choice',
          question: 'What is the future tense prefix for "you (feminine)"?',
          correctAnswer: 'ⲧⲉⲛⲁ-',
          options: ['ⲧⲉⲛⲁ-', 'ⲕⲛⲁ-', 'ⲥⲛⲁ-', 'ϯⲛⲁ-'],
          explanation: 'ⲧⲉⲛⲁ- is "you will" for feminine in future tense'
        },
        {
          id: 'ex-12-1-6',
          type: 'translation',
          question: 'Translate: ϥⲛⲁⲙⲟϣⲓ',
          questionCoptic: 'ϥⲛⲁⲙⲟϣⲓ',
          correctAnswer: 'he will walk',
          options: ['he will walk', 'I will walk', 'you will walk', 'she will walk'],
          explanation: 'ϥⲛⲁⲙⲟϣⲓ = ϥⲛⲁ (he will) + ⲙⲟϣⲓ (walk) - Bohairic ⲙⲟϣⲓ not ⲙⲟⲟϣⲉ!'
        },
        {
          id: 'ex-12-1-7',
          type: 'fill_blank',
          question: 'Complete: ___ ⲥⲱ = I will drink',
          correctAnswer: 'ϯⲛⲁ',
          options: ['ϯⲛⲁ', 'ⲕⲛⲁ', 'ϥⲛⲁ', 'ⲥⲛⲁ'],
          explanation: 'ϯⲛⲁ is the future tense form for "I will"'
        },
        {
          id: 'ex-12-1-8',
          type: 'matching',
          question: 'Match complete future tense verbs',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ϯⲛⲁⲓ̀ⲣⲓ', english: 'I will do' },
            { coptic: 'ⲕⲛⲁⲓ̀ⲣⲓ', english: 'you (m) will do' },
            { coptic: 'ⲧⲉⲛⲁⲓ̀ⲣⲓ', english: 'you (f) will do' },
            { coptic: 'ϥⲛⲁⲓ̀ⲣⲓ', english: 'he will do' }
          ]
        }
      ]
    },
    {
      id: 'lesson-12-2',
      unitId: 'unit-12',
      title: 'Future Tense - Plural',
      description: 'we will, you (pl) will, they will',
      order: 2,
      xpReward: 25,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-12-2-1',
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
          id: 'ex-12-2-2',
          type: 'translation',
          question: 'Translate: ⲧⲉⲛⲛⲁⲥⲱⲧⲙ',
          questionCoptic: 'ⲧⲉⲛⲛⲁⲥⲱⲧⲙ',
          correctAnswer: 'we will hear',
          options: ['we will hear', 'you will hear', 'they will hear', 'I will hear'],
          explanation: 'ⲧⲉⲛⲛⲁⲥⲱⲧⲙ = ⲧⲉⲛⲛⲁ (we will) + ⲥⲱⲧⲙ (hear)'
        },
        {
          id: 'ex-12-2-3',
          type: 'multiple_choice',
          question: 'How do you say "they will go"?',
          correctAnswer: 'ⲥⲉⲛⲁϣⲉⲛⲓ',
          options: ['ⲥⲉⲛⲁϣⲉⲛⲓ', 'ⲧⲉⲛⲛⲁϣⲉⲛⲓ', 'ⲧⲉⲧⲛⲛⲁϣⲉⲛⲓ', 'ϥⲛⲁϣⲉⲛⲓ'],
          explanation: 'ⲥⲉⲛⲁϣⲉⲛⲓ = ⲥⲉⲛⲁ (they will) + ϣⲉⲛⲓ (go) - Bohairic ϣⲉⲛⲓ not ⲃⲱⲕ!'
        },
        {
          id: 'ex-12-2-4',
          type: 'sentence_building',
          question: 'Build: "You (plural) will come"',
          correctAnswer: 'ⲧⲉⲧⲛⲛⲁⲓ̀',
          wordBank: ['ⲧⲉⲧⲛⲛⲁ', 'ⲓ̀', 'ⲧⲉⲛⲛⲁ', 'ⲥⲉⲛⲁ'],
          explanation: 'ⲧⲉⲧⲛⲛⲁⲓ̀ = ⲧⲉⲧⲛⲛⲁ (you pl will) + ⲓ̀ (come) - Bohairic ⲓ̀ not ⲉⲓ!'
        },
        {
          id: 'ex-12-2-5',
          type: 'translation',
          question: 'Translate: ⲥⲉⲛⲁϯ',
          questionCoptic: 'ⲥⲉⲛⲁϯ',
          correctAnswer: 'they will give',
          options: ['they will give', 'we will give', 'you will give', 'I will give'],
          explanation: 'ⲥⲉⲛⲁϯ = ⲥⲉⲛⲁ (they will) + Ϯ (give)'
        },
        {
          id: 'ex-12-2-6',
          type: 'fill_blank',
          question: 'Complete: ___ ⲟⲩⲱⲙ = we will eat',
          correctAnswer: 'ⲧⲉⲛⲛⲁ',
          options: ['ⲧⲉⲛⲛⲁ', 'ⲧⲉⲧⲛⲛⲁ', 'ⲥⲉⲛⲁ', 'ϯⲛⲁ'],
          explanation: 'ⲧⲉⲛⲛⲁ is "we will" in future tense'
        },
        {
          id: 'ex-12-2-7',
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
          id: 'ex-12-2-8',
          type: 'multiple_choice',
          question: 'What is "you (plural) will say" in Coptic?',
          correctAnswer: 'ⲧⲉⲧⲛⲛⲁϫⲱ',
          options: ['ⲧⲉⲧⲛⲛⲁϫⲱ', 'ⲧⲉⲛⲛⲁϫⲱ', 'ⲥⲉⲛⲁϫⲱ', 'ⲕⲛⲁϫⲱ'],
          explanation: 'ⲧⲉⲧⲛⲛⲁϫⲱ = ⲧⲉⲧⲛⲛⲁ (you pl will) + ϫⲱ (say)'
        }
      ]
    },
    {
      id: 'lesson-12-3',
      unitId: 'unit-12',
      title: 'Future Tense Practice',
      description: 'Master all future tense forms',
      order: 3,
      xpReward: 25,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-12-3-1',
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
          id: 'ex-12-3-2',
          type: 'translation',
          question: 'Translate: ⲧⲉⲛⲛⲁϣⲉⲛⲓ ⲉϯⲉⲕⲕⲗⲏⲥⲓⲁ',
          questionCoptic: 'ⲧⲉⲛⲛⲁϣⲉⲛⲓ ⲉϯⲉⲕⲕⲗⲏⲥⲓⲁ',
          correctAnswer: 'we will go to church',
          options: ['we will go to church', 'they will go to church', 'you will go to church', 'I will go to church'],
          explanation: 'ⲧⲉⲛⲛⲁϣⲉⲛⲓ ⲉϯⲉⲕⲕⲗⲏⲥⲓⲁ = we will go to the church (Bohairic ϣⲉⲛⲓ not ⲃⲱⲕ!)'
        },
        {
          id: 'ex-12-3-3',
          type: 'sentence_building',
          question: 'Build: "They will love God"',
          correctAnswer: 'ⲥⲉⲛⲁⲙⲉⲛⲣⲉ ⲙⲫϯ',
          wordBank: ['ⲥⲉⲛⲁ', 'ⲙⲉⲛⲣⲉ', 'ⲙ', 'ⲫϯ'],
          explanation: 'ⲥⲉⲛⲁⲙⲉⲛⲣⲉ ⲙⲫϯ = they will love God (Bohairic: ⲙⲉⲛⲣⲉ not ⲙⲉⲣⲓ, ⲫϯ not ⲫⲛⲟⲩϯ)'
        },
        {
          id: 'ex-12-3-4',
          type: 'fill_blank',
          question: 'Complete: ___ ⲉⲣⲡⲣⲟⲥⲉⲩⲭⲉⲥⲑⲉ = she will pray',
          correctAnswer: 'ⲥⲛⲁ',
          options: ['ⲥⲛⲁ', 'ϥⲛⲁ', 'ϯⲛⲁ', 'ⲧⲉⲛⲁ'],
          explanation: 'ⲥⲛⲁⲉⲣⲡⲣⲟⲥⲉⲩⲭⲉⲥⲑⲉ = she will pray'
        },
        {
          id: 'ex-12-3-5',
          type: 'translation',
          question: 'Translate: ϥⲛⲁⲥ̀ⲙⲟⲩ ⲉ̀ⲣⲟⲛ',
          questionCoptic: 'ϥⲛⲁⲥ̀ⲙⲟⲩ ⲉ̀ⲣⲟⲛ',
          correctAnswer: 'he will bless us',
          options: ['he will bless us', 'he will bless them', 'I will bless us', 'they will bless him'],
          explanation: 'ϥⲛⲁⲥ̀ⲙⲟⲩ ⲉ̀ⲣⲟⲛ = he will bless us'
        },
        {
          id: 'ex-12-3-6',
          type: 'multiple_choice',
          question: 'How do you say "I will write"?',
          correctAnswer: 'ϯⲛⲁⲥ̀ϧⲁⲓ',
          options: ['ϯⲛⲁⲥ̀ϧⲁⲓ', 'ⲕⲛⲁⲥ̀ϧⲁⲓ', 'ϥⲛⲁⲥ̀ϧⲁⲓ', 'ⲥⲛⲁⲥ̀ϧⲁⲓ'],
          explanation: 'ϯⲛⲁⲥ̀ϧⲁⲓ = ϯⲛⲁ (I will) + ⲥ̀ϧⲁⲓ (write) - Bohairic ⲥ̀ϧⲁⲓ not ⲥϩⲁⲓ!'
        },
        {
          id: 'ex-12-3-7',
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
        {
          id: 'ex-12-3-8',
          type: 'sentence_building',
          question: 'Build: "You (f) will open the door"',
          correctAnswer: 'ⲧⲉⲛⲁⲟⲩⲱⲛ ⲙⲡⲓⲣⲟ',
          wordBank: ['ⲧⲉⲛⲁ', 'ⲟⲩⲱⲛ', 'ⲙ', 'ⲡⲓⲣⲟ'],
          explanation: 'ⲧⲉⲛⲁⲟⲩⲱⲛ ⲙⲡⲓⲣⲟ = you (f) will open the door'
        }
      ]
    }
  ]
};

export default unit12;
