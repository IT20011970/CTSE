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
import  AsyncStorage from '@react-native-async-storage/async-storage';

const SheduledItems = () => {

    React.useEffect(()=>{
        f()
       },[])
       async function f(){
        try {
            const value = await  AsyncStorage.getItem('fields')
            if (value !== null) {
                console.log("JSON.parse(value)");
                console.log(JSON.parse(value).mail);
            }
        }
        catch{

        }
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
                    <TextInput style={styles.textInput} placeholder="Item Name"/>
                </View>
                <View style={styles.formInput}>
                    <TextInput style={styles.textInput} placeholder="Starting"/>
                </View>
                <View style={styles.formInput}>
                    <TextInput style={styles.textInput} placeholder="Ending" secureTextEntry={true}/>
                </View>

                <View style={styles.formInput}>
                    <TouchableOpacity style={styles.defaultButton}>
                        <Text style={{textAlign:'center',fontSize:16,color:'#fff'}}>Schedule</Text>
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
                <View style={{ flexDirection: 'row',  padding: 5, marginTop: 5,backgroundColor:'#CEE4BC', borderRadius : 3 ,margin:10}}>
                    <Text style={styles.HraderStyle}>Required Solar Systems:</Text>
                    <Text style={styles.HraderStyle}>4KW</Text>
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
    },
});

export default SheduledItems;
