import { Unit } from '../../types';

// UNIT 21: ADVANCED GENITIVE WITH ⲛⲧⲉ
// Verified for Bohairic dialect consistency
// Advanced possessive constructions beyond basic Unit 13

const unit21: Unit = {
  id: 'unit-21',
  title: 'Advanced Genitive (ⲛⲧⲉ)',
  description: 'Complex possessive and genitive constructions',
  order: 21,
  color: '#FFB800',
  lessons: [
    {
      id: 'lesson-21-1',
      unitId: 'unit-21',
      title: 'Multiple Genitives',
      description: 'Chaining possessive relationships',
      order: 1,
      xpReward: 30,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-21-1-1',
          type: 'translation',
          question: 'Translate: ⲡⲓⲏⲓ ⲛ̀ⲧⲉ ⲫⲓⲱⲧ ⲙ̀ⲡⲓⲣⲱⲙⲓ',
          questionCoptic: 'ⲡⲓⲏⲓ ⲛ̀ⲧⲉ ⲫⲓⲱⲧ ⲙ̀ⲡⲓⲣⲱⲙⲓ',
          correctAnswer: 'The house of the father of the man',
          options: ['The house of the father of the man', 'The man\'s father\'s house', 'The house and the man\'s father', 'The father has a house'],
          explanation: 'Multiple ⲛ̀ⲧⲉ construction: ⲡⲓⲏⲓ ⲛ̀ⲧⲉ (the house of) + ⲫⲓⲱⲧ ⲙ̀ⲡⲓⲣⲱⲙⲓ (the father of the man)'
        },
        {
          id: 'ex-21-1-2',
          type: 'multiple_choice',
          question: 'How do you chain multiple genitives?',
          correctAnswer: 'Stack ⲛ̀ⲧⲉ constructions (possessor becomes new possessed)',
          options: ['Stack ⲛ̀ⲧⲉ constructions (possessor becomes new possessed)', 'Use ⲟⲩⲟϩ to connect them', 'Use only one ⲛ̀ⲧⲉ for all', 'Reverse the word order'],
          explanation: 'Multiple genitives chain: [A] ⲛ̀ⲧⲉ [B] ⲛ̀ⲧⲉ/ⲙ̀ [C] = A of B of C'
        },
        {
          id: 'ex-21-1-3',
          type: 'matching',
          question: 'Match complex genitives',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲡⲓϫⲱⲙ ⲙ̀ⲡⲓⲙⲁⲑⲏⲧⲏⲥ', english: 'the book of the disciple' },
            { coptic: 'ⲡⲓϫⲱⲙ ⲙ̀ⲡⲓⲙⲁⲑⲏⲧⲏⲥ ⲙ̀ⲡ̀ⲥⲁϧ', english: 'the book of the disciple of the teacher' },
            { coptic: 'ⲡⲓⲏⲓ ⲛ̀ⲧⲉ ⲧ̀ⲥⲱⲛⲓ ⲙ̀ⲡⲓⲣⲱⲙⲓ', english: 'the house of the sister of the man' },
            { coptic: 'ⲡⲓⲣⲁⲛ ⲙ̀ⲫⲓⲱⲧ ⲙ̀ⲡⲉⲛ̀ϭⲟⲓⲥ', english: 'the name of the father of our Lord' }
          ]
        },
        {
          id: 'ex-21-1-4',
          type: 'translation',
          question: 'Translate: ⲡⲓⲟⲩⲱⲓⲛⲓ ⲙ̀ⲡⲓⲕⲟⲥⲙⲟⲥ ⲙ̀ⲫϯ',
          questionCoptic: 'ⲡⲓⲟⲩⲱⲓⲛⲓ ⲙ̀ⲡⲓⲕⲟⲥⲙⲟⲥ ⲙ̀ⲫϯ',
          correctAnswer: 'The light of the world of God',
          options: ['The light of the world of God', 'God\'s light in the world', 'The light and the world of God', 'The worldly light of God'],
          explanation: 'ⲡⲓⲟⲩⲱⲓⲛⲓ = the light + ⲙ̀ⲡⲓⲕⲟⲥⲙⲟⲥ = of the world + ⲙ̀ⲫϯ = of God (Bohairic ⲫϯ not ⲫⲛⲟⲩϯ!)'
        },
        {
          id: 'ex-21-1-5',
          type: 'sentence_building',
          question: 'Build: "The word of the mouth of God"',
          correctAnswer: 'ⲡⲓⲥⲁϫⲓ ⲛ̀ⲧⲉ ⲣⲱϥ ⲙ̀ⲫϯ',
          wordBank: ['ⲡⲓⲥⲁϫⲓ', 'ⲛ̀ⲧⲉ', 'ⲣⲱϥ', 'ⲙ̀ⲫϯ'],
          explanation: 'ⲡⲓⲥⲁϫⲓ ⲛ̀ⲧⲉ ⲣⲱϥ ⲙ̀ⲫϯ = the word of (the) mouth of God (Bohairic ⲫϯ not ⲫⲛⲟⲩϯ!)'
        },
        {
          id: 'ex-21-1-6',
          type: 'fill_blank',
          question: 'Complete: ⲛⲓⲥⲁϫⲓ ___ ⲡⲓϫⲱⲙ ⲛ̀ⲧⲉ ⲡⲓⲱⲛϧ = The words of the book of life',
          correctAnswer: 'ⲛ̀ⲧⲉ',
          options: ['ⲛ̀ⲧⲉ', 'ⲙ̀', 'ⲛⲁ', 'ⲉ̀'],
          explanation: 'ⲛⲓⲥⲁϫⲓ ⲛ̀ⲧⲉ ⲡⲓϫⲱⲙ ⲛ̀ⲧⲉ ⲡⲓⲱⲛϧ = the words of the book of life (double genitive)'
        },
        {
          id: 'ex-21-1-7',
          type: 'translation',
          question: 'Translate: ϯⲙⲉⲧⲟⲩⲣⲟ ⲛ̀ⲧⲉ ⲧ̀ⲫⲉ ⲙ̀ⲫϯ',
          questionCoptic: 'ϯⲙⲉⲧⲟⲩⲣⲟ ⲛ̀ⲧⲉ ⲧ̀ⲫⲉ ⲙ̀ⲫϯ',
          correctAnswer: 'The kingdom of the heaven of God',
          options: ['The kingdom of the heaven of God', 'God\'s heavenly kingdom', 'The kingdom and heaven of God', 'The heavenly kingdom'],
          explanation: 'ϯⲙⲉⲧⲟⲩⲣⲟ = the kingdom + ⲛ̀ⲧⲉ ⲧ̀ⲫⲉ = of heaven + ⲙ̀ⲫϯ = of God (Bohairic ⲫϯ not ⲫⲛⲟⲩϯ!)'
        },
        {
          id: 'ex-21-1-8',
          type: 'multiple_choice',
          question: 'How many genitives can theoretically be chained?',
          correctAnswer: 'Unlimited, but usually 2-3 for clarity',
          options: ['Unlimited, but usually 2-3 for clarity', 'Maximum of 2', 'Maximum of 3', 'Only 1 is allowed'],
          explanation: 'While grammatically unlimited, Coptic typically uses 2-3 chained genitives for readability'
        }
      ]
    },
    {
      id: 'lesson-21-2',
      unitId: 'unit-21',
      title: 'Genitive with Pronouns',
      description: 'Possessive with pronominal possessors',
      order: 2,
      xpReward: 30,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-21-2-1',
          type: 'translation',
          question: 'Translate: ⲡⲓϫⲱⲙ ⲛ̀ⲧⲉ ⲫⲁⲓ',
          questionCoptic: 'ⲡⲓϫⲱⲙ ⲛ̀ⲧⲉ ⲫⲁⲓ',
          correctAnswer: 'The book of this one',
          options: ['The book of this one', 'This book', 'The book is this', 'This is the book'],
          explanation: 'ⲡⲓϫⲱⲙ ⲛ̀ⲧⲉ ⲫⲁⲓ = the book of this (one) - genitive with demonstrative pronoun'
        },
        {
          id: 'ex-21-2-2',
          type: 'multiple_choice',
          question: 'Can ⲛ̀ⲧⲉ take demonstrative pronouns as possessors?',
          correctAnswer: 'Yes (ⲛ̀ⲧⲉ ⲫⲁⲓ, ⲛ̀ⲧⲉ ⲫⲏ, etc.)',
          options: ['Yes (ⲛ̀ⲧⲉ ⲫⲁⲓ, ⲛ̀ⲧⲉ ⲫⲏ, etc.)', 'No, only nouns', 'Only in past tense', 'Only with plural'],
          explanation: 'ⲛ̀ⲧⲉ works with demonstrative pronouns: ⲫⲁⲓ (this), ⲫⲏ (that), ⲛⲁⲓ (these), ⲛⲏ (those)'
        },
        {
          id: 'ex-21-2-3',
          type: 'matching',
          question: 'Match genitive with pronouns',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲡⲓⲏⲓ ⲛ̀ⲧⲉ ⲫⲁⲓ', english: 'the house of this one' },
            { coptic: 'ⲡⲓⲏⲓ ⲛ̀ⲧⲉ ⲫⲏ', english: 'the house of that one' },
            { coptic: 'ⲛⲓϩⲓⲙⲓ ⲛ̀ⲧⲉ ⲛⲁⲓ', english: 'the women of these' },
            { coptic: 'ⲛⲓϫⲱⲙ ⲛ̀ⲧⲉ ⲛⲏ', english: 'the books of those' }
          ]
        },
        {
          id: 'ex-21-2-4',
          type: 'translation',
          question: 'Translate: ⲛⲓⲥⲁϫⲓ ⲛ̀ⲧⲉ ⲛⲁⲓ ⲛⲁⲛⲉⲩ',
          questionCoptic: 'ⲛⲓⲥⲁϫⲓ ⲛ̀ⲧⲉ ⲛⲁⲓ ⲛⲁⲛⲉⲩ',
          correctAnswer: 'The words of these are good',
          options: ['The words of these are good', 'These words are good', 'These good words', 'The words are these good ones'],
          explanation: 'ⲛⲓⲥⲁϫⲓ ⲛ̀ⲧⲉ ⲛⲁⲓ = the words of these + ⲛⲁⲛⲉⲩ = are good'
        },
        {
          id: 'ex-21-2-5',
          type: 'sentence_building',
          question: 'Build: "The faith of those is strong"',
          correctAnswer: 'ⲡⲓⲛⲁϩϯ ⲛ̀ⲧⲉ ⲛⲏ ⲟⲓ ⲛ̀ϫⲱⲣⲓ',
          wordBank: ['ⲡⲓⲛⲁϩϯ', 'ⲛ̀ⲧⲉ', 'ⲛⲏ', 'ⲟⲓ', 'ⲛ̀ϫⲱⲣⲓ'],
          explanation: 'ⲡⲓⲛⲁϩϯ ⲛ̀ⲧⲉ ⲛⲏ = the faith of those + ⲟⲓ ⲛ̀ϫⲱⲣⲓ = is strong'
        },
        {
          id: 'ex-21-2-6',
          type: 'fill_blank',
          question: 'Complete: ϯⲙⲉⲧⲟⲩⲣⲟ ___ ⲫⲁⲓ = The kingdom of this one',
          correctAnswer: 'ⲛ̀ⲧⲉ',
          options: ['ⲛ̀ⲧⲉ', 'ⲙ̀', 'ⲛⲁ', 'ⲧⲁ'],
          explanation: 'ϯⲙⲉⲧⲟⲩⲣⲟ ⲛ̀ⲧⲉ ⲫⲁⲓ = the kingdom of this (one)'
        },
        {
          id: 'ex-21-2-7',
          type: 'translation',
          question: 'Translate: ⲡⲓⲱⲛϧ ⲛ̀ⲧⲉ ⲛⲏⲉⲧⲛⲁϩϯ',
          questionCoptic: 'ⲡⲓⲱⲛϧ ⲛ̀ⲧⲉ ⲛⲏⲉⲧⲛⲁϩϯ',
          correctAnswer: 'The life of those who believe',
          options: ['The life of those who believe', 'The believers\' life', 'Those who believe in life', 'The living believers'],
          explanation: 'ⲡⲓⲱⲛϧ ⲛ̀ⲧⲉ ⲛⲏⲉⲧⲛⲁϩϯ = the life of those who believe (genitive + relative clause)'
        },
        {
          id: 'ex-21-2-8',
          type: 'multiple_choice',
          question: 'How do you say "the house of whoever comes"?',
          correctAnswer: 'ⲡⲓⲏⲓ ⲛ̀ⲧⲉ ⲫⲏⲉⲑⲛⲁⲓ̀',
          options: ['ⲡⲓⲏⲓ ⲛ̀ⲧⲉ ⲫⲏⲉⲑⲛⲁⲓ̀', 'ⲡⲓⲏⲓ ⲫⲏⲉⲑⲛⲁⲓ̀', 'ⲡⲓⲏⲓ ⲙ̀ⲫⲏⲉⲑⲛⲁⲓ̀', 'ⲡⲓⲏⲓ ⲉⲑⲛⲁⲓ̀'],
          explanation: 'ⲡⲓⲏⲓ ⲛ̀ⲧⲉ ⲫⲏⲉⲑⲛⲁⲓ̀ = the house of the one who will come (Bohairic ⲓ̀ not ⲉⲓ!)'
        }
      ]
    },
    {
      id: 'lesson-21-3',
      unitId: 'unit-21',
      title: 'Abstract & Verbal Genitives',
      description: 'Genitive with abstract nouns and infinitives',
      order: 3,
      xpReward: 30,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-21-3-1',
          type: 'translation',
          question: 'Translate: ⲡⲓⲉⲣⲙⲉⲛⲣⲉ ⲙ̀ⲫϯ',
          questionCoptic: 'ⲡⲓⲉⲣⲙⲉⲛⲣⲉ ⲙ̀ⲫϯ',
          correctAnswer: 'The act of loving God / God\'s love (as action)',
          options: ['The act of loving God / God\'s love (as action)', 'God loves', 'To love God', 'God is love'],
          explanation: 'ⲡⲓⲉⲣⲙⲉⲛⲣⲉ = the loving (verbal noun) + ⲙ̀ⲫϯ = of God (Bohairic: ⲫϯ not ⲫⲛⲟⲩϯ, ⲙⲉⲛⲣⲉ not ⲙⲉⲣⲓ!)'
        },
        {
          id: 'ex-21-3-2',
          type: 'multiple_choice',
          question: 'What is a verbal genitive?',
          correctAnswer: 'Genitive where the possessed is a verbal noun/infinitive',
          options: ['Genitive where the possessed is a verbal noun/infinitive', 'Genitive with verbs only', 'Genitive without ⲛ̀ⲧⲉ', 'Genitive in past tense'],
          explanation: 'Verbal genitives use infinitives/verbal nouns as the possessed: "the [action] of [agent/object]"'
        },
        {
          id: 'ex-21-3-3',
          type: 'matching',
          question: 'Match verbal genitives',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲡⲓⲓ̀ ⲙ̀ⲡⲉⲛ̀ϭⲟⲓⲥ', english: 'the coming of our Lord' },
            { coptic: 'ⲡⲓⲙⲟⲩ ⲙ̀ⲡⲓⲣⲱⲙⲓ', english: 'the death of the man' },
            { coptic: 'ⲡⲓⲱⲛϧ ⲙ̀ⲡⲓⲥⲱⲙⲁ', english: 'the life/living of the body' },
            { coptic: 'ⲡⲓⲥⲱⲧⲉⲙ ⲙ̀ⲡⲓⲥⲁϫⲓ', english: 'the hearing of the word' }
          ]
        },
        {
          id: 'ex-21-3-4',
          type: 'translation',
          question: 'Translate: ⲡⲓⲉⲣⲛⲁϩϯ ϩⲱϥ ⲡⲉ ⲡⲓⲟⲩϫⲁⲓ',
          questionCoptic: 'ⲡⲓⲉⲣⲛⲁϩϯ ϩⲱϥ ⲡⲉ ⲡⲓⲟⲩϫⲁⲓ',
          correctAnswer: 'Believing itself is salvation',
          options: ['Believing itself is salvation', 'Faith is salvation', 'To believe is to be saved', 'Salvation comes from faith'],
          explanation: 'ⲡⲓⲉⲣⲛⲁϩϯ = the believing (verbal noun) + ϩⲱϥ ⲡⲉ = itself is + ⲡⲓⲟⲩϫⲁⲓ = salvation'
        },
        {
          id: 'ex-21-3-5',
          type: 'sentence_building',
          question: 'Build: "The writing of books is difficult"',
          correctAnswer: 'ⲡⲓⲥ̀ϧⲁⲓ ⲛ̀ⲛⲓϫⲱⲙ ⲙⲟⲕϩ',
          wordBank: ['ⲡⲓⲥ̀ϧⲁⲓ', 'ⲛ̀ⲛⲓϫⲱⲙ', 'ⲙⲟⲕϩ', 'ⲛ̀ⲧⲉ'],
          explanation: 'ⲡⲓⲥ̀ϧⲁⲓ = the writing + ⲛ̀ⲛⲓϫⲱⲙ = of the books + ⲙⲟⲕϩ = (is) difficult (Bohairic ⲥ̀ϧⲁⲓ not ⲥϩⲁⲓ!)'
        },
        {
          id: 'ex-21-3-6',
          type: 'fill_blank',
          question: 'Complete: ⲡⲓϣⲉⲛⲓ ___ ϯⲉⲕⲕⲗⲏⲥⲓⲁ = The going to church',
          correctAnswer: 'ⲉ̀',
          options: ['ⲉ̀', 'ⲛ̀ⲧⲉ', 'ⲙ̀', 'ϧⲉⲛ'],
          explanation: 'ⲡⲓϣⲉⲛⲓ ⲉ̀ϯⲉⲕⲕⲗⲏⲥⲓⲁ = the going to the church (verbal noun + prepositional phrase) (Bohairic ϣⲉⲛⲓ not ⲃⲱⲕ!)'
        },
        {
          id: 'ex-21-3-7',
          type: 'translation',
          question: 'Translate: ⲡⲓⲉⲣⲡ̀ⲙⲉⲩⲓ ⲙ̀ⲫϯ',
          questionCoptic: 'ⲡⲓⲉⲣⲡ̀ⲙⲉⲩⲓ ⲙ̀ⲫϯ',
          correctAnswer: 'The remembering of God',
          options: ['The remembering of God', 'God remembers', 'To remember God', 'God\'s memory'],
          explanation: 'ⲡⲓⲉⲣⲡ̀ⲙⲉⲩⲓ = the remembering (verbal noun) + ⲙ̀ⲫϯ = of God (Bohairic ⲫϯ not ⲫⲛⲟⲩϯ!)'
        },
        {
          id: 'ex-21-3-8',
          type: 'multiple_choice',
          question: 'How do you say "the fear of the Lord"?',
          correctAnswer: 'ϯϩⲟϯ ⲙ̀ⲡ̀ϭⲟⲓⲥ',
          options: ['ϯϩⲟϯ ⲙ̀ⲡ̀ϭⲟⲓⲥ', 'ⲡⲓⲉⲣϩⲟϯ ⲙ̀ⲡ̀ϭⲟⲓⲥ', 'ⲡⲓϩⲟϯ ⲛ̀ⲧⲉ ⲡ̀ϭⲟⲓⲥ', 'ϯⲉⲣϩⲟϯ ⲙ̀ⲡ̀ϭⲟⲓⲥ'],
          explanation: 'ϯϩⲟϯ = the fear (abstract noun) + ⲙ̀ⲡ̀ϭⲟⲓⲥ = of the Lord'
        }
      ]
    },
    {
      id: 'lesson-21-4',
      unitId: 'unit-21',
      title: 'Partitive & Qualitative Genitives',
      description: 'Expressing part-whole and quality relationships',
      order: 4,
      xpReward: 30,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-21-4-1',
          type: 'translation',
          question: 'Translate: ⲟⲩⲁⲓ ⲉ̀ⲃⲟⲗ ϧⲉⲛ ⲛⲓⲙⲁⲑⲏⲧⲏⲥ',
          questionCoptic: 'ⲟⲩⲁⲓ ⲉ̀ⲃⲟⲗ ϧⲉⲛ ⲛⲓⲙⲁⲑⲏⲧⲏⲥ',
          correctAnswer: 'One of the disciples',
          options: ['One of the disciples', 'The one disciple', 'A disciple', 'The disciples'],
          explanation: 'ⲟⲩⲁⲓ ⲉ̀ⲃⲟⲗ ϧⲉⲛ = one out of (partitive construction) + ⲛⲓⲙⲁⲑⲏⲧⲏⲥ = the disciples'
        },
        {
          id: 'ex-21-4-2',
          type: 'multiple_choice',
          question: 'What is a partitive genitive?',
          correctAnswer: 'Expressing "one of" or "some of" a group',
          options: ['Expressing "one of" or "some of" a group', 'Expressing quality or material', 'Expressing ownership', 'Expressing location'],
          explanation: 'Partitive genitive shows part-whole relationship: "one/some/many of the [group]"'
        },
        {
          id: 'ex-21-4-3',
          type: 'matching',
          question: 'Match partitive expressions',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲟⲩⲁⲓ ⲉ̀ⲃⲟⲗ ϧⲉⲛ', english: 'one of' },
            { coptic: 'ϩⲁⲛⲟⲩⲟⲛ ⲉ̀ⲃⲟⲗ ϧⲉⲛ', english: 'some of' },
            { coptic: 'ⲟⲩⲙⲏϣ ⲉ̀ⲃⲟⲗ ϧⲉⲛ', english: 'many of' },
            { coptic: 'ⲧⲏⲣⲟⲩ ⲛ̀ⲧⲉ', english: 'all of' }
          ]
        },
        {
          id: 'ex-21-4-4',
          type: 'translation',
          question: 'Translate: ⲟⲩⲙⲏϣ ⲉ̀ⲃⲟⲗ ϧⲉⲛ ⲛⲓⲣⲱⲙⲓ ⲁⲩⲛⲁϩϯ',
          questionCoptic: 'ⲟⲩⲙⲏϣ ⲉ̀ⲃⲟⲗ ϧⲉⲛ ⲛⲓⲣⲱⲙⲓ ⲁⲩⲛⲁϩϯ',
          correctAnswer: 'Many of the people believed',
          options: ['Many of the people believed', 'All the people believed', 'The people believed many things', 'The many believers'],
          explanation: 'ⲟⲩⲙⲏϣ ⲉ̀ⲃⲟⲗ ϧⲉⲛ ⲛⲓⲣⲱⲙⲓ = many of the people + ⲁⲩⲛⲁϩϯ = they believed'
        },
        {
          id: 'ex-21-4-5',
          type: 'sentence_building',
          question: 'Build: "Some of the children went"',
          correctAnswer: 'ϩⲁⲛⲟⲩⲟⲛ ⲉ̀ⲃⲟⲗ ϧⲉⲛ ⲛⲓϣⲏⲣⲓ ⲁⲩϣⲉⲛⲓ',
          wordBank: ['ϩⲁⲛⲟⲩⲟⲛ', 'ⲉ̀ⲃⲟⲗ', 'ϧⲉⲛ', 'ⲛⲓϣⲏⲣⲓ', 'ⲁⲩϣⲉⲛⲓ'],
          explanation: 'ϩⲁⲛⲟⲩⲟⲛ ⲉ̀ⲃⲟⲗ ϧⲉⲛ ⲛⲓϣⲏⲣⲓ = some of the children + ⲁⲩϣⲉⲛⲓ = they went (Bohairic: ϣⲏⲣⲓ not ⲥⲏⲣⲓ, ϣⲉⲛⲓ not ⲃⲱⲕ!)'
        },
        {
          id: 'ex-21-4-6',
          type: 'fill_blank',
          question: 'Complete: ⲟⲩⲁⲓ ___ ⲛⲓⲁⲡⲟⲥⲧⲟⲗⲟⲥ = One of the apostles',
          correctAnswer: 'ⲉ̀ⲃⲟⲗ ϧⲉⲛ',
          options: ['ⲉ̀ⲃⲟⲗ ϧⲉⲛ', 'ⲛ̀ⲧⲉ', 'ⲙ̀', 'ϧⲉⲛ'],
          explanation: 'ⲟⲩⲁⲓ ⲉ̀ⲃⲟⲗ ϧⲉⲛ ⲛⲓⲁⲡⲟⲥⲧⲟⲗⲟⲥ = one out of the apostles (partitive)'
        },
        {
          id: 'ex-21-4-7',
          type: 'translation',
          question: 'Translate: ⲟⲩⲡ̀ⲣⲟⲥⲧⲁⲅⲙⲁ ⲛ̀ⲛⲟⲩⲃ',
          questionCoptic: 'ⲟⲩⲡ̀ⲣⲟⲥⲧⲁⲅⲙⲁ ⲛ̀ⲛⲟⲩⲃ',
          correctAnswer: 'A commandment of gold (golden commandment)',
          options: ['A commandment of gold (golden commandment)', 'A gold command', 'The golden law', 'Gold commands'],
          explanation: 'ⲟⲩⲡ̀ⲣⲟⲥⲧⲁⲅⲙⲁ = a commandment + ⲛ̀ⲛⲟⲩⲃ = of gold (qualitative genitive expressing quality/material)'
        },
        {
          id: 'ex-21-4-8',
          type: 'multiple_choice',
          question: 'How do you say "all of us"?',
          correctAnswer: 'ⲧⲏⲣⲉⲛ or ⲁⲛⲟⲛ ⲧⲏⲣⲉⲛ',
          options: ['ⲧⲏⲣⲉⲛ or ⲁⲛⲟⲛ ⲧⲏⲣⲉⲛ', 'ⲧⲏⲣⲟⲩ ⲛ̀ⲧⲉⲛ', 'ⲟⲩⲙⲏϣ ⲉ̀ⲃⲟⲗ ϧⲉⲛⲟⲛ', 'ⲛⲁⲛ ⲧⲏⲣⲟⲩ'],
          explanation: 'ⲧⲏⲣⲉⲛ (all-us) or ⲁⲛⲟⲛ ⲧⲏⲣⲉⲛ (we all) = all of us (totality partitive)'
        }
      ]
    }
  ]
};

export default unit21;
