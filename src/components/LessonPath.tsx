import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { LessonNode } from './LessonNode';

interface LessonPathProps {
  lessons: any[];
  unitColor: string;
  unitLocked: boolean;
  onLessonPress: (lessonId: string) => void;
  getLessonStatus: (lessonId: string, lessonOrder: number, unitLessons: any[]) => { locked: boolean; completed: boolean };
  unitTest?: {
    id: string;
    unitId: string;
  };
  testStatus?: {
    visible: boolean;
    locked: boolean;
    passed: boolean;
  };
  onUnitTestPress?: (testId: string) => void;
  unitOrder: number;
}

/**
 * LessonPath Component
 *
 * Creates a winding/zigzag path layout for lessons (Duolingo-style)
 * Lessons alternate between left, center, and right positions
 */
export const LessonPath: React.FC<LessonPathProps> = ({
  lessons,
  unitColor,
  unitLocked,
  onLessonPress,
  getLessonStatus,
  unitTest,
  testStatus,
  onUnitTestPress,
  unitOrder,
}) => {
  const screenWidth = Dimensions.get('window').width;
  const isSmallScreen = screenWidth < 500;

  // Node size and spacing
  const nodeSize = isSmallScreen ? 60 : 70;
  const verticalSpacing = isSmallScreen ? 40 : 50;
  const horizontalOffset = isSmallScreen ? 60 : 80;

  /**
   * Calculate position for each lesson node in the winding path
   * Pattern: center -> right -> center -> left -> center (repeating)
   */
  const getNodePosition = (index: number): 'left' | 'center' | 'right' => {
    const pattern = ['center', 'right', 'center', 'left'];
    return pattern[index % pattern.length] as 'left' | 'center' | 'right';
  };

  /**
   * Get the translateX value for positioning
   */
  const getTranslateX = (position: 'left' | 'center' | 'right'): number => {
    switch (position) {
      case 'left':
        return -horizontalOffset;
      case 'right':
        return horizontalOffset;
      case 'center':
      default:
        return 0;
    }
  };

  /**
   * Draw SVG path connecting two nodes
   */
  const drawConnector = (
    fromPosition: 'left' | 'center' | 'right',
    toPosition: 'left' | 'center' | 'right',
    fromIndex: number,
    isCompleted: boolean
  ) => {
    const fromX = getTranslateX(fromPosition);
    const toX = getTranslateX(toPosition);

    return (
      <View
        key={`connector-${fromIndex}`}
        style={[
          styles.connector,
          {
            height: verticalSpacing,
            left: '50%',
            marginLeft: Math.min(fromX, toX),
            width: Math.abs(toX - fromX) || 2,
          },
        ]}
      >
        {/* Simple line connector - could be enhanced with SVG curves */}
        <View
          style={[
            styles.connectorLine,
            {
              backgroundColor: isCompleted ? unitColor : '#D1D5DB',
              opacity: isCompleted ? 0.6 : 0.3,
            },
          ]}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {lessons.map((lesson, index) => {
        const { locked, completed } = getLessonStatus(
          lesson.id,
          lesson.order,
          lessons
        );

        const isLocked = lesson.order === 1
          ? (completed ? false : (locked || unitLocked))
          : (completed ? false : locked);
        const isCurrent = !isLocked && !completed;

        const position = getNodePosition(index);
        const translateX = getTranslateX(position);

        return (
          <View key={lesson.id}>
            {/* Connector from previous lesson */}
            {index > 0 && drawConnector(
              getNodePosition(index - 1),
              position,
              index - 1,
              lessons[index - 1] && getLessonStatus(
                lessons[index - 1].id,
                lessons[index - 1].order,
                lessons
              ).completed
            )}

            {/* Lesson Node */}
            <View
              style={[
                styles.nodeContainer,
                {
                  transform: [{ translateX }],
                  marginBottom: index === lessons.length - 1 ? 0 : verticalSpacing,
                },
              ]}
            >
              <LessonNode
                title={lesson.title}
                color={unitColor}
                locked={isLocked}
                completed={completed}
                current={isCurrent}
                onPress={() => !isLocked && onLessonPress(lesson.id)}
              />
            </View>
          </View>
        );
      })}

      {/* Unit Test at the end */}
      {testStatus?.visible && unitTest && (
        <View>
          {/* Connector from last lesson to test */}
          {lessons.length > 0 && drawConnector(
            getNodePosition(lessons.length - 1),
            'center',
            lessons.length - 1,
            lessons[lessons.length - 1] && getLessonStatus(
              lessons[lessons.length - 1].id,
              lessons[lessons.length - 1].order,
              lessons
            ).completed
          )}

          <View
            style={[
              styles.nodeContainer,
              {
                transform: [{ translateX: 0 }], // Center position for test
              },
            ]}
          >
            <LessonNode
              title={`Unit ${unitOrder} Test`}
              color={testStatus.passed ? '#10B981' : unitColor}
              locked={testStatus.locked}
              completed={testStatus.passed}
              current={!testStatus.locked && !testStatus.passed}
              icon={testStatus.passed ? '⭐' : '📝'}
              onPress={() => !testStatus.locked && onUnitTestPress?.(unitTest.id)}
            />
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    alignItems: 'center',
    position: 'relative',
  },
  nodeContainer: {
    alignItems: 'center',
    zIndex: 2,
  },
  connector: {
    position: 'relative',
    zIndex: 1,
  },
  connectorLine: {
    width: '100%',
    height: '100%',
    borderRadius: 2,
  },
});
