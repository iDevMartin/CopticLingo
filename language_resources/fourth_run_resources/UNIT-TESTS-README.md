# CopticLingo Unit Tests

Comprehensive unit tests for all 45 units in the Bohairic Coptic curriculum.

## 📊 Overview

- **45 Unit Tests** - One for each unit in the curriculum
- **1,125+ Exercises** - Approximately 25-40 exercises per unit test
- **Comprehensive Coverage** - Tests all concepts, vocabulary, and grammar from each unit
- **Multiple Exercise Types** - Translation, multiple choice, matching, fill-blank, sentence building
- **Bohairic Dialect** - All content verified for Bohairic consistency

## 📁 File Structure

```
fourth_run_resources/
├── unit-tests.ts                          # Master export file
├── unit-01-alphabet-test.ts               # Unit 1 Test (25 exercises)
├── unit-02-pronunciation-rules-test.ts    # Unit 2 Test (25 exercises)
├── unit-03-first-words-test.ts            # Unit 3 Test (30 exercises)
├── ...
├── unit-27-lords-prayer-analysis-test.ts  # Unit 27 Test (40 exercises)
├── unit-28-gospel-readings-test.ts        # Unit 28 Test (40 exercises)
├── unit-29-liturgical-coptic-test.ts      # Unit 29 Test (40 exercises)
├── ...
└── unit-45-advanced-composition-test.ts   # Unit 45 Test (25 exercises)
```

## 🎯 Test Distribution by Section

### Foundation (Units 1-5)
- Unit 1: Coptic Alphabet (25 exercises)
- Unit 2: Pronunciation Rules (25 exercises)
- Unit 3: First Words & Basic Vocabulary (30 exercises)
- Unit 4: Definite Article (30 exercises)
- Unit 5: Indefinite Article (25 exercises)

### Basic Grammar (Units 6-10)
- Unit 6: Subject Pronouns (30 exercises)
- Unit 7: Possessive Pronouns (30 exercises)
- Unit 8: Copula "To Be" (30 exercises)
- Unit 9: Common Verbs (30 exercises)
- Unit 10: Present Tense (30 exercises)

### Verb System (Units 11-15)
- Unit 11: Perfect/Past Tense (30 exercises)
- Unit 12: Future Tense (30 exercises)
- Unit 13: Imperative Mood (30 exercises)
- Unit 14: Suffix Pronouns (30 exercises)
- Unit 15: Prepositions (30 exercises)

### Intermediate Grammar (Units 16-20)
- Unit 16: Demonstratives (27 exercises)
- Unit 17: Question Words (25 exercises)
- Unit 18: Negation Patterns (25 exercises)
- Unit 19: Relative Clauses (25 exercises)
- Unit 20: Existential/Possessive (25 exercises)

### Advanced Grammar (Units 21-25)
- Unit 21: Advanced Genitive (25 exercises)
- Unit 22: Conditional Sentences (25 exercises)
- Unit 23: Temporal Clauses (25 exercises)
- Unit 24: Causative/Purpose (25 exercises)
- Unit 25: Participles (25 exercises)

### Applied Coptic (Units 26-30)
- Unit 26: Extended Vocabulary (30 exercises)
- Unit 27: Lord's Prayer Analysis (40 exercises)
- Unit 28: Gospel Readings (40 exercises)
- Unit 29: Liturgical Coptic (40 exercises)
- Unit 30: Reading & Composition (25 exercises)

### Beginner Expansion (Units 31-35)
- Unit 31: Numbers Extended (25 exercises)
- Unit 32: Time Expressions (25 exercises)
- Unit 33: Colors & Descriptions (25 exercises)
- Unit 34: Food & Meals (25 exercises)
- Unit 35: Clothing & Body (25 exercises)

### Intermediate Grammar Expansion (Units 36-37)
- Unit 36: Past Continuous (25 exercises)
- Unit 37: Circumstantial Clauses (25 exercises)

