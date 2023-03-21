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
import {getOrderData} from "../../../Api/Api";
import  AsyncStorage from '@react-native-async-storage/async-storage';


const CustomerOrderTab1 = () => {
const Stack1 = createNativeStackNavigator();
const [complain, setComplain] =React.useState([])
var data;
React.useEffect(()=>{
    f()
   },[])
   async function f(){
    try {
        const value = await  AsyncStorage.getItem('fields')
        if (value !== null) {
            
            data =JSON.parse(value).mail;
            getOrderData(data).then(r=> setComplain(r));
            console.log("++++++"+complain)
        }
    }
    catch{

    }
}
    const naviation=useNavigation();
    return (
        <ScrollView>
        <View> 
        <View style={styles.container}>
                <ImageBackground style={styles.defaultBg} resizeMode={'cover'} source={require('../../../assets/images/auth_bg.png')}/>
            </View>
            <Text style={{ flex: 1,fontSize: 20,fontWeight:'600',margin:20}}>Customer Order List </Text>
            {
                                complain && complain.map((complain) => {
                                    return(<>
                                     <View style={styles.card}>
                                     <View style={{ flexDirection: 'column',  padding: 5, marginTop: 5 }}>
                                        <View style={{alignItems:'flex-start'}}>
                                             <Text style={{ flex: 1,fontSize: 14,fontWeight:'600'}}>{complain.customer}</Text>
                                             <Text style={styles.HraderStyle}>{complain.name} | {complain.qty}</Text>
                                             <Text style={styles.HraderStyle}>{complain.address}</Text>
                                         </View>
                                         <View style={{alignItems:'flex-end',marginTop:-30}}>
                                     <TouchableOpacity>
                                     <Text  onPress={()=>{naviation.navigate("CusOrder2",{ navigate:complain})}} style={{textAlign:'center',fontSize:16,color:'black'}}><Icon name="login"  size={30} color="black" /></Text>
                                    </TouchableOpacity>
                                      </View>
                          </View>
            </View>
                                    
                                    </>)
                                })
                                
            }
          
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
    },defaultBg:{
        width:'100%',
        height:120
    },
});

export default CustomerOrderTab1;
