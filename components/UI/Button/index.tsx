import React from "react";
import {Text, TouchableOpacity, ViewStyle} from "react-native";
import ss from "./style.scss";

interface BtnProps {
    label: string,
    styles?: ViewStyle,
    onPress?: () => void,
}

export const Btn: React.FC<BtnProps> = (props) => {
    return (
        <TouchableOpacity style={[ss.btn, props.styles]} onPress={props.onPress}>
            <Text style={ss.label}>{props.label}</Text>
        </TouchableOpacity>
    );
};