import type React from 'react';
import { View, type ViewProps, StyleSheet } from 'react-native';

interface RowProps extends ViewProps {
  gap?: number;
}

const Row: React.FC<RowProps> = ({ children, style, gap = 0, ...props }) => (
  <View style={[styles.row, { gap }, style]} {...props}>
    {children}
  </View>
);

export default Row;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});