import { Unit } from '../../types';

// UNIT 17: QUESTION WORDS
// Verified for Bohairic dialect consistency
// Who, What, Where, When, Why, How - interrogatives

const unit17: Unit = {
  id: 'unit-17',
  title: 'Question Words',
  description: 'Ask questions: Who, What, Where, When, Why, How',
  order: 17,
  color: '#FF9600',
  lessons: [
    {
      id: 'lesson-17-1',
      unitId: 'unit-17',
      title: 'Who & What (ⲛⲓⲙ, ⲟⲩ)',
      description: 'Basic question words',
      order: 1,
      xpReward: 30,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-17-1-1',
          type: 'translation',
          question: 'Translate: ⲛⲓⲙ ⲡⲉ ⲫⲁⲓ',
          questionCoptic: 'ⲛⲓⲙ ⲡⲉ ⲫⲁⲓ',
          correctAnswer: 'Who is this?',
          options: ['Who is this?', 'What is this?', 'Who are you?', 'What is that?'],
          explanation: 'ⲛⲓⲙ = who + ⲡⲉ = is (masc.) + ⲫⲁⲓ = this'
        },
        {
          id: 'ex-17-1-2',
          type: 'multiple_choice',
          question: 'What question word means "what"?',
          correctAnswer: 'ⲟⲩ',
          options: ['ⲟⲩ', 'ⲛⲓⲙ', 'ⲑⲱⲛ', 'ⲑ̀ⲛⲁⲩ'],
          explanation: 'ⲟⲩ (ou) = what - for asking about things'
        },
        {
          id: 'ex-17-1-3',
          type: 'matching',
          question: 'Match question words',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲛⲓⲙ', english: 'who' },
            { coptic: 'ⲟⲩ', english: 'what' },
            { coptic: 'ⲁϣ', english: 'what/how many' },
            { coptic: 'ⲟⲩⲏⲣ', english: 'what/which' }
          ]
        },
        {
          id: 'ex-17-1-4',
          type: 'translation',
          question: 'Translate: ⲟⲩ ⲡⲉ ⲡⲉⲕⲣⲁⲛ',
          questionCoptic: 'ⲟⲩ ⲡⲉ ⲡⲉⲕⲣⲁⲛ',
          correctAnswer: 'What is your name?',
          options: ['What is your name?', 'Who is your name?', 'What is my name?', 'Who are you?'],
          explanation: 'ⲟⲩ = what + ⲡⲉ = is + ⲡⲉⲕⲣⲁⲛ = your name'
        },
        {
          id: 'ex-17-1-5',
          type: 'sentence_building',
          question: 'Build: "Who are you?"',
          correctAnswer: 'ⲛ̀ⲑⲟⲕ ⲛⲓⲙ',
          wordBank: ['ⲛ̀ⲑⲟⲕ', 'ⲛⲓⲙ', 'ⲟⲩ', 'ⲡⲉ'],
          explanation: 'ⲛ̀ⲑⲟⲕ ⲛⲓⲙ = you (are) who? (literally "you who?")'
        },
        {
          id: 'ex-17-1-6',
          type: 'fill_blank',
          question: 'Complete: ___ ⲡⲉⲧⲉⲕⲓⲣⲓ ⲙ̀ⲙⲟϥ = What are you doing?',
          correctAnswer: 'ⲟⲩ',
          options: ['ⲟⲩ', 'ⲛⲓⲙ', 'ⲑⲱⲛ', 'ⲡⲱⲥ'],
          explanation: 'ⲟⲩ ⲡⲉⲧⲉⲕⲓⲣⲓ ⲙ̀ⲙⲟϥ = what (is) that you do (of) it?'
        },
        {
          id: 'ex-17-1-7',
          type: 'translation',
          question: 'Translate: ⲛⲓⲙ ⲡⲉ ⲡⲉⲕⲓⲱⲧ',
          questionCoptic: 'ⲛⲓⲙ ⲡⲉ ⲡⲉⲕⲓⲱⲧ',
          correctAnswer: 'Who is your father?',
          options: ['Who is your father?', 'What is your father?', 'Who is my father?', 'Where is your father?'],
          explanation: 'ⲛⲓⲙ = who + ⲡⲉ = is + ⲡⲉⲕⲓⲱⲧ = your father'
        },
        {
          id: 'ex-17-1-8',
          type: 'multiple_choice',
          question: 'How do you ask "What happened?"',
          correctAnswer: 'ⲟⲩ ⲡⲉⲧⲁϥϣⲱⲡⲓ',
          options: ['ⲟⲩ ⲡⲉⲧⲁϥϣⲱⲡⲓ', 'ⲛⲓⲙ ⲡⲉⲧⲁϥϣⲱⲡⲓ', 'ⲑⲱⲛ ⲁϥϣⲱⲡⲓ', 'ⲡⲱⲥ ⲁϥϣⲱⲡⲓ'],
          explanation: 'ⲟⲩ ⲡⲉⲧⲁϥϣⲱⲡⲓ = what (is) that-which-happened?'
        }
      ]
    },
    {
      id: 'lesson-17-2',
      unitId: 'unit-17',
      title: 'Where & When (ⲑⲱⲛ, ⲑ̀ⲛⲁⲩ)',
      description: 'Questions about place and time',
      order: 2,
      xpReward: 30,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-17-2-1',
          type: 'translation',
          question: 'Translate: ⲑⲱⲛ ⲕϣⲟⲡ',
          questionCoptic: 'ⲑⲱⲛ ⲕϣⲟⲡ',
          correctAnswer: 'Where are you?',
          options: ['Where are you?', 'When are you?', 'Who are you?', 'Where is he?'],
          explanation: 'ⲑⲱⲛ (thon) = where + ⲕϣⲟⲡ = you are/exist'
        },
        {
          id: 'ex-17-2-2',
          type: 'multiple_choice',
          question: 'What does ⲑ̀ⲛⲁⲩ mean?',
          correctAnswer: 'when',
          options: ['when', 'where', 'who', 'why'],
          explanation: 'ⲑ̀ⲛⲁⲩ (ethnau) = when - for asking about time'
        },
        {
          id: 'ex-17-2-3',
          type: 'matching',
          question: 'Match location/time questions',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲑⲱⲛ', english: 'where' },
            { coptic: 'ⲑ̀ⲛⲁⲩ', english: 'when' },
            { coptic: 'ⲉⲑⲃⲉⲟⲩ', english: 'why' },
            { coptic: 'ⲡⲱⲥ', english: 'how' }
          ]
        },
        {
          id: 'ex-17-2-4',
          type: 'translation',
          question: 'Translate: ⲑⲱⲛ ⲁⲕϣⲉⲛⲓ',
          questionCoptic: 'ⲑⲱⲛ ⲁⲕϣⲉⲛⲓ',
          correctAnswer: 'Where did you go?',
          options: ['Where did you go?', 'When did you go?', 'Why did you go?', 'Where are you going?'],
          explanation: 'ⲑⲱⲛ = where + ⲁⲕϣⲉⲛⲓ = you went (Bohairic ϣⲉⲛⲓ not ⲃⲱⲕ!)'
        },
        {
          id: 'ex-17-2-5',
          type: 'sentence_building',
          question: 'Build: "When will you come?"',
          correctAnswer: 'ⲑ̀ⲛⲁⲩ ⲕⲛⲁⲓ̀',
          wordBank: ['ⲑ̀ⲛⲁⲩ', 'ⲕⲛⲁⲓ̀', 'ⲑⲱⲛ', 'ⲁⲕⲓ̀'],
          explanation: 'ⲑ̀ⲛⲁⲩ = when + ⲕⲛⲁⲓ̀ = you will come (Bohairic ⲓ̀ not ⲉⲓ!)'
        },
        {
          id: 'ex-17-2-6',
          type: 'fill_blank',
          question: 'Complete: ___ ⲡⲓⲏⲓ = Where is the house?',
          correctAnswer: 'ⲑⲱⲛ',
          options: ['ⲑⲱⲛ', 'ⲑ̀ⲛⲁⲩ', 'ⲛⲓⲙ', 'ⲟⲩ'],
          explanation: 'ⲑⲱⲛ ⲡⲓⲏⲓ = where (is) the house?'
        },
        {
          id: 'ex-17-2-7',
          type: 'translation',
          question: 'Translate: ⲑ̀ⲛⲁⲩ ⲁϥⲓ̀',
          questionCoptic: 'ⲑ̀ⲛⲁⲩ ⲁϥⲓ̀',
          correctAnswer: 'When did he come?',
          options: ['When did he come?', 'Where did he come?', 'When will he come?', 'Why did he come?'],
          explanation: 'ⲑ̀ⲛⲁⲩ = when + ⲁϥⲓ̀ = he came (Bohairic ⲓ̀ not ⲉⲓ!)'
        },
        {
          id: 'ex-17-2-8',
          type: 'multiple_choice',
          question: 'How do you ask "Where is God?"',
          correctAnswer: 'ⲑⲱⲛ ⲫϯ',
          options: ['ⲑⲱⲛ ⲫϯ', 'ⲑ̀ⲛⲁⲩ ⲫϯ', 'ⲛⲓⲙ ⲡⲉ ⲫϯ', 'ⲟⲩ ⲡⲉ ⲫϯ'],
          explanation: 'ⲑⲱⲛ ⲫϯ = where (is) God? (Bohairic ⲫϯ not ⲫⲛⲟⲩϯ!)'
        }
      ]
    },
    {
      id: 'lesson-17-3',
      unitId: 'unit-17',
      title: 'Why & How (ⲉⲑⲃⲉⲟⲩ, ⲡⲱⲥ)',
      description: 'Questions about reason and manner',
      order: 3,
      xpReward: 30,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-17-3-1',
          type: 'translation',
          question: 'Translate: ⲉⲑⲃⲉⲟⲩ',
          questionCoptic: 'ⲉⲑⲃⲉⲟⲩ',
          correctAnswer: 'Why? / For what reason?',
          options: ['Why? / For what reason?', 'How?', 'When?', 'Where?'],
          explanation: 'ⲉⲑⲃⲉⲟⲩ (ethve-ou) = why, for what reason (literally "because of what")'
        },
        {
          id: 'ex-17-3-2',
          type: 'multiple_choice',
          question: 'What does ⲡⲱⲥ mean?',
          correctAnswer: 'how',
          options: ['how', 'why', 'when', 'where'],
          explanation: 'ⲡⲱⲥ (pos, from Greek) = how, in what manner'
        },
        {
          id: 'ex-17-3-3',
          type: 'matching',
          question: 'Match question types',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲉⲑⲃⲉⲟⲩ', english: 'why/for what' },
            { coptic: 'ⲡⲱⲥ', english: 'how' },
            { coptic: 'ⲁϣ ⲛ̀ⲣⲏϯ', english: 'how/in what way' },
            { coptic: 'ⲁⲥϫⲉ', english: 'how much/many' }
          ]
        },
        {
          id: 'ex-17-3-4',
          type: 'translation',
          question: 'Translate: ⲉⲑⲃⲉⲟⲩ ⲁⲕⲓ̀',
          questionCoptic: 'ⲉⲑⲃⲉⲟⲩ ⲁⲕⲓ̀',
          correctAnswer: 'Why did you come?',
          options: ['Why did you come?', 'How did you come?', 'When did you come?', 'Where did you come?'],
          explanation: 'ⲉⲑⲃⲉⲟⲩ = why + ⲁⲕⲓ̀ = you came (Bohairic ⲓ̀ not ⲉⲓ!)'
        },
        {
          id: 'ex-17-3-5',
          type: 'sentence_building',
          question: 'Build: "How do you know?"',
          correctAnswer: 'ⲡⲱⲥ ⲕⲥⲱⲟⲩⲛ',
          wordBank: ['ⲡⲱⲥ', 'ⲕⲥⲱⲟⲩⲛ', 'ⲉⲑⲃⲉⲟⲩ', 'ⲁⲕⲉⲙⲓ'],
          explanation: 'ⲡⲱⲥ = how + ⲕⲥⲱⲟⲩⲛ = you know'
        },
        {
          id: 'ex-17-3-6',
          type: 'fill_blank',
          question: 'Complete: ___ ⲕⲣⲓⲙⲓ = Why do you cry?',
          correctAnswer: 'ⲉⲑⲃⲉⲟⲩ',
          options: ['ⲉⲑⲃⲉⲟⲩ', 'ⲡⲱⲥ', 'ⲑⲱⲛ', 'ⲑ̀ⲛⲁⲩ'],
          explanation: 'ⲉⲑⲃⲉⲟⲩ = why + ⲕⲣⲓⲙⲓ = you cry/weep'
        },
        {
          id: 'ex-17-3-7',
          type: 'translation',
          question: 'Translate: ⲡⲱⲥ ⲁⲕⲓⲣⲓ ⲙ̀ⲫⲁⲓ',
          questionCoptic: 'ⲡⲱⲥ ⲁⲕⲓⲣⲓ ⲙ̀ⲫⲁⲓ',
          correctAnswer: 'How did you do this?',
          options: ['How did you do this?', 'Why did you do this?', 'When did you do this?', 'Who did this?'],
          explanation: 'ⲡⲱⲥ = how + ⲁⲕⲓⲣⲓ ⲙ̀ⲫⲁⲓ = you did this'
        },
        {
          id: 'ex-17-3-8',
          type: 'multiple_choice',
          question: 'How do you ask "Why does God love us?"',
          correctAnswer: 'ⲉⲑⲃⲉⲟⲩ ⲫϯ ⲙⲉⲛⲣⲉ ⲙ̀ⲙⲟⲛ',
          options: ['ⲉⲑⲃⲉⲟⲩ ⲫϯ ⲙⲉⲛⲣⲉ ⲙ̀ⲙⲟⲛ', 'ⲡⲱⲥ ⲫϯ ⲙⲉⲛⲣⲉ ⲙ̀ⲙⲟⲛ', 'ⲑⲱⲛ ⲫϯ ⲙⲉⲛⲣⲉ ⲙ̀ⲙⲟⲛ', 'ⲑ̀ⲛⲁⲩ ⲫϯ ⲙⲉⲛⲣⲉ ⲙ̀ⲙⲟⲛ'],
          explanation: 'ⲉⲑⲃⲉⲟⲩ = why + ⲫϯ ⲙⲉⲛⲣⲉ ⲙ̀ⲙⲟⲛ = God loves us (Bohairic: ⲫϯ not ⲫⲛⲟⲩϯ, ⲙⲉⲛⲣⲉ not ⲙⲉⲣⲓ!)'
        }
      ]
    },
    {
      id: 'lesson-17-4',
      unitId: 'unit-17',
      title: 'Question Formation',
      description: 'Building complete questions',
      order: 4,
      xpReward: 30,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-17-4-1',
          type: 'translation',
          question: 'Translate: ⲁϣⲡⲉ ⲡⲉⲕⲣⲁⲛ',
          questionCoptic: 'ⲁϣⲡⲉ ⲡⲉⲕⲣⲁⲛ',
          correctAnswer: 'What is your name?',
          options: ['What is your name?', 'Who is your name?', 'Where is your name?', 'How is your name?'],
          explanation: 'ⲁϣⲡⲉ = what (is) + ⲡⲉⲕⲣⲁⲛ = your name (alternative to ⲟⲩ ⲡⲉ)'
        },
        {
          id: 'ex-17-4-2',
          type: 'multiple_choice',
          question: 'Which is a yes/no question marker?',
          correctAnswer: 'ⲙⲏ',
          options: ['ⲙⲏ', 'ⲟⲩ', 'ⲛⲓⲙ', 'ⲑⲱⲛ'],
          explanation: 'ⲙⲏ (mee) = question particle for yes/no questions, expecting "yes" answer'
        },
        {
          id: 'ex-17-4-3',
          type: 'matching',
          question: 'Match question patterns',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲙⲏ...', english: 'Is it...? (yes/no)' },
            { coptic: 'ⲛⲓⲙ ⲡⲉ...', english: 'Who is...?' },
            { coptic: 'ⲟⲩ ⲡⲉ...', english: 'What is...?' },
            { coptic: 'ⲑⲱⲛ...', english: 'Where...?' }
          ]
        },
        {
          id: 'ex-17-4-4',
          type: 'translation',
          question: 'Translate: ⲙⲏ ⲕⲛⲁⲓ̀',
          questionCoptic: 'ⲙⲏ ⲕⲛⲁⲓ̀',
          correctAnswer: 'Will you come? / Are you coming?',
          options: ['Will you come? / Are you coming?', 'You will come', 'When will you come?', 'Where are you coming?'],
          explanation: 'ⲙⲏ = question marker + ⲕⲛⲁⲓ̀ = you will come (Bohairic ⲓ̀ not ⲉⲓ!)'
        },
        {
          id: 'ex-17-4-5',
          type: 'sentence_building',
          question: 'Build: "Is this your book?"',
          correctAnswer: 'ⲙⲏ ⲡⲁⲓ ⲡⲉ ⲡⲉⲕϫⲱⲙ',
          wordBank: ['ⲙⲏ', 'ⲡⲁⲓ', 'ⲡⲉ', 'ⲡⲉⲕϫⲱⲙ'],
          explanation: 'ⲙⲏ ⲡⲁⲓ ⲡⲉ ⲡⲉⲕϫⲱⲙ = (question) this is your book?'
        },
        {
          id: 'ex-17-4-6',
          type: 'fill_blank',
          question: 'Complete: ___ ⲛⲁⲛⲉϥ ⲡⲉ = Is it good?',
          correctAnswer: 'ⲙⲏ',
          options: ['ⲙⲏ', 'ⲟⲩ', 'ⲛⲓⲙ', 'ⲡⲱⲥ'],
          explanation: 'ⲙⲏ ⲛⲁⲛⲉϥ ⲡⲉ = (question) good it-is?'
        },
        {
          id: 'ex-17-4-7',
          type: 'translation',
          question: 'Translate: ⲛⲓⲙ ⲉⲧⲁϥⲥ̀ϧⲁⲓ ⲙ̀ⲡⲁⲓ',
          questionCoptic: 'ⲛⲓⲙ ⲉⲧⲁϥⲥ̀ϧⲁⲓ ⲙ̀ⲡⲁⲓ',
          correctAnswer: 'Who wrote this?',
          options: ['Who wrote this?', 'What wrote this?', 'When was this written?', 'How was this written?'],
          explanation: 'ⲛⲓⲙ = who + ⲉⲧⲁϥⲥ̀ϧⲁⲓ ⲙ̀ⲡⲁⲓ = that-he-wrote this (Bohairic ⲥ̀ϧⲁⲓ not ⲥϩⲁⲓ!)'
        },
        {
          id: 'ex-17-4-8',
          type: 'multiple_choice',
          question: 'How many question words have we learned?',
          correctAnswer: '6 main ones (ⲛⲓⲙ, ⲟⲩ, ⲑⲱⲛ, ⲑ̀ⲛⲁⲩ, ⲉⲑⲃⲉⲟⲩ, ⲡⲱⲥ)',
          options: ['6 main ones (ⲛⲓⲙ, ⲟⲩ, ⲑⲱⲛ, ⲑ̀ⲛⲁⲩ, ⲉⲑⲃⲉⲟⲩ, ⲡⲱⲥ)', '4 main ones', '8 main ones', '10 main ones'],
          explanation: 'The 6 main question words: ⲛⲓⲙ (who), ⲟⲩ (what), ⲑⲱⲛ (where), ⲑ̀ⲛⲁⲩ (when), ⲉⲑⲃⲉⲟⲩ (why), ⲡⲱⲥ (how)'
        }
      ]
    }
  ]
};

export default unit17;
