import type React from 'react';
import { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '../../utils/colors';
import H1 from '../../components/H1';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Icon from '../../components/Icon';

type MatchType = '1v1' | '3x3';

const MarkConfrontation: React.FC = () => {
  const [opponentUsername, setOpponentUsername] = useState('');
  const [matchType, setMatchType] = useState<MatchType>('1v1');
  const [roomId, setRoomId] = useState('');
  const [betAmount, setBetAmount] = useState('');

  const handleScheduleMatch = () => {
    // TODO: Implement match scheduling logic, including validation
    console.log(
      `Scheduling ${matchType} match against ${opponentUsername} in room ${roomId} with bet ${betAmount}`
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContainer} keyboardShouldPersistTaps="handled">
        <View style={styles.container}>
          <H1>Marcar Confronto</H1>

          <Input
            placeholder="Nome de usuário do oponente"
            value={opponentUsername}
            onChangeText={setOpponentUsername}
            icon="person-add-outline"
            autoCapitalize="none"
          />

          <Input
            placeholder="ID da Sala (opcional)"
            value={roomId}
            onChangeText={setRoomId}
            icon="keypad-outline"
            keyboardType='numeric'
          />

          <Input
            placeholder="Valor da Aposta (FireCoins)"
            value={betAmount}
            onChangeText={setBetAmount}
            icon="cash-outline"
            keyboardType='numeric'
            autoCapitalize="none"
          />

          <Text style={styles.label}>Tipo de Partida:</Text>
          <View style={styles.matchTypeContainer}>
            <TouchableOpacity
              style={[
                styles.matchTypeButton,
                matchType === '1v1' && styles.matchTypeButtonSelected,
              ]}
              onPress={() => setMatchType('1v1')}
            >
              <Icon name="person-outline" size={20} color={matchType === '1v1' ? colors.background : colors.primary} />
              <Text style={[
                styles.matchTypeText,
                matchType === '1v1' && styles.matchTypeTextSelected,
              ]}>
                1 vs 1
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.matchTypeButton,
                matchType === '3x3' && styles.matchTypeButtonSelected,
              ]}
              onPress={() => setMatchType('3x3')}
            >
              <Icon name="people-outline" size={20} color={matchType === '3x3' ? colors.background : colors.primary} />
              <Text style={[
                styles.matchTypeText,
                matchType === '3x3' && styles.matchTypeTextSelected,
              ]}>
                3 vs 3
              </Text>
            </TouchableOpacity>
          </View>

          <Button title="Agendar Partida" onPress={handleScheduleMatch} style={styles.scheduleButton} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MarkConfrontation;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scrollContainer: {
    flexGrow: 1, // Allows content to grow and push button down
  },
  container: {
    flex: 1, // Takes available space within ScrollView
    padding: 24,
    alignItems: 'center',
  },
  label: {
    color: colors.accent,
    fontSize: 16,
    fontWeight: '600',
    marginTop: 20, // Adjusted margin
    marginBottom: 12,
    alignSelf: 'flex-start',
  },
  matchTypeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 32,
  },
  matchTypeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.primary,
    backgroundColor: colors.surface,
    gap: 8,
  },
  matchTypeButtonSelected: {
    backgroundColor: colors.primary,
  },
  matchTypeText: {
    color: colors.primary,
    fontSize: 16,
    fontWeight: 'bold',
  },
  matchTypeTextSelected: {
    color: colors.background,
  },
  scheduleButton: {
    marginTop: 'auto', // Push button to the bottom
    marginBottom: 16, // Add some space at the bottom
    width: '100%',
  },
});