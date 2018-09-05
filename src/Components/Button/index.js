import React from 'react';
import { TouchableOpacity,Text} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth
} from "react-native-responsive-dimensions";
const Boton = (props) => {
  return (
        <TouchableOpacity
        onPress={props.handleSubmit}
        style={{backgroundColor:'#2E2E2E', width: responsiveWidth(60),justifyContent:'center', alignItems:'center',height:60,borderRadius:10, fontWeight: 'bold'}}
        >
            <Text style={{fontWeight: 'bold',color:'white'}}>{props.children}</Text>
        </TouchableOpacity>
  )
}

export default Boton;