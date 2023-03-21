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

const FinilizedTab3 = () => {
    const naviation = useNavigation();
    return (<ScrollView>
            <View>
                <ImageBackground style={styles.defaultBg} resizeMode={'cover'}
                                 source={require('../../../assets/images/auth_bg.png')}/>
            </View>
            <Text style={[styles.HraderStyle1, {fontWeight: 'bold', marginLeft: 10, marginTop: 10}]}>Solar
                Information</Text>
            <View style={styles.card}>
                <View style={{flexDirection: 'row', padding: 5, marginTop: 5, borderRadius: 3, margin: 10}}>
                    <Text style={styles.HraderStyle}>Required Solar</Text>
                    <Text style={[styles.HraderStyle, {fontWeight: 'bold'}]}>: On Grid</Text>
                </View>
                <View style={{flexDirection: 'row', padding: 5, marginTop: 5, borderRadius: 3, margin: 10}}>
                    <Text style={styles.HraderStyle}>Panels Required</Text>
                    <Text style={[styles.HraderStyle, {fontWeight: 'bold'}]}>: 5</Text>
                </View>
                <View style={{flexDirection: 'row', padding: 5, marginTop: 5, borderRadius: 3, margin: 10}}>
                    <Text style={styles.HraderStyle}>Inverter</Text>
                    <Text style={[styles.HraderStyle, {fontWeight: 'bold'}]}>: 2 kW</Text>
                </View>
                <View style={{flexDirection: 'row', padding: 5, marginTop: 5, borderRadius: 3, margin: 10}}>
                    <Text style={styles.HraderStyle}>Battery</Text>
                    <Text style={[styles.HraderStyle, {fontWeight: 'bold'}]}>: No</Text>
                </View>
                <View style={{flexDirection: 'row', padding: 5, marginTop: 5, borderRadius: 3, margin: 10}}>
                    <Text style={styles.HraderStyle}>Installed</Text>
                    <Text style={[styles.HraderStyle, {fontWeight: 'bold'}]}>: Yes</Text>
                </View>
                <View style={{flexDirection: 'row', padding: 5, marginTop: 5, borderRadius: 3, margin: 10}}>
                    <Text style={styles.HraderStyle}>Solar Cost</Text>
                    <Text style={[styles.HraderStyle, {fontWeight: 'bold'}]}>: LKR 200,000</Text>
                </View>
            </View>

            <View style={{margin: 10, flexDirection: 'row'}}>
                <TouchableOpacity style={styles.defaultButton1} onPress={() => {
                    naviation.navigate("FinilizedTab2")
                }}>
                    <Text style={{textAlign: 'center', fontSize: 17, color: '#fff', fontWeight: 'bold'}}>Back</Text>
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
        width: '50%',
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
        // }, HraderStyle1: {
        //     flex: 1,
        //     fontSize: 12,
        //     margin: 10,
        //     alignItems: 'flex-end'
        // },defaultBg:{
        //     width:'100%',
        //     height:120
    }, defaultButton: {
        padding: 20,
        backgroundColor: '#14b53f',
        borderRadius: 50,
    }, defaultBg: {
        width: '100%',
        height: 70
    },
});

export default FinilizedTab3;
