import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { UserProgress } from '../types';

interface ProgressState extends UserProgress {
  completeLesson: (lessonId: string, xpGained: number) => void;
  addVocabulary: (word: string) => void;
  addMistake: (word: string) => void;
  updateStreak: () => void;
  checkStreakStatus: () => void;
  unlockLessonsByUnit: (unitOrder: number, xpGained: number) => void;
  resetProgress: () => void;
}

const initialProgress: UserProgress = {
  userId: 'user-1',
  completedLessons: [],
  currentStreak: 0,
  longestStreak: 0,
  totalXP: 0,
  level: 1,
  lastPracticeDate: null,
  vocabularyLearned: [],
  mistakeWords: [],
};

const ProgressContext = createContext<ProgressState | undefined>(undefined);

export const ProgressProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [progress, setProgress] = useState<UserProgress>(initialProgress);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load from AsyncStorage on mount
  useEffect(() => {
    const loadProgress = async () => {
      try {
        const stored = await AsyncStorage.getItem('copticlingo-progress');
        if (stored) {
          const loadedProgress = JSON.parse(stored);

          // Check if streak needs to be reset (without updating lastPracticeDate)
          const today = new Date().toISOString().split('T')[0];
          const lastPractice = loadedProgress.lastPracticeDate;

          if (lastPractice) {
            const lastDate = new Date(lastPractice);
            const currentDate = new Date(today);
            const diffTime = currentDate.getTime() - lastDate.getTime();
            const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

            // If more than 1 day has passed, reset streak but keep lastPracticeDate unchanged
            if (diffDays > 1) {
              loadedProgress.currentStreak = 0;
            }
          }

          setProgress(loadedProgress);
        }
      } catch (error) {
        console.warn('Failed to load progress:', error);
      } finally {
        setIsLoaded(true);
      }
    };
    loadProgress();
  }, []);

  // Save to AsyncStorage whenever progress changes
  useEffect(() => {
    if (isLoaded) {
      AsyncStorage.setItem('copticlingo-progress', JSON.stringify(progress)).catch(error =>
        console.warn('Failed to save progress:', error)
      );
    }
  }, [progress, isLoaded]);

  const completeLesson = (lessonId: string, xpGained: number) => {
    setProgress(state => {
      const newCompletedLessons = [...new Set([...state.completedLessons, lessonId])];
      const newTotalXP = state.totalXP + xpGained;
      const newLevel = Math.floor(newTotalXP / 100) + 1;

      return {
        ...state,
        completedLessons: newCompletedLessons,
        totalXP: newTotalXP,
        level: newLevel,
      };
    });
  };

  const addVocabulary = (word: string) => {
    setProgress(state => ({
      ...state,
      vocabularyLearned: [...new Set([...state.vocabularyLearned, word])],
    }));
  };

  const addMistake = (word: string) => {
    setProgress(state => ({
      ...state,
      mistakeWords: [...new Set([...state.mistakeWords, word])],
    }));
  };

  const updateStreak = () => {
    setProgress(state => {
      const today = new Date().toISOString().split('T')[0];
      const lastPractice = state.lastPracticeDate;

      // First time practicing
      if (!lastPractice) {
        return {
          ...state,
          currentStreak: 1,
          longestStreak: Math.max(1, state.longestStreak),
          lastPracticeDate: today,
        };
      }

      const lastDate = new Date(lastPractice);
      const currentDate = new Date(today);
      const diffTime = currentDate.getTime() - lastDate.getTime();
      const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

      // Same day - no change to streak, but don't update lastPracticeDate
      if (diffDays === 0) {
        return state;
      }
      // Next day - increment streak and update lastPracticeDate
      else if (diffDays === 1) {
        const newStreak = state.currentStreak + 1;
        return {
          ...state,
          currentStreak: newStreak,
          longestStreak: Math.max(newStreak, state.longestStreak),
          lastPracticeDate: today,
        };
      }
      // Missed days - reset to 1 and update lastPracticeDate
      else {
        return {
          ...state,
          currentStreak: 1,
          longestStreak: state.longestStreak,
          lastPracticeDate: today,
        };
      }
    });
  };

  const checkStreakStatus = () => {
    setProgress(state => {
      const today = new Date().toISOString().split('T')[0];
      const lastPractice = state.lastPracticeDate;

      // No previous practice date, don't change anything
      if (!lastPractice) {
        return state;
      }

      const lastDate = new Date(lastPractice);
      const currentDate = new Date(today);
      const diffTime = currentDate.getTime() - lastDate.getTime();
      const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

      // Same day or next day - streak is still valid, don't change anything
      if (diffDays <= 1) {
        return state;
      }
      // Missed days - reset streak but DON'T update lastPracticeDate
      // (it will be updated when they actually complete a lesson)
      else {
        return {
          ...state,
          currentStreak: 0,
        };
      }
    });
  };

  const unlockLessonsByUnit = (unitOrder: number, xpGained: number) => {
    // Import lessons data to get lesson IDs
    import('../data/lessons').then(({ copticUnits }) => {
      setProgress(state => {
        // Get all lesson IDs from current unit and all previous units
        const lessonIdsToUnlock: string[] = [];

        console.log(`Unlocking lessons for unit ${unitOrder} and all previous units`);
        copticUnits.forEach((unit) => {
          if (unit.order <= unitOrder) {
            console.log(`Unit ${unit.order} (${unit.title}): unlocking ${unit.lessons.length} lessons`);
            unit.lessons.forEach((lesson) => {
              lessonIdsToUnlock.push(lesson.id);
            });
          }
        });

        console.log(`Total lessons to unlock: ${lessonIdsToUnlock.length}`);
        console.log(`Previously completed: ${state.completedLessons.length}`);

        // Merge with existing completed lessons (no duplicates)
        const newCompletedLessons = [...new Set([...state.completedLessons, ...lessonIdsToUnlock])];
        const newTotalXP = state.totalXP + xpGained;
        const newLevel = Math.floor(newTotalXP / 100) + 1;

        console.log(`After unlock: ${newCompletedLessons.length} completed lessons`);

        return {
          ...state,
          completedLessons: newCompletedLessons,
          totalXP: newTotalXP,
          level: newLevel,
        };
      });
    });
  };

  const resetProgress = () => {
    setProgress(initialProgress);
  };

  if (!isLoaded) {
    return null;
  }

  return (
    <ProgressContext.Provider
      value={{
        ...progress,
        completeLesson,
        addVocabulary,
        addMistake,
        updateStreak,
        checkStreakStatus,
        unlockLessonsByUnit,
        resetProgress,
      }}
    >
      {children}
    </ProgressContext.Provider>
  );
};

export const useProgressStore = () => {
  const context = useContext(ProgressContext);
  if (!context) {
    throw new Error('useProgressStore must be used within ProgressProvider');
  }
  return context;
};
