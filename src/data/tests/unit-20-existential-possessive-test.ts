import { Lesson } from '../../types';

// TEST FILE FOR UNIT 20: EXISTENTIAL & POSSESSIVE
// Comprehensive test exercises covering all 4 lessons
// 28 exercises total - testing ⲟⲩⲟⲛ, ⲟⲩⲟⲛⲧ-, ⲙ̀ⲙⲟⲛ, and complex constructions

const unit20Test: Lesson = {
id: 'lesson-20-test',
      unitId: 'unit-20',
      title: 'Existential & Possessive Comprehensive Test',
      description: 'Test all ⲟⲩⲟⲛ, ⲟⲩⲟⲛⲧ-, and ⲙ̀ⲙⲟⲛ forms',
      order: 1,
      xpReward: 100,
      isLocked: true,
      completed: false,
      exercises: [
        // Basic ⲟⲩⲟⲛ tests
        {
          id: 'test-20-1',
          type: 'translation',
          question: 'Translate: ⲟⲩⲟⲛ ⲟⲩⲣⲱⲙⲓ',
          questionCoptic: 'ⲟⲩⲟⲛ ⲟⲩⲣⲱⲙⲓ',
          correctAnswer: 'There is a man',
          options: ['There is a man', 'A man is there', 'The man is', 'There are men'],
          explanation: 'ⲟⲩⲟⲛ (ouon) = there is/there are (existential) + ⲟⲩⲣⲱⲙⲓ = a man'
        },
        {
          id: 'test-20-2',
          type: 'multiple_choice',
          question: 'What is ⲟⲩⲟⲛ used for?',
          correctAnswer: 'Expressing existence (there is/are)',
          options: ['Expressing existence (there is/are)', 'Expressing possession only', 'Expressing negation', 'Expressing location'],
          explanation: 'ⲟⲩⲟⲛ is the existential construction meaning "there is/there are"'
        },
        {
          id: 'test-20-3',
          type: 'fill_blank',
          question: 'Complete: ___ ⲟⲩⲙⲱⲟⲩ = There is water',
          correctAnswer: 'ⲟⲩⲟⲛ',
          options: ['ⲟⲩⲟⲛ', 'ⲟⲩⲟⲛⲧⲁ', 'ⲙ̀ⲙⲟⲛ', 'ⲡⲉ'],
          explanation: 'ⲟⲩⲟⲛ ⲟⲩⲙⲱⲟⲩ = there is water (existential)'
        },
        {
          id: 'test-20-4',
          type: 'sentence_building',
          question: 'Build: "There are many people"',
          correctAnswer: 'ⲟⲩⲟⲛ ⲟⲩⲙⲏϣ ⲛ̀ⲣⲱⲙⲓ',
          wordBank: ['ⲟⲩⲟⲛ', 'ⲟⲩⲙⲏϣ', 'ⲛ̀ⲣⲱⲙⲓ', 'ⲙ̀ⲙⲟⲛ'],
          explanation: 'ⲟⲩⲟⲛ ⲟⲩⲙⲏϣ ⲛ̀ⲣⲱⲙⲓ = there are many people (plural existential)'
        },
        {
          id: 'test-20-5',
          type: 'matching',
          question: 'Match existential phrases',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲟⲩⲟⲛ ⲟⲩϫⲱⲙ', english: 'there is a book' },
            { coptic: 'ⲟⲩⲟⲛ ⲟⲩϩⲉⲗⲡⲓⲥ', english: 'there is hope' },
            { coptic: 'ⲟⲩⲟⲛ ⲟⲩⲙⲏϣ', english: 'there are many' },
            { coptic: 'ⲟⲩⲟⲛ ϩⲗⲓ', english: 'there is someone/anyone' }
          ]
        },
        {
          id: 'test-20-6',
          type: 'translation',
          question: 'Translate: ⲟⲩⲟⲛ ⲟⲩⲛⲟϭ ⲛ̀ϩⲱⲃ',
          questionCoptic: 'ⲟⲩⲟⲛ ⲟⲩⲛⲟϭ ⲛ̀ϩⲱⲃ',
          correctAnswer: 'There is a great matter/thing',
          options: ['There is a great matter/thing', 'The matter is great', 'There are great things', 'A great thing is there'],
          explanation: 'ⲟⲩⲟⲛ ⲟⲩⲛⲟϭ ⲛ̀ϩⲱⲃ = there is a great thing/matter (existential + adjective)'
        },

        // Possessive ⲟⲩⲟⲛⲧ- tests
        {
          id: 'test-20-7',
          type: 'translation',
          question: 'Translate: ⲟⲩⲟⲛⲧⲁⲓ ⲟⲩϫⲱⲙ',
          questionCoptic: 'ⲟⲩⲟⲛⲧⲁⲓ ⲟⲩϫⲱⲙ',
          correctAnswer: 'I have a book',
          options: ['I have a book', 'There is a book', 'My book', 'I am a book'],
          explanation: 'ⲟⲩⲟⲛⲧⲁⲓ (ouontai) = I have + ⲟⲩϫⲱⲙ = a book (possessive construction)'
        },
        {
          id: 'test-20-8',
          type: 'multiple_choice',
          question: 'How do you say "You have faith"?',
          correctAnswer: 'ⲟⲩⲟⲛⲧⲁⲕ ⲡⲓⲛⲁϩϯ',
          options: ['ⲟⲩⲟⲛⲧⲁⲕ ⲡⲓⲛⲁϩϯ', 'ⲟⲩⲟⲛ ⲡⲉⲕⲛⲁϩϯ', 'ⲕⲟⲩⲟⲛⲧ ⲛⲁϩϯ', 'ⲡⲓⲛⲁϩϯ ⲛⲁⲕ'],
          explanation: 'ⲟⲩⲟⲛⲧⲁⲕ (ouontak) = you (m.) have + ⲡⲓⲛⲁϩϯ = the faith'
        },
        {
          id: 'test-20-9',
          type: 'fill_blank',
          question: 'Complete: ⲟⲩⲟⲛⲧⲁϥ ___ = He has power',
          correctAnswer: 'ⲟⲩϫⲟⲙ',
          options: ['ⲟⲩϫⲟⲙ', 'ϫⲟⲙ', 'ⲡⲉϥϫⲟⲙ', 'ⲛⲓϫⲟⲙ'],
          explanation: 'ⲟⲩⲟⲛⲧⲁϥ ⲟⲩϫⲟⲙ = he has power/strength'
        },
        {
          id: 'test-20-10',
          type: 'sentence_building',
          question: 'Build: "We have hope"',
          correctAnswer: 'ⲟⲩⲟⲛⲧⲁⲛ ⲟⲩϩⲉⲗⲡⲓⲥ',
          wordBank: ['ⲟⲩⲟⲛⲧⲁⲛ', 'ⲟⲩϩⲉⲗⲡⲓⲥ', 'ⲟⲩⲟⲛⲧⲁⲓ', 'ϩⲉⲗⲡⲓⲥ'],
          explanation: 'ⲟⲩⲟⲛⲧⲁⲛ = we have + ⲟⲩϩⲉⲗⲡⲓⲥ = (a) hope'
        },
        {
          id: 'test-20-11',
          type: 'matching',
          question: 'Match possessive forms',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲟⲩⲟⲛⲧⲁⲓ', english: 'I have' },
            { coptic: 'ⲟⲩⲟⲛⲧⲁⲕ/ⲧⲉ', english: 'you have (m./f.)' },
            { coptic: 'ⲟⲩⲟⲛⲧⲁϥ/ⲥ', english: 'he/she has' },
            { coptic: 'ⲟⲩⲟⲛⲧⲟⲩ', english: 'they have' }
          ]
        },
        {
          id: 'test-20-12',
          type: 'translation',
          question: 'Translate: ⲟⲩⲟⲛⲧⲉⲛ ⲟⲩⲛⲓϣϯ ⲛ̀ⲁⲅⲁⲡⲏ',
          questionCoptic: 'ⲟⲩⲟⲛⲧⲉⲛ ⲟⲩⲛⲓϣϯ ⲛ̀ⲁⲅⲁⲡⲏ',
          correctAnswer: 'You (pl.) have great love',
          options: ['You (pl.) have great love', 'We have great love', 'You have a great love', 'There is great love'],
          explanation: 'ⲟⲩⲟⲛⲧⲉⲛ = you (pl.) have + ⲟⲩⲛⲓϣϯ ⲛ̀ⲁⲅⲁⲡⲏ = a great love'
        },

        // Negative ⲙ̀ⲙⲟⲛ tests
        {
          id: 'test-20-13',
          type: 'translation',
          question: 'Translate: ⲙ̀ⲙⲟⲛ ⲟⲩⲱⲙ',
          questionCoptic: 'ⲙ̀ⲙⲟⲛ ⲟⲩⲱⲙ',
          correctAnswer: 'There is no food',
          options: ['There is no food', 'There is food', 'I have no food', 'He has no food'],
          explanation: 'ⲙ̀ⲙⲟⲛ (mmon) = there is not (negative existential) + ⲟⲩⲱⲙ = food'
        },
        {
          id: 'test-20-14',
          type: 'multiple_choice',
          question: 'What does ⲙ̀ⲙⲟⲛ negate?',
          correctAnswer: 'Both existence (ⲟⲩⲟⲛ) and possession (ⲟⲩⲟⲛⲧ-)',
          options: ['Both existence (ⲟⲩⲟⲛ) and possession (ⲟⲩⲟⲛⲧ-)', 'Only existence', 'Only possession', 'Verb forms'],
          explanation: 'ⲙ̀ⲙⲟⲛ is the negative of both ⲟⲩⲟⲛ (there is) and ⲟⲩⲟⲛⲧ- (to have)'
        },
        {
          id: 'test-20-15',
          type: 'translation',
          question: 'Translate: ⲙ̀ⲙⲟⲛⲧⲁⲓ ⲥⲏⲟⲩ',
          questionCoptic: 'ⲙ̀ⲙⲟⲛⲧⲁⲓ ⲥⲏⲟⲩ',
          correctAnswer: 'I have no time',
          options: ['I have no time', 'I have time', 'There is no time', 'My time is not'],
          explanation: 'ⲙ̀ⲙⲟⲛⲧⲁⲓ (mmonai) = I do not have + ⲥⲏⲟⲩ = time'
        },
        {
          id: 'test-20-16',
          type: 'fill_blank',
          question: 'Complete: ___ ϩⲉⲗⲡⲓⲥ = There is no hope',
          correctAnswer: 'ⲙ̀ⲙⲟⲛ',
          options: ['ⲙ̀ⲙⲟⲛ', 'ⲟⲩⲟⲛ', 'ⲙ̀ⲙⲟⲛⲧⲁ', 'ⲙ̀ⲡⲉ'],
          explanation: 'ⲙ̀ⲙⲟⲛ ϩⲉⲗⲡⲓⲥ = there is no hope (negative existential)'
        },
        {
          id: 'test-20-17',
          type: 'sentence_building',
          question: 'Build: "They have no children"',
          correctAnswer: 'ⲙ̀ⲙⲟⲛⲧⲱⲟⲩ ϣⲏⲣⲓ',
          wordBank: ['ⲙ̀ⲙⲟⲛⲧⲱⲟⲩ', 'ϣⲏⲣⲓ', 'ⲟⲩⲟⲛⲧⲟⲩ', 'ⲛⲓϣⲏⲣⲓ'],
          explanation: 'ⲙ̀ⲙⲟⲛⲧⲱⲟⲩ = they do not have + ϣⲏⲣⲓ = children (Bohairic ϣⲏⲣⲓ not ⲥⲏⲣⲓ!)'
        },
        {
          id: 'test-20-18',
          type: 'matching',
          question: 'Match positive and negative',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲟⲩⲟⲛ', english: 'there is' },
            { coptic: 'ⲙ̀ⲙⲟⲛ', english: 'there is not' },
            { coptic: 'ⲟⲩⲟⲛⲧⲁⲓ', english: 'I have' },
            { coptic: 'ⲙ̀ⲙⲟⲛⲧⲁⲓ', english: 'I do not have' }
          ]
        },

        // Complex constructions tests
        {
          id: 'test-20-19',
          type: 'translation',
          question: 'Translate: ⲟⲩⲟⲛⲧⲁⲛ ⲟⲩϫⲱⲙ ⲉⲛⲁⲛⲉϥ',
          questionCoptic: 'ⲟⲩⲟⲛⲧⲁⲛ ⲟⲩϫⲱⲙ ⲉⲛⲁⲛⲉϥ',
          correctAnswer: 'We have a good book',
          options: ['We have a good book', 'We have good books', 'There is a good book', 'Our book is good'],
          explanation: 'ⲟⲩⲟⲛⲧⲁⲛ ⲟⲩϫⲱⲙ ⲉⲛⲁⲛⲉϥ = we have a book that is good (possessive + adjective)'
        },
        {
          id: 'test-20-20',
          type: 'translation',
          question: 'Translate: ⲙ̀ⲙⲟⲛ ϩⲗⲓ ⲙⲡⲁⲓⲙⲁ',
          questionCoptic: 'ⲙ̀ⲙⲟⲛ ϩⲗⲓ ⲙⲡⲁⲓⲙⲁ',
          correctAnswer: 'There is no one here',
          options: ['There is no one here', 'There is someone here', 'No one came here', 'I am not here'],
          explanation: 'ⲙ̀ⲙⲟⲛ ϩⲗⲓ = there is no one + ⲙⲡⲁⲓⲙⲁ = here (in this place)'
        },
        {
          id: 'test-20-21',
          type: 'multiple_choice',
          question: 'How do you say "God has mercy"?',
          correctAnswer: 'ⲟⲩⲟⲛⲧⲁϥ ⲛⲁⲓ ⲛ̀ϫⲉ ⲫϯ',
          options: ['ⲟⲩⲟⲛⲧⲁϥ ⲛⲁⲓ ⲛ̀ϫⲉ ⲫϯ', 'ⲟⲩⲟⲛ ⲛⲁⲓ ⲛ̀ⲧⲉ ⲫϯ', 'ⲫϯ ⲟⲩⲟⲛⲧⲁϥ ⲛⲁⲓ', 'ⲛⲁⲓ ⲛ̀ⲧⲉ ⲫϯ'],
          explanation: 'ⲟⲩⲟⲛⲧⲁϥ ⲛⲁⲓ ⲛ̀ϫⲉ ⲫϯ = God has mercy (Bohairic ⲫϯ not ⲫⲛⲟⲩϯ!)'
        },
        {
          id: 'test-20-22',
          type: 'sentence_building',
          question: 'Build: "There is a man in the house"',
          correctAnswer: 'ⲟⲩⲟⲛ ⲟⲩⲣⲱⲙⲓ ϧⲉⲛ ⲡⲓⲏⲓ',
          wordBank: ['ⲟⲩⲟⲛ', 'ⲟⲩⲣⲱⲙⲓ', 'ϧⲉⲛ', 'ⲡⲓⲏⲓ'],
          explanation: 'ⲟⲩⲟⲛ ⲟⲩⲣⲱⲙⲓ = there is a man + ϧⲉⲛ ⲡⲓⲏⲓ = in the house'
        },
        {
          id: 'test-20-23',
          type: 'fill_blank',
          question: 'Complete: ⲟⲩⲟⲛⲧⲉ ___ ⲟⲩϫⲟⲙ = She has power',
          correctAnswer: 'ⲟⲩⲟⲛⲧⲉⲥ',
          options: ['ⲟⲩⲟⲛⲧⲉⲥ', 'ⲟⲩⲟⲛⲧⲁⲥ', 'ⲟⲩⲟⲛⲧⲁϥ', 'ⲟⲩⲟⲛⲧⲉ'],
          explanation: 'ⲟⲩⲟⲛⲧⲉⲥ ⲟⲩϫⲟⲙ = she has power (feminine possessive)'
        },
        {
          id: 'test-20-24',
          type: 'translation',
          question: 'Translate: ⲙ̀ⲙⲟⲛ ⲙⲱⲟⲩ ϧⲉⲛ ⲡⲓⲉⲣⲡ',
          questionCoptic: 'ⲙ̀ⲙⲟⲛ ⲙⲱⲟⲩ ϧⲉⲛ ⲡⲓⲉⲣⲡ',
          correctAnswer: 'There is no water in the wine',
          options: ['There is no water in the wine', 'There is water in the wine', 'The wine has no water', 'Water is not wine'],
          explanation: 'ⲙ̀ⲙⲟⲛ ⲙⲱⲟⲩ = there is no water + ϧⲉⲛ ⲡⲓⲉⲣⲡ = in the wine'
        },
        {
          id: 'test-20-25',
          type: 'matching',
          question: 'Match complex constructions',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲟⲩⲟⲛ ⲟⲩⲙⲏϣ ⲛ̀ⲣⲱⲙⲓ', english: 'there are many people' },
            { coptic: 'ⲟⲩⲟⲛⲧⲁⲛ ⲡⲓⲛⲁϩϯ', english: 'we have the faith' },
            { coptic: 'ⲙ̀ⲙⲟⲛ ϩⲗⲓ', english: 'there is no one' },
            { coptic: 'ⲙ̀ⲙⲟⲛⲧⲟⲩ ⲱⲓⲕ', english: 'they have no bread' }
          ]
        },
        {
          id: 'test-20-26',
          type: 'translation',
          question: 'Translate: ⲟⲩⲟⲛⲧⲁⲓ ⲟⲩϣⲏⲣⲓ ⲙ̀ⲙⲟⲛⲧⲁⲕ ϣⲏⲣⲓ',
          questionCoptic: 'ⲟⲩⲟⲛⲧⲁⲓ ⲟⲩϣⲏⲣⲓ ⲙ̀ⲙⲟⲛⲧⲁⲕ ϣⲏⲣⲓ',
          correctAnswer: 'I have a child, you have no child',
          options: ['I have a child, you have no child', 'I have children, you have children', 'I have no child, you have a child', 'We have children'],
          explanation: 'ⲟⲩⲟⲛⲧⲁⲓ ⲟⲩϣⲏⲣⲓ = I have a child + ⲙ̀ⲙⲟⲛⲧⲁⲕ ϣⲏⲣⲓ = you have no child (contrast)'
        },
        {
          id: 'test-20-27',
          type: 'multiple_choice',
          question: 'How do you say "There is no one who knows"?',
          correctAnswer: 'ⲙ̀ⲙⲟⲛ ϩⲗⲓ ⲉⲧⲥⲱⲟⲩⲛ',
          options: ['ⲙ̀ⲙⲟⲛ ϩⲗⲓ ⲉⲧⲥⲱⲟⲩⲛ', 'ⲟⲩⲟⲛ ϩⲗⲓ ⲉⲧⲥⲱⲟⲩⲛ ⲁⲛ', 'ⲙ̀ⲙⲟⲛ ⲟⲩⲟⲛ ⲉⲧⲥⲱⲟⲩⲛ', 'ϩⲗⲓ ⲙ̀ⲙⲟⲛ ⲥⲱⲟⲩⲛ'],
          explanation: 'ⲙ̀ⲙⲟⲛ ϩⲗⲓ ⲉⲧⲥⲱⲟⲩⲛ = there is no one who knows (negative existential + relative)'
        },
        {
          id: 'test-20-28',
          type: 'translation',
          question: 'Translate: ⲟⲩⲟⲛⲧⲁϥ ⲙ̀ⲙⲁⲩ ⲛ̀ϫⲉ ⲫϯ',
          questionCoptic: 'ⲟⲩⲟⲛⲧⲁϥ ⲙ̀ⲙⲁⲩ ⲛ̀ϫⲉ ⲫϯ',
          correctAnswer: 'God is there / God exists there',
          options: ['God is there / God exists there', 'God has them', 'There is God', 'God has that'],
          explanation: 'ⲟⲩⲟⲛⲧⲁϥ ⲙ̀ⲙⲁⲩ = literally "he has (existence) there" = he is there + ⲛ̀ϫⲉ ⲫϯ = God (Bohairic ⲫϯ not ⲫⲛⲟⲩϯ!)'
        }
      ]
};

export default unit20Test;
