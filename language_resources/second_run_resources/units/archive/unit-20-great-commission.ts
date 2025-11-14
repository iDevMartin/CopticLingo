import { Unit } from '../../types';

// UNIT 20: GREAT COMMISSION & JOHN'S PROLOGUE
// Verified for Bohairic dialect consistency
// Matthew 28:19-20 and John 1:1-3

const unit20: Unit = {
  id: 'unit-20',
  title: 'Great Commission & John\\'s Prologue',
  description: 'The Great Commission and the beginning of John\\'s Gospel',
  order: 20,
  color: '#CE82FF',
  lessons: [
    {
      id: 'lesson-20-1',
      unitId: 'unit-20',
      title: 'Matthew 28:19 - Go Therefore',
      description: 'The Great Commission part 1',
      order: 1,
      xpReward: 45,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-20-1-1',
          type: 'translation',
          question: 'Translate: ⲙⲁϣⲉⲛⲱⲧⲉⲛ ⲟⲩⲛ',
          questionCoptic: 'ⲙⲁϣⲉⲛⲱⲧⲉⲛ ⲟⲩⲛ',
          correctAnswer: 'Go therefore',
          options: ['Go therefore', 'Go now', 'Go forth', 'Come therefore'],
          explanation: 'ⲙⲁϣⲉⲛⲱⲧⲉⲛ = go (plural imperative from ϣⲉⲛⲓ) + ⲟⲩⲛ = therefore/then (Bohairic ϣⲉⲛⲓ not ⲃⲱⲕ!)'
        },
        {
          id: 'ex-20-1-2',
          type: 'multiple_choice',
          question: 'What is the imperative "Go!" (plural) in Coptic?',
          correctAnswer: 'ⲙⲁϣⲉⲛⲱⲧⲉⲛ',
          options: ['ⲙⲁϣⲉⲛⲱⲧⲉⲛ', 'ⲙⲁⲃⲱⲕ', 'ϣⲉⲛⲓ', 'ⲁⲙⲱⲓⲛⲓ'],
          explanation: 'ⲙⲁϣⲉⲛⲱⲧⲉⲛ (mashenōten) = "Go!" (plural) from verb ϣⲉⲛⲓ (Bohairic not ⲃⲱⲕ!)'
        },
        {
          id: 'ex-20-1-3',
          type: 'matching',
          question: 'Match commission vocabulary',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ϣⲉⲛⲓ', english: 'to go' },
            { coptic: 'ⲙⲁϣⲉⲛⲱⲧⲉⲛ', english: 'go! (pl)' },
            { coptic: 'ⲙⲁⲑⲏⲧⲉⲩⲓⲛ', english: 'make disciples' },
            { coptic: 'ⲉⲑⲛⲟⲥ', english: 'nation/people' }
          ]
        },
        {
          id: 'ex-20-1-4',
          type: 'translation',
          question: 'Translate: ⲙⲁⲑⲏⲧⲉⲩⲓⲛ ⲛ̀ⲛⲓⲉⲑⲛⲟⲥ ⲧⲏⲣⲟⲩ',
          questionCoptic: 'ⲙⲁⲑⲏⲧⲉⲩⲓⲛ ⲛ̀ⲛⲓⲉⲑⲛⲟⲥ ⲧⲏⲣⲟⲩ',
          correctAnswer: 'Make disciples of all nations',
          options: ['Make disciples of all nations', 'Teach all peoples', 'Disciple every nation', 'All nations follow'],
          explanation: 'ⲙⲁⲑⲏⲧⲉⲩⲓⲛ = make disciples + ⲛ̀ⲛⲓⲉⲑⲛⲟⲥ = of the nations + ⲧⲏⲣⲟⲩ = all'
        },
        {
          id: 'ex-20-1-5',
          type: 'multiple_choice',
          question: 'What does ⲙⲁⲑⲏⲧⲏⲥ mean?',
          questionCoptic: 'ⲙⲁⲑⲏⲧⲏⲥ',
          correctAnswer: 'disciple/student',
          options: ['disciple/student', 'teacher', 'apostle', 'prophet'],
          explanation: 'ⲙⲁⲑⲏⲧⲏⲥ (mathētēs) means "disciple" or "student" (from Greek)'
        },
        {
          id: 'ex-20-1-6',
          type: 'sentence_building',
          question: 'Build: "All nations"',
          correctAnswer: 'ⲛⲓⲉⲑⲛⲟⲥ ⲧⲏⲣⲟⲩ',
          wordBank: ['ⲛⲓ', 'ⲉⲑⲛⲟⲥ', 'ⲧⲏⲣⲟⲩ', 'ⲛⲓⲃⲉⲛ'],
          explanation: 'ⲛⲓⲉⲑⲛⲟⲥ ⲧⲏⲣⲟⲩ = all the nations (ⲧⲏⲣⲟⲩ = all/every)'
        },
        {
          id: 'ex-20-1-7',
          type: 'fill_blank',
          question: 'Complete: ⲙⲁϣⲉⲛⲱⲧⲉⲛ ___ = Go therefore',
          correctAnswer: 'ⲟⲩⲛ',
          options: ['ⲟⲩⲛ', 'ⲇⲉ', 'ⲅⲁⲣ', 'ⲁⲗⲗⲁ'],
          explanation: 'ⲟⲩⲛ (oun) means "therefore" or "then"'
        },
        {
          id: 'ex-20-1-8',
          type: 'matching',
          question: 'Match teaching and baptism terms',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲙⲁⲑⲏⲧⲉⲩⲓⲛ', english: 'make disciples' },
            { coptic: 'ⲧ̀ⲥⲁⲃⲟ', english: 'teach' },
            { coptic: 'ⲱⲙⲥ', english: 'baptize' },
            { coptic: 'ⲫⲣⲁⲛ', english: 'the name' }
          ]
        }
      ]
    },
    {
      id: 'lesson-20-2',
      unitId: 'unit-20',
      title: 'Matthew 28:19b - Baptizing Them',
      description: 'The Great Commission part 2',
      order: 2,
      xpReward: 45,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-20-2-1',
          type: 'translation',
          question: 'Translate: ⲉⲣⲉⲧⲉⲛⲱⲙⲥ ⲙⲙⲱⲟⲩ',
          questionCoptic: 'ⲉⲣⲉⲧⲉⲛⲱⲙⲥ ⲙⲙⲱⲟⲩ',
          correctAnswer: 'Baptizing them',
          options: ['Baptizing them', 'You baptize them', 'To baptize them', 'They baptize'],
          explanation: 'ⲉⲣⲉⲧⲉⲛⲱⲙⲥ = you (pl) baptize + ⲙⲙⲱⲟⲩ = them'
        },
        {
          id: 'ex-20-2-2',
          type: 'multiple_choice',
          question: 'What is "to baptize" in Coptic?',
          correctAnswer: 'ⲱⲙⲥ',
          options: ['ⲱⲙⲥ', 'ⲧ̀ⲥⲁⲃⲟ', 'ⲙⲁⲑⲏⲧⲉⲩⲓⲛ', 'ⲣⲁⲕⲥ'],
          explanation: 'ⲱⲙⲥ (ōms) means "to baptize" - literally "to dip/immerse"'
        },
        {
          id: 'ex-20-2-3',
          type: 'matching',
          question: 'Match baptism vocabulary',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲱⲙⲥ', english: 'to baptize' },
            { coptic: 'ⲱⲙⲥ ⲙ̀ⲙⲟϥ', english: 'baptism' },
            { coptic: 'ⲣⲉϥⲱⲙⲥ', english: 'baptizer' },
            { coptic: 'ⲙⲱⲟⲩ', english: 'water' }
          ]
        },
        {
          id: 'ex-20-2-4',
          type: 'translation',
          question: 'Translate: ϧⲉⲛ ⲫⲣⲁⲛ ⲙ̀ⲫⲓⲱⲧ',
          questionCoptic: 'ϧⲉⲛ ⲫⲣⲁⲛ ⲙ̀ⲫⲓⲱⲧ',
          correctAnswer: 'In the name of the Father',
          options: ['In the name of the Father', 'By the Father\\'s name', 'The Father\\'s name', 'Named after the Father'],
          explanation: 'ϧⲉⲛ = in + ⲫⲣⲁⲛ = the name + ⲙ̀ⲫⲓⲱⲧ = of the Father'
        },
        {
          id: 'ex-20-2-5',
          type: 'sentence_building',
          question: 'Build: "In the name of the Father and the Son"',
          correctAnswer: 'ϧⲉⲛ ⲫⲣⲁⲛ ⲙ̀ⲫⲓⲱⲧ ⲛⲉⲙ ⲡⲓϣⲏⲣⲓ',
          wordBank: ['ϧⲉⲛ', 'ⲫⲣⲁⲛ', 'ⲙ̀ⲫⲓⲱⲧ', 'ⲛⲉⲙ', 'ⲡⲓϣⲏⲣⲓ'],
          explanation: 'ϧⲉⲛ ⲫⲣⲁⲛ ⲙ̀ⲫⲓⲱⲧ ⲛⲉⲙ ⲡⲓϣⲏⲣⲓ = in the name of Father and Son (Bohairic ϣⲏⲣⲓ not ⲥⲏⲣⲓ!)'
        },
        {
          id: 'ex-20-2-6',
          type: 'fill_blank',
          question: 'Complete: ϧⲉⲛ ⲫⲣⲁⲛ ⲙ̀ⲫⲓⲱⲧ ⲛⲉⲙ ⲡⲓϣⲏⲣⲓ ⲛⲉⲙ ⲡⲓⲡ̀ⲛⲉⲩⲙⲁ ___ = In the name of Father, Son and Holy Spirit',
          correctAnswer: 'ⲉⲑⲟⲩⲁⲃ',
          options: ['ⲉⲑⲟⲩⲁⲃ', 'ⲛⲟⲩⲃ', 'ⲟⲩⲃⲁϣ', 'ⲙⲏⲓ'],
          explanation: 'ⲉⲑⲟⲩⲁⲃ (ethouab) means "holy" (Bohairic ϣⲏⲣⲓ not ⲥⲏⲣⲓ!)'
        },
        {
          id: 'ex-20-2-7',
          type: 'multiple_choice',
          question: 'What is "the name" (with article) in Coptic?',
          correctAnswer: 'ⲫⲣⲁⲛ',
          options: ['ⲫⲣⲁⲛ', 'ⲡⲓⲣⲁⲛ', 'ⲡⲣⲁⲛ', 'ⲫⲁⲣⲁⲛ'],
          explanation: 'ⲫⲣⲁⲛ (vran) = the name (masculine with proclitic article)'
        },
        {
          id: 'ex-20-2-8',
          type: 'matching',
          question: 'Match Trinity baptismal formula',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲫⲓⲱⲧ', english: 'the Father' },
            { coptic: 'ⲡⲓϣⲏⲣⲓ', english: 'the Son' },
            { coptic: 'ⲡⲓⲡ̀ⲛⲉⲩⲙⲁ ⲉⲑⲟⲩⲁⲃ', english: 'the Holy Spirit' },
            { coptic: 'ⲫⲣⲁⲛ', english: 'the name' }
          ]
        }
      ]
    },
    {
      id: 'lesson-20-3',
      unitId: 'unit-20',
      title: 'John 1:1 - In the Beginning',
      description: 'The opening of John\\'s Gospel',
      order: 3,
      xpReward: 45,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-20-3-1',
          type: 'translation',
          question: 'Translate: ϧⲉⲛ ϯⲁⲣⲭⲏ',
          questionCoptic: 'ϧⲉⲛ ϯⲁⲣⲭⲏ',
          correctAnswer: 'In the beginning',
          options: ['In the beginning', 'At the start', 'From the beginning', 'The beginning'],
          explanation: 'ϧⲉⲛ = in + ϯⲁⲣⲭⲏ = the beginning (from Greek arche)'
        },
        {
          id: 'ex-20-3-2',
          type: 'multiple_choice',
          question: 'What does ⲁⲣⲭⲏ mean?',
          questionCoptic: 'ⲁⲣⲭⲏ',
          correctAnswer: 'beginning/origin',
          options: ['beginning/origin', 'end', 'middle', 'creation'],
          explanation: 'ⲁⲣⲭⲏ (archē) means "beginning" or "origin" (from Greek)'
        },
        {
          id: 'ex-20-3-3',
          type: 'matching',
          question: 'Match John\\'s Prologue vocabulary',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲁⲣⲭⲏ', english: 'beginning' },
            { coptic: 'ⲗⲟⲅⲟⲥ', english: 'Word/Logos' },
            { coptic: 'ⲛⲁϥϣⲟⲡ', english: 'he was/existed' },
            { coptic: 'ⲛⲉⲙ', english: 'with' }
          ]
        },
        {
          id: 'ex-20-3-4',
          type: 'translation',
          question: 'Translate: ⲛⲉⲣⲉ ⲡⲓⲗⲟⲅⲟⲥ ϣⲟⲡ',
          questionCoptic: 'ⲛⲉⲣⲉ ⲡⲓⲗⲟⲅⲟⲥ ϣⲟⲡ',
          correctAnswer: 'The Word was',
          options: ['The Word was', 'The Word existed', 'There was the Word', 'The Word became'],
          explanation: 'ⲛⲉⲣⲉ...ϣⲟⲡ = was (past continuous) + ⲡⲓⲗⲟⲅⲟⲥ = the Word'
        },
        {
          id: 'ex-20-3-5',
          type: 'sentence_building',
          question: 'Build: "In the beginning was the Word"',
          correctAnswer: 'ϧⲉⲛ ϯⲁⲣⲭⲏ ⲛⲉⲣⲉ ⲡⲓⲗⲟⲅⲟⲥ ϣⲟⲡ',
          wordBank: ['ϧⲉⲛ', 'ϯⲁⲣⲭⲏ', 'ⲛⲉⲣⲉ', 'ⲡⲓⲗⲟⲅⲟⲥ', 'ϣⲟⲡ'],
          explanation: 'ϧⲉⲛ ϯⲁⲣⲭⲏ ⲛⲉⲣⲉ ⲡⲓⲗⲟⲅⲟⲥ ϣⲟⲡ = in the beginning the Word was'
        },
        {
          id: 'ex-20-3-6',
          type: 'translation',
          question: 'Translate: ⲟⲩⲟϩ ⲛⲉⲣⲉ ⲡⲓⲗⲟⲅⲟⲥ ⲛⲉⲙ ⲫϯ',
          questionCoptic: 'ⲟⲩⲟϩ ⲛⲉⲣⲉ ⲡⲓⲗⲟⲅⲟⲥ ⲛⲉⲙ ⲫϯ',
          correctAnswer: 'And the Word was with God',
          options: ['And the Word was with God', 'The Word and God', 'The Word came to God', 'God was with the Word'],
          explanation: 'ⲟⲩⲟϩ = and + ⲛⲉⲣⲉ ⲡⲓⲗⲟⲅⲟⲥ ϣⲟⲡ = the Word was + ⲛⲉⲙ ⲫϯ = with God (Bohairic ⲫϯ not ⲫⲛⲟⲩϯ!)'
        },
        {
          id: 'ex-20-3-7',
          type: 'fill_blank',
          question: 'Complete: ϧⲉⲛ ϯⲁⲣⲭⲏ ⲛⲉⲣⲉ ⲡⲓ___ ϣⲟⲡ = In the beginning was the Word',
          correctAnswer: 'ⲗⲟⲅⲟⲥ',
          options: ['ⲗⲟⲅⲟⲥ', 'ⲡ̀ⲛⲉⲩⲙⲁ', 'ⲣⲱⲙⲓ', 'ⲟⲩⲱⲓⲛⲓ'],
          explanation: 'ⲗⲟⲅⲟⲥ (Logos) = the Word (from Greek logos = word/reason)'
        },
        {
          id: 'ex-20-3-8',
          type: 'matching',
          question: 'Match Word and God vocabulary',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲗⲟⲅⲟⲥ', english: 'Word/Logos' },
            { coptic: 'ⲫϯ', english: 'God' },
            { coptic: 'ⲛⲟⲩϯ', english: 'divine/God' },
            { coptic: 'ⲛⲉⲣⲉ...ϣⲟⲡ', english: 'was/existed' }
          ]
        }
      ]
    }
  ]
};

export default unit20;
