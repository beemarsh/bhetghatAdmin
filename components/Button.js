import React from 'react';
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import {buttonStyles as styles} from '../styles/AuthStyles';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';

const FormButton = ({buttonTitle, disabled, style, icon, ...rest}) => {
  return (
    <TouchableOpacity
      style={{...styles.buttonContainer, ...style}}
      {...rest}
      disabled={disabled}
      activeOpacity={0.8}>
      <Text style={styles.buttonText}>{buttonTitle}</Text>
      {icon ? <Icons name={icon} size={24} color="#fff" /> : null}
      {disabled ? <ActivityIndicator size="small" color="#fff" /> : null}
    </TouchableOpacity>
  );
};

export default FormButton;
