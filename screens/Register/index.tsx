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
import {string} from "yup";

export const Register: React.FC = () => {
    /**
     * Переменные ----------------
     */
    const [inputs, setInputs] = React.useState({
            name: '',
            email: '',
            phone: '',
            password: '',
        });

    /**
     * Методы ----------------
     */
        // Изменение значений формы
    const handleOnchange = (text: string, input: string) => {
            setInputs(prevState => ({...prevState, [input]: text}));
        };
    // Регистрация пользователя
    const onRegister = () => {
        console.log(inputs);
    };


    return (
        <MainLayout>
            <AuthLayout title="Регистрация">
                <Text style={ss.text1}>У вас уже есть аккаунт? <Link to='login' style={ss.link1}>Войти</Link></Text>

                <Input icon={faUser} label="Имя" onChangeText={text => handleOnchange(text, 'name')}/>

                <Input icon={faEnvelope} label="Email" onChangeText={text => handleOnchange(text, 'email')}/>

                <Input icon={faPhone} label="Телефон" onChangeText={text => handleOnchange(text, 'phone')}/>

                <Input icon={faLock} label="Пароль" onChangeText={text => handleOnchange(text, 'password')}/>

                <Btn onPress={onRegister} styles={{marginTop: 15}} label="Зарегистрироваться"/>

                <Text style={ss.text2}>Нажимая на кнопку, вы соглашаетесь с условиями <Link to='#' style={ss.link2}>"Оферты
                    и лицензионного договора"</Link> и <Link to='#' style={ss.link}>"Политикой обработки персональных
                    данных"</Link></Text>
            </AuthLayout>
        </MainLayout>
    );
};