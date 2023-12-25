import {View, Image, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import axios from 'axios';
import ScreenHeader from '../components/ScreenHeader';
import Back from '../assets/icons/Back';
import Title, {titleTypes} from '../components/Title';
import CustomButton from '../components/CustomButton';
import { BASE_URL } from '../constants/api';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/slice/cartSlice';

const DetailProductScreen = () => {
  const [productDetail, setProductDetail] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const dispatch=useDispatch()
  const route = useRoute();
  const navigation = useNavigation();
  const {item} = route.params;

  const getProductDetail = () => {
    setIsLoading(true);
    axios
      .get(`${BASE_URL}/products/${item?.id}`)
      .then(res => {
        setProductDetail(res.data);
        setIsLoading(false);
      });
  };
  useEffect(() => {
    getProductDetail();
  }, [item?.id]);

  //console.log(productDetail);
  return (
    <View style={styles.page}>
      <ScreenHeader
        headerTitle={productDetail?.name}
        headerLeftIcon={<Back />}
        headerLeftOnPress={() => navigation.goBack()}
      />
      <View className="pt-4 pl-4 pr-4 pb-5" style={styles.body}>
        <View>
          <Image
            className="h-56"
            source={{uri: productDetail?.image}}
            resizeMode="cover"
          />
          <Title
          customStyle={'mt-4'}
            title={productDetail?.name}
            titleType={titleTypes.TITLE_20_700_SECONDARY}
          />
          <Title
            customStyle={'mt-4'}
            title={productDetail?.description}
            titleType={titleTypes.TITLE_14_400_SECONDARY}
          />
        </View>
        <View style={styles.bottom}>
          <View>
            <Title
              title={`Price:`}
              titleType={titleTypes.TITLE_18_400_PRIMARY}
            />
            <Title
              title={`${productDetail?.price} ₺`}
              titleType={titleTypes.TITLE_18_700_SECONDARY}
            />
          </View>
          <CustomButton
          onPress={()=>dispatch(addToCart(item))}
            buttonTitle={'Add To Card'}
            buttonTitleTypes={titleTypes.TITLE_18_700_WHITE}
          />
        </View>
      </View>
    </View>
  );
};

export default DetailProductScreen;
const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  body: {
    flex: 1,
    justifyContent: 'space-between',
  },
  bottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
