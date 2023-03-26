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
import CalendarStrip from 'react-native-calendar-strip';
import {AddBills} from "../../../Api/Api";

const ManageBills = () => {
    const naviation=useNavigation();
    const [fileds,setFields]=React.useState({})
  

    function  handleChange(e,value){
        fileds[value]=e
        setFields(fileds)
        console.log(fileds)
    }

    function post() {
        AddBills(fileds)
    }
    return (
        <ScrollView>
        <View>
              <View style={styles.container}>
                <ImageBackground style={styles.defaultBg} resizeMode={'cover'} source={require('../../../assets/images/auth_bg.png')}/>
            </View>
            <CalendarStrip/>
            <Text style={{fontSize: 20,fontWeight:'600',margin:20}}>Bill Details</Text>
            <View style={styles.formInput}>
                      <View style={styles.formInput}>
                        <TextInput style={styles.textInput}onChangeText={e=>handleChange(e,"customer")} placeholder="Customer NIC" />
                    </View>
                        <TextInput style={styles.textInput} onChangeText={e => handleChange(e,"amount")} placeholder="Amount"/>
                    </View>
                   <View style={styles.formInput}>
                        <TextInput style={styles.textInput} onChangeText={e=>handleChange(e,"description")} placeholder="Description"/>
                    </View>

            <View style={{margin:10, flexDirection: 'row'}}>
                    <TouchableOpacity style={styles.defaultButton1}onPress={()=>{naviation.navigate("ManageBills2")}}>
                        <Text style={{textAlign:'center',fontSize:16,color:'#fff'}}>Bill Payments</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.defaultButton1}  >
                        <Text style={{textAlign:'center',fontSize:16,color:'#fff'}} onPress={post}>Send Bills</Text>
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
        width:'25%',
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
        height:120
    },
});

export default ManageBills;
