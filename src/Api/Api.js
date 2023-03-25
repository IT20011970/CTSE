import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import { ToastAndroid } from "react-native"
import React from 'react';
export function Item123() {

    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    };
    const data = fetch('http://10.0.2.2:8080/customer/gerItems/', requestOptions)
        .then(response => {
            return response.json()
        })
    return data
}


export function getData(name) {

    var todos = []
    const d = database().ref().child('Complain')
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

export function getSolarData(name) {

    var todos = []
    const d = database().ref().child('SolarProducts')

    return d



}

export function getPayment(name) {

    var todos = []
    const d = database().ref().child('Payment/')

    return d

}

export function getAllComplain(name) {

    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    };
    const data = fetch('http://10.0.2.2:8080/agent/getUser/', requestOptions)
        .then(response => {
            return response.json()
        })
    return data
}

export function getOrderData(name) {

    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    };
    const data = fetch('http://10.0.2.2:8080/agent/getOrder/', requestOptions)
        .then(response => {
            return response.json()
        })
    return data
}

export function getSolar() {

    var todos = []
    const d = database().ref().child('Addsolar/')

    return d
}

export function getMeterOrder() {

    var todos = []
    const d = database().ref().child('Meters/')

    return d
}

export function getCurReq() {

    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    };
    const data = fetch('http://10.0.2.2:8080/solar_engineer/getCustomerRequests/', requestOptions)
        .then(response => {
            return response.json()
        })
    return data
}

export function onGrid() {

    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    };
    const data = fetch('http://10.0.2.2:8080/solar_engineer/getOnGrids', requestOptions)
        .then(response => {
            return response.json()
        })
    return data
}

export function addUser(value) {
    // Firebase.auth.currentUser
    console.log(value.mail)
    auth()
        .createUserWithEmailAndPassword(value.mail, value.password)
        .then(() => {
            const ref = database().ref().child('users/')
            ref.push({
                email: value.mail,
                userTyper: value.userType
            })
            ToastAndroid.show("User account created  !", ToastAndroid.SHORT)
        })
        .catch(error => {
            if (error.code === 'auth/email-already-in-use') {
                ToastAndroid.show("That email address is already in use  !", ToastAndroid.SHORT)
            }

            if (error.code === 'auth/invalid-email') {
                ToastAndroid.show("hat email address is invalid!", ToastAndroid.SHORT)
            }
            else {
                ToastAndroid.show("error", ToastAndroid.SHORT)
            }

            //   console.error(error);
        })
    // addUse
}

export function AddBills(value) {
    const ref = database().ref().child(`Payment/`)
    ref.push({
        AnountToPay: parseFloat(value.amount),
        description: value.description,
        customer: value.customer
    })
}

export function login(value) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            email: value.mail,
            password: value.passowrd,
        })
    };
    const data = fetch('http://10.0.2.2:8080/customer/login', requestOptions)
        .then(response => {
            return response.json()
        })
    return data
}
export function AddOrderAditional(value, name) {
    const ref = database().ref().child(`Meters/${name}`)
    ref.update({
        TransCapacity: value.description,
        distance: value.distance,
        ReqCapacity: value.ReqCapacity
    })
}

export function UpdateComplain(value, name) {
    const ref = database().ref().child(`Complain/${name}`)
    ref.update({
        reply: value.complain,
    })
}
export function DeleteComplain(name) {
    const ref = database().ref().child(`Complain/${name}`).remove()
}

export function DeleteData(name){
    console.log(name)
    const ref=database().ref().child(`Team/${name}`).remove()  
}
export function AddComplain(value, name) {
    const ref = database().ref().child(`Complain/`)
    ref.push({
        to: value.To,
        complaintType: value.type,
        complain: value.Complain
    })
}

export function AddTeam(value, name) {
    console.log(value)
    console.log(name.name)
    const ref = database().ref().child(`Team/${name.name}`)
    ref.set({
        value
    })
}

export function UpdateTeam(value, name) {
    console.log(Object.keys(value).length)
    console.log(name.name)
    var x;
    for (x = 0; x < Object.keys(value).length; x++) {
        console.log(Object.keys(value)[x], value[Object.keys(value)[x]])
        let val = value[Object.keys(value)[x]]
        let key = Object.keys(value)[x]
        const ref = database().ref().child(`Team/${name}/value/`)
        ref.update({
            [key]: val
        })
    }

}

export function getTeam() {

    var todos = []
    const d = database().ref().child('Team/')

    return d
}

export function AddPayment(value, name) {
    const ref = database().ref().child(`Payment/${name.key}`)
    ref.update({
        AmountPaid: name.Amount,
        NIC: name.NIC,
        cvc: value.cvc,
        expire: value.expire,
        number: value.number,
        type: value.type
    })

}

export function Estimated(value, name) {
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({

            itemName: value.name,
            power: value.power,
            hours: value.hours

        })
    };
    const data = fetch('http://10.0.2.2:8080/customer/estimate/' + name, requestOptions)
        .then(response => {
            return response.json()
        })
    return data
}

export function Products(value, name) {

    const ref = database().ref().child(`SolarProducts/`)
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


export function Meters(value, name) {
    const ref = database().ref().child(`Meters/`)
    ref.push({
        type: value.type,
        description: value.description,
        address: value.address,
    })
}

export function AddItem(value) {
    console.log(value)
    const ref = database().ref().child(`Addsolar/`)
    ref.push({
        price: value.price,
        qty: value.qty,
        description: value.description,
        name: value.item
    })

}
export function UpdateItem(value, key) {
    console.log(value)
    const ref = database().ref().child(`Addsolar/${key}`)
    ref.update({
        price: value.price,
        qty: value.qty,
        description: value.description,
        name: value.name
    })

}

export function Order(value, name) {
    console.log(value)
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            qty: 1,
            meterType: value.type,
            description: value.description
        })
    };
    const data = fetch('http://10.0.2.2:8080/customer/meters/' + name, requestOptions)
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