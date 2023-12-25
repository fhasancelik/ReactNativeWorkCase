import {configureStore, combineReducers} from '@reduxjs/toolkit';
import cartReducer from './slice/cartSlice';
import productReducer from './slice/produtcSlice';
import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
const persistConfig = {
  key: 'root_2',
  version: 1,
  storage: AsyncStorage,
  whiteList:[
    'cart'
  ]
};

const rootReducer = combineReducers({
  cart: cartReducer,
  product: productReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
