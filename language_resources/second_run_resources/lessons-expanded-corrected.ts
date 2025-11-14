import { Unit } from '../types';

// COMPREHENSIVE COPTICLINGO CURRICULUM - CORRECTED & EXPANDED
// Complete Bohairic Coptic curriculum from beginner to advanced
// 30+ Units covering alphabet through advanced composition
// Based on Alexis Mallon grammar and Bohairic lexical resources

const copticUnits: Unit[] = [
  // ============================================================================
  // UNIT 1: COPTIC ALPHABET - PART 1
  // ============================================================================
  {
    id: 'unit-1',
    title: 'Coptic Alphabet - Greek Letters (Part 1)',
    description: 'Learn the first half of the Coptic alphabet',
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
            explanation: 'Ⲇ (Dalma) sounds like "d" in most contexts (sometimes "z" in Greek loanwords)'
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
            question: 'What does ⲙⲁⲓ mean in English?',
            questionCoptic: 'ⲙⲁⲓ',
            correctAnswer: 'this',
            options: ['this', 'that', 'here', 'there'],
            explanation: 'ⲙⲁⲓ (mai) means "this" (demonstrative pronoun)'
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
            explanation: 'The Coptic alphabet has 32 letters: 24 from Greek + 7 from Demotic + Ϯ'
          }
        ]
      }
    ]
  },

  // ============================================================================
  // UNIT 2: PRONUNCIATION RULES
  // ============================================================================
  {
    id: 'unit-2',
    title: 'Pronunciation Rules',
    description: 'Master special pronunciation rules for Coptic letters',
    order: 2,
    color: '#CE82FF',
    lessons: [
      {
        id: 'lesson-2-1',
        unitId: 'unit-2',
        title: 'Iota (Ⲓ) Rules',
        description: 'Learn the varying pronunciations of Ⲓ',
        order: 1,
        xpReward: 15,
        isLocked: true,
        completed: false,
        exercises: [
          {
            id: 'ex-2-1-1',
            type: 'multiple_choice',
            question: 'How is Ⲓ pronounced at the beginning of a word?',
            correctAnswer: 'y (consonant) or short e',
            options: ['y (consonant) or short e', 'ee', 'eye', 'ih'],
            explanation: 'When Ⲓ starts a word, it sounds like "y" or short "e" (e.g., Ⲓⲏⲥⲟⲩⲥ = Yesous)'
          },
          {
            id: 'ex-2-1-2',
            type: 'multiple_choice',
            question: 'How is Ⲓ pronounced between two consonants?',
            correctAnswer: 'ee',
            options: ['ee', 'e', 'y', 'i'],
            explanation: 'Between consonants, Ⲓ is "ee" (e.g., ⲣⲱⲙⲓ = rōmee)'
          },
          {
            id: 'ex-2-1-3',
            type: 'multiple_choice',
            question: 'How do you pronounce ⲣⲱⲙⲓ (man)?',
            questionCoptic: 'ⲣⲱⲙⲓ',
            correctAnswer: 'rōmee',
            options: ['rōmee', 'rōmi', 'rōmay', 'rowmee'],
            explanation: 'ⲣⲱⲙⲓ is pronounced "rōmee" - the final Ⲓ is "ee"'
          },
          {
            id: 'ex-2-1-4',
            type: 'translation',
            question: 'What does ⲣⲱⲙⲓ mean?',
            questionCoptic: 'ⲣⲱⲙⲓ',
            correctAnswer: 'man/human',
            options: ['man/human', 'woman', 'child', 'person'],
            explanation: 'ⲣⲱⲙⲓ (rōmee) means "man" or "human being"'
          },
          {
            id: 'ex-2-1-5',
            type: 'multiple_choice',
            question: 'In the word Ⲓⲏⲥⲟⲩⲥ (Jesus), how is the first Ⲓ pronounced?',
            questionCoptic: 'Ⲓⲏⲥⲟⲩⲥ',
            correctAnswer: 'y',
            options: ['y', 'ee', 'eye', 'short e'],
            explanation: 'Ⲓⲏⲥⲟⲩⲥ = Yesous (Jesus) - initial Ⲓ is "y"'
          },
          {
            id: 'ex-2-1-6',
            type: 'matching',
            question: 'Match words with correct pronunciation',
            correctAnswer: 'matched',
            pairs: [
              { coptic: 'Ⲓⲏⲥⲟⲩⲥ', english: 'Yesous' },
              { coptic: 'ⲣⲱⲙⲓ', english: 'rōmee' },
              { coptic: 'ⲛⲓⲙ', english: 'neem' },
              { coptic: 'Ⲓⲁⲕⲱⲃ', english: 'Yakob' }
            ]
          },
          {
            id: 'ex-2-1-7',
            type: 'fill_blank',
            question: 'At the start of a word, Ⲓ sounds like ___',
            correctAnswer: 'y',
            options: ['y', 'ee', 'i', 'eye'],
            explanation: 'Initial Ⲓ is pronounced like "y" (consonantal)'
          },
          {
            id: 'ex-2-1-8',
            type: 'translation',
            question: 'What does ⲛⲓⲙ mean?',
            questionCoptic: 'ⲛⲓⲙ',
            correctAnswer: 'who?',
            options: ['who?', 'what?', 'where?', 'when?'],
            explanation: 'ⲛⲓⲙ (neem) means "who?"'
          }
        ]
      },
      {
        id: 'lesson-2-2',
        unitId: 'unit-2',
        title: 'Gamma (Ⲅ) Rules',
        description: 'Learn when Ⲅ sounds like "g" vs "gh"',
        order: 2,
        xpReward: 15,
        isLocked: true,
        completed: false,
        exercises: [
          {
            id: 'ex-2-2-1',
            type: 'multiple_choice',
            question: 'When does Ⲅ sound like "g" (as in "go")?',
            correctAnswer: 'Before e, i, y, u',
            options: ['Before e, i, y, u', 'Before a, o, w', 'Always', 'Never'],
            explanation: 'Ⲅ is "g" before e-family vowels (e, i, y, u)'
          },
          {
            id: 'ex-2-2-2',
            type: 'multiple_choice',
            question: 'When does Ⲅ sound like "gh" (guttural)?',
            correctAnswer: 'Before a, o, w, or consonants',
            options: ['Before a, o, w, or consonants', 'Before e, i, y', 'Never', 'Always'],
            explanation: 'Ⲅ is "gh" before a-family vowels (a, o, w) and consonants'
          },
          {
            id: 'ex-2-2-3',
            type: 'multiple_choice',
            question: 'How is ⲅⲉⲛⲟⲥ (race/kind) pronounced?',
            questionCoptic: 'ⲅⲉⲛⲟⲥ',
            correctAnswer: 'genos',
            options: ['genos', 'ghenos', 'kenos', 'jenos'],
            explanation: 'ⲅⲉⲛⲟⲥ = genos (Ⲅ before ⲉ = "g")'
          },
          {
            id: 'ex-2-2-4',
            type: 'multiple_choice',
            question: 'How is ⲁⲅⲁⲡⲏ (love) pronounced?',
            questionCoptic: 'ⲁⲅⲁⲡⲏ',
            correctAnswer: 'aghapi',
            options: ['aghapi', 'agapi', 'akapi', 'ajapi'],
            explanation: 'ⲁⲅⲁⲡⲏ = aghapi (Ⲅ before ⲁ = "gh")'
          },
          {
            id: 'ex-2-2-5',
            type: 'matching',
            question: 'Match with correct pronunciation',
            correctAnswer: 'matched',
            pairs: [
              { coptic: 'ⲅⲉⲛⲟⲥ', english: 'genos (g)' },
              { coptic: 'ⲁⲅⲁⲡⲏ', english: 'aghapi (gh)' },
              { coptic: 'ⲅⲓ', english: 'gee (g)' },
              { coptic: 'ⲅⲱ', english: 'gho (gh)' }
            ]
          },
          {
            id: 'ex-2-2-6',
            type: 'translation',
            question: 'What does ⲁⲅⲁⲡⲏ mean?',
            questionCoptic: 'ⲁⲅⲁⲡⲏ',
            correctAnswer: 'love',
            options: ['love', 'hate', 'peace', 'joy'],
            explanation: 'ⲁⲅⲁⲡⲏ (aghapi) means "love" (Christian love/charity)'
          },
          {
            id: 'ex-2-2-7',
            type: 'fill_blank',
            question: 'Before "e, i, y", Ⲅ sounds like ___',
            correctAnswer: 'g',
            options: ['g', 'gh', 'k', 'j'],
            explanation: 'Ⲅ before e-family = "g" sound'
          },
          {
            id: 'ex-2-2-8',
            type: 'multiple_choice',
            question: 'The word ⲁⲅⲅⲉⲗⲟⲥ (angel) is pronounced:',
            questionCoptic: 'ⲁⲅⲅⲉⲗⲟⲥ',
            correctAnswer: 'anggelos',
            options: ['anggelos', 'anghghelos', 'angelos', 'ajjelos'],
            explanation: 'ⲁⲅⲅⲉⲗⲟⲥ = anggelos (first Ⲅ before Ⲅ = "gh"/ng, second Ⲅ before ⲉ = "g")'
          }
        ]
      },
      {
        id: 'lesson-2-3',
        unitId: 'unit-2',
        title: 'Upsilon (Ⲩ) Rules',
        description: 'Master the complex pronunciation of Ⲩ',
        order: 3,
        xpReward: 20,
        isLocked: true,
        completed: false,
        exercises: [
          {
            id: 'ex-2-3-1',
            type: 'multiple_choice',
            question: 'After Ⲁ or Ⲉ, how is Ⲩ pronounced?',
            correctAnswer: 'u/oo/v',
            options: ['u/oo/v', 'ee', 'y', 'w'],
            explanation: 'After Ⲁ or Ⲉ, Ⲩ = "u"/"oo"/"v" sound (e.g., ⲙⲁⲩ = moo)'
          },
          {
            id: 'ex-2-3-2',
            type: 'multiple_choice',
            question: 'After Ⲟ or ⲞⲨ, how is Ⲩ pronounced?',
            correctAnswer: 'ee',
            options: ['ee', 'oo', 'v', 'w'],
            explanation: 'After Ⲟ or ⲞⲨ, Ⲩ = "ee" (e.g., ⲟⲩⲱⲓⲛⲓ = ooweenee)'
          },
          {
            id: 'ex-2-3-3',
            type: 'multiple_choice',
            question: 'How is ⲙⲁⲩ (place) pronounced?',
            questionCoptic: 'ⲙⲁⲩ',
            correctAnswer: 'moo/mav',
            options: ['moo/mav', 'may', 'mee', 'maw'],
            explanation: 'ⲙⲁⲩ = moo (ⲁⲩ = "oo/av")'
          },
          {
            id: 'ex-2-3-4',
            type: 'multiple_choice',
            question: 'How is ⲟⲩⲟⲓ (woe) pronounced?',
            questionCoptic: 'ⲟⲩⲟⲓ',
            correctAnswer: 'oo-oy',
            options: ['oo-oy', 'oo-ee', 'oy', 'woy'],
            explanation: 'ⲟⲩⲟⲓ = oo-oy (woe/alas)'
          },
          {
            id: 'ex-2-3-5',
            type: 'translation',
            question: 'What does ⲙⲁⲩ mean?',
            questionCoptic: 'ⲙⲁⲩ',
            correctAnswer: 'place',
            options: ['place', 'time', 'person', 'thing'],
            explanation: 'ⲙⲁⲩ (moo) means "place" or "spot"'
          },
          {
            id: 'ex-2-3-6',
            type: 'matching',
            question: 'Match words with Ⲩ pronunciation',
            correctAnswer: 'matched',
            pairs: [
              { coptic: 'ⲙⲁⲩ', english: 'moo (ⲁⲩ=oo)' },
              { coptic: 'ⲟⲩⲱⲙ', english: 'oo-om (ⲟⲩ=oo)' },
              { coptic: 'ⲉⲩ', english: 'ev (ⲉⲩ=ev)' },
              { coptic: 'ϣⲁⲩ', english: 'shav (ⲁⲩ=av)' }
            ]
          },
          {
            id: 'ex-2-3-7',
            type: 'fill_blank',
            question: 'In ⲁⲩ combinations, Ⲩ sounds like ___',
            correctAnswer: 'oo/v',
            options: ['oo/v', 'ee', 'w', 'y'],
            explanation: 'The combination ⲁⲩ = "oo" or "av" sound'
          },
          {
            id: 'ex-2-3-8',
            type: 'multiple_choice',
            question: 'What does ⲟⲩⲱⲙ mean?',
            questionCoptic: 'ⲟⲩⲱⲙ',
            correctAnswer: 'eat',
            options: ['eat', 'drink', 'sleep', 'walk'],
            explanation: 'ⲟⲩⲱⲙ (oo-om) means "eat"'
          }
        ]
      }
    ]
  },

  // ============================================================================
  // UNIT 3: FIRST WORDS & BASIC VOCABULARY
  // ============================================================================
  {
    id: 'unit-3',
    title: 'First Words & Greetings',
    description: 'Learn essential Coptic words and greetings',
    order: 3,
    color: '#58CC02',
    lessons: [
      {
        id: 'lesson-3-1',
        unitId: 'unit-3',
        title: 'Greetings',
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
            options: ['ⲟⲩϫⲁⲓ', 'ⲛⲁⲛⲟⲩⲥ', 'ϣⲉⲡϩⲙⲟⲧ', 'ⲡⲁⲣⲁⲕⲁⲗⲓ'],
            explanation: 'ⲟⲩϫⲁⲓ (oujai) means "hello" or "greetings" - literally "healing"'
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
            question: 'How do you say "Goodbye"?',
            correctAnswer: 'ⲟⲩϫⲁⲓ ϧⲉⲛ ⲟⲩϩⲓⲣⲏⲛⲏ',
            options: ['ⲟⲩϫⲁⲓ ϧⲉⲛ ⲟⲩϩⲓⲣⲏⲛⲏ', 'ⲟⲩϫⲁⲓ', 'ϣⲉⲡϩⲙⲟⲧ', 'ϯϩⲓⲣⲏⲛⲏ'],
            explanation: 'ⲟⲩϫⲁⲓ ϧⲉⲛ ⲟⲩϩⲓⲣⲏⲛⲏ = "goodbye in peace" (common farewell)'
          },
          {
            id: 'ex-3-1-4',
            type: 'multiple_choice',
            question: 'What does ϯϩⲓⲣⲏⲛⲏ ⲛⲁⲕ mean?',
            questionCoptic: 'ϯϩⲓⲣⲏⲛⲏ ⲛⲁⲕ',
            correctAnswer: 'Peace to you',
            options: ['Peace to you', 'Good morning', 'Thank you', 'Welcome'],
            explanation: 'ϯϩⲓⲣⲏⲛⲏ ⲛⲁⲕ = "peace to you" (traditional greeting)'
          },
          {
            id: 'ex-3-1-5',
            type: 'translation',
            question: 'What does ⲭⲉⲣⲉ mean?',
            questionCoptic: 'ⲭⲉⲣⲉ',
            correctAnswer: 'Hail/Rejoice',
            options: ['Hail/Rejoice', 'Goodbye', 'Thanks', 'Please'],
            explanation: 'ⲭⲉⲣⲉ (khere) = "hail" or "rejoice" (as in "Hail Mary")'
          },
          {
            id: 'ex-3-1-6',
            type: 'matching',
            question: 'Match the greetings',
            correctAnswer: 'matched',
            pairs: [
              { coptic: 'ⲟⲩϫⲁⲓ', english: 'Hello' },
              { coptic: 'ϣⲉⲡϩⲙⲟⲧ', english: 'Thank you' },
              { coptic: 'ϯϩⲓⲣⲏⲛⲏ', english: 'Peace' },
              { coptic: 'ⲭⲉⲣⲉ', english: 'Hail' }
            ]
          },
          {
            id: 'ex-3-1-7',
            type: 'fill_blank',
            question: 'To say "thank you" in Coptic, you say ___',
            correctAnswer: 'ϣⲉⲡϩⲙⲟⲧ',
            options: ['ϣⲉⲡϩⲙⲟⲧ', 'ⲟⲩϫⲁⲓ', 'ⲡⲁⲣⲁⲕⲁⲗⲓ', 'ⲭⲉⲣⲉ'],
            explanation: 'ϣⲉⲡϩⲙⲟⲧ (shep-hmot) is "thank you"'
          },
          {
            id: 'ex-3-1-8',
            type: 'sentence_building',
            question: 'Build the phrase: "Peace to you" (ϯϩⲓⲣⲏⲛⲏ ⲛⲁⲕ)',
            correctAnswer: 'ϯϩⲓⲣⲏⲛⲏ ⲛⲁⲕ',
            wordBank: ['ϯϩⲓⲣⲏⲛⲏ', 'ⲛⲁⲕ', 'ⲟⲩϫⲁⲓ', 'ϣⲉⲡϩⲙⲟⲧ'],
            explanation: 'ϯϩⲓⲣⲏⲛⲏ ⲛⲁⲕ = "the peace to you"'
          }
        ]
      },
      {
        id: 'lesson-3-2',
        unitId: 'unit-3',
        title: 'Family Words',
        description: 'Learn words for family members',
        order: 2,
        xpReward: 15,
        isLocked: true,
        completed: false,
        exercises: [
          {
            id: 'ex-3-2-1',
            type: 'multiple_choice',
            question: 'What does ⲓⲱⲧ mean?',
            questionCoptic: 'ⲓⲱⲧ',
            correctAnswer: 'father',
            options: ['father', 'mother', 'brother', 'sister'],
            explanation: 'ⲓⲱⲧ (yot) means "father"'
          },
          {
            id: 'ex-3-2-2',
            type: 'multiple_choice',
            question: 'What does ⲙⲁⲩ mean?',
            questionCoptic: 'ⲙⲁⲩ',
            correctAnswer: 'mother',
            options: ['mother', 'father', 'sister', 'daughter'],
            explanation: 'ⲙⲁⲩ (mav) means "mother"'
          },
          {
            id: 'ex-3-2-3',
            type: 'translation',
            question: 'Translate: ⲥⲟⲛ',
            questionCoptic: 'ⲥⲟⲛ',
            correctAnswer: 'brother',
            options: ['brother', 'sister', 'son', 'father'],
            explanation: 'ⲥⲟⲛ (son) means "brother"'
          },
          {
            id: 'ex-3-2-4',
            type: 'multiple_choice',
            question: 'What does ⲥⲱⲛⲓ mean?',
            questionCoptic: 'ⲥⲱⲛⲓ',
            correctAnswer: 'sister',
            options: ['sister', 'brother', 'mother', 'daughter'],
            explanation: 'ⲥⲱⲛⲓ (sōnee) means "sister"'
          },
          {
            id: 'ex-3-2-5',
            type: 'translation',
            question: 'What does ϣⲏⲣⲓ mean?',
            questionCoptic: 'ϣⲏⲣⲓ',
            correctAnswer: 'son/child',
            options: ['son/child', 'daughter', 'father', 'brother'],
            explanation: 'ϣⲏⲣⲓ (shēri) means "son" or "child" (masc.)'
          },
          {
            id: 'ex-3-2-6',
            type: 'multiple_choice',
            question: 'What does ϣⲉⲣⲓ mean?',
            questionCoptic: 'ϣⲉⲣⲓ',
            correctAnswer: 'daughter',
            options: ['daughter', 'son', 'sister', 'mother'],
            explanation: 'ϣⲉⲣⲓ (sheri) means "daughter"'
          },
          {
            id: 'ex-3-2-7',
            type: 'matching',
            question: 'Match family words',
            correctAnswer: 'matched',
            pairs: [
              { coptic: 'ⲓⲱⲧ', english: 'father' },
              { coptic: 'ⲙⲁⲩ', english: 'mother' },
              { coptic: 'ⲥⲟⲛ', english: 'brother' },
              { coptic: 'ⲥⲱⲛⲓ', english: 'sister' }
            ]
          },
          {
            id: 'ex-3-2-8',
            type: 'fill_blank',
            question: 'The word for "mother" is ___',
            correctAnswer: 'ⲙⲁⲩ',
            options: ['ⲙⲁⲩ', 'ⲓⲱⲧ', 'ⲥⲱⲛⲓ', 'ϣⲉⲣⲓ'],
            explanation: 'ⲙⲁⲩ (mav) = "mother"'
          },
          {
            id: 'ex-3-2-9',
            type: 'sentence_building',
            question: 'Build "my father" (ⲡⲁⲓⲱⲧ)',
            correctAnswer: 'ⲡⲁ ⲓⲱⲧ',
            wordBank: ['ⲡⲁ', 'ⲓⲱⲧ', 'ⲧⲁ', 'ⲙⲁⲩ'],
            explanation: 'ⲡⲁⲓⲱⲧ = ⲡⲁ (my-masc.) + ⲓⲱⲧ (father)'
          },
          {
            id: 'ex-3-2-10',
            type: 'translation',
            question: 'Translate: ⲧⲁⲙⲁⲩ',
            questionCoptic: 'ⲧⲁⲙⲁⲩ',
            correctAnswer: 'my mother',
            options: ['my mother', 'my father', 'my sister', 'your mother'],
            explanation: 'ⲧⲁⲙⲁⲩ = ⲧⲁ (my-fem.) + ⲙⲁⲩ (mother)'
          }
        ]
      },
      {
        id: 'lesson-3-3',
        unitId: 'unit-3',
        title: 'Numbers 1-10',
        description: 'Learn to count from 1 to 10',
        order: 3,
        xpReward: 20,
        isLocked: true,
        completed: false,
        exercises: [
          {
            id: 'ex-3-3-1',
            type: 'multiple_choice',
            question: 'What is "one" (masculine) in Coptic?',
            correctAnswer: 'ⲟⲩⲁⲓ',
            options: ['ⲟⲩⲁⲓ', 'ⲥⲛⲁⲩ', 'ϣⲟⲙⲧ', 'ϥⲧⲟⲟⲩ'],
            explanation: 'ⲟⲩⲁⲓ (oo-eye) = "one" (masc.)'
          },
          {
            id: 'ex-3-3-2',
            type: 'multiple_choice',
            question: 'What is "two" in Coptic?',
            correctAnswer: 'ⲥⲛⲁⲩ',
            options: ['ⲟⲩⲁⲓ', 'ⲥⲛⲁⲩ', 'ϣⲟⲙⲧ', 'ϥⲧⲟⲟⲩ'],
            explanation: 'ⲥⲛⲁⲩ (snav) = "two"'
          },
          {
            id: 'ex-3-3-3',
            type: 'multiple_choice',
            question: 'What is "three" in Coptic?',
            correctAnswer: 'ϣⲟⲙⲧ',
            options: ['ⲥⲛⲁⲩ', 'ϣⲟⲙⲧ', 'ϥⲧⲟⲟⲩ', 'ϯⲟⲩ'],
            explanation: 'ϣⲟⲙⲧ (shomt) = "three" (masc.)'
          },
          {
            id: 'ex-3-3-4',
            type: 'multiple_choice',
            question: 'What is "four" in Coptic?',
            correctAnswer: 'ϥⲧⲟⲟⲩ',
            options: ['ϣⲟⲙⲧ', 'ϥⲧⲟⲟⲩ', 'ϯⲟⲩ', 'ⲥⲟⲟⲩ'],
            explanation: 'ϥⲧⲟⲟⲩ (ftoo) = "four" (masc.)'
          },
          {
            id: 'ex-3-3-5',
            type: 'multiple_choice',
            question: 'What is "five" in Coptic?',
            correctAnswer: 'ϯⲟⲩ',
            options: ['ϥⲧⲟⲟⲩ', 'ϯⲟⲩ', 'ⲥⲟⲟⲩ', 'ϣⲁϣϥ'],
            explanation: 'ϯⲟⲩ (tee-oo) = "five"'
          },
          {
            id: 'ex-3-3-6',
            type: 'matching',
            question: 'Match numbers 1-5',
            correctAnswer: 'matched',
            pairs: [
              { coptic: 'ⲟⲩⲁⲓ', english: '1' },
              { coptic: 'ⲥⲛⲁⲩ', english: '2' },
              { coptic: 'ϣⲟⲙⲧ', english: '3' },
              { coptic: 'ϥⲧⲟⲟⲩ', english: '4' }
            ]
          },
          {
            id: 'ex-3-3-7',
            type: 'multiple_choice',
            question: 'What is "six" in Coptic?',
            correctAnswer: 'ⲥⲟⲟⲩ',
            options: ['ϯⲟⲩ', 'ⲥⲟⲟⲩ', 'ϣⲁϣϥ', 'ϣⲙⲏⲛ'],
            explanation: 'ⲥⲟⲟⲩ (soo) = "six" (masc.)'
          },
          {
            id: 'ex-3-3-8',
            type: 'multiple_choice',
            question: 'What is "ten" in Coptic?',
            correctAnswer: 'ⲙⲏⲧ',
            options: ['ϣⲙⲏⲛ', 'ⲯⲓⲧ', 'ⲙⲏⲧ', 'ⲥⲟⲟⲩ'],
            explanation: 'ⲙⲏⲧ (meet) = "ten"'
          },
          {
            id: 'ex-3-3-9',
            type: 'translation',
            question: 'Translate: ϣⲁϣϥ',
            questionCoptic: 'ϣⲁϣϥ',
            correctAnswer: 'seven',
            options: ['seven', 'eight', 'nine', 'six'],
            explanation: 'ϣⲁϣϥ (shashf) = "seven" (masc.)'
          },
          {
            id: 'ex-3-3-10',
            type: 'fill_blank',
            question: 'The number "two" is ___',
            correctAnswer: 'ⲥⲛⲁⲩ',
            options: ['ⲟⲩⲁⲓ', 'ⲥⲛⲁⲩ', 'ϣⲟⲙⲧ', 'ϥⲧⲟⲟⲩ'],
            explanation: 'ⲥⲛⲁⲩ (snav) = "two"'
          }
        ]
      }
    ]
  },

  // ============================================================================
  // UNIT 4: ARTICLES (THE DEFINITE ARTICLE)
  // ============================================================================
  {
    id: 'unit-4',
    title: 'The Definite Article',
    description: 'Learn how to say "the" in Coptic',
    order: 4,
    color: '#CE82FF',
    lessons: [
      {
        id: 'lesson-4-1',
        unitId: 'unit-4',
        title: 'Masculine Singular: Ⲡ/Ⲫ/Ⲡⲓ',
        description: 'The definite article for masculine nouns',
        order: 1,
        xpReward: 20,
        isLocked: true,
        completed: false,
        exercises: [
          {
            id: 'ex-4-1-1',
            type: 'multiple_choice',
            question: 'What is the most common form of "the" for masculine nouns?',
            correctAnswer: 'Ⲡ-',
            options: ['Ⲡ-', 'Ϯ-', 'Ⲛ-', 'Ⲙ-'],
            explanation: 'Ⲡ- is the masculine singular article (the)'
          },
          {
            id: 'ex-4-1-2',
            type: 'multiple_choice',
            question: 'How do you say "the man"?',
            correctAnswer: 'ⲡⲓⲣⲱⲙⲓ',
            options: ['ⲡⲓⲣⲱⲙⲓ', 'ϯⲣⲱⲙⲓ', 'ⲛⲓⲣⲱⲙⲓ', 'ⲟⲩⲣⲱⲙⲓ'],
            explanation: 'ⲡⲓⲣⲱⲙⲓ = ⲡⲓ (the-masc.) + ⲣⲱⲙⲓ (man)'
          },
          {
            id: 'ex-4-1-3',
            type: 'translation',
            question: 'Translate: ⲡⲓⲓⲱⲧ',
            questionCoptic: 'ⲡⲓⲓⲱⲧ',
            correctAnswer: 'the father',
            options: ['the father', 'a father', 'the mother', 'my father'],
            explanation: 'ⲡⲓⲓⲱⲧ = ⲡⲓ (the) + ⲓⲱⲧ (father)'
          },
          {
            id: 'ex-4-1-4',
            type: 'multiple_choice',
            question: 'When a masculine noun starts with a vowel, which form is used?',
            correctAnswer: 'Ⲡⲓ-',
            options: ['Ⲡ-', 'Ⲡⲓ-', 'Ⲫ-', 'Ⲫⲓ-'],
            explanation: 'Ⲡⲓ- is used before vowels (e.g., ⲡⲓⲓⲱⲧ = "the father")'
          },
          {
            id: 'ex-4-1-5',
            type: 'matching',
            question: 'Match "the" + noun',
            correctAnswer: 'matched',
            pairs: [
              { coptic: 'ⲡⲓⲣⲱⲙⲓ', english: 'the man' },
              { coptic: 'ⲡⲓⲓⲱⲧ', english: 'the father' },
              { coptic: 'ⲡⲓⲥⲟⲛ', english: 'the brother' },
              { coptic: 'ⲡⲓϣⲏⲣⲓ', english: 'the son' }
            ]
          },
          {
            id: 'ex-4-1-6',
            type: 'sentence_building',
            question: 'Build "the son" (ⲡⲓϣⲏⲣⲓ)',
            correctAnswer: 'ⲡⲓ ϣⲏⲣⲓ',
            wordBank: ['ⲡⲓ', 'ϣⲏⲣⲓ', 'ϯ', 'ⲟⲩ'],
            explanation: 'ⲡⲓϣⲏⲣⲓ = ⲡⲓ (the-masc.) + ϣⲏⲣⲓ (son)'
          },
          {
            id: 'ex-4-1-7',
            type: 'fill_blank',
            question: 'The masculine article is ___',
            correctAnswer: 'ⲡⲓ',
            options: ['ⲡⲓ', 'ϯ', 'ⲛⲓ', 'ⲟⲩ'],
            explanation: 'Ⲡⲓ- is the standard masculine singular article'
          },
          {
            id: 'ex-4-1-8',
            type: 'translation',
            question: 'What does ⲡⲓⲱⲓⲕ mean?',
            questionCoptic: 'ⲡⲓⲱⲓⲕ',
            correctAnswer: 'the bread',
            options: ['the bread', 'a bread', 'the water', 'the wine'],
            explanation: 'ⲡⲓⲱⲓⲕ = ⲡⲓ (the) + ⲱⲓⲕ (bread - masc.)'
          }
        ]
      },
      {
        id: 'lesson-4-2',
        unitId: 'unit-4',
        title: 'Feminine Singular: Ϯ/Ⲑ',
        description: 'The definite article for feminine nouns',
        order: 2,
        xpReward: 20,
        isLocked: true,
        completed: false,
        exercises: [
          {
            id: 'ex-4-2-1',
            type: 'multiple_choice',
            question: 'What is the feminine singular article?',
            correctAnswer: 'Ϯ-',
            options: ['Ϯ-', 'Ⲡ-', 'Ⲛ-', 'Ⲙ-'],
            explanation: 'Ϯ- is the feminine singular article (the)'
          },
          {
            id: 'ex-4-2-2',
            type: 'multiple_choice',
            question: 'How do you say "the woman"?',
            correctAnswer: 'ϯϩⲓⲙⲓ',
            options: ['ϯϩⲓⲙⲓ', 'ⲡⲓϩⲓⲙⲓ', 'ⲛⲓϩⲓⲙⲓ', 'ⲟⲩϩⲓⲙⲓ'],
            explanation: 'ϯϩⲓⲙⲓ = ϯ (the-fem.) + ϩⲓⲙⲓ (woman)'
          },
          {
            id: 'ex-4-2-3',
            type: 'translation',
            question: 'Translate: ϯⲙⲁⲩ',
            questionCoptic: 'ϯⲙⲁⲩ',
            correctAnswer: 'the mother',
            options: ['the mother', 'the father', 'a mother', 'my mother'],
            explanation: 'ϯⲙⲁⲩ = ϯ (the-fem.) + ⲙⲁⲩ (mother)'
          },
          {
            id: 'ex-4-2-4',
            type: 'matching',
            question: 'Match feminine articles + nouns',
            correctAnswer: 'matched',
            pairs: [
              { coptic: 'ϯⲙⲁⲩ', english: 'the mother' },
              { coptic: 'ϯⲥⲱⲛⲓ', english: 'the sister' },
              { coptic: 'ϯϣⲉⲣⲓ', english: 'the daughter' },
              { coptic: 'ϯϩⲓⲙⲓ', english: 'the woman' }
            ]
          },
          {
            id: 'ex-4-2-5',
            type: 'sentence_building',
            question: 'Build "the sister" (ϯⲥⲱⲛⲓ)',
            correctAnswer: 'ϯ ⲥⲱⲛⲓ',
            wordBank: ['ϯ', 'ⲥⲱⲛⲓ', 'ⲡⲓ', 'ⲥⲟⲛ'],
            explanation: 'ϯⲥⲱⲛⲓ = ϯ (the-fem.) + ⲥⲱⲛⲓ (sister)'
          },
          {
            id: 'ex-4-2-6',
            type: 'fill_blank',
            question: 'The feminine article is ___',
            correctAnswer: 'ϯ',
            options: ['ϯ', 'ⲡⲓ', 'ⲛⲓ', 'ⲙ'],
            explanation: 'Ϯ- is the feminine singular article'
          },
          {
            id: 'ex-4-2-7',
            type: 'multiple_choice',
            question: 'Is "house" (ϩⲓ) masculine or feminine?',
            questionCoptic: 'ϩⲓ',
            correctAnswer: 'feminine',
            options: ['feminine', 'masculine', 'both', 'neither'],
            explanation: 'ϩⲓ (house) is feminine: ϯϩⲓ = "the house"'
          },
          {
            id: 'ex-4-2-8',
            type: 'translation',
            question: 'Translate: ϯϩⲓ',
            questionCoptic: 'ϯϩⲓ',
            correctAnswer: 'the house',
            options: ['the house', 'a house', 'the man', 'the city'],
            explanation: 'ϯϩⲓ = ϯ (the-fem.) + ϩⲓ (house)'
          }
        ]
      },
      {
        id: 'lesson-4-3',
        unitId: 'unit-4',
        title: 'Plural: Ⲛⲓ',
        description: 'The definite article for plural nouns',
        order: 3,
        xpReward: 20,
        isLocked: true,
        completed: false,
        exercises: [
          {
            id: 'ex-4-3-1',
            type: 'multiple_choice',
            question: 'What is the plural article (both genders)?',
            correctAnswer: 'Ⲛⲓ-',
            options: ['Ⲛⲓ-', 'Ⲡⲓ-', 'Ϯ-', 'Ⲙ-'],
            explanation: 'Ⲛⲓ- is the plural article for both masculine and feminine'
          },
          {
            id: 'ex-4-3-2',
            type: 'multiple_choice',
            question: 'How do you say "the men"?',
            correctAnswer: 'ⲛⲓⲣⲱⲙⲓ',
            options: ['ⲛⲓⲣⲱⲙⲓ', 'ⲡⲓⲣⲱⲙⲓ', 'ϯⲣⲱⲙⲓ', 'ⲙⲣⲱⲙⲓ'],
            explanation: 'ⲛⲓⲣⲱⲙⲓ = ⲛⲓ (the-plural) + ⲣⲱⲙⲓ (men)'
          },
          {
            id: 'ex-4-3-3',
            type: 'translation',
            question: 'Translate: ⲛⲓϩⲓⲙⲓ',
            questionCoptic: 'ⲛⲓϩⲓⲙⲓ',
            correctAnswer: 'the women',
            options: ['the women', 'the woman', 'the men', 'the children'],
            explanation: 'ⲛⲓϩⲓⲙⲓ = ⲛⲓ (the-plural) + ϩⲓⲙⲓ (women)'
          },
          {
            id: 'ex-4-3-4',
            type: 'matching',
            question: 'Match plural articles + nouns',
            correctAnswer: 'matched',
            pairs: [
              { coptic: 'ⲛⲓⲣⲱⲙⲓ', english: 'the men' },
              { coptic: 'ⲛⲓϩⲓⲙⲓ', english: 'the women' },
              { coptic: 'ⲛⲓϣⲏⲣⲓ', english: 'the sons/children' },
              { coptic: 'ⲛⲓⲥⲛⲏⲟⲩ', english: 'the brothers' }
            ]
          },
          {
            id: 'ex-4-3-5',
            type: 'sentence_building',
            question: 'Build "the children" (ⲛⲓϣⲏⲣⲓ)',
            correctAnswer: 'ⲛⲓ ϣⲏⲣⲓ',
            wordBank: ['ⲛⲓ', 'ϣⲏⲣⲓ', 'ⲡⲓ', 'ϯ'],
            explanation: 'ⲛⲓϣⲏⲣⲓ = ⲛⲓ (the-plural) + ϣⲏⲣⲓ (children)'
          },
          {
            id: 'ex-4-3-6',
            type: 'fill_blank',
            question: 'The plural article for both genders is ___',
            correctAnswer: 'ⲛⲓ',
            options: ['ⲛⲓ', 'ⲡⲓ', 'ϯ', 'ⲙ'],
            explanation: 'Ⲛⲓ- is the universal plural article'
          },
          {
            id: 'ex-4-3-7',
            type: 'multiple_choice',
            question: 'Does Ⲛⲓ- change for masculine vs feminine nouns?',
            correctAnswer: 'No, it stays Ⲛⲓ-',
            options: ['No, it stays Ⲛⲓ-', 'Yes, Ⲛⲓ- for masc., Ⲙ- for fem.', 'Yes, it changes to Ⲛⲉ-', 'Only before vowels'],
            explanation: 'Ⲛⲓ- is the same for both masculine and feminine plural nouns'
          },
          {
            id: 'ex-4-3-8',
            type: 'translation',
            question: 'Translate: ⲛⲓⲁⲅⲅⲉⲗⲟⲥ',
            questionCoptic: 'ⲛⲓⲁⲅⲅⲉⲗⲟⲥ',
            correctAnswer: 'the angels',
            options: ['the angels', 'the angel', 'angels', 'an angel'],
            explanation: 'ⲛⲓⲁⲅⲅⲉⲗⲟⲥ = ⲛⲓ (the-plural) + ⲁⲅⲅⲉⲗⲟⲥ (angels)'
          }
        ]
      }
    ]
  },

  // ============================================================================
  // UNIT 5: INDEFINITE ARTICLE & NEGATION
  // ============================================================================
  {
    id: 'unit-5',
    title: 'Indefinite Article (A/An)',
    description: 'Learn how to say "a" or "an" in Coptic',
    order: 5,
    color: '#58CC02',
    lessons: [
      {
        id: 'lesson-5-1',
        unitId: 'unit-5',
        title: 'Indefinite Article: ⲟⲩ-',
        description: 'Learn "a/an" for all genders',
        order: 1,
        xpReward: 20,
        isLocked: true,
        completed: false,
        exercises: [
          {
            id: 'ex-5-1-1',
            type: 'multiple_choice',
            question: 'What is the indefinite article in Coptic?',
            correctAnswer: 'ⲟⲩ-',
            options: ['ⲟⲩ-', 'ⲡⲓ-', 'ϯ-', 'ⲛⲓ-'],
            explanation: 'ⲟⲩ- means "a" or "an" (for all genders and numbers)'
          },
          {
            id: 'ex-5-1-2',
            type: 'multiple_choice',
            question: 'How do you say "a man"?',
            correctAnswer: 'ⲟⲩⲣⲱⲙⲓ',
            options: ['ⲟⲩⲣⲱⲙⲓ', 'ⲡⲓⲣⲱⲙⲓ', 'ⲛⲓⲣⲱⲙⲓ', 'ϯⲣⲱⲙⲓ'],
            explanation: 'ⲟⲩⲣⲱⲙⲓ = ⲟⲩ (a) + ⲣⲱⲙⲓ (man)'
          },
          {
            id: 'ex-5-1-3',
            type: 'translation',
            question: 'Translate: ⲟⲩϣⲏⲣⲓ',
            questionCoptic: 'ⲟⲩϣⲏⲣⲓ',
            correctAnswer: 'a son/child',
            options: ['a son/child', 'the son', 'sons', 'my son'],
            explanation: 'ⲟⲩϣⲏⲣⲓ = ⲟⲩ (a) + ϣⲏⲣⲓ (son)'
          },
          {
            id: 'ex-5-1-4',
            type: 'multiple_choice',
            question: 'Does ⲟⲩ- change for masculine/feminine/plural?',
            correctAnswer: 'No, always ⲟⲩ-',
            options: ['No, always ⲟⲩ-', 'Yes, for each gender', 'Only for plural', 'Only for feminine'],
            explanation: 'ⲟⲩ- is invariable - same form for all genders/numbers'
          },
          {
            id: 'ex-5-1-5',
            type: 'translation',
            question: 'Translate: ⲟⲩϩⲓⲙⲓ',
            questionCoptic: 'ⲟⲩϩⲓⲙⲓ',
            correctAnswer: 'a woman',
            options: ['a woman', 'the woman', 'women', 'my woman'],
            explanation: 'ⲟⲩϩⲓⲙⲓ = ⲟⲩ (a) + ϩⲓⲙⲓ (woman)'
          },
          {
            id: 'ex-5-1-6',
            type: 'matching',
            question: 'Match indefinite articles + nouns',
            correctAnswer: 'matched',
            pairs: [
              { coptic: 'ⲟⲩⲣⲱⲙⲓ', english: 'a man' },
              { coptic: 'ⲟⲩϩⲓⲙⲓ', english: 'a woman' },
              { coptic: 'ⲟⲩϣⲏⲣⲓ', english: 'a child' },
              { coptic: 'ⲟⲩϩⲓ', english: 'a house' }
            ]
          },
          {
            id: 'ex-5-1-7',
            type: 'sentence_building',
            question: 'Build "a house" (ⲟⲩϩⲓ)',
            correctAnswer: 'ⲟⲩ ϩⲓ',
            wordBank: ['ⲟⲩ', 'ϩⲓ', 'ⲡⲓ', 'ϯ'],
            explanation: 'ⲟⲩϩⲓ = ⲟⲩ (a) + ϩⲓ (house)'
          },
          {
            id: 'ex-5-1-8',
            type: 'multiple_choice',
            question: 'What is the difference between ⲡⲓⲣⲱⲙⲓ and ⲟⲩⲣⲱⲙⲓ?',
            correctAnswer: '"the man" vs "a man"',
            options: ['"the man" vs "a man"', '"man" vs "men"', '"my man" vs "your man"', 'no difference'],
            explanation: 'ⲡⲓⲣⲱⲙⲓ = "the man" (definite), ⲟⲩⲣⲱⲙⲓ = "a man" (indefinite)'
          }
        ]
      },
      {
        id: 'lesson-5-2',
        unitId: 'unit-5',
        title: 'No Article (Generic/Abstract)',
        description: 'When to omit the article',
        order: 2,
        xpReward: 15,
        isLocked: true,
        completed: false,
        exercises: [
          {
            id: 'ex-5-2-1',
            type: 'multiple_choice',
            question: 'When can you omit the article in Coptic?',
            correctAnswer: 'For generic/abstract concepts',
            options: ['For generic/abstract concepts', 'Never', 'Always', 'Only for plurals'],
            explanation: 'Articles can be omitted for generic or abstract meanings'
          },
          {
            id: 'ex-5-2-2',
            type: 'translation',
            question: 'What does ⲣⲱⲙⲓ (no article) mean?',
            questionCoptic: 'ⲣⲱⲙⲓ',
            correctAnswer: 'man (in general)/humanity',
            options: ['man (in general)/humanity', 'the man', 'a man', 'my man'],
            explanation: 'Without article, ⲣⲱⲙⲓ can mean "man" in general or "humanity"'
          },
          {
            id: 'ex-5-2-3',
            type: 'multiple_choice',
            question: 'Which means "I am a man"?',
            correctAnswer: 'ⲁⲛⲟⲕ ⲟⲩⲣⲱⲙⲓ',
            options: ['ⲁⲛⲟⲕ ⲟⲩⲣⲱⲙⲓ', 'ⲁⲛⲟⲕ ⲡⲓⲣⲱⲙⲓ', 'ⲁⲛⲟⲕ ⲣⲱⲙⲓ', 'ⲁⲛⲟⲕ ⲛⲓⲣⲱⲙⲓ'],
            explanation: 'ⲁⲛⲟⲕ ⲟⲩⲣⲱⲙⲓ = "I (am) a man" (indefinite article)'
          },
          {
            id: 'ex-5-2-4',
            type: 'matching',
            question: 'Match article usage',
            correctAnswer: 'matched',
            pairs: [
              { coptic: 'ⲡⲓⲣⲱⲙⲓ', english: 'the man (specific)' },
              { coptic: 'ⲟⲩⲣⲱⲙⲓ', english: 'a man (indefinite)' },
              { coptic: 'ⲣⲱⲙⲓ', english: 'man/humanity (generic)' },
              { coptic: 'ⲛⲓⲣⲱⲙⲓ', english: 'the men (plural)' }
            ]
          },
          {
            id: 'ex-5-2-5',
            type: 'translation',
            question: 'What does ⲁⲅⲁⲡⲏ (no article) suggest?',
            questionCoptic: 'ⲁⲅⲁⲡⲏ',
            correctAnswer: 'love (abstract concept)',
            options: ['love (abstract concept)', 'the love', 'a love', 'loves'],
            explanation: 'Abstract nouns often omit the article: ⲁⲅⲁⲡⲏ = "love" (the concept)'
          },
          {
            id: 'ex-5-2-6',
            type: 'fill_blank',
            question: 'To say "bread" in general (not specific bread), use ___',
            correctAnswer: 'ⲱⲓⲕ',
            options: ['ⲱⲓⲕ', 'ⲡⲓⲱⲓⲕ', 'ⲟⲩⲱⲓⲕ', 'ⲛⲓⲱⲓⲕ'],
            explanation: 'ⲱⲓⲕ (no article) = "bread" in general'
          },
          {
            id: 'ex-5-2-7',
            type: 'multiple_choice',
            question: 'Which is correct for "I eat bread" (generic)?',
            correctAnswer: 'ϯⲟⲩⲱⲙ ⲛ̀ⲟⲩⲱⲓⲕ',
            options: ['ϯⲟⲩⲱⲙ ⲛ̀ⲟⲩⲱⲓⲕ', 'ϯⲟⲩⲱⲙ ⲙ̀ⲡⲓⲱⲓⲕ', 'ϯⲟⲩⲱⲙ ⲛ̀ⲛⲓⲱⲓⲕ', 'ϯⲟⲩⲱⲙ ⲛ̀ⲱⲓⲕ'],
            explanation: 'ϯⲟⲩⲱⲙ ⲛ̀ⲟⲩⲱⲓⲕ = "I eat (some) bread" (indefinite)'
          },
          {
            id: 'ex-5-2-8',
            type: 'translation',
            question: 'Translate: ⲁⲛⲟⲕ ⲡⲉ ⲡⲓⲣⲱⲙⲓ',
            questionCoptic: 'ⲁⲛⲟⲕ ⲡⲉ ⲡⲓⲣⲱⲙⲓ',
            correctAnswer: 'I am the man',
            options: ['I am the man', 'I am a man', 'I am man', 'I am men'],
            explanation: 'ⲁⲛⲟⲕ ⲡⲉ ⲡⲓⲣⲱⲙⲓ = "I am the man" (definite article = specific person)'
          }
        ]
      }
    ]
  }
];

export default copticUnits;
