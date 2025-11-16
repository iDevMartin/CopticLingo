import { Lesson } from '../../types';

// UNIT 3 TEST: FIRST WORDS & BASIC VOCABULARY
// Comprehensive test covering all 5 lessons in Unit 3
// Tests greetings, numbers 1-10, family members, common nouns, and body parts

const unit3Test: Lesson = {
  id: 'test-3',
  unitId: 'unit-3',
  title: 'Unit 3 Test: First Words & Basic Vocabulary',
  description: 'Comprehensive test of essential Coptic vocabulary',
  order: 6,
  xpReward: 50,
  isLocked: true,
  completed: false,
  exercises: [
    // Basic Greetings
    {
      id: 'test-3-1',
      type: 'translation',
      question: 'Translate: ⲟⲩϫⲁⲓ',
      questionCoptic: 'ⲟⲩϫⲁⲓ',
      correctAnswer: 'Hello/Greetings',
      options: ['Hello/Greetings', 'Thank you', 'Goodbye', 'Please'],
      explanation: 'ⲟⲩϫⲁⲓ (oujai) means "hello" or "greetings"'
    },
    {
      id: 'test-3-2',
      type: 'multiple_choice',
      question: 'How do you say "Thank you" in Coptic?',
      correctAnswer: 'ϣⲉⲡϩⲙⲟⲧ',
      options: ['ϣⲉⲡϩⲙⲟⲧ', 'ⲟⲩϫⲁⲓ', 'ⲡⲁⲣⲁⲕⲁⲗⲓ', 'ⲭⲉⲣⲉ'],
      explanation: 'ϣⲉⲡϩⲙⲟⲧ (shep-hmot) = "thank you"'
    },
    {
      id: 'test-3-3',
      type: 'matching',
      question: 'Match the greetings',
      correctAnswer: 'matched',
      pairs: [
        { coptic: 'ⲟⲩϫⲁⲓ', english: 'Hello/Greetings' },
        { coptic: 'ϣⲉⲡϩⲙⲟⲧ', english: 'Thank you' },
        { coptic: 'ⲡⲁⲣⲁⲕⲁⲗⲓ', english: 'Please' },
        { coptic: 'ⲭⲉⲣⲉ', english: 'Hail/Rejoice' }
      ]
    },
    {
      id: 'test-3-4',
      type: 'translation',
      question: 'What does ϯϩⲓⲣⲏⲛⲏ ⲛⲁⲕ mean?',
      questionCoptic: 'ϯϩⲓⲣⲏⲛⲏ ⲛⲁⲕ',
      correctAnswer: 'Peace to you (masc.)',
      options: ['Peace to you (masc.)', 'Good morning', 'Thank you', 'Welcome'],
      explanation: 'ϯϩⲓⲣⲏⲛⲏ ⲛⲁⲕ = "the peace to you" (greeting to a male)'
    },
    // Numbers 1-10
    {
      id: 'test-3-5',
      type: 'matching',
      question: 'Match numbers 1-4 (masculine)',
      correctAnswer: 'matched',
      pairs: [
        { coptic: 'ⲟⲩⲁⲓ', english: 'one' },
        { coptic: 'ⲥⲛⲁⲩ', english: 'two' },
        { coptic: 'ϣⲟⲙⲧ', english: 'three' },
        { coptic: 'ϥⲧⲟⲟⲩ', english: 'four' }
      ]
    },
    {
      id: 'test-3-6',
      type: 'translation',
      question: 'What number is ϯⲟⲩ?',
      questionCoptic: 'ϯⲟⲩ',
      correctAnswer: 'five',
      options: ['five', 'six', 'seven', 'eight'],
      explanation: 'ϯⲟⲩ (tiou) = "five"'
    },
    {
      id: 'test-3-7',
      type: 'matching',
      question: 'Match numbers 6-9 (masculine)',
      correctAnswer: 'matched',
      pairs: [
        { coptic: 'ⲥⲟⲟⲩ', english: 'six' },
        { coptic: 'ϣⲁϣϥ', english: 'seven' },
        { coptic: 'ϣⲙⲏⲛ', english: 'eight' },
        { coptic: 'ⲯⲓⲧ', english: 'nine' }
      ]
    },
    {
      id: 'test-3-8',
      type: 'multiple_choice',
      question: 'What is "ten" in Coptic (masculine)?',
      correctAnswer: 'ⲙⲏⲧ',
      options: ['ⲙⲏⲧ', 'ⲯⲓⲧ', 'ϣⲙⲏⲛ', 'ϣⲁϣϥ'],
      explanation: 'ⲙⲏⲧ (mēt) = "ten" (masc.)'
    },
    {
      id: 'test-3-9',
      type: 'fill_blank',
      question: 'Complete: The number 3 is ___',
      correctAnswer: 'ϣⲟⲙⲧ',
      options: ['ϣⲟⲙⲧ', 'ϥⲧⲟⲟⲩ', 'ϯⲟⲩ', 'ⲥⲛⲁⲩ'],
      explanation: 'ϣⲟⲙⲧ (shomt) = "three" (masc.)'
    },
    // Family Members
    {
      id: 'test-3-10',
      type: 'matching',
      question: 'Match family members',
      correctAnswer: 'matched',
      pairs: [
        { coptic: 'ⲓⲱⲧ', english: 'father' },
        { coptic: 'ⲙⲁⲩ', english: 'mother' },
        { coptic: 'ⲥⲟⲛ', english: 'brother' },
        { coptic: 'ⲥⲱⲛⲓ', english: 'sister' }
      ]
    },
    {
      id: 'test-3-11',
      type: 'translation',
      question: 'What does ⲣⲱⲙⲓ mean?',
      questionCoptic: 'ⲣⲱⲙⲓ',
      correctAnswer: 'man/human',
      options: ['man/human', 'person', 'woman', 'child'],
      explanation: 'ⲣⲱⲙⲓ (rōmi) = "man" or "human being"'
    },
    {
      id: 'test-3-12',
      type: 'multiple_choice',
      question: 'What is "woman" in Coptic?',
      correctAnswer: 'ϩⲓⲙⲓ',
      options: ['ϩⲓⲙⲓ', 'ⲣⲱⲙⲓ', 'ⲙⲁⲩ', 'ⲥⲱⲛⲓ'],
      explanation: 'ϩⲓⲙⲓ (himi) = "woman"'
    },
    {
      id: 'test-3-13',
      type: 'matching',
      question: 'Match children-related words',
      correctAnswer: 'matched',
      pairs: [
        { coptic: 'ϣⲏⲣⲓ', english: 'son/child' },
        { coptic: 'ϣⲉⲣⲓ', english: 'daughter' },
        { coptic: 'ⲁⲗⲟⲩ', english: 'boy' },
        { coptic: 'ⲣⲱⲙⲓ', english: 'man' }
      ]
    },
    {
      id: 'test-3-14',
      type: 'translation',
      question: 'Translate to Coptic: "sister"',
      correctAnswer: 'ⲥⲱⲛⲓ',
      options: ['ⲥⲱⲛⲓ', 'ⲥⲟⲛ', 'ϣⲉⲣⲓ', 'ⲙⲁⲩ'],
      explanation: 'ⲥⲱⲛⲓ (sōni) = "sister"'
    },
    // Common Nouns
    {
      id: 'test-3-15',
      type: 'matching',
      question: 'Match food and drink words',
      correctAnswer: 'matched',
      pairs: [
        { coptic: 'ⲙⲱⲟⲩ', english: 'water' },
        { coptic: 'ⲱⲓⲕ', english: 'bread' },
        { coptic: 'ⲏⲣⲡ', english: 'wine' },
        { coptic: 'ⲉⲃⲓⲱ', english: 'honey' }
      ]
    },
    {
      id: 'test-3-16',
      type: 'multiple_choice',
      question: 'What does ⲛⲟⲩⲃ mean?',
      questionCoptic: 'ⲛⲟⲩⲃ',
      correctAnswer: 'gold',
      options: ['gold', 'black', 'white', 'silver'],
      explanation: 'ⲛⲟⲩⲃ (noub) = "gold"'
    },
    {
      id: 'test-3-17',
      type: 'matching',
      question: 'Match household items',
      correctAnswer: 'matched',
      pairs: [
        { coptic: 'ϫⲱⲙ', english: 'book' },
        { coptic: 'ⲧⲟⲧⲥ', english: 'chair' },
        { coptic: 'ⲧⲣⲁⲡⲉⲍⲁ', english: 'table' },
        { coptic: 'ϩⲓ', english: 'house' }
      ]
    },
    {
      id: 'test-3-18',
      type: 'translation',
      question: 'What does ⲕⲁϩⲓ mean?',
      questionCoptic: 'ⲕⲁϩⲓ',
      correctAnswer: 'earth/land',
      options: ['earth/land', 'sky', 'water', 'fire'],
      explanation: 'ⲕⲁϩⲓ (kahi) = "earth" or "land"'
    },
    {
      id: 'test-3-19',
      type: 'translation',
      question: 'Translate to Coptic: "bread"',
      correctAnswer: 'ⲱⲓⲕ',
      options: ['ⲱⲓⲕ', 'ⲙⲱⲟⲩ', 'ⲏⲣⲡ', 'ⲉⲃⲓⲱ'],
      explanation: 'ⲱⲓⲕ (oik) = "bread"'
    },
    // Body Parts
    {
      id: 'test-3-20',
      type: 'matching',
      question: 'Match body parts',
      correctAnswer: 'matched',
      pairs: [
        { coptic: 'ⲃⲁⲗ', english: 'eye' },
        { coptic: 'ϫⲓϫ', english: 'hand' },
        { coptic: 'ⲣⲱ', english: 'mouth' },
        { coptic: 'ⲁⲫⲉ', english: 'head' }
      ]
    },
    {
      id: 'test-3-21',
      type: 'multiple_choice',
      question: 'What is "heart" in Coptic?',
      correctAnswer: 'ϩⲏⲧ',
      options: ['ϩⲏⲧ', 'ⲃⲁⲗ', 'ⲁⲫⲉ', 'ⲣⲱ'],
      explanation: 'ϩⲏⲧ (hēt) = "heart"'
    },
    {
      id: 'test-3-22',
      type: 'translation',
      question: 'What does ⲥⲱⲙⲁ mean?',
      questionCoptic: 'ⲥⲱⲙⲁ',
      correctAnswer: 'body',
      options: ['body', 'soul', 'spirit', 'mind'],
      explanation: 'ⲥⲱⲙⲁ (sōma) = "body" (Greek loanword)'
    },
    {
      id: 'test-3-23',
      type: 'matching',
      question: 'Match more body parts',
      correctAnswer: 'matched',
      pairs: [
        { coptic: 'ϩⲏⲧ', english: 'heart' },
        { coptic: 'ⲥⲱⲙⲁ', english: 'body' },
        { coptic: 'ⲙⲁϣϫ', english: 'ear' },
        { coptic: 'ⲛⲓϥⲓ', english: 'breath/soul' }
      ]
    },
    {
      id: 'test-3-24',
      type: 'multiple_choice',
      question: 'The plural of ⲃⲁⲗ (eye) is?',
      correctAnswer: 'ⲛⲓⲃⲁⲗ',
      options: ['ⲛⲓⲃⲁⲗ', 'ⲃⲁⲗⲟⲩ', 'ⲃⲁⲗⲓ', 'ⲃⲁⲗⲉ'],
      explanation: 'ⲛⲓⲃⲁⲗ (nibal) = "the eyes"'
    },
    {
      id: 'test-3-25',
      type: 'sentence_building',
      question: 'Build: "the hand" (ϯϫⲓϫ)',
      correctAnswer: 'ϯ ϫⲓϫ',
      wordBank: ['ϯ', 'ϫⲓϫ', 'ⲡⲓ', 'ⲃⲁⲗ'],
      explanation: 'ϯϫⲓϫ = ϯ (the-fem.) + ϫⲓϫ (hand - feminine noun)'
    },
    // Mixed Review
    {
      id: 'test-3-26',
      type: 'fill_blank',
      question: 'Complete: "seven" = ___',
      correctAnswer: 'ϣⲁϣϥ',
      options: ['ϣⲁϣϥ', 'ⲥⲟⲟⲩ', 'ϣⲙⲏⲛ', 'ⲯⲓⲧ'],
      explanation: 'ϣⲁϣϥ (shashf) = "seven" (masc.)'
    },
    {
      id: 'test-3-27',
      type: 'sentence_building',
      question: 'Build: "Thank you"',
      correctAnswer: 'ϣⲉⲡϩⲙⲟⲧ',
      wordBank: ['ϣⲉⲡ', 'ϩⲙⲟⲧ', 'ⲟⲩϫⲁⲓ', 'ⲛⲁⲕ'],
      explanation: 'ϣⲉⲡϩⲙⲟⲧ = ϣⲉⲡ (receive) + ϩⲙⲟⲧ (grace)'
    },
    {
      id: 'test-3-28',
      type: 'translation',
      question: 'Translate to Coptic: "mother"',
      correctAnswer: 'ⲙⲁⲩ',
      options: ['ⲙⲁⲩ', 'ⲓⲱⲧ', 'ⲥⲱⲛⲓ', 'ⲥⲟⲛ'],
      explanation: 'ⲙⲁⲩ (mau/mav) = "mother"'
    },
    {
      id: 'test-3-29',
      type: 'multiple_choice',
      question: 'What does ⲙⲁϣϫ mean?',
      questionCoptic: 'ⲙⲁϣϫ',
      correctAnswer: 'ear',
      options: ['ear', 'nose', 'eye', 'mouth'],
      explanation: 'ⲙⲁϣϫ (mashj) = "ear"'
    },
    {
      id: 'test-3-30',
      type: 'matching',
      question: 'Match comprehensive vocabulary',
      correctAnswer: 'matched',
      pairs: [
        { coptic: 'ϯⲟⲩ', english: 'five' },
        { coptic: 'ϫⲱⲙ', english: 'book' },
        { coptic: 'ϣⲏⲣⲓ', english: 'son/child' },
        { coptic: 'ⲡⲁⲣⲁⲕⲁⲗⲓ', english: 'please' }
      ]
    }
  ]
};

export default unit3Test;
