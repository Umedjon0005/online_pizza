import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categoryId:0,
  sort: {name :'популярности',sortProperty:'rating'},
}
export const filterSlice=createSlice({
  name:'filter',
  initialState,
  reducers:{
    setByCategoryId(state,action){
    state.categoryId=action.payload;
    },
    setSort(state,action){
      state.sort=action.payload;
      },
  }
})
export const { setByCategoryId,setSort}=filterSlice.actions
export default filterSlice.reducer;

