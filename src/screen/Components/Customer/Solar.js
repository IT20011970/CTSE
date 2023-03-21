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
import Icon from 'react-native-vector-icons/AntDesign';
import Catagory from './Catgory';

const {height,width} =Dimensions.get('window')
const Solar = () => {
    return (
        <ScrollView >
            <View style={{flex:1,borderStartColor:'white',padding:10}}>
                   <View style={styles.select}>
            <Icon style={{margin:10}} name="search1"  size={20} color="black" />
            <TextInput style={{marginLeft:10}} placeholder="Search"/>
                </View>
                <Text style={{fontSize:24,fontWeight:'700',paddingHorizontal:20}}>Solar products</Text>
            </View>
             <View style={{height:130,marginTop:20}}>
                <ScrollView horizontal>
                       <Catagory imageuri={require('../../../assets/images/SOLAR1.jpeg')}name="Panel"/>
                       <Catagory imageuri={require('../../../assets/images/SOLAR2.jpeg')}name="Inverter"/>
                       <Catagory imageuri={require('../../../assets/images/SOLAR3.jpeg')}name="Battery"/>
                       <Catagory imageuri={require('../../../assets/images/SOLAR4.jpeg')}name="Other"/>
                </ScrollView>           
            </View> 
            <View style={{marginTop:40,paddingHorizontal:20,justifyContent:'center',borderRadius:10,backgroundColor:'rgba(26, 89, 151, 0.07)'}}>
                <Text style={{fontSize:24,fontWeight:'700'}}>
                    LG-Solar 
                </Text>
                <View style={{width:width-40,height:200}}>
                    <Image style={{flex:1,height:null,width:null,resizeMode:'stretch',borderRadius:5,borderWidth:3,borderColor:'#ddd'}} source={require('../../../assets/images/solar1.png')}/>
                </View>
                <Text style={{fontWeight:'400',marginTop:10,fontSize:14}}>
                   Price : 10000000
                </Text>
                <Text style={{fontWeight:'400',marginTop:10,fontSize:14}}>
                    Power :10 KW
                </Text>
                <Text style={{fontWeight:'400',marginTop:10,fontSize:14}}>
                    Type : Off Grid
                </Text>
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
    },select:{
        margin:10,
        height:50,
        fontSize:16,
        borderWidth:1,
        borderColor:"#a7a7a7",
        borderRadius:10,
        flexDirection:'row'
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
    }
});

export default Solar;
