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
import { getData } from "../../../Api/Api";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { UpdateComplain, DeleteComplain } from "../../../Api/Api";

const ViewComplains = () => {
    const naviation = useNavigation();
    const [fileds, setFields] = React.useState({})
    const [key, setKey] = React.useState("")
    const [complain, setComplain] = React.useState([])
    var data;
    React.useEffect(() => {
        f()
    }, [])

    function handleChange(e, value, key) {
        fileds[value] = e
        setFields(fileds)
        // console.log(fileds)
        setKey(key)
        console.log(key)
    }
    function post() {
        console.log(key)

        UpdateComplain(fileds, key)

    }
    function deleteData(key) {

        DeleteComplain(key)

    }
    async function f() {
        try {
            const value = await AsyncStorage.getItem('fields')
            if (value !== null) {

                // data =JSON.parse(value).mail;
                const data = await getData(data)
                data.on('value', querySnapshot => {
                    const todos = []
                    querySnapshot.forEach((doc) => {
                        todos.push({
                            key: doc.key,
                            complain: doc.val().complain,
                            to: doc.val().to,
                            complaintType: doc.val().complaintType
                        })
                    })
                    setComplain(todos)
                })
                // console.log(data)
            }
            console.log(complain)
        }
        catch {

        }
    }
    return (
        <ScrollView>
            <View style={styles.container}>
                <ImageBackground style={styles.defaultBg} resizeMode={'cover'} source={require('../../../assets/images/auth_bg.png')} />
            </View>
            <Text style={{ textAlign: 'center', fontSize: 20, fontWeight: '600', margin: 20 }}>Complaints</Text>

            {
                complain && complain.map((complain, key) => {
                    return (<>

                        <View style={styles.card}>
                            <View style={{ flexDirection: 'row', padding: 5, marginTop: 5, borderRadius: 3, margin: 10 }}>
                                <Text style={{ textAlign: 'center', fontSize: 16, fontWeight: '600', flex: 1 }}>{complain.complaintType}</Text>
                                <TouchableOpacity style={styles.defaultButton12} onPress={() => { naviation.navigate("ViewOrder4") }}>
                                    <Text style={{ textAlign: 'center', fontSize: 16, color: '#fff' }} onPress={e => deleteData(complain.key)}>Delete</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{ flexDirection: 'row', padding: 5, marginTop: 5, borderRadius: 3, margin: 10 }}>
                                <Text style={styles.HraderStyle}>{complain.complain}</Text>
                            </View>
                            <View style={styles.formInput}>
                                <View style={{ height: 1, backgroundColor: '#ddd', width: '100%' }}></View>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ flexDirection: 'row', padding: 5, marginTop: 5, borderRadius: 3, margin: 10, justifyContent: 'center' }}>
                                    <TextInput style={styles.textInput} placeholder="Complain" onChangeText={e => handleChange(e, "complain", complain.key)} />
                                    <View style={{ margin: 10 }}>
                                        <TouchableOpacity style={styles.defaultButton1} onPress={post}>
                                            <Text style={{ textAlign: 'center', fontSize: 16, color: '#fff' }}>SEND</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </>
                    )
                })

            }

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
        backgroundColor: '#0091D5',
        borderRadius: 10,
        marginLeft: 1,
        alignItems: 'center'
    }, defaultButton12: {
        padding: 15,
        backgroundColor: 'red',
        borderRadius: 10,
        marginLeft: 1,
        alignItems: 'center'
    }, defaultButton11: {
        padding: 15,
        backgroundColor: 'green',
        borderRadius: 10,
        marginLeft: 1,
        alignItems: 'center'
    }, defaultButton3: {
        padding: 15,
        width: '10%',
        backgroundColor: '#0091D5',
        borderRadius: 10,
        marginLeft: 1
    }, textInput: {
        padding: 10,
        margin: 10,
        width: '70%',
        fontSize: 16,
        borderWidth: 1,
        borderColor: "#a7a7a7",
        borderRadius: 10
    },
    card: {
        justifyContent: 'center',
        margin: 10,
        borderColor: "#a7a7a7",
        borderWidth: 1,
        borderColor: "#a7a7a7",
        backgroundColor: '#fff',
        zIndex: 20,
        borderRadius: 10,
        elevation: 20,
        paddingTop: 10,
        paddingBottom: 10,
    },
    card2: {
        justifyContent: 'center',
        margin: 10,
        borderWidth: 1,
        borderColor: "#a7a7a7",
        borderRadius: 10,
        zIndex: 20,
        width: 200,
        borderRadius: 10,
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
        fontSize: 12,
    }, HraderStyle1: {
        flex: 1,
        fontSize: 12,
        textAlign: 'center'
    }, defaultBg: {
        width: '100%',
        height: 120
    },
});

export default ViewComplains;
