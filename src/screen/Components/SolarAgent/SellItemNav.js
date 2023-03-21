import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SellItemTab1 from "./SellItemTab1";
import SellItemTab2 from "./SellItemTab2";
import SellItemTab3 from "./SellItemTab3";
import SellItemTab4 from "./SellItemTab4";


const Stack1 = createNativeStackNavigator();

const SellItemNav = ()=>{
    return (
    <NavigationContainer independent={true}>
        <Stack1.Navigator>
        <Stack1.Screen options={{headerShown:false}} name="SellItemTab1" component={SellItemTab1}  />
        <Stack1.Screen options={{headerShown:false}} name="SellItemTab2" component={SellItemTab2}  />
        <Stack1.Screen options={{headerShown:false}} name="SellItemTab3" component={SellItemTab3}  />
        <Stack1.Screen options={{headerShown:false}} name="SellItemTab4" component={SellItemTab4}  />
        
        {/* <Stack1.Screen options={{headerShown:false}} name="ViewOrderTab2" component={OrderProductsTab2} />
        <Stack1.Screen options={{headerShown:false}} name="ViewOrderTab3" component={OrderProductsTab3} /> */}
        {/* <Stack1.Screen options={{headerShown:false}} name="ViewOrder3" component={ViewOrdersTab3} />
        <Stack1.Screen options={{headerShown:false}} name="ViewOrder4" component={ViewOrdersTab4} /> */}
        </Stack1.Navigator> 
    </NavigationContainer>
    )
}

export default SellItemNav;
