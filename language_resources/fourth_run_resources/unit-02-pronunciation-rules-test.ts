import { Lesson } from '../../types';

// UNIT 2 TEST: PRONUNCIATION RULES
// Comprehensive test covering all 5 lessons in Unit 2
// Tests knowledge of Iota, Gamma, Upsilon, Delta/Theta, and Kappa pronunciation

const unit2Test: Lesson = {
  id: 'test-2',
  unitId: 'unit-2',
  title: 'Unit 2 Test: Pronunciation Rules',
  description: 'Comprehensive test of Bohairic pronunciation patterns',
  order: 6,
  xpReward: 50,
  isLocked: true,
  completed: false,
  exercises: [
    // Iota (Ⲓ) Rules
    {
      id: 'test-2-1',
      type: 'multiple_choice',
      question: 'In ⲓⲱⲧ (father), the initial Ⲓ is pronounced as?',
      correctAnswer: 'Consonantal "y" (yot)',
      options: ['Consonantal "y" (yot)', 'Vocalic "i"', 'Silent', 'Like "j"'],
      explanation: 'Initial Ⲓ before a vowel is consonantal: ⲓⲱⲧ = "yot"'
    },
    {
      id: 'test-2-2',
      type: 'translation',
      question: 'How is ϩⲓ (house) pronounced?',
      questionCoptic: 'ϩⲓ',
      correctAnswer: 'hi',
      options: ['hi', 'hy', 'hey', 'hee'],
      explanation: 'Final Ⲓ after consonant is vocalic: ϩⲓ = "hi"'
    },
    {
      id: 'test-2-3',
      type: 'matching',
      question: 'Match Iota pronunciation patterns',
      correctAnswer: 'matched',
      pairs: [
        { coptic: 'ⲓⲱⲧ (initial)', english: 'Consonantal "y"' },
        { coptic: 'ϩⲓ (final)', english: 'Vocalic "i"' },
        { coptic: 'ϣⲏⲣⲓ (final)', english: 'Vocalic "i"' },
        { coptic: 'ⲥⲱⲛⲓ (final)', english: 'Vocalic "i"' }
      ]
    },
    // Gamma (Ⲅ) Rules
    {
      id: 'test-2-4',
      type: 'multiple_choice',
      question: 'How is Ⲅ pronounced in ⲅⲁⲣ (for)?',
      correctAnswer: 'Hard "g" (gar)',
      options: ['Hard "g" (gar)', 'Soft "gh" (ghar)', 'Like "j"', 'Silent'],
      explanation: 'Ⲅ before back vowel ⲁ is hard: ⲅⲁⲣ = "gar"'
    },
    {
      id: 'test-2-5',
      type: 'translation',
      question: 'Pronounce: ⲗⲟⲅⲟⲥ (word)',
      questionCoptic: 'ⲗⲟⲅⲟⲥ',
      correctAnswer: 'logos',
      options: ['logos', 'loghos', 'lojos', 'losos'],
      explanation: 'ⲗⲟⲅⲟⲥ (Greek λόγος) = "logos" with hard "g"'
    },
    {
      id: 'test-2-6',
      type: 'matching',
      question: 'Match Gamma words with pronunciation',
      correctAnswer: 'matched',
      pairs: [
        { coptic: 'ⲅⲁⲣ', english: 'gar (hard g)' },
        { coptic: 'ⲅⲱⲙ', english: 'gōm (hard g)' },
        { coptic: 'ⲁⲅⲁⲑⲟⲥ', english: 'agathos (hard g)' },
        { coptic: 'ⲁⲅⲅⲉⲗⲟⲥ', english: 'angelos (soft gh/g)' }
      ]
    },
    // Upsilon (Ⲩ) Rules
    {
      id: 'test-2-7',
      type: 'translation',
      question: 'How is ⲟⲩϫⲁⲓ (greetings) pronounced?',
      questionCoptic: 'ⲟⲩϫⲁⲓ',
      correctAnswer: 'oujai',
      options: ['oujai', 'oyjai', 'ovjai', 'ujai'],
      explanation: 'ⲟⲩϫⲁⲓ = "oujai" (ⲟⲩ = "ou/oo" sound)'
    },
    {
      id: 'test-2-8',
      type: 'multiple_choice',
      question: 'What sound does ⲟⲩ make in Coptic?',
      correctAnswer: '"oo" in "food" or "ou" in "soup"',
      options: ['"oo" in "food" or "ou" in "soup"', '"ow" in "cow"', '"oy" in "boy"', '"ov" in "love"'],
      explanation: 'ⲟⲩ = long "u" sound, similar to "oo" or "ou"'
    },
    {
      id: 'test-2-9',
      type: 'matching',
      question: 'Match Upsilon words',
      correctAnswer: 'matched',
      pairs: [
        { coptic: 'ⲟⲩϫⲁⲓ', english: 'oujai' },
        { coptic: 'ⲙⲁⲩ', english: 'mau' },
        { coptic: 'ⲟⲩⲱⲙ', english: 'ouōm' },
        { coptic: 'ⲛⲟⲩⲃ', english: 'noub' }
      ]
    },
    // Delta (Ⲇ) and Theta (Ⲑ) Distinctions
    {
      id: 'test-2-10',
      type: 'multiple_choice',
      question: 'How is Ⲇ (Delta) pronounced?',
      correctAnswer: 'Like "d" in "dog"',
      options: ['Like "d" in "dog"', 'Like "th" in "thin"', 'Like "t" in "top"', 'Like "dh" in "this"'],
      explanation: 'Ⲇ (Delta) = simple "d" sound'
    },
    {
      id: 'test-2-11',
      type: 'multiple_choice',
      question: 'How is Ⲑ (Theta) pronounced?',
      correctAnswer: 'Like "th" in "thin"',
      options: ['Like "th" in "thin"', 'Like "d" in "dog"', 'Like "t" in "top"', 'Like "th" in "this"'],
      explanation: 'Ⲑ (Theta) = voiceless "th", like English "thin"'
    },
    {
      id: 'test-2-12',
      type: 'translation',
      question: 'How is Ⲇⲁⲩⲓⲇ (David) pronounced?',
      questionCoptic: 'Ⲇⲁⲩⲓⲇ',
      correctAnswer: 'Dawid',
      options: ['Dawid', 'Thawith', 'Tavit', 'Dhavid'],
      explanation: 'Ⲇⲁⲩⲓⲇ = "Dawid" (Ⲇ = "d")'
    },
    {
      id: 'test-2-13',
      type: 'translation',
      question: 'How is ⲑⲉⲟⲥ (god) pronounced?',
      questionCoptic: 'ⲑⲉⲟⲥ',
      correctAnswer: 'Theos',
      options: ['Theos', 'Deos', 'Teos', 'Seos'],
      explanation: 'ⲑⲉⲟⲥ = "Theos" (Greek θεός, Ⲑ = "th")'
    },
    {
      id: 'test-2-14',
      type: 'matching',
      question: 'Match Delta vs Theta words',
      correctAnswer: 'matched',
      pairs: [
        { coptic: 'Ⲇⲁⲩⲓⲇ (David)', english: 'Delta "d"' },
        { coptic: 'ⲑⲉⲟⲥ (god)', english: 'Theta "th"' },
        { coptic: 'ⲙⲁⲑⲏⲧⲏⲥ (disciple)', english: 'Theta "th"' },
        { coptic: 'ⲇⲟⲝⲁ (glory)', english: 'Delta "d"' }
      ]
    },
    // Kappa (Ⲕ) in Greek Loanwords
    {
      id: 'test-2-15',
      type: 'translation',
      question: 'How is ⲕⲟⲥⲙⲟⲥ (world) pronounced?',
      questionCoptic: 'ⲕⲟⲥⲙⲟⲥ',
      correctAnswer: 'kosmos',
      options: ['kosmos', 'chosmos', 'gosmos', 'xosmos'],
      explanation: 'ⲕⲟⲥⲙⲟⲥ = "kosmos" (Greek κόσμος, Ⲕ = "k")'
    },
    {
      id: 'test-2-16',
      type: 'multiple_choice',
      question: 'Is Ⲕ (Kappa) ever softened to "g"?',
      correctAnswer: 'No, always hard "k"',
      options: ['No, always hard "k"', 'Yes, before vowels', 'Yes, in loanwords', 'Sometimes'],
      explanation: 'Ⲕ is always pronounced as hard "k", never softened'
    },
    {
      id: 'test-2-17',
      type: 'matching',
      question: 'Match Kappa words with pronunciation',
      correctAnswer: 'matched',
      pairs: [
        { coptic: 'ⲕⲟⲥⲙⲟⲥ', english: 'kosmos' },
        { coptic: 'ⲕⲁⲣⲇⲓⲁ', english: 'kardia' },
        { coptic: 'ⲕⲩⲣⲓⲟⲥ', english: 'kurios' },
        { coptic: 'ⲕⲁⲧⲁ', english: 'kata' }
      ]
    },
    // Comprehensive Pronunciation Review
    {
      id: 'test-2-18',
      type: 'sentence_building',
      question: 'Build the pronunciation: "agathos" (good)',
      correctAnswer: 'ⲁⲅⲁⲑⲟⲥ',
      wordBank: ['ⲁ', 'ⲅⲁ', 'ⲑⲟⲥ', 'ⲁⲅⲁⲑⲟⲥ', 'ⲁⲅⲁⲇⲟⲥ'],
      explanation: 'ⲁⲅⲁⲑⲟⲥ = "agathos" (hard "g", "th" sound)'
    },
    {
      id: 'test-2-19',
      type: 'fill_blank',
      question: 'Coptic Ⲕ vs Ⲭ (Chi): Ⲕ = ___, Ⲭ = ___',
      correctAnswer: '"k", "kh/ch"',
      options: ['"k", "kh/ch"', '"g", "k"', '"c", "x"', 'No difference'],
      explanation: 'Ⲕ is plain "k", Ⲭ (Chi) is aspirated "kh" or guttural "ch"'
    },
    {
      id: 'test-2-20',
      type: 'multiple_choice',
      question: 'Which letter makes the "sh" sound?',
      correctAnswer: 'Ϣ (Shai)',
      options: ['Ϣ (Shai)', 'Ⲥ (Sima)', 'Ϭ (Chima)', 'Ϫ (Janja)'],
      explanation: 'Ϣ (Shai) makes the "sh" sound'
    },
    // Advanced Pronunciation
    {
      id: 'test-2-21',
      type: 'translation',
      question: 'Translate and pronounce: ⲙⲁⲣⲧⲩⲣⲟⲥ',
      questionCoptic: 'ⲙⲁⲣⲧⲩⲣⲟⲥ',
      correctAnswer: 'marturos (martyr)',
      options: ['marturos (martyr)', 'martyros', 'martirios', 'martryos'],
      explanation: 'ⲙⲁⲣⲧⲩⲣⲟⲥ = "marturos" (martyr), Ⲩ = "u"'
    },
    {
      id: 'test-2-22',
      type: 'multiple_choice',
      question: 'General rule: Ⲓ at the END of a word is usually?',
      correctAnswer: 'Vocalic (vowel "i")',
      options: ['Vocalic (vowel "i")', 'Consonantal ("y")', 'Silent', 'Variable'],
      explanation: 'Final Ⲓ is typically vocalic, pronounced as "i"'
    },
    {
      id: 'test-2-23',
      type: 'matching',
      question: 'Match complex pronunciation examples',
      correctAnswer: 'matched',
      pairs: [
        { coptic: 'ⲉⲕⲕⲗⲏⲥⲓⲁ', english: 'ekklēsia (church)' },
        { coptic: 'ⲙⲁⲑⲏⲧⲏⲥ', english: 'mathētēs (disciple)' },
        { coptic: 'ⲕⲩⲣⲓⲁⲕⲏ', english: 'kuriakē (Sunday)' },
        { coptic: 'ⲓⲉⲣⲟ', english: 'yero (river)' }
      ]
    },
    {
      id: 'test-2-24',
      type: 'fill_blank',
      question: 'Before back vowels (ⲁ, ⲟ, ⲱ), Ⲅ is pronounced?',
      correctAnswer: 'Hard "g"',
      options: ['Hard "g"', 'Soft "gh"', 'Silent', 'Like "j"'],
      explanation: 'Ⲅ + back vowels (ⲁ, ⲟ, ⲱ) = hard "g" sound'
    },
    {
      id: 'test-2-25',
      type: 'multiple_choice',
      question: 'In Greek loanwords, how is Ⲅ usually pronounced?',
      correctAnswer: 'As in Greek (often hard "g")',
      options: ['As in Greek (often hard "g")', 'Always soft "gh"', 'Always hard "g"', 'Silent'],
      explanation: 'Greek loanwords maintain Greek pronunciation'
    }
  ]
};

export default unit2Test;
