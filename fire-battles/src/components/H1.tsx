import type React from 'react';
import { Text, StyleSheet, type TextProps } from 'react-native';
import { colors } from '../utils/colors';

const H1: React.FC<TextProps> = ({ children, style, ...props }) => (
  <Text style={[styles.h1, style]} {...props}>
    {children}
  </Text>
);

export default H1;

const styles = StyleSheet.create({
  h1: {
    fontSize: 36,
    fontWeight: 'bold',
    color: colors.primary,
    marginBottom: 8,
    letterSpacing: 2,
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 8,
  },
});