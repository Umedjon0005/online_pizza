import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  totalprice: 0,
  items: [],
};
export const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    additem(state, action) {
      const findItem = state.items.find((obj) => obj.id === action.payload.id);
      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
        });
      }
      state.totalprice = state.items.reduce((sum, obj) => {
        return obj.price * obj.count + sum;
      }, 0);
    },
    MinusItem(state, action) {
      const findItem = state.items.find((obj) => obj.id === action.payload);
      if (findItem) {
        findItem.count--;
      }
    },
    removeItem(state, action) {
      state.items = state.items.filter((obj) => obj.id !== action.payload);
    },
    clearItems(state) {
      state.items = [];
    },
  },
});
export const { additem, removeItem, clearItems ,MinusItem} = CartSlice.actions;
export default CartSlice.reducer;
