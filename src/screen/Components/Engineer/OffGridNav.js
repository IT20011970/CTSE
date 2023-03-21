import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnGridTab2 from "./OnGrindTab1";
import OffGrid from "./OffGrid";
import OffGridTab2 from "./OffGridTab2";

const Stack1 = createNativeStackNavigator();

const OffGridNav = ()=>{
    return (
    <NavigationContainer independent={true}>
        <Stack1.Navigator>
        <Stack1.Screen options={{headerShown:false}} name="OffgridSolar" component={OffGrid}  />
        <Stack1.Screen options={{headerShown:false}} name="OffgridSolarTab" component={OffGridTab2} />
        </Stack1.Navigator> 
    </NavigationContainer>
    )
}

export default OffGridNav;
