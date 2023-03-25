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
import {UpdateTeam} from "../../../Api/Api";

const PanelServicesTab2 = ({ route }) => {
    const [complain, setComplain] = React.useState([])
    console.log(Object.keys(route.params.complain.Member).length)
    console.log(route.params.complain.Team)
    const [fileds,setFields]=React.useState({})

    function  handleChange(e,value){
        // fileds[value]=e
        setFields((r)=>{return{...r,[value]:e}})
        console.log(fileds)
    }
    function post() {
        UpdateTeam(fileds,route.params.complain.Team )
    }
    React.useEffect(() => {
        const arr = []
        var x;
        for (x = 0; x < Object.keys(route.params.complain.Member).length; x++) {
            // console.log(route.params.complain.Member)
            arr.push({
                data: route.params.complain.Member[Object.keys(route.params.complain.Member)[x]]
            })
            console.log(route.params.complain.Member[Object.keys(route.params.complain.Member)[x]])
        }

        setComplain(arr)
    }, [])
    //  console.log(route.params.complain.Member)
    const naviation = useNavigation();
    return (<ScrollView>
        <View>
            <ImageBackground style={styles.defaultBg} resizeMode={'cover'}
                source={require('../../../assets/images/auth_bg.png')} />
        </View>
        <View style={styles.card}>
            <View style={{ flexDirection: 'column', padding: 5, marginTop: 5 }}>
                <View style={{ alignItems: 'flex-start' }}>
                    <Text style={[styles.HraderStyle, { fontWeight: 'bold', marginTop: 0 }]}>Team</Text>
                </View>
                <View style={{ alignItems: 'flex-end', marginTop: -30 }}>
                    <View style={{ flexDirection: 'row', }} >
                        <TextInput style={styles.textInput} placeholder={route.params.complain.Team }/>
                    </View>
                </View>
            </View>
            {
                complain && complain.map((complain, key) => {
                    return (<>
                        <View style={{ flexDirection: 'column', padding: 5, marginTop: 5 }}>
                            <View style={{ alignItems: 'flex-start' }}>
                                <Text style={[styles.HraderStyle, { fontWeight: 'bold', marginTop: 0 }]}>Member{key + 1}</Text>
                            </View>
                            <View style={{ alignItems: 'flex-end', marginTop: -30 }}>
                                {/* <TouchableOpacity>
                                    <Text style={{ textAlign: 'center', fontSize: 16, color: 'black' }}><Icon name="login" size={30} color="black" /></Text>
                                </TouchableOpacity> */}
                                <View style={{ flexDirection: 'row', }} key={key}>
                                    <TextInput style={styles.textInput} placeholder={complain.data} onChangeText={e => handleChange(e,`Person${key}`)} />
                                </View>

                            </View>
                        </View>
                    </>
                    )
                })
            }
        </View>

        <View style={{ margin: 10, flexDirection: 'row' }}>
            <TouchableOpacity style={[styles.defaultButton1, { marginRight: 5 }]}>
                <Text style={{ textAlign: 'center', fontSize: 16, color: '#fff', fontWeight: 'bold' }}
                    onPress={() => {
                        naviation.navigate("Services")
                    }}>Back</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.defaultButton1,{marginLeft: 5}]}>
                    <Text
                        style={{textAlign: 'center', fontSize: 16, color: '#fff', fontWeight: 'bold'}}onPress={() => {post()}}>Update</Text>
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
        width: '48%',
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
        padding: 20,
        backgroundColor: '#14b53f',
        borderRadius: 50,
    },
});

export default PanelServicesTab2;
