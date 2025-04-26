import type React from 'react';
import { useState } from 'react';
import { StyleSheet, ScrollView, Image, View, ImageBackground } from 'react-native';
import { colors } from '../../utils/colors';
import Input from '../../components/Input';
import Button from '../../components/Button';
import H1 from '../../components/H1';
import H2 from '../../components/H2';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // TODO: Implement login logic
  };

  return (
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.logoContainer}>
          <Image
            source={require('../../../assets/logo.png')}
            style={styles.logo}
            resizeMode="contain"
          />
        </View>
        <H1>FireBattles</H1>
        <H2>Entrar</H2>
        <Input
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          icon="mail"
          autoCapitalize="none"
        />
        <Input
          placeholder="Senha"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          icon="lock-closed"
        />
        <Button title="Entrar" onPress={handleLogin} />
      </ScrollView>
  );
};

export default Login;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  logoContainer: {
    marginBottom: 12,
    alignItems: 'center',
    width: '100%',
  },
  logo: {
    width: 110,
    height: 110,
  },
});