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
import { useNavigation } from "@react-navigation/core";
import  AsyncStorage from '@react-native-async-storage/async-storage';
import {AddComplain} from "../../../Api/Api";

const Complain = () => {
    const [fileds,setFields]=React.useState({})
    const [name, setName] =React.useState("")
    const naviation=useNavigation();
    var data;
    React.useEffect(()=>{
        f()
       })
  
       async function f(){
        try {
            const value = await  AsyncStorage.getItem('fields')
            if (value !== null) {
                
                data =JSON.parse(value).mail;
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
    function  emptyField(){
        setFields(()=>{return{}})
        console.log(fileds)
    }

    function post() {
        console.log(name)
        AddComplain(fileds,name)
    }

    return (
        <SafeAreaView>
           
        <View style={styles.container}>
            <Text style={styles.text}>Complain</Text>
        </View>
        <ScrollView>
            <View style={styles.container}>
                <ImageBackground style={styles.defaultBg} resizeMode={'cover'} source={require('../../../assets/images/auth_bg.png')}/>
            </View>
            <View style={{padding:10}}>
                <View style={styles.formInput}>
                    <TextInput style={styles.textInput} value={name}  placeholder="From"/>
                </View>
                <View style={styles.formInput}>
                    <TextInput style={styles.textInput} placeholder="To" onChangeText={e => handleChange(e,"To")}/>
                </View>
                <View style={styles.select}>
                <Picker onValueChange={e=>handleChange(e,"type")} >
                <Picker.Item label="Complain Type" value=""/>
		            <Picker.Item label="Electrical" value="Electrical" />
		            <Picker.Item label="Mechanical" value="Mechanical"/>
                </Picker>
                </View>
                <View style={styles.formInput}>
                <TextInput style={styles.textInput} placeholder="Complain"  onChangeText={e => handleChange(e,"Complain")}/>
                </View>
                <View style={styles.formInput}>
                    <TouchableOpacity style={styles.defaultButton} onPress={post}>
                        <Text style={{textAlign:'center',fontSize:16,color:'#fff'}}>Complain</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.formInput}>
                    <View style={{height:1,backgroundColor:'#ddd',width:'100%'}}></View>
                </View>
            <View style={{ flexDirection: 'row',  padding: 5, marginTop: 5, borderRadius : 3 ,margin:10, justifyContent: 'center',}}>
                 <TouchableOpacity style={{flex:1}} onPress={()=>{naviation.navigate("Complaintab2")}}>
                            <Text style={{color:"#4287f5",fontSize:16,fontWeight:'bold'}} >View Complaints</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{emptyField()}}>
                            <Text style={{color:"#4287f5",fontSize:16,fontWeight:'bold'}}>Next Complaints</Text>
                    </TouchableOpacity>
            </View>
            </View>
        </ScrollView>
    </SafeAreaView>
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

export default Complain;
