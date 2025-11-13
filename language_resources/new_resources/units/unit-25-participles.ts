import { Unit } from '../../types';

// UNIT 25: PARTICIPLES & VERBAL NOUNS
// Verified for Bohairic dialect consistency
// Teaching present/perfect participles, active/passive forms

const unit25: Unit = {
  id: 'unit-25',
  title: 'Participles & Verbal Nouns',
  description: 'Learn verbal adjectives and noun forms of verbs',
  order: 25,
  color: '#FF4B4B',
  lessons: [
    {
      id: 'lesson-25-1',
      unitId: 'unit-25',
      title: 'Present Active Participle',
      description: 'Verbal adjectives describing ongoing action',
      order: 1,
      xpReward: 45,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-25-1-1',
          type: 'translation',
          question: 'Translate: ⲡⲓⲣⲉϥⲙⲟϣⲓ',
          questionCoptic: 'ⲡⲓⲣⲉϥⲙⲟϣⲓ',
          correctAnswer: 'The one who walks / the walker',
          options: ['The one who walks / the walker', 'The walking', 'He walks', 'To walk'],
          explanation: 'ⲡⲓⲣⲉϥⲙⲟϣⲓ = the walker (ⲣⲉϥ- = one who + ⲙⲟϣⲓ = walks) - Bohairic ⲙⲟϣⲓ not ⲙⲟⲟϣⲉ!'
        },
        {
          id: 'ex-25-1-2',
          type: 'multiple_choice',
          question: 'What does ⲣⲉϥ- create?',
          questionCoptic: 'ⲣⲉϥ-',
          correctAnswer: 'active participle (one who does)',
          options: ['active participle (one who does)', 'passive participle (one who is done to)', 'infinitive', 'past tense'],
          explanation: 'ⲣⲉϥ- (ref-) + verb creates "one who [verbs]" or "[verb]-er"'
        },
        {
          id: 'ex-25-1-3',
          type: 'matching',
          question: 'Match active participles',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲣⲉϥⲥ̀ϧⲁⲓ', english: 'writer' },
            { coptic: 'ⲣⲉϥⲥⲱⲧⲙ', english: 'listener/hearer' },
            { coptic: 'ⲣⲉϥⲧ̀ⲥⲁⲃⲟ', english: 'teacher' },
            { coptic: 'ⲣⲉϥⲙⲉⲛⲣⲉ', english: 'lover' }
          ]
        },
        {
          id: 'ex-25-1-4',
          type: 'translation',
          question: 'Translate: ϯⲣⲉϥⲧ̀ⲥⲁⲃⲟ',
          questionCoptic: 'ϯⲣⲉϥⲧ̀ⲥⲁⲃⲟ',
          correctAnswer: 'The (female) teacher',
          options: ['The (female) teacher', 'The teaching', 'She teaches', 'To teach'],
          explanation: 'ϯⲣⲉϥⲧ̀ⲥⲁⲃⲟ = the (female) teacher (ⲣⲉϥ- with feminine article ϯ)'
        },
        {
          id: 'ex-25-1-5',
          type: 'sentence_building',
          question: 'Build: "The ones who love God"',
          correctAnswer: 'ⲛⲓⲣⲉϥⲙⲉⲛⲣⲉ ⲙⲫϯ',
          wordBank: ['ⲛⲓ', 'ⲣⲉϥⲙⲉⲛⲣⲉ', 'ⲙ', 'ⲫϯ'],
          explanation: 'ⲛⲓⲣⲉϥⲙⲉⲛⲣⲉ ⲙⲫϯ = the lovers of God (plural participle) - Bohairic: ⲙⲉⲛⲣⲉ not ⲙⲉⲣⲓ, ⲫϯ not ⲫⲛⲟⲩϯ!'
        },
        {
          id: 'ex-25-1-6',
          type: 'multiple_choice',
          question: 'How do you say "the reader"?',
          correctAnswer: 'ⲡⲓⲣⲉϫⲱϣ',
          options: ['ⲡⲓⲣⲉϫⲱϣ', 'ⲡⲓⲱϣ', 'ⲡⲉⲧⲱϣ', 'ⲫⲏⲉⲧⲱϣ'],
          explanation: 'ⲡⲓⲣⲉϫⲱϣ = the reader (ⲣⲉϥ- + ⲱϣ "read")'
        },
        {
          id: 'ex-25-1-7',
          type: 'fill_blank',
          question: 'Complete: ⲡⲓ___ ⲛ̀ⲟⲩⲱⲓⲛⲓ = The light-bearer',
          correctAnswer: 'ⲣⲉϥϥⲁⲓ',
          options: ['ⲣⲉϥϥⲁⲓ', 'ϥⲁⲓ', 'ⲫⲁⲓ', 'ⲉⲧϥⲁⲓ'],
          explanation: 'ⲣⲉϥϥⲁⲓ = one who carries/bears (ⲣⲉϥ- + ϥⲁⲓ "carry")'
        },
        {
          id: 'ex-25-1-8',
          type: 'translation',
          question: 'Translate: ⲛⲓⲣⲉϥⲉⲣⲛⲟⲃⲓ ⲉⲩⲉⲙⲟⲩ',
          questionCoptic: 'ⲛⲓⲣⲉϥⲉⲣⲛⲟⲃⲓ ⲉⲩⲉⲙⲟⲩ',
          correctAnswer: 'The sinners will die',
          options: ['The sinners will die', 'The sins will die', 'Those who sin died', 'Sin causes death'],
          explanation: 'ⲛⲓⲣⲉϥⲉⲣⲛⲟⲃⲓ = the sinners (ones who sin) + ⲉⲩⲉⲙⲟⲩ = they will die'
        }
      ]
    },
    {
      id: 'lesson-25-2',
      unitId: 'unit-25',
      title: 'Perfect Active Participle',
      description: 'Verbal adjectives describing completed action',
      order: 2,
      xpReward: 45,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-25-2-1',
          type: 'translation',
          question: 'Translate: ⲫⲏⲉⲧⲁϥⲓ̀',
          questionCoptic: 'ⲫⲏⲉⲧⲁϥⲓ̀',
          correctAnswer: 'The one who came / he who came',
          options: ['The one who came / he who came', 'The one who comes', 'He came', 'Coming'],
          explanation: 'ⲫⲏⲉⲧⲁϥⲓ̀ = he who came (perfect participle: ⲉⲧ- + past tense) - Bohairic ⲓ̀ not ⲉⲓ!'
        },
        {
          id: 'ex-25-2-2',
          type: 'multiple_choice',
          question: 'What does ⲉⲧ- + past tense create?',
          correctAnswer: 'perfect participle (one who has done)',
          options: ['perfect participle (one who has done)', 'present participle', 'infinitive', 'imperative'],
          explanation: 'ⲉⲧ- (et-) + past tense = "one who has [verbed]" - completed action participle'
        },
        {
          id: 'ex-25-2-3',
          type: 'matching',
          question: 'Match perfect participles',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲉⲧⲁϥⲥⲱⲧⲙ', english: 'who heard' },
            { coptic: 'ⲉⲧⲁⲥⲛⲁⲩ', english: 'who saw (fem)' },
            { coptic: 'ⲉⲧⲁⲩϣⲉⲛⲓ', english: 'who went (pl)' },
            { coptic: 'ⲉⲧⲁⲓⲥ̀ϧⲁⲓ', english: 'who wrote (I)' }
          ]
        },
        {
          id: 'ex-25-2-4',
          type: 'translation',
          question: 'Translate: ⲑⲏⲉⲧⲁⲥⲙⲉⲛⲣⲉ ⲙⲙⲟⲓ',
          questionCoptic: 'ⲑⲏⲉⲧⲁⲥⲙⲉⲛⲣⲉ ⲙⲙⲟⲓ',
          correctAnswer: 'She who loved me',
          options: ['She who loved me', 'She who loves me', 'The one who loved her', 'Love for me'],
          explanation: 'ⲑⲏⲉⲧⲁⲥⲙⲉⲛⲣⲉ ⲙⲙⲟⲓ = she who loved me (feminine perfect participle) - Bohairic ⲙⲉⲛⲣⲉ not ⲙⲉⲣⲓ!'
        },
        {
          id: 'ex-25-2-5',
          type: 'sentence_building',
          question: 'Build: "Those who believed"',
          correctAnswer: 'ⲛⲏⲉⲧⲁⲩⲛⲁϩϯ',
          wordBank: ['ⲛⲏ', 'ⲉⲧ', 'ⲁⲩ', 'ⲛⲁϩϯ'],
          explanation: 'ⲛⲏⲉⲧⲁⲩⲛⲁϩϯ = those who believed (plural perfect participle)'
        },
        {
          id: 'ex-25-2-6',
          type: 'multiple_choice',
          question: 'How do you say "the one who taught us"?',
          correctAnswer: 'ⲫⲏⲉⲧⲁϥⲧ̀ⲥⲁⲃⲟⲛ',
          options: ['ⲫⲏⲉⲧⲁϥⲧ̀ⲥⲁⲃⲟⲛ', 'ⲡⲓⲣⲉϥⲧ̀ⲥⲁⲃⲟⲛ', 'ⲁϥⲧ̀ⲥⲁⲃⲟⲛ', 'ⲉϥⲧ̀ⲥⲁⲃⲟⲛ'],
          explanation: 'ⲫⲏⲉⲧⲁϥⲧ̀ⲥⲁⲃⲟⲛ = he who taught us (perfect participle with object suffix)'
        },
        {
          id: 'ex-25-2-7',
          type: 'fill_blank',
          question: 'Complete: ⲫϯ ⲫⲏ___ ⲙⲡⲓⲕⲟⲥⲙⲟⲥ = God who created the world',
          correctAnswer: 'ⲉⲧⲁϥⲑⲁⲙⲓⲟ',
          options: ['ⲉⲧⲁϥⲑⲁⲙⲓⲟ', 'ⲣⲉϥⲑⲁⲙⲓⲟ', 'ⲁϥⲑⲁⲙⲓⲟ', 'ⲉϥⲑⲁⲙⲓⲟ'],
          explanation: 'ⲉⲧⲁϥⲑⲁⲙⲓⲟ = who created (perfect participle) - Bohairic ⲫϯ not ⲫⲛⲟⲩϯ!'
        },
        {
          id: 'ex-25-2-8',
          type: 'translation',
          question: 'Translate: ⲛⲏⲉⲧⲁⲩⲥⲱⲧⲙ ⲁⲩⲛⲁϩϯ',
          questionCoptic: 'ⲛⲏⲉⲧⲁⲩⲥⲱⲧⲙ ⲁⲩⲛⲁϩϯ',
          correctAnswer: 'Those who heard believed',
          options: ['Those who heard believed', 'They heard and believed', 'Believers heard', 'Hearing, they believed'],
          explanation: 'ⲛⲏⲉⲧⲁⲩⲥⲱⲧⲙ = those who heard (perfect participle) + ⲁⲩⲛⲁϩϯ = they believed'
        }
      ]
    },
    {
      id: 'lesson-25-3',
      unitId: 'unit-25',
      title: 'Passive Participles',
      description: 'Verbal adjectives describing what is done',
      order: 3,
      xpReward: 45,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-25-3-1',
          type: 'translation',
          question: 'Translate: ⲡⲓⲥ̀ϧⲏⲟⲩⲧ',
          questionCoptic: 'ⲡⲓⲥ̀ϧⲏⲟⲩⲧ',
          correctAnswer: 'The written thing / what is written',
          options: ['The written thing / what is written', 'The writer', 'Writing', 'He wrote'],
          explanation: 'ⲡⲓⲥ̀ϧⲏⲟⲩⲧ = what is written (passive participle from ⲥ̀ϧⲁⲓ) - Bohairic ⲥ̀ϧⲁⲓ not ⲥϩⲁⲓ!'
        },
        {
          id: 'ex-25-3-2',
          type: 'multiple_choice',
          question: 'What is a passive participle?',
          correctAnswer: 'describes what is done or what has been done',
          options: ['describes what is done or what has been done', 'describes who does something', 'describes ongoing action', 'describes future action'],
          explanation: 'Passive participles describe the object/recipient of action: "what is [verbed]"'
        },
        {
          id: 'ex-25-3-3',
          type: 'matching',
          question: 'Match passive participles',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲥ̀ϧⲏⲟⲩⲧ', english: 'written' },
            { coptic: 'ⲫⲏⲉⲧⲟⲩⲁⲃ', english: 'sanctified/holy' },
            { coptic: 'ⲙⲉⲛⲣⲏⲧ', english: 'beloved' },
            { coptic: 'ⲛⲁⲩ', english: 'seen/visible' }
          ]
        },
        {
          id: 'ex-25-3-4',
          type: 'translation',
          question: 'Translate: ⲡⲉϫⲁϥ ⲙⲫϯ',
          questionCoptic: 'ⲡⲉϫⲁϥ ⲙⲫϯ',
          correctAnswer: 'What God said / God\'s word',
          options: ['What God said / God\'s word', 'God spoke', 'Speaking of God', 'God who speaks'],
          explanation: 'ⲡⲉϫⲁϥ = what was said + ⲙⲫϯ = of God (passive participle construction) - Bohairic ⲫϯ not ⲫⲛⲟⲩϯ!'
        },
        {
          id: 'ex-25-3-5',
          type: 'sentence_building',
          question: 'Build: "The beloved children"',
          correctAnswer: 'ⲛⲓϣⲏⲣⲓ ⲉⲧⲙⲉⲛⲣⲏⲧ',
          wordBank: ['ⲛⲓ', 'ϣⲏⲣⲓ', 'ⲉⲧⲙⲉⲛⲣⲏⲧ', 'ⲙⲉⲛⲣⲉ'],
          explanation: 'ⲛⲓϣⲏⲣⲓ ⲉⲧⲙⲉⲛⲣⲏⲧ = the beloved children (passive participle as adjective) - Bohairic ϣⲏⲣⲓ not ⲥⲏⲣⲓ!'
        },
        {
          id: 'ex-25-3-6',
          type: 'multiple_choice',
          question: 'How do you say "the chosen one"?',
          correctAnswer: 'ⲡⲓⲥⲱⲧⲡ',
          options: ['ⲡⲓⲥⲱⲧⲡ', 'ⲡⲓⲣⲉϥⲥⲱⲧⲡ', 'ⲫⲏⲉⲧⲁϥⲥⲱⲧⲡ', 'ⲉϥⲥⲱⲧⲡ'],
          explanation: 'ⲡⲓⲥⲱⲧⲡ = the chosen one (passive participle from ⲥⲱⲧⲡ "choose")'
        },
        {
          id: 'ex-25-3-7',
          type: 'fill_blank',
          question: 'Complete: ⲡⲓϣⲏⲣⲓ ⲉⲧ___ ⲙⲫϯ = The beloved son of God',
          correctAnswer: 'ⲙⲉⲛⲣⲏⲧ',
          options: ['ⲙⲉⲛⲣⲏⲧ', 'ⲙⲉⲛⲣⲉ', 'ⲣⲉϥⲙⲉⲛⲣⲉ', 'ⲁϥⲙⲉⲛⲣⲉ'],
          explanation: 'ⲙⲉⲛⲣⲏⲧ = beloved (passive participle from ⲙⲉⲛⲣⲉ) - Bohairic: ϣⲏⲣⲓ not ⲥⲏⲣⲓ, ⲫϯ not ⲫⲛⲟⲩϯ!'
        },
        {
          id: 'ex-25-3-8',
          type: 'translation',
          question: 'Translate: ⲡⲓⲥ̀ϧⲏⲟⲩⲧ ϧⲉⲛ ⲡⲓⲛⲟⲙⲟⲥ',
          questionCoptic: 'ⲡⲓⲥ̀ϧⲏⲟⲩⲧ ϧⲉⲛ ⲡⲓⲛⲟⲙⲟⲥ',
          correctAnswer: 'What is written in the law',
          options: ['What is written in the law', 'The writer of the law', 'Writing the law', 'The lawgiver'],
          explanation: 'ⲡⲓⲥ̀ϧⲏⲟⲩⲧ = what is written + ϧⲉⲛ ⲡⲓⲛⲟⲙⲟⲥ = in the law'
        }
      ]
    },
    {
      id: 'lesson-25-4',
      unitId: 'unit-25',
      title: 'Verbal Nouns (Infinitives)',
      description: 'Nouns derived from verbs',
      order: 4,
      xpReward: 45,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-25-4-1',
          type: 'translation',
          question: 'Translate: ⲡⲓⲙⲟϣⲓ ⲛⲁⲛⲉϥ',
          questionCoptic: 'ⲡⲓⲙⲟϣⲓ ⲛⲁⲛⲉϥ',
          correctAnswer: 'Walking is good',
          options: ['Walking is good', 'The walker is good', 'Walk well', 'He walks well'],
          explanation: 'ⲡⲓⲙⲟϣⲓ = the walking (verbal noun/infinitive as subject) + ⲛⲁⲛⲉϥ = is good - Bohairic ⲙⲟϣⲓ not ⲙⲟⲟϣⲉ!'
        },
        {
          id: 'ex-25-4-2',
          type: 'multiple_choice',
          question: 'What is a verbal noun?',
          correctAnswer: 'a verb used as a noun (the act of [verb]-ing)',
          options: ['a verb used as a noun (the act of [verb]-ing)', 'a noun used as a verb', 'an adjective from a verb', 'a past tense form'],
          explanation: 'Verbal nouns (infinitives) are verb forms used as nouns: "the act of walking", "reading", etc.'
        },
        {
          id: 'ex-25-4-3',
          type: 'matching',
          question: 'Match verbal nouns',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲡⲓⲥ̀ϧⲁⲓ', english: 'the writing' },
            { coptic: 'ⲡⲓⲱⲛϧ', english: 'the living/life' },
            { coptic: 'ⲡⲓⲙⲟⲩ', english: 'the dying/death' },
            { coptic: 'ⲡⲓⲛⲁϩϯ', english: 'the believing/faith' }
          ]
        },
        {
          id: 'ex-25-4-4',
          type: 'translation',
          question: 'Translate: ϯⲟⲩⲱϣ ⲉⲥ̀ϧⲁⲓ',
          questionCoptic: 'ϯⲟⲩⲱϣ ⲉⲥ̀ϧⲁⲓ',
          correctAnswer: 'I want to write',
          options: ['I want to write', 'I want writing', 'I write wishes', 'Writing wants'],
          explanation: 'ϯⲟⲩⲱϣ = I want + ⲉⲥ̀ϧⲁⲓ = to write (infinitive as object) - Bohairic ⲥ̀ϧⲁⲓ not ⲥϩⲁⲓ!'
        },
        {
          id: 'ex-25-4-5',
          type: 'sentence_building',
          question: 'Build: "To love God is good"',
          correctAnswer: 'ⲡⲓⲙⲉⲛⲣⲉ ⲙⲫϯ ⲛⲁⲛⲉϥ',
          wordBank: ['ⲡⲓⲙⲉⲛⲣⲉ', 'ⲙⲫϯ', 'ⲛⲁⲛⲉϥ', 'ϯⲙⲉⲛⲣⲉ'],
          explanation: 'ⲡⲓⲙⲉⲛⲣⲉ ⲙⲫϯ = loving God (verbal noun + object) + ⲛⲁⲛⲉϥ = is good - Bohairic: ⲙⲉⲛⲣⲉ not ⲙⲉⲣⲓ, ⲫϯ not ⲫⲛⲟⲩϯ!'
        },
        {
          id: 'ex-25-4-6',
          type: 'multiple_choice',
          question: 'How do you say "the act of teaching"?',
          correctAnswer: 'ⲡⲓⲧ̀ⲥⲁⲃⲟ',
          options: ['ⲡⲓⲧ̀ⲥⲁⲃⲟ', 'ⲡⲓⲣⲉϥⲧ̀ⲥⲁⲃⲟ', 'ⲁϥⲧ̀ⲥⲁⲃⲟ', 'ⲉϥⲧ̀ⲥⲁⲃⲟ'],
          explanation: 'ⲡⲓⲧ̀ⲥⲁⲃⲟ = the teaching (verbal noun with article)'
        },
        {
          id: 'ex-25-4-7',
          type: 'fill_blank',
          question: 'Complete: ⲡⲓ___ ⲙⲡⲉⲛϭⲟⲓⲥ = Seeing our Lord',
          correctAnswer: 'ⲛⲁⲩ',
          options: ['ⲛⲁⲩ', 'ⲣⲉϥⲛⲁⲩ', 'ⲁϥⲛⲁⲩ', 'ⲫⲏⲉⲧⲛⲁⲩ'],
          explanation: 'ⲡⲓⲛⲁⲩ = the seeing (verbal noun from ⲛⲁⲩ "see")'
        },
        {
          id: 'ex-25-4-8',
          type: 'translation',
          question: 'Translate: ⲙⲉⲛⲉⲛⲥⲁ ⲑⲣⲓⲛⲁϩϯ ⲁⲓⲣⲁϣⲓ',
          questionCoptic: 'ⲙⲉⲛⲉⲛⲥⲁ ⲑⲣⲓⲛⲁϩϯ ⲁⲓⲣⲁϣⲓ',
          correctAnswer: 'After I believed, I rejoiced',
          options: ['After I believed, I rejoiced', 'After believing, I rejoiced', 'I believed and rejoiced', 'Believing made me rejoice'],
          explanation: 'ⲙⲉⲛⲉⲛⲥⲁ ⲑⲣⲓⲛⲁϩϯ = after my believing (verbal noun with possessive) + ⲁⲓⲣⲁϣⲓ = I rejoiced'
        }
      ]
    }
  ]
};

export default unit25;
