import React from 'react';
import { Text, View } from 'react-native';
import { Link } from '@react-navigation/native';
import { Input } from '../../components/UI/Input';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { AuthLayout } from '../../layouts/auth';
import { LoginScheme } from '../../utils/validation';
import { TAuthData } from '../../utils/types/account';
import { useValidation } from '../../hooks/useValidation';
import { useCustomFetch } from '../../hooks/useCustomFetch';
import ssAuth from '../../layouts/auth/style.scss';
import { setUser } from '../../store/slices/user';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { Btn } from '../../components/UI/Button';
import * as SecureStore from 'expo-secure-store';

export const Login: React.FC = () => {
  /**
   * Переменные ----------------
   */
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const { errors, validateForm } = useValidation();
  const { useFetch, errors: errorsRequest, isLoading } = useCustomFetch();
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user.user);

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

    console.log(dto);

    // Вызываем хук для валидации форм
    const isValid = await validateForm(dto, LoginScheme);
    if (!isValid) return false;

    // Авторизация пользователя
    const { data }: { data: TAuthData } = await useFetch('/account/auth', {
      data: dto,
      method: 'POST',
    });

    console.log(data);
    if (data) {
      await SecureStore.setItemAsync('token', data.token);
      console.log(data.user);
      dispatch(setUser(data.user));
      console.log('user', user);
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

      <Btn
        onPress={onLogin}
        styles={ssAuth.btn}
        label="Вход"
        disabled={isLoading}
      />
    </AuthLayout>
  );
};
