import React from 'react';
import {Text} from 'react-native';
const Texto = (props) => {
  return (
      
            <Text 
            style={{marginTop:15, fontWeight: 'bold'}}
                onPress={props.handleTextRegistro}
            >{props.children}</Text>
  )
}

export default Texto;