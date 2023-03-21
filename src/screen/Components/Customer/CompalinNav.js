import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Complain from "./Complain";
import ComplainTab2 from "./ComplainTab2";




const Stack1 = createNativeStackNavigator();

const CompalinNav = ()=>{
    return (
    <NavigationContainer independent={true}>
        <Stack1.Navigator>
        <Stack1.Screen options={{headerShown:false}} name="Complaintab1" component={Complain}  />
        <Stack1.Screen options={{headerShown:false}} name="Complaintab2" component={ComplainTab2}  />
        </Stack1.Navigator> 
    </NavigationContainer>
    )
}

export default CompalinNav;
