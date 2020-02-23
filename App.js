import React from 'react';
import { StyleSheet, Text, View, ScrollView, Button } from 'react-native';
import {Debit} from './components/Debit';
import {mockupService} from './mockups/mockupService';

export default class App extends React.Component{
  constructor(){
    super();
    this.state = {
      debits:[]
    };
  }
 
  componentDidMount(){
    let mockup = new mockupService();
    
    this.setState({
      debits:mockup.getDebits()
    });
  }
  render(){
    console.log(this.state.debits);
    return (
      <View style={styles.container}>
        <View> 
          
          <View style={styles.buttonAction}>
            <Button onPress={()=>{alert("Nova compra")}} style={styles.buttonText} title={"Nova compra"}></Button>
          </View>
          <View style={styles.buttonAction}>
            <Button onPress={()=>{alert("Novo produtio")}} style={styles.buttonText} title={"Adicione produtos"}></Button>
          </View>
        </View>
        <ScrollView>
          {this.state.debits.map((debit,index)=>{
            return(
              <Debit key={index} cliente={debit.cliente}></Debit>
            )
          })}
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#efefef',
    
    paddingTop:50,
    paddingHorizontal:20,
    paddingBottom:20
  },
  buttonAction:{
    marginBottom:10,
    backgroundColor:'#0055aa'
  },
  buttonText:{
    color:'#fff',
    padding:10,
    textAlign:"center",
    fontSize:20
  }
});
