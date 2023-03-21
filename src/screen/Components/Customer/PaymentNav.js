import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PaymentSub from "./PaymentSub";
import Payment from "./payment";
import PaymentTab2 from "./PaymentTab2";
import PaymentSub3 from "./PaymentSub3";

const Stack1 = createNativeStackNavigator();

const PaymentNav = ()=>{
    return (
    <NavigationContainer independent={true}>
        <Stack1.Navigator>
        <Stack1.Screen options={{headerShown:false}} name="PaymentMain" component={Payment} />
        <Stack1.Screen options={{headerShown:false}} name="paymentSub" component={PaymentSub} />
        <Stack1.Screen options={{headerShown:false}} name="paymentSub2" component={PaymentTab2} />
        <Stack1.Screen options={{headerShown:false}} name="paymentSub3" component={PaymentSub3} />
        </Stack1.Navigator> 
    </NavigationContainer>
    )
}

export default PaymentNav;
