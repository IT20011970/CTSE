import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SellItemTab1 from "./SellItemTab1";
import SellItemTab2 from "./SellItemTab2";
import SellItemTab3 from "./SellItemTab3";
import SellItemTab4 from "./SellItemTab4";
import InstallationTab1 from "./InstallationTab1";
import InstallationTab2 from "./InstallationTab2";
import InstallationTab3 from "./InstallationTab3";



const Stack1 = createNativeStackNavigator();

const InstallationNav = ()=>{
    return (
    <NavigationContainer independent={true}>
        <Stack1.Navigator>
        <Stack1.Screen options={{headerShown:false}} name="InstallationTab1" component={InstallationTab1}  />
        <Stack1.Screen options={{headerShown:false}} name="InstallationTab2" component={InstallationTab2}  />
        <Stack1.Screen options={{headerShown:false}} name="InstallationTab3" component={InstallationTab3}  />
        </Stack1.Navigator> 
    </NavigationContainer>
    )
}

export default InstallationNav;
