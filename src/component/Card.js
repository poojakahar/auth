import React from 'react';
import { View, Text } from 'react-native';

const Card=(props)=>{
    var {cardStyle}=styles;

  return(
    <View style={cardStyle}>
        {props.children}
    </View>
  );
};

const styles={
    cardStyle:{
        borderRadius: 1,
        borderWidth: 1,
        borderColor: '#ebebeb',
        shadowRadius: 1,
        shadowOpacity: 0.2,
        shadowOffset: {width: 1, height: 1},
        margin: 10
    }
};

export { Card };