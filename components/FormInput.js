import React from 'react';
import {View, TextInput, StyleSheet, Text} from 'react-native';
import {inputStyles as styles} from '../styles/AuthStyles';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

const FormInput = ({
  labelValue,
  placeholderText,
  iconType,
  containerStyle,
  iconSize,
  maxLength,
  initialText,
  ...rest
}) => {
  return (
    <View style={{...styles.inputContainer, ...containerStyle}}>
      <View style={styles.iconStyle}>
        <FontAwesome
          name={iconType}
          size={iconSize ? iconSize : 25}
          color="#666"
        />
      </View>

      {initialText ? (
        <View style={styles.initialContainer}>
          <Text style={styles.initialText}>{initialText}</Text>
        </View>
      ) : null}
      <TextInput
        value={labelValue}
        style={styles.input}
        numberOfLines={1}
        placeholder={placeholderText}
        placeholderTextColor="#666"
        {...rest}
        maxLength={maxLength ? maxLength : 50}
      />
    </View>
  );
};

export default FormInput;
