import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { LessonNode, Card } from '../components';
import { copticUnits } from '../data/lessons';
import { useProgressStore } from '../store/progressStore';
import { useSettingsStore } from '../store/settingsStore';
import { useTheme } from '../theme/ThemeContext';

interface HomeScreenProps {
  onLessonPress: (lessonId: string) => void;
  onProfilePress: () => void;
  onReviewPress: () => void;
  onSettingsPress: () => void;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({
  onLessonPress,
  onProfilePress,
  onReviewPress,
  onSettingsPress,
}) => {
  const { completedLessons, totalXP, currentStreak, level } = useProgressStore();
  const { developerModeEnabled } = useSettingsStore();
  const { colors } = useTheme();

  const getLessonStatus = (lessonId: string, lessonOrder: number, unitLessons: any[]) => {
    const isCompleted = completedLessons.includes(lessonId);

    // In developer mode, unlock all lessons
    if (developerModeEnabled) {
      return { locked: false, completed: isCompleted };
    }

    if (lessonOrder === 1) {
      return { locked: false, completed: isCompleted };
    }

    const previousLesson = unitLessons[lessonOrder - 2];
    const isPreviousCompleted = completedLessons.includes(previousLesson.id);

    return { locked: !isPreviousCompleted, completed: isCompleted };
  };

  const getUnitLocked = (unitOrder: number) => {
    // In developer mode, unlock all units
    if (developerModeEnabled) {
      return false;
    }

    if (unitOrder === 1) return false;

    const previousUnit = copticUnits[unitOrder - 2];
    const allPreviousLessonsCompleted = previousUnit.lessons.every(lesson =>
      completedLessons.includes(lesson.id)
    );

    return !allPreviousLessonsCompleted;
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 20,
      paddingTop: 60,
      backgroundColor: colors.surface,
      borderBottomWidth: 1,
      borderBottomColor: colors.border,
    },
    headerTitle: {
      fontSize: 24,
      fontWeight: '700',
      color: colors.primary,
    },
    headerSubtitle: {
      fontSize: 14,
      color: colors.textSecondary,
      marginTop: 2,
    },
    xpCard: {
      paddingHorizontal: 16,
      paddingVertical: 8,
    },
    xpContent: {
      alignItems: 'center',
    },
    xpLabel: {
      fontSize: 12,
      color: colors.textSecondary,
      fontWeight: '600',
    },
    xpValue: {
      fontSize: 18,
      fontWeight: '700',
      color: colors.primary,
    },
    streakBanner: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#FFD700',
      paddingVertical: 12,
    },
    streakEmoji: {
      fontSize: 20,
      marginRight: 8,
    },
    streakText: {
      fontSize: 16,
      fontWeight: '700',
      color: '#3C3C3C',
    },
    quickActions: {
      flexDirection: 'row',
      paddingHorizontal: 20,
      paddingVertical: 16,
      gap: 12,
      backgroundColor: colors.surface,
    },
    actionButton: {
      flex: 1,
      backgroundColor: colors.surfaceSecondary,
      paddingVertical: 16,
      paddingHorizontal: 12,
      borderRadius: 12,
      alignItems: 'center',
      borderWidth: 2,
      borderColor: colors.border,
    },
    actionIcon: {
      fontSize: 24,
      marginBottom: 4,
    },
    actionLabel: {
      fontSize: 14,
      fontWeight: '600',
      color: colors.textPrimary,
    },
    scrollView: {
      flex: 1,
    },
    scrollContent: {
      padding: 20,
    },
    unitContainer: {
      marginBottom: 32,
    },
    unitHeader: {
      marginBottom: 16,
    },
    unitTitle: {
      fontSize: 20,
      fontWeight: '700',
      color: colors.textPrimary,
      marginBottom: 4,
    },
    unitDescription: {
      fontSize: 14,
      color: colors.textSecondary,
    },
    lessonsContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: 16,
      justifyContent: 'space-evenly',
    },
  });

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.headerTitle}>CopticLingo</Text>
          <Text style={styles.headerSubtitle}>ⲙⲁⲣⲓ ⲉⲣϩⲱⲃ!</Text>
        </View>
        <Card style={styles.xpCard} onPress={onProfilePress}>
          <View style={styles.xpContent}>
            <Text style={styles.xpLabel}>Level {level}</Text>
            <Text style={styles.xpValue}>{totalXP} XP</Text>
          </View>
        </Card>
      </View>

      {/* Streak Banner */}
      {currentStreak > 0 && (
        <View style={styles.streakBanner}>
          <Text style={styles.streakEmoji}>🔥</Text>
          <Text style={styles.streakText}>{currentStreak} day streak!</Text>
        </View>
      )}

      {/* Quick Actions */}
      <View style={styles.quickActions}>
        <TouchableOpacity style={styles.actionButton} onPress={onReviewPress}>
          <Text style={styles.actionIcon}>⚡</Text>
          <Text style={styles.actionLabel}>Practice</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton} onPress={onSettingsPress}>
          <Text style={styles.actionIcon}>⚙️</Text>
          <Text style={styles.actionLabel}>Settings</Text>
        </TouchableOpacity>
      </View>

      {/* Skill Tree */}
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
        {copticUnits.map((unit) => {
          const unitLocked = getUnitLocked(unit.order);

          return (
            <View key={unit.id} style={styles.unitContainer}>
              <View style={styles.unitHeader}>
                <Text style={styles.unitTitle}>{unit.title}</Text>
                <Text style={styles.unitDescription}>{unit.description}</Text>
              </View>

              <View style={styles.lessonsContainer}>
                {unit.lessons.map((lesson) => {
                  const { locked, completed } = getLessonStatus(
                    lesson.id,
                    lesson.order,
                    unit.lessons
                  );

                  const isLocked = locked || unitLocked;
                  const isCurrent = !isLocked && !completed;

                  return (
                    <LessonNode
                      key={lesson.id}
                      title={lesson.title}
                      color={unit.color}
                      locked={isLocked}
                      completed={completed}
                      current={isCurrent}
                      onPress={() => !isLocked && onLessonPress(lesson.id)}
                    />
                  );
                })}
              </View>
            </View>
          );
        })}

        <View style={styles.bottomPadding} />
      </ScrollView>
    </View>
  );
};
