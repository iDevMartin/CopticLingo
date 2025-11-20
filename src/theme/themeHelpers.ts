import { useSettingsStore } from '../store/settingsStore';

/**
 * Get theme-aware onboarding step colors
 */
export const useOnboardingStepColors = () => {
  const { themeSelection } = useSettingsStore();

  return themeSelection === 'green'
    ? ['#58CC02', '#3b82f6', '#8b5cf6', '#f59e0b', '#ec4899'] // Green theme
    : ['#8247ED', '#97B1F8', '#75ABEF', '#8247ED', '#97B1F8']; // Blue theme
};

/**
 * Get theme-aware matching pair colors
 */
export const useMatchingPairColors = () => {
  const { themeSelection } = useSettingsStore();

  return themeSelection === 'green'
    ? [
        { bg: '#E3F2FD', border: '#2196F3' }, // Blue
        { bg: '#F3E5F5', border: '#9C27B0' }, // Purple
        { bg: '#FFF3E0', border: '#FF9800' }, // Orange
        { bg: '#E0F2F1', border: '#009688' }, // Teal
        { bg: '#FFF9C4', border: '#FBC02D' }, // Yellow
        { bg: '#FCE4EC', border: '#E91E63' }, // Pink
      ]
    : [
        // { bg: 'rgba(130,71,237,0.1)', border: '#8247ED' },   // Blue Violet
        // { bg: 'rgba(151,177,248,0.1)', border: '#97B1F8' },  // Baby Blue Ice
        // { bg: 'rgba(117,171,239,0.1)', border: '#75ABEF' },  // Cool Horizon
        // { bg: 'rgba(130,71,237,0.15)', border: '#6B3BC4' },  // Blue Violet darker
        // { bg: 'rgba(151,177,248,0.15)', border: '#7A9AE5' }, // Baby Blue Ice darker
        // { bg: 'rgba(117,171,239,0.15)', border: '#5B8DD6' }, // Cool Horizon darker
        { bg: '#E3F2FD', border: '#2196F3' }, // Blue
        { bg: '#F3E5F5', border: '#9C27B0' }, // Purple
        { bg: '#FFF3E0', border: '#FF9800' }, // Orange
        { bg: '#E0F2F1', border: '#009688' }, // Teal
        { bg: '#FFF9C4', border: '#FBC02D' }, // Yellow
        { bg: '#FCE4EC', border: '#E91E63' }, // Pink
      ];
};

/**
 * Get theme-aware PWA box background
 */
export const usePwaBoxBackground = () => {
  const { themeSelection } = useSettingsStore();

  return themeSelection === 'green'
    ? '#10B98120' // Green with alpha
    : 'rgba(130, 71, 237, 0.12)'; // Blue Violet with alpha
};

/**
 * Get theme-aware progress bar defaults
 */
export const useProgressBarDefaults = () => {
  const { themeSelection } = useSettingsStore();

  return themeSelection === 'green'
    ? { color: '#58CC02', backgroundColor: '#E5E5E5' }
    : { color: '#8247ED', backgroundColor: 'rgba(117,171,239,0.15)' };
};

/**
 * Get theme-aware current lesson node border color
 */
export const useCurrentNodeBorderColor = () => {
  const { themeSelection } = useSettingsStore();

  return themeSelection === 'green'
    ? '#FFD700' // Gold for green theme
    : '#8247ED'; // Blue Violet for blue theme
};
