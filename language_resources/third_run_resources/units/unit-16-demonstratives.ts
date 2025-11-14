import { Unit } from '../../types';

// UNIT 16: DEMONSTRATIVES & POINTING
// Verified for Bohairic dialect consistency
// This/That, These/Those - pointing words

const unit16: Unit = {
  id: 'unit-16',
  title: 'Demonstratives & Pointing',
  description: 'Master this, that, these, and those',
  order: 16,
  color: '#1CB0F6',
  lessons: [
    {
      id: 'lesson-16-1',
      unitId: 'unit-16',
      title: 'This/These - Proximal (ⲫⲁⲓ, ⲑⲁⲓ, ⲛⲁⲓ)',
      description: 'Near demonstratives',
      order: 1,
      xpReward: 30,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-16-1-1',
          type: 'translation',
          question: 'Translate: ⲫⲁⲓ',
          questionCoptic: 'ⲫⲁⲓ',
          correctAnswer: 'This (masculine)',
          options: ['This (masculine)', 'That (masculine)', 'These', 'Those'],
          explanation: 'ⲫⲁⲓ (vai) = this (masculine singular) - proximal demonstrative'
        },
        {
          id: 'ex-16-1-2',
          type: 'multiple_choice',
          question: 'What is the feminine form of "this"?',
          correctAnswer: 'ⲑⲁⲓ',
          options: ['ⲑⲁⲓ', 'ⲫⲁⲓ', 'ⲛⲁⲓ', 'ⲑⲏ'],
          explanation: 'ⲑⲁⲓ (thai) = this (feminine singular)'
        },
        {
          id: 'ex-16-1-3',
          type: 'matching',
          question: 'Match proximal demonstratives',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲫⲁⲓ', english: 'this (masc.)' },
            { coptic: 'ⲑⲁⲓ', english: 'this (fem.)' },
            { coptic: 'ⲛⲁⲓ', english: 'these (plural)' },
            { coptic: 'ⲡⲁⲓ', english: 'this one (def. masc.)' }
          ]
        },
        {
          id: 'ex-16-1-4',
          type: 'translation',
          question: 'Translate: ⲡⲁⲓⲣⲱⲙⲓ',
          questionCoptic: 'ⲡⲁⲓⲣⲱⲙⲓ',
          correctAnswer: 'This man',
          options: ['This man', 'That man', 'The man', 'A man'],
          explanation: 'ⲡⲁⲓ = this (definite masculine) + ⲣⲱⲙⲓ = man → this man'
        },
        {
          id: 'ex-16-1-5',
          type: 'sentence_building',
          question: 'Build: "This woman is good"',
          correctAnswer: 'ⲧⲁⲓϩⲓⲙⲓ ⲛⲁⲛⲉⲥ ⲧⲉ',
          wordBank: ['ⲧⲁⲓ', 'ϩⲓⲙⲓ', 'ⲛⲁⲛⲉⲥ', 'ⲧⲉ'],
          explanation: 'ⲧⲁⲓϩⲓⲙⲓ = this woman + ⲛⲁⲛⲉⲥ ⲧⲉ = is good (fem. copula) - Bohairic ϩⲓⲙⲓ not ⲥϩⲓⲙⲉ!'
        },
        {
          id: 'ex-16-1-6',
          type: 'fill_blank',
          question: 'Complete: ___ ⲛⲓϣⲏⲣⲓ = These children',
          correctAnswer: 'ⲛⲁⲓ',
          options: ['ⲛⲁⲓ', 'ⲛⲏ', 'ⲫⲁⲓ', 'ⲑⲁⲓ'],
          explanation: 'ⲛⲁⲓ (nai) = these (plural demonstrative) - Bohairic ϣⲏⲣⲓ not ⲥⲏⲣⲓ!'
        },
        {
          id: 'ex-16-1-7',
          type: 'translation',
          question: 'Translate: ⲫⲁⲓ ⲡⲉ ⲡⲁⲥⲟⲛ',
          questionCoptic: 'ⲫⲁⲓ ⲡⲉ ⲡⲁⲥⲟⲛ',
          correctAnswer: 'This is my brother',
          options: ['This is my brother', 'That is my brother', 'This is my father', 'He is my brother'],
          explanation: 'ⲫⲁⲓ ⲡⲉ = this is (masculine copula) + ⲡⲁⲥⲟⲛ = my brother'
        },
        {
          id: 'ex-16-1-8',
          type: 'multiple_choice',
          question: 'How do you say "this book"?',
          correctAnswer: 'ⲡⲁⲓϫⲱⲙ',
          options: ['ⲡⲁⲓϫⲱⲙ', 'ⲫⲁⲓϫⲱⲙ', 'ⲡⲓϫⲱⲙ', 'ⲡⲏϫⲱⲙ'],
          explanation: 'ⲡⲁⲓ = this (definite masc.) + ϫⲱⲙ = book → ⲡⲁⲓϫⲱⲙ = this book'
        }
      ]
    },
    {
      id: 'lesson-16-2',
      unitId: 'unit-16',
      title: 'That/Those - Distal (ⲫⲏ, ⲑⲏ, ⲛⲏ)',
      description: 'Distant demonstratives',
      order: 2,
      xpReward: 30,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-16-2-1',
          type: 'translation',
          question: 'Translate: ⲫⲏ',
          questionCoptic: 'ⲫⲏ',
          correctAnswer: 'That (masculine)',
          options: ['That (masculine)', 'This (masculine)', 'Those', 'These'],
          explanation: 'ⲫⲏ (vee) = that (masculine singular) - distal demonstrative'
        },
        {
          id: 'ex-16-2-2',
          type: 'multiple_choice',
          question: 'What is the feminine form of "that"?',
          correctAnswer: 'ⲑⲏ',
          options: ['ⲑⲏ', 'ⲫⲏ', 'ⲛⲏ', 'ⲑⲁⲓ'],
          explanation: 'ⲑⲏ (thee) = that (feminine singular)'
        },
        {
          id: 'ex-16-2-3',
          type: 'matching',
          question: 'Match distal demonstratives',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲫⲏ', english: 'that (masc.)' },
            { coptic: 'ⲑⲏ', english: 'that (fem.)' },
            { coptic: 'ⲛⲏ', english: 'those (plural)' },
            { coptic: 'ⲡⲏ', english: 'that one (def. masc.)' }
          ]
        },
        {
          id: 'ex-16-2-4',
          type: 'translation',
          question: 'Translate: ⲡⲏⲣⲱⲙⲓ',
          questionCoptic: 'ⲡⲏⲣⲱⲙⲓ',
          correctAnswer: 'That man',
          options: ['That man', 'This man', 'The man', 'A man'],
          explanation: 'ⲡⲏ = that (definite masculine) + ⲣⲱⲙⲓ = man → that man'
        },
        {
          id: 'ex-16-2-5',
          type: 'sentence_building',
          question: 'Build: "That house is big"',
          correctAnswer: 'ⲡⲏⲏⲓ ⲟⲓ ⲛ̀ⲛⲓϣϯ',
          wordBank: ['ⲡⲏ', 'ⲏⲓ', 'ⲟⲓ', 'ⲛ̀ⲛⲓϣϯ'],
          explanation: 'ⲡⲏⲏⲓ = that house + ⲟⲓ ⲛ̀ⲛⲓϣϯ = is big'
        },
        {
          id: 'ex-16-2-6',
          type: 'fill_blank',
          question: 'Complete: ___ ⲛⲓⲣⲱⲙⲓ = Those people',
          correctAnswer: 'ⲛⲏ',
          options: ['ⲛⲏ', 'ⲛⲁⲓ', 'ⲫⲏ', 'ⲑⲏ'],
          explanation: 'ⲛⲏ (nee) = those (plural demonstrative)'
        },
        {
          id: 'ex-16-2-7',
          type: 'translation',
          question: 'Translate: ⲫⲏ ⲡⲉ ⲡⲁⲓⲱⲧ',
          questionCoptic: 'ⲫⲏ ⲡⲉ ⲡⲁⲓⲱⲧ',
          correctAnswer: 'That is my father',
          options: ['That is my father', 'This is my father', 'That is my brother', 'He is my father'],
          explanation: 'ⲫⲏ ⲡⲉ = that is (masculine copula) + ⲡⲁⲓⲱⲧ = my father'
        },
        {
          id: 'ex-16-2-8',
          type: 'multiple_choice',
          question: 'How do you say "that church"?',
          correctAnswer: 'ⲧⲏⲉⲕⲕⲗⲏⲥⲓⲁ',
          options: ['ⲧⲏⲉⲕⲕⲗⲏⲥⲓⲁ', 'ⲧⲁⲓⲉⲕⲕⲗⲏⲥⲓⲁ', 'ϯⲉⲕⲕⲗⲏⲥⲓⲁ', 'ⲑⲏⲉⲕⲕⲗⲏⲥⲓⲁ'],
          explanation: 'ⲧⲏ = that (definite fem.) + ⲉⲕⲕⲗⲏⲥⲓⲁ = church → ⲧⲏⲉⲕⲕⲗⲏⲥⲓⲁ = that church'
        }
      ]
    },
    {
      id: 'lesson-16-3',
      unitId: 'unit-16',
      title: 'Practice with Objects',
      description: 'Using demonstratives with common nouns',
      order: 3,
      xpReward: 30,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-16-3-1',
          type: 'translation',
          question: 'Translate: ⲙⲏⲓⲥ ⲛⲏⲓ ⲙⲡⲁⲓϫⲱⲙ',
          questionCoptic: 'ⲙⲏⲓⲥ ⲛⲏⲓ ⲙⲡⲁⲓϫⲱⲙ',
          correctAnswer: 'Give me this book',
          options: ['Give me this book', 'Give me that book', 'Take this book', 'Read this book'],
          explanation: 'ⲙⲏⲓⲥ = give (it) + ⲛⲏⲓ = to me + ⲙⲡⲁⲓϫⲱⲙ = (namely) this book'
        },
        {
          id: 'ex-16-3-2',
          type: 'multiple_choice',
          question: 'How do you say "these words"?',
          correctAnswer: 'ⲛⲁⲓⲥⲁϫⲓ',
          options: ['ⲛⲁⲓⲥⲁϫⲓ', 'ⲛⲏⲥⲁϫⲓ', 'ⲡⲁⲓⲥⲁϫⲓ', 'ⲛⲓⲥⲁϫⲓ'],
          explanation: 'ⲛⲁⲓ = these + ⲥⲁϫⲓ = words → ⲛⲁⲓⲥⲁϫⲓ = these words'
        },
        {
          id: 'ex-16-3-3',
          type: 'matching',
          question: 'Match demonstrative phrases',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲡⲁⲓⲟⲩⲱⲙ', english: 'this food' },
            { coptic: 'ⲧⲁⲓⲥ̀ϧⲓⲙⲓ', english: 'this woman' },
            { coptic: 'ⲡⲏⲙⲱⲟⲩ', english: 'that water' },
            { coptic: 'ⲛⲁⲓϩⲃⲏⲟⲩⲓ', english: 'these things' }
          ]
        },
        {
          id: 'ex-16-3-4',
          type: 'translation',
          question: 'Translate: ⲛⲏϣⲏⲣⲓ ϩⲁⲛⲁⲛⲉⲩ ⲛⲉ',
          questionCoptic: 'ⲛⲏϣⲏⲣⲓ ϩⲁⲛⲁⲛⲉⲩ ⲛⲉ',
          correctAnswer: 'Those children are good',
          options: ['Those children are good', 'These children are good', 'The children are good', 'Those boys are bad'],
          explanation: 'ⲛⲏϣⲏⲣⲓ = those children + ϩⲁⲛⲁⲛⲉⲩ ⲛⲉ = are good (plural copula) - Bohairic ϣⲏⲣⲓ not ⲥⲏⲣⲓ!'
        },
        {
          id: 'ex-16-3-5',
          type: 'sentence_building',
          question: 'Build: "I want this bread"',
          correctAnswer: 'ϯⲟⲩⲱϣ ⲙⲡⲁⲓⲱⲓⲕ',
          wordBank: ['ϯⲟⲩⲱϣ', 'ⲙ̀', 'ⲡⲁⲓ', 'ⲱⲓⲕ'],
          explanation: 'ϯⲟⲩⲱϣ = I want + ⲙⲡⲁⲓⲱⲓⲕ = this bread (ⲙ̀ + ⲡⲁⲓ + ⲱⲓⲕ)'
        },
        {
          id: 'ex-16-3-6',
          type: 'fill_blank',
          question: 'Complete: ⲛⲁⲩ ⲉ̀___ ⲛⲓⲃⲁⲗ = Look at these eyes',
          correctAnswer: 'ⲛⲁⲓ',
          options: ['ⲛⲁⲓ', 'ⲛⲏ', 'ⲡⲁⲓ', 'ⲡⲏ'],
          explanation: 'ⲛⲁⲩ ⲉ̀ⲛⲁⲓⲛⲓⲃⲁⲗ = look at these eyes (ⲛⲁⲓ = these + ⲛⲓⲃⲁⲗ = the eyes)'
        },
        {
          id: 'ex-16-3-7',
          type: 'translation',
          question: 'Translate: ⲡⲏϫⲱⲙ ⲛⲁⲛⲉϥ ⲡⲉ',
          questionCoptic: 'ⲡⲏϫⲱⲙ ⲛⲁⲛⲉϥ ⲡⲉ',
          correctAnswer: 'That book is good',
          options: ['That book is good', 'This book is good', 'The book is good', 'That book is bad'],
          explanation: 'ⲡⲏϫⲱⲙ = that book + ⲛⲁⲛⲉϥ ⲡⲉ = is good (masculine copula)'
        },
        {
          id: 'ex-16-3-8',
          type: 'multiple_choice',
          question: 'Which means "those days"?',
          correctAnswer: 'ⲛⲏⲉϩⲟⲟⲩ',
          options: ['ⲛⲏⲉϩⲟⲟⲩ', 'ⲛⲁⲓⲉϩⲟⲟⲩ', 'ⲛⲓⲉϩⲟⲟⲩ', 'ⲡⲏⲉϩⲟⲟⲩ'],
          explanation: 'ⲛⲏ = those + ⲉϩⲟⲟⲩ = days → ⲛⲏⲉϩⲟⲟⲩ = those days'
        },
        {
          id: 'ex-16-3-9',
          type: 'translation',
          question: 'Translate: ⲁⲓⲛⲁⲩ ⲉ̀ⲡⲁⲓⲣⲱⲙⲓ',
          questionCoptic: 'ⲁⲓⲛⲁⲩ ⲉ̀ⲡⲁⲓⲣⲱⲙⲓ',
          correctAnswer: 'I saw this man',
          options: ['I saw this man', 'I saw that man', 'I see this man', 'I will see this man'],
          explanation: 'ⲁⲓⲛⲁⲩ ⲉ̀ⲡⲁⲓⲣⲱⲙⲓ = I saw to-this man (demonstrative with verb and preposition)'
        },
        {
          id: 'ex-16-3-10',
          type: 'sentence_building',
          question: 'Build: "Give me those books"',
          correctAnswer: 'ⲙⲏⲓⲥ ⲛⲏⲓ ⲛⲛⲏϫⲱⲙ',
          wordBank: ['ⲙⲏⲓⲥ', 'ⲛⲏⲓ', 'ⲛ̀', 'ⲛⲏϫⲱⲙ'],
          explanation: 'ⲙⲏⲓⲥ ⲛⲏⲓ = give me + ⲛⲛⲏϫⲱⲙ = those books (demonstrative as object)'
        }
      ]
    },
    {
      id: 'lesson-16-4',
      unitId: 'unit-16',
      title: 'Demonstratives in Complex Constructions',
      description: 'Demonstratives with relative clauses and as pronouns',
      order: 4,
      xpReward: 25,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-16-4-1',
          type: 'translation',
          question: 'Translate: ⲫⲁⲓ ⲉⲧⲥⲁϫⲓ ⲡⲉ ⲡⲓⲥⲁϩ',
          questionCoptic: 'ⲫⲁⲓ ⲉⲧⲥⲁϫⲓ ⲡⲉ ⲡⲓⲥⲁϩ',
          correctAnswer: 'This one who speaks is the teacher',
          options: ['This one who speaks is the teacher', 'This teacher speaks', 'He who speaks is this teacher', 'The teacher speaks this'],
          explanation: 'ⲫⲁⲓ ⲉⲧⲥⲁϫⲓ = this one who speaks (demonstrative + relative clause) + ⲡⲉ ⲡⲓⲥⲁϩ = is the teacher'
        },
        {
          id: 'ex-16-4-2',
          type: 'multiple_choice',
          question: 'When does a demonstrative function as a pronoun?',
          correctAnswer: 'When it stands alone without a noun',
          options: ['When it stands alone without a noun', 'When it comes before a noun', 'When it uses the copula', 'When it is in the plural'],
          explanation: 'Demonstratives can be pronouns (ⲫⲁⲓ = this one) or adjectives (ⲡⲁⲓⲣⲱⲙⲓ = this man)'
        },
        {
          id: 'ex-16-4-3',
          type: 'matching',
          question: 'Match demonstratives with relative clauses',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲫⲁⲓ ⲉⲧⲛⲁⲩ', english: 'this one who sees' },
            { coptic: 'ⲑⲁⲓ ⲉⲧⲥⲱⲧⲙ', english: 'this one (f) who hears' },
            { coptic: 'ⲛⲁⲓ ⲉⲧⲙⲟϣⲓ', english: 'these ones who walk' },
            { coptic: 'ⲫⲏ ⲉⲧⲁϥⲓ̀', english: 'that one who came' }
          ]
        },
        {
          id: 'ex-16-4-4',
          type: 'translation',
          question: 'Translate: ⲛⲏ ⲛⲉ ⲛⲏⲉⲧⲁⲓⲛⲁⲩ ⲉ̀ⲣⲱⲟⲩ',
          questionCoptic: 'ⲛⲏ ⲛⲉ ⲛⲏⲉⲧⲁⲓⲛⲁⲩ ⲉ̀ⲣⲱⲟⲩ',
          correctAnswer: 'Those are the ones I saw',
          options: ['Those are the ones I saw', 'These are the ones I saw', 'Those are what I saw', 'I saw those'],
          explanation: 'ⲛⲏ ⲛⲉ = those are + ⲛⲏⲉⲧⲁⲓⲛⲁⲩ ⲉ̀ⲣⲱⲟⲩ = the ones I saw (demonstrative pronoun + relative clause)'
        },
        {
          id: 'ex-16-4-5',
          type: 'sentence_building',
          question: 'Build: "This is what God said"',
          correctAnswer: 'ⲫⲁⲓ ⲡⲉ ⲫⲏⲉⲧⲁ ⲫϯ ϫⲟϥ',
          wordBank: ['ⲫⲁⲓ', 'ⲡⲉ', 'ⲫⲏⲉⲧⲁ', 'ⲫϯ', 'ϫⲟϥ'],
          explanation: 'ⲫⲁⲓ ⲡⲉ = this is + ⲫⲏⲉⲧⲁ ⲫϯ ϫⲟϥ = what God said (demonstrative + copula + relative clause)'
        },
        {
          id: 'ex-16-4-6',
          type: 'fill_blank',
          question: 'Complete: ___ ⲡⲉ ⲡⲁⲓⲱⲧ = This is my father',
          correctAnswer: 'ⲫⲁⲓ',
          options: ['ⲫⲁⲓ', 'ⲡⲁⲓ', 'ⲫⲏ', 'ⲡⲏ'],
          explanation: 'ⲫⲁⲓ ⲡⲉ = this is (demonstrative pronoun as subject + copula)'
        },
        {
          id: 'ex-16-4-7',
          type: 'multiple_choice',
          question: 'What is the difference between ⲫⲁⲓ and ⲡⲁⲓ?',
          questionCoptic: 'ⲫⲁⲓ vs ⲡⲁⲓ',
          correctAnswer: 'ⲫⲁⲓ is pronoun, ⲡⲁⲓ is adjective',
          options: ['ⲫⲁⲓ is pronoun, ⲡⲁⲓ is adjective', 'ⲫⲁⲓ is plural, ⲡⲁⲓ is singular', 'ⲫⲁⲓ is far, ⲡⲁⲓ is near', 'They are the same'],
          explanation: 'ⲫⲁⲓ = this (one) [pronoun], ⲡⲁⲓ- = this [adjective before noun] (e.g., ⲡⲁⲓⲣⲱⲙⲓ = this man)'
        },
        {
          id: 'ex-16-4-8',
          type: 'translation',
          question: 'Translate: ⲑⲏ ⲧⲉ ϯⲉⲕⲕⲗⲏⲥⲓⲁ ⲉⲧⲁⲛϣⲉⲛⲓ ⲉ̀ⲣⲟⲥ',
          questionCoptic: 'ⲑⲏ ⲧⲉ ϯⲉⲕⲕⲗⲏⲥⲓⲁ ⲉⲧⲁⲛϣⲉⲛⲓ ⲉ̀ⲣⲟⲥ',
          correctAnswer: 'That is the church we went to',
          options: ['That is the church we went to', 'This is the church we went to', 'That church is where we went', 'We went to that church'],
          explanation: 'ⲑⲏ ⲧⲉ = that is + ϯⲉⲕⲕⲗⲏⲥⲓⲁ ⲉⲧⲁⲛϣⲉⲛⲓ ⲉ̀ⲣⲟⲥ = the church we went to (demonstrative + relative clause)'
        },
        {
          id: 'ex-16-4-9',
          type: 'matching',
          question: 'Match position variations',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲫⲁⲓ ⲡⲉ', english: 'this is (pronoun)' },
            { coptic: 'ⲡⲁⲓⲣⲱⲙⲓ ⲡⲉ', english: 'this man is (adjective)' },
            { coptic: 'ⲡⲓⲣⲱⲙⲓ ⲫⲁⲓ', english: 'this man / the man, this one' },
            { coptic: 'ⲫⲁⲓ ⲉⲧⲥⲁϫⲓ', english: 'this one who speaks' }
          ]
        },
        {
          id: 'ex-16-4-10',
          type: 'sentence_building',
          question: 'Build: "These are they who believe"',
          correctAnswer: 'ⲛⲁⲓ ⲛⲉ ⲛⲏⲉⲧⲛⲁϩϯ',
          wordBank: ['ⲛⲁⲓ', 'ⲛⲉ', 'ⲛⲏⲉⲧ', 'ⲛⲁϩϯ'],
          explanation: 'ⲛⲁⲓ ⲛⲉ = these are + ⲛⲏⲉⲧⲛⲁϩϯ = the ones who believe (demonstrative pronoun + relative clause)'
        }
      ]
    }
  ]
};

export default unit16;
