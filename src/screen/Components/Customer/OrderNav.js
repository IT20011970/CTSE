import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OrderTab1 from "./OrderTab1";
import OrderTab2 from "./OrderTab2";



const Stack1 = createNativeStackNavigator();

const OderNavCus = ()=>{
    return (
    <NavigationContainer independent={true}>
        <Stack1.Navigator>
        <Stack1.Screen options={{headerShown:false}} name="Ordertab1" component={OrderTab1} />
        <Stack1.Screen options={{headerShown:false}} name="Ordertab2" component={OrderTab2} />
        </Stack1.Navigator> 
    </NavigationContainer>
    )
}

export default OderNavCus;
