import { configureStore } from '@reduxjs/toolkit';
import filterSlice from './slices/filterSlice';
import CartSlice from './slices/cartSlice';

export const store = configureStore({
  reducer: {
    filterSlice,
    CartSlice,
  },
});
