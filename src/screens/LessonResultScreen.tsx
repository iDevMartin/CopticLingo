import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from '../components';
import { useSettingsStore } from '../store/settingsStore';
import { useTheme } from '../theme/ThemeContext';

interface LessonResultScreenProps {
  correctCount: number;
  totalCount: number;
  xpEarned: number;
  onContinue: () => void;
}

export const LessonResultScreen: React.FC<LessonResultScreenProps> = ({
  correctCount,
  totalCount,
  xpEarned,
  onContinue,
}) => {
  const { developerModeEnabled } = useSettingsStore();
  const { colors } = useTheme();
  const percentage = Math.round((correctCount / totalCount) * 100);
  const passed = percentage >= 60;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.surface,
      justifyContent: 'center',
    },
    content: {
      padding: 24,
      alignItems: 'center',
    },
    emoji: {
      fontSize: 80,
      marginBottom: 16,
    },
    title: {
      fontSize: 32,
      fontWeight: '700',
      color: colors.textPrimary,
      marginBottom: 40,
    },
    statsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      width: '100%',
      marginBottom: 32,
    },
    statBox: {
      alignItems: 'center',
    },
    statValue: {
      fontSize: 28,
      fontWeight: '700',
      color: colors.textPrimary,
      marginBottom: 8,
    },
    xpValue: {
      color: colors.primary,
    },
    statLabel: {
      fontSize: 14,
      color: colors.textSecondary,
      fontWeight: '600',
    },
    disabledText: {
      color: colors.textDisabled,
    },
    devModeNotice: {
      backgroundColor: colors.warningLight,
      borderRadius: 8,
      padding: 12,
      marginBottom: 20,
      borderWidth: 1,
      borderColor: colors.warning,
    },
    devModeText: {
      fontSize: 14,
      color: '#856404',
      textAlign: 'center',
      fontWeight: '600',
    },
    encouragementBox: {
      backgroundColor: colors.warningLight,
      borderRadius: 12,
      padding: 16,
      marginBottom: 24,
      borderWidth: 2,
      borderColor: colors.warning,
    },
    encouragementText: {
      fontSize: 14,
      color: colors.textPrimary,
      textAlign: 'center',
      lineHeight: 20,
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.emoji}>{passed ? '🎉' : '😔'}</Text>
        <Text style={styles.title}>{passed ? 'Great Job!' : 'Keep Practicing!'}</Text>

        {developerModeEnabled && (
          <View style={styles.devModeNotice}>
            <Text style={styles.devModeText}>🔧 Developer Mode - No Progress Saved</Text>
          </View>
        )}

        <View style={styles.statsContainer}>
          <View style={styles.statBox}>
            <Text style={styles.statValue}>{percentage}%</Text>
            <Text style={styles.statLabel}>Accuracy</Text>
          </View>

          <View style={styles.statBox}>
            <Text style={styles.statValue}>
              {correctCount}/{totalCount}
            </Text>
            <Text style={styles.statLabel}>Correct</Text>
          </View>

          <View style={styles.statBox}>
            <Text style={[styles.statValue, styles.xpValue, developerModeEnabled && styles.disabledText]}>
              {developerModeEnabled ? '—' : `+${xpEarned}`}
            </Text>
            <Text style={styles.statLabel}>XP Earned</Text>
          </View>
        </View>

        {!passed && (
          <View style={styles.encouragementBox}>
            <Text style={styles.encouragementText}>
              Don't worry! Practice makes perfect. Review the material and try again.
            </Text>
          </View>
        )}

        <Button title="Continue" onPress={onContinue} fullWidth variant="success" />
      </View>
    </View>
  );
};

