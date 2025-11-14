import { Unit } from '../../types';

// UNIT 40: WEATHER & NATURE
// Bohairic dialect - Natural world vocabulary
// Fills gap: Weather, seasons, animals, plants for complete expression

const unit40: Unit = {
  id: 'unit-40',
  title: 'Weather & Nature',
  description: 'Master vocabulary for weather, seasons, animals, and plants',
  order: 40,
  color: '#4CAF50',
  lessons: [
    {
      id: 'lesson-40-1',
      unitId: 'unit-40',
      title: 'Weather Phenomena',
      description: 'Sun, rain, wind, and weather vocabulary',
      order: 1,
      xpReward: 20,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-40-1-1',
          type: 'matching',
          question: 'Match weather vocabulary',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲫⲣⲏ / ⲡⲓⲣⲏ', english: 'the sun' },
            { coptic: 'ⲡⲓⲓⲟϩ', english: 'the moon' },
            { coptic: 'ⲛⲓⲥⲓⲟⲩ', english: 'the stars' },
            { coptic: 'ⲡⲓϧⲱⲧⲡ', english: 'the cloud' }
          ]
        },
        {
          id: 'ex-40-1-2',
          type: 'translation',
          question: 'Translate: ⲁⲣⲉ ⲫⲣⲏ ϣⲁⲓ',
          questionCoptic: 'ⲁⲣⲉ ⲫⲣⲏ ϣⲁⲓ',
          correctAnswer: 'The sun rose',
          options: ['The sun rose', 'The sun is rising', 'The sun sets', 'The sun shines'],
          explanation: 'ⲁⲣⲉ ⲫⲣⲏ ϣⲁⲓ = the sun rose (ϣⲁⲓ = to rise, go up)'
        },
        {
          id: 'ex-40-1-3',
          type: 'matching',
          question: 'Match weather conditions',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲡⲓⲙⲟⲩⲛϩⲱⲟⲩ', english: 'the rain' },
            { coptic: 'ⲡⲓⲑⲏⲟⲩ', english: 'the wind' },
            { coptic: 'ⲡⲓⲭⲓⲱⲛ', english: 'the snow' },
            { coptic: 'ⲡⲓϧⲱⲣϩⲉⲃ', english: 'the lightning' }
          ]
        },
        {
          id: 'ex-40-1-4',
          type: 'fill_blank',
          question: 'Complete: ⲁⲣⲉ ___ϩⲱⲟⲩ = It rained',
          correctAnswer: 'ⲡⲓⲙⲟⲩⲛ',
          options: ['ⲡⲓⲙⲟⲩⲛ', 'ⲫⲣⲏ', 'ⲡⲓⲑⲏⲟⲩ', 'ⲡⲓϧⲱⲧⲡ'],
          explanation: 'ⲁⲣⲉ ⲡⲓⲙⲟⲩⲛϩⲱⲟⲩ = it rained (lit. "the rain rained")'
        },
        {
          id: 'ex-40-1-5',
          type: 'sentence_building',
          question: 'Build: "The wind blows"',
          correctAnswer: 'ⲡⲓⲑⲏⲟⲩ ⲛⲓϥⲓ',
          wordBank: ['ⲡⲓⲑⲏⲟⲩ', 'ⲛⲓϥⲓ', 'ⲫⲣⲏ', 'ϩⲱⲟⲩ'],
          explanation: 'ⲡⲓⲑⲏⲟⲩ ⲛⲓϥⲓ = the wind blows (ⲛⲓϥⲓ = to blow)'
        },
        {
          id: 'ex-40-1-6',
          type: 'translation',
          question: 'Translate: ⲁϥϩⲱⲧⲡ ⲛ̀ϫⲉ ⲫⲣⲏ',
          questionCoptic: 'ⲁϥϩⲱⲧⲡ ⲛ̀ϫⲉ ⲫⲣⲏ',
          correctAnswer: 'The sun set',
          options: ['The sun set', 'The sun rose', 'The sun shines', 'The sun is hot'],
          explanation: 'ⲁϥϩⲱⲧⲡ ⲛ̀ϫⲉ ⲫⲣⲏ = the sun set (ϩⲱⲧⲡ = to set, hide)'
        },
        {
          id: 'ex-40-1-7',
          type: 'multiple_choice',
          question: 'What is "thunder"?',
          correctAnswer: 'ⲡⲓϧⲁⲣⲁⲃⲁⲓ',
          options: ['ⲡⲓϧⲁⲣⲁⲃⲁⲓ', 'ⲡⲓϧⲱⲣϩⲉⲃ', 'ⲡⲓⲑⲏⲟⲩ', 'ⲡⲓⲙⲟⲩⲛϩⲱⲟⲩ'],
          explanation: 'ⲡⲓϧⲁⲣⲁⲃⲁⲓ (pi-kharabai) = the thunder'
        },
        {
          id: 'ex-40-1-8',
          type: 'translation',
          question: 'Translate: ⲫⲣⲏ ⲣⲱⲕϩ',
          questionCoptic: 'ⲫⲣⲏ ⲣⲱⲕϩ',
          correctAnswer: 'The sun is hot / The sun burns',
          options: ['The sun is hot / The sun burns', 'The sun shines', 'The sun rises', 'The sun sets'],
          explanation: 'ⲫⲣⲏ ⲣⲱⲕϩ = the sun is hot/burns (ⲣⲱⲕϩ = to burn, be hot)'
        }
      ]
    },
    {
      id: 'lesson-40-2',
      unitId: 'unit-40',
      title: 'Seasons & Natural World',
      description: 'Seasons, earth, water, sky',
      order: 2,
      xpReward: 20,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-40-2-1',
          type: 'matching',
          question: 'Match seasons',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲡⲓⲥⲏⲟⲩ', english: 'summer' },
            { coptic: 'ⲡⲓⲭⲓⲙⲱⲛ', english: 'winter' },
            { coptic: 'ⲡⲓⲟⲩⲛⲟⲩ ⲛ̀ϣⲁϣⲓ', english: 'harvest time' },
            { coptic: 'ⲡⲓⲥⲁϯ', english: 'sowing time' }
          ]
        },
        {
          id: 'ex-40-2-2',
          type: 'matching',
          question: 'Match natural elements',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲡⲓⲕⲁϩⲓ', english: 'the earth/land' },
            { coptic: 'ⲫⲓⲟⲙ', english: 'the sea' },
            { coptic: 'ⲡⲓⲓⲁⲣⲟ', english: 'the river' },
            { coptic: 'ⲫⲓⲁⲗⲓⲗ', english: 'the sky/heaven' }
          ]
        },
        {
          id: 'ex-40-2-3',
          type: 'translation',
          question: 'Translate: ϧⲉⲛ ⲡⲓⲥⲏⲟⲩ ⲫⲣⲏ ⲣⲱⲕϩ',
          questionCoptic: 'ϧⲉⲛ ⲡⲓⲥⲏⲟⲩ ⲫⲣⲏ ⲣⲱⲕϩ',
          correctAnswer: 'In summer the sun is hot',
          options: ['In summer the sun is hot', 'The hot sun is in summer', 'Summer is hot', 'The sun burns in summer'],
          explanation: 'ϧⲉⲛ ⲡⲓⲥⲏⲟⲩ ⲫⲣⲏ ⲣⲱⲕϩ = in summer the sun is hot'
        },
        {
          id: 'ex-40-2-4',
          type: 'fill_blank',
          question: 'Complete: ⲁϥⲙⲟϣⲓ ϩⲓϫⲉⲛ ___ = He walked on the sea',
          correctAnswer: 'ⲫⲓⲟⲙ',
          options: ['ⲫⲓⲟⲙ', 'ⲡⲓⲕⲁϩⲓ', 'ⲡⲓⲓⲁⲣⲟ', 'ⲫⲓⲁⲗⲓⲗ'],
          explanation: 'ⲁϥⲙⲟϣⲓ ϩⲓϫⲉⲛ ⲫⲓⲟⲙ = he walked on the sea (biblical reference)'
        },
        {
          id: 'ex-40-2-5',
          type: 'matching',
          question: 'Match geographical features',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲡⲓⲧⲱⲟⲩ', english: 'the mountain' },
            { coptic: 'ⲡⲓⲓⲁⲣⲱ', english: 'the valley' },
            { coptic: 'ⲡϣⲁϥⲉ', english: 'the desert' },
            { coptic: 'ⲡⲓⲕⲉⲡⲟⲥ', english: 'the garden' }
          ]
        },
        {
          id: 'ex-40-2-6',
          type: 'sentence_building',
          question: 'Build: "Water flows in the river"',
          correctAnswer: 'ⲡⲓⲙⲱⲟⲩ ⲙⲟϣⲓ ϧⲉⲛ ⲡⲓⲓⲁⲣⲟ',
          wordBank: ['ⲡⲓⲙⲱⲟⲩ', 'ⲙⲟϣⲓ', 'ϧⲉⲛ', 'ⲡⲓⲓⲁⲣⲟ'],
          explanation: 'ⲡⲓⲙⲱⲟⲩ ⲙⲟϣⲓ ϧⲉⲛ ⲡⲓⲓⲁⲣⲟ = the water flows in the river (ⲙⲟϣⲓ = to move/flow)'
        },
        {
          id: 'ex-40-2-7',
          type: 'translation',
          question: 'Translate: ϧⲉⲛ ⲡⲓⲭⲓⲙⲱⲛ ⲁⲣⲉ ⲡⲓⲙⲟⲩⲛϩⲱⲟⲩ',
          questionCoptic: 'ϧⲉⲛ ⲡⲓⲭⲓⲙⲱⲛ ⲁⲣⲉ ⲡⲓⲙⲟⲩⲛϩⲱⲟⲩ',
          correctAnswer: 'In winter it rains',
          options: ['In winter it rains', 'The winter rain', 'It rained in winter', 'Winter is rainy'],
          explanation: 'ϧⲉⲛ ⲡⲓⲭⲓⲙⲱⲛ ⲁⲣⲉ ⲡⲓⲙⲟⲩⲛϩⲱⲟⲩ = in winter it rains'
        },
        {
          id: 'ex-40-2-8',
          type: 'multiple_choice',
          question: 'What is "fire"?',
          correctAnswer: 'ⲡⲓⲭ̀ⲣⲱⲙ',
          options: ['ⲡⲓⲭ̀ⲣⲱⲙ', 'ⲫⲣⲏ', 'ⲡⲓⲙⲱⲟⲩ', 'ⲡⲓⲑⲏⲟⲩ'],
          explanation: 'ⲡⲓⲭ̀ⲣⲱⲙ (pi-khrom) = the fire'
        }
      ]
    },
    {
      id: 'lesson-40-3',
      unitId: 'unit-40',
      title: 'Animals & Creatures',
      description: 'Wild and domestic animals',
      order: 3,
      xpReward: 25,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-40-3-1',
          type: 'matching',
          question: 'Match domestic animals',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲡⲓⲉ̀ⲥⲱⲟⲩ', english: 'the sheep' },
            { coptic: 'ⲡⲓⲉϩⲉ', english: 'the cow/ox' },
            { coptic: 'ⲡⲓⲟⲩⲏⲟⲣ', english: 'the donkey' },
            { coptic: 'ⲡⲓⲉϩⲱⲣ', english: 'the horse' }
          ]
        },
        {
          id: 'ex-40-3-2',
          type: 'matching',
          question: 'Match wild animals',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲡⲓⲙⲟⲩⲓ̀', english: 'the lion' },
            { coptic: 'ⲡⲓⲟⲩⲏⲣ', english: 'the dog' },
            { coptic: 'ⲡⲓⲉⲙⲟⲩ', english: 'the cat' },
            { coptic: 'ⲡⲓⲥⲁϫ', english: 'the snake/serpent' }
          ]
        },
        {
          id: 'ex-40-3-3',
          type: 'translation',
          question: 'Translate: ⲁⲓⲛⲁⲩ ⲉ̀ⲟⲩⲙⲟⲩⲓ̀',
          questionCoptic: 'ⲁⲓⲛⲁⲩ ⲉ̀ⲟⲩⲙⲟⲩⲓ̀',
          correctAnswer: 'I saw a lion',
          options: ['I saw a lion', 'A lion saw me', 'I see lions', 'The lion sees'],
          explanation: 'ⲁⲓⲛⲁⲩ ⲉ̀ⲟⲩⲙⲟⲩⲓ̀ = I saw a lion'
        },
        {
          id: 'ex-40-3-4',
          type: 'matching',
          question: 'Match birds and fish',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲡⲓϩⲁⲗⲏⲧ', english: 'the bird' },
            { coptic: 'ⲡⲓⲁ̀ⲗⲉⲕⲧⲱⲣ', english: 'the rooster' },
            { coptic: 'ϯϭⲣⲟⲙⲡⲓ', english: 'the dove' },
            { coptic: 'ⲧⲧⲉⲃⲧ', english: 'the fish' }
          ]
        },
        {
          id: 'ex-40-3-5',
          type: 'fill_blank',
          question: 'Complete: ⲁⲛⲟⲛ ϩⲁⲛ___ ⲛ̀ⲧⲉ Ⲡϭⲟⲓⲥ = We are sheep of the Lord',
          correctAnswer: 'ⲉ̀ⲥⲱⲟⲩ',
          options: ['ⲉ̀ⲥⲱⲟⲩ', 'ⲙⲟⲩⲓ̀', 'ⲟⲩⲏⲣ', 'ϩⲁⲗⲏⲧ'],
          explanation: 'ⲁⲛⲟⲛ ϩⲁⲛⲉ̀ⲥⲱⲟⲩ ⲛ̀ⲧⲉ Ⲡϭⲟⲓⲥ = we are sheep of the Lord (biblical metaphor)'
        },
        {
          id: 'ex-40-3-6',
          type: 'sentence_building',
          question: 'Build: "The dove descended"',
          correctAnswer: 'ⲁⲥⲓ̀ ⲉ̀ⲡⲉⲥⲏⲧ ⲛ̀ϫⲉ ϯϭⲣⲟⲙⲡⲓ',
          wordBank: ['ⲁⲥⲓ̀', 'ⲉ̀ⲡⲉⲥⲏⲧ', 'ⲛ̀ϫⲉ', 'ϯϭⲣⲟⲙⲡⲓ'],
          explanation: 'ⲁⲥⲓ̀ ⲉ̀ⲡⲉⲥⲏⲧ ⲛ̀ϫⲉ ϯϭⲣⲟⲙⲡⲓ = the dove descended (Baptism of Jesus)'
        },
        {
          id: 'ex-40-3-7',
          type: 'translation',
          question: 'Translate: ⲡⲓⲥⲁϫ ⲛⲁⲥⲁⲃⲉ',
          questionCoptic: 'ⲡⲓⲥⲁϫ ⲛⲁⲥⲁⲃⲉ',
          correctAnswer: 'The serpent was wise',
          options: ['The serpent was wise', 'The wise serpent', 'The serpent is cunning', 'A wise snake'],
          explanation: 'ⲡⲓⲥⲁϫ ⲛⲁⲥⲁⲃⲉ = the serpent was wise (Genesis reference)'
        },
        {
          id: 'ex-40-3-8',
          type: 'multiple_choice',
          question: 'What is "lamb"?',
          correctAnswer: 'ⲡⲓϩⲓⲏⲃ',
          options: ['ⲡⲓϩⲓⲏⲃ', 'ⲡⲓⲉ̀ⲥⲱⲟⲩ', 'ⲡⲓⲙⲟⲩⲓ̀', 'ⲡⲓⲉϩⲉ'],
          explanation: 'ⲡⲓϩⲓⲏⲃ (pi-hib) = the lamb (Lamb of God = ⲡⲓϩⲓⲏⲃ ⲛ̀ⲧⲉ Ⲫϯ)'
        }
      ]
    },
    {
      id: 'lesson-40-4',
      unitId: 'unit-40',
      title: 'Plants & Agriculture',
      description: 'Trees, crops, and farming',
      order: 4,
      xpReward: 25,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-40-4-1',
          type: 'matching',
          question: 'Match trees and plants',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲡⲓϣⲏⲛ', english: 'the tree' },
            { coptic: 'ϯⲃⲱ ⲛ̀ⲁ̀ⲗⲟⲗⲓ', english: 'the olive tree' },
            { coptic: 'ϯⲃⲱ ⲛ̀ⲁ̀ⲗⲟⲗⲓ ⲛ̀ⲕⲉⲛⲧⲉ', english: 'the fig tree' },
            { coptic: 'ⲡⲓⲥⲓⲙ', english: 'the grass/herb' }
          ]
        },
        {
          id: 'ex-40-4-2',
          type: 'matching',
          question: 'Match agricultural terms',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲡⲓⲥⲁϯ', english: 'sowing' },
            { coptic: 'ⲡⲓⲱ̀ⲥϧ', english: 'harvest' },
            { coptic: 'ⲡⲓϫⲣⲟϫ', english: 'seed' },
            { coptic: 'ⲡⲓⲟⲩⲧⲁϩ', english: 'fruit' }
          ]
        },
        {
          id: 'ex-40-4-3',
          type: 'translation',
          question: 'Translate: ⲁϥⲥⲁϯ ⲙ̀ⲡⲓϫⲣⲟϫ',
          questionCoptic: 'ⲁϥⲥⲁϯ ⲙ̀ⲡⲓϫⲣⲟϫ',
          correctAnswer: 'He sowed the seed',
          options: ['He sowed the seed', 'He harvested the seed', 'The seed was sown', 'He will sow'],
          explanation: 'ⲁϥⲥⲁϯ ⲙ̀ⲡⲓϫⲣⲟϫ = he sowed the seed (Parable of the Sower)'
        },
        {
          id: 'ex-40-4-4',
          type: 'fill_blank',
          question: 'Complete: ⲡⲓϣⲏⲛ ϯ ___= The tree gives fruit',
          correctAnswer: 'ⲛ̀ⲟⲩⲧⲁϩ',
          options: ['ⲛ̀ⲟⲩⲧⲁϩ', 'ⲛ̀ϫⲣⲟϫ', 'ⲛ̀ⲥⲓⲙ', 'ⲙ̀ⲙⲱⲟⲩ'],
          explanation: 'ⲡⲓϣⲏⲛ ϯ ⲛ̀ⲟⲩⲧⲁϩ = the tree gives fruit'
        },
        {
          id: 'ex-40-4-5',
          type: 'matching',
          question: 'Match specific crops',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲡⲓⲥⲱⲟⲩ', english: 'wheat' },
            { coptic: 'ϯⲁ̀ⲗⲟⲗⲓ', english: 'grapes/vine' },
            { coptic: 'ⲡⲓⲕⲛⲧⲉ', english: 'figs' },
            { coptic: 'ⲡⲓⲗⲁϩⲁⲛⲟⲛ', english: 'vegetables' }
          ]
        },
        {
          id: 'ex-40-4-6',
          type: 'sentence_building',
          question: 'Build: "Time of harvest has come"',
          correctAnswer: 'ⲁϥⲓ̀ ⲛ̀ϫⲉ ⲡⲓⲟⲩⲛⲟⲩ ⲙ̀ⲡⲓⲱ̀ⲥϧ',
          wordBank: ['ⲁϥⲓ̀', 'ⲛ̀ϫⲉ', 'ⲡⲓⲟⲩⲛⲟⲩ', 'ⲙ̀ⲡⲓⲱ̀ⲥϧ'],
          explanation: 'ⲁϥⲓ̀ ⲛ̀ϫⲉ ⲡⲓⲟⲩⲛⲟⲩ ⲙ̀ⲡⲓⲱ̀ⲥϧ = the time of harvest has come (biblical idiom)'
        },
        {
          id: 'ex-40-4-7',
          type: 'translation',
          question: 'Translate: ⲡⲓϫⲣⲟϫ ⲁϥϩⲉⲓ ϩⲓϫⲉⲛ ⲡⲓⲡⲉⲧⲣⲁ',
          questionCoptic: 'ⲡⲓϫⲣⲟϫ ⲁϥϩⲉⲓ ϩⲓϫⲉⲛ ⲡⲓⲡⲉⲧⲣⲁ',
          correctAnswer: 'The seed fell on the rock',
          options: ['The seed fell on the rock', 'The rock fell on seed', 'Seeds are on rocks', 'The seed will fall'],
          explanation: 'ⲡⲓϫⲣⲟϫ ⲁϥϩⲉⲓ ϩⲓϫⲉⲛ ⲡⲓⲡⲉⲧⲣⲁ = the seed fell on the rock (Parable of Sower)'
        },
        {
          id: 'ex-40-4-8',
          type: 'multiple_choice',
          question: 'What is "flower"?',
          correctAnswer: 'ϯϩ̀ⲣⲏⲣⲓ',
          options: ['ϯϩ̀ⲣⲏⲣⲓ', 'ⲡⲓⲟⲩⲧⲁϩ', 'ⲡⲓϣⲏⲛ', 'ⲡⲓⲥⲓⲙ'],
          explanation: 'ϯϩ̀ⲣⲏⲣⲓ (ti-hriri) = the flower'
        }
      ]
    }
  ]
};

export default unit40;
