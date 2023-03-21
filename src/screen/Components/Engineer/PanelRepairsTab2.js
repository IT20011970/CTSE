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

const PanelRepairsTab2 = () => {
    const naviation = useNavigation();
    return (<ScrollView>
            <View>
                <ImageBackground style={styles.defaultBg} resizeMode={'cover'}
                                 source={require('../../../assets/images/auth_bg.png')}/>
            </View>
            <View style={styles.card}>
                <View style={{flexDirection: 'column', padding: 5, marginTop: 5}}>
                    <View style={{alignItems: 'flex-start'}}>
                        <Text style={[styles.HraderStyle,{fontWeight:'bold'}]}>Customer Request</Text>
                        <Text style={[styles.HraderStyle,{fontWeight:'bold'}]}>Check Panel</Text>
                        <Text style={styles.HraderStyle}>Check Inverter</Text>
                    </View>
                    {/*<View style={{alignItems: 'flex-end', marginTop: -30}}>*/}
                        {/*<TouchableOpacity>*/}
                            {/*<Text style={{textAlign: 'center', fontSize: 16, color: 'black'}}><Icon name="login"*/}
                                                                                                    {/*size={30}*/}
                                                                                                    {/*color="black"/></Text>*/}
                        {/*</TouchableOpacity>*/}

                    {/*</View>*/}
                </View>
            </View>
            <View style={{flexDirection: 'row',}}>
                <TextInput style={styles.textInput} placeholder="Complain Type" secureTextEntry={true}/>
                <View style={styles.formInput}>
                    <TouchableOpacity style={styles.defaultButton}>
                        <Text style={{textAlign: 'center', fontSize: 20, color: '#fff'}}>+</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{margin: 10, flexDirection: 'row'}}>
                <TouchableOpacity style={[styles.defaultButton1, {marginRight: 5}]}
                                  onPress={() => {
                                      naviation.navigate("Repairs")
                                  }}>
                    <Text style={{textAlign: 'center', fontSize: 16, color: '#fff', fontWeight: 'bold'}}>Back</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.defaultButton1, {marginLeft: 5}]}>
                    <Text style={{textAlign: 'center', fontSize: 16, color: '#fff', fontWeight: 'bold'}}>Completed</Text>
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
        fontSize: 20,
    }, defaultButton1: {
        padding: 5,
        paddingTop: 10,
        paddingBottom: 10,
        width: '49%',
        backgroundColor: '#0091D5',
        borderRadius: 10,
        marginLeft: 1
    }, defaultButton3: {
        padding: 15,
        width: '10%',
        backgroundColor: '#0091D5',
        borderRadius: 10,
        marginLeft: 1
    }, textInput: {
        padding: 10,
        margin: 10,
        fontSize: 16,
        borderWidth: 1,
        width: '80%',
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
        padding: 15,
        width: '50%',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#0091D5",
        marginLeft: 1,
        // },  defaultButton3:{
        //     padding:15,
        //     width:'15%',
        //     borderRadius:50,
        //     borderWidth:1,
        //     borderColor:"#0091D5",
        //     marginLeft: 1
    }, container: {
        flexDirection: 'row',
        justifyContent: 'center',
        margin: 10,
    }, HraderStyle: {
        flex: 1,
        fontSize: 14,
    }, defaultBg: {
        width: '100%',
        height: 70
    }, defaultButton: {
        padding: 10,
        width: 50,
        // width:50,
        borderWidth: 1,
        borderColor: "#0091D5",
        marginLeft: 1,
        backgroundColor: '#14b53f',
        borderRadius: 50,
        marginTop:8
    },
});

export default PanelRepairsTab2;
