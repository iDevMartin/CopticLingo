import { Lesson } from '../../types';

// TEST FILE FOR UNIT 17: QUESTION WORDS
// Comprehensive test exercises covering all 4 lessons
// 30 exercises total - testing all question word types and formation patterns

const unit17Test: Lesson = {
id: 'lesson-17-test',
      unitId: 'unit-17',
      title: 'Question Words Comprehensive Test',
      description: 'Test all question words and patterns',
      order: 1,
      xpReward: 100,
      isLocked: true,
      completed: false,
      exercises: [
        // Who & What tests
        {
          id: 'test-17-1',
          type: 'translation',
          question: 'Translate: ⲛⲓⲙ ⲡⲉ ⲡⲉⲕⲓⲱⲧ',
          questionCoptic: 'ⲛⲓⲙ ⲡⲉ ⲡⲉⲕⲓⲱⲧ',
          correctAnswer: 'Who is your father?',
          options: ['Who is your father?', 'What is your father?', 'Who is my father?', 'Where is your father?'],
          explanation: 'ⲛⲓⲙ = who + ⲡⲉ = is + ⲡⲉⲕⲓⲱⲧ = your father'
        },
        {
          id: 'test-17-2',
          type: 'multiple_choice',
          question: 'How do you ask "What happened?"',
          correctAnswer: 'ⲟⲩ ⲡⲉⲧⲁϥϣⲱⲡⲓ',
          options: ['ⲟⲩ ⲡⲉⲧⲁϥϣⲱⲡⲓ', 'ⲛⲓⲙ ⲡⲉⲧⲁϥϣⲱⲡⲓ', 'ⲑⲱⲛ ⲁϥϣⲱⲡⲓ', 'ⲡⲱⲥ ⲁϥϣⲱⲡⲓ'],
          explanation: 'ⲟⲩ ⲡⲉⲧⲁϥϣⲱⲡⲓ = what (is) that-which-happened?'
        },
        {
          id: 'test-17-3',
          type: 'fill_blank',
          question: 'Complete: ___ ⲡⲉⲧⲉⲕⲓⲣⲓ ⲙ̀ⲙⲟϥ = What are you doing?',
          correctAnswer: 'ⲟⲩ',
          options: ['ⲟⲩ', 'ⲛⲓⲙ', 'ⲑⲱⲛ', 'ⲡⲱⲥ'],
          explanation: 'ⲟⲩ ⲡⲉⲧⲉⲕⲓⲣⲓ ⲙ̀ⲙⲟϥ = what (is) that you do (of) it?'
        },
        {
          id: 'test-17-4',
          type: 'sentence_building',
          question: 'Build: "Who are you?"',
          correctAnswer: 'ⲛ̀ⲑⲟⲕ ⲛⲓⲙ',
          wordBank: ['ⲛ̀ⲑⲟⲕ', 'ⲛⲓⲙ', 'ⲟⲩ', 'ⲡⲉ'],
          explanation: 'ⲛ̀ⲑⲟⲕ ⲛⲓⲙ = you (are) who? (literally "you who?")'
        },
        {
          id: 'test-17-5',
          type: 'matching',
          question: 'Match basic question words',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲛⲓⲙ', english: 'who' },
            { coptic: 'ⲟⲩ', english: 'what' },
            { coptic: 'ⲁϣ', english: 'what/how many' },
            { coptic: 'ⲟⲩⲏⲣ', english: 'what/which' }
          ]
        },

        // Where & When tests
        {
          id: 'test-17-6',
          type: 'translation',
          question: 'Translate: ⲑⲱⲛ ⲁⲕϣⲉⲛⲓ',
          questionCoptic: 'ⲑⲱⲛ ⲁⲕϣⲉⲛⲓ',
          correctAnswer: 'Where did you go?',
          options: ['Where did you go?', 'When did you go?', 'Why did you go?', 'Where are you going?'],
          explanation: 'ⲑⲱⲛ = where + ⲁⲕϣⲉⲛⲓ = you went (Bohairic ϣⲉⲛⲓ not ⲃⲱⲕ!)'
        },
        {
          id: 'test-17-7',
          type: 'multiple_choice',
          question: 'What does ⲑ̀ⲛⲁⲩ mean?',
          correctAnswer: 'when',
          options: ['when', 'where', 'who', 'why'],
          explanation: 'ⲑ̀ⲛⲁⲩ (ethnau) = when - for asking about time'
        },
        {
          id: 'test-17-8',
          type: 'sentence_building',
          question: 'Build: "When will you come?"',
          correctAnswer: 'ⲑ̀ⲛⲁⲩ ⲕⲛⲁⲓ̀',
          wordBank: ['ⲑ̀ⲛⲁⲩ', 'ⲕⲛⲁⲓ̀', 'ⲑⲱⲛ', 'ⲁⲕⲓ̀'],
          explanation: 'ⲑ̀ⲛⲁⲩ = when + ⲕⲛⲁⲓ̀ = you will come (Bohairic ⲓ̀ not ⲉⲓ!)'
        },
        {
          id: 'test-17-9',
          type: 'fill_blank',
          question: 'Complete: ___ ⲡⲓⲏⲓ = Where is the house?',
          correctAnswer: 'ⲑⲱⲛ',
          options: ['ⲑⲱⲛ', 'ⲑ̀ⲛⲁⲩ', 'ⲛⲓⲙ', 'ⲟⲩ'],
          explanation: 'ⲑⲱⲛ ⲡⲓⲏⲓ = where (is) the house?'
        },
        {
          id: 'test-17-10',
          type: 'translation',
          question: 'Translate: ⲑ̀ⲛⲁⲩ ⲁϥⲓ̀',
          questionCoptic: 'ⲑ̀ⲛⲁⲩ ⲁϥⲓ̀',
          correctAnswer: 'When did he come?',
          options: ['When did he come?', 'Where did he come?', 'When will he come?', 'Why did he come?'],
          explanation: 'ⲑ̀ⲛⲁⲩ = when + ⲁϥⲓ̀ = he came (Bohairic ⲓ̀ not ⲉⲓ!)'
        },

        // Why & How tests
        {
          id: 'test-17-11',
          type: 'translation',
          question: 'Translate: ⲉⲑⲃⲉⲟⲩ ⲁⲕⲓ̀',
          questionCoptic: 'ⲉⲑⲃⲉⲟⲩ ⲁⲕⲓ̀',
          correctAnswer: 'Why did you come?',
          options: ['Why did you come?', 'How did you come?', 'When did you come?', 'Where did you come?'],
          explanation: 'ⲉⲑⲃⲉⲟⲩ = why + ⲁⲕⲓ̀ = you came (Bohairic ⲓ̀ not ⲉⲓ!)'
        },
        {
          id: 'test-17-12',
          type: 'multiple_choice',
          question: 'What does ⲡⲱⲥ mean?',
          correctAnswer: 'how',
          options: ['how', 'why', 'when', 'where'],
          explanation: 'ⲡⲱⲥ (pos, from Greek) = how, in what manner'
        },
        {
          id: 'test-17-13',
          type: 'sentence_building',
          question: 'Build: "How do you know?"',
          correctAnswer: 'ⲡⲱⲥ ⲕⲥⲱⲟⲩⲛ',
          wordBank: ['ⲡⲱⲥ', 'ⲕⲥⲱⲟⲩⲛ', 'ⲉⲑⲃⲉⲟⲩ', 'ⲁⲕⲉⲙⲓ'],
          explanation: 'ⲡⲱⲥ = how + ⲕⲥⲱⲟⲩⲛ = you know'
        },
        {
          id: 'test-17-14',
          type: 'fill_blank',
          question: 'Complete: ___ ⲕⲣⲓⲙⲓ = Why do you cry?',
          correctAnswer: 'ⲉⲑⲃⲉⲟⲩ',
          options: ['ⲉⲑⲃⲉⲟⲩ', 'ⲡⲱⲥ', 'ⲑⲱⲛ', 'ⲑ̀ⲛⲁⲩ'],
          explanation: 'ⲉⲑⲃⲉⲟⲩ = why + ⲕⲣⲓⲙⲓ = you cry/weep'
        },
        {
          id: 'test-17-15',
          type: 'translation',
          question: 'Translate: ⲡⲱⲥ ⲁⲕⲓⲣⲓ ⲙ̀ⲫⲁⲓ',
          questionCoptic: 'ⲡⲱⲥ ⲁⲕⲓⲣⲓ ⲙ̀ⲫⲁⲓ',
          correctAnswer: 'How did you do this?',
          options: ['How did you do this?', 'Why did you do this?', 'When did you do this?', 'Who did this?'],
          explanation: 'ⲡⲱⲥ = how + ⲁⲕⲓⲣⲓ ⲙ̀ⲫⲁⲓ = you did this'
        },

        // Question formation tests
        {
          id: 'test-17-16',
          type: 'matching',
          question: 'Match all question words',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲉⲑⲃⲉⲟⲩ', english: 'why/for what' },
            { coptic: 'ⲡⲱⲥ', english: 'how' },
            { coptic: 'ⲁϣ ⲛ̀ⲣⲏϯ', english: 'how/in what way' },
            { coptic: 'ⲁⲥϫⲉ', english: 'how much/many' }
          ]
        },
        {
          id: 'test-17-17',
          type: 'translation',
          question: 'Translate: ⲁϣⲡⲉ ⲡⲉⲕⲣⲁⲛ',
          questionCoptic: 'ⲁϣⲡⲉ ⲡⲉⲕⲣⲁⲛ',
          correctAnswer: 'What is your name?',
          options: ['What is your name?', 'Who is your name?', 'Where is your name?', 'How is your name?'],
          explanation: 'ⲁϣⲡⲉ = what (is) + ⲡⲉⲕⲣⲁⲛ = your name (alternative to ⲟⲩ ⲡⲉ)'
        },
        {
          id: 'test-17-18',
          type: 'multiple_choice',
          question: 'Which is a yes/no question marker?',
          correctAnswer: 'ⲙⲏ',
          options: ['ⲙⲏ', 'ⲟⲩ', 'ⲛⲓⲙ', 'ⲑⲱⲛ'],
          explanation: 'ⲙⲏ (mee) = question particle for yes/no questions, expecting "yes" answer'
        },
        {
          id: 'test-17-19',
          type: 'sentence_building',
          question: 'Build: "Is this your book?"',
          correctAnswer: 'ⲙⲏ ⲡⲁⲓ ⲡⲉ ⲡⲉⲕϫⲱⲙ',
          wordBank: ['ⲙⲏ', 'ⲡⲁⲓ', 'ⲡⲉ', 'ⲡⲉⲕϫⲱⲙ'],
          explanation: 'ⲙⲏ ⲡⲁⲓ ⲡⲉ ⲡⲉⲕϫⲱⲙ = (question) this is your book?'
        },
        {
          id: 'test-17-20',
          type: 'fill_blank',
          question: 'Complete: ___ ⲛⲁⲛⲉϥ ⲡⲉ = Is it good?',
          correctAnswer: 'ⲙⲏ',
          options: ['ⲙⲏ', 'ⲟⲩ', 'ⲛⲓⲙ', 'ⲡⲱⲥ'],
          explanation: 'ⲙⲏ ⲛⲁⲛⲉϥ ⲡⲉ = (question) good it-is?'
        },

        // Complex question tests
        {
          id: 'test-17-21',
          type: 'translation',
          question: 'Translate: ⲛⲓⲙ ⲉⲧⲁϥⲥ̀ϧⲁⲓ ⲙ̀ⲡⲁⲓ',
          questionCoptic: 'ⲛⲓⲙ ⲉⲧⲁϥⲥ̀ϧⲁⲓ ⲙ̀ⲡⲁⲓ',
          correctAnswer: 'Who wrote this?',
          options: ['Who wrote this?', 'What wrote this?', 'When was this written?', 'How was this written?'],
          explanation: 'ⲛⲓⲙ = who + ⲉⲧⲁϥⲥ̀ϧⲁⲓ ⲙ̀ⲡⲁⲓ = that-he-wrote this (Bohairic ⲥ̀ϧⲁⲓ not ⲥϩⲁⲓ!)'
        },
        {
          id: 'test-17-22',
          type: 'multiple_choice',
          question: 'How do you say "Why does God love us?"',
          correctAnswer: 'ⲉⲑⲃⲉⲟⲩ ⲫϯ ⲙⲉⲛⲣⲉ ⲙ̀ⲙⲟⲛ',
          options: ['ⲉⲑⲃⲉⲟⲩ ⲫϯ ⲙⲉⲛⲣⲉ ⲙ̀ⲙⲟⲛ', 'ⲡⲱⲥ ⲫϯ ⲙⲉⲛⲣⲉ ⲙ̀ⲙⲟⲛ', 'ⲑⲱⲛ ⲫϯ ⲙⲉⲛⲣⲉ ⲙ̀ⲙⲟⲛ', 'ⲑ̀ⲛⲁⲩ ⲫϯ ⲙⲉⲛⲣⲉ ⲙ̀ⲙⲟⲛ'],
          explanation: 'ⲉⲑⲃⲉⲟⲩ = why + ⲫϯ ⲙⲉⲛⲣⲉ ⲙ̀ⲙⲟⲛ = God loves us (Bohairic: ⲫϯ not ⲫⲛⲟⲩϯ, ⲙⲉⲛⲣⲉ not ⲙⲉⲣⲓ!)'
        },
        {
          id: 'test-17-23',
          type: 'translation',
          question: 'Translate: ⲙⲏ ⲕⲛⲁⲓ̀',
          questionCoptic: 'ⲙⲏ ⲕⲛⲁⲓ̀',
          correctAnswer: 'Will you come? / Are you coming?',
          options: ['Will you come? / Are you coming?', 'You will come', 'When will you come?', 'Where are you coming?'],
          explanation: 'ⲙⲏ = question marker + ⲕⲛⲁⲓ̀ = you will come (Bohairic ⲓ̀ not ⲉⲓ!)'
        },
        {
          id: 'test-17-24',
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
          id: 'test-17-25',
          type: 'translation',
          question: 'Translate: ⲑⲱⲛ ⲫϯ',
          questionCoptic: 'ⲑⲱⲛ ⲫϯ',
          correctAnswer: 'Where is God?',
          options: ['Where is God?', 'When is God?', 'Who is God?', 'What is God?'],
          explanation: 'ⲑⲱⲛ ⲫϯ = where (is) God? (Bohairic ⲫϯ not ⲫⲛⲟⲩϯ!)'
        },

        // Comprehensive tests
        {
          id: 'test-17-26',
          type: 'multiple_choice',
          question: 'How many main question words have we learned?',
          correctAnswer: '6 main ones (ⲛⲓⲙ, ⲟⲩ, ⲑⲱⲛ, ⲑ̀ⲛⲁⲩ, ⲉⲑⲃⲉⲟⲩ, ⲡⲱⲥ)',
          options: ['6 main ones (ⲛⲓⲙ, ⲟⲩ, ⲑⲱⲛ, ⲑ̀ⲛⲁⲩ, ⲉⲑⲃⲉⲟⲩ, ⲡⲱⲥ)', '4 main ones', '8 main ones', '10 main ones'],
          explanation: 'The 6 main question words: ⲛⲓⲙ (who), ⲟⲩ (what), ⲑⲱⲛ (where), ⲑ̀ⲛⲁⲩ (when), ⲉⲑⲃⲉⲟⲩ (why), ⲡⲱⲥ (how)'
        },
        {
          id: 'test-17-27',
          type: 'sentence_building',
          question: 'Build: "Where did God create man?"',
          correctAnswer: 'ⲑⲱⲛ ⲁϥⲥⲱⲛⲧ ⲙ̀ⲡⲓⲣⲱⲙⲓ ⲛ̀ϫⲉ ⲫϯ',
          wordBank: ['ⲑⲱⲛ', 'ⲁϥⲥⲱⲛⲧ', 'ⲙ̀ⲡⲓⲣⲱⲙⲓ', 'ⲛ̀ϫⲉ', 'ⲫϯ'],
          explanation: 'ⲑⲱⲛ = where + ⲁϥⲥⲱⲛⲧ ⲙ̀ⲡⲓⲣⲱⲙⲓ ⲛ̀ϫⲉ ⲫϯ = God created the man (Bohairic ⲫϯ not ⲫⲛⲟⲩϯ!)'
        },
        {
          id: 'test-17-28',
          type: 'fill_blank',
          question: 'Complete: ⲁⲥϫⲉ ___ = How much/How many?',
          correctAnswer: 'ⲡⲉ',
          options: ['ⲡⲉ', 'ⲛⲓⲙ', 'ⲟⲩ', 'ⲧⲉ'],
          explanation: 'ⲁⲥϫⲉ ⲡⲉ = how much is it? / how many?'
        },
        {
          id: 'test-17-29',
          type: 'translation',
          question: 'Translate: ⲁϣ ⲛ̀ⲣⲏϯ ⲕⲓⲣⲓ ⲙ̀ⲙⲟϥ',
          questionCoptic: 'ⲁϣ ⲛ̀ⲣⲏϯ ⲕⲓⲣⲓ ⲙ̀ⲙⲟϥ',
          correctAnswer: 'How do you do it? / In what way do you do it?',
          options: ['How do you do it? / In what way do you do it?', 'What do you do?', 'Why do you do it?', 'When do you do it?'],
          explanation: 'ⲁϣ ⲛ̀ⲣⲏϯ = how / in what manner + ⲕⲓⲣⲓ ⲙ̀ⲙⲟϥ = you do it'
        },
        {
          id: 'test-17-30',
          type: 'multiple_choice',
          question: 'Which question word is from Greek?',
          correctAnswer: 'ⲡⲱⲥ (how)',
          options: ['ⲡⲱⲥ (how)', 'ⲛⲓⲙ (who)', 'ⲑⲱⲛ (where)', 'ⲟⲩ (what)'],
          explanation: 'ⲡⲱⲥ (pos) is borrowed from Greek πῶς meaning "how"'
        }
      ]
};

export default unit17Test;
