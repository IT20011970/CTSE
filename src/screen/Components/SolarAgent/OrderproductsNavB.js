import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OrderProducts from "./OrderProductsTab1";
import OrderProductsTab2 from "./OrderProductsTab2";
import OrderProductsTab3 from "./OrderProductsTab3";


const Stack1 = createNativeStackNavigator();

const OrderProductsNavB = ()=>{
    return (
    <NavigationContainer independent={true}>
        <Stack1.Navigator>
        <Stack1.Screen options={{headerShown:false}} name="ViewOrderTab1" component={OrderProducts}  />
        <Stack1.Screen options={{headerShown:false}} name="ViewOrderTab2" component={OrderProductsTab2} />
        <Stack1.Screen options={{headerShown:false}} name="ViewOrderTab3" component={OrderProductsTab3} />
        </Stack1.Navigator> 
    </NavigationContainer>
    )
}

export default OrderProductsNavB;
