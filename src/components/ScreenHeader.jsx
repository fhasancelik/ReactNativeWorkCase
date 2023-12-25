import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Title, {titleTypes} from './Title';
import {colors} from '../constants/colors';
import {width} from '../constants/sizes';

const ScreenHeader = ({headerTitle, headerLeftIcon, headerLeftOnPress}) => {
  return (
    <View className="py-3.5 pl-3.5" style={styles.container}>
      <TouchableOpacity onPress={headerLeftOnPress}>
        {headerLeftIcon && headerLeftIcon}
      </TouchableOpacity>
      <Title
        className="pl-9"
        title={headerTitle}
        titleType={titleTypes.TITLE_24_800_WHITE}
      />
    </View>
  );
};

export default ScreenHeader;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    flexDirection: 'row',
    alignItems: 'center',
    gap: width * 0.01153,
  },
});
