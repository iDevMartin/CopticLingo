// ============================================================================
// GREEN THEME (Original/Lingo Green)
// ============================================================================

export const greenLightColors = {
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

  // Brand colors (LINGO GREEN)
  primary: '#58CC02',           // Lingo Green
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

export const greenDarkColors = {
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

  // Brand colors (LINGO GREEN)
  primary: '#58CC02',           // Lingo Green
  primaryLight: '#86efac',
  primaryDark: '#22c55e',

  // Status colors
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

// ============================================================================
// BLUE THEME (New/Blue Violet)
// ============================================================================

export const blueLightColors = {
  // Background colors
  background: '#DFEBFC',        // Alice Blue
  surface: '#F5F9FE',           // Alice Blue (lighter)
  surfaceSecondary: '#E8F2FC',  // Alice Blue (tinted)

  // Text colors
  textPrimary: '#020512',       // Ink Black
  textSecondary: 'rgba(2,5,18,0.6)',   // Ink Black 60%
  textTertiary: 'rgba(2,5,18,0.4)',    // Ink Black 40%
  textDisabled: 'rgba(2,5,18,0.3)',    // Ink Black 30%

  // Border colors
  border: 'rgba(117,171,239,0.2)',     // Cool Horizon 20%
  borderLight: 'rgba(117,171,239,0.15)', // Cool Horizon 15%

  // Brand colors (BLUE VIOLET)
  primary: '#8247ED',           // Blue Violet
  primaryLight: '#97B1F8',      // Baby Blue Ice
  primaryDark: '#75ABEF',       // Cool Horizon

  // Status colors
  // success: '#10b981',
  // successLight: '#d1fae5',
  // error: '#ef4444',
  // errorLight: '#fee2e2',
  // warning: '#f59e0b',
  // warningLight: '#fef3c7',
  // info: '#75ABEF',              // Cool Horizon
  // infoLight: '#DFEBFC',         // Alice Blue
  success: '#10b981',
  successLight: '#d1fae5',
  error: '#ef4444',
  errorLight: '#fee2e2',
  warning: '#f59e0b',
  warningLight: '#fef3c7',
  info: '#3b82f6',
  infoLight: '#dbeafe',

  // Overlay
  overlay: 'rgba(2,5,18,0.7)',  // Ink Black 70%

  // Shadows
  shadowColor: 'rgba(2,5,18,0.1)', // Ink Black 10%
};

export const blueDarkColors = {
  // Background colors
  background: '#020512',        // Ink Black
  surface: '#0A0E1A',          // Ink Black (lighter)
  surfaceSecondary: '#141824',  // Ink Black (lighter)

  // Text colors
  textPrimary: '#DFEBFC',       // Alice Blue
  textSecondary: 'rgba(223,235,252,0.8)',  // Alice Blue 80%
  textTertiary: 'rgba(223,235,252,0.6)',   // Alice Blue 60%
  textDisabled: 'rgba(223,235,252,0.4)',   // Alice Blue 40%

  // Border colors
  border: 'rgba(117,171,239,0.3)',     // Cool Horizon 30%
  borderLight: 'rgba(117,171,239,0.2)', // Cool Horizon 20%

  // Brand colors (BLUE VIOLET)
  primary: '#8247ED',           // Blue Violet
  primaryLight: '#97B1F8',      // Baby Blue Ice
  primaryDark: '#75ABEF',       // Cool Horizon

  // Status colors
  // success: '#22c55e',
  // successLight: '#064e3b',
  // error: '#f87171',
  // errorLight: '#7f1d1d',
  // warning: '#fbbf24',
  // warningLight: '#78350f',
  // info: '#97B1F8',              // Baby Blue Ice
  // infoLight: '#4A2B8F',         // Blue Violet (darker)
  success: '#22c55e',
  successLight: '#064e3b',
  error: '#f87171',
  errorLight: '#7f1d1d',
  warning: '#fbbf24',
  warningLight: '#78350f',
  info: '#97B1F8',              // Baby Blue Ice
  infoLight: '#4A2B8F',         // Blue Violet (darker)

  // Overlay
  overlay: 'rgba(2,5,18,0.85)',  // Ink Black 85%

  // Shadows
  shadowColor: 'rgba(2,5,18,0.5)', // Ink Black 50%
};

// ============================================================================
// THEME MAP & TYPE EXPORTS
// ============================================================================

export type ColorScheme = typeof greenLightColors;

export const themes = {
  green: {
    light: greenLightColors,
    dark: greenDarkColors,
  },
  blue: {
    light: blueLightColors,
    dark: blueDarkColors,
  },
};
