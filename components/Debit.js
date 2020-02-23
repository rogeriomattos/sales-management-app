import React, {Component} from 'react';
import { StyleSheet, Text, View, ScrollView, Button } from 'react-native';
import {ICliente} from '../contracts/ICliente'

export class Debit extends Component{
    constructor(){
        super();
        let foo = new ICliente(9,"roger");
        console.log(foo.name);
    }
    render(){
        return (
            <View style={styles.debit}>
                <Text style={styles.clienteName}>{this.props.cliente.name}</Text>
                <Button title={"Acertar divida"} onPress={()=>{alert("Acertar");}}></Button>
            </View>
        ); 
    }
}



const styles = StyleSheet.create({
    debit:{
      padding:20,
      backgroundColor:"#fff",
      marginVertical:10
    },
    clienteName:{
      fontSize:20,
      fontWeight:"700"
    },
    btnAcertarDivida:{
        width:100
    }
});