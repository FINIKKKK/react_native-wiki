import React from "react";
import {StatusBar} from "react-native";

interface MainLayoutProps {
    children: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({children}) => {
    return (
        <>
            <StatusBar/>
            {children}
        </>
    );
};