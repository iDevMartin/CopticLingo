import { Unit } from '../../types';

// UNIT 3: ARTICLES & GRAMMAR BASICS
// Corrected for Bohairic dialect consistency
// Article system based on OUTLINE OF BOHAIRIC COPTIC MORPHOLOGY

const unit3: Unit = {
  id: 'unit-3',
  title: 'Articles & Grammar Basics',
  description: 'Learn definite and indefinite articles',
  order: 3,
  color: '#00CD9C',
  lessons: [
    {
      id: 'lesson-3-1',
      unitId: 'unit-3',
      title: 'Definite Articles (Masculine)',
      description: 'Learn "the" in Coptic: Ⲡⲓ, Ⲫ, Ⲡ',
      order: 1,
      xpReward: 20,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-3-1-1',
          type: 'multiple_choice',
          question: 'What is the masculine definite article?',
          correctAnswer: 'Ⲡⲓ',
          options: ['Ⲡⲓ', 'Ϯ', 'Ⲛⲓ', 'ⲟⲩ'],
          explanation: 'Ⲡⲓ (pi) is the masculine singular definite article "the"'
        },
        {
          id: 'ex-3-1-2',
          type: 'multiple_choice',
          question: 'Which form is used before voiced consonants (β, λ, μ, ν, ρ)?',
          correctAnswer: 'Ⲫ-',
          options: ['Ⲫ-', 'Ⲡⲓ-', 'Ϯ-', 'Ⲛⲓ-'],
          explanation: 'Ⲫ- (ph-) is used before voiced consonants by phonological rule (Π→Φ)'
        },
        {
          id: 'ex-3-1-3',
          type: 'translation',
          question: 'Translate: ⲡⲓⲣⲱⲙⲓ',
          questionCoptic: 'ⲡⲓⲣⲱⲙⲓ',
          correctAnswer: 'the man',
          options: ['the man', 'a man', 'the woman', 'man'],
          explanation: 'ⲡⲓⲣⲱⲙⲓ = Ⲡⲓ (the, masc.) + ⲣⲱⲙⲓ (man) = "the man"'
        },
        {
          id: 'ex-3-1-4',
          type: 'matching',
          question: 'Match the phrases',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲡⲓⲣⲱⲙⲓ', english: 'the man' },
            { coptic: 'ⲡⲓϣⲏⲣⲓ', english: 'the son' },
            { coptic: 'ⲫⲓⲱⲧ', english: 'the father' },
            { coptic: 'ⲡⲓⲃⲁⲗ', english: 'the eye' }
          ]
        },
        {
          id: 'ex-3-1-5',
          type: 'multiple_choice',
          question: 'How do you say "the book"?',
          correctAnswer: 'ⲡⲓϫⲱⲙ',
          options: ['ⲡⲓϫⲱⲙ', 'ϯϫⲱⲙ', 'ⲛⲓϫⲱⲙ', 'ⲟⲩϫⲱⲙ'],
          explanation: 'ⲡⲓϫⲱⲙ (pijōm) means "the book"'
        },
        {
          id: 'ex-3-1-6',
          type: 'sentence_building',
          question: 'Build: "the father"',
          correctAnswer: 'ⲫⲓⲱⲧ',
          wordBank: ['ⲫ', 'ⲓⲱⲧ', 'ⲙⲁⲩ', 'ⲛⲓ'],
          explanation: 'ⲫⲓⲱⲧ = Ⲫ (the, masc. before vowel - Π→Φ) + ⲓⲱⲧ (father)'
        },
        {
          id: 'ex-3-1-7',
          type: 'multiple_choice',
          question: 'Which is correct for "the house"?',
          correctAnswer: 'ϯϩⲓ',
          options: ['ϯϩⲓ', 'ⲡⲓϩⲓ', 'ⲫϩⲓ', 'ⲡϩⲓ'],
          explanation: 'ϯϩⲓ (tihi) = "the house" (ϩⲓ is FEMININE, so uses Ϯ- not Ⲡⲓ-!)'
        },
        {
          id: 'ex-3-1-8',
          type: 'fill_blank',
          question: 'Complete: ___ ⲣⲱⲙⲓ = the man',
          correctAnswer: 'ⲡⲓ',
          options: ['ⲡⲓ', 'ϯ', 'ⲛⲓ', 'ⲟⲩ'],
          explanation: 'Ⲡⲓ is the masculine definite article'
        },
        {
          id: 'ex-3-1-9',
          type: 'sentence_building',
          question: 'Build: "the son"',
          correctAnswer: 'ⲡⲓϣⲏⲣⲓ',
          wordBank: ['ⲡⲓ', 'ϣⲏⲣⲓ', 'ϯ', 'ⲙⲁⲩ'],
          explanation: 'ⲡⲓϣⲏⲣⲓ = Ⲡⲓ (the, masc.) + ϣⲏⲣⲓ (son) - NOTE: ϣ not ⲥ!'
        },
        {
          id: 'ex-3-1-10',
          type: 'translation',
          question: 'Translate to English: ⲡⲓϫⲱⲙ',
          questionCoptic: 'ⲡⲓϫⲱⲙ',
          correctAnswer: 'the book',
          options: ['the book', 'a book', 'book', 'the books'],
          explanation: 'ⲡⲓϫⲱⲙ means "the book"'
        }
      ]
    },
    {
      id: 'lesson-3-2',
      unitId: 'unit-3',
      title: 'Definite Articles (Feminine)',
      description: 'Learn feminine "the": Ϯ, Ⲑ',
      order: 2,
      xpReward: 20,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-3-2-1',
          type: 'multiple_choice',
          question: 'What is the feminine definite article?',
          correctAnswer: 'Ϯ',
          options: ['Ⲡⲓ', 'Ϯ', 'Ⲛⲓ', 'ⲟⲩ'],
          explanation: 'Ϯ (ti) is the feminine singular definite article "the"'
        },
        {
          id: 'ex-3-2-2',
          type: 'multiple_choice',
          question: 'Which form is used before voiced consonants?',
          correctAnswer: 'Ⲑ-',
          options: ['Ⲑ-', 'Ϯ-', 'Ⲡⲓ-', 'Ⲛⲓ-'],
          explanation: 'Ⲑ- (th-) is used before voiced consonants (Τ→Θ rule)'
        },
        {
          id: 'ex-3-2-3',
          type: 'translation',
          question: 'Translate: ϯϩⲓⲙⲓ',
          questionCoptic: 'ϯϩⲓⲙⲓ',
          correctAnswer: 'the woman',
          options: ['the woman', 'a woman', 'woman', 'the women'],
          explanation: 'ϯϩⲓⲙⲓ = Ϯ (the, fem.) + ϩⲓⲙⲓ (woman) = "the woman"'
        },
        {
          id: 'ex-3-2-4',
          type: 'matching',
          question: 'Match feminine articles',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ϯϩⲓⲙⲓ', english: 'the woman' },
            { coptic: 'ϯⲙⲁⲩ', english: 'the mother' },
            { coptic: 'ϯⲧⲣⲁⲡⲉⲍⲁ', english: 'the table' },
            { coptic: 'ϯϩⲓ', english: 'the house' }
          ]
        },
        {
          id: 'ex-3-2-5',
          type: 'multiple_choice',
          question: 'How do you say "the sister"?',
          correctAnswer: 'ϯⲥⲱⲛⲓ',
          options: ['ϯⲥⲱⲛⲓ', 'ⲡⲓⲥⲱⲛⲓ', 'ⲛⲓⲥⲱⲛⲓ', 'ⲟⲩⲥⲱⲛⲓ'],
          explanation: 'ϯⲥⲱⲛⲓ (tisōni) = "the sister"'
        },
        {
          id: 'ex-3-2-6',
          type: 'multiple_choice',
          question: 'Which is correct for "the mother"?',
          correctAnswer: 'ϯⲙⲁⲩ',
          options: ['ϯⲙⲁⲩ', 'ⲑⲙⲁⲩ', 'ⲡⲓⲙⲁⲩ', 'ⲛⲓⲙⲁⲩ'],
          explanation: 'ϯⲙⲁⲩ (timau) = Ϯ (the, fem.) + ⲙⲁⲩ (mother)'
        },
        {
          id: 'ex-3-2-7',
          type: 'fill_blank',
          question: 'Complete: ___ ϩⲓⲙⲓ = the woman',
          correctAnswer: 'ϯ',
          options: ['ϯ', 'ⲡⲓ', 'ⲛⲓ', 'ⲟⲩ'],
          explanation: 'Ϯ is the feminine definite article'
        },
        {
          id: 'ex-3-2-8',
          type: 'multiple_choice',
          question: 'How do you say "the daughter"?',
          correctAnswer: 'ϯϣⲉⲣⲓ',
          options: ['ϯϣⲉⲣⲓ', 'ⲡⲓϣⲉⲣⲓ', 'ⲛⲓϣⲉⲣⲓ', 'ⲟⲩϣⲉⲣⲓ'],
          explanation: 'ϯϣⲉⲣⲓ (tisheri) = "the daughter"'
        },
        {
          id: 'ex-3-2-9',
          type: 'sentence_building',
          question: 'Build: "the mother"',
          correctAnswer: 'ϯⲙⲁⲩ',
          wordBank: ['ϯ', 'ⲙⲁⲩ', 'ⲡⲓ', 'ⲓⲱⲧ'],
          explanation: 'ϯⲙⲁⲩ = Ϯ (the, fem.) + ⲙⲁⲩ (mother)'
        },
        {
          id: 'ex-3-2-10',
          type: 'translation',
          question: 'Translate to Coptic: "the sister"',
          correctAnswer: 'ϯⲥⲱⲛⲓ',
          options: ['ϯⲥⲱⲛⲓ', 'ⲡⲓⲥⲱⲛⲓ', 'ⲑⲥⲱⲛⲓ', 'ⲛⲓⲥⲱⲛⲓ'],
          explanation: 'ϯⲥⲱⲛⲓ = Ϯ (the, fem.) + ⲥⲱⲛⲓ (sister)'
        }
      ]
    },
    {
      id: 'lesson-3-3',
      unitId: 'unit-3',
      title: 'Definite Article (Plural)',
      description: 'Learn plural "the": Ⲛⲓ',
      order: 3,
      xpReward: 20,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-3-3-1',
          type: 'multiple_choice',
          question: 'What is the plural definite article?',
          correctAnswer: 'Ⲛⲓ',
          options: ['Ⲡⲓ', 'Ϯ', 'Ⲛⲓ', 'ⲟⲩ'],
          explanation: 'Ⲛⲓ (ni) is the plural definite article "the" (for both genders)'
        },
        {
          id: 'ex-3-3-2',
          type: 'translation',
          question: 'Translate: ⲛⲓⲣⲱⲙⲓ',
          questionCoptic: 'ⲛⲓⲣⲱⲙⲓ',
          correctAnswer: 'the men',
          options: ['the men', 'the man', 'men', 'a man'],
          explanation: 'ⲛⲓⲣⲱⲙⲓ = Ⲛⲓ (the, plural) + ⲣⲱⲙⲓ (men) = "the men"'
        },
        {
          id: 'ex-3-3-3',
          type: 'matching',
          question: 'Match plural articles',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲛⲓⲣⲱⲙⲓ', english: 'the men' },
            { coptic: 'ⲛⲓϩⲓⲙⲓ', english: 'the women' },
            { coptic: 'ⲛⲓⲥⲱⲛⲓ', english: 'the sisters' },
            { coptic: 'ⲛⲓⲥⲛⲏⲟⲩ', english: 'the brothers' }
          ]
        },
        {
          id: 'ex-3-3-4',
          type: 'multiple_choice',
          question: 'How do you say "the books"?',
          correctAnswer: 'ⲛⲓϫⲱⲙ',
          options: ['ⲛⲓϫⲱⲙ', 'ⲡⲓϫⲱⲙ', 'ϯϫⲱⲙ', 'ⲟⲩϫⲱⲙ'],
          explanation: 'ⲛⲓϫⲱⲙ (nijōm) = "the books"'
        },
        {
          id: 'ex-3-3-5',
          type: 'fill_blank',
          question: 'Complete: ___ ⲥⲱⲛⲓ = the sisters',
          correctAnswer: 'ⲛⲓ',
          options: ['ⲛⲓ', 'ⲡⲓ', 'ϯ', 'ⲟⲩ'],
          explanation: 'Ⲛⲓ is the plural definite article (used for both masc. & fem. plurals)'
        },
        {
          id: 'ex-3-3-6',
          type: 'multiple_choice',
          question: 'How do you say "the eyes"?',
          correctAnswer: 'ⲛⲓⲃⲁⲗ',
          options: ['ⲛⲓⲃⲁⲗ', 'ⲡⲓⲃⲁⲗ', 'ϯⲃⲁⲗ', 'ⲟⲩⲃⲁⲗ'],
          explanation: 'ⲛⲓⲃⲁⲗ (nibal) = "the eyes"'
        },
        {
          id: 'ex-3-3-7',
          type: 'multiple_choice',
          question: 'What does ⲛⲓⲁⲗⲟⲩ mean?',
          questionCoptic: 'ⲛⲓⲁⲗⲟⲩ',
          correctAnswer: 'the boys',
          options: ['the boys', 'the boy', 'boys', 'a boy'],
          explanation: 'ⲛⲓⲁⲗⲟⲩ (nialou) = "the boys"'
        },
        {
          id: 'ex-3-3-8',
          type: 'sentence_building',
          question: 'Build: "the hands"',
          correctAnswer: 'ⲛⲓϫⲓϫ',
          wordBank: ['ⲛⲓ', 'ϫⲓϫ', 'ⲡⲓ', 'ϯ'],
          explanation: 'ⲛⲓϫⲓϫ = Ⲛⲓ (the, plural) + ϫⲓϫ (hands)'
        },
        {
          id: 'ex-3-3-9',
          type: 'translation',
          question: 'Translate to Coptic: "the children"',
          correctAnswer: 'ⲛⲓⲁⲗⲟⲩ',
          options: ['ⲛⲓⲁⲗⲟⲩ', 'ⲡⲓⲁⲗⲟⲩ', 'ϯⲁⲗⲟⲩ', 'ⲟⲩⲁⲗⲟⲩ'],
          explanation: 'ⲛⲓⲁⲗⲟⲩ = Ⲛⲓ (the, plural) + ⲁⲗⲟⲩ (children/boys)'
        },
        {
          id: 'ex-3-3-10',
          type: 'sentence_building',
          question: 'Build: "the books"',
          correctAnswer: 'ⲛⲓϫⲱⲙ',
          wordBank: ['ⲛⲓ', 'ϫⲱⲙ', 'ⲡⲓ', 'ϯ'],
          explanation: 'ⲛⲓϫⲱⲙ = Ⲛⲓ (the, plural) + ϫⲱⲙ (books)'
        }
      ]
    },
    {
      id: 'lesson-3-4',
      unitId: 'unit-3',
      title: 'Indefinite Article (Singular)',
      description: 'Learn "a/an" in Coptic: ⲟⲩ',
      order: 4,
      xpReward: 20,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-3-4-1',
          type: 'multiple_choice',
          question: 'What is the indefinite article in Coptic?',
          correctAnswer: 'ⲟⲩ',
          options: ['ⲟⲩ', 'ⲡⲓ', 'ϯ', 'ⲛⲓ'],
          explanation: 'ⲟⲩ (ou) means "a" or "an" (for all genders)'
        },
        {
          id: 'ex-3-4-2',
          type: 'translation',
          question: 'Translate: ⲟⲩⲣⲱⲙⲓ',
          questionCoptic: 'ⲟⲩⲣⲱⲙⲓ',
          correctAnswer: 'a man',
          options: ['a man', 'the man', 'men', 'the men'],
          explanation: 'ⲟⲩⲣⲱⲙⲓ = ⲟⲩ (a) + ⲣⲱⲙⲓ (man) = "a man"'
        },
        {
          id: 'ex-3-4-3',
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
          id: 'ex-3-4-4',
          type: 'multiple_choice',
          question: 'How do you say "a book"?',
          correctAnswer: 'ⲟⲩϫⲱⲙ',
          options: ['ⲟⲩϫⲱⲙ', 'ⲡⲓϫⲱⲙ', 'ϯϫⲱⲙ', 'ⲛⲓϫⲱⲙ'],
          explanation: 'ⲟⲩϫⲱⲙ (oujōm) = "a book"'
        },
        {
          id: 'ex-3-4-5',
          type: 'fill_blank',
          question: 'Complete: ___ ⲥⲱⲛⲓ = a sister',
          correctAnswer: 'ⲟⲩ',
          options: ['ⲟⲩ', 'ⲡⲓ', 'ϯ', 'ⲛⲓ'],
          explanation: 'ⲟⲩ is the indefinite article meaning "a/an"'
        },
        {
          id: 'ex-3-4-6',
          type: 'multiple_choice',
          question: 'What does ⲟⲩⲙⲁⲩ mean?',
          questionCoptic: 'ⲟⲩⲙⲁⲩ',
          correctAnswer: 'a mother',
          options: ['a mother', 'the mother', 'mothers', 'the mothers'],
          explanation: 'ⲟⲩⲙⲁⲩ (oumau) = "a mother"'
        },
        {
          id: 'ex-3-4-7',
          type: 'multiple_choice',
          question: 'How do you say "a house"?',
          correctAnswer: 'ⲟⲩϩⲓ',
          options: ['ⲟⲩϩⲓ', 'ⲡⲓϩⲓ', 'ϯϩⲓ', 'ⲛⲓϩⲓ'],
          explanation: 'ⲟⲩϩⲓ (ouhi) = "a house"'
        },
        {
          id: 'ex-3-4-8',
          type: 'sentence_building',
          question: 'Build: "a father"',
          correctAnswer: 'ⲟⲩⲓⲱⲧ',
          wordBank: ['ⲟⲩ', 'ⲓⲱⲧ', 'ⲡⲓ', 'ϯ'],
          explanation: 'ⲟⲩⲓⲱⲧ = ⲟⲩ (a) + ⲓⲱⲧ (father)'
        },
        {
          id: 'ex-3-4-9',
          type: 'translation',
          question: 'Translate to Coptic: "a child"',
          correctAnswer: 'ⲟⲩⲁⲗⲟⲩ',
          options: ['ⲟⲩⲁⲗⲟⲩ', 'ⲡⲓⲁⲗⲟⲩ', 'ⲛⲓⲁⲗⲟⲩ', 'ϯⲁⲗⲟⲩ'],
          explanation: 'ⲟⲩⲁⲗⲟⲩ = ⲟⲩ (a) + ⲁⲗⲟⲩ (child/boy)'
        },
        {
          id: 'ex-3-4-10',
          type: 'sentence_building',
          question: 'Build: "a sister"',
          correctAnswer: 'ⲟⲩⲥⲱⲛⲓ',
          wordBank: ['ⲟⲩ', 'ⲥⲱⲛⲓ', 'ϯ', 'ⲛⲓ'],
          explanation: 'ⲟⲩⲥⲱⲛⲓ = ⲟⲩ (a) + ⲥⲱⲛⲓ (sister)'
        }
      ]
    },
    {
      id: 'lesson-3-5',
      unitId: 'unit-3',
      title: 'Indefinite Article (Plural)',
      description: 'Learn "some" in Coptic: ϩⲁⲛ',
      order: 5,
      xpReward: 20,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-3-5-1',
          type: 'multiple_choice',
          question: 'What is the plural indefinite article?',
          correctAnswer: 'ϩⲁⲛ',
          options: ['ϩⲁⲛ', 'ⲟⲩ', 'ⲛⲓ', 'ⲡⲓ'],
          explanation: 'ϩⲁⲛ (han) means "some" or indefinite plural'
        },
        {
          id: 'ex-3-5-2',
          type: 'translation',
          question: 'Translate: ϩⲁⲛⲣⲱⲙⲓ',
          questionCoptic: 'ϩⲁⲛⲣⲱⲙⲓ',
          correctAnswer: 'some men',
          options: ['some men', 'the men', 'a man', 'men'],
          explanation: 'ϩⲁⲛⲣⲱⲙⲓ = ϩⲁⲛ (some) + ⲣⲱⲙⲓ (men) = "some men"'
        },
        {
          id: 'ex-3-5-3',
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
          id: 'ex-3-5-4',
          type: 'multiple_choice',
          question: 'How do you say "some books"?',
          correctAnswer: 'ϩⲁⲛϫⲱⲙ',
          options: ['ϩⲁⲛϫⲱⲙ', 'ⲛⲓϫⲱⲙ', 'ⲟⲩϫⲱⲙ', 'ⲡⲓϫⲱⲙ'],
          explanation: 'ϩⲁⲛϫⲱⲙ (hanjōm) = "some books"'
        },
        {
          id: 'ex-3-5-5',
          type: 'fill_blank',
          question: 'Complete: ___ ⲥⲱⲛⲓ = some sisters',
          correctAnswer: 'ϩⲁⲛ',
          options: ['ϩⲁⲛ', 'ⲛⲓ', 'ⲟⲩ', 'ϯ'],
          explanation: 'ϩⲁⲛ is the plural indefinite article'
        },
        {
          id: 'ex-3-5-6',
          type: 'multiple_choice',
          question: 'What does ϩⲁⲛⲁⲗⲟⲩ mean?',
          questionCoptic: 'ϩⲁⲛⲁⲗⲟⲩ',
          correctAnswer: 'some boys',
          options: ['some boys', 'the boys', 'a boy', 'boys'],
          explanation: 'ϩⲁⲛⲁⲗⲟⲩ (hanalou) = "some boys"'
        },
        {
          id: 'ex-3-5-7',
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
          id: 'ex-3-5-8',
          type: 'sentence_building',
          question: 'Build: "some fathers"',
          correctAnswer: 'ϩⲁⲛⲓⲱⲧ',
          wordBank: ['ϩⲁⲛ', 'ⲓⲱⲧ', 'ⲛⲓ', 'ⲟⲩ'],
          explanation: 'ϩⲁⲛⲓⲱⲧ = ϩⲁⲛ (some) + ⲓⲱⲧ (fathers)'
        },
        {
          id: 'ex-3-5-9',
          type: 'translation',
          question: 'Translate to Coptic: "some children"',
          correctAnswer: 'ϩⲁⲛⲁⲗⲟⲩ',
          options: ['ϩⲁⲛⲁⲗⲟⲩ', 'ⲛⲓⲁⲗⲟⲩ', 'ⲟⲩⲁⲗⲟⲩ', 'ⲡⲓⲁⲗⲟⲩ'],
          explanation: 'ϩⲁⲛⲁⲗⲟⲩ = ϩⲁⲛ (some) + ⲁⲗⲟⲩ (children)'
        },
        {
          id: 'ex-3-5-10',
          type: 'sentence_building',
          question: 'Build: "some mothers"',
          correctAnswer: 'ϩⲁⲛⲙⲁⲩ',
          wordBank: ['ϩⲁⲛ', 'ⲙⲁⲩ', 'ⲛⲓ', 'ϯ'],
          explanation: 'ϩⲁⲛⲙⲁⲩ = ϩⲁⲛ (some) + ⲙⲁⲩ (mothers)'
        }
      ]
    },
    {
      id: 'lesson-3-6',
      unitId: 'unit-3',
      title: 'Simple Sentences with "to be"',
      description: 'Form basic sentences with ⲡⲉ, ⲧⲉ, ⲛⲉ',
      order: 6,
      xpReward: 20,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-3-6-1',
          type: 'multiple_choice',
          question: 'What is the masculine copula "is/am"?',
          correctAnswer: 'ⲡⲉ',
          options: ['ⲡⲉ', 'ⲧⲉ', 'ⲛⲉ', 'ⲟⲩ'],
          explanation: 'ⲡⲉ (pe) = "is/am" for masculine singular subjects/predicates'
        },
        {
          id: 'ex-3-6-2',
          type: 'translation',
          question: 'Translate: ⲁⲛⲟⲕ ⲡⲉ',
          questionCoptic: 'ⲁⲛⲟⲕ ⲡⲉ',
          correctAnswer: 'I am (male)',
          options: ['I am (male)', 'You are', 'He is', 'She is'],
          explanation: 'ⲁⲛⲟⲕ ⲡⲉ = "I am" (when speaker is male or predicate is masculine)'
        },
        {
          id: 'ex-3-6-3',
          type: 'sentence_building',
          question: 'Build: "I am a man"',
          correctAnswer: 'ⲁⲛⲟⲕ ⲟⲩⲣⲱⲙⲓ ⲡⲉ',
          wordBank: ['ⲁⲛⲟⲕ', 'ⲟⲩⲣⲱⲙⲓ', 'ⲡⲉ', 'ⲧⲉ'],
          explanation: 'ⲁⲛⲟⲕ ⲟⲩⲣⲱⲙⲓ ⲡⲉ = "I am a man" (subject + predicate + copula)'
        },
        {
          id: 'ex-3-6-4',
          type: 'multiple_choice',
          question: 'What is the feminine copula?',
          correctAnswer: 'ⲧⲉ',
          options: ['ⲧⲉ', 'ⲡⲉ', 'ⲛⲉ', 'ⲟⲩ'],
          explanation: 'ⲧⲉ (te) = "is/am" for feminine singular'
        },
        {
          id: 'ex-3-6-5',
          type: 'translation',
          question: 'Translate: ⲁⲛⲟⲕ ⲧⲉ',
          questionCoptic: 'ⲁⲛⲟⲕ ⲧⲉ',
          correctAnswer: 'I am (female)',
          options: ['I am (female)', 'You are', 'She is', 'He is'],
          explanation: 'ⲁⲛⲟⲕ ⲧⲉ = "I am" (when speaker is female or predicate is feminine)'
        },
        {
          id: 'ex-3-6-6',
          type: 'multiple_choice',
          question: 'What is the plural copula?',
          correctAnswer: 'ⲛⲉ',
          options: ['ⲛⲉ', 'ⲡⲉ', 'ⲧⲉ', 'ⲟⲩ'],
          explanation: 'ⲛⲉ (ne) = "are" for plural'
        },
        {
          id: 'ex-3-6-7',
          type: 'translation',
          question: 'Translate: ⲛ̀ⲑⲟϥ ⲡⲉ ⲡⲓⲣⲱⲙⲓ',
          questionCoptic: 'ⲛ̀ⲑⲟϥ ⲡⲉ ⲡⲓⲣⲱⲙⲓ',
          correctAnswer: 'He is the man',
          options: ['He is the man', 'She is the woman', 'I am the man', 'They are the men'],
          explanation: 'ⲛ̀ⲑⲟϥ ⲡⲉ ⲡⲓⲣⲱⲙⲓ = "He is the man"'
        },
        {
          id: 'ex-3-6-8',
          type: 'matching',
          question: 'Match the copulas',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲡⲉ', english: 'is/am (masc.)' },
            { coptic: 'ⲧⲉ', english: 'is/am (fem.)' },
            { coptic: 'ⲛⲉ', english: 'are (plural)' }
          ]
        },
        {
          id: 'ex-3-6-9',
          type: 'translation',
          question: 'Translate to Coptic: "She is a woman"',
          correctAnswer: 'ⲛ̀ⲑⲟⲥ ⲟⲩϩⲓⲙⲓ ⲧⲉ',
          options: ['ⲛ̀ⲑⲟⲥ ⲟⲩϩⲓⲙⲓ ⲧⲉ', 'ⲛ̀ⲑⲟϥ ⲟⲩⲣⲱⲙⲓ ⲡⲉ', 'ⲁⲛⲟⲕ ⲟⲩϩⲓⲙⲓ ⲧⲉ', 'ⲛ̀ⲑⲱⲟⲩ ϩⲁⲛϩⲓⲙⲓ ⲛⲉ'],
          explanation: 'ⲛ̀ⲑⲟⲥ ⲟⲩϩⲓⲙⲓ ⲧⲉ = "She is a woman"'
        },
        {
          id: 'ex-3-6-10',
          type: 'sentence_building',
          question: 'Build: "He is a father"',
          correctAnswer: 'ⲛ̀ⲑⲟϥ ⲟⲩⲓⲱⲧ ⲡⲉ',
          wordBank: ['ⲛ̀ⲑⲟϥ', 'ⲟⲩⲓⲱⲧ', 'ⲡⲉ', 'ⲧⲉ'],
          explanation: 'ⲛ̀ⲑⲟϥ ⲟⲩⲓⲱⲧ ⲡⲉ = "He is a father"'
        }
      ]
    }
  ]
};

export default unit3;
