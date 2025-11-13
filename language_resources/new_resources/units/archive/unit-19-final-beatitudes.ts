import { Unit } from '../../types';

// UNIT 19: FINAL BEATITUDES
// Verified for Bohairic dialect consistency
// Matthew 5:9-12 - Peacemakers and the Persecuted

const unit19: Unit = {
  id: 'unit-19',
  title: 'Final Beatitudes',
  description: 'Peacemakers and those persecuted for righteousness',
  order: 19,
  color: '#FF9600',
  lessons: [
    {
      id: 'lesson-19-1',
      unitId: 'unit-19',
      title: 'Matthew 5:9 - Blessed are the Peacemakers',
      description: 'The seventh beatitude',
      order: 1,
      xpReward: 45,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-19-1-1',
          type: 'translation',
          question: 'Translate: ⲱⲟⲩⲛⲓⲁⲧⲟⲩ ⲛ̀ⲛⲓⲣⲉϥⲉⲣϩⲓⲣⲏⲛⲏ',
          questionCoptic: 'ⲱⲟⲩⲛⲓⲁⲧⲟⲩ ⲛ̀ⲛⲓⲣⲉϥⲉⲣϩⲓⲣⲏⲛⲏ',
          correctAnswer: 'Blessed are the peacemakers',
          options: ['Blessed are the peacemakers', 'Happy are those who make peace', 'Blessed peaceful ones', 'The peaceful are blessed'],
          explanation: 'ⲱⲟⲩⲛⲓⲁⲧⲟⲩ = blessed are + ⲛ̀ⲛⲓⲣⲉϥⲉⲣϩⲓⲣⲏⲛⲏ = the peacemakers (those who make peace)'
        },
        {
          id: 'ex-19-1-2',
          type: 'multiple_choice',
          question: 'What does ϩⲓⲣⲏⲛⲏ mean?',
          questionCoptic: 'ϩⲓⲣⲏⲛⲏ',
          correctAnswer: 'peace',
          options: ['peace', 'love', 'mercy', 'righteousness'],
          explanation: 'ϩⲓⲣⲏⲛⲏ (hirēnē) means "peace" (from Greek eirene)'
        },
        {
          id: 'ex-19-1-3',
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
          id: 'ex-19-1-4',
          type: 'translation',
          question: 'Translate: ϫⲉ ⲛ̀ⲑⲱⲟⲩ ⲉⲩⲉⲙⲟⲩϯ ⲉⲣⲱⲟⲩ ϫⲉ ⲛⲓϣⲏⲣⲓ ⲛ̀ⲧⲉⲫϯ',
          questionCoptic: 'ϫⲉ ⲛ̀ⲑⲱⲟⲩ ⲉⲩⲉⲙⲟⲩϯ ⲉⲣⲱⲟⲩ ϫⲉ ⲛⲓϣⲏⲣⲓ ⲛ̀ⲧⲉⲫϯ',
          correctAnswer: 'For they shall be called the children of God',
          options: ['For they shall be called the children of God', 'Because they are God\\'s children', 'They will name the sons of God', 'God\\'s children are called'],
          explanation: 'ϫⲉ = for + ⲛ̀ⲑⲱⲟⲩ = they + ⲉⲩⲉⲙⲟⲩϯ ⲉⲣⲱⲟⲩ = will be called + ϫⲉ = that + ⲛⲓϣⲏⲣⲓ ⲛ̀ⲧⲉⲫϯ = children of God (Bohairic: ϣⲏⲣⲓ not ⲥⲏⲣⲓ, ⲫϯ not ⲫⲛⲟⲩϯ!)'
        },
        {
          id: 'ex-19-1-5',
          type: 'sentence_building',
          question: 'Build: "The children of God"',
          correctAnswer: 'ⲛⲓϣⲏⲣⲓ ⲛ̀ⲧⲉⲫϯ',
          wordBank: ['ⲛⲓ', 'ϣⲏⲣⲓ', 'ⲛ̀ⲧⲉ', 'ⲫϯ'],
          explanation: 'ⲛⲓϣⲏⲣⲓ ⲛ̀ⲧⲉⲫϯ = the children of God (Bohairic: ϣⲏⲣⲓ not ⲥⲏⲣⲓ, ⲫϯ not ⲫⲛⲟⲩϯ!)'
        },
        {
          id: 'ex-19-1-6',
          type: 'fill_blank',
          question: 'Complete: ⲱⲟⲩⲛⲓⲁⲧⲟⲩ ⲛ̀ⲛⲓⲣⲉϥⲉⲣ___ = Blessed are the peacemakers',
          correctAnswer: 'ϩⲓⲣⲏⲛⲏ',
          options: ['ϩⲓⲣⲏⲛⲏ', 'ⲙⲉⲑⲙⲏⲓ', 'ⲛⲁⲓ', 'ⲟⲩⲱϣ'],
          explanation: 'ϩⲓⲣⲏⲛⲏ (peace) - ⲣⲉϥⲉⲣϩⲓⲣⲏⲛⲏ = peacemaker'
        },
        {
          id: 'ex-19-1-7',
          type: 'multiple_choice',
          question: 'How do you say "to be called"?',
          correctAnswer: 'ⲙⲟⲩϯ ⲉ-',
          options: ['ⲙⲟⲩϯ ⲉ-', 'ⲣⲁⲛ', 'ⲥⲁϫⲓ', 'ⲙⲟⲩϯ ⲛ̀'],
          explanation: 'ⲙⲟⲩϯ ⲉ- means "to call/to be called" (Bohairic ⲙⲟⲩϯ not ⲙⲟⲩⲧⲉ!)'
        },
        {
          id: 'ex-19-1-8',
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
      id: 'lesson-19-2',
      unitId: 'unit-19',
      title: 'Matthew 5:10 - Persecuted for Righteousness',
      description: 'The eighth beatitude',
      order: 2,
      xpReward: 45,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-19-2-1',
          type: 'translation',
          question: 'Translate: ⲱⲟⲩⲛⲓⲁⲧⲟⲩ ⲛ̀ⲛⲏⲉⲧⲁⲩϭⲟϫⲓ ⲛ̀ⲥⲱⲟⲩ',
          questionCoptic: 'ⲱⲟⲩⲛⲓⲁⲧⲟⲩ ⲛ̀ⲛⲏⲉⲧⲁⲩϭⲟϫⲓ ⲛ̀ⲥⲱⲟⲩ',
          correctAnswer: 'Blessed are those who are persecuted',
          options: ['Blessed are those who are persecuted', 'Happy are the persecuted', 'Blessed persecuted ones', 'The persecuted are blessed'],
          explanation: 'ⲱⲟⲩⲛⲓⲁⲧⲟⲩ = blessed are + ⲛ̀ⲛⲏⲉⲧⲁⲩϭⲟϫⲓ ⲛ̀ⲥⲱⲟⲩ = those who have been persecuted'
        },
        {
          id: 'ex-19-2-2',
          type: 'multiple_choice',
          question: 'What does ϭⲟϫⲓ mean?',
          questionCoptic: 'ϭⲟϫⲓ',
          correctAnswer: 'to persecute/pursue',
          options: ['to persecute/pursue', 'to bless', 'to curse', 'to strike'],
          explanation: 'ϭⲟϫⲓ (joji) means "to persecute" or "to pursue"'
        },
        {
          id: 'ex-19-2-3',
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
          id: 'ex-19-2-4',
          type: 'translation',
          question: 'Translate: ⲉⲑⲃⲉ ϯⲙⲉⲑⲙⲏⲓ',
          questionCoptic: 'ⲉⲑⲃⲉ ϯⲙⲉⲑⲙⲏⲓ',
          correctAnswer: 'For righteousness\' sake',
          options: ['For righteousness\\' sake', 'Because of righteousness', 'For justice', 'Due to righteousness'],
          explanation: 'ⲉⲑⲃⲉ = because of/for the sake of + ϯⲙⲉⲑⲙⲏⲓ = righteousness'
        },
        {
          id: 'ex-19-2-5',
          type: 'sentence_building',
          question: 'Build: "For theirs is the kingdom of heaven"',
          correctAnswer: 'ϫⲉ ⲑⲱⲟⲩ ⲧⲉ ϯⲙⲉⲧⲟⲩⲣⲟ ⲛ̀ⲧⲉⲛⲓⲫⲏⲟⲩⲓ',
          wordBank: ['ϫⲉ', 'ⲑⲱⲟⲩ', 'ⲧⲉ', 'ϯⲙⲉⲧⲟⲩⲣⲟ', 'ⲛ̀ⲧⲉⲛⲓⲫⲏⲟⲩⲓ'],
          explanation: 'ϫⲉ ⲑⲱⲟⲩ ⲧⲉ ϯⲙⲉⲧⲟⲩⲣⲟ ⲛ̀ⲧⲉⲛⲓⲫⲏⲟⲩⲓ = for theirs is the kingdom of the heavens'
        },
        {
          id: 'ex-19-2-6',
          type: 'fill_blank',
          question: 'Complete: ⲱⲟⲩⲛⲓⲁⲧⲟⲩ ⲛ̀ⲛⲏⲉⲧⲁⲩϭⲟϫⲓ ⲛ̀ⲥⲱⲟⲩ ⲉⲑⲃⲉ ___ = Blessed are those persecuted for righteousness',
          correctAnswer: 'ϯⲙⲉⲑⲙⲏⲓ',
          options: ['ϯⲙⲉⲑⲙⲏⲓ', 'ⲡⲓⲣⲁⲛ', 'ϯⲡⲓⲥⲧⲓⲥ', 'ϯⲙⲉⲧⲟⲩⲣⲟ'],
          explanation: 'ϯⲙⲉⲑⲙⲏⲓ (righteousness) completes the phrase'
        },
        {
          id: 'ex-19-2-7',
          type: 'multiple_choice',
          question: 'What is "kingdom of heaven" in Coptic?',
          correctAnswer: 'ϯⲙⲉⲧⲟⲩⲣⲟ ⲛ̀ⲧⲉⲛⲓⲫⲏⲟⲩⲓ',
          options: ['ϯⲙⲉⲧⲟⲩⲣⲟ ⲛ̀ⲧⲉⲛⲓⲫⲏⲟⲩⲓ', 'ⲡⲓⲟⲩⲣⲟ ⲛ̀ⲧⲉⲫⲉ', 'ϯⲙⲉⲧⲟⲩⲣⲟ ⲙⲫϯ', 'ⲡⲓⲟⲩⲣⲟ ⲙⲫⲉ'],
          explanation: 'ϯⲙⲉⲧⲟⲩⲣⲟ ⲛ̀ⲧⲉⲛⲓⲫⲏⲟⲩⲓ = the kingdom of the heavens (plural)'
        },
        {
          id: 'ex-19-2-8',
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
      id: 'lesson-19-3',
      unitId: 'unit-19',
      title: 'Matthew 5:11-12 - Great is Your Reward',
      description: 'Rejoicing in persecution',
      order: 3,
      xpReward: 45,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-19-3-1',
          type: 'translation',
          question: 'Translate: ⲣⲁϣⲓ ⲟⲩⲟϩ ⲑⲉⲗⲏⲗ',
          questionCoptic: 'ⲣⲁϣⲓ ⲟⲩⲟϩ ⲑⲉⲗⲏⲗ',
          correctAnswer: 'Rejoice and be glad',
          options: ['Rejoice and be glad', 'Be happy and joyful', 'Rejoice and celebrate', 'Be glad and sing'],
          explanation: 'ⲣⲁϣⲓ = rejoice + ⲟⲩⲟϩ = and + ⲑⲉⲗⲏⲗ = be glad/exult'
        },
        {
          id: 'ex-19-3-2',
          type: 'multiple_choice',
          question: 'What does ⲣⲁϣⲓ mean?',
          questionCoptic: 'ⲣⲁϣⲓ',
          correctAnswer: 'to rejoice/be happy',
          options: ['to rejoice/be happy', 'to weep', 'to sing', 'to pray'],
          explanation: 'ⲣⲁϣⲓ (rashi) means "to rejoice" or "to be happy"'
        },
        {
          id: 'ex-19-3-3',
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
          id: 'ex-19-3-4',
          type: 'translation',
          question: 'Translate: ϫⲉ ⲡⲉⲧⲉⲛⲃⲉⲕⲓ ⲟⲩⲛⲓϣϯ ϧⲉⲛ ⲛⲓⲫⲏⲟⲩⲓ',
          questionCoptic: 'ϫⲉ ⲡⲉⲧⲉⲛⲃⲉⲕⲓ ⲟⲩⲛⲓϣϯ ϧⲉⲛ ⲛⲓⲫⲏⲟⲩⲓ',
          correctAnswer: 'For great is your reward in heaven',
          options: ['For great is your reward in heaven', 'Because your reward is in heaven', 'Your great reward in heaven', 'The heavenly reward is great'],
          explanation: 'ϫⲉ = for + ⲡⲉⲧⲉⲛⲃⲉⲕⲓ = your reward + ⲟⲩⲛⲓϣϯ = is great + ϧⲉⲛ ⲛⲓⲫⲏⲟⲩⲓ = in the heavens'
        },
        {
          id: 'ex-19-3-5',
          type: 'multiple_choice',
          question: 'What is "reward" in Coptic?',
          correctAnswer: 'ⲃⲉⲕⲓ',
          options: ['ⲃⲉⲕⲓ', 'ⲱⲟⲩ', 'ϫⲟⲙ', 'ⲧⲁⲓⲟ'],
          explanation: 'ⲃⲉⲕⲓ (beki) means "reward" or "payment"'
        },
        {
          id: 'ex-19-3-6',
          type: 'sentence_building',
          question: 'Build: "Your reward is great in heaven"',
          correctAnswer: 'ⲡⲉⲧⲉⲛⲃⲉⲕⲓ ⲟⲩⲛⲓϣϯ ϧⲉⲛ ⲛⲓⲫⲏⲟⲩⲓ',
          wordBank: ['ⲡⲉⲧⲉⲛⲃⲉⲕⲓ', 'ⲟⲩⲛⲓϣϯ', 'ϧⲉⲛ', 'ⲛⲓⲫⲏⲟⲩⲓ'],
          explanation: 'ⲡⲉⲧⲉⲛⲃⲉⲕⲓ ⲟⲩⲛⲓϣϯ ϧⲉⲛ ⲛⲓⲫⲏⲟⲩⲓ = your reward is great in the heavens'
        },
        {
          id: 'ex-19-3-7',
          type: 'fill_blank',
          question: 'Complete: ⲣⲁϣⲓ ⲟⲩⲟϩ ___ = Rejoice and be glad',
          correctAnswer: 'ⲑⲉⲗⲏⲗ',
          options: ['ⲑⲉⲗⲏⲗ', 'ⲣⲓⲙⲓ', 'ⲥⲱⲧⲙ', 'ⲙⲟϣⲓ'],
          explanation: 'ⲑⲉⲗⲏⲗ (thelēl) means "to be glad" or "to exult"'
        },
        {
          id: 'ex-19-3-8',
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

export default unit19;
