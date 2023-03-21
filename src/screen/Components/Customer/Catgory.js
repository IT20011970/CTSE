import { Picker } from '@react-native-picker/picker';
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


const Catagory = (props) => {
    return (
       
            <View style={{height:130,width:130,marginLeft:20,borderWidth:0.5,borderColor:'#dddddd',backgroundColor:'rgba(26, 89, 151, 0.07)'}}>
           <View style={{flex:2}}>
                        <Image style={{flex:1,width:null,height:null,resizeMode:'cover'}}  source={props.imageuri}/>
            </View>
            <View style={{flex:1,paddingLeft:10,paddingTop:10}}>
                            <Text>{props.name}</Text>
            </View>
            </View>
        
    );
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
    },defaultBg:{
        width:'100%',
        height:120
    },select:{
        margin:10,
        height:50,
        fontSize:16,
        borderWidth:1,
        borderColor:"#a7a7a7",
        borderRadius:10
    },defaultButton:{
        padding:15,
        backgroundColor:'#14b53f',
        borderRadius:10,
    },HraderStyle: {
        flex: 1,
        fontSize: 12,
    },
});

export default Catagory;
