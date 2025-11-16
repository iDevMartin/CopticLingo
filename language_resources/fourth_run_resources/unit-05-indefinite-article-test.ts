import { Lesson } from '../../types';

const unit5Test: Lesson = {
  id: 'test-5',
  unitId: 'unit-5',
  title: 'Unit 5 Test: Indefinite Article & Noun Basics',
  description: 'Comprehensive test of indefinite articles (ⲟⲩ, ϩⲁⲛ) and noun patterns',
  order: 6,
  xpReward: 50,
  isLocked: true,
  completed: false,
  exercises: [
    {
      id: 'test-5-1',
      type: 'multiple_choice',
      question: 'What is the indefinite article in Coptic?',
      correctAnswer: 'ⲟⲩ',
      options: ['ⲟⲩ', 'ⲡⲓ', 'ϯ', 'ⲛⲓ'],
      explanation: 'ⲟⲩ (ou) means "a" or "an" (for all genders)'
    },
    {
      id: 'test-5-2',
      type: 'translation',
      question: 'Translate: ⲟⲩⲣⲱⲙⲓ',
      questionCoptic: 'ⲟⲩⲣⲱⲙⲓ',
      correctAnswer: 'a man',
      options: ['a man', 'the man', 'men', 'the men'],
      explanation: 'ⲟⲩⲣⲱⲙⲓ = ⲟⲩ (a) + ⲣⲱⲙⲓ (man) = "a man"'
    },
    {
      id: 'test-5-3',
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
      id: 'test-5-4',
      type: 'fill_blank',
      question: 'Complete: ___ ⲥⲱⲛⲓ = a sister',
      correctAnswer: 'ⲟⲩ',
      options: ['ⲟⲩ', 'ⲡⲓ', 'ϯ', 'ⲛⲓ'],
      explanation: 'ⲟⲩ is the indefinite article meaning "a/an"'
    },
    {
      id: 'test-5-5',
      type: 'sentence_building',
      question: 'Build: "a father"',
      correctAnswer: 'ⲟⲩⲓⲱⲧ',
      wordBank: ['ⲟⲩ', 'ⲓⲱⲧ', 'ⲡⲓ', 'ϯ'],
      explanation: 'ⲟⲩⲓⲱⲧ = ⲟⲩ (a) + ⲓⲱⲧ (father)'
    },
    {
      id: 'test-5-6',
      type: 'multiple_choice',
      question: 'What is the plural indefinite article?',
      correctAnswer: 'ϩⲁⲛ',
      options: ['ϩⲁⲛ', 'ⲟⲩ', 'ⲛⲓ', 'ⲡⲓ'],
      explanation: 'ϩⲁⲛ (han) means "some" or indefinite plural'
    },
    {
      id: 'test-5-7',
      type: 'translation',
      question: 'Translate: ϩⲁⲛⲣⲱⲙⲓ',
      questionCoptic: 'ϩⲁⲛⲣⲱⲙⲓ',
      correctAnswer: 'some men',
      options: ['some men', 'the men', 'a man', 'men'],
      explanation: 'ϩⲁⲛⲣⲱⲙⲓ = ϩⲁⲛ (some) + ⲣⲱⲙⲓ (men) = "some men"'
    },
    {
      id: 'test-5-8',
      type: 'matching',
      question: 'Match plural indefinite articles',
      correctAnswer: 'matched',
      pairs: [
        { coptic: 'ϩⲁⲛⲣⲱⲙⲓ', english: 'some men' },
        { coptic: 'ϩⲁⲛϩⲓⲙⲓ', english: 'some women' },
        { coptic: 'ϩⲁⲛⲥⲱⲛⲓ', english: 'some sisters' },
        { coptic: 'ϩⲁⲛϫⲱⲙ', english: 'some books' }
      ]
    },
    {
      id: 'test-5-9',
      type: 'fill_blank',
      question: 'Complete: ___ ⲥⲱⲛⲓ = some sisters',
      correctAnswer: 'ϩⲁⲛ',
      options: ['ϩⲁⲛ', 'ⲛⲓ', 'ⲟⲩ', 'ϯ'],
      explanation: 'ϩⲁⲛ is the plural indefinite article'
    },
    {
      id: 'test-5-10',
      type: 'sentence_building',
      question: 'Build: "some fathers"',
      correctAnswer: 'ϩⲁⲛⲓⲱⲧ',
      wordBank: ['ϩⲁⲛ', 'ⲓⲱⲧ', 'ⲛⲓ', 'ⲟⲩ'],
      explanation: 'ϩⲁⲛⲓⲱⲧ = ϩⲁⲛ (some) + ⲓⲱⲧ (fathers)'
    },
    {
      id: 'test-5-11',
      type: 'multiple_choice',
      question: 'What gender is ⲣⲱⲙⲓ (man)?',
      correctAnswer: 'Masculine',
      options: ['Masculine', 'Feminine', 'Neutral', 'Plural'],
      explanation: 'ⲣⲱⲙⲓ is masculine (uses Ⲡⲓ)'
    },
    {
      id: 'test-5-12',
      type: 'multiple_choice',
      question: 'What gender is ϩⲓⲙⲓ (woman)?',
      correctAnswer: 'Feminine',
      options: ['Feminine', 'Masculine', 'Neutral', 'Plural'],
      explanation: 'ϩⲓⲙⲓ is feminine (uses Ϯ)'
    },
    {
      id: 'test-5-13',
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
      id: 'test-5-14',
      type: 'fill_blank',
      question: 'Complete with correct article: ___ ϩⲓⲙⲓ (the woman)',
      correctAnswer: 'ϯ',
      options: ['ϯ', 'ⲡⲓ', 'ⲛⲓ', 'ⲟⲩ'],
      explanation: 'ϩⲓⲙⲓ is feminine, so uses Ϯ (the)'
    },
    {
      id: 'test-5-15',
      type: 'multiple_choice',
      question: 'What is the plural of ⲣⲱⲙⲓ (man)?',
      correctAnswer: 'ⲣⲱⲙⲓ (same form)',
      options: ['ⲣⲱⲙⲓ (same form)', 'ⲣⲱⲙⲓⲥ', 'ⲣⲱⲙⲉⲛ', 'ⲣⲱⲙⲱⲛ'],
      explanation: 'Most Coptic nouns have SAME form for singular and plural'
    },
    {
      id: 'test-5-16',
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
      id: 'test-5-17',
      type: 'fill_blank',
      question: 'Complete plural: ___ ϩⲓⲙⲓ = the women',
      correctAnswer: 'ⲛⲓ',
      options: ['ⲛⲓ', 'ϯ', 'ϩⲁⲛ', 'ⲡⲓ'],
      explanation: 'ⲛⲓϩⲓⲙⲓ = the women (Ⲛⲓ = plural definite article)'
    },
    {
      id: 'test-5-18',
      type: 'multiple_choice',
      question: 'Which is the IRREGULAR plural of ⲥⲟⲛ (brother)?',
      correctAnswer: 'ⲥⲛⲏⲟⲩ',
      options: ['ⲥⲛⲏⲟⲩ', 'ⲥⲟⲛ', 'ⲥⲟⲛⲉⲛ', 'ⲥⲟⲛⲓ'],
      explanation: 'ⲥⲟⲛ (brother) → ⲥⲛⲏⲟⲩ (brothers) - IRREGULAR plural'
    },
    {
      id: 'test-5-19',
      type: 'translation',
      question: 'Translate: ⲛⲓⲥⲛⲏⲟⲩ',
      questionCoptic: 'ⲛⲓⲥⲛⲏⲟⲩ',
      correctAnswer: 'the brothers',
      options: ['the brothers', 'the brother', 'some brothers', 'a brother'],
      explanation: 'ⲛⲓⲥⲛⲏⲟⲩ = the brothers (Ⲛⲓ + ⲥⲛⲏⲟⲩ irregular plural of ⲥⲟⲛ)'
    },
    {
      id: 'test-5-20',
      type: 'translation',
      question: 'Translate: ⲙ̀ⲙⲟⲛ ⲱⲓⲕ',
      questionCoptic: 'ⲙ̀ⲙⲟⲛ ⲱⲓⲕ',
      correctAnswer: 'there is no bread',
      options: ['there is no bread', 'not a bread', 'the bread is not', 'without bread'],
      explanation: 'ⲙ̀ⲙⲟⲛ ⲱⲓⲕ = there is no bread (negative existential omits article)'
    },
    {
      id: 'test-5-21',
      type: 'matching',
      question: 'Match usage patterns',
      correctAnswer: 'matched',
      pairs: [
        { coptic: 'ⲟⲩⲟⲛ ⲟⲩⲣⲱⲙⲓ', english: 'there is a man (with article)' },
        { coptic: 'ⲙ̀ⲙⲟⲛ ⲣⲱⲙⲓ', english: 'there is no man (no article)' },
        { coptic: 'ϧⲉⲛ ⲟⲩⲣⲁϣⲓ', english: 'in joy (with article)' },
        { coptic: 'ⲁⲛⲟⲕ ⲟⲩⲭ̀ⲣⲓⲥⲧⲓⲁⲛⲟⲥ', english: 'I am a Christian' }
      ]
    },
    {
      id: 'test-5-22',
      type: 'fill_blank',
      question: 'Complete negative: ⲙ̀ⲙⲟⲛ ___ ⲙⲱⲟⲩ = there is no water',
      correctAnswer: 'ⲙⲱⲟⲩ',
      options: ['ⲙⲱⲟⲩ', 'ⲟⲩⲙⲱⲟⲩ', 'ⲡⲓⲙⲱⲟⲩ', 'ϩⲁⲛⲙⲱⲟⲩ'],
      explanation: 'In negatives (ⲙ̀ⲙⲟⲛ), the noun typically has NO article'
    },
    {
      id: 'test-5-23',
      type: 'sentence_building',
      question: 'Build: "a house"',
      correctAnswer: 'ⲟⲩϩⲓ',
      wordBank: ['ⲟⲩ', 'ϩⲓ', 'ϯ', 'ⲛⲓ'],
      explanation: 'ⲟⲩϩⲓ = ⲟⲩ (a) + ϩⲓ (house)'
    },
    {
      id: 'test-5-24',
      type: 'translation',
      question: 'Translate to Coptic: "some children"',
      correctAnswer: 'ϩⲁⲛⲁⲗⲟⲩ',
      options: ['ϩⲁⲛⲁⲗⲟⲩ', 'ⲛⲓⲁⲗⲟⲩ', 'ⲟⲩⲁⲗⲟⲩ', 'ⲡⲓⲁⲗⲟⲩ'],
      explanation: 'ϩⲁⲛⲁⲗⲟⲩ = ϩⲁⲛ (some) + ⲁⲗⲟⲩ (children)'
    },
    {
      id: 'test-5-25',
      type: 'sentence_building',
      question: 'Build: "the eyes" (ⲃⲁⲗ = eye)',
      correctAnswer: 'ⲛⲓⲃⲁⲗ',
      wordBank: ['ⲛⲓ', 'ⲃⲁⲗ', 'ⲡⲓ', 'ϩⲁⲛ'],
      explanation: 'ⲛⲓⲃⲁⲗ = the eyes (plural article Ⲛⲓ + ⲃⲁⲗ unchanged)'
    }
  ]
};

export default unit5Test;
