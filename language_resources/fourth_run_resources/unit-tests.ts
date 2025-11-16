import { Lesson } from '../../types';
import unit1Test from './unit-01-alphabet-test';
import unit2Test from './unit-02-pronunciation-rules-test';
import unit3Test from './unit-03-first-words-test';
import unit4Test from './unit-04-definite-article-test';
import unit5Test from './unit-05-indefinite-article-test';
import unit6Test from './unit-06-subject-pronouns-test';
import unit7Test from './unit-07-possessive-pronouns-test';
import unit8Test from './unit-08-copula-to-be-test';
import unit9Test from './unit-09-common-verbs-test';
import unit10Test from './unit-10-present-tense-test';
import unit11Test from './unit-11-perfect-past-tense-test';
import unit12Test from './unit-12-future-tense-test';
import unit13Test from './unit-13-imperative-mood-test';
import unit14Test from './unit-14-suffix-pronouns-test';
import unit15Test from './unit-15-prepositions-test';
import unit16Test from './unit-16-demonstratives-test';
import unit17Test from './unit-17-question-words-test';
import unit18Test from './unit-18-negation-patterns-test';
import unit19Test from './unit-19-relative-clauses-test';
import unit20Test from './unit-20-existential-possessive-test';
import unit21Test from './unit-21-advanced-genitive-test';
import unit22Test from './unit-22-conditional-sentences-test';
import unit23Test from './unit-23-temporal-clauses-test';
import unit24Test from './unit-24-causative-purpose-test';
import unit25Test from './unit-25-participles-test';
import unit26Test from './unit-26-extended-vocabulary-test';
import unit27Test from './unit-27-lords-prayer-analysis-test';
import unit28Test from './unit-28-gospel-readings-test';
import unit29Test from './unit-29-liturgical-coptic-test';
import unit30Test from './unit-30-reading-composition-test';
import unit31Test from './unit-31-numbers-extended-test';
import unit32Test from './unit-32-time-expressions-test';
import unit33Test from './unit-33-colors-descriptions-test';
import unit34Test from './unit-34-food-meals-test';
import unit35Test from './unit-35-clothing-body-test';
import unit36Test from './unit-36-past-continuous-test';
import unit37Test from './unit-37-circumstantial-test';
import unit38Test from './unit-38-numbers-with-nouns-test';
import unit39Test from './unit-39-conjunctions-test';
import unit40Test from './unit-40-weather-nature-test';
import unit41Test from './unit-41-church-conversations-test';
import unit42Test from './unit-42-market-dialogues-test';
import unit43Test from './unit-43-reading-parables-test';
import unit44Test from './unit-44-reading-epistles-test';
import unit45Test from './unit-45-advanced-composition-test';

/**
 * Complete Bohairic Coptic Unit Tests
 *
 * 45 comprehensive unit tests covering all curriculum levels:
 * - Each unit test appears after all lessons in that unit are completed
 * - Tests contain 25-40 exercises covering all concepts from the unit
 * - Exercise types: multiple choice, translation, matching, fill-blank, sentence building
 * - All content verified for Bohairic dialect consistency
 *
 * IMPLEMENTATION GUIDE:
 * ---------------------
 * To add these tests to your app, you have two main approaches:
 *
 * OPTION 1: Add tests as final lessons in each unit
 * - Modify your Unit type to include these test lessons at the end
 * - Example: unit1.lessons.push(unit1Test)
 * - Test unlocks after all regular lessons in the unit are completed
 *
 * OPTION 2: Create separate test track/system
 * - Keep tests separate from regular lessons
 * - Unlock tests when unit completion reaches 100%
 * - Award bonus XP (50-100) for passing unit tests
 * - Could implement minimum passing score (e.g., 80% correct)
 *
 * USAGE IN CODE:
 * --------------
 * // Option 1: Append to unit lessons
 * import { copticUnits } from './lessons';
 * import { copticUnitTests } from './unit-tests';
 *
 * copticUnits.forEach((unit, index) => {
 *   unit.lessons.push(copticUnitTests[index]);
 * });
 *
 * // Option 2: Separate test system
 * import { copticUnitTests } from './unit-tests';
 *
 * function getUnitTest(unitId: string): Lesson | undefined {
 *   return copticUnitTests.find(test => test.unitId === unitId);
 * }
 *
 * // Check if user can take unit test
 * function canTakeUnitTest(unitId: string, userProgress: UserProgress): boolean {
 *   const unit = getUnit(unitId);
 *   const completedLessons = unit.lessons.filter(l =>
 *     userProgress.completedLessons.includes(l.id)
 *   );
 *   return completedLessons.length === unit.lessons.length;
 * }
 */
export const copticUnitTests: Lesson[] = [
  unit1Test,
  unit2Test,
  unit3Test,
  unit4Test,
  unit5Test,
  unit6Test,
  unit7Test,
  unit8Test,
  unit9Test,
  unit10Test,
  unit11Test,
  unit12Test,
  unit13Test,
  unit14Test,
  unit15Test,
  unit16Test,
  unit17Test,
  unit18Test,
  unit19Test,
  unit20Test,
  unit21Test,
  unit22Test,
  unit23Test,
  unit24Test,
  unit25Test,
  unit26Test,
  unit27Test,
  unit28Test,
  unit29Test,
  unit30Test,
  unit31Test,
  unit32Test,
  unit33Test,
  unit34Test,
  unit35Test,
  unit36Test,
  unit37Test,
  unit38Test,
  unit39Test,
  unit40Test,
  unit41Test,
  unit42Test,
  unit43Test,
  unit44Test,
  unit45Test
];

// Export individual tests for selective imports if needed
export {
  unit1Test,
  unit2Test,
  unit3Test,
  unit4Test,
  unit5Test,
  unit6Test,
  unit7Test,
  unit8Test,
  unit9Test,
  unit10Test,
  unit11Test,
  unit12Test,
  unit13Test,
  unit14Test,
  unit15Test,
  unit16Test,
  unit17Test,
  unit18Test,
  unit19Test,
  unit20Test,
  unit21Test,
  unit22Test,
  unit23Test,
  unit24Test,
  unit25Test,
  unit26Test,
  unit27Test,
  unit28Test,
  unit29Test,
  unit30Test,
  unit31Test,
  unit32Test,
  unit33Test,
  unit34Test,
  unit35Test,
  unit36Test,
  unit37Test,
  unit38Test,
  unit39Test,
  unit40Test,
  unit41Test,
  unit42Test,
  unit43Test,
  unit44Test,
  unit45Test
};

export default copticUnitTests;
