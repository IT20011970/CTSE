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

const OnGridTab2 = () => {
    const naviation = useNavigation();
    return (
        <ScrollView>
            <View>
                <ImageBackground style={styles.defaultBg} resizeMode={'cover'}
                                 source={require('../../../assets/images/auth_bg.png')}/>
            </View>
            <View style={styles.card}>
                <View style={{flexDirection: 'row', padding: 5, marginTop: 5, borderRadius: 3, margin: 10}}>
                    <Text style={styles.HraderStyle}>Max Output</Text>
                    <Text style={[styles.HraderStyle, {fontWeight: 'bold'}]}>: 4 kW</Text>
                </View>
                <View style={{flexDirection: 'row', padding: 5, marginTop: 5, borderRadius: 3, margin: 10}}>
                    <Text style={styles.HraderStyle}>Consumption</Text>
                    <Text style={[styles.HraderStyle, {fontWeight: 'bold'}]}>: Today -> 1 kW</Text>
                </View>
                <View style={{flexDirection: 'row', padding: 5, marginTop: 5, borderRadius: 3, margin: 10}}>
                    <Text style={styles.HraderStyle}>Lowest Generation</Text>
                    <Text style={[styles.HraderStyle, {fontWeight: 'bold'}]}>: 5 kW</Text>
                </View>
            </View>

            <Text style={[styles.HraderStyle1, {fontWeight: 'bold', marginLeft: 10}]}>This Month</Text>
            <View style={styles.card}>
                <View style={{flexDirection: 'row', padding: 5, marginTop: 5, borderRadius: 3, margin: 10}}>
                    <Text style={styles.HraderStyle}>Week 1</Text>
                    <Text style={[styles.HraderStyle, {fontWeight: 'bold'}]}>: 4 kW</Text>
                </View>
                <View style={{flexDirection: 'row', padding: 5, marginTop: 5, borderRadius: 3, margin: 10}}>
                    <Text style={styles.HraderStyle}>Week 2</Text>
                    <Text style={[styles.HraderStyle, {fontWeight: 'bold'}]}>: 6 kW</Text>
                </View>
                <View style={{flexDirection: 'row', padding: 5, marginTop: 5, borderRadius: 3, margin: 10}}>
                    <Text style={styles.HraderStyle}>Week 3</Text>
                    <Text style={[styles.HraderStyle, {fontWeight: 'bold'}]}>: 2 kW</Text>
                </View>
                <View style={{flexDirection: 'row', padding: 5, marginTop: 5, borderRadius: 3, margin: 10}}>
                    <Text style={styles.HraderStyle}>Week 4</Text>
                    <Text style={[styles.HraderStyle, {fontWeight: 'bold'}]}>: 4 kW</Text>
                </View>
            </View>

            <View style={{margin: 10, flexDirection: 'row'}}>
                <TouchableOpacity style={styles.defaultButton1} onPress={() => {
                    naviation.navigate("OngridSolar")
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
        padding: 15,
        width: '50%',
        backgroundColor: '#0091D5',
        borderRadius: 10,
        marginLeft: 1
    // }, defaultButton3: {
    //     padding: 15,
    //     width: '10%',
    //     backgroundColor: '#0091D5',
    //     borderRadius: 10,
    //     marginLeft: 1
    }, textInput: {
        padding: 10,
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
        padding: 15,
        width: '50%',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#0091D5",
        marginLeft: 1,
    }, defaultButton3: {
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
        fontSize: 14,
    }, defaultBg: {
        width: '100%',
        height: 70
    },
});

export default OnGridTab2;
