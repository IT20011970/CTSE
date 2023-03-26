// import React from 'react';
// import { Image, ImageBackground, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
//
// const Home = ()=>{
//     return (
//         <SafeAreaView style={{flex:1}}>
//             <ScrollView>
//             <View style={{justifyContent:'center',alignItems:'center'}}>
//                             <Image source={require('../assets/images/sun-roof-design-template-solar-power-logo-vector-icon-illustration-172619864.png')} resizeMode={'center'} style={{width:'100%',height:150}}/>
//                         </View>
//                 <View style={styles.container}>
//                     <Text style={styles.myTitle}>Sun Beam</Text>
//                 </View>
//             </ScrollView>
//         </SafeAreaView>
//     )
// }
//
// const styles = StyleSheet.create({
//     container:{
//         backgroundColor:'white',
//         alignItems:'center',
//         justifyContent:'center'
//     },
//     myTitle:{
//         fontSize:24,
//         fontWeight:'bold',
//         textAlign:'center'
//     }
// });
//
// export default Home;





import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import EstimatedBill from './Components/Customer/EstimatedBill';
import SheduledItems from './Components/Customer/ScheduledItems';
import Complain from './Components/Customer/Complain';
import CustomSidebarMenu from './CustomSidebarMenu';
import Payment from './Components/Customer/payment';
import Solar from './Components/Customer/Solar';
import Redundant from './Components/Customer/Redundant';
import { View } from 'react-native';
import PaymentNav from './Components/Customer/PaymentNav';
import CustomerRequirements from './Components/Engineer/CustomerRequirements';
import OffGrid from './Components/Engineer/OffGrid';
import OnGrid from './Components/Engineer/Ongrid';
import Finilized from './Components/Engineer/FinilizedSystem';
import PanelService from './Components/Engineer/ViewPanelServices';
import Repairs from './Components/Engineer/Repairs';
import PanelRepairsNav from './Components/Engineer/PanelRepairsNav';
import PanelServicesNav from './Components/Engineer/PanelServicesNav';
import FinilizedSystemsNav from './Components/Engineer/FinilizedSystemsNav';
import OnGridNav from './Components/Engineer/OngridNav';
import OffGridNav from './Components/Engineer/OffGridNav';
import RedundantPower from './Components/ElectricityBoad/RedundantPower';
import ViewOrdersNav from './Components/ElectricityBoad/ViewOrdersNav';
import ViewOrders from './Components/ElectricityBoad/ViewOrdersTab1';
import ViewComplains from './Components/ElectricityBoad/ViewComplains';
import ManageBillsNav from './Components/ElectricityBoad/ManagebillsNav';
import ComplainAgent from './Components/SolarAgent/ComplainAgent';
import OrderProducts from './Components/SolarAgent/OrderProductsTab1';
import OrderProductsNavB from './Components/SolarAgent/OrderproductsNavB';
import SellItemNav from './Components/SolarAgent/SellItemNav';
import InstallationNav from './Components/SolarAgent/InstallationNav';
import CompalinNav from './Components/Customer/CompalinNav';
import OderNavCus from './Components/Customer/OrderNav';
import PayCustomerNav from './Components/ElectricityBoad/PayCustomerNav';
import CustomerOrderNav from './Components/SolarAgent/CustomerOrderNav';
import CustomerReqNav from './Components/Engineer/CustomerReqNav';

const Drawer = createDrawerNavigator();

const Home = ({ route }) => {
  const { navigate } = route.params;
     const isLoggedIn=navigate

    // const isLoggedIn=4
    // console.log("+++++++"+isLoggedIn+"---")

    return (
        <Drawer.Navigator screenOptions={{ headerTintColor: '#fff',headerStyle: {
         backgroundColor: '#2C4F77', 
}}} drawerContent={(props) => <CustomSidebarMenu {...props} />}>
           {isLoggedIn===1 ? (<>
         {/* <Drawer.Screen name='Sheduled Items' component={SheduledItems} /> */}
         <Drawer.Screen name='Complain' component={CompalinNav} />
         <Drawer.Screen name='Payment' component={PaymentNav} />
         <Drawer.Screen name='Search Products' component={Solar} />
         {/* <Drawer.Screen name='Redundant power' component={Redundant} /> */}
         {/* <Drawer.Screen name='Estimaed Bill' component={EstimatedBill} /> */}
         <Drawer.Screen name='Order Products' component={OderNavCus} />
           </>
        ) :isLoggedIn==2? (<>
                    <Drawer.Screen name='Customer Requirements' component={CustomerRequirements} />
                    {/* <Drawer.Screen name='Off Grid Solar Usage' component={OffGridNav} />
                    <Drawer.Screen name='On Grid Solar Usage' component={OnGridNav} /> */}
                    {/* <Drawer.Screen name='Finalized Systems' component={FinilizedSystemsNav} /> */}
                    <Drawer.Screen name='Panel Services' component={PanelServicesNav} />
                    <Drawer.Screen name='Panel Repairs' component={PanelRepairsNav} />
          
        </>
          ):isLoggedIn==3?(<>
           {/* <Drawer.Screen name='Redundant Power' component={RedundantPower} /> */}
           <Drawer.Screen name='View Orders' component={ViewOrdersNav} />
           <Drawer.Screen name='View Complains' component={ViewComplains} />
           <Drawer.Screen name='Manage Bills' component={ManageBillsNav} />
           {/* <Drawer.Screen name='Pay Customer' component={PayCustomerNav} /> */}
          </>):isLoggedIn==4?( <>
            {/* <Drawer.Screen name='Order Products' component={OrderProductsNavB} /> */}
            <Drawer.Screen name='Sell Item' component={SellItemNav} />
            <Drawer.Screen name='Customer Order' component={CustomerOrderNav} /> 
            {/* <Drawer.Screen name='Installation' component={InstallationNav} /> */}
            <Drawer.Screen name='Customer Complain' component={ComplainAgent} />     
          </>):
          (<Drawer.Screen name='View Orders' component={ViewOrdersNav} />)}
       </Drawer.Navigator>                   
    );
}

export default Home;
