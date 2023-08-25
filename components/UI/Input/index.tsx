import React from "react";
import {Text, TextInput, View} from "react-native";

import ss from "./style.scss";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {IconDefinition} from "@fortawesome/free-solid-svg-icons";

interface InputProps {
    icon: IconDefinition,
    label: string;
    onChangeText: (value: string) => void;
    errors?: string[]
}

export const Input: React.FC<InputProps> = ({icon, label, errors, ...props},) => {
    return (
        <View style={[ss.field]}>
            <View style={[ss.input_wpapper, errors?.length && ss.error]}>
                <FontAwesomeIcon style={ss.icon} icon={icon} color='#B5B4BE' size={21}/>
                <TextInput style={[ss.input]}
                           placeholder={label} placeholderTextColor="#B5B4BE" {...props}/>
            </View>
            {errors?.length && <Text style={ss.errors}>{errors[0]}</Text>}
        </View>
    );
};