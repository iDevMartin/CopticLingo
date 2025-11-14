import { Unit } from '../../types';

// UNIT 7: POSSESSIVE PRONOUNS & ADJECTIVES
// Corrected for Bohairic dialect consistency
// Based on Mallon Bohairic Grammar and OUTLINE OF BOHAIRIC COPTIC MORPHOLOGY

const unit7: Unit = {
  id: 'unit-7',
  title: 'Possessive Pronouns',
  description: 'Learn "my", "your", "his", "her", "our", "their"',
  order: 7,
  color: '#1CB0F6',
  lessons: [
    {
      id: 'lesson-7-1',
      unitId: 'unit-7',
      title: 'My, Your, His, Her (Masculine Nouns)',
      description: 'Possessive pronouns with masculine nouns',
      order: 1,
      xpReward: 20,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-7-1-1',
          type: 'translation',
          question: 'Translate: ⲡⲁⲓⲱⲧ',
          questionCoptic: 'ⲡⲁⲓⲱⲧ',
          correctAnswer: 'my father',
          options: ['my father', 'your father', 'his father', 'the father'],
          explanation: 'ⲡⲁⲓⲱⲧ = ⲡⲁ (my) + ⲓⲱⲧ (father) = "my father" (ⲓⲱⲧ not ⲉⲓⲱⲧ!)'
        },
        {
          id: 'ex-7-1-2',
          type: 'matching',
          question: 'Match possessive pronouns (masculine nouns)',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲡⲁ-', english: 'my' },
            { coptic: 'ⲡⲉⲕ-', english: 'your (m)' },
            { coptic: 'ⲡⲉϥ-', english: 'his' },
            { coptic: 'ⲡⲉⲥ-', english: 'her' }
          ]
        },
        {
          id: 'ex-7-1-3',
          type: 'multiple_choice',
          question: 'How do you say "your father" (to a male)?',
          correctAnswer: 'ⲡⲉⲕⲓⲱⲧ',
          options: ['ⲡⲉⲕⲓⲱⲧ', 'ⲡⲁⲓⲱⲧ', 'ⲡⲉϥⲓⲱⲧ', 'ⲡⲉⲥⲓⲱⲧ'],
          explanation: 'ⲡⲉⲕⲓⲱⲧ = ⲡⲉⲕ (your, masc.) + ⲓⲱⲧ (father)'
        },
        {
          id: 'ex-7-1-4',
          type: 'translation',
          question: 'Translate: ⲡⲉϥⲣⲁⲛ',
          questionCoptic: 'ⲡⲉϥⲣⲁⲛ',
          correctAnswer: 'his name',
          options: ['his name', 'her name', 'my name', 'your name'],
          explanation: 'ⲡⲉϥⲣⲁⲛ = ⲡⲉϥ (his) + ⲣⲁⲛ (name) = "his name"'
        },
        {
          id: 'ex-7-1-5',
          type: 'multiple_choice',
          question: 'How do you say "her son"?',
          correctAnswer: 'ⲡⲉⲥϣⲏⲣⲓ',
          options: ['ⲡⲉⲥϣⲏⲣⲓ', 'ⲡⲉϥϣⲏⲣⲓ', 'ⲡⲁϣⲏⲣⲓ', 'ⲡⲉⲕϣⲏⲣⲓ'],
          explanation: 'ⲡⲉⲥϣⲏⲣⲓ = ⲡⲉⲥ (her) + ϣⲏⲣⲓ (son) - NOTE: ϣⲏⲣⲓ not ⲥⲏⲣⲓ!'
        },
        {
          id: 'ex-7-1-6',
          type: 'sentence_building',
          question: 'Build: "my brother"',
          correctAnswer: 'ⲡⲁⲥⲟⲛ',
          wordBank: ['ⲡⲁ', 'ⲥⲟⲛ', 'ⲡⲉⲕ', 'ⲥⲱⲛⲓ'],
          explanation: 'ⲡⲁⲥⲟⲛ = ⲡⲁ (my) + ⲥⲟⲛ (brother)'
        },
        {
          id: 'ex-7-1-7',
          type: 'fill_blank',
          question: 'Complete: ___ ⲣⲁⲛ = your (male) name',
          correctAnswer: 'ⲡⲉⲕ',
          options: ['ⲡⲉⲕ', 'ⲡⲁ', 'ⲡⲉϥ', 'ⲡⲉⲥ'],
          explanation: 'ⲡⲉⲕ is "your (masculine)" for masculine nouns'
        },
        {
          id: 'ex-7-1-8',
          type: 'translation',
          question: 'Translate: ⲡⲁⲣⲁⲛ',
          questionCoptic: 'ⲡⲁⲣⲁⲛ',
          correctAnswer: 'my name',
          options: ['my name', 'your name', 'his name', 'the name'],
          explanation: 'ⲡⲁⲣⲁⲛ = ⲡⲁ (my) + ⲣⲁⲛ (name) = "my name"'
        },
        {
          id: 'ex-7-1-9',
          type: 'multiple_choice',
          question: 'How do you say "his brother"?',
          correctAnswer: 'ⲡⲉϥⲥⲟⲛ',
          options: ['ⲡⲉϥⲥⲟⲛ', 'ⲡⲉⲥⲥⲟⲛ', 'ⲡⲁⲥⲟⲛ', 'ⲡⲉⲕⲥⲟⲛ'],
          explanation: 'ⲡⲉϥⲥⲟⲛ = ⲡⲉϥ (his) + ⲥⲟⲛ (brother)'
        },
        {
          id: 'ex-7-1-10',
          type: 'translation',
          question: 'Translate to Coptic: "my son"',
          correctAnswer: 'ⲡⲁϣⲏⲣⲓ',
          options: ['ⲡⲁϣⲏⲣⲓ', 'ⲡⲁⲥⲏⲣⲓ', 'ⲡⲓϣⲏⲣⲓ', 'ⲧⲁϣⲏⲣⲓ'],
          explanation: 'ⲡⲁϣⲏⲣⲓ = ⲡⲁ (my) + ϣⲏⲣⲓ (son) - use ϣ not ⲥ!'
        }
      ]
    },
    {
      id: 'lesson-7-2',
      unitId: 'unit-7',
      title: 'Possessives with Feminine Nouns',
      description: 'ⲧⲁ, ⲧⲉⲕ, ⲧⲉϥ, ⲧⲉⲥ - feminine possessives',
      order: 2,
      xpReward: 20,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-7-2-1',
          type: 'translation',
          question: 'Translate: ⲧⲁⲙⲁⲩ',
          questionCoptic: 'ⲧⲁⲙⲁⲩ',
          correctAnswer: 'my mother',
          options: ['my mother', 'your mother', 'his mother', 'her mother'],
          explanation: 'ⲧⲁⲙⲁⲩ = ⲧⲁ (my, fem.) + ⲙⲁⲩ (mother) - NOTE: ⲙⲁⲩ not ⲙⲁⲁⲩ!'
        },
        {
          id: 'ex-7-2-2',
          type: 'matching',
          question: 'Match possessives (feminine nouns)',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲧⲁ-', english: 'my' },
            { coptic: 'ⲧⲉⲕ-', english: 'your (m)' },
            { coptic: 'ⲧⲉϥ-', english: 'his' },
            { coptic: 'ⲧⲉⲥ-', english: 'her' }
          ]
        },
        {
          id: 'ex-7-2-3',
          type: 'multiple_choice',
          question: 'How do you say "your (masc.) sister"?',
          correctAnswer: 'ⲧⲉⲕⲥⲱⲛⲓ',
          options: ['ⲧⲉⲕⲥⲱⲛⲓ', 'ⲧⲁⲥⲱⲛⲓ', 'ⲧⲉϥⲥⲱⲛⲓ', 'ⲧⲉⲥⲥⲱⲛⲓ'],
          explanation: 'ⲧⲉⲕⲥⲱⲛⲓ = ⲧⲉⲕ (your, masc. with fem. noun) + ⲥⲱⲛⲓ (sister) - Bohairic -ⲓ ending!'
        },
        {
          id: 'ex-7-2-4',
          type: 'translation',
          question: 'Translate: ⲧⲉϥⲧⲣⲁⲡⲉⲍⲁ',
          questionCoptic: 'ⲧⲉϥⲧⲣⲁⲡⲉⲍⲁ',
          correctAnswer: 'his table',
          options: ['his table', 'her table', 'my table', 'your table'],
          explanation: 'ⲧⲉϥⲧⲣⲁⲡⲉⲍⲁ = ⲧⲉϥ (his, fem.) + ⲧⲣⲁⲡⲉⲍⲁ (table - Greek loanword)'
        },
        {
          id: 'ex-7-2-5',
          type: 'multiple_choice',
          question: 'How do you say "her house"?',
          correctAnswer: 'ⲧⲉⲥϩⲓ',
          options: ['ⲧⲉⲥϩⲓ', 'ⲧⲉϥϩⲓ', 'ⲧⲁϩⲓ', 'ⲡⲉⲥϩⲓ'],
          explanation: 'ⲧⲉⲥϩⲓ = ⲧⲉⲥ (her, fem.) + ϩⲓ (house - feminine noun)'
        },
        {
          id: 'ex-7-2-6',
          type: 'sentence_building',
          question: 'Build: "my table"',
          correctAnswer: 'ⲧⲁⲧⲣⲁⲡⲉⲍⲁ',
          wordBank: ['ⲧⲁ', 'ⲧⲣⲁⲡⲉⲍⲁ', 'ⲡⲁ', 'ⲧⲉⲕ'],
          explanation: 'ⲧⲁⲧⲣⲁⲡⲉⲍⲁ = ⲧⲁ (my, fem.) + ⲧⲣⲁⲡⲉⲍⲁ (table)'
        },
        {
          id: 'ex-7-2-7',
          type: 'fill_blank',
          question: 'Complete: ___ ⲥⲱⲛⲓ = my sister',
          correctAnswer: 'ⲧⲁ',
          options: ['ⲧⲁ', 'ⲡⲁ', 'ⲧⲉⲕ', 'ⲛⲁ'],
          explanation: 'ⲧⲁ is "my" for feminine nouns (ⲥⲱⲛⲓ not ⲥⲱⲛⲉ - Bohairic!)'
        },
        {
          id: 'ex-7-2-8',
          type: 'translation',
          question: 'Translate: ⲧⲁϩⲓⲙⲓ',
          questionCoptic: 'ⲧⲁϩⲓⲙⲓ',
          correctAnswer: 'my wife/woman',
          options: ['my wife/woman', 'my sister', 'my mother', 'my daughter'],
          explanation: 'ⲧⲁϩⲓⲙⲓ = ⲧⲁ (my) + ϩⲓⲙⲓ (woman/wife) - Bohairic ϩⲓⲙⲓ not ϩⲓⲟⲙⲓ or ⲥϩⲓⲙⲉ!'
        },
        {
          id: 'ex-7-2-9',
          type: 'multiple_choice',
          question: 'How do you say "his mother"?',
          correctAnswer: 'ⲧⲉϥⲙⲁⲩ',
          options: ['ⲧⲉϥⲙⲁⲩ', 'ⲧⲉⲥⲙⲁⲩ', 'ⲧⲁⲙⲁⲩ', 'ⲡⲉϥⲙⲁⲩ'],
          explanation: 'ⲧⲉϥⲙⲁⲩ = ⲧⲉϥ (his, with fem. noun) + ⲙⲁⲩ (mother)'
        },
        {
          id: 'ex-7-2-10',
          type: 'translation',
          question: 'Translate to Coptic: "my daughter"',
          correctAnswer: 'ⲧⲁϣⲉⲣⲓ',
          options: ['ⲧⲁϣⲉⲣⲓ', 'ⲧⲁⲥⲉⲣⲓ', 'ⲡⲁϣⲉⲣⲓ', 'ϯϣⲉⲣⲓ'],
          explanation: 'ⲧⲁϣⲉⲣⲓ = ⲧⲁ (my, fem.) + ϣⲉⲣⲓ (daughter) - use ϣ not ⲥ!'
        }
      ]
    },
    {
      id: 'lesson-7-3',
      unitId: 'unit-7',
      title: 'Plural Possessives',
      description: 'our, your (plural), their',
      order: 3,
      xpReward: 20,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-7-3-1',
          type: 'matching',
          question: 'Match plural possessives (masculine)',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲡⲉⲛ-', english: 'our' },
            { coptic: 'ⲡⲉⲧⲛ-', english: 'your (pl)' },
            { coptic: 'ⲡⲟⲩ-', english: 'their' }
          ]
        },
        {
          id: 'ex-7-3-2',
          type: 'translation',
          question: 'Translate: ⲡⲉⲛⲓⲱⲧ',
          questionCoptic: 'ⲡⲉⲛⲓⲱⲧ',
          correctAnswer: 'our father',
          options: ['our father', 'your father', 'their father', 'my father'],
          explanation: 'ⲡⲉⲛⲓⲱⲧ = ⲡⲉⲛ (our) + ⲓⲱⲧ (father) - first words of the Lord\'s Prayer: ϬⲈ ⲠⲈⲚⲒⲰⲦ!'
        },
        {
          id: 'ex-7-3-3',
          type: 'multiple_choice',
          question: 'How do you say "your (plural) brother"?',
          correctAnswer: 'ⲡⲉⲧⲛⲥⲟⲛ',
          options: ['ⲡⲉⲧⲛⲥⲟⲛ', 'ⲡⲉⲛⲥⲟⲛ', 'ⲡⲟⲩⲥⲟⲛ', 'ⲡⲉⲕⲥⲟⲛ'],
          explanation: 'ⲡⲉⲧⲛⲥⲟⲛ = ⲡⲉⲧⲛ (your, plural) + ⲥⲟⲛ (brother)'
        },
        {
          id: 'ex-7-3-4',
          type: 'translation',
          question: 'Translate: ⲡⲟⲩⲣⲁⲛ',
          questionCoptic: 'ⲡⲟⲩⲣⲁⲛ',
          correctAnswer: 'their name',
          options: ['their name', 'our name', 'your name', 'his name'],
          explanation: 'ⲡⲟⲩⲣⲁⲛ = ⲡⲟⲩ (their) + ⲣⲁⲛ (name)'
        },
        {
          id: 'ex-7-3-5',
          type: 'matching',
          question: 'Match plural possessives (feminine)',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲧⲉⲛ-', english: 'our' },
            { coptic: 'ⲧⲉⲧⲛ-', english: 'your (pl)' },
            { coptic: 'ⲧⲟⲩ-', english: 'their' }
          ]
        },
        {
          id: 'ex-7-3-6',
          type: 'translation',
          question: 'Translate: ⲧⲉⲛⲥⲱⲛⲓ',
          questionCoptic: 'ⲧⲉⲛⲥⲱⲛⲓ',
          correctAnswer: 'our sister',
          options: ['our sister', 'your sister', 'their sister', 'my sister'],
          explanation: 'ⲧⲉⲛⲥⲱⲛⲓ = ⲧⲉⲛ (our, fem.) + ⲥⲱⲛⲓ (sister) - Bohairic -ⲓ ending!'
        },
        {
          id: 'ex-7-3-7',
          type: 'matching',
          question: 'Match plural possessives (plural nouns)',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲛⲉⲛ-', english: 'our' },
            { coptic: 'ⲛⲉⲧⲛ-', english: 'your (pl)' },
            { coptic: 'ⲛⲟⲩ-', english: 'their' }
          ]
        },
        {
          id: 'ex-7-3-8',
          type: 'translation',
          question: 'Translate: ⲛⲉⲛⲃⲁⲗ',
          questionCoptic: 'ⲛⲉⲛⲃⲁⲗ',
          correctAnswer: 'our eyes',
          options: ['our eyes', 'your eyes', 'their eyes', 'my eyes'],
          explanation: 'ⲛⲉⲛⲃⲁⲗ = ⲛⲉⲛ (our, plural) + ⲃⲁⲗ (eyes)'
        },
        {
          id: 'ex-7-3-9',
          type: 'multiple_choice',
          question: 'How do you say "their sons"?',
          correctAnswer: 'ⲛⲟⲩϣⲏⲣⲓ',
          options: ['ⲛⲟⲩϣⲏⲣⲓ', 'ⲛⲉⲛϣⲏⲣⲓ', 'ⲛⲉⲧⲛϣⲏⲣⲓ', 'ⲡⲟⲩϣⲏⲣⲓ'],
          explanation: 'ⲛⲟⲩϣⲏⲣⲓ = ⲛⲟⲩ (their, plural noun) + ϣⲏⲣⲓ (sons) - plural of ϣⲏⲣⲓ'
        },
        {
          id: 'ex-7-3-10',
          type: 'translation',
          question: 'Translate to Coptic: "our mothers"',
          correctAnswer: 'ⲛⲉⲛⲙⲁⲩ',
          options: ['ⲛⲉⲛⲙⲁⲩ', 'ⲧⲉⲛⲙⲁⲩ', 'ⲛⲟⲩⲙⲁⲩ', 'ⲡⲉⲛⲙⲁⲩ'],
          explanation: 'ⲛⲉⲛⲙⲁⲩ = ⲛⲉⲛ (our, with plural noun) + ⲙⲁⲩ (mothers)'
        }
      ]
    },
    {
      id: 'lesson-7-4',
      unitId: 'unit-7',
      title: 'Complex Possessive Constructions',
      description: 'Multiple possession, body parts, and advanced uses',
      order: 4,
      xpReward: 25,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-7-4-1',
          type: 'translation',
          question: 'Translate: ⲡⲏⲓ ⲙⲡⲁⲓⲱⲧ',
          questionCoptic: 'ⲡⲏⲓ ⲙⲡⲁⲓⲱⲧ',
          correctAnswer: 'my father\'s house',
          options: ['my father\'s house', 'my house', 'the father\'s house', 'his father\'s house'],
          explanation: 'ⲡⲏⲓ ⲙⲡⲁⲓⲱⲧ = the house of my father (multiple possession - Bohairic ⲏⲓ not ⲏ!)'
        },
        {
          id: 'ex-7-4-2',
          type: 'multiple_choice',
          question: 'How do you say "his brother\'s name"?',
          correctAnswer: 'ⲫⲣⲁⲛ ⲙⲡⲉϥⲥⲟⲛ',
          options: ['ⲫⲣⲁⲛ ⲙⲡⲉϥⲥⲟⲛ', 'ⲡⲉϥⲣⲁⲛ', 'ⲡⲉⲥⲣⲁⲛ ⲙⲡⲉϥⲥⲟⲛ', 'ⲡⲉϥⲥⲟⲛ ⲙⲡⲉϥⲣⲁⲛ'],
          explanation: 'ⲫⲣⲁⲛ ⲙⲡⲉϥⲥⲟⲛ = the name of his brother (double possessive construction)'
        },
        {
          id: 'ex-7-4-3',
          type: 'matching',
          question: 'Match body parts with possessives',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲧⲁⲁ̀ⲫⲉ', english: 'my head' },
            { coptic: 'ⲡⲉⲕⲃⲁⲗ', english: 'your (m) eyes' },
            { coptic: 'ⲧⲉϥϫⲓϫ', english: 'his hand' },
            { coptic: 'ⲡⲉⲥϩⲏⲧ', english: 'her heart' }
          ]
        },
        {
          id: 'ex-7-4-4',
          type: 'translation',
          question: 'Translate: ⲧⲁϫⲓϫ ⲟⲩⲃⲁϣ',
          questionCoptic: 'ⲧⲁϫⲓϫ ⲟⲩⲃⲁϣ',
          correctAnswer: 'my hand hurts',
          options: ['my hand hurts', 'my hands hurt', 'your hand hurts', 'his hand hurts'],
          explanation: 'ⲧⲁϫⲓϫ ⲟⲩⲃⲁϣ = my hand is-painful (possessive + predicate - Bohairic ϫⲓϫ not ⲧⲟⲟⲧ!)'
        },
        {
          id: 'ex-7-4-5',
          type: 'sentence_building',
          question: 'Build: "our mother\'s sister"',
          correctAnswer: 'ⲧⲥⲱⲛⲓ ⲛⲧⲉⲛⲙⲁⲩ',
          wordBank: ['ⲧ', 'ⲥⲱⲛⲓ', 'ⲛ̀ⲧⲉ', 'ⲛⲙⲁⲩ'],
          explanation: 'ⲧⲥⲱⲛⲓ ⲛⲧⲉⲛⲙⲁⲩ = the sister of our mother (complex genitive with plural possessive)'
        },
        {
          id: 'ex-7-4-6',
          type: 'fill_blank',
          question: 'Complete: ⲡⲉϥ___ ⲛⲁⲛⲉϥ = his heart is good',
          correctAnswer: 'ϩⲏⲧ',
          options: ['ϩⲏⲧ', 'ⲃⲁⲗ', 'ⲁ̀ⲫⲉ', 'ϫⲓϫ'],
          explanation: 'ϩⲏⲧ means "heart" (masculine noun in Bohairic)'
        },
        {
          id: 'ex-7-4-7',
          type: 'multiple_choice',
          question: 'What does ⲛⲉⲛⲣⲱⲙⲓ ⲉⲧⲉ ⲛⲟⲩⲕ ⲛⲉ mean?',
          questionCoptic: 'ⲛⲉⲛⲣⲱⲙⲓ ⲉⲧⲉ ⲛⲟⲩⲕ ⲛⲉ',
          correctAnswer: 'our people who are yours',
          options: ['our people who are yours', 'your people who are ours', 'our men', 'your men'],
          explanation: 'ⲛⲉⲛⲣⲱⲙⲓ = our people + ⲉⲧⲉ ⲛⲟⲩⲕ ⲛⲉ = who are yours (possessive with relative clause)'
        },
        {
          id: 'ex-7-4-8',
          type: 'translation',
          question: 'Translate: ⲡⲉϥⲃⲁⲗ ⲛⲟⲩⲃⲁϣ',
          questionCoptic: 'ⲡⲉϥⲃⲁⲗ ⲛⲟⲩⲃⲁϣ',
          correctAnswer: 'his eyes hurt',
          options: ['his eyes hurt', 'his eye hurts', 'my eyes hurt', 'your eyes hurt'],
          explanation: 'ⲡⲉϥⲃⲁⲗ = his eyes (ⲃⲁⲗ is plural!) + ⲛⲟⲩⲃⲁϣ = are painful'
        },
        {
          id: 'ex-7-4-9',
          type: 'sentence_building',
          question: 'Build: "their father\'s book"',
          correctAnswer: 'ⲡⲓϫⲱⲙ ⲙⲡⲟⲩⲓⲱⲧ',
          wordBank: ['ⲡⲓ', 'ϫⲱⲙ', 'ⲙ̀', 'ⲡⲟⲩⲓⲱⲧ'],
          explanation: 'ⲡⲓϫⲱⲙ ⲙⲡⲟⲩⲓⲱⲧ = the book of their father (complex possessive construction)'
        },
        {
          id: 'ex-7-4-10',
          type: 'translation',
          question: 'Translate to Coptic: "your (f) mother\'s house"',
          correctAnswer: 'ⲡⲏⲓ ⲛⲧⲉⲙⲁⲩ',
          options: ['ⲡⲏⲓ ⲛⲧⲉⲙⲁⲩ', 'ⲧⲉⲙⲁⲩ ⲙⲡⲏⲓ', 'ⲧⲉⲕⲙⲁⲩ', 'ⲡⲏⲓ ⲙⲡⲁⲙⲁⲩ'],
          explanation: 'ⲡⲏⲓ ⲛⲧⲉⲙⲁⲩ = the house of your mother (ⲛ̀ⲧⲉ- = of + ⲧⲉⲙⲁⲩ = your fem. mother)'
        }
      ]
    }
  ]
};

export default unit7;
