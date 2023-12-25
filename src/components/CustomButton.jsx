import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Title, {titleTypes} from './Title';
import {colors} from '../constants/colors';

const CustomButton = ({buttonTitle,buttonTitleTypes,onPress}) => {
  return (
    <TouchableOpacity
    onPress={onPress}
      className="py-2 px-4"
      style={{
        backgroundColor: colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Title title={buttonTitle} titleType={buttonTitleTypes} />
    </TouchableOpacity>
  );
};
export default CustomButton;
