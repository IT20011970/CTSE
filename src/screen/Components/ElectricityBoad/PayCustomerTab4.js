import React, { useEffect, useState } from 'react';
import {
    Image,
    ImageBackground,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import { useNavigation } from "@react-navigation/core";
import PayCustomerTab3 from './PayCustomerTab3';

const PayCustomerTab4 = () => {
    const naviation=useNavigation();
    return (
        <ScrollView>
     <View> 
        <View style={styles.container}>
                <ImageBackground style={styles.defaultBg} resizeMode={'cover'} source={require('../../../assets/images/auth_bg.png')}/>
            </View>
            
            <View style={styles.formInput}>
                    <TextInput style={styles.textInput} placeholder="Customer ID"/>
            </View>
            <View style={styles.formInput}>
                    <TextInput style={styles.textInput} placeholder="Employee ID"/>
            </View>
            <View style={styles.formInput}>
                    <TextInput style={styles.textInput} placeholder="Employee Name"/>
            </View>
            <TouchableOpacity>
                        <TextInput
                             style={styles.textInput}
                             placeholder="Amount"
                        />
            </TouchableOpacity>
            <TouchableOpacity>
                        <TextInput
                             style={styles.textInput}
                             placeholder="OTP"
                        />
            </TouchableOpacity>
            <TouchableOpacity>
                        <TextInput
                             style={styles.textInput}
                             placeholder={new Date('2018-05-18T04:00:00Z').toLocaleString()}
                        />
            </TouchableOpacity>
            <View>
            <View style={{margin:10, flexDirection: 'row'}}>
            <TouchableOpacity style={styles.defaultButton1} onPress={()=>{naviation.navigate("PayCustomer3")}}>
                        <Text style={{textAlign:'center',fontSize:16,color:'#fff'}}>Back</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.defaultButton1}>
                        <Text style={{textAlign:'center',fontSize:16,color:'#fff'}}onPress={()=>{naviation.navigate("PayCustomer1")}}>Proceed</Text>
            </TouchableOpacity>
            </View>
            </View>
        </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({

    CONTENT: {
        marginBottom: 0,
        marginLeft: 13,
        marginRight: 13,
        flex: 1,
    },defaultBg:{
        width:'100%',
        height:50
    },
    text: {
        fontSize:25,
    },defaultButton1:{
        padding:15,
        width:'50%',
        backgroundColor:'#0091D5',
        borderRadius:10,
        marginLeft: 1
    },defaultButton3:{
        padding:15,
        width:'20%',
        backgroundColor:'#0091D5',
        borderRadius:10,
        marginLeft: 1
    },textInput:{
        padding:10,
        margin: 10,
        fontSize:16,
        borderWidth:1,
        borderColor:"#a7a7a7",
        borderRadius:10
    },
    card:{
        justifyContent: 'center',
        margin: 10,
        backgroundColor: '#fff',
        zIndex: 20,
        borderRadius: 10,
        elevation: 20,
        paddingTop: 10,
        paddingBottom: 10,
    },
    defaultButton2:{
        padding:15,
        width:'50%',
        borderRadius:10,
        borderWidth:1,
        borderColor:"#0091D5",
        marginLeft: 1,
    },  defaultButton3:{
        padding:15,
        width:'15%',
        borderRadius:50,
        borderWidth:1,
        borderColor:"#0091D5",
        marginLeft: 1
    },container: {
        flexDirection: 'row',
        justifyContent: 'center',
        margin: 10,
    },HraderStyle: {
        flex: 1,
        fontSize: 12,
    }
});

export default PayCustomerTab4;
