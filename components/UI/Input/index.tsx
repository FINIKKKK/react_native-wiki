import React from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import ss from './style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import { TextInputMask } from 'react-native-masked-text';

interface InputProps {
  icon: IconDefinition;
  label: string;
  onChangeText: (value: string) => void;
  errors?: string[];
  password?: boolean;
  phone?: boolean;
  type?: 'address';
}

export const Input: React.FC<InputProps> = ({
  icon,
  label,
  errors,
  password,
  phone,
  type,
  ...props
}) => {
  const [showPassword, setShowPassword] = React.useState(password);

  return (
    <View style={[ss.field]}>
      <View style={[ss.input_wpapper, errors?.length && ss.error]}>
        <FontAwesomeIcon
          style={ss.icon}
          icon={icon}
          color="#B5B4BE"
          size={21}
        />

        {!phone ? (
          <TextInput
            style={[ss.input]}
            placeholder={label}
            placeholderTextColor="#B5B4BE"
            {...props}
            secureTextEntry={showPassword}
          />
        ) : (
          <TextInputMask
            style={[ss.input]}
            type={'custom'}
            placeholder={label}
            placeholderTextColor="#B5B4BE"
            {...props}
            options={{
              mask: '+7 (999) 999-99-99',
            }}
          />
        )}

        {password && (
          <TouchableOpacity
            style={ss.password}
            onPress={() => setShowPassword(!showPassword)}
          >
            {!showPassword ? (
              <FontAwesomeIcon
                icon={faEye}
                style={ss.password_icon}
                color="#B5B4BE"
                size={20}
              />
            ) : (
              <FontAwesomeIcon
                icon={faEyeSlash}
                style={ss.password_icon}
                color="#B5B4BE"
                size={20}
              />
            )}
          </TouchableOpacity>
        )}

        {type === 'address' && <Text style={ss.address}>itl.wiki</Text>}
      </View>

      {errors?.length && <Text style={ss.errors}>{errors[0]}</Text>}
    </View>
  );
};
