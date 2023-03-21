import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PanelService from "./ViewPanelServices";
import PanelServicesTab2 from "./PanelServicesTab2";

const Stack1 = createNativeStackNavigator();

const PanelServicesNav = ()=>{
    return (
    <NavigationContainer independent={true}>
        <Stack1.Navigator>
        <Stack1.Screen options={{headerShown:false}} name="Services" component={PanelService}  />
        <Stack1.Screen options={{headerShown:false}} name="ServicesTab2" component={PanelServicesTab2} />
        </Stack1.Navigator> 
    </NavigationContainer>
    )
}

export default PanelServicesNav;
