import { Unit } from '../../types';

// UNIT 22: AGPEYA PRAYERS & LITURGICAL RESPONSES
// Verified for Bohairic dialect consistency
// Prayers from the Book of Hours and liturgical responses

const unit22: Unit = {
  id: 'unit-22',
  title: 'Agpeya Prayers & Responses',
  description: 'Learn prayers from the Book of Hours and liturgical responses',
  order: 22,
  color: '#58CC02',
  lessons: [
    {
      id: 'lesson-22-1',
      unitId: 'unit-22',
      title: 'Prayer of Thanksgiving - Part 1',
      description: 'Opening of the Thanksgiving Prayer',
      order: 1,
      xpReward: 35,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-22-1-1',
          type: 'translation',
          question: 'Translate: ⲧⲉⲛϣⲉⲡϩⲙⲟⲧ ⲛⲧⲟⲧⲕ',
          questionCoptic: 'ⲧⲉⲛϣⲉⲡϩⲙⲟⲧ ⲛⲧⲟⲧⲕ',
          correctAnswer: 'We thank you',
          options: ['We thank you', 'We bless you', 'We praise you', 'We worship you'],
          explanation: 'ⲧⲉⲛϣⲉⲡϩⲙⲟⲧ = we give thanks + ⲛⲧⲟⲧⲕ = to you'
        },
        {
          id: 'ex-22-1-2',
          type: 'multiple_choice',
          question: 'What does ⲫϯ ⲡⲓⲡⲁⲛⲧⲟⲕⲣⲁⲧⲱⲣ mean?',
          correctAnswer: 'God the Almighty',
          options: ['God the Almighty', 'God the Father', 'God the Creator', 'God the Eternal'],
          explanation: 'ⲫϯ = God + ⲡⲓⲡⲁⲛⲧⲟⲕⲣⲁⲧⲱⲣ = the Almighty (from Greek pantokratōr) - Bohairic ⲫϯ not ⲫⲛⲟⲩϯ!'
        },
        {
          id: 'ex-22-1-3',
          type: 'matching',
          question: 'Match the prayer vocabulary',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ϣⲉⲡϩⲙⲟⲧ', english: 'give thanks' },
            { coptic: 'ⲡⲁⲛⲧⲟⲕⲣⲁⲧⲱⲣ', english: 'almighty' },
            { coptic: 'ⲫⲓⲱⲧ', english: 'the Father' },
            { coptic: 'ⲡⲉⲛϭⲟⲓⲥ', english: 'our Lord' }
          ]
        },
        {
          id: 'ex-22-1-4',
          type: 'translation',
          question: 'Translate: ⲫⲓⲱⲧ ⲙⲡⲉⲛϭⲟⲓⲥ ⲓⲏⲥⲟⲩⲥ ⲡⲓⲭⲣⲓⲥⲧⲟⲥ',
          questionCoptic: 'ⲫⲓⲱⲧ ⲙⲡⲉⲛϭⲟⲓⲥ ⲓⲏⲥⲟⲩⲥ ⲡⲓⲭⲣⲓⲥⲧⲟⲥ',
          correctAnswer: 'The Father of our Lord Jesus Christ',
          options: ['The Father of our Lord Jesus Christ', 'The Father and our Lord Jesus Christ', 'Our Father, Lord Jesus Christ', 'The Lord Jesus Christ the Father'],
          explanation: 'ⲫⲓⲱⲧ = the Father + ⲙⲡⲉⲛϭⲟⲓⲥ = of our Lord + ⲓⲏⲥⲟⲩⲥ ⲡⲓⲭⲣⲓⲥⲧⲟⲥ = Jesus Christ'
        },
        {
          id: 'ex-22-1-5',
          type: 'sentence_building',
          question: 'Build: "We thank you, O Lord"',
          correctAnswer: 'ⲧⲉⲛϣⲉⲡϩⲙⲟⲧ ⲛⲧⲟⲧⲕ ⲱ ⲡϭⲟⲓⲥ',
          wordBank: ['ⲧⲉⲛϣⲉⲡϩⲙⲟⲧ', 'ⲛⲧⲟⲧⲕ', 'ⲱ', 'ⲡϭⲟⲓⲥ'],
          explanation: 'ⲧⲉⲛϣⲉⲡϩⲙⲟⲧ ⲛⲧⲟⲧⲕ (we thank you) + ⲱ ⲡϭⲟⲓⲥ (O Lord - vocative)'
        },
        {
          id: 'ex-22-1-6',
          type: 'multiple_choice',
          question: 'The vocative particle ⲱ is used to:',
          correctAnswer: 'address someone directly',
          options: ['address someone directly', 'ask a question', 'make a command', 'express emotion'],
          explanation: 'ⲱ (O) is used when calling out to or addressing someone - like "O Lord" or "O God"'
        },
        {
          id: 'ex-22-1-7',
          type: 'fill_blank',
          question: 'Complete: ⲧⲉⲛϣⲉⲡϩⲙⲟⲧ ⲛⲧⲟⲧⲕ ⲫϯ ___ = We thank you, God the Almighty',
          correctAnswer: 'ⲡⲓⲡⲁⲛⲧⲟⲕⲣⲁⲧⲱⲣ',
          options: ['ⲡⲓⲡⲁⲛⲧⲟⲕⲣⲁⲧⲱⲣ', 'ⲡⲓⲥⲱⲧⲏⲣ', 'ⲡⲓⲕⲧⲓⲥⲧⲏⲥ', 'ⲡⲓⲟⲩⲣⲟ'],
          explanation: 'ⲡⲓⲡⲁⲛⲧⲟⲕⲣⲁⲧⲱⲣ = the Almighty - a key title for God in liturgy (Bohairic ⲫϯ not ⲫⲛⲟⲩϯ!)'
        },
        {
          id: 'ex-22-1-8',
          type: 'translation',
          question: 'Translate: ⲉⲧⲁⲕⲁⲣⲓⲧⲉⲛ ⲛⲧⲉⲛⲉⲣⲕⲁⲧⲁⲝⲓⲟⲓⲛ',
          questionCoptic: 'ⲉⲧⲁⲕⲁⲣⲓⲧⲉⲛ ⲛⲧⲉⲛⲉⲣⲕⲁⲧⲁⲝⲓⲟⲓⲛ',
          correctAnswer: 'Who have kept us and made us worthy',
          options: ['Who have kept us and made us worthy', 'That you kept us and deemed us worthy', 'Because you preserved and counted us worthy', 'You who saved us and made us deserving'],
          explanation: 'ⲉⲧⲁⲕⲁⲣⲓⲧⲉⲛ = who kept us + ⲛⲧⲉⲛⲉⲣⲕⲁⲧⲁⲝⲓⲟⲓⲛ = and made us worthy'
        }
      ]
    },
    {
      id: 'lesson-22-2',
      unitId: 'unit-22',
      title: 'Liturgical Responses',
      description: 'Common congregational responses in the liturgy',
      order: 2,
      xpReward: 35,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-22-2-1',
          type: 'translation',
          question: 'Translate: ⲁⲝⲓⲟⲥ ⲕⲉ ⲇⲓⲕⲉⲟⲥ',
          questionCoptic: 'ⲁⲝⲓⲟⲥ ⲕⲉ ⲇⲓⲕⲉⲟⲥ',
          correctAnswer: 'Worthy and righteous',
          options: ['Worthy and righteous', 'Holy and just', 'Right and true', 'Blessed and good'],
          explanation: 'ⲁⲝⲓⲟⲥ = worthy (Greek axios) + ⲕⲉ = and + ⲇⲓⲕⲉⲟⲥ = righteous (Greek dikaios)'
        },
        {
          id: 'ex-22-2-2',
          type: 'multiple_choice',
          question: 'What does ⲁⲙⲏⲛ mean?',
          correctAnswer: 'so be it, truly',
          options: ['so be it, truly', 'praise God', 'thank you', 'forever'],
          explanation: 'ⲁⲙⲏⲛ (amen) means "so be it" or "truly" - used to affirm prayers and statements'
        },
        {
          id: 'ex-22-2-3',
          type: 'matching',
          question: 'Match the liturgical responses',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲁⲙⲏⲛ', english: 'amen' },
            { coptic: 'ⲁⲗⲗⲏⲗⲟⲩⲓⲁ', english: 'alleluia' },
            { coptic: 'ⲕⲩⲣⲓⲉ ⲉⲗⲉⲏⲥⲟⲛ', english: 'Lord have mercy' },
            { coptic: 'ⲁⲝⲓⲟⲥ', english: 'worthy' }
          ]
        },
        {
          id: 'ex-22-2-4',
          type: 'translation',
          question: 'Translate: ⲕⲩⲣⲓⲉ ⲉⲗⲉⲏⲥⲟⲛ',
          questionCoptic: 'ⲕⲩⲣⲓⲉ ⲉⲗⲉⲏⲥⲟⲛ',
          correctAnswer: 'Lord have mercy',
          options: ['Lord have mercy', 'Lord bless us', 'Lord save us', 'Lord hear us'],
          explanation: 'ⲕⲩⲣⲓⲉ = Lord (vocative) + ⲉⲗⲉⲏⲥⲟⲛ = have mercy - the most common liturgical response'
        },
        {
          id: 'ex-22-2-5',
          type: 'sentence_building',
          question: 'Build: "Alleluia, glory to God"',
          correctAnswer: 'ⲁⲗⲗⲏⲗⲟⲩⲓⲁ ⲡⲓⲱⲟⲩ ⲫⲁ ⲫϯ',
          wordBank: ['ⲁⲗⲗⲏⲗⲟⲩⲓⲁ', 'ⲡⲓⲱⲟⲩ', 'ⲫⲁ', 'ⲫϯ'],
          explanation: 'ⲁⲗⲗⲏⲗⲟⲩⲓⲁ (alleluia/praise God) + ⲡⲓⲱⲟⲩ ⲫⲁ ⲫϯ (glory to God) - Bohairic ⲫϯ not ⲫⲛⲟⲩϯ!'
        },
        {
          id: 'ex-22-2-6',
          type: 'multiple_choice',
          question: 'ⲁⲗⲗⲏⲗⲟⲩⲓⲁ originally means:',
          correctAnswer: 'praise the Lord',
          options: ['praise the Lord', 'glory to God', 'holy holy', 'amen amen'],
          explanation: 'ⲁⲗⲗⲏⲗⲟⲩⲓⲁ comes from Hebrew "Hallelu-Yah" meaning "Praise the Lord"'
        },
        {
          id: 'ex-22-2-7',
          type: 'fill_blank',
          question: 'Complete: ___ ___ ___ = Lord have mercy (said three times)',
          correctAnswer: 'ⲕⲩⲣⲓⲉ ⲉⲗⲉⲏⲥⲟⲛ ⲕⲩⲣⲓⲉ ⲉⲗⲉⲏⲥⲟⲛ ⲕⲩⲣⲓⲉ ⲉⲗⲉⲏⲥⲟⲛ',
          options: ['ⲕⲩⲣⲓⲉ ⲉⲗⲉⲏⲥⲟⲛ ⲕⲩⲣⲓⲉ ⲉⲗⲉⲏⲥⲟⲛ ⲕⲩⲣⲓⲉ ⲉⲗⲉⲏⲥⲟⲛ', 'ⲁⲙⲏⲛ ⲁⲙⲏⲛ ⲁⲙⲏⲛ', 'ⲁⲗⲗⲏⲗⲟⲩⲓⲁ ⲁⲗⲗⲏⲗⲟⲩⲓⲁ ⲁⲗⲗⲏⲗⲟⲩⲓⲁ', 'ⲁⲝⲓⲟⲥ ⲁⲝⲓⲟⲥ ⲁⲝⲓⲟⲥ'],
          explanation: 'Kyrie Eleison is traditionally said three times in liturgical prayers'
        },
        {
          id: 'ex-22-2-8',
          type: 'translation',
          question: 'Translate: ⲇⲟⲝⲁ ⲡⲁⲧⲣⲓ ⲕⲉ ⲩⲓⲟ ⲕⲉ ⲁⲅⲓⲟ ⲡⲛⲉⲩⲙⲁⲧⲓ',
          questionCoptic: 'ⲇⲟⲝⲁ ⲡⲁⲧⲣⲓ ⲕⲉ ⲩⲓⲟ ⲕⲉ ⲁⲅⲓⲟ ⲡⲛⲉⲩⲙⲁⲧⲓ',
          correctAnswer: 'Glory to the Father and the Son and the Holy Spirit',
          options: ['Glory to the Father and the Son and the Holy Spirit', 'Honor to Father, Son, and Holy Spirit', 'Praise to the Trinity', 'Worship the Father, Son, and Spirit'],
          explanation: 'The Trinitarian doxology in Greek: ⲇⲟⲝⲁ = glory + ⲡⲁⲧⲣⲓ = to Father + ⲩⲓⲟ = Son + ⲁⲅⲓⲟ ⲡⲛⲉⲩⲙⲁⲧⲓ = Holy Spirit'
        }
      ]
    },
    {
      id: 'lesson-22-3',
      unitId: 'unit-22',
      title: 'Trisagion & Closing Prayers',
      description: 'The Thrice-Holy hymn and concluding prayers',
      order: 3,
      xpReward: 35,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-22-3-1',
          type: 'translation',
          question: 'Translate: ⲁⲅⲓⲟⲥ ⲟ ⲑⲉⲟⲥ',
          questionCoptic: 'ⲁⲅⲓⲟⲥ ⲟ ⲑⲉⲟⲥ',
          correctAnswer: 'Holy God',
          options: ['Holy God', 'O Holy One', 'God is holy', 'The Holy Lord'],
          explanation: 'ⲁⲅⲓⲟⲥ = holy (Greek hagios) + ⲟ ⲑⲉⲟⲥ = God - opening of the Trisagion'
        },
        {
          id: 'ex-22-3-2',
          type: 'multiple_choice',
          question: 'What does ⲁⲅⲓⲟⲥ ⲓⲥⲭⲩⲣⲟⲥ mean?',
          correctAnswer: 'Holy Mighty',
          options: ['Holy Mighty', 'Holy Strong', 'Holy Powerful', 'all of the above'],
          explanation: 'ⲁⲅⲓⲟⲥ = holy + ⲓⲥⲭⲩⲣⲟⲥ = mighty/strong (Greek ischyros) - second part of Trisagion'
        },
        {
          id: 'ex-22-3-3',
          type: 'matching',
          question: 'Match the Trisagion parts',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲁⲅⲓⲟⲥ ⲟ ⲑⲉⲟⲥ', english: 'Holy God' },
            { coptic: 'ⲁⲅⲓⲟⲥ ⲓⲥⲭⲩⲣⲟⲥ', english: 'Holy Mighty' },
            { coptic: 'ⲁⲅⲓⲟⲥ ⲁⲑⲁⲛⲁⲧⲟⲥ', english: 'Holy Immortal' },
            { coptic: 'ⲉⲗⲉⲏⲥⲟⲛ ⲏⲙⲁⲥ', english: 'have mercy on us' }
          ]
        },
        {
          id: 'ex-22-3-4',
          type: 'translation',
          question: 'Translate: ⲁⲅⲓⲟⲥ ⲁⲑⲁⲛⲁⲧⲟⲥ ⲉⲗⲉⲏⲥⲟⲛ ⲏⲙⲁⲥ',
          questionCoptic: 'ⲁⲅⲓⲟⲥ ⲁⲑⲁⲛⲁⲧⲟⲥ ⲉⲗⲉⲏⲥⲟⲛ ⲏⲙⲁⲥ',
          correctAnswer: 'Holy Immortal, have mercy on us',
          options: ['Holy Immortal, have mercy on us', 'Holy Eternal One, pity us', 'Holy Undying, save us', 'Holy Forever, bless us'],
          explanation: 'ⲁⲅⲓⲟⲥ ⲁⲑⲁⲛⲁⲧⲟⲥ = Holy Immortal + ⲉⲗⲉⲏⲥⲟⲛ ⲏⲙⲁⲥ = have mercy on us'
        },
        {
          id: 'ex-22-3-5',
          type: 'sentence_building',
          question: 'Build the complete Trisagion: "Holy God, Holy Mighty, Holy Immortal"',
          correctAnswer: 'ⲁⲅⲓⲟⲥ ⲟ ⲑⲉⲟⲥ ⲁⲅⲓⲟⲥ ⲓⲥⲭⲩⲣⲟⲥ ⲁⲅⲓⲟⲥ ⲁⲑⲁⲛⲁⲧⲟⲥ',
          wordBank: ['ⲁⲅⲓⲟⲥ', 'ⲟ ⲑⲉⲟⲥ', 'ⲁⲅⲓⲟⲥ', 'ⲓⲥⲭⲩⲣⲟⲥ', 'ⲁⲅⲓⲟⲥ', 'ⲁⲑⲁⲛⲁⲧⲟⲥ'],
          explanation: 'The Trisagion (Thrice-Holy) hymn: ⲁⲅⲓⲟⲥ said three times with three divine attributes'
        },
        {
          id: 'ex-22-3-6',
          type: 'multiple_choice',
          question: 'What does "Trisagion" mean?',
          correctAnswer: 'Thrice-Holy',
          options: ['Thrice-Holy', 'Three Gods', 'Trinity', 'Holy Trinity'],
          explanation: 'Trisagion = tri (three) + hagios (holy) - the hymn says "Holy" three times'
        },
        {
          id: 'ex-22-3-7',
          type: 'fill_blank',
          question: 'Complete: ⲉⲑⲣⲉⲛϣⲱⲡⲓ ⲛⲉⲙⲡⲥⲁ ⲛⲧⲉⲛϫⲱ ⲙⲙⲟⲥ ϧⲉⲛ ___ = That we may be worthy to say it in thanksgiving',
          correctAnswer: 'ⲟⲩϣⲉⲡϩⲙⲟⲧ',
          options: ['ⲟⲩϣⲉⲡϩⲙⲟⲧ', 'ⲟⲩⲟⲩⲛⲟϥ', 'ⲟⲩⲥⲙⲟⲩ', 'ⲟⲩⲛⲁϩϯ'],
          explanation: 'ⲟⲩϣⲉⲡϩⲙⲟⲧ = thanksgiving - the attitude with which we pray'
        },
        {
          id: 'ex-22-3-8',
          type: 'translation',
          question: 'Translate: ϧⲉⲛ ⲫⲣⲁⲛ ⲙⲫⲓⲱⲧ ⲛⲉⲙ ⲡϣⲏⲣⲓ ⲛⲉⲙ ⲡⲓⲡⲛⲉⲩⲙⲁ ⲉⲑⲟⲩⲁⲃ',
          questionCoptic: 'ϧⲉⲛ ⲫⲣⲁⲛ ⲙⲫⲓⲱⲧ ⲛⲉⲙ ⲡϣⲏⲣⲓ ⲛⲉⲙ ⲡⲓⲡⲛⲉⲩⲙⲁ ⲉⲑⲟⲩⲁⲃ',
          correctAnswer: 'In the name of the Father and the Son and the Holy Spirit',
          options: ['In the name of the Father and the Son and the Holy Spirit', 'By the Father, Son, and Holy Spirit', 'Through the Trinity', 'With Father, Son, and Spirit'],
          explanation: 'ϧⲉⲛ ⲫⲣⲁⲛ = in the name + ⲙⲫⲓⲱⲧ ⲛⲉⲙ ⲡϣⲏⲣⲓ ⲛⲉⲙ ⲡⲓⲡⲛⲉⲩⲙⲁ ⲉⲑⲟⲩⲁⲃ = of Father, Son, Holy Spirit - the sign of the cross (Bohairic ϣⲏⲣⲓ not ⲥⲏⲣⲓ!)'
        }
      ]
    }
  ]
};

export default unit22;
