# Curriculum Realignment Plan

## Current State vs CURRICULUM_OUTLINE.md

### Units 1-14: ✅ ALIGNED
These units match the curriculum outline correctly.

### Units 15-22: ❌ MISALIGNED - Currently Biblical/Liturgical, Should be Grammar

| Unit | Current Content | Should Be (per CURRICULUM_OUTLINE.md) | Action Required |
|------|----------------|----------------------------------------|-----------------|
| 15 | Lord's Prayer | **Prepositions** | Create new Unit-15, move Lord's Prayer content to Unit-27 |
| 16 | Bible Verses & Scripture | **Demonstratives & Pointing** | Create new Unit-16, keep Bible content for Unit-28 |
| 17 | More Beatitudes & Liturgical Prayers | **Question Words** | Create new Unit-17, move Beatitudes to Unit-28 |
| 18 | More Beatitudes & Biblical Wisdom | **Negation Patterns** | Create new Unit-18, move Beatitudes to Unit-28 |
| 19 | Final Beatitudes | **Relative Clauses** | Create new Unit-19, move Beatitudes to Unit-28 |
| 20 | Great Commission & John's Prologue | **Existential & Possessive** | Create new Unit-20, move Gospel content to Unit-28 |
| 21 | Psalms & Worship | **Genitive/Possessive with ⲛⲧⲉ** | Already exists as Unit-13\! Move Psalms to Unit-29 |
| 22 | Agpeya Prayers & Responses | **Conditional Sentences** | Create new Unit-22, move Agpeya to Unit-29 |

### Units 23-26: ✅ ALIGNED
These units match perfectly.

### Units 27-30: ⚠️ PARTIALLY ALIGNED

| Unit | Current Content | Should Be | Action Required |
|------|----------------|-----------|-----------------|
| 27 | Lord's Prayer Analysis | **The Lord's Prayer** | This IS the Lord's Prayer unit, but needs basic content from current Unit-15 merged in |
| 28 | Gospel Readings & Parables | **Beatitudes & Gospel Readings** | Need to add Beatitudes from Units 17-19 |
| 29 | Advanced Liturgical Coptic | **Liturgical Coptic** | ✅ CORRECT - add Psalms from Unit-21, Agpeya from Unit-22 |
| 30 | Reading & Composition | **Reading & Composition** | ✅ CORRECT |

## Reorganization Strategy

### Phase 1: Create Missing Grammar Units (15-22)
1. **Unit 15: Prepositions** - NEW (save current to temp)
2. **Unit 16: Demonstratives** - NEW (save current to temp)
3. **Unit 17: Question Words** - NEW (save current to temp)
4. **Unit 18: Negation Patterns** - NEW (save current to temp)
5. **Unit 19: Relative Clauses** - NEW (save current to temp)
6. **Unit 20: Existential & Possessive** - NEW (save current to temp)
7. **Unit 21: Genitive/Possessive ⲛⲧⲉ** - ALREADY EXISTS as Unit-13\! Create distinct advanced version
8. **Unit 22: Conditional Sentences** - NEW (save current to temp)

### Phase 2: Consolidate Biblical Content into Correct Units
1. **Unit 27**: Merge current Unit-15 (basic Lord's Prayer) with current Unit-27 (advanced analysis)
2. **Unit 28**: Add Beatitudes from old Units 17-19, keep Gospel readings
3. **Unit 29**: Add Psalms from old Unit-21, Add Agpeya from old Unit-22
4. **Unit 30**: Keep as-is ✅

### Phase 3: Archive Old Content
Move old Units 15-22 to archive folder:
- old-unit-15-lords-prayer.ts
- old-unit-16-bible-verses.ts
- old-unit-17-more-beatitudes.ts
- old-unit-18-beatitudes-wisdom.ts
- old-unit-19-final-beatitudes.ts
- old-unit-20-great-commission.ts
- old-unit-21-psalms-worship.ts
- old-unit-22-agpeya-prayers.ts

## Execution Order

1. Rename existing Units 15-22 to old-unit-XX-*.ts
2. Create new grammar Units 15-22 from CURRICULUM_OUTLINE.md
3. Extract relevant lessons from old files
4. Merge into Units 27-29
5. Update index.ts
6. Verify complete alignment

