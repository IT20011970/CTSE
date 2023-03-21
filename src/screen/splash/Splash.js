import { useNavigation } from "@react-navigation/core";
import React, { useEffect, useState } from "react";
import { Image, View,Text } from "react-native";

const Splash = ()=>{

    const [isGo,setIsGo]=useState(true);
    const Navigation=useNavigation();


    useEffect(()=>{
        if(isGo == true){
            setTimeout(()=>{
                Navigation.navigate("Login");
                setIsGo(false);
            },2000);
        }
    });

    return (
        <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:"#fff"}}>
            <Image source={require('../../assets/images/sun-roof-design-template-solar-power-logo-vector-icon-illustration-172619864.png')} style={{width:150,height:150,justifyContent:'center'}}/>
            <Text style={{fontSize:24,textAlign:'center',fontWeight:'bold'}}>Welcome To SUNBEAM</Text>
        </View>
    )
}

export default Splash;