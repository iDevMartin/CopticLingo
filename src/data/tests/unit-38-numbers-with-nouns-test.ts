import { Lesson } from '../../types';

// TEST FILE FOR UNIT 38: NUMBERS WITH NOUNS
// Comprehensive test exercises covering all 4 lessons
// 25 exercises total - testing number-noun agreement and counting patterns

const unit38Test: Lesson = {
id: 'lesson-38-test',
      unitId: 'unit-38',
      title: 'Numbers with Nouns Comprehensive Test',
      description: 'Test all number forms and gender agreement patterns',
      order: 1,
      xpReward: 150,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'test-38-1',
          type: 'multiple_choice',
          question: 'What links numbers to nouns in Coptic?',
          correctAnswer: 'ⲛ̀ (or ⲙ̀ before consonants)',
          options: ['ⲛ̀ (or ⲙ̀ before consonants)', 'ⲉ̀', 'ⲛⲉⲙ', 'Direct connection'],
          explanation: 'Numbers connect to nouns with ⲛ̀- (becomes ⲙ̀- before ⲙ, ⲡ, ⲫ, ⲃ)'
        },
        {
          id: 'test-38-2',
          type: 'translation',
          question: 'Translate: ⲟⲩⲁⲓ ⲛ̀ⲣⲱⲙⲓ',
          questionCoptic: 'ⲟⲩⲁⲓ ⲛ̀ⲣⲱⲙⲓ',
          correctAnswer: 'one man',
          options: ['one man', 'a man', 'one men', 'men'],
          explanation: 'ⲟⲩⲁⲓ ⲛ̀ⲣⲱⲙⲓ = one man (masculine number form)'
        },
        {
          id: 'test-38-3',
          type: 'matching',
          question: 'Match masculine numbers with nouns',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲥⲛⲁⲩ ⲛ̀ⲣⲱⲙⲓ', english: 'two men' },
            { coptic: 'ϣⲟⲙⲧ ⲛ̀ⲣⲱⲙⲓ', english: 'three men' },
            { coptic: 'ϥⲧⲟⲟⲩ ⲛ̀ⲣⲱⲙⲓ', english: 'four men' },
            { coptic: 'ϯⲟⲩ ⲛ̀ⲣⲱⲙⲓ', english: 'five men' }
          ]
        },
        {
          id: 'test-38-4',
          type: 'translation',
          question: 'Translate: ⲙⲏⲧⲥⲛⲁⲩ ⲛ̀ⲁ̀ⲡⲟⲥⲧⲟⲗⲟⲥ',
          questionCoptic: 'ⲙⲏⲧⲥⲛⲁⲩ ⲛ̀ⲁ̀ⲡⲟⲥⲧⲟⲗⲟⲥ',
          correctAnswer: '12 apostles',
          options: ['12 apostles', '2 apostles', '10 apostles', '20 apostles'],
          explanation: 'ⲙⲏⲧⲥⲛⲁⲩ ⲛ̀ⲁ̀ⲡⲟⲥⲧⲟⲗⲟⲥ = 12 apostles (compound number)'
        },
        {
          id: 'test-38-5',
          type: 'fill_blank',
          question: 'Complete: ϣϥⲉ ___ϣⲏⲣⲓ = 70 sons',
          correctAnswer: 'ⲛ̀',
          options: ['ⲛ̀', 'ⲙ̀', 'ⲉ̀', 'ⲛⲉⲙ'],
          explanation: 'ϣϥⲉ ⲛ̀ϣⲏⲣⲓ = 70 sons (ⲛ̀ before ϣ)'
        },
        {
          id: 'test-38-6',
          type: 'sentence_building',
          question: 'Build: "5 books"',
          correctAnswer: 'ϯⲟⲩ ⲛ̀ϫⲱⲙ',
          wordBank: ['ϯⲟⲩ', 'ⲛ̀', 'ϫⲱⲙ', 'ⲙ̀'],
          explanation: 'ϯⲟⲩ ⲛ̀ϫⲱⲙ = 5 books (masculine noun)'
        },
        {
          id: 'test-38-7',
          type: 'translation',
          question: 'Translate: ϫⲟⲩⲧⲟⲩⲁⲓ ⲙ̀ⲙⲁⲑⲏⲧⲏⲥ',
          questionCoptic: 'ϫⲟⲩⲧⲟⲩⲁⲓ ⲙ̀ⲙⲁⲑⲏⲧⲏⲥ',
          correctAnswer: '21 disciples',
          options: ['21 disciples', '12 disciples', '20 disciples', '1 disciple'],
          explanation: 'ϫⲟⲩⲧⲟⲩⲁⲓ ⲙ̀ⲙⲁⲑⲏⲧⲏⲥ = 21 disciples (ⲙ̀ before ⲙ)'
        },
        {
          id: 'test-38-8',
          type: 'multiple_choice',
          question: 'When does ⲛ̀ become ⲙ̀?',
          correctAnswer: 'Before ⲙ, ⲡ, ⲫ, ⲃ',
          options: ['Before ⲙ, ⲡ, ⲫ, ⲃ', 'Before all consonants', 'Before vowels', 'Never'],
          explanation: 'ⲛ̀ → ⲙ̀ before labial consonants (ⲙ, ⲡ, ⲫ, ⲃ) for easier pronunciation'
        },
        {
          id: 'test-38-9',
          type: 'matching',
          question: 'Match feminine number forms',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲟⲩⲓ̀ ⲛ̀ϩⲓⲙⲓ', english: 'one woman' },
            { coptic: 'ⲥⲛⲧⲉ ⲛ̀ϩⲓⲙⲓ', english: 'two women' },
            { coptic: 'ϣⲟⲙϯ ⲛ̀ϩⲓⲙⲓ', english: 'three women' },
            { coptic: 'ϥⲧⲟⲉ ⲛ̀ϩⲓⲙⲓ', english: 'four women' }
          ]
        },
        {
          id: 'test-38-10',
          type: 'multiple_choice',
          question: 'What is "two" with feminine nouns?',
          correctAnswer: 'ⲥⲛⲧⲉ',
          options: ['ⲥⲛⲧⲉ', 'ⲥⲛⲁⲩ', 'ⲥⲛⲟⲩϯ', 'ⲥⲛⲟⲩⲧⲉ'],
          explanation: 'ⲥⲛⲧⲉ = two (with feminine nouns), vs. ⲥⲛⲁⲩ (masculine)'
        },
        {
          id: 'test-38-11',
          type: 'translation',
          question: 'Translate: ϣⲟⲙϯ ⲛ̀ⲯⲩⲭⲏ',
          questionCoptic: 'ϣⲟⲙϯ ⲛ̀ⲯⲩⲭⲏ',
          correctAnswer: 'Three souls',
          options: ['Three souls', 'Two souls', 'Thirty souls', 'The third soul'],
          explanation: 'ϣⲟⲙϯ ⲛ̀ⲯⲩⲭⲏ = three souls (ϣⲟⲙϯ = feminine form of 3)'
        },
        {
          id: 'test-38-12',
          type: 'matching',
          question: 'Match higher feminine numbers',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ϯⲉ', english: 'five (fem)' },
            { coptic: 'ⲥⲟⲉ', english: 'six (fem)' },
            { coptic: 'ϣⲁϣϥⲉ', english: 'seven (fem)' },
            { coptic: 'ϣⲙⲟⲩⲛⲉ', english: 'eight (fem)' }
          ]
        },
        {
          id: 'test-38-13',
          type: 'fill_blank',
          question: 'Complete: ϣⲉ ___ⲡⲣⲟⲫⲏⲧⲏⲥ = 100 prophets',
          correctAnswer: 'ⲙ̀',
          options: ['ⲙ̀', 'ⲛ̀', 'ⲉ̀', 'ϧⲉⲛ'],
          explanation: 'ϣⲉ ⲙ̀ⲡⲣⲟⲫⲏⲧⲏⲥ = 100 prophets (ⲙ̀ before ⲡ)'
        },
        {
          id: 'test-38-14',
          type: 'sentence_building',
          question: 'Build: "eight women"',
          correctAnswer: 'ϣⲙⲟⲩⲛⲉ ⲛ̀ϩⲓⲙⲓ',
          wordBank: ['ϣⲙⲟⲩⲛⲉ', 'ⲛ̀', 'ϩⲓⲙⲓ', 'ϣⲟⲙϯ'],
          explanation: 'ϣⲙⲟⲩⲛⲉ ⲛ̀ϩⲓⲙⲓ = eight women (feminine form)'
        },
        {
          id: 'test-38-15',
          type: 'translation',
          question: 'Translate: ⲙⲏⲧϣⲟⲙϯ ⲛ̀ϫⲱⲙ',
          questionCoptic: 'ⲙⲏⲧϣⲟⲙϯ ⲛ̀ϫⲱⲙ',
          correctAnswer: '13 books',
          options: ['13 books', '3 books', '30 books', '300 books'],
          explanation: 'ⲙⲏⲧϣⲟⲙϯ ⲛ̀ϫⲱⲙ = 13 books (compound: 10 + 3)'
        },
        {
          id: 'test-38-16',
          type: 'matching',
          question: 'Match masculine and feminine numbers',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲟⲩⲁⲓ ⲛ̀ϫⲱⲙ', english: 'one book (masc)' },
            { coptic: 'ⲟⲩⲓ̀ ⲛ̀ϯⲙⲉϩ', english: 'one tray (fem)' },
            { coptic: 'ⲥⲛⲁⲩ ⲛ̀ⲥⲟⲟⲩ', english: 'two fields (masc)' },
            { coptic: 'ⲥⲛⲧⲉ ⲛ̀ⲯⲩⲭⲏ', english: 'two souls (fem)' }
          ]
        },
        {
          id: 'test-38-17',
          type: 'fill_blank',
          question: 'Complete: ϯⲟⲩ ___ⲗⲏⲙⲟⲣ = 5 workers',
          correctAnswer: 'ⲛ̀',
          options: ['ⲛ̀', 'ⲙ̀', 'ⲓ̀', 'ⲓ'],
          explanation: 'ϯⲟⲩ ⲛ̀ⲗⲏⲙⲟⲣ = 5 workers (masculine noun)'
        },
        {
          id: 'test-38-18',
          type: 'translation',
          question: 'Translate: ⲥⲟⲉ ⲙ̀ⲡⲏⲓ',
          questionCoptic: 'ⲥⲟⲉ ⲙ̀ⲡⲏⲓ',
          correctAnswer: '6 houses',
          options: ['6 houses', '60 houses', '600 houses', 'Sixth house'],
          explanation: 'ⲥⲟⲉ ⲙ̀ⲡⲏⲓ = 6 houses (compound form, ⲙ̀ before ⲡ)'
        },
        {
          id: 'test-38-19',
          type: 'sentence_building',
          question: 'Build: "12 churches"',
          correctAnswer: 'ⲙⲏⲧⲥⲛⲁⲩ ⲛ̀ⲧⲉⲕⲕⲗⲏⲥⲓⲁ',
          wordBank: ['ⲙⲏⲧⲥⲛⲁⲩ', 'ⲛ̀', 'ⲧⲉⲕⲕⲗⲏⲥⲓⲁ', 'ⲙⲉⲛ'],
          explanation: 'ⲙⲏⲧⲥⲛⲁⲩ ⲛ̀ⲧⲉⲕⲕⲗⲏⲥⲓⲁ = 12 churches (compound number)'
        },
        {
          id: 'test-38-20',
          type: 'translation',
          question: 'Translate: ϣϥⲉ ⲙ̀ⲙⲁⲧⲓⲙⲉⲟⲟⲛ',
          questionCoptic: 'ϣϥⲉ ⲙ̀ⲙⲁⲧⲓⲙⲉⲟⲟⲛ',
          correctAnswer: '70 martyrs',
          options: ['70 martyrs', '7 martyrs', '700 martyrs', 'Seven martyrs'],
          explanation: 'ϣϥⲉ ⲙ̀ⲙⲁⲧⲓⲙⲉⲟⲟⲛ = 70 martyrs (ⲙ̀ before ⲙ)'
        },
        {
          id: 'test-38-21',
          type: 'matching',
          question: 'Match complete counting phrases',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲟⲩⲁⲓ ⲛ̀ⲅⲛ̀ⲧⲉ', english: 'one of five' },
            { coptic: 'ⲥⲛⲁⲩ ⲛ̀ⲧⲛ̀ⲧⲉ', english: 'two of twelve' },
            { coptic: 'ϣⲟⲙⲧ ⲙ̀ⲙⲁⲫⲟⲩ', english: 'three of nine' },
            { coptic: 'ϯⲟⲩ ⲛ̀ϯⲟⲩ', english: 'five of five' }
          ]
        },
        {
          id: 'test-38-22',
          type: 'fill_blank',
          question: 'Complete: ⲡⲉ ⲟⲩⲁⲓ ⲛ̀ ___ = He is one of the apostles',
          correctAnswer: 'ⲁ̀ⲡⲟⲥⲧⲟⲗⲟⲥ',
          options: ['ⲁ̀ⲡⲟⲥⲧⲟⲗⲟⲥ', 'ⲧⲉⲕⲕⲗⲏⲥⲓⲁ', 'ⲡⲛⲟⲙⲟⲥ', 'ⲭⲣⲟⲛⲟⲥ'],
          explanation: 'ⲡⲉ ⲟⲩⲁⲓ ⲛ̀ⲁ̀ⲡⲟⲥⲧⲟⲗⲟⲥ = he is one of the apostles'
        },
        {
          id: 'test-38-23',
          type: 'translation',
          question: 'Translate: ϣⲁϣϥⲉ ⲛ̀ⲯⲩⲭⲏ',
          questionCoptic: 'ϣⲁϣϥⲉ ⲛ̀ⲯⲩⲭⲏ',
          correctAnswer: 'Seven souls',
          options: ['Seven souls', 'Seventy souls', 'Seven-soled', 'A week of souls'],
          explanation: 'ϣⲁϣϥⲉ ⲛ̀ⲯⲩⲭⲏ = seven souls (feminine form)'
        },
        {
          id: 'test-38-24',
          type: 'sentence_building',
          question: 'Build: "30 days"',
          correctAnswer: 'ⲙⲁⲃ ⲛ̀ϣⲏⲣⲉ',
          wordBank: ['ⲙⲁⲃ', 'ⲛ̀', 'ϣⲏⲣⲉ', 'ⲙⲏⲧⲙⲁⲃ'],
          explanation: 'ⲙⲁⲃ ⲛ̀ϣⲏⲣⲉ = 30 days (masculine noun)'
        },
        {
          id: 'test-38-25',
          type: 'matching',
          question: 'Match gender agreement patterns',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'Masculine: ⲟⲩⲁⲓ, ⲥⲛⲁⲩ, ϣⲟⲙⲧ, ϥⲧⲟⲟⲩ', english: 'Men, books, sons' },
            { coptic: 'Feminine: ⲟⲩⲓ̀, ⲥⲛⲧⲉ, ϣⲟⲙϯ, ϥⲧⲟⲉ', english: 'Women, souls, things' },
            { coptic: 'ⲛ̀ before all consonants except labials', english: 'General rule' },
            { coptic: 'ⲙ̀ before ⲙ, ⲡ, ⲫ, ⲃ', english: 'Labial consonant rule' }
          ]
        }
      ]
};

export default unit38Test;
