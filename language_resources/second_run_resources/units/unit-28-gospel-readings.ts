import { Unit } from '../../types';

// UNIT 28: GOSPEL READINGS & PARABLES
// Verified for Bohairic dialect consistency
// Extended biblical passages and parables, including complete Beatitudes

const unit28: Unit = {
  id: 'unit-28',
  title: 'Gospel Readings & Parables',
  description: 'Read extended passages from the Gospels, including the Beatitudes',
  order: 28,
  color: '#CE82FF',
  lessons: [
    {
      id: 'lesson-28-1',
      unitId: 'unit-28',
      title: 'The Parable of the Sower - Matthew 13',
      description: 'Read and understand the Parable of the Sower',
      order: 1,
      xpReward: 50,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-28-1-1',
          type: 'translation',
          question: 'Translate: ⲁⲡⲓⲣⲉϥϫⲟ ⲓ̀ ⲉⲃⲟⲗ ⲉϫⲟ',
          questionCoptic: 'ⲁⲡⲓⲣⲉϥϫⲟ ⲓ̀ ⲉⲃⲟⲗ ⲉϫⲟ',
          correctAnswer: 'The sower went out to sow',
          options: ['The sower went out to sow', 'The sower came to sow', 'A man went to plant', 'The farmer sowed'],
          explanation: 'ⲁⲡⲓⲣⲉϥϫⲟ = the sower + ⲓ̀ ⲉⲃⲟⲗ = went out + ⲉϫⲟ = to sow (Bohairic ⲓ̀ not ⲉⲓ!)'
        },
        {
          id: 'ex-28-1-2',
          type: 'multiple_choice',
          question: 'What is ⲣⲉϥϫⲟ?',
          questionCoptic: 'ⲣⲉϥϫⲟ',
          correctAnswer: 'sower (one who sows)',
          options: ['sower (one who sows)', 'seed', 'field', 'harvest'],
          explanation: 'ⲣⲉϥϫⲟ = sower (ⲣⲉϥ- "one who" + ϫⲟ "sow")'
        },
        {
          id: 'ex-28-1-3',
          type: 'matching',
          question: 'Match parable vocabulary',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲣⲉϥϫⲟ', english: 'sower' },
            { coptic: 'ϭⲣⲟϫ', english: 'seed' },
            { coptic: 'ⲓⲟϩⲓ', english: 'field' },
            { coptic: 'ⲱⲥϧ', english: 'harvest' }
          ]
        },
        {
          id: 'ex-28-1-4',
          type: 'translation',
          question: 'Translate: ϩⲁⲛⲟⲩⲟⲛ ⲁⲩϩⲉⲓ ϩⲓϫⲉⲛ ⲡⲓⲙⲱⲓⲧ',
          questionCoptic: 'ϩⲁⲛⲟⲩⲟⲛ ⲁⲩϩⲉⲓ ϩⲓϫⲉⲛ ⲡⲓⲙⲱⲓⲧ',
          correctAnswer: 'Some fell on the path',
          options: ['Some fell on the path', 'They fell on the road', 'Seeds on the way', 'Some came to the path'],
          explanation: 'ϩⲁⲛⲟⲩⲟⲛ = some (indefinite plural) + ⲁⲩϩⲉⲓ = they fell + ϩⲓϫⲉⲛ ⲡⲓⲙⲱⲓⲧ = on the path'
        },
        {
          id: 'ex-28-1-5',
          type: 'sentence_building',
          question: 'Build: "The birds ate them"',
          correctAnswer: 'ⲁⲛⲓϩⲁⲗⲁϯ ⲟⲩⲟⲙⲟⲩ',
          wordBank: ['ⲁ', 'ⲛⲓϩⲁⲗⲁϯ', 'ⲟⲩⲟⲙ', 'ⲟⲩ'],
          explanation: 'ⲁⲛⲓϩⲁⲗⲁϯ ⲟⲩⲟⲙⲟⲩ = the birds (ⲛⲓϩⲁⲗⲁϯ) ate them (ⲟⲩⲟⲙⲟⲩ = eat + them)'
        },
        {
          id: 'ex-28-1-6',
          type: 'multiple_choice',
          question: 'What represents the seed on rocky ground?',
          correctAnswer: 'Those who hear with joy but have no root',
          options: ['Those who hear with joy but have no root', 'Hard-hearted people', 'The devil', 'Thorns'],
          explanation: 'Jesus explains: rocky ground = those who receive the word joyfully but fall away in tribulation (no roots)'
        },
        {
          id: 'ex-28-1-7',
          type: 'fill_blank',
          question: 'Complete: ϩⲁⲛⲕⲉⲟⲩⲟⲛ ⲁⲩϩⲉⲓ ϩⲓϫⲉⲛ ___= Others fell on good soil',
          correctAnswer: 'ⲡⲓⲕⲁϩⲓ ⲉⲑⲛⲁⲛⲉϥ',
          options: ['ⲡⲓⲕⲁϩⲓ ⲉⲑⲛⲁⲛⲉϥ', 'ⲛⲓⲡⲉⲧⲣⲁ', 'ⲛⲓϣⲟⲛϯ', 'ⲡⲓⲙⲱⲓⲧ'],
          explanation: 'ⲡⲓⲕⲁϩⲓ ⲉⲑⲛⲁⲛⲉϥ = the good soil (literally "the earth that is good")'
        },
        {
          id: 'ex-28-1-8',
          type: 'translation',
          question: 'Translate: ⲁϥⲟⲡⲧ ⲛ̀ⲟⲩⲧⲁϩ ⲛⲉⲙ ⲙⲁⲃ ⲛⲉⲙ ⲙⲁⲃϣⲉ',
          questionCoptic: 'ⲁϥⲟⲡⲧ ⲛ̀ⲟⲩⲧⲁϩ ⲛⲉⲙ ⲙⲁⲃ ⲛⲉⲙ ⲙⲁⲃϣⲉ',
          correctAnswer: 'It bore fruit: one hundred, sixty, and thirty',
          options: ['It bore fruit: one hundred, sixty, and thirty', 'Three harvests came', 'Many seeds grew', 'The yield was great'],
          explanation: 'ⲁϥⲟⲡⲧ = it bore fruit + ⲛ̀ⲟⲩⲧⲁϩ (100) ⲛⲉⲙ ⲙⲁⲃ (60) ⲛⲉⲙ ⲙⲁⲃϣⲉ (30) - the yield ratios'
        }
      ]
    },
    {
      id: 'lesson-28-2',
      unitId: 'unit-28',
      title: 'The Good Shepherd - John 10',
      description: 'I am the good shepherd',
      order: 2,
      xpReward: 50,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-28-2-1',
          type: 'translation',
          question: 'Translate: ⲁⲛⲟⲕ ⲡⲉ ⲡⲓⲙⲁⲛⲉⲥⲱⲟⲩ ⲉⲑⲛⲁⲛⲉϥ',
          questionCoptic: 'ⲁⲛⲟⲕ ⲡⲉ ⲡⲓⲙⲁⲛⲉⲥⲱⲟⲩ ⲉⲑⲛⲁⲛⲉϥ',
          correctAnswer: 'I am the good shepherd',
          options: ['I am the good shepherd', 'I am a shepherd', 'The good shepherd is here', 'I shepherd well'],
          explanation: 'ⲁⲛⲟⲕ ⲡⲉ = I am (copula) + ⲡⲓⲙⲁⲛⲉⲥⲱⲟⲩ ⲉⲑⲛⲁⲛⲉϥ = the good shepherd'
        },
        {
          id: 'ex-28-2-2',
          type: 'multiple_choice',
          question: 'What is ⲙⲁⲛⲉⲥⲱⲟⲩ?',
          questionCoptic: 'ⲙⲁⲛⲉⲥⲱⲟⲩ',
          correctAnswer: 'shepherd',
          options: ['shepherd', 'sheep', 'lamb', 'flock'],
          explanation: 'ⲙⲁⲛⲉⲥⲱⲟⲩ (man-esōou) = shepherd (literally "sheep-tender")'
        },
        {
          id: 'ex-28-2-3',
          type: 'matching',
          question: 'Match shepherd/sheep vocabulary',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲙⲁⲛⲉⲥⲱⲟⲩ', english: 'shepherd' },
            { coptic: 'ⲉⲥⲱⲟⲩ', english: 'sheep' },
            { coptic: 'ⲟϩⲓ', english: 'lamb' },
            { coptic: 'ⲟϩⲓ ⲙⲫϯ', english: 'Lamb of God' }
          ]
        },
        {
          id: 'ex-28-2-4',
          type: 'translation',
          question: 'Translate: ⲡⲓⲙⲁⲛⲉⲥⲱⲟⲩ ⲉⲑⲛⲁⲛⲉϥ ϣⲁϥⲭⲱ ⲛ̀ⲧⲉϥⲯⲩⲭⲏ ⲉϩⲣⲏⲓ ϩⲁ ⲛⲓⲉⲥⲱⲟⲩ',
          questionCoptic: 'ⲡⲓⲙⲁⲛⲉⲥⲱⲟⲩ ⲉⲑⲛⲁⲛⲉϥ ϣⲁϥⲭⲱ ⲛ̀ⲧⲉϥⲯⲩⲭⲏ ⲉϩⲣⲏⲓ ϩⲁ ⲛⲓⲉⲥⲱⲟⲩ',
          correctAnswer: 'The good shepherd lays down his life for the sheep',
          options: ['The good shepherd lays down his life for the sheep', 'The shepherd gives his soul to sheep', 'Good shepherds die for animals', 'The shepherd sacrifices himself'],
          explanation: 'ⲡⲓⲙⲁⲛⲉⲥⲱⲟⲩ ⲉⲑⲛⲁⲛⲉϥ (the good shepherd) + ϣⲁϥⲭⲱ ⲛ̀ⲧⲉϥⲯⲩⲭⲏ (lays down his life) + ⲉϩⲣⲏⲓ ϩⲁ (for) + ⲛⲓⲉⲥⲱⲟⲩ (the sheep)'
        },
        {
          id: 'ex-28-2-5',
          type: 'sentence_building',
          question: 'Build: "I know my sheep"',
          correctAnswer: 'ϯⲥⲱⲟⲩⲛ ⲛ̀ⲛⲁⲉⲥⲱⲟⲩ',
          wordBank: ['ϯⲥⲱⲟⲩⲛ', 'ⲛ̀ⲛⲁ', 'ⲉⲥⲱⲟⲩ', 'ⲙ̀ⲙⲟⲓ'],
          explanation: 'ϯⲥⲱⲟⲩⲛ = I know + ⲛ̀ⲛⲁⲉⲥⲱⲟⲩ = my sheep'
        },
        {
          id: 'ex-28-2-6',
          type: 'multiple_choice',
          question: 'What is ⲯⲩⲭⲏ in this context?',
          correctAnswer: 'life/soul',
          options: ['life/soul', 'body', 'spirit', 'heart'],
          explanation: 'ⲯⲩⲭⲏ (psychē, from Greek) = life/soul - "laying down one\'s life" = dying for others'
        },
        {
          id: 'ex-28-2-7',
          type: 'fill_blank',
          question: 'Complete: ⲁⲛⲟⲕ ⲡⲉ ⲡⲓⲣⲟ ⲛ̀ⲧⲉ ___ = I am the door of the sheep',
          correctAnswer: 'ⲛⲓⲉⲥⲱⲟⲩ',
          options: ['ⲛⲓⲉⲥⲱⲟⲩ', 'ⲡⲓⲏⲓ', 'ϯⲙⲉⲧⲟⲩⲣⲟ', 'ⲡⲓⲟⲩϫⲁⲓ'],
          explanation: 'ⲛⲓⲉⲥⲱⲟⲩ = the sheep - Jesus is the door through which sheep enter to safety'
        },
        {
          id: 'ex-28-2-8',
          type: 'translation',
          question: 'Translate: ⲟⲩⲟⲛϩⲁⲛⲕⲉⲉⲥⲱⲟⲩ ⲛⲧⲟⲧ ⲛⲏⲉⲧⲉ ⲛ̀ϩⲁⲛⲉⲃⲟⲗ ϧⲉⲛ ⲡⲁⲓⲟϩⲓ ⲁⲛ ⲛⲉ',
          questionCoptic: 'ⲟⲩⲟⲛϩⲁⲛⲕⲉⲉⲥⲱⲟⲩ ⲛⲧⲟⲧ ⲛⲏⲉⲧⲉ ⲛ̀ϩⲁⲛⲉⲃⲟⲗ ϧⲉⲛ ⲡⲁⲓⲟϩⲓ ⲁⲛ ⲛⲉ',
          correctAnswer: 'I have other sheep which are not of this fold',
          options: ['I have other sheep which are not of this fold', 'There are more sheep outside', 'Other sheep exist elsewhere', 'Some sheep are not mine'],
          explanation: 'ⲟⲩⲟⲛϩⲁⲛⲕⲉⲉⲥⲱⲟⲩ ⲛⲧⲟⲧ = I have other sheep + ⲛⲏⲉⲧⲉ ⲛ̀ϩⲁⲛⲉⲃⲟⲗ ϧⲉⲛ ⲡⲁⲓⲟϩⲓ ⲁⲛ ⲛⲉ = which are not from this fold (prophecy of Gentile believers)'
        }
      ]
    },
    {
      id: 'lesson-28-3',
      unitId: 'unit-28',
      title: 'The Prodigal Son - Luke 15',
      description: 'The parable of the lost son',
      order: 3,
      xpReward: 50,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-28-3-1',
          type: 'translation',
          question: 'Translate: ⲟⲩⲣⲱⲙⲓ ⲟⲩⲟⲛⲧⲁϥ ϣⲏⲣⲓ ⲥⲛⲁⲩ',
          questionCoptic: 'ⲟⲩⲣⲱⲙⲓ ⲟⲩⲟⲛⲧⲁϥ ϣⲏⲣⲓ ⲥⲛⲁⲩ',
          correctAnswer: 'A man had two sons',
          options: ['A man had two sons', 'A man with two children', 'Two sons of a man', 'A father of two'],
          explanation: 'ⲟⲩⲣⲱⲙⲓ = a man + ⲟⲩⲟⲛⲧⲁϥ = he had + ϣⲏⲣⲓ ⲥⲛⲁⲩ = two sons (Bohairic ϣⲏⲣⲓ not ⲥⲏⲣⲓ!)'
        },
        {
          id: 'ex-28-3-2',
          type: 'multiple_choice',
          question: 'What does ⲕⲟⲩϫⲓ mean?',
          questionCoptic: 'ⲕⲟⲩϫⲓ',
          correctAnswer: 'younger/small',
          options: ['younger/small', 'older/big', 'middle', 'only'],
          explanation: 'ⲕⲟⲩϫⲓ (kouji) = small/younger - ⲡⲓⲕⲟⲩϫⲓ = the younger one'
        },
        {
          id: 'ex-28-3-3',
          type: 'matching',
          question: 'Match family/property vocabulary',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲓⲱⲧ', english: 'father' },
            { coptic: 'ϣⲏⲣⲓ', english: 'son' },
            { coptic: 'ⲕⲗⲏⲣⲟⲥ', english: 'inheritance' },
            { coptic: 'ϩⲩⲡⲁⲣⲭⲓⲥ', english: 'property/wealth' }
          ]
        },
        {
          id: 'ex-28-3-4',
          type: 'translation',
          question: 'Translate: ⲙⲏⲓⲥ ⲛⲏⲓ ⲛ̀ⲧⲁⲧⲟⲓ ⲉⲃⲟⲗ ϧⲉⲛ ϯϩⲩⲡⲁⲣⲭⲓⲥ',
          questionCoptic: 'ⲙⲏⲓⲥ ⲛⲏⲓ ⲛ̀ⲧⲁⲧⲟⲓ ⲉⲃⲟⲗ ϧⲉⲛ ϯϩⲩⲡⲁⲣⲭⲓⲥ',
          correctAnswer: 'Give me my portion of the property',
          options: ['Give me my portion of the property', 'Give me my share of wealth', 'My inheritance belongs to me', 'Give me what is mine'],
          explanation: 'ⲙⲏⲓⲥ ⲛⲏⲓ = give it to me + ⲛ̀ⲧⲁⲧⲟⲓ = my portion + ⲉⲃⲟⲗ ϧⲉⲛ ϯϩⲩⲡⲁⲣⲭⲓⲥ = from the property'
        },
        {
          id: 'ex-28-3-5',
          type: 'sentence_building',
          question: 'Build: "He wasted his property"',
          correctAnswer: 'ⲁϥⲥⲟⲣϥ ⲛ̀ⲧⲉϥϩⲩⲡⲁⲣⲭⲓⲥ',
          wordBank: ['ⲁϥⲥⲟⲣϥ', 'ⲛ̀ⲧⲉϥ', 'ϩⲩⲡⲁⲣⲭⲓⲥ', 'ⲉⲃⲟⲗ'],
          explanation: 'ⲁϥⲥⲟⲣϥ = he wasted/scattered + ⲛ̀ⲧⲉϥϩⲩⲡⲁⲣⲭⲓⲥ = his property'
        },
        {
          id: 'ex-28-3-6',
          type: 'multiple_choice',
          question: 'What does ⲁϥⲉⲣⲕⲁⲧⲁⲫⲣⲟⲛⲓⲛ mean?',
          correctAnswer: 'he came to his senses',
          options: ['he came to his senses', 'he fell down', 'he became wise', 'he remembered'],
          explanation: 'ⲁϥⲉⲣⲕⲁⲧⲁⲫⲣⲟⲛⲓⲛ = he came to himself/his senses (from Greek kataphronein)'
        },
        {
          id: 'ex-28-3-7',
          type: 'fill_blank',
          question: 'Complete: ϯⲛⲁⲧⲱⲛⲧ ⲧⲁϣⲉⲛⲓ ϣⲁ ___ = I will arise and go to my father',
          correctAnswer: 'ⲡⲁⲓⲱⲧ',
          options: ['ⲡⲁⲓⲱⲧ', 'ⲡⲉⲛⲓⲱⲧ', 'ⲡⲓⲏⲓ', 'ⲧⲁⲭⲱⲣⲁ'],
          explanation: 'ⲡⲁⲓⲱⲧ = my father - the son\'s decision to return home'
        },
        {
          id: 'ex-28-3-8',
          type: 'translation',
          question: 'Translate: ⲁⲓⲉⲣⲛⲟⲃⲓ ⲉⲧ̀ⲫⲉ ⲛⲉⲙ ⲙⲡⲉⲕⲙⲑⲟ',
          questionCoptic: 'ⲁⲓⲉⲣⲛⲟⲃⲓ ⲉⲧ̀ⲫⲉ ⲛⲉⲙ ⲙⲡⲉⲕⲙⲑⲟ',
          correctAnswer: 'I have sinned against heaven and before you',
          options: ['I have sinned against heaven and before you', 'I sinned to heaven and you', 'My sin is against God and you', 'I wronged heaven and your presence'],
          explanation: 'ⲁⲓⲉⲣⲛⲟⲃⲓ = I sinned + ⲉⲧ̀ⲫⲉ = against heaven + ⲛⲉⲙ ⲙⲡⲉⲕⲙⲑⲟ = and before you (the son\'s confession)'
        }
      ]
    },
    {
      id: 'lesson-28-4',
      unitId: 'unit-28',
      title: 'The Resurrection - John 20',
      description: 'Mary Magdalene at the tomb',
      order: 4,
      xpReward: 50,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-28-4-1',
          type: 'translation',
          question: 'Translate: ϧⲉⲛ ⲡⲓⲉϩⲟⲟⲩ ⲛ̀ⲧⲉⲛⲓⲥⲁⲃⲃⲁⲧⲟⲛ',
          questionCoptic: 'ϧⲉⲛ ⲡⲓⲉϩⲟⲟⲩ ⲛ̀ⲧⲉⲛⲓⲥⲁⲃⲃⲁⲧⲟⲛ',
          correctAnswer: 'On the first day of the week',
          options: ['On the first day of the week', 'On the sabbath day', 'In the morning of sabbaths', 'On Sunday'],
          explanation: 'ϧⲉⲛ ⲡⲓⲉϩⲟⲟⲩ ⲛ̀ⲧⲉⲛⲓⲥⲁⲃⲃⲁⲧⲟⲛ = on the day of the sabbaths (literal) = first day of week (Sunday)'
        },
        {
          id: 'ex-28-4-2',
          type: 'multiple_choice',
          question: 'What is ⲙ̀ⲫⲣⲏϯ ⲛ̀ϣⲟⲣⲡ?',
          correctAnswer: 'early (in the morning)',
          options: ['early (in the morning)', 'first time', 'like before', 'at dawn'],
          explanation: 'ⲙ̀ⲫⲣⲏϯ ⲛ̀ϣⲟⲣⲡ (em-vree-ti en-shorp) = like the first (time) = early'
        },
        {
          id: 'ex-28-4-3',
          type: 'matching',
          question: 'Match resurrection vocabulary',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲙϩⲁⲩ', english: 'tomb' },
            { coptic: 'ⲱⲛⲓ', english: 'stone' },
            { coptic: 'ⲧⲱⲛϥ', english: 'to arise/raise' },
            { coptic: 'ⲁⲛⲁⲥⲧⲁⲥⲓⲥ', english: 'resurrection' }
          ]
        },
        {
          id: 'ex-28-4-4',
          type: 'translation',
          question: 'Translate: ⲁⲥⲛⲁⲩ ⲉⲡⲓⲱⲛⲓ ⲉⲁⲩⲉⲛϥ ⲉⲃⲟⲗ ϩⲁ ⲡⲓⲙϩⲁⲩ',
          questionCoptic: 'ⲁⲥⲛⲁⲩ ⲉⲡⲓⲱⲛⲓ ⲉⲁⲩⲉⲛϥ ⲉⲃⲟⲗ ϩⲁ ⲡⲓⲙϩⲁⲩ',
          correctAnswer: 'She saw the stone rolled away from the tomb',
          options: ['She saw the stone rolled away from the tomb', 'She looked at the removed stone', 'The stone was taken from the tomb', 'She found the stone moved'],
          explanation: 'ⲁⲥⲛⲁⲩ = she saw + ⲉⲡⲓⲱⲛⲓ = the stone + ⲉⲁⲩⲉⲛϥ ⲉⲃⲟⲗ = rolled away + ϩⲁ ⲡⲓⲙϩⲁⲩ = from the tomb'
        },
        {
          id: 'ex-28-4-5',
          type: 'sentence_building',
          question: 'Build: "They have taken the Lord"',
          correctAnswer: 'ⲁⲩⲱⲗⲓ ⲙⲡϭⲟⲓⲥ',
          wordBank: ['ⲁⲩ', 'ⲱⲗⲓ', 'ⲙ', 'ⲡϭⲟⲓⲥ'],
          explanation: 'ⲁⲩⲱⲗⲓ ⲙⲡϭⲟⲓⲥ = they took the Lord (Mary\'s initial assumption)'
        },
        {
          id: 'ex-28-4-6',
          type: 'multiple_choice',
          question: 'Who did Mary initially think Jesus was?',
          correctAnswer: 'The gardener',
          options: ['The gardener', 'A disciple', 'An angel', 'A stranger'],
          explanation: 'Mary thought Jesus was ⲡⲓⲟⲩⲏⲣϣⲏⲣⲓ (the gardener) before he revealed himself'
        },
        {
          id: 'ex-28-4-7',
          type: 'fill_blank',
          question: 'Complete: ⲁϥⲙⲟⲩϯ ⲉⲣⲟⲥ ϫⲉ ___ = He called her "Mary"',
          correctAnswer: 'ⲙⲁⲣⲓⲁⲙ',
          options: ['ⲙⲁⲣⲓⲁⲙ', 'ⲙⲁⲣⲑⲁ', 'ⲥϩⲓⲙⲓ', 'ⲡⲉⲛϭⲟⲓⲥ'],
          explanation: 'ⲙⲁⲣⲓⲁⲙ (Mariam) = Mary - when Jesus spoke her name, she recognized him'
        },
        {
          id: 'ex-28-4-8',
          type: 'translation',
          question: 'Translate: ⲙ̀ⲡⲉⲣϫⲱϩ ⲉⲣⲟⲓ ⲙ̀ⲡⲁⲧⲓϣⲉⲛⲏⲧ ϣⲁ ⲡⲁⲓⲱⲧ',
          questionCoptic: 'ⲙ̀ⲡⲉⲣϫⲱϩ ⲉⲣⲟⲓ ⲙ̀ⲡⲁⲧⲓϣⲉⲛⲏⲧ ϣⲁ ⲡⲁⲓⲱⲧ',
          correctAnswer: 'Do not touch me, for I have not yet ascended to my Father',
          options: ['Do not touch me, for I have not yet ascended to my Father', 'Don\'t hold me, I haven\'t gone to Father', 'Do not cling to me before ascending', 'Touch me not until I ascend'],
          explanation: 'ⲙ̀ⲡⲉⲣϫⲱϩ ⲉⲣⲟⲓ = do not touch me + ⲙ̀ⲡⲁⲧⲓϣⲉⲛⲏⲧ = I have not yet gone up + ϣⲁ ⲡⲁⲓⲱⲧ = to my Father (Bohairic ϣⲉⲛⲓ not ⲃⲱⲕ!)'
        }
      ]
    },
    // BEATITUDES LESSONS (from archived units 17-19)
    {
      id: 'lesson-28-5',
      unitId: 'unit-28',
      title: 'Matthew 5:4 - Blessed are Those Who Mourn',
      description: 'The second beatitude - comfort for mourners',
      order: 5,
      xpReward: 35,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-28-5-1',
          type: 'translation',
          question: 'Translate: ⲱⲟⲩⲛⲓⲁⲧⲟⲩ ⲛ̀ⲛⲏⲉⲑⲣⲓⲙⲓ',
          questionCoptic: 'ⲱⲟⲩⲛⲓⲁⲧⲟⲩ ⲛ̀ⲛⲏⲉⲑⲣⲓⲙⲓ',
          correctAnswer: 'Blessed are those who mourn',
          options: ['Blessed are those who mourn', 'Happy are the mourners', 'Blessed are the crying', 'Those who weep are blessed'],
          explanation: 'ⲱⲟⲩⲛⲓⲁⲧⲟⲩ = blessed are + ⲛ̀ⲛⲏⲉⲑⲣⲓⲙⲓ = those who mourn/weep'
        },
        {
          id: 'ex-28-5-2',
          type: 'multiple_choice',
          question: 'What does ⲣⲓⲙⲓ mean?',
          questionCoptic: 'ⲣⲓⲙⲓ',
          correctAnswer: 'to weep/mourn',
          options: ['to weep/mourn', 'to laugh', 'to speak', 'to pray'],
          explanation: 'ⲣⲓⲙⲓ (rimi) means "to weep" or "to mourn"'
        },
        {
          id: 'ex-28-5-3',
          type: 'matching',
          question: 'Match mourning vocabulary',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲣⲓⲙⲓ', english: 'to weep/mourn' },
            { coptic: 'ⲛⲏⲉⲑⲣⲓⲙⲓ', english: 'those who mourn' },
            { coptic: 'ⲛⲟⲙϯ', english: 'to comfort' },
            { coptic: 'ⲉⲩⲉⲛⲟⲙϯ ⲙⲙⲱⲟⲩ', english: 'they will be comforted' }
          ]
        },
        {
          id: 'ex-28-5-4',
          type: 'translation',
          question: 'Translate: ϫⲉ ⲛ̀ⲑⲱⲟⲩ ⲉⲩⲉⲛⲟⲙϯ ⲙⲙⲱⲟⲩ',
          questionCoptic: 'ϫⲉ ⲛ̀ⲑⲱⲟⲩ ⲉⲩⲉⲛⲟⲙϯ ⲙⲙⲱⲟⲩ',
          correctAnswer: 'For they shall be comforted',
          options: ['For they shall be comforted', 'Because they comfort', 'They will comfort', 'Comfort them'],
          explanation: 'ϫⲉ = for + ⲛ̀ⲑⲱⲟⲩ = they (emphatic) + ⲉⲩⲉⲛⲟⲙϯ ⲙⲙⲱⲟⲩ = they shall be comforted'
        },
        {
          id: 'ex-28-5-5',
          type: 'sentence_building',
          question: 'Build: "Blessed are those who mourn"',
          correctAnswer: 'ⲱⲟⲩⲛⲓⲁⲧⲟⲩ ⲛ̀ⲛⲏⲉⲑⲣⲓⲙⲓ',
          wordBank: ['ⲱⲟⲩⲛⲓⲁⲧⲟⲩ', 'ⲛ̀', 'ⲛⲏⲉⲑⲣⲓⲙⲓ', 'ⲉⲑⲛⲁϩϯ'],
          explanation: 'ⲱⲟⲩⲛⲓⲁⲧⲟⲩ ⲛ̀ⲛⲏⲉⲑⲣⲓⲙⲓ = blessed are + those who mourn'
        },
        {
          id: 'ex-28-5-6',
          type: 'fill_blank',
          question: 'Complete: ⲱⲟⲩⲛⲓⲁⲧⲟⲩ ⲛ̀ⲛⲏⲉⲑ___ = Blessed are those who mourn',
          correctAnswer: 'ⲣⲓⲙⲓ',
          options: ['ⲣⲓⲙⲓ', 'ⲥⲱⲃⲓ', 'ⲣⲁϣⲓ', 'ⲙⲟϣⲓ'],
          explanation: 'ⲣⲓⲙⲓ (to weep/mourn) completes the phrase'
        },
        {
          id: 'ex-28-5-7',
          type: 'multiple_choice',
          question: 'What is "to comfort" in Coptic?',
          correctAnswer: 'ⲛⲟⲙϯ',
          options: ['ⲛⲟⲙϯ', 'ⲣⲓⲙⲓ', 'ⲙⲉⲛⲣⲉ', 'ⲥⲙⲟⲩ'],
          explanation: 'ⲛⲟⲙϯ (nomti) means "to comfort" or "to console"'
        },
        {
          id: 'ex-28-5-8',
          type: 'matching',
          question: 'Match comfort and mourning terms',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲛⲟⲙϯ', english: 'comfort (verb)' },
            { coptic: 'ⲡⲓⲛⲟⲙϯ', english: 'the comfort (noun)' },
            { coptic: 'ⲡⲓⲣⲉϥⲛⲟⲙϯ', english: 'the comforter' },
            { coptic: 'ϯⲡⲁⲣⲁⲕⲗⲏⲥⲓⲥ', english: 'the consolation' }
          ]
        }
      ]
    },
    {
      id: 'lesson-28-6',
      unitId: 'unit-28',
      title: 'Matthew 5:5 - Blessed are the Meek',
      description: 'The third beatitude - inheritance of the earth',
      order: 6,
      xpReward: 35,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-28-6-1',
          type: 'translation',
          question: 'Translate: ⲱⲟⲩⲛⲓⲁⲧⲟⲩ ⲛ̀ⲛⲓⲣⲉⲙⲣⲁⲩϣ',
          questionCoptic: 'ⲱⲟⲩⲛⲓⲁⲧⲟⲩ ⲛ̀ⲛⲓⲣⲉⲙⲣⲁⲩϣ',
          correctAnswer: 'Blessed are the meek',
          options: ['Blessed are the meek', 'Happy are the gentle', 'Blessed are the humble', 'The meek are happy'],
          explanation: 'ⲱⲟⲩⲛⲓⲁⲧⲟⲩ = blessed are + ⲛ̀ⲛⲓⲣⲉⲙⲣⲁⲩϣ = the meek/gentle ones'
        },
        {
          id: 'ex-28-6-2',
          type: 'multiple_choice',
          question: 'What does ⲣⲉⲙⲣⲁⲩϣ mean?',
          questionCoptic: 'ⲣⲉⲙⲣⲁⲩϣ',
          correctAnswer: 'meek/gentle',
          options: ['meek/gentle', 'strong', 'proud', 'angry'],
          explanation: 'ⲣⲉⲙⲣⲁⲩϣ (remraush) means "meek" or "gentle" person'
        },
        {
          id: 'ex-28-6-3',
          type: 'matching',
          question: 'Match meekness vocabulary',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲣⲉⲙⲣⲁⲩϣ', english: 'meek/gentle' },
            { coptic: 'ⲙⲉⲧⲣⲉⲙⲣⲁⲩϣ', english: 'meekness' },
            { coptic: 'ⲑⲉⲃⲓⲟ', english: 'humble' },
            { coptic: 'ⲙⲉⲧⲑⲉⲃⲓⲟ', english: 'humility' }
          ]
        },
        {
          id: 'ex-28-6-4',
          type: 'translation',
          question: 'Translate: ϫⲉ ⲛ̀ⲑⲱⲟⲩ ⲉⲩⲉⲉⲣⲕⲗⲏⲣⲟⲛⲟⲙⲓⲛ ⲙ̀ⲡⲓⲕⲁϩⲓ',
          questionCoptic: 'ϫⲉ ⲛ̀ⲑⲱⲟⲩ ⲉⲩⲉⲉⲣⲕⲗⲏⲣⲟⲛⲟⲙⲓⲛ ⲙ̀ⲡⲓⲕⲁϩⲓ',
          correctAnswer: 'For they shall inherit the earth',
          options: ['For they shall inherit the earth', 'They inherit the land', 'Because they will have earth', 'The earth is theirs'],
          explanation: 'ϫⲉ = for + ⲛ̀ⲑⲱⲟⲩ = they + ⲉⲩⲉⲉⲣⲕⲗⲏⲣⲟⲛⲟⲙⲓⲛ = will inherit + ⲙ̀ⲡⲓⲕⲁϩⲓ = the earth'
        },
        {
          id: 'ex-28-6-5',
          type: 'multiple_choice',
          question: 'What is "to inherit" in Coptic?',
          correctAnswer: 'ⲉⲣⲕⲗⲏⲣⲟⲛⲟⲙⲓⲛ',
          options: ['ⲉⲣⲕⲗⲏⲣⲟⲛⲟⲙⲓⲛ', 'ⲉⲣⲟⲩⲣⲟ', 'ⲉⲣⲙⲉⲧⲟⲩⲣⲟ', 'ⲉⲣⲣⲟ'],
          explanation: 'ⲉⲣⲕⲗⲏⲣⲟⲛⲟⲙⲓⲛ (erkleronomin) means "to inherit" (from Greek)'
        },
        {
          id: 'ex-28-6-6',
          type: 'sentence_building',
          question: 'Build: "They will inherit the earth"',
          correctAnswer: 'ⲉⲩⲉⲉⲣⲕⲗⲏⲣⲟⲛⲟⲙⲓⲛ ⲙ̀ⲡⲓⲕⲁϩⲓ',
          wordBank: ['ⲉⲩⲉ', 'ⲉⲣⲕⲗⲏⲣⲟⲛⲟⲙⲓⲛ', 'ⲙ̀', 'ⲡⲓⲕⲁϩⲓ'],
          explanation: 'ⲉⲩⲉⲉⲣⲕⲗⲏⲣⲟⲛⲟⲙⲓⲛ ⲙ̀ⲡⲓⲕⲁϩⲓ = they will inherit the earth'
        },
        {
          id: 'ex-28-6-7',
          type: 'fill_blank',
          question: 'Complete: ⲱⲟⲩⲛⲓⲁⲧⲟⲩ ⲛ̀ⲛⲓ___ = Blessed are the meek',
          correctAnswer: 'ⲣⲉⲙⲣⲁⲩϣ',
          options: ['ⲣⲉⲙⲣⲁⲩϣ', 'ϩⲏⲕⲓ', 'ⲑⲉⲃⲓⲟ', 'ⲣⲱⲙⲓ'],
          explanation: 'ⲣⲉⲙⲣⲁⲩϣ (meek ones) completes the phrase'
        },
        {
          id: 'ex-28-6-8',
          type: 'matching',
          question: 'Match inheritance vocabulary',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲕⲗⲏⲣⲟⲛⲟⲙⲓⲁ', english: 'inheritance' },
            { coptic: 'ⲕⲗⲏⲣⲟⲛⲟⲙⲟⲥ', english: 'heir' },
            { coptic: 'ⲉⲣⲕⲗⲏⲣⲟⲛⲟⲙⲓⲛ', english: 'to inherit' },
            { coptic: 'ⲡⲓⲕⲁϩⲓ', english: 'the earth/land' }
          ]
        }
      ]
    },
    {
      id: 'lesson-28-7',
      unitId: 'unit-28',
      title: 'Glory Be (Doxology)',
      description: 'Traditional doxology prayer',
      order: 7,
      xpReward: 35,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-28-7-1',
          type: 'translation',
          question: 'Translate: ⲡⲓⲱⲟⲩ ⲙⲫⲓⲱⲧ',
          questionCoptic: 'ⲡⲓⲱⲟⲩ ⲙⲫⲓⲱⲧ',
          correctAnswer: 'Glory to the Father',
          options: ['Glory to the Father', 'The Father is glorious', 'Glory of Father', 'The glorious Father'],
          explanation: 'ⲡⲓⲱⲟⲩ = the glory + ⲙⲫⲓⲱⲧ = to the Father'
        },
        {
          id: 'ex-28-7-2',
          type: 'sentence_building',
          question: 'Build: "Glory to the Father and to the Son"',
          correctAnswer: 'ⲡⲓⲱⲟⲩ ⲙⲫⲓⲱⲧ ⲛⲉⲙ ⲡⲓϣⲏⲣⲓ',
          wordBank: ['ⲡⲓⲱⲟⲩ', 'ⲙⲫⲓⲱⲧ', 'ⲛⲉⲙ', 'ⲡⲓϣⲏⲣⲓ'],
          explanation: 'ⲡⲓⲱⲟⲩ ⲙⲫⲓⲱⲧ ⲛⲉⲙ ⲡⲓϣⲏⲣⲓ = Glory to Father and Son (Bohairic ϣⲏⲣⲓ not ⲥⲏⲣⲓ!)'
        },
        {
          id: 'ex-28-7-3',
          type: 'translation',
          question: 'Translate: ⲛⲉⲙ ⲡⲓⲡ̀ⲛⲉⲩⲙⲁ ⲉⲑⲟⲩⲁⲃ',
          questionCoptic: 'ⲛⲉⲙ ⲡⲓⲡ̀ⲛⲉⲩⲙⲁ ⲉⲑⲟⲩⲁⲃ',
          correctAnswer: 'And to the Holy Spirit',
          options: ['And to the Holy Spirit', 'With the Holy Spirit', 'The Holy Spirit', 'And the Spirit is holy'],
          explanation: 'ⲛⲉⲙ = and/to + ⲡⲓⲡ̀ⲛⲉⲩⲙⲁ ⲉⲑⲟⲩⲁⲃ = the Holy Spirit'
        },
        {
          id: 'ex-28-7-4',
          type: 'multiple_choice',
          question: 'What does ⲓⲥϫⲉⲛ ϯⲛⲟⲩ mean?',
          questionCoptic: 'ⲓⲥϫⲉⲛ ϯⲛⲟⲩ',
          correctAnswer: 'from now/as it was',
          options: ['from now/as it was', 'until now', 'right now', 'from the beginning'],
          explanation: 'ⲓⲥϫⲉⲛ ϯⲛⲟⲩ = from now/as it was (in the beginning)'
        },
        {
          id: 'ex-28-7-5',
          type: 'matching',
          question: 'Match Trinity vocabulary',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲫⲓⲱⲧ', english: 'the Father' },
            { coptic: 'ⲡⲓϣⲏⲣⲓ', english: 'the Son' },
            { coptic: 'ⲡⲓⲡ̀ⲛⲉⲩⲙⲁ', english: 'the Spirit' },
            { coptic: 'ϯⲧⲣⲓⲁⲥ', english: 'the Trinity' }
          ]
        },
        {
          id: 'ex-28-7-6',
          type: 'fill_blank',
          question: 'Complete: ⲡⲓⲱⲟⲩ ⲙⲫⲓⲱⲧ ⲛⲉⲙ ___ = Glory to Father and Son',
          correctAnswer: 'ⲡⲓϣⲏⲣⲓ',
          options: ['ⲡⲓϣⲏⲣⲓ', 'ⲡⲓⲡ̀ⲛⲉⲩⲙⲁ', 'ⲡⲓⲣⲱⲙⲓ', 'ⲡⲓⲁⲗⲟⲩ'],
          explanation: 'ⲡⲓϣⲏⲣⲓ (the Son) completes the Trinitarian formula (Bohairic ϣⲏⲣⲓ not ⲥⲏⲣⲓ!)'
        },
        {
          id: 'ex-28-7-7',
          type: 'sentence_building',
          question: 'Build: "Now and always"',
          correctAnswer: 'ϯⲛⲟⲩ ⲛⲉⲙ ⲛ̀ⲥⲏⲟⲩ ⲛⲓⲃⲉⲛ',
          wordBank: ['ϯⲛⲟⲩ', 'ⲛⲉⲙ', 'ⲛ̀ⲥⲏⲟⲩ', 'ⲛⲓⲃⲉⲛ'],
          explanation: 'ϯⲛⲟⲩ ⲛⲉⲙ ⲛ̀ⲥⲏⲟⲩ ⲛⲓⲃⲉⲛ = now and all times (always)'
        },
        {
          id: 'ex-28-7-8',
          type: 'matching',
          question: 'Match time expressions',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ϯⲛⲟⲩ', english: 'now' },
            { coptic: 'ⲛ̀ⲥⲏⲟⲩ ⲛⲓⲃⲉⲛ', english: 'all times' },
            { coptic: 'ϣⲁ ⲉⲛⲉϩ', english: 'forever' },
            { coptic: 'ⲁⲙⲏⲛ', english: 'amen' }
          ]
        }
      ]
    },
    {
      id: 'lesson-28-8',
      unitId: 'unit-28',
      title: 'Matthew 5:6 - Hunger and Thirst for Righteousness',
      description: 'The fourth beatitude',
      order: 8,
      xpReward: 40,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-28-8-1',
          type: 'translation',
          question: 'Translate: ⲱⲟⲩⲛⲓⲁⲧⲟⲩ ⲛ̀ⲛⲏⲉⲑⲟϭⲛⲓ',
          questionCoptic: 'ⲱⲟⲩⲛⲓⲁⲧⲟⲩ ⲛ̀ⲛⲏⲉⲑⲟϭⲛⲓ',
          correctAnswer: 'Blessed are those who hunger',
          options: ['Blessed are those who hunger', 'Happy are the hungry', 'Blessed hungry ones', 'The hungry are blessed'],
          explanation: 'ⲱⲟⲩⲛⲓⲁⲧⲟⲩ = blessed are + ⲛ̀ⲛⲏⲉⲑⲟϭⲛⲓ = those who hunger'
        },
        {
          id: 'ex-28-8-2',
          type: 'multiple_choice',
          question: 'What does ⲟϭⲛⲓ mean?',
          questionCoptic: 'ⲟϭⲛⲓ',
          correctAnswer: 'to hunger',
          options: ['to hunger', 'to thirst', 'to eat', 'to want'],
          explanation: 'ⲟϭⲛⲓ (ojni) means "to hunger" or "to be hungry"'
        },
        {
          id: 'ex-28-8-3',
          type: 'matching',
          question: 'Match hunger and thirst vocabulary',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲟϭⲛⲓ', english: 'to hunger' },
            { coptic: 'ⲓⲃⲓ', english: 'to thirst' },
            { coptic: 'ⲟⲩⲱⲙ', english: 'to eat' },
            { coptic: 'ⲥⲱ', english: 'to drink' }
          ]
        },
        {
          id: 'ex-28-8-4',
          type: 'translation',
          question: 'Translate: ⲟⲩⲟϩ ⲉⲑⲓⲃⲓ ⲉⲑⲃⲉ ϯⲙⲉⲑⲙⲏⲓ',
          questionCoptic: 'ⲟⲩⲟϩ ⲉⲑⲓⲃⲓ ⲉⲑⲃⲉ ϯⲙⲉⲑⲙⲏⲓ',
          correctAnswer: 'And thirst for righteousness',
          options: ['And thirst for righteousness', 'And thirsting for justice', 'Thirst for truth', 'And the righteous thirst'],
          explanation: 'ⲟⲩⲟϩ = and + ⲉⲑⲓⲃⲓ = who thirst + ⲉⲑⲃⲉ = for + ϯⲙⲉⲑⲙⲏⲓ = righteousness'
        },
        {
          id: 'ex-28-8-5',
          type: 'multiple_choice',
          question: 'What is "righteousness" in Coptic?',
          correctAnswer: 'ⲙⲉⲑⲙⲏⲓ',
          options: ['ⲙⲉⲑⲙⲏⲓ', 'ⲙⲉⲑⲙⲉⲛⲣⲉ', 'ⲙⲉⲧⲟⲩⲣⲟ', 'ⲙⲉⲧⲣⲉⲙⲣⲁⲩϣ'],
          explanation: 'ⲙⲉⲑⲙⲏⲓ (methmēi) means "righteousness" or "justice"'
        },
        {
          id: 'ex-28-8-6',
          type: 'sentence_building',
          question: 'Build: "They shall be filled"',
          correctAnswer: 'ⲉⲩⲉⲥⲓ ⲙⲙⲱⲟⲩ',
          wordBank: ['ⲉⲩⲉ', 'ⲥⲓ', 'ⲙⲙⲱⲟⲩ', 'ⲉⲣⲱⲟⲩ'],
          explanation: 'ⲉⲩⲉⲥⲓ ⲙⲙⲱⲟⲩ = they will be filled/satisfied'
        },
        {
          id: 'ex-28-8-7',
          type: 'fill_blank',
          question: 'Complete: ⲱⲟⲩⲛⲓⲁⲧⲟⲩ ⲛ̀ⲛⲏⲉⲑⲟϭⲛⲓ ⲉⲑⲃⲉ ___ = Blessed are those who hunger for righteousness',
          correctAnswer: 'ϯⲙⲉⲑⲙⲏⲓ',
          options: ['ϯⲙⲉⲑⲙⲏⲓ', 'ⲡⲓⲱⲓⲕ', 'ⲡⲓⲙⲱⲓⲧ', 'ϯⲙⲉⲧⲟⲩⲣⲟ'],
          explanation: 'ϯⲙⲉⲑⲙⲏⲓ (righteousness) completes the phrase'
        },
        {
          id: 'ex-28-8-8',
          type: 'matching',
          question: 'Match satisfaction vocabulary',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲥⲓ', english: 'to be satisfied/filled' },
            { coptic: 'ⲧⲥⲓⲟ', english: 'satisfaction' },
            { coptic: 'ⲉⲩⲉⲥⲓ', english: 'they will be satisfied' },
            { coptic: 'ⲡⲓⲙⲁϩ', english: 'fullness' }
          ]
        }
      ]
    },
    {
      id: 'lesson-28-9',
      unitId: 'unit-28',
      title: 'Matthew 5:7 - Blessed are the Merciful',
      description: 'The fifth beatitude',
      order: 9,
      xpReward: 40,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-28-9-1',
          type: 'translation',
          question: 'Translate: ⲱⲟⲩⲛⲓⲁⲧⲟⲩ ⲛ̀ⲛⲁⲏⲧ',
          questionCoptic: 'ⲱⲟⲩⲛⲓⲁⲧⲟⲩ ⲛ̀ⲛⲁⲏⲧ',
          correctAnswer: 'Blessed are the merciful',
          options: ['Blessed are the merciful', 'Happy are the kind', 'Blessed merciful ones', 'The merciful are blessed'],
          explanation: 'ⲱⲟⲩⲛⲓⲁⲧⲟⲩ = blessed are + ⲛ̀ⲛⲁⲏⲧ = the merciful (those with mercy)'
        },
        {
          id: 'ex-28-9-2',
          type: 'multiple_choice',
          question: 'What does ⲛⲁⲓ mean?',
          questionCoptic: 'ⲛⲁⲓ',
          correctAnswer: 'mercy/compassion',
          options: ['mercy/compassion', 'love', 'peace', 'justice'],
          explanation: 'ⲛⲁⲓ (nai) means "mercy" or "compassion" - ⲛⲁⲏⲧ = merciful one'
        },
        {
          id: 'ex-28-9-3',
          type: 'matching',
          question: 'Match mercy vocabulary',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲛⲁⲓ', english: 'mercy' },
            { coptic: 'ⲛⲁⲏⲧ', english: 'merciful' },
            { coptic: 'ⲙⲉⲧⲛⲁⲏⲧ', english: 'mercifulness' },
            { coptic: 'ϣⲉⲛⲛⲁⲓ', english: 'to have mercy' }
          ]
        },
        {
          id: 'ex-28-9-4',
          type: 'translation',
          question: 'Translate: ϫⲉ ⲛ̀ⲑⲱⲟⲩ ⲉⲩⲉⲛⲁⲓ ⲛⲱⲟⲩ',
          questionCoptic: 'ϫⲉ ⲛ̀ⲑⲱⲟⲩ ⲉⲩⲉⲛⲁⲓ ⲛⲱⲟⲩ',
          correctAnswer: 'For they shall obtain mercy',
          options: ['For they shall obtain mercy', 'Because mercy is theirs', 'They will have mercy', 'Mercy will be shown'],
          explanation: 'ϫⲉ = for + ⲛ̀ⲑⲱⲟⲩ = they + ⲉⲩⲉⲛⲁⲓ ⲛⲱⲟⲩ = they will obtain mercy'
        },
        {
          id: 'ex-28-9-5',
          type: 'sentence_building',
          question: 'Build: "Blessed are the merciful"',
          correctAnswer: 'ⲱⲟⲩⲛⲓⲁⲧⲟⲩ ⲛ̀ⲛⲁⲏⲧ',
          wordBank: ['ⲱⲟⲩⲛⲓⲁⲧⲟⲩ', 'ⲛ̀', 'ⲛⲁⲏⲧ', 'ⲛⲓⲣⲉⲙⲣⲁⲩϣ'],
          explanation: 'ⲱⲟⲩⲛⲓⲁⲧⲟⲩ ⲛ̀ⲛⲁⲏⲧ = blessed are the merciful'
        },
        {
          id: 'ex-28-9-6',
          type: 'fill_blank',
          question: 'Complete: ϫⲉ ⲛ̀ⲑⲱⲟⲩ ⲉⲩⲉ___ ⲛⲱⲟⲩ = For they shall obtain mercy',
          correctAnswer: 'ⲛⲁⲓ',
          options: ['ⲛⲁⲓ', 'ⲙⲉⲛⲣⲉ', 'ⲛⲟⲙϯ', 'ⲥⲙⲟⲩ'],
          explanation: 'ⲛⲁⲓ (mercy) - ⲉⲩⲉⲛⲁⲓ ⲛⲱⲟⲩ = they will obtain mercy'
        },
        {
          id: 'ex-28-9-7',
          type: 'multiple_choice',
          question: 'How do you say "to show mercy"?',
          correctAnswer: 'ϣⲉⲛⲛⲁⲓ',
          options: ['ϣⲉⲛⲛⲁⲓ', 'ⲙⲉⲛⲣⲉ', 'ⲛⲟⲙϯ', 'ⲥⲙⲟⲩ'],
          explanation: 'ϣⲉⲛⲛⲁⲓ (shen-nai) means "to show mercy" or "to have mercy"'
        },
        {
          id: 'ex-28-9-8',
          type: 'matching',
          question: 'Match compassion terms',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲛⲁⲓ', english: 'mercy' },
            { coptic: 'ϣⲉⲛϩⲏⲧ', english: 'compassion' },
            { coptic: 'ⲙⲉⲧϣⲉⲛϩⲏⲧ', english: 'kindness' },
            { coptic: 'ⲁⲅⲁⲡⲏ', english: 'love (divine)' }
          ]
        }
      ]
    },
    {
      id: 'lesson-28-10',
      unitId: 'unit-28',
      title: 'Matthew 5:8 - Blessed are the Pure in Heart',
      description: 'The sixth beatitude',
      order: 10,
      xpReward: 40,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-28-10-1',
          type: 'translation',
          question: 'Translate: ⲱⲟⲩⲛⲓⲁⲧⲟⲩ ⲛ̀ⲛⲏⲉⲧⲟⲩⲃⲱⲧ ϧⲉⲛ ⲡⲟⲩϩⲏⲧ',
          questionCoptic: 'ⲱⲟⲩⲛⲓⲁⲧⲟⲩ ⲛ̀ⲛⲏⲉⲧⲟⲩⲃⲱⲧ ϧⲉⲛ ⲡⲟⲩϩⲏⲧ',
          correctAnswer: 'Blessed are the pure in heart',
          options: ['Blessed are the pure in heart', 'Happy are pure hearts', 'Blessed pure-hearted ones', 'The pure of heart are blessed'],
          explanation: 'ⲱⲟⲩⲛⲓⲁⲧⲟⲩ = blessed are + ⲛ̀ⲛⲏⲉⲧⲟⲩⲃⲱⲧ = the pure ones + ϧⲉⲛ ⲡⲟⲩϩⲏⲧ = in their heart'
        },
        {
          id: 'ex-28-10-2',
          type: 'multiple_choice',
          question: 'What does ⲟⲩⲃⲱⲧ mean?',
          questionCoptic: 'ⲟⲩⲃⲱⲧ',
          correctAnswer: 'pure/clean',
          options: ['pure/clean', 'holy', 'righteous', 'good'],
          explanation: 'ⲟⲩⲃⲱⲧ (oubot) means "pure" or "clean"'
        },
        {
          id: 'ex-28-10-3',
          type: 'matching',
          question: 'Match purity vocabulary',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲟⲩⲃⲱⲧ', english: 'pure/clean' },
            { coptic: 'ⲙⲉⲧⲟⲩⲃⲱⲧ', english: 'purity' },
            { coptic: 'ⲧⲟⲩⲃⲟ', english: 'holy' },
            { coptic: 'ⲁⲑⲛⲟⲃⲓ', english: 'sinless' }
          ]
        },
        {
          id: 'ex-28-10-4',
          type: 'translation',
          question: 'Translate: ϫⲉ ⲛ̀ⲑⲱⲟⲩ ⲉⲩⲉⲛⲁⲩ ⲉⲫϯ',
          questionCoptic: 'ϫⲉ ⲛ̀ⲑⲱⲟⲩ ⲉⲩⲉⲛⲁⲩ ⲉⲫϯ',
          correctAnswer: 'For they shall see God',
          options: ['For they shall see God', 'Because they see God', 'They will see the Lord', 'God will appear to them'],
          explanation: 'ϫⲉ = for + ⲛ̀ⲑⲱⲟⲩ = they + ⲉⲩⲉⲛⲁⲩ = will see + ⲉⲫϯ = God (Bohairic ⲫϯ not ⲫⲛⲟⲩϯ!)'
        },
        {
          id: 'ex-28-10-5',
          type: 'multiple_choice',
          question: 'What is "heart" in Coptic?',
          correctAnswer: 'ϩⲏⲧ',
          options: ['ϩⲏⲧ', 'ϩⲏⲧⲥ', 'ⲯⲩⲭⲏ', 'ⲡ̀ⲛⲉⲩⲙⲁ'],
          explanation: 'ϩⲏⲧ (hēt) means "heart" - with possessive: ⲡⲟⲩϩⲏⲧ = their heart'
        },
        {
          id: 'ex-28-10-6',
          type: 'sentence_building',
          question: 'Build: "They will see God"',
          correctAnswer: 'ⲉⲩⲉⲛⲁⲩ ⲉⲫϯ',
          wordBank: ['ⲉⲩⲉ', 'ⲛⲁⲩ', 'ⲉ', 'ⲫϯ'],
          explanation: 'ⲉⲩⲉⲛⲁⲩ ⲉⲫϯ = they will see God (Bohairic ⲫϯ not ⲫⲛⲟⲩϯ!)'
        },
        {
          id: 'ex-28-10-7',
          type: 'fill_blank',
          question: 'Complete: ⲱⲟⲩⲛⲓⲁⲧⲟⲩ ⲛ̀ⲛⲏⲉⲧ___ ϧⲉⲛ ⲡⲟⲩϩⲏⲧ = Blessed are the pure in heart',
          correctAnswer: 'ⲟⲩⲃⲱⲧ',
          options: ['ⲟⲩⲃⲱⲧ', 'ⲧⲟⲩⲃⲟ', 'ⲛⲁⲏⲧ', 'ⲟⲩⲃⲁϣ'],
          explanation: 'ⲟⲩⲃⲱⲧ (pure) completes the phrase'
        },
        {
          id: 'ex-28-10-8',
          type: 'matching',
          question: 'Match vision and purity terms',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲛⲁⲩ', english: 'to see' },
            { coptic: 'ϩⲟⲣⲁⲥⲓⲥ', english: 'vision' },
            { coptic: 'ⲟⲩⲃⲱⲧ', english: 'pure' },
            { coptic: 'ⲧⲃⲟ', english: 'to purify' }
          ]
        }
      ]
    },
    {
      id: 'lesson-28-11',
      unitId: 'unit-28',
      title: 'Matthew 5:9 - Blessed are the Peacemakers',
      description: 'The seventh beatitude',
      order: 11,
      xpReward: 45,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-28-11-1',
          type: 'translation',
          question: 'Translate: ⲱⲟⲩⲛⲓⲁⲧⲟⲩ ⲛ̀ⲛⲓⲣⲉϥⲉⲣϩⲓⲣⲏⲛⲏ',
          questionCoptic: 'ⲱⲟⲩⲛⲓⲁⲧⲟⲩ ⲛ̀ⲛⲓⲣⲉϥⲉⲣϩⲓⲣⲏⲛⲏ',
          correctAnswer: 'Blessed are the peacemakers',
          options: ['Blessed are the peacemakers', 'Happy are those who make peace', 'Blessed peaceful ones', 'The peaceful are blessed'],
          explanation: 'ⲱⲟⲩⲛⲓⲁⲧⲟⲩ = blessed are + ⲛ̀ⲛⲓⲣⲉϥⲉⲣϩⲓⲣⲏⲛⲏ = the peacemakers (those who make peace)'
        },
        {
          id: 'ex-28-11-2',
          type: 'multiple_choice',
          question: 'What does ϩⲓⲣⲏⲛⲏ mean?',
          questionCoptic: 'ϩⲓⲣⲏⲛⲏ',
          correctAnswer: 'peace',
          options: ['peace', 'love', 'mercy', 'righteousness'],
          explanation: 'ϩⲓⲣⲏⲛⲏ (hirēnē) means "peace" (from Greek eirene)'
        },
        {
          id: 'ex-28-11-3',
          type: 'matching',
          question: 'Match peace vocabulary',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ϩⲓⲣⲏⲛⲏ', english: 'peace' },
            { coptic: 'ⲉⲣϩⲓⲣⲏⲛⲏ', english: 'to make peace' },
            { coptic: 'ⲣⲉϥⲉⲣϩⲓⲣⲏⲛⲏ', english: 'peacemaker' },
            { coptic: 'ⲉⲙⲏϯ', english: 'peace/rest' }
          ]
        },
        {
          id: 'ex-28-11-4',
          type: 'translation',
          question: 'Translate: ϫⲉ ⲛ̀ⲑⲱⲟⲩ ⲉⲩⲉⲙⲟⲩϯ ⲉⲣⲱⲟⲩ ϫⲉ ⲛⲓϣⲏⲣⲓ ⲛ̀ⲧⲉⲫϯ',
          questionCoptic: 'ϫⲉ ⲛ̀ⲑⲱⲟⲩ ⲉⲩⲉⲙⲟⲩϯ ⲉⲣⲱⲟⲩ ϫⲉ ⲛⲓϣⲏⲣⲓ ⲛ̀ⲧⲉⲫϯ',
          correctAnswer: 'For they shall be called the children of God',
          options: ['For they shall be called the children of God', 'Because they are God\'s children', 'They will name the sons of God', 'God\'s children are called'],
          explanation: 'ϫⲉ = for + ⲛ̀ⲑⲱⲟⲩ = they + ⲉⲩⲉⲙⲟⲩϯ ⲉⲣⲱⲟⲩ = will be called + ϫⲉ = that + ⲛⲓϣⲏⲣⲓ ⲛ̀ⲧⲉⲫϯ = children of God (Bohairic: ϣⲏⲣⲓ not ⲥⲏⲣⲓ, ⲫϯ not ⲫⲛⲟⲩϯ!)'
        },
        {
          id: 'ex-28-11-5',
          type: 'sentence_building',
          question: 'Build: "The children of God"',
          correctAnswer: 'ⲛⲓϣⲏⲣⲓ ⲛ̀ⲧⲉⲫϯ',
          wordBank: ['ⲛⲓ', 'ϣⲏⲣⲓ', 'ⲛ̀ⲧⲉ', 'ⲫϯ'],
          explanation: 'ⲛⲓϣⲏⲣⲓ ⲛ̀ⲧⲉⲫϯ = the children of God (Bohairic: ϣⲏⲣⲓ not ⲥⲏⲣⲓ, ⲫϯ not ⲫⲛⲟⲩϯ!)'
        },
        {
          id: 'ex-28-11-6',
          type: 'fill_blank',
          question: 'Complete: ⲱⲟⲩⲛⲓⲁⲧⲟⲩ ⲛ̀ⲛⲓⲣⲉϥⲉⲣ___ = Blessed are the peacemakers',
          correctAnswer: 'ϩⲓⲣⲏⲛⲏ',
          options: ['ϩⲓⲣⲏⲛⲏ', 'ⲙⲉⲑⲙⲏⲓ', 'ⲛⲁⲓ', 'ⲟⲩⲱϣ'],
          explanation: 'ϩⲓⲣⲏⲛⲏ (peace) - ⲣⲉϥⲉⲣϩⲓⲣⲏⲛⲏ = peacemaker'
        },
        {
          id: 'ex-28-11-7',
          type: 'multiple_choice',
          question: 'How do you say "to be called"?',
          correctAnswer: 'ⲙⲟⲩϯ ⲉ-',
          options: ['ⲙⲟⲩϯ ⲉ-', 'ⲣⲁⲛ', 'ⲥⲁϫⲓ', 'ⲙⲟⲩϯ ⲛ̀'],
          explanation: 'ⲙⲟⲩϯ ⲉ- means "to call/to be called" (Bohairic ⲙⲟⲩϯ not ⲙⲟⲩⲧⲉ!)'
        },
        {
          id: 'ex-28-11-8',
          type: 'matching',
          question: 'Match calling and naming terms',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲙⲟⲩϯ', english: 'to call' },
            { coptic: 'ⲣⲁⲛ', english: 'name' },
            { coptic: 'ⲉⲩⲉⲙⲟⲩϯ ⲉⲣⲱⲟⲩ', english: 'they will be called' },
            { coptic: 'ϣⲏⲣⲓ', english: 'son/child' }
          ]
        }
      ]
    },
    {
      id: 'lesson-28-12',
      unitId: 'unit-28',
      title: 'Matthew 5:10 - Persecuted for Righteousness',
      description: 'The eighth beatitude',
      order: 12,
      xpReward: 45,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-28-12-1',
          type: 'translation',
          question: 'Translate: ⲱⲟⲩⲛⲓⲁⲧⲟⲩ ⲛ̀ⲛⲏⲉⲧⲁⲩϭⲟϫⲓ ⲛ̀ⲥⲱⲟⲩ',
          questionCoptic: 'ⲱⲟⲩⲛⲓⲁⲧⲟⲩ ⲛ̀ⲛⲏⲉⲧⲁⲩϭⲟϫⲓ ⲛ̀ⲥⲱⲟⲩ',
          correctAnswer: 'Blessed are those who are persecuted',
          options: ['Blessed are those who are persecuted', 'Happy are the persecuted', 'Blessed persecuted ones', 'The persecuted are blessed'],
          explanation: 'ⲱⲟⲩⲛⲓⲁⲧⲟⲩ = blessed are + ⲛ̀ⲛⲏⲉⲧⲁⲩϭⲟϫⲓ ⲛ̀ⲥⲱⲟⲩ = those who have been persecuted'
        },
        {
          id: 'ex-28-12-2',
          type: 'multiple_choice',
          question: 'What does ϭⲟϫⲓ mean?',
          questionCoptic: 'ϭⲟϫⲓ',
          correctAnswer: 'to persecute/pursue',
          options: ['to persecute/pursue', 'to bless', 'to curse', 'to strike'],
          explanation: 'ϭⲟϫⲓ (joji) means "to persecute" or "to pursue"'
        },
        {
          id: 'ex-28-12-3',
          type: 'matching',
          question: 'Match persecution vocabulary',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ϭⲟϫⲓ', english: 'to persecute' },
            { coptic: 'ⲡⲓϭⲟϫⲓ', english: 'persecution' },
            { coptic: 'ⲉⲑⲃⲉ', english: 'because of/for' },
            { coptic: 'ⲙⲉⲑⲙⲏⲓ', english: 'righteousness' }
          ]
        },
        {
          id: 'ex-28-12-4',
          type: 'translation',
          question: 'Translate: ⲉⲑⲃⲉ ϯⲙⲉⲑⲙⲏⲓ',
          questionCoptic: 'ⲉⲑⲃⲉ ϯⲙⲉⲑⲙⲏⲓ',
          correctAnswer: 'For righteousness\' sake',
          options: ['For righteousness\' sake', 'Because of righteousness', 'For justice', 'Due to righteousness'],
          explanation: 'ⲉⲑⲃⲉ = because of/for the sake of + ϯⲙⲉⲑⲙⲏⲓ = righteousness'
        },
        {
          id: 'ex-28-12-5',
          type: 'sentence_building',
          question: 'Build: "For theirs is the kingdom of heaven"',
          correctAnswer: 'ϫⲉ ⲑⲱⲟⲩ ⲧⲉ ϯⲙⲉⲧⲟⲩⲣⲟ ⲛ̀ⲧⲉⲛⲓⲫⲏⲟⲩⲓ',
          wordBank: ['ϫⲉ', 'ⲑⲱⲟⲩ', 'ⲧⲉ', 'ϯⲙⲉⲧⲟⲩⲣⲟ', 'ⲛ̀ⲧⲉⲛⲓⲫⲏⲟⲩⲓ'],
          explanation: 'ϫⲉ ⲑⲱⲟⲩ ⲧⲉ ϯⲙⲉⲧⲟⲩⲣⲟ ⲛ̀ⲧⲉⲛⲓⲫⲏⲟⲩⲓ = for theirs is the kingdom of the heavens'
        },
        {
          id: 'ex-28-12-6',
          type: 'fill_blank',
          question: 'Complete: ⲱⲟⲩⲛⲓⲁⲧⲟⲩ ⲛ̀ⲛⲏⲉⲧⲁⲩϭⲟϫⲓ ⲛ̀ⲥⲱⲟⲩ ⲉⲑⲃⲉ ___ = Blessed are those persecuted for righteousness',
          correctAnswer: 'ϯⲙⲉⲑⲙⲏⲓ',
          options: ['ϯⲙⲉⲑⲙⲏⲓ', 'ⲡⲓⲣⲁⲛ', 'ϯⲡⲓⲥⲧⲓⲥ', 'ϯⲙⲉⲧⲟⲩⲣⲟ'],
          explanation: 'ϯⲙⲉⲑⲙⲏⲓ (righteousness) completes the phrase'
        },
        {
          id: 'ex-28-12-7',
          type: 'multiple_choice',
          question: 'What is "kingdom of heaven" in Coptic?',
          correctAnswer: 'ϯⲙⲉⲧⲟⲩⲣⲟ ⲛ̀ⲧⲉⲛⲓⲫⲏⲟⲩⲓ',
          options: ['ϯⲙⲉⲧⲟⲩⲣⲟ ⲛ̀ⲧⲉⲛⲓⲫⲏⲟⲩⲓ', 'ⲡⲓⲟⲩⲣⲟ ⲛ̀ⲧⲉⲫⲉ', 'ϯⲙⲉⲧⲟⲩⲣⲟ ⲙⲫϯ', 'ⲡⲓⲟⲩⲣⲟ ⲙⲫⲉ'],
          explanation: 'ϯⲙⲉⲧⲟⲩⲣⲟ ⲛ̀ⲧⲉⲛⲓⲫⲏⲟⲩⲓ = the kingdom of the heavens (plural)'
        },
        {
          id: 'ex-28-12-8',
          type: 'matching',
          question: 'Match suffering and blessing terms',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ϭⲟϫⲓ', english: 'persecution' },
            { coptic: 'ⲙⲕⲁⲩϩ', english: 'suffering' },
            { coptic: 'ⲟⲩⲛⲓⲁⲧ', english: 'blessed' },
            { coptic: 'ⲃⲉⲕⲓ', english: 'reward' }
          ]
        }
      ]
    },
    {
      id: 'lesson-28-13',
      unitId: 'unit-28',
      title: 'Matthew 5:11-12 - Great is Your Reward',
      description: 'Rejoicing in persecution',
      order: 13,
      xpReward: 45,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-28-13-1',
          type: 'translation',
          question: 'Translate: ⲣⲁϣⲓ ⲟⲩⲟϩ ⲑⲉⲗⲏⲗ',
          questionCoptic: 'ⲣⲁϣⲓ ⲟⲩⲟϩ ⲑⲉⲗⲏⲗ',
          correctAnswer: 'Rejoice and be glad',
          options: ['Rejoice and be glad', 'Be happy and joyful', 'Rejoice and celebrate', 'Be glad and sing'],
          explanation: 'ⲣⲁϣⲓ = rejoice + ⲟⲩⲟϩ = and + ⲑⲉⲗⲏⲗ = be glad/exult'
        },
        {
          id: 'ex-28-13-2',
          type: 'multiple_choice',
          question: 'What does ⲣⲁϣⲓ mean?',
          questionCoptic: 'ⲣⲁϣⲓ',
          correctAnswer: 'to rejoice/be happy',
          options: ['to rejoice/be happy', 'to weep', 'to sing', 'to pray'],
          explanation: 'ⲣⲁϣⲓ (rashi) means "to rejoice" or "to be happy"'
        },
        {
          id: 'ex-28-13-3',
          type: 'matching',
          question: 'Match joy vocabulary',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲣⲁϣⲓ', english: 'to rejoice' },
            { coptic: 'ⲑⲉⲗⲏⲗ', english: 'to be glad/exult' },
            { coptic: 'ⲣⲁϣⲓ ⲙ̀ⲙⲟϥ', english: 'joy' },
            { coptic: 'ⲟⲩⲛⲟϥ', english: 'happiness' }
          ]
        },
        {
          id: 'ex-28-13-4',
          type: 'translation',
          question: 'Translate: ϫⲉ ⲡⲉⲧⲉⲛⲃⲉⲕⲓ ⲟⲩⲛⲓϣϯ ϧⲉⲛ ⲛⲓⲫⲏⲟⲩⲓ',
          questionCoptic: 'ϫⲉ ⲡⲉⲧⲉⲛⲃⲉⲕⲓ ⲟⲩⲛⲓϣϯ ϧⲉⲛ ⲛⲓⲫⲏⲟⲩⲓ',
          correctAnswer: 'For great is your reward in heaven',
          options: ['For great is your reward in heaven', 'Because your reward is in heaven', 'Your great reward in heaven', 'The heavenly reward is great'],
          explanation: 'ϫⲉ = for + ⲡⲉⲧⲉⲛⲃⲉⲕⲓ = your reward + ⲟⲩⲛⲓϣϯ = is great + ϧⲉⲛ ⲛⲓⲫⲏⲟⲩⲓ = in the heavens'
        },
        {
          id: 'ex-28-13-5',
          type: 'multiple_choice',
          question: 'What is "reward" in Coptic?',
          correctAnswer: 'ⲃⲉⲕⲓ',
          options: ['ⲃⲉⲕⲓ', 'ⲱⲟⲩ', 'ϫⲟⲙ', 'ⲧⲁⲓⲟ'],
          explanation: 'ⲃⲉⲕⲓ (beki) means "reward" or "payment"'
        },
        {
          id: 'ex-28-13-6',
          type: 'sentence_building',
          question: 'Build: "Your reward is great in heaven"',
          correctAnswer: 'ⲡⲉⲧⲉⲛⲃⲉⲕⲓ ⲟⲩⲛⲓϣϯ ϧⲉⲛ ⲛⲓⲫⲏⲟⲩⲓ',
          wordBank: ['ⲡⲉⲧⲉⲛⲃⲉⲕⲓ', 'ⲟⲩⲛⲓϣϯ', 'ϧⲉⲛ', 'ⲛⲓⲫⲏⲟⲩⲓ'],
          explanation: 'ⲡⲉⲧⲉⲛⲃⲉⲕⲓ ⲟⲩⲛⲓϣϯ ϧⲉⲛ ⲛⲓⲫⲏⲟⲩⲓ = your reward is great in the heavens'
        },
        {
          id: 'ex-28-13-7',
          type: 'fill_blank',
          question: 'Complete: ⲣⲁϣⲓ ⲟⲩⲟϩ ___ = Rejoice and be glad',
          correctAnswer: 'ⲑⲉⲗⲏⲗ',
          options: ['ⲑⲉⲗⲏⲗ', 'ⲣⲓⲙⲓ', 'ⲥⲱⲧⲙ', 'ⲙⲟϣⲓ'],
          explanation: 'ⲑⲉⲗⲏⲗ (thelēl) means "to be glad" or "to exult"'
        },
        {
          id: 'ex-28-13-8',
          type: 'matching',
          question: 'Match reward and prophets terms',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲃⲉⲕⲓ', english: 'reward' },
            { coptic: 'ⲡⲣⲟⲫⲏⲧⲏⲥ', english: 'prophet' },
            { coptic: 'ⲛⲓⲫⲏⲟⲩⲓ', english: 'the heavens' },
            { coptic: 'ⲛⲓϣϯ', english: 'great' }
          ]
        }
      ]
    }
  ]
};

export default unit28;
