import { Lesson } from '../../types';

// TEST FILE FOR UNIT 22: CONDITIONAL SENTENCES
// Comprehensive test exercises covering all 4 lessons
// 32 exercises total - testing all conditional types (real, alternative, negative, contrary-to-fact)

const unit22Test: Lesson = {
id: 'lesson-22-test',
      unitId: 'unit-22',
      title: 'Conditional Sentences Comprehensive Test',
      description: 'Test all conditional forms and usage',
      order: 1,
      xpReward: 100,
      isLocked: true,
      completed: false,
      exercises: [
        // Real conditions (ⲓϣϫⲉ) tests
        {
          id: 'test-22-1',
          type: 'translation',
          question: 'Translate: ⲓϣϫⲉ ⲕⲛⲁϩϯ ⲕⲛⲁⲛⲟϩⲉⲙ',
          questionCoptic: 'ⲓϣϫⲉ ⲕⲛⲁϩϯ ⲕⲛⲁⲛⲟϩⲉⲙ',
          correctAnswer: 'If you believe, you will be saved',
          options: ['If you believe, you will be saved', 'When you believe, you are saved', 'You believe and are saved', 'Believe to be saved'],
          explanation: 'ⲓϣϫⲉ (isje) = if (real condition) + ⲕⲛⲁϩϯ = you will believe + ⲕⲛⲁⲛⲟϩⲉⲙ = you will be saved'
        },
        {
          id: 'test-22-2',
          type: 'multiple_choice',
          question: 'What does ⲓϣϫⲉ introduce?',
          correctAnswer: 'Real/open conditions (if, assuming)',
          options: ['Real/open conditions (if, assuming)', 'Unreal conditions', 'Contrary-to-fact conditions', 'Time clauses only'],
          explanation: 'ⲓϣϫⲉ introduces real conditions - situations that are possible or likely'
        },
        {
          id: 'test-22-3',
          type: 'fill_blank',
          question: 'Complete: ___ ⲕⲥⲱⲧⲉⲙ ⲕⲛⲁⲉⲙⲓ = If you listen, you will know',
          correctAnswer: 'ⲓϣϫⲉ',
          options: ['ⲓϣϫⲉ', 'ⲉϣⲱⲡ', 'ⲉⲛⲉ', 'ϩⲟⲧⲉ'],
          explanation: 'ⲓϣϫⲉ ⲕⲥⲱⲧⲉⲙ ⲕⲛⲁⲉⲙⲓ = if you listen, you will know (real condition)'
        },
        {
          id: 'test-22-4',
          type: 'sentence_building',
          question: 'Build: "If God wills, we will go"',
          correctAnswer: 'ⲓϣϫⲉ ⲫϯ ⲟⲩⲱϣ ⲧⲉⲛⲛⲁϣⲉⲛⲓ',
          wordBank: ['ⲓϣϫⲉ', 'ⲫϯ', 'ⲟⲩⲱϣ', 'ⲧⲉⲛⲛⲁϣⲉⲛⲓ'],
          explanation: 'ⲓϣϫⲉ ⲫϯ ⲟⲩⲱϣ = if God wills + ⲧⲉⲛⲛⲁϣⲉⲛⲓ = we will go (Bohairic: ⲫϯ not ⲫⲛⲟⲩϯ, ϣⲉⲛⲓ not ⲃⲱⲕ!)'
        },
        {
          id: 'test-22-5',
          type: 'matching',
          question: 'Match conditional markers',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲓϣϫⲉ', english: 'if (protasis marker)' },
            { coptic: 'ⲉϣⲱⲡ', english: 'if/when (alternative)' },
            { coptic: 'ⲁⲓⲱⲡ', english: 'if not / unless' },
            { coptic: 'ⲕⲁⲛ', english: 'even if' }
          ]
        },
        {
          id: 'test-22-6',
          type: 'translation',
          question: 'Translate: ⲓϣϫⲉ ⲁⲕϣⲉⲛⲓ ⲉⲙⲁⲩ ⲉⲕⲉ̀ⲛⲁⲩ ⲉ̀ⲣⲟϥ',
          questionCoptic: 'ⲓϣϫⲉ ⲁⲕϣⲉⲛⲓ ⲉⲙⲁⲩ ⲉⲕⲉ̀ⲛⲁⲩ ⲉ̀ⲣⲟϥ',
          correctAnswer: 'If you went there, you will see him',
          options: ['If you went there, you will see him', 'When you go there, you see him', 'If you go there, you saw him', 'You went and saw him'],
          explanation: 'ⲓϣϫⲉ ⲁⲕϣⲉⲛⲓ ⲉⲙⲁⲩ = if you went there + ⲉⲕⲉ̀ⲛⲁⲩ ⲉ̀ⲣⲟϥ = you will see him (Bohairic ϣⲉⲛⲓ not ⲃⲱⲕ!)'
        },
        {
          id: 'test-22-7',
          type: 'translation',
          question: 'Translate: ⲓϣϫⲉ ⲙ̀ⲙⲟⲛⲧⲁⲕ ⲛⲁϩϯ ⲭⲛⲁⲙⲟⲩ',
          questionCoptic: 'ⲓϣϫⲉ ⲙ̀ⲙⲟⲛⲧⲁⲕ ⲛⲁϩϯ ⲭⲛⲁⲙⲟⲩ',
          correctAnswer: 'If you have no faith, you will die',
          options: ['If you have no faith, you will die', 'If you don\'t believe, you died', 'Unless you have faith, you die', 'You have no faith and will die'],
          explanation: 'ⲓϣϫⲉ ⲙ̀ⲙⲟⲛⲧⲁⲕ ⲛⲁϩϯ = if you have no faith + ⲭⲛⲁⲙⲟⲩ = you will die'
        },
        {
          id: 'test-22-8',
          type: 'multiple_choice',
          question: 'How do you say "If it rains, we stay home"?',
          correctAnswer: 'ⲓϣϫⲉ ⲁⲣⲉϣⲁⲛ ϯⲙⲟⲩⲛϩⲱⲟⲩ ⲧⲉⲛⲛⲁϣⲱⲡⲓ ϧⲉⲛ ⲡⲓⲏⲓ',
          options: ['ⲓϣϫⲉ ⲁⲣⲉϣⲁⲛ ϯⲙⲟⲩⲛϩⲱⲟⲩ ⲧⲉⲛⲛⲁϣⲱⲡⲓ ϧⲉⲛ ⲡⲓⲏⲓ', 'ⲉϣⲱⲡ ⲙⲟⲩⲛϩⲱⲟⲩ ⲧⲉⲛϣⲟⲡ ϧⲉⲛ ⲡⲓⲏⲓ', 'ϩⲟⲧⲉ ⲁⲣⲉϣⲁⲛ ϯⲙⲟⲩⲛϩⲱⲟⲩ', 'ⲁⲣⲉϣⲁⲛ ϯⲙⲟⲩⲛϩⲱⲟⲩ ⲧⲉⲛϣⲟⲡ'],
          explanation: 'ⲓϣϫⲉ ⲁⲣⲉϣⲁⲛ ϯⲙⲟⲩⲛϩⲱⲟⲩ = if it rains + ⲧⲉⲛⲛⲁϣⲱⲡⲓ ϧⲉⲛ ⲡⲓⲏⲓ = we will stay in the house'
        },

        // Alternative conditions (ⲉϣⲱⲡ) tests
        {
          id: 'test-22-9',
          type: 'translation',
          question: 'Translate: ⲉϣⲱⲡ ⲁⲕⲛⲁϩϯ ⲕⲛⲁⲱⲛϧ',
          questionCoptic: 'ⲉϣⲱⲡ ⲁⲕⲛⲁϩϯ ⲕⲛⲁⲱⲛϧ',
          correctAnswer: 'If you believed, you will live',
          options: ['If you believed, you will live', 'When you believe, you live', 'If you believe, you lived', 'You believed and will live'],
          explanation: 'ⲉϣⲱⲡ (eshop) = if/when (alternative condition marker) + ⲁⲕⲛⲁϩϯ = you believed + ⲕⲛⲁⲱⲛϧ = you will live'
        },
        {
          id: 'test-22-10',
          type: 'multiple_choice',
          question: 'What is the difference between ⲓϣϫⲉ and ⲉϣⲱⲡ?',
          correctAnswer: 'Both mean "if", ⲉϣⲱⲡ is more literary/formal',
          options: ['Both mean "if", ⲉϣⲱⲡ is more literary/formal', 'ⲓϣϫⲉ is unreal, ⲉϣⲱⲡ is real', 'ⲉϣⲱⲡ means "when" only', 'They cannot be interchanged'],
          explanation: 'ⲓϣϫⲉ and ⲉϣⲱⲡ both introduce real conditions, with ⲉϣⲱⲡ being more literary'
        },
        {
          id: 'test-22-11',
          type: 'translation',
          question: 'Translate: ⲉϣⲱⲡ ⲁⲣⲉⲧⲉⲛϣⲉⲛⲓ ⲧⲉⲧⲉⲛⲛⲁⲛⲁⲩ',
          questionCoptic: 'ⲉϣⲱⲡ ⲁⲣⲉⲧⲉⲛϣⲉⲛⲓ ⲧⲉⲧⲉⲛⲛⲁⲛⲁⲩ',
          correctAnswer: 'If you (pl.) went, you will see',
          options: ['If you (pl.) went, you will see', 'When you go, you see', 'If you go, you saw', 'You went and saw'],
          explanation: 'ⲉϣⲱⲡ ⲁⲣⲉⲧⲉⲛϣⲉⲛⲓ = if you (pl.) went + ⲧⲉⲧⲉⲛⲛⲁⲛⲁⲩ = you will see (Bohairic ϣⲉⲛⲓ not ⲃⲱⲕ!)'
        },
        {
          id: 'test-22-12',
          type: 'sentence_building',
          question: 'Build: "If he comes, we will rejoice"',
          correctAnswer: 'ⲉϣⲱⲡ ⲁϥⲓ̀ ⲧⲉⲛⲛⲁⲑⲉⲗⲏⲗ',
          wordBank: ['ⲉϣⲱⲡ', 'ⲁϥⲓ̀', 'ⲧⲉⲛⲛⲁⲑⲉⲗⲏⲗ', 'ϥⲓ̀'],
          explanation: 'ⲉϣⲱⲡ ⲁϥⲓ̀ = if he came/comes + ⲧⲉⲛⲛⲁⲑⲉⲗⲏⲗ = we will rejoice (Bohairic ⲓ̀ not ⲉⲓ!)'
        },
        {
          id: 'test-22-13',
          type: 'matching',
          question: 'Match condition tense patterns',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲓϣϫⲉ ⲕⲛⲁ...', english: 'if you will... (future condition)' },
            { coptic: 'ⲉϣⲱⲡ ⲁⲕ...', english: 'if you did... (past condition)' },
            { coptic: 'ⲓϣϫⲉ ⲕ...', english: 'if you (present condition)' },
            { coptic: 'ⲉϣⲱⲡ ⲙ̀ⲡⲉⲕ...', english: 'if you did not... (negative)' }
          ]
        },
        {
          id: 'test-22-14',
          type: 'fill_blank',
          question: 'Complete: ___ ⲙ̀ⲡⲉⲛⲥⲱⲧⲉⲙ ⲧⲉⲛⲛⲁⲧⲁⲕⲟ = If we did not listen, we will perish',
          correctAnswer: 'ⲉϣⲱⲡ',
          options: ['ⲉϣⲱⲡ', 'ⲓϣϫⲉ', 'ⲉⲛⲉ', 'ϩⲟⲧⲉ'],
          explanation: 'ⲉϣⲱⲡ ⲙ̀ⲡⲉⲛⲥⲱⲧⲉⲙ = if we did not listen + ⲧⲉⲛⲛⲁⲧⲁⲕⲟ = we will perish'
        },
        {
          id: 'test-22-15',
          type: 'translation',
          question: 'Translate: ⲉϣⲱⲡ ⲁⲓⲥⲱⲟⲩⲛ ⲛⲁⲓⲛⲁϫⲟⲥ ⲛⲁⲕ',
          questionCoptic: 'ⲉϣⲱⲡ ⲁⲓⲥⲱⲟⲩⲛ ⲛⲁⲓⲛⲁϫⲟⲥ ⲛⲁⲕ',
          correctAnswer: 'If I knew, I would tell you',
          options: ['If I knew, I would tell you', 'If I know, I will tell you', 'When I knew, I told you', 'I knew and told you'],
          explanation: 'ⲉϣⲱⲡ ⲁⲓⲥⲱⲟⲩⲛ = if I knew + ⲛⲁⲓⲛⲁϫⲟⲥ ⲛⲁⲕ = I would tell you (conditional with past protasis)'
        },
        {
          id: 'test-22-16',
          type: 'multiple_choice',
          question: 'How do you say "If they pray, God hears"?',
          correctAnswer: 'ⲉϣⲱⲡ ⲁⲩⲧⲱⲃϩ ⲫϯ ⲛⲁⲥⲱⲧⲉⲙ',
          options: ['ⲉϣⲱⲡ ⲁⲩⲧⲱⲃϩ ⲫϯ ⲛⲁⲥⲱⲧⲉⲙ', 'ⲓϣϫⲉ ⲥⲉⲧⲱⲃϩ ⲫϯ ⲥⲱⲧⲉⲙ', 'ϩⲟⲧⲉ ⲁⲩⲧⲱⲃϩ ⲫϯ ⲥⲱⲧⲉⲙ', 'ⲁⲩⲧⲱⲃϩ ⲟⲩⲟϩ ⲫϯ ⲥⲱⲧⲉⲙ'],
          explanation: 'ⲉϣⲱⲡ ⲁⲩⲧⲱⲃϩ = if they prayed + ⲫϯ ⲛⲁⲥⲱⲧⲉⲙ = God will hear (Bohairic ⲫϯ not ⲫⲛⲟⲩϯ!)'
        },

        // Negative conditions (ⲁⲓⲱⲡ, unless) tests
        {
          id: 'test-22-17',
          type: 'translation',
          question: 'Translate: ⲁⲓⲱⲡ ⲁⲕⲛⲁϩϯ ⲭⲛⲁⲙⲟⲩ',
          questionCoptic: 'ⲁⲓⲱⲡ ⲁⲕⲛⲁϩϯ ⲭⲛⲁⲙⲟⲩ',
          correctAnswer: 'Unless you believe, you will die',
          options: ['Unless you believe, you will die', 'If you believe, you will die', 'If you don\'t believe, you died', 'You believe or you die'],
          explanation: 'ⲁⲓⲱⲡ (aiop) = unless, if not + ⲁⲕⲛⲁϩϯ = you believe + ⲭⲛⲁⲙⲟⲩ = you will die'
        },
        {
          id: 'test-22-18',
          type: 'multiple_choice',
          question: 'What does ⲁⲓⲱⲡ mean?',
          correctAnswer: 'Unless / if not',
          options: ['Unless / if not', 'If only', 'Even if', 'As if'],
          explanation: 'ⲁⲓⲱⲡ (aiop) = unless, if not (negative condition marker)'
        },
        {
          id: 'test-22-19',
          type: 'matching',
          question: 'Match negative conditionals',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲁⲓⲱⲡ', english: 'unless / if not' },
            { coptic: 'ⲓϣϫⲉ ⲙ̀ⲡⲉ-', english: 'if ... did not' },
            { coptic: 'ⲉϣⲱⲡ ⲛ̀...ⲁⲛ', english: 'if ... does not' },
            { coptic: 'ⲓϣϫⲉ ⲙ̀ⲙⲟⲛ', english: 'if there is not' }
          ]
        },
        {
          id: 'test-22-20',
          type: 'translation',
          question: 'Translate: ⲓϣϫⲉ ⲙ̀ⲙⲟⲛⲧⲉⲛ ⲁⲅⲁⲡⲏ ⲧⲉⲛⲙⲟⲕϩ',
          questionCoptic: 'ⲓϣϫⲉ ⲙ̀ⲙⲟⲛⲧⲉⲛ ⲁⲅⲁⲡⲏ ⲧⲉⲛⲙⲟⲕϩ',
          correctAnswer: 'If we have no love, we suffer',
          options: ['If we have no love, we suffer', 'If we have love, we suffer', 'Unless we have love, we suffered', 'We have no love and suffer'],
          explanation: 'ⲓϣϫⲉ ⲙ̀ⲙⲟⲛⲧⲉⲛ ⲁⲅⲁⲡⲏ = if we have no love + ⲧⲉⲛⲙⲟⲕϩ = we suffer (negative possessive condition)'
        },
        {
          id: 'test-22-21',
          type: 'sentence_building',
          question: 'Build: "Unless you repent, you will perish"',
          correctAnswer: 'ⲁⲓⲱⲡ ⲁⲕⲉⲣⲙⲉⲧⲁⲛⲟⲓⲛ ⲭⲛⲁⲧⲁⲕⲟ',
          wordBank: ['ⲁⲓⲱⲡ', 'ⲁⲕⲉⲣⲙⲉⲧⲁⲛⲟⲓⲛ', 'ⲭⲛⲁⲧⲁⲕⲟ', 'ⲓϣϫⲉ'],
          explanation: 'ⲁⲓⲱⲡ ⲁⲕⲉⲣⲙⲉⲧⲁⲛⲟⲓⲛ = unless you repent + ⲭⲛⲁⲧⲁⲕⲟ = you will perish'
        },
        {
          id: 'test-22-22',
          type: 'fill_blank',
          question: 'Complete: ⲓϣϫⲉ ___ ⲁϥⲓ̀ ⲁⲛ = If he did not come',
          correctAnswer: 'ⲙ̀ⲡⲉϥⲓ̀',
          options: ['ⲙ̀ⲡⲉϥⲓ̀', 'ⲛ̀ϥⲓ̀', 'ⲁϥⲓ̀', 'ϥⲓ̀'],
          explanation: 'ⲓϣϫⲉ ⲙ̀ⲡⲉϥⲓ̀ (ⲁⲛ) = if he did not come (Bohairic ⲓ̀ not ⲉⲓ!)'
        },
        {
          id: 'test-22-23',
          type: 'translation',
          question: 'Translate: ⲁⲓⲱⲡ ⲁϥⲧⲱⲃϩ ⲙ̀ⲙⲟⲛ ϩⲉⲗⲡⲓⲥ',
          questionCoptic: 'ⲁⲓⲱⲡ ⲁϥⲧⲱⲃϩ ⲙ̀ⲙⲟⲛ ϩⲉⲗⲡⲓⲥ',
          correctAnswer: 'Unless he prays, there is no hope',
          options: ['Unless he prays, there is no hope', 'If he prays, there is no hope', 'Unless he prayed, there was hope', 'He prays but there is no hope'],
          explanation: 'ⲁⲓⲱⲡ ⲁϥⲧⲱⲃϩ = unless he prays + ⲙ̀ⲙⲟⲛ ϩⲉⲗⲡⲓⲥ = there is no hope'
        },
        {
          id: 'test-22-24',
          type: 'multiple_choice',
          question: 'How do you say "If it does not rain, we go"?',
          correctAnswer: 'ⲓϣϫⲉ ⲛ̀ⲥⲉϩⲱⲟⲩ ⲁⲛ ⲧⲉⲛⲛⲁϣⲉⲛⲓ',
          options: ['ⲓϣϫⲉ ⲛ̀ⲥⲉϩⲱⲟⲩ ⲁⲛ ⲧⲉⲛⲛⲁϣⲉⲛⲓ', 'ⲁⲓⲱⲡ ϩⲱⲟⲩ ⲧⲉⲛϣⲉⲛⲓ', 'ⲉϣⲱⲡ ⲙ̀ⲙⲟⲛ ϩⲱⲟⲩ ⲧⲉⲛϣⲉⲛⲓ', 'ⲙ̀ⲙⲟⲛ ϩⲱⲟⲩ ⲧⲉⲛϣⲉⲛⲓ'],
          explanation: 'ⲓϣϫⲉ ⲛ̀ⲥⲉϩⲱⲟⲩ ⲁⲛ = if it does not rain + ⲧⲉⲛⲛⲁϣⲉⲛⲓ = we will go (Bohairic ϣⲉⲛⲓ not ⲃⲱⲕ!)'
        },

        // Contrary-to-fact conditions (ⲉⲛⲉ) tests
        {
          id: 'test-22-25',
          type: 'translation',
          question: 'Translate: ⲉⲛⲉ ⲁⲕⲛⲁϩϯ ⲛⲁⲕⲛⲁⲱⲛϧ',
          questionCoptic: 'ⲉⲛⲉ ⲁⲕⲛⲁϩϯ ⲛⲁⲕⲛⲁⲱⲛϧ',
          correctAnswer: 'If you had believed, you would have lived',
          options: ['If you had believed, you would have lived', 'If you believe, you will live', 'When you believed, you lived', 'You believed and lived'],
          explanation: 'ⲉⲛⲉ (ene) = if (contrary-to-fact past) + ⲁⲕⲛⲁϩϯ = you had believed + ⲛⲁⲕⲛⲁⲱⲛϧ = you would have lived'
        },
        {
          id: 'test-22-26',
          type: 'multiple_choice',
          question: 'What does ⲉⲛⲉ introduce?',
          correctAnswer: 'Contrary-to-fact/unreal past conditions',
          options: ['Contrary-to-fact/unreal past conditions', 'Real conditions', 'Future conditions', 'Present conditions'],
          explanation: 'ⲉⲛⲉ marks contrary-to-fact conditions - things that did NOT happen but we imagine if they had'
        },
        {
          id: 'test-22-27',
          type: 'matching',
          question: 'Match condition types',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲓϣϫⲉ ⲁⲕ...', english: 'if you did... (real)' },
            { coptic: 'ⲉⲛⲉ ⲁⲕ...', english: 'if you had... (unreal)' },
            { coptic: 'ⲁⲓⲱⲡ ⲁⲕ...', english: 'unless you... (real negative)' },
            { coptic: 'ⲕⲁⲛ ⲁⲕ...', english: 'even if you... (concessive)' }
          ]
        },
        {
          id: 'test-22-28',
          type: 'translation',
          question: 'Translate: ⲉⲛⲉ ⲁϥⲓ̀ ⲛⲁⲓⲛⲁⲛⲁⲩ ⲉ̀ⲣⲟϥ',
          questionCoptic: 'ⲉⲛⲉ ⲁϥⲓ̀ ⲛⲁⲓⲛⲁⲛⲁⲩ ⲉ̀ⲣⲟϥ',
          correctAnswer: 'If he had come, I would have seen him',
          options: ['If he had come, I would have seen him', 'If he comes, I will see him', 'When he came, I saw him', 'He came and I saw him'],
          explanation: 'ⲉⲛⲉ ⲁϥⲓ̀ = if he had come + ⲛⲁⲓⲛⲁⲛⲁⲩ ⲉ̀ⲣⲟϥ = I would have seen him (Bohairic ⲓ̀ not ⲉⲓ!)'
        },
        {
          id: 'test-22-29',
          type: 'sentence_building',
          question: 'Build: "If we had known, we would have gone"',
          correctAnswer: 'ⲉⲛⲉ ⲁⲛⲥⲱⲟⲩⲛ ⲛⲁⲛⲛⲁϣⲉⲛⲓ',
          wordBank: ['ⲉⲛⲉ', 'ⲁⲛⲥⲱⲟⲩⲛ', 'ⲛⲁⲛⲛⲁϣⲉⲛⲓ', 'ⲓϣϫⲉ'],
          explanation: 'ⲉⲛⲉ ⲁⲛⲥⲱⲟⲩⲛ = if we had known + ⲛⲁⲛⲛⲁϣⲉⲛⲓ = we would have gone (Bohairic ϣⲉⲛⲓ not ⲃⲱⲕ!)'
        },
        {
          id: 'test-22-30',
          type: 'fill_blank',
          question: 'Complete: ___ ⲁⲕⲥⲱⲧⲉⲙ ⲛⲁⲕⲛⲁⲉⲙⲓ = If you had listened, you would have known',
          correctAnswer: 'ⲉⲛⲉ',
          options: ['ⲉⲛⲉ', 'ⲓϣϫⲉ', 'ⲉϣⲱⲡ', 'ⲁⲓⲱⲡ'],
          explanation: 'ⲉⲛⲉ ⲁⲕⲥⲱⲧⲉⲙ = if you had listened + ⲛⲁⲕⲛⲁⲉⲙⲓ = you would have known (contrary-to-fact)'
        },
        {
          id: 'test-22-31',
          type: 'translation',
          question: 'Translate: ⲉⲛⲉ ⲙ̀ⲡⲉϥⲙⲟⲩ ⲛⲁⲛⲛⲁⲱⲛϧ',
          questionCoptic: 'ⲉⲛⲉ ⲙ̀ⲡⲉϥⲙⲟⲩ ⲛⲁⲛⲛⲁⲱⲛϧ',
          correctAnswer: 'If he had not died, we would have lived',
          options: ['If he had not died, we would have lived', 'If he does not die, we will live', 'When he did not die, we lived', 'He did not die and we lived'],
          explanation: 'ⲉⲛⲉ ⲙ̀ⲡⲉϥⲙⲟⲩ = if he had not died + ⲛⲁⲛⲛⲁⲱⲛϧ = we would have lived (negative contrary-to-fact)'
        },
        {
          id: 'test-22-32',
          type: 'multiple_choice',
          question: 'How do you say "If God had willed, it would have happened"?',
          correctAnswer: 'ⲉⲛⲉ ⲁϥⲟⲩⲱϣ ⲛ̀ϫⲉ ⲫϯ ⲛⲁϥⲛⲁϣⲱⲡⲓ',
          options: ['ⲉⲛⲉ ⲁϥⲟⲩⲱϣ ⲛ̀ϫⲉ ⲫϯ ⲛⲁϥⲛⲁϣⲱⲡⲓ', 'ⲓϣϫⲉ ⲫϯ ⲟⲩⲱϣ ϥⲛⲁϣⲱⲡⲓ', 'ⲉϣⲱⲡ ⲁϥⲟⲩⲱϣ ⲛ̀ϫⲉ ⲫϯ ⲁϥϣⲱⲡⲓ', 'ⲁⲓⲱⲡ ⲫϯ ⲟⲩⲱϣ ⲛⲁϥϣⲱⲡⲓ'],
          explanation: 'ⲉⲛⲉ ⲁϥⲟⲩⲱϣ ⲛ̀ϫⲉ ⲫϯ = if God had willed + ⲛⲁϥⲛⲁϣⲱⲡⲓ = it would have happened (Bohairic ⲫϯ not ⲫⲛⲟⲩϯ!)'
        }
      ]
};

export default unit22Test;
