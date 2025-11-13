import { Unit } from '../../types';

// UNIT 14: EXTENDED VOCABULARY - COLORS, TIME, PLACES, ANIMALS
// Verified for Bohairic dialect consistency

const unit14: Unit = {
  id: 'unit-14',
  title: 'Extended Vocabulary',
  description: 'Learn colors, time expressions, places, and animals',
  order: 14,
  color: '#CE82FF',
  lessons: [
    {
      id: 'lesson-14-1',
      unitId: 'unit-14',
      title: 'Colors and Visual Descriptions',
      description: 'Learn color vocabulary in Coptic',
      order: 1,
      xpReward: 20,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-14-1-1',
          type: 'multiple_choice',
          question: 'What is "white" in Coptic?',
          correctAnswer: 'ⲟⲩⲃⲁϣ',
          options: ['ⲟⲩⲃⲁϣ', 'ⲕⲁⲙⲉ', 'ⲛⲟⲩⲃ', 'ⲛⲉⲓⲟⲟⲧⲉ'],
          explanation: 'ⲟⲩⲃⲁϣ (oubash) means "white"'
        },
        {
          id: 'ex-14-1-2',
          type: 'matching',
          question: 'Match the colors',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲟⲩⲃⲁϣ', english: 'white' },
            { coptic: 'ⲕⲁⲙⲉ', english: 'black' },
            { coptic: 'ⲛⲟⲩⲃ', english: 'gold/yellow' },
            { coptic: 'ⲛⲉⲓⲟⲟⲧⲉ', english: 'green' }
          ]
        },
        {
          id: 'ex-14-1-3',
          type: 'translation',
          question: 'Translate: ⲟⲩϩⲓⲙⲓ ⲟⲩⲃⲁϣ',
          questionCoptic: 'ⲟⲩϩⲓⲙⲓ ⲟⲩⲃⲁϣ',
          correctAnswer: 'a white woman',
          options: ['a white woman', 'a black woman', 'the white woman', 'white women'],
          explanation: 'ⲟⲩϩⲓⲙⲓ ⲟⲩⲃⲁϣ = a woman + white (Bohairic ϩⲓⲙⲓ not ⲥϩⲓⲙⲉ!)'
        },
        {
          id: 'ex-14-1-4',
          type: 'multiple_choice',
          question: 'What does ⲕⲁⲙⲉ mean?',
          questionCoptic: 'ⲕⲁⲙⲉ',
          correctAnswer: 'black',
          options: ['black', 'white', 'red', 'blue'],
          explanation: 'ⲕⲁⲙⲉ (kame) means "black" - related to ancient Egyptian "Kemet" (black land)'
        },
        {
          id: 'ex-14-1-5',
          type: 'sentence_building',
          question: 'Build: "a gold cross"',
          correctAnswer: 'ⲟⲩⲥⲧⲁⲩⲣⲟⲥ ⲛⲟⲩⲃ',
          wordBank: ['ⲟⲩⲥⲧⲁⲩⲣⲟⲥ', 'ⲛⲟⲩⲃ', 'ⲕⲁⲙⲉ', 'ⲡⲓ'],
          explanation: 'ⲟⲩⲥⲧⲁⲩⲣⲟⲥ ⲛⲟⲩⲃ = a cross + gold'
        },
        {
          id: 'ex-14-1-6',
          type: 'fill_blank',
          question: 'Complete: ⲟⲩϫⲱⲙ ___ = a green book',
          correctAnswer: 'ⲛⲉⲓⲟⲟⲧⲉ',
          options: ['ⲛⲉⲓⲟⲟⲧⲉ', 'ⲛⲟⲩⲃ', 'ⲕⲁⲙⲉ', 'ⲟⲩⲃⲁϣ'],
          explanation: 'ⲛⲉⲓⲟⲟⲧⲉ (neioote) means "green"'
        },
        {
          id: 'ex-14-1-7',
          type: 'matching',
          question: 'Match color phrases',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲟⲩⲏⲓ ⲟⲩⲃⲁϣ', english: 'a white house' },
            { coptic: 'ⲟⲩϩⲟϥ ⲕⲁⲙⲉ', english: 'a black snake' },
            { coptic: 'ⲟⲩⲣⲁⲛ ⲛⲟⲩⲃ', english: 'a golden name' }
          ]
        },
        {
          id: 'ex-14-1-8',
          type: 'multiple_choice',
          question: 'How do you say "the white dove"?',
          correctAnswer: 'ϯϭⲣⲟⲙⲡⲓ ⲟⲩⲃⲁϣ',
          options: ['ϯϭⲣⲟⲙⲡⲓ ⲟⲩⲃⲁϣ', 'ϯϭⲣⲟⲙⲡⲓ ⲕⲁⲙⲉ', 'ⲟⲩϭⲣⲟⲙⲡⲓ ⲟⲩⲃⲁϣ', 'ⲛⲓϭⲣⲟⲙⲡⲓ ⲟⲩⲃⲁϣ'],
          explanation: 'ϯϭⲣⲟⲙⲡⲓ ⲟⲩⲃⲁϣ = the dove (fem.) + white'
        }
      ]
    },
    {
      id: 'lesson-14-2',
      unitId: 'unit-14',
      title: 'Time, Days, and Seasons',
      description: 'Express time and days of the week',
      order: 2,
      xpReward: 20,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-14-2-1',
          type: 'multiple_choice',
          question: 'What is "day" in Coptic?',
          correctAnswer: 'ⲉϩⲟⲟⲩ',
          options: ['ⲉϩⲟⲟⲩ', 'ⲉⲩϣⲏ', 'ⲡⲱⲓ', 'ⲣⲟⲙⲡⲓ'],
          explanation: 'ⲉϩⲟⲟⲩ (ehoou) means "day"'
        },
        {
          id: 'ex-14-2-2',
          type: 'matching',
          question: 'Match time words',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲉϩⲟⲟⲩ', english: 'day' },
            { coptic: 'ⲉⲩϣⲏ', english: 'night' },
            { coptic: 'ⲡⲱⲓ', english: 'morning' },
            { coptic: 'ⲣⲟⲩϩⲓ', english: 'evening' }
          ]
        },
        {
          id: 'ex-14-2-3',
          type: 'translation',
          question: 'Translate: ⲧⲉⲛⲟⲩ',
          questionCoptic: 'ⲧⲉⲛⲟⲩ',
          correctAnswer: 'now',
          options: ['now', 'today', 'tomorrow', 'yesterday'],
          explanation: 'ⲧⲉⲛⲟⲩ (tenou) means "now"'
        },
        {
          id: 'ex-14-2-4',
          type: 'multiple_choice',
          question: 'What is "Sunday" (Lord\'s Day) in Coptic?',
          correctAnswer: 'ⲕⲩⲣⲓⲁⲕⲏ',
          options: ['ⲕⲩⲣⲓⲁⲕⲏ', 'ⲥⲁⲃⲃⲁⲧⲟⲛ', 'ⲉϩⲟⲟⲩ', 'ⲡⲱⲓ'],
          explanation: 'ⲕⲩⲣⲓⲁⲕⲏ (kyriakē) means "Sunday" - literally "Lord\'s day"'
        },
        {
          id: 'ex-14-2-5',
          type: 'matching',
          question: 'Match days and times',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲕⲩⲣⲓⲁⲕⲏ', english: 'Sunday' },
            { coptic: 'ⲥⲁⲃⲃⲁⲧⲟⲛ', english: 'Saturday/Sabbath' },
            { coptic: 'ⲫⲟⲟⲩ', english: 'today' },
            { coptic: 'ⲣⲁⲥϯ', english: 'tomorrow' }
          ]
        },
        {
          id: 'ex-14-2-6',
          type: 'sentence_building',
          question: 'Build: "Good morning"',
          correctAnswer: 'ⲟⲩⲡⲱⲓ ⲉⲛⲁⲛⲉϥ',
          wordBank: ['ⲟⲩ', 'ⲡⲱⲓ', 'ⲉⲛⲁⲛⲉϥ', 'ⲉⲩϣⲏ'],
          explanation: 'ⲟⲩⲡⲱⲓ ⲉⲛⲁⲛⲉϥ = a morning + good'
        },
        {
          id: 'ex-14-2-7',
          type: 'fill_blank',
          question: 'Complete: ϯⲛⲁϣⲉⲛⲓ ___ = I will go tomorrow',
          correctAnswer: 'ⲣⲁⲥϯ',
          options: ['ⲣⲁⲥϯ', 'ⲫⲟⲟⲩ', 'ⲧⲉⲛⲟⲩ', 'ⲥⲁϥ'],
          explanation: 'ⲣⲁⲥϯ (rasti) means "tomorrow" (Bohairic ϣⲉⲛⲓ not ⲃⲱⲕ!)'
        },
        {
          id: 'ex-14-2-8',
          type: 'multiple_choice',
          question: 'What does ⲣⲟⲙⲡⲓ mean?',
          questionCoptic: 'ⲣⲟⲙⲡⲓ',
          correctAnswer: 'year',
          options: ['year', 'month', 'week', 'hour'],
          explanation: 'ⲣⲟⲙⲡⲓ (rompi) means "year"'
        }
      ]
    },
    {
      id: 'lesson-14-3',
      unitId: 'unit-14',
      title: 'Places, Nature, and Animals',
      description: 'Vocabulary for locations and creation',
      order: 3,
      xpReward: 20,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-14-3-1',
          type: 'multiple_choice',
          question: 'What is "church" in Coptic?',
          correctAnswer: 'ⲉⲕⲕⲗⲏⲥⲓⲁ',
          options: ['ⲉⲕⲕⲗⲏⲥⲓⲁ', 'ⲏⲓ', 'ⲧⲟⲡⲟⲥ', 'ⲡⲟⲗⲓⲥ'],
          explanation: 'ⲉⲕⲕⲗⲏⲥⲓⲁ (ekklēsia) means "church"'
        },
        {
          id: 'ex-14-3-2',
          type: 'matching',
          question: 'Match places',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲉⲕⲕⲗⲏⲥⲓⲁ', english: 'church' },
            { coptic: 'ⲏⲓ', english: 'house' },
            { coptic: 'ⲡⲟⲗⲓⲥ', english: 'city' },
            { coptic: 'ⲕⲁϩⲓ', english: 'earth/land' }
          ]
        },
        {
          id: 'ex-14-3-3',
          type: 'translation',
          question: 'Translate: ⲫⲉ',
          questionCoptic: 'ⲫⲉ',
          correctAnswer: 'heaven/sky',
          options: ['heaven/sky', 'earth', 'sea', 'mountain'],
          explanation: 'ⲫⲉ (ve) means "heaven" or "sky"'
        },
        {
          id: 'ex-14-3-4',
          type: 'multiple_choice',
          question: 'What is "sea/ocean" in Coptic?',
          correctAnswer: 'ⲫⲓⲟⲙ',
          options: ['ⲫⲓⲟⲙ', 'ⲙⲟⲟⲩ', 'ⲓⲉⲣⲟ', 'ⲕⲁϩⲓ'],
          explanation: 'ⲫⲓⲟⲙ (viom) means "sea" or "ocean"'
        },
        {
          id: 'ex-14-3-5',
          type: 'matching',
          question: 'Match animals',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲟⲩϩⲟⲣ', english: 'dog' },
            { coptic: 'ⲉⲙⲟⲩⲓ', english: 'cat' },
            { coptic: 'ⲟⲩⲉⲥⲱⲟⲩ', english: 'sheep' },
            { coptic: 'ⲙⲁⲥⲓ', english: 'calf' }
          ]
        },
        {
          id: 'ex-14-3-6',
          type: 'sentence_building',
          question: 'Build: "a bird of heaven"',
          correctAnswer: 'ⲟⲩϩⲁⲗⲏⲧ ⲛ̀ⲧⲉⲫⲉ',
          wordBank: ['ⲟⲩϩⲁⲗⲏⲧ', 'ⲛ̀ⲧⲉ', 'ⲫⲉ', 'ⲕⲁϩⲓ'],
          explanation: 'ⲟⲩϩⲁⲗⲏⲧ ⲛ̀ⲧⲉⲫⲉ = a bird + of + heaven'
        },
        {
          id: 'ex-14-3-7',
          type: 'fill_blank',
          question: 'Complete: ⲁⲛϣⲉⲛⲓ ⲉ___ = we went to church',
          correctAnswer: 'ϯⲉⲕⲕⲗⲏⲥⲓⲁ',
          options: ['ϯⲉⲕⲕⲗⲏⲥⲓⲁ', 'ⲡⲓⲏⲓ', 'ⲫⲓⲟⲙ', 'ⲫⲉ'],
          explanation: 'ⲉϯⲉⲕⲕⲗⲏⲥⲓⲁ = to the church (Bohairic ϣⲉⲛⲓ not ⲃⲱⲕ!)'
        },
        {
          id: 'ex-14-3-8',
          type: 'matching',
          question: 'Match nature and places',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲓⲁⲣⲱ', english: 'river' },
            { coptic: 'ⲧⲱⲟⲩ', english: 'mountain' },
            { coptic: 'ⲙⲁ', english: 'place' },
            { coptic: 'ϣⲏⲛ', english: 'tree' }
          ]
        }
      ]
    }
  ]
};

export default unit14;
