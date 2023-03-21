import { useNavigation } from "@react-navigation/core";
import React, { Component } from "react";
import { Image,ToastAndroid, ImageBackground, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View  } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage"
import { Item123,login } from "../../Api/Api";
const Login = ()=>{

    const [fileds,setFields]=React.useState({})

    React.useEffect(()=>{
        // const requestOptions = {
        //     method: 'GET',
        //     headers: {'Content-Type': 'application/json'}
        // };
        // const data = fetch('http://10.0.2.2:8080/customer/gerItems/', requestOptions)
        //     .then(response => {
        //         return response.json()
        //     }).then(r=>console.log(r))

        // Item123().then(r=> console.log(r));

      
    })


    function  handleChange(e,value){
        fileds[value]=e
        setFields(fileds)
        console.log(fileds)
    }

    const post = async () => {
        try {
            await AsyncStorage.setItem('fields', JSON.stringify(fileds))
          } catch (e) {

          }
          login(fileds).then(r=>{
                 naviation.navigate("Home",{ navigate: r})
                ToastAndroid.show("Success !", ToastAndroid.SHORT)
        })
        
      }
    // function post() {
    //     login(fileds).then(r=>{
    //         if(r===1){
                
    //             AsyncStorage.setItem('fileds', "fileds")
    //             naviation.navigate("Home",{ navigate: '1'})
    //         }
    //     })
    // }

    const naviation=useNavigation();

    return (
    <SafeAreaView>
            <ScrollView>
                <View style={styles.container}>
                    <ImageBackground  style={styles.defaultBg} resizeMode={'cover'} source={require('../../assets/images/auth_bg.png')}/>
                </View>
                <View style={{padding:10,backgroundColor:'#fff'}}>
                    <View style={styles.formInput}>
                        <View style={{justifyContent:'center',alignItems:'center'}}>
                            <Image source={require('../../assets/images/sun-roof-design-template-solar-power-logo-vector-icon-illustration-172619864.png')} resizeMode={'center'} style={{width:'100%',height:150}}/>
                        </View>
                    </View>
                    <View style={styles.formInput}>
                        <TextInput style={styles.textInput} onChangeText={e => handleChange(e,"mail")} placeholder="Your email address"/>
                    </View>
                    <View style={styles.formInput}>
                        <TextInput style={styles.textInput} onChangeText={e => handleChange(e,"passowrd")} placeholder="Password" secureTextEntry={true}/>
                    </View>
                    <View style={styles.formInput}>
                        <TouchableOpacity onPress={()=>{ naviation.navigate("Forget") }}>
                            <Text style={{color:"#db2218",textAlign:'right',fontSize:16,fontWeight:'bold'}}>Forgot password?</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.formInput}>
                        <TouchableOpacity style={styles.defaultButton} onPress={post}>
                            <Text style={{textAlign:'center',fontSize:16,color:'#fff'}}>Login</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.formInput}>
                        <Text style={{textAlign:'center'}}>or</Text>
                    </View>
                    <View style={styles.formInput}>
                        <View style={{justifyContent:'center',alignItems:'center',flexDirection:'row'}}>
                            <TouchableOpacity style={{marginRight:10}}>
                                <Image source={require('../../assets/images/google.png')} style={{width:40,height:40,borderRadius:1000}}/>
                            </TouchableOpacity>
                            <TouchableOpacity style={{marginLeft:10}}>
                                <Image source={require('../../assets/images/facebook.png')} style={{width:40,height:40,borderRadius:1000}}/>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.formInput}>
                        <View style={{height:1,backgroundColor:'#ddd',width:'100%'}}></View>
                    </View>
                    <View style={styles.formInput}>
                        <TouchableOpacity onPress={()=>naviation.navigate("Register")}>
                            <Text style={{color:"#14b53f",textAlign:'center',fontSize:16,fontWeight:'bold'}}>Need Account ? Register now</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },defaultBg:{
        width:'100%',
        height:120
    },formInput:{
        marginTop:10,
        padding:10,
    },textInput:{
        padding:10,
        fontSize:16,
        borderWidth:1,
        borderColor:"#a7a7a7",
        borderRadius:10
    },defaultButton:{
        padding:15,
        backgroundColor:'#4287f5',
        borderRadius:10,
    }
});

export default Login;
