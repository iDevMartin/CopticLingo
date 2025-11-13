import { Unit } from '../../types';

// UNIT 18: NEGATION PATTERNS
// Verified for Bohairic dialect consistency
// Negative constructions: ⲁⲛ, ⲛ̀...ⲁⲛ, ⲙ̀ⲡⲉ-, ⲙ̀ⲙⲟⲛ

const unit18: Unit = {
  id: 'unit-18',
  title: 'Negation Patterns',
  description: 'Express negative statements and denials',
  order: 18,
  color: '#CE82FF',
  lessons: [
    {
      id: 'lesson-18-1',
      unitId: 'unit-18',
      title: 'Negative Copula (ⲁⲛ)',
      description: 'Negating "to be" statements',
      order: 1,
      xpReward: 30,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-18-1-1',
          type: 'translation',
          question: 'Translate: ⲟⲩⲣⲱⲙⲓ ⲁⲛ ⲡⲉ',
          questionCoptic: 'ⲟⲩⲣⲱⲙⲓ ⲁⲛ ⲡⲉ',
          correctAnswer: 'He is not a man',
          options: ['He is not a man', 'He is a man', 'It is not a man', 'He is not human'],
          explanation: 'ⲟⲩⲣⲱⲙⲓ ⲡⲉ = he is a man + ⲁⲛ negates it → he is not a man'
        },
        {
          id: 'ex-18-1-2',
          type: 'multiple_choice',
          question: 'How do you negate a nominal sentence with copula?',
          correctAnswer: 'Add ⲁⲛ after the predicate',
          options: ['Add ⲁⲛ after the predicate', 'Add ⲙ̀ⲡⲉ- before the verb', 'Add ⲛ̀...ⲁⲛ around it', 'Use ⲙ̀ⲙⲟⲛ'],
          explanation: 'ⲁⲛ (an) is placed after the predicate to negate copula sentences (ⲡⲉ/ⲧⲉ/ⲛⲉ)'
        },
        {
          id: 'ex-18-1-3',
          type: 'matching',
          question: 'Match affirmative and negative',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲟⲩⲙⲁⲓⲛⲟⲩϯ ⲡⲉ', english: 'he is a believer' },
            { coptic: 'ⲟⲩⲙⲁⲓⲛⲟⲩϯ ⲁⲛ ⲡⲉ', english: 'he is not a believer' },
            { coptic: 'ⲛⲁⲛⲉϥ ⲡⲉ', english: 'it is good' },
            { coptic: 'ⲛⲁⲛⲉϥ ⲁⲛ ⲡⲉ', english: 'it is not good' }
          ]
        },
        {
          id: 'ex-18-1-4',
          type: 'translation',
          question: 'Translate: ⲧⲁⲙⲁⲁⲩ ⲧⲉ ⲧⲁⲓ ⲁⲛ',
          questionCoptic: 'ⲧⲁⲙⲁⲁⲩ ⲧⲉ ⲧⲁⲓ ⲁⲛ',
          correctAnswer: 'This is not my mother',
          options: ['This is not my mother', 'This is my mother', 'She is not my mother', 'That is not my mother'],
          explanation: 'ⲧⲁⲙⲁⲁⲩ ⲧⲉ ⲧⲁⲓ = this is my mother + ⲁⲛ negates it'
        },
        {
          id: 'ex-18-1-5',
          type: 'sentence_building',
          question: 'Build: "I am not a teacher"',
          correctAnswer: 'ⲟⲩⲥⲁϧ ⲁⲛ ⲛ̀ⲧⲟⲕ',
          wordBank: ['ⲟⲩⲥⲁϧ', 'ⲁⲛ', 'ⲛ̀ⲧⲟⲕ', 'ⲡⲉ'],
          explanation: 'ⲟⲩⲥⲁϧ ⲁⲛ ⲛ̀ⲧⲟⲕ = a teacher not you-are (Bohairic word order)'
        },
        {
          id: 'ex-18-1-6',
          type: 'fill_blank',
          question: 'Complete: ⲟⲩϫⲱⲙ ___ ⲡⲉ = It is not a book',
          correctAnswer: 'ⲁⲛ',
          options: ['ⲁⲛ', 'ⲙ̀ⲡⲉ', 'ⲛ̀', 'ⲙ̀ⲙⲟⲛ'],
          explanation: 'ⲟⲩϫⲱⲙ ⲁⲛ ⲡⲉ = a book not it-is'
        },
        {
          id: 'ex-18-1-7',
          type: 'translation',
          question: 'Translate: ϩⲁⲛⲁⲛⲉⲩ ⲁⲛ ⲛⲉ',
          questionCoptic: 'ϩⲁⲛⲁⲛⲉⲩ ⲁⲛ ⲛⲉ',
          correctAnswer: 'They are not good',
          options: ['They are not good', 'They are good', 'It is not good', 'These are not good'],
          explanation: 'ϩⲁⲛⲁⲛⲉⲩ ⲛⲉ = they are good + ⲁⲛ negates it (plural copula ⲛⲉ)'
        },
        {
          id: 'ex-18-1-8',
          type: 'multiple_choice',
          question: 'Where does ⲁⲛ appear in negative copula sentences?',
          correctAnswer: 'Between the predicate and the copula',
          options: ['Between the predicate and the copula', 'At the beginning', 'At the very end', 'Before the subject'],
          explanation: 'Pattern: [Predicate] + ⲁⲛ + [Copula] (e.g., ⲟⲩⲣⲱⲙⲓ ⲁⲛ ⲡⲉ)'
        }
      ]
    },
    {
      id: 'lesson-18-2',
      unitId: 'unit-18',
      title: 'Negative Present (ⲛ̀...ⲁⲛ)',
      description: 'Negating present tense verbs',
      order: 2,
      xpReward: 30,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-18-2-1',
          type: 'translation',
          question: 'Translate: ⲛ̀ϯⲥⲱⲟⲩⲛ ⲁⲛ',
          questionCoptic: 'ⲛ̀ϯⲥⲱⲟⲩⲛ ⲁⲛ',
          correctAnswer: 'I do not know',
          options: ['I do not know', 'I know', 'You do not know', 'I did not know'],
          explanation: 'ⲛ̀- prefix + ϯⲥⲱⲟⲩⲛ (I know) + ⲁⲛ suffix = I do not know'
        },
        {
          id: 'ex-18-2-2',
          type: 'multiple_choice',
          question: 'What is the negative present tense pattern?',
          correctAnswer: 'ⲛ̀- ... ⲁⲛ (circumfix)',
          options: ['ⲛ̀- ... ⲁⲛ (circumfix)', 'ⲙ̀ⲡⲉ- prefix', 'ⲁⲛ suffix only', 'ⲙ̀ⲙⲟⲛ before verb'],
          explanation: 'Negative present uses circumfix: ⲛ̀- at the beginning + ⲁⲛ at the end'
        },
        {
          id: 'ex-18-2-3',
          type: 'matching',
          question: 'Match positive and negative present',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ϯⲛⲁϩϯ', english: 'I believe' },
            { coptic: 'ⲛ̀ϯⲛⲁϩϯ ⲁⲛ', english: 'I do not believe' },
            { coptic: 'ⲕⲙⲟϣⲓ', english: 'you walk' },
            { coptic: 'ⲛ̀ⲕⲙⲟϣⲓ ⲁⲛ', english: 'you do not walk' }
          ]
        },
        {
          id: 'ex-18-2-4',
          type: 'translation',
          question: 'Translate: ⲛ̀ϥⲙⲉⲛⲣⲉ ⲙ̀ⲙⲟⲛ ⲁⲛ',
          questionCoptic: 'ⲛ̀ϥⲙⲉⲛⲣⲉ ⲙ̀ⲙⲟⲛ ⲁⲛ',
          correctAnswer: 'He does not love us',
          options: ['He does not love us', 'He loves us', 'We do not love him', 'He did not love us'],
          explanation: 'ⲛ̀- + ϥⲙⲉⲛⲣⲉ ⲙ̀ⲙⲟⲛ + ⲁⲛ = he does not love us (Bohairic ⲙⲉⲛⲣⲉ not ⲙⲉⲣⲓ!)'
        },
        {
          id: 'ex-18-2-5',
          type: 'sentence_building',
          question: 'Build: "They do not go to church"',
          correctAnswer: 'ⲛ̀ⲥⲉϣⲉⲛⲓ ⲉ̀ϯⲉⲕⲕⲗⲏⲥⲓⲁ ⲁⲛ',
          wordBank: ['ⲛ̀', 'ⲥⲉϣⲉⲛⲓ', 'ⲉ̀', 'ϯⲉⲕⲕⲗⲏⲥⲓⲁ', 'ⲁⲛ'],
          explanation: 'ⲛ̀ⲥⲉϣⲉⲛⲓ ⲉ̀ϯⲉⲕⲕⲗⲏⲥⲓⲁ ⲁⲛ (Bohairic ϣⲉⲛⲓ not ⲃⲱⲕ!)'
        },
        {
          id: 'ex-18-2-6',
          type: 'fill_blank',
          question: 'Complete: ⲛ̀___ ⲁⲛ = You do not come',
          correctAnswer: 'ⲕⲓ̀',
          options: ['ⲕⲓ̀', 'ⲁⲕⲓ̀', 'ⲕⲛⲁⲓ̀', 'ⲓ̀'],
          explanation: 'ⲛ̀ⲕⲓ̀ ⲁⲛ = you do not come (present negative) (Bohairic ⲓ̀ not ⲉⲓ!)'
        },
        {
          id: 'ex-18-2-7',
          type: 'translation',
          question: 'Translate: ⲛ̀ⲧⲉⲧⲉⲛⲥ̀ϧⲁⲓ ⲁⲛ',
          questionCoptic: 'ⲛ̀ⲧⲉⲧⲉⲛⲥ̀ϧⲁⲓ ⲁⲛ',
          correctAnswer: 'You (plural) do not write',
          options: ['You (plural) do not write', 'You write', 'We do not write', 'You did not write'],
          explanation: 'ⲛ̀- + ⲧⲉⲧⲉⲛⲥ̀ϧⲁⲓ + ⲁⲛ = you (pl.) do not write (Bohairic ⲥ̀ϧⲁⲓ not ⲥϩⲁⲓ!)'
        },
        {
          id: 'ex-18-2-8',
          type: 'multiple_choice',
          question: 'How do you say "We do not see"?',
          correctAnswer: 'ⲛ̀ⲧⲉⲛⲛⲁⲩ ⲁⲛ',
          options: ['ⲛ̀ⲧⲉⲛⲛⲁⲩ ⲁⲛ', 'ⲧⲉⲛⲛⲁⲩ ⲁⲛ', 'ⲙ̀ⲡⲉⲛⲛⲁⲩ', 'ⲛ̀ⲧⲉⲛⲛⲁⲩ'],
          explanation: 'ⲛ̀ⲧⲉⲛⲛⲁⲩ ⲁⲛ (negative present circumfix around "we see")'
        }
      ]
    },
    {
      id: 'lesson-18-3',
      unitId: 'unit-18',
      title: 'Negative Past (ⲙ̀ⲡⲉ-)',
      description: 'Negating perfect/past tense',
      order: 3,
      xpReward: 30,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-18-3-1',
          type: 'translation',
          question: 'Translate: ⲙ̀ⲡⲓⲓ̀',
          questionCoptic: 'ⲙ̀ⲡⲓⲓ̀',
          correctAnswer: 'I did not come',
          options: ['I did not come', 'I do not come', 'I came', 'I will not come'],
          explanation: 'ⲙ̀ⲡⲉ- + ⲓⲓ̀ (I came) = ⲙ̀ⲡⲓⲓ̀ = I did not come (Bohairic ⲓ̀ not ⲉⲓ!)'
        },
        {
          id: 'ex-18-3-2',
          type: 'multiple_choice',
          question: 'What prefix negates the perfect tense?',
          correctAnswer: 'ⲙ̀ⲡⲉ- (or ⲙ̀ⲡⲁ-)',
          options: ['ⲙ̀ⲡⲉ- (or ⲙ̀ⲡⲁ-)', 'ⲛ̀-...ⲁⲛ', 'ⲁⲛ alone', 'ⲛ̀ⲛⲉ-'],
          explanation: 'ⲙ̀ⲡⲉ- (mpe-) negates perfect/past tense (replaces ⲁ- prefix)'
        },
        {
          id: 'ex-18-3-3',
          type: 'matching',
          question: 'Match positive and negative past',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲁⲓⲛⲁⲩ', english: 'I saw' },
            { coptic: 'ⲙ̀ⲡⲓⲛⲁⲩ', english: 'I did not see' },
            { coptic: 'ⲁϥϣⲉⲛⲓ', english: 'he went' },
            { coptic: 'ⲙ̀ⲡⲉϥϣⲉⲛⲓ', english: 'he did not go' }
          ]
        },
        {
          id: 'ex-18-3-4',
          type: 'translation',
          question: 'Translate: ⲙ̀ⲡⲉϥⲥⲱⲧⲉⲙ',
          questionCoptic: 'ⲙ̀ⲡⲉϥⲥⲱⲧⲉⲙ',
          correctAnswer: 'He did not listen',
          options: ['He did not listen', 'He listened', 'He does not listen', 'He will not listen'],
          explanation: 'ⲙ̀ⲡⲉ- + ϥⲥⲱⲧⲉⲙ (he listened) = ⲙ̀ⲡⲉϥⲥⲱⲧⲉⲙ = he did not listen'
        },
        {
          id: 'ex-18-3-5',
          type: 'sentence_building',
          question: 'Build: "They did not believe"',
          correctAnswer: 'ⲙ̀ⲡⲟⲩⲛⲁϩϯ',
          wordBank: ['ⲙ̀ⲡⲉ', 'ⲙ̀ⲡⲟⲩ', 'ⲛⲁϩϯ', 'ⲁⲩⲛⲁϩϯ'],
          explanation: 'ⲙ̀ⲡⲟⲩⲛⲁϩϯ = they did not believe (ⲙ̀ⲡⲉ- + ⲟⲩⲛⲁϩϯ)'
        },
        {
          id: 'ex-18-3-6',
          type: 'fill_blank',
          question: 'Complete: ___ ⲥ̀ϧⲁⲓ = She did not write',
          correctAnswer: 'ⲙ̀ⲡⲉⲥ',
          options: ['ⲙ̀ⲡⲉⲥ', 'ⲛ̀ⲥ', 'ⲁⲥ', 'ⲙ̀ⲡⲓ'],
          explanation: 'ⲙ̀ⲡⲉⲥⲥ̀ϧⲁⲓ = she did not write (Bohairic ⲥ̀ϧⲁⲓ not ⲥϩⲁⲓ!)'
        },
        {
          id: 'ex-18-3-7',
          type: 'translation',
          question: 'Translate: ⲙ̀ⲡⲉⲛⲙⲟϣⲓ ⲛⲉⲙⲱⲟⲩ',
          questionCoptic: 'ⲙ̀ⲡⲉⲛⲙⲟϣⲓ ⲛⲉⲙⲱⲟⲩ',
          correctAnswer: 'We did not walk with them',
          options: ['We did not walk with them', 'We walked with them', 'We do not walk with them', 'They did not walk with us'],
          explanation: 'ⲙ̀ⲡⲉⲛⲙⲟϣⲓ = we did not walk + ⲛⲉⲙⲱⲟⲩ = with them (Bohairic ⲙⲟϣⲓ not ⲙⲟⲟϣⲉ!)'
        },
        {
          id: 'ex-18-3-8',
          type: 'multiple_choice',
          question: 'How do you say "You did not give"?',
          correctAnswer: 'ⲙ̀ⲡⲉⲕϯ',
          options: ['ⲙ̀ⲡⲉⲕϯ', 'ⲛ̀ⲕϯ ⲁⲛ', 'ⲁⲕϯ ⲁⲛ', 'ⲙ̀ⲡⲓϯ'],
          explanation: 'ⲙ̀ⲡⲉⲕϯ (mpe-k-ti) = you (m.) did not give (negative perfect)'
        }
      ]
    },
    {
      id: 'lesson-18-4',
      unitId: 'unit-18',
      title: 'Negative Future & Imperative',
      description: 'Future negation and prohibitions',
      order: 4,
      xpReward: 30,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-18-4-1',
          type: 'translation',
          question: 'Translate: ⲛ̀ⲛⲁϣⲉⲛⲓ ⲁⲛ',
          questionCoptic: 'ⲛ̀ⲛⲁϣⲉⲛⲓ ⲁⲛ',
          correctAnswer: 'I will not go',
          options: ['I will not go', 'I do not go', 'I did not go', 'I am not going'],
          explanation: 'ⲛ̀- + ⲛⲁϣⲉⲛⲓ (I will go) + ⲁⲛ = I will not go (Bohairic ϣⲉⲛⲓ not ⲃⲱⲕ!)'
        },
        {
          id: 'ex-18-4-2',
          type: 'multiple_choice',
          question: 'How do you negate the future tense?',
          correctAnswer: 'Use ⲛ̀...ⲁⲛ around the future form',
          options: ['Use ⲛ̀...ⲁⲛ around the future form', 'Use ⲙ̀ⲡⲉ- prefix', 'Use ⲁⲛ alone', 'Use ⲙ̀ⲙⲟⲛ'],
          explanation: 'Future tense uses the same ⲛ̀...ⲁⲛ circumfix as present tense'
        },
        {
          id: 'ex-18-4-3',
          type: 'matching',
          question: 'Match future and negative future',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ϯⲛⲁⲓ̀', english: 'I will come' },
            { coptic: 'ⲛ̀ⲛⲁⲓ̀ ⲁⲛ', english: 'I will not come' },
            { coptic: 'ϥⲛⲁⲙⲉⲛⲣⲉ', english: 'he will love' },
            { coptic: 'ⲛ̀ⲛⲉϥⲙⲉⲛⲣⲉ ⲁⲛ', english: 'he will not love' }
          ]
        },
        {
          id: 'ex-18-4-4',
          type: 'translation',
          question: 'Translate: ⲙ̀ⲡⲉⲣϣⲉⲛⲓ',
          questionCoptic: 'ⲙ̀ⲡⲉⲣϣⲉⲛⲓ',
          correctAnswer: 'Do not go! (prohibition)',
          options: ['Do not go! (prohibition)', 'You did not go', 'You will not go', 'Do not come'],
          explanation: 'ⲙ̀ⲡⲉⲣ- (mper-) = negative imperative prefix (prohibition) (Bohairic ϣⲉⲛⲓ not ⲃⲱⲕ!)'
        },
        {
          id: 'ex-18-4-5',
          type: 'sentence_building',
          question: 'Build: "Do not speak!"',
          correctAnswer: 'ⲙ̀ⲡⲉⲣⲥⲁϫⲓ',
          wordBank: ['ⲙ̀ⲡⲉⲣ', 'ⲥⲁϫⲓ', 'ⲛ̀', 'ⲁⲛ'],
          explanation: 'ⲙ̀ⲡⲉⲣⲥⲁϫⲓ = do not speak (negative imperative)'
        },
        {
          id: 'ex-18-4-6',
          type: 'fill_blank',
          question: 'Complete: ⲛ̀ⲛⲉⲧⲉⲛ___ ⲁⲛ = You (pl.) will not write',
          correctAnswer: 'ⲥ̀ϧⲁⲓ',
          options: ['ⲥ̀ϧⲁⲓ', 'ⲥϩⲁⲓ', 'ⲥⲉϧⲁⲓ', 'ⲁⲥⲥ̀ϧⲁⲓ'],
          explanation: 'ⲛ̀ⲛⲉⲧⲉⲛⲥ̀ϧⲁⲓ ⲁⲛ = you (pl.) will not write (Bohairic ⲥ̀ϧⲁⲓ not ⲥϩⲁⲓ!)'
        },
        {
          id: 'ex-18-4-7',
          type: 'translation',
          question: 'Translate: ⲙ̀ⲡⲉⲣⲉⲣϩⲟϯ',
          questionCoptic: 'ⲙ̀ⲡⲉⲣⲉⲣϩⲟϯ',
          correctAnswer: 'Do not be afraid!',
          options: ['Do not be afraid!', 'You are not afraid', 'You will not fear', 'They did not fear'],
          explanation: 'ⲙ̀ⲡⲉⲣⲉⲣϩⲟϯ = do not fear (prohibition with infinitive)'
        },
        {
          id: 'ex-18-4-8',
          type: 'multiple_choice',
          question: 'How do you say "We will not forget"?',
          correctAnswer: 'ⲛ̀ⲛⲉⲛⲉⲣⲡⲱⲃϣ ⲁⲛ',
          options: ['ⲛ̀ⲛⲉⲛⲉⲣⲡⲱⲃϣ ⲁⲛ', 'ⲙ̀ⲡⲉⲛⲉⲣⲡⲱⲃϣ', 'ⲧⲉⲛⲉⲣⲡⲱⲃϣ ⲁⲛ', 'ⲙ̀ⲡⲉⲣⲉⲣⲡⲱⲃϣ'],
          explanation: 'ⲛ̀ⲛⲉⲛⲉⲣⲡⲱⲃϣ ⲁⲛ = we will not forget (negative future)'
        }
      ]
    },
    {
      id: 'lesson-18-5',
      unitId: 'unit-18',
      title: 'Existential Negation (ⲙ̀ⲙⲟⲛ)',
      description: 'There is not / to not have',
      order: 5,
      xpReward: 30,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-18-5-1',
          type: 'translation',
          question: 'Translate: ⲙ̀ⲙⲟⲛ ⲟⲩⲱⲙ',
          questionCoptic: 'ⲙ̀ⲙⲟⲛ ⲟⲩⲱⲙ',
          correctAnswer: 'There is no food',
          options: ['There is no food', 'There is food', 'I have no food', 'He has no food'],
          explanation: 'ⲙ̀ⲙⲟⲛ (mmon) = there is not + ⲟⲩⲱⲙ = food'
        },
        {
          id: 'ex-18-5-2',
          type: 'multiple_choice',
          question: 'What does ⲙ̀ⲙⲟⲛ negate?',
          correctAnswer: 'Existence (there is not) or possession (to not have)',
          options: ['Existence (there is not) or possession (to not have)', 'Only verbs', 'Only copula sentences', 'Only commands'],
          explanation: 'ⲙ̀ⲙⲟⲛ negates existential ⲟⲩⲟⲛ (there is) and possessive ⲟⲩⲟⲛⲧ- (to have)'
        },
        {
          id: 'ex-18-5-3',
          type: 'matching',
          question: 'Match existential positive and negative',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲟⲩⲟⲛ ⲙⲱⲟⲩ', english: 'there is water' },
            { coptic: 'ⲙ̀ⲙⲟⲛ ⲙⲱⲟⲩ', english: 'there is no water' },
            { coptic: 'ⲟⲩⲟⲛⲧⲁⲓ', english: 'I have' },
            { coptic: 'ⲙ̀ⲙⲟⲛⲧⲁⲓ', english: 'I do not have' }
          ]
        },
        {
          id: 'ex-18-5-4',
          type: 'translation',
          question: 'Translate: ⲙ̀ⲙⲟⲛⲧⲁⲕ ⲱⲓⲕ',
          questionCoptic: 'ⲙ̀ⲙⲟⲛⲧⲁⲕ ⲱⲓⲕ',
          correctAnswer: 'You have no bread',
          options: ['You have no bread', 'You have bread', 'There is no bread', 'I have no bread'],
          explanation: 'ⲙ̀ⲙⲟⲛⲧⲁⲕ = you (m.) do not have + ⲱⲓⲕ = bread'
        },
        {
          id: 'ex-18-5-5',
          type: 'sentence_building',
          question: 'Build: "There is no hope"',
          correctAnswer: 'ⲙ̀ⲙⲟⲛ ϩⲉⲗⲡⲓⲥ',
          wordBank: ['ⲙ̀ⲙⲟⲛ', 'ⲟⲩⲟⲛ', 'ϩⲉⲗⲡⲓⲥ', 'ⲁⲛ'],
          explanation: 'ⲙ̀ⲙⲟⲛ ϩⲉⲗⲡⲓⲥ = there is no hope (existential negation)'
        },
        {
          id: 'ex-18-5-6',
          type: 'fill_blank',
          question: 'Complete: ⲙ̀ⲙⲟⲛⲧⲁⲛ ___ = We have no brothers',
          correctAnswer: 'ⲛⲓⲥⲟⲛ',
          options: ['ⲛⲓⲥⲟⲛ', 'ⲥⲟⲛ', 'ⲛⲓⲥⲱⲛⲓ', 'ⲡⲁⲥⲟⲛ'],
          explanation: 'ⲙ̀ⲙⲟⲛⲧⲁⲛ ⲛⲓⲥⲟⲛ = we do not have brothers'
        },
        {
          id: 'ex-18-5-7',
          type: 'translation',
          question: 'Translate: ⲙ̀ⲙⲟⲛ ϩⲗⲓ ⲙⲡⲁⲓⲙⲁ',
          questionCoptic: 'ⲙ̀ⲙⲟⲛ ϩⲗⲓ ⲙⲡⲁⲓⲙⲁ',
          correctAnswer: 'There is no one here',
          options: ['There is no one here', 'There is someone here', 'No one came here', 'I am not here'],
          explanation: 'ⲙ̀ⲙⲟⲛ ϩⲗⲓ = there is no one + ⲙⲡⲁⲓⲙⲁ = here'
        },
        {
          id: 'ex-18-5-8',
          type: 'multiple_choice',
          question: 'How do you say "They have no house"?',
          correctAnswer: 'ⲙ̀ⲙⲟⲛⲧⲱⲟⲩ ⲏⲓ',
          options: ['ⲙ̀ⲙⲟⲛⲧⲱⲟⲩ ⲏⲓ', 'ⲙ̀ⲙⲟⲛ ⲡⲟⲩⲏⲓ', 'ⲛ̀ⲥⲉⲟⲩⲟⲛⲧⲟⲩ ⲁⲛ', 'ⲟⲩⲟⲛⲧⲱⲟⲩ ⲁⲛ'],
          explanation: 'ⲙ̀ⲙⲟⲛⲧⲱⲟⲩ ⲏⲓ = they do not have (a) house (possessive negative)'
        }
      ]
    }
  ]
};

export default unit18;
