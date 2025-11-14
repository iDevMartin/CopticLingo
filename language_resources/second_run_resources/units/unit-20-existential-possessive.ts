import { Unit } from '../../types';

// UNIT 20: EXISTENTIAL & POSSESSIVE
// Verified for Bohairic dialect consistency
// ⲟⲩⲟⲛ (there is), ⲟⲩⲟⲛⲧ- (to have), ⲙ̀ⲙⲟⲛ (there is not)

const unit20: Unit = {
  id: 'unit-20',
  title: 'Existential & Possessive',
  description: 'Express existence and possession',
  order: 20,
  color: '#FF4B4B',
  lessons: [
    {
      id: 'lesson-20-1',
      unitId: 'unit-20',
      title: 'ⲟⲩⲟⲛ - There is/There are',
      description: 'Expressing existence',
      order: 1,
      xpReward: 30,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-20-1-1',
          type: 'translation',
          question: 'Translate: ⲟⲩⲟⲛ ⲟⲩⲣⲱⲙⲓ',
          questionCoptic: 'ⲟⲩⲟⲛ ⲟⲩⲣⲱⲙⲓ',
          correctAnswer: 'There is a man',
          options: ['There is a man', 'A man is here', 'The man exists', 'There was a man'],
          explanation: 'ⲟⲩⲟⲛ (ouon) = there is/are + ⲟⲩⲣⲱⲙⲓ = a man'
        },
        {
          id: 'ex-20-1-2',
          type: 'multiple_choice',
          question: 'What does ⲟⲩⲟⲛ express?',
          correctAnswer: 'Existence (there is/there are)',
          options: ['Existence (there is/there are)', 'Possession (to have)', 'Location (to be at)', 'Identity (to be)'],
          explanation: 'ⲟⲩⲟⲛ is the existential particle meaning "there is" or "there are"'
        },
        {
          id: 'ex-20-1-3',
          type: 'matching',
          question: 'Match existential expressions',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲟⲩⲟⲛ ⲟⲩⲏⲓ', english: 'there is a house' },
            { coptic: 'ⲟⲩⲟⲛ ⲙⲱⲟⲩ', english: 'there is water' },
            { coptic: 'ⲟⲩⲟⲛ ⲛⲓⲣⲱⲙⲓ', english: 'there are people' },
            { coptic: 'ⲟⲩⲟⲛ ϩⲗⲓ', english: 'there is someone' }
          ]
        },
        {
          id: 'ex-20-1-4',
          type: 'translation',
          question: 'Translate: ⲟⲩⲟⲛ ⲟⲩⲛⲓϣϯ ⲛ̀ϧⲓⲥⲓ',
          questionCoptic: 'ⲟⲩⲟⲛ ⲟⲩⲛⲓϣϯ ⲛ̀ϧⲓⲥⲓ',
          correctAnswer: 'There is great suffering',
          options: ['There is great suffering', 'Great suffering exists', 'There was great suffering', 'The suffering is great'],
          explanation: 'ⲟⲩⲟⲛ = there is + ⲟⲩⲛⲓϣϯ ⲛ̀ϧⲓⲥⲓ = great suffering'
        },
        {
          id: 'ex-20-1-5',
          type: 'sentence_building',
          question: 'Build: "There is hope"',
          correctAnswer: 'ⲟⲩⲟⲛ ϩⲉⲗⲡⲓⲥ',
          wordBank: ['ⲟⲩⲟⲛ', 'ϩⲉⲗⲡⲓⲥ', 'ⲙ̀ⲙⲟⲛ', 'ⲟⲩϩⲉⲗⲡⲓⲥ'],
          explanation: 'ⲟⲩⲟⲛ ϩⲉⲗⲡⲓⲥ = there is hope (existential construction)'
        },
        {
          id: 'ex-20-1-6',
          type: 'fill_blank',
          question: 'Complete: ___ ⲟⲩⲁⲅⲁⲑⲟⲛ ϧⲉⲛ ⲫⲁⲓ = There is good in this',
          correctAnswer: 'ⲟⲩⲟⲛ',
          options: ['ⲟⲩⲟⲛ', 'ⲙ̀ⲙⲟⲛ', 'ⲡⲉ', 'ϥϣⲟⲡ'],
          explanation: 'ⲟⲩⲟⲛ ⲟⲩⲁⲅⲁⲑⲟⲛ ϧⲉⲛ ⲫⲁⲓ = there is good in this'
        },
        {
          id: 'ex-20-1-7',
          type: 'translation',
          question: 'Translate: ⲟⲩⲟⲛ ⲟⲩⲙⲱⲓⲧ ⲉ̀ⲫϯ',
          questionCoptic: 'ⲟⲩⲟⲛ ⲟⲩⲙⲱⲓⲧ ⲉ̀ⲫϯ',
          correctAnswer: 'There is a way to God',
          options: ['There is a way to God', 'The way to God exists', 'God has a way', 'There was a way to God'],
          explanation: 'ⲟⲩⲟⲛ ⲟⲩⲙⲱⲓⲧ = there is a way + ⲉ̀ⲫϯ = to God (Bohairic ⲫϯ not ⲫⲛⲟⲩϯ!)'
        },
        {
          id: 'ex-20-1-8',
          type: 'multiple_choice',
          question: 'How do you say "There are many books"?',
          correctAnswer: 'ⲟⲩⲟⲛ ⲟⲩⲙⲏϣ ⲛ̀ϫⲱⲙ',
          options: ['ⲟⲩⲟⲛ ⲟⲩⲙⲏϣ ⲛ̀ϫⲱⲙ', 'ⲙ̀ⲙⲟⲛ ϫⲱⲙ', 'ⲛⲓϫⲱⲙ ϣⲟⲡ', 'ⲟⲩⲟⲛ ϫⲱⲙ'],
          explanation: 'ⲟⲩⲟⲛ ⲟⲩⲙⲏϣ ⲛ̀ϫⲱⲙ = there is a multitude of books (there are many books)'
        }
      ]
    },
    {
      id: 'lesson-20-2',
      unitId: 'unit-20',
      title: 'ⲟⲩⲟⲛⲧ- To Have (Possession)',
      description: 'Expressing possession affirmatively',
      order: 2,
      xpReward: 30,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-20-2-1',
          type: 'translation',
          question: 'Translate: ⲟⲩⲟⲛⲧⲁⲓ ⲟⲩϫⲱⲙ',
          questionCoptic: 'ⲟⲩⲟⲛⲧⲁⲓ ⲟⲩϫⲱⲙ',
          correctAnswer: 'I have a book',
          options: ['I have a book', 'There is a book', 'I am a book', 'I had a book'],
          explanation: 'ⲟⲩⲟⲛⲧⲁⲓ (ouontai) = I have (ⲟⲩⲟⲛⲧ- + suffix -ⲁⲓ) + ⲟⲩϫⲱⲙ = a book'
        },
        {
          id: 'ex-20-2-2',
          type: 'multiple_choice',
          question: 'What is the possessive construction in Coptic?',
          correctAnswer: 'ⲟⲩⲟⲛⲧ- + possessive suffix',
          options: ['ⲟⲩⲟⲛⲧ- + possessive suffix', 'ⲙ̀ⲙⲟⲛⲧ- + suffix', 'ⲛⲧⲉ + pronoun', 'ⲛⲁ- + suffix'],
          explanation: 'ⲟⲩⲟⲛⲧ- (ouont-) + possessive suffixes = to have (literally "there is to me")'
        },
        {
          id: 'ex-20-2-3',
          type: 'matching',
          question: 'Match possessive forms',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲟⲩⲟⲛⲧⲁⲓ', english: 'I have' },
            { coptic: 'ⲟⲩⲟⲛⲧⲁⲕ', english: 'you (m.) have' },
            { coptic: 'ⲟⲩⲟⲛⲧⲁϥ', english: 'he has' },
            { coptic: 'ⲟⲩⲟⲛⲧⲁⲛ', english: 'we have' }
          ]
        },
        {
          id: 'ex-20-2-4',
          type: 'translation',
          question: 'Translate: ⲟⲩⲟⲛⲧⲁⲥ ⲛⲓϣⲏⲣⲓ',
          questionCoptic: 'ⲟⲩⲟⲛⲧⲁⲥ ⲛⲓϣⲏⲣⲓ',
          correctAnswer: 'She has children',
          options: ['She has children', 'She is a child', 'There are children', 'She had children'],
          explanation: 'ⲟⲩⲟⲛⲧⲁⲥ = she has (ⲟⲩⲟⲛⲧ- + -ⲁⲥ) + ⲛⲓϣⲏⲣⲓ = children (Bohairic ϣⲏⲣⲓ not ⲥⲏⲣⲓ!)'
        },
        {
          id: 'ex-20-2-5',
          type: 'sentence_building',
          question: 'Build: "You (pl.) have faith"',
          correctAnswer: 'ⲟⲩⲟⲛⲧⲉⲧⲉⲛ ⲛⲁϩϯ',
          wordBank: ['ⲟⲩⲟⲛⲧⲉⲧⲉⲛ', 'ⲛⲁϩϯ', 'ⲟⲩⲟⲛⲧⲱⲧⲉⲛ', 'ⲟⲩⲛⲁϩϯ'],
          explanation: 'ⲟⲩⲟⲛⲧⲉⲧⲉⲛ = you (pl.) have + ⲛⲁϩϯ = faith'
        },
        {
          id: 'ex-20-2-6',
          type: 'fill_blank',
          question: 'Complete: ⲟⲩⲟⲛⲧⲱⲟⲩ ___ = They have a house',
          correctAnswer: 'ⲟⲩⲏⲓ',
          options: ['ⲟⲩⲏⲓ', 'ⲡⲓⲏⲓ', 'ⲏⲓ', 'ⲛⲓⲏⲓ'],
          explanation: 'ⲟⲩⲟⲛⲧⲱⲟⲩ ⲟⲩⲏⲓ = they have a house (ⲟⲩⲟⲛⲧ- + -ⲱⲟⲩ)'
        },
        {
          id: 'ex-20-2-7',
          type: 'translation',
          question: 'Translate: ⲟⲩⲟⲛⲧⲉⲛ ⲟⲩⲙⲉⲛⲣⲓⲧ ⲙ̀ⲫϯ',
          questionCoptic: 'ⲟⲩⲟⲛⲧⲉⲛ ⲟⲩⲙⲉⲛⲣⲓⲧ ⲙ̀ⲫϯ',
          correctAnswer: 'We have love of God',
          options: ['We have love of God', 'We love God', 'God loves us', 'We had love of God'],
          explanation: 'ⲟⲩⲟⲛⲧⲉⲛ = we have + ⲟⲩⲙⲉⲛⲣⲓⲧ ⲙ̀ⲫϯ = love of God (Bohairic: ⲫϯ not ⲫⲛⲟⲩϯ, ⲙⲉⲛⲣⲓⲧ from ⲙⲉⲛⲣⲉ!)'
        },
        {
          id: 'ex-20-2-8',
          type: 'multiple_choice',
          question: 'How do you say "He has wisdom"?',
          correctAnswer: 'ⲟⲩⲟⲛⲧⲁϥ ⲥⲟⲫⲓⲁ',
          options: ['ⲟⲩⲟⲛⲧⲁϥ ⲥⲟⲫⲓⲁ', 'ⲟⲩⲟⲛⲧⲁⲓ ⲥⲟⲫⲓⲁ', 'ⲟⲩⲟⲛ ⲥⲟⲫⲓⲁ', 'ⲟⲩⲥⲟⲫⲓⲁ ⲡⲉ'],
          explanation: 'ⲟⲩⲟⲛⲧⲁϥ ⲥⲟⲫⲓⲁ = he has wisdom (ⲟⲩⲟⲛⲧ- + -ⲁϥ + ⲥⲟⲫⲓⲁ)'
        }
      ]
    },
    {
      id: 'lesson-20-3',
      unitId: 'unit-20',
      title: 'ⲙ̀ⲙⲟⲛ - Negative Existence',
      description: 'There is not / to not have',
      order: 3,
      xpReward: 30,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-20-3-1',
          type: 'translation',
          question: 'Translate: ⲙ̀ⲙⲟⲛ ⲟⲩⲣⲱⲙⲓ',
          questionCoptic: 'ⲙ̀ⲙⲟⲛ ⲟⲩⲣⲱⲙⲓ',
          correctAnswer: 'There is no man',
          options: ['There is no man', 'There is a man', 'The man is not', 'No man came'],
          explanation: 'ⲙ̀ⲙⲟⲛ (mmon) = there is not (negation of ⲟⲩⲟⲛ) + ⲟⲩⲣⲱⲙⲓ = a man'
        },
        {
          id: 'ex-20-3-2',
          type: 'multiple_choice',
          question: 'What does ⲙ̀ⲙⲟⲛ negate?',
          correctAnswer: 'Both existence (there is) and possession (to have)',
          options: ['Both existence (there is) and possession (to have)', 'Only existence', 'Only possession', 'Only copula sentences'],
          explanation: 'ⲙ̀ⲙⲟⲛ negates both ⲟⲩⲟⲛ (there is) and ⲟⲩⲟⲛⲧ- (to have)'
        },
        {
          id: 'ex-20-3-3',
          type: 'matching',
          question: 'Match positive and negative existence',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲟⲩⲟⲛ ⲙⲱⲟⲩ', english: 'there is water' },
            { coptic: 'ⲙ̀ⲙⲟⲛ ⲙⲱⲟⲩ', english: 'there is no water' },
            { coptic: 'ⲟⲩⲟⲛ ϩⲗⲓ', english: 'there is someone' },
            { coptic: 'ⲙ̀ⲙⲟⲛ ϩⲗⲓ', english: 'there is no one' }
          ]
        },
        {
          id: 'ex-20-3-4',
          type: 'translation',
          question: 'Translate: ⲙ̀ⲙⲟⲛ ⲟⲩⲱⲙ ⲙⲡⲁⲓⲙⲁ',
          questionCoptic: 'ⲙ̀ⲙⲟⲛ ⲟⲩⲱⲙ ⲙⲡⲁⲓⲙⲁ',
          correctAnswer: 'There is no food here',
          options: ['There is no food here', 'There is food here', 'Food is not here', 'There was no food here'],
          explanation: 'ⲙ̀ⲙⲟⲛ ⲟⲩⲱⲙ = there is no food + ⲙⲡⲁⲓⲙⲁ = here'
        },
        {
          id: 'ex-20-3-5',
          type: 'sentence_building',
          question: 'Build: "There is no hope"',
          correctAnswer: 'ⲙ̀ⲙⲟⲛ ϩⲉⲗⲡⲓⲥ',
          wordBank: ['ⲙ̀ⲙⲟⲛ', 'ϩⲉⲗⲡⲓⲥ', 'ⲟⲩⲟⲛ', 'ⲟⲩϩⲉⲗⲡⲓⲥ'],
          explanation: 'ⲙ̀ⲙⲟⲛ ϩⲉⲗⲡⲓⲥ = there is no hope (negative existential)'
        },
        {
          id: 'ex-20-3-6',
          type: 'fill_blank',
          question: 'Complete: ___ ⲣⲱⲙⲓ ⲉⲧⲙⲟⲕϩ = There is no one who is perfect',
          correctAnswer: 'ⲙ̀ⲙⲟⲛ',
          options: ['ⲙ̀ⲙⲟⲛ', 'ⲟⲩⲟⲛ', 'ⲙ̀ⲡⲉ', 'ⲁⲛ'],
          explanation: 'ⲙ̀ⲙⲟⲛ ⲣⲱⲙⲓ ⲉⲧⲙⲟⲕϩ = there is no person who is perfect'
        },
        {
          id: 'ex-20-3-7',
          type: 'translation',
          question: 'Translate: ⲙ̀ⲙⲟⲛ ⲙⲱⲓⲧ ⲉ̀ⲡⲱⲛϧ',
          questionCoptic: 'ⲙ̀ⲙⲟⲛ ⲙⲱⲓⲧ ⲉ̀ⲡⲱⲛϧ',
          correctAnswer: 'There is no way to life',
          options: ['There is no way to life', 'There is a way to life', 'The way to life does not exist', 'Life has no way'],
          explanation: 'ⲙ̀ⲙⲟⲛ ⲙⲱⲓⲧ = there is no way + ⲉ̀ⲡⲱⲛϧ = to life'
        },
        {
          id: 'ex-20-3-8',
          type: 'multiple_choice',
          question: 'How do you say "There is nothing"?',
          correctAnswer: 'ⲙ̀ⲙⲟⲛ ϩⲗⲓ',
          options: ['ⲙ̀ⲙⲟⲛ ϩⲗⲓ', 'ⲟⲩⲟⲛ ϩⲗⲓ', 'ⲙ̀ⲙⲟⲛ ⲗⲁⲁⲩ', 'ⲙ̀ⲙⲟⲛ ⲟⲩⲟⲛ'],
          explanation: 'ⲙ̀ⲙⲟⲛ ϩⲗⲓ = there is nothing / there is no one (no thing/person)'
        }
      ]
    },
    {
      id: 'lesson-20-4',
      unitId: 'unit-20',
      title: 'ⲙ̀ⲙⲟⲛⲧ- Negative Possession',
      description: 'To not have',
      order: 4,
      xpReward: 30,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-20-4-1',
          type: 'translation',
          question: 'Translate: ⲙ̀ⲙⲟⲛⲧⲁⲓ ⲟⲩϫⲱⲙ',
          questionCoptic: 'ⲙ̀ⲙⲟⲛⲧⲁⲓ ⲟⲩϫⲱⲙ',
          correctAnswer: 'I do not have a book',
          options: ['I do not have a book', 'I have a book', 'There is no book', 'I had no book'],
          explanation: 'ⲙ̀ⲙⲟⲛⲧⲁⲓ (mmontai) = I do not have (ⲙ̀ⲙⲟⲛⲧ- + -ⲁⲓ) + ⲟⲩϫⲱⲙ = a book'
        },
        {
          id: 'ex-20-4-2',
          type: 'multiple_choice',
          question: 'What is the negative possessive construction?',
          correctAnswer: 'ⲙ̀ⲙⲟⲛⲧ- + possessive suffix',
          options: ['ⲙ̀ⲙⲟⲛⲧ- + possessive suffix', 'ⲟⲩⲟⲛⲧ- + suffix + ⲁⲛ', 'ⲙ̀ⲙⲟⲛ + ⲛⲧⲉ', 'ⲙ̀ⲡⲉ- + possessive'],
          explanation: 'ⲙ̀ⲙⲟⲛⲧ- (mmont-) + possessive suffixes = to not have (negation of ⲟⲩⲟⲛⲧ-)'
        },
        {
          id: 'ex-20-4-3',
          type: 'matching',
          question: 'Match possessive forms',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲙ̀ⲙⲟⲛⲧⲁⲓ', english: 'I do not have' },
            { coptic: 'ⲙ̀ⲙⲟⲛⲧⲁⲕ', english: 'you (m.) do not have' },
            { coptic: 'ⲙ̀ⲙⲟⲛⲧⲁϥ', english: 'he does not have' },
            { coptic: 'ⲙ̀ⲙⲟⲛⲧⲁⲛ', english: 'we do not have' }
          ]
        },
        {
          id: 'ex-20-4-4',
          type: 'translation',
          question: 'Translate: ⲙ̀ⲙⲟⲛⲧⲁⲥ ⲛⲓϣⲏⲣⲓ',
          questionCoptic: 'ⲙ̀ⲙⲟⲛⲧⲁⲥ ⲛⲓϣⲏⲣⲓ',
          correctAnswer: 'She does not have children',
          options: ['She does not have children', 'She has children', 'There are no children', 'She had no children'],
          explanation: 'ⲙ̀ⲙⲟⲛⲧⲁⲥ = she does not have (ⲙ̀ⲙⲟⲛⲧ- + -ⲁⲥ) + ⲛⲓϣⲏⲣⲓ = children (Bohairic ϣⲏⲣⲓ not ⲥⲏⲣⲓ!)'
        },
        {
          id: 'ex-20-4-5',
          type: 'sentence_building',
          question: 'Build: "You (pl.) do not have faith"',
          correctAnswer: 'ⲙ̀ⲙⲟⲛⲧⲉⲧⲉⲛ ⲛⲁϩϯ',
          wordBank: ['ⲙ̀ⲙⲟⲛⲧⲉⲧⲉⲛ', 'ⲛⲁϩϯ', 'ⲟⲩⲟⲛⲧⲉⲧⲉⲛ', 'ⲟⲩⲛⲁϩϯ'],
          explanation: 'ⲙ̀ⲙⲟⲛⲧⲉⲧⲉⲛ = you (pl.) do not have + ⲛⲁϩϯ = faith'
        },
        {
          id: 'ex-20-4-6',
          type: 'fill_blank',
          question: 'Complete: ⲙ̀ⲙⲟⲛⲧⲱⲟⲩ ___ = They do not have a house',
          correctAnswer: 'ⲏⲓ',
          options: ['ⲏⲓ', 'ⲟⲩⲏⲓ', 'ⲡⲓⲏⲓ', 'ⲛⲓⲏⲓ'],
          explanation: 'ⲙ̀ⲙⲟⲛⲧⲱⲟⲩ ⲏⲓ = they do not have (a) house (ⲙ̀ⲙⲟⲛⲧ- + -ⲱⲟⲩ)'
        },
        {
          id: 'ex-20-4-7',
          type: 'translation',
          question: 'Translate: ⲙ̀ⲙⲟⲛⲧⲉⲛ ⲥⲟⲫⲓⲁ',
          questionCoptic: 'ⲙ̀ⲙⲟⲛⲧⲉⲛ ⲥⲟⲫⲓⲁ',
          correctAnswer: 'We do not have wisdom',
          options: ['We do not have wisdom', 'We have wisdom', 'There is no wisdom', 'We had no wisdom'],
          explanation: 'ⲙ̀ⲙⲟⲛⲧⲉⲛ = we do not have + ⲥⲟⲫⲓⲁ = wisdom'
        },
        {
          id: 'ex-20-4-8',
          type: 'multiple_choice',
          question: 'How do you say "He has no sin"?',
          correctAnswer: 'ⲙ̀ⲙⲟⲛⲧⲁϥ ⲛⲟⲃⲓ',
          options: ['ⲙ̀ⲙⲟⲛⲧⲁϥ ⲛⲟⲃⲓ', 'ⲟⲩⲟⲛⲧⲁϥ ⲛⲟⲃⲓ', 'ⲙ̀ⲙⲟⲛ ⲛⲟⲃⲓ', 'ⲙ̀ⲡⲉϥⲛⲟⲃⲓ'],
          explanation: 'ⲙ̀ⲙⲟⲛⲧⲁϥ ⲛⲟⲃⲓ = he does not have sin (ⲙ̀ⲙⲟⲛⲧ- + -ⲁϥ + ⲛⲟⲃⲓ)'
        }
      ]
    }
  ]
};

export default unit20;
