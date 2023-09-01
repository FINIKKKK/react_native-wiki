import * as SecureStore from 'expo-secure-store';
import { useCustomFetch } from '../hooks/useCustomFetch';
import { TUserData } from '../utils/types/account';
import { useDispatch } from 'react-redux';
import { setUser } from '../store/slices/user';

export const authMiddleware = async () => {
  const token = await SecureStore.getItemAsync('token');
  const { useFetch } = useCustomFetch();
  const dispatch = useDispatch();

  dispatch(setUser({ first_name: 'fisrtname', last_name: 'last_name' }));

  if (!token) {
    // Перенаправляем пользователя на страницу авторизации
    // return navigateTo('/login');
  }
  // Если есть токен
  else if (token) {
    // Получаем данные пользователя
    const { data }: { data: TUserData } = await useFetch(`/account`);

    if (data) {
      // Сохраняем в хранилище данные пользователя
      dispatch(setUser('token'));
      // Сохраняем в хранилище команды пользователя
    }
  }
  // catch
  //     (err)
  //     {
  //         // Если токен не валидный
  //         // Обнуляем токен
  //     }
  // }
};
