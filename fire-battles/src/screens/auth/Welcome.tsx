import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../../utils/colors';
import H1 from '../../components/H1';
import H3 from '../../components/H3';
import Button from '../../components/Button';
import Icon from '../../components/Icon';

const Welcome: React.FC = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.iconContainer}>
          <Icon name="flame" size={100} color={colors.primary} />
        </View>
        
        <H1 style={styles.title}>Fire Battles</H1>
        <H3 style={styles.subtitle}>
          Organize suas batalhas no Free Fire e desafie seus amigos!
        </H3>
        
        <View style={styles.buttonGroup}>
          <Button 
            title="Criar Conta" 
            onPress={() => navigation.navigate('SignUp')}
            style={styles.primaryButton}
          />
          
          <Button 
            title="Já tenho uma conta" 
            onPress={() => navigation.navigate('Login')}
            style={styles.secondaryButton}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconContainer: {
    backgroundColor: 'rgba(255, 111, 0, 0.1)', // Light orange background for the icon
    padding: 20,
    borderRadius: 100,
    marginBottom: 32,
  },
//   title: {
//     textAlign: 'center',
//     marginBottom: 12,
//   },
//   subtitle: {
//     textAlign: 'center',
//     color: colors.muted,
//     marginBottom: 48,
//     maxWidth: '80%',
//   },
  buttonGroup: {
    width: '100%',
    gap: 16,
  },
  primaryButton: {
    backgroundColor: colors.primary,
  },
  secondaryButton: {
    backgroundColor: colors.secondary,
  },
});

export default Welcome;