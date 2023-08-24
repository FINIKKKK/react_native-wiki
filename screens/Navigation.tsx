import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {Home} from "./Home";

const Stack = createNativeStackNavigator();

export const Navigation: React.FC = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="home" component={Home} options={{title: ''}}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

