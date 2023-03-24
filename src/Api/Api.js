import {auth,getAuth,createUserWithEmailAndPassword} from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import {ToastAndroid} from  "react-native"
import React from 'react';
export function Item123(){
    
        const requestOptions = {
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        };
        const data = fetch('http://10.0.2.2:8080/customer/gerItems/', requestOptions)
            .then(response => {
                return response.json()
            })
        return data
}


export function getData(name){
    
    var todos = []
   const d= database().ref().child('Complain')
    //   return todos
    //   console.log(d)
   return d
    //   setTodos(todos)
 
    
    // const requestOptions = {
    //     method: 'GET',
    //     headers: {'Content-Type': 'application/json'}
    // };
    // const data = fetch('http://10.0.2.2:8080/customer/getUser/'+name, requestOptions)
    //     .then(response => {
    //         return response.json()
    //     })
    // return console.log(d)
}


export function getPayment(name){
    
    var todos = []
   const d= database().ref().child('Payment/')

   return d

}

export function getAllComplain(name){
    
    const requestOptions = {
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
    };
    const data = fetch('http://10.0.2.2:8080/agent/getUser/', requestOptions)
        .then(response => {
            return response.json()
        })
    return data
}

export function getOrderData(name){
    
    const requestOptions = {
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
    };
    const data = fetch('http://10.0.2.2:8080/agent/getOrder/', requestOptions)
        .then(response => {
            return response.json()
        })
    return data
}

export function geItems(){
    
    const requestOptions = {
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
    };
    const data = fetch('http://10.0.2.2:8080/agent/getItems/', requestOptions)
        .then(response => {
            return response.json()
        })
    return data
}

export function getMeterOrder(){
    
    var todos = []
    const d= database().ref().child('Meters/')
 
    return d
}

export function getCurReq(){
    
    const requestOptions = {
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
    };
    const data = fetch('http://10.0.2.2:8080/solar_engineer/getCustomerRequests/', requestOptions)
        .then(response => {
            return response.json()
        })
    return data
}

export function onGrid(){
    
    const requestOptions = {
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
    };
    const data = fetch('http://10.0.2.2:8080/solar_engineer/getOnGrids', requestOptions)
        .then(response => {
            return response.json()
        })
    return data
}

export function addUser(value){
    // Firebase.auth.currentUser
    const auth = getAuth()
    
    createUserWithEmailAndPassword(auth,value.mail, value.passowrd)
    .then(() => {
        
    ToastAndroid.show("User account created  !", ToastAndroid.SHORT)
    })
    .catch(error => {
      if (error.code === 'auth/email-already-in-use') {
        ToastAndroid.show("That email address is already in use  !", ToastAndroid.SHORT)
      }
  
      if (error.code === 'auth/invalid-email') {
        ToastAndroid.show("hat email address is invalid!", ToastAndroid.SHORT)
      }
      else{
        ToastAndroid.show("error", ToastAndroid.SHORT)
      }
      
    //   console.error(error);
    })
   
    console.log(value)
    // const requestOptions = {
    //     method: 'POST',
    //     headers: {'Content-Type': 'application/json'},
    //     body:JSON.stringify({
    //         name:value.name,
    //         email:value.mail,
    //        password:value.passowrd,
    //        address:value.address,
    //        type:value.userType
    //     })
    // };
    // const data = fetch('http://10.0.2.2:8080/customer/addUser', requestOptions)
    //     .then(response => {
    //         return response.json()
    //     })
    // return data
}

export function AddBills(value){
    console.log(value)
    const requestOptions = {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body:JSON.stringify({
        amount:parseFloat(value.amount),
        description:value.description,
        status:value.status
        })
    };
    const data = fetch('http://10.0.2.2:8080/electricity/addBill/'+value.customer, requestOptions)
        .then(response => {
            return response.json()
        })
    return data
}

export function login(value){
    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body:JSON.stringify({
            email:value.mail,
            password:value.passowrd,
        })
    };
    const data = fetch('http://10.0.2.2:8080/customer/login', requestOptions)
        .then(response => {
            return response.json()
        })
    return data
}
export function AddOrderAditional(value,name){
    const ref=database().ref().child(`Meters/${name}`)
        ref.update({
            TransCapacity:value.description,
            distance:value.distance,
            ReqCapacity:value.ReqCapacity
        })
    }
export function AddComplain(value,name){
    const ref=database().ref().child(`Complain/`)
        ref.push({
            to:value.To,
            complaintType:value.type,
            complain:value.Complain
        })
    // const requestOptions = {
    //     method: 'PUT',
    //     headers: {'Content-Type': 'application/json'},
    //     body:JSON.stringify({

    //     to:value.To,
    //     complaintType:value.type,
    //     complain:value.Complain
            
    //     })
    // };
    // const data = fetch('http://10.0.2.2:8080/customer/complain/'+name, requestOptions)
    //     .then(response => {
    //         return response.json()
    //     })
    // return data
}

export function AddPayment(value,name){
    const ref=database().ref().child(`Payment/`)
        ref.push({
            Amount: name.Amount, 
            NIC: name.NIC,
            cvc: value.cvc, 
            expire: value.expire, 
            number: value.number,
            type: value.type
        })
  
}

export function Estimated(value,name){
    const requestOptions = {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body:JSON.stringify({

            itemName:value.name,
            power:value.power,
            hours:value.hours
            
        })
    };
    const data = fetch('http://10.0.2.2:8080/customer/estimate/'+name, requestOptions)
        .then(response => {
            return response.json()
        })
    return data
}

export function Products(value,name){

    const ref=database().ref().child(`SolarProducts/`)
    ref.push({
        description: value.description, 
        agent: value.agent,
        qty: value.qty, 
        connection: value.connection, 
    })
    // console.log(value)
    // const requestOptions = {
    //     method: 'PUT',
    //     headers: {'Content-Type': 'application/json'},
    //     body:JSON.stringify({
    //          agent:value.agent,
    //          qty:value.qty,
    //          connectionType:value.connection,
    //          description:value.description  
    //     })
    // };
    // const data = fetch('http://10.0.2.2:8080/customer/products/'+name, requestOptions)
    //     .then(response => {
    //         return response.json()
    //     })
    // return data
}


export function Meters(value,name){
    const ref=database().ref().child(`Meters/`)
    ref.push({
        type: value.type, 
        description: value.description,
        address: value.address, 
    })
}

export function AddItem(value){
    console.log(value)
    const requestOptions = {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body:JSON.stringify({
             price:value.price,
             qty:value.qty,
             description:value.description,
             name:value.item
             
        })
    };
    const data = fetch('http://10.0.2.2:8080/agent/addItem/', requestOptions)
        .then(response => {
            return response.json()
        })
    return data
}


export function Order(value,name){
    console.log(value)
    const requestOptions = {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body:JSON.stringify({
             qty:1,
             meterType:value.type,
             description:value.description  
        })
    };
    const data = fetch('http://10.0.2.2:8080/customer/meters/'+name, requestOptions)
        .then(response => {
            return response.json()
        })
    return data
}


// private String imgUrl;
// private double price;
// private String agent;
// private int qty;
// private String connectionType;
// private String meterType;
// private String description;