// productsSlice.js
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {BASE_URL} from '../../constants/api';

export const fetchProducts = createAsyncThunk(
  'fetchProducts',
  async currentPage => {
    try {
      const response = await axios.get(
        `${BASE_URL}/products?page=${currentPage}&limit=12`,
      );
      return response.data;
    } catch (error) {}
  },
);

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    productList: [],
    isLoading: false,
  },
  reducers: {
    resetProductList: state => {
      state.productList = [];
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchProducts.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.productList = [...state.productList, ...action.payload];
        state.isLoading = false;
      })
      .addCase(fetchProducts.rejected, state => {
        state.isLoading = false;
        // Handle rejection as needed
      });
  },
});

export const {resetProductList} = productsSlice.actions;
export default productsSlice.reducer;
