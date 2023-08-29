import React from 'react';
import { AuthLayout } from '../../layouts/auth';
import { Input } from '../../components/UI/Input';
import { faAddressBook, faUser } from '@fortawesome/free-regular-svg-icons';
import { Btn } from '../../components/UI/Button';
import ssAuth from '../../layouts/auth/style.scss';
import { useValidation } from '../../hooks/useValidation';
import { TeamScheme } from '../../utils/validation';
import { useCustomFetch } from '../../hooks/useCustomFetch';
import { Text, View } from 'react-native';

export const CreateCompany: React.FC = () => {
  /**
   * Переменные ----------------
   */
  const [name, setName] = React.useState('');
  const [address, setAddress] = React.useState('');
  const { errors, validateForm } = useValidation();
  const { useFetch, errors: errorsRequest } = useCustomFetch();

  /**
   * Методы ----------------
   */
  // Создание команды
  const onCreateTeam = async () => {
    // Данные
    const dto = {
      name,
      code: address,
    };

    // Валидируем данные
    const isValid = await validateForm(dto, TeamScheme);
    if (!isValid) return false;

    // Создание команды
    const data: number = await useFetch('/team/add', {
      data: dto,
      method: 'POST',
    });

    if (data) {
      console.log(data);
    }
  };

  return (
    <AuthLayout title="Создать компанию" btn="Создать компанию">
      {errorsRequest && (
        <View style={ssAuth.errors}>
          {errorsRequest?.map((error: string, index: number) => (
            <Text style={ssAuth.error} key={index}>
              {error}
            </Text>
          ))}
        </View>
      )}

      <Input
        icon={faUser}
        label="Название вашей компании"
        onChangeText={(text) => setName(text)}
        errors={errors['name']}
      />

      <Input
        icon={faAddressBook}
        label="Адрес сайта"
        onChangeText={(text) => setAddress(text)}
        errors={errors['code']}
        type="address"
      />

      <Btn
        label="Создать компанию"
        styles={ssAuth.btn}
        onPress={onCreateTeam}
      />
    </AuthLayout>
  );
};
