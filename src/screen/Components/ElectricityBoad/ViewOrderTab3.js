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
import {AddOrderAditional} from "../../../Api/Api";
import { useNavigation } from "@react-navigation/core";
const ViewOrdersTab3 = ({ route }) => {
    // const { navigate } = route.params;
    console.log(route.params.complain.key)
    const [fileds, setFields] =React.useState({})
    const naviation=useNavigation();
    
    function  handleChange(e,value){
        fileds[value]=e
        setFields(fileds)
        console.log(fileds)
    }
    function post() {
        console.log("name")
        AddOrderAditional(fileds,route.params.complain.key)
        naviation.navigate("ViewOrder4")
    }
    return (
        <ScrollView>
         <View style={styles.container}>
                <ImageBackground style={styles.defaultBg} resizeMode={'cover'} source={require('../../../assets/images/auth_bg.png')}/>
            </View>
    

<View style={styles.card}>
<View style={{ flexDirection: 'row',  padding: 5, marginTop: 5, borderRadius : 3}}>
<Text style={{ flex: 1,fontSize: 16,fontWeight:'600',margin:20}}>Customer Id : 123</Text>
   
</View>
<View style={{ flexDirection: 'row',  padding: 5, marginTop: 5, borderRadius : 3 ,margin:10}}>
       <Text style={styles.HraderStyle}>Transformer Capacity</Text>
       <TextInput style={styles.textInput} placeholder="Item" onChangeText={e => handleChange(e,"description")}/>
                        
</View>
<View style={{ flexDirection: 'row',  padding: 5, marginTop: 5,borderRadius : 3 ,margin:10}}>
       <Text style={styles.HraderStyle}>Distance</Text>
       <TextInput style={styles.textInput} onChangeText={e => handleChange(e,"distance")} />
</View>
<View style={{ flexDirection: 'row',  padding: 5, marginTop: 5,borderRadius : 3 ,margin:10}}>
       <Text style={styles.HraderStyle}>Required Capacity</Text>
       <TextInput style={styles.textInput} onChangeText={e => handleChange(e,"ReqCapacity")}/>
</View>
<View style={{ flexDirection: 'row',  padding: 5, marginTop: 5,borderRadius : 3 ,margin:10}}>
       <Text style={styles.HraderStyle}>Type of Solar Meter</Text>
       {/* <TextInput style={styles.textInput}  /> */}
</View>
<View style={{ flexDirection: 'row',  padding: 5, marginTop: 5,borderRadius : 3 ,margin:10}}>
       <Text style={styles.HraderStyle}>Customer Name</Text>
       <Text style={styles.HraderStyle}>:{}</Text>
</View>
<View style={{ flexDirection: 'row',  padding: 5, marginTop: 5,borderRadius : 3 ,margin:10}}>
       <Text style={styles.HraderStyle}>Email</Text>
       <Text style={styles.HraderStyle}>:{}</Text>
</View>
<View style={{ flexDirection: 'row',  padding: 5, marginTop: 5,borderRadius : 3 ,margin:10}}>
       <Text style={styles.HraderStyle}>Address</Text>
       <Text style={styles.HraderStyle}>:{}</Text>
</View>
</View>

 

            <View style={{margin:10, flexDirection: 'row'}}>
                    <TouchableOpacity style={styles.defaultButton1} onPress={e=>{ post()}}>
                        <Text style={{textAlign:'center',fontSize:16,color:'#fff'}}>Sumbit</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.defaultButton1} onPress={()=>{naviation.navigate("ViewOrder1")}}>
                        <Text style={{textAlign:'center',fontSize:16,color:'#fff'}} >Decline</Text>
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
        marginTop:-10,
        fontSize:16,
        width:200,
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
        height:120
    },
});

export default ViewOrdersTab3;
