import { Lesson } from '../../types';

// TEST FILE FOR UNIT 40: WEATHER & NATURE
// Comprehensive test exercises covering all 4 lessons
// 25 exercises total - testing weather, seasons, animals, and plants vocabulary

const unit40Test: Lesson = {
id: 'lesson-40-test',
      unitId: 'unit-40',
      title: 'Weather & Nature Comprehensive Test',
      description: 'Test all weather phenomena and natural world vocabulary',
      order: 1,
      xpReward: 150,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'test-40-1',
          type: 'matching',
          question: 'Match celestial bodies',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲫⲣⲏ / ⲡⲓⲣⲏ', english: 'the sun' },
            { coptic: 'ⲡⲓⲓⲟϩ', english: 'the moon' },
            { coptic: 'ⲛⲓⲥⲓⲟⲩ', english: 'the stars' },
            { coptic: 'ⲡⲓϧⲱⲧⲡ', english: 'the cloud' }
          ]
        },
        {
          id: 'test-40-2',
          type: 'translation',
          question: 'Translate: ⲁⲣⲉ ⲫⲣⲏ ϣⲁⲓ',
          questionCoptic: 'ⲁⲣⲉ ⲫⲣⲏ ϣⲁⲓ',
          correctAnswer: 'The sun rose',
          options: ['The sun rose', 'The sun is rising', 'The sun sets', 'The sun shines'],
          explanation: 'ⲁⲣⲉ ⲫⲣⲏ ϣⲁⲓ = the sun rose (ϣⲁⲓ = to rise, go up)'
        },
        {
          id: 'test-40-3',
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
          id: 'test-40-4',
          type: 'fill_blank',
          question: 'Complete: ⲁⲣⲉ ___ϩⲱⲟⲩ = It rained',
          correctAnswer: 'ⲡⲓⲙⲟⲩⲛ',
          options: ['ⲡⲓⲙⲟⲩⲛ', 'ⲫⲣⲏ', 'ⲡⲓⲑⲏⲟⲩ', 'ⲡⲓϧⲱⲧⲡ'],
          explanation: 'ⲁⲣⲉ ⲡⲓⲙⲟⲩⲛϩⲱⲟⲩ = it rained (lit. "the rain rained")'
        },
        {
          id: 'test-40-5',
          type: 'sentence_building',
          question: 'Build: "The wind blows"',
          correctAnswer: 'ⲡⲓⲑⲏⲟⲩ ⲛⲓϥⲓ',
          wordBank: ['ⲡⲓⲑⲏⲟⲩ', 'ⲛⲓϥⲓ', 'ⲫⲣⲏ', 'ϩⲱⲟⲩ'],
          explanation: 'ⲡⲓⲑⲏⲟⲩ ⲛⲓϥⲓ = the wind blows (ⲛⲓϥⲓ = to blow)'
        },
        {
          id: 'test-40-6',
          type: 'translation',
          question: 'Translate: ⲁϥϩⲱⲧⲡ ⲛ̀ϫⲉ ⲫⲣⲏ',
          questionCoptic: 'ⲁϥϩⲱⲧⲡ ⲛ̀ϫⲉ ⲫⲣⲏ',
          correctAnswer: 'The sun set',
          options: ['The sun set', 'The sun rose', 'The sun shines', 'The sun is hot'],
          explanation: 'ⲁϥϩⲱⲧⲡ ⲛ̀ϫⲉ ⲫⲣⲏ = the sun set (ϩⲱⲧⲡ = to set, hide)'
        },
        {
          id: 'test-40-7',
          type: 'multiple_choice',
          question: 'What is "thunder"?',
          correctAnswer: 'ⲡⲓϧⲁⲣⲁⲃⲁⲓ',
          options: ['ⲡⲓϧⲁⲣⲁⲃⲁⲓ', 'ⲡⲓϧⲱⲣϩⲉⲃ', 'ⲡⲓⲑⲏⲟⲩ', 'ⲡⲓⲙⲟⲩⲛϩⲱⲟⲩ'],
          explanation: 'ⲡⲓϧⲁⲣⲁⲃⲁⲓ (pi-kharabai) = the thunder'
        },
        {
          id: 'test-40-8',
          type: 'translation',
          question: 'Translate: ⲫⲣⲏ ⲣⲱⲕϩ',
          questionCoptic: 'ⲫⲣⲏ ⲣⲱⲕϩ',
          correctAnswer: 'The sun is hot / The sun burns',
          options: ['The sun is hot / The sun burns', 'The sun shines', 'The sun rises', 'The sun sets'],
          explanation: 'ⲫⲣⲏ ⲣⲱⲕϩ = the sun is hot/burns (ⲣⲱⲕϩ = to burn, be hot)'
        },
        {
          id: 'test-40-9',
          type: 'matching',
          question: 'Match seasons',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲡⲓⲯⲟⲓ', english: 'the cool season / winter' },
            { coptic: 'ϯⲗⲁⲛⲉ', english: 'the inundation season' },
            { coptic: 'ⲡⲓⲟⲩⲅ̀ⲥⲧ', english: 'the harvest / growing season' },
            { coptic: 'ⲧⲓ ⲛ̀ⲡⲁⲩⲗⲓⲃ', english: 'the season of heat / summer' }
          ]
        },
        {
          id: 'test-40-10',
          type: 'translation',
          question: 'Translate: ⲟⲩⲟⲛ ϩⲁⲛⲭⲟⲓ ⲉⲩⲡⲟⲩϯⲁⲗ',
          questionCoptic: 'ⲟⲩⲟⲛ ϩⲁⲛⲭⲟⲓ ⲉⲩⲡⲟⲩϯⲁⲗ',
          correctAnswer: 'There are pigs that are defiled',
          options: ['There are pigs that are defiled', 'Pigs are in defiled places', 'Some pigs are holy', 'Pigs dwell in holy places'],
          explanation: 'ϩⲁⲛⲭⲟⲓ = pigs (plural); ⲉⲩⲡⲟⲩϯⲁⲗ = that are defiled (relative clause)'
        },
        {
          id: 'test-40-11',
          type: 'matching',
          question: 'Match animals',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲛⲓϩⲁⲗⲏⲧ', english: 'the birds' },
            { coptic: 'ⲛⲓⲣⲕⲓⲧⲉ', english: 'the fish' },
            { coptic: 'ⲟⲩⲥⲏ', english: 'a horse' },
            { coptic: 'ⲟⲩⲭⲟⲓ', english: 'a pig' }
          ]
        },
        {
          id: 'test-40-12',
          type: 'fill_blank',
          question: 'Complete: ⲁⲩϫⲓⲥ ⲙ̀___ = They sent the donkey',
          correctAnswer: 'ⲟⲩⲟⲛⲓ',
          options: ['ⲟⲩⲟⲛⲓ', 'ⲟⲩⲣⲟϥ', 'ⲟⲩⲭⲟⲓ', 'ⲟⲩⲛⲧ'],
          explanation: 'ⲟⲩⲟⲛⲓ = a donkey (feminine)'
        },
        {
          id: 'test-40-13',
          type: 'sentence_building',
          question: 'Build: "A dove is gentle"',
          correctAnswer: 'ⲟⲩⲡⲉⲣⲓⲥⲧⲣⲁ ⲡⲟⲣⲅⲏ',
          wordBank: ['ⲟⲩⲡⲉⲣⲓⲥⲧⲣⲁ', 'ⲡⲟⲣⲅⲏ', 'ⲡⲉ', 'ⲛ̀ⲧⲟϥ'],
          explanation: 'ⲟⲩⲡⲉⲣⲓⲥⲧⲣⲁ ⲡⲟⲣⲅⲏ = a dove is gentle (adjective predicate)'
        },
        {
          id: 'test-40-14',
          type: 'translation',
          question: 'Translate: ⲛⲓϩⲁⲗⲏⲧ ⲛⲓⲧϫⲁϫ ⲉⲣⲉ ⲟⲩⲟⲩϩⲛ ⲛ̀ⲟⲩⲟⲛ ⲙⲏⲧ',
          questionCoptic: 'ⲛⲓϩⲁⲗⲏⲧ ⲛⲓⲧϫⲁϫ ⲉⲣⲉ ⲟⲩⲟⲩϩⲛ ⲛ̀ⲟⲩⲟⲛ ⲙⲏⲧ',
          correctAnswer: 'The birds of the sky have no place',
          options: ['The birds of the sky have no place', 'The sky birds lack homes', 'Birds in the air have no shelter', 'All sky creatures are homeless'],
          explanation: 'Complex sentence describing birds\' homelessness'
        },
        {
          id: 'test-40-15',
          type: 'matching',
          question: 'Match plants and trees',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲟⲩϣⲣⲉ', english: 'a tree' },
            { coptic: 'ⲛⲓⲧⲏⲩ', english: 'the flowers' },
            { coptic: 'ⲟⲩϣⲟⲛⲧ', english: 'a thorn' },
            { coptic: 'ⲟⲩⲭⲁ', english: 'a palm tree' }
          ]
        },
        {
          id: 'test-40-16',
          type: 'translation',
          question: 'Translate: ⲟⲩⲧⲁϩ ⲛⲁϯ ⲛ̀ϫⲉ ⲡⲓϫⲓⲟⲛⲉ',
          questionCoptic: 'ⲟⲩⲧⲁϩ ⲛⲁϯ ⲛ̀ϫⲉ ⲡⲓϫⲓⲟⲛⲉ',
          correctAnswer: 'The sycamore gives fruit',
          options: ['The sycamore gives fruit', 'The fruit gives the sycamore', 'In sycamores is fruit', 'Sycamore fruiting'],
          explanation: 'ⲟⲩⲧⲁϩ = fruit; ⲡⲓϫⲓⲟⲛⲉ = the sycamore fig tree'
        },
        {
          id: 'test-40-17',
          type: 'fill_blank',
          question: 'Complete: ⲟⲩ___ ⲕⲟⲗⲁⲗ = A river flows',
          correctAnswer: 'ⲡⲟⲣⲟⲥ',
          options: ['ⲡⲟⲣⲟⲥ', 'Ⲙⲓⲗⲩ', 'ⲑⲁⲗⲁⲥⲥⲁ', 'ⲧⲟⲡⲟⲥ'],
          explanation: 'ⲟⲩⲡⲟⲣⲟⲥ = a river/water stream'
        },
        {
          id: 'test-40-18',
          type: 'sentence_building',
          question: 'Build: "The mountains are high"',
          correctAnswer: 'ⲛⲓⲟⲩⲇⲟⲙ ⲉⲩⲙⲁⲧⲃⲟ',
          wordBank: ['ⲛⲓⲟⲩⲇⲟⲙ', 'ⲉⲩ', 'ⲙⲁⲧⲃⲟ', 'ⲥⲟⲩⲧⲛ̀'],
          explanation: 'ⲛⲓⲟⲩⲇⲟⲙ ⲉⲩⲙⲁⲧⲃⲟ = the mountains are high (adjective predicate)'
        },
        {
          id: 'test-40-19',
          type: 'translation',
          question: 'Translate: ⲛⲁⲕⲛⲟϣ ⲛ̀ⲟⲩⲙⲁⲕⲁⲣⲓ ⲉⲕⲛⲁⲟ̀ϩⲓ ϧⲉⲛ ⲟⲩⲕⲟⲗⲟⲥ',
          questionCoptic: 'ⲛⲁⲕⲛⲟϣ ⲛ̀ⲟⲩⲙⲁⲕⲁⲣⲓ ⲉⲕⲛⲁⲟ̀ϩⲓ ϧⲉⲛ ⲟⲩⲕⲟⲗⲟⲥ',
          correctAnswer: 'You will be blessed when you dwell in a corner/place',
          options: ['You will be blessed when you dwell in a corner/place', 'You are blessed in hidden places', 'Blessings come in isolated places', 'Bless the hidden corners'],
          explanation: 'Beatitude sentence with conditional future'
        },
        {
          id: 'test-40-20',
          type: 'matching',
          question: 'Match environmental concepts',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲟⲩⲣ', english: 'the earth/land' },
            { coptic: 'ⲧⲉ ϯϧⲓ ⲙ̀ⲡⲕⲁϩ', english: 'the sea / great waters' },
            { coptic: 'ⲧⲉⲟⲩⲣⲁⲛⲟⲥ', english: 'the heaven/sky' },
            { coptic: 'ⲟⲩⲁⲛⲉⲙⲟⲥ', english: 'the wind / spirit' }
          ]
        },
        {
          id: 'test-40-21',
          type: 'fill_blank',
          question: 'Complete: ⲛ̀ⲧⲉ ⲧⲉⲟⲩⲣⲁⲛⲟⲥ ⲟⲩⲟⲛ ___ⲛ̀ⲟⲩⲟⲛ = From heaven none to anyone',
          correctAnswer: 'ⲁⲗⲟⲩ',
          options: ['ⲁⲗⲟⲩ', 'ⲁⲙⲁⲩ', 'ⲉⲃⲟⲗ', 'ⲏⲧⲛ̀'],
          explanation: 'ⲁⲗⲟⲩ ⲛ̀ⲟⲩⲟⲛ = there is not for anyone'
        },
        {
          id: 'test-40-22',
          type: 'translation',
          question: 'Translate: ⲁⲓⲧⲁⲫ ⲛ̀ⲟⲩⲣ ⲛ̀ⲫ ⲛ̀ⲧⲉⲅ̀ⲛⲏϣⲓⲥ',
          questionCoptic: 'ⲁⲓⲧⲁⲫ ⲛ̀ⲟⲩⲣ ⲛ̀ⲫ ⲛ̀ⲧⲉⲅ̀ⲛⲏϣⲓⲥ',
          correctAnswer: 'I buried the earth of the generation',
          options: ['I buried the earth of the generation', 'I buried ancient earth', 'The earth of generations was buried', 'I buried an ancient field'],
          explanation: 'Religious/poetic reference to earth and generations'
        },
        {
          id: 'test-40-23',
          type: 'matching',
          question: 'Match weather-related actions',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ϣⲁⲓ', english: 'to rise / go up' },
            { coptic: 'ϩⲱⲧⲡ', english: 'to set / hide' },
            { coptic: 'ⲡⲟⲗ', english: 'to turn' },
            { coptic: 'ⲙⲟϣⲓ', english: 'to walk / move' }
          ]
        },
        {
          id: 'test-40-24',
          type: 'sentence_building',
          question: 'Build: "The waters are great"',
          correctAnswer: 'ⲛⲓϥ ⲉⲩⲣ ⲙ̀ⲙⲟⲩ',
          wordBank: ['ⲛⲓϥ', 'ⲉⲩ', 'ⲣ', 'ⲙ̀ⲙⲟⲩ'],
          explanation: 'ⲛⲓϥ ⲉⲩⲣ ⲙ̀ⲙⲟⲩ = the waters are great (plural adjective)'
        },
        {
          id: 'test-40-25',
          type: 'translation',
          question: 'Translate: ⲟⲩⲟⲛ ϩⲁⲛⲕⲟϥⲓ ⲟⲩⲟⲛ ϩⲁⲛⲉⲡⲁⲕⲃ',
          questionCoptic: 'ⲟⲩⲟⲛ ϩⲁⲛⲕⲟϥⲓ ⲟⲩⲟⲛ ϩⲁⲛⲉⲡⲁⲕⲃ',
          correctAnswer: 'There are some serpents and some scorpions',
          options: ['There are some serpents and some scorpions', 'Serpents like scorpions', 'Where serpents and scorpions dwell', 'Some creatures are serpents or scorpions'],
          explanation: 'ϩⲁⲛⲕⲟϥⲓ = some serpents; ϩⲁⲛⲉⲡⲁⲕⲃ = some scorpions'
        }
      ]
};

export default unit40Test;
