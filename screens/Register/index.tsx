import React from "react";
import {AuthLayout} from "../../layouts/auth";
import ss from "./style.scss";
import {MainLayout} from "../../layouts/main";

export const Register: React.FC = () => {
    return (
        <MainLayout>
            <AuthLayout title="Регистрация">
                <></>
            </AuthLayout>
        </MainLayout>
    );
};