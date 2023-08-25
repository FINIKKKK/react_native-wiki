import React from "react";
import {Text, View, ViewStyle} from "react-native";
import ss from "./style.scss";

interface BtnProps {
    label: string,
    styles: ViewStyle
}

export const Btn: React.FC<BtnProps> = ({label, styles}) => {
    return (
        <View style={[ss.btn, styles]}>
            <Text style={ss.label}>{label}</Text>
        </View>
    );
};