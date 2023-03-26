import { useNavigation } from "@react-navigation/core";
import React, { Component } from "react";
import { addUser } from "../../Api/Api";
import { Image, ToastAndroid, ImageBackground, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Picker } from '@react-native-picker/picker';
import auth from '@react-native-firebase/auth';
const Register = () => {
    const [name, setName] = React.useState("")
    const [id, setId] = React.useState("")
    const [fileds, setFields] = React.useState({name:''})
    const navigation = useNavigation();

    function handleChange(e, value) {
        fileds[value] = e
        setFields((p) => { return { ...p, [value]: e } })
        console.log(fileds)
    }

    function post() {
        // ToastAndroid.show("Success !", ToastAndroid.SHORT)
        if(fileds.name==''){
            ToastAndroid.show("Name is invalid!", ToastAndroid.SHORT)
        }
        else if(fileds.mail==''|| !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(fileds.mail)){
            ToastAndroid.show("Email is invalid!", ToastAndroid.SHORT)
        }
        else if(fileds.password==''){
            ToastAndroid.show("Password is invalid!", ToastAndroid.SHORT)
        }
        else if(fileds.address==''){
            ToastAndroid.show("Address is invalid!", ToastAndroid.SHORT)
        }
        else  if(fileds.userType==''){
            ToastAndroid.show("User Type is invalid!", ToastAndroid.SHORT)
        }
        else{
           
            addUser(fileds)
            // navigation.navigate("Login")
        }
       
    }

    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.container}>
                    <ImageBackground style={styles.defaultBg} resizeMode={'cover'} source={require('../../assets/images/auth_bg.png')} />
                </View>
                <View style={{ padding: 10 }}>
                    <View style={styles.formInput}>
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Image source={require('../../assets/images/sun-roof-design-template-solar-power-logo-vector-icon-illustration-172619864.png')} resizeMode={'contain'} style={{ width: '100%', height: 60 }} />
                        </View>
                    </View>
                    <View style={styles.formInput}>
                        <TextInput style={styles.textInput} onChangeText={e => handleChange(e, "name")} placeholder="Your Full Name" />
                    </View>
                    <View style={styles.formInput}>
                        <TextInput style={styles.textInput} onChangeText={e => handleChange(e, "mail")} placeholder="Your email address" />
                    </View>
                    <View style={styles.formInput}>
                        <TextInput style={styles.textInput} onChangeText={e => handleChange(e, "password")} placeholder="Password" secureTextEntry={true} />
                    </View>
                    <View style={styles.formInput}>
                        <TextInput style={styles.textInput} placeholder="Confirm Password" secureTextEntry={true} />
                    </View>
                    <View style={styles.formInput}>
                        <TextInput style={styles.textInput} onChangeText={e => handleChange(e, "address")} placeholder="Address"  />
                    </View>
                    <View style={styles.select}>
                        <Picker value={fileds.userType} onValueChange={e => handleChange(e, "userType")}>
                            <Picker.Item label="Select User Type" value="" />
                            <Picker.Item label="Customer" value="Customer" />
                            <Picker.Item label="Solar Agent" value="Agent" />
                            <Picker.Item label="Electricity Boad" value="Boad" />
                            <Picker.Item label="Engineer" value="Eng" />
                        </Picker>
                    </View>
                    <View style={styles.formInput}>
                        <TouchableOpacity style={styles.defaultButton} onPress={post}>
                            <Text style={{ textAlign: 'center', fontSize: 16, color: '#fff' }}>Register</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.formInput}>
                        <View style={{ height: 1, backgroundColor: '#ddd', width: '100%' }}></View>
                    </View>
                    <View style={styles.formInput}>
                        <TouchableOpacity onPress={e => navigation.navigate("Login")}>
                            <Text style={{ color: "#4287f5", textAlign: 'center', fontSize: 16, fontWeight: 'bold' }}>Already Have Account ? Login</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }, defaultBg: {
        width: '100%',
        height: 100
    }, formInput: {
        marginTop: 10,
        padding: 10,
    }, textInput: {
        padding: 10,
        fontSize: 16,
        borderWidth: 1,
        borderColor: "#a7a7a7",
        borderRadius: 10
    }, defaultButton: {
        padding: 15,
        backgroundColor: '#14b53f',
        borderRadius: 10,
    }, select: {
        margin: 10,
        height: 50,
        fontSize: 16,
        borderWidth: 1,
        borderColor: "#a7a7a7",
        borderRadius: 10
    },
});

export default Register;
