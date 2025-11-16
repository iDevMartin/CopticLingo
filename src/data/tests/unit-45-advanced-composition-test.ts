import { Lesson } from '../../types';

// TEST FILE FOR UNIT 45: ADVANCED COMPOSITION
// Comprehensive test exercises covering all 4 lessons
// 25 exercises total - testing original Coptic writing and composition

const unit45Test: Lesson = {
id: 'lesson-45-test',
      unitId: 'unit-45',
      title: 'Advanced Composition Comprehensive Test',
      description: 'Test all advanced composition skills and original writing',
      order: 1,
      xpReward: 150,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'test-45-1',
          type: 'sentence_building',
          question: 'Build a prayer opening: "O Lord, have mercy"',
          correctAnswer: 'Ⲱ̀ Ⲡϭⲟⲓⲥ ⲛⲁⲓ ⲛⲁⲛ',
          wordBank: ['Ⲱ̀', 'Ⲡϭⲟⲓⲥ', 'ⲛⲁⲓ', 'ⲛⲁⲛ'],
          explanation: 'Ⲱ̀ Ⲡϭⲟⲓⲥ ⲛⲁⲓ ⲛⲁⲛ = O Lord, have mercy on us (standard prayer opening)'
        },
        {
          id: 'test-45-2',
          type: 'multiple_choice',
          question: 'How would you say "We glorify You"?',
          correctAnswer: 'Ⲧⲉⲛϯⲱ̀ⲟⲩ ⲛⲁⲕ',
          options: ['Ⲧⲉⲛϯⲱ̀ⲟⲩ ⲛⲁⲕ', 'Ⲧⲉⲛⲉⲣⲱ̀ⲟⲩ', 'Ⲁⲛϯⲱ̀ⲟⲩ', 'Ϯⲱ̀ⲟⲩ ⲛⲁⲛ'],
          explanation: 'Ⲧⲉⲛϯⲱ̀ⲟⲩ ⲛⲁⲕ = we give glory to you (present tense + indirect object)'
        },
        {
          id: 'test-45-3',
          type: 'translation',
          question: 'Translate this prayer phrase: Ⲧⲉⲛϯϩⲟ ⲉ̀ⲣⲟⲕ ⲛⲁⲓ ⲛⲁⲛ',
          questionCoptic: 'Ⲧⲉⲛϯϩⲟ ⲉ̀ⲣⲟⲕ ⲛⲁⲓ ⲛⲁⲛ',
          correctAnswer: 'We call upon You, have mercy on us',
          options: ['We call upon You, have mercy on us', 'We cry to You for mercy', 'Calling You for compassion', 'We ask Your mercy'],
          explanation: 'Ⲧⲉⲛϯϩⲟ ⲉ̀ⲣⲟⲕ ⲛⲁⲓ ⲛⲁⲛ = we call upon you, have mercy on us (prayer formula)'
        },
        {
          id: 'test-45-4',
          type: 'fill_blank',
          question: 'Complete the praise: Ⲇⲟⲝⲁ ⲥⲓ ___ = Glory to God',
          correctAnswer: 'Ⲫϯ',
          options: ['Ⲫϯ', 'Ⲑⲉⲟⲥ', 'Ⲕⲩⲣⲓⲟⲥ', 'Ⲡⲁⲧⲏⲣ'],
          explanation: 'Ⲇⲟⲝⲁ ⲥⲓ Ⲫϯ = glory to God (doxology, from Greek δόξα σοι Θεός)'
        },
        {
          id: 'test-45-5',
          type: 'sentence_building',
          question: 'Build: "Bless us, O our Father"',
          correctAnswer: 'Ⲥ̀ⲙⲟⲩ ⲉ̀ⲣⲟⲛ Ⲱ̀ Ⲡⲉⲛⲓⲱⲧ',
          wordBank: ['Ⲥ̀ⲙⲟⲩ', 'ⲉ̀ⲣⲟⲛ', 'Ⲱ̀', 'Ⲡⲉⲛⲓⲱⲧ'],
          explanation: 'Ⲥ̀ⲙⲟⲩ ⲉ̀ⲣⲟⲛ Ⲱ̀ Ⲡⲉⲛⲓⲱⲧ = bless us, O our Father (imperative + vocative)'
        },
        {
          id: 'test-45-6',
          type: 'matching',
          question: 'Match prayer vocabulary',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'Ⲧⲉⲛⲟⲩⲱϣⲧ ⲙ̀ⲙⲟⲕ', english: 'We worship You' },
            { coptic: 'Ⲧⲉⲛⲥ̀ⲙⲟⲩ ⲉ̀ⲣⲟⲕ', english: 'We bless You' },
            { coptic: 'Ⲧⲉⲛϣⲉⲡϩ̀ⲙⲟⲧ ⲛ̀ⲧⲟⲧⲕ', english: 'We give thanks to You' },
            { coptic: 'Ⲧⲉⲛϯϩⲟ ⲉ̀ⲣⲟⲕ', english: 'We call upon You' }
          ]
        },
        {
          id: 'test-45-7',
          type: 'translation',
          question: 'Translate: Ⲁⲣⲓⲃⲟⲏ̀ⲑⲓⲛ ⲉ̀ⲣⲟⲛ Ⲱ̀ Ⲫϯ',
          questionCoptic: 'Ⲁⲣⲓⲃⲟⲏ̀ⲑⲓⲛ ⲉ̀ⲣⲟⲛ Ⲱ̀ Ⲫϯ',
          correctAnswer: 'Help us, O God',
          options: ['Help us, O God', 'Come to help us', 'God is our help', 'We ask for help'],
          explanation: 'Simple prayer petition'
        },
        {
          id: 'test-45-8',
          type: 'multiple_choice',
          question: 'How do you start a personal letter in Coptic?',
          correctAnswer: 'Ⲯⲓ ⲛ̀ⲡⲁϯⲟ (greetings to my beloved)',
          options: ['Ⲯⲓ ⲛ̀ⲡⲁϯⲟ (greetings to my beloved)', 'Ⲁⲓⲙⲟⲉⲛ (I was)', 'Ⲫⲩⲏⲧⲉⲛⲓ (be well)', 'Ⲕⲁⲗⲏⲗⲓⲁ (peace)'],
          explanation: 'Traditional greeting for correspondence'
        },
        {
          id: 'test-45-9',
          type: 'translation',
          question: 'Translate: Ⲧⲥⲟⲛ ⲏ ⲧⲉ ⲁⲛⲟⲛⲟⲩ ⲛ̀ⲙⲓ',
          questionCoptic: 'Ⲧⲟⲩⲛⲟⲩ ⲏ ⲧⲉ ⲁⲅⲁⲃⲏ ⲙ̀ⲡⲁ',
          correctAnswer: 'Now I write this letter to you',
          options: ['Now I write this letter to you', 'I am writing a letter', 'This letter is sent', 'Let me write to you'],
          explanation: 'Letter composition introduction'
        },
        {
          id: 'test-45-10',
          type: 'fill_blank',
          question: 'Complete: Ⲏ ⲥⲟⲥ ⲕⲁⲧⲁϭⲣⲁ ⲛⲁ ___ = This day I declare',
          correctAnswer: 'ⲥⲟϥ',
          options: ['ⲥⲟϥ', 'ⲣⲏϯ', 'ⲁⲃⲟⲕ', 'ⲑⲟⲩⲛ'],
          explanation: 'First-person narrative'
        },
        {
          id: 'test-45-11',
          type: 'sentence_building',
          question: 'Build: "I have written about the faith"',
          correctAnswer: 'Ⲁⲓⲥ̀ϧⲁⲓ ⲛ̀ⲧⲉ ⲡⲏⲉⲧⲃⲓⲟⲧⲉⲓⲥ',
          wordBank: ['Ⲁⲓⲥ̀ϧⲁⲓ', 'ⲛ̀ⲧⲉ', 'ⲡⲓ', 'ⲃⲓⲟⲧⲉⲓⲥ'],
          explanation: 'Perfect past tense narration of writing'
        },
        {
          id: 'test-45-12',
          type: 'matching',
          question: 'Match narrative connectors',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲟⲩⲟϩ ϩⲟⲧⲉ', english: 'and when' },
            { coptic: 'ϩⲱⲥⲧⲉ', english: 'and then / so' },
            { coptic: 'ⲟⲩⲛ ⲇⲉ', english: 'therefore / so then' },
            { coptic: 'ⲉⲛⲧⲁϥⲓ̀', english: 'after he came' }
          ]
        },
        {
          id: 'test-45-13',
          type: 'translation',
          question: 'Translate: Ⲛⲁⲓ ⲙⲁⲑⲱ ⲁⲛⲧⲁⲕ ⲕⲓⲋⲟⲛ ⲛ̀ⲧⲣⲉⲟⲣ',
          questionCoptic: 'Ⲛⲁⲓ ⲙⲁⲑⲱⲣ ⲁⲛⲧⲏⲃⲉⲥ ϭⲣⲓⲍⲟⲛ ⲙ̀ⲡⲁⲥⲕⲉⲩⲏ',
          correctAnswer: 'Therefore I write this to you as preparation',
          options: ['Therefore I write this to you as preparation', 'For this I have written', 'I wrote as was needed', 'This is my writing purpose'],
          explanation: 'Narrative purpose statement'
        },
        {
          id: 'test-45-14',
          type: 'fill_blank',
          question: 'Complete: Ⲁⲗⲗⲁ ⲛⲓ ____ ⲛ̀ⲣⲟ ⲧⲟⲣ ⲥϭⲓⲃⲟ = But some things go beyond',
          correctAnswer: 'ⲡⲣⲟⲃⲓⲏⲙⲁⲧⲁ',
          options: ['ⲡⲣⲟⲃⲓⲏⲙⲁⲧⲁ', 'ⲙⲉⲣⲉ', 'ⲗⲟⲅⲟⲓ', 'ⲇⲩⲛⲁⲙⲓⲥ'],
          explanation: 'Complex sentences with exceptions'
        },
        {
          id: 'test-45-15',
          type: 'sentence_building',
          question: 'Build: "I pray that you understand this"',
          correctAnswer: 'Ϯⲧⲱⲃϩ ⲉ̀ϩ̀ⲣⲏⲓ ⲉ̀ⲧⲉⲛⲉ̀ⲙⲓ ⲡⲁⲓ',
          wordBank: ['Ϯⲧⲱⲃϩ', 'ⲉ̀ϩ̀ⲣⲏⲓ', 'ⲉ̀ⲧⲉⲧⲉⲛ', 'ⲉ̀ⲙⲓ', 'ⲡⲁⲓ'],
          explanation: 'Prayer with objective clause'
        },
        {
          id: 'test-45-16',
          type: 'translation',
          question: 'Translate: Ⲙⲁⲩⲣⲡⲁⲛ ⲟⲩⲛⲧⲉ ⲟⲥ ⲡⲏⲉⲧⲁⲃ',
          questionCoptic: 'Ⲉⲛ ⲣⲟⲓⲥ ⲡⲁⲛ ⲟⲛⲧⲟⲥ ⲡⲓⲥⲟϭ',
          correctAnswer: 'In those days all was light',
          options: ['In those days all was light', 'Those days brought light', 'All things were bright then', 'When everything brightened'],
          explanation: 'Poetic composition style'
        },
        {
          id: 'test-45-17',
          type: 'matching',
          question: 'Match literary techniques',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲛ̀ⲧⲟⲓ ⲙⲉⲛ...ⲛ̀ⲧⲟⲛⲧ ⲇⲉ', english: 'on one hand...on the other hand' },
            { coptic: 'ⲕⲁⲧⲁⲑⲉⲥⲓⲥ', english: 'repetition / parallelism' },
            { coptic: 'ⲟⲓⲇⲉⲣ', english: 'well-ordered / sequential' },
            { coptic: 'ⲁⲛⲧⲓⲣⲏⲛⲏ', english: 'antithesis / contrast' }
          ]
        },
        {
          id: 'test-45-18',
          type: 'fill_blank',
          question: 'Complete: Ⲕⲁⲧⲁ ⲧⲏⲛ ⲃⲣⲧⲁ ⲛ̀ⲧⲓ ___ = According to ancient tradition',
          correctAnswer: 'ⲡⲁⲗⲁⲟⲥ',
          options: ['ⲡⲁⲗⲁⲟⲥ', 'ⲣⲕⲣⲟⲛⲓⲟⲛ', 'ⲅⲉⲛⲟⲥ', 'ⲛⲟⲙⲟⲥ'],
          explanation: 'Reference to ancient precedent'
        },
        {
          id: 'test-45-19',
          type: 'sentence_building',
          question: 'Build: "The story begins in ancient times"',
          correctAnswer: 'Ⲡⲏⲣⲟ ϯⲧⲛⲉⲩⲓ ⲙ̀ⲡⲁⲗⲁⲓⲟⲥ ⲁⲓⲱⲛ',
          wordBank: ['Ⲡⲏⲣⲟ', 'ϯⲧⲛⲉⲩⲓ', 'ⲙ̀ⲡⲁⲗⲁⲓⲟⲥ', 'ⲁⲓⲱⲛ'],
          explanation: 'Narrative opening with temporal setting'
        },
        {
          id: 'test-45-20',
          type: 'translation',
          question: 'Translate: Ⲧⲛⲟⲩ ⲛ̀ϫⲱⲱⲣ ⲛ̀ⲃⲱⲕ ⲛ̀ⲩⲥ ⲛ̀ⲡⲉⲩⲣⲁⲥ',
          questionCoptic: 'Ⲧⲛⲟⲩ ⲛ̀ϫⲱⲱⲣ ⲛ̀ⲧⲣⲁⲓⲱ ⲙ̀ⲛ ⲧⲉ ⲣⲱⲡ ⲛ̀ⲙⲉ',
          correctAnswer: 'And the shepherds kept watch over their flocks',
          options: ['And the shepherds kept watch over their flocks', 'The shepherds guarded the sheep', 'Watching shepherds and their flocks', 'The flocks were guarded by shepherds'],
          explanation: 'Biblical narrative composition'
        },
        {
          id: 'test-45-21',
          type: 'fill_blank',
          question: 'Complete: Ⲛ̀ⲧⲉⲓ ⲟⲩ ⲁⲡⲓⲕⲟⲥⲙⲟⲩ ___ = The cosmos is said',
          correctAnswer: 'ⲛ̀ⲧⲉ',
          options: ['ⲛ̀ⲧⲉ', 'ⲁⲩ', 'ⲉⲓⲣⲏⲧⲁⲓ', 'ⲭⲣⲟⲛⲟⲥ'],
          explanation: 'Passive voice construction'
        },
        {
          id: 'test-45-22',
          type: 'sentence_building',
          question: 'Build: "All things were made through the Word"',
          correctAnswer: 'Ⲡⲁⲧⲁ ⲉⲧⲁⲛⲟⲩϥⲉⲛ ⲉⲛ ⲧⲱⲓ ⲗⲟⲅⲱ',
          wordBank: ['Ⲡⲁⲧⲁ', 'ⲉⲧⲁⲛⲟⲩϥⲉⲛ', 'ⲉⲛ', 'ⲗⲟⲅⲱ'],
          explanation: 'Cosmic theological composition'
        },
        {
          id: 'test-45-23',
          type: 'translation',
          question: 'Translate: Ⲣ̀ⲡⲟⲩ ⲏⲇⲟⲩ ⲛ̀ⲥⲉ ⲓ̀ ⲟⲩⲛⲧⲉ ⲓ̀ ⲟⲛⲧⲉ',
          questionCoptic: 'ⲕⲁⲓ ⲁⲩⲧⲟⲓ ⲏⲛ ⲩⲗⲩⲟⲧⲉ ⲕⲁⲓ ⲥⲓⲫⲛⲟⲓ',
          correctAnswer: 'And they were shepherds and watchmen',
          options: ['And they were shepherds and watchmen', 'As shepherds and as watchmen', 'Being both shepherds and watchers', 'They kept and protected'],
          explanation: 'Parallel descriptive structure'
        },
        {
          id: 'test-45-24',
          type: 'matching',
          question: 'Match stylistic variations',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'Ⲑⲗⲉⲛ...ⲟⲥ ⲃ̀ⲗⲉⲛ', english: 'one...the other (distributive)' },
            { coptic: 'ⲡⲣⲁⲕⲭⲏⲗⲅⲓⲁ', english: 'gradual progression' },
            { coptic: 'Ⲅⲟⲓⲙⲛ̀ⲧⲍⲟⲝⲱ', english: 'balanced construction' },
            { coptic: 'Ⲣⲟⲧⲉⲍⲁ ⲉ̀ⲁⲛⲁϯⲧⲟⲥ', english: 'repetitive emphasis' }
          ]
        },
        {
          id: 'test-45-25',
          type: 'translation',
          question: 'Translate: Ⲧⲕⲉⲭⲓⲣⲁ ⲙ̀ⲡⲓⲉⲩⲁⲛⲅⲓⲗⲓⲟⲛ ⲏⲣⲏⲛⲏ',
          questionCoptic: 'Ⲧⲁ ⲡⲓⲕⲁⲓⲙⲟⲛ ⲇⲉ ⲟⲩⲱⲧ ⲛ̀ⲧⲟⲩⲕⲟⲙⲁⲣⲯⲟⲟ',
          correctAnswer: 'The things the Gospel speaks of now reign',
          options: ['The things the Gospel speaks of now reign', 'Now the Gospel speaks these things', 'The Gospel message endures forever', 'These Gospel words now rule'],
          explanation: 'Contemporary application of ancient text'
        }
      ]
};

export default unit45Test;
