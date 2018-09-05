import React from 'react';
import { StyleSheet, Text, View, TextInput} from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";
const Input = (props) => {
  return (
      <View style={{flexDirection:'row'}}>

        <TextInput 
        ref={props.setRef}
        type="text"
        placeholder={props.tipo}
        style={{height: 40, borderColor: 'gray', width:'75%',borderBottomColor:'black'}}      
        value={props.value}
        underlineColorAndroid="black"
        onChangeText={props.handleChange}
        keyboardType={props.typeKeyBoard}
        secureTextEntry={props.secureText}
        /><Icon name={props.icon} size={25}/>
        </View>
  )
}

export default Input