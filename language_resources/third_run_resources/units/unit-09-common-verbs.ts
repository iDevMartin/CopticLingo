import { Unit } from '../../types';

// UNIT 9: COMMON VERBS
// Verified for Bohairic dialect consistency
// Based on Mallon Bohairic Grammar and dictionaries

const unit9: Unit = {
  id: 'unit-9',
  title: 'Common Verbs',
  description: 'Learn essential action words',
  order: 9,
  color: '#58CC02',
  lessons: [
    {
      id: 'lesson-9-1',
      unitId: 'unit-9',
      title: 'Basic Action Verbs (Part 1)',
      description: 'Essential daily verbs: eat, drink, see, hear',
      order: 1,
      xpReward: 20,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-9-1-1',
          type: 'multiple_choice',
          question: 'What is "to eat" in Coptic?',
          correctAnswer: 'ⲟⲩⲱⲙ',
          options: ['ⲟⲩⲱⲙ', 'ⲥⲱ', 'ⲛⲁⲩ', 'ⲥⲱⲧⲙ'],
          explanation: 'ⲟⲩⲱⲙ (ouōm) means "to eat" (infinitive verb - NOT the noun "bread" which is ⲱⲓⲕ!)'
        },
        {
          id: 'ex-9-1-2',
          type: 'matching',
          question: 'Match the verbs',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲟⲩⲱⲙ', english: 'to eat' },
            { coptic: 'ⲥⲱ', english: 'to drink' },
            { coptic: 'ⲛⲁⲩ', english: 'to see' },
            { coptic: 'ⲥⲱⲧⲙ', english: 'to hear' }
          ]
        },
        {
          id: 'ex-9-1-3',
          type: 'multiple_choice',
          question: 'What does ⲙⲟϣⲓ mean?',
          questionCoptic: 'ⲙⲟϣⲓ',
          correctAnswer: 'to walk',
          options: ['to walk', 'to run', 'to sit', 'to stand'],
          explanation: 'ⲙⲟϣⲓ (moshi) means "to walk" (Bohairic form)'
        },
        {
          id: 'ex-9-1-4',
          type: 'translation',
          question: 'Translate: ⲥⲱⲧⲙ',
          questionCoptic: 'ⲥⲱⲧⲙ',
          correctAnswer: 'to hear/listen',
          options: ['to hear/listen', 'to see', 'to speak', 'to eat'],
          explanation: 'ⲥⲱⲧⲙ (sōtm) means "to hear" or "to listen"'
        },
        {
          id: 'ex-9-1-5',
          type: 'multiple_choice',
          question: 'What is "to drink" in Coptic?',
          correctAnswer: 'ⲥⲱ',
          options: ['ⲥⲱ', 'ⲟⲩⲱⲙ', 'ⲥⲱⲧⲙ', 'ⲙⲟϣⲓ'],
          explanation: 'ⲥⲱ (sō) means "to drink"'
        },
        {
          id: 'ex-9-1-6',
          type: 'fill_blank',
          question: 'Complete: To see = ___',
          correctAnswer: 'ⲛⲁⲩ',
          options: ['ⲛⲁⲩ', 'ⲥⲱⲧⲙ', 'ⲟⲩⲱⲙ', 'ⲥⲱ'],
          explanation: 'ⲛⲁⲩ (nau) means "to see"'
        },
        {
          id: 'ex-9-1-7',
          type: 'matching',
          question: 'Match more verbs',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲙⲟϣⲓ', english: 'to walk' },
            { coptic: 'ⲭⲁ', english: 'to put/place' },
            { coptic: 'Ϭⲓ', english: 'to take/receive' },
            { coptic: 'ⲟⲩⲱⲣⲡ', english: 'to send' }
          ]
        },
        {
          id: 'ex-9-1-8',
          type: 'multiple_choice',
          question: 'What does Ϭⲓ mean?',
          questionCoptic: 'Ϭⲓ',
          correctAnswer: 'to take/receive',
          options: ['to take/receive', 'to give', 'to put', 'to send'],
          explanation: 'Ϭⲓ (ji) means "to take" or "to receive" (Bohairic uses Ϭ not ϫ for this verb)'
        },
        {
          id: 'ex-9-1-9',
          type: 'translation',
          question: 'Translate: ⲭⲁ',
          questionCoptic: 'ⲭⲁ',
          correctAnswer: 'to put/place',
          options: ['to put/place', 'to take', 'to send', 'to bring'],
          explanation: 'ⲭⲁ (kha) means "to put" or "to place"'
        },
        {
          id: 'ex-9-1-10',
          type: 'multiple_choice',
          question: 'What is "to send" in Coptic?',
          correctAnswer: 'ⲟⲩⲱⲣⲡ',
          options: ['ⲟⲩⲱⲣⲡ', 'Ϭⲓ', 'ⲭⲁ', 'ⲙⲟϣⲓ'],
          explanation: 'ⲟⲩⲱⲣⲡ (ouōrp) means "to send"'
        }
      ]
    },
    {
      id: 'lesson-9-2',
      unitId: 'unit-9',
      title: 'Basic Action Verbs (Part 2)',
      description: 'More essential verbs: go, come, say, do',
      order: 2,
      xpReward: 20,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-9-2-1',
          type: 'matching',
          question: 'Match the action verbs',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ϣⲉⲛⲓ', english: 'to go' },
            { coptic: 'ⲓ̀', english: 'to come' },
            { coptic: 'ϫⲱ', english: 'to say/speak' },
            { coptic: 'ⲓ̀ⲣⲓ', english: 'to do/make' }
          ]
        },
        {
          id: 'ex-9-2-2',
          type: 'multiple_choice',
          question: 'What is "to call/name" in Coptic?',
          correctAnswer: 'ⲙⲟⲩϯ',
          options: ['ⲙⲟⲩϯ', 'ϫⲱ', 'ⲓ̀ⲣⲓ', 'ϣⲉⲛⲓ'],
          explanation: 'ⲙⲟⲩϯ (mouti) means "to call" or "to name"'
        },
        {
          id: 'ex-9-2-3',
          type: 'translation',
          question: 'Translate: ϣⲉⲛⲓ',
          questionCoptic: 'ϣⲉⲛⲓ',
          correctAnswer: 'to go',
          options: ['to go', 'to come', 'to leave', 'to arrive'],
          explanation: 'ϣⲉⲛⲓ (sheni) means "to go" (Bohairic form)'
        },
        {
          id: 'ex-9-2-4',
          type: 'multiple_choice',
          question: 'What does ⲓ̀ⲣⲓ mean?',
          questionCoptic: 'ⲓ̀ⲣⲓ',
          correctAnswer: 'to do/make',
          options: ['to do/make', 'to say', 'to be', 'to have'],
          explanation: 'ⲓ̀ⲣⲓ (iri) means "to do" or "to make" (Bohairic infinitive)'
        },
        {
          id: 'ex-9-2-5',
          type: 'matching',
          question: 'Match more action verbs',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'Ϯ', english: 'to give' },
            { coptic: 'ⲙⲟⲩϯ', english: 'to call' },
            { coptic: 'ⲥⲉⲃⲧⲉ', english: 'to prepare' },
            { coptic: 'ⲥ̀ⲙⲟⲩ', english: 'to bless' }
          ]
        },
        {
          id: 'ex-9-2-6',
          type: 'multiple_choice',
          question: 'What is "to give" in Coptic?',
          correctAnswer: 'Ϯ',
          options: ['Ϯ', 'Ϭⲓ', 'ⲭⲁ', 'ⲟⲩⲱⲣⲡ'],
          explanation: 'Ϯ (ti) means "to give"'
        },
        {
          id: 'ex-9-2-7',
          type: 'translation',
          question: 'Translate: ϫⲱ',
          questionCoptic: 'ϫⲱ',
          correctAnswer: 'to say/speak',
          options: ['to say/speak', 'to hear', 'to write', 'to read'],
          explanation: 'ϫⲱ (jō) means "to say" or "to speak"'
        },
        {
          id: 'ex-9-2-8',
          type: 'fill_blank',
          question: 'Complete: To come = ___',
          correctAnswer: 'ⲓ̀',
          options: ['ⲓ̀', 'ϣⲉⲛⲓ', 'ⲙⲟϣⲓ', 'ⲟⲩⲱⲣⲡ'],
          explanation: 'ⲓ̀ (i) means "to come" (Bohairic form)'
        },
        {
          id: 'ex-9-2-9',
          type: 'multiple_choice',
          question: 'What is "to bless" in Coptic?',
          correctAnswer: 'ⲥ̀ⲙⲟⲩ',
          options: ['ⲥ̀ⲙⲟⲩ', 'ⲙⲟⲩϯ', 'Ϯ', 'ϫⲱ'],
          explanation: 'ⲥ̀ⲙⲟⲩ (smou) means "to bless"'
        },
        {
          id: 'ex-9-2-10',
          type: 'translation',
          question: 'Translate to Coptic: "to prepare"',
          correctAnswer: 'ⲥⲉⲃⲧⲉ',
          options: ['ⲥⲉⲃⲧⲉ', 'ⲓ̀ⲣⲓ', 'ⲥ̀ⲙⲟⲩ', 'ⲙⲟⲩϯ'],
          explanation: 'ⲥⲉⲃⲧⲉ (sebte) means "to prepare"'
        }
      ]
    },
    {
      id: 'lesson-9-3',
      unitId: 'unit-9',
      title: 'More Essential Verbs',
      description: 'Additional important verbs',
      order: 3,
      xpReward: 20,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-9-3-1',
          type: 'matching',
          question: 'Match cognitive and communication verbs',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲉ̀ⲙⲓ', english: 'to know' },
            { coptic: 'ⲙⲉⲩⲓ̀', english: 'to think' },
            { coptic: 'ⲟⲩⲱϣ', english: 'to want/wish' },
            { coptic: 'ⲥⲁϫⲓ', english: 'to speak/talk' }
          ]
        },
        {
          id: 'ex-9-3-2',
          type: 'multiple_choice',
          question: 'What is "to love" in Coptic?',
          correctAnswer: 'ⲙⲉⲛⲣⲉ',
          options: ['ⲙⲉⲛⲣⲉ', 'ⲙⲟⲥϯ', 'ⲉ̀ⲙⲓ', 'ⲟⲩⲱϣ'],
          explanation: 'ⲙⲉⲛⲣⲉ (menre) means "to love" (Bohairic form - verb root ⲙⲉⲣ- + infinitive ending)'
        },
        {
          id: 'ex-9-3-3',
          type: 'translation',
          question: 'Translate: ⲟⲩⲱⲛ',
          questionCoptic: 'ⲟⲩⲱⲛ',
          correctAnswer: 'to open',
          options: ['to open', 'to close', 'to lock', 'to break'],
          explanation: 'ⲟⲩⲱⲛ (ouōn) means "to open"'
        },
        {
          id: 'ex-9-3-4',
          type: 'matching',
          question: 'Match state and position verbs',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ϩⲉⲙⲥⲓ', english: 'to sit' },
            { coptic: 'ⲟ̀ϩⲓ ⲉ̀ⲣⲁⲧ', english: 'to stand' },
            { coptic: 'ⲉⲛⲕⲟⲧ', english: 'to sleep' },
            { coptic: 'ⲧⲱⲛϥ', english: 'to rise/get up' }
          ]
        },
        {
          id: 'ex-9-3-5',
          type: 'multiple_choice',
          question: 'What does ⲙⲟⲥϯ mean?',
          questionCoptic: 'ⲙⲟⲥϯ',
          correctAnswer: 'to hate',
          options: ['to hate', 'to love', 'to like', 'to fear'],
          explanation: 'ⲙⲟⲥϯ (mosti) means "to hate"'
        },
        {
          id: 'ex-9-3-6',
          type: 'translation',
          question: 'Translate: ⲙⲁϣⲑⲁⲙ',
          questionCoptic: 'ⲙⲁϣⲑⲁⲙ',
          correctAnswer: 'to close',
          options: ['to close', 'to open', 'to lock', 'to shut'],
          explanation: 'ⲙⲁϣⲑⲁⲙ (mashtham) means "to close"'
        },
        {
          id: 'ex-9-3-7',
          type: 'matching',
          question: 'Match more verbs',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲥ̀ϧⲁⲓ', english: 'to write' },
            { coptic: 'ⲱϣ', english: 'to read' },
            { coptic: 'ⲧⲁⲙⲟ', english: 'to tell/inform' },
            { coptic: 'ⲑⲱⲟⲩϯ', english: 'to gather' }
          ]
        },
        {
          id: 'ex-9-3-8',
          type: 'fill_blank',
          question: 'Complete: To know = ___',
          correctAnswer: 'ⲉ̀ⲙⲓ',
          options: ['ⲉ̀ⲙⲓ', 'ⲙⲉⲩⲓ̀', 'ⲛⲁⲩ', 'ⲥⲱⲧⲙ'],
          explanation: 'ⲉ̀ⲙⲓ (emi) means "to know"'
        },
        {
          id: 'ex-9-3-9',
          type: 'multiple_choice',
          question: 'What is "to want" in Coptic?',
          correctAnswer: 'ⲟⲩⲱϣ',
          options: ['ⲟⲩⲱϣ', 'ⲙⲉⲛⲣⲉ', 'ⲉ̀ⲙⲓ', 'ⲙⲟⲥϯ'],
          explanation: 'ⲟⲩⲱϣ (ouōsh) means "to want" or "to wish"'
        },
        {
          id: 'ex-9-3-10',
          type: 'translation',
          question: 'Translate to Coptic: "to write"',
          correctAnswer: 'ⲥ̀ϧⲁⲓ',
          options: ['ⲥ̀ϧⲁⲓ', 'ⲱϣ', 'ⲥⲁϫⲓ', 'ϫⲱ'],
          explanation: 'ⲥ̀ϧⲁⲓ (skhai) means "to write"'
        }
      ]
    },
    {
      id: 'lesson-9-4',
      unitId: 'unit-9',
      title: 'Verb Combinations and Phrases',
      description: 'Verb + preposition combinations and idiomatic expressions',
      order: 4,
      xpReward: 25,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-9-4-1',
          type: 'translation',
          question: 'Translate: ϣⲉⲛⲓ ⲉ̀',
          questionCoptic: 'ϣⲉⲛⲓ ⲉ̀',
          correctAnswer: 'go to',
          options: ['go to', 'come from', 'walk to', 'arrive at'],
          explanation: 'ϣⲉⲛⲓ ⲉ̀ = go + to (common verb+preposition combination - Bohairic ϣⲉⲛⲓ not ⲃⲱⲕ!)'
        },
        {
          id: 'ex-9-4-2',
          type: 'multiple_choice',
          question: 'What does ⲓ̀ ⲉ̀ⲃⲟⲗ mean?',
          questionCoptic: 'ⲓ̀ ⲉ̀ⲃⲟⲗ',
          correctAnswer: 'come out / go out',
          options: ['come out / go out', 'come in', 'come to', 'come from'],
          explanation: 'ⲓ̀ ⲉ̀ⲃⲟⲗ = come + out = "come out, go out" (Bohairic ⲓ̀ not ⲉⲓ!)'
        },
        {
          id: 'ex-9-4-3',
          type: 'matching',
          question: 'Match verb+preposition combinations',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ϣⲉⲛⲓ ⲉ̀ϧⲟⲩⲛ', english: 'go in / enter' },
            { coptic: 'ⲓ̀ ⲉ̀ⲃⲟⲗ', english: 'come out / exit' },
            { coptic: 'ⲟ̀ϩⲓ ⲉ̀ⲣⲁⲧ', english: 'stand up / stand' },
            { coptic: 'ⲙⲟϣⲓ ⲛⲉⲙ', english: 'walk with' }
          ]
        },
        {
          id: 'ex-9-4-4',
          type: 'translation',
          question: 'Translate: ϯⲥⲱⲧⲙ ⲉ̀',
          questionCoptic: 'ϯⲥⲱⲧⲙ ⲉ̀',
          correctAnswer: 'I listen to',
          options: ['I listen to', 'I hear from', 'I speak to', 'I obey'],
          explanation: 'ϯⲥⲱⲧⲙ ⲉ̀ = I listen + to (verb+preposition: "listen to")'
        },
        {
          id: 'ex-9-4-5',
          type: 'sentence_building',
          question: 'Build: "He looks at the book"',
          correctAnswer: 'ϥϫⲟⲩϣⲧ ⲉ̀ⲡⲓϫⲱⲙ',
          wordBank: ['ϥ', 'ϫⲟⲩϣⲧ', 'ⲉ̀', 'ⲡⲓϫⲱⲙ'],
          explanation: 'ϥϫⲟⲩϣⲧ ⲉ̀ⲡⲓϫⲱⲙ = he looks-at the book (ϫⲟⲩϣⲧ ⲉ̀ = look at)'
        },
        {
          id: 'ex-9-4-6',
          type: 'fill_blank',
          question: 'Complete: ⲁⲩϣⲉⲛⲓ ___ ϯⲉⲕⲕⲗⲏⲥⲓⲁ = they went to church',
          correctAnswer: 'ⲉ̀',
          options: ['ⲉ̀', 'ⲉ̀ⲃⲟⲗ', 'ⲛⲉⲙ', 'ϧⲉⲛ'],
          explanation: 'ϣⲉⲛⲓ ⲉ̀ = go to (motion toward requires ⲉ̀ preposition)'
        },
        {
          id: 'ex-9-4-7',
          type: 'multiple_choice',
          question: 'What is the idiomatic meaning of Ϭⲓ ϩⲏⲧ?',
          questionCoptic: 'Ϭⲓ ϩⲏⲧ',
          correctAnswer: 'take heart / be encouraged',
          options: ['take heart / be encouraged', 'take hand', 'give heart', 'lose heart'],
          explanation: 'Ϭⲓ ϩⲏⲧ = take + heart = "take heart, be encouraged" (idiomatic expression)'
        },
        {
          id: 'ex-9-4-8',
          type: 'translation',
          question: 'Translate: ⲁⲛⲟ̀ϩⲓ ⲉ̀ⲣⲁⲧⲉⲛ ⲙⲡⲉϥⲙ̀ⲑⲟ',
          questionCoptic: 'ⲁⲛⲟ̀ϩⲓ ⲉ̀ⲣⲁⲧⲉⲛ ⲙⲡⲉϥⲙ̀ⲑⲟ',
          correctAnswer: 'we stood before him',
          options: ['we stood before him', 'we stood with him', 'we stood after him', 'we walked before him'],
          explanation: 'ⲁⲛⲟ̀ϩⲓ ⲉ̀ⲣⲁⲧⲉⲛ = we stood + ⲙⲡⲉϥⲙ̀ⲑⲟ = before him (compound verbal expression)'
        },
        {
          id: 'ex-9-4-9',
          type: 'matching',
          question: 'Match idiomatic verb phrases',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'Ϯ ϩⲏⲧ', english: 'pay attention (give heart)' },
            { coptic: 'ϫⲱ ⲙⲙⲟⲥ', english: 'say it / speak of it' },
            { coptic: 'ⲓ̀ⲣⲓ ⲛⲁϩϯ', english: 'believe (make faith)' },
            { coptic: 'Ϭⲓ ⲛⲓⲃⲉⲛ', english: 'take everyone' }
          ]
        },
        {
          id: 'ex-9-4-10',
          type: 'sentence_building',
          question: 'Build: "They came out of the house"',
          correctAnswer: 'ⲁⲩⲓ̀ ⲉ̀ⲃⲟⲗ ϧⲉⲛ ⲡⲓⲏⲓ',
          wordBank: ['ⲁⲩ', 'ⲓ̀', 'ⲉ̀ⲃⲟⲗ', 'ϧⲉⲛ', 'ⲡⲓⲏⲓ'],
          explanation: 'ⲁⲩⲓ̀ ⲉ̀ⲃⲟⲗ ϧⲉⲛ ⲡⲓⲏⲓ = they came out from the house (compound verb+preposition combination)'
        }
      ]
    }
  ]
};

export default unit9;
