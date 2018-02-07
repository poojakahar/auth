import React from 'react';
import { Text , View } from 'react-native';

const Header=({ title })=>{
    const {headerStyle, headerContentStyle}=styles;

    return(
      <View style={headerStyle}>
          <Text style={headerContentStyle}>
              { title }
          </Text>
      </View>
    );
};

const styles={
    headerStyle:{
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
        shadowOpacity: 0.3,
        shadowOffset: { width: 1, height: 2},
        elevation: 1,
        backgroundColor: '#f6ffdc'
    },

    headerContentStyle:{
        marginTop: 10,
        fontWeight: '700',
        fontSize: 30,
        color: '#301cff'
    }
};

export default Header;