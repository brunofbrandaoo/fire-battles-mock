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
  visibleItems?: number; // Optional prop with default value
}

const ITEM_HEIGHT = 56; // Height of one item + margin (44 + 12)

const MatchList: React.FC<MatchListProps> = ({ matches, visibleItems = 3 }) => {
  // Calculate container height based on requested visible items
  const containerHeight = (ITEM_HEIGHT * visibleItems) + 8;
  
  const renderMatch = ({ item }: { item: Match }) => (
    <View style={styles.matchItem}>
      <Text style={styles.matchText}>
        {item.date} - {item.opponent} - {item.result}
      </Text>
    </View>
  );

  return (
    <View style={[styles.container, { height: containerHeight }]}>
      <FlatList
        data={matches}
        renderItem={renderMatch}
        keyExtractor={item => item.id}
        style={styles.list}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={true}
      />
    </View>
  );
};

export default MatchList;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    // Height will be set dynamically based on visibleItems prop
  },
  list: {
    width: '100%',
  },
  listContent: {
    paddingBottom: 8,
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