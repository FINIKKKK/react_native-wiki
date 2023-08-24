import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {Home} from "./Home";
import {Register} from "./Register";

const Stack = createNativeStackNavigator();

export const Navigation: React.FC = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                {/*<Stack.Screen name="home" component={Home} options={{headerShown: false}}/>*/}
                <Stack.Screen name="register" component={Register} options={{headerShown: false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

