import React from "react";
import {View} from "react-native";

import ss from "./style.scss";

interface SidebarProps {
}

export const Sidebar: React.FC<SidebarProps> = ({}) => {
    return (
        <View style={ss.sidebar}></View>
    );
};