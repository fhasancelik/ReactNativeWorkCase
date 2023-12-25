import {View, Text, FlatList, ActivityIndicator} from 'react-native';
import React, {useEffect, useState} from 'react';
import Card from '../components/Card';
import {useNavigation} from '@react-navigation/native';
import ScreenHeader from '../components/ScreenHeader';
import CustomInput from '../components/CustomInput';
import {Search} from '../assets/icons';
import {useDispatch, useSelector} from 'react-redux';
import {addToCart} from '../redux/slice/cartSlice';
import {fetchProducts, resetProductList} from '../redux/slice/produtcSlice';

const ListProductScreen = () => {
  const [currentPagem, setCurrentPage] = useState(1);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {productList, isLoading} = useSelector(state => state.product);

  const renderLoader = () => {
    return isLoading ? (
      <View style={{alignItems: 'center'}}>
        <ActivityIndicator size="large" color="#aaa" />
      </View>
    ) : null;
  };
  const loadMoreItem = () => {
    setCurrentPage(prevState => prevState + 1);
  };

  useEffect(() => {
    dispatch(resetProductList());
  }, []);

  useEffect(() => {
    dispatch(fetchProducts(currentPagem));
  }, [currentPagem]);

  return (
    <View className="mb-28">
      <ScreenHeader headerTitle={'E-Market'} />
      <CustomInput
        placeHolder={'Search'}
        leftIcon={<Search width={24} height={24} />}
      />

      <FlatList
        ListFooterComponent={renderLoader}
        onEndReached={loadMoreItem}
        onEndReachedThreshold={0}
        contentContainerStyle={{alignItems: 'center'}}
        horizontal={false}
        numColumns={2}
        data={productList}
        renderItem={({item, index}) => (
          <Card
            key={index}
            addToCart={() => dispatch(addToCart(item))}
            onPress={() =>
              navigation.navigate('DetailProductScreen', {item: item})
            }
            name={item?.name}
            price={item?.price}
            image={item?.image}
          />
        )}
      />
    </View>
  );
};

export default ListProductScreen;
