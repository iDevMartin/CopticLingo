import { Lesson } from '../../types';

// TEST FILE FOR UNIT 23: TEMPORAL CLAUSES
// Comprehensive test exercises covering all 4 lessons
// 32 exercises total - testing when, while, before, after, until constructions

const unit23Test: Lesson = {
id: 'lesson-23-test',
      unitId: 'unit-23',
      title: 'Temporal Clauses Comprehensive Test',
      description: 'Test all temporal relationships and constructions',
      order: 1,
      xpReward: 100,
      isLocked: true,
      completed: false,
      exercises: [
        // When clauses (ϩⲟⲧⲉ and ⲉⲧⲁ-) tests
        {
          id: 'test-23-1',
          type: 'translation',
          question: 'Translate: ϩⲟⲧⲉ ⲁⲓⲛⲁⲩ ⲉⲣⲟϥ',
          questionCoptic: 'ϩⲟⲧⲉ ⲁⲓⲛⲁⲩ ⲉⲣⲟϥ',
          correctAnswer: 'When I saw him',
          options: ['When I saw him', 'If I saw him', 'Because I saw him', 'After I saw him'],
          explanation: 'ϩⲟⲧⲉ (hote) = when + ⲁⲓⲛⲁⲩ ⲉⲣⲟϥ = I saw him'
        },
        {
          id: 'test-23-2',
          type: 'multiple_choice',
          question: 'What does ϩⲟⲧⲉ mean?',
          questionCoptic: 'ϩⲟⲧⲉ',
          correctAnswer: 'when',
          options: ['when', 'if', 'because', 'while'],
          explanation: 'ϩⲟⲧⲉ (hote) is the basic word for "when" introducing temporal clauses'
        },
        {
          id: 'test-23-3',
          type: 'translation',
          question: 'Translate: ⲉⲧⲁϥⲓ̀ ⲁϥⲣⲁϣⲓ',
          questionCoptic: 'ⲉⲧⲁϥⲓ̀ ⲁϥⲣⲁϣⲓ',
          correctAnswer: 'When he came, he rejoiced',
          options: ['When he came, he rejoiced', 'If he comes, he will rejoice', 'He came and rejoiced', 'After coming, he rejoiced'],
          explanation: 'ⲉⲧⲁϥⲓ̀ = when he came + ⲁϥⲣⲁϣⲓ = he rejoiced (Bohairic ⲓ̀ not ⲉⲓ!)'
        },
        {
          id: 'test-23-4',
          type: 'fill_blank',
          question: 'Complete: ___ ⲁϥⲥⲱⲧⲙ ⲁϥⲛⲁϩϯ = When he heard, he believed',
          correctAnswer: 'ⲉⲧⲁϥⲥⲱⲧⲙ',
          options: ['ⲉⲧⲁϥⲥⲱⲧⲙ', 'ϩⲟⲧⲉ ⲁϥⲥⲱⲧⲙ', 'ⲁϥⲥⲱⲧⲙ', 'ⲕⲁⲧⲁ ⲁϥⲥⲱⲧⲙ'],
          explanation: 'ⲉⲧⲁϥⲥⲱⲧⲙ = when he heard (ⲉⲧⲁ- + past tense)'
        },
        {
          id: 'test-23-5',
          type: 'sentence_building',
          question: 'Build: "When you go, tell him"',
          correctAnswer: 'ϩⲟⲧⲉ ⲕϣⲁⲛϣⲉⲛⲓ ⲁϫⲓⲥ ⲛⲁϥ',
          wordBank: ['ϩⲟⲧⲉ', 'ⲕϣⲁⲛϣⲉⲛⲓ', 'ⲁϫⲓⲥ', 'ⲛⲁϥ'],
          explanation: 'ϩⲟⲧⲉ (when) + ⲕϣⲁⲛϣⲉⲛⲓ (you go, subjunctive) + ⲁϫⲓⲥ ⲛⲁϥ (tell him) - Bohairic ϣⲉⲛⲓ not ⲃⲱⲕ!'
        },
        {
          id: 'test-23-6',
          type: 'multiple_choice',
          question: 'ⲉⲧⲁ- is used with which tense?',
          correctAnswer: 'past tense',
          options: ['past tense', 'present tense', 'future tense', 'imperative'],
          explanation: 'ⲉⲧⲁ- combines "when" with past tense marker to mean "when (past)"'
        },
        {
          id: 'test-23-7',
          type: 'matching',
          question: 'Match temporal words',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ϩⲟⲧⲉ', english: 'when' },
            { coptic: 'ⲉⲧⲁ-', english: 'when (past)' },
            { coptic: 'ⲉϣⲱⲡ', english: 'if/when' },
            { coptic: 'ⲫⲟⲟⲩ', english: 'day/time' }
          ]
        },
        {
          id: 'test-23-8',
          type: 'translation',
          question: 'Translate: ϩⲟⲧⲉ ⲧⲉⲛϣⲁⲛϣⲉⲛⲓ ⲉϧⲟⲩⲛ ⲉⲡⲓⲏⲓ',
          questionCoptic: 'ϩⲟⲧⲉ ⲧⲉⲛϣⲁⲛϣⲉⲛⲓ ⲉϧⲟⲩⲛ ⲉⲡⲓⲏⲓ',
          correctAnswer: 'When we go into the house',
          options: ['When we go into the house', 'If we enter the house', 'We go into the house', 'Before we enter the house'],
          explanation: 'ϩⲟⲧⲉ ⲧⲉⲛϣⲁⲛϣⲉⲛⲓ = when we go + ⲉϧⲟⲩⲛ ⲉⲡⲓⲏⲓ = into the house (Bohairic ϣⲉⲛⲓ not ⲃⲱⲕ!)'
        },

        // While clauses (ϧⲉⲛ and ⲉⲣⲉ-) tests
        {
          id: 'test-23-9',
          type: 'translation',
          question: 'Translate: ϧⲉⲛ ⲑⲣⲓⲙⲟϣⲓ',
          questionCoptic: 'ϧⲉⲛ ⲑⲣⲓⲙⲟϣⲓ',
          correctAnswer: 'While I walk',
          options: ['While I walk', 'When I walk', 'As I walk', 'All of the above'],
          explanation: 'ϧⲉⲛ = while/in + ⲑⲣⲓⲙⲟϣⲓ = my walking (infinitive construction) - Bohairic ⲙⲟϣⲓ not ⲙⲟⲟϣⲉ!'
        },
        {
          id: 'test-23-10',
          type: 'multiple_choice',
          question: 'What does ϧⲉⲛ mean in temporal clauses?',
          correctAnswer: 'while/during',
          options: ['while/during', 'before', 'after', 'until'],
          explanation: 'ϧⲉⲛ (khen) means "in" but with infinitives expresses "while/during"'
        },
        {
          id: 'test-23-11',
          type: 'translation',
          question: 'Translate: ⲉⲣⲉϥⲥⲁϫⲓ ⲁⲓⲛⲁⲩ ⲉⲣⲟϥ',
          questionCoptic: 'ⲉⲣⲉϥⲥⲁϫⲓ ⲁⲓⲛⲁⲩ ⲉⲣⲟϥ',
          correctAnswer: 'While he was speaking, I saw him',
          options: ['While he was speaking, I saw him', 'When he spoke, I saw him', 'He spoke and I saw him', 'After he spoke, I saw him'],
          explanation: 'ⲉⲣⲉϥⲥⲁϫⲓ = while he speaks/was speaking + ⲁⲓⲛⲁⲩ ⲉⲣⲟϥ = I saw him'
        },
        {
          id: 'test-23-12',
          type: 'fill_blank',
          question: 'Complete: ϧⲉⲛ ⲑⲣⲉⲛ___ ⲙⲫϯ = While we love God',
          correctAnswer: 'ⲙⲉⲛⲣⲉ',
          options: ['ⲙⲉⲛⲣⲉ', 'ⲙⲉⲣⲓ', 'ⲙⲁⲓ', 'ⲛⲁϩϯ'],
          explanation: 'ⲙⲉⲛⲣⲉ = love (Bohairic not ⲙⲉⲣⲓ!), ϧⲉⲛ ⲑⲣⲉⲛⲙⲉⲛⲣⲉ = while we love'
        },
        {
          id: 'test-23-13',
          type: 'sentence_building',
          question: 'Build: "While they were eating"',
          correctAnswer: 'ⲉⲩⲟⲩⲱⲙ',
          wordBank: ['ⲉⲩ', 'ⲟⲩⲱⲙ', 'ⲛ', 'ⲁⲩ'],
          explanation: 'ⲉⲩⲟⲩⲱⲙ = while they eat/were eating (circumstantial present)'
        },
        {
          id: 'test-23-14',
          type: 'matching',
          question: 'Match while/during expressions',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ϧⲉⲛ', english: 'while/during' },
            { coptic: 'ⲉⲣⲉ-', english: 'while (with verb)' },
            { coptic: 'ⲕⲁⲧⲁ', english: 'according to/during' },
            { coptic: 'ⲙⲫⲣⲏϯ', english: 'like/as' }
          ]
        },
        {
          id: 'test-23-15',
          type: 'translation',
          question: 'Translate: ⲉⲩⲥⲙⲟⲩ ⲉⲫϯ ϧⲉⲛ ⲡⲓⲏⲓ',
          questionCoptic: 'ⲉⲩⲥⲙⲟⲩ ⲉⲫϯ ϧⲉⲛ ⲡⲓⲏⲓ',
          correctAnswer: 'While they bless God in the house',
          options: ['While they bless God in the house', 'They bless God in the house', 'When they blessed God in the house', 'If they bless God in the house'],
          explanation: 'ⲉⲩⲥⲙⲟⲩ = while they bless + ⲉⲫϯ = God + ϧⲉⲛ ⲡⲓⲏⲓ = in the house (Bohairic ⲫϯ not ⲫⲛⲟⲩϯ!)'
        },
        {
          id: 'test-23-16',
          type: 'multiple_choice',
          question: 'How do you say "while I am writing"?',
          correctAnswer: 'ϧⲉⲛ ⲑⲣⲓⲥ̀ϧⲁⲓ',
          options: ['ϧⲉⲛ ⲑⲣⲓⲥ̀ϧⲁⲓ', 'ⲉϯⲥ̀ϧⲁⲓ', 'ⲁⲓⲥ̀ϧⲁⲓ', 'ϩⲟⲧⲉ ϯⲥ̀ϧⲁⲓ'],
          explanation: 'ϧⲉⲛ ⲑⲣⲓⲥ̀ϧⲁⲓ = while my writing (Bohairic ⲥ̀ϧⲁⲓ not ⲥϩⲁⲓ!)'
        },

        // Before and After (ⲙⲡⲁⲧⲉ and ⲙⲉⲛⲉⲛⲥⲁ) tests
        {
          id: 'test-23-17',
          type: 'translation',
          question: 'Translate: ⲙⲡⲁⲧⲉϥⲓ̀',
          questionCoptic: 'ⲙⲡⲁⲧⲉϥⲓ̀',
          correctAnswer: 'Before he came',
          options: ['Before he came', 'After he came', 'When he came', 'Until he came'],
          explanation: 'ⲙⲡⲁⲧⲉ- = before (negative of "not yet") + ϥⲓ̀ = he came (Bohairic ⲓ̀ not ⲉⲓ!)'
        },
        {
          id: 'test-23-18',
          type: 'multiple_choice',
          question: 'What does ⲙⲡⲁⲧⲉ- mean?',
          questionCoptic: 'ⲙⲡⲁⲧⲉ-',
          correctAnswer: 'before (not yet)',
          options: ['before (not yet)', 'after', 'while', 'until'],
          explanation: 'ⲙⲡⲁⲧⲉ- literally means "not yet" and introduces "before" clauses'
        },
        {
          id: 'test-23-19',
          type: 'translation',
          question: 'Translate: ⲙⲉⲛⲉⲛⲥⲁ ⲑⲣⲓⲟⲩⲱⲙ',
          questionCoptic: 'ⲙⲉⲛⲉⲛⲥⲁ ⲑⲣⲓⲟⲩⲱⲙ',
          correctAnswer: 'After I eat',
          options: ['After I eat', 'Before I eat', 'While I eat', 'When I eat'],
          explanation: 'ⲙⲉⲛⲉⲛⲥⲁ = after + ⲑⲣⲓⲟⲩⲱⲙ = my eating (infinitive)'
        },
        {
          id: 'test-23-20',
          type: 'fill_blank',
          question: 'Complete: ___ ⲑⲣⲉϥⲥⲱⲧⲙ ⲁϥⲛⲁϩϯ = After hearing, he believed',
          correctAnswer: 'ⲙⲉⲛⲉⲛⲥⲁ',
          options: ['ⲙⲉⲛⲉⲛⲥⲁ', 'ⲙⲡⲁⲧⲉ', 'ϩⲟⲧⲉ', 'ϧⲉⲛ'],
          explanation: 'ⲙⲉⲛⲉⲛⲥⲁ (menensa) = after'
        },
        {
          id: 'test-23-21',
          type: 'sentence_building',
          question: 'Build: "Before you go"',
          correctAnswer: 'ⲙⲡⲁⲧⲉⲕϣⲉⲛⲓ',
          wordBank: ['ⲙⲡⲁⲧⲉ', 'ⲕ', 'ϣⲉⲛⲓ', 'ⲃⲱⲕ'],
          explanation: 'ⲙⲡⲁⲧⲉⲕϣⲉⲛⲓ = before you go (Bohairic ϣⲉⲛⲓ not ⲃⲱⲕ!)'
        },
        {
          id: 'test-23-22',
          type: 'matching',
          question: 'Match before/after terms',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲙⲡⲁⲧⲉ-', english: 'before' },
            { coptic: 'ⲙⲉⲛⲉⲛⲥⲁ', english: 'after' },
            { coptic: 'ⲥⲁ', english: 'after (short)' },
            { coptic: 'ϩⲁ', english: 'under/after' }
          ]
        },
        {
          id: 'test-23-23',
          type: 'translation',
          question: 'Translate: ⲙⲡⲁⲧⲉⲛϣⲉⲛⲓ ⲉⲡⲓⲏⲓ ⲁⲛⲥ̀ϧⲁⲓ',
          questionCoptic: 'ⲙⲡⲁⲧⲉⲛϣⲉⲛⲓ ⲉⲡⲓⲏⲓ ⲁⲛⲥ̀ϧⲁⲓ',
          correctAnswer: 'Before we went to the house, we wrote',
          options: ['Before we went to the house, we wrote', 'After we went to the house, we wrote', 'When we go to the house, we write', 'While going to the house, we wrote'],
          explanation: 'ⲙⲡⲁⲧⲉⲛϣⲉⲛⲓ = before we went + ⲉⲡⲓⲏⲓ = to the house + ⲁⲛⲥ̀ϧⲁⲓ = we wrote (Bohairic: ϣⲉⲛⲓ not ⲃⲱⲕ, ⲥ̀ϧⲁⲓ not ⲥϩⲁⲓ!)'
        },

        // Until clauses (ϣⲁⲧⲉ) tests
        {
          id: 'test-23-24',
          type: 'translation',
          question: 'Translate: ϣⲁⲧⲉϥⲓ̀',
          questionCoptic: 'ϣⲁⲧⲉϥⲓ̀',
          correctAnswer: 'Until he comes',
          options: ['Until he comes', 'Before he comes', 'After he comes', 'When he comes'],
          explanation: 'ϣⲁⲧⲉ- = until + ϥⲓ̀ = he comes (Bohairic ⲓ̀ not ⲉⲓ!)'
        },
        {
          id: 'test-23-25',
          type: 'multiple_choice',
          question: 'What does ϣⲁⲧⲉ- mean?',
          questionCoptic: 'ϣⲁⲧⲉ-',
          correctAnswer: 'until',
          options: ['until', 'before', 'after', 'while'],
          explanation: 'ϣⲁⲧⲉ- (shate) means "until" and introduces temporal limit clauses'
        },
        {
          id: 'test-23-26',
          type: 'translation',
          question: 'Translate: ⲙⲁϣⲉⲛⲱⲧⲉⲛ ϣⲁⲧⲉⲧⲉⲛⲧⲁϩⲟ',
          questionCoptic: 'ⲙⲁϣⲉⲛⲱⲧⲉⲛ ϣⲁⲧⲉⲧⲉⲛⲧⲁϩⲟ',
          correctAnswer: 'Go until you arrive',
          options: ['Go until you arrive', 'Go before you arrive', 'Go after you arrive', 'Go when you arrive'],
          explanation: 'ⲙⲁϣⲉⲛⲱⲧⲉⲛ = go (imperative) + ϣⲁⲧⲉⲧⲉⲛⲧⲁϩⲟ = until you arrive (Bohairic ϣⲉⲛⲓ not ⲃⲱⲕ!)'
        },
        {
          id: 'test-23-27',
          type: 'fill_blank',
          question: 'Complete: ϯⲛⲁϣⲱⲡⲓ ⲛⲉⲙⲱⲧⲉⲛ ___ ϯⲥⲩⲛⲧⲉⲗⲓⲁ = I will be with you until the end',
          correctAnswer: 'ϣⲁ',
          options: ['ϣⲁ', 'ⲙⲉⲛⲉⲛⲥⲁ', 'ⲙⲡⲁⲧⲉ', 'ϩⲟⲧⲉ'],
          explanation: 'ϣⲁ (sha) = until (shorter form before nouns)'
        },
        {
          id: 'test-23-28',
          type: 'sentence_building',
          question: 'Build: "Wait until I come"',
          correctAnswer: 'ϫⲟⲩϣⲧ ϣⲁϯⲓ̀',
          wordBank: ['ϫⲟⲩϣⲧ', 'ϣⲁ', 'ϯ', 'ⲓ̀'],
          explanation: 'ϫⲟⲩϣⲧ (wait) + ϣⲁϯⲓ̀ (until I come) - Bohairic ⲓ̀ not ⲉⲓ!'
        },
        {
          id: 'test-23-29',
          type: 'matching',
          question: 'Match temporal limit terms',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ϣⲁⲧⲉ-', english: 'until' },
            { coptic: 'ϣⲁ', english: 'until/to' },
            { coptic: 'ⲉⲱⲥ', english: 'until (Greek)' },
            { coptic: 'ϧⲉⲛ', english: 'in/during' }
          ]
        },
        {
          id: 'test-23-30',
          type: 'translation',
          question: 'Translate: ϣⲁⲧⲉϥⲛⲁⲩ ⲉⲡⲉϥⲓⲱⲧ',
          questionCoptic: 'ϣⲁⲧⲉϥⲛⲁⲩ ⲉⲡⲉϥⲓⲱⲧ',
          correctAnswer: 'Until he sees his father',
          options: ['Until he sees his father', 'Before he sees his father', 'When he sees his father', 'After he sees his father'],
          explanation: 'ϣⲁⲧⲉϥⲛⲁⲩ = until he sees + ⲉⲡⲉϥⲓⲱⲧ = his father'
        },
        {
          id: 'test-23-31',
          type: 'multiple_choice',
          question: 'How do you say "until they hear"?',
          correctAnswer: 'ϣⲁⲧⲟⲩⲥⲱⲧⲙ',
          options: ['ϣⲁⲧⲟⲩⲥⲱⲧⲙ', 'ⲙⲡⲁⲧⲟⲩⲥⲱⲧⲙ', 'ⲉⲧⲁⲩⲥⲱⲧⲙ', 'ⲙⲉⲛⲉⲛⲥⲁ ⲑⲣⲟⲩⲥⲱⲧⲙ'],
          explanation: 'ϣⲁⲧⲟⲩⲥⲱⲧⲙ = until they hear (ϣⲁⲧⲉ- + subjunctive)'
        },
        {
          id: 'test-23-32',
          type: 'translation',
          question: 'Translate: ⲉⲛⲉ ⲙ̀ⲡⲉⲛⲥⲱⲟⲩⲛ ⲡⲓⲭⲓⲗⲓⲁⲍ ⲛⲁⲛⲁϣⲉⲛⲓ ϣⲁⲧⲉⲛⲧⲁⲛϩⲩ ⲙⲫϯ',
          questionCoptic: 'ⲉⲛⲉ ⲙ̀ⲡⲉⲛⲥⲱⲟⲩⲛ ⲡⲓⲭⲓⲗⲓⲁⲍ ⲛⲁⲛⲁϣⲉⲛⲓ ϣⲁⲧⲉⲛⲧⲁⲛϩⲩ ⲙⲫϯ',
          correctAnswer: 'If we had known the truth, we would have gone until we find God',
          options: ['If we had known the truth, we would have gone until we find God', 'We knew the truth and went to find God', 'When we know the truth, we go to God', 'If the truth taught us, we go to God'],
          explanation: 'Complex temporal clause combining ⲉⲛⲉ (if contrary-to-fact) + ϣⲁⲧⲉ (until) - Bohairic: ⲣϣⲉⲛⲓ not ⲃⲱⲕ, ⲫϯ not ⲫⲛⲟⲩϯ!'
        }
      ]
};

export default unit23Test;
