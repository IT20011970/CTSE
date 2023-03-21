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
import Icon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from "@react-navigation/core";
import Complain from '../Customer/Complain';
const InstallationTab2 = () => {
    const naviation=useNavigation();
    return (
        <ScrollView>
         <View style={styles.container}>
                <ImageBackground style={styles.defaultBg} resizeMode={'cover'} source={require('../../../assets/images/auth_bg.png')}/>
            </View>
            <Text style={{ flex: 1,fontSize: 20,fontWeight:'600',margin:20}}>Techinical Details</Text>
        <View style={styles.card}>
            <View style={{ flexDirection: 'row',  padding: 5, marginTop: 5, borderRadius : 3 ,margin:10}}>
                    <Text style={styles.HraderStyle}>Name</Text>
                    <Text>:kamal</Text>
            </View>
            <View style={{ flexDirection: 'row',  padding: 5, marginTop: 5, borderRadius : 3 ,margin:10}}>
                    <Text style={styles.HraderStyle}>Email</Text>
                    <Text>:Kamal@gamil.com</Text>
            </View>
            <View style={{ flexDirection: 'row',  padding: 5, marginTop: 5,borderRadius : 3 ,margin:10}}>
                    <Text style={styles.HraderStyle}>Address</Text>
                    <Text >:Kandy</Text>
            </View>
            <View style={{ flexDirection: 'row',  padding: 5, marginTop: 5,borderRadius : 3 ,margin:10}}>
                    <Text style={styles.HraderStyle}>System Capacity</Text>
                    <Text >:12KW</Text>
            </View>
        </View>
        
        <View style={styles.card}>
        <View style={{flexDirection: 'row'}}>
                     <View style={styles.select}>
                    <Icon style={{margin:10}} name="file1"  size={20} color="#0091D5" />
                    <TextInput style={{marginLeft:10}} placeholder="Choose"/>
                    </View>
                <View style={{margin:10}}>
                    <TouchableOpacity style={styles.defaultButton1} onPress={()=>{naviation.navigate("ViewOrder4")}}>
                        <Text style={{textAlign:'center',fontSize:16,color:'#fff'}}>></Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.formInput}>
                        <View style={{height:1,backgroundColor:'#ddd',width:'100%'}}></View>
            </View>
            <View style={{flexDirection: 'row'}}>
                     <View style={styles.select}>
                    <Icon style={{margin:10}} name="file1"  size={20} color="#0091D5" />
                    <TextInput style={{marginLeft:10}} placeholder="Choose"/>
                    </View>
                <View style={{margin:10}}>
                    <TouchableOpacity style={styles.defaultButton1} onPress={()=>{naviation.navigate("ViewOrder4")}}>
                        <Text style={{textAlign:'center',fontSize:16,color:'#fff'}}>></Text>
                    </TouchableOpacity>
                </View>
            </View>
            
        </View> 

        <View style={{margin:10,alignItems:'center'}}>
                    <TouchableOpacity style={styles.defaultButton2} onPress={()=>{naviation.navigate("InstallationTab3")}}>
                        <Text style={{textAlign:'center',fontSize:16,color:'#fff'}}>Confirm Order</Text>
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
        backgroundColor:'#0091D5',
        borderRadius:50,
        width:50,
        height:50,
        marginLeft: 1,
        alignItems:'center'
    },select:{
        margin:10,
        height:50,
        width:'70%',
        fontSize:16,
        borderWidth:1,
        borderColor:"#a7a7a7",
        borderRadius:10,
        flexDirection:'row'
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
        borderColor:"#a7a7a7",
        borderWidth:1,
        borderColor:"#a7a7a7",
        backgroundColor: '#fff',
        zIndex: 20,
        borderRadius: 10,
        elevation: 20,
        paddingTop: 10,
        paddingBottom: 10,
    },
    card2:{
        justifyContent: 'center',
        margin: 10,
        borderWidth:1,
        borderColor:"#a7a7a7",
         borderRadius:10,
        zIndex: 20,
        width:200,
        borderRadius: 10,
        paddingTop: 10,
        paddingBottom: 10,
    },
    defaultButton2:{
        padding:15,
        backgroundColor:'#0091D5',
        borderRadius:10,
        marginLeft: 1,
        alignItems:'center'
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
    },HraderStyle1: {
        flex: 1,
        fontSize: 12,
        textAlign:'center'
    },defaultBg:{
        width:'100%',
        height:120
    },
});

export default InstallationTab2;
