import type React from 'react';
import { useState } from 'react';
import { StyleSheet, ScrollView, Image, View } from 'react-native';
import { colors } from '../../utils/colors';
import Input from '../../components/Input';
import Button from '../../components/Button';
import H1 from '../../components/H1';
import H2 from '../../components/H2';
import Row from '../../components/Row';

const SignUp: React.FC = () => {
  const [name, setName] = useState('');
  const [ffUsername, setFfUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    // TODO
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
      <H2>Crie sua conta</H2>
      <Input
        placeholder="Nome"
        value={name}
        onChangeText={setName}
        icon="person-circle-outline"
      />
      <Input
        placeholder="Usuário Free Fire"
        value={ffUsername}
        onChangeText={setFfUsername}
        icon="game-controller"
      />
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
      <Button title="Cadastrar" onPress={handleSignUp} />
      <Row style={{ marginTop: 16 }} gap={12}>
  <Image
    source={require('../../../assets/avatar2.png')}
    resizeMode="contain"
    style={styles.sticker}
  />
  <Image
    source={require('../../../assets/avatarF.png')}
    resizeMode="contain"
    style={styles.sticker}
  />
</Row>
    </ScrollView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  logoContainer: {
    alignItems: 'center',
    width: '100%',
  },
  logo: {
    width: 110,
    height: 110,
  },
  sticker: {
    width: 150,
    height: 150,
  },
});