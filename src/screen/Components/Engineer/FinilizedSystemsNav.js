import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Finilized from "./FinilizedSystem";
import FinilizedTab2 from "./FinilizedTab2";
import FinilizedTab3 from "./FinilizedTab3";


const Stack1 = createNativeStackNavigator();

const FinilizedSystemsNav = ()=>{
    return (
    <NavigationContainer independent={true}>
        <Stack1.Navigator>
        <Stack1.Screen options={{headerShown:false}} name="Finilized" component={Finilized}  />
        <Stack1.Screen options={{headerShown:false}} name="FinilizedTab2" component={FinilizedTab2} />
        <Stack1.Screen options={{headerShown:false}} name="FinilizedTab3" component={FinilizedTab3} />
        </Stack1.Navigator> 
    </NavigationContainer>
    )
}

export default FinilizedSystemsNav;
