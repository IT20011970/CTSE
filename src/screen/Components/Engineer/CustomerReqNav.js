import React from "react";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CustomerRequirements from "./CustomerRequirements";
import CustomerReqTab2 from "./CustomerReqTab2";
import CustomerReqTab3 from "./CustomerReqTab3";


const Stack1 = createNativeStackNavigator();

const CustomerReqNav = () => {
    return (
        <NavigationContainer independent={true}>
            <Stack1.Navigator>
                <Stack1.Screen options={{headerShown: false}} name="CustomerReq" component={CustomerRequirements}/>
                <Stack1.Screen options={{headerShown: false}} name="CustomerReq2" component={CustomerReqTab2}/>
                <Stack1.Screen options={{headerShown: false}} name="CustomerReq3" component={CustomerReqTab3}/>
            </Stack1.Navigator>
        </NavigationContainer>
    )
}

export default CustomerReqNav;
