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
import { Picker } from '@react-native-picker/picker';
import Icon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from "@react-navigation/core";
import {getPayment} from "../../../Api/Api";

const ManageBillsTab2 = () => {
    const naviation=useNavigation();
    const [complain, setComplain] = React.useState([])
    React.useEffect(() => {
        f()
    }, [])
    async function f(){
            
        try {
            const data = await getPayment(data)
            data.on('value', querySnapshot => {
                const todos = []
                querySnapshot.forEach((doc) => {
                    console.log(doc)
                    todos.push({
                        key:doc.key,
                        AmountPay: doc.val().AmountPaid,
                        CustomerNIC: doc.val().customer,
                        description: doc.val().description
                    })
                })
                setComplain(todos)
            })
        }
        catch {

        }
    }
    return (<ScrollView>
          <View style={styles.container}>
                <ImageBackground style={styles.defaultBg} resizeMode={'cover'} source={require('../../../assets/images/auth_bg.png')}/>
            </View>
            <View style={styles.select}>
                    <Icon style={{margin:10}} name="search1"  size={20} color="black" />
                    <TextInput style={{marginLeft:10}} placeholder="Search"/>
            </View>
        <View style={styles.card}>
            <View style={{ flexDirection: 'row',  padding: 5, marginTop: 5,backgroundColor:'rgba(26, 89, 151, 0.07)', borderRadius : 3 ,margin:10}}>
                    <Text style={styles.HraderStyle}>Customer ID</Text>
                    <Text style={styles.HraderStyle}>Amount</Text>
                    <Text style={styles.HraderStyle}>Status</Text>
            </View>
            {
                complain && complain.map((complain, key) => {
                    return (<>
            <View style={{ flexDirection: 'row',  padding: 5, marginTop: 5, borderRadius : 3 ,margin:10}}>
                    <Text style={styles.HraderStyle}>{complain.CustomerNIC}</Text>
                    <Text style={styles.HraderStyle}>{complain?.AmountPay?complain.AmountPay:"0"}</Text>
                    <View style={{borderRadius:4}}>
                    <Text style={styles.HraderStyle}>{complain?.AmountPay?"Paid":"Unpaid"}</Text>
                   </View>    
            </View>
            </>
                    )
                })
            }
         
        </View>

            <View style={{margin:10, flexDirection: 'row'}}>
                    <TouchableOpacity style={styles.defaultButton1}>
                        <Text style={{textAlign:'center',fontSize:16,color:'#fff'}} onPress={()=>{naviation.navigate("ManageBills1")}}>Back</Text>
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
        margin: 10,
        fontSize:16,
        borderWidth:1,
        width:'80%',
        borderColor:"#a7a7a7",
        borderRadius:10
    },select:{
        margin:10,
        height:50,
        fontSize:16,
        borderWidth:1,
        borderColor:"#a7a7a7",
        borderRadius:10,
        flexDirection:'row'
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
    },HraderStyle1: {
        flex: 1,
        fontSize: 12,
        alignItems:'flex-end'
    },defaultBg:{
        width:'100%',
        height:120
    },   defaultButton:{
        padding:20,
        backgroundColor:'#14b53f',
        borderRadius:50,
    },defaultBg:{
        width:'100%',
        height:120
    },
});

export default ManageBillsTab2;
