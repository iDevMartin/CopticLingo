import { Lesson } from '../../types';

// UNIT 32 TEST: TIME EXPRESSIONS (Days, Months, Seasons)
// Comprehensive test covering all 4 lessons in Unit 32
// Tests temporal vocabulary and time expressions

const unit32Test: Lesson = {
  id: 'test-32',
  unitId: 'unit-32',
  title: 'Unit 32 Test: Time Expressions',
  description: 'Comprehensive test of days, months, seasons, and temporal expressions',
  order: 5,
  xpReward: 100,
  isLocked: true,
  completed: false,
  exercises: [
    {
      id: 'test-32-1',
      type: 'multiple_choice',
      question: 'What is "Sunday" in Coptic?',
      correctAnswer: 'ⲡⲓⲕⲩⲣⲓⲁⲕⲏ',
      options: ['ⲡⲓⲕⲩⲣⲓⲁⲕⲏ', 'ⲡⲓⲥⲁⲃⲃⲁⲧⲟⲛ', 'ⲡⲓⲙⲁϩⲟⲩⲁⲓ', 'ⲡⲓⲉϩⲟⲟⲩ'],
      explanation: 'ⲡⲓⲕⲩⲣⲓⲁⲕⲏ = Sunday ("the Lord\'s day")'
    },
    {
      id: 'test-32-2',
      type: 'matching',
      question: 'Match days of the week',
      correctAnswer: 'matched',
      pairs: [
        { coptic: 'ⲡⲓⲕⲩⲣⲓⲁⲕⲏ', english: 'Sunday' },
        { coptic: 'ⲡⲓⲙⲁϩⲟⲩⲁⲓ', english: 'Monday' },
        { coptic: 'ⲡⲓⲙⲁϩⲥⲛⲁⲩ', english: 'Tuesday' },
        { coptic: 'ⲡⲓⲙⲁϩϣⲟⲙⲧ', english: 'Wednesday' }
      ]
    },
    {
      id: 'test-32-3',
      type: 'matching',
      question: 'Match more days',
      correctAnswer: 'matched',
      pairs: [
        { coptic: 'ⲡⲓⲙⲁϩϥⲧⲟⲟⲩ', english: 'Thursday' },
        { coptic: 'ⲡⲓⲙⲁϩϯⲟⲩ', english: 'Friday' },
        { coptic: 'ⲡⲓⲙⲁϩⲥⲟⲟⲩ', english: 'Saturday' },
        { coptic: 'ⲡⲓⲥⲁⲃⲃⲁⲧⲟⲛ', english: 'Sabbath' }
      ]
    },
    {
      id: 'test-32-4',
      type: 'translation',
      question: 'Translate: ⲙⲡⲓⲙⲁϩⲥⲛⲁⲩ',
      questionCoptic: 'ⲙⲡⲓⲙⲁϩⲥⲛⲁⲩ',
      correctAnswer: 'On Tuesday',
      options: ['On Tuesday', 'On Monday', 'On Wednesday', 'The second day'],
      explanation: 'ⲙ- = on/in + the 2nd day'
    },
    {
      id: 'test-32-5',
      type: 'sentence_building',
      question: 'Build: "I go to church on Sunday"',
      correctAnswer: 'ϯϣⲉⲛⲓ ⲉϯⲉⲕⲕⲗⲏⲥⲓⲁ ⲙⲡⲓⲕⲩⲣⲓⲁⲕⲏ',
      wordBank: ['ϯϣⲉⲛⲓ', 'ⲉϯⲉⲕⲕⲗⲏⲥⲓⲁ', 'ⲙⲡⲓⲕⲩⲣⲓⲁⲕⲏ', 'ⲙⲡⲓⲙⲁϩⲟⲩⲁⲓ'],
      explanation: 'I go + to church + on Sunday'
    },
    {
      id: 'test-32-6',
      type: 'matching',
      question: 'Match Coptic months (1-4)',
      correctAnswer: 'matched',
      pairs: [
        { coptic: 'Ⲑⲱⲟⲩⲧ', english: 'Thout (Sept-Oct)' },
        { coptic: 'Ⲡⲁⲱⲡⲓ', english: 'Paopi (Oct-Nov)' },
        { coptic: 'Ϩⲁⲑⲱⲣ', english: 'Hathor (Nov-Dec)' },
        { coptic: 'Ⲭⲟⲓⲁⲕ', english: 'Kiahk (Dec-Jan)' }
      ]
    },
    {
      id: 'test-32-7',
      type: 'matching',
      question: 'Match Coptic months (5-8)',
      correctAnswer: 'matched',
      pairs: [
        { coptic: 'Ⲧⲱⲃⲓ', english: 'Tobi (Jan-Feb)' },
        { coptic: 'Ⲙⲉϣⲓⲣ', english: 'Meshir (Feb-Mar)' },
        { coptic: 'Ⲡⲁⲣⲉⲙϩⲁⲧ', english: 'Paremhat (Mar-Apr)' },
        { coptic: 'Ⲫⲁⲣⲙⲟⲩⲑⲓ', english: 'Pharmouthi (Apr-May)' }
      ]
    },
    {
      id: 'test-32-8',
      type: 'matching',
      question: 'Match Coptic months (9-12)',
      correctAnswer: 'matched',
      pairs: [
        { coptic: 'Ⲡⲁϣⲟⲛⲥ', english: 'Pashons (May-Jun)' },
        { coptic: 'Ⲡⲁⲱⲛⲓ', english: 'Paoni (Jun-Jul)' },
        { coptic: 'Ⲉⲡⲏⲡ', english: 'Epip (Jul-Aug)' },
        { coptic: 'Ⲙⲉⲥⲱⲣⲏ', english: 'Mesori (Aug-Sept)' }
      ]
    },
    {
      id: 'test-32-9',
      type: 'translation',
      question: 'Translate: ϧⲉⲛ Ⲑⲱⲟⲩⲧ',
      questionCoptic: 'ϧⲉⲛ Ⲑⲱⲟⲩⲧ',
      correctAnswer: 'In Thout',
      options: ['In Thout', 'On Thout', 'From Thout', 'About Thout'],
      explanation: 'ϧⲉⲛ = in (the month of) Thout'
    },
    {
      id: 'test-32-10',
      type: 'multiple_choice',
      question: 'What is "hour" in Coptic?',
      correctAnswer: 'ⲁϫⲡ',
      options: ['ⲁϫⲡ', 'ⲙⲓⲛⲓⲧ', 'ⲉϩⲟⲟⲩ', 'ⲟⲩⲛⲟⲩ'],
      explanation: 'ⲁϫⲡ = hour'
    },
    {
      id: 'test-32-11',
      type: 'translation',
      question: 'Translate: ϯⲙⲁϩⲥⲛⲁⲩ ⲛ̀ⲁϫⲡ',
      questionCoptic: 'ϯⲙⲁϩⲥⲛⲁⲩ ⲛ̀ⲁϫⲡ',
      correctAnswer: 'The second hour / 2 o\'clock',
      options: ['The second hour / 2 o\'clock', 'Two hours', 'The third hour', 'Second minute'],
      explanation: 'The (second) hour'
    },
    {
      id: 'test-32-12',
      type: 'sentence_building',
      question: 'Build: "What time is it?"',
      correctAnswer: 'ⲉⲣⲉ ⲟⲩⲏⲣ ⲛ̀ⲁϫⲡ',
      wordBank: ['ⲉⲣⲉ', 'ⲟⲩⲏⲣ', 'ⲛ̀ⲁϫⲡ', 'ⲛⲁⲩ'],
      explanation: 'What hour is it?'
    },
    {
      id: 'test-32-13',
      type: 'matching',
      question: 'Match temporal expressions',
      correctAnswer: 'matched',
      pairs: [
        { coptic: 'ⲥⲁϥ', english: 'yesterday' },
        { coptic: 'ⲫⲟⲟⲩ', english: 'today' },
        { coptic: 'ⲣⲁⲥϯ', english: 'tomorrow' },
        { coptic: 'ϯⲛⲟⲩ', english: 'now' }
      ]
    },
    {
      id: 'test-32-14',
      type: 'translation',
      question: 'Translate: ⲁⲓⲛⲁⲩ ⲉ̀ⲣⲟϥ ⲥⲁϥ',
      questionCoptic: 'ⲁⲓⲛⲁⲩ ⲉ̀ⲣⲟϥ ⲥⲁϥ',
      correctAnswer: 'I saw him yesterday',
      options: ['I saw him yesterday', 'I see him today', 'I will see him tomorrow', 'I saw him now'],
      explanation: 'ⲥⲁϥ = yesterday'
    },
    {
      id: 'test-32-15',
      type: 'sentence_building',
      question: 'Build: "I will go tomorrow"',
      correctAnswer: 'ϯⲛⲁϣⲉⲛⲓ ⲣⲁⲥϯ',
      wordBank: ['ϯⲛⲁϣⲉⲛⲓ', 'ⲣⲁⲥϯ', 'ⲥⲁϥ', 'ⲫⲟⲟⲩ'],
      explanation: 'I will go (future) tomorrow'
    },
    {
      id: 'test-32-16',
      type: 'fill_blank',
      question: 'Complete: ⲁⲛⲓ̀ ___ = We came today',
      correctAnswer: 'ⲫⲟⲟⲩ',
      options: ['ⲫⲟⲟⲩ', 'ⲥⲁϥ', 'ⲣⲁⲥϯ', 'ϯⲛⲟⲩ'],
      explanation: 'ⲫⲟⲟⲩ = today'
    },
    {
      id: 'test-32-17',
      type: 'translation',
      question: 'Translate: ϯⲛⲁⲥⲁϫⲓ ⲛⲉⲙⲱⲧⲉⲛ ⲣⲁⲥϯ',
      questionCoptic: 'ϯⲛⲁⲥⲁϫⲓ ⲛⲉⲙⲱⲧⲉⲛ ⲣⲁⲥϯ',
      correctAnswer: 'I will speak with you tomorrow',
      options: ['I will speak with you tomorrow', 'I spoke with you yesterday', 'I am speaking with you today', 'I speak with you now'],
      explanation: 'Future tense with tomorrow'
    },
    {
      id: 'test-32-18',
      type: 'matching',
      question: 'Match time expressions',
      correctAnswer: 'matched',
      pairs: [
        { coptic: 'ⲙⲡⲓⲉϩⲟⲟⲩ ⲉⲧⲁϥⲓ̀', english: 'yesterday' },
        { coptic: 'ⲡⲁⲓⲉϩⲟⲟⲩ', english: 'today' },
        { coptic: 'ⲙⲡⲓⲉϩⲟⲟⲩ ⲉⲑⲛⲏⲟⲩ', english: 'tomorrow' },
        { coptic: 'ⲡⲓϫⲱⲣϩ', english: 'evening' }
      ]
    },
    {
      id: 'test-32-19',
      type: 'multiple_choice',
      question: 'How do you say "morning"?',
      correctAnswer: 'ϯⲧⲱⲟⲩⲛⲓ',
      options: ['ϯⲧⲱⲟⲩⲛⲓ', 'ⲡⲓϫⲱⲣϩ', 'ⲡⲓⲉϩⲟⲟⲩ', 'ⲫⲟⲟⲩ'],
      explanation: 'ϯⲧⲱⲟⲩⲛⲓ = the morning'
    },
    {
      id: 'test-32-20',
      type: 'fill_blank',
      question: 'Complete: ⲁⲓⲓ̀ ϧⲉⲛ ϯⲙⲁϩⲙⲏⲧ ___ = I came at the tenth hour',
      correctAnswer: 'ⲛ̀ⲁϫⲡ',
      options: ['ⲛ̀ⲁϫⲡ', 'ⲛ̀ⲉϩⲟⲟⲩ', 'ⲛ̀ⲙⲏⲧ', 'ⲛ̀ⲥⲟⲛ'],
      explanation: 'At the (tenth) hour'
    },
    {
      id: 'test-32-21',
      type: 'translation',
      question: 'How do you say "now"?',
      questionCoptic: 'ϯⲛⲟⲩ',
      correctAnswer: 'Now',
      options: ['Now', 'Today', 'This moment', 'Here'],
      explanation: 'ϯⲛⲟⲩ = now'
    },
    {
      id: 'test-32-22',
      type: 'sentence_building',
      question: 'Build: "Every day at this hour"',
      correctAnswer: 'ⲙ̀ⲙⲏⲛⲓ ⲛⲓⲃⲉⲛ ϧⲉⲛ ⲧⲓ ⲏ̀ⲣⲁ ⲉⲧⲁⲓ',
      wordBank: ['ⲙ̀ⲙⲏⲛⲓ', 'ⲛⲓⲃⲉⲛ', 'ϧⲉⲛ', 'ⲧⲓ ⲏ̀ⲣⲁ', 'ⲉⲧⲁⲓ'],
      explanation: 'Daily routine expression'
    },
    {
      id: 'test-32-23',
      type: 'translation',
      question: 'Translate: ϧⲉⲛ ⲡⲓⲣⲱⲙⲡⲓ ⲧⲓⲛⲟⲥ',
      questionCoptic: 'ϧⲉⲛ ⲡⲓⲣⲱⲙⲡⲓ ⲧⲓⲛⲟⲥ',
      correctAnswer: 'In those days',
      options: ['In those days', 'On those days', 'After those days', 'Before those days'],
      explanation: 'Temporal preposition with days'
    },
    {
      id: 'test-32-24',
      type: 'fill_blank',
      question: 'Complete: ⲙⲡⲓⲉϩⲟⲟⲩ ___ = after many days',
      correctAnswer: 'ⲙⲛ ⲟⲩϩⲟⲟⲩ',
      options: ['ⲙⲛ ⲟⲩϩⲟⲟⲩ', 'ⲛ̀ⲟⲩϩⲟⲟⲩ', 'ⲟⲩϩⲟⲟⲩ', 'ϧⲉⲛ ⲟⲩϩⲟⲟⲩ'],
      explanation: 'Time expression with enumeration'
    },
    {
      id: 'test-32-25',
      type: 'translation',
      question: 'Translate: ϯⲙⲁϩⲙⲏⲧ ⲛ̀ⲁϫⲡ',
      questionCoptic: 'ϯⲙⲁϩⲙⲏⲧ ⲛ̀ⲁϫⲡ',
      correctAnswer: 'The tenth hour',
      options: ['The tenth hour', '10 o\'clock', 'At ten', 'Hour ten'],
      explanation: 'Ordinal number with hour'
    }
  ]
};

export default unit32Test;
