import React from "react";
import {MainLayout} from "../../layouts/main";
import {Sidebar} from "../../components/Sidebar";

export const Home: React.FC = () => {
    return (
        <MainLayout>
            <Sidebar/>
        </MainLayout>
    );
};
