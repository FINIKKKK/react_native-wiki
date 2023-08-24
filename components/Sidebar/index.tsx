import React from "react";
import {Text, View} from "react-native";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {faChevronLeft, faEllipsisH} from "@fortawesome/free-solid-svg-icons";

import ss from './styles.scss';

export const Sidebar = ({}) => {
    return (
        <View style={ss.sidebar}>
            <View style={ss.title}>
                <FontAwesomeIcon icon={faChevronLeft} style={[ss.icon, ss.arrow]} color='#0B55BB'/>
                <Text style={ss.text}>ggg</Text>
            </View>
            <FontAwesomeIcon icon={faEllipsisH} style={[ss.icon, ss.options]} color='#0B55BB'/>
        </View>
    );
};
