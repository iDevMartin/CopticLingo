import React, { createContext, useContext, ReactNode } from 'react';
import { useSettingsStore } from '../store/settingsStore';
import { themes, ColorScheme } from './colors';

interface ThemeContextType {
  colors: ColorScheme;
  isDark: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { darkModeEnabled, themeSelection } = useSettingsStore();

  // Select color palette based on BOTH theme and dark mode
  const colors = themes[themeSelection][darkModeEnabled ? 'dark' : 'light'];

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
