import React from "react";
import {TextInput, View} from "react-native";

import ss from "./style.scss";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {IconDefinition} from "@fortawesome/free-solid-svg-icons";

interface InputProps {
    icon: IconDefinition,
    label: string
}

export const Input: React.FC<InputProps> = ({icon, label}) => {
    return (
        <View style={[ss.field]}>
            <FontAwesomeIcon style={ss.icon} icon={icon} color='#B5B4BE' size={21}/>
            <TextInput style={ss.input} placeholder={label} placeholderTextColor="#B5B4BE"/>
        </View>
    );
};