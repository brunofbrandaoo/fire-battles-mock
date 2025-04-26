import type React from 'react';
import { Ionicons, MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';

type IconType = 'ion' | 'material' | 'fa';

interface IconProps {
  name: string;
  type?: IconType;
  size?: number;
  color?: string;
  style?: any;
}

const Icon: React.FC<IconProps> = ({
  name,
  type = 'ion',
  size = 24,
  color = '#fff',
  style,
}) => {
  switch (type) {
    case 'material':
      return <MaterialCommunityIcons name={name as any} size={size} color={color} style={style} />;
    case 'fa':
      return <FontAwesome name={name as any} size={size} color={color} style={style} />;
    case 'ion':
    default:
      return <Ionicons name={name as any} size={size} color={color} style={style} />;
  }
};

export default Icon;