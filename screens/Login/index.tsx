import React from 'react';
import { Text, View } from 'react-native';
import ss from './style.scss';
import { Link } from '@react-navigation/native';
import { Input } from '../../components/UI/Input';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { Btn } from '../../components/UI/Button';
import { AuthLayout } from '../../layouts/auth';
import { LoginScheme } from '../../utils/validation';
import { TAuthData } from '../../utils/types/account';
import { useValidation } from '../../hooks/useValidation';
import { useCustomFetch } from '../../hooks/useCustomFetch';
import ssAuth from '../../layouts/auth/style.scss';

export const Login: React.FC = () => {
  /**
   * Переменные ----------------
   */
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const { errors, validateForm } = useValidation();
  const { useFetch, errors: errorsRequest, isLoading } = useCustomFetch();

  /**
   * Методы ----------------
   */
  // Авторизуем пользователя
  const onLogin = async () => {
    // Данные
    const dto = {
      email,
      password,
    };
    
    // Вызываем хук для валидации форм
    const isValid = await validateForm(dto, LoginScheme);
    if (!isValid) return false;

    // Регистрация пользователя
    const data: TAuthData = await useFetch('/account/auth', {
      data: dto,
      method: 'POST',
    });

    if (data) {
      console.log(data);
    }
  };

  return (
    <AuthLayout title="Вход в аккаунт">
      <Text style={ssAuth.text1}>
        Еще нет аккаунта? {}
        <Link to="/register" style={ssAuth.link1}>
          Создать аккаунт
        </Link>
      </Text>

      {errorsRequest && (
        <View style={ssAuth.errors}>
          {errorsRequest?.map((error: string) => (
            <Text style={ssAuth.error}>{error}</Text>
          ))}
        </View>
      )}

      <Input
        icon={faEnvelope}
        label="Email"
        onChangeText={(text) => setEmail(text)}
        errors={errors['email']}
      />

      <Input
        icon={faLock}
        label="Пароль"
        onChangeText={(text) => setPassword(text)}
        errors={errors['password']}
        password
      />

      <Btn onPress={onLogin} styles={ssAuth.btn} label="Вход" disabled={isLoading} />
    </AuthLayout>
  );
};