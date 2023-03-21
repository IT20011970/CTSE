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
import {useNavigation} from "@react-navigation/core";
import {getCurReq} from "../../../Api/Api";
const CustomerRequirements = () => {
    const naviation = useNavigation();
    const [complain, setComplain] =React.useState([])
    var data;
    React.useEffect(()=>{
        f()
       },[])
       async function f(){
       
        getCurReq().then(r=> setComplain(r));
                
    }
    return (

        <View>
            <View>
                <ImageBackground style={styles.defaultBg} resizeMode={'cover'}
                                 source={require('../../../assets/images/auth_bg.png')}/>
            </View>
            <View style={styles.container}>
                <TouchableOpacity style={[styles.defaultButton1, {marginLeft: 5, marginRight: 5}]}>
                    <Text style={{textAlign: 'center', fontSize: 13, color: '#fff', fontWeight: 'bold'}}>Viewed</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.defaultButton2, {marginLeft: 5, marginRight: 5}]}>
                    <Text style={{textAlign: 'center', fontSize: 13, color: 'black', fontWeight: 'bold'}}>Not
                        Viewed</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.defaultButton2, {marginLeft: 5, marginRight: 5}]}>
                    <Text style={{textAlign: 'center', fontSize: 13, color: 'black', fontWeight: 'bold'}}>Hold</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.defaultButton2, {marginLeft: 5, marginRight: 5}]}>
                    <Text style={{textAlign: 'center', fontSize: 13, color: 'black', fontWeight: 'bold'}}>Solved</Text>
                </TouchableOpacity>
            </View>
            <ScrollView>
                
        {
                                complain && complain.map((complain, key) => {
                                    return (<>
                <View style={styles.card}>
                    <View style={{flexDirection: 'column', padding: 5, marginTop: 5}}>
                        <View style={{alignItems: 'flex-start'}}>
                            <Text style={[styles.HraderStyle, {fontWeight: 'bold',fontSize:14}]}>Customer Request {key+1}</Text>
                            <Text style={styles.HraderStyle}>{complain.viewStatus}</Text>
                        </View>
                        <View style={{alignItems: 'flex-end', marginTop: -30}}>
                            <TouchableOpacity onPress={() => {
                                naviation.navigate("CustomerReq2",{ navigate: complain})
                            }}>
                                <Text style={{textAlign: 'center', fontSize: 16, color: 'black'}}><Icon name="login"
                                                                                                        size={30}
                                                                                                        color="black"/></Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                
              
          </>  
          )
      })
  }
                
            </ScrollView>
        </View>


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
        fontSize: 20,
    },
    defaultButton1: {
        padding: 5,
        paddingTop: 10,
        paddingBottom: 10,
        width: '23%',
        backgroundColor: '#0091D5',
        borderRadius: 10,
        marginLeft: 1
        // },
        // defaultButton3: {
        //     padding: 15,
        //     width: '10%',
        //     backgroundColor: '#0091D5',
        //     borderRadius: 10,
        //     marginLeft: 1
    }, textInput: {
        padding: 5,
        margin: 10,
        fontSize: 16,
        borderWidth: 1,
        borderColor: "#a7a7a7",
        borderRadius: 10
    },
    card: {
        justifyContent: 'center',
        margin: 10,
        backgroundColor: '#fff',
        zIndex: 20,
        borderRadius: 10,
        elevation: 20,
        paddingTop: 10,
        paddingBottom: 10,
    },
    defaultButton2: {
        padding: 5,
        paddingTop: 10,
        paddingBottom: 10,
        width: '23%',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#ACE4FE",
        marginLeft: 1,
        backgroundColor: '#ACE4FE'
    },
    defaultButton3: {
        padding: 15,
        width: '15%',
        borderRadius: 50,
        borderWidth: 1,
        borderColor: "#0091D5",
        marginLeft: 1
    }, container: {
        flexDirection: 'row',
        justifyContent: 'center',
        margin: 10,
    }, HraderStyle: {
        flex: 1,
        fontSize: 12,
    }, defaultBg: {
        width: '100%',
        height: 70
    },
});

export default CustomerRequirements;
