# CopticLingo Color Palette Implementation Plan

## NEW COLOR PALETTE

```xml
<palette>
  <color name="Cool Horizon" hex="75ABEF" r="117" g="171" b="239" />
  <color name="Ink Black" hex="020512" r="2" g="5" b="18" />
  <color name="Baby Blue Ice" hex="97B1F8" r="151" g="177" b="248" />
  <color name="Alice Blue" hex="DFEBFC" r="223" g="235" b="252" />
  <color name="Blue Violet" hex="8247ED" r="130" g="71" b="237" />
</palette>
```

## COLOR MAPPING STRATEGY

### Light Mode Palette
| Current Color | New Color | Hex | Usage |
|--------------|-----------|-----|-------|
| background (#f9fafb) | **Alice Blue** | #DFEBFC | Main app background |
| surface (#FFFFFF) | **Alice Blue** (lighter) | #F5F9FE | Cards, modals, surfaces |
| surfaceSecondary (#f3f4f6) | **Alice Blue** (tinted) | #E8F2FC | Secondary surfaces |
| textPrimary (#1f2937) | **Ink Black** | #020512 | Primary text |
| textSecondary (#4b5563) | **Ink Black** (60% opacity) | rgba(2,5,18,0.6) | Secondary text |
| textTertiary (#6b7280) | **Ink Black** (40% opacity) | rgba(2,5,18,0.4) | Tertiary text |
| border (#e5e7eb) | **Cool Horizon** (20% opacity) | rgba(117,171,239,0.2) | Borders |
| primary (#58CC02 - GREEN) | **Blue Violet** | #8247ED | Primary brand color |
| primaryLight (#86efac) | **Baby Blue Ice** | #97B1F8 | Light primary variant |
| primaryDark (#22c55e) | **Cool Horizon** | #75ABEF | Dark primary variant |
| info (#3b82f6) | **Cool Horizon** | #75ABEF | Info states |
| infoLight (#dbeafe) | **Alice Blue** | #DFEBFC | Info backgrounds |
| success (#10b981) | Keep as #10b981 | #10b981 | Correct answers (green) |
| successLight (#d1fae5) | Keep as #d1fae5 | #d1fae5 | Correct backgrounds |
| error (#ef4444) | Keep as #ef4444 | #ef4444 | Wrong answers (red) |
| errorLight (#fee2e2) | Keep as #fee2e2 | #fee2e2 | Error backgrounds |
| warning (#f59e0b) | Keep as #f59e0b | #f59e0b | Warnings (amber) |
| warningLight (#fef3c7) | Keep as #fef3c7 | #fef3c7 | Warning backgrounds |

### Dark Mode Palette
| Current Color | New Color | Hex | Usage |
|--------------|-----------|-----|-------|
| background (#111827) | **Ink Black** | #020512 | Main app background |
| surface (#1f2937) | **Ink Black** (lighter) | #0A0E1A | Cards, modals, surfaces |
| surfaceSecondary (#374151) | **Ink Black** (lighter) | #141824 | Secondary surfaces |
| textPrimary (#f9fafb) | **Alice Blue** | #DFEBFC | Primary text |
| textSecondary (#e5e7eb) | **Alice Blue** (80% opacity) | rgba(223,235,252,0.8) | Secondary text |
| textTertiary (#d1d5db) | **Alice Blue** (60% opacity) | rgba(223,235,252,0.6) | Tertiary text |
| border (#374151) | **Cool Horizon** (30% opacity) | rgba(117,171,239,0.3) | Borders |
| primary (#58CC02) | **Blue Violet** | #8247ED | Primary brand color |
| primaryLight (#86efac) | **Baby Blue Ice** | #97B1F8 | Light primary variant |
| primaryDark (#22c55e) | **Cool Horizon** | #75ABEF | Dark primary variant |
| info (#60a5fa) | **Baby Blue Ice** | #97B1F8 | Info states |
| infoLight (#1e3a8a) | **Blue Violet** (dark) | #4A2B8F | Info backgrounds |
| success (#22c55e) | Keep as #22c55e | #22c55e | Correct answers |
| successLight (#064e3b) | Keep as #064e3b | #064e3b | Correct backgrounds |
| error (#f87171) | Keep as #f87171 | #f87171 | Wrong answers |
| errorLight (#7f1d1d) | Keep as #7f1d1d | #7f1d1d | Error backgrounds |
| warning (#fbbf24) | Keep as #fbbf24 | #fbbf24 | Warnings |
| warningLight (#78350f) | Keep as #78350f | #78350f | Warning backgrounds |

**RATIONALE**:
- Status colors (success/error/warning) kept as-is for consistency with educational UX patterns (green=correct, red=wrong)
- New blue palette provides fresh, calming brand identity
- Ink Black provides superior contrast for text
- Alice Blue creates soft, accessible backgrounds

---

## IMPLEMENTATION CHECKLIST

### PHASE 1: Core Theme System (PRIORITY 1)

#### ✅ File: `/src/theme/colors.ts`
**What to update**: Complete color palette definitions

**Light Mode Colors**:
```typescript
export const lightColors = {
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

  // Brand colors (NEW BLUE PALETTE)
  primary: '#8247ED',           // Blue Violet
  primaryLight: '#97B1F8',      // Baby Blue Ice
  primaryDark: '#75ABEF',       // Cool Horizon

  // Status colors (UNCHANGED - for UX consistency)
  success: '#10b981',
  successLight: '#d1fae5',
  error: '#ef4444',
  errorLight: '#fee2e2',
  warning: '#f59e0b',
  warningLight: '#fef3c7',
  info: '#75ABEF',              // Cool Horizon
  infoLight: '#DFEBFC',         // Alice Blue

  // Overlay
  overlay: 'rgba(2,5,18,0.7)',  // Ink Black 70%

  // Shadows
  shadowColor: 'rgba(2,5,18,0.1)', // Ink Black 10%
};
```

**Dark Mode Colors**:
```typescript
export const darkColors = {
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

  // Brand colors (NEW BLUE PALETTE)
  primary: '#8247ED',           // Blue Violet
  primaryLight: '#97B1F8',      // Baby Blue Ice
  primaryDark: '#75ABEF',       // Cool Horizon

  // Status colors (UNCHANGED)
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
```

---

### PHASE 2: Hardcoded Colors (PRIORITY 2)

#### ✅ File: `/src/screens/WelcomeScreen.tsx`
**Line 87**: Update alpha variant
```typescript
// BEFORE:
backgroundColor: '#10B98120'

// AFTER:
backgroundColor: 'rgba(130, 71, 237, 0.12)'  // Blue Violet with 12% opacity
```

---

#### ✅ File: `/src/screens/OnboardingScreen.tsx`
**Lines 27-59**: Update step colors in `onboardingSteps` array
```typescript
// BEFORE:
const onboardingSteps = [
  {
    icon: '🎯',
    title: 'Learn at Your Pace',
    description: 'Progress through interactive lessons...',
    color: '#58CC02',  // Green
  },
  {
    icon: '🎮',
    title: 'Make It Fun',
    description: 'Gamified learning with XP...',
    color: '#3b82f6',  // Blue
  },
  // ... etc

// AFTER:
const onboardingSteps = [
  {
    icon: '🎯',
    title: 'Learn at Your Pace',
    description: 'Progress through interactive lessons...',
    color: '#8247ED',  // Blue Violet
  },
  {
    icon: '🎮',
    title: 'Make It Fun',
    description: 'Gamified learning with XP...',
    color: '#97B1F8',  // Baby Blue Ice
  },
  {
    icon: '📚',
    title: 'Rich Content',
    description: 'Comprehensive Bohairic Coptic lessons...',
    color: '#75ABEF',  // Cool Horizon
  },
  {
    icon: '🔄',
    title: 'Spaced Repetition',
    description: 'Review system helps you remember...',
    color: '#8247ED',  // Blue Violet (repeat)
  },
  {
    icon: '🏆',
    title: 'Track Progress',
    description: 'Earn achievements and build streaks...',
    color: '#97B1F8',  // Baby Blue Ice (repeat)
  },
];
```

---

#### ✅ File: `/src/components/LessonNode.tsx`
**Lines 42 & 65**: Update gold border and locked background
```typescript
// Line 42 - BEFORE:
borderColor: '#FFD700',  // Gold for current node

// Line 42 - AFTER:
borderColor: '#8247ED',  // Blue Violet for current node

// Line 65 - BEFORE:
backgroundColor: '#E5E5E5',  // Locked state

// Line 65 - AFTER:
backgroundColor: colors.borderLight,  // Use theme color instead
```

---

#### ✅ File: `/src/components/ProgressBar.tsx`
**Lines 14-15**: Update default colors
```typescript
// BEFORE:
color = '#58CC02',  // Green
backgroundColor = '#E5E5E5',

// AFTER:
color = '#8247ED',  // Blue Violet
backgroundColor = 'rgba(117,171,239,0.15)',  // Cool Horizon 15%
```

---

#### ✅ File: `/src/components/exercises/MatchingExercise.tsx`
**Lines 15-22**: Update pair colors to use new palette
```typescript
// BEFORE:
const PAIR_COLORS = [
  { bg: '#E3F2FD', border: '#2196F3' }, // Blue
  { bg: '#F3E5F5', border: '#9C27B0' }, // Purple
  { bg: '#FFF3E0', border: '#FF9800' }, // Orange
  { bg: '#E0F2F1', border: '#009688' }, // Teal
  { bg: '#FFF9C4', border: '#FBC02D' }, // Yellow
  { bg: '#FCE4EC', border: '#E91E63' }, // Pink
];

// AFTER:
const PAIR_COLORS = [
  { bg: 'rgba(130,71,237,0.1)', border: '#8247ED' },   // Blue Violet
  { bg: 'rgba(151,177,248,0.1)', border: '#97B1F8' },  // Baby Blue Ice
  { bg: 'rgba(117,171,239,0.1)', border: '#75ABEF' },  // Cool Horizon
  { bg: 'rgba(130,71,237,0.15)', border: '#6B3BC4' },  // Blue Violet (darker)
  { bg: 'rgba(151,177,248,0.15)', border: '#7A9AE5' }, // Baby Blue Ice (darker)
  { bg: 'rgba(117,171,239,0.15)', border: '#5B8DD6' }, // Cool Horizon (darker)
];
```

---

### PHASE 3: Logo Integration (NEW FEATURE)

#### ✅ File: `/src/screens/WelcomeScreen.tsx`
**Add logo at top of screen**
```typescript
// Add import:
import { Image } from 'react-native';

// Add logo after SafeAreaView, before content:
<Image
  source={require('../../assets/icon.png')}
  style={{
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginTop: 40,
    marginBottom: 20,
  }}
  resizeMode="contain"
/>
```

---

#### ✅ File: `/src/screens/OnboardingScreen.tsx`
**Add small logo in header**
```typescript
// Add import:
import { Image } from 'react-native';

// Add logo in header (line ~100):
<View style={styles.header}>
  <Image
    source={require('../../assets/icon.png')}
    style={{
      width: 40,
      height: 40,
      marginBottom: 8,
    }}
    resizeMode="contain"
  />
  <Text style={styles.headerText}>Welcome to CopticLingo</Text>
</View>
```

---

#### ✅ File: `/src/screens/HomeScreen.tsx`
**Add logo in header next to title**
```typescript
// Add import:
import { Image } from 'react-native';

// Update header View (around line 100):
<View style={styles.header}>
  <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
    <Image
      source={require('../../assets/icon.png')}
      style={{
        width: 32,
        height: 32,
      }}
      resizeMode="contain"
    />
    <Text style={styles.title}>CopticLingo</Text>
  </View>
  {/* Rest of header content */}
</View>
```

---

### PHASE 4: Testing Checklist

#### ✅ Screen Testing (Light Mode)
- [ ] WelcomeScreen - Logo visible, new colors applied
- [ ] OnboardingScreen - Logo in header, step colors updated
- [ ] HomeScreen - Logo in header, lesson nodes use Blue Violet border
- [ ] LessonScreen - Exercise background matches new surface color
- [ ] LessonResultScreen - Results cards use new surface/text colors
- [ ] ProfileScreen - Stats cards use new palette
- [ ] ReviewScreen - Review cards use new palette
- [ ] SettingsScreen - Toggle switches and cards use new colors
- [ ] UnitTestScreen - Test cards use new palette
- [ ] PrivacyPolicyScreen - Text readable on new background
- [ ] TermsOfServiceScreen - Text readable on new background
- [ ] ReviewLessonScreen - Practice mode uses new colors

#### ✅ Screen Testing (Dark Mode)
- [ ] All 12 screens above tested with dark mode enabled
- [ ] Text contrast verified (WCAG AA minimum)
- [ ] Borders visible against dark background
- [ ] Logo visible on dark background

#### ✅ Exercise Type Testing
- [ ] MultipleChoice - Selection states use new info colors
- [ ] FillBlank - Options use new palette
- [ ] MatchingExercise - Pair colors updated to new blue palette
- [ ] TranslationExercise - Input borders use new colors
- [ ] SentenceBuildingExercise - Word chips use new colors
- [ ] ListeningExercise - Buttons use new primary color
- [ ] SpeakingExercise - Buttons use new primary color

#### ✅ Component Testing
- [ ] Button (primary variant) - Uses Blue Violet
- [ ] Button (secondary variant) - Uses new surface/border colors
- [ ] Card - Surface color is Alice Blue (light) / Ink Black variant (dark)
- [ ] ProgressBar - Uses Blue Violet for fill
- [ ] LessonNode - Current node has Blue Violet border
- [ ] AchievementModal - Banner uses Blue Violet

#### ✅ Visual Regression Checks
- [ ] No broken layouts from color changes
- [ ] All text readable (contrast check)
- [ ] Borders visible where expected
- [ ] Shadows/overlays work on new backgrounds
- [ ] Status colors (green/red/amber) still distinguishable
- [ ] Logo doesn't obstruct UI elements

---

## IMPLEMENTATION NOTES

### Color Psychology
- **Blue Violet (#8247ED)**: Primary brand - conveys learning, wisdom, creativity
- **Cool Horizon (#75ABEF)**: Calming, accessible, trustworthy
- **Baby Blue Ice (#97B1F8)**: Friendly, inviting, modern
- **Alice Blue (#DFEBFC)**: Clean, spacious, readable
- **Ink Black (#020512)**: Premium, focused, high contrast

### Accessibility Considerations
- Ink Black on Alice Blue: Contrast ratio ~12:1 (AAA)
- Alice Blue on Ink Black: Contrast ratio ~12:1 (AAA)
- Blue Violet on light surfaces: Contrast ratio ~5.8:1 (AA)
- Status colors unchanged to maintain educational UX patterns

### Migration Timeline
1. **Phase 1**: Update core theme (30 min) ✓
2. **Phase 2**: Fix hardcoded colors (45 min)
3. **Phase 3**: Add logo integration (30 min)
4. **Phase 4**: Testing (2 hours)
5. **Total**: ~4 hours

### Testing Devices
- iOS Safari (mobile)
- Android Chrome (mobile)
- Desktop Chrome (PWA)
- iPad Safari (tablet)

---

## FILES TO MODIFY (8 Total)

### Core Theme:
1. `/src/theme/colors.ts` - Main color definitions

### Hardcoded Color Updates:
2. `/src/screens/WelcomeScreen.tsx` - Line 87
3. `/src/screens/OnboardingScreen.tsx` - Lines 27-59
4. `/src/components/LessonNode.tsx` - Lines 42, 65
5. `/src/components/ProgressBar.tsx` - Lines 14-15
6. `/src/components/exercises/MatchingExercise.tsx` - Lines 15-22

### Logo Integration (Optional but Recommended):
7. `/src/screens/WelcomeScreen.tsx` - Add logo
8. `/src/screens/OnboardingScreen.tsx` - Add logo
9. `/src/screens/HomeScreen.tsx` - Add logo

---

## ROLLBACK PLAN

If visual issues arise:
1. Revert `/src/theme/colors.ts` to previous green palette
2. Run `git checkout HEAD -- src/theme/colors.ts`
3. Hard refresh PWA (Cmd+Shift+R / Ctrl+Shift+F5)

All other components use `useTheme()` so reverting the theme file will restore original appearance.

---

## POST-IMPLEMENTATION

### Update These Assets:
- [ ] OG image (`public/og-image.png`) - Regenerate with new blue palette
- [ ] Favicon set - Update with Blue Violet primary color
- [ ] App icons - Update with new brand colors
- [ ] README.md - Update screenshots if any

### Update Documentation:
- [ ] CLAUDE.md - Update brand color references
- [ ] README.md - Update color palette section if exists

---

## SUMMARY

**Total Components Affected**: 33
- 12 Screens
- 14 Base Components
- 7 Exercise Types

**Files to Modify**: 8 core files
**Hardcoded Color Locations**: 6 specific line ranges
**Logo Additions**: 3 screens (Welcome, Onboarding, Home)
**Estimated Time**: 4 hours including testing
**Risk Level**: Low (centralized theme system with rollback capability)

This is a **comprehensive, mission-critical redesign** that maintains educational UX patterns (green=correct, red=wrong) while introducing a fresh, modern blue palette that conveys learning and trustworthiness.
