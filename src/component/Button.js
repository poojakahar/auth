import React from 'react';
import { View , Text, TouchableOpacity } from 'react-native';

const Button=({onPress})=>{
    var {buttonContainerStyle, buttonStyle}=styles;

    return(
        <TouchableOpacity onPress={onPress}>
            <View style={buttonContainerStyle}>
                <Text style={buttonStyle}> Log In </Text>
            </View>
        </TouchableOpacity>
    );
};

const styles={
  buttonContainerStyle:{
      borderRadius: 5,
      borderWidth: 2,
      borderColor: '#25c7f5',
      justifyContent: 'center',
      alignItems: 'center',
      margin: 5
  },

  buttonStyle:{
      color: '#25c7f5',
      fontSize: 20,
      fontWeight: '900',
      margin: 5
  }
};

export { Button };