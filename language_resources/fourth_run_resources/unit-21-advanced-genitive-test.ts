import { Unit } from '../../types';

// TEST FILE FOR UNIT 21: ADVANCED GENITIVE
// Comprehensive test exercises covering all 4 lessons
// 28 exercises total - testing complex possessive constructions with ⲛⲧⲉ

const unit21Test: Unit = {
  id: 'unit-21-test',
  title: 'Unit 21 Test: Advanced Genitive',
  description: 'Comprehensive test of complex possessive constructions',
  order: 21.5,
  color: '#58CC02',
  lessons: [
    {
      id: 'lesson-21-test',
      unitId: 'unit-21-test',
      title: 'Advanced Genitive Comprehensive Test',
      description: 'Test all ⲛⲧⲉ constructions and complex genitives',
      order: 1,
      xpReward: 100,
      isLocked: true,
      completed: false,
      exercises: [
        // Basic ⲛⲧⲉ genitive tests
        {
          id: 'test-21-1',
          type: 'translation',
          question: 'Translate: ⲡⲓϫⲱⲙ ⲛ̀ⲧⲉ ⲫϯ',
          questionCoptic: 'ⲡⲓϫⲱⲙ ⲛ̀ⲧⲉ ⲫϯ',
          correctAnswer: 'The book of God',
          options: ['The book of God', 'God\'s book', 'The God of the book', 'A book for God'],
          explanation: 'ⲡⲓϫⲱⲙ = the book + ⲛ̀ⲧⲉ = of + ⲫϯ = God (genitive construction) (Bohairic ⲫϯ not ⲫⲛⲟⲩϯ!)'
        },
        {
          id: 'test-21-2',
          type: 'multiple_choice',
          question: 'What is ⲛ̀ⲧⲉ (or ⲛⲧⲉ) used for?',
          correctAnswer: 'Marking possession/genitive relationships',
          options: ['Marking possession/genitive relationships', 'Forming questions', 'Negating sentences', 'Making plurals'],
          explanation: 'ⲛ̀ⲧⲉ/ⲛⲧⲉ is the genitive particle meaning "of" for possession'
        },
        {
          id: 'test-21-3',
          type: 'fill_blank',
          question: 'Complete: ⲡⲓⲏⲓ ___ ⲡⲓⲣⲱⲙⲓ = The house of the man',
          correctAnswer: 'ⲛ̀ⲧⲉ',
          options: ['ⲛ̀ⲧⲉ', 'ⲛ̀', 'ⲙ̀', 'ⲉ̀'],
          explanation: 'ⲡⲓⲏⲓ ⲛ̀ⲧⲉ ⲡⲓⲣⲱⲙⲓ = the house of the man (genitive)'
        },
        {
          id: 'test-21-4',
          type: 'sentence_building',
          question: 'Build: "The word of the Lord"',
          correctAnswer: 'ⲡⲓⲥⲁϫⲓ ⲛ̀ⲧⲉ Ⲡ⳪',
          wordBank: ['ⲡⲓⲥⲁϫⲓ', 'ⲛ̀ⲧⲉ', 'Ⲡ⳪', 'ⲙ̀'],
          explanation: 'ⲡⲓⲥⲁϫⲓ ⲛ̀ⲧⲉ Ⲡ⳪ = the word of the Lord (Ⲡ⳪ = Kyrios, the Lord)'
        },
        {
          id: 'test-21-5',
          type: 'matching',
          question: 'Match genitive phrases',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲧ̀ⲁⲅⲁⲡⲏ ⲛ̀ⲧⲉ ⲫϯ', english: 'the love of God' },
            { coptic: 'ⲡⲓϣⲏⲣⲓ ⲛ̀ⲧⲉ ⲫⲣⲱⲙⲓ', english: 'the son of the man' },
            { coptic: 'ϯⲙⲉⲧⲟⲩⲣⲟ ⲛ̀ⲧⲉ ⲫϯ', english: 'the kingdom of God' },
            { coptic: 'ⲛⲓⲥⲁϫⲓ ⲛ̀ⲧⲉ ⲡⲓⲱⲛϧ', english: 'the words of life' }
          ]
        },
        {
          id: 'test-21-6',
          type: 'translation',
          question: 'Translate: ⲛⲓⲁⲅⲅⲉⲗⲟⲥ ⲛ̀ⲧⲉ ⲧ̀ⲫⲉ',
          questionCoptic: 'ⲛⲓⲁⲅⲅⲉⲗⲟⲥ ⲛ̀ⲧⲉ ⲧ̀ⲫⲉ',
          correctAnswer: 'The angels of heaven',
          options: ['The angels of heaven', 'The heavenly angels', 'Heaven\'s angels', 'The angel of the heavens'],
          explanation: 'ⲛⲓⲁⲅⲅⲉⲗⲟⲥ = the angels + ⲛ̀ⲧⲉ = of + ⲧ̀ⲫⲉ = heaven/the sky'
        },

        // Genitive with pronouns tests
        {
          id: 'test-21-7',
          type: 'translation',
          question: 'Translate: ⲡⲓϫⲱⲙ ⲛ̀ⲧⲉ ⲡⲁⲓⲱⲧ',
          questionCoptic: 'ⲡⲓϫⲱⲙ ⲛ̀ⲧⲉ ⲡⲁⲓⲱⲧ',
          correctAnswer: 'My father\'s book / The book of my father',
          options: ['My father\'s book / The book of my father', 'The book of the father', 'My book\'s father', 'The father of my book'],
          explanation: 'ⲡⲓϫⲱⲙ ⲛ̀ⲧⲉ ⲡⲁⲓⲱⲧ = the book of my-father (genitive with possessive)'
        },
        {
          id: 'test-21-8',
          type: 'multiple_choice',
          question: 'How do you say "The name of your brother"?',
          correctAnswer: 'ⲡ̀ⲣⲁⲛ ⲛ̀ⲧⲉ ⲡⲉⲕⲥⲟⲛ',
          options: ['ⲡ̀ⲣⲁⲛ ⲛ̀ⲧⲉ ⲡⲉⲕⲥⲟⲛ', 'ⲡⲉⲕⲣⲁⲛ ⲛ̀ⲧⲉ ⲡⲓⲥⲟⲛ', 'ⲡ̀ⲣⲁⲛ ⲙ̀ⲡⲉⲕⲥⲟⲛ', 'ⲡⲉⲕⲥⲟⲛ ⲡ̀ⲣⲁⲛ'],
          explanation: 'ⲡ̀ⲣⲁⲛ = the name + ⲛ̀ⲧⲉ = of + ⲡⲉⲕⲥⲟⲛ = your brother'
        },
        {
          id: 'test-21-9',
          type: 'fill_blank',
          question: 'Complete: ⲧⲉϩⲓⲙⲓ ⲛ̀ⲧⲉ ___ = Your wife / The woman of yours',
          correctAnswer: 'ⲛ̀ⲑⲟⲕ',
          options: ['ⲛ̀ⲑⲟⲕ', 'ⲡⲉⲕ', 'ⲕ', 'ⲧⲉⲕ'],
          explanation: 'ⲧⲉϩⲓⲙⲓ ⲛ̀ⲧⲉ ⲛ̀ⲑⲟⲕ = the woman of you (genitive with independent pronoun)'
        },
        {
          id: 'test-21-10',
          type: 'sentence_building',
          question: 'Build: "The faith of our fathers"',
          correctAnswer: 'ⲡⲓⲛⲁϩϯ ⲛ̀ⲧⲉ ⲛⲉⲛⲓⲟϯ',
          wordBank: ['ⲡⲓⲛⲁϩϯ', 'ⲛ̀ⲧⲉ', 'ⲛⲉⲛⲓⲟϯ', 'ⲛ̀'],
          explanation: 'ⲡⲓⲛⲁϩϯ = the faith + ⲛ̀ⲧⲉ = of + ⲛⲉⲛⲓⲟϯ = our fathers'
        },
        {
          id: 'test-21-11',
          type: 'matching',
          question: 'Match genitive with pronouns',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲡⲓⲏⲓ ⲛ̀ⲧⲉ ⲡⲁⲓⲱⲧ', english: 'my father\'s house' },
            { coptic: 'ⲡⲓϫⲱⲙ ⲛ̀ⲧⲉ ⲧⲉⲕⲙⲁⲁⲩ', english: 'your mother\'s book' },
            { coptic: 'ⲧ̀ⲁⲅⲁⲡⲏ ⲛ̀ⲧⲉ ⲛⲉⲛⲥⲛⲏⲟⲩ', english: 'our brothers\' love' },
            { coptic: 'ⲡ̀ⲣⲁⲛ ⲛ̀ⲧⲉ ⲡⲟⲩϣⲏⲣⲓ', english: 'their child\'s name' }
          ]
        },
        {
          id: 'test-21-12',
          type: 'translation',
          question: 'Translate: ⲡⲓⲥⲟⲛ ⲛ̀ⲧⲉ ⲡⲉϥⲓⲱⲧ',
          questionCoptic: 'ⲡⲓⲥⲟⲛ ⲛ̀ⲧⲉ ⲡⲉϥⲓⲱⲧ',
          correctAnswer: 'His father\'s brother / The brother of his father',
          options: ['His father\'s brother / The brother of his father', 'The brother of the father', 'His brother\'s father', 'The father of his brother'],
          explanation: 'ⲡⲓⲥⲟⲛ = the brother + ⲛ̀ⲧⲉ = of + ⲡⲉϥⲓⲱⲧ = his father'
        },

        // Multiple genitives (chained) tests
        {
          id: 'test-21-13',
          type: 'translation',
          question: 'Translate: ⲡⲓϫⲱⲙ ⲛ̀ⲧⲉ ⲡⲓⲙⲁⲑⲏⲧⲏⲥ ⲛ̀ⲧⲉ Ⲡ⳪',
          questionCoptic: 'ⲡⲓϫⲱⲙ ⲛ̀ⲧⲉ ⲡⲓⲙⲁⲑⲏⲧⲏⲥ ⲛ̀ⲧⲉ Ⲡ⳪',
          correctAnswer: 'The book of the disciple of the Lord',
          options: ['The book of the disciple of the Lord', 'The disciple\'s book of the Lord', 'The Lord\'s book of the disciple', 'The book of the disciples'],
          explanation: 'Multiple genitives: ⲡⲓϫⲱⲙ = book + ⲛ̀ⲧⲉ = of + ⲡⲓⲙⲁⲑⲏⲧⲏⲥ = the disciple + ⲛ̀ⲧⲉ = of + Ⲡ⳪ = the Lord'
        },
        {
          id: 'test-21-14',
          type: 'multiple_choice',
          question: 'How do you say "The son of the king of Egypt"?',
          correctAnswer: 'ⲡ̀ϣⲏⲣⲓ ⲛ̀ⲧⲉ ⲡ̀ⲟⲩⲣⲟ ⲛ̀ⲧⲉ ⲭⲏⲙⲓ',
          options: ['ⲡ̀ϣⲏⲣⲓ ⲛ̀ⲧⲉ ⲡ̀ⲟⲩⲣⲟ ⲛ̀ⲧⲉ ⲭⲏⲙⲓ', 'ⲡ̀ϣⲏⲣⲓ ⲙ̀ⲡ̀ⲟⲩⲣⲟ ⲛ̀ⲭⲏⲙⲓ', 'ⲡ̀ⲟⲩⲣⲟ ⲛ̀ⲧⲉ ⲡ̀ϣⲏⲣⲓ ⲛ̀ⲧⲉ ⲭⲏⲙⲓ', 'ⲡ̀ϣⲏⲣⲓ ⲙ̀ⲡ̀ⲟⲩⲣⲟ'],
          explanation: 'Chained genitives: ⲡ̀ϣⲏⲣⲓ = son + ⲛ̀ⲧⲉ = of + ⲡ̀ⲟⲩⲣⲟ = king + ⲛ̀ⲧⲉ = of + ⲭⲏⲙⲓ = Egypt (Bohairic ϣⲏⲣⲓ not ⲥⲏⲣⲓ!)'
        },
        {
          id: 'test-21-15',
          type: 'sentence_building',
          question: 'Build: "The glory of the name of God"',
          correctAnswer: 'ⲡ̀ⲱⲟⲩ ⲛ̀ⲧⲉ ⲡ̀ⲣⲁⲛ ⲛ̀ⲧⲉ ⲫϯ',
          wordBank: ['ⲡ̀ⲱⲟⲩ', 'ⲛ̀ⲧⲉ', 'ⲡ̀ⲣⲁⲛ', 'ⲫϯ'],
          explanation: 'ⲡ̀ⲱⲟⲩ = glory + ⲛ̀ⲧⲉ = of + ⲡ̀ⲣⲁⲛ = name + ⲛ̀ⲧⲉ = of + ⲫϯ = God (Bohairic ⲫϯ not ⲫⲛⲟⲩϯ!)'
        },
        {
          id: 'test-21-16',
          type: 'fill_blank',
          question: 'Complete: ⲧ̀ⲙⲁⲁⲩ ⲛ̀ⲧⲉ ⲧⲉⲥϩⲓⲙⲓ ⲛ̀ⲧⲉ ___ = The mother of my brother\'s wife',
          correctAnswer: 'ⲡⲁⲥⲟⲛ',
          options: ['ⲡⲁⲥⲟⲛ', 'ⲡⲓⲥⲟⲛ', 'ⲥⲟⲛ', 'ⲡⲉⲕⲥⲟⲛ'],
          explanation: 'Multiple genitives: ⲧ̀ⲙⲁⲁⲩ = mother + ⲛ̀ⲧⲉ = of + ⲧⲉϩⲓⲙⲓ = woman + ⲛ̀ⲧⲉ = of + ⲡⲁⲥⲟⲛ = my brother'
        },

        // Genitive with adjectives tests
        {
          id: 'test-21-17',
          type: 'translation',
          question: 'Translate: ⲡⲓⲛⲓϣϯ ⲛ̀ⲣⲁⲛ ⲛ̀ⲧⲉ ⲫϯ',
          questionCoptic: 'ⲡⲓⲛⲓϣϯ ⲛ̀ⲣⲁⲛ ⲛ̀ⲧⲉ ⲫϯ',
          correctAnswer: 'The great name of God',
          options: ['The great name of God', 'The name of the great God', 'God\'s great name', 'The greatest name of God'],
          explanation: 'ⲡⲓⲛⲓϣϯ ⲛ̀ⲣⲁⲛ = the great name + ⲛ̀ⲧⲉ ⲫϯ = of God (adjective + genitive)'
        },
        {
          id: 'test-21-18',
          type: 'matching',
          question: 'Match genitive with adjectives',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲡⲓⲛⲁⲛⲉϥ ⲛ̀ϫⲱⲙ ⲛ̀ⲧⲉ ⲫϯ', english: 'the good book of God' },
            { coptic: 'ϯⲛⲓϣϯ ⲛ̀ⲁⲅⲁⲡⲏ ⲛ̀ⲧⲉ Ⲡ⳪', english: 'the great love of the Lord' },
            { coptic: 'ⲛⲓⲟⲩⲁⲃ ⲛ̀ⲥⲁϫⲓ ⲛ̀ⲧⲉ ⲡⲓⲱⲛϧ', english: 'the holy words of life' },
            { coptic: 'ⲡⲓϣⲟⲣⲡ ⲛ̀ϣⲏⲣⲓ ⲛ̀ⲧⲉ ⲁⲇⲁⲙ', english: 'the first son of Adam' }
          ]
        },
        {
          id: 'test-21-19',
          type: 'translation',
          question: 'Translate: ⲛⲓⲟⲩⲁⲃ ⲛ̀ⲁⲅⲅⲉⲗⲟⲥ ⲛ̀ⲧⲉ ⲫϯ',
          questionCoptic: 'ⲛⲓⲟⲩⲁⲃ ⲛ̀ⲁⲅⲅⲉⲗⲟⲥ ⲛ̀ⲧⲉ ⲫϯ',
          correctAnswer: 'The holy angels of God',
          options: ['The holy angels of God', 'God\'s holy angels', 'The angels of holy God', 'The holiest angels of God'],
          explanation: 'ⲛⲓⲟⲩⲁⲃ ⲛ̀ⲁⲅⲅⲉⲗⲟⲥ = the holy angels + ⲛ̀ⲧⲉ ⲫϯ = of God (Bohairic ⲫϯ not ⲫⲛⲟⲩϯ!)'
        },

        // Complex constructions tests
        {
          id: 'test-21-20',
          type: 'translation',
          question: 'Translate: ⲡⲓϫⲱⲙ ⲛ̀ⲧⲉ ⲡⲓⲱⲛϧ ⲉⲧⲟⲩⲁⲃ',
          questionCoptic: 'ⲡⲓϫⲱⲙ ⲛ̀ⲧⲉ ⲡⲓⲱⲛϧ ⲉⲧⲟⲩⲁⲃ',
          correctAnswer: 'The book of life that is holy',
          options: ['The book of life that is holy', 'The holy book of life', 'The book of holy life', 'The life of the holy book'],
          explanation: 'ⲡⲓϫⲱⲙ ⲛ̀ⲧⲉ ⲡⲓⲱⲛϧ = the book of life + ⲉⲧⲟⲩⲁⲃ = that is holy (genitive + relative)'
        },
        {
          id: 'test-21-21',
          type: 'multiple_choice',
          question: 'How do you say "The words of the prayer of faith"?',
          correctAnswer: 'ⲛⲓⲥⲁϫⲓ ⲛ̀ⲧⲉ ⲡⲓϣⲗⲏⲗ ⲛ̀ⲧⲉ ⲡⲓⲛⲁϩϯ',
          options: ['ⲛⲓⲥⲁϫⲓ ⲛ̀ⲧⲉ ⲡⲓϣⲗⲏⲗ ⲛ̀ⲧⲉ ⲡⲓⲛⲁϩϯ', 'ⲛⲓⲥⲁϫⲓ ⲙ̀ⲡⲓϣⲗⲏⲗ ⲛ̀ⲧⲉ ⲡⲓⲛⲁϩϯ', 'ⲛⲓⲥⲁϫⲓ ⲛ̀ⲧⲉ ⲡⲓⲛⲁϩϯ ⲙ̀ⲡⲓϣⲗⲏⲗ', 'ⲛⲓⲥⲁϫⲓ ⲛ̀ⲧⲉ ϣⲗⲏⲗ ⲟⲩⲟϩ ⲛⲁϩϯ'],
          explanation: 'Three-way genitive: ⲛⲓⲥⲁϫⲓ = words + ⲛ̀ⲧⲉ = of + ⲡⲓϣⲗⲏⲗ = prayer + ⲛ̀ⲧⲉ = of + ⲡⲓⲛⲁϩϯ = faith'
        },
        {
          id: 'test-21-22',
          type: 'sentence_building',
          question: 'Build: "The church of the disciples of Christ"',
          correctAnswer: 'ϯⲉⲕⲕⲗⲏⲥⲓⲁ ⲛ̀ⲧⲉ ⲛⲓⲙⲁⲑⲏⲧⲏⲥ ⲛ̀ⲧⲉ Ⲡⲭ̅ⲥ̅',
          wordBank: ['ϯⲉⲕⲕⲗⲏⲥⲓⲁ', 'ⲛ̀ⲧⲉ', 'ⲛⲓⲙⲁⲑⲏⲧⲏⲥ', 'Ⲡⲭ̅ⲥ̅'],
          explanation: 'ϯⲉⲕⲕⲗⲏⲥⲓⲁ = church + ⲛ̀ⲧⲉ = of + ⲛⲓⲙⲁⲑⲏⲧⲏⲥ = disciples + ⲛ̀ⲧⲉ = of + Ⲡⲭ̅ⲥ̅ = Christ'
        },
        {
          id: 'test-21-23',
          type: 'fill_blank',
          question: 'Complete: ⲡⲓⲛⲁϩϯ ⲛ̀ⲧⲉ ⲛⲉⲛⲓⲟϯ ___ ⲟⲩⲁⲃ = The faith of our holy fathers',
          correctAnswer: 'ⲉⲧⲟⲩⲁⲃ',
          options: ['ⲉⲧⲟⲩⲁⲃ', 'ⲛ̀ⲟⲩⲁⲃ', 'ⲟⲩⲁⲃ', 'ⲙ̀ⲟⲩⲁⲃ'],
          explanation: 'ⲡⲓⲛⲁϩϯ ⲛ̀ⲧⲉ ⲛⲉⲛⲓⲟϯ = faith of our fathers + ⲉⲧⲟⲩⲁⲃ = who are holy (relative clause)'
        },
        {
          id: 'test-21-24',
          type: 'translation',
          question: 'Translate: ⲡ̀ⲱⲟⲩ ⲛ̀ⲧⲉ ϯⲙⲉⲧⲟⲩⲣⲟ ⲛ̀ⲧⲉ ⲫϯ',
          questionCoptic: 'ⲡ̀ⲱⲟⲩ ⲛ̀ⲧⲉ ϯⲙⲉⲧⲟⲩⲣⲟ ⲛ̀ⲧⲉ ⲫϯ',
          correctAnswer: 'The glory of the kingdom of God',
          options: ['The glory of the kingdom of God', 'The glorious kingdom of God', 'God\'s glorious kingdom', 'The kingdom of God\'s glory'],
          explanation: 'ⲡ̀ⲱⲟⲩ = glory + ⲛ̀ⲧⲉ = of + ϯⲙⲉⲧⲟⲩⲣⲟ = kingdom + ⲛ̀ⲧⲉ = of + ⲫϯ = God (Bohairic ⲫϯ not ⲫⲛⲟⲩϯ!)'
        },
        {
          id: 'test-21-25',
          type: 'matching',
          question: 'Match complex genitive phrases',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲡⲓϫⲱⲙ ⲛ̀ⲧⲉ ⲡⲓⲱⲛϧ', english: 'the book of life' },
            { coptic: 'ⲡ̀ⲣⲁⲛ ⲛ̀ⲧⲉ ⲡⲉϥⲓⲱⲧ', english: 'his father\'s name' },
            { coptic: 'ⲧ̀ⲁⲅⲁⲡⲏ ⲛ̀ⲧⲉ ⲫϯ ⲡⲉⲛⲓⲱⲧ', english: 'the love of God our Father' },
            { coptic: 'ⲛⲓⲥⲁϫⲓ ⲛ̀ⲧⲉ ⲡⲓⲱⲛϧ ⲛ̀ⲁⲓⲱⲛⲓⲟⲛ', english: 'the words of eternal life' }
          ]
        },
        {
          id: 'test-21-26',
          type: 'translation',
          question: 'Translate: ⲡⲓⲥⲟⲛ ⲛ̀ⲧⲉ ⲫϯ ⲉⲧⲁϥⲙⲟⲩ',
          questionCoptic: 'ⲡⲓⲥⲟⲛ ⲛ̀ⲧⲉ ⲫϯ ⲉⲧⲁϥⲙⲟⲩ',
          correctAnswer: 'The Son of God who died',
          options: ['The Son of God who died', 'God\'s son who died', 'The son who died for God', 'The dead son of God'],
          explanation: 'ⲡⲓⲥⲟⲛ ⲛ̀ⲧⲉ ⲫϯ = the Son of God + ⲉⲧⲁϥⲙⲟⲩ = who died (genitive + past relative)'
        },
        {
          id: 'test-21-27',
          type: 'multiple_choice',
          question: 'Which is correct: "The house of the brother of my father"?',
          correctAnswer: 'ⲡⲓⲏⲓ ⲛ̀ⲧⲉ ⲡⲓⲥⲟⲛ ⲛ̀ⲧⲉ ⲡⲁⲓⲱⲧ',
          options: ['ⲡⲓⲏⲓ ⲛ̀ⲧⲉ ⲡⲓⲥⲟⲛ ⲛ̀ⲧⲉ ⲡⲁⲓⲱⲧ', 'ⲡⲓⲏⲓ ⲙ̀ⲡⲓⲥⲟⲛ ⲙ̀ⲡⲁⲓⲱⲧ', 'ⲡⲁⲓⲱⲧ ⲛ̀ⲧⲉ ⲡⲓⲥⲟⲛ ⲛ̀ⲧⲉ ⲡⲓⲏⲓ', 'ⲡⲓⲏⲓ ⲛ̀ⲧⲉ ⲡⲁⲓⲱⲧ ⲙ̀ⲡⲓⲥⲟⲛ'],
          explanation: 'Correct order: ⲡⲓⲏⲓ = house + ⲛ̀ⲧⲉ = of + ⲡⲓⲥⲟⲛ = brother + ⲛ̀ⲧⲉ = of + ⲡⲁⲓⲱⲧ = my father'
        },
        {
          id: 'test-21-28',
          type: 'translation',
          question: 'Translate: ϯⲙⲉⲧⲟⲩⲣⲟ ⲛ̀ⲧⲉ ⲛⲓⲫⲏⲟⲩⲓ ⲉⲧⲟⲓ ⲛ̀ⲛⲟⲩⲃ',
          questionCoptic: 'ϯⲙⲉⲧⲟⲩⲣⲟ ⲛ̀ⲧⲉ ⲛⲓⲫⲏⲟⲩⲓ ⲉⲧⲟⲓ ⲛ̀ⲛⲟⲩⲃ',
          correctAnswer: 'The kingdom of the heavens that is golden',
          options: ['The kingdom of the heavens that is golden', 'The golden kingdom of heaven', 'The heavenly golden kingdom', 'The kingdom of gold in heaven'],
          explanation: 'ϯⲙⲉⲧⲟⲩⲣⲟ ⲛ̀ⲧⲉ ⲛⲓⲫⲏⲟⲩⲓ = kingdom of the heavens + ⲉⲧⲟⲓ ⲛ̀ⲛⲟⲩⲃ = that is of gold/golden'
        }
      ]
    }
  ]
};

export default unit21Test;
