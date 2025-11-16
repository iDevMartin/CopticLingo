import { Unit } from '../../types';

// TEST FILE FOR UNIT 39: CONJUNCTIONS & DISCOURSE MARKERS
// Comprehensive test exercises covering all 4 lessons
// 25 exercises total - testing coordinating and subordinating conjunctions

const unit39Test: Unit = {
  id: 'unit-39-test',
  title: 'Unit 39 Test: Conjunctions & Connectors',
  description: 'Comprehensive test of conjunctions and discourse markers',
  order: 39.5,
  color: '#009688',
  lessons: [
    {
      id: 'lesson-39-test',
      unitId: 'unit-39-test',
      title: 'Conjunctions Comprehensive Test',
      description: 'Test all conjunction types and sentence connections',
      order: 1,
      xpReward: 150,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'test-39-1',
          type: 'multiple_choice',
          question: 'What is "and" in Coptic?',
          correctAnswer: 'ⲟⲩⲟϩ / ⲛⲉⲙ',
          options: ['ⲟⲩⲟϩ / ⲛⲉⲙ', 'ⲁⲗⲗⲁ', 'ⲏ̀', 'ϫⲉ'],
          explanation: 'ⲟⲩⲟϩ = and (between clauses), ⲛⲉⲙ = and/with (between nouns)'
        },
        {
          id: 'test-39-2',
          type: 'translation',
          question: 'Translate: ⲁⲓⲓ̀ ⲟⲩⲟϩ ⲁⲓⲛⲁⲩ',
          questionCoptic: 'ⲁⲓⲓ̀ ⲟⲩⲟϩ ⲁⲓⲛⲁⲩ',
          correctAnswer: 'I came and I saw',
          options: ['I came and I saw', 'I came but I saw', 'I came or I saw', 'When I came I saw'],
          explanation: 'ⲁⲓⲓ̀ ⲟⲩⲟϩ ⲁⲓⲛⲁⲩ = I came and I saw (ⲟⲩⲟϩ connects clauses)'
        },
        {
          id: 'test-39-3',
          type: 'matching',
          question: 'Match basic conjunctions',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲟⲩⲟϩ', english: 'and (clauses)' },
            { coptic: 'ⲛⲉⲙ', english: 'and/with (nouns)' },
            { coptic: 'ⲁⲗⲗⲁ', english: 'but' },
            { coptic: 'ⲏ̀', english: 'or' }
          ]
        },
        {
          id: 'test-39-4',
          type: 'fill_blank',
          question: 'Complete: ⲡⲓⲓⲱⲧ ___ ⲡⲓϣⲏⲣⲓ = the father and the son',
          correctAnswer: 'ⲛⲉⲙ',
          options: ['ⲛⲉⲙ', 'ⲟⲩⲟϩ', 'ⲁⲗⲗⲁ', 'ⲏ̀'],
          explanation: 'ⲡⲓⲓⲱⲧ ⲛⲉⲙ ⲡⲓϣⲏⲣⲓ = the father and the son (ⲛⲉⲙ with nouns)'
        },
        {
          id: 'test-39-5',
          type: 'sentence_building',
          question: 'Build: "He spoke, but I did not listen"',
          correctAnswer: 'ⲁϥⲥⲁϫⲓ ⲁⲗⲗⲁ ⲙ̀ⲡⲓⲥⲱⲧⲙ',
          wordBank: ['ⲁϥⲥⲁϫⲓ', 'ⲁⲗⲗⲁ', 'ⲙ̀ⲡⲓⲥⲱⲧⲙ', 'ⲟⲩⲟϩ'],
          explanation: 'ⲁϥⲥⲁϫⲓ ⲁⲗⲗⲁ ⲙ̀ⲡⲓⲥⲱⲧⲙ = he spoke but I did not listen (ⲁⲗⲗⲁ = contrast)'
        },
        {
          id: 'test-39-6',
          type: 'translation',
          question: 'Translate: ⲁⲕⲛⲁϣⲉⲛⲓ ⲏ̀ ⲁⲕⲛⲁⲟ̀ϩⲓ ⲉ̀ⲣⲁⲧⲕ',
          questionCoptic: 'ⲁⲕⲛⲁϣⲉⲛⲓ ⲏ̀ ⲁⲕⲛⲁⲟ̀ϩⲓ ⲉ̀ⲣⲁⲧⲕ',
          correctAnswer: 'Will you go or will you stay?',
          options: ['Will you go or will you stay?', 'You went and stayed', 'Go or stay', 'You will go and stay'],
          explanation: 'ⲁⲕⲛⲁϣⲉⲛⲓ ⲏ̀ ⲁⲕⲛⲁⲟ̀ϩⲓ ⲉ̀ⲣⲁⲧⲕ = will you go or will you stay? (ⲏ̀ = or)'
        },
        {
          id: 'test-39-7',
          type: 'multiple_choice',
          question: 'Which conjunction shows CONTRAST?',
          correctAnswer: 'ⲁⲗⲗⲁ',
          options: ['ⲁⲗⲗⲁ', 'ⲟⲩⲟϩ', 'ⲛⲉⲙ', 'ⲏ̀'],
          explanation: 'ⲁⲗⲗⲁ (alla) = but (from Greek ἀλλά) - shows contrast'
        },
        {
          id: 'test-39-8',
          type: 'translation',
          question: 'Translate: ⲡⲓⲓⲱⲧ ⲛⲉⲙ ⲡⲓϣⲏⲣⲓ ⲛⲉⲙ ⲡⲓⲡ̀ⲛⲉⲩⲙⲁ ⲉⲑⲟⲩⲁⲃ',
          questionCoptic: 'ⲡⲓⲓⲱⲧ ⲛⲉⲙ ⲡⲓϣⲏⲣⲓ ⲛⲉⲙ ⲡⲓⲡ̀ⲛⲉⲩⲙⲁ ⲉⲑⲟⲩⲁⲃ',
          correctAnswer: 'The Father and the Son and the Holy Spirit',
          options: ['The Father and the Son and the Holy Spirit', 'The Holy Trinity', 'Father, Son, Spirit', 'The three persons'],
          explanation: 'ⲡⲓⲓⲱⲧ ⲛⲉⲙ ⲡⲓϣⲏⲣⲓ ⲛⲉⲙ ⲡⲓⲡ̀ⲛⲉⲩⲙⲁ ⲉⲑⲟⲩⲁⲃ = the Father and the Son and the Holy Spirit'
        },
        {
          id: 'test-39-9',
          type: 'matching',
          question: 'Match subordinating conjunctions',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ϫⲉ', english: 'that (reporting)' },
            { coptic: 'ⲉϣⲱⲡ', english: 'if' },
            { coptic: 'ϩⲓⲛⲁ', english: 'so that, in order that' },
            { coptic: 'ϩⲟⲧⲉ', english: 'when' }
          ]
        },
        {
          id: 'test-39-10',
          type: 'translation',
          question: 'Translate: ⲁϥϫⲟⲥ ϫⲉ ϯⲛⲁⲓ̀',
          questionCoptic: 'ⲁϥϫⲟⲥ ϫⲉ ϯⲛⲁⲓ̀',
          correctAnswer: 'He said that I will come',
          options: ['He said that I will come', 'He said "I will come"', 'He says I came', 'I said he will come'],
          explanation: 'ⲁϥϫⲟⲥ ϫⲉ ϯⲛⲁⲓ̀ = he said that I will come (ϫⲉ introduces reported speech)'
        },
        {
          id: 'test-39-11',
          type: 'fill_blank',
          question: 'Complete: ___ ⲁⲕϣⲁⲛⲛⲁϩϯ ⲁⲕⲛⲁϭⲓ = If you believe, you will receive',
          correctAnswer: 'ⲉϣⲱⲡ',
          options: ['ⲉϣⲱⲡ', 'ϫⲉ', 'ⲟⲩⲟϩ', 'ϩⲓⲛⲁ'],
          explanation: 'ⲉϣⲱⲡ ⲁⲕϣⲁⲛⲛⲁϩϯ ⲁⲕⲛⲁϭⲓ = if you believe, you will receive'
        },
        {
          id: 'test-39-12',
          type: 'sentence_building',
          question: 'Build: "so that you may know"',
          correctAnswer: 'ϩⲓⲛⲁ ⲛ̀ⲧⲉⲕⲉ̀ⲙⲓ',
          wordBank: ['ϩⲓⲛⲁ', 'ⲛ̀ⲧⲉⲕ', 'ⲉ̀ⲙⲓ', 'ϫⲉ'],
          explanation: 'ϩⲓⲛⲁ ⲛ̀ⲧⲉⲕⲉ̀ⲙⲓ = so that you may know (purpose clause)'
        },
        {
          id: 'test-39-13',
          type: 'matching',
          question: 'Match discourse markers',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲉⲑⲃⲉ', english: 'because of, for the sake of' },
            { coptic: 'ⲕⲁⲧⲁ', english: 'according to' },
            { coptic: 'ϥⲁ', english: 'then, therefore' },
            { coptic: 'ⲇⲟⲧⲉ', english: 'when' }
          ]
        },
        {
          id: 'test-39-14',
          type: 'translation',
          question: 'Translate: ⲟⲩⲛ ⲙ̀ⲡⲉⲕⲥⲟⲃϯ ϣⲉⲛⲛⲁⲯⲓ ⲛ̀ⲥⲏⲟⲩ',
          questionCoptic: 'ⲟⲩⲛ ⲙ̀ⲡⲉⲕⲥⲟⲃϯ ϣⲉⲛⲛⲁⲯⲓ ⲛ̀ⲥⲏⲟⲩ',
          correctAnswer: 'Therefore you should fear Him always',
          options: ['Therefore you should fear Him always', 'You will fear Him often', 'Fear Him as you fear', 'You feared because of Him'],
          explanation: 'ⲟⲩⲛ (therefore/thus) expresses logical consequence'
        },
        {
          id: 'test-39-15',
          type: 'fill_blank',
          question: 'Complete: ⲁⲓⲛⲁⲩ ⲛ̀ⲟⲩⲥⲕⲏⲛⲓ ⲡⲉ ___ ⲛⲁⲙⲏⲓ = I saw a sign, because I was there',
          correctAnswer: 'ⲉⲑⲃⲉ',
          options: ['ⲉⲑⲃⲉ', 'ϫⲉ', 'ⲏ̀', 'ⲟⲩⲟϩ'],
          explanation: 'ⲉⲑⲃⲉ = because of, for the sake of (causal)'
        },
        {
          id: 'test-39-16',
          type: 'sentence_building',
          question: 'Build: "Neither...nor: Not this and not that"',
          correctAnswer: 'ⲙ̀ⲫⲁⲓ ⲟⲩⲇⲉ ⲙ̀ⲡⲁⲓ',
          wordBank: ['ⲙ̀ⲫⲁⲓ', 'ⲟⲩⲇⲉ', 'ⲟⲩ', 'ⲙ̀ⲡⲁⲓ'],
          explanation: 'ⲙ̀ⲫⲁⲓ ⲟⲩⲇⲉ ⲙ̀ⲡⲁⲓ = neither this nor that (double negation)'
        },
        {
          id: 'test-39-17',
          type: 'matching',
          question: 'Match complete subordinators',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ϩⲁ', english: 'while, as long as' },
            { coptic: 'ⲉϩⲟⲩⲛ', english: 'until' },
            { coptic: 'ⲉⲟⲩⲱϯ', english: 'or else, otherwise' },
            { coptic: 'ϯϧ', english: 'while not, as long as not' }
          ]
        },
        {
          id: 'test-39-18',
          type: 'translation',
          question: 'Translate: ⲭⲟⲡⲥ ⲛ̀ⲣⲱⲙⲓ ⲟⲩⲟϩ ⲭⲟⲡⲥ ⲛ̀ϩⲓⲙⲓ',
          questionCoptic: 'ⲭⲟⲡⲥ ⲛ̀ⲣⲱⲙⲓ ⲟⲩⲟϩ ⲭⲟⲡⲥ ⲛ̀ϩⲓⲙⲓ',
          correctAnswer: 'Many men and many women',
          options: ['Many men and many women', 'Men and women were many', 'Many men or many women', 'As many men as women'],
          explanation: 'ⲭⲟⲡⲥ ⲛ̀ⲣⲱⲙⲓ ⲟⲩⲟϩ ⲭⲟⲡⲥ ⲛ̀ϩⲓⲙⲓ = many men and many women (ⲟⲩⲟϩ connects parallel phrases)'
        },
        {
          id: 'test-39-19',
          type: 'fill_blank',
          question: 'Complete: ⲁⲓϣⲉⲛⲓ ⲉ̀ϫⲟⲓ ___ ⲁⲓⲛⲁϫ ⲧⲟⲩ = I went to the market and received bread',
          correctAnswer: 'ⲟⲩⲟϩ',
          options: ['ⲟⲩⲟϩ', 'ⲕⲁⲧⲁ', 'ⲏ̀', 'ⲛⲉⲙ'],
          explanation: 'ⲟⲩⲟϩ connects two completed actions'
        },
        {
          id: 'test-39-20',
          type: 'sentence_building',
          question: 'Build: "I believed his words and followed him"',
          correctAnswer: 'ⲁⲓⲛⲁϩϯ ⲉⲗⲟⲅⲟⲥ ⲙ̀ⲡⲉϥⲕⲓⲃⲟⲗ ⲟⲩⲟϩ ⲁⲓϣ ⲁϥⲛⲁϣ',
          wordBank: ['ⲁⲓⲛⲁϩϯ', 'ⲉⲗⲟⲅⲟⲥ', 'ⲙ̀ⲡⲉϥ', 'ⲟⲩⲟϩ', 'ⲁⲓϣ', 'ⲁϥⲛⲁϣ'],
          explanation: 'Complex sentence with two clauses joined by ⲟⲩⲟϩ'
        },
        {
          id: 'test-39-21',
          type: 'translation',
          question: 'Translate: ⲁⲛⲙⲟⲣϩ ⲏ̀ ⲁⲛⲧⲓⲙⲉ ⲛⲁϩⲙⲉⲛ',
          questionCoptic: 'ⲁⲛⲙⲟⲣϩ ⲏ̀ ⲁⲛⲧⲓⲙⲉ ⲛⲁϩⲙⲉⲛ',
          correctAnswer: 'We were silent or we were afraid among ourselves',
          options: ['We were silent or we were afraid among ourselves', 'We were silent and afraid', 'We were afraid to be silent', 'Silence and fear'],
          explanation: 'ⲏ̀ = or (presents an alternative)'
        },
        {
          id: 'test-39-22',
          type: 'matching',
          question: 'Match conjunction uses in discourse',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲟⲩⲟϩ ϥⲁ', english: 'and then / and so' },
            { coptic: 'ⲁⲗⲗⲁ ⲇⲉ', english: 'but rather / but' },
            { coptic: 'ⲛⲁⲓ ⲙⲉⲛ...ⲡⲁⲓ ⲇⲉ', english: 'this...that (contrast)' },
            { coptic: 'ⲁⲥⲧⲏ', english: 'namely, that is' }
          ]
        },
        {
          id: 'test-39-23',
          type: 'fill_blank',
          question: 'Complete: ⲟⲩⲟⲛ ⲇⲉ ___ ⲧⲱⲣⲓⲁ ⲟⲩⲟⲗⲟⲅⲓⲁ = But concerning wisdom or logic',
          correctAnswer: 'ⲟⲩⲕⲏ',
          options: ['ⲟⲩⲕⲏ', 'ⲉⲧⲉ', 'ⲏ̀', 'ⲇⲟⲩⲗⲟⲥ'],
          explanation: 'Discourse marker introducing a new topic'
        },
        {
          id: 'test-39-24',
          type: 'translation',
          question: 'Translate: ⲛ̀ⲧⲉⲛ ⲡⲉ ϫⲟⲓⲥ ⲑⲉⲟⲥ ⲙⲏⲧⲉⲛ ⲧⲟⲩϯ ϣⲁⲡⲁⲡⲗⲏⲣⲓ',
          questionCoptic: 'ⲛ̀ⲧⲉⲛ ⲡⲉ ϫⲟⲓⲥ ⲑⲉⲟⲥ ⲙⲏⲧⲉⲛ ⲧⲟⲩϯ ϣⲁⲡⲁⲡⲗⲏⲣⲓ',
          correctAnswer: 'The Lord God in whom the fulness dwells',
          options: ['The Lord God in whom the fulness dwells', 'When the Lord God dwells in fulness', 'The Lord is God, so fulness dwells', 'The Lord God or the fulness'],
          explanation: 'Complex sentence with relative clause'
        },
        {
          id: 'test-39-25',
          type: 'matching',
          question: 'Match complex conjunction expressions',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ϩⲓ ⲡⲁⲓⲛ ⲇⲉ', english: 'therefore / for this reason' },
            { coptic: 'ⲟⲩⲛ ⲛ̀ⲥⲁϣϥ', english: 'therefore again / on the other hand' },
            { coptic: 'ⲙⲏⲛ ⲙⲏⲛ', english: 'certainly surely / verily' },
            { coptic: 'ⲕⲁⲓ ⲇⲟⲗⲟⲥ', english: 'and cunning / and also' }
          ]
        }
      ]
    }
  ]
};

export default unit39Test;
