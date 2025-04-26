import type React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { colors } from '../../utils/colors';
import H1 from '../../components/H1';
import Banner from '../../components/Banner';
import MatchList from '../../components/MatchList';
import { SafeAreaView } from 'react-native-safe-area-context'; // Import SafeAreaView

const matches = [
  { id: '1', opponent: 'JogadorX', result: 'Vitória', date: '25/04/2025' },
  { id: '2', opponent: 'ProFF', result: 'Derrota', date: '24/04/2025' },
];

const Home: React.FC = () => {
  return (
    // Use SafeAreaView para garantir o espaçamento correto
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <H1>FireBattles</H1>
        <TouchableOpacity style={styles.ctaButton}>
          <Text style={styles.ctaText}>Agendar Partida</Text>
        </TouchableOpacity>
        <Banner uri="https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=800&q=80" />
        <Text style={styles.sectionTitle}>Partidas Recentes</Text>
        <MatchList matches={matches} />
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  safeArea: { 
    flex: 1,
    backgroundColor: colors.background,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  ctaButton: {
    backgroundColor: colors.callToAction,
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 40,
    marginVertical: 20,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 10,
    elevation: 5,
  },
  ctaText: {
    color: colors.background,
    fontWeight: 'bold',
    fontSize: 18,
    letterSpacing: 1,
    textAlign: 'center',
  },
  sectionTitle: {
    color: colors.accent,
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 12,
    alignSelf: 'flex-start',
  },
});