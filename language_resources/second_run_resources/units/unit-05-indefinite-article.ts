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
    }
  ]
};

export default unit5;
