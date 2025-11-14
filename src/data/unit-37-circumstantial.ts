import { Unit } from '../../types';

// UNIT 37: CIRCUMSTANTIAL CLAUSES
// Bohairic dialect - Subordinate clauses with ⲉ̀- prefix
// Advanced grammar: Essential for reading Biblical and liturgical Coptic

const unit37: Unit = {
  id: 'unit-37',
  title: 'Circumstantial Clauses',
  description: 'Master subordinate clauses: while/when doing, simultaneous actions',
  order: 37,
  color: '#00BCD4',
  lessons: [
    {
      id: 'lesson-37-1',
      unitId: 'unit-37',
      title: 'ⲉ̀- Prefix: "While/When Doing"',
      description: 'Learn circumstantial verb forms',
      order: 1,
      xpReward: 30,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-37-1-1',
          type: 'multiple_choice',
          question: 'What does the ⲉ̀- prefix indicate?',
          correctAnswer: 'Circumstantial: while/when doing',
          options: ['Circumstantial: while/when doing', 'Future tense', 'Past tense', 'Negation'],
          explanation: 'ⲉ̀- prefix creates circumstantial (subordinate) clauses meaning "while/when doing"'
        },
        {
          id: 'ex-37-1-2',
          type: 'matching',
          question: 'Match circumstantial prefixes',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲉⲓ-', english: 'while I (am/was)' },
            { coptic: 'ⲉⲕ-', english: 'while you-m (are/were)' },
            { coptic: 'ⲉⲣⲉ-', english: 'while you-f (are/were)' },
            { coptic: 'ⲉϥ-', english: 'while he (is/was)' }
          ]
        },
        {
          id: 'ex-37-1-3',
          type: 'translation',
          question: 'Translate: ⲉⲓⲙⲟϣⲓ',
          questionCoptic: 'ⲉⲓⲙⲟϣⲓ',
          correctAnswer: 'While I walk / When I was walking',
          options: ['While I walk / When I was walking', 'I walk', 'I walked', 'I will walk'],
          explanation: 'ⲉⲓⲙⲟϣⲓ = while/when I walk/am walking/was walking (circumstantial)'
        },
        {
          id: 'ex-37-1-4',
          type: 'matching',
          question: 'Match more circumstantial forms',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲉⲥ-', english: 'while she (is/was)' },
            { coptic: 'ⲉⲛ-', english: 'while we (are/were)' },
            { coptic: 'ⲉⲣⲉⲧⲉⲛ-', english: 'while you-pl (are/were)' },
            { coptic: 'ⲉⲩ-', english: 'while they (are/were)' }
          ]
        },
        {
          id: 'ex-37-1-5',
          type: 'fill_blank',
          question: 'Complete: ___ⲥⲁϫⲓ = while he speaks/was speaking',
          correctAnswer: 'ⲉϥ',
          options: ['ⲉϥ', 'ⲁϥ', 'ϥ', 'ⲛⲁϥ'],
          explanation: 'ⲉϥⲥⲁϫⲓ = while he speaks/is speaking/was speaking (circumstantial)'
        },
        {
          id: 'ex-37-1-6',
          type: 'sentence_building',
          question: 'Build: "while we were eating"',
          correctAnswer: 'ⲉⲛⲟⲩⲱⲙ',
          wordBank: ['ⲉⲛ', 'ⲟⲩⲱⲙ', 'ⲁⲛ', 'ⲧⲉⲛ'],
          explanation: 'ⲉⲛⲟⲩⲱⲙ = while we eat/are eating/were eating'
        },
        {
          id: 'ex-37-1-7',
          type: 'translation',
          question: 'Translate: ⲁⲓⲛⲁⲩ ⲉ̀ⲣⲟϥ ⲉϥⲙⲟϣⲓ',
          questionCoptic: 'ⲁⲓⲛⲁⲩ ⲉ̀ⲣⲟϥ ⲉϥⲙⲟϣⲓ',
          correctAnswer: 'I saw him while he was walking',
          options: ['I saw him while he was walking', 'I saw him walk', 'I see him walking', 'He saw me walking'],
          explanation: 'ⲁⲓⲛⲁⲩ ⲉ̀ⲣⲟϥ ⲉϥⲙⲟϣⲓ = I saw him while he was walking (main + circumstantial)'
        },
        {
          id: 'ex-37-1-8',
          type: 'multiple_choice',
          question: 'What is the structure of a circumstantial clause?',
          correctAnswer: 'ⲉ- + subject marker + infinitive',
          options: ['ⲉ- + subject marker + infinitive', 'ⲁ- + subject + verb', 'subject prefix + verb', 'ⲉ- + verb alone'],
          explanation: 'Circumstantial: ⲉ- (or ⲉ̀-) + subject marker (ⲓ, ⲕ, ϥ, etc.) + infinitive verb'
        }
      ]
    },
    {
      id: 'lesson-37-2',
      unitId: 'unit-37',
      title: 'Circumstantial with Nouns',
      description: 'Subordinate clauses with noun subjects',
      order: 2,
      xpReward: 30,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-37-2-1',
          type: 'multiple_choice',
          question: 'How to form circumstantial with a noun subject?',
          correctAnswer: 'ⲉⲣⲉ- + noun + infinitive',
          options: ['ⲉⲣⲉ- + noun + infinitive', 'ⲉ- + noun + verb', 'noun + ⲉ- + verb', 'ⲁⲣⲉ- + noun'],
          explanation: 'With noun subjects, use ⲉⲣⲉ- (or ⲉ̀-) + noun + infinitive'
        },
        {
          id: 'ex-37-2-2',
          type: 'translation',
          question: 'Translate: ⲉⲣⲉ ⲡⲓⲣⲱⲙⲓ ⲥⲁϫⲓ',
          questionCoptic: 'ⲉⲣⲉ ⲡⲓⲣⲱⲙⲓ ⲥⲁϫⲓ',
          correctAnswer: 'While the man speaks/was speaking',
          options: ['While the man speaks/was speaking', 'The man spoke', 'The man speaks', 'When the man will speak'],
          explanation: 'ⲉⲣⲉ ⲡⲓⲣⲱⲙⲓ ⲥⲁϫⲓ = while the man speaks/is speaking/was speaking'
        },
        {
          id: 'ex-37-2-3',
          type: 'matching',
          question: 'Match circumstantial with nouns',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲉⲣⲉ ⲧϩⲓⲙⲓ ⲙⲟϣⲓ', english: 'while the woman walks' },
            { coptic: 'ⲉⲣⲉ ⲛⲓⲣⲱⲙⲓ ⲟⲩⲱⲙ', english: 'while the men eat' },
            { coptic: 'ⲉⲣⲉ ⲡⲁⲥⲟⲛ ⲥⲱⲧⲙ', english: 'while my brother listens' },
            { coptic: 'ⲉⲣⲉ ⲫϯ Ϯ', english: 'while God gives' }
          ]
        },
        {
          id: 'ex-37-2-4',
          type: 'fill_blank',
          question: 'Complete: ___ ⲛⲓϣⲏⲣⲓ ϣⲗⲏⲗ = while the children pray',
          correctAnswer: 'ⲉⲣⲉ',
          options: ['ⲉⲣⲉ', 'ⲁⲣⲉ', 'ⲉ', 'ⲛⲁⲣⲉ'],
          explanation: 'ⲉⲣⲉ ⲛⲓϣⲏⲣⲓ ϣⲗⲏⲗ = while the children pray/are praying'
        },
        {
          id: 'ex-37-2-5',
          type: 'sentence_building',
          question: 'Build: "while the apostles were teaching"',
          correctAnswer: 'ⲉⲣⲉ ⲛⲓⲁ̀ⲡⲟⲥⲧⲟⲗⲟⲥ ϯⲥ̀ⲃⲱ',
          wordBank: ['ⲉⲣⲉ', 'ⲛⲓⲁ̀ⲡⲟⲥⲧⲟⲗⲟⲥ', 'ϯⲥ̀ⲃⲱ', 'ⲁⲣⲉ'],
          explanation: 'ⲉⲣⲉ ⲛⲓⲁ̀ⲡⲟⲥⲧⲟⲗⲟⲥ ϯⲥ̀ⲃⲱ = while the apostles teach/were teaching'
        },
        {
          id: 'ex-37-2-6',
          type: 'translation',
          question: 'Translate: ⲁⲓⲓ̀ ⲉⲣⲉ ⲡⲓⲣⲏ ϣⲁⲓ',
          questionCoptic: 'ⲁⲓⲓ̀ ⲉⲣⲉ ⲡⲓⲣⲏ ϣⲁⲓ',
          correctAnswer: 'I came while the sun was rising',
          options: ['I came while the sun was rising', 'I came when the sun rose', 'The sun rose when I came', 'I will come at sunrise'],
          explanation: 'ⲁⲓⲓ̀ ⲉⲣⲉ ⲡⲓⲣⲏ ϣⲁⲓ = I came while the sun was rising (ϣⲁⲓ = to rise)'
        },
        {
          id: 'ex-37-2-7',
          type: 'multiple_choice',
          question: 'Which is correct for "while Jesus was teaching"?',
          correctAnswer: 'ⲉⲣⲉ Ⲓⲏⲥⲟⲩⲥ ϯⲥ̀ⲃⲱ',
          options: ['ⲉⲣⲉ Ⲓⲏⲥⲟⲩⲥ ϯⲥ̀ⲃⲱ', 'ⲉϥϯⲥ̀ⲃⲱ ⲛ̀ϫⲉ Ⲓⲏⲥⲟⲩⲥ', 'ⲁϥϯⲥ̀ⲃⲱ ⲛ̀ϫⲉ Ⲓⲏⲥⲟⲩⲥ', 'ⲛⲁϥϯⲥ̀ⲃⲱ ⲛ̀ϫⲉ Ⲓⲏⲥⲟⲩⲥ'],
          explanation: 'ⲉⲣⲉ Ⲓⲏⲥⲟⲩⲥ ϯⲥ̀ⲃⲱ = while Jesus was teaching (circumstantial with noun)'
        },
        {
          id: 'ex-37-2-8',
          type: 'translation',
          question: 'Translate: ⲁⲩⲛⲁⲩ ⲉ̀ⲣⲟϥ ⲉⲣⲉ ⲛⲓⲙⲏϣ ⲙⲟϣⲓ ⲛ̀ⲥⲱϥ',
          questionCoptic: 'ⲁⲩⲛⲁⲩ ⲉ̀ⲣⲟϥ ⲉⲣⲉ ⲛⲓⲙⲏϣ ⲙⲟϣⲓ ⲛ̀ⲥⲱϥ',
          correctAnswer: 'They saw Him while the crowds were following Him',
          options: ['They saw Him while the crowds were following Him', 'They saw the crowds following', 'The crowds saw Him walking', 'He saw the crowds'],
          explanation: 'ⲁⲩⲛⲁⲩ ⲉ̀ⲣⲟϥ ⲉⲣⲉ ⲛⲓⲙⲏϣ ⲙⲟϣⲓ ⲛ̀ⲥⲱϥ = they saw Him while the crowds were following Him'
        }
      ]
    },
    {
      id: 'lesson-37-3',
      unitId: 'unit-37',
      title: 'Simultaneous Actions',
      description: 'Expressing two actions happening together',
      order: 3,
      xpReward: 35,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-37-3-1',
          type: 'translation',
          question: 'Translate: ⲁⲓⲥⲁϫⲓ ⲛⲉⲙⲁϥ ⲉⲓⲙⲟϣⲓ',
          questionCoptic: 'ⲁⲓⲥⲁϫⲓ ⲛⲉⲙⲁϥ ⲉⲓⲙⲟϣⲓ',
          correctAnswer: 'I spoke with him while walking',
          options: ['I spoke with him while walking', 'I spoke and walked', 'I will speak while walking', 'He spoke while I walked'],
          explanation: 'ⲁⲓⲥⲁϫⲓ ⲛⲉⲙⲁϥ ⲉⲓⲙⲟϣⲓ = I spoke with him while (I was) walking'
        },
        {
          id: 'ex-37-3-2',
          type: 'matching',
          question: 'Match simultaneous action expressions',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲁⲓⲟⲩⲱⲙ ⲉⲓⲱϣ', english: 'I ate while reading' },
            { coptic: 'ⲁϥⲥⲱⲧⲙ ⲉϥϩⲉⲙⲥⲓ', english: 'He listened while sitting' },
            { coptic: 'ⲁⲛⲥⲁϫⲓ ⲉⲛⲙⲟϣⲓ', english: 'We spoke while walking' },
            { coptic: 'ⲁⲥⲥ̀ϧⲁⲓ ⲉⲥⲥⲱⲧⲙ', english: 'She wrote while listening' }
          ]
        },
        {
          id: 'ex-37-3-3',
          type: 'fill_blank',
          question: 'Complete: ⲁⲓⲛⲁⲩ ⲉ̀ⲣⲟϥ ___ⲥⲁϫⲓ = I saw him while he was speaking',
          correctAnswer: 'ⲉϥ',
          options: ['ⲉϥ', 'ⲁϥ', 'ϥ', 'ⲛⲁϥ'],
          explanation: 'ⲁⲓⲛⲁⲩ ⲉ̀ⲣⲟϥ ⲉϥⲥⲁϫⲓ = I saw him while he was speaking'
        },
        {
          id: 'ex-37-3-4',
          type: 'sentence_building',
          question: 'Build: "They prayed while fasting"',
          correctAnswer: 'ⲁⲩϣⲗⲏⲗ ⲉⲩⲉⲣⲛⲏⲥⲧⲉⲩⲓⲛ',
          wordBank: ['ⲁⲩϣⲗⲏⲗ', 'ⲉⲩ', 'ⲉⲣⲛⲏⲥⲧⲉⲩⲓⲛ', 'ⲛⲁⲩ'],
          explanation: 'ⲁⲩϣⲗⲏⲗ ⲉⲩⲉⲣⲛⲏⲥⲧⲉⲩⲓⲛ = they prayed while fasting (ⲉⲣⲛⲏⲥⲧⲉⲩⲓⲛ = to fast)'
        },
        {
          id: 'ex-37-3-5',
          type: 'translation',
          question: 'Translate: ⲁϥϯⲥ̀ⲃⲱ ⲉⲣⲉ ⲛⲓⲙⲏϣ ⲥⲱⲧⲙ',
          questionCoptic: 'ⲁϥϯⲥ̀ⲃⲱ ⲉⲣⲉ ⲛⲓⲙⲏϣ ⲥⲱⲧⲙ',
          correctAnswer: 'He taught while the crowds were listening',
          options: ['He taught while the crowds were listening', 'He taught the listening crowds', 'The crowds listened to His teaching', 'He teaches and they listen'],
          explanation: 'ⲁϥϯⲥ̀ⲃⲱ ⲉⲣⲉ ⲛⲓⲙⲏϣ ⲥⲱⲧⲙ = he taught while the crowds were listening'
        },
        {
          id: 'ex-37-3-6',
          type: 'matching',
          question: 'Match complex simultaneity',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲉⲓⲙⲟϣⲓ ⲉⲓⲥⲁϫⲓ', english: 'while walking and speaking' },
            { coptic: 'ⲉϥⲱϣ ⲉϥⲥⲱⲧⲙ', english: 'while reading and listening' },
            { coptic: 'ⲉⲛⲟⲩⲱⲙ ⲉⲛⲥⲁϫⲓ', english: 'while eating and talking' },
            { coptic: 'ⲉⲩⲙⲟϣⲓ ⲉⲩϣⲗⲏⲗ', english: 'while walking and praying' }
          ]
        },
        {
          id: 'ex-37-3-7',
          type: 'translation',
          question: 'Translate: ⲁⲛⲓ̀ ⲉ̀ⲡⲉϥⲏⲓ ⲉⲣⲉ ⲫⲣⲏ ϩⲱⲧⲡ',
          questionCoptic: 'ⲁⲛⲓ̀ ⲉ̀ⲡⲉϥⲏⲓ ⲉⲣⲉ ⲫⲣⲏ ϩⲱⲧⲡ',
          correctAnswer: 'We came to his house while the sun was setting',
          options: ['We came to his house while the sun was setting', 'We came at sunset', 'The sun set at his house', 'We will come at sunset'],
          explanation: 'ⲁⲛⲓ̀ ⲉ̀ⲡⲉϥⲏⲓ ⲉⲣⲉ ⲫⲣⲏ ϩⲱⲧⲡ = we came to his house while the sun was setting'
        },
        {
          id: 'ex-37-3-8',
          type: 'multiple_choice',
          question: 'Circumstantial clauses are most common in:',
          correctAnswer: 'Biblical and narrative texts',
          options: ['Biblical and narrative texts', 'Simple conversations', 'Commands', 'Questions'],
          explanation: 'Circumstantial clauses (ⲉ- prefix) are very common in Biblical Coptic and narrative literature'
        }
      ]
    },
    {
      id: 'lesson-37-4',
      unitId: 'unit-37',
      title: 'Complex Circumstantial Patterns',
      description: 'Advanced usage in biblical contexts',
      order: 4,
      xpReward: 35,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-37-4-1',
          type: 'translation',
          question: 'Translate: ⲁⲓⲛⲁⲩ ⲉ̀ Ⲓⲏⲥⲟⲩⲥ ⲉϥⲙⲟϣⲓ ϩⲓϫⲉⲛ ⲫⲓⲟⲙ',
          questionCoptic: 'ⲁⲓⲛⲁⲩ ⲉ̀ Ⲓⲏⲥⲟⲩⲥ ⲉϥⲙⲟϣⲓ ϩⲓϫⲉⲛ ⲫⲓⲟⲙ',
          correctAnswer: 'I saw Jesus while He was walking on the sea',
          options: ['I saw Jesus while He was walking on the sea', 'Jesus saw me on the sea', 'I saw Jesus walk on the sea', 'I will see Jesus walking'],
          explanation: 'ⲁⲓⲛⲁⲩ ⲉ̀ Ⲓⲏⲥⲟⲩⲥ ⲉϥⲙⲟϣⲓ ϩⲓϫⲉⲛ ⲫⲓⲟⲙ = I saw Jesus while He was walking on the sea'
        },
        {
          id: 'ex-37-4-2',
          type: 'sentence_building',
          question: 'Build: "while He was saying these things"',
          correctAnswer: 'ⲉϥϫⲱ ⲙ̀ⲡⲁⲓ',
          wordBank: ['ⲉϥ', 'ϫⲱ', 'ⲙ̀', 'ⲡⲁⲓ'],
          explanation: 'ⲉϥϫⲱ ⲙ̀ⲡⲁⲓ = while He was saying these things (biblical idiom)'
        },
        {
          id: 'ex-37-4-3',
          type: 'translation',
          question: 'Translate: ⲁⲥⲓ̀ ⲛ̀ϫⲉ ϯⲙⲏϣ ⲉⲩⲥⲱⲧⲙ ⲉ̀ⲡⲉϥⲥⲁϫⲓ',
          questionCoptic: 'ⲁⲥⲓ̀ ⲛ̀ϫⲉ ϯⲙⲏϣ ⲉⲩⲥⲱⲧⲙ ⲉ̀ⲡⲉϥⲥⲁϫⲓ',
          correctAnswer: 'The crowd came while listening to His word',
          options: ['The crowd came while listening to His word', 'The crowd listened to His word', 'They came to hear His word', 'The crowd heard Him speak'],
          explanation: 'ⲁⲥⲓ̀ ⲛ̀ϫⲉ ϯⲙⲏϣ ⲉⲩⲥⲱⲧⲙ ⲉ̀ⲡⲉϥⲥⲁϫⲓ = the crowd came while listening to His word'
        },
        {
          id: 'ex-37-4-4',
          type: 'fill_blank',
          question: 'Complete: ⲁⲩⲙⲟⲩϯ ⲉ̀ⲣⲟϥ ___ Ⲡϭⲟⲓⲥ = They called Him "Lord"',
          correctAnswer: 'ϫⲉ',
          options: ['ϫⲉ', 'ⲉ̀', 'ⲉⲣⲉ', 'ϧⲉⲛ'],
          explanation: 'ⲁⲩⲙⲟⲩϯ ⲉ̀ⲣⲟϥ ϫⲉ Ⲡϭⲟⲓⲥ = they called Him "Lord" (ϫⲉ introduces direct speech)'
        },
        {
          id: 'ex-37-4-5',
          type: 'matching',
          question: 'Match biblical circumstantial expressions',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲉϥϯⲥ̀ⲃⲱ ⲛⲱⲟⲩ', english: 'while teaching them' },
            { coptic: 'ⲉⲩⲙⲟⲩϯ ⲉ̀ⲣⲟϥ', english: 'while calling Him' },
            { coptic: 'ⲉⲣⲉ ⲡⲓⲙⲏϣ ⲥⲱⲧⲙ', english: 'while the crowd listens' },
            { coptic: 'ⲉϥⲉⲣⲟⲩⲱⲓⲛⲓ', english: 'while He answers' }
          ]
        },
        {
          id: 'ex-37-4-6',
          type: 'translation',
          question: 'Translate: ⲁϥⲥⲁϫⲓ ⲛⲉⲙⲱⲟⲩ ⲉϥϯⲥ̀ⲃⲱ ⲛⲱⲟⲩ',
          questionCoptic: 'ⲁϥⲥⲁϫⲓ ⲛⲉⲙⲱⲟⲩ ⲉϥϯⲥ̀ⲃⲱ ⲛⲱⲟⲩ',
          correctAnswer: 'He spoke with them while teaching them',
          options: ['He spoke with them while teaching them', 'He spoke and taught them', 'He taught them by speaking', 'They spoke while He taught'],
          explanation: 'ⲁϥⲥⲁϫⲓ ⲛⲉⲙⲱⲟⲩ ⲉϥϯⲥ̀ⲃⲱ ⲛⲱⲟⲩ = he spoke with them while teaching them'
        },
        {
          id: 'ex-37-4-7',
          type: 'multiple_choice',
          question: 'In "ⲁϥⲓ̀ ⲉⲩⲙⲟⲩϯ ⲉ̀ⲣⲟϥ ϫⲉ Ⲡⲣⲉϥϯⲛⲟⲩϫⲉ", what does ⲉⲩⲙⲟⲩϯ ⲉ̀ⲣⲟϥ mean?',
          correctAnswer: 'while they were calling Him',
          options: ['while they were calling Him', 'they called Him', 'calling Him', 'to call Him'],
          explanation: 'ⲉⲩⲙⲟⲩϯ ⲉ̀ⲣⲟϥ = while they were calling Him (circumstantial clause)'
        },
        {
          id: 'ex-37-4-8',
          type: 'translation',
          question: 'Translate: ⲁϥⲉⲣⲟⲩⲱⲓⲛⲓ ⲉϥϫⲱ ⲙ̀ⲙⲟⲥ ⲛⲱⲟⲩ',
          questionCoptic: 'ⲁϥⲉⲣⲟⲩⲱⲓⲛⲓ ⲉϥϫⲱ ⲙ̀ⲙⲟⲥ ⲛⲱⲟⲩ',
          correctAnswer: 'He answered while saying it to them',
          options: ['He answered while saying it to them', 'He answered and said to them', 'He said it answering them', 'He will answer them'],
          explanation: 'ⲁϥⲉⲣⲟⲩⲱⲓⲛⲓ ⲉϥϫⲱ ⲙ̀ⲙⲟⲥ ⲛⲱⲟⲩ = he answered while saying it to them (biblical style)'
        }
      ]
    }
  ]
};

export default unit37;
