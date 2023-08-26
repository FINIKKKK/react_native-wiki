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
import {useValidation} from "../../hooks/useValidation";
import {RegisterScheme} from "../../utils/validation";
import {TAuthData} from "../../utils/types/account";
import {useFetch} from "../../hooks/useFetch";
import axios from "axios/index";

export const Register: React.FC = () => {
    /**
     * Переменные ----------------
     */
    const [inputs, setInputs] = React.useState({
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        password: '',
    });
    const {errors, validateForm} = useValidation()

    /**
     * Методы ----------------
     */
        // Изменение значений формы
    const handleOnchange = (text: string, input: string) => {
            setInputs(prevState => ({...prevState, [input]: text}));
        };

    // Регистрация пользователя
    const onRegister = async () => {
        // Данные
        const dto = {
            first_name: inputs.first_name,
            last_name: inputs.last_name,
            email: inputs.email,
            phone: inputs.phone,
            password: inputs.password,
        };

        // Вызываем хук для валидации форм
        // const isValid = await validateForm(dto, RegisterScheme);
        // if (!isValid) return false;

        // Регистрация пользователя
        // const { data } = await useFetch<TAuthData>('/register/secure', {
        //     data: dto,
        //     method: 'POST',
        // });
        console.log(dto);

        const {data, request} = await axios.post('https://api.wiki.itl.systems/account/register/secure', dto
        );
        // console.log(data, request);
    };


    return (
        <MainLayout>
            <AuthLayout title="Регистрация">
                <Text style={ss.text1}>У вас уже есть аккаунт? <Link to='login' style={ss.link1}>Войти</Link></Text>

                <Input icon={faUser} label="Имя" onChangeText={text => handleOnchange(text, 'first_name')}
                       errors={errors['first_name']}/>

                <Input icon={faUser} label="Фамилия" onChangeText={text => handleOnchange(text, 'last_name')}
                       errors={errors['last_name']}/>

                <Input icon={faEnvelope} label="Email" onChangeText={text => handleOnchange(text, 'email')}
                       errors={errors['email']}/>

                <Input icon={faPhone} label="Телефон" onChangeText={text => handleOnchange(text, 'phone')}
                       errors={errors['phone']}/>

                <Input icon={faLock} label="Пароль" onChangeText={text => handleOnchange(text, 'password')}
                       errors={errors['password']}/>

                <Btn onPress={onRegister} styles={{marginTop: 15}} label="Зарегистрироваться"/>

                <Text style={ss.text2}>Нажимая на кнопку, вы соглашаетесь с условиями <Link to='#' style={ss.link2}>"Оферты
                    и лицензионного договора"</Link> и <Link to='#' style={ss.link2}>"Политикой обработки персональных
                    данных"</Link></Text>
            </AuthLayout>
        </MainLayout>
    );
};