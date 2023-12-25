import {Text} from 'react-native';
import React from 'react';
import {colors} from '../constants/colors';

export const titleTypes = {
  //TITLE_FONTSIZE_FONTWEIGHT_COLOR
  TITLE_14_400_SECONDARY: {
    typography: 'text-sm font-normal',
    color: colors.secondary,
  },
  TITLE_13_500_PRIMARY:{
    typography: 'text-xs font-medium',
    color: colors.primary,
  },
  TITLE_14_500_PRIMARY: {
    typography: 'text-sm font-medium',
    color: colors.primary,
  },
  TITLE_14_500_SECONDARY: {
    typography: 'text-sm font-medium',
    color: colors.secondary,
  },
  TITLE_14_700_SECONDARY: {
    typography: 'text-sm font-bold',
    color: colors.secondary,
  },
  TITLE_16_400_WHITE: {
    typography: 'text-base font-normal',
    color: colors.white,
  },
  TITLE_16_400_SECONDARY: {
    typography: 'text-base font-normal',
    color: colors.secondary,
  },
  TITLE_18_400_WHITE:{
    typography: 'text-lg font-normal',
    color: colors.white,
  },
  TITLE_18_400_PRIMARY: {
    typography: 'text-lg font-normal',
    color: colors.primary,
  },
  TITLE_18_500_SECONDARY: {
    typography: 'text-lg font-medium',
    color: colors.secondary,
  },
  TITLE_18_700_SECONDARY: {
    typography: 'text-lg font-bold',
    color: colors.secondary,
  },
  TITLE_18_700_WHITE: {
    typography: 'text-lg font-bold',
    color: colors.white,
  },
  TITLE_20_700_SECONDARY: {
    typography: 'text-xl font-bold',
    color: colors.secondary,
  },
  TITLE_24_800_WHITE: {
    typography: 'text-2xl font-extrabold',
    color: colors.white,
  },
};

const Title = ({title, titleType,customStyle}) => {
  //console.log(titleType)

  return (
    <Text className={`${titleType?.typography} ${customStyle}`} style={{color: titleType.color}}>
      {title}
    </Text>
  );
};

export default React.memo(Title);
