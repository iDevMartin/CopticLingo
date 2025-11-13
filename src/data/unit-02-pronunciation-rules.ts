import { Unit } from '../../types';

// UNIT 2: PRONUNCIATION RULES
// Essential pronunciation patterns for Bohairic Coptic
// Based on standard Bohairic phonology

const unit2: Unit = {
  id: 'unit-2',
  title: 'Pronunciation Rules',
  description: 'Learn key pronunciation patterns in Bohairic Coptic',
  order: 2,
  color: '#CE82FF',
  lessons: [
    {
      id: 'lesson-2-1',
      unitId: 'unit-2',
      title: 'Iota (Ⲓ) Rules',
      description: 'Consonantal vs vocalic Iota',
      order: 1,
      xpReward: 15,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-2-1-1',
          type: 'multiple_choice',
          question: 'What are the two roles of Iota (Ⲓ)?',
          correctAnswer: 'Consonant (y) and vowel (i/e)',
          options: ['Consonant (y) and vowel (i/e)', 'Only consonant', 'Only vowel', 'Silent letter'],
          explanation: 'Iota (Ⲓ) can be consonantal (like "y") or vocalic (like "i" or "e")'
        },
        {
          id: 'ex-2-1-2',
          type: 'multiple_choice',
          question: 'In ⲓⲱⲧ (father), how is the initial Ⲓ pronounced?',
          correctAnswer: 'As consonant "y" (yot)',
          options: ['As consonant "y" (yot)', 'As vowel "i"', 'Silent', 'As "j"'],
          explanation: 'Initial Ⲓ before a vowel is consonantal: ⲓⲱⲧ = "yot" (father)'
        },
        {
          id: 'ex-2-1-3',
          type: 'translation',
          question: 'How is ϩⲓ (house) pronounced?',
          questionCoptic: 'ϩⲓ',
          correctAnswer: 'hi',
          options: ['hi', 'hy', 'hey', 'hee'],
          explanation: 'Final Ⲓ after consonant is vocalic: ϩⲓ = "hi"'
        },
        {
          id: 'ex-2-1-4',
          type: 'matching',
          question: 'Match words with their pronunciation',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲓⲱⲧ (father)', english: 'yot' },
            { coptic: 'ϩⲓ (house)', english: 'hi' },
            { coptic: 'ⲓ̀ (come)', english: 'i (vocalic)' },
            { coptic: 'ⲛⲓ (the, pl)', english: 'ni' }
          ]
        },
        {
          id: 'ex-2-1-5',
          type: 'multiple_choice',
          question: 'In ⲥⲱⲛⲓ (sister), how is the final Ⲓ pronounced?',
          correctAnswer: 'As vowel "i"',
          options: ['As vowel "i"', 'As consonant "y"', 'Silent', 'As "ee"'],
          explanation: 'Final Ⲓ is vocalic: ⲥⲱⲛⲓ = "sōni"'
        },
        {
          id: 'ex-2-1-6',
          type: 'fill_blank',
          question: 'ⲙⲁⲩ + ⲓ = ___',
          correctAnswer: 'ⲙⲁⲩⲓ',
          options: ['ⲙⲁⲩⲓ', 'ⲙⲁⲓ', 'ⲙⲁⲩⲏ', 'ⲙⲁⲩⲉ'],
          explanation: 'Adding vocalic Ⲓ creates ⲙⲁⲩⲓ (mothers)'
        },
        {
          id: 'ex-2-1-7',
          type: 'multiple_choice',
          question: 'How is Ⲓ pronounced at the beginning of ⲓⲉⲣⲟ (river)?',
          correctAnswer: 'Consonantal "y"',
          options: ['Consonantal "y"', 'Vocalic "i"', 'Silent', 'Like "j"'],
          explanation: 'Initial Ⲓ before vowel: ⲓⲉⲣⲟ = "yero"'
        },
        {
          id: 'ex-2-1-8',
          type: 'translation',
          question: 'Pronounce: ϣⲏⲣⲓ',
          questionCoptic: 'ϣⲏⲣⲓ',
          correctAnswer: 'shēri',
          options: ['shēri', 'shēry', 'shēr', 'shēree'],
          explanation: 'ϣⲏⲣⲓ (son) - final Ⲓ is vocalic: "shēri"'
        },
        {
          id: 'ex-2-1-9',
          type: 'matching',
          question: 'Identify consonantal vs vocalic Ⲓ',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲓⲱⲧ (initial)', english: 'Consonantal' },
            { coptic: 'ϩⲓ (final)', english: 'Vocalic' },
            { coptic: 'ϣⲏⲣⲓ (final)', english: 'Vocalic' },
            { coptic: 'ⲓⲁⲣⲱ (initial)', english: 'Consonantal' }
          ]
        },
        {
          id: 'ex-2-1-10',
          type: 'multiple_choice',
          question: 'General rule: Ⲓ at the end of a word is usually?',
          correctAnswer: 'Vocalic (vowel)',
          options: ['Vocalic (vowel)', 'Consonantal', 'Silent', 'Variable'],
          explanation: 'Final Ⲓ is typically vocalic, pronounced as "i"'
        }
      ]
    },
    {
      id: 'lesson-2-2',
      unitId: 'unit-2',
      title: 'Gamma (Ⲅ) Rules',
      description: '"g" vs "gh" pronunciation',
      order: 2,
      xpReward: 15,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-2-2-1',
          type: 'multiple_choice',
          question: 'What are the two pronunciations of Gamma (Ⲅ)?',
          correctAnswer: 'Hard "g" and soft "gh"',
          options: ['Hard "g" and soft "gh"', 'Only hard "g"', 'Only soft "gh"', 'Like "j"'],
          explanation: 'Ⲅ can be hard "g" (as in "go") or soft "gh" (guttural, like Arabic غ)'
        },
        {
          id: 'ex-2-2-2',
          type: 'multiple_choice',
          question: 'Before which vowels is Ⲅ typically pronounced as hard "g"?',
          correctAnswer: 'ⲁ, ⲟ, ⲱ (back vowels)',
          options: ['ⲁ, ⲟ, ⲱ (back vowels)', 'ⲉ, ⲓ (front vowels)', 'All vowels', 'No vowels'],
          explanation: 'Ⲅ before back vowels (ⲁ, ⲟ, ⲱ) is hard "g"'
        },
        {
          id: 'ex-2-2-3',
          type: 'translation',
          question: 'How is the Ⲅ pronounced in ⲅⲁⲣ (for)?',
          questionCoptic: 'ⲅⲁⲣ',
          correctAnswer: 'Hard "g" (gar)',
          options: ['Hard "g" (gar)', 'Soft "gh" (ghar)', 'Like "j" (jar)', 'Silent'],
          explanation: 'Ⲅ before ⲁ is hard: ⲅⲁⲣ = "gar"'
        },
        {
          id: 'ex-2-2-4',
          type: 'matching',
          question: 'Match Gamma pronunciations',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲅⲁⲣ (for)', english: 'Hard "g"' },
            { coptic: 'ⲅⲱⲙ (book)', english: 'Hard "g"' },
            { coptic: 'ⲁⲅⲅⲉⲗⲟⲥ (angel)', english: 'Soft "gh"' },
            { coptic: 'ⲅⲉⲛⲟⲥ (generation)', english: 'Soft "gh" or "g"' }
          ]
        },
        {
          id: 'ex-2-2-5',
          type: 'multiple_choice',
          question: 'In Greek loanwords, how is Ⲅ usually pronounced?',
          correctAnswer: 'As in Greek (often hard "g")',
          options: ['As in Greek (often hard "g")', 'Always soft "gh"', 'Always hard "g"', 'Silent'],
          explanation: 'Greek loanwords maintain Greek pronunciation: ⲁⲅⲅⲉⲗⲟⲥ = "angelos"'
        },
        {
          id: 'ex-2-2-6',
          type: 'fill_blank',
          question: 'ⲁⲅⲁⲑⲟⲥ (good) - Ⲅ is pronounced?',
          correctAnswer: 'Hard "g"',
          options: ['Hard "g"', 'Soft "gh"', 'Like "j"', 'Silent'],
          explanation: 'ⲁⲅⲁⲑⲟⲥ (Greek loanword) = "agathos" with hard "g"'
        },
        {
          id: 'ex-2-2-7',
          type: 'multiple_choice',
          question: 'Before front vowels (ⲉ, ⲓ), Ⲅ may be?',
          correctAnswer: 'Softened (gh) or palatalized',
          options: ['Softened (gh) or palatalized', 'Always hard', 'Silent', 'Like "j"'],
          explanation: 'Before ⲉ, ⲓ, Ⲅ may soften or palatalize depending on dialect'
        },
        {
          id: 'ex-2-2-8',
          type: 'translation',
          question: 'ⲗⲟⲅⲟⲥ (word) - how is Ⲅ pronounced?',
          questionCoptic: 'ⲗⲟⲅⲟⲥ',
          correctAnswer: 'Hard "g" (logos)',
          options: ['Hard "g" (logos)', 'Soft "gh"', 'Like "j"', 'Silent'],
          explanation: 'ⲗⲟⲅⲟⲥ (Greek λόγος) = "logos" with hard "g"'
        },
        {
          id: 'ex-2-2-9',
          type: 'matching',
          question: 'Match words with pronunciation',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲅⲁⲣ', english: 'gar (hard g)' },
            { coptic: 'ⲗⲟⲅⲟⲥ', english: 'logos (hard g)' },
            { coptic: 'ⲁⲅⲁⲑⲟⲥ', english: 'agathos (hard g)' }
          ]
        },
        {
          id: 'ex-2-2-10',
          type: 'multiple_choice',
          question: 'General rule: Ⲅ before back vowels is?',
          correctAnswer: 'Hard "g"',
          options: ['Hard "g"', 'Soft "gh"', 'Silent', 'Variable always'],
          explanation: 'Ⲅ + back vowels (ⲁ, ⲟ, ⲱ) = hard "g" sound'
        }
      ]
    },
    {
      id: 'lesson-2-3',
      unitId: 'unit-2',
      title: 'Upsilon (Ⲩ) Rules',
      description: 'Complex pronunciation of Upsilon',
      order: 3,
      xpReward: 15,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-2-3-1',
          type: 'multiple_choice',
          question: 'What is the primary pronunciation of Upsilon (Ⲩ)?',
          correctAnswer: '"u" or "w" sound',
          options: ['"u" or "w" sound', '"y" sound', '"v" sound', '"i" sound'],
          explanation: 'Ⲩ is pronounced as "u" (vowel) or "w" (consonant) depending on position'
        },
        {
          id: 'ex-2-3-2',
          type: 'multiple_choice',
          question: 'In ⲟⲩ combinations, how is Ⲩ pronounced?',
          correctAnswer: 'As "w" (ou = "oo" or "u")',
          options: ['As "w" (ou = "oo" or "u")', 'As "v"', 'As "y"', 'Silent'],
          explanation: 'ⲟⲩ together = "oo" sound, Ⲩ acts like "w": ⲟⲩϫⲁⲓ = "oujai"'
        },
        {
          id: 'ex-2-3-3',
          type: 'translation',
          question: 'How is ⲟⲩϫⲁⲓ (greetings) pronounced?',
          questionCoptic: 'ⲟⲩϫⲁⲓ',
          correctAnswer: 'oujai',
          options: ['oujai', 'oyjai', 'ovjai', 'ujai'],
          explanation: 'ⲟⲩϫⲁⲓ = "oujai" (ⲟⲩ = "ou/oo" sound)'
        },
        {
          id: 'ex-2-3-4',
          type: 'matching',
          question: 'Match Upsilon pronunciations',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲟⲩ (a/an)', english: 'ou/oo' },
            { coptic: 'ⲙⲁⲩ (mother)', english: 'mau' },
            { coptic: 'ⲟⲩⲱⲙ (eat)', english: 'ouōm' },
            { coptic: 'ⲥⲛⲁⲩ (two)', english: 'snau' }
          ]
        },
        {
          id: 'ex-2-3-5',
          type: 'multiple_choice',
          question: 'In Greek loanwords, Ⲩ represents Greek?',
          correctAnswer: 'Upsilon (υ)',
          options: ['Upsilon (υ)', 'Omega (ω)', 'Iota (ι)', 'Eta (η)'],
          explanation: 'Coptic Ⲩ = Greek Υ (upsilon), pronounced "u" or "y" in Greek words'
        },
        {
          id: 'ex-2-3-6',
          type: 'fill_blank',
          question: 'ⲙⲁⲣⲧⲩⲣⲟⲥ (martyr) - Ⲩ is pronounced?',
          correctAnswer: 'u (martiros)',
          options: ['u (martiros)', 'i (martirios)', 'y (martyros)', 'v (martryos)'],
          explanation: 'Greek loanword: ⲙⲁⲣⲧⲩⲣⲟⲥ = "marturos" (Ⲩ = "u")'
        },
        {
          id: 'ex-2-3-7',
          type: 'multiple_choice',
          question: 'Before another vowel, Ⲩ often acts as?',
          correctAnswer: 'Consonantal "w"',
          options: ['Consonantal "w"', 'Pure vowel "u"', 'Silent', 'Like "v"'],
          explanation: 'Before vowels, Ⲩ is consonantal: ⲟⲩⲱⲙ = "ou-w-om" = "ouōm"'
        },
        {
          id: 'ex-2-3-8',
          type: 'translation',
          question: 'How is ⲛⲟⲩⲃ (gold) pronounced?',
          questionCoptic: 'ⲛⲟⲩⲃ',
          correctAnswer: 'noub',
          options: ['noub', 'novb', 'noyb', 'nub'],
          explanation: 'ⲛⲟⲩⲃ = "noub" (ⲟⲩ = "ou" sound)'
        },
        {
          id: 'ex-2-3-9',
          type: 'matching',
          question: 'Match words with pronunciation',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲟⲩϫⲁⲓ', english: 'oujai' },
            { coptic: 'ⲛⲟⲩⲃ', english: 'noub' },
            { coptic: 'ⲟⲩⲱⲙ', english: 'ouōm' },
            { coptic: 'ⲙⲁⲣⲧⲩⲣⲟⲥ', english: 'marturos' }
          ]
        },
        {
          id: 'ex-2-3-10',
          type: 'multiple_choice',
          question: 'The combination ⲟⲩ is pronounced like?',
          correctAnswer: '"oo" in "food" or "ou" in "soup"',
          options: ['"oo" in "food" or "ou" in "soup"', '"ow" in "cow"', '"oy" in "boy"', '"ov" in "love"'],
          explanation: 'ⲟⲩ = long "u" sound, similar to "oo" or "ou"'
        }
      ]
    },
    {
      id: 'lesson-2-4',
      unitId: 'unit-2',
      title: 'Delta (Ⲇ) and Theta (Ⲑ) Distinctions',
      description: 'Distinguishing Delta and Theta sounds',
      order: 4,
      xpReward: 15,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-2-4-1',
          type: 'multiple_choice',
          question: 'How is Delta (Ⲇ) pronounced?',
          correctAnswer: 'Like "d" in "dog"',
          options: ['Like "d" in "dog"', 'Like "th" in "thin"', 'Like "t" in "top"', 'Like "dh" in "this"'],
          explanation: 'Ⲇ (Delta) = simple "d" sound, as in English "dog"'
        },
        {
          id: 'ex-2-4-2',
          type: 'multiple_choice',
          question: 'How is Theta (Ⲑ) pronounced?',
          correctAnswer: 'Like "th" in "thin"',
          options: ['Like "th" in "thin"', 'Like "d" in "dog"', 'Like "t" in "top"', 'Like "th" in "this"'],
          explanation: 'Ⲑ (Theta) = voiceless "th", like Greek Θ or English "thin"'
        },
        {
          id: 'ex-2-4-3',
          type: 'translation',
          question: 'How is Ⲇⲁⲩⲓⲇ (David) pronounced?',
          questionCoptic: 'Ⲇⲁⲩⲓⲇ',
          correctAnswer: 'Dawid (with "d" sounds)',
          options: ['Dawid (with "d" sounds)', 'Thawith', 'Tavit', 'Dhavid'],
          explanation: 'Ⲇⲁⲩⲓⲇ = "Dawid" (Ⲇ = "d")'
        },
        {
          id: 'ex-2-4-4',
          type: 'matching',
          question: 'Match letters with sounds',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'Ⲇ (Delta)', english: '"d" as in dog' },
            { coptic: 'Ⲑ (Theta)', english: '"th" as in thin' },
            { coptic: 'Ⲧ (Tau)', english: '"t" as in top' },
            { coptic: 'Ⲇⲁⲩⲓⲇ', english: 'Dawid' }
          ]
        },
        {
          id: 'ex-2-4-5',
          type: 'multiple_choice',
          question: 'What sound is ⲑⲉⲟⲥ (god)?',
          correctAnswer: 'Theos (with "th")',
          options: ['Theos (with "th")', 'Deos', 'Teos', 'Seos'],
          explanation: 'ⲑⲉⲟⲥ = "Theos" (Greek θεός, Ⲑ = "th")'
        },
        {
          id: 'ex-2-4-6',
          type: 'fill_blank',
          question: 'Delta (Ⲇ) comes from Greek ___ and sounds like ___',
          correctAnswer: 'Δ (Delta), "d"',
          options: ['Δ (Delta), "d"', 'Θ (Theta), "th"', 'Τ (Tau), "t"', 'Γ (Gamma), "g"'],
          explanation: 'Ⲇ derives from Greek Δ (Delta) and is pronounced "d"'
        },
        {
          id: 'ex-2-4-7',
          type: 'multiple_choice',
          question: 'In Coptic, is Ⲑ common in native words or Greek loanwords?',
          correctAnswer: 'Primarily Greek loanwords',
          options: ['Primarily Greek loanwords', 'Native Coptic words', 'Both equally', 'Neither'],
          explanation: 'Ⲑ (Theta) appears mainly in Greek loanwords like ⲑⲉⲟⲥ (god)'
        },
        {
          id: 'ex-2-4-8',
          type: 'translation',
          question: 'ⲙⲁⲑⲏⲧⲏⲥ (disciple) - how is Ⲑ pronounced?',
          questionCoptic: 'ⲙⲁⲑⲏⲧⲏⲥ',
          correctAnswer: 'mathētēs (with "th")',
          options: ['mathētēs (with "th")', 'madētēs', 'matētēs', 'masētēs'],
          explanation: 'ⲙⲁⲑⲏⲧⲏⲥ = "mathētēs" (Greek μαθητής, Ⲑ = "th")'
        },
        {
          id: 'ex-2-4-9',
          type: 'matching',
          question: 'Identify Delta vs Theta words',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'Ⲇⲁⲩⲓⲇ (David)', english: 'Delta "d"' },
            { coptic: 'ⲑⲉⲟⲥ (god)', english: 'Theta "th"' },
            { coptic: 'ⲙⲁⲑⲏⲧⲏⲥ (disciple)', english: 'Theta "th"' },
            { coptic: 'ⲇⲟⲝⲁ (glory)', english: 'Delta "d"' }
          ]
        },
        {
          id: 'ex-2-4-10',
          type: 'multiple_choice',
          question: 'Which letter is NOT aspirated/breathy?',
          correctAnswer: 'Ⲇ (Delta)',
          options: ['Ⲇ (Delta)', 'Ⲑ (Theta)', 'Ⲫ (Phi)', 'Ⲭ (Chi)'],
          explanation: 'Ⲇ is a simple "d", not aspirated. Ⲑ, Ⲫ, Ⲭ are all aspirated/breathy'
        }
      ]
    },
    {
      id: 'lesson-2-5',
      unitId: 'unit-2',
      title: 'Kappa (Ⲕ) in Greek Loanwords',
      description: 'Pronunciation of Kappa in borrowed words',
      order: 5,
      xpReward: 15,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-2-5-1',
          type: 'multiple_choice',
          question: 'How is Kappa (Ⲕ) pronounced in Coptic?',
          correctAnswer: 'Like "k" in "king"',
          options: ['Like "k" in "king"', 'Like "ch" in "Bach"', 'Like "g" in "go"', 'Like "c" in "city"'],
          explanation: 'Ⲕ (Kappa) = hard "k" sound, as in English "king"'
        },
        {
          id: 'ex-2-5-2',
          type: 'multiple_choice',
          question: 'In Greek loanwords, Ⲕ corresponds to Greek?',
          correctAnswer: 'Κ (Kappa)',
          options: ['Κ (Kappa)', 'Χ (Chi)', 'Γ (Gamma)', 'Ξ (Xi)'],
          explanation: 'Coptic Ⲕ derives from Greek Κ (Kappa), both pronounced "k"'
        },
        {
          id: 'ex-2-5-3',
          type: 'translation',
          question: 'How is ⲕⲟⲥⲙⲟⲥ (world) pronounced?',
          questionCoptic: 'ⲕⲟⲥⲙⲟⲥ',
          correctAnswer: 'kosmos',
          options: ['kosmos', 'chosmos', 'gosmos', 'xosmos'],
          explanation: 'ⲕⲟⲥⲙⲟⲥ = "kosmos" (Greek κόσμος, Ⲕ = "k")'
        },
        {
          id: 'ex-2-5-4',
          type: 'matching',
          question: 'Match words with Kappa',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲕⲟⲥⲙⲟⲥ (world)', english: 'kosmos' },
            { coptic: 'ⲕⲁⲣⲇⲓⲁ (heart)', english: 'kardia' },
            { coptic: 'ⲕⲩⲣⲓⲟⲥ (lord)', english: 'kurios' },
            { coptic: 'ⲉⲕⲕⲗⲏⲥⲓⲁ (church)', english: 'ekklēsia' }
          ]
        },
        {
          id: 'ex-2-5-5',
          type: 'multiple_choice',
          question: 'Is Ⲕ ever softened to "g" in Coptic?',
          correctAnswer: 'No, always hard "k"',
          options: ['No, always hard "k"', 'Yes, before vowels', 'Yes, in loanwords', 'Sometimes'],
          explanation: 'Ⲕ is always pronounced as hard "k", never softened'
        },
        {
          id: 'ex-2-5-6',
          type: 'fill_blank',
          question: 'ⲕⲩⲣⲓⲁⲕⲏ (Sunday/Lord\'s day) - Ⲕ is pronounced?',
          correctAnswer: '"k" (kuriakē)',
          options: ['"k" (kuriakē)', '"ch" (churiakē)', '"g" (guriakē)', '"c" (curiakē)'],
          explanation: 'ⲕⲩⲣⲓⲁⲕⲏ = "kuriakē" (Ⲕ = "k")'
        },
        {
          id: 'ex-2-5-7',
          type: 'multiple_choice',
          question: 'How is ⲕⲁⲧⲁ (according to) pronounced?',
          correctAnswer: 'kata',
          options: ['kata', 'chata', 'gata', 'xata'],
          explanation: 'ⲕⲁⲧⲁ = "kata" (Greek κατά, Ⲕ = "k")'
        },
        {
          id: 'ex-2-5-8',
          type: 'translation',
          question: 'ⲉⲕⲕⲗⲏⲥⲓⲁ (church) - how are the double Ⲕ sounds?',
          questionCoptic: 'ⲉⲕⲕⲗⲏⲥⲓⲁ',
          correctAnswer: 'ekklēsia (double "k")',
          options: ['ekklēsia (double "k")', 'echlēsia', 'eglēsia', 'exlēsia'],
          explanation: 'ⲉⲕⲕⲗⲏⲥⲓⲁ = "ekklēsia" (Greek ἐκκλησία, double Κ)'
        },
        {
          id: 'ex-2-5-9',
          type: 'matching',
          question: 'Match more Kappa words',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲕⲁⲧⲁ', english: 'kata (according to)' },
            { coptic: 'ⲕⲁⲣⲡⲟⲥ', english: 'karpos (fruit)' },
            { coptic: 'ⲕⲉⲫⲁⲗⲏ', english: 'kefalē (head)' },
            { coptic: 'ⲕⲁⲗⲟⲥ', english: 'kalos (good)' }
          ]
        },
        {
          id: 'ex-2-5-10',
          type: 'multiple_choice',
          question: 'Coptic Ⲕ vs Ⲭ (Chi): what is the difference?',
          correctAnswer: 'Ⲕ = "k", Ⲭ = "kh/ch"',
          options: ['Ⲕ = "k", Ⲭ = "kh/ch"', 'No difference', 'Ⲕ = "g", Ⲭ = "k"', 'Ⲕ = "c", Ⲭ = "x"'],
          explanation: 'Ⲕ is plain "k", Ⲭ (Chi) is aspirated "kh" or guttural "ch"'
        }
      ]
    }
  ]
};

export default unit2;
