import type React from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../../utils/colors';
import H1 from '../../components/H1';
import H2 from '../../components/H2';
import H3 from '../../components/H3';
import Icon from '../../components/Icon';
import MatchList from '../../components/MatchList';
import Button from '../../components/Button';
import Card from '../../components/Card';
import Row from '../../components/Row';

// Mock data for the profile
const userProfile = {
  name: 'Usuário Teste',
  ffUsername: 'ProPlayer123',
  fireCoins: 1500,
  wins: 25,
  losses: 10,
};

// Mock data for recent matches
const recentMatches = [
  { id: '3', opponent: 'NoobMaster69', result: 'Vitória', date: '26/04/2025' },
  { id: '4', opponent: 'ShadowKiller', result: 'Vitória', date: '26/04/2025' },
  { id: '5', opponent: 'LendaBR', result: 'Derrota', date: '25/04/2025' },
  { id: '1', opponent: 'JogadorX', result: 'Vitória', date: '25/04/2025' },
  { id: '2', opponent: 'ProFF', result: 'Derrota', date: '24/04/2025' },
];

const Profile: React.FC = () => {
  const navigation = useNavigation();

  // In your handleLogout function:

const handleLogout = () => {
    // Navigate back to the Welcome screen
    // In a real app, you'd also clear authentication state here
    navigation.reset({
      index: 0,
      routes: [{ name: 'Welcome' }],
    });
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Icon name="person-circle-outline" size={80} color={colors.primary} style={styles.avatar} />
          <H1>{userProfile.name}</H1>
          <H2 style={{color: colors.muted}}>{userProfile.ffUsername}</H2>
        </View>

        <Card style={styles.statsCard} color={colors.surface}>
            <Row style={{gap: 8}}>
            <Icon name="cash-outline" size={30} color={colors.primary} style={styles.avatar} />
                <H3>Saldo: {userProfile.fireCoins} FireCoins</H3></Row>
                <Row style={{gap: 8}}>
                <Icon name="trophy-outline" size={30} color={colors.primary} style={styles.avatar} />
          <H3>V: {userProfile.wins} / D: {userProfile.losses}</H3>
          </Row>
        </Card>

        <H3 style={{color: colors.muted}}>Partidas Recentes</H3>
        <Card color={colors.background}>
          <MatchList matches={recentMatches} visibleItems={4}/>
        </Card>

        <Button title="Logout" onPress={handleLogout} style={styles.logoutButton} />
      </View>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },
  container: {
    flex: 1,
    paddingHorizontal: 24,
    alignItems: 'center',
  },
  header: {
    alignItems: 'center',
  },
  avatar: {
    marginBottom: 8,
  },
  statsCard: {
    alignItems: 'center',
    marginBottom: 24,
  },
  logoutButton: {
    marginTop: 'auto',
    backgroundColor: colors.secondary,
    width: '100%',
  },
});