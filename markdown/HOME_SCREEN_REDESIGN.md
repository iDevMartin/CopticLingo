# Home Screen Redesign - Learning Path UI

## Problem
- 45 units in a single scrolling list is overwhelming
- Hard to see progress and navigate
- Lacks visual engagement and clear structure

## Solution: Multi-Level Learning Path with Collapsible Sections

### Design Concept: "The Coptic Journey"

Create a visually engaging, game-like progression path with **themed sections** that group related units. Think Duolingo meets a treasure map.

---

## Layout Structure

### 1. **Section-Based Organization** (5-7 major sections)

**Section 1: Foundation (Units 1-10)**
- Icon: 📚 Foundation Stone
- Color: Blue gradient
- Units: Alphabet → Pronunciation → First Words → Articles → Pronouns → Copula → Common Verbs → Present → Past → Future
- Progress: "3/10 completed"

**Section 2: Core Grammar (Units 11-20)**
- Icon: ⚡ Building Blocks
- Color: Purple gradient
- Units: Imperative → Suffix Pronouns → Prepositions → Demonstratives → Questions → Negation → Relative Clauses → Existential → Genitive → Conditional
- Progress: "0/10 completed"

**Section 3: Advanced Grammar (Units 21-26)**
- Icon: 🎯 Mastery
- Color: Orange gradient
- Units: Temporal Clauses → Causative → Participles → Extended Vocabulary → Lord's Prayer → Gospel Readings
- Progress: "0/6 completed"

**Section 4: Sacred Texts (Units 27-30)**
- Icon: ✝️ Scripture
- Color: Gold gradient
- Units: Lord's Prayer Analysis → Gospel Readings → Liturgical Coptic → Reading Composition
- Progress: "0/4 completed"

**Section 5: Daily Life Vocabulary (Units 31-35)**
- Icon: 🏠 Living Language
- Color: Green gradient
- Units: Numbers Extended → Time → Colors → Food → Clothing/Body
- Progress: "0/5 completed"

**Section 6: Advanced Structures (Units 36-39)**
- Icon: 🔬 Deep Dive
- Color: Teal gradient
- Units: Past Continuous → Circumstantial → Numbers with Nouns → Conjunctions
- Progress: "0/4 completed"

**Section 7: Real-World Practice (Units 40-45)**
- Icon: 🌍 Application
- Color: Pink gradient
- Units: Weather → Church Conversations → Market Dialogues → Parables → Epistles → Advanced Composition
- Progress: "0/6 completed"

---

## Visual Design

### Section Card (Collapsed State)
```
┌─────────────────────────────────────────────┐
│  📚 Foundation                    3/10  ✓   │
│  "Master the basics"                        │
│  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  │
│  Progress: 30%                       [▼]    │
└─────────────────────────────────────────────┘
```

### Section Card (Expanded State)
```
┌─────────────────────────────────────────────┐
│  📚 Foundation                    3/10  ✓   │
│  "Master the basics"                        │
│  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  │
│  Progress: 30%                       [▲]    │
│                                             │
│  ┌───────────────────────────────────────┐ │
│  │  Path Layout (winding/zigzag):        │ │
│  │                                       │ │
│  │         ✓ Alphabet                    │ │
│  │        /                              │ │
│  │       /                               │ │
│  │  ✓ Pronunciation ──┐                  │ │
│  │                    │                  │ │
│  │                    └─ ⭐ Current       │ │
│  │                          First Words  │ │
│  │                         /             │ │
│  │                        /              │ │
│  │                   🔒 Articles          │ │
│  │                      |                │ │
│  │                   🔒 ...              │ │
│  └───────────────────────────────────────┘ │
│                                             │
│  [📝 Take Section Test to Skip Ahead]      │
└─────────────────────────────────────────────┘
```

---

## Key Features

### 1. **Collapsible Sections**
- Default: Show only current section + next locked section
- Tap to expand/collapse any section
- Auto-expand current section on load
- Smooth animations

