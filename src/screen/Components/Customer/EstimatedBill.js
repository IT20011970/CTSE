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
    View,
} from 'react-native';
import {Estimated,getData} from "../../../Api/Api";
import  AsyncStorage from '@react-native-async-storage/async-storage';

const EstimatedBill = () => {
    const [fileds,setFields]=React.useState({})
    const [name, setName] =React.useState("")
    const [Tot, setTot] =React.useState("")
    var data;
    React.useEffect(()=>{
        f()
       })
       async function f(){
        try {
            const value = await  AsyncStorage.getItem('fields')
            if (value !== null) {
                
                data =JSON.parse(value).mail;
                getData(data).then(r=> console.log(r.estimate));
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
        Estimated(fileds,name)
    }

    return (
    <SafeAreaView>
        <View style={styles.container}>
            <Text style={styles.text}>Estimated Bill!</Text>
        </View>
        <ScrollView>
            <View style={styles.container}>
                <ImageBackground style={styles.defaultBg} resizeMode={'cover'} source={require('../../../assets/images/auth_bg.png')}/>
            </View>
            <View style={{padding:10}}>
                
                <View style={styles.formInput}>
                    <TextInput style={styles.textInput} placeholder="Item Name" onChangeText={e => handleChange(e,"name")}/>
                </View>
                <View style={styles.formInput}>
                    <TextInput style={styles.textInput} placeholder="Kilowatt of the Item" onChangeText={e => handleChange(e,"power")}/>
                </View>
                <View style={styles.formInput}>
                    <TextInput style={styles.textInput} placeholder="Number of Hours" secureTextEntry={true}onChangeText={e => handleChange(e,"hours")}/>
                </View>
                
                <View style={styles.formInput}>
                    <TouchableOpacity style={styles.defaultButton} onPress={post}>
                        <Text style={{textAlign:'center',fontSize:16,color:'#fff'}}>Add</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.formInput}>
                    <View style={{height:1,backgroundColor:'#ddd',width:'100%'}}></View>
                </View>
                <View style={styles.formInput}>
                    <TouchableOpacity>
                        <Text style={{color:"#4287f5",textAlign:'center',fontSize:16,fontWeight:'bold'}}>Next Item</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'column',  padding: 5, marginTop: 5,backgroundColor:'#CEE4BC', borderRadius : 3 ,margin:10}}>
                    <Text style={{flex: 1,fontSize: 16,fontWeight:'600'}}>Total Units: 45</Text>
                    <Text style={styles.HraderStyle}>Number of items: 10</Text>
                    <Text style={styles.HraderStyle}>Total Hours: 12</Text>
                    <Text style={styles.HraderStyle}>Price: 100000</Text>
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
    },defaultButton:{
        padding:15,
        backgroundColor:'#14b53f',
        borderRadius:10,
    }
});

export default EstimatedBill;
