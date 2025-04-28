import React from 'react';
import { Text, StyleSheet, TextStyle, StyleProp } from 'react-native';
import { colors } from '../utils/colors';

interface H3Props {
  children: React.ReactNode;
  style?: StyleProp<TextStyle>;
}

const H3: React.FC<H3Props> = ({ children, style }) => {
  return <Text style={[styles.h3, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
  h3: {
    fontSize: 16,
    color: colors.text,
    fontWeight: '600',
    marginBottom: 8,
    letterSpacing: 0.5,
  },
});

export default H3;