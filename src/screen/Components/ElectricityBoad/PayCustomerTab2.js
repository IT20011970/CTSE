import React from 'react';
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

const PayCustomerTab2 = () => {
    const naviation=useNavigation();
    return (
        <ScrollView>
         <View style={styles.container}>
                <ImageBackground style={styles.defaultBg} resizeMode={'cover'} source={require('../../../assets/images/auth_bg.png')}/>
            </View>
             <View style={styles.card}>
            <View style={{ flexDirection: 'row',  padding: 5, marginTop: 5, borderRadius : 3}}>
            <Text style={{ flex: 1,fontSize: 16,fontWeight:'600',margin:20}}>Customer Id # 123</Text>
                
            </View>
            <View style={{ flexDirection: 'row',  padding: 5, marginTop: 5, borderRadius : 3 ,margin:10}}>
                    <Text style={styles.HraderStyle}>Customer</Text>
                    <Text style={styles.HraderStyle}>:Kamal</Text>
            </View>
            <View style={{ flexDirection: 'row',  padding: 5, marginTop: 5,borderRadius : 3 ,margin:10}}>
                    <Text style={styles.HraderStyle}>Location</Text>
                    <Text style={styles.HraderStyle}>:123/3 Abc Street</Text>
            </View>
            <View style={{ flexDirection: 'row',  padding: 5, marginTop: 5,borderRadius : 3 ,margin:10}}>
                    <Text style={styles.HraderStyle}>Mobile Number</Text>
                    <Text style={styles.HraderStyle}>:0772355567</Text>
            </View>
        </View>


    

            <View style={{margin:10, flexDirection: 'row'}}>
                    <TouchableOpacity style={styles.defaultButton1}>
                        <Text style={{textAlign:'center',fontSize:16,color:'#fff'}}>Back</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.defaultButton1}  onPress={()=>{naviation.navigate("PayCustomer3")}}>
                        <Text style={{textAlign:'center',fontSize:16,color:'#fff'}}>Go To Payments</Text>
                    </TouchableOpacity>
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
    },
    text: {
        fontSize:20,
    },defaultButton1:{
        padding:15,
        width:'50%',
        backgroundColor:'#0091D5',
        borderRadius:10,
        marginLeft: 1
    },defaultButton3:{
        padding:15,
        width:'10%',
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
    },defaultBg:{
        width:'100%',
        height:60
    },
});

export default PayCustomerTab2;
