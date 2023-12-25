import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Title, {titleTypes} from './Title';
import {colors} from '../constants/colors';


const BasketCart = ({
  productName,
  productPrice,
  handleIncrement,
  handleDecrement,
  amount
}) => {
 
  return (
    <View
      className="px-2.5 py-4"
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
      <View>
        <Title
          title={productName}
          titleType={titleTypes.TITLE_16_400_SECONDARY}
        />
        <Title
          title={productPrice}
          titleType={titleTypes.TITLE_13_500_PRIMARY}
        />
      </View>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          onPress={handleDecrement}
          className="py-2 px-4"
          style={{backgroundColor: '#FFFFFF'}}>
          <Title title={'-'} titleType={titleTypes.TITLE_14_700_SECONDARY} />
        </TouchableOpacity>
        <View className="py-2 px-4" style={{backgroundColor: colors.primary}}>
          <Title title={amount} titleType={titleTypes.TITLE_18_400_WHITE} />
        </View>
        <TouchableOpacity
          onPress={handleIncrement}
          className="py-2 px-4"
          style={{backgroundColor: '#FFFFFF'}}>
          <Title title={'+'} titleType={titleTypes.TITLE_14_700_SECONDARY} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BasketCart;

const styles = StyleSheet.create({});
