import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Repairs from "./Repairs";
import PanelRepairsTab2 from "./PanelRepairsTab2";
import OnGrid from "./Ongrid";
import OnGridTab2 from "./OnGrindTab1";

const Stack1 = createNativeStackNavigator();

const OnGridNav = ()=>{
    return (
    <NavigationContainer independent={true}>
        <Stack1.Navigator>
        <Stack1.Screen options={{headerShown:false}} name="OngridSolar" component={OnGrid}  />
        <Stack1.Screen options={{headerShown:false}} name="OngridSolarTab2" component={OnGridTab2} />
        </Stack1.Navigator> 
    </NavigationContainer>
    )
}

export default OnGridNav;
