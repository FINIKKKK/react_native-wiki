import React from "react";
import {Text, View} from "react-native";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {faChevronLeft, faEllipsisH} from "@fortawesome/free-solid-svg-icons";

import styles from './styles.scss';

export const Sidebar = ({}) => {
    return (
        <View style={styles.sidebar}>
            <FontAwesomeIcon icon={faChevronLeft}/>
            <Text>ggg</Text>
            <FontAwesomeIcon icon={faEllipsisH}/>
        </View>
    );
};