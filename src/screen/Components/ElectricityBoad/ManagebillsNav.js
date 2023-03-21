import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ViewOrders from "./ViewOrdersTab1";
import ViewOrdersTab2 from "./ViewOrdersTab2";
import ViewOrdersTab3 from "./ViewOrderTab3";
import ViewOrdersTab4 from "./ViewOrderTab4";
import ViewComplains from "./ViewComplains";
import ManageBills from "./ManageBills";
import ManageBillsTab2 from "./ManageBillsTab2";


const Stack1 = createNativeStackNavigator();

const ManageBillsNav = ()=>{
    return (
    <NavigationContainer independent={true}>
        <Stack1.Navigator>
        <Stack1.Screen options={{headerShown:false}} name="ManageBills1" component={ManageBills}  />
        <Stack1.Screen options={{headerShown:false}} name="ManageBills2" component={ManageBillsTab2} />
        {/* <Stack1.Screen options={{headerShown:false}} name="ViewOrder3" component={ViewOrdersTab3} />
        <Stack1.Screen options={{headerShown:false}} name="ViewOrder4" component={ViewOrdersTab4} /> */}
        </Stack1.Navigator> 
    </NavigationContainer>
    )
}

export default ManageBillsNav;
