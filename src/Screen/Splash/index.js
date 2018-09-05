import React, { Component } from 'react';
import {  StyleSheet, Text, View, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';


export default class Splash extends Component {
  componentDidMount() {
    try {

      setTimeout(() => {
        Actions.login('')
      }, 1000);
    } catch (e) {
      console.log(e)
    }
  }
  render() {
    return (
      <View style={styles.container}>
         {/* <Image
          source={require('../../assets/logo1.png')}
          style={{ width: 200, height: 200, risizeMode: 'contain' }}
        />  */}
        <Text style={styles.texto}>Easy-Uber</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00bfff',
  },
  texto:{
    fontWeight: 'bold',
    fontSize:40,
    marginTop: 10,
  }
});