### Intermediate Expansion (Units 38-40)
- Unit 38: Numbers with Nouns (25 exercises)
- Unit 39: Conjunctions (25 exercises)
- Unit 40: Weather & Nature (25 exercises)

### Advanced Application (Units 41-45)
- Unit 41: Church Conversations (25 exercises)
- Unit 42: Market Dialogues (25 exercises)
- Unit 43: Reading Parables (25 exercises)
- Unit 44: Reading Epistles (25 exercises)
- Unit 45: Advanced Composition (25 exercises)

## 🚀 Implementation Guide

### Option 1: Add Tests as Final Lessons

Append each unit test as the final lesson in its corresponding unit:

```typescript
import { copticUnits } from './lessons';
import { copticUnitTests } from './unit-tests';

// Add unit tests as final lessons in each unit
copticUnits.forEach((unit, index) => {
  const unitTest = copticUnitTests[index];
  unit.lessons.push(unitTest);
});

export default copticUnits;
```

### Option 2: Separate Test System

Keep tests separate and unlock them after unit completion:

```typescript
import { copticUnitTests } from './unit-tests';

// Get unit test for a specific unit
function getUnitTest(unitId: string): Lesson | undefined {
  return copticUnitTests.find(test => test.unitId === unitId);
}

// Check if user can access unit test
function canTakeUnitTest(unitId: string, userProgress: UserProgress): boolean {
  const unit = getUnit(unitId);
  const completedLessons = unit.lessons.filter(lesson =>
    userProgress.completedLessons.includes(lesson.id)
  );

  // Unlock test when all lessons are completed
  return completedLessons.length === unit.lessons.length;
}

// Calculate test score
function gradeUnitTest(testId: string, userAnswers: Answer[]): TestResult {
  const test = copticUnitTests.find(t => t.id === testId);
  if (!test) return null;

  let correctCount = 0;
  test.exercises.forEach((exercise, index) => {
    if (userAnswers[index] === exercise.correctAnswer) {
      correctCount++;
    }
  });

  const percentage = (correctCount / test.exercises.length) * 100;
  const passed = percentage >= 80; // 80% passing threshold

  return {
    score: correctCount,
    total: test.exercises.length,
    percentage,
    passed,
    xpEarned: passed ? test.xpReward : 0
  };
}
```

### Option 3: Hybrid Approach

Combine both approaches for maximum flexibility:

```typescript
import { copticUnits } from './lessons';
import { copticUnitTests } from './unit-tests';

// Configuration
const TEST_MODE = 'separate'; // 'integrated' or 'separate'
const PASSING_SCORE = 80; // Percentage required to pass
const BONUS_XP_MULTIPLIER = 1.5; // Extra XP for passing tests

if (TEST_MODE === 'integrated') {
  // Add tests as final lessons
  copticUnits.forEach((unit, index) => {
    unit.lessons.push(copticUnitTests[index]);
  });
} else {
  // Keep tests separate, unlock based on unit completion
  // Implement unlock logic in your UI/state management
}
```

## 💡 Best Practices

### 1. **Unlocking Tests**
- Unlock unit tests only after ALL lessons in the unit are completed
- Show a clear indicator when a unit test becomes available
- Consider adding a "Take Unit Test" button in the UI

### 2. **Scoring & Feedback**
- Set a passing threshold (recommended: 80%)
- Provide immediate feedback after each question
- Show detailed explanations for incorrect answers
- Display final score with breakdown by topic

### 3. **Rewards & Motivation**
- Award bonus XP for passing (tests have 50-100 XP rewards)
- Consider achievement badges for perfect scores
- Allow retakes with reduced XP for subsequent attempts
- Track best score per unit test

### 4. **Progress Tracking**
```typescript
interface UnitTestProgress {
  testId: string;
  attempts: number;
  bestScore: number;
  bestPercentage: number;
  passed: boolean;
  completedAt?: Date;
}
```

