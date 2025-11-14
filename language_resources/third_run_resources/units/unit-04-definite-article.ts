import { Unit } from '../../types';

// UNIT 4: THE DEFINITE ARTICLE
// Corrected for Bohairic dialect consistency
// Article system based on OUTLINE OF BOHAIRIC COPTIC MORPHOLOGY

const unit4: Unit = {
  id: 'unit-4',
  title: 'The Definite Article',
  description: 'Learn "the" in Coptic: Ⲡⲓ, Ϯ, Ⲛⲓ',
  order: 4,
  color: '#58CC02',
  lessons: [
    {
      id: 'lesson-4-1',
      unitId: 'unit-4',
      title: 'Definite Articles (Masculine)',
      description: 'Learn "the" in Coptic: Ⲡⲓ, Ⲫ, Ⲡ',
      order: 1,
      xpReward: 20,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-4-1-1',
          type: 'multiple_choice',
          question: 'What is the masculine definite article?',
          correctAnswer: 'Ⲡⲓ',
          options: ['Ⲡⲓ', 'Ϯ', 'Ⲛⲓ', 'ⲟⲩ'],
          explanation: 'Ⲡⲓ (pi) is the masculine singular definite article "the"'
        },
        {
          id: 'ex-4-1-2',
          type: 'multiple_choice',
          question: 'Which form is used before voiced consonants (β, λ, μ, ν, ρ)?',
          correctAnswer: 'Ⲫ-',
          options: ['Ⲫ-', 'Ⲡⲓ-', 'Ϯ-', 'Ⲛⲓ-'],
          explanation: 'Ⲫ- (ph-) is used before voiced consonants by phonological rule (Π→Φ)'
        },
        {
          id: 'ex-4-1-3',
          type: 'translation',
          question: 'Translate: ⲡⲓⲣⲱⲙⲓ',
          questionCoptic: 'ⲡⲓⲣⲱⲙⲓ',
          correctAnswer: 'the man',
          options: ['the man', 'a man', 'the woman', 'man'],
          explanation: 'ⲡⲓⲣⲱⲙⲓ = Ⲡⲓ (the, masc.) + ⲣⲱⲙⲓ (man) = "the man"'
        },
        {
          id: 'ex-4-1-4',
          type: 'matching',
          question: 'Match the phrases',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲡⲓⲣⲱⲙⲓ', english: 'the man' },
            { coptic: 'ⲡⲓϣⲏⲣⲓ', english: 'the son' },
            { coptic: 'ⲫⲓⲱⲧ', english: 'the father' },
            { coptic: 'ⲡⲓⲃⲁⲗ', english: 'the eye' }
          ]
        },
        {
          id: 'ex-4-1-5',
          type: 'multiple_choice',
          question: 'How do you say "the book"?',
          correctAnswer: 'ⲡⲓϫⲱⲙ',
          options: ['ⲡⲓϫⲱⲙ', 'ϯϫⲱⲙ', 'ⲛⲓϫⲱⲙ', 'ⲟⲩϫⲱⲙ'],
          explanation: 'ⲡⲓϫⲱⲙ (pijōm) means "the book"'
        },
        {
          id: 'ex-4-1-6',
          type: 'sentence_building',
          question: 'Build: "the father"',
          correctAnswer: 'ⲫⲓⲱⲧ',
          wordBank: ['ⲫ', 'ⲓⲱⲧ', 'ⲙⲁⲩ', 'ⲛⲓ'],
          explanation: 'ⲫⲓⲱⲧ = Ⲫ (the, masc. before vowel - Π→Φ) + ⲓⲱⲧ (father)'
        },
        {
          id: 'ex-4-1-7',
          type: 'multiple_choice',
          question: 'Which is correct for "the house"?',
          correctAnswer: 'ϯϩⲓ',
          options: ['ϯϩⲓ', 'ⲡⲓϩⲓ', 'ⲫϩⲓ', 'ⲡϩⲓ'],
          explanation: 'ϯϩⲓ (tihi) = "the house" (ϩⲓ is FEMININE, so uses Ϯ- not Ⲡⲓ-!)'
        },
        {
          id: 'ex-4-1-8',
          type: 'fill_blank',
          question: 'Complete: ___ ⲣⲱⲙⲓ = the man',
          correctAnswer: 'ⲡⲓ',
          options: ['ⲡⲓ', 'ϯ', 'ⲛⲓ', 'ⲟⲩ'],
          explanation: 'Ⲡⲓ is the masculine definite article'
        },
        {
          id: 'ex-4-1-9',
          type: 'sentence_building',
          question: 'Build: "the son"',
          correctAnswer: 'ⲡⲓϣⲏⲣⲓ',
          wordBank: ['ⲡⲓ', 'ϣⲏⲣⲓ', 'ϯ', 'ⲙⲁⲩ'],
          explanation: 'ⲡⲓϣⲏⲣⲓ = Ⲡⲓ (the, masc.) + ϣⲏⲣⲓ (son) - NOTE: ϣ not ⲥ!'
        },
        {
          id: 'ex-4-1-10',
          type: 'translation',
          question: 'Translate to English: ⲡⲓϫⲱⲙ',
          questionCoptic: 'ⲡⲓϫⲱⲙ',
          correctAnswer: 'the book',
          options: ['the book', 'a book', 'book', 'the books'],
          explanation: 'ⲡⲓϫⲱⲙ means "the book"'
        }
      ]
    },
    {
      id: 'lesson-4-2',
      unitId: 'unit-4',
      title: 'Definite Articles (Feminine)',
      description: 'Learn feminine "the": Ϯ, Ⲑ',
      order: 2,
      xpReward: 20,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-4-2-1',
          type: 'multiple_choice',
          question: 'What is the feminine definite article?',
          correctAnswer: 'Ϯ',
          options: ['Ⲡⲓ', 'Ϯ', 'Ⲛⲓ', 'ⲟⲩ'],
          explanation: 'Ϯ (ti) is the feminine singular definite article "the"'
        },
        {
          id: 'ex-4-2-2',
          type: 'multiple_choice',
          question: 'Which form is used before voiced consonants?',
          correctAnswer: 'Ⲑ-',
          options: ['Ⲑ-', 'Ϯ-', 'Ⲡⲓ-', 'Ⲛⲓ-'],
          explanation: 'Ⲑ- (th-) is used before voiced consonants (Τ→Θ rule)'
        },
        {
          id: 'ex-4-2-3',
          type: 'translation',
          question: 'Translate: ϯϩⲓⲙⲓ',
          questionCoptic: 'ϯϩⲓⲙⲓ',
          correctAnswer: 'the woman',
          options: ['the woman', 'a woman', 'woman', 'the women'],
          explanation: 'ϯϩⲓⲙⲓ = Ϯ (the, fem.) + ϩⲓⲙⲓ (woman) = "the woman"'
        },
        {
          id: 'ex-4-2-4',
          type: 'matching',
          question: 'Match feminine articles',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ϯϩⲓⲙⲓ', english: 'the woman' },
            { coptic: 'ϯⲙⲁⲩ', english: 'the mother' },
            { coptic: 'ϯⲧⲣⲁⲡⲉⲍⲁ', english: 'the table' },
            { coptic: 'ϯϩⲓ', english: 'the house' }
          ]
        },
        {
          id: 'ex-4-2-5',
          type: 'multiple_choice',
          question: 'How do you say "the sister"?',
          correctAnswer: 'ϯⲥⲱⲛⲓ',
          options: ['ϯⲥⲱⲛⲓ', 'ⲡⲓⲥⲱⲛⲓ', 'ⲛⲓⲥⲱⲛⲓ', 'ⲟⲩⲥⲱⲛⲓ'],
          explanation: 'ϯⲥⲱⲛⲓ (tisōni) = "the sister"'
        },
        {
          id: 'ex-4-2-6',
          type: 'multiple_choice',
          question: 'Which is correct for "the mother"?',
          correctAnswer: 'ϯⲙⲁⲩ',
          options: ['ϯⲙⲁⲩ', 'ⲑⲙⲁⲩ', 'ⲡⲓⲙⲁⲩ', 'ⲛⲓⲙⲁⲩ'],
          explanation: 'ϯⲙⲁⲩ (timau) = Ϯ (the, fem.) + ⲙⲁⲩ (mother)'
        },
        {
          id: 'ex-4-2-7',
          type: 'fill_blank',
          question: 'Complete: ___ ϩⲓⲙⲓ = the woman',
          correctAnswer: 'ϯ',
          options: ['ϯ', 'ⲡⲓ', 'ⲛⲓ', 'ⲟⲩ'],
          explanation: 'Ϯ is the feminine definite article'
        },
        {
          id: 'ex-4-2-8',
          type: 'multiple_choice',
          question: 'How do you say "the daughter"?',
          correctAnswer: 'ϯϣⲉⲣⲓ',
          options: ['ϯϣⲉⲣⲓ', 'ⲡⲓϣⲉⲣⲓ', 'ⲛⲓϣⲉⲣⲓ', 'ⲟⲩϣⲉⲣⲓ'],
          explanation: 'ϯϣⲉⲣⲓ (tisheri) = "the daughter"'
        },
        {
          id: 'ex-4-2-9',
          type: 'sentence_building',
          question: 'Build: "the mother"',
          correctAnswer: 'ϯⲙⲁⲩ',
          wordBank: ['ϯ', 'ⲙⲁⲩ', 'ⲡⲓ', 'ⲓⲱⲧ'],
          explanation: 'ϯⲙⲁⲩ = Ϯ (the, fem.) + ⲙⲁⲩ (mother)'
        },
        {
          id: 'ex-4-2-10',
          type: 'translation',
          question: 'Translate to Coptic: "the sister"',
          correctAnswer: 'ϯⲥⲱⲛⲓ',
          options: ['ϯⲥⲱⲛⲓ', 'ⲡⲓⲥⲱⲛⲓ', 'ⲑⲥⲱⲛⲓ', 'ⲛⲓⲥⲱⲛⲓ'],
          explanation: 'ϯⲥⲱⲛⲓ = Ϯ (the, fem.) + ⲥⲱⲛⲓ (sister)'
        }
      ]
    },
    {
      id: 'lesson-4-3',
      unitId: 'unit-4',
      title: 'Definite Article (Plural)',
      description: 'Learn plural "the": Ⲛⲓ',
      order: 3,
      xpReward: 20,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-4-3-1',
          type: 'multiple_choice',
          question: 'What is the plural definite article?',
          correctAnswer: 'Ⲛⲓ',
          options: ['Ⲡⲓ', 'Ϯ', 'Ⲛⲓ', 'ⲟⲩ'],
          explanation: 'Ⲛⲓ (ni) is the plural definite article "the" (for both genders)'
        },
        {
          id: 'ex-4-3-2',
          type: 'translation',
          question: 'Translate: ⲛⲓⲣⲱⲙⲓ',
          questionCoptic: 'ⲛⲓⲣⲱⲙⲓ',
          correctAnswer: 'the men',
          options: ['the men', 'the man', 'men', 'a man'],
          explanation: 'ⲛⲓⲣⲱⲙⲓ = Ⲛⲓ (the, plural) + ⲣⲱⲙⲓ (men) = "the men"'
        },
        {
          id: 'ex-4-3-3',
          type: 'matching',
          question: 'Match plural articles',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'ⲛⲓⲣⲱⲙⲓ', english: 'the men' },
            { coptic: 'ⲛⲓϩⲓⲙⲓ', english: 'the women' },
            { coptic: 'ⲛⲓⲥⲱⲛⲓ', english: 'the sisters' },
            { coptic: 'ⲛⲓⲥⲛⲏⲟⲩ', english: 'the brothers' }
          ]
        },
        {
          id: 'ex-4-3-4',
          type: 'multiple_choice',
          question: 'How do you say "the books"?',
          correctAnswer: 'ⲛⲓϫⲱⲙ',
          options: ['ⲛⲓϫⲱⲙ', 'ⲡⲓϫⲱⲙ', 'ϯϫⲱⲙ', 'ⲟⲩϫⲱⲙ'],
          explanation: 'ⲛⲓϫⲱⲙ (nijōm) = "the books"'
        },
        {
          id: 'ex-4-3-5',
          type: 'fill_blank',
          question: 'Complete: ___ ⲥⲱⲛⲓ = the sisters',
          correctAnswer: 'ⲛⲓ',
          options: ['ⲛⲓ', 'ⲡⲓ', 'ϯ', 'ⲟⲩ'],
          explanation: 'Ⲛⲓ is the plural definite article (used for both masc. & fem. plurals)'
        },
        {
          id: 'ex-4-3-6',
          type: 'multiple_choice',
          question: 'How do you say "the eyes"?',
          correctAnswer: 'ⲛⲓⲃⲁⲗ',
          options: ['ⲛⲓⲃⲁⲗ', 'ⲡⲓⲃⲁⲗ', 'ϯⲃⲁⲗ', 'ⲟⲩⲃⲁⲗ'],
          explanation: 'ⲛⲓⲃⲁⲗ (nibal) = "the eyes"'
        },
        {
          id: 'ex-4-3-7',
          type: 'multiple_choice',
          question: 'What does ⲛⲓⲁⲗⲟⲩ mean?',
          questionCoptic: 'ⲛⲓⲁⲗⲟⲩ',
          correctAnswer: 'the boys',
          options: ['the boys', 'the boy', 'boys', 'a boy'],
          explanation: 'ⲛⲓⲁⲗⲟⲩ (nialou) = "the boys"'
        },
        {
          id: 'ex-4-3-8',
          type: 'sentence_building',
          question: 'Build: "the hands"',
          correctAnswer: 'ⲛⲓϫⲓϫ',
          wordBank: ['ⲛⲓ', 'ϫⲓϫ', 'ⲡⲓ', 'ϯ'],
          explanation: 'ⲛⲓϫⲓϫ = Ⲛⲓ (the, plural) + ϫⲓϫ (hands)'
        },
        {
          id: 'ex-4-3-9',
          type: 'translation',
          question: 'Translate to Coptic: "the children"',
          correctAnswer: 'ⲛⲓⲁⲗⲟⲩ',
          options: ['ⲛⲓⲁⲗⲟⲩ', 'ⲡⲓⲁⲗⲟⲩ', 'ϯⲁⲗⲟⲩ', 'ⲟⲩⲁⲗⲟⲩ'],
          explanation: 'ⲛⲓⲁⲗⲟⲩ = Ⲛⲓ (the, plural) + ⲁⲗⲟⲩ (children/boys)'
        },
        {
          id: 'ex-4-3-10',
          type: 'sentence_building',
          question: 'Build: "the books"',
          correctAnswer: 'ⲛⲓϫⲱⲙ',
          wordBank: ['ⲛⲓ', 'ϫⲱⲙ', 'ⲡⲓ', 'ϯ'],
          explanation: 'ⲛⲓϫⲱⲙ = Ⲛⲓ (the, plural) + ϫⲱⲙ (books)'
        }
      ]
    },
    {
      id: 'lesson-4-4',
      unitId: 'unit-4',
      title: 'Article Usage Patterns & Exceptions',
      description: 'When to use or omit articles, special cases',
      order: 4,
      xpReward: 25,
      isLocked: true,
      completed: false,
      exercises: [
        {
          id: 'ex-4-4-1',
          type: 'multiple_choice',
          question: 'Which of these uses NO article in Coptic?',
          correctAnswer: 'Ⲫϯ (God)',
          options: ['Ⲫϯ (God)', 'ⲡⲓⲣⲱⲙⲓ (the man)', 'ϯϩⲓⲙⲓ (the woman)', 'ⲛⲓⲣⲱⲙⲓ (the men)'],
          explanation: 'Ⲫϯ (God) is a proper noun and takes NO article. Divine names typically omit the article.'
        },
        {
          id: 'ex-4-4-2',
          type: 'matching',
          question: 'Match article usage patterns',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'Ⲫϯ', english: 'God (no article)' },
            { coptic: 'ⲡⲓⲱⲓⲕ', english: 'the bread (specific)' },
            { coptic: 'ⲟⲩⲱⲓⲕ', english: 'a bread (indefinite)' },
            { coptic: 'ⲱⲓⲕ', english: 'bread (generic/abstract)' }
          ]
        },
        {
          id: 'ex-4-4-3',
          type: 'translation',
          question: 'Translate: ϧⲉⲛ ⲫⲣⲁⲛ ⲙ̀Ⲫⲓⲱⲧ',
          questionCoptic: 'ϧⲉⲛ ⲫⲣⲁⲛ ⲙ̀Ⲫⲓⲱⲧ',
          correctAnswer: 'in the name of the Father',
          options: ['in the name of the Father', 'in name of Father', 'the Father\'s name', 'Father\'s name'],
          explanation: 'ϧⲉⲛ ⲫⲣⲁⲛ (in the name) + ⲙ̀Ⲫⲓⲱⲧ (of the Father) - both use articles'
        },
        {
          id: 'ex-4-4-4',
          type: 'fill_blank',
          question: 'Complete: Ⲓⲏⲥⲟⲩⲥ ___ Ⲭⲣⲓⲥⲧⲟⲥ = Jesus Christ (no article)',
          correctAnswer: 'Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ',
          options: ['Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ', 'ⲭ̀ⲣⲓⲥⲧⲟⲥ', 'ⲟⲩⲭ̀ⲣⲓⲥⲧⲟⲥ', 'ⲛⲓⲭ̀ⲣⲓⲥⲧⲟⲥ'],
          explanation: 'Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ = Jesus the Christ (Χριστός becomes title, takes article)'
        },
        {
          id: 'ex-4-4-5',
          type: 'multiple_choice',
          question: 'Which phrase omits the article correctly?',
          correctAnswer: 'ϧⲉⲛ ⲟⲩⲣⲁϣⲓ (in joy - abstract)',
          options: ['ϧⲉⲛ ⲟⲩⲣⲁϣⲓ (in joy - abstract)', 'ϧⲉⲛ ⲡⲓⲣⲁϣⲓ (in the joy - specific)', 'Both are correct', 'Neither is correct'],
          explanation: 'ϧⲉⲛ ⲟⲩⲣⲁϣⲓ (in joy) - abstract concepts often use indefinite or no article; ϧⲉⲛ ⲡⲓⲣⲁϣⲓ would mean "in THE (specific) joy"'
        },
        {
          id: 'ex-4-4-6',
          type: 'translation',
          question: 'Translate: ⲟⲩⲟⲛ ⲟⲩⲛⲟⲩϯ',
          questionCoptic: 'ⲟⲩⲟⲛ ⲟⲩⲛⲟⲩϯ',
          correctAnswer: 'there is a God',
          options: ['there is a God', 'God exists', 'there is the God', 'a God is'],
          explanation: 'ⲟⲩⲟⲛ ⲟⲩⲛⲟⲩϯ = there is a god (indefinite); BUT Ⲫϯ alone = THE God (definite name)'
        },
        {
          id: 'ex-4-4-7',
          type: 'matching',
          question: 'Match proper nouns (no article)',
          correctAnswer: 'matched',
          pairs: [
            { coptic: 'Ⲫϯ', english: 'God' },
            { coptic: 'Ⲡⲉⲧⲣⲟⲥ', english: 'Peter' },
            { coptic: 'Ⲙⲁⲣⲓⲁ', english: 'Mary' },
            { coptic: 'Ⲓⲏⲣⲟⲩⲥⲁⲗⲏⲙ', english: 'Jerusalem' }
          ]
        },
        {
          id: 'ex-4-4-8',
          type: 'multiple_choice',
          question: 'Which is correct: "Blessed is God"?',
          correctAnswer: 'Ϥ̀ⲥⲙⲁⲣⲱⲟⲩⲧ ⲛ̀ϫⲉ Ⲫϯ',
          options: ['Ϥ̀ⲥⲙⲁⲣⲱⲟⲩⲧ ⲛ̀ϫⲉ Ⲫϯ', 'Ϥ̀ⲥⲙⲁⲣⲱⲟⲩⲧ ⲛ̀ϫⲉ ⲡⲓⲛⲟⲩϯ', 'Both work', 'Neither works'],
          explanation: 'Ϥ̀ⲥⲙⲁⲣⲱⲟⲩⲧ ⲛ̀ϫⲉ Ⲫϯ (blessed is God) - Ⲫϯ as divine name has no article'
        },
        {
          id: 'ex-4-4-9',
          type: 'sentence_building',
          question: 'Build: "Love is patient" (abstract noun)',
          correctAnswer: 'ϯⲁⲅⲁⲡⲏ ⲟⲩⲣⲉϥⲱⲟⲩⲛ̀ϩⲏⲧ ⲧⲉ',
          wordBank: ['ϯⲁⲅⲁⲡⲏ', 'ⲟⲩⲣⲉϥⲱⲟⲩⲛ̀ϩⲏⲧ', 'ⲧⲉ', 'ⲁⲅⲁⲡⲏ'],
          explanation: 'ϯⲁⲅⲁⲡⲏ ⲟⲩⲣⲉϥⲱⲟⲩⲛ̀ϩⲏⲧ ⲧⲉ = love (THE love, with article) is patient - Coptic uses article even for abstract'
        },
        {
          id: 'ex-4-4-10',
          type: 'translation',
          question: 'Translate: ϧⲉⲛ ⲟⲩⲙⲉⲑⲙⲏⲓ',
          questionCoptic: 'ϧⲉⲛ ⲟⲩⲙⲉⲑⲙⲏⲓ',
          correctAnswer: 'in truth',
          options: ['in truth', 'in the truth', 'in a truth', 'truly'],
          explanation: 'ϧⲉⲛ ⲟⲩⲙⲉⲑⲙⲏⲓ = in truth (indefinite/abstract); ϧⲉⲛ ϯⲙⲉⲑⲙⲏⲓ = in THE truth (specific)'
        }
      ]
    }
  ]
};

export default unit4;
