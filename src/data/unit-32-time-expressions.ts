import { Unit } from '../../types';

// UNIT 32: TIME EXPRESSIONS - Days, Months, Seasons
// Bohairic dialect - Essential temporal vocabulary
// Fills gap: Time-related expressions for daily conversation

const unit32: Unit = {
  id: 'unit-32',
  title: 'Days, Months & Time',
  description: 'Master temporal expressions: days, months, seasons, telling time',
  order: 32,
  color: '#4CAF50',
  lessons: [
    {
      id: 'lesson-32-1',
      unitId: 'unit-32',
      title: 'Days of the Week',
      description: 'Learn all seven days',
      order: 1,
      xpReward: 20,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-32-1-1',
          type: 'multiple_choice',
          question: 'What is "Sunday" in Coptic?',
          correctAnswer: 'ⲡⲓⲕⲩⲣⲓⲁⲕⲏ',
          options: ['ⲡⲓⲕⲩⲣⲓⲁⲕⲏ', 'ⲡⲓⲥⲁⲃⲃⲁⲧⲟⲛ', 'ⲡⲓⲙⲁϩⲟⲩⲁⲓ', 'ⲡⲓⲉϩⲟⲟⲩ'],
          explanation: 'ⲡⲓⲕⲩⲣⲓⲁⲕⲏ (pi-kyriake) = Sunday ("the Lord\'s day" from Greek κυριακή)'
        },
        {
          id: 'ex-32-1-2',
          type: 'matching',
          question: 'Match days of the week',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲡⲓⲕⲩⲣⲓⲁⲕⲏ', english: 'Sunday' },
            { coptic: 'ⲡⲓⲙⲁϩⲟⲩⲁⲓ', english: 'Monday (1st day)' },
            { coptic: 'ⲡⲓⲙⲁϩⲥⲛⲁⲩ', english: 'Tuesday (2nd day)' },
            { coptic: 'ⲡⲓⲙⲁϩϣⲟⲙⲧ', english: 'Wednesday (3rd day)' }
          ]
        },
        {
          id: 'ex-32-1-3',
          type: 'matching',
          question: 'Match more days',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲡⲓⲙⲁϩϥⲧⲟⲟⲩ', english: 'Thursday (4th day)' },
            { coptic: 'ⲡⲓⲙⲁϩϯⲟⲩ', english: 'Friday (5th day)' },
            { coptic: 'ⲡⲓⲙⲁϩⲥⲟⲟⲩ', english: 'Saturday (6th day)' },
            { coptic: 'ⲡⲓⲥⲁⲃⲃⲁⲧⲟⲛ', english: 'Saturday (Sabbath)' }
          ]
        },
        {
          id: 'ex-32-1-4',
          type: 'translation',
          question: 'Translate: ⲙⲡⲓⲙⲁϩⲥⲛⲁⲩ',
          questionCoptic: 'ⲙⲡⲓⲙⲁϩⲥⲛⲁⲩ',
          correctAnswer: 'On Tuesday',
          options: ['On Tuesday', 'On Monday', 'On Wednesday', 'The second day'],
          explanation: 'ⲙⲡⲓⲙⲁϩⲥⲛⲁⲩ = on Tuesday (ⲙ- = on/in + the 2nd day)'
        },
        {
          id: 'ex-32-1-5',
          type: 'sentence_building',
          question: 'Build: "I go to church on Sunday"',
          correctAnswer: 'ϯϣⲉⲛⲓ ⲉϯⲉⲕⲕⲗⲏⲥⲓⲁ ⲙⲡⲓⲕⲩⲣⲓⲁⲕⲏ',
          wordBank: ['ϯϣⲉⲛⲓ', 'ⲉϯⲉⲕⲕⲗⲏⲥⲓⲁ', 'ⲙⲡⲓⲕⲩⲣⲓⲁⲕⲏ', 'ⲙⲡⲓⲙⲁϩⲟⲩⲁⲓ'],
          explanation: 'ϯϣⲉⲛⲓ ⲉϯⲉⲕⲕⲗⲏⲥⲓⲁ ⲙⲡⲓⲕⲩⲣⲓⲁⲕⲏ = I go to church on Sunday'
        },
        {
          id: 'ex-32-1-6',
          type: 'fill_blank',
          question: 'Complete: ⲙⲡⲓ___ = on Friday',
          correctAnswer: 'ⲙⲁϩϯⲟⲩ',
          options: ['ⲙⲁϩϯⲟⲩ', 'ⲙⲁϩϥⲧⲟⲟⲩ', 'ⲙⲁϩⲥⲟⲟⲩ', 'ϯⲟⲩ'],
          explanation: 'ⲙⲡⲓⲙⲁϩϯⲟⲩ = on Friday (the 5th day)'
        },
        {
          id: 'ex-32-1-7',
          type: 'multiple_choice',
          question: 'What day is the Sabbath?',
          correctAnswer: 'ⲡⲓⲥⲁⲃⲃⲁⲧⲟⲛ',
          options: ['ⲡⲓⲥⲁⲃⲃⲁⲧⲟⲛ', 'ⲡⲓⲕⲩⲣⲓⲁⲕⲏ', 'ⲡⲓⲙⲁϩⲟⲩⲁⲓ', 'ⲡⲓⲙⲁϩϯⲟⲩ'],
          explanation: 'ⲡⲓⲥⲁⲃⲃⲁⲧⲟⲛ (pi-sabbaton) = Saturday/Sabbath (from Greek/Hebrew)'
        },
        {
          id: 'ex-32-1-8',
          type: 'translation',
          question: 'Translate: ⲁⲓⲛⲁⲩ ⲉ̀ⲣⲟⲕ ⲙⲡⲓⲙⲁϩϥⲧⲟⲟⲩ',
          questionCoptic: 'ⲁⲓⲛⲁⲩ ⲉ̀ⲣⲟⲕ ⲙⲡⲓⲙⲁϩϥⲧⲟⲟⲩ',
          correctAnswer: 'I saw you on Thursday',
          options: ['I saw you on Thursday', 'I see you on Wednesday', 'I will see you on Friday', 'You saw me on Thursday'],
          explanation: 'ⲁⲓⲛⲁⲩ ⲉ̀ⲣⲟⲕ ⲙⲡⲓⲙⲁϩϥⲧⲟⲟⲩ = I saw you on Thursday'
        }
      ]
    },
    {
      id: 'lesson-32-2',
      unitId: 'unit-32',
      title: 'Months of the Year',
      description: 'Coptic calendar months',
      order: 2,
      xpReward: 20,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-32-2-1',
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
          id: 'ex-32-2-2',
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
          id: 'ex-32-2-3',
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
          id: 'ex-32-2-4',
          type: 'multiple_choice',
          question: 'Which month is Christmas celebrated in Coptic calendar?',
          correctAnswer: 'Ⲭⲟⲓⲁⲕ',
          options: ['Ⲭⲟⲓⲁⲕ', 'Ⲧⲱⲃⲓ', 'Ⲑⲱⲟⲩⲧ', 'Ⲙⲉϣⲓⲣ'],
          explanation: 'Ⲭⲟⲓⲁⲕ (Kiahk) = Dec-Jan, when Christmas is celebrated (Kiahk 29 = Jan 7)'
        },
        {
          id: 'ex-32-2-5',
          type: 'translation',
          question: 'Translate: ϧⲉⲛ Ⲑⲱⲟⲩⲧ',
          questionCoptic: 'ϧⲉⲛ Ⲑⲱⲟⲩⲧ',
          correctAnswer: 'In Thout',
          options: ['In Thout', 'On Thout', 'From Thout', 'About Thout'],
          explanation: 'ϧⲉⲛ Ⲑⲱⲟⲩⲧ = in (the month of) Thout (Sept-Oct)'
        },
        {
          id: 'ex-32-2-6',
          type: 'fill_blank',
          question: 'Complete: The Coptic year has ___ main months',
          correctAnswer: '12',
          options: ['12', '13', '10', '7'],
          explanation: 'The Coptic calendar has 12 months of 30 days + 5/6 extra days (Ⲡⲓⲕⲟⲩϫⲓ ⲛ̀ⲁ̀ⲃⲟⲧ)'
        }
      ]
    },
    {
      id: 'lesson-32-3',
      unitId: 'unit-32',
      title: 'Telling Time',
      description: 'Hours, minutes, and time expressions',
      order: 3,
      xpReward: 25,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-32-3-1',
          type: 'multiple_choice',
          question: 'What is "hour" in Coptic?',
          correctAnswer: 'ⲁϫⲡ',
          options: ['ⲁϫⲡ', 'ⲙⲓⲛⲓⲧ', 'ⲉϩⲟⲟⲩ', 'ⲟⲩⲛⲟⲩ'],
          explanation: 'ⲁϫⲡ (ajp) = hour'
        },
        {
          id: 'ex-32-3-2',
          type: 'translation',
          question: 'Translate: ϯⲙⲁϩⲥⲛⲁⲩ ⲛ̀ⲁϫⲡ',
          questionCoptic: 'ϯⲙⲁϩⲥⲛⲁⲩ ⲛ̀ⲁϫⲡ',
          correctAnswer: 'The second hour / 2 o\'clock',
          options: ['The second hour / 2 o\'clock', 'Two hours', 'The third hour', 'Second minute'],
          explanation: 'ϯⲙⲁϩⲥⲛⲁⲩ ⲛ̀ⲁϫⲡ = the second hour (2 o\'clock)'
        },
        {
          id: 'ex-32-3-3',
          type: 'matching',
          question: 'Match time vocabulary',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲁϫⲡ', english: 'hour' },
            { coptic: 'ⲙⲓⲛⲓⲧ', english: 'minute' },
            { coptic: 'ⲛⲁⲩ', english: 'time/moment' },
            { coptic: 'ⲟⲩⲛⲟⲩ', english: 'time/period' }
          ]
        },
        {
          id: 'ex-32-3-4',
          type: 'sentence_building',
          question: 'Build: "What time is it?"',
          correctAnswer: 'ⲉⲣⲉ ⲟⲩⲏⲣ ⲛ̀ⲁϫⲡ',
          wordBank: ['ⲉⲣⲉ', 'ⲟⲩⲏⲣ', 'ⲛ̀ⲁϫⲡ', 'ⲛⲁⲩ'],
          explanation: 'ⲉⲣⲉ ⲟⲩⲏⲣ ⲛ̀ⲁϫⲡ = What hour is it? (lit. "It is what hour?")'
        },
        {
          id: 'ex-32-3-5',
          type: 'fill_blank',
          question: 'Complete: ϯⲙⲁϩ___ ⲛ̀ⲁϫⲡ = The seventh hour',
          correctAnswer: 'ϣⲁϣϥ',
          options: ['ϣⲁϣϥ', 'ⲥⲟⲟⲩ', 'ϣⲙⲏⲛ', 'ⲙⲏⲧ'],
          explanation: 'ϯⲙⲁϩϣⲁϣϥ ⲛ̀ⲁϫⲡ = the seventh hour (7 o\'clock)'
        },
        {
          id: 'ex-32-3-6',
          type: 'translation',
          question: 'Translate: ⲁⲓⲓ̀ ϧⲉⲛ ϯⲙⲁϩⲙⲏⲧ ⲛ̀ⲁϫⲡ',
          questionCoptic: 'ⲁⲓⲓ̀ ϧⲉⲛ ϯⲙⲁϩⲙⲏⲧ ⲛ̀ⲁϫⲡ',
          correctAnswer: 'I came at the tenth hour',
          options: ['I came at the tenth hour', 'I will come at 10', 'I am coming now', 'I came yesterday'],
          explanation: 'ⲁⲓⲓ̀ ϧⲉⲛ ϯⲙⲁϩⲙⲏⲧ ⲛ̀ⲁϫⲡ = I came at the 10th hour'
        },
        {
          id: 'ex-32-3-7',
          type: 'multiple_choice',
          question: 'How do you say "now"?',
          correctAnswer: 'ϯⲛⲟⲩ',
          options: ['ϯⲛⲟⲩ', 'ⲟⲩⲛⲟⲩ', 'ⲛⲁⲩ', 'ⲁϫⲡ'],
          explanation: 'ϯⲛⲟⲩ (tenou) = now, at this moment'
        }
      ]
    },
    {
      id: 'lesson-32-4',
      unitId: 'unit-32',
      title: 'Yesterday, Today, Tomorrow',
      description: 'Temporal adverbs for daily use',
      order: 4,
      xpReward: 25,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-32-4-1',
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
          id: 'ex-32-4-2',
          type: 'translation',
          question: 'Translate: ⲁⲓⲛⲁⲩ ⲉ̀ⲣⲟϥ ⲥⲁϥ',
          questionCoptic: 'ⲁⲓⲛⲁⲩ ⲉ̀ⲣⲟϥ ⲥⲁϥ',
          correctAnswer: 'I saw him yesterday',
          options: ['I saw him yesterday', 'I see him today', 'I will see him tomorrow', 'I saw him now'],
          explanation: 'ⲁⲓⲛⲁⲩ ⲉ̀ⲣⲟϥ ⲥⲁϥ = I saw him yesterday (ⲥⲁϥ = yesterday)'
        },
        {
          id: 'ex-32-4-3',
          type: 'sentence_building',
          question: 'Build: "I will go tomorrow"',
          correctAnswer: 'ϯⲛⲁϣⲉⲛⲓ ⲣⲁⲥϯ',
          wordBank: ['ϯⲛⲁϣⲉⲛⲓ', 'ⲣⲁⲥϯ', 'ⲥⲁϥ', 'ⲫⲟⲟⲩ'],
          explanation: 'ϯⲛⲁϣⲉⲛⲓ ⲣⲁⲥϯ = I will go tomorrow (ⲣⲁⲥϯ = tomorrow)'
        },
        {
          id: 'ex-32-4-4',
          type: 'fill_blank',
          question: 'Complete: ⲁⲛⲓ̀ ___ = We came today',
          correctAnswer: 'ⲫⲟⲟⲩ',
          options: ['ⲫⲟⲟⲩ', 'ⲥⲁϥ', 'ⲣⲁⲥϯ', 'ϯⲛⲟⲩ'],
          explanation: 'ⲫⲟⲟⲩ (phoou) = today'
        },
        {
          id: 'ex-32-4-5',
          type: 'translation',
          question: 'Translate: ϯⲛⲁⲥⲁϫⲓ ⲛⲉⲙⲱⲧⲉⲛ ⲣⲁⲥϯ',
          questionCoptic: 'ϯⲛⲁⲥⲁϫⲓ ⲛⲉⲙⲱⲧⲉⲛ ⲣⲁⲥϯ',
          correctAnswer: 'I will speak with you tomorrow',
          options: ['I will speak with you tomorrow', 'I spoke with you yesterday', 'I am speaking with you today', 'I speak with you now'],
          explanation: 'ϯⲛⲁⲥⲁϫⲓ ⲛⲉⲙⲱⲧⲉⲛ ⲣⲁⲥϯ = I will speak with you tomorrow'
        },
        {
          id: 'ex-32-4-6',
          type: 'matching',
          question: 'Match more time expressions',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲙⲡⲓⲉϩⲟⲟⲩ ⲉⲧⲁϥⲓ̀', english: 'the day that passed (yesterday)' },
            { coptic: 'ⲡⲁⲓⲉϩⲟⲟⲩ', english: 'this day (today)' },
            { coptic: 'ⲙⲡⲓⲉϩⲟⲟⲩ ⲉⲑⲛⲏⲟⲩ', english: 'the day coming (tomorrow)' },
            { coptic: 'ⲡⲓϫⲱⲣϩ', english: 'evening' }
          ]
        },
        {
          id: 'ex-32-4-7',
          type: 'multiple_choice',
          question: 'How do you say "morning"?',
          correctAnswer: 'ϯⲧⲱⲟⲩⲛⲓ',
          options: ['ϯⲧⲱⲟⲩⲛⲓ', 'ⲡⲓϫⲱⲣϩ', 'ⲡⲓⲉϩⲟⲟⲩ', 'ⲫⲟⲟⲩ'],
          explanation: 'ϯⲧⲱⲟⲩⲛⲓ (ti-touni) = the morning, dawn'
        },
        {
          id: 'ex-32-4-8',
          type: 'translation',
          question: 'Translate to Coptic: "now" (at this moment)',
          correctAnswer: 'ϯⲛⲟⲩ',
          options: ['ϯⲛⲟⲩ', 'ⲫⲟⲟⲩ', 'ⲡⲁⲓⲛⲁⲩ', 'ⲟⲩⲛⲟⲩ'],
          explanation: 'ϯⲛⲟⲩ (tenou) = now, at this moment'
        }
      ]
    }
  ]
};

export default unit32;
