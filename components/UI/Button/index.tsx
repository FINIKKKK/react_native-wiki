import React from "react";
import {Text, TouchableOpacity, ViewStyle} from "react-native";
import ss from "./style.scss";

interface BtnProps {
    label: string,
    styles?: ViewStyle,
    onPress?: () => void
}

export const Btn: React.FC<BtnProps> = ({label, styles, onPress}) => {
    return (
        <TouchableOpacity style={[ss.btn, styles]} onPress={onPress}>
            <Text style={ss.label}>{label}</Text>
        </TouchableOpacity>
    );
};