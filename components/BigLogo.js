import {Image} from 'react-native';
import React from 'react';

export default function BigLogo({...props}) {
  return (
    <Image
      source={require('../assets/images/logo.png')}
      style={{
        height: 160,
        width: 170,
        resizeMode: 'cover',
        marginVertical: 20,
        ...props.style,
      }}
    />
  );
}
