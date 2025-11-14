import { Unit } from '../../types';

// UNIT 38: NUMBERS WITH NOUNS
// Bohairic dialect - Gender agreement and counting patterns
// Fills gap: Proper number-noun agreement in Coptic

const unit38: Unit = {
  id: 'unit-38',
  title: 'Numbers with Nouns',
  description: 'Master number-noun agreement and counting people & things',
  order: 38,
  color: '#795548',
  lessons: [
    {
      id: 'lesson-38-1',
      unitId: 'unit-38',
      title: 'Masculine Number Forms',
      description: 'Numbers with masculine nouns',
      order: 1,
      xpReward: 25,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-38-1-1',
          type: 'multiple_choice',
          question: 'What links numbers to nouns in Coptic?',
          correctAnswer: 'ⲛ̀ (or ⲙ̀ before consonants)',
          options: ['ⲛ̀ (or ⲙ̀ before consonants)', 'ⲉ̀', 'ⲛⲉⲙ', 'Direct connection'],
          explanation: 'Numbers connect to nouns with ⲛ̀- (becomes ⲙ̀- before ⲙ, ⲡ, ⲫ, ⲃ)'
        },
        {
          id: 'ex-38-1-2',
          type: 'matching',
          question: 'Match numbers with masculine nouns',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲟⲩⲁⲓ ⲛ̀ⲣⲱⲙⲓ', english: 'one man' },
            { coptic: 'ⲥⲛⲁⲩ ⲛ̀ⲣⲱⲙⲓ', english: 'two men' },
            { coptic: 'ϣⲟⲙⲧ ⲛ̀ⲣⲱⲙⲓ', english: 'three men' },
            { coptic: 'ϥⲧⲟⲟⲩ ⲛ̀ⲣⲱⲙⲓ', english: 'four men' }
          ]
        },
        {
          id: 'ex-38-1-3',
          type: 'translation',
          question: 'Translate: ⲙⲏⲧⲥⲛⲁⲩ ⲛ̀ⲁ̀ⲡⲟⲥⲧⲟⲗⲟⲥ',
          questionCoptic: 'ⲙⲏⲧⲥⲛⲁⲩ ⲛ̀ⲁ̀ⲡⲟⲥⲧⲟⲗⲟⲥ',
          correctAnswer: '12 apostles',
          options: ['12 apostles', '2 apostles', '10 apostles', '20 apostles'],
          explanation: 'ⲙⲏⲧⲥⲛⲁⲩ ⲛ̀ⲁ̀ⲡⲟⲥⲧⲟⲗⲟⲥ = 12 apostles (masculine noun)'
        },
        {
          id: 'ex-38-1-4',
          type: 'fill_blank',
          question: 'Complete: ϣϥⲉ ___ϣⲏⲣⲓ = 70 sons',
          correctAnswer: 'ⲛ̀',
          options: ['ⲛ̀', 'ⲙ̀', 'ⲉ̀', 'ⲛⲉⲙ'],
          explanation: 'ϣϥⲉ ⲛ̀ϣⲏⲣⲓ = 70 sons (ⲛ̀ before ϣ)'
        },
        {
          id: 'ex-38-1-5',
          type: 'sentence_building',
          question: 'Build: "5 books"',
          correctAnswer: 'ϯⲟⲩ ⲛ̀ϫⲱⲙ',
          wordBank: ['ϯⲟⲩ', 'ⲛ̀', 'ϫⲱⲙ', 'ⲙ̀'],
          explanation: 'ϯⲟⲩ ⲛ̀ϫⲱⲙ = 5 books (masculine noun)'
        },
        {
          id: 'ex-38-1-6',
          type: 'translation',
          question: 'Translate: ϫⲟⲩⲧⲟⲩⲁⲓ ⲙ̀ⲙⲁⲑⲏⲧⲏⲥ',
          questionCoptic: 'ϫⲟⲩⲧⲟⲩⲁⲓ ⲙ̀ⲙⲁⲑⲏⲧⲏⲥ',
          correctAnswer: '21 disciples',
          options: ['21 disciples', '12 disciples', '20 disciples', '1 disciple'],
          explanation: 'ϫⲟⲩⲧⲟⲩⲁⲓ ⲙ̀ⲙⲁⲑⲏⲧⲏⲥ = 21 disciples (ⲙ̀ before ⲙ)'
        },
        {
          id: 'ex-38-1-7',
          type: 'multiple_choice',
          question: 'When does ⲛ̀ become ⲙ̀?',
          correctAnswer: 'Before ⲙ, ⲡ, ⲫ, ⲃ',
          options: ['Before ⲙ, ⲡ, ⲫ, ⲃ', 'Before all consonants', 'Before vowels', 'Never'],
          explanation: 'ⲛ̀ → ⲙ̀ before labial consonants (ⲙ, ⲡ, ⲫ, ⲃ) for easier pronunciation'
        },
        {
          id: 'ex-38-1-8',
          type: 'translation',
          question: 'Translate: ϣⲉ ⲙ̀ⲡⲣⲟⲫⲏⲧⲏⲥ',
          questionCoptic: 'ϣⲉ ⲙ̀ⲡⲣⲟⲫⲏⲧⲏⲥ',
          correctAnswer: '100 prophets',
          options: ['100 prophets', '10 prophets', '1000 prophets', 'A hundred prophets'],
          explanation: 'ϣⲉ ⲙ̀ⲡⲣⲟⲫⲏⲧⲏⲥ = 100 prophets (ⲙ̀ before ⲡ)'
        }
      ]
    },
    {
      id: 'lesson-38-2',
      unitId: 'unit-38',
      title: 'Feminine Number Forms',
      description: 'Numbers with feminine nouns',
      order: 2,
      xpReward: 25,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-38-2-1',
          type: 'matching',
          question: 'Match numbers with feminine nouns',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲟⲩⲓ̀ ⲛ̀ϩⲓⲙⲓ', english: 'one woman' },
            { coptic: 'ⲥⲛⲧⲉ ⲛ̀ϩⲓⲙⲓ', english: 'two women' },
            { coptic: 'ϣⲟⲙϯ ⲛ̀ϩⲓⲙⲓ', english: 'three women' },
            { coptic: 'ϥⲧⲟⲉ ⲛ̀ϩⲓⲙⲓ', english: 'four women' }
          ]
        },
        {
          id: 'ex-38-2-2',
          type: 'multiple_choice',
          question: 'What is "two" with feminine nouns?',
          correctAnswer: 'ⲥⲛⲧⲉ',
          options: ['ⲥⲛⲧⲉ', 'ⲥⲛⲁⲩ', 'ⲥⲛⲟⲩϯ', 'ⲥⲛⲟⲩⲧⲉ'],
          explanation: 'ⲥⲛⲧⲉ = two (with feminine nouns), vs. ⲥⲛⲁⲩ (masculine)'
        },
        {
          id: 'ex-38-2-3',
          type: 'translation',
          question: 'Translate: ϣⲟⲙϯ ⲛ̀ⲯⲩⲭⲏ',
          questionCoptic: 'ϣⲟⲙϯ ⲛ̀ⲯⲩⲭⲏ',
          correctAnswer: 'Three souls',
          options: ['Three souls', 'Two souls', 'Thirty souls', 'The third soul'],
          explanation: 'ϣⲟⲙϯ ⲛ̀ⲯⲩⲭⲏ = three souls (ϣⲟⲙϯ = feminine form of 3)'
        },
        {
          id: 'ex-38-2-4',
          type: 'matching',
          question: 'Match feminine number forms',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ϯⲉ', english: 'five (fem)' },
            { coptic: 'ⲥⲟⲉ', english: 'six (fem)' },
            { coptic: 'ϣⲁϣϥⲉ', english: 'seven (fem)' },
            { coptic: 'ϣⲙⲟⲩⲛⲉ', english: 'eight (fem)' }
          ]
        },
        {
          id: 'ex-38-2-5',
          type: 'fill_blank',
          question: 'Complete: ___ ⲛ̀ⲉⲕⲕⲗⲏⲥⲓⲁ = seven churches',
          correctAnswer: 'ϣⲁϣϥⲉ',
          options: ['ϣⲁϣϥⲉ', 'ϣⲁϣϥ', 'ϣϥⲉ', 'ϣⲟⲙϯ'],
          explanation: 'ϣⲁϣϥⲉ ⲛ̀ⲉⲕⲕⲗⲏⲥⲓⲁ = seven churches (feminine form)'
        },
        {
          id: 'ex-38-2-6',
          type: 'sentence_building',
          question: 'Build: "10 virgins"',
          correctAnswer: 'ⲙⲏⲧ ⲙ̀ⲡⲁⲣⲑⲉⲛⲟⲥ',
          wordBank: ['ⲙⲏⲧ', 'ⲙ̀', 'ⲡⲁⲣⲑⲉⲛⲟⲥ', 'ⲛ̀'],
          explanation: 'ⲙⲏⲧ ⲙ̀ⲡⲁⲣⲑⲉⲛⲟⲥ = 10 virgins (ⲙ̀ before ⲡ, ⲡⲁⲣⲑⲉⲛⲟⲥ is feminine)'
        },
        {
          id: 'ex-38-2-7',
          type: 'translation',
          question: 'Translate: ⲯⲓϯ ⲛ̀ⲯⲩⲭⲏ',
          questionCoptic: 'ⲯⲓϯ ⲛ̀ⲯⲩⲭⲏ',
          correctAnswer: 'Nine souls',
          options: ['Nine souls', 'Ninety souls', 'The ninth soul', 'Nine men'],
          explanation: 'ⲯⲓϯ ⲛ̀ⲯⲩⲭⲏ = nine souls (ⲯⲓϯ = feminine form of 9)'
        },
        {
          id: 'ex-38-2-8',
          type: 'multiple_choice',
          question: 'Feminine number forms typically end in:',
          correctAnswer: '-ⲉ or -ⲓ',
          options: ['-ⲉ or -ⲓ', '-ⲟⲩ', '-ⲁⲩ', 'No change'],
          explanation: 'Feminine numbers often end in -ⲉ or -ⲓ (ⲥⲛⲧⲉ, ϣⲟⲙϯ, ϯⲉ, etc.)'
        }
      ]
    },
    {
      id: 'lesson-38-3',
      unitId: 'unit-38',
      title: 'Plural Patterns with Numbers',
      description: 'When nouns stay singular vs plural',
      order: 3,
      xpReward: 30,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-38-3-1',
          type: 'multiple_choice',
          question: 'After numbers in Coptic, nouns are usually:',
          correctAnswer: 'Singular',
          options: ['Singular', 'Plural', 'Dual', 'Either'],
          explanation: 'In Coptic, nouns after numbers remain SINGULAR (like "three man" not "three men")'
        },
        {
          id: 'ex-38-3-2',
          type: 'matching',
          question: 'Match correct Coptic counting patterns',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ϣⲟⲙⲧ ⲛ̀ⲣⲱⲙⲓ', english: 'three men (lit. "three man")' },
            { coptic: 'ϯⲟⲩ ⲛ̀ⲁ̀ⲗⲟⲩ', english: 'five boys (lit. "five boy")' },
            { coptic: 'ⲙⲏⲧ ⲛ̀ϣⲏⲣⲓ', english: 'ten sons (lit. "ten son")' },
            { coptic: 'ⲥⲛⲁⲩ ⲛ̀ⲥⲟⲛ', english: 'two brothers (lit. "two brother")' }
          ]
        },
        {
          id: 'ex-38-3-3',
          type: 'translation',
          question: 'Translate: ⲙⲏⲧⲥⲛⲁⲩ ⲙ̀ⲙⲁⲑⲏⲧⲏⲥ',
          questionCoptic: 'ⲙⲏⲧⲥⲛⲁⲩ ⲙ̀ⲙⲁⲑⲏⲧⲏⲥ',
          correctAnswer: 'Twelve disciples',
          options: ['Twelve disciples', 'Two disciples', 'Twenty disciples', 'The twelve disciples'],
          explanation: 'ⲙⲏⲧⲥⲛⲁⲩ ⲙ̀ⲙⲁⲑⲏⲧⲏⲥ = twelve disciples (noun stays singular after number)'
        },
        {
          id: 'ex-38-3-4',
          type: 'fill_blank',
          question: 'Complete: ϣϥⲉ ⲛ̀___ = seventy sons',
          correctAnswer: 'ϣⲏⲣⲓ',
          options: ['ϣⲏⲣⲓ', 'ⲛⲓϣⲏⲣⲓ', 'ϣⲏⲣⲓⲟⲩ', 'ϣⲉⲣⲓ'],
          explanation: 'ϣϥⲉ ⲛ̀ϣⲏⲣⲓ = seventy sons (ϣⲏⲣⲓ stays singular)'
        },
        {
          id: 'ex-38-3-5',
          type: 'sentence_building',
          question: 'Build: "500 men"',
          correctAnswer: 'ϯⲟⲩ ⲛ̀ϣⲉ ⲛ̀ⲣⲱⲙⲓ',
          wordBank: ['ϯⲟⲩ', 'ⲛ̀ϣⲉ', 'ⲛ̀ⲣⲱⲙⲓ', 'ⲙ̀'],
          explanation: 'ϯⲟⲩ ⲛ̀ϣⲉ ⲛ̀ⲣⲱⲙⲓ = 500 men (lit. "five of hundred of man")'
        },
        {
          id: 'ex-38-3-6',
          type: 'translation',
          question: 'Translate: ϣⲉ ⲙ̀ⲙⲁⲑⲏⲧⲏⲥ',
          questionCoptic: 'ϣⲉ ⲙ̀ⲙⲁⲑⲏⲧⲏⲥ',
          correctAnswer: 'A hundred disciples',
          options: ['A hundred disciples', 'Ten disciples', 'One hundred disciples', 'The disciples'],
          explanation: 'ϣⲉ ⲙ̀ⲙⲁⲑⲏⲧⲏⲥ = 100 disciples (singular ⲙⲁⲑⲏⲧⲏⲥ after number)'
        },
        {
          id: 'ex-38-3-7',
          type: 'multiple_choice',
          question: 'Which is CORRECT Coptic for "three books"?',
          correctAnswer: 'ϣⲟⲙⲧ ⲛ̀ϫⲱⲙ',
          options: ['ϣⲟⲙⲧ ⲛ̀ϫⲱⲙ', 'ϣⲟⲙⲧ ⲛ̀ⲛⲓϫⲱⲙ', 'ϣⲟⲙⲧ ϫⲱⲙⲟⲩ', 'ⲛⲓϣⲟⲙⲧ ⲛ̀ϫⲱⲙ'],
          explanation: 'ϣⲟⲙⲧ ⲛ̀ϫⲱⲙ = three books (ϫⲱⲙ singular, not ⲛⲓϫⲱⲙ plural)'
        },
        {
          id: 'ex-38-3-8',
          type: 'translation',
          question: 'Translate: ⲙⲁⲃ ⲛ̀ⲣⲟⲙⲡⲓ',
          questionCoptic: 'ⲙⲁⲃ ⲛ̀ⲣⲟⲙⲡⲓ',
          correctAnswer: 'Thirty years',
          options: ['Thirty years', 'Three years', 'Thirteen years', 'The thirtieth year'],
          explanation: 'ⲙⲁⲃ ⲛ̀ⲣⲟⲙⲡⲓ = 30 years (ⲣⲟⲙⲡⲓ = year, stays singular)'
        }
      ]
    },
    {
      id: 'lesson-38-4',
      unitId: 'unit-38',
      title: 'Counting People & Things',
      description: 'Practical counting in context',
      order: 4,
      xpReward: 30,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-38-4-1',
          type: 'translation',
          question: 'Translate: ⲁⲓⲛⲁⲩ ⲉ̀ϣⲟⲙⲧ ⲛ̀ⲣⲱⲙⲓ',
          questionCoptic: 'ⲁⲓⲛⲁⲩ ⲉ̀ϣⲟⲙⲧ ⲛ̀ⲣⲱⲙⲓ',
          correctAnswer: 'I saw three men',
          options: ['I saw three men', 'Three men saw me', 'I see three men', 'I saw the third man'],
          explanation: 'ⲁⲓⲛⲁⲩ ⲉ̀ϣⲟⲙⲧ ⲛ̀ⲣⲱⲙⲓ = I saw three men'
        },
        {
          id: 'ex-38-4-2',
          type: 'matching',
          question: 'Match biblical number expressions',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲙⲏⲧⲥⲛⲁⲩ ⲛ̀ⲁ̀ⲡⲟⲥⲧⲟⲗⲟⲥ', english: '12 apostles' },
            { coptic: 'ϣⲁϣϥⲉ ⲛ̀ⲉⲕⲕⲗⲏⲥⲓⲁ', english: '7 churches' },
            { coptic: 'ⲙⲏⲧ ⲙ̀ⲡⲁⲣⲑⲉⲛⲟⲥ', english: '10 virgins' },
            { coptic: 'ϣⲟⲙⲧ ⲛ̀ⲉϩⲟⲟⲩ', english: '3 days' }
          ]
        },
        {
          id: 'ex-38-4-3',
          type: 'sentence_building',
          question: 'Build: "I have five sons"',
          correctAnswer: 'ⲟⲩⲟⲛϯ ϯⲟⲩ ⲛ̀ϣⲏⲣⲓ',
          wordBank: ['ⲟⲩⲟⲛϯ', 'ϯⲟⲩ', 'ⲛ̀ϣⲏⲣⲓ', 'ⲙ̀'],
          explanation: 'ⲟⲩⲟⲛϯ ϯⲟⲩ ⲛ̀ϣⲏⲣⲓ = I have five sons (lit. "there is to-me five sons")'
        },
        {
          id: 'ex-38-4-4',
          type: 'fill_blank',
          question: 'Complete: ⲁⲛⲟⲩⲱⲙ ___ ⲛ̀ⲱⲓⲕ = We ate five loaves',
          correctAnswer: 'ϯⲟⲩ',
          options: ['ϯⲟⲩ', 'ϯⲉ', 'ⲙⲏⲧϯⲟⲩ', 'ϥⲧⲟⲟⲩ'],
          explanation: 'ⲁⲛⲟⲩⲱⲙ ϯⲟⲩ ⲛ̀ⲱⲓⲕ = we ate five loaves (masculine number with masculine noun)'
        },
        {
          id: 'ex-38-4-5',
          type: 'translation',
          question: 'Translate: ⲁⲩⲓ̀ ⲛ̀ϫⲉ ⲟⲩⲙⲏϣ ⲛ̀ⲣⲱⲙⲓ',
          questionCoptic: 'ⲁⲩⲓ̀ ⲛ̀ϫⲉ ⲟⲩⲙⲏϣ ⲛ̀ⲣⲱⲙⲓ',
          correctAnswer: 'A multitude of men came',
          options: ['A multitude of men came', 'Many men came', 'The men came', 'Men came'],
          explanation: 'ⲁⲩⲓ̀ ⲛ̀ϫⲉ ⲟⲩⲙⲏϣ ⲛ̀ⲣⲱⲙⲓ = a multitude of men came (ⲟⲩⲙⲏϣ = multitude)'
        },
        {
          id: 'ex-38-4-6',
          type: 'matching',
          question: 'Match quantity expressions',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲟⲩⲙⲏϣ ⲛ̀-', english: 'a multitude of' },
            { coptic: 'ⲟⲩϣⲱⲓ ⲛ̀-', english: 'a few of' },
            { coptic: 'ⲟⲩⲏⲟⲩⲟ̀ ⲛ̀-', english: 'more of' },
            { coptic: 'ⲧⲏⲣⲟⲩ', english: 'all of them' }
          ]
        },
        {
          id: 'ex-38-4-7',
          type: 'translation',
          question: 'Translate: ϩⲙⲉ ⲛ̀ⲉϩⲟⲟⲩ ⲛⲉⲙ ϩⲙⲉ ⲛ̀ⲉϫⲱⲣϩ',
          questionCoptic: 'ϩⲙⲉ ⲛ̀ⲉϩⲟⲟⲩ ⲛⲉⲙ ϩⲙⲉ ⲛ̀ⲉϫⲱⲣϩ',
          correctAnswer: 'Forty days and forty nights',
          options: ['Forty days and forty nights', 'Four days and four nights', 'Fourteen days and nights', 'Days and nights'],
          explanation: 'ϩⲙⲉ ⲛ̀ⲉϩⲟⲟⲩ ⲛⲉⲙ ϩⲙⲉ ⲛ̀ⲉϫⲱⲣϩ = 40 days and 40 nights (biblical reference)'
        },
        {
          id: 'ex-38-4-8',
          type: 'sentence_building',
          question: 'Build: "They were about 5000 men"',
          correctAnswer: 'ⲛⲁⲩⲉⲣ ϯⲟⲩ ⲛ̀ϣⲟ ⲛ̀ⲣⲱⲙⲓ',
          wordBank: ['ⲛⲁⲩⲉⲣ', 'ϯⲟⲩ', 'ⲛ̀ϣⲟ', 'ⲛ̀ⲣⲱⲙⲓ'],
          explanation: 'ⲛⲁⲩⲉⲣ ϯⲟⲩ ⲛ̀ϣⲟ ⲛ̀ⲣⲱⲙⲓ = they were about 5000 men (ϣⲟ = 1000)'
        }
      ]
    }
  ]
};

export default unit38;
