import type React from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';
import { colors } from '../utils/colors';

interface Match {
  id: string;
  opponent: string;
  result: string;
  date: string;
}

interface MatchListProps {
  matches: Match[];
}

const MatchList: React.FC<MatchListProps> = ({ matches }) => {
  const renderMatch = ({ item }: { item: Match }) => (
    <View style={styles.matchItem}>
      <Text style={styles.matchText}>
        {item.date} - {item.opponent} - {item.result}
      </Text>
    </View>
  );

  return (
    <FlatList
      data={matches}
      renderItem={renderMatch}
      keyExtractor={item => item.id}
      style={styles.list}
      contentContainerStyle={{ paddingBottom: 32 }}
    />
  );
};

export default MatchList;

const styles = StyleSheet.create({
  list: {
    width: '100%',
  },
  matchItem: {
    backgroundColor: colors.surface,
    borderRadius: 10,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: colors.border,
  },
  matchText: {
    color: colors.text,
    fontSize: 16,
  },
});