import { Unit } from '../../types';

// UNIT 26: EXTENDED VOCABULARY
// Verified for Bohairic dialect consistency
// Comprehensive vocabulary expansion: nature, emotions, actions, descriptions

const unit26: Unit = {
  id: 'unit-26',
  title: 'Extended Vocabulary',
  description: 'Expand your vocabulary with nature, emotions, and descriptions',
  order: 26,
  color: '#58CC02',
  lessons: [
    {
      id: 'lesson-26-1',
      unitId: 'unit-26',
      title: 'Nature & Weather',
      description: 'Vocabulary for the natural world',
      order: 1,
      xpReward: 35,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-26-1-1',
          type: 'translation',
          question: 'Translate: ⲡⲓⲓⲁⲣⲟ',
          questionCoptic: 'ⲡⲓⲓⲁⲣⲟ',
          correctAnswer: 'The river',
          options: ['The river', 'The sea', 'The lake', 'The water'],
          explanation: 'ⲡⲓⲓⲁⲣⲟ (pi-yaro) = the river'
        },
        {
          id: 'ex-26-1-2',
          type: 'multiple_choice',
          question: 'What is "mountain" in Coptic?',
          correctAnswer: 'ⲡⲓⲧⲱⲟⲩ',
          options: ['ⲡⲓⲧⲱⲟⲩ', 'ⲡⲓⲕⲁϩⲓ', 'ⲡⲓⲙⲱⲟⲩ', 'ⲡⲓϩⲏⲓ'],
          explanation: 'ⲡⲓⲧⲱⲟⲩ (pi-tōou) means "the mountain"'
        },
        {
          id: 'ex-26-1-3',
          type: 'matching',
          question: 'Match nature vocabulary',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲓⲁⲣⲟ', english: 'river' },
            { coptic: 'ⲫⲓⲟⲙ', english: 'sea' },
            { coptic: 'ⲧⲱⲟⲩ', english: 'mountain' },
            { coptic: 'ϣⲏⲛ', english: 'tree' }
          ]
        },
        {
          id: 'ex-26-1-4',
          type: 'translation',
          question: 'Translate: ⲫⲣⲏ ϣⲁϥϣⲁⲓ',
          questionCoptic: 'ⲫⲣⲏ ϣⲁϥϣⲁⲓ',
          correctAnswer: 'The sun shines',
          options: ['The sun shines', 'The sun rises', 'The sun sets', 'Sunshine'],
          explanation: 'ⲫⲣⲏ = the sun + ϣⲁϥϣⲁⲓ = it shines (from ϣⲁⲓ "shine")'
        },
        {
          id: 'ex-26-1-5',
          type: 'sentence_building',
          question: 'Build: "The rain falls"',
          correctAnswer: 'ϯⲙⲟⲩⲛϩⲱⲟⲩ ϣⲁϥϩⲉⲓ',
          wordBank: ['ϯⲙⲟⲩⲛϩⲱⲟⲩ', 'ϣⲁϥϩⲉⲓ', 'ⲉⲃⲟⲗ', 'ⲉϧⲣⲏⲓ'],
          explanation: 'ϯⲙⲟⲩⲛϩⲱⲟⲩ (the rain) + ϣⲁϥϩⲉⲓ (it falls)'
        },
        {
          id: 'ex-26-1-6',
          type: 'multiple_choice',
          question: 'What is "wind" in Coptic?',
          correctAnswer: 'ⲡⲓⲑⲏⲟⲩ',
          options: ['ⲡⲓⲑⲏⲟⲩ', 'ⲡⲓⲁⲏⲣ', 'ⲡⲓⲡ̀ⲛⲉⲩⲙⲁ', 'ⲡⲓⲭⲱⲙ'],
          explanation: 'ⲡⲓⲑⲏⲟⲩ (pi-thēou) = the wind'
        },
        {
          id: 'ex-26-1-7',
          type: 'fill_blank',
          question: 'Complete: ⲡⲓ___ ϩⲉⲛⲟⲩⲱⲓⲛⲓ ⲛⲉ = The stars are lights',
          correctAnswer: 'ⲥⲓⲟⲩ',
          options: ['ⲥⲓⲟⲩ', 'ⲣⲏ', 'ⲓⲟϩ', 'ⲟⲩⲱⲓⲛⲓ'],
          explanation: 'ⲡⲓⲥⲓⲟⲩ (pi-siou, plural) = the stars'
        },
        {
          id: 'ex-26-1-8',
          type: 'translation',
          question: 'Translate: ⲡⲓⲕⲁϩⲓ ⲛⲉⲙ ⲧ̀ⲫⲉ',
          questionCoptic: 'ⲡⲓⲕⲁϩⲓ ⲛⲉⲙ ⲧ̀ⲫⲉ',
          correctAnswer: 'The earth and the heaven',
          options: ['The earth and the heaven', 'The land and the sky', 'Heaven and earth', 'All of the above'],
          explanation: 'ⲡⲓⲕⲁϩⲓ = the earth + ⲛⲉⲙ = and + ⲧ̀ⲫⲉ = the heaven/sky'
        }
      ]
    },
    {
      id: 'lesson-26-2',
      unitId: 'unit-26',
      title: 'Body Parts',
      description: 'Parts of the human body',
      order: 2,
      xpReward: 35,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-26-2-1',
          type: 'translation',
          question: 'Translate: ⲧⲁⲁⲫⲉ',
          questionCoptic: 'ⲧⲁⲁⲫⲉ',
          correctAnswer: 'My head',
          options: ['My head', 'The head', 'Head', 'My mind'],
          explanation: 'ⲧⲁⲁⲫⲉ = my head (ⲁⲫⲉ "head" + possessive ⲧⲁ- "my")'
        },
        {
          id: 'ex-26-2-2',
          type: 'multiple_choice',
          question: 'What is "hand" in Coptic?',
          correctAnswer: 'ϫⲓϫ',
          options: ['ϫⲓϫ', 'ϭⲓϫ', 'ⲧⲟⲧⲥ', 'ⲙⲏⲣ'],
          explanation: 'ϫⲓϫ (jij) means "hand" or "arm"'
        },
        {
          id: 'ex-26-2-3',
          type: 'matching',
          question: 'Match body parts',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲁⲫⲉ', english: 'head' },
            { coptic: 'ⲃⲁⲗ', english: 'eye' },
            { coptic: 'ⲙⲁⲁϫⲓ', english: 'ear' },
            { coptic: 'ⲣⲱϥ', english: 'mouth' }
          ]
        },
        {
          id: 'ex-26-2-4',
          type: 'translation',
          question: 'Translate: ⲛⲁⲃⲁⲗ',
          questionCoptic: 'ⲛⲁⲃⲁⲗ',
          correctAnswer: 'My eyes',
          options: ['My eyes', 'The eyes', 'My eye', 'Eyes'],
          explanation: 'ⲛⲁⲃⲁⲗ = my eyes (ⲃⲁⲗ "eye" + possessive ⲛⲁ- "my", naturally plural)'
        },
        {
          id: 'ex-26-2-5',
          type: 'sentence_building',
          question: 'Build: "His hand is strong"',
          correctAnswer: 'ⲧⲉϥϫⲓϫ ⲟⲓ ⲛ̀ϫⲱⲣⲓ',
          wordBank: ['ⲧⲉϥ', 'ϫⲓϫ', 'ⲟⲓ', 'ⲛ̀ϫⲱⲣⲓ'],
          explanation: 'ⲧⲉϥϫⲓϫ = his hand + ⲟⲓ ⲛ̀ϫⲱⲣⲓ = is strong'
        },
        {
          id: 'ex-26-2-6',
          type: 'multiple_choice',
          question: 'What is "foot" in Coptic?',
          correctAnswer: 'ⲣⲁⲧ',
          options: ['ⲣⲁⲧ', 'ϫⲁⲧ', 'ⲙⲏⲣ', 'ⲕⲉⲗⲓ'],
          explanation: 'ⲣⲁⲧ (rat) means "foot" or "leg"'
        },
        {
          id: 'ex-26-2-7',
          type: 'fill_blank',
          question: 'Complete: ⲡⲓ___ ⲛ̀ⲧⲉⲡⲓⲣⲱⲙⲓ = The heart of the person',
          correctAnswer: 'ϩⲏⲧ',
          options: ['ϩⲏⲧ', 'ⲁⲫⲉ', 'ⲃⲁⲗ', 'ⲣⲱϥ'],
          explanation: 'ⲡⲓϩⲏⲧ (pi-hēt) = the heart'
        },
        {
          id: 'ex-26-2-8',
          type: 'translation',
          question: 'Translate: ⲛⲁⲙⲁⲁϫⲓ ϣⲁⲩⲥⲱⲧⲙ',
          questionCoptic: 'ⲛⲁⲙⲁⲁϫⲓ ϣⲁⲩⲥⲱⲧⲙ',
          correctAnswer: 'My ears hear',
          options: ['My ears hear', 'My ears heard', 'I hear with my ears', 'Hearing with ears'],
          explanation: 'ⲛⲁⲙⲁⲁϫⲓ = my ears + ϣⲁⲩⲥⲱⲧⲙ = they hear'
        }
      ]
    },
    {
      id: 'lesson-26-3',
      unitId: 'unit-26',
      title: 'Emotions & States',
      description: 'Express feelings and conditions',
      order: 3,
      xpReward: 35,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-26-3-1',
          type: 'translation',
          question: 'Translate: ϯⲭⲣⲱⲙ',
          questionCoptic: 'ϯⲭⲣⲱⲙ',
          correctAnswer: 'I am angry',
          options: ['I am angry', 'I hate', 'I am sad', 'I am jealous'],
          explanation: 'ϯⲭⲣⲱⲙ (ti-khrōm) = I am angry (from ⲭⲣⲱⲙ "to be angry")'
        },
        {
          id: 'ex-26-3-2',
          type: 'multiple_choice',
          question: 'What is "to be sad" in Coptic?',
          correctAnswer: 'ⲙ̀ⲕⲁϩⲛ̀ϩⲏⲧ',
          options: ['ⲙ̀ⲕⲁϩⲛ̀ϩⲏⲧ', 'ⲭⲣⲱⲙ', 'ⲣⲁϣⲓ', 'ϣⲫⲏⲣⲓ'],
          explanation: 'ⲙ̀ⲕⲁϩⲛ̀ϩⲏⲧ (em-kah-en-hēt) literally "pained of heart" = sad'
        },
        {
          id: 'ex-26-3-3',
          type: 'matching',
          question: 'Match emotions',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲣⲁϣⲓ', english: 'to rejoice/be happy' },
            { coptic: 'ⲣⲓⲙⲓ', english: 'to weep/cry' },
            { coptic: 'ⲟⲓ ⲛ̀ϩⲟϯ', english: 'to be afraid' },
            { coptic: 'ⲭⲣⲱⲙ', english: 'to be angry' }
          ]
        },
        {
          id: 'ex-26-3-4',
          type: 'translation',
          question: 'Translate: ϯⲟⲓ ⲛ̀ϩⲟϯ',
          questionCoptic: 'ϯⲟⲓ ⲛ̀ϩⲟϯ',
          correctAnswer: 'I am afraid',
          options: ['I am afraid', 'I fear', 'I am frightened', 'All of the above'],
          explanation: 'ϯⲟⲓ ⲛ̀ϩⲟϯ = I am afraid (literally "I am in fear")'
        },
        {
          id: 'ex-26-3-5',
          type: 'sentence_building',
          question: 'Build: "She weeps because of sadness"',
          correctAnswer: 'ⲥⲣⲓⲙⲓ ⲉⲑⲃⲉ ⲡⲓⲙ̀ⲕⲁϩⲛ̀ϩⲏⲧ',
          wordBank: ['ⲥⲣⲓⲙⲓ', 'ⲉⲑⲃⲉ', 'ⲡⲓ', 'ⲙ̀ⲕⲁϩⲛ̀ϩⲏⲧ'],
          explanation: 'ⲥⲣⲓⲙⲓ = she weeps + ⲉⲑⲃⲉ ⲡⲓⲙ̀ⲕⲁϩⲛ̀ϩⲏⲧ = because of the sadness'
        },
        {
          id: 'ex-26-3-6',
          type: 'multiple_choice',
          question: 'What is "to marvel/wonder" in Coptic?',
          correctAnswer: 'ⲉⲣϣⲫⲏⲣⲓ',
          options: ['ⲉⲣϣⲫⲏⲣⲓ', 'ⲣⲁϣⲓ', 'ⲛⲁⲩ', 'ⲥⲱⲧⲙ'],
          explanation: 'ⲉⲣϣⲫⲏⲣⲓ (er-sphēri) = to marvel, to wonder, to be amazed'
        },
        {
          id: 'ex-26-3-7',
          type: 'fill_blank',
          question: 'Complete: ϯ___ ⲛⲁⲕ = I trust you',
          correctAnswer: 'ⲛⲁϩϯ',
          options: ['ⲛⲁϩϯ', 'ⲣⲁϣⲓ', 'ⲙⲉⲛⲣⲉ', 'ⲥⲱⲧⲙ'],
          explanation: 'ϯⲛⲁϩϯ ⲛⲁⲕ = I trust/believe in you'
        },
        {
          id: 'ex-26-3-8',
          type: 'translation',
          question: 'Translate: ⲡⲁϩⲏⲧ ⲣⲁϣⲓ ⲙ̀ⲙⲟϥ',
          questionCoptic: 'ⲡⲁϩⲏⲧ ⲣⲁϣⲓ ⲙ̀ⲙⲟϥ',
          correctAnswer: 'My heart rejoices',
          options: ['My heart rejoices', 'I am happy', 'My happy heart', 'Rejoicing heart'],
          explanation: 'ⲡⲁϩⲏⲧ = my heart + ⲣⲁϣⲓ ⲙ̀ⲙⲟϥ = rejoices (reflexive construction)'
        }
      ]
    },
    {
      id: 'lesson-26-4',
      unitId: 'unit-26',
      title: 'Descriptive Adjectives',
      description: 'Words to describe people and things',
      order: 4,
      xpReward: 35,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-26-4-1',
          type: 'translation',
          question: 'Translate: ⲟⲩⲛⲓϣϯ',
          questionCoptic: 'ⲟⲩⲛⲓϣϯ',
          correctAnswer: 'Great/large',
          options: ['Great/large', 'Small', 'Good', 'Beautiful'],
          explanation: 'ⲟⲩⲛⲓϣϯ (ou-nishti) = great, large, big'
        },
        {
          id: 'ex-26-4-2',
          type: 'multiple_choice',
          question: 'What is "small" in Coptic?',
          correctAnswer: 'ⲕⲟⲩϫⲓ',
          options: ['ⲕⲟⲩϫⲓ', 'ⲛⲓϣϯ', 'ⲕⲁⲗⲟⲥ', 'ϩⲱⲃ'],
          explanation: 'ⲕⲟⲩϫⲓ (kouji) means "small" or "little"'
        },
        {
          id: 'ex-26-4-3',
          type: 'matching',
          question: 'Match adjectives',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲛⲓϣϯ', english: 'great/big' },
            { coptic: 'ⲕⲟⲩϫⲓ', english: 'small' },
            { coptic: 'ⲛⲁⲛⲉϥ', english: 'good' },
            { coptic: 'ϩⲱⲟⲩ', english: 'bad/evil' }
          ]
        },
        {
          id: 'ex-26-4-4',
          type: 'translation',
          question: 'Translate: ⲟⲩⲣⲱⲙⲓ ⲛ̀ⲣⲉⲙϩⲏⲧ',
          questionCoptic: 'ⲟⲩⲣⲱⲙⲓ ⲛ̀ⲣⲉⲙϩⲏⲧ',
          correctAnswer: 'A humble person',
          options: ['A humble person', 'A proud person', 'A gentle person', 'A wise person'],
          explanation: 'ⲟⲩⲣⲱⲙⲓ = a person + ⲛ̀ⲣⲉⲙϩⲏⲧ = humble (literally "gentle of heart")'
        },
        {
          id: 'ex-26-4-5',
          type: 'sentence_building',
          question: 'Build: "A wise woman"',
          correctAnswer: 'ⲟⲩϩⲓⲙⲓ ⲛ̀ⲥⲁⲃⲉ',
          wordBank: ['ⲟⲩ', 'ϩⲓⲙⲓ', 'ⲛ̀ⲥⲁⲃⲉ', 'ⲛ̀ⲥⲁⲃⲏ'],
          explanation: 'ⲟⲩϩⲓⲙⲓ = a woman + ⲛ̀ⲥⲁⲃⲉ = wise (Bohairic ϩⲓⲙⲓ not ⲥϩⲓⲙⲉ!)'
        },
        {
          id: 'ex-26-4-6',
          type: 'multiple_choice',
          question: 'What is "beautiful" in Coptic?',
          correctAnswer: 'ⲛⲉⲥⲱⲥ',
          options: ['ⲛⲉⲥⲱⲥ', 'ⲛⲁⲛⲉϥ', 'ⲛⲓϣϯ', 'ⲟⲩⲱⲓⲛⲓ'],
          explanation: 'ⲛⲉⲥⲱⲥ (nesōs) means "beautiful" or "good-looking"'
        },
        {
          id: 'ex-26-4-7',
          type: 'fill_blank',
          question: 'Complete: ⲟⲩϣⲏⲣⲓ ___ = A righteous son',
          correctAnswer: 'ⲛ̀ⲑⲙⲏⲓ',
          options: ['ⲛ̀ⲑⲙⲏⲓ', 'ⲛ̀ϩⲱⲟⲩ', 'ⲛ̀ⲛⲓϣϯ', 'ⲛ̀ⲕⲟⲩϫⲓ'],
          explanation: 'ⲛ̀ⲑⲙⲏⲓ (en-ethmēi) = righteous, just (Bohairic ϣⲏⲣⲓ not ⲥⲏⲣⲓ!)'
        },
        {
          id: 'ex-26-4-8',
          type: 'translation',
          question: 'Translate: ⲡⲓϫⲱⲣⲓ ⲛ̀ⲁⲑⲙⲟⲩ',
          questionCoptic: 'ⲡⲓϫⲱⲣⲓ ⲛ̀ⲁⲑⲙⲟⲩ',
          correctAnswer: 'The mighty one / the strong immortal',
          options: ['The mighty one / the strong immortal', 'The strong death', 'The dead strong', 'Strength and death'],
          explanation: 'ⲡⲓϫⲱⲣⲓ = the strong one + ⲛ̀ⲁⲑⲙⲟⲩ = immortal (literally "deathless")'
        }
      ]
    },
    {
      id: 'lesson-26-5',
      unitId: 'unit-26',
      title: 'Actions & Verbs',
      description: 'Common action verbs',
      order: 5,
      xpReward: 35,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-26-5-1',
          type: 'translation',
          question: 'Translate: ϯϥⲁⲓ',
          questionCoptic: 'ϯϥⲁⲓ',
          correctAnswer: 'I carry/bear',
          options: ['I carry/bear', 'I give', 'I take', 'I bring'],
          explanation: 'ϯϥⲁⲓ (ti-fai) = I carry, I bear (from ϥⲁⲓ "carry")'
        },
        {
          id: 'ex-26-5-2',
          type: 'multiple_choice',
          question: 'What is "to open" in Coptic?',
          correctAnswer: 'ⲁⲟⲩⲱⲛ',
          options: ['ⲁⲟⲩⲱⲛ', 'ⲙⲁϣⲑⲁⲙ', 'ϥⲁⲓ', 'ϩⲓⲟⲩⲓ̀'],
          explanation: 'ⲁⲟⲩⲱⲛ (aouwn) means "to open"'
        },
        {
          id: 'ex-26-5-3',
          type: 'matching',
          question: 'Match action verbs',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ϥⲁⲓ', english: 'to carry' },
            { coptic: 'ϩⲓⲟⲩⲓ̀', english: 'to throw/cast' },
            { coptic: 'ⲁⲟⲩⲱⲛ', english: 'to open' },
            { coptic: 'ⲙⲁϣⲑⲁⲙ', english: 'to close/shut' }
          ]
        },
        {
          id: 'ex-26-5-4',
          type: 'translation',
          question: 'Translate: ⲁⲩϩⲓⲟⲩⲓ̀ ⲙ̀ⲙⲟϥ ⲉⲃⲟⲗ',
          questionCoptic: 'ⲁⲩϩⲓⲟⲩⲓ̀ ⲙ̀ⲙⲟϥ ⲉⲃⲟⲗ',
          correctAnswer: 'They cast him out',
          options: ['They cast him out', 'They threw him away', 'They expelled him', 'All of the above'],
          explanation: 'ⲁⲩϩⲓⲟⲩⲓ̀ ⲙ̀ⲙⲟϥ = they threw him + ⲉⲃⲟⲗ = out'
        },
        {
          id: 'ex-26-5-5',
          type: 'sentence_building',
          question: 'Build: "Open the door"',
          correctAnswer: 'ⲁⲟⲩⲱⲛ ⲙ̀ⲡⲓⲣⲟ',
          wordBank: ['ⲁⲟⲩⲱⲛ', 'ⲙ̀ⲡⲓⲣⲟ', 'ⲉⲃⲟⲗ', 'ⲙ̀ⲙⲟϥ'],
          explanation: 'ⲁⲟⲩⲱⲛ = open (imperative) + ⲙ̀ⲡⲓⲣⲟ = the door'
        },
        {
          id: 'ex-26-5-6',
          type: 'multiple_choice',
          question: 'What is "to build" in Coptic?',
          correctAnswer: 'ⲕⲱⲧ',
          options: ['ⲕⲱⲧ', 'ⲑⲁⲙⲓⲟ', 'ⲫⲱⲧ', 'ϣⲱⲛⲓ'],
          explanation: 'ⲕⲱⲧ (kōt) means "to build" or "to construct"'
        },
        {
          id: 'ex-26-5-7',
          type: 'fill_blank',
          question: 'Complete: ⲁϥ___ ⲛ̀ⲟⲩⲏⲓ = He built a house',
          correctAnswer: 'ⲕⲱⲧ',
          options: ['ⲕⲱⲧ', 'ⲑⲁⲙⲓⲟ', 'ϥⲁⲓ', 'ϩⲓⲟⲩⲓ̀'],
          explanation: 'ⲁϥⲕⲱⲧ = he built (from ⲕⲱⲧ "build")'
        },
        {
          id: 'ex-26-5-8',
          type: 'translation',
          question: 'Translate: ϯⲛⲁϫⲱⲕ ⲉⲃⲟⲗ ⲙ̀ⲡⲁϩⲱⲃ',
          questionCoptic: 'ϯⲛⲁϫⲱⲕ ⲉⲃⲟⲗ ⲙ̀ⲡⲁϩⲱⲃ',
          correctAnswer: 'I will finish my work',
          options: ['I will finish my work', 'I will complete my task', 'I will end my work', 'All of the above'],
          explanation: 'ϯⲛⲁϫⲱⲕ ⲉⲃⲟⲗ = I will complete + ⲙ̀ⲡⲁϩⲱⲃ = my work'
        }
      ]
    }
  ]
};

export default unit26;
