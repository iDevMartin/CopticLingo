import { Unit } from '../../types';

// UNIT 15: PREPOSITIONS
// Verified for Bohairic dialect consistency
// Essential spatial and relational prepositions

const unit15: Unit = {
  id: 'unit-15',
  title: 'Prepositions',
  description: 'Master spatial and relational prepositions',
  order: 15,
  color: '#58CC02',
  lessons: [
    {
      id: 'lesson-15-1',
      unitId: 'unit-15',
      title: 'Basic Prepositions - Part 1',
      description: 'ϧⲉⲛ (in), ⲉ̀ (to), ⲉ̀ⲃⲟⲗ (from/out)',
      order: 1,
      xpReward: 30,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-15-1-1',
          type: 'translation',
          question: 'Translate: ϧⲉⲛ ⲡⲓⲏⲓ',
          questionCoptic: 'ϧⲉⲛ ⲡⲓⲏⲓ',
          correctAnswer: 'In the house',
          options: ['In the house', 'To the house', 'From the house', 'At the house'],
          explanation: 'ϧⲉⲛ = in, inside + ⲡⲓⲏⲓ = the house'
        },
        {
          id: 'ex-15-1-2',
          type: 'multiple_choice',
          question: 'What preposition means "to" or "toward"?',
          correctAnswer: 'ⲉ̀',
          options: ['ⲉ̀', 'ϧⲉⲛ', 'ⲉ̀ⲃⲟⲗ', 'ϩⲓ'],
          explanation: 'ⲉ̀ (e-) is the basic directional preposition meaning "to" or "toward"'
        },
        {
          id: 'ex-15-1-3',
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
          id: 'ex-15-1-4',
          type: 'translation',
          question: 'Translate: ⲁϥⲓ̀ ⲉ̀ⲃⲟⲗ ϧⲉⲛ ⲧⲉⲕⲕⲗⲏⲥⲓⲁ',
          questionCoptic: 'ⲁϥⲓ̀ ⲉ̀ⲃⲟⲗ ϧⲉⲛ ⲧⲉⲕⲕⲗⲏⲥⲓⲁ',
          correctAnswer: 'He came out from the church',
          options: ['He came out from the church', 'He went into the church', 'He is in the church', 'He came to the church'],
          explanation: 'ⲁϥⲓ̀ = he came + ⲉ̀ⲃⲟⲗ = out/from + ϧⲉⲛ ⲧⲉⲕⲕⲗⲏⲥⲓⲁ = (from) the church (Bohairic ⲓ̀ not ⲉⲓ!)'
        },
        {
          id: 'ex-15-1-5',
          type: 'sentence_building',
          question: 'Build: "I go to the market"',
          correctAnswer: 'ϯϣⲉⲛⲓ ⲉ̀ⲡⲓⲁⲅⲟⲣⲁ',
          wordBank: ['ϯϣⲉⲛⲓ', 'ⲉ̀', 'ⲡⲓⲁⲅⲟⲣⲁ', 'ϧⲉⲛ'],
          explanation: 'ϯϣⲉⲛⲓ = I go + ⲉ̀ = to + ⲡⲓⲁⲅⲟⲣⲁ = the market (Bohairic ϣⲉⲛⲓ not ⲃⲱⲕ!)'
        },
        {
          id: 'ex-15-1-6',
          type: 'fill_blank',
          question: 'Complete: ϥⲭⲏ ___ ⲡⲓⲧⲣⲁⲡⲉⲍⲁ = It is on the table',
          correctAnswer: 'ϩⲓ',
          options: ['ϩⲓ', 'ϧⲉⲛ', 'ⲉ̀', 'ⲉ̀ⲃⲟⲗ'],
          explanation: 'ϩⲓ (hi) = on, upon, at - for surface contact'
        },
        {
          id: 'ex-15-1-7',
          type: 'translation',
          question: 'Translate: ϯⲛⲁⲙⲟϣⲓ ϧⲉⲛ ⲡⲓⲕⲁϩⲓ',
          questionCoptic: 'ϯⲛⲁⲙⲟϣⲓ ϧⲉⲛ ⲡⲓⲕⲁϩⲓ',
          correctAnswer: 'I will walk in the land',
          options: ['I will walk in the land', 'I walk on the earth', 'I am walking in the ground', 'I walked on land'],
          explanation: 'ϯⲛⲁⲙⲟϣⲓ = I will walk + ϧⲉⲛ ⲡⲓⲕⲁϩⲓ = in the land/earth (Bohairic ⲙⲟϣⲓ not ⲙⲟⲟϣⲉ!)'
        },
        {
          id: 'ex-15-1-8',
          type: 'multiple_choice',
          question: 'Which preposition indicates "out of" or "from inside"?',
          correctAnswer: 'ⲉ̀ⲃⲟⲗ ϧⲉⲛ',
          options: ['ⲉ̀ⲃⲟⲗ ϧⲉⲛ', 'ⲉ̀ⲃⲟⲗ ⲉ̀', 'ϧⲉⲛ', 'ϩⲓ'],
          explanation: 'ⲉ̀ⲃⲟⲗ ϧⲉⲛ (ebol khen) = out of, from inside (compound preposition)'
        }
      ]
    },
    {
      id: 'lesson-15-2',
      unitId: 'unit-15',
      title: 'Basic Prepositions - Part 2',
      description: 'ⲛⲉⲙ (with), ⲉ̀ϩ̀ⲣⲏⲓ (up), ⲉ̀ⲡⲉⲥⲏⲧ (down)',
      order: 2,
      xpReward: 30,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-15-2-1',
          type: 'translation',
          question: 'Translate: ⲛⲉⲙⲁⲕ',
          questionCoptic: 'ⲛⲉⲙⲁⲕ',
          correctAnswer: 'With you',
          options: ['With you', 'To you', 'From you', 'For you'],
          explanation: 'ⲛⲉⲙ = with (comitative) + suffix -ⲁⲕ = you (m.sg.)'
        },
        {
          id: 'ex-15-2-2',
          type: 'multiple_choice',
          question: 'What does ⲉ̀ϩ̀ⲣⲏⲓ mean?',
          correctAnswer: 'up/upward',
          options: ['up/upward', 'down/downward', 'inside', 'outside'],
          explanation: 'ⲉ̀ϩ̀ⲣⲏⲓ (e-ehree) = up, upward, above'
        },
        {
          id: 'ex-15-2-3',
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
          id: 'ex-15-2-4',
          type: 'translation',
          question: 'Translate: ⲁⲓϣⲉⲛⲓ ⲛⲉⲙⲁϥ',
          questionCoptic: 'ⲁⲓϣⲉⲛⲓ ⲛⲉⲙⲁϥ',
          correctAnswer: 'I went with him',
          options: ['I went with him', 'I came to him', 'I walked from him', 'I stood with him'],
          explanation: 'ⲁⲓϣⲉⲛⲓ = I went + ⲛⲉⲙⲁϥ = with him (Bohairic ϣⲉⲛⲓ not ⲃⲱⲕ!)'
        },
        {
          id: 'ex-15-2-5',
          type: 'sentence_building',
          question: 'Build: "Come down from the mountain"',
          correctAnswer: 'ⲁⲙⲟⲩ ⲉ̀ⲡⲉⲥⲏⲧ ⲉ̀ⲃⲟⲗ ϩⲁ ⲡⲓⲧⲱⲟⲩ',
          wordBank: ['ⲁⲙⲟⲩ', 'ⲉ̀ⲡⲉⲥⲏⲧ', 'ⲉ̀ⲃⲟⲗ', 'ϩⲁ', 'ⲡⲓⲧⲱⲟⲩ'],
          explanation: 'ⲁⲙⲟⲩ = come (imperative) + ⲉ̀ⲡⲉⲥⲏⲧ = down + ⲉ̀ⲃⲟⲗ ϩⲁ = from + ⲡⲓⲧⲱⲟⲩ = the mountain'
        },
        {
          id: 'ex-15-2-6',
          type: 'fill_blank',
          question: 'Complete: ϥϣⲉⲛⲓ ___ ⲉ̀ϩ̀ⲣⲏⲓ ⲉ̀ⲧ̀ⲫⲉ = He goes up to heaven',
          correctAnswer: 'ⲉ̀',
          options: ['ⲉ̀', 'ϧⲉⲛ', 'ⲛⲉⲙ', 'ϩⲓ'],
          explanation: 'ⲉ̀ϩ̀ⲣⲏⲓ ⲉ̀ = up to (directional compound)'
        },
        {
          id: 'ex-15-2-7',
          type: 'translation',
          question: 'Translate: ⲧⲉⲛⲙⲟϣⲓ ⲛⲉⲙⲱⲧⲉⲛ',
          questionCoptic: 'ⲧⲉⲛⲙⲟϣⲓ ⲛⲉⲙⲱⲧⲉⲛ',
          correctAnswer: 'We walk with you (plural)',
          options: ['We walk with you (plural)', 'They walk with us', 'You walk with them', 'We walked together'],
          explanation: 'ⲧⲉⲛⲙⲟϣⲓ = we walk + ⲛⲉⲙⲱⲧⲉⲛ = with you (pl.) (Bohairic ⲙⲟϣⲓ not ⲙⲟⲟϣⲉ!)'
        },
        {
          id: 'ex-15-2-8',
          type: 'multiple_choice',
          question: 'How do you say "outside"?',
          correctAnswer: 'ⲥⲁⲃⲟⲗ',
          options: ['ⲥⲁⲃⲟⲗ', 'ⲉ̀ⲃⲟⲗ', 'ⲥⲁϧⲟⲩⲛ', 'ⲉ̀ϩ̀ⲣⲏⲓ'],
          explanation: 'ⲥⲁⲃⲟⲗ (sabol) = outside, outdoors'
        }
      ]
    },
    {
      id: 'lesson-15-3',
      unitId: 'unit-15',
      title: 'Compound Prepositions',
      description: 'Complex prepositional phrases',
      order: 3,
      xpReward: 30,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-15-3-1',
          type: 'translation',
          question: 'Translate: ⲉ̀ⲃⲟⲗ ϩⲓⲧⲉⲛ',
          questionCoptic: 'ⲉ̀ⲃⲟⲗ ϩⲓⲧⲉⲛ',
          correctAnswer: 'Through/by means of',
          options: ['Through/by means of', 'From inside', 'Out of', 'Because of'],
          explanation: 'ⲉ̀ⲃⲟⲗ ϩⲓⲧⲉⲛ = through, by means of, via (compound preposition)'
        },
        {
          id: 'ex-15-3-2',
          type: 'multiple_choice',
          question: 'What does ⲉⲑⲃⲉ mean?',
          correctAnswer: 'because of/concerning',
          options: ['because of/concerning', 'through', 'toward', 'without'],
          explanation: 'ⲉⲑⲃⲉ (ethve) = because of, concerning, about'
        },
        {
          id: 'ex-15-3-3',
          type: 'matching',
          question: 'Match compound prepositions',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲉ̀ⲃⲟⲗ ϩⲓⲧⲉⲛ', english: 'through/by means of' },
            { coptic: 'ⲉⲑⲃⲉ', english: 'because of' },
            { coptic: 'ⲥⲁϧⲟⲩⲛ ⲛ̀', english: 'inside of' },
            { coptic: 'ϩⲓϫⲉⲛ', english: 'on/upon' }
          ]
        },
        {
          id: 'ex-15-3-4',
          type: 'translation',
          question: 'Translate: ⲁⲓⲓ̀ ⲉ̀ⲃⲟⲗ ϩⲓⲧⲉⲛ ⲡⲓⲣⲟ',
          questionCoptic: 'ⲁⲓⲓ̀ ⲉ̀ⲃⲟⲗ ϩⲓⲧⲉⲛ ⲡⲓⲣⲟ',
          correctAnswer: 'I came through the door',
          options: ['I came through the door', 'I opened the door', 'I went to the door', 'I am at the door'],
          explanation: 'ⲁⲓⲓ̀ = I came + ⲉ̀ⲃⲟⲗ ϩⲓⲧⲉⲛ = through + ⲡⲓⲣⲟ = the door (Bohairic ⲓ̀ not ⲉⲓ!)'
        },
        {
          id: 'ex-15-3-5',
          type: 'sentence_building',
          question: 'Build: "Because of you, I believe"',
          correctAnswer: 'ⲉⲑⲃⲏⲧⲕ ϯⲛⲁϩϯ',
          wordBank: ['ⲉⲑⲃⲉ', 'ⲑⲏⲧⲕ', 'ϯⲛⲁϩϯ', 'ⲛⲁⲕ'],
          explanation: 'ⲉⲑⲃⲏⲧⲕ = because of you (ⲉⲑⲃⲉ + suffix -ⲏⲧⲕ) + ϯⲛⲁϩϯ = I believe'
        },
        {
          id: 'ex-15-3-6',
          type: 'fill_blank',
          question: 'Complete: ϥϧⲉⲛ ⲡⲓⲏⲓ = He is ___ the house',
          correctAnswer: 'inside',
          options: ['inside', 'outside', 'above', 'below'],
          explanation: 'ϧⲉⲛ = in, inside (basic locative preposition)'
        },
        {
          id: 'ex-15-3-7',
          type: 'translation',
          question: 'Translate: ⲙⲡⲉⲙⲑⲟ ⲙⲫϯ',
          questionCoptic: 'ⲙⲡⲉⲙⲑⲟ ⲙⲫϯ',
          correctAnswer: 'Before God/In God\'s presence',
          options: ['Before God/In God\'s presence', 'After God', 'With God', 'From God'],
          explanation: 'ⲙⲡⲉⲙⲑⲟ = before, in the presence of + ⲙⲫϯ = of God (Bohairic ⲫϯ not ⲫⲛⲟⲩϯ!)'
        },
        {
          id: 'ex-15-3-8',
          type: 'multiple_choice',
          question: 'Which means "according to"?',
          correctAnswer: 'ⲕⲁⲧⲁ',
          options: ['ⲕⲁⲧⲁ', 'ⲉⲑⲃⲉ', 'ϩⲓⲧⲉⲛ', 'ⲙⲉⲧⲁ'],
          explanation: 'ⲕⲁⲧⲁ (kata, from Greek) = according to, in accordance with'
        }
      ]
    },
    {
      id: 'lesson-15-4',
      unitId: 'unit-15',
      title: 'Prepositions with Pronouns',
      description: 'Prepositional suffixes and combinations',
      order: 4,
      xpReward: 30,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-15-4-1',
          type: 'translation',
          question: 'Translate: ⲉⲣⲟⲓ',
          questionCoptic: 'ⲉⲣⲟⲓ',
          correctAnswer: 'To me/toward me',
          options: ['To me/toward me', 'From me', 'With me', 'In me'],
          explanation: 'ⲉ̀ = to/toward + suffix -ⲣⲟⲓ = me → ⲉⲣⲟⲓ = to me'
        },
        {
          id: 'ex-15-4-2',
          type: 'multiple_choice',
          question: 'How do you say "with him"?',
          correctAnswer: 'ⲛⲉⲙⲁϥ',
          options: ['ⲛⲉⲙⲁϥ', 'ⲉⲣⲟϥ', 'ⲙ̀ⲙⲟϥ', 'ϧⲁⲧⲟⲧϥ'],
          explanation: 'ⲛⲉⲙ = with + suffix -ⲁϥ = him → ⲛⲉⲙⲁϥ = with him'
        },
        {
          id: 'ex-15-4-3',
          type: 'matching',
          question: 'Match prepositions with pronouns',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲉⲣⲟⲓ', english: 'to me' },
            { coptic: 'ⲛⲉⲙⲁⲕ', english: 'with you' },
            { coptic: 'ⲙ̀ⲙⲟϥ', english: 'of him/it' },
            { coptic: 'ϧⲁⲣⲟⲥ', english: 'to her' }
          ]
        },
        {
          id: 'ex-15-4-4',
          type: 'translation',
          question: 'Translate: ⲁϥϫⲟⲥ ⲛⲏⲓ',
          questionCoptic: 'ⲁϥϫⲟⲥ ⲛⲏⲓ',
          correctAnswer: 'He said it to me',
          options: ['He said it to me', 'He said to him', 'I said to him', 'He told me'],
          explanation: 'ⲁϥϫⲟⲥ = he said it + ⲛⲏⲓ (ⲛⲁ- = to + -ⲓ = me) = to me'
        },
        {
          id: 'ex-15-4-5',
          type: 'sentence_building',
          question: 'Build: "I am with you (plural)"',
          correctAnswer: 'ϯϣⲟⲡ ⲛⲉⲙⲱⲧⲉⲛ',
          wordBank: ['ϯϣⲟⲡ', 'ⲛⲉⲙⲱⲧⲉⲛ', 'ⲛⲉⲙⲁⲕ', 'ⲉⲣⲱⲧⲉⲛ'],
          explanation: 'ϯϣⲟⲡ = I am/I exist + ⲛⲉⲙⲱⲧⲉⲛ = with you (pl.)'
        },
        {
          id: 'ex-15-4-6',
          type: 'fill_blank',
          question: 'Complete: ϯⲛⲁⲙⲟϣⲓ ___ = I will walk with them',
          correctAnswer: 'ⲛⲉⲙⲱⲟⲩ',
          options: ['ⲛⲉⲙⲱⲟⲩ', 'ⲛⲉⲙⲁϥ', 'ⲉⲣⲱⲟⲩ', 'ⲙ̀ⲙⲱⲟⲩ'],
          explanation: 'ⲛⲉⲙⲱⲟⲩ = with them (ⲛⲉⲙ + suffix -ⲱⲟⲩ)'
        },
        {
          id: 'ex-15-4-7',
          type: 'translation',
          question: 'Translate: ⲉⲑⲃⲏⲧⲥ',
          questionCoptic: 'ⲉⲑⲃⲏⲧⲥ',
          correctAnswer: 'Because of her',
          options: ['Because of her', 'Because of him', 'To her', 'With her'],
          explanation: 'ⲉⲑⲃⲉ = because of + suffix -ⲏⲧⲥ = her → ⲉⲑⲃⲏⲧⲥ = because of her'
        },
        {
          id: 'ex-15-4-8',
          type: 'multiple_choice',
          question: 'What is the prepositional suffix for "us"?',
          correctAnswer: '-ⲏⲣⲉⲛ/-ⲱⲛ',
          options: ['-ⲏⲣⲉⲛ/-ⲱⲛ', '-ⲏⲧⲉⲛ/-ⲱⲧⲉⲛ', '-ⲟⲓ/-ⲓ', '-ⲱⲟⲩ'],
          explanation: 'The suffix for "us" (1st person plural) is -ⲏⲣⲉⲛ (after ⲉⲑⲃⲉ) or -ⲱⲛ (after ⲛⲉⲙ, ⲉ̀)'
        }
      ]
    },
    {
      id: 'lesson-15-5',
      unitId: 'unit-15',
      title: 'Location & Direction',
      description: 'Expressing where and where to',
      order: 5,
      xpReward: 30,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-15-5-1',
          type: 'translation',
          question: 'Translate: ϥϧⲉⲛ ⲡⲓⲙⲁ ⲉⲧⲙ̀ⲙⲁⲩ',
          questionCoptic: 'ϥϧⲉⲛ ⲡⲓⲙⲁ ⲉⲧⲙ̀ⲙⲁⲩ',
          correctAnswer: 'He is in that place/there',
          options: ['He is in that place/there', 'He went there', 'He is here', 'He came from there'],
          explanation: 'ϥϧⲉⲛ = he is in + ⲡⲓⲙⲁ ⲉⲧⲙ̀ⲙⲁⲩ = that place (literally "the place which is there")'
        },
        {
          id: 'ex-15-5-2',
          type: 'multiple_choice',
          question: 'How do you say "here"?',
          correctAnswer: 'ⲙⲡⲁⲓⲙⲁ',
          options: ['ⲙⲡⲁⲓⲙⲁ', 'ⲙⲡⲓⲙⲁ', 'ⲉⲧⲙ̀ⲙⲁⲩ', 'ϩⲓⲙⲁ'],
          explanation: 'ⲙⲡⲁⲓⲙⲁ (em-pai-ma) = here, in this place'
        },
        {
          id: 'ex-15-5-3',
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
          id: 'ex-15-5-4',
          type: 'translation',
          question: 'Translate: ⲁⲓϣⲉⲛⲓ ⲉ̀ⲡⲓⲙⲁ ⲉⲧⲙ̀ⲙⲁⲩ',
          questionCoptic: 'ⲁⲓϣⲉⲛⲓ ⲉ̀ⲡⲓⲙⲁ ⲉⲧⲙ̀ⲙⲁⲩ',
          correctAnswer: 'I went to that place/there',
          options: ['I went to that place/there', 'I am in that place', 'I came from there', 'I was there'],
          explanation: 'ⲁⲓϣⲉⲛⲓ = I went + ⲉ̀ = to + ⲡⲓⲙⲁ ⲉⲧⲙ̀ⲙⲁⲩ = that place (Bohairic ϣⲉⲛⲓ not ⲃⲱⲕ!)'
        },
        {
          id: 'ex-15-5-5',
          type: 'sentence_building',
          question: 'Build: "Come here to me"',
          correctAnswer: 'ⲁⲙⲟⲩ ⲙⲡⲁⲓⲙⲁ ϩⲁⲣⲟⲓ',
          wordBank: ['ⲁⲙⲟⲩ', 'ⲙⲡⲁⲓⲙⲁ', 'ϩⲁⲣⲟⲓ', 'ⲉⲧⲙ̀ⲙⲁⲩ'],
          explanation: 'ⲁⲙⲟⲩ = come + ⲙⲡⲁⲓⲙⲁ = here + ϩⲁⲣⲟⲓ = to me (ϩⲁ- = to/toward + -ⲣⲟⲓ = me)'
        },
        {
          id: 'ex-15-5-6',
          type: 'fill_blank',
          question: 'Complete: ⲥⲁ___ ⲙⲡⲓⲏⲓ = Above the house',
          correctAnswer: 'ⲡϣⲱⲓ',
          options: ['ⲡϣⲱⲓ', 'ⲡⲉⲥⲏⲧ', 'ⲃⲟⲗ', 'ϧⲟⲩⲛ'],
          explanation: 'ⲥⲁⲡϣⲱⲓ = above, on top (ⲥⲁ- = at + ⲡϣⲱⲓ = the height)'
        },
        {
          id: 'ex-15-5-7',
          type: 'translation',
          question: 'Translate: ϥⲛⲏⲟⲩ ⲉ̀ⲃⲟⲗ ⲥⲁⲡϣⲱⲓ',
          questionCoptic: 'ϥⲛⲏⲟⲩ ⲉ̀ⲃⲟⲗ ⲥⲁⲡϣⲱⲓ',
          correctAnswer: 'It is coming down from above',
          options: ['It is coming down from above', 'It went up', 'It is above', 'It came from below'],
          explanation: 'ϥⲛⲏⲟⲩ = it is coming + ⲉ̀ⲃⲟⲗ ⲥⲁⲡϣⲱⲓ = from above (down from the height)'
        },
        {
          id: 'ex-15-5-8',
          type: 'multiple_choice',
          question: 'Which means "around" or "surrounding"?',
          correctAnswer: 'ⲙ̀ⲡⲉⲣⲓⲕⲱϯ',
          options: ['ⲙ̀ⲡⲉⲣⲓⲕⲱϯ', 'ⲥⲁⲃⲟⲗ', 'ⲥⲁϧⲟⲩⲛ', 'ⲥⲁⲡϣⲱⲓ'],
          explanation: 'ⲙ̀ⲡⲉⲣⲓⲕⲱϯ (em-peri-koti, from Greek περι) = around, surrounding'
        }
      ]
    }
  ]
};

export default unit15;
