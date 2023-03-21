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
    Dimensions,
    View
} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import NumericInput from 'react-native-numeric-input'
import { useNavigation } from "@react-navigation/core";
const {height,width} =Dimensions.get('window')
const OrderProductsTab2 = () => {
    const naviation=useNavigation();
    return (
        <ScrollView>
             <View style={styles.container}>
                <ImageBackground style={styles.defaultBg} resizeMode={'cover'} source={require('../../../assets/images/auth_bg.png')}/>
            </View>
            <View style={{marginTop:40,paddingHorizontal:20,margin:1}}>
                <View style={{borderRadius:4,margin:1}}>
                <View style={{width:width-35,height:360}}>
                    <Image style={{flex:1,height:null,width:null,resizeMode:'cover',borderRadius:5}} source={require('../../../assets/images/Correct.png')}/>
                </View>
            
            </View> 
        
            <View style={{flexDirection:'row',margin:20,borderRadius:5,justifyContent:'center'}}>
                 <Text style={{fontSize:34,fontWeight:'700',alignItems:'center'}}>
                    SuccessFull 
                </Text>
            </View>
                <View style={{margin:10,alignItems:'center'}}>
                    <TouchableOpacity style={styles.defaultButton1} onPress={()=>{naviation.navigate("ViewOrderTab3")}}>
                        <Text style={{textAlign:'center',fontSize:16,color:'#fff'}}>View Order</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
        
    );
}


{/* <View style={styles.card}>
            <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: 5, marginTop: 5, }}>
            <View style={{marginRight:150}}>
            <Text style={styles.HraderStyle}>Tool ID</Text>
            <Text style={styles.HraderStyle}>Tool ID</Text>
            <TouchableOpacity>
                        <Text style={{textAlign:'center',fontSize:16,color:'black'}}><Icon name="login"  size={30} color="black" /></Text>
            </TouchableOpacity>
            </View>
            </View>
              
            </View> */}
const styles = StyleSheet.create({

    CONTENT: {
        marginBottom: 0,
        marginLeft: 13,
        marginRight: 13,
        flex: 1,
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
    },defaultBg:{
        width:'100%',
        height:50
    },
});

export default OrderProductsTab2;
