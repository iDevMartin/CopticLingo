import { Unit } from '../../types';

// UNIT 17: MORE BEATITUDES & LITURGICAL PRAYERS
// Verified for Bohairic dialect consistency
// Matthew 5:4-5, Glory Be (Doxology)

const unit17: Unit = {
  id: 'unit-17',
  title: 'More Beatitudes & Liturgical Prayers',
  description: 'Continue learning the Beatitudes and liturgical prayers',
  order: 17,
  color: '#00CD9C',
  lessons: [
    {
      id: 'lesson-17-1',
      unitId: 'unit-17',
      title: 'Matthew 5:4 - Blessed are Those Who Mourn',
      description: 'The second beatitude - comfort for mourners',
      order: 1,
      xpReward: 35,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-17-1-1',
          type: 'translation',
          question: 'Translate: ⲱⲟⲩⲛⲓⲁⲧⲟⲩ ⲛ̀ⲛⲏⲉⲑⲣⲓⲙⲓ',
          questionCoptic: 'ⲱⲟⲩⲛⲓⲁⲧⲟⲩ ⲛ̀ⲛⲏⲉⲑⲣⲓⲙⲓ',
          correctAnswer: 'Blessed are those who mourn',
          options: ['Blessed are those who mourn', 'Happy are the mourners', 'Blessed are the crying', 'Those who weep are blessed'],
          explanation: 'ⲱⲟⲩⲛⲓⲁⲧⲟⲩ = blessed are + ⲛ̀ⲛⲏⲉⲑⲣⲓⲙⲓ = those who mourn/weep'
        },
        {
          id: 'ex-17-1-2',
          type: 'multiple_choice',
          question: 'What does ⲣⲓⲙⲓ mean?',
          questionCoptic: 'ⲣⲓⲙⲓ',
          correctAnswer: 'to weep/mourn',
          options: ['to weep/mourn', 'to laugh', 'to speak', 'to pray'],
          explanation: 'ⲣⲓⲙⲓ (rimi) means "to weep" or "to mourn"'
        },
        {
          id: 'ex-17-1-3',
          type: 'matching',
          question: 'Match mourning vocabulary',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲣⲓⲙⲓ', english: 'to weep/mourn' },
            { coptic: 'ⲛⲏⲉⲑⲣⲓⲙⲓ', english: 'those who mourn' },
            { coptic: 'ⲛⲟⲙϯ', english: 'to comfort' },
            { coptic: 'ⲉⲩⲉⲛⲟⲙϯ ⲙⲙⲱⲟⲩ', english: 'they will be comforted' }
          ]
        },
        {
          id: 'ex-17-1-4',
          type: 'translation',
          question: 'Translate: ϫⲉ ⲛ̀ⲑⲱⲟⲩ ⲉⲩⲉⲛⲟⲙϯ ⲙⲙⲱⲟⲩ',
          questionCoptic: 'ϫⲉ ⲛ̀ⲑⲱⲟⲩ ⲉⲩⲉⲛⲟⲙϯ ⲙⲙⲱⲟⲩ',
          correctAnswer: 'For they shall be comforted',
          options: ['For they shall be comforted', 'Because they comfort', 'They will comfort', 'Comfort them'],
          explanation: 'ϫⲉ = for + ⲛ̀ⲑⲱⲟⲩ = they (emphatic) + ⲉⲩⲉⲛⲟⲙϯ ⲙⲙⲱⲟⲩ = they shall be comforted'
        },
        {
          id: 'ex-17-1-5',
          type: 'sentence_building',
          question: 'Build: "Blessed are those who mourn"',
          correctAnswer: 'ⲱⲟⲩⲛⲓⲁⲧⲟⲩ ⲛ̀ⲛⲏⲉⲑⲣⲓⲙⲓ',
          wordBank: ['ⲱⲟⲩⲛⲓⲁⲧⲟⲩ', 'ⲛ̀', 'ⲛⲏⲉⲑⲣⲓⲙⲓ', 'ⲉⲑⲛⲁϩϯ'],
          explanation: 'ⲱⲟⲩⲛⲓⲁⲧⲟⲩ ⲛ̀ⲛⲏⲉⲑⲣⲓⲙⲓ = blessed are + those who mourn'
        },
        {
          id: 'ex-17-1-6',
          type: 'fill_blank',
          question: 'Complete: ⲱⲟⲩⲛⲓⲁⲧⲟⲩ ⲛ̀ⲛⲏⲉⲑ___ = Blessed are those who mourn',
          correctAnswer: 'ⲣⲓⲙⲓ',
          options: ['ⲣⲓⲙⲓ', 'ⲥⲱⲃⲓ', 'ⲣⲁϣⲓ', 'ⲙⲟϣⲓ'],
          explanation: 'ⲣⲓⲙⲓ (to weep/mourn) completes the phrase'
        },
        {
          id: 'ex-17-1-7',
          type: 'multiple_choice',
          question: 'What is "to comfort" in Coptic?',
          correctAnswer: 'ⲛⲟⲙϯ',
          options: ['ⲛⲟⲙϯ', 'ⲣⲓⲙⲓ', 'ⲙⲉⲛⲣⲉ', 'ⲥⲙⲟⲩ'],
          explanation: 'ⲛⲟⲙϯ (nomti) means "to comfort" or "to console"'
        },
        {
          id: 'ex-17-1-8',
          type: 'matching',
          question: 'Match comfort and mourning terms',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲛⲟⲙϯ', english: 'comfort (verb)' },
            { coptic: 'ⲡⲓⲛⲟⲙϯ', english: 'the comfort (noun)' },
            { coptic: 'ⲡⲓⲣⲉϥⲛⲟⲙϯ', english: 'the comforter' },
            { coptic: 'ϯⲡⲁⲣⲁⲕⲗⲏⲥⲓⲥ', english: 'the consolation' }
          ]
        }
      ]
    },
    {
      id: 'lesson-17-2',
      unitId: 'unit-17',
      title: 'Matthew 5:5 - Blessed are the Meek',
      description: 'The third beatitude - inheritance of the earth',
      order: 2,
      xpReward: 35,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-17-2-1',
          type: 'translation',
          question: 'Translate: ⲱⲟⲩⲛⲓⲁⲧⲟⲩ ⲛ̀ⲛⲓⲣⲉⲙⲣⲁⲩϣ',
          questionCoptic: 'ⲱⲟⲩⲛⲓⲁⲧⲟⲩ ⲛ̀ⲛⲓⲣⲉⲙⲣⲁⲩϣ',
          correctAnswer: 'Blessed are the meek',
          options: ['Blessed are the meek', 'Happy are the gentle', 'Blessed are the humble', 'The meek are happy'],
          explanation: 'ⲱⲟⲩⲛⲓⲁⲧⲟⲩ = blessed are + ⲛ̀ⲛⲓⲣⲉⲙⲣⲁⲩϣ = the meek/gentle ones'
        },
        {
          id: 'ex-17-2-2',
          type: 'multiple_choice',
          question: 'What does ⲣⲉⲙⲣⲁⲩϣ mean?',
          questionCoptic: 'ⲣⲉⲙⲣⲁⲩϣ',
          correctAnswer: 'meek/gentle',
          options: ['meek/gentle', 'strong', 'proud', 'angry'],
          explanation: 'ⲣⲉⲙⲣⲁⲩϣ (remraush) means "meek" or "gentle" person'
        },
        {
          id: 'ex-17-2-3',
          type: 'matching',
          question: 'Match meekness vocabulary',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲣⲉⲙⲣⲁⲩϣ', english: 'meek/gentle' },
            { coptic: 'ⲙⲉⲧⲣⲉⲙⲣⲁⲩϣ', english: 'meekness' },
            { coptic: 'ⲑⲉⲃⲓⲟ', english: 'humble' },
            { coptic: 'ⲙⲉⲧⲑⲉⲃⲓⲟ', english: 'humility' }
          ]
        },
        {
          id: 'ex-17-2-4',
          type: 'translation',
          question: 'Translate: ϫⲉ ⲛ̀ⲑⲱⲟⲩ ⲉⲩⲉⲉⲣⲕⲗⲏⲣⲟⲛⲟⲙⲓⲛ ⲙ̀ⲡⲓⲕⲁϩⲓ',
          questionCoptic: 'ϫⲉ ⲛ̀ⲑⲱⲟⲩ ⲉⲩⲉⲉⲣⲕⲗⲏⲣⲟⲛⲟⲙⲓⲛ ⲙ̀ⲡⲓⲕⲁϩⲓ',
          correctAnswer: 'For they shall inherit the earth',
          options: ['For they shall inherit the earth', 'They inherit the land', 'Because they will have earth', 'The earth is theirs'],
          explanation: 'ϫⲉ = for + ⲛ̀ⲑⲱⲟⲩ = they + ⲉⲩⲉⲉⲣⲕⲗⲏⲣⲟⲛⲟⲙⲓⲛ = will inherit + ⲙ̀ⲡⲓⲕⲁϩⲓ = the earth'
        },
        {
          id: 'ex-17-2-5',
          type: 'multiple_choice',
          question: 'What is "to inherit" in Coptic?',
          correctAnswer: 'ⲉⲣⲕⲗⲏⲣⲟⲛⲟⲙⲓⲛ',
          options: ['ⲉⲣⲕⲗⲏⲣⲟⲛⲟⲙⲓⲛ', 'ⲉⲣⲟⲩⲣⲟ', 'ⲉⲣⲙⲉⲧⲟⲩⲣⲟ', 'ⲉⲣⲣⲟ'],
          explanation: 'ⲉⲣⲕⲗⲏⲣⲟⲛⲟⲙⲓⲛ (erkleronomin) means "to inherit" (from Greek)'
        },
        {
          id: 'ex-17-2-6',
          type: 'sentence_building',
          question: 'Build: "They will inherit the earth"',
          correctAnswer: 'ⲉⲩⲉⲉⲣⲕⲗⲏⲣⲟⲛⲟⲙⲓⲛ ⲙ̀ⲡⲓⲕⲁϩⲓ',
          wordBank: ['ⲉⲩⲉ', 'ⲉⲣⲕⲗⲏⲣⲟⲛⲟⲙⲓⲛ', 'ⲙ̀', 'ⲡⲓⲕⲁϩⲓ'],
          explanation: 'ⲉⲩⲉⲉⲣⲕⲗⲏⲣⲟⲛⲟⲙⲓⲛ ⲙ̀ⲡⲓⲕⲁϩⲓ = they will inherit the earth'
        },
        {
          id: 'ex-17-2-7',
          type: 'fill_blank',
          question: 'Complete: ⲱⲟⲩⲛⲓⲁⲧⲟⲩ ⲛ̀ⲛⲓ___ = Blessed are the meek',
          correctAnswer: 'ⲣⲉⲙⲣⲁⲩϣ',
          options: ['ⲣⲉⲙⲣⲁⲩϣ', 'ϩⲏⲕⲓ', 'ⲑⲉⲃⲓⲟ', 'ⲣⲱⲙⲓ'],
          explanation: 'ⲣⲉⲙⲣⲁⲩϣ (meek ones) completes the phrase'
        },
        {
          id: 'ex-17-2-8',
          type: 'matching',
          question: 'Match inheritance vocabulary',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲕⲗⲏⲣⲟⲛⲟⲙⲓⲁ', english: 'inheritance' },
            { coptic: 'ⲕⲗⲏⲣⲟⲛⲟⲙⲟⲥ', english: 'heir' },
            { coptic: 'ⲉⲣⲕⲗⲏⲣⲟⲛⲟⲙⲓⲛ', english: 'to inherit' },
            { coptic: 'ⲡⲓⲕⲁϩⲓ', english: 'the earth/land' }
          ]
        }
      ]
    },
    {
      id: 'lesson-17-3',
      unitId: 'unit-17',
      title: 'Glory Be (Doxology)',
      description: 'Traditional doxology prayer',
      order: 3,
      xpReward: 35,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-17-3-1',
          type: 'translation',
          question: 'Translate: ⲡⲓⲱⲟⲩ ⲙⲫⲓⲱⲧ',
          questionCoptic: 'ⲡⲓⲱⲟⲩ ⲙⲫⲓⲱⲧ',
          correctAnswer: 'Glory to the Father',
          options: ['Glory to the Father', 'The Father is glorious', 'Glory of Father', 'The glorious Father'],
          explanation: 'ⲡⲓⲱⲟⲩ = the glory + ⲙⲫⲓⲱⲧ = to the Father'
        },
        {
          id: 'ex-17-3-2',
          type: 'sentence_building',
          question: 'Build: "Glory to the Father and to the Son"',
          correctAnswer: 'ⲡⲓⲱⲟⲩ ⲙⲫⲓⲱⲧ ⲛⲉⲙ ⲡⲓϣⲏⲣⲓ',
          wordBank: ['ⲡⲓⲱⲟⲩ', 'ⲙⲫⲓⲱⲧ', 'ⲛⲉⲙ', 'ⲡⲓϣⲏⲣⲓ'],
          explanation: 'ⲡⲓⲱⲟⲩ ⲙⲫⲓⲱⲧ ⲛⲉⲙ ⲡⲓϣⲏⲣⲓ = Glory to Father and Son (Bohairic ϣⲏⲣⲓ not ⲥⲏⲣⲓ!)'
        },
        {
          id: 'ex-17-3-3',
          type: 'translation',
          question: 'Translate: ⲛⲉⲙ ⲡⲓⲡ̀ⲛⲉⲩⲙⲁ ⲉⲑⲟⲩⲁⲃ',
          questionCoptic: 'ⲛⲉⲙ ⲡⲓⲡ̀ⲛⲉⲩⲙⲁ ⲉⲑⲟⲩⲁⲃ',
          correctAnswer: 'And to the Holy Spirit',
          options: ['And to the Holy Spirit', 'With the Holy Spirit', 'The Holy Spirit', 'And the Spirit is holy'],
          explanation: 'ⲛⲉⲙ = and/to + ⲡⲓⲡ̀ⲛⲉⲩⲙⲁ ⲉⲑⲟⲩⲁⲃ = the Holy Spirit'
        },
        {
          id: 'ex-17-3-4',
          type: 'multiple_choice',
          question: 'What does ⲓⲥϫⲉⲛ ϯⲛⲟⲩ mean?',
          questionCoptic: 'ⲓⲥϫⲉⲛ ϯⲛⲟⲩ',
          correctAnswer: 'from now/as it was',
          options: ['from now/as it was', 'until now', 'right now', 'from the beginning'],
          explanation: 'ⲓⲥϫⲉⲛ ϯⲛⲟⲩ = from now/as it was (in the beginning)'
        },
        {
          id: 'ex-17-3-5',
          type: 'matching',
          question: 'Match Trinity vocabulary',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲫⲓⲱⲧ', english: 'the Father' },
            { coptic: 'ⲡⲓϣⲏⲣⲓ', english: 'the Son' },
            { coptic: 'ⲡⲓⲡ̀ⲛⲉⲩⲙⲁ', english: 'the Spirit' },
            { coptic: 'ϯⲧⲣⲓⲁⲥ', english: 'the Trinity' }
          ]
        },
        {
          id: 'ex-17-3-6',
          type: 'fill_blank',
          question: 'Complete: ⲡⲓⲱⲟⲩ ⲙⲫⲓⲱⲧ ⲛⲉⲙ ___ = Glory to Father and Son',
          correctAnswer: 'ⲡⲓϣⲏⲣⲓ',
          options: ['ⲡⲓϣⲏⲣⲓ', 'ⲡⲓⲡ̀ⲛⲉⲩⲙⲁ', 'ⲡⲓⲣⲱⲙⲓ', 'ⲡⲓⲁⲗⲟⲩ'],
          explanation: 'ⲡⲓϣⲏⲣⲓ (the Son) completes the Trinitarian formula (Bohairic ϣⲏⲣⲓ not ⲥⲏⲣⲓ!)'
        },
        {
          id: 'ex-17-3-7',
          type: 'sentence_building',
          question: 'Build: "Now and always"',
          correctAnswer: 'ϯⲛⲟⲩ ⲛⲉⲙ ⲛ̀ⲥⲏⲟⲩ ⲛⲓⲃⲉⲛ',
          wordBank: ['ϯⲛⲟⲩ', 'ⲛⲉⲙ', 'ⲛ̀ⲥⲏⲟⲩ', 'ⲛⲓⲃⲉⲛ'],
          explanation: 'ϯⲛⲟⲩ ⲛⲉⲙ ⲛ̀ⲥⲏⲟⲩ ⲛⲓⲃⲉⲛ = now and all times (always)'
        },
        {
          id: 'ex-17-3-8',
          type: 'matching',
          question: 'Match time expressions',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ϯⲛⲟⲩ', english: 'now' },
            { coptic: 'ⲛ̀ⲥⲏⲟⲩ ⲛⲓⲃⲉⲛ', english: 'all times' },
            { coptic: 'ϣⲁ ⲉⲛⲉϩ', english: 'forever' },
            { coptic: 'ⲁⲙⲏⲛ', english: 'amen' }
          ]
        }
      ]
    }
  ]
};

export default unit17;
