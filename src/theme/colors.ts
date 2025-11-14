export const lightColors = {
  // Background colors
  background: '#f9fafb',
  surface: '#FFFFFF',
  surfaceSecondary: '#f3f4f6',

  // Text colors
  textPrimary: '#1f2937',
  textSecondary: '#4b5563',
  textTertiary: '#6b7280',
  textDisabled: '#9ca3af',

  // Border colors
  border: '#e5e7eb',
  borderLight: '#E5E5E5',

  // Brand colors (stay the same in both modes)
  primary: '#58CC02',
  primaryLight: '#86efac',
  primaryDark: '#22c55e',

  // Status colors
  success: '#10b981',
  successLight: '#d1fae5',
  error: '#ef4444',
  errorLight: '#fee2e2',
  warning: '#f59e0b',
  warningLight: '#fef3c7',
  info: '#3b82f6',
  infoLight: '#dbeafe',

  // Overlay
  overlay: 'rgba(0, 0, 0, 0.7)',

  // Shadows
  shadowColor: 'rgba(0, 0, 0, 0.1)',
};

export const darkColors = {
  // Background colors
  background: '#111827',
  surface: '#1f2937',
  surfaceSecondary: '#374151',

  // Text colors
  textPrimary: '#f9fafb',
  textSecondary: '#e5e7eb',
  textTertiary: '#d1d5db',
  textDisabled: '#6b7280',

  // Border colors
  border: '#374151',
  borderLight: '#4b5563',

  // Brand colors (stay the same in both modes)
  primary: '#58CC02',
  primaryLight: '#86efac',
  primaryDark: '#22c55e',

  // Status colors (adjusted for dark mode)
  success: '#22c55e',
  successLight: '#064e3b',
  error: '#f87171',
  errorLight: '#7f1d1d',
  warning: '#fbbf24',
  warningLight: '#78350f',
  info: '#60a5fa',
  infoLight: '#1e3a8a',

  // Overlay
  overlay: 'rgba(0, 0, 0, 0.85)',

  // Shadows
  shadowColor: 'rgba(0, 0, 0, 0.5)',
};

export type ColorScheme = typeof lightColors;
