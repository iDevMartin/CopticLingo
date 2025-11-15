import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { Button } from '../components';
import { useTheme } from '../theme/ThemeContext';

interface WelcomeScreenProps {
  onComplete: () => void;
}

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onComplete }) => {
  const { colors } = useTheme();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    scrollContent: {
      flexGrow: 1,
      justifyContent: 'center',
      padding: 24,
    },
    content: {
      alignItems: 'center',
    },
    title: {
      fontSize: 32,
      fontWeight: '700',
      color: colors.textPrimary,
      textAlign: 'center',
      marginBottom: 8,
    },
    copticTitle: {
      fontSize: 28,
      fontWeight: '700',
      color: colors.primary,
      textAlign: 'center',
      marginBottom: 48,
    },
    infoBox: {
      flexDirection: 'row',
      alignItems: 'center',
      width: '100%',
      backgroundColor: colors.surface,
      padding: 20,
      borderRadius: 16,
      marginBottom: 16,
      borderWidth: 2,
      borderColor: colors.border,
    },
    emoji: {
      fontSize: 32,
      marginRight: 16,
    },
    infoText: {
      flex: 1,
      fontSize: 16,
      color: colors.textPrimary,
      lineHeight: 22,
    },
  });

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.content}>
          <Text style={styles.title}>Welcome to CopticLingo!</Text>
          <Text style={styles.copticTitle}>ⲙⲁⲣⲓ ⲉⲣϩⲱⲃ!</Text>

          <View style={styles.infoBox}>
            <Text style={styles.emoji}>📚</Text>
            <Text style={styles.infoText}>
              Learn the ancient Coptic language through interactive lessons
            </Text>
          </View>

          <View style={styles.infoBox}>
            <Text style={styles.emoji}>🎯</Text>
            <Text style={styles.infoText}>
              Practice with fun exercises and track your progress
            </Text>
          </View>

          <View style={styles.infoBox}>
            <Text style={styles.emoji}>🔥</Text>
            <Text style={styles.infoText}>
              Build daily streaks and earn achievements
            </Text>
          </View>

          <Button
            title="Start Learning"
            onPress={onComplete}
            fullWidth
            style={{ marginTop: 32 }}
          />
        </View>
      </ScrollView>
    </View>
  );
};

