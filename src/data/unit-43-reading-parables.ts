import { Unit } from '../../types';

// UNIT 43: READING PARABLES
// Bohairic dialect - Biblical parable analysis
// Advanced application: Reading comprehension of Gospel narratives

const unit43: Unit = {
  id: 'unit-43',
  title: 'Reading Parables',
  description: 'Analyze biblical parables: Sower, Good Samaritan, Prodigal Son, Talents',
  order: 43,
  color: '#3F51B5',
  lessons: [
    {
      id: 'lesson-43-1',
      unitId: 'unit-43',
      title: 'Parable of the Sower',
      description: 'Matthew 13:3-9 - The Four Soils',
      order: 1,
      xpReward: 35,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-43-1-1',
          type: 'translation',
          question: 'Translate: Ⲁϥⲓ̀ ⲉ̀ⲃⲟⲗ ⲛ̀ϫⲉ ⲫⲏⲉⲧⲥⲁϯ ⲉ̀ⲥⲁϯ',
          questionCoptic: 'Ⲁϥⲓ̀ ⲉ̀ⲃⲟⲗ ⲛ̀ϫⲉ ⲫⲏⲉⲧⲥⲁϯ ⲉ̀ⲥⲁϯ',
          correctAnswer: 'The sower went out to sow',
          options: ['The sower went out to sow', 'A sower went to sow', 'He sowed outside', 'The seed was sown'],
          explanation: 'Ⲁϥⲓ̀ ⲉ̀ⲃⲟⲗ ⲛ̀ϫⲉ ⲫⲏⲉⲧⲥⲁϯ ⲉ̀ⲥⲁϯ = the sower went out to sow (opening of parable)'
        },
        {
          id: 'ex-43-1-2',
          type: 'matching',
          question: 'Match the four soils',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ϩⲓϫⲉⲛ ⲡⲓⲙⲱⲓⲧ', english: 'on the path/road' },
            { coptic: 'ϧⲉⲛ ⲛⲓⲡⲉⲧⲣⲁ', english: 'in the rocky places' },
            { coptic: 'ϧⲉⲛ ⲛⲓϣⲟⲛϯ', english: 'in the thorns' },
            { coptic: 'ϩⲓϫⲉⲛ ⲡⲓⲕⲁϩⲓ ⲉⲑⲛⲁⲛⲉϥ', english: 'on the good soil' }
          ]
        },
        {
          id: 'ex-43-1-3',
          type: 'translation',
          question: 'Translate: Ⲁⲩⲓ̀ ⲛ̀ϫⲉ ⲛⲓϩⲁⲗⲏⲧ ⲁⲩⲟⲩⲱⲙⲟⲩ',
          questionCoptic: 'Ⲁⲩⲓ̀ ⲛ̀ϫⲉ ⲛⲓϩⲁⲗⲏⲧ ⲁⲩⲟⲩⲱⲙⲟⲩ',
          correctAnswer: 'The birds came and ate them',
          options: ['The birds came and ate them', 'Birds will eat them', 'They ate the birds', 'Birds came'],
          explanation: 'Ⲁⲩⲓ̀ ⲛ̀ϫⲉ ⲛⲓϩⲁⲗⲏⲧ ⲁⲩⲟⲩⲱⲙⲟⲩ = the birds came and ate them (seed on path)'
        },
        {
          id: 'ex-43-1-4',
          type: 'fill_blank',
          question: 'Complete: Ⲉⲧⲉⲙ̀ⲙⲟⲛ ⲛⲟⲩⲛⲓ ___ ⲙ̀ⲙⲁⲩ = Having no root',
          correctAnswer: 'ⲛ̀',
          options: ['ⲛ̀', 'ⲙ̀', 'ⲉ̀', 'ϧⲉⲛ'],
          explanation: 'Ⲉⲧⲉⲙ̀ⲙⲟⲛ ⲛⲟⲩⲛⲓ ⲛ̀ⲙⲁⲩ = having no root in them (rocky soil description)'
        },
        {
          id: 'ex-43-1-5',
          type: 'sentence_building',
          question: 'Build: "The thorns choked it"',
          correctAnswer: 'Ⲛⲓϣⲟⲛϯ ⲁⲩⲱϫⲛⲟⲩ',
          wordBank: ['Ⲛⲓϣⲟⲛϯ', 'ⲁⲩ', 'ⲱϫⲛⲟⲩ', 'ⲙ̀ⲙⲟⲩ'],
          explanation: 'Ⲛⲓϣⲟⲛϯ ⲁⲩⲱϫⲛⲟⲩ = the thorns choked it (ⲱϫⲛ- = to choke, strangle)'
        },
        {
          id: 'ex-43-1-6',
          type: 'translation',
          question: 'Translate: Ⲁϥϯ ⲛ̀ⲟⲩⲧⲁϩ ⲟⲩⲙⲉⲛ ⲣ̀ϣⲉ ⲟⲩⲙⲉⲛ ⲥⲉ ⲟⲩⲙⲉⲛ ⲙⲁⲃ',
          questionCoptic: 'Ⲁϥϯ ⲛ̀ⲟⲩⲧⲁϩ ⲟⲩⲙⲉⲛ ⲣ̀ϣⲉ ⲟⲩⲙⲉⲛ ⲥⲉ ⲟⲩⲙⲉⲛ ⲙⲁⲃ',
          correctAnswer: 'It yielded fruit, some a hundred, some sixty, some thirty',
          options: ['It yielded fruit, some a hundred, some sixty, some thirty', 'The fruit was one hundred', 'Thirty, sixty, or a hundred', 'All fruit was abundant'],
          explanation: 'Ⲁϥϯ ⲛ̀ⲟⲩⲧⲁϩ ⲟⲩⲙⲉⲛ ⲣ̀ϣⲉ ⲟⲩⲙⲉⲛ ⲥⲉ ⲟⲩⲙⲉⲛ ⲙⲁⲃ = yielded fruit, some 100, some 60, some 30'
        },
        {
          id: 'ex-43-1-7',
          type: 'multiple_choice',
          question: 'What does "ⲫⲏⲉⲧⲥⲁϯ" mean?',
          correctAnswer: 'The one who sows / The sower',
          options: ['The one who sows / The sower', 'The seed', 'The soil', 'The harvest'],
          explanation: 'ⲫⲏⲉⲧⲥⲁϯ (phi-et-sati) = the one who sows, the sower (relative clause participle)'
        },
        {
          id: 'ex-43-1-8',
          type: 'translation',
          question: 'Translate: Ⲫⲏⲉⲧⲉ ⲟⲩⲟⲛ ⲙⲁϣϫ ⲙ̀ⲙⲁⲩ ⲉ̀ⲥⲱⲧⲙ ⲙⲁⲣⲉϥⲥⲱⲧⲙ',
          questionCoptic: 'Ⲫⲏⲉⲧⲉ ⲟⲩⲟⲛ ⲙⲁϣϫ ⲙ̀ⲙⲁⲩ ⲉ̀ⲥⲱⲧⲙ ⲙⲁⲣⲉϥⲥⲱⲧⲙ',
          correctAnswer: 'Whoever has ears to hear, let him hear',
          options: ['Whoever has ears to hear, let him hear', 'Those with ears should listen', 'Everyone must listen', 'Hear with your ears'],
          explanation: 'Ⲫⲏⲉⲧⲉ ⲟⲩⲟⲛ ⲙⲁϣϫ ⲙ̀ⲙⲁⲩ ⲉ̀ⲥⲱⲧⲙ ⲙⲁⲣⲉϥⲥⲱⲧⲙ = whoever has ears to hear, let him hear (conclusion)'
        }
      ]
    },
    {
      id: 'lesson-43-2',
      unitId: 'unit-43',
      title: 'The Good Samaritan',
      description: 'Luke 10:30-37 - Love Your Neighbor',
      order: 2,
      xpReward: 35,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-43-2-1',
          type: 'translation',
          question: 'Translate: Ⲟⲩⲣⲱⲙⲓ ⲛⲁϥⲓ̀ ⲉ̀ⲡⲉⲥⲏⲧ ⲉ̀ⲃⲟⲗ ϧⲉⲛ Ⲓⲗⲏⲙ ⲉ̀Ⲓⲉⲣⲓⲭⲱ',
          questionCoptic: 'Ⲟⲩⲣⲱⲙⲓ ⲛⲁϥⲓ̀ ⲉ̀ⲡⲉⲥⲏⲧ ⲉ̀ⲃⲟⲗ ϧⲉⲛ Ⲓⲗⲏⲙ ⲉ̀Ⲓⲉⲣⲓⲭⲱ',
          correctAnswer: 'A man was going down from Jerusalem to Jericho',
          options: ['A man was going down from Jerusalem to Jericho', 'A man fell from Jerusalem', 'A man went to Jericho', 'He descended to Jerusalem'],
          explanation: 'Ⲟⲩⲣⲱⲙⲓ ⲛⲁϥⲓ̀ ⲉ̀ⲡⲉⲥⲏⲧ ⲉ̀ⲃⲟⲗ ϧⲉⲛ Ⲓⲗⲏⲙ ⲉ̀Ⲓⲉⲣⲓⲭⲱ = a man was going down from Jerusalem to Jericho'
        },
        {
          id: 'ex-43-2-2',
          type: 'matching',
          question: 'Match the characters',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲛⲓⲥⲟⲛⲓ', english: 'the robbers/thieves' },
            { coptic: 'ⲡⲓⲟⲩⲏⲃ', english: 'the priest' },
            { coptic: 'ⲡⲓⲗⲉⲩⲓⲧⲏⲥ', english: 'the Levite' },
            { coptic: 'ⲡⲓⲥⲁⲙⲁⲣⲓⲧⲏⲥ', english: 'the Samaritan' }
          ]
        },
        {
          id: 'ex-43-2-3',
          type: 'translation',
          question: 'Translate: Ⲁⲩⲓ̀ ⲉ̀ϫⲱϥ ⲁⲩϣⲁⲧⲉⲙ ⲙ̀ⲙⲟϥ',
          questionCoptic: 'Ⲁⲩⲓ̀ ⲉ̀ϫⲱϥ ⲁⲩϣⲁⲧⲉⲙ ⲙ̀ⲙⲟϥ',
          correctAnswer: 'They came upon him and robbed him',
          options: ['They came upon him and robbed him', 'They attacked and beat him', 'They found and robbed him', 'He was robbed'],
          explanation: 'Ⲁⲩⲓ̀ ⲉ̀ϫⲱϥ ⲁⲩϣⲁⲧⲉⲙ ⲙ̀ⲙⲟϥ = they came upon him and robbed him (ϣⲁⲧⲉⲙ = to rob, plunder)'
        },
        {
          id: 'ex-43-2-4',
          type: 'fill_blank',
          question: 'Complete: Ⲁⲩⲭⲁϥ ⲉϥⲙⲉϩ ___ ⲛ̀ϫⲣⲁϭ = They left him half dead',
          correctAnswer: 'ⲙ̀',
          options: ['ⲙ̀', 'ⲛ̀', 'ⲉ̀', 'ϧⲉⲛ'],
          explanation: 'Ⲁⲩⲭⲁϥ ⲉϥⲙⲉϩ ⲙ̀ⲙⲱⲟⲩⲧ = they left him half dead (ⲙⲉϩ = half, ⲙⲱⲟⲩⲧ = death)'
        },
        {
          id: 'ex-43-2-5',
          type: 'sentence_building',
          question: 'Build: "He passed by on the other side"',
          correctAnswer: 'Ⲁϥⲥⲓⲛⲓ ⲥⲁⲡⲓⲕⲉⲥⲁ',
          wordBank: ['Ⲁϥ', 'ⲥⲓⲛⲓ', 'ⲥⲁⲡⲓⲕⲉⲥⲁ', 'ⲉ̀ⲃⲟⲗ'],
          explanation: 'Ⲁϥⲥⲓⲛⲓ ⲥⲁⲡⲓⲕⲉⲥⲁ = he passed by on the other side (priest and Levite ignored him)'
        },
        {
          id: 'ex-43-2-6',
          type: 'translation',
          question: 'Translate: Ⲁϥϣⲉⲛϩⲏⲧ ϧⲁⲣⲟϥ',
          questionCoptic: 'Ⲁϥϣⲉⲛϩⲏⲧ ϧⲁⲣⲟϥ',
          correctAnswer: 'He had compassion on him',
          options: ['He had compassion on him', 'He felt sorry for him', 'He pitied him', 'He loved him'],
          explanation: 'Ⲁϥϣⲉⲛϩⲏⲧ ϧⲁⲣⲟϥ = he had compassion on him (ϣⲉⲛϩⲏⲧ = to have compassion, lit. \"heart-sickness\")'
        },
        {
          id: 'ex-43-2-7',
          type: 'matching',
          question: 'Match care vocabulary',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲁϥⲙⲟⲣ ⲛ̀ⲛⲉϥⲉⲣϩⲟϯ', english: 'he bound his wounds' },
            { coptic: 'ⲁϥϧⲉⲧ ⲛⲉϩ ⲉ̀ϫⲱⲟⲩ', english: 'he poured oil on them' },
            { coptic: 'ⲁϥⲟⲗϥ ⲉ̀ⲡⲉϥⲑⲱ', english: 'he set him on his beast' },
            { coptic: 'ⲁϥϥⲓ ⲙ̀ⲡⲉϥⲣⲱⲟⲩϣ', english: 'he took care of him' }
          ]
        },
        {
          id: 'ex-43-2-8',
          type: 'translation',
          question: 'Translate: Ⲛⲓⲙ ϧⲉⲛ ⲡⲁⲓϣⲟⲙⲧ ⲁϥⲉⲣⲡ̀ⲗⲏⲥⲓⲟⲛ ⲙ̀ⲫⲏⲉⲧⲁϥϩⲉⲓ?',
          questionCoptic: 'Ⲛⲓⲙ ϧⲉⲛ ⲡⲁⲓϣⲟⲙⲧ ⲁϥⲉⲣⲡ̀ⲗⲏⲥⲓⲟⲛ ⲙ̀ⲫⲏⲉⲧⲁϥϩⲉⲓ?',
          correctAnswer: 'Which of these three proved neighbor to the one who fell?',
          options: ['Which of these three proved neighbor to the one who fell?', 'Who of the three was a neighbor?', 'Which three were neighbors?', 'Who fell among neighbors?'],
          explanation: 'Ⲛⲓⲙ ϧⲉⲛ ⲡⲁⲓϣⲟⲙⲧ ⲁϥⲉⲣⲡ̀ⲗⲏⲥⲓⲟⲛ ⲙ̀ⲫⲏⲉⲧⲁϥϩⲉⲓ? = who of these three became neighbor to the one who fell?'
        }
      ]
    },
    {
      id: 'lesson-43-3',
      unitId: 'unit-43',
      title: 'The Prodigal Son',
      description: 'Luke 15:11-32 - Repentance and Forgiveness',
      order: 3,
      xpReward: 40,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-43-3-1',
          type: 'translation',
          question: 'Translate: Ⲟⲩⲣⲱⲙⲓ ⲛⲉ ⲟⲩⲟⲛⲧⲉϥ ϣⲏⲣⲓ ⲥⲛⲁⲩ',
          questionCoptic: 'Ⲟⲩⲣⲱⲙⲓ ⲛⲉ ⲟⲩⲟⲛⲧⲉϥ ϣⲏⲣⲓ ⲥⲛⲁⲩ',
          correctAnswer: 'A man had two sons',
          options: ['A man had two sons', 'A man with two sons', 'Two sons of a man', 'There were two sons'],
          explanation: 'Ⲟⲩⲣⲱⲙⲓ ⲛⲉ ⲟⲩⲟⲛⲧⲉϥ ϣⲏⲣⲓ ⲥⲛⲁⲩ = a man, there was to-him two sons (opening)'
        },
        {
          id: 'ex-43-3-2',
          type: 'matching',
          question: 'Match key moments',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'Ⲙⲁϯ ⲛⲏⲓ ⲙ̀ⲡⲁⲧⲟⲓ', english: 'Give me my share' },
            { coptic: 'Ⲁϥⲥⲱⲣϥ ⲧⲏⲣⲟⲩ', english: 'He squandered it all' },
            { coptic: 'Ⲁϥⲓ̀ ⲉ̀ⲣⲟϥ ⲙ̀ⲙⲓⲛ ⲙ̀ⲙⲟϥ', english: 'He came to himself' },
            { coptic: 'Ⲁϥⲧⲱⲛϥ ⲁϥⲓ̀', english: 'He arose and came' }
          ]
        },
        {
          id: 'ex-43-3-3',
          type: 'translation',
          question: 'Translate: Ⲁϥϣⲱⲡⲓ ⲛ̀ϫⲉ ⲟⲩⲛⲓϣϯ ⲛ̀ϩ̀ⲃⲱⲛ ϧⲉⲛ ϯⲭⲱⲣⲁ ⲉ̀ⲧⲉⲙ̀ⲙⲁⲩ',
          questionCoptic: 'Ⲁϥϣⲱⲡⲓ ⲛ̀ϫⲉ ⲟⲩⲛⲓϣϯ ⲛ̀ϩ̀ⲃⲱⲛ ϧⲉⲛ ϯⲭⲱⲣⲁ ⲉ̀ⲧⲉⲙ̀ⲙⲁⲩ',
          correctAnswer: 'A great famine arose in that country',
          options: ['A great famine arose in that country', 'There was hunger in the land', 'The country had famine', 'Famine came'],
          explanation: 'Ⲁϥϣⲱⲡⲓ ⲛ̀ϫⲉ ⲟⲩⲛⲓϣϯ ⲛ̀ϩ̀ⲃⲱⲛ ϧⲉⲛ ϯⲭⲱⲣⲁ ⲉ̀ⲧⲉⲙ̀ⲙⲁⲩ = a great famine arose in that country'
        },
        {
          id: 'ex-43-3-4',
          type: 'fill_blank',
          question: 'Complete: Ⲁⲓⲉⲣⲛⲟⲃⲓ ⲉ̀ⲧ̀ⲫⲉ ⲛⲉⲙ ___ = I sinned against heaven and you',
          correctAnswer: 'ⲙ̀ⲡⲉⲕⲙ̀ⲑⲟ',
          options: ['ⲙ̀ⲡⲉⲕⲙ̀ⲑⲟ', 'ⲉ̀ⲡⲉⲕⲙ̀ⲑⲟ', 'ⲛⲉⲙⲁⲕ', 'ⲉ̀ⲣⲟⲕ'],
          explanation: 'Ⲁⲓⲉⲣⲛⲟⲃⲓ ⲉ̀ⲧ̀ⲫⲉ ⲛⲉⲙ ⲙ̀ⲡⲉⲕⲙ̀ⲑⲟ = I sinned against heaven and before you (confession)'
        },
        {
          id: 'ex-43-3-5',
          type: 'sentence_building',
          question: 'Build: "Make me as one of your servants"',
          correctAnswer: 'Ⲁⲣⲓⲧ ⲙ̀ⲫⲣⲏϯ ⲛ̀ⲟⲩⲁⲓ ⲛ̀ⲛⲉⲕⲉ̀ⲃⲓⲁⲓⲕ',
          wordBank: ['Ⲁⲣⲓⲧ', 'ⲙ̀ⲫⲣⲏϯ', 'ⲛ̀ⲟⲩⲁⲓ', 'ⲛ̀ⲛⲉⲕⲉ̀ⲃⲓⲁⲓⲕ'],
          explanation: 'Ⲁⲣⲓⲧ ⲙ̀ⲫⲣⲏϯ ⲛ̀ⲟⲩⲁⲓ ⲛ̀ⲛⲉⲕⲉ̀ⲃⲓⲁⲓⲕ = make me like one of your servants (son\'s request)'
        },
        {
          id: 'ex-43-3-6',
          type: 'translation',
          question: 'Translate: Ⲉⲧⲓ ⲇⲉ ⲉϥⲟⲩⲏⲟⲩ ⲁϥⲛⲁⲩ ⲉ̀ⲣⲟϥ ⲛ̀ϫⲉ ⲡⲉϥⲓⲱⲧ',
          questionCoptic: 'Ⲉⲧⲓ ⲇⲉ ⲉϥⲟⲩⲏⲟⲩ ⲁϥⲛⲁⲩ ⲉ̀ⲣⲟϥ ⲛ̀ϫⲉ ⲡⲉϥⲓⲱⲧ',
          correctAnswer: 'But while he was still far away, his father saw him',
          options: ['But while he was still far away, his father saw him', 'His father saw him from afar', 'He was far when father saw', 'Father looked and saw him'],
          explanation: 'Ⲉⲧⲓ ⲇⲉ ⲉϥⲟⲩⲏⲟⲩ ⲁϥⲛⲁⲩ ⲉ̀ⲣⲟϥ ⲛ̀ϫⲉ ⲡⲉϥⲓⲱⲧ = but while still far, his father saw him'
        },
        {
          id: 'ex-43-3-7',
          type: 'matching',
          question: 'Match father\'s response',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'Ⲁϥϣⲉⲛϩⲏⲧ ϧⲁⲣⲟϥ', english: 'He had compassion' },
            { coptic: 'Ⲁϥⲥⲱⲣϫ', english: 'He ran' },
            { coptic: 'Ⲁϥϩⲓⲧϥ ⲉ̀ϫⲱϥ', english: 'He fell upon him' },
            { coptic: 'Ⲁϥϯ ⲛ̀ⲟⲩϥⲓ ⲉ̀ⲣⲟϥ', english: 'He kissed him' }
          ]
        },
        {
          id: 'ex-43-3-8',
          type: 'translation',
          question: 'Translate: Ⲡⲁϣⲏⲣⲓ ⲛⲁϥⲙⲱⲟⲩⲧ ⲁϥⲱⲛϧ ⲛⲁϥⲧⲁⲕⲟ ⲁⲩϫⲉⲙϥ',
          questionCoptic: 'Ⲡⲁϣⲏⲣⲓ ⲛⲁϥⲙⲱⲟⲩⲧ ⲁϥⲱⲛϧ ⲛⲁϥⲧⲁⲕⲟ ⲁⲩϫⲉⲙϥ',
          correctAnswer: 'My son was dead and is alive, was lost and is found',
          options: ['My son was dead and is alive, was lost and is found', 'This son died but lives', 'My dead son is alive again', 'He was lost but now found'],
          explanation: 'Ⲡⲁϣⲏⲣⲓ ⲛⲁϥⲙⲱⲟⲩⲧ ⲁϥⲱⲛϧ ⲛⲁϥⲧⲁⲕⲟ ⲁⲩϫⲉⲙϥ = my son was dead and lived, was lost and they found him'
        }
      ]
    },
    {
      id: 'lesson-43-4',
      unitId: 'unit-43',
      title: 'Parable of the Talents',
      description: 'Matthew 25:14-30 - Faithful Stewardship',
      order: 4,
      xpReward: 40,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-43-4-1',
          type: 'translation',
          question: 'Translate: Ⲙ̀ⲫ̀ⲣⲏϯ ⲅⲁⲣ ⲛ̀ⲟⲩⲣⲱⲙⲓ ⲉϥⲛⲁϣⲉⲛⲓ ⲉ̀ⲃⲣⲁ',
          questionCoptic: 'Ⲙ̀ⲫ̀ⲣⲏϯ ⲅⲁⲣ ⲛ̀ⲟⲩⲣⲱⲙⲓ ⲉϥⲛⲁϣⲉⲛⲓ ⲉ̀ⲃⲣⲁ',
          correctAnswer: 'For it is like a man going on a journey',
          options: ['For it is like a man going on a journey', 'A man went abroad', 'Like a man traveling', 'It is as if a man left'],
          explanation: 'Ⲙ̀ⲫ̀ⲣⲏϯ ⲅⲁⲣ ⲛ̀ⲟⲩⲣⲱⲙⲓ ⲉϥⲛⲁϣⲉⲛⲓ ⲉ̀ⲃⲣⲁ = for (it is) like a man going abroad'
        },
        {
          id: 'ex-43-4-2',
          type: 'matching',
          question: 'Match the distribution of talents',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ϯⲟⲩ ⲛ̀ϭⲓⲛϭⲱⲣⲉⲙ', english: 'five talents' },
            { coptic: 'ⲥⲛⲁⲩ ⲛ̀ϭⲓⲛϭⲱⲣⲉⲙ', english: 'two talents' },
            { coptic: 'ⲟⲩⲁⲓ ⲛ̀ϭⲓⲛϭⲱⲣⲉⲙ', english: 'one talent' },
            { coptic: 'ⲡⲓⲟⲩⲁⲓ ⲡⲓⲟⲩⲁⲓ ⲕⲁⲧⲁ ⲧⲉϥϫⲟⲙ', english: 'each according to his ability' }
          ]
        },
        {
          id: 'ex-43-4-3',
          type: 'translation',
          question: 'Translate: Ⲁϥⲉⲣϩⲱⲃ ⲛ̀ϧⲏⲧⲟⲩ ⲁϥϫⲉⲙ ⲕⲉϯⲟⲩ',
          questionCoptic: 'Ⲁϥⲉⲣϩⲱⲃ ⲛ̀ϧⲏⲧⲟⲩ ⲁϥϫⲉⲙ ⲕⲉϯⲟⲩ',
          correctAnswer: 'He worked with them and gained five more',
          options: ['He worked with them and gained five more', 'He made five from them', 'He found another five', 'Five more were added'],
          explanation: 'Ⲁϥⲉⲣϩⲱⲃ ⲛ̀ϧⲏⲧⲟⲩ ⲁϥϫⲉⲙ ⲕⲉϯⲟⲩ = he worked with them and found another five'
        },
        {
          id: 'ex-43-4-4',
          type: 'fill_blank',
          question: 'Complete: Ⲫⲏ ⲇⲉ ⲉ̀ⲧⲁϥϭⲓ ⲛ̀ⲟⲩⲁⲓ ⲁϥϣⲉⲛⲁϥ ⲁϥⲭⲱⲡ ___ ϧⲉⲛ ⲡⲓⲕⲁϩⲓ',
          correctAnswer: 'ⲙ̀ⲙⲟϥ',
          options: ['ⲙ̀ⲙⲟϥ', 'ⲉ̀ⲣⲟϥ', 'ⲛⲁϥ', 'ϧⲁⲣⲟϥ'],
          explanation: 'Ⲁϥϣⲉⲛⲁϥ ⲁϥⲭⲱⲡ ⲙ̀ⲙⲟϥ ϧⲉⲛ ⲡⲓⲕⲁϩⲓ = he went and hid it in the ground (lazy servant)'
        },
        {
          id: 'ex-43-4-5',
          type: 'sentence_building',
          question: 'Build: "Well done, good and faithful servant"',
          correctAnswer: 'Ⲕⲁⲗⲱⲥ ⲡⲓⲃⲱⲕ ⲉⲑⲛⲁⲛⲉϥ ⲟⲩⲟϩ ⲙ̀ⲡⲓⲥⲧⲟⲥ',
          wordBank: ['Ⲕⲁⲗⲱⲥ', 'ⲡⲓⲃⲱⲕ', 'ⲉⲑⲛⲁⲛⲉϥ', 'ⲟⲩⲟϩ', 'ⲙ̀ⲡⲓⲥⲧⲟⲥ'],
          explanation: 'Ⲕⲁⲗⲱⲥ ⲡⲓⲃⲱⲕ ⲉⲑⲛⲁⲛⲉϥ ⲟⲩⲟϩ ⲙ̀ⲡⲓⲥⲧⲟⲥ = well/good, the servant good and faithful'
        },
        {
          id: 'ex-43-4-6',
          type: 'translation',
          question: 'Translate: Ⲛⲁⲕⲛⲁϩϯ ⲉ̀ϫⲉⲛ ⲟⲩⲕⲟⲩϫⲓ ⲉⲓⲉ̀ⲭⲁⲕ ⲉ̀ϫⲉⲛ ⲟⲩⲙⲏϣ',
          questionCoptic: 'Ⲛⲁⲕⲛⲁϩϯ ⲉ̀ϫⲉⲛ ⲟⲩⲕⲟⲩϫⲓ ⲉⲓⲉ̀ⲭⲁⲕ ⲉ̀ϫⲉⲛ ⲟⲩⲙⲏϣ',
          correctAnswer: 'You were faithful over a little, I will set you over much',
          options: ['You were faithful over a little, I will set you over much', 'From little to much faithful', 'You will have much from little', 'Little faith leads to much'],
          explanation: 'Ⲛⲁⲕⲛⲁϩϯ ⲉ̀ϫⲉⲛ ⲟⲩⲕⲟⲩϫⲓ ⲉⲓⲉ̀ⲭⲁⲕ ⲉ̀ϫⲉⲛ ⲟⲩⲙⲏϣ = you were faithful over little, I will place you over much'
        },
        {
          id: 'ex-43-4-7',
          type: 'matching',
          question: 'Match servant responses',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'Ⲁⲓⲉⲣϩⲱⲃ ⲛ̀ϧⲏⲧⲟⲩ', english: 'I worked with them' },
            { coptic: 'Ⲁⲓϫⲉⲙ ⲕⲉϯⲟⲩ', english: 'I gained five more' },
            { coptic: 'Ⲁⲓⲉⲣϩⲟϯ', english: 'I was afraid' },
            { coptic: 'Ⲁⲓⲭⲱⲡ ⲙ̀ⲡⲉⲕϭⲓⲛϭⲱⲣⲉⲙ', english: 'I hid your talent' }
          ]
        },
        {
          id: 'ex-43-4-8',
          type: 'translation',
          question: 'Translate: Ⲫⲏⲉⲧⲉⲟⲩⲟⲛⲧⲉϥ ⲁⲩⲉ̀ϯ ⲛⲁϥ ⲫⲏ ⲇⲉ ⲉ̀ⲧⲉⲙ̀ⲙⲟⲛⲧⲉϥ ⲁⲩⲉ̀ⲟⲗϥ ⲛ̀ⲧⲟⲧϥ',
          questionCoptic: 'Ⲫⲏⲉⲧⲉⲟⲩⲟⲛⲧⲉϥ ⲁⲩⲉ̀ϯ ⲛⲁϥ ⲫⲏ ⲇⲉ ⲉ̀ⲧⲉⲙ̀ⲙⲟⲛⲧⲉϥ ⲁⲩⲉ̀ⲟⲗϥ ⲛ̀ⲧⲟⲧϥ',
          correctAnswer: 'To the one who has, it will be given; from the one who has not, it will be taken',
          options: ['To the one who has, it will be given; from the one who has not, it will be taken', 'Those with much get more, those with little lose all', 'Having leads to more, not having to loss', 'Give to those who have, take from those without'],
          explanation: 'Ⲫⲏⲉⲧⲉⲟⲩⲟⲛⲧⲉϥ ⲁⲩⲉ̀ϯ ⲛⲁϥ ⲫⲏ ⲇⲉ ⲉ̀ⲧⲉⲙ̀ⲙⲟⲛⲧⲉϥ ⲁⲩⲉ̀ⲟⲗϥ ⲛ̀ⲧⲟⲧϥ = the one having, they will give to him; the one not having, they will take from him'
        }
      ]
    }
  ]
};

export default unit43;
