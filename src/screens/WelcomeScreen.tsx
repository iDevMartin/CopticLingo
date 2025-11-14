import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import { Button } from '../components';
import { useTheme } from '../theme/ThemeContext';

interface WelcomeScreenProps {
  onComplete: () => void;
}

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onComplete }) => {
  const [name, setName] = useState('');
  const { colors } = useTheme();

  const handleStart = () => {
    if (name.trim()) {
      onComplete();
    }
  };

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
    inputContainer: {
      width: '100%',
      marginTop: 32,
      marginBottom: 24,
    },
    label: {
      fontSize: 16,
      fontWeight: '600',
      color: colors.textPrimary,
      marginBottom: 12,
    },
    input: {
      backgroundColor: colors.surface,
      borderWidth: 2,
      borderColor: colors.border,
      borderRadius: 12,
      padding: 16,
      fontSize: 16,
      color: colors.textPrimary,
    },
  });

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
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

          <View style={styles.inputContainer}>
            <Text style={styles.label}>What should we call you?</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your name"
              value={name}
              onChangeText={setName}
              autoCapitalize="words"
              autoCorrect={false}
            />
          </View>

          <Button
            title="Start Learning"
            onPress={handleStart}
            disabled={!name.trim()}
            fullWidth
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

