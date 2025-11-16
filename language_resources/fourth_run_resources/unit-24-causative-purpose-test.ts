import { Unit } from '../../types';

// TEST FILE FOR UNIT 24: CAUSATIVE & PURPOSE CLAUSES
// Comprehensive test exercises covering all 4 lessons
// 32 exercises total - testing causative verbs, purpose clauses, and result clauses

const unit24Test: Unit = {
  id: 'unit-24-test',
  title: 'Unit 24 Test: Causative & Purpose',
  description: 'Comprehensive test of causative constructions and purpose clauses',
  order: 24.5,
  color: '#1CB0F6',
  lessons: [
    {
      id: 'lesson-24-test',
      unitId: 'unit-24-test',
      title: 'Causative & Purpose Comprehensive Test',
      description: 'Test all causative forms and purpose constructions',
      order: 1,
      xpReward: 100,
      isLocked: true,
      completed: false,
      exercises: [
        // Causative with ⲧⲁⲙⲟ tests
        {
          id: 'test-24-1',
          type: 'translation',
          question: 'Translate: ⲁϥⲧⲁⲙⲟⲓ ⲉϣⲉⲛⲓ',
          questionCoptic: 'ⲁϥⲧⲁⲙⲟⲓ ⲉϣⲉⲛⲓ',
          correctAnswer: 'He made me go',
          options: ['He made me go', 'He told me to go', 'He went with me', 'I made him go'],
          explanation: 'ⲁϥⲧⲁⲙⲟⲓ = he made me (causative) + ⲉϣⲉⲛⲓ = to go (Bohairic ϣⲉⲛⲓ not ⲃⲱⲕ!)'
        },
        {
          id: 'test-24-2',
          type: 'multiple_choice',
          question: 'What does ⲧⲁⲙⲟ- mean?',
          questionCoptic: 'ⲧⲁⲙⲟ-',
          correctAnswer: 'to make/cause someone to do',
          options: ['to make/cause someone to do', 'to tell', 'to help', 'to allow'],
          explanation: 'ⲧⲁⲙⲟ- (tamo) is the causative verb meaning "to make/cause (someone to do)". It takes a suffix pronoun for the person being caused to act.'
        },
        {
          id: 'test-24-3',
          type: 'translation',
          question: 'Translate: ⲧⲁⲙⲟϥ ⲉⲟⲩⲱⲙ',
          questionCoptic: 'ⲧⲁⲙⲟϥ ⲉⲟⲩⲱⲙ',
          correctAnswer: 'Make him eat',
          options: ['Make him eat', 'Tell him to eat', 'He eats', 'Let him eat'],
          explanation: 'ⲧⲁⲙⲟϥ = make him + ⲉⲟⲩⲱⲙ = to eat (causative construction)'
        },
        {
          id: 'test-24-4',
          type: 'fill_blank',
          question: 'Complete: ⲁϥ___ ⲉⲥⲱⲧⲙ = He made me listen',
          correctAnswer: 'ⲧⲁⲙⲟⲓ',
          options: ['ⲧⲁⲙⲟⲓ', 'ⲁϫⲓⲥ', 'ⲕⲁⲓ', 'ⲑⲣⲓ'],
          explanation: 'ⲧⲁⲙⲟⲓ = made me (ⲧⲁⲙⲟ- + suffix pronoun -ⲓ)'
        },
        {
          id: 'test-24-5',
          type: 'sentence_building',
          question: 'Build: "She made them write"',
          correctAnswer: 'ⲁⲥⲧⲁⲙⲱⲟⲩ ⲉⲥ̀ϧⲁⲓ',
          wordBank: ['ⲁⲥ', 'ⲧⲁⲙⲱⲟⲩ', 'ⲉ', 'ⲥ̀ϧⲁⲓ'],
          explanation: 'ⲁⲥⲧⲁⲙⲱⲟⲩ = she made them + ⲉⲥ̀ϧⲁⲓ = to write (Bohairic ⲥ̀ϧⲁⲓ not ⲥϩⲁⲓ!)'
        },
        {
          id: 'test-24-6',
          type: 'matching',
          question: 'Match causative vocabulary',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲧⲁⲙⲟ-', english: 'to make/cause' },
            { coptic: 'ⲑⲣⲉ-', english: 'to cause/make' },
            { coptic: 'ⲕⲁ-', english: 'to allow/let' },
            { coptic: 'ⲁϫⲓⲥ', english: 'to tell' }
          ]
        },
        {
          id: 'test-24-7',
          type: 'multiple_choice',
          question: 'How do you say "I will make you understand"?',
          correctAnswer: 'ϯⲛⲁⲧⲁⲙⲟⲕ ⲉⲕⲁϯ',
          options: ['ϯⲛⲁⲧⲁⲙⲟⲕ ⲉⲕⲁϯ', 'ϯⲛⲁⲁϫⲓⲥ ⲛⲁⲕ', 'ⲕⲛⲁⲕⲁϯ', 'ϯⲛⲁⲕⲁϯ ⲛⲁⲕ'],
          explanation: 'ϯⲛⲁⲧⲁⲙⲟⲕ ⲉⲕⲁϯ = I will make you + to understand (causative future)'
        },
        {
          id: 'test-24-8',
          type: 'translation',
          question: 'Translate: ⲫϯ ⲁϥⲧⲁⲙⲟⲛ ⲉⲙⲉⲛⲣⲉ ⲙⲙⲟϥ',
          questionCoptic: 'ⲫϯ ⲁϥⲧⲁⲙⲟⲛ ⲉⲙⲉⲛⲣⲉ ⲙⲙⲟϥ',
          correctAnswer: 'God made us love him',
          options: ['God made us love him', 'God told us to love him', 'We love God', 'God loves us'],
          explanation: 'ⲫϯ ⲁϥⲧⲁⲙⲟⲛ = God made us + ⲉⲙⲉⲛⲣⲉ ⲙⲙⲟϥ = to love him (Bohairic: ⲫϯ not ⲫⲛⲟⲩϯ, ⲙⲉⲛⲣⲉ not ⲙⲉⲣⲓ!)'
        },

        // Causative with ⲑⲣⲉ- tests
        {
          id: 'test-24-9',
          type: 'translation',
          question: 'Translate: ⲁϥⲑⲣⲓⲙⲟϣⲓ',
          questionCoptic: 'ⲁϥⲑⲣⲓⲙⲟϣⲓ',
          correctAnswer: 'He made me walk',
          options: ['He made me walk', 'I walked', 'He walked', 'He told me to walk'],
          explanation: 'ⲁϥⲑⲣⲓⲙⲟϣⲓ = he made me walk (ⲑⲣⲉ- causative + suffix + infinitive) - Bohairic ⲙⲟϣⲓ not ⲙⲟⲟϣⲉ!'
        },
        {
          id: 'test-24-10',
          type: 'multiple_choice',
          question: 'What is the difference between ⲧⲁⲙⲟ- and ⲑⲣⲉ-?',
          correctAnswer: 'Both mean causative but ⲑⲣⲉ- takes infinitive directly',
          options: ['Both mean causative but ⲑⲣⲉ- takes infinitive directly', 'ⲧⲁⲙⲟ- is stronger', 'ⲑⲣⲉ- means "to tell"', 'They are identical'],
          explanation: 'ⲑⲣⲉ- (thre) is a causative construction that combines with infinitives: ⲑⲣⲉ- + pronoun + infinitive'
        },
        {
          id: 'test-24-11',
          type: 'translation',
          question: 'Translate: ⲑⲣⲉϥⲥⲱⲧⲙ',
          questionCoptic: 'ⲑⲣⲉϥⲥⲱⲧⲙ',
          correctAnswer: 'Make him listen',
          options: ['Make him listen', 'He listens', 'Let him listen', 'Tell him to listen'],
          explanation: 'ⲑⲣⲉϥⲥⲱⲧⲙ = make him listen (ⲑⲣⲉ- + ϥ + ⲥⲱⲧⲙ)'
        },
        {
          id: 'test-24-12',
          type: 'fill_blank',
          question: 'Complete: ⲁϥ___ ⲉⲣⲁϣⲓ = He made me rejoice',
          correctAnswer: 'ⲑⲣⲓⲣⲁϣⲓ',
          options: ['ⲑⲣⲓⲣⲁϣⲓ', 'ⲧⲁⲙⲟⲓ ⲉⲣⲁϣⲓ', 'ⲁⲓⲣⲁϣⲓ', 'ⲕⲁⲓ ⲉⲣⲁϣⲓ'],
          explanation: 'ⲑⲣⲓⲣⲁϣⲓ = made me rejoice (ⲑⲣⲉ- + ⲓ + ⲣⲁϣⲓ)'
        },
        {
          id: 'test-24-13',
          type: 'sentence_building',
          question: 'Build: "Make them see"',
          correctAnswer: 'ⲑⲣⲟⲩⲛⲁⲩ',
          wordBank: ['ⲑⲣⲟⲩ', 'ⲛⲁⲩ', 'ⲉ', 'ⲙ'],
          explanation: 'ⲑⲣⲟⲩⲛⲁⲩ = make them see (ⲑⲣⲉ- + ⲟⲩ + ⲛⲁⲩ)'
        },
        {
          id: 'test-24-14',
          type: 'matching',
          question: 'Match causative forms',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲑⲣⲓ-', english: 'make me (do)' },
            { coptic: 'ⲑⲣⲉⲕ-', english: 'make you (do)' },
            { coptic: 'ⲑⲣⲉϥ-', english: 'make him (do)' },
            { coptic: 'ⲑⲣⲉⲛ-', english: 'make us (do)' }
          ]
        },
        {
          id: 'test-24-15',
          type: 'translation',
          question: 'Translate: ⲡϭⲟⲓⲥ ⲁϥⲑⲣⲉⲛⲛⲁϩϯ',
          questionCoptic: 'ⲡϭⲟⲓⲥ ⲁϥⲑⲣⲉⲛⲛⲁϩϯ',
          correctAnswer: 'The Lord made us believe',
          options: ['The Lord made us believe', 'The Lord told us to believe', 'We believe in the Lord', 'The Lord believes'],
          explanation: 'ⲡϭⲟⲓⲥ ⲁϥⲑⲣⲉⲛⲛⲁϩϯ = the Lord made us believe (causative construction)'
        },
        {
          id: 'test-24-16',
          type: 'multiple_choice',
          question: 'How do you say "Make us understand"?',
          correctAnswer: 'ⲑⲣⲉⲛⲕⲁϯ',
          options: ['ⲑⲣⲉⲛⲕⲁϯ', 'ⲧⲁⲙⲟⲛ ⲉⲕⲁϯ', 'ⲧⲉⲛⲛⲁⲕⲁϯ', 'ⲕⲁϯ ⲛⲁⲛ'],
          explanation: 'ⲑⲣⲉⲛⲕⲁϯ = make us understand (ⲑⲣⲉ- + ⲛ + ⲕⲁϯ)'
        },

        // Purpose with ϩⲓⲛⲁ tests
        {
          id: 'test-24-17',
          type: 'translation',
          question: 'Translate: ϩⲓⲛⲁ ⲛⲧⲉⲛⲛⲁϩϯ',
          questionCoptic: 'ϩⲓⲛⲁ ⲛⲧⲉⲛⲛⲁϩϯ',
          correctAnswer: 'So that we may believe',
          options: ['So that we may believe', 'Because we believe', 'We believe', 'When we believe'],
          explanation: 'ϩⲓⲛⲁ (hina, from Greek) = so that, in order that + ⲛⲧⲉⲛⲛⲁϩϯ = we may believe'
        },
        {
          id: 'test-24-18',
          type: 'multiple_choice',
          question: 'What does ϩⲓⲛⲁ express?',
          questionCoptic: 'ϩⲓⲛⲁ',
          correctAnswer: 'purpose (so that, in order to)',
          options: ['purpose (so that, in order to)', 'cause (because)', 'time (when)', 'condition (if)'],
          explanation: 'ϩⲓⲛⲁ (hina) introduces purpose clauses meaning "so that" or "in order that"'
        },
        {
          id: 'test-24-19',
          type: 'translation',
          question: 'Translate: ⲁϥⲓ̀ ϩⲓⲛⲁ ⲛⲧⲉϥⲛⲁⲩ ⲉⲣⲟϥ',
          questionCoptic: 'ⲁϥⲓ̀ ϩⲓⲛⲁ ⲛⲧⲉϥⲛⲁⲩ ⲉⲣⲟϥ',
          correctAnswer: 'He came in order to see him',
          options: ['He came in order to see him', 'He came and saw him', 'When he came, he saw him', 'He came because he saw him'],
          explanation: 'ⲁϥⲓ̀ = he came + ϩⲓⲛⲁ ⲛⲧⲉϥⲛⲁⲩ ⲉⲣⲟϥ = so that he might see him (Bohairic ⲓ̀ not ⲉⲓ!)'
        },
        {
          id: 'test-24-20',
          type: 'fill_blank',
          question: 'Complete: ⲁϥϣⲉⲛⲓ ___ ⲛⲧⲉϥⲧ̀ⲥⲁⲃⲟ = He went to teach',
          correctAnswer: 'ϩⲓⲛⲁ',
          options: ['ϩⲓⲛⲁ', 'ϫⲉ', 'ⲉⲑⲃⲉ', 'ϩⲟⲧⲉ'],
          explanation: 'ϩⲓⲛⲁ (hina) introduces the purpose clause (Bohairic ϣⲉⲛⲓ not ⲃⲱⲕ!)'
        },
        {
          id: 'test-24-21',
          type: 'sentence_building',
          question: 'Build: "I write so that you may know"',
          correctAnswer: 'ϯⲥ̀ϧⲁⲓ ϩⲓⲛⲁ ⲛⲧⲉⲕⲉⲙⲓ',
          wordBank: ['ϯⲥ̀ϧⲁⲓ', 'ϩⲓⲛⲁ', 'ⲛⲧⲉⲕⲉⲙⲓ', 'ⲛⲧⲉⲛⲉⲙⲓ'],
          explanation: 'ϯⲥ̀ϧⲁⲓ (I write) + ϩⲓⲛⲁ ⲛⲧⲉⲕⲉⲙⲓ (so that you may know) - Bohairic ⲥ̀ϧⲁⲓ not ⲥϩⲁⲓ!'
        },
        {
          id: 'test-24-22',
          type: 'matching',
          question: 'Match purpose vocabulary',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ϩⲓⲛⲁ', english: 'so that' },
            { coptic: 'ϫⲉ', english: 'that/because' },
            { coptic: 'ⲉⲑⲃⲉ', english: 'because of' },
            { coptic: 'ⲉ-', english: 'to (infinitive)' }
          ]
        },
        {
          id: 'test-24-23',
          type: 'translation',
          question: 'Translate: ⲫϯ ⲁϥⲙⲉⲛⲣⲉ ⲙⲡⲓⲕⲟⲥⲙⲟⲥ ϩⲓⲛⲁ ⲛⲧⲉϥⲛⲁϩⲉⲙ ⲙⲙⲟϥ',
          questionCoptic: 'ⲫϯ ⲁϥⲙⲉⲛⲣⲉ ⲙⲡⲓⲕⲟⲥⲙⲟⲥ ϩⲓⲛⲁ ⲛⲧⲉϥⲛⲁϩⲉⲙ ⲙⲙⲟϥ',
          correctAnswer: 'God loved the world so that he might save it',
          options: ['God loved the world so that he might save it', 'God loves the world and saves it', 'God loved and saved the world', 'Because God loved, he saved the world'],
          explanation: 'Purpose clause with ϩⲓⲛⲁ showing God\'s purpose in loving - to save (Bohairic: ⲫϯ not ⲫⲛⲟⲩϯ, ⲙⲉⲛⲣⲉ not ⲙⲉⲣⲓ!)'
        },
        {
          id: 'test-24-24',
          type: 'multiple_choice',
          question: 'How do you say "in order to live"?',
          correctAnswer: 'ϩⲓⲛⲁ ⲛⲧⲉϥⲱⲛϧ',
          options: ['ϩⲓⲛⲁ ⲛⲧⲉϥⲱⲛϧ', 'ⲉⲱⲛϧ', 'ⲉⲑⲃⲉ ⲱⲛϧ', 'ϧⲉⲛ ⲑⲣⲉϥⲱⲛϧ'],
          explanation: 'ϩⲓⲛⲁ ⲛⲧⲉϥⲱⲛϧ = so that he may live (purpose clause with subjunctive)'
        },

        // Result clauses (ϩⲱⲥⲧⲉ) tests
        {
          id: 'test-24-25',
          type: 'translation',
          question: 'Translate: ϩⲱⲥⲧⲉ ⲛⲧⲟⲩⲉⲣϣⲫⲏⲣⲓ',
          questionCoptic: 'ϩⲱⲥⲧⲉ ⲛⲧⲟⲩⲉⲣϣⲫⲏⲣⲓ',
          correctAnswer: 'So that they marveled',
          options: ['So that they marveled', 'Because they marveled', 'They marveled', 'When they marveled'],
          explanation: 'ϩⲱⲥⲧⲉ (hoste, from Greek) = so that (result) + ⲛⲧⲟⲩⲉⲣϣⲫⲏⲣⲓ = they marveled'
        },
        {
          id: 'test-24-26',
          type: 'multiple_choice',
          question: 'What does ϩⲱⲥⲧⲉ express?',
          questionCoptic: 'ϩⲱⲥⲧⲉ',
          correctAnswer: 'result or consequence',
          options: ['result or consequence', 'purpose', 'cause', 'time'],
          explanation: 'ϩⲱⲥⲧⲉ (hoste) introduces result clauses showing what happened as a consequence'
        },
        {
          id: 'test-24-27',
          type: 'translation',
          question: 'Translate: ⲁϥⲧ̀ⲥⲁⲃⲱⲟⲩ ϩⲱⲥⲧⲉ ⲛⲧⲟⲩⲛⲁϩϯ',
          questionCoptic: 'ⲁϥⲧ̀ⲥⲁⲃⲱⲟⲩ ϩⲱⲥⲧⲉ ⲛⲧⲟⲩⲛⲁϩϯ',
          correctAnswer: 'He taught them so that they believed',
          options: ['He taught them so that they believed', 'He taught them to believe', 'He taught them and they believed', 'When he taught, they believed'],
          explanation: 'ⲁϥⲧ̀ⲥⲁⲃⲱⲟⲩ = he taught them + ϩⲱⲥⲧⲉ ⲛⲧⲟⲩⲛⲁϩϯ = with the result that they believed'
        },
        {
          id: 'test-24-28',
          type: 'fill_blank',
          question: 'Complete: ⲁϥⲓ̀ ___ ⲛⲧⲟⲩⲛⲁⲩ ⲉⲣⲟϥ = He came with the result that they saw him',
          correctAnswer: 'ϩⲱⲥⲧⲉ',
          options: ['ϩⲱⲥⲧⲉ', 'ϩⲓⲛⲁ', 'ⲉⲑⲃⲉ', 'ϫⲉ'],
          explanation: 'ϩⲱⲥⲧⲉ introduces the actual result (Bohairic ⲓ̀ not ⲉⲓ!)'
        },
        {
          id: 'test-24-29',
          type: 'sentence_building',
          question: 'Build: "He spoke, so that all heard"',
          correctAnswer: 'ⲁϥⲥⲁϫⲓ ϩⲱⲥⲧⲉ ⲛⲧⲉⲟⲩⲟⲛ ⲛⲓⲃⲉⲛ ⲥⲱⲧⲙ',
          wordBank: ['ⲁϥⲥⲁϫⲓ', 'ϩⲱⲥⲧⲉ', 'ⲛⲧⲉⲟⲩⲟⲛ ⲛⲓⲃⲉⲛ ⲥⲱⲧⲙ', 'ⲉⲣⲟϥ'],
          explanation: 'ⲁϥⲥⲁϫⲓ (he spoke) + ϩⲱⲥⲧⲉ ⲛⲧⲉⲟⲩⲟⲛ ⲛⲓⲃⲉⲛ ⲥⲱⲧⲙ (with the result that everyone heard)'
        },
        {
          id: 'test-24-30',
          type: 'matching',
          question: 'Match result/purpose terms',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ϩⲱⲥⲧⲉ', english: 'so that (result)' },
            { coptic: 'ϩⲓⲛⲁ', english: 'so that (purpose)' },
            { coptic: 'ⲉⲑⲃⲉ ⲫⲁⲓ', english: 'therefore' },
            { coptic: 'ⲟⲩⲛ', english: 'therefore/then' }
          ]
        },
        {
          id: 'test-24-31',
          type: 'translation',
          question: 'Translate: ⲡϭⲟⲓⲥ ⲁϥⲓ̀ϩⲓⲣⲏⲛⲏ ϩⲱⲥⲧⲉ ⲛⲧⲟⲩⲱⲛϧ',
          questionCoptic: 'ⲡϭⲟⲓⲥ ⲁϥⲓ̀ϩⲓⲣⲏⲛⲏ ϩⲱⲥⲧⲉ ⲛⲧⲟⲩⲱⲛϧ',
          correctAnswer: 'The Lord made peace so that they lived',
          options: ['The Lord made peace so that they lived', 'The Lord made peace to make them live', 'The Lord brought peace and they lived', 'When the Lord brought peace, they lived'],
          explanation: 'Result clause: the Lord\'s action resulted in their living'
        },
        {
          id: 'test-24-32',
          type: 'multiple_choice',
          question: 'Difference between ϩⲓⲛⲁ and ϩⲱⲥⲧⲉ?',
          correctAnswer: 'ϩⲓⲛⲁ = purpose (intention), ϩⲱⲥⲧⲉ = result (consequence)',
          options: ['ϩⲓⲛⲁ = purpose (intention), ϩⲱⲥⲧⲉ = result (consequence)', 'They mean the same thing', 'ϩⲓⲛⲁ is stronger', 'ϩⲱⲥⲧⲉ means "because"'],
          explanation: 'ϩⲓⲛⲁ expresses intended purpose, ϩⲱⲥⲧⲉ expresses actual result/consequence'
        }
      ]
    }
  ]
};

export default unit24Test;
