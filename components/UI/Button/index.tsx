import React from 'react';
import { Text, TouchableHighlight, ViewStyle } from 'react-native';
import ss from './style.scss';

interface BtnProps {
  label: string;
  styles?: ViewStyle;
  onPress?: () => void;
  disabled?: boolean;
  type?: 'btn2';
}

export const Btn: React.FC<BtnProps> = (props) => {
  return (
    <TouchableHighlight
      underlayColor="#72A3E8"
      style={[ss.btn, props.styles, props.disabled && ss.disabled, props.type === 'btn2' && ss.btn2]}
      onPress={props.onPress}
      disabled={props.disabled}
    >
      <Text style={[ss.label, props.type === 'btn2' && ss.label2]}>{props.label}</Text>
    </TouchableHighlight>
  );
};
