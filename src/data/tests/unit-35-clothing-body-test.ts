import { Lesson } from '../../types';

// UNIT 35 TEST: CLOTHING & BODY
// Comprehensive test covering all 4 lessons in Unit 35
// Tests clothing items, body parts, personal care, and health expressions

const unit35Test: Lesson = {
  id: 'test-35',
  unitId: 'unit-35',
  title: 'Unit 35 Test: Clothing & Body',
  description: 'Comprehensive test of clothing, body parts, personal care, and health',
  order: 5,
  xpReward: 100,
  isLocked: true,
  completed: false,
  exercises: [
    {
      id: 'test-35-1',
      type: 'multiple_choice',
      question: 'What is "garment/clothing" in Coptic?',
      correctAnswer: 'ϩ̀ⲃⲱⲥ',
      options: ['ϩ̀ⲃⲱⲥ', 'ϫⲱⲙ', 'ⲧⲟⲧⲥ', 'ⲃⲁⲗ'],
      explanation: 'ϩ̀ⲃⲱⲥ = garment, clothing, robe'
    },
    {
      id: 'test-35-2',
      type: 'matching',
      question: 'Match basic clothing items',
      correctAnswer: 'matched',
      pairs: [
        { coptic: 'ϩ̀ⲃⲱⲥ', english: 'garment/robe' },
        { coptic: 'ⲥⲧⲟⲗⲏ', english: 'tunic/robe' },
        { coptic: 'ϣⲧⲏⲛ', english: 'tunic/shirt' },
        { coptic: 'ⲙⲟϫϩ', english: 'belt/girdle' }
      ]
    },
    {
      id: 'test-35-3',
      type: 'translation',
      question: 'Translate: ⲟⲩϩ̀ⲃⲱⲥ ⲛ̀ⲟⲩⲃⲁϣ',
      questionCoptic: 'ⲟⲩϩ̀ⲃⲱⲥ ⲛ̀ⲟⲩⲃⲁϣ',
      correctAnswer: 'A white garment',
      options: ['A white garment', 'White garments', 'The white garment', 'A bright robe'],
      explanation: 'A white garment'
    },
    {
      id: 'test-35-4',
      type: 'matching',
      question: 'Match footwear and accessories',
      correctAnswer: 'matched',
      pairs: [
        { coptic: 'ⲑⲱⲟⲩⲓ', english: 'sandal' },
        { coptic: 'ⲭⲗⲟⲙ', english: 'crown' },
        { coptic: 'ⲥⲱϣⲓ', english: 'ring' },
        { coptic: 'ϩⲓⲏⲧ', english: 'cloak' }
      ]
    },
    {
      id: 'test-35-5',
      type: 'fill_blank',
      question: 'Complete: ⲛⲁ___ = my sandals',
      correctAnswer: 'ⲑⲱⲟⲩⲓ',
      options: ['ⲑⲱⲟⲩⲓ', 'ϩ̀ⲃⲱⲥ', 'ⲙⲟϫϩ', 'ⲥⲱϣⲓ'],
      explanation: 'ⲛⲁⲑⲱⲟⲩⲓ = my sandals'
    },
    {
      id: 'test-35-6',
      type: 'sentence_building',
      question: 'Build: "He wears a robe"',
      correctAnswer: 'ϥϯϩⲓⲱⲧϥ ⲛ̀ⲟⲩⲥⲧⲟⲗⲏ',
      wordBank: ['ϥϯϩⲓⲱⲧϥ', 'ⲛ̀', 'ⲟⲩⲥⲧⲟⲗⲏ', 'ⲑⲱⲟⲩⲓ'],
      explanation: 'He wears a robe (ϯϩⲓⲱⲧ = to wear)'
    },
    {
      id: 'test-35-7',
      type: 'translation',
      question: 'Translate: ⲁⲓϯϩⲓⲱⲧ ⲙ̀ⲡⲁⲙⲟϫϩ',
      questionCoptic: 'ⲁⲓϯϩⲓⲱⲧ ⲙ̀ⲡⲁⲙⲟϫϩ',
      correctAnswer: 'I put on my belt',
      options: ['I put on my belt', 'I wear a belt', 'I took off my belt', 'I have a belt'],
      explanation: 'I put on my belt (past tense)'
    },
    {
      id: 'test-35-8',
      type: 'matching',
      question: 'Match body parts (head, neck, shoulders)',
      correctAnswer: 'matched',
      pairs: [
        { coptic: 'ⲁⲫⲉ', english: 'head' },
        { coptic: 'ⲙⲟϩⲣⲓ', english: 'neck' },
        { coptic: 'ⲧⲱⲧ', english: 'shoulder' },
        { coptic: 'ⲕⲉⲫⲓ', english: 'back' }
      ]
    },
    {
      id: 'test-35-9',
      type: 'matching',
      question: 'Match facial features',
      correctAnswer: 'matched',
      pairs: [
        { coptic: 'ⲃⲁⲗ', english: 'eye' },
        { coptic: 'ⲙⲁϣϫ', english: 'ear' },
        { coptic: 'ⲛⲉϩⲑⲓⲣ', english: 'nose' },
        { coptic: 'ⲣⲱ', english: 'mouth' }
      ]
    },
    {
      id: 'test-35-10',
      type: 'translation',
      question: 'Translate: ⲛⲁⲃⲁⲗ ⲛⲁⲛⲉⲩ ⲛⲉ',
      questionCoptic: 'ⲛⲁⲃⲁⲗ ⲛⲁⲛⲉⲩ ⲛⲉ',
      correctAnswer: 'My eyes are beautiful',
      options: ['My eyes are beautiful', 'Your eyes are good', 'His eyes are beautiful', 'The eyes are good'],
      explanation: 'My eyes are beautiful'
    },
    {
      id: 'test-35-11',
      type: 'matching',
      question: 'Match limbs and extremities',
      correctAnswer: 'matched',
      pairs: [
        { coptic: 'ϫⲓϫ', english: 'hand/arm' },
        { coptic: 'ⲧⲏⲃ', english: 'finger' },
        { coptic: 'ⲣⲁⲧ', english: 'foot/leg' },
        { coptic: 'ⲧⲏⲃ ⲛ̀ⲣⲁⲧ', english: 'toe' }
      ]
    },
    {
      id: 'test-35-12',
      type: 'fill_blank',
      question: 'Complete: ⲧⲁ___ = my hand',
      correctAnswer: 'ϫⲓϫ',
      options: ['ϫⲓϫ', 'ⲣⲁⲧ', 'ⲁⲫⲉ', 'ϩⲏⲧ'],
      explanation: 'ⲧⲁϫⲓϫ = my hand'
    },
    {
      id: 'test-35-13',
      type: 'matching',
      question: 'Match internal body parts',
      correctAnswer: 'matched',
      pairs: [
        { coptic: 'ϩⲏⲧ', english: 'heart' },
        { coptic: 'ⲕⲁϩⲧ', english: 'belly/stomach' },
        { coptic: 'ⲯⲩⲭⲏ', english: 'soul/breath' },
        { coptic: 'ⲥⲛⲟϥ', english: 'blood' }
      ]
    },
    {
      id: 'test-35-14',
      type: 'sentence_building',
      question: 'Build: "My heart is strong"',
      correctAnswer: 'ⲡⲁϩⲏⲧ ⲛ̀ϫⲱⲣⲓ',
      wordBank: ['ⲡⲁϩⲏⲧ', 'ⲛ̀', 'ϫⲱⲣⲓ', 'ⲁⲥⲑⲉⲛⲏⲥ'],
      explanation: 'My heart is strong'
    },
    {
      id: 'test-35-15',
      type: 'matching',
      question: 'Match personal care verbs',
      correctAnswer: 'matched',
      pairs: [
        { coptic: 'ⲓⲁϩ', english: 'to wash' },
        { coptic: 'ⲣⲁⲕⲥ', english: 'to wash/bathe' },
        { coptic: 'ⲫⲱϫⲓ', english: 'to comb/brush' },
        { coptic: 'ⲧⲱⲙⲧ', english: 'to cut' }
      ]
    },
    {
      id: 'test-35-16',
      type: 'translation',
      question: 'Translate: ϯⲓⲁϩ ⲛ̀ⲛⲁϫⲓϫ',
      questionCoptic: 'ϯⲓⲁϩ ⲛ̀ⲛⲁϫⲓϫ',
      correctAnswer: 'I wash my hands',
      options: ['I wash my hands', 'I washed my hands', 'Wash your hands', 'My hands are clean'],
      explanation: 'I wash my hands (present tense)'
    },
    {
      id: 'test-35-17',
      type: 'matching',
      question: 'Match cleanliness and appearance words',
      correctAnswer: 'matched',
      pairs: [
        { coptic: 'ⲟⲩⲁⲃ', english: 'clean/pure/holy' },
        { coptic: 'ⲥⲱϥ', english: 'dirty/unclean' },
        { coptic: 'ⲥⲁⲓⲉ', english: 'beautiful/fair' },
        { coptic: 'ϥⲱϫ', english: 'hair' }
      ]
    },
    {
      id: 'test-35-18',
      type: 'fill_blank',
      question: 'Complete: ⲡⲁϥⲱϫ ___ = my hair is clean',
      correctAnswer: 'ⲟⲩⲁⲃ',
      options: ['ⲟⲩⲁⲃ', 'ⲥⲱϥ', 'ϣⲁϣ', 'ⲕⲁϩⲓ'],
      explanation: 'My hair is clean/pure'
    },
    {
      id: 'test-35-19',
      type: 'matching',
      question: 'Match health-related verbs',
      correctAnswer: 'matched',
      pairs: [
        { coptic: 'ϣⲱⲛⲓ', english: 'to be sick/hurt' },
        { coptic: 'ⲧⲁⲗϭⲟ', english: 'to heal/cure' },
        { coptic: 'ⲙⲟⲕϩ', english: 'to suffer pain' },
        { coptic: 'ⲟⲩϫⲁⲓ', english: 'to be well/healthy' }
      ]
    },
    {
      id: 'test-35-20',
      type: 'translation',
      question: 'Translate: ϯϣⲱⲛⲓ',
      questionCoptic: 'ϯϣⲱⲛⲓ',
      correctAnswer: 'I am sick',
      options: ['I am sick', 'I am well', 'I hurt him', 'I was sick'],
      explanation: 'I am sick (present tense)'
    },
    {
      id: 'test-35-21',
      type: 'matching',
      question: 'Match health conditions',
      correctAnswer: 'matched',
      pairs: [
        { coptic: 'ⲁⲥⲑⲉⲛⲏⲥ', english: 'weak/sick' },
        { coptic: 'ϫⲱⲣⲓ', english: 'strong/healthy' },
        { coptic: 'ⲓⲁⲃⲉⲧ', english: 'fever/disease' },
        { coptic: 'ⲫⲁⲣⲙⲁⲕⲟⲛ', english: 'medicine' }
      ]
    },
    {
      id: 'test-35-22',
      type: 'fill_blank',
      question: 'Complete: ϯ___ = I am strong/healthy',
      correctAnswer: 'ϫⲱⲣⲓ',
      options: ['ϫⲱⲣⲓ', 'ⲁⲥⲑⲉⲛⲏⲥ', 'ϣⲱⲛⲓ', 'ⲙⲟⲕϩ'],
      explanation: 'I am strong, I am well'
    },
    {
      id: 'test-35-23',
      type: 'sentence_building',
      question: 'Build: "My head hurts"',
      correctAnswer: 'ⲧⲁⲁⲫⲉ ⲙⲟⲕϩ',
      wordBank: ['ⲧⲁⲁⲫⲉ', 'ⲙⲟⲕϩ', 'ϣⲱⲛⲓ', 'ⲛⲁⲛⲉϥ'],
      explanation: 'My head hurts (ⲙⲟⲕϩ = to suffer pain)'
    },
    {
      id: 'test-35-24',
      type: 'translation',
      question: 'Translate: ⲁϥⲧⲁⲗϭⲟⲓ',
      questionCoptic: 'ⲁϥⲧⲁⲗϭⲟⲓ',
      correctAnswer: 'He healed me',
      options: ['He healed me', 'I healed him', 'He is healing', 'He will heal me'],
      explanation: 'He healed me (past tense)'
    },
    {
      id: 'test-35-25',
      type: 'translation',
      question: 'Translate: ⲁⲓⲥⲱ ⲙ̀ⲡⲓⲫⲁⲣⲙⲁⲕⲟⲛ',
      questionCoptic: 'ⲁⲓⲥⲱ ⲙ̀ⲡⲓⲫⲁⲣⲙⲁⲕⲟⲛ',
      correctAnswer: 'I drank the medicine',
      options: ['I drank the medicine', 'I drink medicine', 'I will take medicine', 'The medicine is good'],
      explanation: 'I drank the medicine (past tense)'
    }
  ]
};

export default unit35Test;
