import React from "react";
import {AuthLayout} from "../../layouts/auth";
import {MainLayout} from "../../layouts/main";
import {Input} from "../../components/UI/Input";
import {faEnvelope, faUser} from "@fortawesome/free-regular-svg-icons";
import {Btn} from "../../components/UI/Button";
import {faLock, faPhone} from "@fortawesome/free-solid-svg-icons";
import ss from "./style.scss";
import {Text} from "react-native";
import {Link} from "@react-navigation/native";
import '../../assets/styles/variables.scss';

export const Register: React.FC = () => {
    /**
     * Переменные ----------------
     */
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [phone, setPhone] = React.useState('');
    const [password, setPassword] = React.useState('');

     /**
      * Методы ----------------
      */
     // Зарегистровать пользователя



    return (
        <MainLayout>
            <AuthLayout title="Регистрация">
                <Text style={ss.text1}>У вас уже есть аккаунт? <Link to='login' style={ss.link1}>Войти</Link></Text>

                <Input icon={faUser} label="Имя"/>

                <Input icon={faEnvelope} label="Email"/>

                <Input icon={faPhone} label="Телефон"/>

                <Input icon={faLock} label="Пароль"/>

                <Btn styles={{marginTop: 15}} label="Зарегистрироваться"/>

                <Text style={ss.text2}>Нажимая на кнопку, вы соглашаетесь с условиями <Link to='#' style={ss.link2}>"Оферты
                    и лицензионного договора"</Link> и <Link to='#' style={ss.link}>"Политикой обработки персональных
                    данных"</Link></Text>
            </AuthLayout>
        </MainLayout>
    );
};