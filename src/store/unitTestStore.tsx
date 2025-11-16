import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface UnitTestAttempt {
  testId: string;
  unitId: string;
  score: number;
  total: number;
  percentage: number;
  passed: boolean; // true if >= 90%
  completedAt: string;
  xpEarned: number;
}

interface UnitTestProgress {
  testId: string;
  unitId: string;
  attempts: number;
  bestScore: number;
  bestPercentage: number;
  passed: boolean;
  firstPassDate?: string;
}

interface UnitTestState {
  testProgress: UnitTestProgress[];
  attemptHistory: UnitTestAttempt[];
  recordTestAttempt: (attempt: UnitTestAttempt) => void;
  getTestProgress: (testId: string) => UnitTestProgress | undefined;
  hasPassedTest: (testId: string) => boolean;
  resetUnitTests: () => void;
}

const UnitTestContext = createContext<UnitTestState | undefined>(undefined);

const PASSING_SCORE = 90; // 90% required to pass

export const UnitTestProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [testProgress, setTestProgress] = useState<UnitTestProgress[]>([]);
  const [attemptHistory, setAttemptHistory] = useState<UnitTestAttempt[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load from AsyncStorage on mount
  useEffect(() => {
    const loadData = async () => {
      try {
        const progressData = await AsyncStorage.getItem('copticlingo-unit-test-progress');
        const historyData = await AsyncStorage.getItem('copticlingo-unit-test-history');

        if (progressData) {
          setTestProgress(JSON.parse(progressData));
        }
        if (historyData) {
          setAttemptHistory(JSON.parse(historyData));
        }
      } catch (error) {
        console.warn('Failed to load unit test data:', error);
      } finally {
        setIsLoaded(true);
      }
    };
    loadData();
  }, []);

  // Save to AsyncStorage whenever data changes
  useEffect(() => {
    if (isLoaded) {
      AsyncStorage.setItem('copticlingo-unit-test-progress', JSON.stringify(testProgress)).catch(error =>
        console.warn('Failed to save test progress:', error)
      );
    }
  }, [testProgress, isLoaded]);

  useEffect(() => {
    if (isLoaded) {
      AsyncStorage.setItem('copticlingo-unit-test-history', JSON.stringify(attemptHistory)).catch(error =>
        console.warn('Failed to save test history:', error)
      );
    }
  }, [attemptHistory, isLoaded]);

  const recordTestAttempt = (attempt: UnitTestAttempt) => {
    // Add to history
    setAttemptHistory(prev => [...prev, attempt]);

    // Update or create progress record
    setTestProgress(prev => {
      const existing = prev.find(p => p.testId === attempt.testId);

      if (existing) {
        // Update existing progress
        const isNewBest = attempt.percentage > existing.bestPercentage;
        const isFirstPass = !existing.passed && attempt.passed;

        return prev.map(p =>
          p.testId === attempt.testId
            ? {
                ...p,
                attempts: p.attempts + 1,
                bestScore: isNewBest ? attempt.score : p.bestScore,
                bestPercentage: isNewBest ? attempt.percentage : p.bestPercentage,
                passed: p.passed || attempt.passed,
                firstPassDate: isFirstPass ? attempt.completedAt : p.firstPassDate,
              }
            : p
        );
      } else {
        // Create new progress record
        return [
          ...prev,
          {
            testId: attempt.testId,
            unitId: attempt.unitId,
            attempts: 1,
            bestScore: attempt.score,
            bestPercentage: attempt.percentage,
            passed: attempt.passed,
            firstPassDate: attempt.passed ? attempt.completedAt : undefined,
          },
        ];
      }
    });
  };

  const getTestProgress = (testId: string): UnitTestProgress | undefined => {
    return testProgress.find(p => p.testId === testId);
  };

  const hasPassedTest = (testId: string): boolean => {
    const progress = getTestProgress(testId);
    return progress?.passed || false;
  };

  const resetUnitTests = () => {
    setTestProgress([]);
    setAttemptHistory([]);
  };

  if (!isLoaded) {
    return null;
  }

  return (
    <UnitTestContext.Provider
      value={{
        testProgress,
        attemptHistory,
        recordTestAttempt,
        getTestProgress,
        hasPassedTest,
        resetUnitTests,
      }}
    >
      {children}
    </UnitTestContext.Provider>
  );
};

export const useUnitTestStore = () => {
  const context = useContext(UnitTestContext);
  if (!context) {
    throw new Error('useUnitTestStore must be used within UnitTestProvider');
  }
  return context;
};
