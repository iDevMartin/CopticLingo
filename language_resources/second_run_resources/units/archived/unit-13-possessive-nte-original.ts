import { Unit } from '../../types';

// UNIT 13: POSSESSIVE CONSTRUCTION WITH ⲛⲧⲉ "OF"
// Verified for Bohairic dialect consistency
// Based on OUTLINE OF BOHAIRIC COPTIC MORPHOLOGY pages 13-14

const unit13: Unit = {
  id: 'unit-13',
  title: 'Possessive with ⲛⲧⲉ "OF"',
  description: 'Express possession: "the X of Y"',
  order: 13,
  color: '#2B70C9',
  lessons: [
    {
      id: 'lesson-13-1',
      unitId: 'unit-13',
      title: 'Basic ⲛⲧⲉ Construction',
      description: 'Using ⲛⲧⲉ to connect possessed and possessor',
      order: 1,
      xpReward: 25,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-13-1-1',
          type: 'multiple_choice',
          question: 'What does ⲛⲧⲉ mean?',
          correctAnswer: 'of',
          options: ['of', 'to', 'from', 'with'],
          explanation: 'ⲛⲧⲉ is the possessive particle meaning "of"'
        },
        {
          id: 'ex-13-1-2',
          type: 'translation',
          question: 'Translate: ⲡⲓⲣⲁⲛ ⲙⲡⲓⲣⲱⲙⲓ',
          questionCoptic: 'ⲡⲓⲣⲁⲛ ⲙⲡⲓⲣⲱⲙⲓ',
          correctAnswer: 'the name of the man',
          options: ['the name of the man', 'the man\'s name', 'his name', 'the named man'],
          explanation: 'ⲡⲓⲣⲁⲛ ⲙⲡⲓⲣⲱⲙⲓ = the name of the man (ⲙ before ⲡⲓ = ⲛ̀ⲧⲉ)'
        },
        {
          id: 'ex-13-1-3',
          type: 'sentence_building',
          question: 'Build: "The house of God"',
          correctAnswer: 'ⲡⲓⲏⲓ ⲛ̀ⲧⲉⲫϯ',
          wordBank: ['ⲡⲓⲏⲓ', 'ⲛ̀ⲧⲉ', 'ⲫϯ', 'ⲙ'],
          explanation: 'ⲡⲓⲏⲓ ⲛ̀ⲧⲉⲫϯ = the house of God (Bohairic ⲫϯ not ⲫⲛⲟⲩϯ!)'
        },
        {
          id: 'ex-13-1-4',
          type: 'multiple_choice',
          question: 'What does ⲡⲓϫⲱⲙ ⲛ̀ⲧⲉϯϩⲓⲙⲓ mean?',
          questionCoptic: 'ⲡⲓϫⲱⲙ ⲛ̀ⲧⲉϯϩⲓⲙⲓ',
          correctAnswer: 'the book of the woman',
          options: ['the book of the woman', 'the woman\'s book', 'her book', 'the woman reads'],
          explanation: 'ⲡⲓϫⲱⲙ ⲛ̀ⲧⲉϯϩⲓⲙⲓ = the book of the woman (Bohairic ϩⲓⲙⲓ not ⲥϩⲓⲙⲉ!)'
        },
        {
          id: 'ex-13-1-5',
          type: 'translation',
          question: 'Translate: ϯⲉⲕⲕⲗⲏⲥⲓⲁ ⲙⲫϯ',
          questionCoptic: 'ϯⲉⲕⲕⲗⲏⲥⲓⲁ ⲙⲫϯ',
          correctAnswer: 'the church of God',
          options: ['the church of God', 'God\'s church', 'the church', 'in church'],
          explanation: 'ϯⲉⲕⲕⲗⲏⲥⲓⲁ ⲙⲫϯ = the church of God (ⲙ before ⲫ = ⲛ̀ⲧⲉ)'
        },
        {
          id: 'ex-13-1-6',
          type: 'fill_blank',
          question: 'Complete: ⲡⲓⲣⲁⲛ ___ ⲡⲁⲓⲱⲧ = the name of my father',
          correctAnswer: 'ⲛ̀ⲧⲉ',
          options: ['ⲛ̀ⲧⲉ', 'ⲙ', 'ⲉ', 'ⲛ'],
          explanation: 'ⲛ̀ⲧⲉ is the possessive particle "of"'
        },
        {
          id: 'ex-13-1-7',
          type: 'matching',
          question: 'Match possessive phrases',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲡⲓⲏⲓ ⲙⲡⲓⲣⲱⲙⲓ', english: 'the house of the man' },
            { coptic: 'ϯϣⲉⲣⲓ ⲛ̀ⲧⲉϯϩⲓⲙⲓ', english: 'the daughter of the woman' },
            { coptic: 'ⲡⲓⲣⲁⲛ ⲙⲫϯ', english: 'the name of God' },
            { coptic: 'ⲡⲓϣⲏⲣⲓ ⲙⲡⲓⲣⲱⲙⲓ', english: 'the son of the man' }
          ]
        },
        {
          id: 'ex-13-1-8',
          type: 'sentence_building',
          question: 'Build: "The voice of the Lord"',
          correctAnswer: 'ϯⲥⲙⲏ ⲙⲡ̀ϭⲟⲓⲥ',
          wordBank: ['ϯⲥⲙⲏ', 'ⲙ', 'ⲡ̀ϭⲟⲓⲥ', 'ⲛ̀ⲧⲉ'],
          explanation: 'ϯⲥⲙⲏ ⲙⲡ̀ϭⲟⲓⲥ = the voice of the Lord (ⲙ before ⲡ̀ = ⲛ̀ⲧⲉ)'
        }
      ]
    },
    {
      id: 'lesson-13-2',
      unitId: 'unit-13',
      title: 'ⲛⲧⲉ with Pronouns',
      description: 'Possessive construction with pronominal suffixes',
      order: 2,
      xpReward: 25,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-13-2-1',
          type: 'matching',
          question: 'Match ⲛⲧⲉ + pronoun forms',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲛ̀ⲧⲏⲓ', english: 'of me / mine' },
            { coptic: 'ⲛ̀ⲧⲁⲕ', english: 'of you (m) / yours' },
            { coptic: 'ⲛ̀ⲧⲉ', english: 'of you (f) / yours' },
            { coptic: 'ⲛ̀ⲧⲁϥ', english: 'of him / his' }
          ]
        },
        {
          id: 'ex-13-2-2',
          type: 'translation',
          question: 'Translate: ⲡⲓϫⲱⲙ ⲛ̀ⲧⲏⲓ',
          questionCoptic: 'ⲡⲓϫⲱⲙ ⲛ̀ⲧⲏⲓ',
          correctAnswer: 'the book of me / my book',
          options: ['the book of me / my book', 'my books', 'the book', 'I have a book'],
          explanation: 'ⲡⲓϫⲱⲙ ⲛ̀ⲧⲏⲓ = the book of me = "my book"'
        },
        {
          id: 'ex-13-2-3',
          type: 'sentence_building',
          question: 'Build: "The house of us / our house"',
          correctAnswer: 'ⲡⲓⲏⲓ ⲛ̀ⲧⲉⲛ',
          wordBank: ['ⲡⲓⲏⲓ', 'ⲛ̀ⲧⲉⲛ', 'ⲛ̀ⲧⲏⲓ', 'ⲛ̀ⲧⲁϥ'],
          explanation: 'ⲡⲓⲏⲓ ⲛ̀ⲧⲉⲛ = the house of us = "our house"'
        },
        {
          id: 'ex-13-2-4',
          type: 'multiple_choice',
          question: 'What does ⲡⲓⲣⲁⲛ ⲛ̀ⲧⲁⲥ mean?',
          questionCoptic: 'ⲡⲓⲣⲁⲛ ⲛ̀ⲧⲁⲥ',
          correctAnswer: 'her name',
          options: ['her name', 'his name', 'their name', 'your name'],
          explanation: 'ⲡⲓⲣⲁⲛ ⲛ̀ⲧⲁⲥ = the name of her = "her name"'
        },
        {
          id: 'ex-13-2-5',
          type: 'translation',
          question: 'Translate: ⲛⲓϣⲏⲣⲓ ⲛ̀ⲧⲱⲟⲩ',
          questionCoptic: 'ⲛⲓϣⲏⲣⲓ ⲛ̀ⲧⲱⲟⲩ',
          correctAnswer: 'their children',
          options: ['their children', 'the children', 'our children', 'your children'],
          explanation: 'ⲛⲓϣⲏⲣⲓ ⲛ̀ⲧⲱⲟⲩ = the children of them = "their children" (Bohairic ϣⲏⲣⲓ not ⲥⲏⲣⲓ!)'
        },
        {
          id: 'ex-13-2-6',
          type: 'fill_blank',
          question: 'Complete: ϯⲉⲕⲕⲗⲏⲥⲓⲁ ___ = your (m) church',
          correctAnswer: 'ⲛ̀ⲧⲁⲕ',
          options: ['ⲛ̀ⲧⲁⲕ', 'ⲛ̀ⲧⲉ', 'ⲛ̀ⲧⲏⲓ', 'ⲛ̀ⲧⲁϥ'],
          explanation: 'ⲛ̀ⲧⲁⲕ = of you (masculine)'
        },
        {
          id: 'ex-13-2-7',
          type: 'matching',
          question: 'Match plural possessive forms',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲛ̀ⲧⲉⲛ', english: 'of us / our' },
            { coptic: 'ⲛ̀ⲧⲱⲧⲉⲛ', english: 'of you (pl) / your' },
            { coptic: 'ⲛ̀ⲧⲱⲟⲩ', english: 'of them / their' }
          ]
        },
        {
          id: 'ex-13-2-8',
          type: 'sentence_building',
          question: 'Build: "The love of God for us"',
          correctAnswer: 'ⲡⲓⲙⲉⲛⲣⲓⲧ ⲙⲫϯ ⲛ̀ⲧⲉⲛ',
          wordBank: ['ⲡⲓⲙⲉⲛⲣⲓⲧ', 'ⲙⲫϯ', 'ⲛ̀ⲧⲉⲛ', 'ⲛ̀ⲧⲁϥ'],
          explanation: 'ⲡⲓⲙⲉⲛⲣⲓⲧ ⲙⲫϯ ⲛ̀ⲧⲉⲛ = the love of God for us (ⲙⲉⲛⲣⲓⲧ = noun form of love)'
        }
      ]
    },
    {
      id: 'lesson-13-3',
      unitId: 'unit-13',
      title: 'Complex Possessive Phrases',
      description: 'Multiple layers of possession',
      order: 3,
      xpReward: 25,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-13-3-1',
          type: 'translation',
          question: 'Translate: ⲡⲓⲣⲁⲛ ⲙⲡⲓⲓⲱⲧ ⲙⲡⲓⲁⲗⲟⲩ',
          questionCoptic: 'ⲡⲓⲣⲁⲛ ⲙⲡⲓⲓⲱⲧ ⲙⲡⲓⲁⲗⲟⲩ',
          correctAnswer: 'the name of the father of the boy',
          options: ['the name of the father of the boy', 'the boy\'s father\'s name', 'father and son', 'the named father'],
          explanation: 'ⲡⲓⲣⲁⲛ ⲙⲡⲓⲓⲱⲧ ⲙⲡⲓⲁⲗⲟⲩ = the name of the father of the boy (double possessive)'
        },
        {
          id: 'ex-13-3-2',
          type: 'sentence_building',
          question: 'Build: "The son of the son of David"',
          correctAnswer: 'ⲡⲓϣⲏⲣⲓ ⲙⲡⲓϣⲏⲣⲓ ⲛ̀Ⲇⲁⲩⲓⲇ',
          wordBank: ['ⲡⲓϣⲏⲣⲓ', 'ⲙ', 'ⲡⲓϣⲏⲣⲓ', 'ⲛ̀Ⲇⲁⲩⲓⲇ'],
          explanation: 'ⲡⲓϣⲏⲣⲓ ⲙⲡⲓϣⲏⲣⲓ ⲛ̀Ⲇⲁⲩⲓⲇ = the son of the son of David (Bohairic ϣⲏⲣⲓ not ⲥⲏⲣⲓ!)'
        },
        {
          id: 'ex-13-3-3',
          type: 'multiple_choice',
          question: 'What does ⲡⲓⲏⲓ ⲙⲫϯ ⲛ̀ⲧⲉⲛ mean?',
          questionCoptic: 'ⲡⲓⲏⲓ ⲙⲫϯ ⲛ̀ⲧⲉⲛ',
          correctAnswer: 'the house of God of us / our church',
          options: ['the house of God of us / our church', 'God\'s house', 'our house', 'the church'],
          explanation: 'ⲡⲓⲏⲓ ⲙⲫϯ ⲛ̀ⲧⲉⲛ = the house of God that is ours = "our church"'
        },
        {
          id: 'ex-13-3-4',
          type: 'translation',
          question: 'Translate: ⲡⲓⲙⲉⲛⲣⲓⲧ ⲙⲫϯ',
          questionCoptic: 'ⲡⲓⲙⲉⲛⲣⲓⲧ ⲙⲫϯ',
          correctAnswer: 'the love of God',
          options: ['the love of God', 'God loves', 'loving God', 'God\'s beloved'],
          explanation: 'ⲡⲓⲙⲉⲛⲣⲓⲧ ⲙⲫϯ = the love of God (ⲙⲉⲛⲣⲓⲧ is noun "love" from verb ⲙⲉⲛⲣⲉ)'
        },
        {
          id: 'ex-13-3-5',
          type: 'fill_blank',
          question: 'Complete: ⲛⲓⲁⲡⲟⲥⲧⲟⲗⲟⲥ ___ ⲡⲉⲛ⳪ = the apostles of our Lord',
          correctAnswer: 'ⲛ̀ⲧⲉ',
          options: ['ⲛ̀ⲧⲉ', 'ⲙ', 'ⲉ', 'ⲛ'],
          explanation: 'ⲛⲓⲁⲡⲟⲥⲧⲟⲗⲟⲥ ⲛ̀ⲧⲉⲡⲉⲛ⳪ = the apostles of our Lord'
        },
        {
          id: 'ex-13-3-6',
          type: 'matching',
          question: 'Match complex possessive phrases',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲡⲓⲣⲁⲛ ⲙⲫϯ', english: 'the name of God' },
            { coptic: 'ⲡⲓⲙⲉⲛⲣⲓⲧ ⲙⲫϯ', english: 'the love of God' },
            { coptic: 'ⲛⲓϣⲏⲣⲓ ⲙⲫϯ', english: 'the children of God' },
            { coptic: 'ϯⲙⲉⲧⲟⲩⲣⲟ ⲙⲫϯ', english: 'the kingdom of God' }
          ]
        },
        {
          id: 'ex-13-3-7',
          type: 'sentence_building',
          question: 'Build: "The grace of our Lord Jesus Christ"',
          correctAnswer: 'ⲡⲓϩ̀ⲙⲟⲧ ⲙⲡⲉⲛ⳪ Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭⲣⲓⲥⲧⲟⲥ',
          wordBank: ['ⲡⲓϩ̀ⲙⲟⲧ', 'ⲙ', 'ⲡⲉⲛ⳪', 'Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭⲣⲓⲥⲧⲟⲥ'],
          explanation: 'ⲡⲓϩ̀ⲙⲟⲧ ⲙⲡⲉⲛ⳪ Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭⲣⲓⲥⲧⲟⲥ = the grace of our Lord Jesus Christ (liturgical phrase)'
        },
        {
          id: 'ex-13-3-8',
          type: 'translation',
          question: 'Translate: ϯⲙⲉⲧⲟⲩⲣⲟ ⲛ̀ⲧⲉⲛⲓⲫⲏⲟⲩⲓ',
          questionCoptic: 'ϯⲙⲉⲧⲟⲩⲣⲟ ⲛ̀ⲧⲉⲛⲓⲫⲏⲟⲩⲓ',
          correctAnswer: 'the kingdom of the heavens',
          options: ['the kingdom of the heavens', 'the heavenly kingdom', 'heaven\'s kingdom', 'the kingdom in heaven'],
          explanation: 'ϯⲙⲉⲧⲟⲩⲣⲟ ⲛ̀ⲧⲉⲛⲓⲫⲏⲟⲩⲓ = the kingdom of the heavens (common biblical phrase)'
        }
      ]
    }
  ]
};

export default unit13;
