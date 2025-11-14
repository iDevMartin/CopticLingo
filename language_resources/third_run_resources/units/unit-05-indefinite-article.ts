import { Unit } from '../../types';

// UNIT 5: INDEFINITE ARTICLE & NOUN BASICS
// Corrected for Bohairic dialect consistency
// Article system based on OUTLINE OF BOHAIRIC COPTIC MORPHOLOGY

const unit5: Unit = {
  id: 'unit-5',
  title: 'Indefinite Article & Noun Basics',
  description: 'Learn "a/an" and "some" in Coptic: ⲟⲩ, ϩⲁⲛ',
  order: 5,
  color: '#FF9600',
  lessons: [
    {
      id: 'lesson-5-1',
      unitId: 'unit-5',
      title: 'Indefinite Article (Singular)',
      description: 'Learn "a/an" in Coptic: ⲟⲩ',
      order: 1,
      xpReward: 20,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-5-1-1',
          type: 'multiple_choice',
          question: 'What is the indefinite article in Coptic?',
          correctAnswer: 'ⲟⲩ',
          options: ['ⲟⲩ', 'ⲡⲓ', 'ϯ', 'ⲛⲓ'],
          explanation: 'ⲟⲩ (ou) means "a" or "an" (for all genders)'
        },
        {
          id: 'ex-5-1-2',
          type: 'translation',
          question: 'Translate: ⲟⲩⲣⲱⲙⲓ',
          questionCoptic: 'ⲟⲩⲣⲱⲙⲓ',
          correctAnswer: 'a man',
          options: ['a man', 'the man', 'men', 'the men'],
          explanation: 'ⲟⲩⲣⲱⲙⲓ = ⲟⲩ (a) + ⲣⲱⲙⲓ (man) = "a man"'
        },
        {
          id: 'ex-5-1-3',
          type: 'matching',
          question: 'Match definite and indefinite',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲡⲓⲣⲱⲙⲓ', english: 'the man' },
            { coptic: 'ⲟⲩⲣⲱⲙⲓ', english: 'a man' },
            { coptic: 'ϯϩⲓⲙⲓ', english: 'the woman' },
            { coptic: 'ⲟⲩϩⲓⲙⲓ', english: 'a woman' }
          ]
        },
        {
          id: 'ex-5-1-4',
          type: 'multiple_choice',
          question: 'How do you say "a book"?',
          correctAnswer: 'ⲟⲩϫⲱⲙ',
          options: ['ⲟⲩϫⲱⲙ', 'ⲡⲓϫⲱⲙ', 'ϯϫⲱⲙ', 'ⲛⲓϫⲱⲙ'],
          explanation: 'ⲟⲩϫⲱⲙ (oujōm) = "a book"'
        },
        {
          id: 'ex-5-1-5',
          type: 'fill_blank',
          question: 'Complete: ___ ⲥⲱⲛⲓ = a sister',
          correctAnswer: 'ⲟⲩ',
          options: ['ⲟⲩ', 'ⲡⲓ', 'ϯ', 'ⲛⲓ'],
          explanation: 'ⲟⲩ is the indefinite article meaning "a/an"'
        },
        {
          id: 'ex-5-1-6',
          type: 'multiple_choice',
          question: 'What does ⲟⲩⲙⲁⲩ mean?',
          questionCoptic: 'ⲟⲩⲙⲁⲩ',
          correctAnswer: 'a mother',
          options: ['a mother', 'the mother', 'mothers', 'the mothers'],
          explanation: 'ⲟⲩⲙⲁⲩ (oumau) = "a mother"'
        },
        {
          id: 'ex-5-1-7',
          type: 'multiple_choice',
          question: 'How do you say "a house"?',
          correctAnswer: 'ⲟⲩϩⲓ',
          options: ['ⲟⲩϩⲓ', 'ⲡⲓϩⲓ', 'ϯϩⲓ', 'ⲛⲓϩⲓ'],
          explanation: 'ⲟⲩϩⲓ (ouhi) = "a house"'
        },
        {
          id: 'ex-5-1-8',
          type: 'sentence_building',
          question: 'Build: "a father"',
          correctAnswer: 'ⲟⲩⲓⲱⲧ',
          wordBank: ['ⲟⲩ', 'ⲓⲱⲧ', 'ⲡⲓ', 'ϯ'],
          explanation: 'ⲟⲩⲓⲱⲧ = ⲟⲩ (a) + ⲓⲱⲧ (father)'
        },
        {
          id: 'ex-5-1-9',
          type: 'translation',
          question: 'Translate to Coptic: "a child"',
          correctAnswer: 'ⲟⲩⲁⲗⲟⲩ',
          options: ['ⲟⲩⲁⲗⲟⲩ', 'ⲡⲓⲁⲗⲟⲩ', 'ⲛⲓⲁⲗⲟⲩ', 'ϯⲁⲗⲟⲩ'],
          explanation: 'ⲟⲩⲁⲗⲟⲩ = ⲟⲩ (a) + ⲁⲗⲟⲩ (child/boy)'
        },
        {
          id: 'ex-5-1-10',
          type: 'sentence_building',
          question: 'Build: "a sister"',
          correctAnswer: 'ⲟⲩⲥⲱⲛⲓ',
          wordBank: ['ⲟⲩ', 'ⲥⲱⲛⲓ', 'ϯ', 'ⲛⲓ'],
          explanation: 'ⲟⲩⲥⲱⲛⲓ = ⲟⲩ (a) + ⲥⲱⲛⲓ (sister)'
        }
      ]
    },
    {
      id: 'lesson-5-2',
      unitId: 'unit-5',
      title: 'Indefinite Article (Plural)',
      description: 'Learn "some" in Coptic: ϩⲁⲛ',
      order: 2,
      xpReward: 20,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-5-2-1',
          type: 'multiple_choice',
          question: 'What is the plural indefinite article?',
          correctAnswer: 'ϩⲁⲛ',
          options: ['ϩⲁⲛ', 'ⲟⲩ', 'ⲛⲓ', 'ⲡⲓ'],
          explanation: 'ϩⲁⲛ (han) means "some" or indefinite plural'
        },
        {
          id: 'ex-5-2-2',
          type: 'translation',
          question: 'Translate: ϩⲁⲛⲣⲱⲙⲓ',
          questionCoptic: 'ϩⲁⲛⲣⲱⲙⲓ',
          correctAnswer: 'some men',
          options: ['some men', 'the men', 'a man', 'men'],
          explanation: 'ϩⲁⲛⲣⲱⲙⲓ = ϩⲁⲛ (some) + ⲣⲱⲙⲓ (men) = "some men"'
        },
        {
          id: 'ex-5-2-3',
          type: 'matching',
          question: 'Match plural indefinite articles',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ϩⲁⲛⲣⲱⲙⲓ', english: 'some men' },
            { coptic: 'ϩⲁⲛϩⲓⲙⲓ', english: 'some women' },
            { coptic: 'ϩⲁⲛⲥⲱⲛⲓ', english: 'some sisters' },
            { coptic: 'ϩⲁⲛⲥⲛⲏⲟⲩ', english: 'some brothers' }
          ]
        },
        {
          id: 'ex-5-2-4',
          type: 'multiple_choice',
          question: 'How do you say "some books"?',
          correctAnswer: 'ϩⲁⲛϫⲱⲙ',
          options: ['ϩⲁⲛϫⲱⲙ', 'ⲛⲓϫⲱⲙ', 'ⲟⲩϫⲱⲙ', 'ⲡⲓϫⲱⲙ'],
          explanation: 'ϩⲁⲛϫⲱⲙ (hanjōm) = "some books"'
        },
        {
          id: 'ex-5-2-5',
          type: 'fill_blank',
          question: 'Complete: ___ ⲥⲱⲛⲓ = some sisters',
          correctAnswer: 'ϩⲁⲛ',
          options: ['ϩⲁⲛ', 'ⲛⲓ', 'ⲟⲩ', 'ϯ'],
          explanation: 'ϩⲁⲛ is the plural indefinite article'
        },
        {
          id: 'ex-5-2-6',
          type: 'multiple_choice',
          question: 'What does ϩⲁⲛⲁⲗⲟⲩ mean?',
          questionCoptic: 'ϩⲁⲛⲁⲗⲟⲩ',
          correctAnswer: 'some boys',
          options: ['some boys', 'the boys', 'a boy', 'boys'],
          explanation: 'ϩⲁⲛⲁⲗⲟⲩ (hanalou) = "some boys"'
        },
        {
          id: 'ex-5-2-7',
          type: 'matching',
          question: 'Match definite vs indefinite plural',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲛⲓⲣⲱⲙⲓ', english: 'the men' },
            { coptic: 'ϩⲁⲛⲣⲱⲙⲓ', english: 'some men' },
            { coptic: 'ⲛⲓϫⲱⲙ', english: 'the books' },
            { coptic: 'ϩⲁⲛϫⲱⲙ', english: 'some books' }
          ]
        },
        {
          id: 'ex-5-2-8',
          type: 'sentence_building',
          question: 'Build: "some fathers"',
          correctAnswer: 'ϩⲁⲛⲓⲱⲧ',
          wordBank: ['ϩⲁⲛ', 'ⲓⲱⲧ', 'ⲛⲓ', 'ⲟⲩ'],
          explanation: 'ϩⲁⲛⲓⲱⲧ = ϩⲁⲛ (some) + ⲓⲱⲧ (fathers)'
        },
        {
          id: 'ex-5-2-9',
          type: 'translation',
          question: 'Translate to Coptic: "some children"',
          correctAnswer: 'ϩⲁⲛⲁⲗⲟⲩ',
          options: ['ϩⲁⲛⲁⲗⲟⲩ', 'ⲛⲓⲁⲗⲟⲩ', 'ⲟⲩⲁⲗⲟⲩ', 'ⲡⲓⲁⲗⲟⲩ'],
          explanation: 'ϩⲁⲛⲁⲗⲟⲩ = ϩⲁⲛ (some) + ⲁⲗⲟⲩ (children)'
        },
        {
          id: 'ex-5-2-10',
          type: 'sentence_building',
          question: 'Build: "some mothers"',
          correctAnswer: 'ϩⲁⲛⲙⲁⲩ',
          wordBank: ['ϩⲁⲛ', 'ⲙⲁⲩ', 'ⲛⲓ', 'ϯ'],
          explanation: 'ϩⲁⲛⲙⲁⲩ = ϩⲁⲛ (some) + ⲙⲁⲩ (mothers)'
        }
      ]
    },
    {
      id: 'lesson-5-3',
      unitId: 'unit-5',
      title: 'Noun Gender Recognition',
      description: 'Learn to identify masculine and feminine nouns',
      order: 3,
      xpReward: 20,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-5-3-1',
          type: 'multiple_choice',
          question: 'What gender is ⲣⲱⲙⲓ (man)?',
          correctAnswer: 'Masculine',
          options: ['Masculine', 'Feminine', 'Neutral', 'Plural'],
          explanation: 'ⲣⲱⲙⲓ is masculine (uses Ⲡⲓ)'
        },
        {
          id: 'ex-5-3-2',
          type: 'multiple_choice',
          question: 'What gender is ϩⲓⲙⲓ (woman)?',
          correctAnswer: 'Feminine',
          options: ['Feminine', 'Masculine', 'Neutral', 'Plural'],
          explanation: 'ϩⲓⲙⲓ is feminine (uses Ϯ)'
        },
        {
          id: 'ex-5-3-3',
          type: 'matching',
          question: 'Match nouns to genders',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲓⲱⲧ (father)', english: 'Masculine' },
            { coptic: 'ⲙⲁⲩ (mother)', english: 'Feminine' },
            { coptic: 'ϣⲏⲣⲓ (son)', english: 'Masculine' },
            { coptic: 'ⲥⲱⲛⲓ (sister)', english: 'Feminine' }
          ]
        },
        {
          id: 'ex-5-3-4',
          type: 'multiple_choice',
          question: 'What gender is ϫⲱⲙ (book)?',
          correctAnswer: 'Masculine',
          options: ['Masculine', 'Feminine', 'Neutral', 'Plural'],
          explanation: 'ϫⲱⲙ is masculine (ⲡⲓϫⲱⲙ = the book)'
        },
        {
          id: 'ex-5-3-5',
          type: 'multiple_choice',
          question: 'What gender is ϩⲓ (house)?',
          correctAnswer: 'Feminine',
          options: ['Feminine', 'Masculine', 'Neutral', 'Plural'],
          explanation: 'ϩⲓ is feminine (ϯϩⲓ = the house)'
        },
        {
          id: 'ex-5-3-6',
          type: 'fill_blank',
          question: 'Complete with correct article: ___ ϩⲓⲙⲓ',
          correctAnswer: 'ϯ',
          options: ['ϯ', 'ⲡⲓ', 'ⲛⲓ', 'ⲟⲩ'],
          explanation: 'ϩⲓⲙⲓ is feminine, so uses Ϯ (the)'
        },
        {
          id: 'ex-5-3-7',
          type: 'fill_blank',
          question: 'Complete with correct article: ___ ⲣⲱⲙⲓ',
          correctAnswer: 'ⲡⲓ',
          options: ['ⲡⲓ', 'ϯ', 'ⲛⲓ', 'ⲟⲩ'],
          explanation: 'ⲣⲱⲙⲓ is masculine, so uses Ⲡⲓ (the)'
        },
        {
          id: 'ex-5-3-8',
          type: 'matching',
          question: 'Match more nouns to genders',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲧⲣⲁⲡⲉⲍⲁ (table)', english: 'Feminine' },
            { coptic: 'ⲃⲁⲗ (eye)', english: 'Masculine' },
            { coptic: 'ⲁⲗⲟⲩ (boy)', english: 'Masculine' },
            { coptic: 'ϣⲉⲣⲓ (daughter)', english: 'Feminine' }
          ]
        },
        {
          id: 'ex-5-3-9',
          type: 'multiple_choice',
          question: 'Which article goes with ⲙⲁⲩ (mother)?',
          correctAnswer: 'ϯ',
          options: ['ϯ', 'ⲡⲓ', 'ⲛⲓ', 'ⲫ'],
          explanation: 'ⲙⲁⲩ (mother) is feminine, uses Ϯ → ϯⲙⲁⲩ'
        },
        {
          id: 'ex-5-3-10',
          type: 'multiple_choice',
          question: 'Which article goes with ⲓⲱⲧ (father)?',
          correctAnswer: 'ⲫ',
          options: ['ⲫ', 'ϯ', 'ⲑ', 'ⲛⲓ'],
          explanation: 'ⲓⲱⲧ (father) is masculine, uses Ⲫ before vowel → ⲫⲓⲱⲧ'
        }
      ]
    },
    {
      id: 'lesson-5-4',
      unitId: 'unit-5',
      title: 'Indefinite Article Special Cases',
      description: 'When to omit indefinite articles, special usage patterns',
      order: 4,
      xpReward: 25,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-5-4-1',
          type: 'multiple_choice',
          question: 'Which sentence correctly uses NO article for a profession?',
          correctAnswer: 'ⲁⲛⲟⲕ ⲟⲩⲣⲉϥϯⲥ̀ⲃⲱ (I am teacher)',
          options: ['ⲁⲛⲟⲕ ⲟⲩⲣⲉϥϯⲥ̀ⲃⲱ (I am teacher)', 'ⲁⲛⲟⲕ ⲟⲩⲟⲩⲣⲉϥϯⲥ̀ⲃⲱ', 'ⲁⲛⲟⲕ ⲡⲓⲣⲉϥϯⲥ̀ⲃⲱ', 'ⲁⲛⲟⲕ ⲡⲉ ⲟⲩⲣⲉϥϯⲥ̀ⲃⲱ'],
          explanation: 'After copula predicates (ⲁⲛⲟⲕ ⲟⲩ- = I am a-), professions often omit the article: "I am teacher"'
        },
        {
          id: 'ex-5-4-2',
          type: 'translation',
          question: 'Translate: ⲙ̀ⲙⲟⲛ ⲱⲓⲕ',
          questionCoptic: 'ⲙ̀ⲙⲟⲛ ⲱⲓⲕ',
          correctAnswer: 'there is no bread',
          options: ['there is no bread', 'not a bread', 'the bread is not', 'without bread'],
          explanation: 'ⲙ̀ⲙⲟⲛ ⲱⲓⲕ = there is no bread (negative existential omits article)'
        },
        {
          id: 'ex-5-4-3',
          type: 'matching',
          question: 'Match usage patterns',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲟⲩⲟⲛ ⲟⲩⲣⲱⲙⲓ', english: 'there is a man (with article)' },
            { coptic: 'ⲙ̀ⲙⲟⲛ ⲣⲱⲙⲓ', english: 'there is no man (no article)' },
            { coptic: 'ϧⲉⲛ ⲟⲩⲣⲁϣⲓ', english: 'in joy (abstract - with article)' },
            { coptic: 'ⲉ̀ⲃⲟⲗ ϧⲉⲛ ⲟⲩⲙⲉⲑⲙⲏⲓ', english: 'in truth (prepositional - with article)' }
          ]
        },
        {
          id: 'ex-5-4-4',
          type: 'fill_blank',
          question: 'Complete negative: ⲙ̀ⲙⲟⲛ ___ ⲙⲱⲟⲩ = there is no water',
          correctAnswer: 'ⲙⲱⲟⲩ',
          options: ['ⲙⲱⲟⲩ', 'ⲟⲩⲙⲱⲟⲩ', 'ⲡⲓⲙⲱⲟⲩ', 'ϩⲁⲛⲙⲱⲟⲩ'],
          explanation: 'In negatives (ⲙ̀ⲙⲟⲛ), the noun typically has NO article'
        },
        {
          id: 'ex-5-4-5',
          type: 'multiple_choice',
          question: 'Which is correct for \"He has no money\"?',
          correctAnswer: 'ⲙ̀ⲙⲟⲛ ϩⲁⲧ ⲙ̀ⲙⲟϥ',
          options: ['ⲙ̀ⲙⲟⲛ ϩⲁⲧ ⲙ̀ⲙⲟϥ', 'ⲙ̀ⲙⲟⲛ ⲟⲩϩⲁⲧ ⲙ̀ⲙⲟϥ', 'ⲙ̀ⲙⲟⲛ ⲡⲓϩⲁⲧ ⲙ̀ⲙⲟϥ', 'ⲟⲩⲟⲛ ⲙ̀ⲙⲟⲛ ϩⲁⲧ'],
          explanation: 'ⲙ̀ⲙⲟⲛ ϩⲁⲧ ⲙ̀ⲙⲟϥ = he has no money (no article in negative possession)'
        },
        {
          id: 'ex-5-4-6',
          type: 'translation',
          question: 'Translate: ⲁⲛⲟⲕ ⲟⲩⲭ̀ⲣⲓⲥⲧⲓⲁⲛⲟⲥ',
          questionCoptic: 'ⲁⲛⲟⲕ ⲟⲩⲭ̀ⲣⲓⲥⲧⲓⲁⲛⲟⲥ',
          correctAnswer: 'I am a Christian',
          options: ['I am a Christian', 'I am the Christian', 'I have Christian', 'A Christian I am'],
          explanation: 'ⲁⲛⲟⲕ ⲟⲩⲭ̀ⲣⲓⲥⲧⲓⲁⲛⲟⲥ = I am a Christian (copula + indefinite article)'
        },
        {
          id: 'ex-5-4-7',
          type: 'matching',
          question: 'Match mass nouns (uncountable)',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲙⲱⲟⲩ', english: 'water (no article for generic)' },
            { coptic: 'ⲟⲩⲙⲱⲟⲩ', english: 'some water (partitive)' },
            { coptic: 'ⲱⲓⲕ', english: 'bread (generic)' },
            { coptic: 'ⲟⲩⲱⲓⲕ', english: 'a bread/loaf (specific)' }
          ]
        },
        {
          id: 'ex-5-4-8',
          type: 'multiple_choice',
          question: 'How do you say \"Give me water\" (generic)?',
          correctAnswer: 'Ⲙⲟⲓ ⲛⲏⲓ ⲛ̀ⲙⲱⲟⲩ',
          options: ['Ⲙⲟⲓ ⲛⲏⲓ ⲛ̀ⲙⲱⲟⲩ', 'Ⲙⲟⲓ ⲛⲏⲓ ⲛ̀ⲟⲩⲙⲱⲟⲩ', 'Ⲙⲟⲓ ⲛⲏⲓ ⲙ̀ⲡⲓⲙⲱⲟⲩ', 'Ⲙⲟⲓ ⲙ̀ⲙⲱⲟⲩ'],
          explanation: 'Ⲙⲟⲓ ⲛⲏⲓ ⲛ̀ⲙⲱⲟⲩ = give me water (ⲛ̀ = of, generic mass noun, no article)'
        },
        {
          id: 'ex-5-4-9',
          type: 'sentence_building',
          question: 'Build: \"I am not a thief\" (ⲥⲟⲛⲓ = thief)',
          correctAnswer: 'ⲙ̀ⲙⲟⲓ ⲁⲛ ⲛ̀ⲥⲟⲛⲓ',
          wordBank: ['ⲙ̀ⲙⲟⲓ', 'ⲁⲛ', 'ⲛ̀', 'ⲥⲟⲛⲓ'],
          explanation: 'ⲙ̀ⲙⲟⲓ ⲁⲛ ⲛ̀ⲥⲟⲛⲓ = I am not (a) thief (negative predicate, article often omitted)'
        },
        {
          id: 'ex-5-4-10',
          type: 'translation',
          question: 'Translate: ⲉϣϫⲉ ⲟⲩⲟⲛ ⲣⲱⲙⲓ',
          questionCoptic: 'ⲉϣϫⲉ ⲟⲩⲟⲛ ⲣⲱⲙⲓ',
          correctAnswer: 'if there is anyone/a person',
          options: ['if there is anyone/a person', 'if there is the man', 'if a man exists', 'when there is a man'],
          explanation: 'ⲉϣϫⲉ ⲟⲩⲟⲛ ⲣⲱⲙⲓ = if there is (a) person (conditional, article optional)'
        }
      ]
    },
    {
      id: 'lesson-5-5',
      unitId: 'unit-5',
      title: 'Noun Pluralization Patterns',
      description: 'How to form plurals in Bohairic Coptic',
      order: 5,
      xpReward: 25,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-5-5-1',
          type: 'multiple_choice',
          question: 'What is the plural of ⲣⲱⲙⲓ (man)?',
          correctAnswer: 'ⲣⲱⲙⲓ (same form)',
          options: ['ⲣⲱⲙⲓ (same form)', 'ⲣⲱⲙⲓⲥ', 'ⲣⲱⲙⲉⲛ', 'ⲣⲱⲙⲱⲛ'],
          explanation: 'Most Coptic nouns have SAME form for singular and plural: ⲣⲱⲙⲓ = man OR men (context/article determines number)'
        },
        {
          id: 'ex-5-5-2',
          type: 'matching',
          question: 'Match articles showing singular vs plural',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲡⲓⲣⲱⲙⲓ', english: 'the man (singular)' },
            { coptic: 'ⲛⲓⲣⲱⲙⲓ', english: 'the men (plural)' },
            { coptic: 'ⲟⲩⲣⲱⲙⲓ', english: 'a man (singular)' },
            { coptic: 'ϩⲁⲛⲣⲱⲙⲓ', english: 'some men (plural)' }
          ]
        },
        {
          id: 'ex-5-5-3',
          type: 'translation',
          question: 'How do you know ⲛⲓϫⲱⲙ is plural?',
          questionCoptic: 'ⲛⲓϫⲱⲙ',
          correctAnswer: 'Because of the article Ⲛⲓ (the plural)',
          options: ['Because of the article Ⲛⲓ (the plural)', 'The word ϫⲱⲙ changes form', 'It has a plural ending', 'The vowel changes'],
          explanation: 'ⲛⲓϫⲱⲙ = the books - Ⲛⲓ shows it\'s plural, ϫⲱⲙ stays the same'
        },
        {
          id: 'ex-5-5-4',
          type: 'fill_blank',
          question: 'Complete plural: ___ ϩⲓⲙⲓ = the women',
          correctAnswer: 'ⲛⲓ',
          options: ['ⲛⲓ', 'ϯ', 'ϩⲁⲛ', 'ⲡⲓ'],
          explanation: 'ⲛⲓϩⲓⲙⲓ = the women (Ⲛⲓ = plural definite article, ϩⲓⲙⲓ unchanged)'
        },
        {
          id: 'ex-5-5-5',
          type: 'sentence_building',
          question: 'Build: \"some fathers\" (ⲓⲱⲧ = father)',
          correctAnswer: 'ϩⲁⲛⲓⲱⲧ',
          wordBank: ['ϩⲁⲛ', 'ⲓⲱⲧ', 'ⲛⲓ', 'ⲟⲩ'],
          explanation: 'ϩⲁⲛⲓⲱⲧ = some fathers (ϩⲁⲛ = indefinite plural, ⲓⲱⲧ stays same)'
        },
        {
          id: 'ex-5-5-6',
          type: 'multiple_choice',
          question: 'Which is the IRREGULAR plural of ⲥⲟⲛ (brother)?',
          correctAnswer: 'ⲥⲛⲏⲟⲩ',
          options: ['ⲥⲛⲏⲟⲩ', 'ⲥⲟⲛ', 'ⲥⲟⲛⲉⲛ', 'ⲥⲟⲛⲓ'],
          explanation: 'ⲥⲟⲛ (brother) → ⲥⲛⲏⲟⲩ (brothers) - IRREGULAR plural with form change'
        },
        {
          id: 'ex-5-5-7',
          type: 'matching',
          question: 'Match irregular plurals',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲥⲟⲛ → ⲥⲛⲏⲟⲩ', english: 'brother → brothers' },
            { coptic: 'ⲃⲁⲗ → ⲃⲁⲗ', english: 'eye → eyes (same)' },
            { coptic: 'ϫⲓϫ → ϫⲓϫ', english: 'hand → hands (same)' },
            { coptic: 'ⲁⲗⲟⲩ → ⲁⲗⲱⲟⲩⲓ̀', english: 'boy → boys (irregular)' }
          ]
        },
        {
          id: 'ex-5-5-8',
          type: 'translation',
          question: 'Translate: ⲛⲓⲥⲛⲏⲟⲩ',
          questionCoptic: 'ⲛⲓⲥⲛⲏⲟⲩ',
          correctAnswer: 'the brothers',
          options: ['the brothers', 'the brother', 'some brothers', 'a brother'],
          explanation: 'ⲛⲓⲥⲛⲏⲟⲩ = the brothers (Ⲛⲓ + ⲥⲛⲏⲟⲩ irregular plural of ⲥⲟⲛ)'
        },
        {
          id: 'ex-5-5-9',
          type: 'multiple_choice',
          question: 'How do you make \"the houses\" from ϩⲓ (house)?',
          correctAnswer: 'ⲛⲓϩⲓ (use plural article)',
          options: ['ⲛⲓϩⲓ (use plural article)', 'ϯϩⲓⲟⲩ (add ending)', 'ϩⲓⲱⲟⲩ (change form)', 'ϩⲓⲛⲓ (combine)'],
          explanation: 'ⲛⲓϩⲓ = the houses (just change article from Ϯ to Ⲛⲓ, noun stays ϩⲓ)'
        },
        {
          id: 'ex-5-5-10',
          type: 'sentence_building',
          question: 'Build: \"the eyes\" (ⲃⲁⲗ = eye)',
          correctAnswer: 'ⲛⲓⲃⲁⲗ',
          wordBank: ['ⲛⲓ', 'ⲃⲁⲗ', 'ⲡⲓ', 'ϩⲁⲛ'],
          explanation: 'ⲛⲓⲃⲁⲗ = the eyes (plural article Ⲛⲓ + ⲃⲁⲗ unchanged)'
        }
      ]
    }
  ]
};

export default unit5;
