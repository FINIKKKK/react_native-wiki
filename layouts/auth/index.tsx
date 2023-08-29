import React from 'react';
import { Image, ImageBackground, Text, View } from 'react-native';
import ss from './style.scss';
import { MainLayout } from '../main';
import { Link } from '@react-navigation/native';

interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
  btn?: string;
  text?: string;
}

export const AuthLayout: React.FC<AuthLayoutProps> = (props) => {
  return (
    <MainLayout>
      <View style={ss.container}>
        <ImageBackground
          style={ss.bg}
          source={require('../../assets/img/bg.jpg')}
        />
        <Image style={ss.img} source={require('../../assets/img/logo.png')} />
        <View style={ss.form}>
          <Text style={ss.title}>{props.title}</Text>

          {props.text && <Text style={ss.text}>{props.text}</Text>}

          {props.children}

          {props.btn && (
            <Text style={ss.text2}>
              Нажимая на кнопку «{props.btn}», вы соглашаетесь с условиями{' '}
              <Link to="#" style={ss.link2}>
                «Оферты и лицензионного договора»
              </Link>{' '}
              и{' '}
              <Link to="#" style={ss.link2}>
                «Политикой обработки персональных данных»
              </Link>
            </Text>
          )}
        </View>
      </View>
    </MainLayout>
  );
};
