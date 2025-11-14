import { Unit } from '../../types';

// UNIT 29: ADVANCED LITURGICAL COPTIC
// Verified for Bohairic dialect consistency
// Doxologies, Hymns, Liturgical Responses, Psalms, and Agpeya prayers

const unit29: Unit = {
  id: 'unit-29',
  title: 'Advanced Liturgical Coptic',
  description: 'Master doxologies, Psalms, Agpeya prayers, hymns, and liturgical language',
  order: 29,
  color: '#1CB0F6',
  lessons: [
    {
      id: 'lesson-29-1',
      unitId: 'unit-29',
      title: 'Doxology for the Virgin Mary',
      description: 'Theotokos hymn',
      order: 1,
      xpReward: 50,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-29-1-1',
          type: 'translation',
          question: 'Translate: ϯϣⲉⲛⲉ ⲁⲣⲉ ⲙⲁⲣⲓⲁ ϯⲡⲁⲣⲑⲉⲛⲟⲥ',
          questionCoptic: 'ϯϣⲉⲛⲉ ⲁⲣⲉ ⲙⲁⲣⲓⲁ ϯⲡⲁⲣⲑⲉⲛⲟⲥ',
          correctAnswer: 'Hail to you, Mary the Virgin',
          options: ['Hail to you, Mary the Virgin', 'Greetings Mary the Virgin', 'Peace to Mary the Virgin', 'Blessed are you, Virgin Mary'],
          explanation: 'ϯϣⲉⲛⲉ ⲁⲣⲉ = hail to you + ⲙⲁⲣⲓⲁ ϯⲡⲁⲣⲑⲉⲛⲟⲥ = Mary the Virgin (Theotokos greeting)'
        },
        {
          id: 'ex-29-1-2',
          type: 'multiple_choice',
          question: 'What does ⲑⲉⲟⲧⲟⲕⲟⲥ mean?',
          questionCoptic: 'ⲑⲉⲟⲧⲟⲕⲟⲥ',
          correctAnswer: 'God-bearer/Mother of God',
          options: ['God-bearer/Mother of God', 'Holy Virgin', 'Blessed Mother', 'Saint Mary'],
          explanation: 'ⲑⲉⲟⲧⲟⲕⲟⲥ (Theotokos, from Greek) = God-bearer, the title affirming Mary as Mother of God'
        },
        {
          id: 'ex-29-1-3',
          type: 'matching',
          question: 'Match Marian titles',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲑⲉⲟⲧⲟⲕⲟⲥ', english: 'God-bearer' },
            { coptic: 'ⲡⲁⲣⲑⲉⲛⲟⲥ', english: 'virgin' },
            { coptic: 'ⲙⲁⲩ ⲙⲫϯ', english: 'Mother of God' },
            { coptic: 'ⲧⲁⲭⲩⲙⲛⲏ', english: 'the bride' }
          ]
        },
        {
          id: 'ex-29-1-4',
          type: 'translation',
          question: 'Translate: ⲧⲁⲩⲃⲟⲩⲧⲱⲧⲥ ⲛⲉⲙ ⲧⲁⲓⲏⲟⲩⲧ ⲉⲙⲁϣⲱ',
          questionCoptic: 'ⲧⲁⲩⲃⲟⲩⲧⲱⲧⲥ ⲛⲉⲙ ⲧⲁⲓⲏⲟⲩⲧ ⲉⲙⲁϣⲱ',
          correctAnswer: 'The honored and highly exalted',
          options: ['The honored and highly exalted', 'Glorified and praised', 'Blessed and holy', 'Pure and righteous'],
          explanation: 'ⲧⲁⲩⲃⲟⲩⲧⲱⲧⲥ = the honored one + ⲛⲉⲙ = and + ⲧⲁⲓⲏⲟⲩⲧ ⲉⲙⲁϣⲱ = the greatly exalted'
        },
        {
          id: 'ex-29-1-5',
          type: 'sentence_building',
          question: 'Build: "The beautiful dove"',
          correctAnswer: 'ϯϭⲣⲟⲙⲡⲓ ⲉⲑⲛⲉⲥⲱⲥ',
          wordBank: ['ϯ', 'ϭⲣⲟⲙⲡⲓ', 'ⲉⲑⲛⲉⲥⲱⲥ', 'ⲙⲁⲩ'],
          explanation: 'ϯϭⲣⲟⲙⲡⲓ ⲉⲑⲛⲉⲥⲱⲥ = the beautiful dove (Marian symbol)'
        },
        {
          id: 'ex-29-1-6',
          type: 'multiple_choice',
          question: 'What is ⲱⲣⲡ ⲉⲣⲟⲛ?',
          correctAnswer: 'intercede for us',
          options: ['intercede for us', 'pray to us', 'bless us', 'save us'],
          explanation: 'ⲱⲣⲡ ⲉⲣⲟⲛ = intercede for us (from ⲱⲣⲡ "to intercede")'
        },
        {
          id: 'ex-29-1-7',
          type: 'fill_blank',
          question: 'Complete: ϩⲓⲧⲉⲛ ⲛⲉⲡⲣⲉⲥⲃⲓⲁ = Through your ___',
          correctAnswer: 'intercessions',
          options: ['intercessions', 'prayers', 'blessings', 'mercy'],
          explanation: 'ϩⲓⲧⲉⲛ ⲛⲉⲡⲣⲉⲥⲃⲓⲁ = through your intercessions (ⲡⲣⲉⲥⲃⲓⲁ from Greek presveia)'
        },
        {
          id: 'ex-29-1-8',
          type: 'translation',
          question: 'Translate: ⲡⲓⲥⲟⲗⲥⲉⲗ ⲛ̀ⲧⲉⲧ̀ⲫⲉ',
          questionCoptic: 'ⲡⲓⲥⲟⲗⲥⲉⲗ ⲛ̀ⲧⲉⲧ̀ⲫⲉ',
          correctAnswer: 'The star of heaven',
          options: ['The star of heaven', 'The heavenly light', 'The morning star', 'The celestial sign'],
          explanation: 'ⲡⲓⲥⲟⲗⲥⲉⲗ = the star + ⲛ̀ⲧⲉⲧ̀ⲫⲉ = of heaven - another Marian title'
        }
      ]
    },
    {
      id: 'lesson-29-2',
      unitId: 'unit-29',
      title: 'Psalm 150 - Praise Instruments',
      description: 'Complete Psalm 150 with musical instruments',
      order: 2,
      xpReward: 50,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-29-2-1',
          type: 'translation',
          question: 'Translate: ⲥⲙⲟⲩ ⲉⲣⲟϥ ϧⲉⲛ ⲟⲩⲥⲙⲏ ⲛ̀ⲥⲁⲗⲡⲓⲅⲝ',
          questionCoptic: 'ⲥⲙⲟⲩ ⲉⲣⲟϥ ϧⲉⲛ ⲟⲩⲥⲙⲏ ⲛ̀ⲥⲁⲗⲡⲓⲅⲝ',
          correctAnswer: 'Praise him with the sound of trumpet',
          options: ['Praise him with the sound of trumpet', 'Blow the trumpet to praise him', 'Sound trumpets for him', 'Let trumpets praise'],
          explanation: 'ⲥⲙⲟⲩ ⲉⲣⲟϥ = praise him + ϧⲉⲛ ⲟⲩⲥⲙⲏ = with a sound + ⲛ̀ⲥⲁⲗⲡⲓⲅⲝ = of trumpet'
        },
        {
          id: 'ex-29-2-2',
          type: 'multiple_choice',
          question: 'What is ⲯⲁⲗⲧⲏⲣⲓⲟⲛ?',
          questionCoptic: 'ⲯⲁⲗⲧⲏⲣⲓⲟⲛ',
          correctAnswer: 'psaltery/harp',
          options: ['psaltery/harp', 'trumpet', 'drum', 'flute'],
          explanation: 'ⲯⲁⲗⲧⲏⲣⲓⲟⲛ (psaltērion, from Greek) = psaltery, a stringed instrument like a harp'
        },
        {
          id: 'ex-29-2-3',
          type: 'matching',
          question: 'Match musical instruments',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲥⲁⲗⲡⲓⲅⲝ', english: 'trumpet' },
            { coptic: 'ⲯⲁⲗⲧⲏⲣⲓⲟⲛ', english: 'psaltery/harp' },
            { coptic: 'ⲕⲩⲙⲃⲁⲗⲟⲛ', english: 'cymbal' },
            { coptic: 'ⲕⲓⲑⲁⲣⲁ', english: 'lyre/guitar' }
          ]
        },
        {
          id: 'ex-29-2-4',
          type: 'translation',
          question: 'Translate: ⲥⲙⲟⲩ ⲉⲣⲟϥ ϧⲉⲛ ϩⲁⲛⲕⲩⲙⲃⲁⲗⲟⲛ ⲉⲩⲉⲣϩⲣⲟⲩⲟⲩ',
          questionCoptic: 'ⲥⲙⲟⲩ ⲉⲣⲟϥ ϧⲉⲛ ϩⲁⲛⲕⲩⲙⲃⲁⲗⲟⲛ ⲉⲩⲉⲣϩⲣⲟⲩⲟⲩ',
          correctAnswer: 'Praise him with resounding cymbals',
          options: ['Praise him with resounding cymbals', 'With loud cymbals praise him', 'Cymbals that ring out praise him', 'Noisy cymbals for praise'],
          explanation: 'ⲥⲙⲟⲩ ⲉⲣⲟϥ = praise him + ϧⲉⲛ ϩⲁⲛⲕⲩⲙⲃⲁⲗⲟⲛ = with cymbals + ⲉⲩⲉⲣϩⲣⲟⲩⲟⲩ = resounding/sounding'
        },
        {
          id: 'ex-29-2-5',
          type: 'sentence_building',
          question: 'Build: "With stringed instruments"',
          correctAnswer: 'ϧⲉⲛ ⲟⲩⲯⲁⲗⲧⲏⲣⲓⲟⲛ ⲛⲉⲙ ⲟⲩⲕⲓⲑⲁⲣⲁ',
          wordBank: ['ϧⲉⲛ', 'ⲟⲩⲯⲁⲗⲧⲏⲣⲓⲟⲛ', 'ⲛⲉⲙ', 'ⲟⲩⲕⲓⲑⲁⲣⲁ'],
          explanation: 'ϧⲉⲛ ⲟⲩⲯⲁⲗⲧⲏⲣⲓⲟⲛ ⲛⲉⲙ ⲟⲩⲕⲓⲑⲁⲣⲁ = with psaltery and lyre'
        },
        {
          id: 'ex-29-2-6',
          type: 'multiple_choice',
          question: 'What is ⲛⲓϥⲓ ⲧⲏⲣⲟⲩ ⲉⲧϥⲓ ⲛⲓϥⲓ?',
          correctAnswer: 'every breath/all that breathes',
          options: ['every breath/all that breathes', 'all living things', 'all creatures', 'everyone who lives'],
          explanation: 'ⲛⲓϥⲓ ⲧⲏⲣⲟⲩ ⲉⲧϥⲓ ⲛⲓϥⲓ = every breath that breathes - the climax of Psalm 150'
        },
        {
          id: 'ex-29-2-7',
          type: 'fill_blank',
          question: 'Complete: ⲙⲁⲣⲟⲩⲥⲙⲟⲩ ___ = Let them bless the Lord',
          correctAnswer: 'ⲉⲡϭⲟⲓⲥ',
          options: ['ⲉⲡϭⲟⲓⲥ', 'ⲉⲫϯ', 'ⲙⲙⲟϥ', 'ⲉⲣⲟϥ'],
          explanation: 'ⲉⲡϭⲟⲓⲥ (e-pchois) = the Lord (with directional ⲉ-)'
        },
        {
          id: 'ex-29-2-8',
          type: 'translation',
          question: 'Translate: ⲛⲓϥⲓ ⲛⲓⲃⲉⲛ ⲙⲁⲣⲟⲩⲥⲙⲟⲩ ⲉⲫⲣⲁⲛ ⲙⲡϭⲟⲓⲥ',
          questionCoptic: 'ⲛⲓϥⲓ ⲛⲓⲃⲉⲛ ⲙⲁⲣⲟⲩⲥⲙⲟⲩ ⲉⲫⲣⲁⲛ ⲙⲡϭⲟⲓⲥ',
          correctAnswer: 'Let everything that breathes praise the name of the Lord',
          options: ['Let everything that breathes praise the name of the Lord', 'All breath blesses the Lord\'s name', 'Every living thing praises God', 'All creatures bless the Lord'],
          explanation: 'ⲛⲓϥⲓ ⲛⲓⲃⲉⲛ = all breaths + ⲙⲁⲣⲟⲩⲥⲙⲟⲩ = let them praise + ⲉⲫⲣⲁⲛ ⲙⲡϭⲟⲓⲥ = the name of the Lord'
        }
      ]
    },
    {
      id: 'lesson-29-3',
      unitId: 'unit-29',
      title: 'The Trisagion Hymn - Complete',
      description: 'Full Thrice-Holy with responses',
      order: 3,
      xpReward: 50,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-29-3-1',
          type: 'translation',
          question: 'Translate: ⲁⲅⲓⲟⲥ ⲟ ⲑⲉⲟⲥ ⲁⲅⲓⲟⲥ ⲓⲥⲭⲩⲣⲟⲥ ⲁⲅⲓⲟⲥ ⲁⲑⲁⲛⲁⲧⲟⲥ',
          questionCoptic: 'ⲁⲅⲓⲟⲥ ⲟ ⲑⲉⲟⲥ ⲁⲅⲓⲟⲥ ⲓⲥⲭⲩⲣⲟⲥ ⲁⲅⲓⲟⲥ ⲁⲑⲁⲛⲁⲧⲟⲥ',
          correctAnswer: 'Holy God, Holy Mighty, Holy Immortal',
          options: ['Holy God, Holy Mighty, Holy Immortal', 'Three times holy is God', 'Holy is the strong immortal God', 'God is holy, mighty, immortal'],
          explanation: 'ⲁⲅⲓⲟⲥ ⲟ ⲑⲉⲟⲥ (Holy God) + ⲁⲅⲓⲟⲥ ⲓⲥⲭⲩⲣⲟⲥ (Holy Mighty) + ⲁⲅⲓⲟⲥ ⲁⲑⲁⲛⲁⲧⲟⲥ (Holy Immortal) - the Trisagion'
        },
        {
          id: 'ex-29-3-2',
          type: 'multiple_choice',
          question: 'How many times is ⲁⲅⲓⲟⲥ said?',
          correctAnswer: 'Three times',
          options: ['Three times', 'Seven times', 'Once', 'Twelve times'],
          explanation: 'ⲁⲅⲓⲟⲥ (holy) is said three times - hence "Trisagion" (tri = three, hagios = holy)'
        },
        {
          id: 'ex-29-3-3',
          type: 'matching',
          question: 'Match Trisagion attributes',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲟ ⲑⲉⲟⲥ', english: 'God' },
            { coptic: 'ⲓⲥⲭⲩⲣⲟⲥ', english: 'mighty/strong' },
            { coptic: 'ⲁⲑⲁⲛⲁⲧⲟⲥ', english: 'immortal' },
            { coptic: 'ⲁⲅⲓⲟⲥ', english: 'holy' }
          ]
        },
        {
          id: 'ex-29-3-4',
          type: 'translation',
          question: 'Translate: ⲉⲗⲉⲏⲥⲟⲛ ⲏⲙⲁⲥ',
          questionCoptic: 'ⲉⲗⲉⲏⲥⲟⲛ ⲏⲙⲁⲥ',
          correctAnswer: 'Have mercy on us',
          options: ['Have mercy on us', 'Be merciful to us', 'Pity us', 'All of the above'],
          explanation: 'ⲉⲗⲉⲏⲥⲟⲛ ⲏⲙⲁⲥ (eleēson hēmas, Greek) = have mercy on us - the response after Trisagion'
        },
        {
          id: 'ex-29-3-5',
          type: 'sentence_building',
          question: 'Build the complete Trisagion with response',
          correctAnswer: 'ⲁⲅⲓⲟⲥ ⲟ ⲑⲉⲟⲥ ⲁⲅⲓⲟⲥ ⲓⲥⲭⲩⲣⲟⲥ ⲁⲅⲓⲟⲥ ⲁⲑⲁⲛⲁⲧⲟⲥ ⲉⲗⲉⲏⲥⲟⲛ ⲏⲙⲁⲥ',
          wordBank: ['ⲁⲅⲓⲟⲥ ⲟ ⲑⲉⲟⲥ', 'ⲁⲅⲓⲟⲥ ⲓⲥⲭⲩⲣⲟⲥ', 'ⲁⲅⲓⲟⲥ ⲁⲑⲁⲛⲁⲧⲟⲥ', 'ⲉⲗⲉⲏⲥⲟⲛ ⲏⲙⲁⲥ'],
          explanation: 'Holy God, Holy Mighty, Holy Immortal, have mercy on us - the complete Trisagion prayer'
        },
        {
          id: 'ex-29-3-6',
          type: 'multiple_choice',
          question: 'The Trisagion is usually said how many times in liturgy?',
          correctAnswer: 'Three times',
          options: ['Three times', 'Once', 'Seven times', 'Continuously'],
          explanation: 'The entire Trisagion is traditionally repeated three times in the liturgy'
        },
        {
          id: 'ex-29-3-7',
          type: 'fill_blank',
          question: 'Complete: ___ ⲁⲑⲁⲛⲁⲧⲟⲥ = Holy Immortal',
          correctAnswer: 'ⲁⲅⲓⲟⲥ',
          options: ['ⲁⲅⲓⲟⲥ', 'ⲟⲩⲁⲃ', 'ⲉⲑⲟⲩⲁⲃ', 'ⲧⲟⲩⲃⲟ'],
          explanation: 'ⲁⲅⲓⲟⲥ (hagios, Greek) = holy - used consistently in liturgical Greek phrases'
        },
        {
          id: 'ex-29-3-8',
          type: 'translation',
          question: 'Translate: ⲫⲏⲉⲧⲁϥⲧⲱⲛϥ ⲉⲃⲟⲗϧⲉⲛ ⲛⲏⲉⲑⲙⲱⲟⲩⲧ ⲉⲗⲉⲏⲥⲟⲛ ⲏⲙⲁⲥ',
          questionCoptic: 'ⲫⲏⲉⲧⲁϥⲧⲱⲛϥ ⲉⲃⲟⲗϧⲉⲛ ⲛⲏⲉⲑⲙⲱⲟⲩⲧ ⲉⲗⲉⲏⲥⲟⲛ ⲏⲙⲁⲥ',
          correctAnswer: 'Who rose from the dead, have mercy on us',
          options: ['Who rose from the dead, have mercy on us', 'The risen one from death, pity us', 'Resurrected from the dead, be merciful', 'He who arose, have mercy'],
          explanation: 'ⲫⲏⲉⲧⲁϥⲧⲱⲛϥ = who rose + ⲉⲃⲟⲗϧⲉⲛ ⲛⲏⲉⲑⲙⲱⲟⲩⲧ = from the dead + ⲉⲗⲉⲏⲥⲟⲛ ⲏⲙⲁⲥ = have mercy on us - Paschal addition to Trisagion'
        }
      ]
    },
    {
      id: 'lesson-29-4',
      unitId: 'unit-29',
      title: 'Liturgical Refrains & Hymns',
      description: 'Common hymn refrains and responses',
      order: 4,
      xpReward: 50,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-29-4-1',
          type: 'translation',
          question: 'Translate: ⲧⲉⲛⲟⲩⲱϣⲧ ⲙ̀ⲙⲟⲕ ⲱ ⲫϯ ⲛⲉⲙ ⲧⲉⲕⲙⲉⲑⲁⲅⲁⲑⲟⲥ',
          questionCoptic: 'ⲧⲉⲛⲟⲩⲱϣⲧ ⲙ̀ⲙⲟⲕ ⲱ ⲫϯ ⲛⲉⲙ ⲧⲉⲕⲙⲉⲑⲁⲅⲁⲑⲟⲥ',
          correctAnswer: 'We worship you, O God, and your goodness',
          options: ['We worship you, O God, and your goodness', 'We adore you, God, with your kindness', 'Worshiping you, God, and your grace', 'We bow to you, Lord, and your mercy'],
          explanation: 'ⲧⲉⲛⲟⲩⲱϣⲧ ⲙ̀ⲙⲟⲕ = we worship you + ⲱ ⲫϯ = O God + ⲛⲉⲙ ⲧⲉⲕⲙⲉⲑⲁⲅⲁⲑⲟⲥ = and your goodness (Bohairic ⲫϯ not ⲫⲛⲟⲩϯ!)'
        },
        {
          id: 'ex-29-4-2',
          type: 'multiple_choice',
          question: 'What is ⲙⲉⲑⲁⲅⲁⲑⲟⲥ?',
          questionCoptic: 'ⲙⲉⲑⲁⲅⲁⲑⲟⲥ',
          correctAnswer: 'goodness/kindness',
          options: ['goodness/kindness', 'power', 'glory', 'mercy'],
          explanation: 'ⲙⲉⲑⲁⲅⲁⲑⲟⲥ (methagathos) = goodness, kindness (ⲙⲉⲧ- prefix + ⲁⲅⲁⲑⲟⲥ "good" from Greek)'
        },
        {
          id: 'ex-29-4-3',
          type: 'matching',
          question: 'Match worship vocabulary',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲟⲩⲱϣⲧ', english: 'to worship' },
            { coptic: 'ⲥⲙⲟⲩ', english: 'to bless/praise' },
            { coptic: 'ϯⲱⲟⲩ', english: 'to glorify' },
            { coptic: 'ϣⲉⲡϩⲙⲟⲧ', english: 'to give thanks' }
          ]
        },
        {
          id: 'ex-29-4-4',
          type: 'translation',
          question: 'Translate: ⲡⲓⲱⲟⲩ ⲫⲁⲕ ⲱ ⲡⲉⲛⲛⲟⲩϯ',
          questionCoptic: 'ⲡⲓⲱⲟⲩ ⲫⲁⲕ ⲱ ⲡⲉⲛⲛⲟⲩϯ',
          correctAnswer: 'Glory to you, O our God',
          options: ['Glory to you, O our God', 'Your glory, our God', 'The glory is yours, God', 'Glory belongs to you, Lord'],
          explanation: 'ⲡⲓⲱⲟⲩ = the glory + ⲫⲁⲕ = yours/to you + ⲱ ⲡⲉⲛⲛⲟⲩϯ = O our God'
        },
        {
          id: 'ex-29-4-5',
          type: 'sentence_building',
          question: 'Build: "Holy, holy, holy"',
          correctAnswer: 'ⲁⲅⲓⲟⲥ ⲁⲅⲓⲟⲥ ⲁⲅⲓⲟⲥ',
          wordBank: ['ⲁⲅⲓⲟⲥ', 'ⲁⲅⲓⲟⲥ', 'ⲁⲅⲓⲟⲥ', 'ⲟⲩⲁⲃ'],
          explanation: 'ⲁⲅⲓⲟⲥ ⲁⲅⲓⲟⲥ ⲁⲅⲓⲟⲥ = Holy, holy, holy (Sanctus from Isaiah 6:3)'
        },
        {
          id: 'ex-29-4-6',
          type: 'multiple_choice',
          question: 'The Sanctus continues with what phrase?',
          correctAnswer: 'ⲡϭⲟⲓⲥ ⲥⲁⲃⲁⲱⲑ (Lord of Hosts)',
          options: ['ⲡϭⲟⲓⲥ ⲥⲁⲃⲁⲱⲑ (Lord of Hosts)', 'ⲫϯ ⲡⲓⲡⲁⲛⲧⲟⲕⲣⲁⲧⲱⲣ (God Almighty)', 'ⲡⲓⲟⲩⲣⲟ ⲛ̀ⲧⲉⲫⲉ (King of Heaven)', 'ⲡⲉⲛⲓⲱⲧ (Our Father)'],
          explanation: 'ⲡϭⲟⲓⲥ ⲥⲁⲃⲁⲱⲑ = Lord of Hosts/Armies - completing the Sanctus: "Holy, holy, holy, Lord of Hosts"'
        },
        {
          id: 'ex-29-4-7',
          type: 'fill_blank',
          question: 'Complete: ⲧ̀ⲫⲉ ⲛⲉⲙ ⲡⲓⲕⲁϩⲓ ⲙⲉϩ ___ = Heaven and earth are full of your glory',
          correctAnswer: 'ⲉⲃⲟⲗϧⲉⲛ ⲡⲉⲕⲱⲟⲩ',
          options: ['ⲉⲃⲟⲗϧⲉⲛ ⲡⲉⲕⲱⲟⲩ', 'ⲛ̀ⲧⲉⲕⲙⲉⲧⲟⲩⲣⲟ', 'ⲙⲡⲉⲕⲛⲁⲓ', 'ⲉⲃⲟⲗϩⲓⲧⲟⲧⲕ'],
          explanation: 'ⲉⲃⲟⲗϧⲉⲛ ⲡⲉⲕⲱⲟⲩ = from your glory - continuing the Sanctus'
        },
        {
          id: 'ex-29-4-8',
          type: 'translation',
          question: 'Translate: ⲱⲥⲁⲛⲛⲁ ϧⲉⲛ ⲛⲏⲉⲧϭⲟⲥⲓ',
          questionCoptic: 'ⲱⲥⲁⲛⲛⲁ ϧⲉⲛ ⲛⲏⲉⲧϭⲟⲥⲓ',
          correctAnswer: 'Hosanna in the highest',
          options: ['Hosanna in the highest', 'Save us in the heights', 'Praise in high places', 'Hosanna to the exalted'],
          explanation: 'ⲱⲥⲁⲛⲛⲁ (hosanna, from Hebrew "save now") + ϧⲉⲛ ⲛⲏⲉⲧϭⲟⲥⲓ = in the highest - liturgical acclamation'
        }
      ]
    },
    {
      id: 'lesson-29-5',
      unitId: 'unit-29',
      title: 'Psalm 100:1-2 - Make a Joyful Noise',
      description: 'Jubilant call to worship from Psalm 100',
      order: 5,
      xpReward: 35,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-29-5-1',
          type: 'translation',
          question: 'Translate: ⲁⲣⲓϩⲟ ⲉⲣⲟϥ ⲙⲫϯ',
          questionCoptic: 'ⲁⲣⲓϩⲟ ⲉⲣⲟϥ ⲙⲫϯ',
          correctAnswer: 'Shout to God',
          options: ['Shout to God', 'Cry out to God', 'Sing to God', 'Praise God'],
          explanation: 'ⲁⲣⲓϩⲟ = shout, make a joyful noise + ⲉⲣⲟϥ = to him + ⲙⲫϯ = God (Bohairic ⲫϯ not ⲫⲛⲟⲩϯ!)'
        },
        {
          id: 'ex-29-5-2',
          type: 'multiple_choice',
          question: 'What does ⲁⲣⲓϩⲟ mean?',
          questionCoptic: 'ⲁⲣⲓϩⲟ',
          correctAnswer: 'to shout joyfully',
          options: ['to shout joyfully', 'to sing', 'to pray', 'to worship'],
          explanation: 'ⲁⲣⲓϩⲟ (ari-ho) = to shout, to make a joyful noise (a liturgical imperative)'
        },
        {
          id: 'ex-29-5-3',
          type: 'matching',
          question: 'Match Psalm 100 vocabulary',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲁⲣⲓϩⲟ', english: 'shout, make noise' },
            { coptic: 'ϣⲉⲙϣⲓ', english: 'serve' },
            { coptic: 'ⲣⲁϣⲓ', english: 'rejoice' },
            { coptic: 'ⲥⲙⲟⲩ', english: 'praise' }
          ]
        },
        {
          id: 'ex-29-5-4',
          type: 'translation',
          question: 'Translate: ϣⲉⲙϣⲓ ⲙⲡϭⲟⲓⲥ ϧⲉⲛ ⲟⲩⲣⲁϣⲓ',
          questionCoptic: 'ϣⲉⲙϣⲓ ⲙⲡϭⲟⲓⲥ ϧⲉⲛ ⲟⲩⲣⲁϣⲓ',
          correctAnswer: 'Serve the Lord with gladness',
          options: ['Serve the Lord with gladness', 'Work for the Lord joyfully', 'Minister to God with joy', 'Worship the Lord happily'],
          explanation: 'ϣⲉⲙϣⲓ = serve + ⲙⲡϭⲟⲓⲥ = the Lord + ϧⲉⲛ ⲟⲩⲣⲁϣⲓ = with gladness/joy'
        },
        {
          id: 'ex-29-5-5',
          type: 'sentence_building',
          question: 'Build: \"Serve the Lord\"',
          correctAnswer: 'ϣⲉⲙϣⲓ ⲙⲡϭⲟⲓⲥ',
          wordBank: ['ϣⲉⲙϣⲓ', 'ⲙ', 'ⲡϭⲟⲓⲥ', 'ⲟⲩⲱϣⲧ'],
          explanation: 'ϣⲉⲙϣⲓ ⲙⲡϭⲟⲓⲥ = serve the Lord (imperative form)'
        },
        {
          id: 'ex-29-5-6',
          type: 'fill_blank',
          question: 'Complete: ⲁⲣⲓϩⲟ ⲉⲣⲟϥ ⲙⲫϯ ⲡⲓⲕⲁϩⲓ ___ = Shout to God, all the earth',
          correctAnswer: 'ⲧⲏⲣϥ',
          options: ['ⲧⲏⲣϥ', 'ⲛⲓⲃⲉⲛ', 'ⲕⲁϩⲓ', 'ⲧⲏⲣⲟⲩ'],
          explanation: 'ⲧⲏⲣϥ (all of it) - ⲡⲓⲕⲁϩⲓ ⲧⲏⲣϥ = all the earth'
        },
        {
          id: 'ex-29-5-7',
          type: 'translation',
          question: 'Translate: ⲙⲱⲓⲧ ⲉϩⲟⲩⲛ ⲉⲛⲉϥⲣⲟ',
          questionCoptic: 'ⲙⲱⲓⲧ ⲉϩⲟⲩⲛ ⲉⲛⲉϥⲣⲟ',
          correctAnswer: 'Enter into his gates',
          options: ['Enter into his gates', 'Walk to his doors', 'Go into his courts', 'Come to his gates'],
          explanation: 'ⲙⲱⲓⲧ = walk/go + ⲉϩⲟⲩⲛ = into + ⲉⲛⲉϥⲣⲟ = his gates'
        },
        {
          id: 'ex-29-5-8',
          type: 'multiple_choice',
          question: 'How do you say \"with thanksgiving\" in Coptic?',
          correctAnswer: 'ϧⲉⲛ ⲟⲩϣⲉⲡϩⲙⲟⲧ',
          options: ['ϧⲉⲛ ⲟⲩϣⲉⲡϩⲙⲟⲧ', 'ⲙⲉⲧⲁⲛⲟⲓⲁ', 'ϧⲉⲛ ⲟⲩⲣⲁϣⲓ', 'ϧⲉⲛ ⲟⲩⲥⲙⲟⲩ'],
          explanation: 'ϧⲉⲛ ⲟⲩϣⲉⲡϩⲙⲟⲧ = with thanksgiving (ϣⲉⲡϩⲙⲟⲧ = give thanks)'
        }
      ]
    },
    {
      id: 'lesson-29-6',
      unitId: 'unit-29',
      title: 'Psalm 150:1-2 - Praise the Lord',
      description: 'The opening of the final Psalm',
      order: 6,
      xpReward: 35,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-29-6-1',
          type: 'translation',
          question: 'Translate: ⲥⲙⲟⲩ ⲉⲡϭⲟⲓⲥ',
          questionCoptic: 'ⲥⲙⲟⲩ ⲉⲡϭⲟⲓⲥ',
          correctAnswer: 'Praise the Lord',
          options: ['Praise the Lord', 'Bless the Lord', 'Thank the Lord', 'Worship the Lord'],
          explanation: 'ⲥⲙⲟⲩ = praise/bless + ⲉⲡϭⲟⲓⲥ = the Lord (directional ⲉ-)'
        },
        {
          id: 'ex-29-6-2',
          type: 'multiple_choice',
          question: 'What is ⲡⲉⲧⲟⲩⲁⲃ?',
          questionCoptic: 'ⲡⲉⲧⲟⲩⲁⲃ',
          correctAnswer: 'the holy place/sanctuary',
          options: ['the holy place/sanctuary', 'the holy one', 'the holiness', 'the sacred'],
          explanation: 'ⲡⲉⲧⲟⲩⲁⲃ = the holy place, sanctuary (ⲡⲉⲧ- \"the one/place which\" + ⲟⲩⲁⲃ \"holy\")'
        },
        {
          id: 'ex-29-6-3',
          type: 'matching',
          question: 'Match praise vocabulary',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲥⲙⲟⲩ', english: 'praise/bless' },
            { coptic: 'ⲧⲁⲓⲟ', english: 'honor/glorify' },
            { coptic: 'ⲁⲣⲓϩⲟ', english: 'shout' },
            { coptic: 'ϣⲉⲡϩⲙⲟⲧ', english: 'give thanks' }
          ]
        },
        {
          id: 'ex-29-6-4',
          type: 'translation',
          question: 'Translate: ⲥⲙⲟⲩ ⲉⲣⲟϥ ϧⲉⲛ ⲡⲓⲧⲁϫⲣⲟ ⲛ̀ⲧⲉⲧⲉϥϫⲟⲙ',
          questionCoptic: 'ⲥⲙⲟⲩ ⲉⲣⲟϥ ϧⲉⲛ ⲡⲓⲧⲁϫⲣⲟ ⲛ̀ⲧⲉⲧⲉϥϫⲟⲙ',
          correctAnswer: 'Praise him in the firmament of his power',
          options: ['Praise him in the firmament of his power', 'Bless him in the sky of strength', 'Praise his powerful heavens', 'Honor him in his mighty firmament'],
          explanation: 'ⲥⲙⲟⲩ ⲉⲣⲟϥ = praise him + ϧⲉⲛ ⲡⲓⲧⲁϫⲣⲟ = in the firmament + ⲛ̀ⲧⲉⲧⲉϥϫⲟⲙ = of his power'
        },
        {
          id: 'ex-29-6-5',
          type: 'sentence_building',
          question: 'Build: \"Praise him for his mighty acts\"',
          correctAnswer: 'ⲥⲙⲟⲩ ⲉⲣⲟϥ ⲉⲑⲃⲉ ⲛⲉϥⲙⲉⲑⲛⲓϣϯ',
          wordBank: ['ⲥⲙⲟⲩ', 'ⲉⲣⲟϥ', 'ⲉⲑⲃⲉ', 'ⲛⲉϥⲙⲉⲑⲛⲓϣϯ'],
          explanation: 'ⲥⲙⲟⲩ ⲉⲣⲟϥ ⲉⲑⲃⲉ ⲛⲉϥⲙⲉⲑⲛⲓϣϯ = praise him for his mighty acts (ⲙⲉⲑⲛⲓϣϯ = mighty deeds)'
        },
        {
          id: 'ex-29-6-6',
          type: 'fill_blank',
          question: 'Complete: ⲥⲙⲟⲩ ⲉⲣⲟϥ ϧⲉⲛ ___ = Praise him in the sanctuary',
          correctAnswer: 'ⲡⲉⲧⲟⲩⲁⲃ',
          options: ['ⲡⲉⲧⲟⲩⲁⲃ', 'ⲡⲓⲧⲁϫⲣⲟ', 'ⲧ̀ⲫⲉ', 'ⲡⲓⲏⲓ'],
          explanation: 'ⲡⲉⲧⲟⲩⲁⲃ = the sanctuary (the holy place)'
        },
        {
          id: 'ex-29-6-7',
          type: 'translation',
          question: 'Translate: ⲕⲁⲧⲁ ⲡⲁϣⲁⲓ ⲛ̀ⲧⲉⲧⲉϥⲙⲉⲧⲛⲓϣϯ',
          questionCoptic: 'ⲕⲁⲧⲁ ⲡⲁϣⲁⲓ ⲛ̀ⲧⲉⲧⲉϥⲙⲉⲧⲛⲓϣϯ',
          correctAnswer: 'According to the abundance of his greatness',
          options: ['According to the abundance of his greatness', 'Because of his great abundance', 'In his very great glory', 'For his magnificent abundance'],
          explanation: 'ⲕⲁⲧⲁ = according to + ⲡⲁϣⲁⲓ = the abundance + ⲛ̀ⲧⲉⲧⲉϥⲙⲉⲧⲛⲓϣϯ = of his greatness'
        },
        {
          id: 'ex-29-6-8',
          type: 'multiple_choice',
          question: 'How do you say \"in the firmament\"?',
          correctAnswer: 'ϧⲉⲛ ⲡⲓⲧⲁϫⲣⲟ',
          options: ['ϧⲉⲛ ⲡⲓⲧⲁϫⲣⲟ', 'ϧⲉⲛ ⲧ̀ⲫⲉ', 'ϧⲉⲛ ⲡⲓⲕⲁϩⲓ', 'ϧⲉⲛ ⲡⲓϩⲟ'],
          explanation: 'ϧⲉⲛ ⲡⲓⲧⲁϫⲣⲟ = in the firmament (ⲧⲁϫⲣⲟ = firmament, vault of heaven)'
        }
      ]
    },
    {
      id: 'lesson-29-7',
      unitId: 'unit-29',
      title: '1 Corinthians 13:4-7 - Love is Patient',
      description: 'The nature of love from Paul',
      order: 7,
      xpReward: 35,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-29-7-1',
          type: 'translation',
          question: 'Translate: ϯⲁⲅⲁⲡⲏ ⲱⲟⲩⲛϩϥ ⲉⲃⲟⲗ',
          questionCoptic: 'ϯⲁⲅⲁⲡⲏ ⲱⲟⲩⲛϩϥ ⲉⲃⲟⲗ',
          correctAnswer: 'Love is patient',
          options: ['Love is patient', 'Love waits', 'Patience is love', 'Love endures'],
          explanation: 'ϯⲁⲅⲁⲡⲏ = love + ⲱⲟⲩⲛϩϥ ⲉⲃⲟⲗ = is patient (literally "long of spirit")'
        },
        {
          id: 'ex-29-7-2',
          type: 'multiple_choice',
          question: 'What does ⲱⲟⲩⲛϩϥ ⲉⲃⲟⲗ mean?',
          questionCoptic: 'ⲱⲟⲩⲛϩϥ ⲉⲃⲟⲗ',
          correctAnswer: 'patient (long-suffering)',
          options: ['patient (long-suffering)', 'kind', 'merciful', 'loving'],
          explanation: 'ⲱⲟⲩⲛϩϥ ⲉⲃⲟⲗ = patient, long-suffering (literally "long out" = extended patience)'
        },
        {
          id: 'ex-29-7-3',
          type: 'matching',
          question: 'Match love\'s attributes',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲱⲟⲩⲛϩϥ ⲉⲃⲟⲗ', english: 'patient' },
            { coptic: 'ⲭⲣⲏⲥⲧⲉⲩⲉⲥⲑⲁⲓ', english: 'kind' },
            { coptic: 'ⲕⲱϩ', english: 'envy' },
            { coptic: 'ϭⲓⲥⲓϩⲏⲧ', english: 'arrogant/puffed up' }
          ]
        },
        {
          id: 'ex-29-7-4',
          type: 'translation',
          question: 'Translate: ϯⲁⲅⲁⲡⲏ ⲟⲓ ⲛ̀ⲭⲣⲏⲥⲧⲟⲥ',
          questionCoptic: 'ϯⲁⲅⲁⲡⲏ ⲟⲓ ⲛ̀ⲭⲣⲏⲥⲧⲟⲥ',
          correctAnswer: 'Love is kind',
          options: ['Love is kind', 'Love is good', 'Love is gentle', 'Love is Christ-like'],
          explanation: 'ϯⲁⲅⲁⲡⲏ = love + ⲟⲓ ⲛ̀ⲭⲣⲏⲥⲧⲟⲥ = is kind (from Greek chrestos)'
        },
        {
          id: 'ex-29-7-5',
          type: 'sentence_building',
          question: 'Build: \"Love does not envy\"',
          correctAnswer: 'ϯⲁⲅⲁⲡⲏ ⲛ̀ⲥⲕⲱϩ ⲁⲛ',
          wordBank: ['ϯⲁⲅⲁⲡⲏ', 'ⲛ̀ⲥⲕⲱϩ', 'ⲁⲛ', 'ⲥⲕⲱϩ'],
          explanation: 'ϯⲁⲅⲁⲡⲏ ⲛ̀ⲥⲕⲱϩ ⲁⲛ = love does not envy (ⲕⲱϩ = envy)'
        },
        {
          id: 'ex-29-7-6',
          type: 'fill_blank',
          question: 'Complete: ϯⲁⲅⲁⲡⲏ ⲛ̀ⲥϭⲓⲥⲓϩⲏⲧ ___ = Love is not puffed up',
          correctAnswer: 'ⲁⲛ',
          options: ['ⲁⲛ', 'ⲙⲙⲟⲛ', 'ⲟⲩⲇⲉ', 'ⲡⲉ'],
          explanation: 'ⲁⲛ = not (negative particle) - ⲛ̀ⲥϭⲓⲥⲓϩⲏⲧ ⲁⲛ = does not become arrogant'
        },
        {
          id: 'ex-29-7-7',
          type: 'translation',
          question: 'Translate: ⲛ̀ⲥⲭⲟⲃϥ ⲁⲛ ⲛ̀ⲧⲉϥⲕⲁⲕⲓⲁ',
          questionCoptic: 'ⲛ̀ⲥⲭⲟⲃϥ ⲁⲛ ⲛ̀ⲧⲉϥⲕⲁⲕⲓⲁ',
          correctAnswer: 'Does not think evil',
          options: ['Does not think evil', 'Is not evil-minded', 'Does not remember wickedness', 'Is not bad'],
          explanation: 'ⲛ̀ⲥⲭⲟⲃϥ ⲁⲛ = does not think/reckon + ⲛ̀ⲧⲉϥⲕⲁⲕⲓⲁ = evil (from Greek kakia)'
        },
        {
          id: 'ex-29-7-8',
          type: 'multiple_choice',
          question: 'How do you say \"Love bears all things\"?',
          correctAnswer: 'ϯⲁⲅⲁⲡⲏ ϣⲁⲥϥⲓ ϩⲱⲃ ⲛⲓⲃⲉⲛ',
          options: ['ϯⲁⲅⲁⲡⲏ ϣⲁⲥϥⲓ ϩⲱⲃ ⲛⲓⲃⲉⲛ', 'ϯⲁⲅⲁⲡⲏ ⲙⲟⲕϩ', 'ϯⲁⲅⲁⲡⲏ ⲟⲩⲱⲛϩ', 'ϯⲁⲅⲁⲡⲏ ϥⲓ ϩⲱⲃ'],
          explanation: 'ϯⲁⲅⲁⲡⲏ ϣⲁⲥϥⲓ ϩⲱⲃ ⲛⲓⲃⲉⲛ = love bears all things (ϥⲓ = bear, carry + ϩⲱⲃ ⲛⲓⲃⲉⲛ = all things)'
        }
      ]
    },
    {
      id: 'lesson-29-8',
      unitId: 'unit-29',
      title: 'Prayer of Thanksgiving - Part 1',
      description: 'Opening of the Agpeya thanksgiving',
      order: 8,
      xpReward: 35,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-29-8-1',
          type: 'translation',
          question: 'Translate: ⲧⲉⲛϣⲉⲡϩⲙⲟⲧ ⲛ̀ⲧⲟⲧⲕ',
          questionCoptic: 'ⲧⲉⲛϣⲉⲡϩⲙⲟⲧ ⲛ̀ⲧⲟⲧⲕ',
          correctAnswer: 'We give thanks to you',
          options: ['We give thanks to you', 'We thank you', 'Giving thanks to you', 'Thankful to you'],
          explanation: 'ⲧⲉⲛϣⲉⲡϩⲙⲟⲧ = we give thanks + ⲛ̀ⲧⲟⲧⲕ = to you'
        },
        {
          id: 'ex-29-8-2',
          type: 'multiple_choice',
          question: 'What does ϣⲉⲡϩⲙⲟⲧ mean?',
          questionCoptic: 'ϣⲉⲡϩⲙⲟⲧ',
          correctAnswer: 'to give thanks',
          options: ['to give thanks', 'to pray', 'to worship', 'to bless'],
          explanation: 'ϣⲉⲡϩⲙⲟⲧ (shep-hmot) = to give thanks (literally "to take/receive grace")'
        },
        {
          id: 'ex-29-8-3',
          type: 'matching',
          question: 'Match thanksgiving vocabulary',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ϣⲉⲡϩⲙⲟⲧ', english: 'give thanks' },
            { coptic: 'ⲥⲙⲟⲩ', english: 'praise/bless' },
            { coptic: 'ⲟⲩⲱϣⲧ', english: 'worship' },
            { coptic: 'ϯⲱⲟⲩ', english: 'glorify' }
          ]
        },
        {
          id: 'ex-29-8-4',
          type: 'translation',
          question: 'Translate: ⲱ ⲡⲉⲛϭⲟⲓⲥ ⲓⲏⲥⲟⲩⲥ ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ ⲡⲓⲛⲓϣϯ ⲛ̀ⲛⲟⲩϯ',
          questionCoptic: 'ⲱ ⲡⲉⲛϭⲟⲓⲥ ⲓⲏⲥⲟⲩⲥ ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ ⲡⲓⲛⲓϣϯ ⲛ̀ⲛⲟⲩϯ',
          correctAnswer: 'O our Lord Jesus Christ, the great God',
          options: ['O our Lord Jesus Christ, the great God', 'Our Lord Jesus, the mighty Christ-God', 'O Lord Jesus, great God Christ', 'Jesus Christ our great Lord God'],
          explanation: 'ⲱ ⲡⲉⲛϭⲟⲓⲥ = O our Lord + ⲓⲏⲥⲟⲩⲥ ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ = Jesus Christ + ⲡⲓⲛⲓϣϯ ⲛ̀ⲛⲟⲩϯ = the great God'
        },
        {
          id: 'ex-29-8-5',
          type: 'sentence_building',
          question: 'Build: \"O God the Almighty\"',
          correctAnswer: 'ⲱ ⲫϯ ⲡⲓⲡⲁⲛⲧⲟⲕⲣⲁⲧⲱⲣ',
          wordBank: ['ⲱ', 'ⲫϯ', 'ⲡⲓⲡⲁⲛⲧⲟⲕⲣⲁⲧⲱⲣ', 'ⲡⲉⲛⲛⲟⲩϯ'],
          explanation: 'ⲱ ⲫϯ ⲡⲓⲡⲁⲛⲧⲟⲕⲣⲁⲧⲱⲣ = O God the Almighty (Bohairic ⲫϯ not ⲫⲛⲟⲩϯ!)'
        },
        {
          id: 'ex-29-8-6',
          type: 'fill_blank',
          question: 'Complete: ⲫⲏⲉⲧⲁϥϯ ⲛⲁⲛ ___ = Who gave us authority',
          correctAnswer: 'ⲛ̀ⲟⲩⲉⲣϣⲓϣⲓ',
          options: ['ⲛ̀ⲟⲩⲉⲣϣⲓϣⲓ', 'ⲛ̀ⲟⲩϫⲟⲙ', 'ⲛ̀ⲟⲩⲙⲉⲧⲟⲩⲣⲟ', 'ⲛ̀ⲟⲩⲱⲟⲩ'],
          explanation: 'ⲛ̀ⲟⲩⲉⲣϣⲓϣⲓ (en-ouer-shishi) = authority/power'
        },
        {
          id: 'ex-29-8-7',
          type: 'translation',
          question: 'Translate: ⲉⲑⲣⲉⲛϩⲉⲙⲥⲓ ⲉϫⲉⲛ ⲛⲓϩⲟϥ ⲛⲉⲙ ⲛⲓⲏⲓϥⲓ',
          questionCoptic: 'ⲉⲑⲣⲉⲛϩⲉⲙⲥⲓ ⲉϫⲉⲛ ⲛⲓϩⲟϥ ⲛⲉⲙ ⲛⲓⲏⲓϥⲓ',
          correctAnswer: 'To tread upon serpents and scorpions',
          options: ['To tread upon serpents and scorpions', 'That we sit on snakes and scorpions', 'To step over serpents and scorpions', 'Sitting above snakes and vipers'],
          explanation: 'ⲉⲑⲣⲉⲛϩⲉⲙⲥⲓ = that we may tread/sit + ⲉϫⲉⲛ = upon + ⲛⲓϩⲟϥ = serpents + ⲛⲉⲙ ⲛⲓⲏⲓϥⲓ = and scorpions (Luke 10:19)'
        },
        {
          id: 'ex-29-8-8',
          type: 'multiple_choice',
          question: 'How do you say \"all the power of the enemy\"?',
          correctAnswer: 'ϫⲟⲙ ⲛⲓⲃⲉⲛ ⲛ̀ⲧⲉⲡⲓϫⲁϫⲓ',
          options: ['ϫⲟⲙ ⲛⲓⲃⲉⲛ ⲛ̀ⲧⲉⲡⲓϫⲁϫⲓ', 'ⲧⲉϥϫⲟⲙ ⲧⲏⲣⲥ', 'ⲛⲓϫⲟⲙ ⲙⲡⲓϫⲁϫⲓ', 'ⲡⲓϫⲁϫⲓ ⲛ̀ϫⲱⲣⲓ'],
          explanation: 'ϫⲟⲙ ⲛⲓⲃⲉⲛ ⲛ̀ⲧⲉⲡⲓϫⲁϫⲓ = all power of the enemy (ϫⲁϫⲓ = enemy)'
        }
      ]
    },
    {
      id: 'lesson-29-9',
      unitId: 'unit-29',
      title: 'Liturgical Responses',
      description: 'Key responses in the Agpeya',
      order: 9,
      xpReward: 35,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-29-9-1',
          type: 'translation',
          question: 'Translate: ⲕⲩⲣⲓⲉ ⲉⲗⲉⲏⲥⲟⲛ',
          questionCoptic: 'ⲕⲩⲣⲓⲉ ⲉⲗⲉⲏⲥⲟⲛ',
          correctAnswer: 'Lord have mercy',
          options: ['Lord have mercy', 'Lord be merciful', 'O Lord show mercy', 'Merciful Lord'],
          explanation: 'ⲕⲩⲣⲓⲉ ⲉⲗⲉⲏⲥⲟⲛ (Kyrie eleison, Greek) = Lord have mercy - the most common liturgical response'
        },
        {
          id: 'ex-29-9-2',
          type: 'multiple_choice',
          question: 'How many times is ⲕⲩⲣⲓⲉ ⲉⲗⲉⲏⲥⲟⲛ typically said?',
          correctAnswer: 'Three times, twelve times, or forty-one times',
          options: ['Three times, twelve times, or forty-one times', 'Always seven times', 'Only once', 'Continuously'],
          explanation: 'ⲕⲩⲣⲓⲉ ⲉⲗⲉⲏⲥⲟⲛ is said in sets: 3x (Trinity), 12x (Apostles), 41x (Christ\'s stripes)'
        },
        {
          id: 'ex-29-9-3',
          type: 'matching',
          question: 'Match liturgical responses',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲕⲩⲣⲓⲉ ⲉⲗⲉⲏⲥⲟⲛ', english: 'Lord have mercy' },
            { coptic: 'ⲁⲙⲏⲛ', english: 'amen' },
            { coptic: 'ⲁⲗⲗⲏⲗⲟⲩⲓⲁ', english: 'alleluia' },
            { coptic: 'ⲇⲟⲝⲁ ⲥⲓ ⲕⲩⲣⲓⲉ', english: 'glory to you, O Lord' }
          ]
        },
        {
          id: 'ex-29-9-4',
          type: 'translation',
          question: 'Translate: ⲁⲝⲓⲟⲥ ⲉⲥⲧⲓⲛ',
          questionCoptic: 'ⲁⲝⲓⲟⲥ ⲉⲥⲧⲓⲛ',
          correctAnswer: 'It is worthy',
          options: ['It is worthy', 'He is worthy', 'Worthy is he', 'It is fitting'],
          explanation: 'ⲁⲝⲓⲟⲥ ⲉⲥⲧⲓⲛ (axios estin, Greek) = it is worthy/fitting - used before praising God'
        },
        {
          id: 'ex-29-9-5',
          type: 'sentence_building',
          question: 'Build: \"Lord have mercy\" (3x)',
          correctAnswer: 'ⲕⲩⲣⲓⲉ ⲉⲗⲉⲏⲥⲟⲛ ⲕⲩⲣⲓⲉ ⲉⲗⲉⲏⲥⲟⲛ ⲕⲩⲣⲓⲉ ⲉⲗⲉⲏⲥⲟⲛ',
          wordBank: ['ⲕⲩⲣⲓⲉ ⲉⲗⲉⲏⲥⲟⲛ', 'ⲕⲩⲣⲓⲉ ⲉⲗⲉⲏⲥⲟⲛ', 'ⲕⲩⲣⲓⲉ ⲉⲗⲉⲏⲥⲟⲛ', 'ⲁⲙⲏⲛ'],
          explanation: 'ⲕⲩⲣⲓⲉ ⲉⲗⲉⲏⲥⲟⲛ repeated three times - Trinitarian invocation'
        },
        {
          id: 'ex-29-9-6',
          type: 'fill_blank',
          question: 'Complete: ⲡⲣⲟⲥⲭⲱⲙⲉⲛ = Let us ___',
          correctAnswer: 'attend',
          options: ['attend', 'pray', 'worship', 'stand'],
          explanation: 'ⲡⲣⲟⲥⲭⲱⲙⲉⲛ (proschomen, Greek) = let us attend/pay attention - liturgical call'
        },
        {
          id: 'ex-29-9-7',
          type: 'translation',
          question: 'Translate: ⲉⲛⲓⲣⲏⲛⲏ ⲙⲉⲧⲁ ⲡⲁⲛⲧⲱⲛ',
          questionCoptic: 'ⲉⲛⲓⲣⲏⲛⲏ ⲙⲉⲧⲁ ⲡⲁⲛⲧⲱⲛ',
          correctAnswer: 'Peace be with all',
          options: ['Peace be with all', 'In peace with everyone', 'All peace', 'Universal peace'],
          explanation: 'ⲉⲛⲓⲣⲏⲛⲏ (en irēnē) = in peace + ⲙⲉⲧⲁ ⲡⲁⲛⲧⲱⲛ = with all (Greek)'
        },
        {
          id: 'ex-29-9-8',
          type: 'multiple_choice',
          question: 'How do you respond to \"Peace be with all\"?',
          correctAnswer: 'ⲕⲉ ⲙⲉⲧⲁ ⲧⲟⲩ ⲡ̀ⲛⲉⲩⲙⲁⲧⲟⲥ ⲥⲟⲩ (And with your spirit)',
          options: ['ⲕⲉ ⲙⲉⲧⲁ ⲧⲟⲩ ⲡ̀ⲛⲉⲩⲙⲁⲧⲟⲥ ⲥⲟⲩ (And with your spirit)', 'ⲁⲙⲏⲛ (Amen)', 'ⲇⲟⲝⲁ ⲥⲓ (Glory to you)', 'ⲁⲝⲓⲟⲥ (It is worthy)'],
          explanation: 'ⲕⲉ ⲙⲉⲧⲁ ⲧⲟⲩ ⲡ̀ⲛⲉⲩⲙⲁⲧⲟⲥ ⲥⲟⲩ (Ke meta tou pneumatos sou) = And with your spirit - the traditional response'
        }
      ]
    },
    {
      id: 'lesson-29-10',
      unitId: 'unit-29',
      title: 'Trisagion & Closing Prayers',
      description: 'Ending prayers of the Agpeya hours',
      order: 10,
      xpReward: 35,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-29-10-1',
          type: 'translation',
          question: 'Translate: ⲁⲅⲓⲟⲥ ⲁⲅⲓⲟⲥ ⲁⲅⲓⲟⲥ',
          questionCoptic: 'ⲁⲅⲓⲟⲥ ⲁⲅⲓⲟⲥ ⲁⲅⲓⲟⲥ',
          correctAnswer: 'Holy, holy, holy',
          options: ['Holy, holy, holy', 'Thrice holy', 'Three times holy', 'Very holy'],
          explanation: 'ⲁⲅⲓⲟⲥ ⲁⲅⲓⲟⲥ ⲁⲅⲓⲟⲥ (hagios hagios hagios, Greek) = Holy, holy, holy - the Trisagion/Sanctus'
        },
        {
          id: 'ex-29-10-2',
          type: 'multiple_choice',
          question: 'What follows \"Holy, holy, holy\" in the Sanctus?',
          correctAnswer: 'ⲕⲩⲣⲓⲟⲥ ⲥⲁⲃⲁⲱⲑ (Lord of Hosts)',
          options: ['ⲕⲩⲣⲓⲟⲥ ⲥⲁⲃⲁⲱⲑ (Lord of Hosts)', 'ⲟ ⲑⲉⲟⲥ (O God)', 'ⲡⲁⲛⲧⲟⲕⲣⲁⲧⲱⲣ (Almighty)', 'ⲉⲗⲉⲏⲥⲟⲛ (have mercy)'],
          explanation: 'ⲕⲩⲣⲓⲟⲥ ⲥⲁⲃⲁⲱⲑ (Kyrios Sabaoth) = Lord of Hosts - completing the Sanctus from Isaiah 6:3'
        },
        {
          id: 'ex-29-10-3',
          type: 'matching',
          question: 'Match closing prayer phrases',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲁⲅⲓⲟⲥ ⲟ ⲑⲉⲟⲥ', english: 'Holy God' },
            { coptic: 'ⲁⲅⲓⲟⲥ ⲓⲥⲭⲩⲣⲟⲥ', english: 'Holy Mighty' },
            { coptic: 'ⲁⲅⲓⲟⲥ ⲁⲑⲁⲛⲁⲧⲟⲥ', english: 'Holy Immortal' },
            { coptic: 'ⲉⲗⲉⲏⲥⲟⲛ ⲏⲙⲁⲥ', english: 'have mercy on us' }
          ]
        },
        {
          id: 'ex-29-10-4',
          type: 'translation',
          question: 'Translate: ⲙⲁⲣⲉⲛⲟⲩⲱϣⲧ ⲛ̀ϯⲧⲣⲓⲁⲥ ⲉⲑⲟⲩⲁⲃ',
          questionCoptic: 'ⲙⲁⲣⲉⲛⲟⲩⲱϣⲧ ⲛ̀ϯⲧⲣⲓⲁⲥ ⲉⲑⲟⲩⲁⲃ',
          correctAnswer: 'Let us worship the Holy Trinity',
          options: ['Let us worship the Holy Trinity', 'We worship the Three Holy', 'May we adore the Holy Trinity', 'Worshiping the Trinity'],
          explanation: 'ⲙⲁⲣⲉⲛⲟⲩⲱϣⲧ = let us worship + ⲛ̀ϯⲧⲣⲓⲁⲥ ⲉⲑⲟⲩⲁⲃ = the Holy Trinity'
        },
        {
          id: 'ex-29-10-5',
          type: 'sentence_building',
          question: 'Build: \"Through the prayers of the Theotokos\"',
          correctAnswer: 'ϩⲓⲧⲉⲛ ⲛⲓⲉⲩⲭⲏ ⲛ̀ⲧⲉϯⲑⲉⲟⲧⲟⲕⲟⲥ',
          wordBank: ['ϩⲓⲧⲉⲛ', 'ⲛⲓⲉⲩⲭⲏ', 'ⲛ̀ⲧⲉ', 'ϯⲑⲉⲟⲧⲟⲕⲟⲥ'],
          explanation: 'ϩⲓⲧⲉⲛ ⲛⲓⲉⲩⲭⲏ ⲛ̀ⲧⲉϯⲑⲉⲟⲧⲟⲕⲟⲥ = through the prayers of the Theotokos (Mother of God)'
        },
        {
          id: 'ex-29-10-6',
          type: 'fill_blank',
          question: 'Complete: ⲡϭⲟⲓⲥ ___ ⲛⲁⲛ = O Lord, grant us peace',
          correctAnswer: 'ⲙⲏⲓⲥ',
          options: ['ⲙⲏⲓⲥ', 'ϯ', 'ϣⲁⲛⲁϩⲧⲉⲛ', 'ⲁⲣⲓⲟⲩⲓ̀'],
          explanation: 'ⲙⲏⲓⲥ (mēis) = give (imperative) - ⲡϭⲟⲓⲥ ⲙⲏⲓⲥ ⲛⲁⲛ = O Lord, grant us'
        },
        {
          id: 'ex-29-10-7',
          type: 'translation',
          question: 'Translate: ⲁⲣⲓⲕⲁⲧⲁⲝⲓⲟⲓⲛ ⲛⲁϩⲣⲉⲛ',
          questionCoptic: 'ⲁⲣⲓⲕⲁⲧⲁⲝⲓⲟⲓⲛ ⲛⲁϩⲣⲉⲛ',
          correctAnswer: 'Make us worthy',
          options: ['Make us worthy', 'We are worthy', 'Count us worthy', 'Grant us worthiness'],
          explanation: 'ⲁⲣⲓⲕⲁⲧⲁⲝⲓⲟⲓⲛ = make (us) worthy + ⲛⲁϩⲣⲉⲛ = before us (for us)'
        },
        {
          id: 'ex-29-10-8',
          type: 'multiple_choice',
          question: 'How do you say \"Amen\" in Coptic?',
          correctAnswer: 'ⲁⲙⲏⲛ (amēn)',
          options: ['ⲁⲙⲏⲛ (amēn)', 'ⲁⲙⲓⲛ', 'ⲁⲙⲉⲛ', 'ⲁⲙⲉⲛⲧⲟⲧⲉⲛ'],
          explanation: 'ⲁⲙⲏⲛ (amēn, from Hebrew) = amen, truly, so be it - the closing affirmation of all prayers'
        }
      ]
    }
  ]
};

export default unit29;
