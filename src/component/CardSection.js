import React from 'react';
import { View, Text } from 'react-native';

const CardSection=(props)=>{
    var {cardSectionStyle}=styles;

    return(
        <View style={cardSectionStyle}>
            {props.children}
        </View>
    );
};

const styles={
    cardSectionStyle:{
        borderRadius: 3,
        borderWidth: 1,
        borderColor: '#ddd',
    }
};

export {CardSection};