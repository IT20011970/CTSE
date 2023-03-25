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
import { getTeam,DeleteData } from "../../../Api/Api";
const PanelService = () => {
    const naviation = useNavigation();
    const [complain, setComplain] = React.useState([])
    React.useEffect(() => {
        f()
    }, [])
    async function f() {

        try {
            const data = await getTeam()
            data.on('value', querySnapshot => {
                const todos = []
                querySnapshot.forEach((doc) => {
                    console.log(doc.val().value)
                    todos.push({
                        Team: doc.key,
                        Member:doc.val().value
                    })
                })
                setComplain(todos)
            })
        }
        catch {

        }

    }
    async function deleteData(data){
        DeleteData(data.Team)
    }
    return (
        <ScrollView>
            <View>
                <View>
                    <ImageBackground style={styles.defaultBg} resizeMode={'cover'} source={require('../../../assets/images/auth_bg.png')} />
                </View>
                {
                    complain && complain.map((complain, key) => {
                        return (<>
                            <View style={styles.card}>
                                <View style={{ flexDirection: 'column', padding: 5, marginTop: 5 }}>
                                    <View style={{ alignItems: 'flex-start' }}>
                                        <Text style={[styles.HraderStyle, { fontWeight: 'bold', fontSize: 14 }]}>Team Name:{complain.Team}</Text>
                                        <Text style={styles.HraderStyle}>Contact Number : 077-1234567</Text>
                                        <Text style={styles.HraderStyle}>Date : 12/10/2022</Text>
                                    </View>
                                    <View style={{ alignItems: 'flex-end', marginTop: -55 }}>
                                    <TouchableOpacity onPress={()=>{naviation.navigate("ServicesTab2",{complain})}}>
                                            <Text style={{ textAlign: 'center', fontSize: 16, color: 'black' }}><Icon name="login" size={30} color="black" /></Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={()=>{deleteData(complain)}}>
                                            <Text style={{ textAlign: 'center', fontSize: 16, color: 'black' }}>Delete</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </>
                        )
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
        fontSize: 20,
    }, defaultButton1: {
        padding: 15,
        width: '25%',
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
        width: '25%',
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
        fontSize: 12,
    }, defaultBg: {
        width: '100%',
        height: 70
    },
});

export default PanelService;
