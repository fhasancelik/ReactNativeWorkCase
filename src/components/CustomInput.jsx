import {StyleSheet,TextInput, View} from 'react-native';
import React from 'react';

const CustomInput = ({leftIcon, placeHolder, onChangeText}) => {
  return (
    <View style={{flexDirection:'row',alignItems:'center',gap:8}} className='py-2 pl-3 pr-2 ml-4' >
      {leftIcon && leftIcon}
      <TextInput placeholder={placeHolder} onChangeText={onChangeText} />
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({});
