// cartSlice.js
import {createSlice} from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.items.find(
        item => item.id === action.payload.id,
      );

      if (existingItem) {
        // If the item already exists, update the quantity
        existingItem.quantity += 1;
      } else {
        // If the item is not in the cart, add it
        state.items.push({...action.payload, quantity: 1});
      }
    },
    incrementQuantity: (state, action) => {
      const item = state.items.find(item => item.id === action.payload.id);
      if (item) {
        item.quantity += 1;
      }
    },
    decrementQuantity: (state, action) => {
      const item = state.items.find(item => item.id === action.payload.id);

    
      if (action.payload.quantity === 1) {
        const removedList = state.items.filter(
          item => item.id !== action.payload.id,
        );
        state.items = removedList;
      }else{
        item.quantity -= 1;
      }
    },
  },
});

export const {addToCart, incrementQuantity, decrementQuantity} =
  cartSlice.actions;
export const selectCart = state => state.cart;
export default cartSlice.reducer;