### 2. **Visual Progress Indicators**
- Section-level progress bars with percentages
- Unit completion badges (✓, ⭐, 🔒, ⚡)
- Connecting paths/lines between lessons (like a map)
- Celebration animations when sections complete

### 3. **Smart Scrolling**
- Auto-scroll to current lesson on load
- "Jump to current" floating button
- Sticky section headers when scrolling
- Remember scroll position

### 4. **Section Test Feature**
- Each section has a comprehensive test
- Pass = unlock entire section
- Displayed as special node at section start
- Encourages advanced learners to skip ahead

### 5. **Path Visualization**
Within each expanded section, show lessons as nodes connected by a winding path:
- Zigzag pattern (like Duolingo)
- Completed: green checkmark, full color
- Current: glowing border, pulsing
- Locked: greyed out, lock icon
- Test: star icon, golden color

### 6. **Section Themes**
Each section has:
- Unique color gradient
- Thematic icon
- Motivational tagline
- Visual background pattern (subtle)

### 7. **Quick Stats Card**
At the top, show compact overview:
```
┌─────────────────────────────────────────────┐
│  Your Journey                               │
│                                             │
│  13/45 Units  •  Level 5  •  🔥 7 day streak│
│  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  │
│  29% Complete                               │
└─────────────────────────────────────────────┘
```

---

## Mobile Optimizations

### Small Screens (< 500px)
- Full-width section cards
- Reduced padding
- Smaller lesson nodes
- Horizontal scroll for wide paths

### Large Screens (> 900px)
- Two-column layout: sidebar with section list, main area with expanded path
- Side-by-side view of multiple sections
- Larger lesson nodes with more detail

---

## Implementation Plan

### Phase 1: Data Structure
1. Group units into sections (add section metadata to lessons.ts)
2. Add section progress calculations
3. Add section test data

### Phase 2: UI Components
1. Create `SectionCard` component
2. Create `LessonPath` component (winding path layout)
3. Update `LessonNode` for new visual style
4. Add collapse/expand animations

### Phase 3: Layout & UX
1. Replace flat list with sectioned view
2. Implement auto-scroll to current
3. Add sticky headers
4. Implement smart collapse behavior

### Phase 4: Polish
1. Add celebration animations
2. Gradient backgrounds per section
3. Smooth transitions
4. Loading states

---

## Benefits

✅ **Less Overwhelming**: Grouped into digestible sections
✅ **Clear Progress**: See completion % per section and overall
✅ **Visual Engagement**: Path-like layout feels like a journey
✅ **Better Navigation**: Expand/collapse to focus on current work
✅ **Motivation**: Section completion = milestones = dopamine
✅ **Flexibility**: Advanced users can skip ahead via section tests
✅ **Scalable**: Easy to add more units/sections in future

---

## Example Section Grouping

```typescript
export const sections = [
  {
    id: 'foundation',
    title: 'Foundation',
    description: 'Master the basics',
    icon: '📚',
    color: '#3B82F6', // Blue
    unitIds: ['unit-01', 'unit-02', 'unit-03', 'unit-04', 'unit-05',
              'unit-06', 'unit-07', 'unit-08', 'unit-09', 'unit-10'],
  },
  {
    id: 'core-grammar',
    title: 'Core Grammar',
    description: 'Build your grammatical foundation',
    icon: '⚡',
    color: '#8B5CF6', // Purple
    unitIds: ['unit-11', 'unit-12', 'unit-13', 'unit-14', 'unit-15',
              'unit-16', 'unit-17', 'unit-18', 'unit-19', 'unit-20'],
  },
  // ... etc
];
```

---

## Inspiration Sources
- **Duolingo**: Section grouping, path visualization
- **Khan Academy**: Progress bars, topic organization
- **Monument Valley**: Beautiful winding paths
- **Habitica**: Gamification, quest-like progression

---

## Next Steps
1. Get user approval on concept
2. Create section grouping data structure
3. Build SectionCard component
4. Build winding path layout algorithm
5. Implement collapse/expand
6. Polish and animate
