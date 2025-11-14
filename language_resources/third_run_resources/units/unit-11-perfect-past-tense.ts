import { Unit } from '../../types';

// UNIT 11: PAST TENSE (PERFECT)
// Verified for Bohairic dialect consistency
// Based on OUTLINE OF BOHAIRIC COPTIC MORPHOLOGY pages 3-4

const unit11: Unit = {
  id: 'unit-11',
  title: 'Past Tense',
  description: 'Express completed actions in the past',
  order: 11,
  color: '#FF9600',
  lessons: [
    {
      id: 'lesson-11-1',
      unitId: 'unit-11',
      title: 'Past Tense - Singular',
      description: 'I did, you did, he/she did',
      order: 1,
      xpReward: 25,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-11-1-1',
          type: 'multiple_choice',
          question: 'How do you say "I heard" in past tense?',
          correctAnswer: 'ⲁⲓⲥⲱⲧⲙ',
          options: ['ⲁⲓⲥⲱⲧⲙ', 'ϯⲥⲱⲧⲙ', 'ⲛⲁⲓⲥⲱⲧⲙ', 'ϯⲛⲁⲥⲱⲧⲙ'],
          explanation: 'ⲁⲓⲥⲱⲧⲙ = ⲁⲓ (I, past) + ⲥⲱⲧⲙ (hear) = "I heard"'
        },
        {
          id: 'ex-11-1-2',
          type: 'matching',
          question: 'Match past tense pronouns',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲁⲓ-', english: 'I did' },
            { coptic: 'ⲁⲕ-', english: 'you did (m)' },
            { coptic: 'ⲁⲣⲉ-', english: 'you did (f)' },
            { coptic: 'ⲁϥ-', english: 'he did' }
          ]
        },
        {
          id: 'ex-11-1-3',
          type: 'translation',
          question: 'Translate: ⲁⲕⲟⲩⲱⲙ',
          questionCoptic: 'ⲁⲕⲟⲩⲱⲙ',
          correctAnswer: 'you (m) ate',
          options: ['you (m) ate', 'I ate', 'he ate', 'you (f) ate'],
          explanation: 'ⲁⲕⲟⲩⲱⲙ = ⲁⲕ (you, m, past) + ⲟⲩⲱⲙ (eat) = "you ate"'
        },
        {
          id: 'ex-11-1-4',
          type: 'sentence_building',
          question: 'Build: "She saw"',
          correctAnswer: 'ⲁⲥⲛⲁⲩ',
          wordBank: ['ⲁⲥ', 'ⲛⲁⲩ', 'ⲁⲣⲉ', 'ⲁϥ'],
          explanation: 'ⲁⲥⲛⲁⲩ = ⲁⲥ (she, past) + ⲛⲁⲩ (see) = "she saw"'
        },
        {
          id: 'ex-11-1-5',
          type: 'multiple_choice',
          question: 'What is the past tense prefix for "you (feminine)"?',
          correctAnswer: 'ⲁⲣⲉ-',
          options: ['ⲁⲣⲉ-', 'ⲁⲕ-', 'ⲁⲥ-', 'ⲁⲓ-'],
          explanation: 'ⲁⲣⲉ- is used for "you did" when addressing a female in past tense'
        },
        {
          id: 'ex-11-1-6',
          type: 'translation',
          question: 'Translate: ⲁϥⲙⲟϣⲓ',
          questionCoptic: 'ⲁϥⲙⲟϣⲓ',
          correctAnswer: 'he walked',
          options: ['he walked', 'I walked', 'you walked', 'she walked'],
          explanation: 'ⲁϥⲙⲟϣⲓ = ⲁϥ (he, past) + ⲙⲟϣⲓ (walk) = "he walked" (Bohairic ⲙⲟϣⲓ not ⲙⲟⲟϣⲉ!)'
        },
        {
          id: 'ex-11-1-7',
          type: 'fill_blank',
          question: 'Complete: ___ ⲥⲱ = I drank',
          correctAnswer: 'ⲁⲓ',
          options: ['ⲁⲓ', 'ⲁⲕ', 'ⲁϥ', 'ⲁⲥ'],
          explanation: 'ⲁⲓ is the past tense prefix for "I did"'
        },
        {
          id: 'ex-11-1-8',
          type: 'matching',
          question: 'Match complete past tense verbs',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲁⲓⲓ̀ⲣⲓ', english: 'I did/made' },
            { coptic: 'ⲁⲕⲓ̀ⲣⲓ', english: 'you (m) did/made' },
            { coptic: 'ⲁⲣⲉⲓ̀ⲣⲓ', english: 'you (f) did/made' },
            { coptic: 'ⲁϥⲓ̀ⲣⲓ', english: 'he did/made' }
          ]
        }
      ]
    },
    {
      id: 'lesson-11-2',
      unitId: 'unit-11',
      title: 'Past Tense - Plural',
      description: 'we did, you (pl) did, they did',
      order: 2,
      xpReward: 25,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-11-2-1',
          type: 'matching',
          question: 'Match plural past tense pronouns',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲁⲛ-', english: 'we did' },
            { coptic: 'ⲁⲣⲉⲧⲉⲛ-', english: 'you (pl) did' },
            { coptic: 'ⲁⲩ-', english: 'they did' }
          ]
        },
        {
          id: 'ex-11-2-2',
          type: 'translation',
          question: 'Translate: ⲁⲛⲥⲱⲧⲙ',
          questionCoptic: 'ⲁⲛⲥⲱⲧⲙ',
          correctAnswer: 'we heard',
          options: ['we heard', 'you (pl) heard', 'they heard', 'I heard'],
          explanation: 'ⲁⲛⲥⲱⲧⲙ = ⲁⲛ (we, past) + ⲥⲱⲧⲙ (hear) = "we heard"'
        },
        {
          id: 'ex-11-2-3',
          type: 'multiple_choice',
          question: 'How do you say "they went"?',
          correctAnswer: 'ⲁⲩϣⲉⲛⲓ',
          options: ['ⲁⲩϣⲉⲛⲓ', 'ⲁⲛϣⲉⲛⲓ', 'ⲁⲣⲉⲧⲉⲛϣⲉⲛⲓ', 'ⲁϥϣⲉⲛⲓ'],
          explanation: 'ⲁⲩϣⲉⲛⲓ = ⲁⲩ (they, past) + ϣⲉⲛⲓ (go) = "they went" (Bohairic ϣⲉⲛⲓ not ⲃⲱⲕ!)'
        },
        {
          id: 'ex-11-2-4',
          type: 'sentence_building',
          question: 'Build: "You (plural) came"',
          correctAnswer: 'ⲁⲣⲉⲧⲉⲛⲓ̀',
          wordBank: ['ⲁⲣⲉⲧⲉⲛ', 'ⲓ̀', 'ⲁⲛ', 'ⲁⲩ'],
          explanation: 'ⲁⲣⲉⲧⲉⲛⲓ̀ = ⲁⲣⲉⲧⲉⲛ (you pl, past) + ⲓ̀ (come) = "you came" (Bohairic ⲓ̀ not ⲉⲓ!)'
        },
        {
          id: 'ex-11-2-5',
          type: 'translation',
          question: 'Translate: ⲁⲩϯ',
          questionCoptic: 'ⲁⲩϯ',
          correctAnswer: 'they gave',
          options: ['they gave', 'we gave', 'you gave', 'I gave'],
          explanation: 'ⲁⲩϯ = ⲁⲩ (they, past) + Ϯ (give) = "they gave"'
        },
        {
          id: 'ex-11-2-6',
          type: 'fill_blank',
          question: 'Complete: ___ ⲟⲩⲱⲙ = we ate',
          correctAnswer: 'ⲁⲛ',
          options: ['ⲁⲛ', 'ⲁⲣⲉⲧⲉⲛ', 'ⲁⲩ', 'ⲁⲓ'],
          explanation: 'ⲁⲛ is the past tense prefix for "we did"'
        },
        {
          id: 'ex-11-2-7',
          type: 'matching',
          question: 'Match past tense sentences',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲁⲛⲛⲁⲩ', english: 'we saw' },
            { coptic: 'ⲁⲣⲉⲧⲉⲛⲛⲁⲩ', english: 'you (pl) saw' },
            { coptic: 'ⲁⲩⲛⲁⲩ', english: 'they saw' }
          ]
        },
        {
          id: 'ex-11-2-8',
          type: 'multiple_choice',
          question: 'What is "you (plural) said" in Coptic?',
          correctAnswer: 'ⲁⲣⲉⲧⲉⲛϫⲱ',
          options: ['ⲁⲣⲉⲧⲉⲛϫⲱ', 'ⲁⲛϫⲱ', 'ⲁⲩϫⲱ', 'ⲁⲕϫⲱ'],
          explanation: 'ⲁⲣⲉⲧⲉⲛϫⲱ = ⲁⲣⲉⲧⲉⲛ (you pl, past) + ϫⲱ (say) = "you said"'
        }
      ]
    },
    {
      id: 'lesson-11-3',
      unitId: 'unit-11',
      title: 'Past Tense Practice',
      description: 'Master all past tense forms',
      order: 3,
      xpReward: 25,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-11-3-1',
          type: 'matching',
          question: 'Match all past tense forms of "to love"',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲁⲓⲙⲉⲛⲣⲉ', english: 'I loved' },
            { coptic: 'ⲁⲕⲙⲉⲛⲣⲉ', english: 'you (m) loved' },
            { coptic: 'ⲁⲣⲉⲙⲉⲛⲣⲉ', english: 'you (f) loved' },
            { coptic: 'ⲁϥⲙⲉⲛⲣⲉ', english: 'he loved' }
          ]
        },
        {
          id: 'ex-11-3-2',
          type: 'matching',
          question: 'Match more past forms of "to love"',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲁⲥⲙⲉⲛⲣⲉ', english: 'she loved' },
            { coptic: 'ⲁⲛⲙⲉⲛⲣⲉ', english: 'we loved' },
            { coptic: 'ⲁⲣⲉⲧⲉⲛⲙⲉⲛⲣⲉ', english: 'you (pl) loved' },
            { coptic: 'ⲁⲩⲙⲉⲛⲣⲉ', english: 'they loved' }
          ]
        },
        {
          id: 'ex-11-3-3',
          type: 'translation',
          question: 'Translate: ⲁⲛϣⲉⲛⲓ ⲉϯⲉⲕⲕⲗⲏⲥⲓⲁ',
          questionCoptic: 'ⲁⲛϣⲉⲛⲓ ⲉϯⲉⲕⲕⲗⲏⲥⲓⲁ',
          correctAnswer: 'we went to church',
          options: ['we went to church', 'they went to church', 'you went to church', 'I went to church'],
          explanation: 'ⲁⲛϣⲉⲛⲓ ⲉϯⲉⲕⲕⲗⲏⲥⲓⲁ = we went to the church (Bohairic ϣⲉⲛⲓ not ⲃⲱⲕ!)'
        },
        {
          id: 'ex-11-3-4',
          type: 'sentence_building',
          question: 'Build: "They called his name"',
          correctAnswer: 'ⲁⲩⲙⲟⲩϯ ⲉⲡⲉϥⲣⲁⲛ',
          wordBank: ['ⲁⲩ', 'ⲙⲟⲩϯ', 'ⲉ', 'ⲡⲉϥⲣⲁⲛ'],
          explanation: 'ⲁⲩⲙⲟⲩϯ ⲉⲡⲉϥⲣⲁⲛ = they called his name (Bohairic ⲙⲟⲩϯ not ⲙⲟⲩⲧⲉ!)'
        },
        {
          id: 'ex-11-3-5',
          type: 'fill_blank',
          question: 'Complete: ___ ⲥⲱⲧⲙ ⲉⲧⲉϥⲥⲙⲏ = I heard his voice',
          correctAnswer: 'ⲁⲓ',
          options: ['ⲁⲓ', 'ⲁⲕ', 'ⲁⲛ', 'ⲁⲩ'],
          explanation: 'ⲁⲓⲥⲱⲧⲙ ⲉⲧⲉϥⲥⲙⲏ = I heard his voice'
        },
        {
          id: 'ex-11-3-6',
          type: 'translation',
          question: 'Translate: ⲁϥⲥ̀ⲙⲟⲩ ⲉ̀ⲣⲱⲟⲩ',
          questionCoptic: 'ⲁϥⲥ̀ⲙⲟⲩ ⲉ̀ⲣⲱⲟⲩ',
          correctAnswer: 'he blessed them',
          options: ['he blessed them', 'he blessed us', 'I blessed them', 'they blessed him'],
          explanation: 'ⲁϥⲥ̀ⲙⲟⲩ ⲉ̀ⲣⲱⲟⲩ = he blessed them'
        },
        {
          id: 'ex-11-3-7',
          type: 'multiple_choice',
          question: 'How do you say "she wrote"?',
          correctAnswer: 'ⲁⲥⲥ̀ϧⲁⲓ',
          options: ['ⲁⲥⲥ̀ϧⲁⲓ', 'ⲁϥⲥ̀ϧⲁⲓ', 'ⲁⲓⲥ̀ϧⲁⲓ', 'ⲁⲣⲉⲥ̀ϧⲁⲓ'],
          explanation: 'ⲁⲥⲥ̀ϧⲁⲓ = ⲁⲥ (she, past) + ⲥ̀ϧⲁⲓ (write) = "she wrote" (Bohairic ⲥ̀ϧⲁⲓ not ⲥϩⲁⲓ!)'
        },
        {
          id: 'ex-11-3-8',
          type: 'sentence_building',
          question: 'Build: "We opened the door"',
          correctAnswer: 'ⲁⲛⲟⲩⲱⲛ ⲙⲡⲓⲣⲟ',
          wordBank: ['ⲁⲛ', 'ⲟⲩⲱⲛ', 'ⲙ', 'ⲡⲓⲣⲟ'],
          explanation: 'ⲁⲛⲟⲩⲱⲛ ⲙⲡⲓⲣⲟ = we opened the door'
        },
        {
          id: 'ex-11-3-9',
          type: 'translation',
          question: 'Translate: ⲁⲣⲉⲧⲉⲛⲓ̀ⲣⲓ ⲙⲡⲉϥⲟⲩⲱϣ',
          questionCoptic: 'ⲁⲣⲉⲧⲉⲛⲓ̀ⲣⲓ ⲙⲡⲉϥⲟⲩⲱϣ',
          correctAnswer: 'you (pl) did his will',
          options: ['you (pl) did his will', 'we did his will', 'they did his will', 'you (m) did his will'],
          explanation: 'ⲁⲣⲉⲧⲉⲛⲓ̀ⲣⲓ ⲙⲡⲉϥⲟⲩⲱϣ = you (pl) did his will (ⲓ̀ⲣⲓ = do/make, ⲟⲩⲱϣ = will/desire)'
        },
        {
          id: 'ex-11-3-10',
          type: 'multiple_choice',
          question: 'How do you say "she read the book"?',
          correctAnswer: 'ⲁⲥⲱϣ ⲙⲡⲓϫⲱⲙ',
          options: ['ⲁⲥⲱϣ ⲙⲡⲓϫⲱⲙ', 'ⲁϥⲱϣ ⲙⲡⲓϫⲱⲙ', 'ⲁⲓⲱϣ ⲙⲡⲓϫⲱⲙ', 'ⲁⲣⲉⲱϣ ⲙⲡⲓϫⲱⲙ'],
          explanation: 'ⲁⲥⲱϣ ⲙⲡⲓϫⲱⲙ = ⲁⲥ (she, past) + ⲱϣ (read) + ⲙⲡⲓϫⲱⲙ = the book'
        }
      ]
    },
    {
      id: 'lesson-11-4',
      unitId: 'unit-11',
      title: 'Past Tense Narratives',
      description: 'Sequencing events, storytelling, and time expressions',
      order: 4,
      xpReward: 25,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-11-4-1',
          type: 'translation',
          question: 'Translate: ⲁⲓⲧⲱⲛⲓ ⲟⲩⲟϩ ⲁⲓϣⲉⲛⲓ ⲉ̀ϯⲉⲕⲕⲗⲏⲥⲓⲁ',
          questionCoptic: 'ⲁⲓⲧⲱⲛⲓ ⲟⲩⲟϩ ⲁⲓϣⲉⲛⲓ ⲉ̀ϯⲉⲕⲕⲗⲏⲥⲓⲁ',
          correctAnswer: 'I got up and went to church',
          options: ['I got up and went to church', 'I woke up and go to church', 'I get up and went to church', 'I will get up and go to church'],
          explanation: 'ⲁⲓⲧⲱⲛⲓ ⲟⲩⲟϩ ⲁⲓϣⲉⲛⲓ = I got up and I went (narrative sequence - Bohairic ⲧⲱⲛⲓ not ⲧⲱⲟⲩⲛ!)'
        },
        {
          id: 'ex-11-4-2',
          type: 'multiple_choice',
          question: 'Which conjunction connects past events in sequence?',
          correctAnswer: 'ⲟⲩⲟϩ',
          options: ['ⲟⲩⲟϩ', 'ⲁⲗⲗⲁ', 'ⲏ̀', 'ⲉ̀ϣⲱⲡ'],
          explanation: 'ⲟⲩⲟϩ = and (Bohairic - used to connect sequential past actions)'
        },
        {
          id: 'ex-11-4-3',
          type: 'matching',
          question: 'Match narrative sequences',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲁϥⲓ̀ ⲟⲩⲟϩ ⲁϥⲛⲁⲩ', english: 'he came and saw' },
            { coptic: 'ⲁⲛⲥⲱⲧⲙ ⲟⲩⲟϩ ⲁⲛⲓ̀ⲣⲓ', english: 'we heard and did' },
            { coptic: 'ⲁⲥⲟⲩⲱⲛ ⲟⲩⲟϩ ⲁⲥϣⲉⲛⲓ ⲉ̀ϧⲟⲩⲛ', english: 'she opened and went in' }
          ]
        },
        {
          id: 'ex-11-4-4',
          type: 'translation',
          question: 'Translate: ⲙⲉⲛⲉⲛⲥⲁ ⲛⲁⲓ ⲁϥϫⲱ ⲙⲙⲟⲥ',
          questionCoptic: 'ⲙⲉⲛⲉⲛⲥⲁ ⲛⲁⲓ ⲁϥϫⲱ ⲙⲙⲟⲥ',
          correctAnswer: 'after these things he said it',
          options: ['after these things he said it', 'before these things he said it', 'during these things he said it', 'he said these things'],
          explanation: 'ⲙⲉⲛⲉⲛⲥⲁ ⲛⲁⲓ = after these (things) + ⲁϥϫⲱ ⲙⲙⲟⲥ = he said it (time expression + narrative)'
        },
        {
          id: 'ex-11-4-5',
          type: 'sentence_building',
          question: 'Build: "First he ate, then he drank"',
          correctAnswer: 'ⲛϣⲟⲣⲡ ⲁϥⲟⲩⲱⲙ ⲙⲉⲛⲉⲛⲥⲁ ⲫⲁⲓ ⲁϥⲥⲱ',
          wordBank: ['ⲛϣⲟⲣⲡ', 'ⲁϥⲟⲩⲱⲙ', 'ⲙⲉⲛⲉⲛⲥⲁ', 'ⲫⲁⲓ', 'ⲁϥⲥⲱ'],
          explanation: 'ⲛϣⲟⲣⲡ = first + ⲁϥⲟⲩⲱⲙ = he ate + ⲙⲉⲛⲉⲛⲥⲁ ⲫⲁⲓ = after this + ⲁϥⲥⲱ = he drank'
        },
        {
          id: 'ex-11-4-6',
          type: 'fill_blank',
          question: 'Complete: ⲙ̀ⲫⲟⲟⲩ ⲉ̀ⲧⲉⲙⲙⲁⲩ ___ ϣⲉⲛⲓ = on that day I went',
          correctAnswer: 'ⲁⲓ',
          options: ['ⲁⲓ', 'ϯ', 'ϯⲛⲁ', 'ⲛⲁⲓ'],
          explanation: 'ⲙ̀ⲫⲟⲟⲩ ⲉ̀ⲧⲉⲙⲙⲁⲩ = on that day (time expression) + ⲁⲓϣⲉⲛⲓ = I went'
        },
        {
          id: 'ex-11-4-7',
          type: 'multiple_choice',
          question: 'What does ϧⲉⲛ ⲡⲓϣⲟⲣⲡ mean in narrative context?',
          questionCoptic: 'ϧⲉⲛ ⲡⲓϣⲟⲣⲡ',
          correctAnswer: 'at first / in the beginning',
          options: ['at first / in the beginning', 'at last', 'in the middle', 'suddenly'],
          explanation: 'ϧⲉⲛ ⲡⲓϣⲟⲣⲡ = in the first/beginning (narrative time marker - Bohairic ϧⲉⲛ not ϩⲛ!)'
        },
        {
          id: 'ex-11-4-8',
          type: 'translation',
          question: 'Translate: ⲁⲩⲓ̀ ⲛⲉⲙⲁϥ ⲟⲩⲟϩ ⲁⲩϩⲉⲙⲥⲓ ⲛⲉⲙⲁϥ',
          questionCoptic: 'ⲁⲩⲓ̀ ⲛⲉⲙⲁϥ ⲟⲩⲟϩ ⲁⲩϩⲉⲙⲥⲓ ⲛⲉⲙⲁϥ',
          correctAnswer: 'they came with him and sat with him',
          options: ['they came with him and sat with him', 'they came to him and sat with him', 'he came with them and sat with them', 'they will come and sit'],
          explanation: 'ⲁⲩⲓ̀ ⲛⲉⲙⲁϥ ⲟⲩⲟϩ ⲁⲩϩⲉⲙⲥⲓ ⲛⲉⲙⲁϥ = narrative sequence with repeated preposition (Bohairic ⲓ̀ not ⲉⲓ!)'
        },
        {
          id: 'ex-11-4-9',
          type: 'sentence_building',
          question: 'Build: "Yesterday we saw him and spoke to him"',
          correctAnswer: 'ⲥⲁϥ ⲁⲛⲛⲁⲩ ⲉ̀ⲣⲟϥ ⲟⲩⲟϩ ⲁⲛⲥⲁϫⲓ ⲛⲉⲙⲁϥ',
          wordBank: ['ⲥⲁϥ', 'ⲁⲛⲛⲁⲩ', 'ⲉ̀ⲣⲟϥ', 'ⲟⲩⲟϩ', 'ⲁⲛⲥⲁϫⲓ', 'ⲛⲉⲙⲁϥ'],
          explanation: 'ⲥⲁϥ = yesterday + ⲁⲛⲛⲁⲩ ⲉ̀ⲣⲟϥ = we saw him + ⲟⲩⲟϩ ⲁⲛⲥⲁϫⲓ ⲛⲉⲙⲁϥ = and we spoke with him'
        },
        {
          id: 'ex-11-4-10',
          type: 'translation',
          question: 'Translate to Coptic: "Then they left and went home"',
          correctAnswer: 'ⲧⲟⲧⲉ ⲁⲩϣⲉⲛⲱⲟⲩ ⲟⲩⲟϩ ⲁⲩϣⲉⲛⲓ ⲉ̀ⲡⲏⲓ',
          options: ['ⲧⲟⲧⲉ ⲁⲩϣⲉⲛⲱⲟⲩ ⲟⲩⲟϩ ⲁⲩϣⲉⲛⲓ ⲉ̀ⲡⲏⲓ', 'ⲁⲩϣⲉⲛⲱⲟⲩ ⲉ̀ⲡⲏⲓ', 'ⲧⲟⲧⲉ ⲁⲩϣⲉⲛⲓ', 'ⲥⲉϣⲉⲛⲱⲟⲩ ⲟⲩⲟϩ ⲥⲉϣⲉⲛⲓ'],
          explanation: 'ⲧⲟⲧⲉ = then + ⲁⲩϣⲉⲛⲱⲟⲩ = they left + ⲟⲩⲟϩ ⲁⲩϣⲉⲛⲓ ⲉ̀ⲡⲏⲓ = and they went to the house (narrative with time marker)'
        }
      ]
    }
  ]
};

export default unit11;
