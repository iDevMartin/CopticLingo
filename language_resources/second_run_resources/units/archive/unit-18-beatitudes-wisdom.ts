import { Unit } from '../../types';

// UNIT 18: MORE BEATITUDES & BIBLICAL WISDOM
// Verified for Bohairic dialect consistency
// Matthew 5:6-8

const unit18: Unit = {
  id: 'unit-18',
  title: 'More Beatitudes & Biblical Wisdom',
  description: 'Hunger for righteousness, mercy, and purity',
  order: 18,
  color: '#1CB0F6',
  lessons: [
    {
      id: 'lesson-18-1',
      unitId: 'unit-18',
      title: 'Matthew 5:6 - Hunger and Thirst for Righteousness',
      description: 'The fourth beatitude',
      order: 1,
      xpReward: 40,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-18-1-1',
          type: 'translation',
          question: 'Translate: ⲱⲟⲩⲛⲓⲁⲧⲟⲩ ⲛ̀ⲛⲏⲉⲑⲟϭⲛⲓ',
          questionCoptic: 'ⲱⲟⲩⲛⲓⲁⲧⲟⲩ ⲛ̀ⲛⲏⲉⲑⲟϭⲛⲓ',
          correctAnswer: 'Blessed are those who hunger',
          options: ['Blessed are those who hunger', 'Happy are the hungry', 'Blessed hungry ones', 'The hungry are blessed'],
          explanation: 'ⲱⲟⲩⲛⲓⲁⲧⲟⲩ = blessed are + ⲛ̀ⲛⲏⲉⲑⲟϭⲛⲓ = those who hunger'
        },
        {
          id: 'ex-18-1-2',
          type: 'multiple_choice',
          question: 'What does ⲟϭⲛⲓ mean?',
          questionCoptic: 'ⲟϭⲛⲓ',
          correctAnswer: 'to hunger',
          options: ['to hunger', 'to thirst', 'to eat', 'to want'],
          explanation: 'ⲟϭⲛⲓ (ojni) means "to hunger" or "to be hungry"'
        },
        {
          id: 'ex-18-1-3',
          type: 'matching',
          question: 'Match hunger and thirst vocabulary',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲟϭⲛⲓ', english: 'to hunger' },
            { coptic: 'ⲓⲃⲓ', english: 'to thirst' },
            { coptic: 'ⲟⲩⲱⲙ', english: 'to eat' },
            { coptic: 'ⲥⲱ', english: 'to drink' }
          ]
        },
        {
          id: 'ex-18-1-4',
          type: 'translation',
          question: 'Translate: ⲟⲩⲟϩ ⲉⲑⲓⲃⲓ ⲉⲑⲃⲉ ϯⲙⲉⲑⲙⲏⲓ',
          questionCoptic: 'ⲟⲩⲟϩ ⲉⲑⲓⲃⲓ ⲉⲑⲃⲉ ϯⲙⲉⲑⲙⲏⲓ',
          correctAnswer: 'And thirst for righteousness',
          options: ['And thirst for righteousness', 'And thirsting for justice', 'Thirst for truth', 'And the righteous thirst'],
          explanation: 'ⲟⲩⲟϩ = and + ⲉⲑⲓⲃⲓ = who thirst + ⲉⲑⲃⲉ = for + ϯⲙⲉⲑⲙⲏⲓ = righteousness'
        },
        {
          id: 'ex-18-1-5',
          type: 'multiple_choice',
          question: 'What is "righteousness" in Coptic?',
          correctAnswer: 'ⲙⲉⲑⲙⲏⲓ',
          options: ['ⲙⲉⲑⲙⲏⲓ', 'ⲙⲉⲑⲙⲉⲛⲣⲉ', 'ⲙⲉⲧⲟⲩⲣⲟ', 'ⲙⲉⲧⲣⲉⲙⲣⲁⲩϣ'],
          explanation: 'ⲙⲉⲑⲙⲏⲓ (methmēi) means "righteousness" or "justice"'
        },
        {
          id: 'ex-18-1-6',
          type: 'sentence_building',
          question: 'Build: "They shall be filled"',
          correctAnswer: 'ⲉⲩⲉⲥⲓ ⲙⲙⲱⲟⲩ',
          wordBank: ['ⲉⲩⲉ', 'ⲥⲓ', 'ⲙⲙⲱⲟⲩ', 'ⲉⲣⲱⲟⲩ'],
          explanation: 'ⲉⲩⲉⲥⲓ ⲙⲙⲱⲟⲩ = they will be filled/satisfied'
        },
        {
          id: 'ex-18-1-7',
          type: 'fill_blank',
          question: 'Complete: ⲱⲟⲩⲛⲓⲁⲧⲟⲩ ⲛ̀ⲛⲏⲉⲑⲟϭⲛⲓ ⲉⲑⲃⲉ ___ = Blessed are those who hunger for righteousness',
          correctAnswer: 'ϯⲙⲉⲑⲙⲏⲓ',
          options: ['ϯⲙⲉⲑⲙⲏⲓ', 'ⲡⲓⲱⲓⲕ', 'ⲡⲓⲙⲱⲓⲧ', 'ϯⲙⲉⲧⲟⲩⲣⲟ'],
          explanation: 'ϯⲙⲉⲑⲙⲏⲓ (righteousness) completes the phrase'
        },
        {
          id: 'ex-18-1-8',
          type: 'matching',
          question: 'Match satisfaction vocabulary',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲥⲓ', english: 'to be satisfied/filled' },
            { coptic: 'ⲧⲥⲓⲟ', english: 'satisfaction' },
            { coptic: 'ⲉⲩⲉⲥⲓ', english: 'they will be satisfied' },
            { coptic: 'ⲡⲓⲙⲁϩ', english: 'fullness' }
          ]
        }
      ]
    },
    {
      id: 'lesson-18-2',
      unitId: 'unit-18',
      title: 'Matthew 5:7 - Blessed are the Merciful',
      description: 'The fifth beatitude',
      order: 2,
      xpReward: 40,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-18-2-1',
          type: 'translation',
          question: 'Translate: ⲱⲟⲩⲛⲓⲁⲧⲟⲩ ⲛ̀ⲛⲁⲏⲧ',
          questionCoptic: 'ⲱⲟⲩⲛⲓⲁⲧⲟⲩ ⲛ̀ⲛⲁⲏⲧ',
          correctAnswer: 'Blessed are the merciful',
          options: ['Blessed are the merciful', 'Happy are the kind', 'Blessed merciful ones', 'The merciful are blessed'],
          explanation: 'ⲱⲟⲩⲛⲓⲁⲧⲟⲩ = blessed are + ⲛ̀ⲛⲁⲏⲧ = the merciful (those with mercy)'
        },
        {
          id: 'ex-18-2-2',
          type: 'multiple_choice',
          question: 'What does ⲛⲁⲓ mean?',
          questionCoptic: 'ⲛⲁⲓ',
          correctAnswer: 'mercy/compassion',
          options: ['mercy/compassion', 'love', 'peace', 'justice'],
          explanation: 'ⲛⲁⲓ (nai) means "mercy" or "compassion" - ⲛⲁⲏⲧ = merciful one'
        },
        {
          id: 'ex-18-2-3',
          type: 'matching',
          question: 'Match mercy vocabulary',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲛⲁⲓ', english: 'mercy' },
            { coptic: 'ⲛⲁⲏⲧ', english: 'merciful' },
            { coptic: 'ⲙⲉⲧⲛⲁⲏⲧ', english: 'mercifulness' },
            { coptic: 'ϣⲉⲛⲛⲁⲓ', english: 'to have mercy' }
          ]
        },
        {
          id: 'ex-18-2-4',
          type: 'translation',
          question: 'Translate: ϫⲉ ⲛ̀ⲑⲱⲟⲩ ⲉⲩⲉⲛⲁⲓ ⲛⲱⲟⲩ',
          questionCoptic: 'ϫⲉ ⲛ̀ⲑⲱⲟⲩ ⲉⲩⲉⲛⲁⲓ ⲛⲱⲟⲩ',
          correctAnswer: 'For they shall obtain mercy',
          options: ['For they shall obtain mercy', 'Because mercy is theirs', 'They will have mercy', 'Mercy will be shown'],
          explanation: 'ϫⲉ = for + ⲛ̀ⲑⲱⲟⲩ = they + ⲉⲩⲉⲛⲁⲓ ⲛⲱⲟⲩ = they will obtain mercy'
        },
        {
          id: 'ex-18-2-5',
          type: 'sentence_building',
          question: 'Build: "Blessed are the merciful"',
          correctAnswer: 'ⲱⲟⲩⲛⲓⲁⲧⲟⲩ ⲛ̀ⲛⲁⲏⲧ',
          wordBank: ['ⲱⲟⲩⲛⲓⲁⲧⲟⲩ', 'ⲛ̀', 'ⲛⲁⲏⲧ', 'ⲛⲓⲣⲉⲙⲣⲁⲩϣ'],
          explanation: 'ⲱⲟⲩⲛⲓⲁⲧⲟⲩ ⲛ̀ⲛⲁⲏⲧ = blessed are the merciful'
        },
        {
          id: 'ex-18-2-6',
          type: 'fill_blank',
          question: 'Complete: ϫⲉ ⲛ̀ⲑⲱⲟⲩ ⲉⲩⲉ___ ⲛⲱⲟⲩ = For they shall obtain mercy',
          correctAnswer: 'ⲛⲁⲓ',
          options: ['ⲛⲁⲓ', 'ⲙⲉⲛⲣⲉ', 'ⲛⲟⲙϯ', 'ⲥⲙⲟⲩ'],
          explanation: 'ⲛⲁⲓ (mercy) - ⲉⲩⲉⲛⲁⲓ ⲛⲱⲟⲩ = they will obtain mercy'
        },
        {
          id: 'ex-18-2-7',
          type: 'multiple_choice',
          question: 'How do you say "to show mercy"?',
          correctAnswer: 'ϣⲉⲛⲛⲁⲓ',
          options: ['ϣⲉⲛⲛⲁⲓ', 'ⲙⲉⲛⲣⲉ', 'ⲛⲟⲙϯ', 'ⲥⲙⲟⲩ'],
          explanation: 'ϣⲉⲛⲛⲁⲓ (shen-nai) means "to show mercy" or "to have mercy"'
        },
        {
          id: 'ex-18-2-8',
          type: 'matching',
          question: 'Match compassion terms',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲛⲁⲓ', english: 'mercy' },
            { coptic: 'ϣⲉⲛϩⲏⲧ', english: 'compassion' },
            { coptic: 'ⲙⲉⲧϣⲉⲛϩⲏⲧ', english: 'kindness' },
            { coptic: 'ⲁⲅⲁⲡⲏ', english: 'love (divine)' }
          ]
        }
      ]
    },
    {
      id: 'lesson-18-3',
      unitId: 'unit-18',
      title: 'Matthew 5:8 - Blessed are the Pure in Heart',
      description: 'The sixth beatitude',
      order: 3,
      xpReward: 40,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-18-3-1',
          type: 'translation',
          question: 'Translate: ⲱⲟⲩⲛⲓⲁⲧⲟⲩ ⲛ̀ⲛⲏⲉⲧⲟⲩⲃⲱⲧ ϧⲉⲛ ⲡⲟⲩϩⲏⲧ',
          questionCoptic: 'ⲱⲟⲩⲛⲓⲁⲧⲟⲩ ⲛ̀ⲛⲏⲉⲧⲟⲩⲃⲱⲧ ϧⲉⲛ ⲡⲟⲩϩⲏⲧ',
          correctAnswer: 'Blessed are the pure in heart',
          options: ['Blessed are the pure in heart', 'Happy are pure hearts', 'Blessed pure-hearted ones', 'The pure of heart are blessed'],
          explanation: 'ⲱⲟⲩⲛⲓⲁⲧⲟⲩ = blessed are + ⲛ̀ⲛⲏⲉⲧⲟⲩⲃⲱⲧ = the pure ones + ϧⲉⲛ ⲡⲟⲩϩⲏⲧ = in their heart'
        },
        {
          id: 'ex-18-3-2',
          type: 'multiple_choice',
          question: 'What does ⲟⲩⲃⲱⲧ mean?',
          questionCoptic: 'ⲟⲩⲃⲱⲧ',
          correctAnswer: 'pure/clean',
          options: ['pure/clean', 'holy', 'righteous', 'good'],
          explanation: 'ⲟⲩⲃⲱⲧ (oubot) means "pure" or "clean"'
        },
        {
          id: 'ex-18-3-3',
          type: 'matching',
          question: 'Match purity vocabulary',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲟⲩⲃⲱⲧ', english: 'pure/clean' },
            { coptic: 'ⲙⲉⲧⲟⲩⲃⲱⲧ', english: 'purity' },
            { coptic: 'ⲧⲟⲩⲃⲟ', english: 'holy' },
            { coptic: 'ⲁⲑⲛⲟⲃⲓ', english: 'sinless' }
          ]
        },
        {
          id: 'ex-18-3-4',
          type: 'translation',
          question: 'Translate: ϫⲉ ⲛ̀ⲑⲱⲟⲩ ⲉⲩⲉⲛⲁⲩ ⲉⲫϯ',
          questionCoptic: 'ϫⲉ ⲛ̀ⲑⲱⲟⲩ ⲉⲩⲉⲛⲁⲩ ⲉⲫϯ',
          correctAnswer: 'For they shall see God',
          options: ['For they shall see God', 'Because they see God', 'They will see the Lord', 'God will appear to them'],
          explanation: 'ϫⲉ = for + ⲛ̀ⲑⲱⲟⲩ = they + ⲉⲩⲉⲛⲁⲩ = will see + ⲉⲫϯ = God (Bohairic ⲫϯ not ⲫⲛⲟⲩϯ!)'
        },
        {
          id: 'ex-18-3-5',
          type: 'multiple_choice',
          question: 'What is "heart" in Coptic?',
          correctAnswer: 'ϩⲏⲧ',
          options: ['ϩⲏⲧ', 'ϩⲏⲧⲥ', 'ⲯⲩⲭⲏ', 'ⲡ̀ⲛⲉⲩⲙⲁ'],
          explanation: 'ϩⲏⲧ (hēt) means "heart" - with possessive: ⲡⲟⲩϩⲏⲧ = their heart'
        },
        {
          id: 'ex-18-3-6',
          type: 'sentence_building',
          question: 'Build: "They will see God"',
          correctAnswer: 'ⲉⲩⲉⲛⲁⲩ ⲉⲫϯ',
          wordBank: ['ⲉⲩⲉ', 'ⲛⲁⲩ', 'ⲉ', 'ⲫϯ'],
          explanation: 'ⲉⲩⲉⲛⲁⲩ ⲉⲫϯ = they will see God (Bohairic ⲫϯ not ⲫⲛⲟⲩϯ!)'
        },
        {
          id: 'ex-18-3-7',
          type: 'fill_blank',
          question: 'Complete: ⲱⲟⲩⲛⲓⲁⲧⲟⲩ ⲛ̀ⲛⲏⲉⲧ___ ϧⲉⲛ ⲡⲟⲩϩⲏⲧ = Blessed are the pure in heart',
          correctAnswer: 'ⲟⲩⲃⲱⲧ',
          options: ['ⲟⲩⲃⲱⲧ', 'ⲧⲟⲩⲃⲟ', 'ⲛⲁⲏⲧ', 'ⲟⲩⲃⲁϣ'],
          explanation: 'ⲟⲩⲃⲱⲧ (pure) completes the phrase'
        },
        {
          id: 'ex-18-3-8',
          type: 'matching',
          question: 'Match vision and purity terms',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲛⲁⲩ', english: 'to see' },
            { coptic: 'ϩⲟⲣⲁⲥⲓⲥ', english: 'vision' },
            { coptic: 'ⲟⲩⲃⲱⲧ', english: 'pure' },
            { coptic: 'ⲧⲃⲟ', english: 'to purify' }
          ]
        }
      ]
    }
  ]
};

export default unit18;
