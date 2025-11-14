import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Modal, TouchableOpacity, Animated } from 'react-native';
import { Achievement } from '../types';
import { useTheme } from '../theme/ThemeContext';

interface AchievementModalProps {
  achievement: Achievement | null;
  visible: boolean;
  onClose: () => void;
}

export const AchievementModal: React.FC<AchievementModalProps> = ({
  achievement,
  visible,
  onClose,
}) => {
  const { colors } = useTheme();
  const scaleAnim = new Animated.Value(0);
  const fadeAnim = new Animated.Value(0);

  useEffect(() => {
    if (visible) {
      Animated.parallel([
        Animated.spring(scaleAnim, {
          toValue: 1,
          tension: 50,
          friction: 7,
          useNativeDriver: true,
        }),
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }),
      ]).start();
    } else {
      scaleAnim.setValue(0);
      fadeAnim.setValue(0);
    }
  }, [visible]);

  if (!achievement) return null;

  const styles = StyleSheet.create({
    overlay: {
      flex: 1,
      backgroundColor: colors.overlay,
      justifyContent: 'center',
      alignItems: 'center',
    },
    container: {
      width: '85%',
      maxWidth: 400,
    },
    card: {
      backgroundColor: colors.surface,
      borderRadius: 24,
      overflow: 'hidden',
      boxShadow: `0px 8px 16px ${colors.shadowColor}`,
      elevation: 10,
    },
    banner: {
      backgroundColor: colors.primary,
      paddingVertical: 16,
      paddingHorizontal: 20,
    },
    bannerText: {
      fontSize: 16,
      fontWeight: '700',
      color: '#fff',
      textAlign: 'center',
    },
    iconContainer: {
      alignItems: 'center',
      paddingTop: 32,
      paddingBottom: 16,
    },
    icon: {
      fontSize: 80,
    },
    content: {
      paddingHorizontal: 24,
      paddingBottom: 24,
      alignItems: 'center',
    },
    title: {
      fontSize: 24,
      fontWeight: '700',
      color: colors.textPrimary,
      marginBottom: 8,
      textAlign: 'center',
    },
    description: {
      fontSize: 16,
      color: colors.textSecondary,
      textAlign: 'center',
      lineHeight: 22,
    },
    button: {
      backgroundColor: colors.primary,
      paddingVertical: 16,
      marginHorizontal: 24,
      marginBottom: 24,
      borderRadius: 12,
      boxShadow: `0px 4px 8px ${colors.primaryDark}`,
      elevation: 4,
    },
    buttonText: {
      fontSize: 18,
      fontWeight: '700',
      color: '#fff',
      textAlign: 'center',
    },
  });

  return (
    <Modal
      transparent
      visible={visible}
      animationType="none"
      onRequestClose={onClose}
    >
      <TouchableOpacity
        style={styles.overlay}
        activeOpacity={1}
        onPress={onClose}
      >
        <Animated.View
          style={[
            styles.container,
            {
              opacity: fadeAnim,
              transform: [{ scale: scaleAnim }],
            },
          ]}
        >
          <TouchableOpacity activeOpacity={1}>
            <View style={styles.card}>
              {/* Celebration banner */}
              <View style={styles.banner}>
                <Text style={styles.bannerText}>🎉 Achievement Unlocked! 🎉</Text>
              </View>

              {/* Achievement icon */}
              <View style={styles.iconContainer}>
                <Text style={styles.icon}>{achievement.icon}</Text>
              </View>

              {/* Achievement details */}
              <View style={styles.content}>
                <Text style={styles.title}>{achievement.title}</Text>
                <Text style={styles.description}>{achievement.description}</Text>
              </View>

              {/* Close button */}
              <TouchableOpacity style={styles.button} onPress={onClose}>
                <Text style={styles.buttonText}>Awesome!</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        </Animated.View>
      </TouchableOpacity>
    </Modal>
  );
};

