import React from 'react';
import { AuthLayout } from '../../layouts/auth';
import { Input } from '../../components/UI/Input';
import { faEnvelope, faUser } from '@fortawesome/free-regular-svg-icons';
import { Btn } from '../../components/UI/Button';
import ssAuth from '../../layouts/auth/style.scss';
import { Select } from '../../components/UI/Select';

export const values = [
  { value: 'user', label: 'Пользователь' },
  { value: 'admin', label: 'Администратор' },
  { value: 'moder', label: 'Модератор' },
];

export const AddUsers: React.FC = () => {
  /**
   * Переменные ----------------
   */
  const [emails, setEmails] = React.useState('');

  /**
   * Методы ----------------
   */
  // Вычлать приглашения
  const onInvite = () => {};

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
запятую"
        onChangeText={(text) => setEmails(text)}
      />

      <Select values={values} icon={faUser} />

      <Btn
        label="Выслать приглашение"
        styles={[ssAuth.btn, { marginTop: 40 }]}
      />
      <Btn label="Пропустить" type="btn2" />
    </AuthLayout>
  );
};
