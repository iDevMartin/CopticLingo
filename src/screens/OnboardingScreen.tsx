import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { Button, Card } from '../components';
import { useTheme } from '../theme/ThemeContext';

const { width } = Dimensions.get('window');

interface OnboardingScreenProps {
  onComplete: () => void;
}

interface OnboardingStep {
  id: number;
  icon: string;
  title: string;
  description: string;
  color: string;
}

const onboardingSteps: OnboardingStep[] = [
  {
    id: 1,
    icon: '🎓',
    title: 'Learn Through Lessons',
    description:
      'Progress through carefully structured lessons covering the Coptic alphabet, grammar, and Biblical texts. Each lesson includes multiple exercise types to reinforce learning.',
    color: '#58CC02',
  },
  {
    id: 2,
    icon: '⚡',
    title: 'Practice Makes Perfect',
    description:
      'Complete 7 different types of exercises: multiple choice, fill-in-the-blank, translation, matching, sentence building, listening, and speaking practice.',
    color: '#3b82f6',
  },
  {
    id: 3,
    icon: '📊',
    title: 'Track Your Progress',
    description:
      'Earn XP for each lesson completed, level up, maintain daily streaks, and unlock achievements as you master the Coptic language.',
    color: '#8b5cf6',
  },
  {
    id: 4,
    icon: '🧠',
    title: 'Spaced Repetition',
    description:
      'Review exercises at optimal intervals to maximize retention. Our spaced repetition system helps you remember what you learn long-term.',
    color: '#f59e0b',
  },
  {
    id: 5,
    icon: '🏆',
    title: 'Unlock Achievements',
    description:
      'Complete challenges to unlock special achievements. Track milestones like completing your first unit, maintaining streaks, or mastering the alphabet!',
    color: '#ec4899',
  },
];

export const OnboardingScreen: React.FC<OnboardingScreenProps> = ({ onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    if (currentStep < onboardingSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      onComplete();
    }
  };

  const handleSkip = () => {
    onComplete();
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const step = onboardingSteps[currentStep];
  const isLastStep = currentStep === onboardingSteps.length - 1;
  const { colors } = useTheme();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    skipButton: {
      position: 'absolute',
      top: 60,
      right: 20,
      zIndex: 1,
      padding: 12,
    },
    skipText: {
      fontSize: 16,
      color: colors.primary,
      fontWeight: '600',
    },
    content: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 24,
    },
    iconContainer: {
      width: 120,
      height: 120,
      borderRadius: 60,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 32,
    },
    icon: {
      fontSize: 60,
    },
    title: {
      fontSize: 28,
      fontWeight: '700',
      color: colors.textPrimary,
      textAlign: 'center',
      marginBottom: 16,
    },
    description: {
      fontSize: 16,
      color: colors.textSecondary,
      textAlign: 'center',
      lineHeight: 24,
      marginBottom: 32,
      paddingHorizontal: 20,
    },
    dotsContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginBottom: 32,
      gap: 8,
    },
    dot: {
      width: 8,
      height: 8,
      borderRadius: 4,
      backgroundColor: colors.border,
    },
    dotActive: {
      width: 24,
    },
    cardsContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: 12,
      marginTop: 20,
    },
    featureCard: {
      width: 100,
      padding: 16,
      alignItems: 'center',
    },
    featureIcon: {
      fontSize: 32,
      marginBottom: 8,
    },
    featureText: {
      fontSize: 12,
      color: colors.textPrimary,
      textAlign: 'center',
      fontWeight: '600',
    },
    statsPreview: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      width: '100%',
      marginTop: 20,
    },
    statItem: {
      alignItems: 'center',
    },
    statValue: {
      fontSize: 32,
      fontWeight: '700',
      color: colors.primary,
      marginBottom: 4,
    },
    statLabel: {
      fontSize: 14,
      color: colors.textSecondary,
      fontWeight: '600',
    },
    navigation: {
      flexDirection: 'row',
      paddingHorizontal: 24,
      paddingBottom: 40,
      gap: 12,
    },
    navButton: {
      flex: 1,
    },
    navButtonFull: {
      flex: 1,
    },
  });

  return (
    <View style={styles.container}>
      {/* Skip button */}
      {!isLastStep && (
        <TouchableOpacity style={styles.skipButton} onPress={handleSkip}>
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>
      )}

      {/* Content */}
      <View style={styles.content}>
        {/* Icon */}
        <View style={[styles.iconContainer, { backgroundColor: `${step.color}20` }]}>
          <Text style={styles.icon}>{step.icon}</Text>
        </View>

        {/* Title */}
        <Text style={styles.title}>{step.title}</Text>

        {/* Description */}
        <Text style={styles.description}>{step.description}</Text>

        {/* Progress Dots */}
        <View style={styles.dotsContainer}>
          {onboardingSteps.map((_, index) => (
            <View
              key={index}
              style={[
                styles.dot,
                index === currentStep && styles.dotActive,
                index === currentStep && { backgroundColor: step.color },
              ]}
            />
          ))}
        </View>

        {/* Feature cards for certain steps */}
        {currentStep === 1 && (
          <View style={styles.cardsContainer}>
            <Card style={styles.featureCard}>
              <Text style={styles.featureIcon}>📝</Text>
              <Text style={styles.featureText}>Multiple Choice</Text>
            </Card>
            <Card style={styles.featureCard}>
              <Text style={styles.featureIcon}>✍️</Text>
              <Text style={styles.featureText}>Fill Blank</Text>
            </Card>
            <Card style={styles.featureCard}>
              <Text style={styles.featureIcon}>🔀</Text>
              <Text style={styles.featureText}>Matching</Text>
            </Card>
            <Card style={styles.featureCard}>
              <Text style={styles.featureIcon}>💬</Text>
              <Text style={styles.featureText}>Translation</Text>
            </Card>
          </View>
        )}

        {currentStep === 2 && (
          <View style={styles.statsPreview}>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>0</Text>
              <Text style={styles.statLabel}>Lessons</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>0</Text>
              <Text style={styles.statLabel}>XP</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>0</Text>
              <Text style={styles.statLabel}>Streak</Text>
            </View>
          </View>
        )}
      </View>

      {/* Navigation */}
      <View style={styles.navigation}>
        {currentStep > 0 && (
          <Button
            title="Back"
            onPress={handleBack}
            variant="secondary"
            style={styles.navButton}
          />
        )}
        <Button
          title={isLastStep ? "Let's Go!" : 'Next'}
          onPress={handleNext}
          variant="primary"
          style={[styles.navButton, currentStep === 0 && styles.navButtonFull]}
        />
      </View>
    </View>
  );
};

