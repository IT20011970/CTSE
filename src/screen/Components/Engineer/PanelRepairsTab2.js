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
import { useFocusEffect } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Entypo';
import { useNavigation } from "@react-navigation/core";
import {AddTeam} from "../../../Api/Api";

const PanelRepairsTab2 = () => {
    const naviation = useNavigation();
    const [team, setTeam] = React.useState([])
    const [fileds,setFields]=React.useState({})
    const [name,setName]=React.useState({})
    var todos = []
    function  handleChangeArray(value){
        setTeam(oldArray => [...oldArray,value] )
        console.log(team)
    }
    function  handleChange(e,value){
        // fileds[value]=e
        setFields((r)=>{return{...r,[value]:e}})
        console.log(fileds)
    }
    function  handleChangeName(e,value){
        name[value]=e
        setName(name)
        console.log(name)
    }
    function post() {
        AddTeam(fileds,name)
    }
    // useFocusEffect(
    //     React.useCallback(() => {
    //         if(team.length==0)
    //         setTeam([{team:"a"}])
    //         if(team.length==0)
    //         setFields({Person:"0"})
    //     })
    //   );
    

    return (<ScrollView>
        <View>
            <ImageBackground style={styles.defaultBg} resizeMode={'cover'}
                source={require('../../../assets/images/auth_bg.png')} />
        </View>
        <View style={{ flexDirection: 'row', }}>
            <TextInput style={styles.textInput} placeholder="Team name"  onChangeText={e => handleChangeName(e,"name")} />
            <View style={styles.formInput}>
            <View style={styles.formInput}>
                            <TouchableOpacity style={styles.defaultButton}>
                                <Text style={{ textAlign: 'center', fontSize: 20, color: '#fff' }} onPress={e => handleChangeArray(0)}>+</Text>
                            </TouchableOpacity>
            </View>
            </View>
        </View>

        {
            team && team.map((team, key) => {
                return (<>
                    <View style={{ flexDirection: 'row', }} key={key}>
                        <TextInput style={styles.textInput} placeholder="Officer Name" onChangeText={e => handleChange(e,`Person${key}`)} />
                    </View>
                </>
                )
            })
        }

        <View style={{ margin: 10, flexDirection: 'row' }}>
            {/* <TouchableOpacity style={[styles.defaultButton1, { marginRight: 5 }]}
                onPress={() => {
                    naviation.navigate("Repairs")
                }}>
                <Text style={{ textAlign: 'center', fontSize: 16, color: '#fff', fontWeight: 'bold' }}>Back</Text>
            </TouchableOpacity> */}

            <TouchableOpacity style={[styles.defaultButton1, { marginLeft: 5 }]} onPress={post}>
                <Text style={{ textAlign: 'center', fontSize: 16, color: '#fff', fontWeight: 'bold' }} >Add Team</Text>
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
        marginTop: 8
    },
});

export default PanelRepairsTab2;
