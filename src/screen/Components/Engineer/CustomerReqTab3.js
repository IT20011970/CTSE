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

const CustomerReqTab3 = () => {
    const naviation = useNavigation();
    return (<ScrollView>
            <View>
                <ImageBackground style={styles.defaultBg} resizeMode={'cover'}
                                 source={require('../../../assets/images/auth_bg.png')}/>
            </View>
            <Text style={[styles.HraderStyle1, {fontWeight: 'bold', marginLeft: 10, marginTop: 10}]}>Electricity</Text>
            <View style={styles.card}>
                <View style={{
                    flexDirection: 'row',
                    padding: 5,
                    marginTop: 5,
                    backgroundColor: 'rgba(26, 89, 151, 0.07)',
                    borderRadius: 3,
                    margin: 10
                }}>
                    <Text style={[styles.HraderStyle, {fontWeight: 'bold'}]}>Item</Text>
                    <Text style={[styles.HraderStyle, {fontWeight: 'bold'}]}>Power</Text>
                </View>
                <View style={{
                    flexDirection: 'row',
                    padding: 5,
                    marginTop: 5,
                    backgroundColor: '#F8F8F8',
                    borderRadius: 3,
                    margin: 10
                }}>
                    <Text style={styles.HraderStyle}>TV</Text>
                    <Text style={styles.HraderStyle}>1000W</Text>
                </View>
                <View style={{
                    flexDirection: 'row',
                    padding: 5,
                    marginTop: 5,
                    backgroundColor: '#F8F8F8',
                    borderRadius: 3,
                    margin: 10
                }}>
                    <Text style={styles.HraderStyle}>Iron</Text>
                    <Text style={styles.HraderStyle}>2000W</Text>
                </View>
                <View style={{
                    flexDirection: 'row',
                    padding: 5,
                    marginTop: 5,
                    backgroundColor: '#F8F8F8',
                    borderRadius: 3,
                    margin: 10
                }}>
                    <Text style={styles.HraderStyle}></Text>
                    <Text style={styles.HraderStyle}>3000W</Text>
                </View>
            </View>

            <View style={{
                padding: 10,
                marginTop: 5,
                backgroundColor: '#CEE4BC',
                borderRadius: 3,
                margin: 10
            }}>
                <View>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={[styles.HraderStyle, {fontWeight: 'bold'}]}>Bill Amount : </Text>
                        <Text style={[styles.HraderStyle, {fontWeight: 'bold'}]}>LKR 6000</Text>
                    </View>
                </View>
            </View>
            <Text style={[styles.HraderStyle1, {fontWeight: 'bold', marginLeft: 10, marginTop: 10}]}>Solar</Text>
            <View style={styles.card}>
                <View style={{
                    flexDirection: 'row',
                    padding: 5,
                    marginTop: 5,
                    backgroundColor: 'rgba(26, 89, 151, 0.07)',
                    borderRadius: 3,
                    margin: 10
                }}>
                    <Text style={[styles.HraderStyle, {fontWeight: 'bold'}]}>Item</Text>
                    <Text style={[styles.HraderStyle, {fontWeight: 'bold'}]}>Power</Text>
                </View>
                <View style={{
                    flexDirection: 'row',
                    padding: 5,
                    marginTop: 5,
                    backgroundColor: '#F8F8F8',
                    borderRadius: 3,
                    margin: 10
                }}>
                    <Text style={styles.HraderStyle}>Hot Water</Text>
                    <Text style={styles.HraderStyle}>1000W</Text>
                </View>
                <View style={{
                    flexDirection: 'row',
                    padding: 5,
                    marginTop: 5,
                    backgroundColor: '#F8F8F8',
                    borderRadius: 3,
                    margin: 10
                }}>
                    <Text style={styles.HraderStyle}>Hot Plate</Text>
                    <Text style={styles.HraderStyle}>2000W</Text>
                </View>
                <View style={{
                    flexDirection: 'row',
                    padding: 5,
                    marginTop: 5,
                    backgroundColor: '#F8F8F8',
                    borderRadius: 3,
                    margin: 10
                }}>
                    <Text style={styles.HraderStyle}></Text>
                    <Text style={styles.HraderStyle}>3000W</Text>
                </View>
            </View>

            <View style={{
                padding: 10,
                marginTop: 5,
                backgroundColor: '#CEE4BC',
                borderRadius: 3,
                margin: 10
            }}>
                <View>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={[styles.HraderStyle, {fontWeight: 'bold'}]}>Bill Amount (With Solar) : </Text>
                        <Text style={[styles.HraderStyle, {fontWeight: 'bold'}]}>LKR 3000</Text>
                    </View>
                </View>
            </View>

            <View style={{margin: 10, flexDirection: 'row'}}>
                <TouchableOpacity style={[styles.defaultButton1, {marginRight: 5}]} onPress={() => {
                    naviation.navigate("CustomerReq2",{a:""})
                }}>
                    <Text style={{textAlign: 'center', fontSize: 16, color: '#fff', fontWeight: 'bold'}}>Back</Text>
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

export default CustomerReqTab3;
