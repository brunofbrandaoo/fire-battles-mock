import type React from 'react';
import { Text, StyleSheet, type TextProps } from 'react-native';
import { colors } from '../utils/colors';

const H2: React.FC<TextProps> = ({ children, style, ...props }) => (
  <Text style={[styles.h2, style]} {...props}>
    {children}
  </Text>
);

export default H2;

const styles = StyleSheet.create({
  h2: {
    fontSize: 18,
    color: colors.accent,
    marginBottom: 32,
    fontWeight: '600',
    letterSpacing: 1,
  },
});