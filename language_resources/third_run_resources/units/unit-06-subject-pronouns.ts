import { Unit } from '../../types';

// UNIT 6: SUBJECT PRONOUNS
// Corrected for Bohairic dialect consistency
// Based on Mallon Bohairic Grammar and OUTLINE OF BOHAIRIC COPTIC MORPHOLOGY

const unit6: Unit = {
  id: 'unit-6',
  title: 'Subject Pronouns',
  description: 'Learn personal pronouns: I, you, he, she, we, they',
  order: 6,
  color: '#FF9600',
  lessons: [
    {
      id: 'lesson-6-1',
      unitId: 'unit-6',
      title: 'Singular Pronouns (Part 1)',
      description: 'I, you (masculine), you (feminine)',
      order: 1,
      xpReward: 20,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-6-1-1',
          type: 'multiple_choice',
          question: 'How do you say "I" in Coptic?',
          correctAnswer: 'ⲁⲛⲟⲕ',
          options: ['ⲁⲛⲟⲕ', 'ⲛ̀ⲑⲟⲕ', 'ⲛ̀ⲑⲟϥ', 'ⲁⲛⲟⲛ'],
          explanation: 'ⲁⲛⲟⲕ (anok) means "I" (independent pronoun)'
        },
        {
          id: 'ex-6-1-2',
          type: 'matching',
          question: 'Match the pronouns',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲁⲛⲟⲕ', english: 'I' },
            { coptic: 'ⲛ̀ⲑⲟⲕ', english: 'you (m)' },
            { coptic: 'ⲛ̀ⲑⲟ', english: 'you (f)' },
            { coptic: 'ⲛ̀ⲑⲟϥ', english: 'he' }
          ]
        },
        {
          id: 'ex-6-1-3',
          type: 'multiple_choice',
          question: 'What is "she" in Coptic?',
          correctAnswer: 'ⲛ̀ⲑⲟⲥ',
          options: ['ⲛ̀ⲑⲟⲥ', 'ⲛ̀ⲑⲟϥ', 'ⲛ̀ⲑⲟ', 'ⲁⲛⲟⲕ'],
          explanation: 'ⲛ̀ⲑⲟⲥ (nthos) means "she"'
        },
        {
          id: 'ex-6-1-4',
          type: 'translation',
          question: 'Translate: ⲁⲛⲟⲕ ⲡⲉ ⲡⲓⲣⲱⲙⲓ',
          questionCoptic: 'ⲁⲛⲟⲕ ⲡⲉ ⲡⲓⲣⲱⲙⲓ',
          correctAnswer: 'I am the man',
          options: ['I am the man', 'You are the man', 'He is the man', 'I am a man'],
          explanation: 'ⲁⲛⲟⲕ ⲡⲉ ⲡⲓⲣⲱⲙⲓ = I am the man (with definite article)'
        },
        {
          id: 'ex-6-1-5',
          type: 'multiple_choice',
          question: 'What does ⲛ̀ⲑⲟⲕ mean?',
          questionCoptic: 'ⲛ̀ⲑⲟⲕ',
          correctAnswer: 'you (male)',
          options: ['you (male)', 'I', 'he', 'we'],
          explanation: 'ⲛ̀ⲑⲟⲕ (nthok) means "you" when addressing a male'
        },
        {
          id: 'ex-6-1-6',
          type: 'translation',
          question: 'Translate: ⲛ̀ⲑⲟⲕ ⲡⲉ ⲡⲓⲥⲟⲛ',
          questionCoptic: 'ⲛ̀ⲑⲟⲕ ⲡⲉ ⲡⲓⲥⲟⲛ',
          correctAnswer: 'You are the brother',
          options: ['You are the brother', 'I am the brother', 'He is the brother', 'You are a brother'],
          explanation: 'ⲛ̀ⲑⲟⲕ ⲡⲉ ⲡⲓⲥⲟⲛ = You (male) are the brother'
        },
        {
          id: 'ex-6-1-7',
          type: 'multiple_choice',
          question: 'What is "you (feminine)" in Coptic?',
          correctAnswer: 'ⲛ̀ⲑⲟ',
          options: ['ⲛ̀ⲑⲟ', 'ⲛ̀ⲑⲟⲕ', 'ⲛ̀ⲑⲟⲥ', 'ⲁⲛⲟⲕ'],
          explanation: 'ⲛ̀ⲑⲟ (ntho) means "you" when addressing a female'
        },
        {
          id: 'ex-6-1-8',
          type: 'translation',
          question: 'Translate: ⲛ̀ⲑⲟⲥ ⲧⲉ ϯϩⲓⲙⲓ',
          questionCoptic: 'ⲛ̀ⲑⲟⲥ ⲧⲉ ϯϩⲓⲙⲓ',
          correctAnswer: 'She is the woman',
          options: ['She is the woman', 'You are the woman', 'I am the woman', 'She is a woman'],
          explanation: 'ⲛ̀ⲑⲟⲥ ⲧⲉ ϯϩⲓⲙⲓ = She is the woman (ϩⲓⲙⲓ not ⲥϩⲓⲙⲉ!)'
        },
        {
          id: 'ex-6-1-9',
          type: 'translation',
          question: 'Translate to Coptic: "You are a sister" (to a female)',
          correctAnswer: 'ⲛ̀ⲑⲟ ⲟⲩⲥⲱⲛⲓ ⲧⲉ',
          options: ['ⲛ̀ⲑⲟ ⲟⲩⲥⲱⲛⲓ ⲧⲉ', 'ⲛ̀ⲑⲟⲕ ⲟⲩⲥⲱⲛⲓ ⲧⲉ', 'ⲁⲛⲟⲕ ⲟⲩⲥⲱⲛⲓ ⲧⲉ', 'ⲛ̀ⲑⲟⲥ ⲟⲩⲥⲱⲛⲓ ⲧⲉ'],
          explanation: 'ⲛ̀ⲑⲟ ⲟⲩⲥⲱⲛⲓ ⲧⲉ = You (fem.) are a sister (ⲥⲱⲛⲓ not ⲥⲱⲛⲉ - Bohairic!)'
        },
        {
          id: 'ex-6-1-10',
          type: 'sentence_building',
          question: 'Build: "I am a mother"',
          correctAnswer: 'ⲁⲛⲟⲕ ⲟⲩⲙⲁⲩ ⲧⲉ',
          wordBank: ['ⲁⲛⲟⲕ', 'ⲟⲩⲙⲁⲩ', 'ⲧⲉ', 'ⲡⲉ'],
          explanation: 'ⲁⲛⲟⲕ ⲟⲩⲙⲁⲩ ⲧⲉ = I am a mother (ⲙⲁⲩ not ⲙⲁⲁⲩ - Bohairic!)'
        }
      ]
    },
    {
      id: 'lesson-6-2',
      unitId: 'unit-6',
      title: 'Plural Pronouns',
      description: 'we, you (plural), they',
      order: 2,
      xpReward: 20,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-6-2-1',
          type: 'multiple_choice',
          question: 'How do you say "we"?',
          correctAnswer: 'ⲁⲛⲟⲛ',
          options: ['ⲁⲛⲟⲛ', 'ⲛ̀ⲑⲱⲧⲉⲛ', 'ⲛ̀ⲑⲱⲟⲩ', 'ⲁⲛⲟⲕ'],
          explanation: 'ⲁⲛⲟⲛ (anon) means "we"'
        },
        {
          id: 'ex-6-2-2',
          type: 'matching',
          question: 'Match plural pronouns',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲁⲛⲟⲛ', english: 'we' },
            { coptic: 'ⲛ̀ⲑⲱⲧⲉⲛ', english: 'you (plural)' },
            { coptic: 'ⲛ̀ⲑⲱⲟⲩ', english: 'they' }
          ]
        },
        {
          id: 'ex-6-2-3',
          type: 'translation',
          question: 'Translate: ⲁⲛⲟⲛ ϩⲁⲛⲥⲛⲏⲟⲩ ⲛⲉ',
          questionCoptic: 'ⲁⲛⲟⲛ ϩⲁⲛⲥⲛⲏⲟⲩ ⲛⲉ',
          correctAnswer: 'We are brothers',
          options: ['We are brothers', 'You are brothers', 'They are brothers', 'We are the brothers'],
          explanation: 'ⲁⲛⲟⲛ ϩⲁⲛⲥⲛⲏⲟⲩ ⲛⲉ = We are brothers (ϩⲁⲛ- = indefinite plural)'
        },
        {
          id: 'ex-6-2-4',
          type: 'multiple_choice',
          question: 'What is "you (plural)" in Coptic?',
          correctAnswer: 'ⲛ̀ⲑⲱⲧⲉⲛ',
          options: ['ⲛ̀ⲑⲱⲧⲉⲛ', 'ⲁⲛⲟⲛ', 'ⲛ̀ⲑⲱⲟⲩ', 'ⲛ̀ⲑⲟⲕ'],
          explanation: 'ⲛ̀ⲑⲱⲧⲉⲛ (nthōten) means "you (plural)"'
        },
        {
          id: 'ex-6-2-5',
          type: 'translation',
          question: 'Translate: ⲛ̀ⲑⲱⲧⲉⲛ ϩⲁⲛϣⲏⲣⲓ ⲛⲉ',
          questionCoptic: 'ⲛ̀ⲑⲱⲧⲉⲛ ϩⲁⲛϣⲏⲣⲓ ⲛⲉ',
          correctAnswer: 'You are sons',
          options: ['You are sons', 'We are sons', 'They are sons', 'You are the sons'],
          explanation: 'ⲛ̀ⲑⲱⲧⲉⲛ ϩⲁⲛϣⲏⲣⲓ ⲛⲉ = You (plural) are sons (ϣⲏⲣⲓ not ⲥⲏⲣⲓ!)'
        },
        {
          id: 'ex-6-2-6',
          type: 'multiple_choice',
          question: 'What is "they" in Coptic?',
          correctAnswer: 'ⲛ̀ⲑⲱⲟⲩ',
          options: ['ⲛ̀ⲑⲱⲟⲩ', 'ⲁⲛⲟⲛ', 'ⲛ̀ⲑⲱⲧⲉⲛ', 'ⲛ̀ⲑⲟϥ'],
          explanation: 'ⲛ̀ⲑⲱⲟⲩ (nthōou) means "they"'
        },
        {
          id: 'ex-6-2-7',
          type: 'translation',
          question: 'Translate: ⲛ̀ⲑⲱⲟⲩ ⲛⲉ ⲛⲓϩⲓⲙⲓ',
          questionCoptic: 'ⲛ̀ⲑⲱⲟⲩ ⲛⲉ ⲛⲓϩⲓⲙⲓ',
          correctAnswer: 'They are the women',
          options: ['They are the women', 'We are the women', 'You are the women', 'They are women'],
          explanation: 'ⲛ̀ⲑⲱⲟⲩ ⲛⲉ ⲛⲓϩⲓⲙⲓ = They are the women (ϩⲓⲙⲓ not ϩⲓⲟⲙⲓ/ⲥϩⲓⲙⲉ!)'
        },
        {
          id: 'ex-6-2-8',
          type: 'fill_blank',
          question: 'Complete: ___ ⲛⲉ ⲛⲓⲣⲱⲙⲓ = They are the men',
          correctAnswer: 'ⲛ̀ⲑⲱⲟⲩ',
          options: ['ⲛ̀ⲑⲱⲟⲩ', 'ⲁⲛⲟⲛ', 'ⲛ̀ⲑⲱⲧⲉⲛ', 'ⲛ̀ⲑⲟϥ'],
          explanation: 'ⲛ̀ⲑⲱⲟⲩ means "they"'
        },
        {
          id: 'ex-6-2-9',
          type: 'sentence_building',
          question: 'Build: "We are women"',
          correctAnswer: 'ⲁⲛⲟⲛ ϩⲁⲛϩⲓⲙⲓ ⲛⲉ',
          wordBank: ['ⲁⲛⲟⲛ', 'ϩⲁⲛϩⲓⲙⲓ', 'ⲛⲉ', 'ⲧⲉ'],
          explanation: 'ⲁⲛⲟⲛ ϩⲁⲛϩⲓⲙⲓ ⲛⲉ = We are women (ⲛⲉ = plural copula)'
        },
        {
          id: 'ex-6-2-10',
          type: 'translation',
          question: 'Translate to Coptic: "You (plural) are the brothers"',
          correctAnswer: 'ⲛ̀ⲑⲱⲧⲉⲛ ⲛⲉ ⲛⲓⲥⲛⲏⲟⲩ',
          options: ['ⲛ̀ⲑⲱⲧⲉⲛ ⲛⲉ ⲛⲓⲥⲛⲏⲟⲩ', 'ⲁⲛⲟⲛ ⲛⲉ ⲛⲓⲥⲛⲏⲟⲩ', 'ⲛ̀ⲑⲱⲟⲩ ⲛⲉ ⲛⲓⲥⲛⲏⲟⲩ', 'ⲛ̀ⲑⲱⲧⲉⲛ ϩⲁⲛⲥⲛⲏⲟⲩ ⲛⲉ'],
          explanation: 'ⲛ̀ⲑⲱⲧⲉⲛ ⲛⲉ ⲛⲓⲥⲛⲏⲟⲩ = You (plural) are the brothers'
        }
      ]
    },
    {
      id: 'lesson-6-3',
      unitId: 'unit-6',
      title: 'Pronoun Review & Practice',
      description: 'Practice all personal pronouns',
      order: 3,
      xpReward: 20,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-6-3-1',
          type: 'matching',
          question: 'Match all pronouns',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲁⲛⲟⲕ', english: 'I' },
            { coptic: 'ⲛ̀ⲑⲟⲕ', english: 'you (m)' },
            { coptic: 'ⲛ̀ⲑⲟ', english: 'you (f)' },
            { coptic: 'ⲛ̀ⲑⲟϥ', english: 'he' }
          ]
        },
        {
          id: 'ex-6-3-2',
          type: 'matching',
          question: 'Match more pronouns',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲛ̀ⲑⲟⲥ', english: 'she' },
            { coptic: 'ⲁⲛⲟⲛ', english: 'we' },
            { coptic: 'ⲛ̀ⲑⲱⲧⲉⲛ', english: 'you (pl)' },
            { coptic: 'ⲛ̀ⲑⲱⲟⲩ', english: 'they' }
          ]
        },
        {
          id: 'ex-6-3-3',
          type: 'translation',
          question: 'Translate: ⲁⲛⲟⲕ ⲟⲩⲙⲁⲑⲏⲧⲏⲥ ⲡⲉ',
          questionCoptic: 'ⲁⲛⲟⲕ ⲟⲩⲙⲁⲑⲏⲧⲏⲥ ⲡⲉ',
          correctAnswer: 'I am a student',
          options: ['I am a student', 'You are a student', 'He is a student', 'I am the student'],
          explanation: 'ⲁⲛⲟⲕ ⲟⲩⲙⲁⲑⲏⲧⲏⲥ ⲡⲉ = I am a student (ⲙⲁⲑⲏⲧⲏⲥ = Greek loanword "disciple/student")'
        },
        {
          id: 'ex-6-3-4',
          type: 'sentence_building',
          question: 'Build: "He is the father"',
          correctAnswer: 'ⲛ̀ⲑⲟϥ ⲡⲉ ⲫⲓⲱⲧ',
          wordBank: ['ⲛ̀ⲑⲟϥ', 'ⲡⲉ', 'ⲫⲓⲱⲧ', 'ⲁⲛⲟⲕ'],
          explanation: 'ⲛ̀ⲑⲟϥ ⲡⲉ ⲫⲓⲱⲧ = He is the father (ⲫⲓⲱⲧ = Π→Φ before vowel)'
        },
        {
          id: 'ex-6-3-5',
          type: 'translation',
          question: 'Translate: ⲛ̀ⲑⲟⲥ ⲟⲩϩⲓⲙⲓ ⲧⲉ',
          questionCoptic: 'ⲛ̀ⲑⲟⲥ ⲟⲩϩⲓⲙⲓ ⲧⲉ',
          correctAnswer: 'She is a woman',
          options: ['She is a woman', 'She is the woman', 'You are a woman', 'I am a woman'],
          explanation: 'ⲛ̀ⲑⲟⲥ ⲟⲩϩⲓⲙⲓ ⲧⲉ = She is a woman (ϩⲓⲙⲓ = Bohairic, not ⲥϩⲓⲙⲉ Sahidic!)'
        },
        {
          id: 'ex-6-3-6',
          type: 'sentence_building',
          question: 'Build: "We are the brothers"',
          correctAnswer: 'ⲁⲛⲟⲛ ⲛⲉ ⲛⲓⲥⲛⲏⲟⲩ',
          wordBank: ['ⲁⲛⲟⲛ', 'ⲛⲉ', 'ⲛⲓⲥⲛⲏⲟⲩ', 'ϩⲁⲛⲥⲛⲏⲟⲩ'],
          explanation: 'ⲁⲛⲟⲛ ⲛⲉ ⲛⲓⲥⲛⲏⲟⲩ = We are the brothers (ⲛⲉ = plural copula)'
        },
        {
          id: 'ex-6-3-7',
          type: 'translation',
          question: 'Translate: ⲛ̀ⲑⲱⲧⲉⲛ ⲛⲓⲁⲗⲟⲩ ⲛⲉ',
          questionCoptic: 'ⲛ̀ⲑⲱⲧⲉⲛ ⲛⲓⲁⲗⲟⲩ ⲛⲉ',
          correctAnswer: 'You are the boys',
          options: ['You are the boys', 'We are the boys', 'They are the boys', 'You are boys'],
          explanation: 'ⲛ̀ⲑⲱⲧⲉⲛ ⲛⲓⲁⲗⲟⲩ ⲛⲉ = You (plural) are the boys'
        },
        {
          id: 'ex-6-3-8',
          type: 'fill_blank',
          question: 'Complete: ___ ϩⲁⲛϩⲓⲙⲓ ⲛⲉ = They are women',
          correctAnswer: 'ⲛ̀ⲑⲱⲟⲩ',
          options: ['ⲛ̀ⲑⲱⲟⲩ', 'ⲁⲛⲟⲛ', 'ⲛ̀ⲑⲱⲧⲉⲛ', 'ⲛ̀ⲑⲟⲥ'],
          explanation: 'ⲛ̀ⲑⲱⲟⲩ ϩⲁⲛϩⲓⲙⲓ ⲛⲉ = They are women'
        },
        {
          id: 'ex-6-3-9',
          type: 'multiple_choice',
          question: 'Which pronoun is used in "Our Father" (ⲡⲉⲛⲓⲱⲧ)?',
          correctAnswer: 'ⲁⲛⲟⲛ',
          options: ['ⲁⲛⲟⲛ', 'ⲁⲛⲟⲕ', 'ⲛ̀ⲑⲱⲧⲉⲛ', 'ⲛ̀ⲑⲱⲟⲩ'],
          explanation: 'ⲡⲉⲛⲓⲱⲧ = "our father" (ⲡⲉⲛ- = "our", from ⲁⲛⲟⲛ "we")'
        },
        {
          id: 'ex-6-3-10',
          type: 'translation',
          question: 'Translate to Coptic: "She is a daughter"',
          correctAnswer: 'ⲛ̀ⲑⲟⲥ ⲟⲩϣⲉⲣⲓ ⲧⲉ',
          options: ['ⲛ̀ⲑⲟⲥ ⲟⲩϣⲉⲣⲓ ⲧⲉ', 'ⲛ̀ⲑⲟϥ ⲟⲩϣⲏⲣⲓ ⲡⲉ', 'ⲁⲛⲟⲕ ⲟⲩϣⲉⲣⲓ ⲧⲉ', 'ⲛ̀ⲑⲟ ⲟⲩϣⲉⲣⲓ ⲧⲉ'],
          explanation: 'ⲛ̀ⲑⲟⲥ ⲟⲩϣⲉⲣⲓ ⲧⲉ = She is a daughter (ϣⲉⲣⲓ not ⲥⲉⲣⲓ - use ϣ not ⲥ!)'
        }
      ]
    },
    {
      id: 'lesson-6-4',
      unitId: 'unit-6',
      title: 'Pronoun Forms in Different Contexts',
      description: 'Emphatic forms, pronouns after prepositions, special usage',
      order: 4,
      xpReward: 25,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-6-4-1',
          type: 'multiple_choice',
          question: 'Which is the emphatic form \"I myself\"?',
          correctAnswer: 'ⲁⲛⲟⲕ ϩⲱ',
          options: ['ⲁⲛⲟⲕ ϩⲱ', 'ⲁⲛⲟⲕ ⲙ̀ⲙⲓⲛ ⲙ̀ⲙⲟⲓ', 'ⲁⲛⲟⲕ ⲡⲉ', 'ⲁⲛⲟⲕ ⲟⲩⲁⲧ'],
          explanation: 'ⲁⲛⲟⲕ ϩⲱ = I myself (emphatic form using ϩⲱ particle)'
        },
        {
          id: 'ex-6-4-2',
          type: 'matching',
          question: 'Match emphatic pronouns',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲁⲛⲟⲕ ϩⲱ', english: 'I myself' },
            { coptic: 'ⲛ̀ⲑⲟⲕ ϩⲱⲕ', english: 'you yourself (m)' },
            { coptic: 'ⲛ̀ⲑⲟⲥ ϩⲱⲥ', english: 'she herself' },
            { coptic: 'ⲁⲛⲟⲛ ϩⲱⲛ', english: 'we ourselves' }
          ]
        },
        {
          id: 'ex-6-4-3',
          type: 'translation',
          question: 'Translate: ⲁⲛⲟⲕ ⲙ̀ⲙⲓⲛ ⲙ̀ⲙⲟⲓ ⲁⲓⲛⲁⲩ',
          questionCoptic: 'ⲁⲛⲟⲕ ⲙ̀ⲙⲓⲛ ⲙ̀ⲙⲟⲓ ⲁⲓⲛⲁⲩ',
          correctAnswer: 'I myself saw (it)',
          options: ['I myself saw (it)', 'I see myself', 'I will see myself', 'Myself I saw'],
          explanation: 'ⲁⲛⲟⲕ ⲙ̀ⲙⲓⲛ ⲙ̀ⲙⲟⲓ ⲁⲓⲛⲁⲩ = I by myself saw (emphatic construction)'
        },
        {
          id: 'ex-6-4-4',
          type: 'fill_blank',
          question: 'Complete pronoun after preposition: ⲛⲉⲙ ___ = with me',
          correctAnswer: 'ⲏⲓ',
          options: ['ⲏⲓ', 'ⲁⲛⲟⲕ', 'ⲙⲟⲓ', 'ⲛⲏⲓ'],
          explanation: 'ⲛⲉⲙ ⲏⲓ = with me (ⲏⲓ = prepositional suffix for \"me\" after ⲛⲉⲙ)'
        },
        {
          id: 'ex-6-4-5',
          type: 'matching',
          question: 'Match prepositional suffixes with ⲛⲉⲙ- (with)',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲛⲉⲙ ⲏⲓ', english: 'with me' },
            { coptic: 'ⲛⲉⲙⲁⲕ', english: 'with you (m)' },
            { coptic: 'ⲛⲉⲙⲁϥ', english: 'with him' },
            { coptic: 'ⲛⲉⲙⲱⲧⲉⲛ', english: 'with you (pl)' }
          ]
        },
        {
          id: 'ex-6-4-6',
          type: 'translation',
          question: 'Translate: ⲉ̀ⲣⲟⲕ (after preposition ⲉ̀)',
          questionCoptic: 'ⲉ̀ⲣⲟⲕ',
          correctAnswer: 'to you (m) / at you',
          options: ['to you (m) / at you', 'from you', 'you are', 'your'],
          explanation: 'ⲉ̀ⲣⲟⲕ = to/at you (masc.) - ⲉ̀- preposition + ⲣⲟⲕ suffix pronoun'
        },
        {
          id: 'ex-6-4-7',
          type: 'sentence_building',
          question: 'Build: \"for us\" (ⲉⲑⲃⲉ = for/because of)',
          correctAnswer: 'ⲉⲑⲃⲏⲧⲉⲛ',
          wordBank: ['ⲉⲑⲃⲉ', 'ⲉⲑⲃⲏⲧⲉⲛ', 'ⲁⲛⲟⲛ', 'ⲛⲉⲙⲱⲧⲉⲛ'],
          explanation: 'ⲉⲑⲃⲏⲧⲉⲛ = for/because of us (ⲉⲑⲃⲉ- + ⲏⲧⲉⲛ suffix = ⲉⲑⲃⲏⲧⲉⲛ)'
        },
        {
          id: 'ex-6-4-8',
          type: 'multiple_choice',
          question: 'How do you say \"in them\"? (ϧⲉⲛ = in)',
          correctAnswer: 'ⲛ̀ϧⲏⲧⲟⲩ',
          options: ['ⲛ̀ϧⲏⲧⲟⲩ', 'ϧⲉⲛ ⲛ̀ⲑⲱⲟⲩ', 'ϧⲉⲛⲟⲩ', 'ⲛ̀ⲑⲱⲟⲩ'],
          explanation: 'ⲛ̀ϧⲏⲧⲟⲩ = in them (ϧⲉⲛ becomes ⲛ̀ϧⲏⲧ- before suffix ⲟⲩ)'
        },
        {
          id: 'ex-6-4-9',
          type: 'translation',
          question: 'Translate: ϩⲁⲣⲟϥ (ϩⲁ- = under/with)',
          questionCoptic: 'ϩⲁⲣⲟϥ',
          correctAnswer: 'with him / under him',
          options: ['with him / under him', 'from him', 'he is', 'his'],
          explanation: 'ϩⲁⲣⲟϥ = with/under him (ϩⲁ- + ⲣⲟϥ suffix)'
        },
        {
          id: 'ex-6-4-10',
          type: 'matching',
          question: 'Match pronoun doubling patterns',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲁⲛⲟⲕ ⲇⲉ ⲁⲛⲟⲕ', english: 'But as for me (doubled)' },
            { coptic: 'ⲛ̀ⲑⲟϥ ⲅⲁⲣ', english: 'For he (particle)' },
            { coptic: 'ⲁⲛⲟⲛ ⲟⲛ', english: 'We also/too' },
            { coptic: 'ⲛ̀ⲑⲱⲟⲩ ⲙ̀ⲙⲓⲛ ⲙ̀ⲙⲱⲟⲩ', english: 'They themselves' }
          ]
        }
      ]
    }
  ]
};

export default unit6;
