import React from 'react';
import { AuthLayout } from '../../layouts/auth';
import { Input } from '../../components/UI/Input';
import { faEnvelope, faUser } from '@fortawesome/free-regular-svg-icons';
import { Btn } from '../../components/UI/Button';
import ssAuth from '../../layouts/auth/style.scss';
import { Select, TItem } from '../../components/UI/Select';
import { Text, Touchable, View } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faRemove } from '@fortawesome/free-solid-svg-icons';

export const values = [
  { value: 'user', label: 'Пользователь' },
  { value: 'admin', label: 'Администратор' },
  { value: 'moder', label: 'Модератор' },
];

export const AddUsers: React.FC = () => {
  /**
   * Переменные ----------------
   */
  const [emails, setEmails] = React.useState<string[]>([]);
  const [emailsValue, setEmailsValue] = React.useState('');
  const [role, setRole] = React.useState<TItem>(values[0]);

  /**
   * Методы ----------------
   */
  // Выслать приглашения
  const onInvite = () => {
    console.log(emails);
  };

  const onChangeEmailsValue = (value: string) => {
    setEmailsValue(value);
    if (value.includes(',') || value.includes(' ')) {
      setEmails((prev) => [
        ...prev,
        emailsValue.split(',')[0] || emailsValue.split('')[0],
      ]);
      setEmailsValue('');
    }
  };

  const onRemoveEmail = (email: string) => {

  };

  return (
    <AuthLayout
      title="Добавить пользователей"
      btn="Выслать приглашение"
      text="Основные достоинства itl.wiki раскрываются, когда вы работаете в связке
        с другими участниками команды и обсуждаете проекты."
    >
      <Input
        icon={faEnvelope}
        label="Введите email адреса через
запятую или пробел"
        onChangeText={(text) => onChangeEmailsValue(text)}
      />

      <Select values={values} setValue={setRole} icon={faUser} />

      {emails.length && (
        <View style={ss.items}>
          {emails.map((email, index) => (
            <View key={index}>
              <Text>{email}</Text>
              <Touchable onPress={() => onRemoveItem(email)}>
                <FontAwesomeIcon icon={faRemove}  />
              </Touchable>
            </View>
          ))}
        </View>
      )}

      <Btn
        label="Выслать приглашение"
        styles={[ssAuth.btn, { marginTop: 40 }]}
        onPress={onInvite}
      />
      <Btn label="Пропустить" type="btn2" />
    </AuthLayout>
  );
};
