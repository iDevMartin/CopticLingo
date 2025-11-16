import { Lesson } from '../../types';

// TEST FILE FOR UNIT 37: CIRCUMSTANTIAL CLAUSES
// Comprehensive test exercises covering all 4 lessons
// 25 exercises total - testing ⲉ̀- prefix and subordinate clause structures

const unit37Test: Lesson = {
id: 'lesson-37-test',
      unitId: 'unit-37',
      title: 'Circumstantial Clauses Comprehensive Test',
      description: 'Test all circumstantial constructions and subordinate patterns',
      order: 1,
      xpReward: 150,
      isLocked: true,
      completed: false,
      exercises: [
        // Prefix formation tests
        {
          id: 'test-37-1',
          type: 'multiple_choice',
          question: 'What does the ⲉ̀- prefix indicate?',
          correctAnswer: 'Circumstantial: while/when doing',
          options: ['Circumstantial: while/when doing', 'Future tense', 'Past tense', 'Negation'],
          explanation: 'ⲉ̀- prefix creates circumstantial (subordinate) clauses meaning "while/when doing"'
        },
        {
          id: 'test-37-2',
          type: 'translation',
          question: 'Translate: ⲉⲓⲙⲟϣⲓ',
          questionCoptic: 'ⲉⲓⲙⲟϣⲓ',
          correctAnswer: 'While I walk / When I was walking',
          options: ['While I walk / When I was walking', 'I walk', 'I walked', 'I will walk'],
          explanation: 'ⲉⲓⲙⲟϣⲓ = while/when I walk/am walking/was walking (circumstantial)'
        },
        {
          id: 'test-37-3',
          type: 'matching',
          question: 'Match circumstantial prefixes (first person)',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲉⲓ-', english: 'while I (am/was)' },
            { coptic: 'ⲉⲕ-', english: 'while you-m (are/were)' },
            { coptic: 'ⲉⲣⲉ-', english: 'while you-f (are/were)' },
            { coptic: 'ⲉϥ-', english: 'while he (is/was)' }
          ]
        },
        {
          id: 'test-37-4',
          type: 'fill_blank',
          question: 'Complete: ___ⲥⲁϫⲓ = while he speaks/was speaking',
          correctAnswer: 'ⲉϥ',
          options: ['ⲉϥ', 'ⲁϥ', 'ϥ', 'ⲛⲁϥ'],
          explanation: 'ⲉϥⲥⲁϫⲓ = while he speaks/is speaking/was speaking (circumstantial)'
        },
        {
          id: 'test-37-5',
          type: 'sentence_building',
          question: 'Build: "while we were eating"',
          correctAnswer: 'ⲉⲛⲟⲩⲱⲙ',
          wordBank: ['ⲉⲛ', 'ⲟⲩⲱⲙ', 'ⲁⲛ', 'ⲧⲉⲛ'],
          explanation: 'ⲉⲛⲟⲩⲱⲙ = while we eat/are eating/were eating'
        },
        // Plural and other person forms
        {
          id: 'test-37-6',
          type: 'matching',
          question: 'Match more circumstantial prefixes',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲉⲥ-', english: 'while she (is/was)' },
            { coptic: 'ⲉⲛ-', english: 'while we (are/were)' },
            { coptic: 'ⲉⲣⲉⲧⲉⲛ-', english: 'while you-pl (are/were)' },
            { coptic: 'ⲉⲩ-', english: 'while they (are/were)' }
          ]
        },
        {
          id: 'test-37-7',
          type: 'translation',
          question: 'Translate: ⲁⲓⲛⲁⲩ ⲉ̀ⲣⲟϥ ⲉϥⲙⲟϣⲓ',
          questionCoptic: 'ⲁⲓⲛⲁⲩ ⲉ̀ⲣⲟϥ ⲉϥⲙⲟϣⲓ',
          correctAnswer: 'I saw him while he was walking',
          options: ['I saw him while he was walking', 'I saw him walk', 'I see him walking', 'He saw me walking'],
          explanation: 'ⲁⲓⲛⲁⲩ ⲉ̀ⲣⲟϥ ⲉϥⲙⲟϣⲓ = I saw him while he was walking (main + circumstantial)'
        },
        {
          id: 'test-37-8',
          type: 'multiple_choice',
          question: 'What is the structure of a circumstantial clause?',
          correctAnswer: 'ⲉ- + subject marker + infinitive',
          options: ['ⲉ- + subject marker + infinitive', 'ⲁ- + subject + verb', 'subject prefix + verb', 'ⲉ- + verb alone'],
          explanation: 'Circumstantial: ⲉ- (or ⲉ̀-) + subject marker (ⲓ, ⲕ, ϥ, etc.) + infinitive verb'
        },
        {
          id: 'test-37-9',
          type: 'translation',
          question: 'Translate: ⲉⲕⲙⲟϣⲓ ⲁⲓⲛⲁⲩ ⲉⲕ',
          questionCoptic: 'ⲉⲕⲙⲟϣⲓ ⲁⲓⲛⲁⲩ ⲉⲕ',
          correctAnswer: 'While you (m) were walking, I saw you',
          options: ['While you (m) were walking, I saw you', 'You were walking and I saw you', 'I saw you while walking', 'You walked and I see you'],
          explanation: 'ⲉⲕⲙⲟϣⲓ (circumstantial) ⲁⲓⲛⲁⲩ ⲉⲕ = while you were walking, I saw you'
        },
        {
          id: 'test-37-10',
          type: 'fill_blank',
          question: 'Complete: ⲁϥⲥⲁϫⲓ ___ ⲛⲓⲕⲟ = He spoke while the bishops listened',
          correctAnswer: 'ⲉⲛⲥⲱⲧⲙ',
          options: ['ⲉⲛⲥⲱⲧⲙ', 'ⲁⲛⲥⲱⲧⲙ', 'ⲉⲗⲙⲟϣⲓ', 'ⲛⲁⲛⲥⲱⲧⲙ'],
          explanation: 'ⲁϥⲥⲁϫⲓ ⲉⲛⲥⲱⲧⲙ = he spoke while we (bishops) listened'
        },
        // Contextual usage and meaning
        {
          id: 'test-37-11',
          type: 'matching',
          question: 'Match circumstan tial with context',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲁⲓⲓ̀ ⲉⲃⲟⲗ ⲉϥⲙⲟϣⲓ', english: 'I went out while he was walking' },
            { coptic: 'ⲁⲩⲟⲩⲱⲙ ⲉⲥⲥⲁϫⲓ', english: 'They ate while she was speaking' },
            { coptic: 'ⲁϥⲛⲁⲩ ⲉ̀ⲣⲟⲓ ⲉⲓⲭⲱ', english: 'He saw me while I was sick' },
            { coptic: 'ⲁϥⲛⲁϫ ⲉⲧⲟⲩϩ ⲉⲩⲥⲙⲟⲩ', english: 'He received the gift while they praised' }
          ]
        },
        {
          id: 'test-37-12',
          type: 'translation',
          question: 'Translate: ⲁⲛϣⲉⲛⲓ ⲉⲃⲟⲗ ⲉϫⲱⲛⲧⲗⲁϩⲟⲩ',
          questionCoptic: 'ⲁⲛϣⲉⲛⲓ ⲉⲃⲟⲗ ⲉϫⲱⲛⲧⲗⲁϩⲟⲩ',
          correctAnswer: 'We left while they were working',
          options: ['We left while they were working', 'We left so they would work', 'We left and they worked', 'We worked as they left'],
          explanation: 'ⲁⲛϣⲉⲛⲓ ⲉⲃⲟⲗ ⲉϫⲱⲛⲧⲗⲁϩⲟⲩ = we left while they were working'
        },
        {
          id: 'test-37-13',
          type: 'sentence_building',
          question: 'Build: "I saw them while they were eating"',
          correctAnswer: 'ⲁⲓⲛⲁⲩ ⲉⲣⲟⲩ ⲉⲩⲟⲩⲱⲙ',
          wordBank: ['ⲁⲓⲛⲁⲩ', 'ⲉⲣⲟⲩ', 'ⲉⲩⲟⲩⲱⲙ', 'ⲉⲛⲟⲩⲱⲙ'],
          explanation: 'ⲁⲓⲛⲁⲩ ⲉⲣⲟⲩ ⲉⲩⲟⲩⲱⲙ = I saw them while they were eating'
        },
        {
          id: 'test-37-14',
          type: 'multiple_choice',
          question: 'Circumstantial clauses typically describe:',
          correctAnswer: 'Simultaneous/background actions',
          options: ['Simultaneous/background actions', 'Completed events', 'Future events', 'Habitual actions'],
          explanation: 'Circumstantial clauses with ⲉ̀- describe actions happening at the same time as the main verb'
        },
        // Verb pattern combinations
        {
          id: 'test-37-15',
          type: 'translation',
          question: 'Translate: ⲁϥϲϯ ⲛ̀ⲟⲩⲡⲉⲛⲓⲧⲉ ⲉ̀ⲣⲟⲛ ⲉⲛⲱϣ',
          questionCoptic: 'ⲁϥϲϯ ⲛ̀ⲟⲩⲡⲉⲛⲓⲧⲉ ⲉ̀ⲣⲟⲛ ⲉⲛⲱϣ',
          correctAnswer: 'He gave us a gift while we were happy',
          options: ['He gave us a gift while we were happy', 'He gave gifts as we were joyful', 'He will give us joy', 'We received gifts from him'],
          explanation: 'ⲁϥϲϯ (perfect) + ⲉⲛⲱϣ (circumstantial) = he gave while we were happy'
        },
        {
          id: 'test-37-16',
          type: 'fill_blank',
          question: 'Complete: ⲁⲛⲛⲟϫⲟⲩⲥ ___ = We received Him while He taught',
          correctAnswer: 'ⲉϥⲥⲁϫⲓ',
          options: ['ⲉϥⲥⲁϫⲓ', 'ⲁϥⲥⲁϫⲓ', 'ⲛⲁϥⲥⲁϫⲓ', 'ⲥⲁϫⲓ'],
          explanation: 'ⲁⲛⲛⲟϫⲟⲩⲥ ⲉϥⲥⲁϫⲓ = we received Him while he taught (circumstantial)'
        },
        {
          id: 'test-37-17',
          type: 'matching',
          question: 'Match main + circumstantial combinations',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲁⲓⲉ̀ⲃⲟⲗ ⲉϥϩⲱⲧⲡ', english: 'I went out while he was hiding' },
            { coptic: 'ⲁϥϣⲟⲗⲡ ⲉⲛⲧⲱⲃϩ', english: 'He was perfect while we pray' },
            { coptic: 'ⲁⲩⲣ ⲉ̀ⲣⲟϥ ⲉⲓⲕⲟⲧⲓ', english: 'They fled from him while I wept' },
            { coptic: 'ⲁⲛϯ ⲉⲛⲱϣ ⲉⲧⲟⲩⲟⲛⲧⲁ', english: 'We gave joyfully while they were sad' }
          ]
        },
        {
          id: 'test-37-18',
          type: 'translation',
          question: 'Translate: ⲁϥⲁⲗⲟ ⲉ̀ⲓⲛⲁⲩ ⲉ̀ⲣⲟϥ ⲉϥⲙⲟϣⲓ',
          questionCoptic: 'ⲁϥⲁⲗⲟ ⲉ̀ⲓⲛⲁⲩ ⲉ̀ⲣⲟϥ ⲉϥⲙⲟϣⲓ',
          correctAnswer: 'He did not see him while he was walking',
          options: ['He did not see him while he was walking', 'He saw him walking', 'He refused to see him', 'He could not see him'],
          explanation: 'ⲁϥⲁⲗⲟ ⲉ̀ⲓⲛⲁⲩ (negative perfect) ⲉϥⲙⲟϣⲓ (circumstantial) = he did not see him while walking'
        },
        {
          id: 'test-37-19',
          type: 'sentence_building',
          question: 'Build: "She was speaking while we listened"',
          correctAnswer: 'ⲛⲁⲥⲥⲁϫⲓ ⲉⲛⲥⲱⲧⲙ',
          wordBank: ['ⲛⲁⲥⲥⲁϫⲓ', 'ⲉⲛⲥⲱⲧⲙ', 'ⲉⲥⲥⲁϫⲓ', 'ⲛⲁⲛⲥⲱⲧⲙ'],
          explanation: 'ⲛⲁⲥⲥⲁϫⲓ ⲉⲛⲥⲱⲧⲙ = she was speaking while we listened'
        },
        {
          id: 'test-37-20',
          type: 'translation',
          question: 'Translate: ⲁⲩⲛⲁϣⲉ ⲉ̀ϩⲓⲣⲏⲛⲏ ⲉⲛⲙⲟϣⲓ',
          questionCoptic: 'ⲁⲩⲛⲁϣⲉ ⲉ̀ϩⲓⲣⲏⲛⲏ ⲉⲛⲙⲟϣⲓ',
          correctAnswer: 'They made peace while we were walking',
          options: ['They made peace while we were walking', 'They made peace as we were walking', 'We walked in peace', 'They walked peacefully'],
          explanation: 'ⲁⲩⲛⲁϣⲉ ⲉ̀ϩⲓⲣⲏⲛⲏ (perfect) ⲉⲛⲙⲟϣⲓ (circumstantial) = they made peace while we were walking'
        },
        // Advanced patterns
        {
          id: 'test-37-21',
          type: 'matching',
          question: 'Match circumstantial structure meanings',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲉⲓ- / ⲉⲕ- / ⲉϥ-', english: 'while I/you(m)/he (is/was)' },
            { coptic: 'ⲉⲣⲉ- / ⲉⲥ-', english: 'while you(f)/she (is/was)' },
            { coptic: 'ⲉⲛ- / ⲉⲣⲉⲧⲉⲛ-', english: 'while we/you(pl) (are/were)' },
            { coptic: 'ⲉⲩ-', english: 'while they (are/were)' }
          ]
        },
        {
          id: 'test-37-22',
          type: 'fill_blank',
          question: 'Complete: ⲁϥⲛⲁⲩ ⲉ̀ⲣⲟϥ ___ = He saw him while he was coming',
          correctAnswer: 'ⲉϥⲓ̀',
          options: ['ⲉϥⲓ̀', 'ⲁϥⲓ̀', 'ⲓ̀', 'ⲛⲁϥⲓ̀'],
          explanation: 'ⲁϥⲛⲁⲩ ⲉ̀ⲣⲟϥ ⲉϥⲓ̀ = he saw him while he was coming'
        },
        {
          id: 'test-37-23',
          type: 'translation',
          question: 'Translate: ϩⲟⲧⲉ ⲁⲩⲓ̀ ⲉ̀ⲡⲓⲏⲓ ⲉⲩⲭⲟ',
          questionCoptic: 'ϩⲟⲧⲉ ⲁⲩⲓ̀ ⲉ̀ⲡⲓⲏⲓ ⲉⲩⲭⲟ',
          correctAnswer: 'When they came to the house, they were ill/weak',
          options: ['When they came to the house, they were ill/weak', 'When they came weak to the house', 'They came to the house being ill', 'They arrived at the weak house'],
          explanation: 'ϩⲟⲧⲉ ⲁⲩⲓ̀ (when they came) ⲉⲩⲭⲟ (while weak/circumstantial)'
        },
        {
          id: 'test-37-24',
          type: 'sentence_building',
          question: 'Build: "The disciples followed him while praising"',
          correctAnswer: 'ⲛⲓⲙⲁⲑⲏⲧⲏⲥ ⲁⲩϣ ⲁϥⲛⲁϣ ⲉⲩⲡ̀ⲥⲉⲙⲏ',
          wordBank: ['ⲛⲓⲙⲁⲑⲏⲧⲏⲥ', 'ⲁⲩϣ', 'ⲁϥⲛⲁϣ', 'ⲉⲩⲡ̀ⲥⲉⲙⲏ'],
          explanation: 'ⲛⲓⲙⲁⲑⲏⲧⲏⲥ ⲁⲩϣ ⲁϥⲛⲁϣ ⲉⲩⲡ̀ⲥⲉⲙⲏ = the disciples followed him while praising'
        },
        {
          id: 'test-37-25',
          type: 'matching',
          question: 'Match complete circumstantial examples',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲁϥⲛⲟϫ ⲁϥϯ ⲉⲛⲟⲩⲗⲁϩⲟⲩ', english: 'He received and gave while we worked' },
            { coptic: 'ⲁⲩⲇⲓ̀ⲣⲉ ⲉⲛⲙⲟϣⲓ', english: 'They debated while we walked' },
            { coptic: 'ⲁⲓⲕⲗⲟⲡ ⲉⲛⲥⲱⲧⲙ', english: 'I was silent while we listened' },
            { coptic: 'ⲁϥⲛⲁϣ ⲉⲩⲙⲟϣⲓ ⲉⲫⲏⲣⲏ', english: 'He led them while they walked to the mountain' }
          ]
        }
      ]
};

export default unit37Test;
