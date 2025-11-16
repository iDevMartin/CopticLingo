import { Unit } from '../../types';

// TEST FILE FOR UNIT 16: DEMONSTRATIVES
// Comprehensive test exercises covering all 4 lessons
// 27 exercises total - testing all demonstrative forms and usage patterns

const unit16Test: Unit = {
  id: 'unit-16-test',
  title: 'Unit 16 Test: Demonstratives',
  description: 'Comprehensive test of demonstrative pronouns and patterns',
  order: 16.5,
  color: '#FF6B6B',
  lessons: [
    {
      id: 'lesson-16-test',
      unitId: 'unit-16-test',
      title: 'Demonstratives Comprehensive Test',
      description: 'Test all demonstrative forms and usage',
      order: 1,
      xpReward: 100,
      isLocked: true,
      completed: false,
      exercises: [
        // Near singular masculine tests
        {
          id: 'test-16-1',
          type: 'translation',
          question: 'Translate: ⲫⲁⲓ ⲡⲉ ⲡⲓⲣⲱⲙⲓ',
          questionCoptic: 'ⲫⲁⲓ ⲡⲉ ⲡⲓⲣⲱⲙⲓ',
          correctAnswer: 'This is the man',
          options: ['This is the man', 'That is the man', 'This man', 'The man is this'],
          explanation: 'ⲫⲁⲓ = this (near, m.) + ⲡⲉ (copula) + ⲡⲓⲣⲱⲙⲓ = the man'
        },
        {
          id: 'test-16-2',
          type: 'multiple_choice',
          question: 'Choose the correct demonstrative for "that book" (masculine, far)',
          correctAnswer: 'ⲫⲏ ⲡⲓϫⲱⲙ',
          options: ['ⲫⲏ ⲡⲓϫⲱⲙ', 'ⲫⲁⲓ ⲡⲓϫⲱⲙ', 'ⲑⲏ ⲧⲓϫⲱⲙ', 'ⲑⲁⲓ ⲧⲓϫⲱⲙ'],
          explanation: 'ⲫⲏ = that (far, m.) is correct for "that book" (ⲡⲓϫⲱⲙ is masculine)'
        },
        {
          id: 'test-16-3',
          type: 'fill_blank',
          question: 'Complete: ___ ⲧⲉ ⲧⲉⲕⲕⲗⲏⲥⲓⲁ = This is the church',
          correctAnswer: 'ⲑⲁⲓ',
          options: ['ⲑⲁⲓ', 'ⲫⲁⲓ', 'ⲛⲁⲓ', 'ⲑⲏ'],
          explanation: 'ⲑⲁⲓ = this (near, f.) for ⲧⲉⲕⲕⲗⲏⲥⲓⲁ (feminine noun)'
        },

        // Near feminine tests
        {
          id: 'test-16-4',
          type: 'translation',
          question: 'Translate: ⲑⲏ ⲧⲉ ⲧⲁⲙⲁⲁⲩ',
          questionCoptic: 'ⲑⲏ ⲧⲉ ⲧⲁⲙⲁⲁⲩ',
          correctAnswer: 'That is my mother',
          options: ['That is my mother', 'This is my mother', 'My mother is that', 'That mother is mine'],
          explanation: 'ⲑⲏ = that (far, f.) + ⲧⲉ (copula f.) + ⲧⲁⲙⲁⲁⲩ = my mother'
        },
        {
          id: 'test-16-5',
          type: 'sentence_building',
          question: 'Build: "This woman is a teacher"',
          correctAnswer: 'ⲑⲁⲓ ⲧⲉϩⲓⲙⲓ ⲟⲩⲣⲉϥⲧ̀ⲥⲁⲃⲟ ⲧⲉ',
          wordBank: ['ⲑⲁⲓ', 'ⲧⲉϩⲓⲙⲓ', 'ⲟⲩⲣⲉϥⲧ̀ⲥⲁⲃⲟ', 'ⲧⲉ'],
          explanation: 'ⲑⲁⲓ ⲧⲉϩⲓⲙⲓ = this woman + ⲟⲩⲣⲉϥⲧ̀ⲥⲁⲃⲟ ⲧⲉ = is a teacher (f.)'
        },

        // Plural demonstratives
        {
          id: 'test-16-6',
          type: 'translation',
          question: 'Translate: ⲛⲁⲓ ⲛⲉ ⲛⲁⲙⲁⲑⲏⲧⲏⲥ',
          questionCoptic: 'ⲛⲁⲓ ⲛⲉ ⲛⲁⲙⲁⲑⲏⲧⲏⲥ',
          correctAnswer: 'These are my disciples',
          options: ['These are my disciples', 'Those are my disciples', 'My disciples are these', 'These disciples are mine'],
          explanation: 'ⲛⲁⲓ = these (near, pl.) + ⲛⲉ (copula pl.) + ⲛⲁⲙⲁⲑⲏⲧⲏⲥ = my disciples'
        },
        {
          id: 'test-16-7',
          type: 'multiple_choice',
          question: 'What is "those children" (plural, far)?',
          correctAnswer: 'ⲛⲏ ⲛⲓϣⲏⲣⲓ',
          options: ['ⲛⲏ ⲛⲓϣⲏⲣⲓ', 'ⲛⲁⲓ ⲛⲓϣⲏⲣⲓ', 'ⲫⲏ ⲡⲓϣⲏⲣⲓ', 'ⲛⲁⲓ ⲡⲓϣⲏⲣⲓ'],
          explanation: 'ⲛⲏ = those (far, pl.) for plural noun ⲛⲓϣⲏⲣⲓ (the children)'
        },
        {
          id: 'test-16-8',
          type: 'matching',
          question: 'Match demonstratives to their meanings',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲫⲁⲓ', english: 'this (m., near)' },
            { coptic: 'ⲑⲁⲓ', english: 'this (f., near)' },
            { coptic: 'ⲫⲏ', english: 'that (m., far)' },
            { coptic: 'ⲑⲏ', english: 'that (f., far)' }
          ]
        },

        // Attributive position tests
        {
          id: 'test-16-9',
          type: 'translation',
          question: 'Translate: ⲡⲓⲣⲱⲙⲓ ⲫⲁⲓ',
          questionCoptic: 'ⲡⲓⲣⲱⲙⲓ ⲫⲁⲓ',
          correctAnswer: 'this man',
          options: ['this man', 'the man is this', 'this is the man', 'that man'],
          explanation: 'ⲡⲓⲣⲱⲙⲓ ⲫⲁⲓ = the man + this (attributive position, modifying the noun)'
        },
        {
          id: 'test-16-10',
          type: 'sentence_building',
          question: 'Build: "Give me that book"',
          correctAnswer: 'ⲙⲟⲓ ⲛⲏⲓ ⲙⲡⲓϫⲱⲙ ⲫⲏ',
          wordBank: ['ⲙⲟⲓ', 'ⲛⲏⲓ', 'ⲙⲡⲓϫⲱⲙ', 'ⲫⲏ'],
          explanation: 'ⲙⲟⲓ ⲛⲏⲓ = give me + ⲙⲡⲓϫⲱⲙ ⲫⲏ = that book (attributive)'
        },

        // Predicative vs. attributive
        {
          id: 'test-16-11',
          type: 'multiple_choice',
          question: 'In "ⲫⲁⲓ ⲡⲉ ⲡⲓⲣⲱⲙⲓ", ⲫⲁⲓ is:',
          correctAnswer: 'predicative (subject of sentence)',
          options: ['predicative (subject of sentence)', 'attributive (modifying noun)', 'both', 'neither'],
          explanation: 'ⲫⲁⲓ ⲡⲉ = "This is" - predicative position with copula ⲡⲉ'
        },
        {
          id: 'test-16-12',
          type: 'fill_blank',
          question: 'Complete attributive: ⲧⲉϩⲓⲙⲓ ___ = that woman',
          correctAnswer: 'ⲑⲏ',
          options: ['ⲑⲏ', 'ⲑⲁⲓ', 'ⲫⲏ', 'ⲛⲏ'],
          explanation: 'ⲧⲉϩⲓⲙⲓ ⲑⲏ = that woman (attributive: noun + demonstrative)'
        },

        // Complex sentences
        {
          id: 'test-16-13',
          type: 'translation',
          question: 'Translate: ⲛⲓⲣⲱⲙⲓ ⲛⲁⲓ ⲟⲩⲟⲛⲧⲟⲩ ⲡⲓⲛⲁϩϯ',
          questionCoptic: 'ⲛⲓⲣⲱⲙⲓ ⲛⲁⲓ ⲟⲩⲟⲛⲧⲟⲩ ⲡⲓⲛⲁϩϯ',
          correctAnswer: 'These men have faith',
          options: ['These men have faith', 'Those men have faith', 'The men have this faith', 'Men have this'],
          explanation: 'ⲛⲓⲣⲱⲙⲓ ⲛⲁⲓ = these men + ⲟⲩⲟⲛⲧⲟⲩ = they have + ⲡⲓⲛⲁϩϯ = the faith'
        },
        {
          id: 'test-16-14',
          type: 'sentence_building',
          question: 'Build: "I saw that woman yesterday"',
          correctAnswer: 'ⲁⲓⲛⲁⲩ ⲉⲧⲉϩⲓⲙⲓ ⲑⲏ ⲥⲁϥ',
          wordBank: ['ⲁⲓⲛⲁⲩ', 'ⲉⲧⲉϩⲓⲙⲓ', 'ⲑⲏ', 'ⲥⲁϥ'],
          explanation: 'ⲁⲓⲛⲁⲩ = I saw + ⲉⲧⲉϩⲓⲙⲓ ⲑⲏ = that woman + ⲥⲁϥ = yesterday'
        },

        // Plural forms comprehensive
        {
          id: 'test-16-15',
          type: 'matching',
          question: 'Match plural demonstrative phrases',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲛⲁⲓ ⲛⲓϫⲱⲙ', english: 'these books' },
            { coptic: 'ⲛⲏ ⲛⲓⲉⲕⲕⲗⲏⲥⲓⲁ', english: 'those churches' },
            { coptic: 'ⲛⲁⲓ ⲛⲉ', english: 'these are' },
            { coptic: 'ⲛⲏ ⲛⲉ', english: 'those are' }
          ]
        },

        // Demonstratives with prepositions
        {
          id: 'test-16-16',
          type: 'translation',
          question: 'Translate: ϧⲉⲛ ⲡⲓⲏⲓ ⲫⲁⲓ',
          questionCoptic: 'ϧⲉⲛ ⲡⲓⲏⲓ ⲫⲁⲓ',
          correctAnswer: 'in this house',
          options: ['in this house', 'this is in the house', 'in that house', 'this house is in'],
          explanation: 'ϧⲉⲛ = in + ⲡⲓⲏⲓ ⲫⲁⲓ = this house'
        },
        {
          id: 'test-16-17',
          type: 'fill_blank',
          question: 'Complete: ⲉⲃⲟⲗϩⲓⲧⲉⲛ ⲧⲉϩⲓⲙⲓ ___ = through that woman',
          correctAnswer: 'ⲑⲏ',
          options: ['ⲑⲏ', 'ⲑⲁⲓ', 'ⲫⲏ', 'ⲛⲏ'],
          explanation: 'ⲉⲃⲟⲗϩⲓⲧⲉⲛ = through + ⲧⲉϩⲓⲙⲓ ⲑⲏ = that woman'
        },

        // Near/far distinction tests
        {
          id: 'test-16-18',
          type: 'multiple_choice',
          question: 'Which form shows something nearby?',
          correctAnswer: 'ⲫⲁⲓ/ⲑⲁⲓ/ⲛⲁⲓ',
          options: ['ⲫⲁⲓ/ⲑⲁⲓ/ⲛⲁⲓ', 'ⲫⲏ/ⲑⲏ/ⲛⲏ', 'both equally', 'neither'],
          explanation: 'Forms with -ⲁⲓ ending (ⲫⲁⲓ, ⲑⲁⲓ, ⲛⲁⲓ) indicate proximity (this/these)'
        },
        {
          id: 'test-16-19',
          type: 'translation',
          question: 'Translate: ⲛⲏ ⲛⲓⲣⲱⲙⲓ ϩⲉⲙⲥⲓ ϧⲉⲛ ⲡⲓⲏⲓ',
          questionCoptic: 'ⲛⲏ ⲛⲓⲣⲱⲙⲓ ϩⲉⲙⲥⲓ ϧⲉⲛ ⲡⲓⲏⲓ',
          correctAnswer: 'Those men sit in the house',
          options: ['Those men sit in the house', 'These men sit in the house', 'The men sit in that house', 'Those sit in the house'],
          explanation: 'ⲛⲏ ⲛⲓⲣⲱⲙⲓ = those men + ϩⲉⲙⲥⲓ = sit + ϧⲉⲛ ⲡⲓⲏⲓ = in the house'
        },

        // Agreement tests
        {
          id: 'test-16-20',
          type: 'sentence_building',
          question: 'Build: "These churches are beautiful"',
          correctAnswer: 'ⲛⲁⲓ ⲛⲓⲉⲕⲕⲗⲏⲥⲓⲁ ⲥⲉⲥⲁⲓ',
          wordBank: ['ⲛⲁⲓ', 'ⲛⲓⲉⲕⲕⲗⲏⲥⲓⲁ', 'ⲥⲉⲥⲁⲓ', 'ⲥⲁⲓ'],
          explanation: 'ⲛⲁⲓ ⲛⲓⲉⲕⲕⲗⲏⲥⲓⲁ = these churches + ⲥⲉⲥⲁⲓ = they are beautiful (plural agreement)'
        },
        {
          id: 'test-16-21',
          type: 'fill_blank',
          question: 'Complete: ⲧⲉⲕⲕⲗⲏⲥⲓⲁ ___ ⲛⲓϣϯ = This church is great',
          correctAnswer: 'ⲑⲁⲓ',
          options: ['ⲑⲁⲓ', 'ⲫⲁⲓ', 'ⲛⲁⲓ', 'ⲑⲏ'],
          explanation: 'ⲧⲉⲕⲕⲗⲏⲥⲓⲁ ⲑⲁⲓ = this church (f. agreement)'
        },

        // Contrastive demonstratives
        {
          id: 'test-16-22',
          type: 'translation',
          question: 'Translate: ⲫⲁⲓ ⲙⲉⲛ ⲛⲁⲛⲉϥ ⲫⲏ ⲇⲉ ϩⲱⲟⲩ',
          questionCoptic: 'ⲫⲁⲓ ⲙⲉⲛ ⲛⲁⲛⲉϥ ⲫⲏ ⲇⲉ ϩⲱⲟⲩ',
          correctAnswer: 'This one is good, but that one is bad',
          options: ['This one is good, but that one is bad', 'This and that are good and bad', 'This is good, that is also good', 'These are good, those are bad'],
          explanation: 'ⲫⲁⲓ ⲙⲉⲛ = this...indeed + ⲛⲁⲛⲉϥ = good + ⲫⲏ ⲇⲉ = but that + ϩⲱⲟⲩ = bad'
        },
        {
          id: 'test-16-23',
          type: 'multiple_choice',
          question: 'How do you say "this book, not that one"?',
          correctAnswer: 'ⲡⲓϫⲱⲙ ⲫⲁⲓ ⲉⲫⲏ ⲁⲛ',
          options: ['ⲡⲓϫⲱⲙ ⲫⲁⲓ ⲉⲫⲏ ⲁⲛ', 'ⲫⲁⲓ ⲡⲓϫⲱⲙ ⲁⲛ ⲫⲏ', 'ⲡⲓϫⲱⲙ ⲫⲏ ⲁⲛ ⲫⲁⲓ', 'ⲫⲁⲓ ⲁⲛ ⲫⲏ ⲡⲓϫⲱⲙ'],
          explanation: 'ⲡⲓϫⲱⲙ ⲫⲁⲓ = this book + ⲉⲫⲏ ⲁⲛ = not that one'
        },

        // Advanced usage
        {
          id: 'test-16-24',
          type: 'matching',
          question: 'Match complex demonstrative phrases',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲡⲓⲣⲱⲙⲓ ⲫⲁⲓ ⲉⲧϧⲉⲛ ⲡⲓⲏⲓ', english: 'this man who is in the house' },
            { coptic: 'ⲧⲉϩⲓⲙⲓ ⲑⲏ ⲉⲧⲙⲟϣⲓ', english: 'that woman who walks' },
            { coptic: 'ⲛⲓϫⲱⲙ ⲛⲁⲓ ⲛ̀ⲧⲉⲫϯ', english: 'these books of God' },
            { coptic: 'ⲛⲏ ⲛⲓⲗⲟⲅⲟⲥ ⲉⲑⲟⲩⲁⲃ', english: 'those holy words' }
          ]
        },

        // Demonstrative pronouns as subjects
        {
          id: 'test-16-25',
          type: 'translation',
          question: 'Translate: ⲛⲁⲓ ⲁⲩⲓ̀ ⲉⲃⲟⲗ ϧⲉⲛ ⲙⲓⲥⲣⲓ',
          questionCoptic: 'ⲛⲁⲓ ⲁⲩⲓ̀ ⲉⲃⲟⲗ ϧⲉⲛ ⲙⲓⲥⲣⲓ',
          correctAnswer: 'These came out from Egypt',
          options: ['These came out from Egypt', 'Those came from Egypt', 'They came from Egypt', 'These are from Egypt'],
          explanation: 'ⲛⲁⲓ = these + ⲁⲩⲓ̀ ⲉⲃⲟⲗ = they came out + ϧⲉⲛ ⲙⲓⲥⲣⲓ = from Egypt (Bohairic ⲓ̀ not ⲉⲓ!)'
        },

        // Final comprehensive exercises
        {
          id: 'test-16-26',
          type: 'sentence_building',
          question: 'Build: "Those children are studying in this school"',
          correctAnswer: 'ⲛⲏ ⲛⲓϣⲏⲣⲓ ⲥⲉⲉⲙⲓ ϧⲉⲛ ϯⲥⲭⲟⲗⲏ ⲑⲁⲓ',
          wordBank: ['ⲛⲏ', 'ⲛⲓϣⲏⲣⲓ', 'ⲥⲉⲉⲙⲓ', 'ϧⲉⲛ', 'ϯⲥⲭⲟⲗⲏ', 'ⲑⲁⲓ'],
          explanation: 'ⲛⲏ ⲛⲓϣⲏⲣⲓ = those children + ⲥⲉⲉⲙⲓ = they study + ϧⲉⲛ ϯⲥⲭⲟⲗⲏ ⲑⲁⲓ = in this school (Bohairic ϣⲏⲣⲓ not ⲥⲏⲣⲓ!)'
        },
        {
          id: 'test-16-27',
          type: 'translation',
          question: 'Translate: ⲁⲓⲥⲱⲧⲙ ⲉⲛⲁⲓ ⲛⲓⲥⲁϫⲓ ⲉⲃⲟⲗϩⲓⲧⲟⲧϥ',
          questionCoptic: 'ⲁⲓⲥⲱⲧⲙ ⲉⲛⲁⲓ ⲛⲓⲥⲁϫⲓ ⲉⲃⲟⲗϩⲓⲧⲟⲧϥ',
          correctAnswer: 'I heard these words from him',
          options: ['I heard these words from him', 'I hear those words from him', 'He heard these words from me', 'These words were heard by him'],
          explanation: 'ⲁⲓⲥⲱⲧⲙ = I heard + ⲉⲛⲁⲓ ⲛⲓⲥⲁϫⲓ = these words + ⲉⲃⲟⲗϩⲓⲧⲟⲧϥ = from him'
        }
      ]
    }
  ]
};

export default unit16Test;
