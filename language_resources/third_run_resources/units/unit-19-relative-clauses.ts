import { Unit } from '../../types';

// UNIT 19: RELATIVE CLAUSES
// Verified for Bohairic dialect consistency
// Relative converter ⲉⲧ- and complex relative constructions

const unit19: Unit = {
  id: 'unit-19',
  title: 'Relative Clauses',
  description: 'Build complex sentences with relative clauses',
  order: 19,
  color: '#00CD9C',
  lessons: [
    {
      id: 'lesson-19-1',
      unitId: 'unit-19',
      title: 'Present Relatives (ⲉⲧ-)',
      description: 'Who/that/which in present tense',
      order: 1,
      xpReward: 30,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-19-1-1',
          type: 'translation',
          question: 'Translate: ⲡⲓⲣⲱⲙⲓ ⲉⲧⲙⲟϣⲓ',
          questionCoptic: 'ⲡⲓⲣⲱⲙⲓ ⲉⲧⲙⲟϣⲓ',
          correctAnswer: 'The man who walks',
          options: ['The man who walks', 'The walking man', 'The man walked', 'A man walks'],
          explanation: 'ⲡⲓⲣⲱⲙⲓ = the man + ⲉⲧⲙⲟϣⲓ = who walks (relative clause) (Bohairic ⲙⲟϣⲓ not ⲙⲟⲟϣⲉ!)'
        },
        {
          id: 'ex-19-1-2',
          type: 'multiple_choice',
          question: 'What is the relative converter for present tense?',
          correctAnswer: 'ⲉⲧ-',
          options: ['ⲉⲧ-', 'ⲉⲧⲁ-', 'ⲉⲛⲁ-', 'ⲉⲣⲉ-'],
          explanation: 'ⲉⲧ- (et-) = relative converter "who/that/which" for present tense'
        },
        {
          id: 'ex-19-1-3',
          type: 'matching',
          question: 'Match nouns with relative clauses',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲡⲓϫⲱⲙ ⲉⲧⲭⲏ', english: 'the book that is lying' },
            { coptic: 'ϯϩⲓⲙⲓ ⲉⲧⲥ̀ϧⲁⲓ', english: 'the woman who writes' },
            { coptic: 'ⲛⲓϣⲏⲣⲓ ⲉⲧⲥⲱⲧⲉⲙ', english: 'the children who listen' },
            { coptic: 'ⲡⲓⲏⲓ ⲉⲧⲛⲓϣϯ', english: 'the house that is big' }
          ]
        },
        {
          id: 'ex-19-1-4',
          type: 'translation',
          question: 'Translate: ⲫϯ ⲉⲧⲙⲉⲛⲣⲉ ⲙ̀ⲙⲟⲛ',
          questionCoptic: 'ⲫϯ ⲉⲧⲙⲉⲛⲣⲉ ⲙ̀ⲙⲟⲛ',
          correctAnswer: 'God who loves us',
          options: ['God who loves us', 'God loves us', 'We love God', 'God who loved us'],
          explanation: 'ⲫϯ = God + ⲉⲧⲙⲉⲛⲣⲉ ⲙ̀ⲙⲟⲛ = who loves us (Bohairic: ⲫϯ not ⲫⲛⲟⲩϯ, ⲙⲉⲛⲣⲉ not ⲙⲉⲣⲓ!)'
        },
        {
          id: 'ex-19-1-5',
          type: 'sentence_building',
          question: 'Build: "The bread that we eat"',
          correctAnswer: 'ⲡⲓⲱⲓⲕ ⲉⲧⲉⲛⲟⲩⲱⲙ ⲙ̀ⲙⲟϥ',
          wordBank: ['ⲡⲓⲱⲓⲕ', 'ⲉⲧⲉⲛⲟⲩⲱⲙ', 'ⲙ̀ⲙⲟϥ', 'ⲉⲧⲁⲛⲟⲩⲱⲙ'],
          explanation: 'ⲡⲓⲱⲓⲕ = the bread + ⲉⲧⲉⲛⲟⲩⲱⲙ ⲙ̀ⲙⲟϥ = that we eat (of) it'
        },
        {
          id: 'ex-19-1-6',
          type: 'fill_blank',
          question: 'Complete: ⲛⲓⲣⲱⲙⲓ ___ ϩⲁⲛⲁⲛⲉⲩ = The people who are good',
          correctAnswer: 'ⲉⲧ',
          options: ['ⲉⲧ', 'ⲉⲧⲁ', 'ⲉⲛⲁ', 'ⲉⲣⲉ'],
          explanation: 'ⲛⲓⲣⲱⲙⲓ ⲉⲧϩⲁⲛⲁⲛⲉⲩ = the people who are good (present relative)'
        },
        {
          id: 'ex-19-1-7',
          type: 'translation',
          question: 'Translate: ⲧⲉⲕⲕⲗⲏⲥⲓⲁ ⲉⲧϧⲉⲛ ⲡⲓⲙⲁ ⲉⲧⲙ̀ⲙⲁⲩ',
          questionCoptic: 'ⲧⲉⲕⲕⲗⲏⲥⲓⲁ ⲉⲧϧⲉⲛ ⲡⲓⲙⲁ ⲉⲧⲙ̀ⲙⲁⲩ',
          correctAnswer: 'The church that is in that place',
          options: ['The church that is in that place', 'The church was there', 'That church is here', 'The church that will be there'],
          explanation: 'ⲧⲉⲕⲕⲗⲏⲥⲓⲁ = the church + ⲉⲧϧⲉⲛ ⲡⲓⲙⲁ ⲉⲧⲙ̀ⲙⲁⲩ = that is in that place'
        },
        {
          id: 'ex-19-1-8',
          type: 'multiple_choice',
          question: 'How do you say "the water that is clean"?',
          correctAnswer: 'ⲡⲓⲙⲱⲟⲩ ⲉⲧⲧⲟⲩⲃⲏⲟⲩⲧ',
          options: ['ⲡⲓⲙⲱⲟⲩ ⲉⲧⲧⲟⲩⲃⲏⲟⲩⲧ', 'ⲡⲓⲙⲱⲟⲩ ⲉⲧⲁϥⲧⲟⲩⲃⲏⲟⲩⲧ', 'ⲡⲓⲙⲱⲟⲩ ⲧⲟⲩⲃⲏⲟⲩⲧ', 'ⲙⲱⲟⲩ ⲉⲧⲧⲟⲩⲃⲟ'],
          explanation: 'ⲡⲓⲙⲱⲟⲩ ⲉⲧⲧⲟⲩⲃⲏⲟⲩⲧ = the water that is clean (present relative adjective)'
        }
      ]
    },
    {
      id: 'lesson-19-2',
      unitId: 'unit-19',
      title: 'Past Relatives (ⲉⲧⲁ-)',
      description: 'Who/that/which in past tense',
      order: 2,
      xpReward: 30,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-19-2-1',
          type: 'translation',
          question: 'Translate: ⲡⲓⲣⲱⲙⲓ ⲉⲧⲁϥⲓ̀',
          questionCoptic: 'ⲡⲓⲣⲱⲙⲓ ⲉⲧⲁϥⲓ̀',
          correctAnswer: 'The man who came',
          options: ['The man who came', 'The man who comes', 'The man came', 'A man who came'],
          explanation: 'ⲡⲓⲣⲱⲙⲓ = the man + ⲉⲧⲁϥⲓ̀ = who came (past relative) (Bohairic ⲓ̀ not ⲉⲓ!)'
        },
        {
          id: 'ex-19-2-2',
          type: 'multiple_choice',
          question: 'What is the relative converter for past tense?',
          correctAnswer: 'ⲉⲧⲁ-',
          options: ['ⲉⲧⲁ-', 'ⲉⲧ-', 'ⲉⲛⲁ-', 'ⲉⲣⲉ-'],
          explanation: 'ⲉⲧⲁ- (eta-) = relative converter "who/that/which" for perfect/past tense'
        },
        {
          id: 'ex-19-2-3',
          type: 'matching',
          question: 'Match present and past relatives',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲉⲧⲥⲱⲧⲉⲙ', english: 'who listens (present)' },
            { coptic: 'ⲉⲧⲁϥⲥⲱⲧⲉⲙ', english: 'who listened (past)' },
            { coptic: 'ⲉⲧⲛⲁⲩ', english: 'who sees (present)' },
            { coptic: 'ⲉⲧⲁⲩⲛⲁⲩ', english: 'who saw (past)' }
          ]
        },
        {
          id: 'ex-19-2-4',
          type: 'translation',
          question: 'Translate: ϯϩⲓⲙⲓ ⲉⲧⲁⲥⲥ̀ϧⲁⲓ ⲙ̀ⲡⲁⲓϫⲱⲙ',
          questionCoptic: 'ϯϩⲓⲙⲓ ⲉⲧⲁⲥⲥ̀ϧⲁⲓ ⲙ̀ⲡⲁⲓϫⲱⲙ',
          correctAnswer: 'The woman who wrote this book',
          options: ['The woman who wrote this book', 'The woman writes this book', 'The woman who writes books', 'This woman wrote a book'],
          explanation: 'ϯϩⲓⲙⲓ = the woman + ⲉⲧⲁⲥⲥ̀ϧⲁⲓ = who wrote + ⲙ̀ⲡⲁⲓϫⲱⲙ = this book (Bohairic: ϩⲓⲙⲓ not ⲥϩⲓⲙⲉ, ⲥ̀ϧⲁⲓ not ⲥϩⲁⲓ!)'
        },
        {
          id: 'ex-19-2-5',
          type: 'sentence_building',
          question: 'Build: "The words that he said"',
          correctAnswer: 'ⲛⲓⲥⲁϫⲓ ⲉⲧⲁϥϫⲟⲧⲟⲩ',
          wordBank: ['ⲛⲓⲥⲁϫⲓ', 'ⲉⲧⲁϥϫⲟⲧⲟⲩ', 'ⲉⲧϥϫⲱ', 'ⲙ̀ⲙⲱⲟⲩ'],
          explanation: 'ⲛⲓⲥⲁϫⲓ = the words + ⲉⲧⲁϥϫⲟⲧⲟⲩ = that he said (them)'
        },
        {
          id: 'ex-19-2-6',
          type: 'fill_blank',
          question: 'Complete: ⲡⲓⲏⲓ ___ ⲁⲛⲕⲟⲧϥ = The house that we built',
          correctAnswer: 'ⲉⲧⲁⲛⲕⲟⲧϥ',
          options: ['ⲉⲧⲁⲛⲕⲟⲧϥ', 'ⲉⲧⲉⲛⲕⲱⲧ', 'ⲉⲧⲛⲁⲕⲟⲧϥ', 'ⲉⲧⲕⲟⲧ'],
          explanation: 'ⲉⲧⲁⲛⲕⲟⲧϥ = that we built (it) (past relative with object suffix)'
        },
        {
          id: 'ex-19-2-7',
          type: 'translation',
          question: 'Translate: ⲛⲓϣⲏⲣⲓ ⲉⲧⲁⲩⲛⲁϩϯ',
          questionCoptic: 'ⲛⲓϣⲏⲣⲓ ⲉⲧⲁⲩⲛⲁϩϯ',
          correctAnswer: 'The children who believed',
          options: ['The children who believed', 'The children who believe', 'The children believed', 'The believing children'],
          explanation: 'ⲛⲓϣⲏⲣⲓ = the children + ⲉⲧⲁⲩⲛⲁϩϯ = who believed (Bohairic ϣⲏⲣⲓ not ⲥⲏⲣⲓ!)'
        },
        {
          id: 'ex-19-2-8',
          type: 'multiple_choice',
          question: 'How do you say "the prayer that I prayed"?',
          correctAnswer: 'ⲡⲓϣⲗⲏⲗ ⲉⲧⲁⲓⲉⲣⲡ̀ⲣⲟⲥⲉⲩⲭⲉⲥⲑⲉ ⲙ̀ⲙⲟϥ',
          options: ['ⲡⲓϣⲗⲏⲗ ⲉⲧⲁⲓⲉⲣⲡ̀ⲣⲟⲥⲉⲩⲭⲉⲥⲑⲉ ⲙ̀ⲙⲟϥ', 'ⲡⲓϣⲗⲏⲗ ⲉⲧⲓⲉⲣⲡ̀ⲣⲟⲥⲉⲩⲭⲉⲥⲑⲉ', 'ⲡⲓϣⲗⲏⲗ ⲉⲧⲁϥϣⲗⲏⲗ', 'ⲡⲓϣⲗⲏⲗ ⲉⲛⲁⲉⲣⲡ̀ⲣⲟⲥⲉⲩⲭⲉⲥⲑⲉ'],
          explanation: 'Past relative with object: ⲉⲧⲁⲓⲉⲣⲡ̀ⲣⲟⲥⲉⲩⲭⲉⲥⲑⲉ ⲙ̀ⲙⲟϥ = that I prayed (of) it'
        }
      ]
    },
    {
      id: 'lesson-19-3',
      unitId: 'unit-19',
      title: 'Future Relatives (ⲉⲛⲁ-)',
      description: 'Who/that/which in future tense',
      order: 3,
      xpReward: 30,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-19-3-1',
          type: 'translation',
          question: 'Translate: ⲡⲓⲣⲱⲙⲓ ⲉⲛⲁϥⲓ̀',
          questionCoptic: 'ⲡⲓⲣⲱⲙⲓ ⲉⲛⲁϥⲓ̀',
          correctAnswer: 'The man who will come',
          options: ['The man who will come', 'The man who came', 'The man who comes', 'The man comes'],
          explanation: 'ⲡⲓⲣⲱⲙⲓ = the man + ⲉⲛⲁϥⲓ̀ = who will come (future relative) (Bohairic ⲓ̀ not ⲉⲓ!)'
        },
        {
          id: 'ex-19-3-2',
          type: 'multiple_choice',
          question: 'What is the relative converter for future tense?',
          correctAnswer: 'ⲉⲛⲁ- (or ⲉⲑⲛⲁ-)',
          options: ['ⲉⲛⲁ- (or ⲉⲑⲛⲁ-)', 'ⲉⲧⲁ-', 'ⲉⲧ-', 'ⲉⲣⲉ-'],
          explanation: 'ⲉⲛⲁ- (ena-) or ⲉⲑⲛⲁ- (ethna-) = relative converter for future tense'
        },
        {
          id: 'ex-19-3-3',
          type: 'matching',
          question: 'Match all three tense relatives',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲉⲧϣⲉⲛⲓ', english: 'who goes (present)' },
            { coptic: 'ⲉⲧⲁϥϣⲉⲛⲓ', english: 'who went (past)' },
            { coptic: 'ⲉⲛⲁϥϣⲉⲛⲓ', english: 'who will go (future)' },
            { coptic: 'ⲉⲧⲉⲙ̀ⲡⲉϥϣⲉⲛⲓ', english: 'who did not go (neg. past)' }
          ]
        },
        {
          id: 'ex-19-3-4',
          type: 'translation',
          question: 'Translate: ϯϩⲓⲙⲓ ⲉⲑⲛⲁⲥ̀ϧⲁⲓ',
          questionCoptic: 'ϯϩⲓⲙⲓ ⲉⲑⲛⲁⲥ̀ϧⲁⲓ',
          correctAnswer: 'The woman who will write',
          options: ['The woman who will write', 'The woman who wrote', 'The woman writes', 'The woman is writing'],
          explanation: 'ϯϩⲓⲙⲓ = the woman + ⲉⲑⲛⲁⲥ̀ϧⲁⲓ = who will write (Bohairic: ϩⲓⲙⲓ not ⲥϩⲓⲙⲉ, ⲥ̀ϧⲁⲓ not ⲥϩⲁⲓ!)'
        },
        {
          id: 'ex-19-3-5',
          type: 'sentence_building',
          question: 'Build: "The day that will come"',
          correctAnswer: 'ⲡⲓⲉϩⲟⲟⲩ ⲉⲑⲛⲁⲓ̀',
          wordBank: ['ⲡⲓⲉϩⲟⲟⲩ', 'ⲉⲑⲛⲁⲓ̀', 'ⲉⲧⲁϥⲓ̀', 'ⲉⲛⲁⲓ̀'],
          explanation: 'ⲡⲓⲉϩⲟⲟⲩ = the day + ⲉⲑⲛⲁⲓ̀ = that will come (Bohairic ⲓ̀ not ⲉⲓ!)'
        },
        {
          id: 'ex-19-3-6',
          type: 'fill_blank',
          question: 'Complete: ⲛⲓⲣⲱⲙⲓ ___ ⲥⲱⲧⲉⲙ = The people who will listen',
          correctAnswer: 'ⲉⲑⲛⲁⲥⲱⲧⲉⲙ',
          options: ['ⲉⲑⲛⲁⲥⲱⲧⲉⲙ', 'ⲉⲧⲥⲱⲧⲉⲙ', 'ⲉⲧⲁⲩⲥⲱⲧⲉⲙ', 'ⲉⲛⲁⲩⲥⲱⲧⲉⲙ'],
          explanation: 'ⲉⲑⲛⲁⲥⲱⲧⲉⲙ = who will listen (future relative for plural noun)'
        },
        {
          id: 'ex-19-3-7',
          type: 'translation',
          question: 'Translate: ⲡⲓϫⲱⲙ ⲉⲛⲁⲓⲱϣ ⲙ̀ⲙⲟϥ',
          questionCoptic: 'ⲡⲓϫⲱⲙ ⲉⲛⲁⲓⲱϣ ⲙ̀ⲙⲟϥ',
          correctAnswer: 'The book that I will read',
          options: ['The book that I will read', 'The book that I read', 'The book that I am reading', 'The book to read'],
          explanation: 'ⲡⲓϫⲱⲙ = the book + ⲉⲛⲁⲓⲱϣ ⲙ̀ⲙⲟϥ = that I will read (it)'
        },
        {
          id: 'ex-19-3-8',
          type: 'multiple_choice',
          question: 'How do you say "the things that will happen"?',
          correctAnswer: 'ⲛⲓϩⲃⲏⲟⲩⲓ ⲉⲑⲛⲁϣⲱⲡⲓ',
          options: ['ⲛⲓϩⲃⲏⲟⲩⲓ ⲉⲑⲛⲁϣⲱⲡⲓ', 'ⲛⲓϩⲃⲏⲟⲩⲓ ⲉⲧⲁⲩϣⲱⲡⲓ', 'ⲛⲓϩⲃⲏⲟⲩⲓ ⲉⲧϣⲱⲡⲓ', 'ⲛⲓϩⲃⲏⲟⲩⲓ ϣⲱⲡⲓ'],
          explanation: 'ⲛⲓϩⲃⲏⲟⲩⲓ ⲉⲑⲛⲁϣⲱⲡⲓ = the things that will happen (future relative)'
        }
      ]
    },
    {
      id: 'lesson-19-4',
      unitId: 'unit-19',
      title: 'Negative Relatives',
      description: 'Relative clauses with negation',
      order: 4,
      xpReward: 30,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-19-4-1',
          type: 'translation',
          question: 'Translate: ⲡⲓⲣⲱⲙⲓ ⲉⲧⲉⲙ̀ⲡⲉϥⲓ̀',
          questionCoptic: 'ⲡⲓⲣⲱⲙⲓ ⲉⲧⲉⲙ̀ⲡⲉϥⲓ̀',
          correctAnswer: 'The man who did not come',
          options: ['The man who did not come', 'The man who came', 'The man who will not come', 'The man does not come'],
          explanation: 'ⲡⲓⲣⲱⲙⲓ = the man + ⲉⲧⲉⲙ̀ⲡⲉϥⲓ̀ = who did not come (negative past relative) (Bohairic ⲓ̀ not ⲉⲓ!)'
        },
        {
          id: 'ex-19-4-2',
          type: 'multiple_choice',
          question: 'How do you form negative past relatives?',
          correctAnswer: 'ⲉⲧⲉⲙ̀ⲡⲉ- (combining ⲉⲧⲉ + ⲙ̀ⲡⲉ)',
          options: ['ⲉⲧⲉⲙ̀ⲡⲉ- (combining ⲉⲧⲉ + ⲙ̀ⲡⲉ)', 'ⲉⲧⲁ-...ⲁⲛ', 'ⲙ̀ⲡⲉ-...ⲁⲛ', 'ⲉⲧ-...ⲁⲛ'],
          explanation: 'ⲉⲧⲉⲙ̀ⲡⲉ- (ete-mpe-) combines the relative ⲉⲧⲉ with negative ⲙ̀ⲡⲉ-'
        },
        {
          id: 'ex-19-4-3',
          type: 'matching',
          question: 'Match positive and negative relatives',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲉⲧⲁϥⲛⲁⲩ', english: 'who saw' },
            { coptic: 'ⲉⲧⲉⲙ̀ⲡⲉϥⲛⲁⲩ', english: 'who did not see' },
            { coptic: 'ⲉⲧⲥⲱⲧⲉⲙ', english: 'who listens' },
            { coptic: 'ⲉⲧⲉⲛ̀ϥⲥⲱⲧⲉⲙ ⲁⲛ', english: 'who does not listen' }
          ]
        },
        {
          id: 'ex-19-4-4',
          type: 'translation',
          question: 'Translate: ⲛⲓϣⲏⲣⲓ ⲉⲧⲉⲛ̀ⲥⲉⲥⲱⲧⲉⲙ ⲁⲛ',
          questionCoptic: 'ⲛⲓϣⲏⲣⲓ ⲉⲧⲉⲛ̀ⲥⲉⲥⲱⲧⲉⲙ ⲁⲛ',
          correctAnswer: 'The children who do not listen',
          options: ['The children who do not listen', 'The children who listen', 'The children did not listen', 'The children who did not listen'],
          explanation: 'ⲛⲓϣⲏⲣⲓ = the children + ⲉⲧⲉⲛ̀ⲥⲉⲥⲱⲧⲉⲙ ⲁⲛ = who do not listen (Bohairic ϣⲏⲣⲓ not ⲥⲏⲣⲓ!)'
        },
        {
          id: 'ex-19-4-5',
          type: 'sentence_building',
          question: 'Build: "The woman who did not believe"',
          correctAnswer: 'ϯϩⲓⲙⲓ ⲉⲧⲉⲙ̀ⲡⲉⲥⲛⲁϩϯ',
          wordBank: ['ϯϩⲓⲙⲓ', 'ⲉⲧⲉⲙ̀ⲡⲉⲥⲛⲁϩϯ', 'ⲉⲧⲁⲥⲛⲁϩϯ', 'ⲉⲧⲉⲛ̀ⲥⲉⲛⲁϩϯ'],
          explanation: 'ϯϩⲓⲙⲓ = the woman + ⲉⲧⲉⲙ̀ⲡⲉⲥⲛⲁϩϯ = who did not believe (Bohairic ϩⲓⲙⲓ not ⲥϩⲓⲙⲉ!)'
        },
        {
          id: 'ex-19-4-6',
          type: 'fill_blank',
          question: 'Complete: ⲡⲓϫⲱⲙ ___ ⲁⲛⲱϣ ⲙ̀ⲙⲟϥ = The book that we did not read',
          correctAnswer: 'ⲉⲧⲉⲙ̀ⲡⲉⲛⲱϣ',
          options: ['ⲉⲧⲉⲙ̀ⲡⲉⲛⲱϣ', 'ⲉⲧⲁⲛⲱϣ', 'ⲉⲧⲉⲛⲱϣ', 'ⲉⲑⲛⲁⲱϣ'],
          explanation: 'ⲉⲧⲉⲙ̀ⲡⲉⲛⲱϣ ⲙ̀ⲙⲟϥ = that we did not read (it) (negative past relative)'
        },
        {
          id: 'ex-19-4-7',
          type: 'translation',
          question: 'Translate: ⲫϯ ⲉⲧⲉⲙ̀ⲙⲟⲛⲧⲁϥ ϫⲓⲛϫⲏ',
          questionCoptic: 'ⲫϯ ⲉⲧⲉⲙ̀ⲙⲟⲛⲧⲁϥ ϫⲓⲛϫⲏ',
          correctAnswer: 'God who has no beginning',
          options: ['God who has no beginning', 'God who had a beginning', 'God has no beginning', 'God who will have no beginning'],
          explanation: 'ⲫϯ = God + ⲉⲧⲉⲙ̀ⲙⲟⲛⲧⲁϥ ϫⲓⲛϫⲏ = who has not beginning (relative with ⲙ̀ⲙⲟⲛ negation) (Bohairic ⲫϯ not ⲫⲛⲟⲩϯ!)'
        },
        {
          id: 'ex-19-4-8',
          type: 'multiple_choice',
          question: 'How do you say "the words that I did not say"?',
          correctAnswer: 'ⲛⲓⲥⲁϫⲓ ⲉⲧⲉⲙ̀ⲡⲓϫⲟⲧⲟⲩ',
          options: ['ⲛⲓⲥⲁϫⲓ ⲉⲧⲉⲙ̀ⲡⲓϫⲟⲧⲟⲩ', 'ⲛⲓⲥⲁϫⲓ ⲉⲧⲁⲓϫⲟⲧⲟⲩ', 'ⲛⲓⲥⲁϫⲓ ⲉⲧⲉⲛ̀ϯϫⲱ ⲁⲛ', 'ⲛⲓⲥⲁϫⲓ ⲙ̀ⲡⲓϫⲟⲧⲟⲩ'],
          explanation: 'ⲛⲓⲥⲁϫⲓ ⲉⲧⲉⲙ̀ⲡⲓϫⲟⲧⲟⲩ = the words that I did not say (them)'
        }
      ]
    }
  ]
};

export default unit19;
