import { Unit } from '../../types';

// UNIT 35: CLOTHING & BODY
// Bohairic dialect - Personal care and appearance vocabulary
// Fills gap: Clothing items, extended body parts, health expressions

const unit35: Unit = {
  id: 'unit-35',
  title: 'Clothing & Body',
  description: 'Master vocabulary for clothing, body parts, and health',
  order: 35,
  color: '#9C27B0',
  lessons: [
    {
      id: 'lesson-35-1',
      unitId: 'unit-35',
      title: 'Basic Clothing Items',
      description: 'Essential garments and accessories',
      order: 1,
      xpReward: 20,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-35-1-1',
          type: 'multiple_choice',
          question: 'What is "garment/clothing" in Coptic?',
          correctAnswer: 'ϩ̀ⲃⲱⲥ',
          options: ['ϩ̀ⲃⲱⲥ', 'ϫⲱⲙ', 'ⲧⲟⲧⲥ', 'ⲃⲁⲗ'],
          explanation: 'ϩ̀ⲃⲱⲥ (hbos) = garment, clothing, robe'
        },
        {
          id: 'ex-35-1-2',
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
          id: 'ex-35-1-3',
          type: 'translation',
          question: 'Translate: ⲟⲩϩ̀ⲃⲱⲥ ⲛ̀ⲟⲩⲃⲁϣ',
          questionCoptic: 'ⲟⲩϩ̀ⲃⲱⲥ ⲛ̀ⲟⲩⲃⲁϣ',
          correctAnswer: 'A white garment',
          options: ['A white garment', 'White garments', 'The white garment', 'A bright robe'],
          explanation: 'ⲟⲩϩ̀ⲃⲱⲥ ⲛ̀ⲟⲩⲃⲁϣ = a white garment'
        },
        {
          id: 'ex-35-1-4',
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
          id: 'ex-35-1-5',
          type: 'fill_blank',
          question: 'Complete: ⲛⲁ___ = my sandals',
          correctAnswer: 'ⲑⲱⲟⲩⲓ',
          options: ['ⲑⲱⲟⲩⲓ', 'ϩ̀ⲃⲱⲥ', 'ⲙⲟϫϩ', 'ⲥⲱϣⲓ'],
          explanation: 'ⲛⲁⲑⲱⲟⲩⲓ = my sandals (ⲛⲁ- = my with plural noun)'
        },
        {
          id: 'ex-35-1-6',
          type: 'sentence_building',
          question: 'Build: "He wears a robe"',
          correctAnswer: 'ϥϯϩⲓⲱⲧϥ ⲛ̀ⲟⲩⲥⲧⲟⲗⲏ',
          wordBank: ['ϥϯϩⲓⲱⲧϥ', 'ⲛ̀', 'ⲟⲩⲥⲧⲟⲗⲏ', 'ⲑⲱⲟⲩⲓ'],
          explanation: 'ϥϯϩⲓⲱⲧϥ ⲛ̀ⲟⲩⲥⲧⲟⲗⲏ = he wears a robe (ϯϩⲓⲱⲧ = to wear/put on)'
        },
        {
          id: 'ex-35-1-7',
          type: 'translation',
          question: 'Translate: ⲁⲓϯϩⲓⲱⲧ ⲙ̀ⲡⲁⲙⲟϫϩ',
          questionCoptic: 'ⲁⲓϯϩⲓⲱⲧ ⲙ̀ⲡⲁⲙⲟϫϩ',
          correctAnswer: 'I put on my belt',
          options: ['I put on my belt', 'I wear a belt', 'I took off my belt', 'I have a belt'],
          explanation: 'ⲁⲓϯϩⲓⲱⲧ ⲙ̀ⲡⲁⲙⲟϫϩ = I put on my belt (past tense)'
        },
        {
          id: 'ex-35-1-8',
          type: 'multiple_choice',
          question: 'What verb means "to wear/put on"?',
          correctAnswer: 'ϯϩⲓⲱⲧ',
          options: ['ϯϩⲓⲱⲧ', 'ⲟⲩⲱⲙ', 'ⲙⲟϣⲓ', 'Ϯ'],
          explanation: 'ϯϩⲓⲱⲧ (ti-hiot) = to wear, to put on (clothing)'
        }
      ]
    },
    {
      id: 'lesson-35-2',
      unitId: 'unit-35',
      title: 'Extended Body Parts',
      description: 'Complete body vocabulary',
      order: 2,
      xpReward: 20,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-35-2-1',
          type: 'matching',
          question: 'Match body parts (review + new)',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲁⲫⲉ', english: 'head' },
            { coptic: 'ⲙⲟϩⲣⲓ', english: 'neck' },
            { coptic: 'ⲧⲱⲧ', english: 'shoulder' },
            { coptic: 'ⲕⲉⲫⲓ', english: 'back' }
          ]
        },
        {
          id: 'ex-35-2-2',
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
          id: 'ex-35-2-3',
          type: 'translation',
          question: 'Translate: ⲛⲁⲃⲁⲗ ⲛⲁⲛⲉⲩ ⲛⲉ',
          questionCoptic: 'ⲛⲁⲃⲁⲗ ⲛⲁⲛⲉⲩ ⲛⲉ',
          correctAnswer: 'My eyes are beautiful',
          options: ['My eyes are beautiful', 'Your eyes are good', 'His eyes are beautiful', 'The eyes are good'],
          explanation: 'ⲛⲁⲃⲁⲗ ⲛⲁⲛⲉⲩ ⲛⲉ = my eyes are beautiful (ⲛⲁⲃⲁⲗ = my eyes, plural)'
        },
        {
          id: 'ex-35-2-4',
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
          id: 'ex-35-2-5',
          type: 'fill_blank',
          question: 'Complete: ⲧⲁ___ = my hand',
          correctAnswer: 'ϫⲓϫ',
          options: ['ϫⲓϫ', 'ⲣⲁⲧ', 'ⲁⲫⲉ', 'ϩⲏⲧ'],
          explanation: 'ⲧⲁϫⲓϫ = my hand (ⲧⲁ- = my with feminine noun)'
        },
        {
          id: 'ex-35-2-6',
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
          id: 'ex-35-2-7',
          type: 'sentence_building',
          question: 'Build: "My heart is strong"',
          correctAnswer: 'ⲡⲁϩⲏⲧ ⲛ̀ϫⲱⲣⲓ',
          wordBank: ['ⲡⲁϩⲏⲧ', 'ⲛ̀', 'ϫⲱⲣⲓ', 'ⲁⲥⲑⲉⲛⲏⲥ'],
          explanation: 'ⲡⲁϩⲏⲧ ⲛ̀ϫⲱⲣⲓ = my heart is strong (ϫⲱⲣⲓ = strong)'
        },
        {
          id: 'ex-35-2-8',
          type: 'translation',
          question: 'Translate: ⲡⲉϥⲙⲟϩⲣⲓ ϣⲱⲛⲓ',
          questionCoptic: 'ⲡⲉϥⲙⲟϩⲣⲓ ϣⲱⲛⲓ',
          correctAnswer: 'His neck hurts',
          options: ['His neck hurts', 'Her neck is strong', 'His head hurts', 'The neck is sick'],
          explanation: 'ⲡⲉϥⲙⲟϩⲣⲓ ϣⲱⲛⲓ = his neck hurts (ϣⲱⲛⲓ = to hurt, be sick)'
        }
      ]
    },
    {
      id: 'lesson-35-3',
      unitId: 'unit-35',
      title: 'Personal Care',
      description: 'Hygiene and grooming vocabulary',
      order: 3,
      xpReward: 25,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-35-3-1',
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
          id: 'ex-35-3-2',
          type: 'translation',
          question: 'Translate: ϯⲓⲁϩ ⲛ̀ⲛⲁϫⲓϫ',
          questionCoptic: 'ϯⲓⲁϩ ⲛ̀ⲛⲁϫⲓϫ',
          correctAnswer: 'I wash my hands',
          options: ['I wash my hands', 'I washed my hands', 'Wash your hands', 'My hands are clean'],
          explanation: 'ϯⲓⲁϩ ⲛ̀ⲛⲁϫⲓϫ = I wash my hands (present tense)'
        },
        {
          id: 'ex-35-3-3',
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
          id: 'ex-35-3-4',
          type: 'fill_blank',
          question: 'Complete: ⲡⲁϥⲱϫ ___ = my hair is clean',
          correctAnswer: 'ⲟⲩⲁⲃ',
          options: ['ⲟⲩⲁⲃ', 'ⲥⲱϥ', 'ϣⲁϣ', 'ⲕⲁϩⲓ'],
          explanation: 'ⲡⲁϥⲱϫ ⲟⲩⲁⲃ = my hair is clean/pure'
        },
        {
          id: 'ex-35-3-5',
          type: 'sentence_building',
          question: 'Build: "Wash your face"',
          correctAnswer: 'ⲁⲣⲓⲓⲁϩ ⲙ̀ⲡⲉⲕϩⲟ',
          wordBank: ['ⲁⲣⲓⲓⲁϩ', 'ⲙ̀', 'ⲡⲉⲕϩⲟ', 'ⲛⲁϫⲓϫ'],
          explanation: 'ⲁⲣⲓⲓⲁϩ ⲙ̀ⲡⲉⲕϩⲟ = wash your face (ⲁⲣⲓ- = imperative, ϩⲟ = face)'
        },
        {
          id: 'ex-35-3-6',
          type: 'translation',
          question: 'Translate: ⲁⲓⲣⲁⲕⲥ ϧⲉⲛ ⲡⲓⲙⲱⲟⲩ',
          questionCoptic: 'ⲁⲓⲣⲁⲕⲥ ϧⲉⲛ ⲡⲓⲙⲱⲟⲩ',
          correctAnswer: 'I bathed in the water',
          options: ['I bathed in the water', 'I bathe in water', 'I will bathe', 'I washed the water'],
          explanation: 'ⲁⲓⲣⲁⲕⲥ ϧⲉⲛ ⲡⲓⲙⲱⲟⲩ = I bathed in the water (past tense)'
        },
        {
          id: 'ex-35-3-7',
          type: 'multiple_choice',
          question: 'What is "dirty/unclean"?',
          correctAnswer: 'ⲥⲱϥ',
          options: ['ⲥⲱϥ', 'ⲟⲩⲁⲃ', 'ⲛⲁⲛⲉϥ', 'ϩⲱⲟⲩ'],
          explanation: 'ⲥⲱϥ (sof) = dirty, unclean, impure (opposite of ⲟⲩⲁⲃ)'
        },
        {
          id: 'ex-35-3-8',
          type: 'translation',
          question: 'Translate: ⲙⲁⲣⲟⲩⲫⲱϫⲓ ⲙ̀ⲡⲟⲩϥⲱϫ',
          questionCoptic: 'ⲙⲁⲣⲟⲩⲫⲱϫⲓ ⲙ̀ⲡⲟⲩϥⲱϫ',
          correctAnswer: 'Let them comb their hair',
          options: ['Let them comb their hair', 'They comb hair', 'Comb your hair', 'Their hair is combed'],
          explanation: 'ⲙⲁⲣⲟⲩⲫⲱϫⲓ ⲙ̀ⲡⲟⲩϥⲱϫ = let them comb their hair (hortative)'
        }
      ]
    },
    {
      id: 'lesson-35-4',
      unitId: 'unit-35',
      title: 'Health & Illness',
      description: 'Expressing sickness and wellness',
      order: 4,
      xpReward: 25,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-35-4-1',
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
          id: 'ex-35-4-2',
          type: 'translation',
          question: 'Translate: ϯϣⲱⲛⲓ',
          questionCoptic: 'ϯϣⲱⲛⲓ',
          correctAnswer: 'I am sick',
          options: ['I am sick', 'I am well', 'I hurt him', 'I was sick'],
          explanation: 'ϯϣⲱⲛⲓ = I am sick, I hurt (present tense)'
        },
        {
          id: 'ex-35-4-3',
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
          id: 'ex-35-4-4',
          type: 'fill_blank',
          question: 'Complete: ϯ___ = I am strong/healthy',
          correctAnswer: 'ϫⲱⲣⲓ',
          options: ['ϫⲱⲣⲓ', 'ⲁⲥⲑⲉⲛⲏⲥ', 'ϣⲱⲛⲓ', 'ⲙⲟⲕϩ'],
          explanation: 'ϯϫⲱⲣⲓ = I am strong, I am well'
        },
        {
          id: 'ex-35-4-5',
          type: 'sentence_building',
          question: 'Build: "My head hurts"',
          correctAnswer: 'ⲧⲁⲁⲫⲉ ⲙⲟⲕϩ',
          wordBank: ['ⲧⲁⲁⲫⲉ', 'ⲙⲟⲕϩ', 'ϣⲱⲛⲓ', 'ⲛⲁⲛⲉϥ'],
          explanation: 'ⲧⲁⲁⲫⲉ ⲙⲟⲕϩ = my head hurts/pains (ⲙⲟⲕϩ = to suffer pain)'
        },
        {
          id: 'ex-35-4-6',
          type: 'translation',
          question: 'Translate: ⲁϥⲧⲁⲗϭⲟⲓ',
          questionCoptic: 'ⲁϥⲧⲁⲗϭⲟⲓ',
          correctAnswer: 'He healed me',
          options: ['He healed me', 'I healed him', 'He is healing', 'He will heal me'],
          explanation: 'ⲁϥⲧⲁⲗϭⲟⲓ = he healed me (past tense with suffix pronoun -ⲓ)'
        },
        {
          id: 'ex-35-4-7',
          type: 'multiple_choice',
          question: 'How do you say "I am well" (greeting)?',
          correctAnswer: 'ϯⲟⲩϫⲁⲓ',
          options: ['ϯⲟⲩϫⲁⲓ', 'ϯϣⲱⲛⲓ', 'ϯϫⲱⲣⲓ', 'ϯⲁⲥⲑⲉⲛⲏⲥ'],
          explanation: 'ϯⲟⲩϫⲁⲓ = I am well/healthy (also means "hello/greetings")'
        },
        {
          id: 'ex-35-4-8',
          type: 'translation',
          question: 'Translate: ⲁⲓⲥⲱ ⲙ̀ⲡⲓⲫⲁⲣⲙⲁⲕⲟⲛ',
          questionCoptic: 'ⲁⲓⲥⲱ ⲙ̀ⲡⲓⲫⲁⲣⲙⲁⲕⲟⲛ',
          correctAnswer: 'I drank the medicine',
          options: ['I drank the medicine', 'I drink medicine', 'I will take medicine', 'The medicine is good'],
          explanation: 'ⲁⲓⲥⲱ ⲙ̀ⲡⲓⲫⲁⲣⲙⲁⲕⲟⲛ = I drank the medicine (past tense)'
        }
      ]
    }
  ]
};

export default unit35;
