import React from 'react';
import { AuthLayout } from '../../layouts/auth';
import { Input } from '../../components/UI/Input';
import { faEnvelope, faUser } from '@fortawesome/free-regular-svg-icons';
import { Btn } from '../../components/UI/Button';
import ssAuth from '../../layouts/auth/style.scss';
import { Select, TItem } from '../../components/UI/Select';
import { Text, TouchableOpacity, View } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faRemove } from '@fortawesome/free-solid-svg-icons';
import ss from './style.scss';

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
    setEmailsValue('');
  };

  // При вводе в поле, добавлять emails в список
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

  // Удалить email из списка
  const onRemoveEmail = (email: string) => {
    setEmails(() =>
      emails.filter((item2) => item2 !== emails.find((item) => item === email)),
    );
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
        value={emailsValue}
      />

      <Select values={values} setValue={setRole} icon={faUser} />

      {emails.length !== 0 && (
        <View style={ss.items}>
          {emails.map((email, index) => (
            <View key={index} style={ss.item}>
              <Text style={ss.item_text}>{email}</Text>
              <TouchableOpacity onPress={() => onRemoveEmail(email)}>
                <FontAwesomeIcon icon={faRemove} color="#0E65DD" size={17} />
              </TouchableOpacity>
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
