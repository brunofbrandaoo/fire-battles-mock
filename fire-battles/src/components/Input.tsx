import type React from 'react';
import { View, TextInput, StyleSheet, type KeyboardTypeOptions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../utils/colors';

interface InputProps {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  icon?: string;
  secureTextEntry?: boolean;
  keyboardType?: KeyboardTypeOptions; 
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
}

const Input: React.FC<InputProps> = ({
  placeholder,
  value,
  onChangeText,
  icon,
  secureTextEntry,
  keyboardType,
  autoCapitalize,
}) => (
  <View style={styles.container}>
    {icon && (
      <Ionicons
        name={icon as any}
        size={22}
        color={colors.accent}
        style={styles.icon}
      />
    )}
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      placeholderTextColor={colors.muted}
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
      keyboardType={keyboardType}
      autoCapitalize={autoCapitalize}
    />
  </View>
);

export default Input;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surface,
    borderRadius: 10,
    paddingHorizontal: 14,
    marginBottom: 18,
    borderWidth: 1,
    borderColor: colors.border,
  },
  icon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    color: colors.text,
    fontSize: 16,
    paddingVertical: 14,
  },
});