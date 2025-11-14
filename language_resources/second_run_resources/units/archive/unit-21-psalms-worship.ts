import { Unit } from '../../types';

// UNIT 21: PSALMS & WORSHIP
// Verified for Bohairic dialect consistency
// Psalm 100, Psalm 150, 1 Corinthians 13

const unit21: Unit = {
  id: 'unit-21',
  title: 'Psalms & Worship',
  description: 'Learn beloved Psalms and worship expressions',
  order: 21,
  color: '#FFD700',
  lessons: [
    {
      id: 'lesson-21-1',
      unitId: 'unit-21',
      title: 'Psalm 100:1-2 - Make a Joyful Noise',
      description: 'A Psalm of thanksgiving and praise',
      order: 1,
      xpReward: 35,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-21-1-1',
          type: 'translation',
          question: 'Translate: ⲁⲣⲓϩⲟ ⲉⲣⲟϥ ⲙⲫϯ',
          questionCoptic: 'ⲁⲣⲓϩⲟ ⲉⲣⲟϥ ⲙⲫϯ',
          correctAnswer: 'Shout to God',
          options: ['Shout to God', 'Cry out to God', 'Sing to God', 'Praise God'],
          explanation: 'ⲁⲣⲓϩⲟ = shout, make a joyful noise + ⲉⲣⲟϥ = to him + ⲙⲫϯ = God (Bohairic ⲫϯ not ⲫⲛⲟⲩϯ!)'
        },
        {
          id: 'ex-21-1-2',
          type: 'multiple_choice',
          question: 'What does ⲡⲓⲕⲁϩⲓ ⲧⲏⲣϥ mean?',
          correctAnswer: 'all the earth',
          options: ['all the earth', 'the whole world', 'every land', 'all creation'],
          explanation: 'ⲡⲓⲕⲁϩⲓ = the earth + ⲧⲏⲣϥ = all (masculine singular)'
        },
        {
          id: 'ex-21-1-3',
          type: 'matching',
          question: 'Match the Psalm 100 vocabulary',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲁⲣⲓϩⲟ', english: 'shout, make noise' },
            { coptic: 'ϣⲉⲙϣⲓ', english: 'serve' },
            { coptic: 'ⲫϯ', english: 'God' },
            { coptic: 'ⲟⲩⲛⲟϥ', english: 'joy' }
          ]
        },
        {
          id: 'ex-21-1-4',
          type: 'translation',
          question: 'Translate: ϣⲉⲙϣⲓ ⲙⲫϯ ϧⲉⲛ ⲟⲩⲟⲩⲛⲟϥ',
          questionCoptic: 'ϣⲉⲙϣⲓ ⲙⲫϯ ϧⲉⲛ ⲟⲩⲟⲩⲛⲟϥ',
          correctAnswer: 'Serve God with joy',
          options: ['Serve God with joy', 'Worship God joyfully', 'Minister to God in gladness', 'Work for God happily'],
          explanation: 'ϣⲉⲙϣⲓ = serve + ⲙⲫϯ = God + ϧⲉⲛ ⲟⲩⲟⲩⲛⲟϥ = with joy (Bohairic ⲫϯ not ⲫⲛⲟⲩϯ!)'
        },
        {
          id: 'ex-21-1-5',
          type: 'sentence_building',
          question: 'Build: "Come before him with singing"',
          correctAnswer: 'ⲁⲙⲱⲓⲛⲓ ⲙⲡⲉϥⲙⲑⲟ ϧⲉⲛ ϩⲁⲛϩⲱⲇⲏ',
          wordBank: ['ⲁⲙⲱⲓⲛⲓ', 'ⲙⲡⲉϥⲙⲑⲟ', 'ϧⲉⲛ', 'ϩⲁⲛϩⲱⲇⲏ'],
          explanation: 'ⲁⲙⲱⲓⲛⲓ (come) + ⲙⲡⲉϥⲙⲑⲟ (before him) + ϧⲉⲛ ϩⲁⲛϩⲱⲇⲏ (with songs)'
        },
        {
          id: 'ex-21-1-6',
          type: 'multiple_choice',
          question: 'The word ϩⲱⲇⲏ refers to:',
          correctAnswer: 'song, hymn',
          options: ['song, hymn', 'prayer', 'dance', 'instrument'],
          explanation: 'ϩⲱⲇⲏ (hōdē) is a song or hymn of praise'
        },
        {
          id: 'ex-21-1-7',
          type: 'fill_blank',
          question: 'Complete: ⲁⲣⲓϩⲟ ⲉⲣⲟϥ ⲙⲫϯ ___ ⲧⲏⲣϥ = Shout to God, all the earth',
          correctAnswer: 'ⲡⲓⲕⲁϩⲓ',
          options: ['ⲡⲓⲕⲁϩⲓ', 'ⲛⲓⲕⲟⲥⲙⲟⲥ', 'ⲛⲓⲉⲑⲛⲟⲥ', 'ⲛⲓⲗⲁⲟⲥ'],
          explanation: 'ⲡⲓⲕⲁϩⲓ = the earth - Psalm 100:1 calls all creation to praise (Bohairic ⲫϯ not ⲫⲛⲟⲩϯ!)'
        },
        {
          id: 'ex-21-1-8',
          type: 'translation',
          question: 'Translate the verse: ⲁⲣⲓϩⲟ ⲉⲣⲟϥ ⲙⲫϯ ⲡⲓⲕⲁϩⲓ ⲧⲏⲣϥ ϣⲉⲙϣⲓ ⲙⲫϯ ϧⲉⲛ ⲟⲩⲟⲩⲛⲟϥ',
          questionCoptic: 'ⲁⲣⲓϩⲟ ⲉⲣⲟϥ ⲙⲫϯ ⲡⲓⲕⲁϩⲓ ⲧⲏⲣϥ ϣⲉⲙϣⲓ ⲙⲫϯ ϧⲉⲛ ⲟⲩⲟⲩⲛⲟϥ',
          correctAnswer: 'Shout to God, all the earth; serve God with joy',
          options: ['Shout to God, all the earth; serve God with joy', 'All lands cry to God and worship joyfully', 'Make noise to God, every land; minister gladly', 'The whole earth shouts; serve the Lord happily'],
          explanation: 'Psalm 100:1-2 - A universal call to worship with joy (Bohairic ⲫϯ not ⲫⲛⲟⲩϯ!)'
        }
      ]
    },
    {
      id: 'lesson-21-2',
      unitId: 'unit-21',
      title: 'Psalm 150:1-2 - Praise the Lord',
      description: 'The final and climactic Psalm of praise',
      order: 2,
      xpReward: 35,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-21-2-1',
          type: 'translation',
          question: 'Translate: ⲥⲙⲟⲩ ⲉⲫϯ',
          questionCoptic: 'ⲥⲙⲟⲩ ⲉⲫϯ',
          correctAnswer: 'Praise God',
          options: ['Praise God', 'Bless God', 'Thank God', 'Worship God'],
          explanation: 'ⲥⲙⲟⲩ = praise, bless + ⲉⲫϯ = God - the opening of Psalm 150 (Bohairic ⲫϯ not ⲫⲛⲟⲩϯ!)'
        },
        {
          id: 'ex-21-2-2',
          type: 'multiple_choice',
          question: 'What does ϧⲉⲛ ⲛⲉϥⲁⲅⲓⲟⲥ mean?',
          correctAnswer: 'in his sanctuary',
          options: ['in his sanctuary', 'among his saints', 'in his holiness', 'with his angels'],
          explanation: 'ϧⲉⲛ = in + ⲛⲉϥⲁⲅⲓⲟⲥ = his sanctuary/holy place (from Greek hagios)'
        },
        {
          id: 'ex-21-2-3',
          type: 'matching',
          question: 'Match the Psalm 150 terms',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲥⲙⲟⲩ', english: 'praise' },
            { coptic: 'ⲁⲅⲓⲟⲥ', english: 'sanctuary, holy place' },
            { coptic: 'ⲧⲁϫⲣⲟ', english: 'firmament, heavens' },
            { coptic: 'ⲛⲉϥϫⲟⲙ', english: 'his powers' }
          ]
        },
        {
          id: 'ex-21-2-4',
          type: 'translation',
          question: 'Translate: ⲥⲙⲟⲩ ⲉⲣⲟϥ ϧⲉⲛ ⲡⲓⲧⲁϫⲣⲟ ⲛⲧⲉ ⲧⲉϥϫⲟⲙ',
          questionCoptic: 'ⲥⲙⲟⲩ ⲉⲣⲟϥ ϧⲉⲛ ⲡⲓⲧⲁϫⲣⲟ ⲛⲧⲉ ⲧⲉϥϫⲟⲙ',
          correctAnswer: 'Praise him in the firmament of his power',
          options: ['Praise him in the firmament of his power', 'Bless him in his mighty heavens', 'Worship him in the sky of his strength', 'Praise him in the heavens of might'],
          explanation: 'ⲡⲓⲧⲁϫⲣⲟ = the firmament/sky + ⲛⲧⲉ ⲧⲉϥϫⲟⲙ = of his power'
        },
        {
          id: 'ex-21-2-5',
          type: 'sentence_building',
          question: 'Build: "Praise him for his mighty acts"',
          correctAnswer: 'ⲥⲙⲟⲩ ⲉⲣⲟϥ ⲉⲑⲃⲉ ⲛⲉϥϫⲟⲙ',
          wordBank: ['ⲥⲙⲟⲩ', 'ⲉⲣⲟϥ', 'ⲉⲑⲃⲉ', 'ⲛⲉϥϫⲟⲙ'],
          explanation: 'ⲥⲙⲟⲩ ⲉⲣⲟϥ (praise him) + ⲉⲑⲃⲉ (because of, for) + ⲛⲉϥϫⲟⲙ (his powers/mighty acts)'
        },
        {
          id: 'ex-21-2-6',
          type: 'multiple_choice',
          question: 'What is ⲧⲁϫⲣⲟ?',
          correctAnswer: 'firmament, expanse of heaven',
          options: ['firmament, expanse of heaven', 'temple', 'mountain', 'altar'],
          explanation: 'ⲧⲁϫⲣⲟ refers to the firmament or expanse of the heavens'
        },
        {
          id: 'ex-21-2-7',
          type: 'fill_blank',
          question: 'Complete: ⲥⲙⲟⲩ ⲉⲫϯ ϧⲉⲛ ___ = Praise God in his sanctuary',
          correctAnswer: 'ⲛⲉϥⲁⲅⲓⲟⲥ',
          options: ['ⲛⲉϥⲁⲅⲓⲟⲥ', 'ⲡⲓⲕⲁϩⲓ', 'ⲧⲁϫⲣⲟ', 'ⲡⲓⲏⲓ'],
          explanation: 'ⲛⲉϥⲁⲅⲓⲟⲥ = his sanctuary - the holy place of worship (Bohairic ⲫϯ not ⲫⲛⲟⲩϯ!)'
        },
        {
          id: 'ex-21-2-8',
          type: 'translation',
          question: 'Translate: ⲥⲙⲟⲩ ⲉⲣⲟϥ ⲕⲁⲧⲁ ⲡⲁⲙⲏϣ ⲛⲧⲉ ⲧⲉϥⲙⲉⲧⲛⲓϣϯ',
          questionCoptic: 'ⲥⲙⲟⲩ ⲉⲣⲟϥ ⲕⲁⲧⲁ ⲡⲁⲙⲏϣ ⲛⲧⲉ ⲧⲉϥⲙⲉⲧⲛⲓϣϯ',
          correctAnswer: 'Praise him according to the abundance of his greatness',
          options: ['Praise him according to the abundance of his greatness', 'Bless him for his many great things', 'Worship him in his exceeding greatness', 'Praise him in the multitude of his glory'],
          explanation: 'ⲕⲁⲧⲁ = according to + ⲡⲁⲙⲏϣ = abundance + ⲛⲧⲉ ⲧⲉϥⲙⲉⲧⲛⲓϣϯ = of his greatness'
        }
      ]
    },
    {
      id: 'lesson-21-3',
      unitId: 'unit-21',
      title: '1 Corinthians 13:4-7 - Love is Patient',
      description: 'The famous love chapter',
      order: 3,
      xpReward: 35,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-21-3-1',
          type: 'translation',
          question: 'Translate: ϯⲁⲅⲁⲡⲏ ⲟⲩⲣⲉϥⲱⲟⲩⲛϩϥ ⲉⲃⲟⲗ',
          questionCoptic: 'ϯⲁⲅⲁⲡⲏ ⲟⲩⲣⲉϥⲱⲟⲩⲛϩϥ ⲉⲃⲟⲗ',
          correctAnswer: 'Love is patient',
          options: ['Love is patient', 'Love waits', 'Love is long-suffering', 'Love endures'],
          explanation: 'ϯⲁⲅⲁⲡⲏ = love + ⲟⲩⲣⲉϥⲱⲟⲩⲛϩϥ ⲉⲃⲟⲗ = patient, long-suffering'
        },
        {
          id: 'ex-21-3-2',
          type: 'multiple_choice',
          question: 'What does ⲟⲩⲣⲉϥⲉⲣⲭⲣⲏⲥⲧⲉⲩⲉⲥⲑⲁⲓ mean?',
          correctAnswer: 'kind',
          options: ['kind', 'patient', 'gentle', 'merciful'],
          explanation: 'ⲟⲩⲣⲉϥⲉⲣⲭⲣⲏⲥⲧⲉⲩⲉⲥⲑⲁⲓ = one who is kind (from Greek chrestos)'
        },
        {
          id: 'ex-21-3-3',
          type: 'matching',
          question: 'Match the love characteristics',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲱⲟⲩⲛϩϥ ⲉⲃⲟⲗ', english: 'patient' },
            { coptic: 'ⲉⲣⲭⲣⲏⲥⲧⲉⲩⲉⲥⲑⲁⲓ', english: 'kind' },
            { coptic: 'ⲕⲱϩ', english: 'envy, jealous' },
            { coptic: 'ϣⲟⲩϣⲟⲩ', english: 'boast' }
          ]
        },
        {
          id: 'ex-21-3-4',
          type: 'translation',
          question: 'Translate: ϯⲁⲅⲁⲡⲏ ⲥⲕⲱϩ ⲁⲛ',
          questionCoptic: 'ϯⲁⲅⲁⲡⲏ ⲥⲕⲱϩ ⲁⲛ',
          correctAnswer: 'Love does not envy',
          options: ['Love does not envy', 'Love is not jealous', 'Love has no envy', 'Love envies not'],
          explanation: 'ϯⲁⲅⲁⲡⲏ = love + ⲥⲕⲱϩ ⲁⲛ = does not envy (negative with ⲁⲛ)'
        },
        {
          id: 'ex-21-3-5',
          type: 'sentence_building',
          question: 'Build: "Love does not boast"',
          correctAnswer: 'ϯⲁⲅⲁⲡⲏ ⲥϣⲟⲩϣⲟⲩ ⲙⲙⲟⲥ ⲁⲛ',
          wordBank: ['ϯⲁⲅⲁⲡⲏ', 'ⲥϣⲟⲩϣⲟⲩ', 'ⲙⲙⲟⲥ', 'ⲁⲛ'],
          explanation: 'ϯⲁⲅⲁⲡⲏ (love) + ⲥϣⲟⲩϣⲟⲩ ⲙⲙⲟⲥ ⲁⲛ (does not boast)'
        },
        {
          id: 'ex-21-3-6',
          type: 'multiple_choice',
          question: 'What does ⲥϭⲓⲥⲓ ⲁⲛ mean?',
          correctAnswer: 'is not puffed up',
          options: ['is not puffed up', 'does not fall', 'is not weak', 'does not sin'],
          explanation: 'ⲥϭⲓⲥⲓ ⲁⲛ = is not puffed up/arrogant - love is humble'
        },
        {
          id: 'ex-21-3-7',
          type: 'fill_blank',
          question: 'Complete: ϯⲁⲅⲁⲡⲏ ___ ⲙⲙⲟⲥ ⲁⲛ = Love does not behave inappropriately',
          correctAnswer: 'ⲥⲉⲣⲁⲧⲥⲭⲏⲙⲟⲛⲓⲛ',
          options: ['ⲥⲉⲣⲁⲧⲥⲭⲏⲙⲟⲛⲓⲛ', 'ⲥϣⲟⲩϣⲟⲩ', 'ⲥⲕⲱϩ', 'ⲥϭⲓⲥⲓ'],
          explanation: 'ⲥⲉⲣⲁⲧⲥⲭⲏⲙⲟⲛⲓⲛ = behaves inappropriately - love acts properly'
        },
        {
          id: 'ex-21-3-8',
          type: 'translation',
          question: 'Translate: ϯⲁⲅⲁⲡⲏ ⲥϩⲱⲡ ⲛϩⲱⲃ ⲛⲓⲃⲉⲛ ⲥⲛⲁϩϯ ⲛϩⲱⲃ ⲛⲓⲃⲉⲛ',
          questionCoptic: 'ϯⲁⲅⲁⲡⲏ ⲥϩⲱⲡ ⲛϩⲱⲃ ⲛⲓⲃⲉⲛ ⲥⲛⲁϩϯ ⲛϩⲱⲃ ⲛⲓⲃⲉⲛ',
          correctAnswer: 'Love bears all things, believes all things',
          options: ['Love bears all things, believes all things', 'Love covers everything, trusts everything', 'Love endures all, has faith in all', 'Love hides all things, hopes in all things'],
          explanation: 'ⲥϩⲱⲡ = covers/bears + ⲥⲛⲁϩϯ = believes/trusts + ⲛϩⲱⲃ ⲛⲓⲃⲉⲛ = all things'
        }
      ]
    }
  ]
};

export default unit21;
