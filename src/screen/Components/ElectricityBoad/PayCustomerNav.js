import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PayCustomerTab1 from "./PayCustomerTab1";
import PayCustomerTab2 from "./PayCustomerTab2";
import PayCustomerTab3 from "./PayCustomerTab3";
import PayCustomerTab4 from "./PayCustomerTab4";





const Stack1 = createNativeStackNavigator();

const PayCustomerNav = ()=>{
    return (
    <NavigationContainer independent={true}>
        <Stack1.Navigator>
        <Stack1.Screen options={{headerShown:false}} name="PayCustomer1" component={PayCustomerTab1}  />
        <Stack1.Screen options={{headerShown:false}} name="PayCustomer2" component={PayCustomerTab2}  />
        <Stack1.Screen options={{headerShown:false}} name="PayCustomer3" component={PayCustomerTab3}  />
        <Stack1.Screen options={{headerShown:false}} name="PayCustomer4" component={PayCustomerTab4}  />
        </Stack1.Navigator> 
    </NavigationContainer>
    )
}

export default PayCustomerNav;
