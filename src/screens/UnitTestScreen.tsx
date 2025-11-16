import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Button, Card } from '../components';
import { LessonExercises } from '../components/exercises/LessonExercises';
import { copticUnitTests } from '../data/tests/unit-tests';
import { copticUnits } from '../data/lessons';
import { useProgressStore } from '../store/progressStore';
import { useUnitTestStore } from '../store/unitTestStore';
import { useSettingsStore } from '../store/settingsStore';
import { useTheme } from '../theme/ThemeContext';

interface UnitTestScreenProps {
  testId: string;
  onComplete: () => void;
  onExit: () => void;
}

export const UnitTestScreen: React.FC<UnitTestScreenProps> = ({ testId, onComplete, onExit }) => {
  const { unlockLessonsByUnit } = useProgressStore();
  const { recordTestAttempt, getTestProgress } = useUnitTestStore();
  const { developerModeEnabled } = useSettingsStore();
  const { colors } = useTheme();

  const test = copticUnitTests.find(t => t.id === testId);
  const testProgress = getTestProgress(testId);

  const [started, setStarted] = useState(false);
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<any[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [testResults, setTestResults] = useState<{
    correctCount: number;
    total: number;
    percentage: number;
    passed: boolean;
  } | null>(null);

  if (!test) {
    return (
      <View style={[styles.container, { backgroundColor: colors.background }]}>
        <Text style={[styles.errorText, { color: colors.error }]}>Test not found</Text>
      </View>
    );
  }

  const unit = copticUnits.find(u => u.id === test.unitId);

  const handleStart = () => {
    setStarted(true);
    setCurrentExerciseIndex(0);
    setUserAnswers([]);
    setShowResults(false);
  };

  const handleExerciseComplete = (correctCount: number, totalCount: number) => {
    // Test complete - calculate and record results
    calculateAndRecordResults(correctCount, totalCount);
  };

  const calculateAndRecordResults = (correctCount: number, totalCount: number) => {
    const percentage = (correctCount / totalCount) * 100;
    const passed = percentage >= 90; // 90% passing threshold

    // Award 100 XP only on first pass
    const isFirstPass = !testProgress?.passed && passed;
    const xpEarned = isFirstPass && !developerModeEnabled ? 100 : 0;

    // Record attempt (unless in developer mode)
    if (!developerModeEnabled) {
      recordTestAttempt({
        testId: test.id,
        unitId: test.unitId,
        score: correctCount,
        total: totalCount,
        percentage,
        passed,
        completedAt: new Date().toISOString(),
        xpEarned,
      });

      // If passed, unlock all lessons in this unit and previous units
      if (passed && unit) {
        unlockLessonsByUnit(unit.order, xpEarned);
      }
    }

    // Store results for display
    setTestResults({ correctCount, total: totalCount, percentage, passed });
    setShowResults(true);
  };

  const checkAnswer = (exercise: any, userAnswer: any): boolean => {
    switch (exercise.type) {
      case 'multipleChoice':
      case 'translation':
      case 'fillBlank':
        return userAnswer === exercise.correctAnswer;
      case 'matching':
        // For matching, check if all pairs are correct
        return userAnswer === 'matched';
      case 'sentenceBuilding':
        // Check if sentence matches
        return userAnswer === exercise.correctAnswer;
      default:
        return false;
    }
  };

  const getResults = () => {
    if (testResults) {
      return testResults;
    }
    // Fallback in case testResults is null
    return { correctCount: 0, total: 0, percentage: 0, passed: false };
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 20,
      paddingTop: 60,
      paddingBottom: 20,
      backgroundColor: colors.surface,
      borderBottomWidth: 1,
      borderBottomColor: colors.border,
    },
    backButton: {
      width: 40,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
    },
    backIcon: {
      fontSize: 24,
      color: colors.textPrimary,
    },
    headerTitle: {
      fontSize: 18,
      fontWeight: '700',
      color: colors.textPrimary,
      flex: 1,
      textAlign: 'center',
      marginHorizontal: 10,
    },
    placeholder: {
      width: 40,
    },
    scrollView: {
      flex: 1,
    },
    scrollContent: {
      padding: 20,
    },
    introCard: {
      padding: 24,
      marginBottom: 20,
    },
    testIcon: {
      fontSize: 60,
      textAlign: 'center',
      marginBottom: 16,
    },
    testTitle: {
      fontSize: 24,
      fontWeight: '700',
      color: colors.textPrimary,
      textAlign: 'center',
      marginBottom: 8,
    },
    testDescription: {
      fontSize: 16,
      color: colors.textSecondary,
      textAlign: 'center',
      marginBottom: 24,
      lineHeight: 22,
    },
    statsRow: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginBottom: 24,
    },
    statItem: {
      alignItems: 'center',
    },
    statValue: {
      fontSize: 24,
      fontWeight: '700',
      color: colors.primary,
      marginBottom: 4,
    },
    statLabel: {
      fontSize: 14,
      color: colors.textSecondary,
    },
    bestScoreCard: {
      padding: 16,
      marginBottom: 20,
      backgroundColor: '#10B98110',
      borderColor: colors.primary,
      borderWidth: 2,
    },
    bestScoreTitle: {
      fontSize: 16,
      fontWeight: '600',
      color: colors.primary,
      marginBottom: 8,
    },
    bestScoreText: {
      fontSize: 18,
      fontWeight: '700',
      color: colors.primary,
    },
    infoBox: {
      padding: 16,
      marginBottom: 20,
      backgroundColor: '#3b82f610',
      borderRadius: 12,
      borderWidth: 1,
      borderColor: '#3b82f6',
    },
    infoText: {
      fontSize: 14,
      color: colors.textPrimary,
      lineHeight: 20,
    },
    infoHighlight: {
      fontWeight: '700',
      color: '#3b82f6',
    },
    resultsCard: {
      padding: 24,
      marginBottom: 20,
    },
    resultsIcon: {
      fontSize: 60,
      textAlign: 'center',
      marginBottom: 16,
    },
    resultsTitle: {
      fontSize: 28,
      fontWeight: '700',
      textAlign: 'center',
      marginBottom: 8,
    },
    resultsScore: {
      fontSize: 36,
      fontWeight: '700',
      color: colors.primary,
      textAlign: 'center',
      marginBottom: 8,
    },
    resultsPercentage: {
      fontSize: 20,
      color: colors.textSecondary,
      textAlign: 'center',
      marginBottom: 24,
    },
    resultsStatus: {
      fontSize: 18,
      fontWeight: '600',
      textAlign: 'center',
      marginBottom: 16,
      paddingVertical: 12,
      paddingHorizontal: 24,
      borderRadius: 8,
    },
    passedStatus: {
      backgroundColor: '#10B98120',
      color: '#059669',
    },
    failedStatus: {
      backgroundColor: '#ef444420',
      color: '#dc2626',
    },
    xpEarned: {
      fontSize: 24,
      fontWeight: '700',
      color: '#f59e0b',
      textAlign: 'center',
      marginBottom: 24,
    },
    unlockedMessage: {
      fontSize: 16,
      color: colors.textPrimary,
      textAlign: 'center',
      marginBottom: 24,
      lineHeight: 22,
    },
    buttonsRow: {
      flexDirection: 'row',
      gap: 12,
    },
    errorText: {
      fontSize: 18,
      color: colors.error,
      textAlign: 'center',
      marginTop: 100,
    },
  });

  // Show intro screen before starting
  if (!started) {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton} onPress={onExit}>
            <Text style={styles.backIcon}>←</Text>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Unit Test</Text>
          <View style={styles.placeholder} />
        </View>

        <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
          <Card style={styles.introCard}>
            <Text style={styles.testIcon}>📝</Text>
            <Text style={styles.testTitle}>{test.title}</Text>
            <Text style={styles.testDescription}>{test.description}</Text>

            <View style={styles.statsRow}>
              <View style={styles.statItem}>
                <Text style={styles.statValue}>{test.exercises.length}</Text>
                <Text style={styles.statLabel}>Questions</Text>
              </View>
              <View style={styles.statItem}>
                <Text style={styles.statValue}>90%</Text>
                <Text style={styles.statLabel}>To Pass</Text>
              </View>
              <View style={styles.statItem}>
                <Text style={styles.statValue}>100</Text>
                <Text style={styles.statLabel}>XP Reward</Text>
              </View>
            </View>

            {testProgress && testProgress.passed && (
              <Card style={styles.bestScoreCard}>
                <Text style={styles.bestScoreTitle}>Your Best Score:</Text>
                <Text style={styles.bestScoreText}>
                  {testProgress.bestScore}/{testProgress.bestScore + (test.exercises.length - testProgress.bestScore)} ({testProgress.bestPercentage.toFixed(0)}%) ⭐
                </Text>
              </Card>
            )}

            <View style={styles.infoBox}>
              <Text style={styles.infoText}>
                <Text style={styles.infoHighlight}>Pass this test with 90% or higher</Text> to unlock all lessons in Unit {unit?.order} and all previous units!{'\n\n'}
                First-time pass awards <Text style={styles.infoHighlight}>100 XP</Text>.
              </Text>
            </View>

            <Button title="Start Test" onPress={handleStart} fullWidth />
          </Card>
        </ScrollView>
      </View>
    );
  }

  // Show results screen after completion
  if (showResults) {
    const results = getResults();

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton} onPress={onComplete}>
            <Text style={styles.backIcon}>✓</Text>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Test Results</Text>
          <View style={styles.placeholder} />
        </View>

        <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
          <Card style={styles.resultsCard}>
            <Text style={styles.resultsIcon}>{results.passed ? '🎉' : '📚'}</Text>
            <Text style={[styles.resultsTitle, { color: results.passed ? '#059669' : '#dc2626' }]}>
              {results.passed ? 'Test Passed!' : 'Keep Practicing!'}
            </Text>
            <Text style={styles.resultsScore}>
              {results.correctCount}/{results.total}
            </Text>
            <Text style={styles.resultsPercentage}>
              {results.percentage.toFixed(0)}% Correct
            </Text>

            <Text style={[styles.resultsStatus, results.passed ? styles.passedStatus : styles.failedStatus]}>
              {results.passed ? '✓ PASSED' : '✗ NOT PASSED'}
            </Text>

            {results.passed && !developerModeEnabled && !testProgress?.passed && (
              <>
                <Text style={styles.xpEarned}>+100 XP Earned!</Text>
                <Text style={styles.unlockedMessage}>
                  🔓 All lessons in Unit {unit?.order} and previous units have been unlocked!
                </Text>
              </>
            )}

            {!results.passed && (
              <Text style={styles.unlockedMessage}>
                You need 90% or higher to pass. Review the material and try again!
              </Text>
            )}

            <View style={styles.buttonsRow}>
              {!results.passed && (
                <Button title="Retry" onPress={handleStart} variant="secondary" style={{ flex: 1 }} />
              )}
              <Button title="Continue" onPress={onComplete} style={{ flex: 1 }} />
            </View>
          </Card>
        </ScrollView>
      </View>
    );
  }

  // Show test exercises
  return (
    <LessonExercises
      exercises={test.exercises}
      lessonId={test.id}
      lessonTitle={test.title}
      onComplete={handleExerciseComplete}
      onExit={onExit}
      isTest={true}
    />
  );
};
