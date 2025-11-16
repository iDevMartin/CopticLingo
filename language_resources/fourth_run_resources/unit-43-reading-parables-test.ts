import { Unit } from '../../types';

// TEST FILE FOR UNIT 43: READING PARABLES
// Comprehensive test exercises covering all 4 lessons
// 25 exercises total - testing biblical parable reading comprehension

const unit43Test: Unit = {
  id: 'unit-43-test',
  title: 'Unit 43 Test: Reading Parables',
  description: 'Comprehensive test of biblical parable analysis and comprehension',
  order: 43.5,
  color: '#3F51B5',
  lessons: [
    {
      id: 'lesson-43-test',
      unitId: 'unit-43-test',
      title: 'Parables Comprehensive Test',
      description: 'Test reading and understanding of Gospel parables',
      order: 1,
      xpReward: 150,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'test-43-1',
          type: 'translation',
          question: 'Translate: Ⲁϥⲓ̀ ⲉ̀ⲃⲟⲗ ⲛ̀ϫⲉ ⲫⲏⲉⲧⲥⲁϯ ⲉ̀ⲥⲁϯ',
          questionCoptic: 'Ⲁϥⲓ̀ ⲉ̀ⲃⲟⲗ ⲛ̀ϫⲉ ⲫⲏⲉⲧⲥⲁϯ ⲉ̀ⲥⲁϯ',
          correctAnswer: 'The sower went out to sow',
          options: ['The sower went out to sow', 'A sower went to sow', 'He sowed outside', 'The seed was sown'],
          explanation: 'Opening of the Parable of the Sower (Matthew 13:3)'
        },
        {
          id: 'test-43-2',
          type: 'matching',
          question: 'Match the four soils',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ϩⲓϫⲉⲛ ⲡⲓⲙⲱⲓⲧ', english: 'on the path/road' },
            { coptic: 'ϧⲉⲛ ⲛⲓⲡⲉⲧⲣⲁ', english: 'in the rocky places' },
            { coptic: 'ϧⲉⲛ ⲛⲓϣⲟⲛϯ', english: 'in the thorns' },
            { coptic: 'ϩⲓϫⲉⲛ ⲡⲓⲕⲁϩⲓ ⲉⲧⲛⲁⲛⲉϥ', english: 'on the good soil' }
          ]
        },
        {
          id: 'test-43-3',
          type: 'translation',
          question: 'Translate: Ⲁⲩⲓ̀ ⲛ̀ϫⲉ ⲛⲓϩⲁⲗⲏⲧ ⲁⲩⲟⲩⲱⲙⲟⲩ',
          questionCoptic: 'Ⲁⲩⲓ̀ ⲛ̀ϫⲉ ⲛⲓϩⲁⲗⲏⲧ ⲁⲩⲟⲩⲱⲙⲟⲩ',
          correctAnswer: 'The birds came and ate them',
          options: ['The birds came and ate them', 'Birds will eat them', 'They ate the birds', 'Birds came'],
          explanation: 'Seed on path - eaten by birds immediately'
        },
        {
          id: 'test-43-4',
          type: 'fill_blank',
          question: 'Complete: Ⲉⲧⲉⲙ̀ⲙⲟⲛ ⲛⲟⲩⲛⲓ ___ ⲙ̀ⲙⲁⲩ = Having no root',
          correctAnswer: 'ⲛ̀',
          options: ['ⲛ̀', 'ⲙ̀', 'ⲉ̀', 'ϧⲉⲛ'],
          explanation: 'Seed in rocky soil - no root description'
        },
        {
          id: 'test-43-5',
          type: 'sentence_building',
          question: 'Build: "The thorns choked it"',
          correctAnswer: 'Ⲛⲓϣⲟⲛϯ ⲁⲩⲱϫⲛⲟⲩ',
          wordBank: ['Ⲛⲓϣⲟⲛϯ', 'ⲁⲩ', 'ⲱϫⲛⲟⲩ', 'ⲙ̀ⲙⲟⲩ'],
          explanation: 'Seed among thorns choked'
        },
        {
          id: 'test-43-6',
          type: 'translation',
          question: 'Translate: Ⲁϥϯ ⲛ̀ⲟⲩⲧⲁϩ ⲟⲩⲙⲉⲛ ⲣ̀ϣⲉ ⲟⲩⲙⲉⲛ ⲥⲉ ⲟⲩⲙⲉⲛ ⲙⲁⲃ',
          questionCoptic: 'Ⲁϥϯ ⲛ̀ⲟⲩⲧⲁϩ ⲟⲩⲙⲉⲛ ⲣ̀ϣⲉ ⲟⲩⲙⲉⲛ ⲥⲉ ⲟⲩⲙⲉⲛ ⲙⲁⲃ',
          correctAnswer: 'It yielded fruit, some a hundred, some sixty, some thirty',
          options: ['It yielded fruit, some a hundred, some sixty, some thirty', 'The fruit was one hundred', 'Thirty, sixty, or a hundred', 'All fruit was abundant'],
          explanation: 'Seed in good soil yields abundant fruit'
        },
        {
          id: 'test-43-7',
          type: 'matching',
          question: 'Match parable characters and actions',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲡⲓϭⲟⲓⲧ ⲧⲏⲓ', english: 'the good Samaritan' },
            { coptic: 'ⲡⲓⲥⲟⲛ ⲧⲏⲣⲟⲥ', english: 'the prodigal son' },
            { coptic: 'ⲡⲓⲗⲁϩⲁⲣⲓⲍⲟⲥ', english: 'Lazarus (poor beggar)' },
            { coptic: 'ⲡⲓⲛ̀ⲧⲁⲗⲉⲛⲧⲁ', english: 'the talents (wealth)' }
          ]
        },
        {
          id: 'test-43-8',
          type: 'translation',
          question: 'Translate: ⲟⲩ ϣⲁⲙⲁⲛ ⲛⲉ ⲡⲏⲉⲧⲛ̀ⲃⲟⲟⲩ ⲁ ⲡⲏⲉⲧⲟⲩⲟⲛⲟⲩ',
          questionCoptic: 'ⲟⲩ ϣⲁⲙⲁⲣⲓⲧⲏⲥ ⲛⲉ ⲡⲏⲉⲧⲛ̀ⲃⲟⲟⲩ ⲁ ⲡⲏⲉⲧⲟⲩⲟⲛⲟⲩ',
          correctAnswer: 'A Samaritan who showed compassion',
          options: ['A Samaritan who showed compassion', 'The Samaritan came', 'Some showed Samaritans', 'The compassionate Samaritan'],
          explanation: 'Good Samaritan narrative reference'
        },
        {
          id: 'test-43-9',
          type: 'fill_blank',
          question: 'Complete: Ⲁϥⲣⲉ ___ = The father was merciful',
          correctAnswer: 'ⲥⲡⲗⲟⲛⲭⲟⲥ',
          options: ['ⲥⲡⲗⲟⲛⲭⲟⲥ', 'ⲟⲩⲗⲏⲙⲟⲧ', 'ⲙⲉⲧϩ̀ⲙⲟⲧ', 'ⲛⲟϫⲛ̀'],
          explanation: 'ⲣⲉ ⲥⲡⲗⲟⲛⲭⲟⲥ = was merciful/compassionate'
        },
        {
          id: 'test-43-10',
          type: 'sentence_building',
          question: 'Build: "He ran to meet him"',
          correctAnswer: 'Ⲁϥⲣ ⲛⲟⲩϩⲟⲩⲛ ⲛ̀ϩ̀ⲣⲟⲩϥ',
          wordBank: ['Ⲁϥⲣ', 'ⲛⲟⲩϩⲟⲩⲛ', 'ⲛ̀ϩ̀ⲣⲟⲩ', 'ⲙ̀'],
          explanation: 'Joyful reunion in Prodigal Son parable'
        },
        {
          id: 'test-43-11',
          type: 'translation',
          question: 'Translate: Ⲛⲓⲧⲁⲗⲁⲛⲧⲁ ⲛ̀ⲣⲟⲓ ⲉⲧⲟⲩⲛⲟⲩ',
          questionCoptic: 'Ⲛⲓⲧⲁⲗⲁⲛⲧⲁ ⲛ̀ⲣⲟⲓ ⲉⲧⲟⲩⲛⲟⲩ',
          correctAnswer: 'The talents given to them',
          options: ['The talents given to them', 'They were given talents', 'The talents gave them', 'Their talents'],
          explanation: 'Parable of the Talents - distribution'
        },
        {
          id: 'test-43-12',
          type: 'matching',
          question: 'Match parable elements',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲡⲟⲓⲙⲉⲛ', english: 'the shepherd' },
            { coptic: 'ⲡⲟⲓ ⲡⲟⲩⲗⲟⲩ', english: 'the lost sheep' },
            { coptic: 'ⲛⲏⲣⲉ ⲛⲓ̀ⲧⲉ', english: 'the ninety nine' },
            { coptic: 'ⲧⲁⲩⲣⲁ ⲛ̀ⲧⲉ ⲫϯ', english: 'the kingdom of God' }
          ]
        },
        {
          id: 'test-43-13',
          type: 'translation',
          question: 'Translate: Ⲟⲓ ⲇⲉ ⲡⲙⲁ ⲉⲧⲣⲡ̀ⲥ̀ϧ ⲏ ⲙ̀ⲡⲣⲟⲥⲙⲟ',
          questionCoptic: 'Ⲟⲓ ⲇⲉ ⲡⲙⲁ ⲉⲧⲣⲡ̀ⲁⲧⲕ̀ⲧ ⲏ ⲙ̀ⲡⲟⲩⲧⲟⲙ',
          correctAnswer: 'But the place where cast out or in darkness',
          options: ['But the place where cast out or in darkness', 'But at the dark outer place', 'The place cast out', 'But the outer boundary'],
          explanation: 'Reference to outer darkness in parable conclusion'
        },
        {
          id: 'test-43-14',
          type: 'fill_blank',
          question: 'Complete: Ⲙ̀ ⲁⲕⲣⲛⲟⲃⲓ ___ ⲛ̀ⲧⲟⲕ = You robbed him',
          correctAnswer: 'ⲙ̀ⲙⲟϥ',
          options: ['ⲙ̀ⲙⲟϥ', 'ⲁⲣⲟϥ', 'ⲉⲣⲟϥ', 'ⲛ̀ⲣⲟϥ'],
          explanation: 'Object of robbing'
        },
        {
          id: 'test-43-15',
          type: 'sentence_building',
          question: 'Build: "He found him among thorns"',
          correctAnswer: 'Ⲁϥⲛⲥⲱϥ ϧⲉⲛ ⲛⲓϣⲟⲛϯ',
          wordBank: ['Ⲁϥⲛⲥⲱϥ', 'ϧⲉⲛ', 'ⲛⲓ', 'ϣⲟⲛϯ'],
          explanation: 'Discovery in difficult circumstance'
        },
        {
          id: 'test-43-16',
          type: 'translation',
          question: 'Translate: Ⲙⲏⲁⲣⲓⲕⲟⲣⲓⲍⲱ ⲙ̀ⲙⲟϥ ⲛⲁⲕ',
          questionCoptic: 'Ⲙⲏⲗⲭⲟⲓ ⲛⲏⲓ ⲉ̀ⲙⲁⲣⲕⲉ',
          correctAnswer: 'You are blessed to give',
          options: ['You are blessed to give', 'Blessed is giving', 'He blessed the giving', 'Blessings are given'],
          explanation: 'Beatitude structure'
        },
        {
          id: 'test-43-17',
          type: 'matching',
          question: 'Match teachings from parables',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'Ⲧⲁⲩⲣⲁ ⲛ̀ⲧⲉ ⲧⲙⲏϣ', english: 'the kingdom is like yeast' },
            { coptic: 'Ⲧⲁⲩⲣⲁ ⲛ̀ⲧⲉ ⲛ̀ϫⲁⲫⲙⲏⲭⲁⲛⲓ', english: 'the kingdom is like treasures' },
            { coptic: 'Ⲧⲁⲩⲣⲁ ⲛ̀ⲧⲉ ⲧⲏ ⲛ̀ϭⲓϥⲟⲛ', english: 'the kingdom is like a pearl' },
            { coptic: 'Ⲧⲁⲩⲣⲁ ⲛ̀ⲧⲉ ⲧⲟⲡⲡⲏⲛ', english: 'the kingdom is like a mustard seed' }
          ]
        },
        {
          id: 'test-43-18',
          type: 'fill_blank',
          question: 'Complete: Ⲡⲉ ⲟⲩ ___ ⲛ̀ⲧⲁⲩⲣⲁ ⲛ̀ⲧⲉ ⲫϯ = What is the kingdom of God like?',
          correctAnswer: 'ⲥⲟϥϣⲟⲡ',
          options: ['ⲥⲟϥϣⲟⲡ', 'ⲧⲁⲩⲣⲁ', 'ⲙⲟⲧⲣⲟⲥ', 'ⲗⲟⲅⲓⲥⲙⲟⲛ'],
          explanation: 'Parable introduction formula'
        },
        {
          id: 'test-43-19',
          type: 'sentence_building',
          question: 'Build: "The seed grew and became a great tree"',
          correctAnswer: 'Ⲛⲟⲃⲁ ⲥⲁⲧⲟⲩⲣⲟⲥ ⲛⲁϥϣⲟⲡⲓ ⲙ̀ⲡⲉⲧⲣⲁ ⲛ̀ϫⲟⲩ',
          wordBank: ['Ⲛⲟⲃⲁ', 'ⲥⲁⲧⲟⲩⲣⲟⲥ', 'ⲛⲁϥⲱϣⲡⲓ', 'ⲙ̀ⲡⲉⲧⲣⲁ', 'ⲛ̀ϫⲟⲩ'],
          explanation: 'Growth parable narrative'
        },
        {
          id: 'test-43-20',
          type: 'translation',
          question: 'Translate: Ⲁϥϯ ⲙ̀ⲯⲟⲧ ⲉ̀ⲡⲓⲕⲓⲛⲁ ⲉ̀ⲣⲟⲛ',
          questionCoptic: 'Ⲁϥϯ ⲙ̀ⲯⲟⲣ̀ ⲉ̀ⲡⲓⲕⲓⲛⲁ ⲉ̀ⲣⲟⲛ',
          correctAnswer: 'He gave them wheat to eat',
          options: ['He gave them wheat to eat', 'They received grain', 'He gave for the table', 'Wheat was given'],
          explanation: 'Feeding/nourishment in parable'
        },
        {
          id: 'test-43-21',
          type: 'matching',
          question: 'Match parable morals',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'Ⲟϯⲕⲟⲗⲉⲓⲁ ⲛ̀ⲛⲓⲣⲱⲱⲙⲓ', english: 'the hypocrisy of people' },
            { coptic: 'Ⲟϯⲅⲛⲱⲙⲏ ⲛ̀ⲧⲉ ⲫϯ', english: 'the judgment of God' },
            { coptic: 'Ⲓⲟⲡⲁⲛⲧⲁⲧⲉ ⲉ̀ⲡⲁⲛⲧⲁ', english: 'repentance for all' },
            { coptic: 'Ⲛⲉⲙ ⲡⲓϩ̀ⲙⲟⲧ ⲛ̀ⲧⲉ ⲫϯ', english: 'with the grace of God' }
          ]
        },
        {
          id: 'test-43-22',
          type: 'fill_blank',
          question: 'Complete: ⲟⲩⲣⲁ ⲇⲉ ⲣⲁⲛⲧⲟ ___ = But that one said',
          correctAnswer: 'ϫⲛⲁ',
          options: ['ϫⲛⲁ', 'ϫⲉ', 'ⲁⲗⲗⲁ', 'ⲟⲩⲟϩ'],
          explanation: 'Introduction of quoted response'
        },
        {
          id: 'test-43-23',
          type: 'translation',
          question: 'Translate: Ⲟⲛⲕⲁ ⲙ̀ⲙⲟⲕ ⲇⲉ ⲛⲟⲩⲛⲓ ⲙ̀ⲡⲁ',
          questionCoptic: 'Ⲟⲛⲕⲁ ⲙ̀ⲙⲟⲕ ⲇⲉ ⲛⲟⲩⲛⲓ ⲙ̀ⲡⲁⲓ',
          correctAnswer: 'But you did not have this',
          options: ['But you did not have this', 'But you have not done this', 'But this was not yours', 'But you would not receive this'],
          explanation: 'Accusation/judgment in parable'
        },
        {
          id: 'test-43-24',
          type: 'sentence_building',
          question: 'Build: "In the beginning was the seed"',
          correctAnswer: 'Ⲙⲟⲧⲕⲟⲛⲧ ⲁⲙⲟⲛ ⲛ̀ⲛⲟⲃⲁ',
          wordBank: ['Ⲙⲟⲧⲕⲟⲛⲧ', 'ⲁⲙⲟⲛ', 'ⲛ̀', 'ⲛⲟⲃⲁ'],
          explanation: 'Narrative setup'
        },
        {
          id: 'test-43-25',
          type: 'translation',
          question: 'Translate: Ⲧⲁⲣⲁ ⲛ̀ⲧⲉ ⲧⲟⲩⲛⲉⲣⲅⲓⲁ ⲛ̀ⲧⲉ ⲁⲗⲗⲟⲩ',
          questionCoptic: 'Ⲧⲁⲩⲣⲁ ⲛ̀ⲧⲉ ⲧⲟⲩⲛⲉⲣⲅⲓⲁ ⲛ̀ⲧⲉ ⲟⲩⲛⲁⲡⲕⲁⲧⲁⲗⲗⲓⲣⲛ̀',
          correctAnswer: 'The kingdom is like the power of an enemy',
          options: ['The kingdom is like the power of an enemy', 'The kingdom has opposing power', 'With the strength of enemies', 'Kingdom power removes enemies'],
          explanation: 'Warfare/struggle parable metaphor'
        }
      ]
    }
  ]
};

export default unit43Test;
