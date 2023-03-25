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
import { getPayment } from "../../../Api/Api";

const Stack1 = createNativeStackNavigator();

const PaymentSub3 = () => {
    const naviation = useNavigation();
    const [complain, setComplain] = React.useState([])
    React.useEffect(() => {
        f()
    }, [])

    async function f() {
        try {
            const data = await getPayment(data)
            data.on('value', querySnapshot => {
                const todos = []
                querySnapshot.forEach((doc) => {
                    todos.push({
                        Amount: doc.val().AnountToPay,
                        description: doc.val().description,
                        expire: doc.val().expire,
                        number: doc.val().number,
                        type: doc.val().type,
                    })
                })
                setComplain(todos)
            })
        }
        catch {

        }

    }
    return (
        <ScrollView>
            <View>
                <View style={styles.container}>
                    <ImageBackground style={styles.defaultBg} resizeMode={'cover'} source={require('../../../assets/images/auth_bg.png')} />
                </View>


                <View style={{ margin: 10, alignItems: 'center' }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', margin: 10 }}>
                        <TouchableOpacity style={styles.defaultButton2} onPress={() => { naviation.navigate("PaymentMain") }}>
                            <Text style={{ textAlign: 'center', fontSize: 16, color: 'black' }}>View Payment</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.defaultButton1}>
                            <Text style={{ textAlign: 'center', fontSize: 16, color: '#fff' }}>Payment History</Text>
                        </TouchableOpacity>

                    </View>

                </View>

                <View style={styles.card}>
                    <View style={{ flexDirection: 'row', padding: 5, marginTop: 5, backgroundColor: 'rgba(26, 89, 151, 0.07)', borderRadius: 3, margin: 10 }}>
                        <Text style={styles.HraderStyle}>Date</Text>
                        <Text style={styles.HraderStyle}>Description</Text>
                        <Text style={styles.HraderStyle}>Amount</Text>
                    </View>
                    {
                        complain && complain.map((complain) => {
                            return (<>
                                <View style={{ flexDirection: 'row', padding: 5, marginTop: 5, backgroundColor: '#F8F8F8', borderRadius: 3, margin: 10 }}>
                                    <Text style={styles.HraderStyle}>{complain?.expire?complain.expire:new Date().getFullYear()}</Text>
                                    <Text style={styles.HraderStyle}>{complain.description}</Text>
                                    <Text style={styles.HraderStyle}>{complain.Amount}</Text>
                                </View>
                            </>
                            )
                        })
                    }
                </View>

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
    }, defaultButton: {
        padding: 15,
        backgroundColor: '#14b53f',
        borderRadius: 10,
        margin: 10,
        width: '50%',
    },
    text: {
        fontSize: 25,
    }, defaultButton1: {
        padding: 15,
        width: '50%',
        backgroundColor: '#0091D5',
        borderRadius: 10,
        marginLeft: 1
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
    defaultBg: {
        width: '100%',
        height: 150
    },
    defaultButton2: {
        padding: 15,
        width: '50%',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#0091D5",
        marginLeft: 1
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
        fontSize: 12,
    },
    HraderStyle2: {
        flex: 1,
        fontWeight:'bold',
        fontSize: 12,
    }
});

export default PaymentSub3;
