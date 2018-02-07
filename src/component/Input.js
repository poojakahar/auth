import React, {Component} from 'react';
import { View, TextInput } from 'react-native';

const Input=({placeholder,value,onChangeText,secureTextEntry})=>{

    var {textInputStyle,textInputContainerStyle}=styles;

    return(
        <View style={textInputContainerStyle}>
            <TextInput placeholder={placeholder}
                       onChangeText={onChangeText}
                       style={textInputStyle}
                       value={value}
                       autoCorrect={false}
                       secureTextEntry={secureTextEntry}
            />
        </View>
    );
};

const styles={
    textInputStyle:{
        fontSize: 18,
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        marginTop: 5,
        marginBottom: 5
    },

    textContainerStyle:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 30
    }
};

export {Input};