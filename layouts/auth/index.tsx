import React from "react";
import {Image, ImageBackground, Text, View} from "react-native";
import ss from "./style.scss";
import {MainLayout} from "../main";

interface AuthLayoutProps {
    children: React.ReactNode;
    title: string
}

export const AuthLayout: React.FC<AuthLayoutProps> = ({children, title}) => {
    return (
        <MainLayout>
            <View style={ss.container}>
                <ImageBackground style={ss.bg} source={require("../../assets/img/bg.jpg")}/>
                <Image style={ss.img} source={require("../../assets/img/logo.png")}/>
                <View style={ss.form}>
                    <Text style={ss.title}>{title}</Text>
                    {children}
                </View>
            </View>
        </MainLayout>
    );
};