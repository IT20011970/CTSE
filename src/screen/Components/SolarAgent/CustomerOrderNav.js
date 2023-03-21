import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OrderProducts from "./OrderProductsTab1";
import OrderProductsTab2 from "./OrderProductsTab2";
import OrderProductsTab3 from "./OrderProductsTab3";
import CustomerOrderTab1 from "./CustomerOrderTab1";
import CustomerOrderTab2 from "./CustomerOrderTab2";


const Stack1 = createNativeStackNavigator();

const CustomerOrderNav = ()=>{
    return (
    <NavigationContainer independent={true}>
        <Stack1.Navigator>
        <Stack1.Screen options={{headerShown:false}} name="CusOrder1" component={CustomerOrderTab1}  />
        <Stack1.Screen options={{headerShown:false}} name="CusOrder2" component={CustomerOrderTab2} /> 
        </Stack1.Navigator> 
    </NavigationContainer>
    )
}

export default CustomerOrderNav;
