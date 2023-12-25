import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {StarFilled} from '../assets/icons';
import Title, {titleTypes} from './Title';
import CustomButton from './CustomButton';
const Card = ({name, image, price, onPress, addToCart}) => {
  return (
    <View className="w-48 p-2.5" style={{gap: 15}}>
      <TouchableOpacity onPress={onPress} className="relative">
        <Image
          className="h-40"
          style={{width: '100%'}}
          source={{
            uri: image,
          }}
        />
        <View className="absolute right-4 top-4">
          <StarFilled size={24} />
        </View>
      </TouchableOpacity>
      <Title title={`${price} ₺`} titleType={titleTypes.TITLE_14_500_PRIMARY} />
      <Title title={name} titleType={titleTypes.TITLE_14_500_SECONDARY} />
      <CustomButton
        onPress={addToCart}
        buttonTitle="Add To Cart"
        buttonTitleTypes={titleTypes.TITLE_16_400_WHITE}
      />
    </View>
  );
};

export default Card;
