import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Repairs from "./Repairs";
import PanelRepairsTab2 from "./PanelRepairsTab2";

const Stack1 = createNativeStackNavigator();

const PanelRepairsNav = ()=>{
    return (
    <NavigationContainer independent={true}>
        <Stack1.Navigator>
        <Stack1.Screen options={{headerShown:false}} name="PanelRepairs" component={PanelRepairsTab2} />
        {/* <Stack1.Screen options={{headerShown:false}} name="Repairs" component={Repairs}  /> */}
        </Stack1.Navigator> 
    </NavigationContainer>
    )
}

export default PanelRepairsNav;
