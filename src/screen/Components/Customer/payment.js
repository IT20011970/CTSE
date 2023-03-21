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
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PaymentSub from './PaymentSub';

const Stack1 = createNativeStackNavigator();
import {getData} from "../../../Api/Api";
import  AsyncStorage from '@react-native-async-storage/async-storage';
const Payment = () => {
    const naviation=useNavigation();
    const [complain, setComplain] =React.useState([])
    var data;
    React.useEffect(()=>{
        f()
       })
       async function f(){
      
                
        try {
            const value = await  AsyncStorage.getItem('fields')
            if (value !== null) {
                
                data =JSON.parse(value).mail;
                getData(data).then(r=> setComplain(r.payments));
                
            }
        }
        catch{

        }
    
      
    }

    return (
        <ScrollView>
        <View> 
            <View style={styles.container}>
                <ImageBackground style={styles.defaultBg} resizeMode={'cover'} source={require('../../../assets/images/auth_bg.png')}/>
            </View>
            <View style={{ flexDirection: 'row',justifyContent: 'center',margin: 10}}>
                <TouchableOpacity style={styles.defaultButton1}>
                        <Text style={{textAlign:'center',fontSize:16,color:'#fff'}}>View Payment</Text>
                  </TouchableOpacity>
                 <TouchableOpacity style={styles.defaultButton2} onPress={()=>{naviation.navigate("paymentSub3")}}>
                        <Text style={{textAlign:'center',fontSize:16,color:'black'}}>Payment History</Text>
                 </TouchableOpacity>
            </View>

        
            {
                                complain && complain.map((complain, key) => {
                                    return (<>
        <View style={styles.card}>
             <View style={{ flexDirection: 'column',  padding: 5, marginTop: 5 }}>
                <View style={{alignItems:'flex-start'}}>
                    <Text  style={{flex: 1,fontSize: 16,fontWeight:'600'}}>Pay Slip Id #{key+1}</Text>
                    <Text style={styles.HraderStyle}>Description:{complain.description}</Text>
                    <Text style={styles.HraderStyle}>Amount: LKR {complain.amount}</Text>
                </View>
                <View style={{alignItems:'flex-end',marginTop:-30}}>
                    <TouchableOpacity>
                        <Text  onPress={()=>{naviation.navigate("paymentSub2")}} style={{textAlign:'center',fontSize:16,color:'black'}}><Icon name="login"  size={30} color="black" /></Text>
                     </TouchableOpacity>
                </View>
            </View>
            </View>
                                             </>  
                                    )
                                })
                            }
           

        
            <View style={styles.formInput}>
                    <TextInput style={styles.textInput} keyboardType="numeric" placeholder="Payment Amount"/>
            </View>
            <View style={styles.formInput}>
                    <TextInput style={styles.textInput} placeholder="NIC"/>
                    
            </View> 
             <View style={{alignItems:'flex-end',margin:10}}>
            <TouchableOpacity style={styles.defaultButton1}>
                        <Text onPress={()=>naviation.navigate("paymentSub")} style={{textAlign:'center',fontSize:16,color:'#fff'}}>Next ></Text>
            </TouchableOpacity>
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
        height:120
    },
    text: {
        fontSize:25,
    },defaultButton1:{
        padding:15,
        width:'50%',
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
        marginLeft: 1
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

export default Payment;
