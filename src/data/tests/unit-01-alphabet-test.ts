import { Lesson } from '../../types';

// UNIT 1 TEST: COPTIC ALPHABET
// Comprehensive test covering all 6 lessons in Unit 1
// Tests knowledge of all 32 Coptic letters and their sounds

const unit1Test: Lesson = {
  id: 'test-1',
  unitId: 'unit-1',
  title: 'Unit 1 Test: Coptic Alphabet',
  description: 'Comprehensive test of all Coptic letters and sounds',
  order: 7,
  xpReward: 50,
  isLocked: true,
  completed: false,
  exercises: [
    // Greek-derived letters (Ⲁ-Ⲱ)
    {
      id: 'test-1-1',
      type: 'matching',
      question: 'Match letters Ⲁ-Ⲇ to their sounds',
      correctAnswer: 'matched',
      pairs: [
        { coptic: 'Ⲁ', english: 'ah' },
        { coptic: 'Ⲃ', english: 'b' },
        { coptic: 'Ⲅ', english: 'g/gh' },
        { coptic: 'Ⲇ', english: 'd' }
      ]
    },
    {
      id: 'test-1-2',
      type: 'matching',
      question: 'Match letters Ⲉ-Ⲙ to their sounds',
      correctAnswer: 'matched',
      pairs: [
        { coptic: 'Ⲉ', english: 'eh' },
        { coptic: 'Ⲍ', english: 'z' },
        { coptic: 'Ⲏ', english: 'ay' },
        { coptic: 'Ⲑ', english: 'th' }
      ]
    },
    {
      id: 'test-1-3',
      type: 'matching',
      question: 'Match letters Ⲓ-Ⲣ to their sounds',
      correctAnswer: 'matched',
      pairs: [
        { coptic: 'Ⲓ', english: 'ee' },
        { coptic: 'Ⲕ', english: 'k' },
        { coptic: 'Ⲗ', english: 'l' },
        { coptic: 'Ⲙ', english: 'm' }
      ]
    },
    {
      id: 'test-1-4',
      type: 'multiple_choice',
      question: 'What sound does Ⲛ make?',
      questionCoptic: 'Ⲛ',
      correctAnswer: 'n',
      options: ['n', 'm', 'ng', 'r'],
      explanation: 'Ⲛ (Ni) makes the "n" sound'
    },
    {
      id: 'test-1-5',
      type: 'matching',
      question: 'Match letters Ⲝ-Ⲧ to their sounds',
      correctAnswer: 'matched',
      pairs: [
        { coptic: 'Ⲝ', english: 'ks' },
        { coptic: 'Ⲟ', english: 'oh' },
        { coptic: 'Ⲡ', english: 'p' },
        { coptic: 'Ⲣ', english: 'r' }
      ]
    },
    {
      id: 'test-1-6',
      type: 'matching',
      question: 'Match final Greek letters to their sounds',
      correctAnswer: 'matched',
      pairs: [
        { coptic: 'Ⲥ', english: 's' },
        { coptic: 'Ⲧ', english: 't' },
        { coptic: 'Ⲩ', english: 'u/v/w' },
        { coptic: 'Φ', english: 'f' }
      ]
    },
    {
      id: 'test-1-7',
      type: 'multiple_choice',
      question: 'What sound does Χ (Khi) make?',
      questionCoptic: 'Χ',
      correctAnswer: 'kh (guttural)',
      options: ['kh (guttural)', 'k', 'h', 'sh'],
      explanation: 'Χ (Khi) makes a guttural "kh" sound like Scottish "loch"'
    },
    {
      id: 'test-1-8',
      type: 'matching',
      question: 'Match Ψ and Ⲱ to their sounds',
      correctAnswer: 'matched',
      pairs: [
        { coptic: 'Ψ', english: 'ps' },
        { coptic: 'Ⲱ', english: 'oh (long)' }
      ]
    },
    // Demotic (Egyptian-derived) letters
    {
      id: 'test-1-9',
      type: 'matching',
      question: 'Match Demotic letters (Part 1) to their sounds',
      correctAnswer: 'matched',
      pairs: [
        { coptic: 'Ϣ', english: 'sh' },
        { coptic: 'Ϥ', english: 'f' },
        { coptic: 'Ϧ', english: 'kh' },
        { coptic: 'Ϩ', english: 'h' }
      ]
    },
    {
      id: 'test-1-10',
      type: 'matching',
      question: 'Match Demotic letters (Part 2) to their sounds',
      correctAnswer: 'matched',
      pairs: [
        { coptic: 'Ϫ', english: 'j' },
        { coptic: 'Ϭ', english: 'ch' },
        { coptic: 'Ϯ', english: 'ti/di' }
      ]
    },
    // Vocabulary recall
    {
      id: 'test-1-11',
      type: 'translation',
      question: 'What does ⲁⲃⲃⲁ mean?',
      questionCoptic: 'ⲁⲃⲃⲁ',
      correctAnswer: 'father',
      options: ['father', 'mother', 'brother', 'name'],
      explanation: 'ⲁⲃⲃⲁ (abba) means "father"'
    },
    {
      id: 'test-1-12',
      type: 'translation',
      question: 'What does ⲣⲁⲛ mean?',
      questionCoptic: 'ⲣⲁⲛ',
      correctAnswer: 'name',
      options: ['name', 'bread', 'father', 'brother'],
      explanation: 'ⲣⲁⲛ (ran) means "name"'
    },
    {
      id: 'test-1-13',
      type: 'translation',
      question: 'What does ⲱⲓⲕ mean?',
      questionCoptic: 'ⲱⲓⲕ',
      correctAnswer: 'bread',
      options: ['bread', 'water', 'wine', 'name'],
      explanation: 'ⲱⲓⲕ (oik) means "bread"'
    },
    {
      id: 'test-1-14',
      type: 'translation',
      question: 'What does ⲥⲟⲛ mean?',
      questionCoptic: 'ⲥⲟⲛ',
      correctAnswer: 'brother',
      options: ['brother', 'sister', 'son', 'father'],
      explanation: 'ⲥⲟⲛ (son) means "brother"'
    },
    {
      id: 'test-1-15',
      type: 'translation',
      question: 'What does ϣⲏⲣⲓ mean?',
      questionCoptic: 'ϣⲏⲣⲓ',
      correctAnswer: 'son/child',
      options: ['son/child', 'daughter', 'father', 'brother'],
      explanation: 'ϣⲏⲣⲓ (shiri) means "son" or "child"'
    },
    {
      id: 'test-1-16',
      type: 'translation',
      question: 'What does ϩⲓ mean?',
      questionCoptic: 'ϩⲓ',
      correctAnswer: 'house',
      options: ['house', 'door', 'bread', 'son'],
      explanation: 'ϩⲓ (hi) means "house"'
    },
    {
      id: 'test-1-17',
      type: 'translation',
      question: 'What does ϫⲱ mean?',
      questionCoptic: 'ϫⲱ',
      correctAnswer: 'say/speak',
      options: ['say/speak', 'hear', 'see', 'go'],
      explanation: 'ϫⲱ (jo) means "say" or "speak"'
    },
    {
      id: 'test-1-18',
      type: 'translation',
      question: 'What does Ϯ mean when used as a verb?',
      questionCoptic: 'Ϯ',
      correctAnswer: 'give',
      options: ['give', 'take', 'speak', 'go'],
      explanation: 'Ϯ can be the verb "give" as well as a letter'
    },
    // Letter identification
    {
      id: 'test-1-19',
      type: 'multiple_choice',
      question: 'Which letter makes the "sh" sound?',
      correctAnswer: 'Ϣ',
      options: ['Ϣ', 'Ⲥ', 'Ϭ', 'Ϫ'],
      explanation: 'Ϣ (Shai) makes the "sh" sound'
    },
    {
      id: 'test-1-20',
      type: 'multiple_choice',
      question: 'How many letters are in the complete Coptic alphabet?',
      correctAnswer: '32',
      options: ['24', '28', '32', '36'],
      explanation: 'The Coptic alphabet has 32 letters: 24 from Greek + 7 from Demotic + letter Ϯ'
    },
    // Sentence building
    {
      id: 'test-1-21',
      type: 'sentence_building',
      question: 'Build the word "father" (ⲁⲃⲃⲁ)',
      correctAnswer: 'ⲁ ⲃ ⲃ ⲁ',
      wordBank: ['ⲁ', 'ⲃ', 'ⲃ', 'ⲁ', 'ⲇ'],
      explanation: 'ⲁⲃⲃⲁ (abba) means "father"'
    },
    {
      id: 'test-1-22',
      type: 'sentence_building',
      question: 'Build the word "name" (ⲣⲁⲛ)',
      correctAnswer: 'ⲣ ⲁ ⲛ',
      wordBank: ['ⲣ', 'ⲁ', 'ⲛ', 'ⲙ', 'ⲗ'],
      explanation: 'ⲣⲁⲛ (ran) means "name"'
    },
    {
      id: 'test-1-23',
      type: 'sentence_building',
      question: 'Build the word "son" (ϣⲏⲣⲓ)',
      correctAnswer: 'ϣ ⲏ ⲣ ⲓ',
      wordBank: ['ϣ', 'ⲏ', 'ⲣ', 'ⲓ', 'ⲉ'],
      explanation: 'ϣⲏⲣⲓ (shiri) means "son" or "child"'
    },
    {
      id: 'test-1-24',
      type: 'sentence_building',
      question: 'Build the word "bread" (ⲱⲓⲕ)',
      correctAnswer: 'ⲱ ⲓ ⲕ',
      wordBank: ['ⲱ', 'ⲓ', 'ⲕ', 'ⲟ', 'ⲧ'],
      explanation: 'ⲱⲓⲕ (oik) means "bread"'
    },
    // Advanced letter recognition
    {
      id: 'test-1-25',
      type: 'fill_blank',
      question: 'The letter that makes "ch" as in "church" is ___',
      correctAnswer: 'Ϭ',
      options: ['Ϭ', 'Ϫ', 'Ⲭ', 'Ϧ'],
      explanation: 'Ϭ (Chima) makes "ch" as in "church"'
    }
  ]
};

export default unit1Test;
