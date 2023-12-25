import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ScreenHeader from '../components/ScreenHeader';
import BasketCart from '../components/BasketCart';
import {useSelector} from 'react-redux';
import { useDispatch } from 'react-redux';
import { decrementQuantity, incrementQuantity } from '../redux/slice/cartSlice';

const CartScreen = () => {
  const state = useSelector(state => state.cart);
  const dispatch=useDispatch()
  return (
    <View style={{flex: 1}}>
      <ScreenHeader headerTitle={'E-Market'} />
      <FlatList
      keyExtractor={item=>item.id}
        data={state.items}
        renderItem={({item}) => (
          <BasketCart
          handleIncrement={()=>dispatch(incrementQuantity(item))}
          handleDecrement={()=>dispatch(decrementQuantity(item))}
            amount={item.quantity}
            productName={item.name}
            productPrice={`${item.price*item.quantity} ₺`}
          />
        )}
      />
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({});
