import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useTheme } from '../theme/ThemeContext';
import { useSettingsStore } from '../store/settingsStore';
import { LessonPath } from './LessonPath';
import { LessonNode } from './LessonNode';
import { Section } from '../data/sections';

interface SectionCardProps {
  section: Section;
  units: any[];
  completedLessons: string[];
  onLessonPress: (lessonId: string) => void;
  onUnitTestPress: (testId: string) => void;
  getLessonStatus: (lessonId: string, lessonOrder: number, unitLessons: any[]) => { locked: boolean; completed: boolean };
  getUnitLocked: (unitOrder: number) => boolean;
  getUnitTestStatus: (unitId: string) => { visible: boolean; locked: boolean; passed: boolean };
  unitTests: any[];
  isExpanded?: boolean;
  onToggleExpand?: () => void;
  autoExpand?: boolean;
}

export const SectionCard: React.FC<SectionCardProps> = ({
  section,
  units,
  completedLessons,
  onLessonPress,
  onUnitTestPress,
  getLessonStatus,
  getUnitLocked,
  getUnitTestStatus,
  unitTests,
  isExpanded = false,
  onToggleExpand,
  autoExpand = false,
}) => {
  const { colors } = useTheme();
  const { windingPathEnabled } = useSettingsStore();
  const [expanded, setExpanded] = useState(autoExpand || isExpanded);

  // Sync internal state with external prop
  useEffect(() => {
    setExpanded(isExpanded);
  }, [isExpanded]);

  // Calculate section progress
  const totalLessons = units.reduce((acc, unit) => acc + unit.lessons.length, 0);
  const completedInSection = units.reduce((acc, unit) => {
    return acc + unit.lessons.filter((lesson: any) => completedLessons.includes(lesson.id)).length;
  }, 0);
  const progressPercentage = totalLessons > 0 ? Math.round((completedInSection / totalLessons) * 100) : 0;

  const handleToggle = () => {
    const newExpanded = !expanded;
    console.log('[SectionCard] Toggle:', section.id, 'expanded:', newExpanded, 'units:', units.length);
    setExpanded(newExpanded);
    onToggleExpand?.();
  };

  const styles = StyleSheet.create({
    container: {
      marginBottom: 16,
      borderRadius: 16,
      backgroundColor: colors.surface,
      borderWidth: 2,
      borderColor: colors.border,
      overflow: 'hidden',
    },
    header: {
      padding: 16,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    headerLeft: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      gap: 12,
    },
    iconContainer: {
      width: 48,
      height: 48,
      borderRadius: 24,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: `${section.color}20`,
    },
    icon: {
      fontSize: 24,
    },
    headerText: {
      flex: 1,
    },
    title: {
      fontSize: 18,
      fontWeight: '700',
      color: colors.textPrimary,
      marginBottom: 2,
    },
    description: {
      fontSize: 13,
      color: colors.textSecondary,
    },
    headerRight: {
      alignItems: 'flex-end',
      gap: 4,
    },
    progressText: {
      fontSize: 14,
      fontWeight: '600',
      color: section.color,
    },
    expandIcon: {
      fontSize: 20,
      color: colors.textSecondary,
      marginTop: 4,
    },
    progressBarContainer: {
      height: 6,
      backgroundColor: colors.border,
      borderRadius: 3,
      marginHorizontal: 16,
      marginBottom: 12,
      overflow: 'hidden',
    },
    progressBarFill: {
      height: '100%',
      backgroundColor: section.color,
      borderRadius: 3,
    },
    unitsContainer: {
      padding: 16,
      paddingTop: 8,
    },
    unitContainer: {
      marginBottom: 24,
    },
    unitHeader: {
      marginBottom: 12,
    },
    unitTitle: {
      fontSize: 16,
      fontWeight: '700',
      color: colors.textPrimary,
      marginBottom: 4,
    },
    unitDescription: {
      fontSize: 13,
      color: colors.textSecondary,
    },
    lessonsPath: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: 12,
      justifyContent: 'space-evenly',
    },
  });

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleToggle} activeOpacity={0.7}>
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <View style={styles.iconContainer}>
              <Text style={styles.icon}>{section.icon}</Text>
            </View>
            <View style={styles.headerText}>
              <Text style={styles.title}>{section.title}</Text>
              <Text style={styles.description}>{section.description}</Text>
            </View>
          </View>
          <View style={styles.headerRight}>
            <Text style={styles.progressText}>
              {completedInSection}/{totalLessons}
            </Text>
            <Text style={styles.expandIcon}>{expanded ? '▲' : '▼'}</Text>
          </View>
        </View>

        {/* Progress Bar */}
        <View style={styles.progressBarContainer}>
          <View style={[styles.progressBarFill, { width: `${progressPercentage}%` }]} />
        </View>
      </TouchableOpacity>

      {/* Expanded Content */}
      {expanded && (
        <View style={styles.unitsContainer}>
          {console.log('[SectionCard] Rendering expanded content, units:', units.length, 'expanded:', expanded)}
          {units.map((unit) => {
            console.log('[SectionCard] Rendering unit:', unit.id, 'lessons:', unit.lessons?.length);
            const unitLocked = getUnitLocked(unit.order);
            const unitTest = unitTests.find(t => t.unitId === unit.id);
            const testStatus = getUnitTestStatus(unit.id);

            return (
              <View key={unit.id} style={styles.unitContainer}>
                <View style={styles.unitHeader}>
                  <Text style={styles.unitTitle}>{unit.title}</Text>
                  <Text style={styles.unitDescription}>{unit.description}</Text>
                </View>

                {/* Conditional Layout: Winding Path or Flat Grid */}
                {windingPathEnabled ? (
                  <LessonPath
                    lessons={unit.lessons}
                    unitColor={unit.color}
                    unitLocked={unitLocked}
                    onLessonPress={onLessonPress}
                    getLessonStatus={getLessonStatus}
                    unitTest={unitTest}
                    testStatus={testStatus}
                    onUnitTestPress={onUnitTestPress}
                    unitOrder={unit.order}
                  />
                ) : (
                  <View style={styles.lessonsPath}>
                    {unit.lessons.map((lesson: any) => {
                      const { locked, completed } = getLessonStatus(
                        lesson.id,
                        lesson.order,
                        unit.lessons
                      );

                      const isLocked = lesson.order === 1
                        ? (completed ? false : (locked || unitLocked))
                        : (completed ? false : locked);
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

                    {/* Unit Test */}
                    {testStatus.visible && unitTest && (
                      <LessonNode
                        key={`test-${unit.id}`}
                        title={`Unit ${unit.order} Test`}
                        color={testStatus.passed ? '#10B981' : unit.color}
                        locked={testStatus.locked}
                        completed={testStatus.passed}
                        current={!testStatus.locked && !testStatus.passed}
                        icon={testStatus.passed ? '⭐' : '📝'}
                        onPress={() => !testStatus.locked && onUnitTestPress(unitTest.id)}
                      />
                    )}
                  </View>
                )}
              </View>
            );
          })}
        </View>
      )}
    </View>
  );
};
