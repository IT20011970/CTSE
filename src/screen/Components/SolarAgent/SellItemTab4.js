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
import {UpdateItem} from "../../../Api/Api";

const Stack1 = createNativeStackNavigator();

const SellItemTab4 = ({ route }) => {
    const naviation=useNavigation();
    const [fileds,setFields]=React.useState({})
    function  handleChange(e,value){
        fileds[value]=e
        setFields(fileds)
        console.log(fileds)
    }
    console.log( route.params )
    function post() {
        UpdateItem(fileds,route.params)
    }
    return (
        <ScrollView>
        <View> 
        <View style={styles.container}>
                <ImageBackground style={styles.defaultBg} resizeMode={'cover'} source={require('../../../assets/images/auth_bg.png')}/>
            </View>
            <View style={{margin:10,alignItems:'center'}}>
            <View style={{flex:1,paddingLeft:10,paddingTop:10,alignItems:'center'}}>
                            <Text>Update Item</Text>
            </View>
            <View style={{height:130,width:130,marginLeft:20,borderWidth:2,borderColor:'black'}}>
           <View style={{flex:2}}>
                        <Image style={{flex:1,width:null,height:null,resizeMode:'center'}}  source={require('../../../assets/images/logo.png')}/>
            </View>
            </View>
            <View style={{flex:1,paddingLeft:20,paddingTop:10}}>
                            <Text>+Add</Text>
            </View>
            </View>
           

            <View style={styles.formInput}>
                    <TextInput style={styles.textInput} placeholder="Item Name" onChangeText={e => handleChange(e,"name")}/>
                </View>
                <View style={styles.formInput}>
                    <TextInput style={styles.textInput} placeholder="Price"onChangeText={e => handleChange(e,"price")}/>
                </View>
                <View style={styles.select}>
                
                </View>
                <View style={styles.formInput}>
                <TextInput style={styles.textInput} placeholder="Quantity" secureTextEntry={true} onChangeText={e => handleChange(e,"qty")}/>
                </View>
                <View style={styles.formInput}>
                <TextInput style={styles.textInput} placeholder="Description" secureTextEntry={true} onChangeText={e => handleChange(e,"description")}/>
                </View>
                <View style={{margin:10,alignItems:'center'}}>
                    <TouchableOpacity style={styles.defaultButton1} onPress={()=>{post()}}>
                        <Text style={{textAlign:'center',fontSize:16,color:'#fff'}}>Update</Text>
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
    },defaultButton:{
        padding:15,
        backgroundColor:'#14b53f',
        borderRadius:10,
        margin:10,
        width:'50%',
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
    defaultBg:{
        width:'100%',
        height:50
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

export default SellItemTab4;
