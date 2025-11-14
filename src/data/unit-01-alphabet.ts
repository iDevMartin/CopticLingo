import { Unit } from '../../types';

// UNIT 1: COPTIC ALPHABET
// Complete introduction to all 32 Coptic letters with pronunciation
// Based on standard Bohairic pronunciation

const unit1: Unit = {
  id: 'unit-1',
  title: 'Coptic Alphabet',
  description: 'Learn the Coptic alphabet',
  order: 1,
  color: '#58CC02',
  lessons: [
    {
      id: 'lesson-1-1',
      unitId: 'unit-1',
      title: 'Letters Ⲁ-Ⲍ (Alpha to Zita)',
      description: 'Learn the first 6 letters of the Coptic alphabet',
      order: 1,
      xpReward: 10,
      isLocked: false,
      completed: false,
      exercises: [
        {
          id: 'ex-1-1-1',
          type: 'multiple_choice',
          question: 'What sound does Ⲁ (Alpha) make?',
          questionCoptic: 'Ⲁ',
          correctAnswer: 'ah (as in father)',
          options: ['ah (as in father)', 'eh (as in bed)', 'oh (as in go)', 'ee (as in see)'],
          explanation: 'Ⲁ (Alpha) sounds like "ah" as in English "father"'
        },
        {
          id: 'ex-1-1-2',
          type: 'multiple_choice',
          question: 'What sound does Ⲃ (Vita/Beta) make?',
          questionCoptic: 'Ⲃ',
          correctAnswer: 'b',
          options: ['b', 'v', 'p', 'f'],
          explanation: 'Ⲃ (Vita) sounds like "b" in Bohairic'
        },
        {
          id: 'ex-1-1-3',
          type: 'multiple_choice',
          question: 'Select the letter that makes the "g/gh" sound',
          correctAnswer: 'Ⲅ',
          options: ['Ⲁ', 'Ⲃ', 'Ⲅ', 'Ⲇ'],
          explanation: 'Ⲅ (Gamma) makes "g" before e/i/y, and "gh" elsewhere'
        },
        {
          id: 'ex-1-1-4',
          type: 'multiple_choice',
          question: 'What sound does Ⲇ (Dalma/Delta) usually make?',
          questionCoptic: 'Ⲇ',
          correctAnswer: 'd',
          options: ['d', 'z', 't', 'th'],
          explanation: 'Ⲇ (Dalma) sounds like "d" in most contexts'
        },
        {
          id: 'ex-1-1-5',
          type: 'multiple_choice',
          question: 'What sound does Ⲉ (Ei) make?',
          questionCoptic: 'Ⲉ',
          correctAnswer: 'eh (as in bed)',
          options: ['ah', 'eh (as in bed)', 'ee', 'ay'],
          explanation: 'Ⲉ (Ei) sounds like short "e" - "eh" as in "bed"'
        },
        {
          id: 'ex-1-1-6',
          type: 'multiple_choice',
          question: 'Which letter makes the "z" sound?',
          correctAnswer: 'Ⲍ',
          options: ['Ⲁ', 'Ⲃ', 'Ⲉ', 'Ⲍ'],
          explanation: 'Ⲍ (Zita) makes the "z" sound'
        },
        {
          id: 'ex-1-1-7',
          type: 'matching',
          question: 'Match the Coptic letters to their sounds',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'Ⲁ', english: 'ah' },
            { coptic: 'Ⲃ', english: 'b' },
            { coptic: 'Ⲅ', english: 'g/gh' },
            { coptic: 'Ⲇ', english: 'd' }
          ]
        },
        {
          id: 'ex-1-1-8',
          type: 'fill_blank',
          question: 'The letter Ⲉ sounds like ___',
          correctAnswer: 'eh',
          options: ['ah', 'eh', 'oh', 'ee'],
          explanation: 'Ⲉ (Ei) has the short "eh" sound'
        },
        {
          id: 'ex-1-1-9',
          type: 'multiple_choice',
          question: 'What does the Coptic word ⲁⲃⲃⲁ mean?',
          questionCoptic: 'ⲁⲃⲃⲁ',
          correctAnswer: 'father',
          options: ['father', 'mother', 'brother', 'sister'],
          explanation: 'ⲁⲃⲃⲁ (abba) means "father" - your first Coptic word!'
        },
        {
          id: 'ex-1-1-10',
          type: 'sentence_building',
          question: 'Arrange these letters to spell "father" (ⲁⲃⲃⲁ)',
          correctAnswer: 'ⲁ ⲃ ⲃ ⲁ',
          wordBank: ['ⲁ', 'ⲃ', 'ⲃ', 'ⲁ'],
          explanation: 'ⲁⲃⲃⲁ (abba) means "father"'
        }
      ]
    },
    {
      id: 'lesson-1-2',
      unitId: 'unit-1',
      title: 'Letters Ⲏ-Ⲛ (Ita to Ni)',
      description: 'Learn letters Ⲏ through Ⲛ',
      order: 2,
      xpReward: 10,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-1-2-1',
          type: 'multiple_choice',
          question: 'What sound does Ⲏ (Ita/Eta) make?',
          questionCoptic: 'Ⲏ',
          correctAnswer: 'ay (long e)',
          options: ['ay (long e)', 'eh', 'ah', 'ee'],
          explanation: 'Ⲏ (Ita) sounds like "ay" - a long e sound'
        },
        {
          id: 'ex-1-2-2',
          type: 'multiple_choice',
          question: 'What sound does Ⲑ (Thita/Theta) make?',
          questionCoptic: 'Ⲑ',
          correctAnswer: 'th',
          options: ['t', 'th', 'd', 's'],
          explanation: 'Ⲑ (Thita) sounds like "th" in "think"'
        },
        {
          id: 'ex-1-2-3',
          type: 'multiple_choice',
          question: 'What sound does Ⲓ (Yota/Iota) make?',
          questionCoptic: 'Ⲓ',
          correctAnswer: 'ee (as in see)',
          options: ['ee (as in see)', 'ih (as in sit)', 'eye', 'ay'],
          explanation: 'Ⲓ (Yota) sounds like "ee" or sometimes like "y" as consonant'
        },
        {
          id: 'ex-1-2-4',
          type: 'multiple_choice',
          question: 'What sound does Ⲕ (Kappa) make?',
          questionCoptic: 'Ⲕ',
          correctAnswer: 'k',
          options: ['k', 'g', 's', 'kh'],
          explanation: 'Ⲕ (Kappa) sounds like "k" in English'
        },
        {
          id: 'ex-1-2-5',
          type: 'multiple_choice',
          question: 'What sound does Ⲗ (Lavla/Lambda) make?',
          questionCoptic: 'Ⲗ',
          correctAnswer: 'l',
          options: ['l', 'r', 'n', 'm'],
          explanation: 'Ⲗ (Lavla) makes the "l" sound'
        },
        {
          id: 'ex-1-2-6',
          type: 'multiple_choice',
          question: 'What sound does Ⲙ (Mi/Mu) make?',
          questionCoptic: 'Ⲙ',
          correctAnswer: 'm',
          options: ['m', 'n', 'w', 'v'],
          explanation: 'Ⲙ (Mi) makes the "m" sound'
        },
        {
          id: 'ex-1-2-7',
          type: 'multiple_choice',
          question: 'What sound does Ⲛ (Ni/Nu) make?',
          questionCoptic: 'Ⲛ',
          correctAnswer: 'n',
          options: ['n', 'm', 'ng', 'r'],
          explanation: 'Ⲛ (Ni) makes the "n" sound'
        },
        {
          id: 'ex-1-2-8',
          type: 'matching',
          question: 'Match these letters to their sounds',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'Ⲓ', english: 'ee/y' },
            { coptic: 'Ⲕ', english: 'k' },
            { coptic: 'Ⲗ', english: 'l' },
            { coptic: 'Ⲙ', english: 'm' }
          ]
        },
        {
          id: 'ex-1-2-9',
          type: 'translation',
          question: 'What does ⲫⲁⲓ mean in English?',
          questionCoptic: 'ⲫⲁⲓ',
          correctAnswer: 'this (masc.)',
          options: ['this (masc.)', 'that', 'here', 'there'],
          explanation: 'ⲫⲁⲓ (fai) means "this" (demonstrative pronoun, masculine)'
        },
        {
          id: 'ex-1-2-10',
          type: 'sentence_building',
          question: 'Build the Coptic word for "name" (ⲣⲁⲛ)',
          correctAnswer: 'ⲣ ⲁ ⲛ',
          wordBank: ['ⲣ', 'ⲁ', 'ⲛ', 'ⲙ'],
          explanation: 'ⲣⲁⲛ (ran) means "name" in Coptic'
        }
      ]
    },
    {
      id: 'lesson-1-3',
      unitId: 'unit-1',
      title: 'Letters Ⲝ-Ⲣ (Eksi to Ro)',
      description: 'Learn letters Ⲝ through Ⲣ',
      order: 3,
      xpReward: 10,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-1-3-1',
          type: 'multiple_choice',
          question: 'What sound does Ⲝ (Eksi/Xi) make?',
          questionCoptic: 'Ⲝ',
          correctAnswer: 'ks (x)',
          options: ['ks (x)', 'k', 's', 'z'],
          explanation: 'Ⲝ (Eksi) sounds like "ks" or "x"'
        },
        {
          id: 'ex-1-3-2',
          type: 'multiple_choice',
          question: 'What sound does Ⲟ (O/Omicron) make?',
          questionCoptic: 'Ⲟ',
          correctAnswer: 'oh (short)',
          options: ['oh (short)', 'oo', 'aw', 'oy'],
          explanation: 'Ⲟ (O) sounds like short "oh"'
        },
        {
          id: 'ex-1-3-3',
          type: 'multiple_choice',
          question: 'What sound does Ⲡ (Pi) make?',
          questionCoptic: 'Ⲡ',
          correctAnswer: 'p',
          options: ['p', 'b', 'f', 'v'],
          explanation: 'Ⲡ (Pi) makes the "p" sound'
        },
        {
          id: 'ex-1-3-4',
          type: 'multiple_choice',
          question: 'What sound does Ⲣ (Ro/Rho) make?',
          questionCoptic: 'Ⲣ',
          correctAnswer: 'r',
          options: ['r', 'l', 'n', 'w'],
          explanation: 'Ⲣ (Ro) sounds like "r"'
        },
        {
          id: 'ex-1-3-5',
          type: 'matching',
          question: 'Match letters to sounds',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'Ⲛ', english: 'n' },
            { coptic: 'Ⲟ', english: 'oh' },
            { coptic: 'Ⲡ', english: 'p' },
            { coptic: 'Ⲣ', english: 'r' }
          ]
        },
        {
          id: 'ex-1-3-6',
          type: 'translation',
          question: 'What does ⲣⲁⲛ mean?',
          questionCoptic: 'ⲣⲁⲛ',
          correctAnswer: 'name',
          options: ['name', 'father', 'mother', 'brother'],
          explanation: 'ⲣⲁⲛ (ran) means "name"'
        },
        {
          id: 'ex-1-3-7',
          type: 'multiple_choice',
          question: 'What Coptic word means "bread"?',
          correctAnswer: 'ⲱⲓⲕ',
          options: ['ⲱⲓⲕ', 'ⲙⲱⲟⲩ', 'ⲣⲁⲛ', 'ⲁⲃⲃⲁ'],
          explanation: 'ⲱⲓⲕ (oik) means "bread"'
        },
        {
          id: 'ex-1-3-8',
          type: 'sentence_building',
          question: 'Build "bread" (ⲱⲓⲕ)',
          correctAnswer: 'ⲱ ⲓ ⲕ',
          wordBank: ['ⲱ', 'ⲓ', 'ⲕ', 'ⲟ'],
          explanation: 'ⲱⲓⲕ (oik) means "bread"'
        }
      ]
    },
    {
      id: 'lesson-1-4',
      unitId: 'unit-1',
      title: 'Letters Ⲥ-Ⲱ (Sima to Omega)',
      description: 'Complete the Greek-derived letters',
      order: 4,
      xpReward: 15,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-1-4-1',
          type: 'multiple_choice',
          question: 'What sound does Ⲥ (Sima/Sigma) make?',
          questionCoptic: 'Ⲥ',
          correctAnswer: 's',
          options: ['s', 'sh', 'z', 'th'],
          explanation: 'Ⲥ (Sima) makes the "s" sound'
        },
        {
          id: 'ex-1-4-2',
          type: 'multiple_choice',
          question: 'What sound does Ⲧ (Tav/Tau) make?',
          questionCoptic: 'Ⲧ',
          correctAnswer: 't',
          options: ['t', 'd', 'th', 'ts'],
          explanation: 'Ⲧ (Tav) makes the "t" sound'
        },
        {
          id: 'ex-1-4-3',
          type: 'multiple_choice',
          question: 'What sound does Ⲩ (Epsilon/Upsilon) make?',
          questionCoptic: 'Ⲩ',
          correctAnswer: 'u/v/w (varies)',
          options: ['u/v/w (varies)', 'oo', 'y', 'i'],
          explanation: 'Ⲩ (Epsilon) has complex pronunciation: after vowels makes "u/v/w" sound'
        },
        {
          id: 'ex-1-4-4',
          type: 'multiple_choice',
          question: 'What sound does Φ (Phi) make?',
          questionCoptic: 'Φ',
          correctAnswer: 'f',
          options: ['f', 'ph', 'p', 'v'],
          explanation: 'Φ (Phi) makes the "f" sound'
        },
        {
          id: 'ex-1-4-5',
          type: 'multiple_choice',
          question: 'What sound does Χ (Khi/Chi) make?',
          questionCoptic: 'Χ',
          correctAnswer: 'kh (guttural)',
          options: ['kh (guttural)', 'k', 'h', 'sh'],
          explanation: 'Χ (Khi) makes a guttural "kh" sound (like Scottish "loch")'
        },
        {
          id: 'ex-1-4-6',
          type: 'multiple_choice',
          question: 'What sound does Ψ (Epsi/Psi) make?',
          questionCoptic: 'Ψ',
          correctAnswer: 'ps',
          options: ['ps', 'p', 's', 'sh'],
          explanation: 'Ψ (Epsi) makes the "ps" sound'
        },
        {
          id: 'ex-1-4-7',
          type: 'multiple_choice',
          question: 'What sound does Ⲱ (Omega) make?',
          questionCoptic: 'Ⲱ',
          correctAnswer: 'oh (long)',
          options: ['oh (long)', 'oo', 'ow', 'aw'],
          explanation: 'Ⲱ (Omega) makes a long "oh" sound'
        },
        {
          id: 'ex-1-4-8',
          type: 'matching',
          question: 'Match final Greek letters',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'Ⲥ', english: 's' },
            { coptic: 'Ⲧ', english: 't' },
            { coptic: 'Φ', english: 'f' },
            { coptic: 'Ψ', english: 'ps' }
          ]
        },
        {
          id: 'ex-1-4-9',
          type: 'translation',
          question: 'What does ⲥⲟⲛ mean?',
          questionCoptic: 'ⲥⲟⲛ',
          correctAnswer: 'brother',
          options: ['brother', 'sister', 'father', 'mother'],
          explanation: 'ⲥⲟⲛ (son) means "brother"'
        },
        {
          id: 'ex-1-4-10',
          type: 'sentence_building',
          question: 'Build "brother" (ⲥⲟⲛ)',
          correctAnswer: 'ⲥ ⲟ ⲛ',
          wordBank: ['ⲥ', 'ⲟ', 'ⲛ', 'ⲧ'],
          explanation: 'ⲥⲟⲛ (son) means "brother"'
        }
      ]
    },
    {
      id: 'lesson-1-5',
      unitId: 'unit-1',
      title: 'Demotic Letters (Part 1)',
      description: 'Learn the Egyptian-derived letters: Ϣ, Ϥ, Ϧ, Ϩ',
      order: 5,
      xpReward: 15,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-1-5-1',
          type: 'multiple_choice',
          question: 'What sound does Ϣ (Shai) make?',
          questionCoptic: 'Ϣ',
          correctAnswer: 'sh',
          options: ['sh', 's', 'ch', 'zh'],
          explanation: 'Ϣ (Shai) makes the "sh" sound - this is an Egyptian letter!'
        },
        {
          id: 'ex-1-5-2',
          type: 'multiple_choice',
          question: 'What sound does Ϥ (Fai) make?',
          questionCoptic: 'Ϥ',
          correctAnswer: 'f',
          options: ['f', 'v', 'ph', 'p'],
          explanation: 'Ϥ (Fai) makes the "f" sound'
        },
        {
          id: 'ex-1-5-3',
          type: 'multiple_choice',
          question: 'What sound does Ϧ (Khai) make?',
          questionCoptic: 'Ϧ',
          correctAnswer: 'kh (guttural)',
          options: ['kh (guttural)', 'k', 'h', 'q'],
          explanation: 'Ϧ (Khai) makes a guttural "kh" sound'
        },
        {
          id: 'ex-1-5-4',
          type: 'multiple_choice',
          question: 'What sound does Ϩ (Hori) make?',
          questionCoptic: 'Ϩ',
          correctAnswer: 'h',
          options: ['h', 'kh', 'j', 'sh'],
          explanation: 'Ϩ (Hori) makes the "h" sound'
        },
        {
          id: 'ex-1-5-5',
          type: 'matching',
          question: 'Match the Demotic letters',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'Ϣ', english: 'sh' },
            { coptic: 'Ϥ', english: 'f' },
            { coptic: 'Ϧ', english: 'kh' },
            { coptic: 'Ϩ', english: 'h' }
          ]
        },
        {
          id: 'ex-1-5-6',
          type: 'translation',
          question: 'What does ϣⲏⲣⲓ mean?',
          questionCoptic: 'ϣⲏⲣⲓ',
          correctAnswer: 'son/child',
          options: ['son/child', 'father', 'brother', 'daughter'],
          explanation: 'ϣⲏⲣⲓ (shiri) means "son" or "child"'
        },
        {
          id: 'ex-1-5-7',
          type: 'multiple_choice',
          question: 'Which word means "house"?',
          correctAnswer: 'ϩⲓ',
          options: ['ϩⲓ', 'ϣⲏⲣⲓ', 'ϥⲁⲓ', 'ϧⲉⲛ'],
          explanation: 'ϩⲓ (hi) means "house"'
        },
        {
          id: 'ex-1-5-8',
          type: 'sentence_building',
          question: 'Build "son" (ϣⲏⲣⲓ)',
          correctAnswer: 'ϣ ⲏ ⲣ ⲓ',
          wordBank: ['ϣ', 'ⲏ', 'ⲣ', 'ⲓ'],
          explanation: 'ϣⲏⲣⲓ (shiri) means "son" or "child"'
        }
      ]
    },
    {
      id: 'lesson-1-6',
      unitId: 'unit-1',
      title: 'Demotic Letters (Part 2)',
      description: 'Learn Ϫ, Ϭ, Ϯ - Complete the alphabet',
      order: 6,
      xpReward: 15,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-1-6-1',
          type: 'multiple_choice',
          question: 'What sound does Ϫ (Janja) make?',
          questionCoptic: 'Ϫ',
          correctAnswer: 'j (as in judge)',
          options: ['j (as in judge)', 'zh', 'ch', 'sh'],
          explanation: 'Ϫ (Janja) makes the "j" sound as in "judge"'
        },
        {
          id: 'ex-1-6-2',
          type: 'multiple_choice',
          question: 'What sound does Ϭ (Chima) make?',
          questionCoptic: 'Ϭ',
          correctAnswer: 'ch (as in church)',
          options: ['ch (as in church)', 'sh', 'k', 'j'],
          explanation: 'Ϭ (Chima) makes the "ch" sound as in "church"'
        },
        {
          id: 'ex-1-6-3',
          type: 'multiple_choice',
          question: 'What sound does Ϯ (Ti) make?',
          questionCoptic: 'Ϯ',
          correctAnswer: 'ti/di',
          options: ['ti/di', 't', 'i', 'd'],
          explanation: 'Ϯ (Ti) makes the "ti" or "di" sound'
        },
        {
          id: 'ex-1-6-4',
          type: 'matching',
          question: 'Match final Demotic letters',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'Ϫ', english: 'j' },
            { coptic: 'Ϭ', english: 'ch' },
            { coptic: 'Ϯ', english: 'ti' }
          ]
        },
        {
          id: 'ex-1-6-5',
          type: 'translation',
          question: 'What does Ϯ mean when used as a verb?',
          questionCoptic: 'Ϯ',
          correctAnswer: 'give',
          options: ['give', 'take', 'go', 'come'],
          explanation: 'Ϯ can be the verb "give" as well as a letter!'
        },
        {
          id: 'ex-1-6-6',
          type: 'multiple_choice',
          question: 'What does ϫⲱ mean?',
          questionCoptic: 'ϫⲱ',
          correctAnswer: 'say/speak',
          options: ['say/speak', 'hear', 'see', 'write'],
          explanation: 'ϫⲱ (jo) means "say" or "speak"'
        },
        {
          id: 'ex-1-6-7',
          type: 'fill_blank',
          question: 'The letter ___ makes the "ch" sound',
          correctAnswer: 'Ϭ',
          options: ['Ϫ', 'Ϭ', 'Ϯ', 'Ϣ'],
          explanation: 'Ϭ (Chima) makes "ch" as in "church"'
        },
        {
          id: 'ex-1-6-8',
          type: 'multiple_choice',
          question: 'How many letters are in the complete Coptic alphabet?',
          correctAnswer: '32',
          options: ['24', '28', '32', '36'],
          explanation: 'The Coptic alphabet has 32 letters: 24 from Greek + 7 from Demotic + letter Ϯ'
        }
      ]
    }
  ]
};

export default unit1;
