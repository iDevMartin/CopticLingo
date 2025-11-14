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
import unit31 from './unit-31-numbers-extended';
import unit32 from './unit-32-time-expressions';
import unit33 from './unit-33-colors-descriptions';
import unit34 from './unit-34-food-meals';
import unit35 from './unit-35-clothing-body';
import unit36 from './unit-36-past-continuous';
import unit37 from './unit-37-circumstantial';
import unit38 from './unit-38-numbers-with-nouns';
import unit39 from './unit-39-conjunctions';
import unit40 from './unit-40-weather-nature';
import unit41 from './unit-41-church-conversations';
import unit42 from './unit-42-market-dialogues';
import unit43 from './unit-43-reading-parables';
import unit44 from './unit-44-reading-epistles';
import unit45 from './unit-45-advanced-composition';
import { Unit } from '../../types';

/**
 * Complete Bohairic Coptic Curriculum
 *
 * Units 1-45: Complete beginner-to-advanced Bohairic Coptic curriculum
 * All content verified for Bohairic dialect consistency
 *
 * Curriculum Structure:
 *
 * FOUNDATION (Units 1-5):
 * - Unit 1: Coptic Alphabet (6 lessons)
 * - Unit 2: Pronunciation Rules (5 lessons)
 * - Unit 3: First Words & Basic Vocabulary (5 lessons)
 * - Unit 4: The Definite Article - Ⲡⲓ, Ϯ, Ⲛⲓ (4 lessons) ✨ Enhanced
 * - Unit 5: Indefinite Article & Noun Basics - ⲟⲩ, ϩⲁⲛ (5 lessons) ✨ Enhanced
 *
 * BASIC GRAMMAR (Units 6-10):
 * - Unit 6: Subject Pronouns (4 lessons) ✨ Enhanced
 * - Unit 7: Possessive Pronouns (4 lessons) ✨ Enhanced
 * - Unit 8: "To Be" - Copula Sentences (4 lessons) ✨ Enhanced
 * - Unit 9: Common Verbs (4 lessons) ✨ Enhanced
 * - Unit 10: Present Tense (4 lessons) ✨ Enhanced
 *
 * VERB SYSTEM (Units 11-15):
 * - Unit 11: Perfect/Past Tense (4 lessons) ✨ Enhanced
 * - Unit 12: Future Tense (4 lessons) ✨ Enhanced
 * - Unit 13: Imperative Mood (4 lessons)
 * - Unit 14: Suffix Pronouns (4 lessons) ✨ Enhanced
 * - Unit 15: Prepositions (5 lessons)
 *
 * INTERMEDIATE GRAMMAR (Units 16-20):
 * - Unit 16: Demonstratives (4 lessons) ✨ Enhanced
 * - Unit 17: Question Words (4 lessons)
 * - Unit 18: Negation Patterns (5 lessons)
 * - Unit 19: Relative Clauses (4 lessons)
 * - Unit 20: Existential/Possessive (4 lessons)
 *
 * ADVANCED GRAMMAR (Units 21-25):
 * - Unit 21: Advanced Genitive (4 lessons)
 * - Unit 22: Conditional Sentences (4 lessons)
 * - Unit 23: Temporal Clauses (4 lessons)
 * - Unit 24: Causative/Purpose (4 lessons)
 * - Unit 25: Participles (4 lessons)
 *
 * APPLIED COPTIC (Units 26-30):
 * - Unit 26: Extended Vocabulary (5 lessons)
 * - Unit 27: Lord's Prayer Analysis (10 lessons)
 * - Unit 28: Gospel Readings (13 lessons)
 * - Unit 29: Liturgical Coptic (10 lessons)
 * - Unit 30: Reading & Composition (4 lessons)
 *
 * BEGINNER EXPANSION (Units 31-35):
 * - Unit 31: Numbers 11-100 & Ordinals (4 lessons)
 * - Unit 32: Time Expressions (4 lessons)
 * - Unit 33: Colors & Descriptive Adjectives (4 lessons)
 * - Unit 34: Food & Meals (4 lessons)
 * - Unit 35: Clothing & Body (4 lessons)
 *
 * INTERMEDIATE GRAMMAR EXPANSION (Units 36-37):
 * - Unit 36: Past Continuous Tense (4 lessons)
 * - Unit 37: Circumstantial Clauses (4 lessons)
 *
 * INTERMEDIATE EXPANSION (Units 38-40):
 * - Unit 38: Numbers with Nouns (4 lessons)
 * - Unit 39: Conjunctions & Discourse Markers (4 lessons)
 * - Unit 40: Weather & Nature (4 lessons)
 *
 * ADVANCED APPLICATION (Units 41-45):
 * - Unit 41: Church Conversations (4 lessons)
 * - Unit 42: Market & Daily Dialogues (4 lessons)
 * - Unit 43: Reading Parables (4 lessons)
 * - Unit 44: Reading Epistles (4 lessons)
 * - Unit 45: Advanced Composition (4 lessons)
 *
 * Total: 45 Units, 209 Lessons, 1,670+ Exercises
 *
 * Key Bohairic corrections applied throughout:
 * - Verbs: ⲙⲟϣⲓ (not ⲙⲟⲟϣⲉ), ϣⲉⲛⲓ (not ⲃⲱⲕ), ⲓ̀ (not ⲉⲓ), ⲙⲟⲩϯ (not ⲙⲟⲩⲧⲉ), ⲥ̀ϧⲁⲓ (not ⲥϩⲁⲓ), ⲙⲉⲛⲣⲉ (not ⲙⲉⲣⲓ)
 * - Nouns: ϩⲓⲙⲓ (not ⲥϩⲓⲙⲉ), ⲥⲱⲛⲓ (not ⲥⲱⲛⲉ), ⲓⲱⲧ (not ⲉⲓⲱⲧ), ϣⲏⲣⲓ (not ⲥⲏⲣⲓ)
 * - God: ⲫϯ (not ⲫⲛⲟⲩϯ)
 * - Pattern: -ⲓ endings (Bohairic) vs -ⲉ endings (Sahidic)
 *
 * ✨ = Enhanced with additional lessons (2025-11-13)
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
  unit30,
  unit31,
  unit32,
  unit33,
  unit34,
  unit35,
  unit36,
  unit37,
  unit38,
  unit39,
  unit40,
  unit41,
  unit42,
  unit43,
  unit44,
  unit45
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
  unit30,
  unit31,
  unit32,
  unit33,
  unit34,
  unit35,
  unit36,
  unit37,
  unit38,
  unit39,
  unit40,
  unit41,
  unit42,
  unit43,
  unit44,
  unit45
};

export default copticUnits;
