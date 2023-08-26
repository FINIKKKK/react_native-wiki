import React from "react";
import {Text, TouchableHighlight, ViewStyle} from "react-native";
import ss from "./style.scss";

interface BtnProps {
    label: string,
    styles?: ViewStyle,
    onPress?: () => void,
}

export const Btn: React.FC<BtnProps> = (props) => {
    return (
        <TouchableHighlight underlayColor="#72A3E8" style={[ss.btn, props.styles]} onPress={props.onPress}>
            <Text style={ss.label}>{props.label}</Text>
        </TouchableHighlight>
    );
};