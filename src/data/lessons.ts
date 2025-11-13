import unit1 from './unit-01-alphabet';
import unit2 from './unit-02-pronunciation-rules';
import unit3 from './unit-03-first-words';
import unit4 from './unit-04-definite-article';
import unit5 from './unit-05-indefinite-article';
import unit6 from './unit-06-subject-pronouns';
import unit7 from './unit-07-possessive-pronouns';
import unit8 from './unit-08-copula-to-be';
import unit9 from './unit-09-common-verbs';
import unit10 from './unit-10-present-tense';
import unit11 from './unit-11-perfect-past-tense';
import unit12 from './unit-12-future-tense';
import unit13 from './unit-13-imperative-mood';
import unit14 from './unit-14-suffix-pronouns';
import unit15 from './unit-15-prepositions';
import unit16 from './unit-16-demonstratives';
import unit17 from './unit-17-question-words';
import unit18 from './unit-18-negation-patterns';
import unit19 from './unit-19-relative-clauses';
import unit20 from './unit-20-existential-possessive';
import unit21 from './unit-21-advanced-genitive';
import unit22 from './unit-22-conditional-sentences';
import unit23 from './unit-23-temporal-clauses';
import unit24 from './unit-24-causative-purpose';
import unit25 from './unit-25-participles';
import unit26 from './unit-26-extended-vocabulary';
import unit27 from './unit-27-lords-prayer-analysis';
import unit28 from './unit-28-gospel-readings';
import unit29 from './unit-29-liturgical-coptic';
import unit30 from './unit-30-reading-composition';
import { Unit } from '../../types';

/**
 * Complete Bohairic Coptic Curriculum
 *
 * Units 1-30: 30 units covering comprehensive Bohairic Coptic from basics to advanced reading
 * All content verified for Bohairic dialect consistency
 *
 * Curriculum Structure (Updated to match CURRICULUM_OUTLINE.md):
 * - Unit 1: Coptic Alphabet
 * - Unit 2: Pronunciation Rules
 * - Unit 3: First Words & Basic Vocabulary
 * - Unit 4: The Definite Article (Ⲡⲓ, Ϯ, Ⲛⲓ)
 * - Unit 5: Indefinite Article & Noun Basics (ⲟⲩ, ϩⲁⲛ)
 * - Unit 6: Subject Pronouns
 * - Unit 7: Possessive Pronouns
 * - Unit 8: "To Be" - Copula Sentences (ⲡⲉ, ⲧⲉ, ⲛⲉ)
 * - Unit 9: Common Verbs
 * - Unit 10: Present Tense
 * - Unit 11: Perfect/Past Tense
 * - Unit 12: Future Tense
 * - Unit 13: Imperative Mood (Commands)
 * - Unit 14: Suffix Pronouns (Object Pronouns)
 * - Units 15-22: Advanced grammar (prepositions, demonstratives, questions, negation, relative clauses, existentials, genitive, conditionals)
 * - Units 23-25: Complex grammar (temporal clauses, causative, participles)
 * - Unit 26: Extended vocabulary
 * - Units 27-29: Biblical & liturgical texts (Lord's Prayer with analysis, Gospel readings & Beatitudes, Advanced Liturgical Coptic with Psalms & Agpeya)
 * - Unit 30: Reading & composition
 *
 * Key Bohairic corrections applied throughout:
 * - Verbs: ⲙⲟϣⲓ (not ⲙⲟⲟϣⲉ), ϣⲉⲛⲓ (not ⲃⲱⲕ), ⲓ̀ (not ⲉⲓ), ⲙⲟⲩϯ (not ⲙⲟⲩⲧⲉ), ⲥ̀ϧⲁⲓ (not ⲥϩⲁⲓ), ⲙⲉⲛⲣⲉ (not ⲙⲉⲣⲓ)
 * - Nouns: ϩⲓⲙⲓ (not ⲥϩⲓⲙⲉ), ⲥⲱⲛⲓ (not ⲥⲱⲛⲉ), ⲓⲱⲧ (not ⲉⲓⲱⲧ), ϣⲏⲣⲓ (not ⲥⲏⲣⲓ)
 * - God: ⲫϯ (not ⲫⲛⲟⲩϯ)
 * - Pattern: -ⲓ endings (Bohairic) vs -ⲉ endings (Sahidic)
 */
export const copticUnits: Unit[] = [
  unit1,
  unit2,
  unit3,
  unit4,
  unit5,
  unit6,
  unit7,
  unit8,
  unit9,
  unit10,
  unit11,
  unit12,
  unit13,
  unit14,
  unit15,
  unit16,
  unit17,
  unit18,
  unit19,
  unit20,
  unit21,
  unit22,
  unit23,
  unit24,
  unit25,
  unit26,
  unit27,
  unit28,
  unit29,
  unit30
];

// Export individual units for selective imports if needed
export {
  unit1,
  unit2,
  unit3,
  unit4,
  unit5,
  unit6,
  unit7,
  unit8,
  unit9,
  unit10,
  unit11,
  unit12,
  unit13,
  unit14,
  unit15,
  unit16,
  unit17,
  unit18,
  unit19,
  unit20,
  unit21,
  unit22,
  unit23,
  unit24,
  unit25,
  unit26,
  unit27,
  unit28,
  unit29,
  unit30
};

export default copticUnits;
