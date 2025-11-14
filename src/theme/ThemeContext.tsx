import React, { createContext, useContext, ReactNode } from 'react';
import { useSettingsStore } from '../store/settingsStore';
import { lightColors, darkColors, ColorScheme } from './colors';

interface ThemeContextType {
  colors: ColorScheme;
  isDark: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { darkModeEnabled } = useSettingsStore();

  const colors = darkModeEnabled ? darkColors : lightColors;

  return (
    <ThemeContext.Provider value={{ colors, isDark: darkModeEnabled }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};
