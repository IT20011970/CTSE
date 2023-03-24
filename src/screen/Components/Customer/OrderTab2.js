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
import { Picker } from '@react-native-picker/picker';
import {Meters} from "../../../Api/Api";
import  AsyncStorage from '@react-native-async-storage/async-storage';
const Stack1 = createNativeStackNavigator();

const OrderTab2 = () => {
    const naviation=useNavigation();
    const [fileds,setFields]=React.useState({})
    const [name, setName] =React.useState("")

    React.useEffect(()=>{
        f()
       })
       async function f(){
        try {
            const value = await  AsyncStorage.getItem('fields')
            if (value !== null) {
                
                const data =JSON.parse(value).mail;
                setName(data)
            }
        }
        catch{

        }
    }
    function  handleChange(e,value){
        fileds[value]=e
        setFields(fileds)
        console.log(fileds)
    }

    function post() {
        console.log(name)
        Meters(fileds,name)
        
    }
    return (
        <ScrollView>
        <View> 
            <View style={styles.container}>
                <ImageBackground style={styles.defaultBg} resizeMode={'cover'} source={require('../../../assets/images/auth_bg.png')}/>
            </View>
            <View style={{flexDirection: 'row',justifyContent: 'center',margin: 10,borderRadius:10}}>
            <TouchableOpacity style={styles.defaultButton2} onPress={()=>{naviation.navigate("Ordertab1")}}>
                        <Text style={{textAlign:'center',fontSize:16,color:'black'}}>Solar Products</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.defaultButton1}>
                        <Text style={{textAlign:'center',fontSize:16,color:'#fff'}}>Electricity Meters</Text>
            </TouchableOpacity>

            </View>
            <View style={styles.formInput}>
                    <TextInput style={styles.textInput} placeholder="Meter Type" onChangeText={e => handleChange(e,"type")}/>
            </View>
            <View style={styles.formInput}>
                    <TextInput style={styles.textInput} placeholder="Description" onChangeText={e => handleChange(e,"description")}/> 
            </View> 
            <View style={styles.formInput}>
                    <TextInput style={styles.textInput} placeholder="Address" onChangeText={e => handleChange(e,"address")}/> 
            </View> 
            <View style={{margin:10,alignItems:'center'}}>
                    <TouchableOpacity style={styles.defaultButton1} onPress={post}>
                        <Text style={{textAlign:'center',fontSize:16,color:'#fff'}}>Order</Text>
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
    },select:{
        margin:10,
        height:50,
        width:'95%',
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

export default OrderTab2;
