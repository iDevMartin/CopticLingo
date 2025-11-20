import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Dimensions, Image } from 'react-native';
import { LessonNode, Card, SectionCard } from '../components';
import { copticUnits } from '../data/lessons';
import { copticUnitTests } from '../data/tests/unit-tests';
import { sections, getUnitsInSection } from '../data/sections';
import { useProgressStore } from '../store/progressStore';
import { useAchievementStore } from '../store/achievementStore';
import { useUnitTestStore } from '../store/unitTestStore';
import { useSettingsStore } from '../store/settingsStore';
import { useTheme } from '../theme/ThemeContext';

interface HomeScreenProps {
  onLessonPress: (lessonId: string) => void;
  onProfilePress: () => void;
  onReviewPress: () => void;
  onSettingsPress: () => void;
  onUnitTestPress: (testId: string) => void;
  initialScrollY?: number;
  onScrollPositionChange?: (scrollY: number) => void;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({
  onLessonPress,
  onProfilePress,
  onReviewPress,
  onSettingsPress,
  onUnitTestPress,
  initialScrollY = 0,
  onScrollPositionChange,
}) => {
  const { completedLessons, totalXP, currentStreak, level } = useProgressStore();
  const { hasPassedTest, getTestProgress } = useUnitTestStore();
  const { developerModeEnabled } = useSettingsStore();
  const { colors } = useTheme();
  const [isSmallScreen, setIsSmallScreen] = useState(Dimensions.get('window').width < 500);
  const [showDevModeModal, setShowDevModeModal] = useState(false);
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  const [expandedSections, setExpandedSections] = useState<{ [key: string]: boolean }>({});
  const [currentSectionId, setCurrentSectionId] = useState<string | null>(null);
  const hasAutoScrolled = useRef(false);
  const scrollViewRef = useRef<ScrollView>(null);
  const sectionRefs = useRef<{ [key: string]: View | null }>({});
  const currentScrollY = useRef(0);
  const screenHeight = Dimensions.get('window').height;

  // Find current section (section with first incomplete lesson)
  const findCurrentSection = () => {
    for (const section of sections) {
      const units = getUnitsInSection(section.id, copticUnits);
      for (const unit of units) {
        const hasIncomplete = unit.lessons.some((lesson: any) => !completedLessons.includes(lesson.id));
        if (hasIncomplete) {
          return section.id;
        }
      }
    }
    return sections[0].id; // Default to first section
  };

  // Auto-expand current section on mount
  useEffect(() => {
    const currentSection = findCurrentSection();
    setCurrentSectionId(currentSection);
    setExpandedSections({ [currentSection]: true });
  }, []);

  // Auto-scroll to current section ONCE after initial render
  useEffect(() => {
    if (!hasAutoScrolled.current && currentSectionId && sectionRefs.current[currentSectionId] && scrollViewRef.current) {
      // Small delay to ensure layout is complete
      setTimeout(() => {
        sectionRefs.current[currentSectionId]?.measureLayout(
          scrollViewRef.current as any,
          (x, y) => {
            // Scroll to section with some offset from top
            scrollViewRef.current?.scrollTo({ y: Math.max(0, y - 20), animated: true });
            hasAutoScrolled.current = true;
          },
          () => {
            console.log('[HomeScreen] Failed to measure section layout');
          }
        );
      }, 500);
    }
  }, [currentSectionId]);

  // Restore scroll position when returning to home screen
  useEffect(() => {
    if (initialScrollY > 0 && scrollViewRef.current) {
      // Small delay to ensure layout is complete
      setTimeout(() => {
        scrollViewRef.current?.scrollTo({ y: initialScrollY, animated: false });
      }, 100);
    }
  }, [initialScrollY]);

  // Debug: Log test data on mount
  useEffect(() => {
    console.log('Total copticUnitTests loaded:', copticUnitTests.length);
    console.log('Unit IDs in tests:', copticUnitTests.map(t => t.unitId));
    console.log('Unit IDs in units:', copticUnits.map(u => u.id));
  }, []);

  useEffect(() => {
    const subscription = Dimensions.addEventListener('change', ({ window }) => {
      setIsSmallScreen(window.width < 500);
    });
    return () => subscription?.remove();
  }, []);

  const handleDevModePress = () => {
    setShowDevModeModal(true);
  };

  const handleLessonPress = (lessonId: string) => {
    // Save current scroll position before navigating
    onScrollPositionChange?.(currentScrollY.current);
    onLessonPress(lessonId);
  };

  const handleUnitTestPress = (testId: string) => {
    // Save current scroll position before navigating
    onScrollPositionChange?.(currentScrollY.current);
    onUnitTestPress(testId);
  };

  const handleScrollToTop = () => {
    scrollViewRef.current?.scrollTo({ y: 0, animated: true });
  };

  const handleScrollToCurrent = () => {
    if (currentSectionId && sectionRefs.current[currentSectionId]) {
      sectionRefs.current[currentSectionId]?.measureLayout(
        scrollViewRef.current as any,
        (x, y) => {
          scrollViewRef.current?.scrollTo({ y: Math.max(0, y - 20), animated: true });
        },
        () => {
          console.log('[HomeScreen] Failed to measure section layout for scroll');
        }
      );
    }
  };

  const handleToggleSection = (sectionId: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId],
    }));
  };

  // Calculate overall progress
  const totalLessons = copticUnits.reduce((acc, unit) => acc + unit.lessons.length, 0);
  const completedCount = completedLessons.length;
  const overallProgress = totalLessons > 0 ? Math.round((completedCount / totalLessons) * 100) : 0;

  const handleProfilePress = () => {
    // Save current scroll position before navigating
    onScrollPositionChange?.(currentScrollY.current);
    onProfilePress();
  };

  const handleReviewPress = () => {
    // Save current scroll position before navigating
    onScrollPositionChange?.(currentScrollY.current);
    onReviewPress();
  };

  const getLessonStatus = (lessonId: string, lessonOrder: number, unitLessons: any[]) => {
    const isCompleted = completedLessons.includes(lessonId);

    // In developer mode, unlock all lessons
    if (developerModeEnabled) {
      return { locked: false, completed: isCompleted };
    }

    // If lesson is already completed (e.g., via unit test), it should be unlocked
    if (isCompleted) {
      return { locked: false, completed: true };
    }

    // First lesson is always unlocked
    if (lessonOrder === 1) {
      return { locked: false, completed: false };
    }

    // Check if previous lesson is completed
    const previousLesson = unitLessons[lessonOrder - 2];
    const isPreviousCompleted = completedLessons.includes(previousLesson.id);

    return { locked: !isPreviousCompleted, completed: false };
  };

  const getUnitLocked = (unitOrder: number) => {
    // In developer mode, unlock all units
    if (developerModeEnabled) {
      return false;
    }

    if (unitOrder === 1) return false;

    // Check if previous unit test was passed
    const previousUnit = copticUnits[unitOrder - 2];
    const previousUnitTest = copticUnitTests.find(t => t.unitId === previousUnit.id);

    if (previousUnitTest) {
      return !hasPassedTest(previousUnitTest.id);
    }

    // Fallback: check if all previous lessons completed
    const allPreviousLessonsCompleted = previousUnit.lessons.every(lesson =>
      completedLessons.includes(lesson.id)
    );

    return !allPreviousLessonsCompleted;
  };

  const getUnitTestStatus = (unitId: string) => {
    const unitTest = copticUnitTests.find(t => t.unitId === unitId);
    if (!unitTest) return { visible: false, locked: true, passed: false };

    const testProgress = getTestProgress(unitTest.id);

    // Unit tests are ALWAYS unlocked for everyone (not just developer mode)
    // This allows users to skip ahead by proving proficiency
    return {
      visible: true,
      locked: false,
      passed: testProgress?.passed || false,
    };
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
      paddingHorizontal: 20,
      paddingTop: 30,
      paddingBottom: 16,
      backgroundColor: colors.surface,
      borderBottomWidth: 1,
      borderBottomColor: colors.border,
    },
    headerTitle: {
      fontSize: 24,
      fontWeight: '700',
      color: colors.primary,
    },
    logo: {
      width: 32,
      height: 32,
      marginRight: 10,
    },
    headerTitleContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    headerTextContainer: {
      flexDirection: 'column',
    },
    headerSubtitle: {
      fontSize: 14,
      color: colors.textSecondary,
      marginTop: 2,
    },
    headerActions: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 12,
    },
    headerActionsScroll: {
      flexGrow: 0,
      flexShrink: 1,
    },
    card: {
      backgroundColor: colors.surface,
      borderRadius: 16,
      padding: 16,
      borderWidth: 2,
      borderColor: colors.border,
    },
    devModeCard: {
      paddingHorizontal: 16,
      paddingVertical: 8,
      backgroundColor: '#6B46C1',
      borderColor: '#7C3AED',
    },
    devModeContent: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 6,
      minHeight: 40,
    },
    devModeIcon: {
      fontSize: 20,
    },
    devModeText: {
      fontSize: 18,
      fontWeight: '700',
      color: '#FFFFFF',
    },
    streakCard: {
      paddingHorizontal: 16,
      paddingVertical: 8,
    },
    streakContent: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 6,
      minHeight: 40,
    },
    streakEmoji: {
      fontSize: 20,
    },
    streakText: {
      fontSize: 18,
      fontWeight: '700',
      color: colors.primary,
    },
    practiceCard: {
      paddingHorizontal: 16,
      paddingVertical: 8,
    },
    practiceContent: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 6,
      minHeight: 40,
    },
    practiceIcon: {
      fontSize: 20,
    },
    practiceLabel: {
      fontSize: 14,
      fontWeight: '600',
      color: colors.textPrimary,
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
    scrollView: {
      flex: 1,
    },
    scrollContent: {
      padding: 20,
    },
    overviewCard: {
      padding: 20,
      marginBottom: 20,
      marginTop: 20,
    },
    overviewTitle: {
      fontSize: 20,
      fontWeight: '700',
      color: colors.textPrimary,
      marginBottom: 12,
    },
    overviewStats: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 8,
      marginBottom: 16,
      flexWrap: 'wrap',
    },
    overviewStat: {
      fontSize: 14,
      fontWeight: '600',
      color: colors.textSecondary,
    },
    overviewProgressBar: {
      height: 8,
      backgroundColor: colors.border,
      borderRadius: 4,
      marginBottom: 8,
      overflow: 'hidden',
    },
    overviewProgressFill: {
      height: '100%',
      backgroundColor: colors.primary,
      borderRadius: 4,
    },
    overviewProgressText: {
      fontSize: 14,
      fontWeight: '600',
      color: colors.primary,
      textAlign: 'center',
    },
    modalOverlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1000,
    },
    modalContent: {
      backgroundColor: colors.surface,
      borderRadius: 16,
      padding: 24,
      width: '90%',
      maxWidth: 400,
      borderWidth: 2,
      borderColor: colors.border,
    },
    modalTitle: {
      fontSize: 20,
      fontWeight: '700',
      color: colors.textPrimary,
      marginBottom: 16,
      textAlign: 'center',
    },
    modalMessage: {
      fontSize: 15,
      color: colors.textPrimary,
      lineHeight: 22,
      marginBottom: 24,
    },
    modalButton: {
      paddingVertical: 12,
      borderRadius: 8,
      backgroundColor: colors.primary,
    },
    modalButtonText: {
      fontSize: 16,
      fontWeight: '600',
      color: '#FFFFFF',
      textAlign: 'center',
    },
    bottomPadding: {
      height: 40,
    },
    scrollToTopButton: {
      position: 'absolute',
      bottom: 24,
      right: 24,
      width: 56,
      height: 56,
      borderRadius: 28,
      backgroundColor: colors.primary,
      justifyContent: 'center',
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
      zIndex: 999,
    },
    scrollToTopIcon: {
      fontSize: 24,
      color: '#FFFFFF',
    },
    jumpToCurrentButton: {
      position: 'absolute',
      bottom: 24,
      right: 90,
      width: 56,
      height: 56,
      borderRadius: 28,
      backgroundColor: colors.accent || colors.primary,
      justifyContent: 'center',
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
      zIndex: 999,
    },
    jumpToCurrentIcon: {
      fontSize: 24,
      color: '#FFFFFF',
    },
  });

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerTitleContainer}>
          {!isSmallScreen && (
            <Image
              source={require('../../assets/icon.png')}
              style={styles.logo}
              resizeMode="contain"
            />
          )}
          <View style={styles.headerTextContainer}>
            <Text style={styles.headerTitle}>CopticLingo</Text>
            <Text style={styles.headerSubtitle}>Ⲙⲁⲣⲉⲛϭⲓⲥⲃⲱ!</Text>
          </View>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.headerActions}
          style={styles.headerActionsScroll}
        >
          {developerModeEnabled && (
            <TouchableOpacity onPress={handleDevModePress} activeOpacity={0.8}>
              <View style={[styles.card, styles.devModeCard]}>
                <View style={styles.devModeContent}>
                  <Text style={styles.devModeIcon}>🛠️</Text>
                  {!isSmallScreen && <Text style={styles.devModeText}>Dev</Text>}
                </View>
              </View>
            </TouchableOpacity>
          )}
          {currentStreak > 0 && (
            <Card style={styles.streakCard}>
              <View style={styles.streakContent}>
                <Text style={styles.streakEmoji}>🔥</Text>
                <Text style={styles.streakText}>{currentStreak}</Text>
              </View>
            </Card>
          )}
          <Card style={styles.practiceCard} onPress={handleReviewPress}>
            <View style={styles.practiceContent}>
              <Text style={styles.practiceIcon}>⚡</Text>
              {!isSmallScreen && <Text style={styles.practiceLabel}>Practice</Text>}
            </View>
          </Card>
          <Card style={styles.xpCard} onPress={handleProfilePress}>
            <View style={styles.xpContent}>
              <Text style={styles.xpLabel}>Level {level}</Text>
              <Text style={styles.xpValue}>{totalXP} XP</Text>
            </View>
          </Card>
        </ScrollView>
      </View>

      {/* Learning Path */}
      <ScrollView
        ref={scrollViewRef}
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        onScroll={(event) => {
          // Just track in ref, don't update state during scroll
          currentScrollY.current = event.nativeEvent.contentOffset.y;
          // Show scroll to top button when scrolled more than one screen height
          const shouldShow = event.nativeEvent.contentOffset.y > screenHeight;
          if (shouldShow !== showScrollToTop) {
            setShowScrollToTop(shouldShow);
          }
        }}
        scrollEventThrottle={16}
      >
        {/* Section Cards */}
        {sections.map((section) => {
          const units = getUnitsInSection(section.id, copticUnits);
          const isExpanded = expandedSections[section.id] || false;
          console.log('[HomeScreen] Section:', section.id, 'units:', units.length, 'expanded:', isExpanded);

          return (
            <View
              key={section.id}
              ref={(ref) => (sectionRefs.current[section.id] = ref)}
              collapsable={false}
            >
              <SectionCard
                section={section}
                units={units}
                completedLessons={completedLessons}
                onLessonPress={handleLessonPress}
                onUnitTestPress={handleUnitTestPress}
                getLessonStatus={getLessonStatus}
                getUnitLocked={getUnitLocked}
                getUnitTestStatus={getUnitTestStatus}
                unitTests={copticUnitTests}
                isExpanded={isExpanded}
                onToggleExpand={() => handleToggleSection(section.id)}
              />
            </View>
          );
        })}

        {/* Journey Overview Card */}
        <Card style={styles.overviewCard}>
          <Text style={styles.overviewTitle}>Your Journey</Text>
          <View style={styles.overviewStats}>
            <Text style={styles.overviewStat}>
              {completedCount}/{totalLessons} Lessons
            </Text>
            <Text style={styles.overviewStat}>•</Text>
            <Text style={styles.overviewStat}>Level {level}</Text>
            {currentStreak > 0 && (
              <>
                <Text style={styles.overviewStat}>•</Text>
                <Text style={styles.overviewStat}>🔥 {currentStreak} day streak</Text>
              </>
            )}
          </View>
          <View style={styles.overviewProgressBar}>
            <View style={[styles.overviewProgressFill, { width: `${overallProgress}%` }]} />
          </View>
          <Text style={styles.overviewProgressText}>{overallProgress}% Complete</Text>
        </Card>

        <View style={styles.bottomPadding} />
      </ScrollView>

      {/* Developer Mode Info Modal */}
      {showDevModeModal && (
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Developer Mode</Text>
            <Text style={styles.modalMessage}>
              Developer/Debug mode is currently enabled.{'\n\n'}
              • All lessons and units are unlocked{'\n'}
              • Completed lessons do NOT count towards XP progress{'\n'}
              • Achievements will NOT be unlocked{'\n\n'}
              This mode is intended for testing and development purposes only. Disable it in Settings to track your real progress.
            </Text>
            <TouchableOpacity style={styles.modalButton} onPress={() => setShowDevModeModal(false)}>
              <Text style={styles.modalButtonText}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}

      {/* Jump to Current Button */}
      {showScrollToTop && currentSectionId && (
        <TouchableOpacity
          style={styles.jumpToCurrentButton}
          onPress={handleScrollToCurrent}
          activeOpacity={0.8}
        >
          <Text style={styles.jumpToCurrentIcon}>🎯</Text>
        </TouchableOpacity>
      )}

      {/* Scroll to Top Button */}
      {showScrollToTop && (
        <TouchableOpacity
          style={styles.scrollToTopButton}
          onPress={handleScrollToTop}
          activeOpacity={0.8}
        >
          <Text style={styles.scrollToTopIcon}>↑</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};