### 5. **UI Considerations**
- Display test icon/badge differently from regular lessons
- Show test difficulty indicator (based on unit level)
- Provide study recommendations before taking test
- Allow reviewing incorrect answers after completion

## 📊 Exercise Type Distribution

Each unit test contains a variety of exercise types:

| Exercise Type | Purpose | Percentage |
|--------------|---------|------------|
| Multiple Choice | Vocabulary & concept recognition | ~30% |
| Translation | Coptic ↔ English comprehension | ~25% |
| Matching | Pattern recognition & pairing | ~20% |
| Fill in the Blank | Grammar & sentence completion | ~15% |
| Sentence Building | Active construction skills | ~10% |

## 🎓 Learning Outcomes

After completing each unit test, students should demonstrate:

✅ **Vocabulary Mastery** - Recall and use all key terms from the unit
✅ **Grammar Proficiency** - Apply grammatical patterns correctly
✅ **Translation Skills** - Convert between Coptic and English accurately
✅ **Comprehension** - Understand authentic Coptic texts
✅ **Production** - Create original Coptic sentences

## 🔧 Technical Details

### Type Structure
```typescript
interface Lesson {
  id: string;
  unitId: string;
  title: string;
  description: string;
  order: number;
  xpReward: number;
  isLocked: boolean;
  completed: boolean;
  exercises: Exercise[];
}
```

### Import Structure
```typescript
// Import all tests
import { copticUnitTests } from './unit-tests';

// Import specific tests
import { unit1Test, unit10Test, unit27Test } from './unit-tests';

// Import default export (array of all tests)
import copticUnitTests from './unit-tests';
```

## 📈 Analytics & Tracking

Consider tracking these metrics for each unit test:

```typescript
interface UnitTestAnalytics {
  testId: string;
  totalAttempts: number;
  averageScore: number;
  passRate: number; // Percentage of students who passed
  commonMistakes: {
    exerciseId: string;
    incorrectRate: number;
  }[];
  averageTimeToComplete: number; // in seconds
}
```

## 🎨 UI/UX Recommendations

### Test Entry Screen
```
┌────────────────────────────────────┐
│  Unit 1 Test: Coptic Alphabet     │
│                                    │
│  📝 25 questions                   │
│  ⏱️ ~15 minutes                    │
│  🎯 80% required to pass           │
│  ⭐ 50 XP reward                   │
│                                    │
│  Your best: 88% (22/25) ⭐         │
│                                    │
│  [Start Test]  [Review Unit]      │
└────────────────────────────────────┘
```

### Results Screen
```
┌────────────────────────────────────┐
│  Test Complete! 🎉                 │
│                                    │
│  Score: 22/25 (88%)               │
│  Status: PASSED ✅                 │
│                                    │
│  XP Earned: +50                   │
│  Time: 12:34                      │
│                                    │
│  Breakdown:                       │
│  ✓ Vocabulary: 9/10               │
│  ✓ Grammar: 8/10                  │
│  ✓ Translation: 5/5               │
│                                    │
│  [Review Answers]  [Continue]     │
└────────────────────────────────────┘
```

## 🔄 Future Enhancements

Consider adding these features:

1. **Adaptive Testing** - Adjust difficulty based on user performance
2. **Timed Mode** - Add optional time limits for extra challenge
3. **Practice Mode** - Allow unlimited practice without affecting score
4. **Study Recommendations** - Suggest specific lessons to review based on weak areas
5. **Leaderboards** - Track top scores per unit test
6. **Certificates** - Award completion certificates for all tests passed

## 📞 Support & Questions

For questions about implementation or test content, refer to:
- Main curriculum: `lessons.ts`
- Type definitions: `../../types.ts`
- Individual unit files: `unit-XX-[name].ts`

---

**Total Content**: 45 comprehensive unit tests with 1,125+ exercises ready for integration into your CopticLingo app! 🎓
