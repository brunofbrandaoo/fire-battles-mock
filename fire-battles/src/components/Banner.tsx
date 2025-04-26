import type React from 'react';
import { Image, StyleSheet, type ViewStyle } from 'react-native';

interface BannerProps {
  uri: string;
  style?: ViewStyle;
}

const Banner: React.FC<BannerProps> = ({ uri, style }) => (
  <Image source={{ uri }} style={[styles.banner, style]} resizeMode="cover" />
);

export default Banner;

const styles = StyleSheet.create({
  banner: {
    width: '100%',
    height: 140,
    borderRadius: 16,
    marginBottom: 24,
  },
});