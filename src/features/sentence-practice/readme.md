# Japanese Sentence Practice Program

## Core Features

1. **Dynamic Conjugation System**

   - Conjugates Japanese verbs and adjectives based on their type:
     - Godan verbs (う、つ、る、く、ぐ、ぶ、む、ぬ、す endings)
     - Ichidan verbs (る ending)
     - い and な adjectives
     - Irregular verbs (来る、する)
   - Maintains kanji with readings through conjugation (食[た]べる → 食[た]べます)
   - Supports positive/negative and past/non-past forms
   - Handles both polite (です/ます) and casual forms

2. **Answer Variation Generation**

   - Pre-generates all valid forms of each answer:
     - Politeness variations (です/ます style vs だ/plain form)
     - Kanji/hiragana variations (食べる vs たべる)
     - Optional period variations (ending with/without 。)
     - First-person pronoun variations (私は/僕は/etc. for sentences starting with "I")
   - Marks variations to differentiate primary answers from their alternatives
   - Configurable via politeOnly/shortOnly options

3. **Answer Matching System**

   - Checks user input against all possible variations
   - Identifies closest matching answer using string similarity
   - Highlights differences between user input and correct answers
   - Returns similarity percentage for near-matches

4. **Form-Aware Alternative Display**
   - Analyzes conjugatable segments in closest matching answer:
     - Scans for polite markers (ます、でした, etc.) and casual markers (だ、た, etc.)
     - Counts form occurrences to determine user's preferred style
   - Filters alternative answers to show only those matching the preferred form
   - Dynamically updates as the closest match changes
   - Excludes variations of the same answer pattern

## Data Flow

1. **Initialization**

   ```
   Load JSON question data
   → Generate all conjugation variations (polite/casual)
   → Generate all form variations (kanji/kana/period/pronouns)
   → Mark non-primary forms as variations
   ```

2. **Input Processing**

   ```
   User types answer
   → Compare against all variations
   → Calculate similarity scores
   → Identify best match
   → Analyze preferred form
   → Update alternative display
   ```

3. **Alternative Answer Processing**
   ```
   Best match identified
   → Count polite/casual markers in matched answer
   → Determine form preference
   → Filter alternative answers to match preference
   → Exclude variations and current match
   → Display filtered alternatives
   ```

## Key Technical Features

1. **Type Safety**

   - Strict typing for conjugated words and variations
   - Type guards for safe word type handling
   - Interface definitions for component props and data structures

2. **Modular Architecture**

   - Separate modules for conjugation logic
   - Isolated variation generation
   - Independent form analysis
   - Reusable UI components

<!-- 3. **Performance Optimizations**

   - Memoized form preference calculations
   - Efficient alternative filtering
   - Smart variation generation to avoid duplicates -->

3. **Extensibility**
   - Configurable conjugation patterns
   - Expandable variation types
   - Customizable display options (furigana on/off)
   - Easy addition of new word types/patterns

## Components

- **JapanesePractice**: Main practice interface
- **AnswerInput**: User input handling
- **HighlightedText**: Displays text with furigana and error highlighting
- **AlternativeAnswers**: Shows form-matched alternative answers
- **FeedbackDisplay**: Provides feedback on user answers

The system combines these elements to create a comprehensive practice tool that intelligently handles Japanese language variations while maintaining consistency with user preferences.
