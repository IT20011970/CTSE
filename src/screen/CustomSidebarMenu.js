import React from 'react';
import {
    SafeAreaView,
    View,
    StyleSheet,
    Image,
    Text,
    Linking,
} from 'react-native';
import {
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from '@react-navigation/drawer';
import { useNavigation } from "@react-navigation/core";
const CustomSidebarMenu = (props) => {
    const naviation=useNavigation();

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ marginTop: 40, }}>
                <Image source={require('../assets/images/sun-roof-design-template-solar-power-logo-vector-icon-illustration-172619864.png')} resizeMode={'center'} style={styles.sideMenuProfileIcon}/>
                
            </View>
            <DrawerContentScrollView {...props}>
                <DrawerItemList {...props}  />
                <DrawerItem
                    label="Logout"
                    onPress={()=>{naviation.navigate("Login")}}
                />
            
            </DrawerContentScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    sideMenuProfileIcon: {
        resizeMode: 'contain',
        width: '95%',
        height:100,
    },
    customItem: {
        padding: 16,
        flexDirection: 'row',
        alignItems: 'center',
    },
});

export default CustomSidebarMenu;
