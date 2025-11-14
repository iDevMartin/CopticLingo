import { Unit } from '../../types';

// UNIT 13: IMPERATIVE MOOD
// Corrected for Bohairic dialect consistency
// Based on OUTLINE OF BOHAIRIC COPTIC MORPHOLOGY

const unit13: Unit = {
  id: 'unit-13',
  title: 'Imperative Mood',
  description: 'Learn commands and requests in Coptic',
  order: 13,
  color: '#FF4B4B',
  lessons: [
    {
      id: 'lesson-13-1',
      unitId: 'unit-13',
      title: 'Positive Commands',
      description: 'Use ⲁⲣⲓ- and ⲙⲁⲣⲉⲛ- for commands',
      order: 1,
      xpReward: 25,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-13-1-1',
          type: 'multiple_choice',
          question: 'What is the imperative prefix for singular commands?',
          correctAnswer: 'ⲁⲣⲓ-',
          options: ['ⲁⲣⲓ-', 'ⲙⲁⲣⲉⲛ-', 'ⲙ̀ⲡⲉⲣ-', 'ϣⲁ-'],
          explanation: 'ⲁⲣⲓ- (ari-) is used for singular commands "do [verb]!"'
        },
        {
          id: 'ex-13-1-2',
          type: 'translation',
          question: 'Translate: ⲁⲣⲓⲙⲟϣⲓ',
          questionCoptic: 'ⲁⲣⲓⲙⲟϣⲓ',
          correctAnswer: 'Walk! / Go!',
          options: ['Walk! / Go!', 'Do not walk', 'I walk', 'He walks'],
          explanation: 'ⲁⲣⲓⲙⲟϣⲓ = ⲁⲣⲓ (do!) + ⲙⲟϣⲓ (walk) = "Walk!"'
        },
        {
          id: 'ex-13-1-3',
          type: 'sentence_building',
          question: 'Build: "Listen!" (ⲥⲱⲧⲙ)',
          correctAnswer: 'ⲁⲣⲓⲥⲱⲧⲙ',
          wordBank: ['ⲁⲣⲓ', 'ⲥⲱⲧⲙ', 'ⲙⲁⲣⲉⲛ', 'ⲙ̀ⲡⲉⲣ'],
          explanation: 'ⲁⲣⲓⲥⲱⲧⲙ = ⲁⲣⲓ (do!) + ⲥⲱⲧⲙ (listen/hear)'
        },
        {
          id: 'ex-13-1-4',
          type: 'multiple_choice',
          question: 'What does ⲁⲣⲓϩⲙⲟⲥ mean?',
          questionCoptic: 'ⲁⲣⲓϩⲙⲟⲥ',
          correctAnswer: 'Sit!',
          options: ['Sit!', 'Stand!', 'Come!', 'Go!'],
          explanation: 'ⲁⲣⲓϩⲙⲟⲥ = ⲁⲣⲓ (do!) + ϩⲙⲟⲥ (sit) = "Sit!"'
        },
        {
          id: 'ex-13-1-5',
          type: 'multiple_choice',
          question: 'What is the imperative prefix for plural/respectful commands?',
          correctAnswer: 'ⲙⲁⲣⲉⲛ-',
          options: ['ⲙⲁⲣⲉⲛ-', 'ⲁⲣⲓ-', 'ⲙ̀ⲡⲉⲣ-', 'ϣⲁ-'],
          explanation: 'ⲙⲁⲣⲉⲛ- (maren-) is used for "let us" or plural commands'
        },
        {
          id: 'ex-13-1-6',
          type: 'translation',
          question: 'Translate: ⲙⲁⲣⲉⲛϣⲉⲛⲓ',
          questionCoptic: 'ⲙⲁⲣⲉⲛϣⲉⲛⲓ',
          correctAnswer: 'Let us go',
          options: ['Let us go', 'Go!', 'We go', 'They go'],
          explanation: 'ⲙⲁⲣⲉⲛϣⲉⲛⲓ = ⲙⲁⲣⲉⲛ (let us) + ϣⲉⲛⲓ (go) = "Let us go"'
        },
        {
          id: 'ex-13-1-7',
          type: 'sentence_building',
          question: 'Build: "Let us eat"',
          correctAnswer: 'ⲙⲁⲣⲉⲛⲟⲩⲱⲙ',
          wordBank: ['ⲙⲁⲣⲉⲛ', 'ⲟⲩⲱⲙ', 'ⲁⲣⲓ', 'ϣⲉⲛⲓ'],
          explanation: 'ⲙⲁⲣⲉⲛⲟⲩⲱⲙ = ⲙⲁⲣⲉⲛ (let us) + ⲟⲩⲱⲙ (eat)'
        },
        {
          id: 'ex-13-1-8',
          type: 'matching',
          question: 'Match commands',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲁⲣⲓϣⲉⲛⲓ', english: 'Go!' },
            { coptic: 'ⲁⲣⲓⲓ̀', english: 'Come!' },
            { coptic: 'ⲁⲣⲓⲟⲩⲱⲙ', english: 'Eat!' },
            { coptic: 'ⲁⲣⲓⲥⲱ', english: 'Drink!' }
          ]
        },
        {
          id: 'ex-13-1-9',
          type: 'translation',
          question: 'Translate to Coptic: "Speak!" (ⲥⲁϫⲓ)',
          correctAnswer: 'ⲁⲣⲓⲥⲁϫⲓ',
          options: ['ⲁⲣⲓⲥⲁϫⲓ', 'ⲙⲁⲣⲉⲛⲥⲁϫⲓ', 'ⲙ̀ⲡⲉⲣⲥⲁϫⲓ', 'ϣⲁⲣⲉⲥⲁϫⲓ'],
          explanation: 'ⲁⲣⲓⲥⲁϫⲓ = ⲁⲣⲓ (do!) + ⲥⲁϫⲓ (speak)'
        },
        {
          id: 'ex-13-1-10',
          type: 'multiple_choice',
          question: 'What does ⲙⲁⲣⲉⲛⲥⲱⲧⲙ mean?',
          questionCoptic: 'ⲙⲁⲣⲉⲛⲥⲱⲧⲙ',
          correctAnswer: 'Let us listen',
          options: ['Let us listen', 'Listen!', 'We listen', 'Hear!'],
          explanation: 'ⲙⲁⲣⲉⲛⲥⲱⲧⲙ = ⲙⲁⲣⲉⲛ (let us) + ⲥⲱⲧⲙ (hear/listen)'
        }
      ]
    },
    {
      id: 'lesson-13-2',
      unitId: 'unit-13',
      title: 'Negative Commands',
      description: 'Use ⲙ̀ⲡⲉⲣ- for prohibitions',
      order: 2,
      xpReward: 25,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-13-2-1',
          type: 'multiple_choice',
          question: 'What is the negative imperative prefix?',
          correctAnswer: 'ⲙ̀ⲡⲉⲣ-',
          options: ['ⲙ̀ⲡⲉⲣ-', 'ⲁⲣⲓ-', 'ⲙⲁⲣⲉⲛ-', 'ⲙⲉⲛ-'],
          explanation: 'ⲙ̀ⲡⲉⲣ- (m\'per-) means "do not" for negative commands'
        },
        {
          id: 'ex-13-2-2',
          type: 'translation',
          question: 'Translate: ⲙ̀ⲡⲉⲣϣⲉⲛⲓ',
          questionCoptic: 'ⲙ̀ⲡⲉⲣϣⲉⲛⲓ',
          correctAnswer: 'Do not go!',
          options: ['Do not go!', 'Go!', 'We do not go', 'Let us not go'],
          explanation: 'ⲙ̀ⲡⲉⲣϣⲉⲛⲓ = ⲙ̀ⲡⲉⲣ (do not) + ϣⲉⲛⲓ (go)'
        },
        {
          id: 'ex-13-2-3',
          type: 'sentence_building',
          question: 'Build: "Do not speak!"',
          correctAnswer: 'ⲙ̀ⲡⲉⲣⲥⲁϫⲓ',
          wordBank: ['ⲙ̀ⲡⲉⲣ', 'ⲥⲁϫⲓ', 'ⲁⲣⲓ', 'ⲙⲁⲣⲉⲛ'],
          explanation: 'ⲙ̀ⲡⲉⲣⲥⲁϫⲓ = ⲙ̀ⲡⲉⲣ (do not) + ⲥⲁϫⲓ (speak)'
        },
        {
          id: 'ex-13-2-4',
          type: 'multiple_choice',
          question: 'What does ⲙ̀ⲡⲉⲣⲟⲩⲱⲙ mean?',
          questionCoptic: 'ⲙ̀ⲡⲉⲣⲟⲩⲱⲙ',
          correctAnswer: 'Do not eat!',
          options: ['Do not eat!', 'Eat!', 'We do not eat', 'Let us not eat'],
          explanation: 'ⲙ̀ⲡⲉⲣⲟⲩⲱⲙ = ⲙ̀ⲡⲉⲣ (do not) + ⲟⲩⲱⲙ (eat)'
        },
        {
          id: 'ex-13-2-5',
          type: 'matching',
          question: 'Match negative commands',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲙ̀ⲡⲉⲣϣⲉⲛⲓ', english: 'Do not go!' },
            { coptic: 'ⲙ̀ⲡⲉⲣⲥⲱⲧⲙ', english: 'Do not listen!' },
            { coptic: 'ⲙ̀ⲡⲉⲣⲛⲁⲩ', english: 'Do not look!' },
            { coptic: 'ⲙ̀ⲡⲉⲣⲥⲱ', english: 'Do not drink!' }
          ]
        },
        {
          id: 'ex-13-2-6',
          type: 'fill_blank',
          question: 'Complete: ___ ⲙⲟϣⲓ = Do not walk!',
          correctAnswer: 'ⲙ̀ⲡⲉⲣ',
          options: ['ⲙ̀ⲡⲉⲣ', 'ⲁⲣⲓ', 'ⲙⲁⲣⲉⲛ', 'ϣⲁ'],
          explanation: 'ⲙ̀ⲡⲉⲣ is the negative imperative prefix'
        },
        {
          id: 'ex-13-2-7',
          type: 'translation',
          question: 'Translate to Coptic: "Do not sit!"',
          correctAnswer: 'ⲙ̀ⲡⲉⲣϩⲙⲟⲥ',
          options: ['ⲙ̀ⲡⲉⲣϩⲙⲟⲥ', 'ⲁⲣⲓϩⲙⲟⲥ', 'ⲙⲁⲣⲉⲛϩⲙⲟⲥ', 'ⲙⲉⲛϩⲙⲟⲥ'],
          explanation: 'ⲙ̀ⲡⲉⲣϩⲙⲟⲥ = ⲙ̀ⲡⲉⲣ (do not) + ϩⲙⲟⲥ (sit)'
        },
        {
          id: 'ex-13-2-8',
          type: 'multiple_choice',
          question: 'How do you say "Do not come!"?',
          correctAnswer: 'ⲙ̀ⲡⲉⲣⲓ̀',
          options: ['ⲙ̀ⲡⲉⲣⲓ̀', 'ⲁⲣⲓⲓ̀', 'ⲙⲁⲣⲉⲛⲓ̀', 'ⲙⲉⲛⲓ̀'],
          explanation: 'ⲙ̀ⲡⲉⲣⲓ̀ = ⲙ̀ⲡⲉⲣ (do not) + ⲓ̀ (come)'
        },
        {
          id: 'ex-13-2-9',
          type: 'sentence_building',
          question: 'Build: "Do not write!" (ⲥϧⲁⲓ)',
          correctAnswer: 'ⲙ̀ⲡⲉⲣⲥϧⲁⲓ',
          wordBank: ['ⲙ̀ⲡⲉⲣ', 'ⲥϧⲁⲓ', 'ⲁⲣⲓ', 'ⲛⲁⲩ'],
          explanation: 'ⲙ̀ⲡⲉⲣⲥϧⲁⲓ = ⲙ̀ⲡⲉⲣ (do not) + ⲥϧⲁⲓ (write)'
        },
        {
          id: 'ex-13-2-10',
          type: 'matching',
          question: 'Match positive and negative commands',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲁⲣⲓϣⲉⲛⲓ', english: 'Go!' },
            { coptic: 'ⲙ̀ⲡⲉⲣϣⲉⲛⲓ', english: 'Do not go!' },
            { coptic: 'ⲁⲣⲓⲥⲁϫⲓ', english: 'Speak!' },
            { coptic: 'ⲙ̀ⲡⲉⲣⲥⲁϫⲓ', english: 'Do not speak!' }
          ]
        }
      ]
    },
    {
      id: 'lesson-13-3',
      unitId: 'unit-13',
      title: 'Polite Requests',
      description: 'Make polite commands with ⲡⲁⲣⲁⲕⲁⲗⲓ',
      order: 3,
      xpReward: 25,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-13-3-1',
          type: 'multiple_choice',
          question: 'What word makes commands more polite?',
          correctAnswer: 'ⲡⲁⲣⲁⲕⲁⲗⲓ',
          options: ['ⲡⲁⲣⲁⲕⲁⲗⲓ', 'ⲁⲣⲓ', 'ⲙ̀ⲡⲉⲣ', 'ⲙⲁⲣⲉⲛ'],
          explanation: 'ⲡⲁⲣⲁⲕⲁⲗⲓ (parakali) = "please" (from Greek παρακαλῶ)'
        },
        {
          id: 'ex-13-3-2',
          type: 'translation',
          question: 'Translate: ⲁⲣⲓϣⲉⲛⲓ ⲡⲁⲣⲁⲕⲁⲗⲓ',
          questionCoptic: 'ⲁⲣⲓϣⲉⲛⲓ ⲡⲁⲣⲁⲕⲁⲗⲓ',
          correctAnswer: 'Please go',
          options: ['Please go', 'Go!', 'Do not go', 'Let us go'],
          explanation: 'ⲁⲣⲓϣⲉⲛⲓ ⲡⲁⲣⲁⲕⲁⲗⲓ = "Go, please" or "Please go"'
        },
        {
          id: 'ex-13-3-3',
          type: 'sentence_building',
          question: 'Build: "Please sit" (polite)',
          correctAnswer: 'ⲁⲣⲓϩⲙⲟⲥ ⲡⲁⲣⲁⲕⲁⲗⲓ',
          wordBank: ['ⲁⲣⲓ', 'ϩⲙⲟⲥ', 'ⲡⲁⲣⲁⲕⲁⲗⲓ', 'ⲙ̀ⲡⲉⲣ'],
          explanation: 'ⲁⲣⲓϩⲙⲟⲥ ⲡⲁⲣⲁⲕⲁⲗⲓ = "Sit, please"'
        },
        {
          id: 'ex-13-3-4',
          type: 'multiple_choice',
          question: 'What does ⲁⲣⲓⲥⲱⲧⲙ ⲡⲁⲣⲁⲕⲁⲗⲓ mean?',
          questionCoptic: 'ⲁⲣⲓⲥⲱⲧⲙ ⲡⲁⲣⲁⲕⲁⲗⲓ',
          correctAnswer: 'Please listen',
          options: ['Please listen', 'Listen!', 'Do not listen', 'We listen'],
          explanation: 'ⲁⲣⲓⲥⲱⲧⲙ ⲡⲁⲣⲁⲕⲁⲗⲓ = "Listen, please"'
        },
        {
          id: 'ex-13-3-5',
          type: 'translation',
          question: 'Translate to Coptic: "Please speak"',
          correctAnswer: 'ⲁⲣⲓⲥⲁϫⲓ ⲡⲁⲣⲁⲕⲁⲗⲓ',
          options: ['ⲁⲣⲓⲥⲁϫⲓ ⲡⲁⲣⲁⲕⲁⲗⲓ', 'ⲙ̀ⲡⲉⲣⲥⲁϫⲓ', 'ⲙⲁⲣⲉⲛⲥⲁϫⲓ', 'ⲁⲣⲓⲥⲁϫⲓ'],
          explanation: 'ⲁⲣⲓⲥⲁϫⲓ ⲡⲁⲣⲁⲕⲁⲗⲓ = "Speak, please"'
        },
        {
          id: 'ex-13-3-6',
          type: 'matching',
          question: 'Match polite requests',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲁⲣⲓⲓ̀ ⲡⲁⲣⲁⲕⲁⲗⲓ', english: 'Please come' },
            { coptic: 'ⲁⲣⲓⲟⲩⲱⲙ ⲡⲁⲣⲁⲕⲁⲗⲓ', english: 'Please eat' },
            { coptic: 'ⲁⲣⲓⲥⲱ ⲡⲁⲣⲁⲕⲁⲗⲓ', english: 'Please drink' },
            { coptic: 'ⲁⲣⲓϩⲙⲟⲥ ⲡⲁⲣⲁⲕⲁⲗⲓ', english: 'Please sit' }
          ]
        },
        {
          id: 'ex-13-3-7',
          type: 'fill_blank',
          question: 'Complete: ⲁⲣⲓϣⲉⲛⲓ ___ = Please go',
          correctAnswer: 'ⲡⲁⲣⲁⲕⲁⲗⲓ',
          options: ['ⲡⲁⲣⲁⲕⲁⲗⲓ', 'ⲙ̀ⲡⲉⲣ', 'ⲙⲁⲣⲉⲛ', 'ⲛⲁⲕ'],
          explanation: 'ⲡⲁⲣⲁⲕⲁⲗⲓ = "please"'
        },
        {
          id: 'ex-13-3-8',
          type: 'sentence_building',
          question: 'Build: "Please write" (ⲥϧⲁⲓ)',
          correctAnswer: 'ⲁⲣⲓⲥϧⲁⲓ ⲡⲁⲣⲁⲕⲁⲗⲓ',
          wordBank: ['ⲁⲣⲓ', 'ⲥϧⲁⲓ', 'ⲡⲁⲣⲁⲕⲁⲗⲓ', 'ⲙ̀ⲡⲉⲣ'],
          explanation: 'ⲁⲣⲓⲥϧⲁⲓ ⲡⲁⲣⲁⲕⲁⲗⲓ = "Write, please"'
        },
        {
          id: 'ex-13-3-9',
          type: 'multiple_choice',
          question: 'Can ⲡⲁⲣⲁⲕⲁⲗⲓ be used with negative commands?',
          correctAnswer: 'Yes',
          options: ['Yes', 'No'],
          explanation: 'Yes! ⲙ̀ⲡⲉⲣϣⲉⲛⲓ ⲡⲁⲣⲁⲕⲁⲗⲓ = "Please do not go"'
        },
        {
          id: 'ex-13-3-10',
          type: 'translation',
          question: 'Translate: ⲙ̀ⲡⲉⲣⲥⲁϫⲓ ⲡⲁⲣⲁⲕⲁⲗⲓ',
          questionCoptic: 'ⲙ̀ⲡⲉⲣⲥⲁϫⲓ ⲡⲁⲣⲁⲕⲁⲗⲓ',
          correctAnswer: 'Please do not speak',
          options: ['Please do not speak', 'Speak please', 'Do not speak!', 'Let us not speak'],
          explanation: 'ⲙ̀ⲡⲉⲣⲥⲁϫⲓ ⲡⲁⲣⲁⲕⲁⲗⲓ = "Please do not speak" (polite prohibition)'
        }
      ]
    },
    {
      id: 'lesson-13-4',
      unitId: 'unit-13',
      title: 'Common Command Verbs',
      description: 'Practice frequently used imperative verbs',
      order: 4,
      xpReward: 25,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-13-4-1',
          type: 'matching',
          question: 'Match common commands',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲁⲣⲓϣⲉⲛⲓ', english: 'Go!' },
            { coptic: 'ⲁⲣⲓⲓ̀', english: 'Come!' },
            { coptic: 'ⲁⲣⲓⲛⲁⲩ', english: 'Look!/See!' },
            { coptic: 'ⲁⲣⲓϯ', english: 'Give!' }
          ]
        },
        {
          id: 'ex-13-4-2',
          type: 'translation',
          question: 'Translate: ⲁⲣⲓϯⲛⲁⲓ',
          questionCoptic: 'ⲁⲣⲓϯⲛⲁⲓ',
          correctAnswer: 'Give this!',
          options: ['Give this!', 'Take this!', 'Do this!', 'See this!'],
          explanation: 'ⲁⲣⲓϯⲛⲁⲓ = ⲁⲣⲓ (do!) + ϯ (give) + ⲛⲁⲓ (this)'
        },
        {
          id: 'ex-13-4-3',
          type: 'sentence_building',
          question: 'Build: "Read!" (ⲱϣ)',
          correctAnswer: 'ⲁⲣⲓⲱϣ',
          wordBank: ['ⲁⲣⲓ', 'ⲱϣ', 'ⲙ̀ⲡⲉⲣ', 'ⲙⲁⲣⲉⲛ'],
          explanation: 'ⲁⲣⲓⲱϣ = ⲁⲣⲓ (do!) + ⲱϣ (read)'
        },
        {
          id: 'ex-13-4-4',
          type: 'multiple_choice',
          question: 'What does ⲁⲣⲓⲕⲱϯ mean?',
          questionCoptic: 'ⲁⲣⲓⲕⲱϯ',
          correctAnswer: 'Turn around!',
          options: ['Turn around!', 'Stand up!', 'Run!', 'Jump!'],
          explanation: 'ⲁⲣⲓⲕⲱϯ = ⲁⲣⲓ (do!) + ⲕⲱϯ (turn)'
        },
        {
          id: 'ex-13-4-5',
          type: 'translation',
          question: 'Translate: ⲁⲣⲓⲟϩⲓ ⲉⲣⲁⲧ',
          questionCoptic: 'ⲁⲣⲓⲟϩⲓ ⲉⲣⲁⲧ',
          correctAnswer: 'Stand!',
          options: ['Stand!', 'Sit!', 'Walk!', 'Run!'],
          explanation: 'ⲁⲣⲓⲟϩⲓ ⲉⲣⲁⲧ = "Stand!" (lit. "stand upon" = stand up)'
        },
        {
          id: 'ex-13-4-6',
          type: 'matching',
          question: 'Match more commands',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲁⲣⲓⲱϣ', english: 'Read!' },
            { coptic: 'ⲁⲣⲓⲥϧⲁⲓ', english: 'Write!' },
            { coptic: 'ⲁⲣⲓⲟⲩⲱⲙ', english: 'Eat!' },
            { coptic: 'ⲁⲣⲓⲥⲱ', english: 'Drink!' }
          ]
        },
        {
          id: 'ex-13-4-7',
          type: 'fill_blank',
          question: 'Complete: ⲁⲣⲓ___ = Look!',
          correctAnswer: 'ⲛⲁⲩ',
          options: ['ⲛⲁⲩ', 'ⲥⲱⲧⲙ', 'ⲥⲁϫⲓ', 'ⲱϣ'],
          explanation: 'ⲁⲣⲓⲛⲁⲩ = ⲁⲣⲓ (do!) + ⲛⲁⲩ (see/look)'
        },
        {
          id: 'ex-13-4-8',
          type: 'sentence_building',
          question: 'Build: "Take!" (ϭⲓ)',
          correctAnswer: 'ⲁⲣⲓϭⲓ',
          wordBank: ['ⲁⲣⲓ', 'ϭⲓ', 'ϯ', 'ⲙ̀ⲡⲉⲣ'],
          explanation: 'ⲁⲣⲓϭⲓ = ⲁⲣⲓ (do!) + ϭⲓ (take)'
        },
        {
          id: 'ex-13-4-9',
          type: 'translation',
          question: 'Translate to Coptic: "Open!" (ⲁⲟⲩⲱⲛ)',
          correctAnswer: 'ⲁⲣⲓⲁⲟⲩⲱⲛ',
          options: ['ⲁⲣⲓⲁⲟⲩⲱⲛ', 'ⲙ̀ⲡⲉⲣⲁⲟⲩⲱⲛ', 'ⲙⲁⲣⲉⲛⲁⲟⲩⲱⲛ', 'ⲁⲟⲩⲱⲛ'],
          explanation: 'ⲁⲣⲓⲁⲟⲩⲱⲛ = ⲁⲣⲓ (do!) + ⲁⲟⲩⲱⲛ (open)'
        },
        {
          id: 'ex-13-4-10',
          type: 'matching',
          question: 'Match commands with objects',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲁⲣⲓⲱϣ ⲙⲡⲓϫⲱⲙ', english: 'Read the book!' },
            { coptic: 'ⲁⲣⲓⲥⲱ ⲙⲡⲓⲙⲱⲟⲩ', english: 'Drink the water!' },
            { coptic: 'ⲁⲣⲓⲛⲁⲩ ⲉⲫⲁⲓ', english: 'Look at this!' },
            { coptic: 'ⲁⲣⲓϯ ⲙⲡⲓⲱⲓⲕ', english: 'Give the bread!' }
          ]
        }
      ]
    }
  ]
};

export default unit13;
