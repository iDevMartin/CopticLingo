import { Unit } from '../../types';

// UNIT 3: FIRST WORDS & BASIC VOCABULARY
// Corrected based on Bohairic dictionaries and morphology
// Numbers based on OUTLINE OF BOHAIRIC COPTIC MORPHOLOGY by Lance Eccles

const unit3: Unit = {
  id: 'unit-3',
  title: 'First Words & Basic Vocabulary',
  description: 'Learn essential Coptic words, greetings, family, and numbers',
  order: 3,
  color: '#00CD9C',
  lessons: [
    {
      id: 'lesson-3-1',
      unitId: 'unit-3',
      title: 'Basic Greetings',
      description: 'Learn how to greet people in Coptic',
      order: 1,
      xpReward: 15,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-3-1-1',
          type: 'multiple_choice',
          question: 'How do you say "Hello/Greetings" in Coptic?',
          correctAnswer: 'ⲟⲩϫⲁⲓ',
          options: ['ⲟⲩϫⲁⲓ', 'ⲭⲉⲣⲉ', 'ϣⲉⲡϩⲙⲟⲧ', 'ⲡⲁⲣⲁⲕⲁⲗⲓ'],
          explanation: 'ⲟⲩϫⲁⲓ (oujai) means "hello" or "greetings" - literally "health/healing"'
        },
        {
          id: 'ex-3-1-2',
          type: 'translation',
          question: 'Translate to English: ϣⲉⲡϩⲙⲟⲧ',
          questionCoptic: 'ϣⲉⲡϩⲙⲟⲧ',
          correctAnswer: 'Thank you',
          options: ['Thank you', 'Hello', 'Goodbye', 'Please'],
          explanation: 'ϣⲉⲡϩⲙⲟⲧ (shep-hmot) = "thank you" (lit. "receive grace")'
        },
        {
          id: 'ex-3-1-3',
          type: 'multiple_choice',
          question: 'How do you say "Goodbye" in Coptic?',
          correctAnswer: 'ⲟⲩϫⲁⲓ ϧⲉⲛ ⲟⲩϩⲓⲣⲏⲛⲏ',
          options: ['ⲟⲩϫⲁⲓ ϧⲉⲛ ⲟⲩϩⲓⲣⲏⲛⲏ', 'ⲟⲩϫⲁⲓ', 'ϣⲉⲡϩⲙⲟⲧ', 'ⲭⲉⲣⲉ'],
          explanation: 'ⲟⲩϫⲁⲓ ϧⲉⲛ ⲟⲩϩⲓⲣⲏⲛⲏ = "goodbye in peace" (lit. "greetings in peace")'
        },
        {
          id: 'ex-3-1-4',
          type: 'matching',
          question: 'Match the greetings',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲟⲩϫⲁⲓ', english: 'Hello/Greetings' },
            { coptic: 'ϣⲉⲡϩⲙⲟⲧ', english: 'Thank you' },
            { coptic: 'ϯϩⲓⲣⲏⲛⲏ', english: 'Peace (the peace)' },
            { coptic: 'ⲭⲉⲣⲉ', english: 'Hail/Rejoice' }
          ]
        },
        {
          id: 'ex-3-1-5',
          type: 'multiple_choice',
          question: 'What does "ϯϩⲓⲣⲏⲛⲏ ⲛⲁⲕ" mean?',
          questionCoptic: 'ϯϩⲓⲣⲏⲛⲏ ⲛⲁⲕ',
          correctAnswer: 'Peace to you (masc.)',
          options: ['Peace to you (masc.)', 'Good morning', 'Thank you', 'Welcome'],
          explanation: 'ϯϩⲓⲣⲏⲛⲏ ⲛⲁⲕ = "the peace to you" (traditional greeting to a male)'
        },
        {
          id: 'ex-3-1-6',
          type: 'fill_blank',
          question: 'Complete the phrase: ___ means "thank you"',
          correctAnswer: 'ϣⲉⲡϩⲙⲟⲧ',
          options: ['ϣⲉⲡϩⲙⲟⲧ', 'ⲟⲩϫⲁⲓ', 'ⲡⲁⲣⲁⲕⲁⲗⲓ', 'ⲭⲉⲣⲉ'],
          explanation: 'ϣⲉⲡϩⲙⲟⲧ is the Coptic expression for "thank you"'
        },
        {
          id: 'ex-3-1-7',
          type: 'multiple_choice',
          question: 'How do you say "Please" in Coptic?',
          correctAnswer: 'ⲡⲁⲣⲁⲕⲁⲗⲓ',
          options: ['ⲡⲁⲣⲁⲕⲁⲗⲓ', 'ϣⲉⲡϩⲙⲟⲧ', 'ⲟⲩϫⲁⲓ', 'ⲭⲉⲣⲉ'],
          explanation: 'ⲡⲁⲣⲁⲕⲁⲗⲓ (parakali) = "please" (from Greek παρακαλῶ)'
        },
        {
          id: 'ex-3-1-8',
          type: 'multiple_choice',
          question: 'What is ⲭⲉⲣⲉ?',
          questionCoptic: 'ⲭⲉⲣⲉ',
          correctAnswer: 'Hail/Rejoice',
          options: ['Hail/Rejoice', 'Goodbye', 'Thanks', 'Please'],
          explanation: 'ⲭⲉⲣⲉ (khere) = "hail" or "rejoice" (as in "Hail Mary" - ⲭⲉⲣⲉ Ⲙⲁⲣⲓⲁ)'
        },
        {
          id: 'ex-3-1-9',
          type: 'translation',
          question: 'Translate to Coptic: "Hello"',
          correctAnswer: 'ⲟⲩϫⲁⲓ',
          options: ['ⲟⲩϫⲁⲓ', 'ϣⲉⲡϩⲙⲟⲧ', 'ⲭⲉⲣⲉ', 'ⲡⲁⲣⲁⲕⲁⲗⲓ'],
          explanation: 'ⲟⲩϫⲁⲓ (oujai) is the standard Coptic greeting'
        },
        {
          id: 'ex-3-1-10',
          type: 'sentence_building',
          question: 'Build the phrase: "Thank you"',
          correctAnswer: 'ϣⲉⲡϩⲙⲟⲧ',
          wordBank: ['ϣⲉⲡ', 'ϩⲙⲟⲧ', 'ⲟⲩϫⲁⲓ', 'ⲛⲁⲕ'],
          explanation: 'ϣⲉⲡϩⲙⲟⲧ = ϣⲉⲡ (receive) + ϩⲙⲟⲧ (grace) = "thank you"'
        }
      ]
    },
    {
      id: 'lesson-3-2',
      unitId: 'unit-3',
      title: 'Numbers 1-10',
      description: 'Learn to count in Coptic (Bohairic forms)',
      order: 2,
      xpReward: 15,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-3-2-1',
          type: 'multiple_choice',
          question: 'What is "one" (masculine) in Coptic?',
          correctAnswer: 'ⲟⲩⲁⲓ',
          options: ['ⲟⲩⲁⲓ', 'ⲥⲛⲁⲩ', 'ϣⲟⲙⲧ', 'ϥⲧⲟⲟⲩ'],
          explanation: 'ⲟⲩⲁⲓ (ouai) = "one" (masc.), ⲟⲩⲉⲓ (ouei) = "one" (fem.)'
        },
        {
          id: 'ex-3-2-2',
          type: 'matching',
          question: 'Match the numbers (masculine forms)',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲟⲩⲁⲓ', english: 'one' },
            { coptic: 'ⲥⲛⲁⲩ', english: 'two' },
            { coptic: 'ϣⲟⲙⲧ', english: 'three' },
            { coptic: 'ϥⲧⲟⲟⲩ', english: 'four' }
          ]
        },
        {
          id: 'ex-3-2-3',
          type: 'translation',
          question: 'Translate: ϯⲟⲩ',
          questionCoptic: 'ϯⲟⲩ',
          correctAnswer: 'five',
          options: ['five', 'six', 'seven', 'eight'],
          explanation: 'ϯⲟⲩ (tiou) = "five" (invariable for gender)'
        },
        {
          id: 'ex-3-2-4',
          type: 'multiple_choice',
          question: 'What number is ⲙⲏⲧ?',
          questionCoptic: 'ⲙⲏⲧ',
          correctAnswer: 'ten',
          options: ['eight', 'nine', 'ten', 'seven'],
          explanation: 'ⲙⲏⲧ (mēt) = "ten" (masc.), ⲙⲏϯ (mēti) = "ten" (fem.)'
        },
        {
          id: 'ex-3-2-5',
          type: 'matching',
          question: 'Match numbers 6-9 (masculine)',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲥⲟⲟⲩ', english: 'six' },
            { coptic: 'ϣⲁϣϥ', english: 'seven' },
            { coptic: 'ϣⲙⲏⲛ', english: 'eight' },
            { coptic: 'ⲯⲓⲧ', english: 'nine' }
          ]
        },
        {
          id: 'ex-3-2-6',
          type: 'fill_blank',
          question: 'Complete: The number 2 is ___',
          correctAnswer: 'ⲥⲛⲁⲩ',
          options: ['ⲥⲛⲁⲩ', 'ϣⲟⲙⲧ', 'ϥⲧⲟⲟⲩ', 'ϯⲟⲩ'],
          explanation: 'ⲥⲛⲁⲩ (snau) = "two" (same for masc./fem.)'
        },
        {
          id: 'ex-3-2-7',
          type: 'multiple_choice',
          question: 'What is "seven" in Coptic?',
          correctAnswer: 'ϣⲁϣϥ',
          options: ['ϣⲁϣϥ', 'ⲥⲟⲟⲩ', 'ϣⲙⲏⲛ', 'ⲯⲓⲧ'],
          explanation: 'ϣⲁϣϥ (shashf) = "seven" (masc.), ϣⲁϣϥⲓ (shashfi) = "seven" (fem.)'
        },
        {
          id: 'ex-3-2-8',
          type: 'multiple_choice',
          question: 'What number is ϣⲙⲏⲛ?',
          questionCoptic: 'ϣⲙⲏⲛ',
          correctAnswer: 'eight',
          options: ['six', 'seven', 'eight', 'nine'],
          explanation: 'ϣⲙⲏⲛ (shmēn) = "eight" (masc.), ϣⲙⲏⲛⲓ (shmēni) = "eight" (fem.)'
        },
        {
          id: 'ex-3-2-9',
          type: 'translation',
          question: 'Translate to Coptic: "three"',
          correctAnswer: 'ϣⲟⲙⲧ',
          options: ['ϣⲟⲙⲧ', 'ϥⲧⲟⲟⲩ', 'ϯⲟⲩ', 'ⲥⲛⲁⲩ'],
          explanation: 'ϣⲟⲙⲧ (shomt) = "three" (masc.), ϣⲟⲙϯ (shomti) = "three" (fem.)'
        },
        {
          id: 'ex-3-2-10',
          type: 'sentence_building',
          question: 'Build the number: "four"',
          correctAnswer: 'ϥⲧⲟⲟⲩ',
          wordBank: ['ϥⲧⲟⲟⲩ', 'ϯⲟⲩ', 'ϣⲟⲙⲧ', 'ⲥⲟⲟⲩ'],
          explanation: 'ϥⲧⲟⲟⲩ (ftoou) = "four" (masc.), ϥⲧⲟⲟⲓ (ftooi) = "four" (fem.)'
        }
      ]
    },
    {
      id: 'lesson-3-3',
      unitId: 'unit-3',
      title: 'Family Members',
      description: 'Learn words for family (corrected Bohairic forms)',
      order: 3,
      xpReward: 15,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-3-3-1',
          type: 'multiple_choice',
          question: 'What is "father" in Coptic?',
          correctAnswer: 'ⲓⲱⲧ',
          options: ['ⲓⲱⲧ', 'ⲙⲁⲩ', 'ⲥⲟⲛ', 'ⲥⲱⲛⲓ'],
          explanation: 'ⲓⲱⲧ (yot/iot) = "father" (NOTE: ⲁⲃⲃⲁ "abba" is also used)'
        },
        {
          id: 'ex-3-3-2',
          type: 'matching',
          question: 'Match family members',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲓⲱⲧ', english: 'father' },
            { coptic: 'ⲙⲁⲩ', english: 'mother' },
            { coptic: 'ⲥⲟⲛ', english: 'brother' },
            { coptic: 'ⲥⲱⲛⲓ', english: 'sister' }
          ]
        },
        {
          id: 'ex-3-3-3',
          type: 'translation',
          question: 'Translate: ⲣⲱⲙⲓ',
          questionCoptic: 'ⲣⲱⲙⲓ',
          correctAnswer: 'man/human',
          options: ['man/human', 'person', 'woman', 'child'],
          explanation: 'ⲣⲱⲙⲓ (rōmi) = "man" or "human being" (masculine noun)'
        },
        {
          id: 'ex-3-3-4',
          type: 'multiple_choice',
          question: 'What does ϩⲓⲙⲓ mean?',
          questionCoptic: 'ϩⲓⲙⲓ',
          correctAnswer: 'woman',
          options: ['woman', 'man', 'girl', 'mother'],
          explanation: 'ϩⲓⲙⲓ (himi) = "woman" (feminine noun)'
        },
        {
          id: 'ex-3-3-5',
          type: 'multiple_choice',
          question: 'What is "son" in Coptic?',
          correctAnswer: 'ϣⲏⲣⲓ',
          options: ['ϣⲏⲣⲓ', 'ϣⲉⲣⲓ', 'ⲥⲟⲛ', 'ⲥⲱⲛⲓ'],
          explanation: 'ϣⲏⲣⲓ (shēri) = "son" or "child" (masc.)'
        },
        {
          id: 'ex-3-3-6',
          type: 'multiple_choice',
          question: 'What does ϣⲉⲣⲓ mean?',
          questionCoptic: 'ϣⲉⲣⲓ',
          correctAnswer: 'daughter',
          options: ['daughter', 'son', 'sister', 'mother'],
          explanation: 'ϣⲉⲣⲓ (sheri) = "daughter" or "girl"'
        },
        {
          id: 'ex-3-3-7',
          type: 'multiple_choice',
          question: 'What is "boy/young man" in Coptic?',
          correctAnswer: 'ⲁⲗⲟⲩ',
          options: ['ⲁⲗⲟⲩ', 'ϣⲉⲣⲓ', 'ϣⲏⲣⲓ', 'ⲣⲱⲙⲓ'],
          explanation: 'ⲁⲗⲟⲩ (alou) = "boy" or "young man"'
        },
        {
          id: 'ex-3-3-8',
          type: 'matching',
          question: 'Match more family words',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ϣⲏⲣⲓ', english: 'son/child' },
            { coptic: 'ϣⲉⲣⲓ', english: 'daughter' },
            { coptic: 'ⲁⲗⲟⲩ', english: 'boy' },
            { coptic: 'ⲣⲱⲙⲓ', english: 'man' }
          ]
        },
        {
          id: 'ex-3-3-9',
          type: 'translation',
          question: 'Translate to Coptic: "brother"',
          correctAnswer: 'ⲥⲟⲛ',
          options: ['ⲥⲟⲛ', 'ⲥⲱⲛⲓ', 'ϣⲏⲣⲓ', 'ⲓⲱⲧ'],
          explanation: 'ⲥⲟⲛ (son) = "brother"'
        },
        {
          id: 'ex-3-3-10',
          type: 'sentence_building',
          question: 'Build the word: "mother"',
          correctAnswer: 'ⲙⲁⲩ',
          wordBank: ['ⲙⲁⲩ', 'ⲓⲱⲧ', 'ⲥⲱⲛⲓ', 'ⲥⲟⲛ'],
          explanation: 'ⲙⲁⲩ (mau/mav) = "mother"'
        }
      ]
    },
    {
      id: 'lesson-3-4',
      unitId: 'unit-3',
      title: 'Common Nouns',
      description: 'Essential everyday words',
      order: 4,
      xpReward: 15,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-3-4-1',
          type: 'multiple_choice',
          question: 'What is "water" in Coptic?',
          correctAnswer: 'ⲙⲱⲟⲩ',
          options: ['ⲙⲱⲟⲩ', 'ⲱⲓⲕ', 'ⲏⲣⲡ', 'ⲉⲃⲓⲱ'],
          explanation: 'ⲙⲱⲟⲩ (mōou) = "water" (masc. noun)'
        },
        {
          id: 'ex-3-4-2',
          type: 'matching',
          question: 'Match the words',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲙⲱⲟⲩ', english: 'water' },
            { coptic: 'ⲱⲓⲕ', english: 'bread' },
            { coptic: 'ⲏⲣⲡ', english: 'wine' },
            { coptic: 'ⲉⲃⲓⲱ', english: 'honey' }
          ]
        },
        {
          id: 'ex-3-4-3',
          type: 'multiple_choice',
          question: 'What does ⲛⲟⲩⲃ mean?',
          questionCoptic: 'ⲛⲟⲩⲃ',
          correctAnswer: 'gold',
          options: ['gold', 'black', 'white', 'silver'],
          explanation: 'ⲛⲟⲩⲃ (noub) = "gold" (also used for "yellow" color)'
        },
        {
          id: 'ex-3-4-4',
          type: 'multiple_choice',
          question: 'What is "book" in Coptic?',
          correctAnswer: 'ϫⲱⲙ',
          options: ['ϫⲱⲙ', 'ⲧⲟⲧⲥ', 'ⲧⲣⲁⲡⲉⲍⲁ', 'ⲁⲩⲣⲏ'],
          explanation: 'ϫⲱⲙ (jōm) = "book" or "papyrus"'
        },
        {
          id: 'ex-3-4-5',
          type: 'multiple_choice',
          question: 'What does ⲧⲣⲁⲡⲉⲍⲁ mean?',
          questionCoptic: 'ⲧⲣⲁⲡⲉⲍⲁ',
          correctAnswer: 'table',
          options: ['table', 'chair', 'book', 'door'],
          explanation: 'ⲧⲣⲁⲡⲉⲍⲁ (trapeza) = "table" (Greek loanword τράπεζα)'
        },
        {
          id: 'ex-3-4-6',
          type: 'matching',
          question: 'Match household items',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ϫⲱⲙ', english: 'book' },
            { coptic: 'ⲧⲟⲧⲥ', english: 'chair' },
            { coptic: 'ⲧⲣⲁⲡⲉⲍⲁ', english: 'table' },
            { coptic: 'ⲣⲟ', english: 'door/mouth' }
          ]
        },
        {
          id: 'ex-3-4-7',
          type: 'multiple_choice',
          question: 'What is "house" in Coptic?',
          correctAnswer: 'ϩⲓ',
          options: ['ϩⲓ', 'ⲣⲟ', 'ⲫⲉ', 'ⲕⲁϩⲓ'],
          explanation: 'ϩⲓ (hi) = "house" (fem. noun)'
        },
        {
          id: 'ex-3-4-8',
          type: 'multiple_choice',
          question: 'What does ⲕⲁϩⲓ mean?',
          questionCoptic: 'ⲕⲁϩⲓ',
          correctAnswer: 'earth/land',
          options: ['earth/land', 'sky', 'water', 'fire'],
          explanation: 'ⲕⲁϩⲓ (kahi) = "earth" or "land"'
        },
        {
          id: 'ex-3-4-9',
          type: 'translation',
          question: 'Translate to Coptic: "bread"',
          correctAnswer: 'ⲱⲓⲕ',
          options: ['ⲱⲓⲕ', 'ⲙⲱⲟⲩ', 'ⲏⲣⲡ', 'ⲉⲃⲓⲱ'],
          explanation: 'ⲱⲓⲕ (oik) = "bread" (masc. noun)'
        },
        {
          id: 'ex-3-4-10',
          type: 'sentence_building',
          question: 'Build the word: "house"',
          correctAnswer: 'ϩⲓ',
          wordBank: ['ϩⲓ', 'ⲣⲟ', 'ⲫⲉ', 'ⲕⲁϩⲓ'],
          explanation: 'ϩⲓ (hi) = "house"'
        }
      ]
    },
    {
      id: 'lesson-3-5',
      unitId: 'unit-3',
      title: 'Body Parts',
      description: 'Learn parts of the body',
      order: 5,
      xpReward: 15,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-3-5-1',
          type: 'multiple_choice',
          question: 'What is "eye" in Coptic?',
          correctAnswer: 'ⲃⲁⲗ',
          options: ['ⲃⲁⲗ', 'ϫⲓϫ', 'ⲣⲱ', 'ⲁⲫⲉ'],
          explanation: 'ⲃⲁⲗ (bal) = "eye" (plural: ⲃⲁⲗ or ⲛⲓⲃⲁⲗ)'
        },
        {
          id: 'ex-3-5-2',
          type: 'matching',
          question: 'Match body parts',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲃⲁⲗ', english: 'eye' },
            { coptic: 'ϫⲓϫ', english: 'hand' },
            { coptic: 'ⲣⲱ', english: 'mouth' },
            { coptic: 'ⲁⲫⲉ', english: 'head' }
          ]
        },
        {
          id: 'ex-3-5-3',
          type: 'multiple_choice',
          question: 'What does ϫⲓϫ mean?',
          questionCoptic: 'ϫⲓϫ',
          correctAnswer: 'hand',
          options: ['hand', 'foot', 'arm', 'finger'],
          explanation: 'ϫⲓϫ (jij) = "hand"'
        },
        {
          id: 'ex-3-5-4',
          type: 'multiple_choice',
          question: 'What is "heart" in Coptic?',
          correctAnswer: 'ϩⲏⲧ',
          options: ['ϩⲏⲧ', 'ⲃⲁⲗ', 'ⲁⲫⲉ', 'ⲣⲱ'],
          explanation: 'ϩⲏⲧ (hēt) = "heart" (also means "belly" or "interior")'
        },
        {
          id: 'ex-3-5-5',
          type: 'multiple_choice',
          question: 'What does ⲥⲱⲙⲁ mean?',
          questionCoptic: 'ⲥⲱⲙⲁ',
          correctAnswer: 'body',
          options: ['body', 'soul', 'spirit', 'mind'],
          explanation: 'ⲥⲱⲙⲁ (sōma) = "body" (Greek loanword σῶμα)'
        },
        {
          id: 'ex-3-5-6',
          type: 'matching',
          question: 'Match more body parts',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ϩⲏⲧ', english: 'heart' },
            { coptic: 'ⲥⲱⲙⲁ', english: 'body' },
            { coptic: 'ⲙⲁϣϫ', english: 'ear' },
            { coptic: 'ⲛⲓϥⲓ', english: 'breath/soul' }
          ]
        },
        {
          id: 'ex-3-5-7',
          type: 'fill_blank',
          question: 'Complete: ⲃⲁⲗ means ___',
          correctAnswer: 'eye',
          options: ['eye', 'hand', 'mouth', 'head'],
          explanation: 'ⲃⲁⲗ (bal) = "eye"'
        },
        {
          id: 'ex-3-5-8',
          type: 'multiple_choice',
          question: 'The plural of ⲃⲁⲗ (eye) is?',
          correctAnswer: 'ⲛⲓⲃⲁⲗ',
          options: ['ⲛⲓⲃⲁⲗ', 'ⲃⲁⲗⲟⲩ', 'ⲃⲁⲗⲓ', 'ⲃⲁⲗⲉ'],
          explanation: 'ⲛⲓⲃⲁⲗ (nibal) = "the eyes" (ⲛⲓ = plural article + ⲃⲁⲗ)'
        },
        {
          id: 'ex-3-5-9',
          type: 'translation',
          question: 'What does ⲙⲁϣϫ mean?',
          questionCoptic: 'ⲙⲁϣϫ',
          correctAnswer: 'ear',
          options: ['ear', 'nose', 'eye', 'mouth'],
          explanation: 'ⲙⲁϣϫ (mashj) = "ear"'
        },
        {
          id: 'ex-3-5-10',
          type: 'sentence_building',
          question: 'Build "the hand" (ϯϫⲓϫ)',
          correctAnswer: 'ϯ ϫⲓϫ',
          wordBank: ['ϯ', 'ϫⲓϫ', 'ⲡⲓ', 'ⲃⲁⲗ'],
          explanation: 'ϯϫⲓϫ = ϯ (the-fem.) + ϫⲓϫ (hand - feminine noun)'
        }
      ]
    }
  ]
};

export default unit3;
