import { createSlice } from "@reduxjs/toolkit";

export const avSlice = createSlice({
  name: "av",
  initialState: [
    {
      img:"https://pixabay.com/images/download/business-20031_640.jpg",
      name: "Projector",
      cost: 200,
      quantity: 0,
    },
    {
      img:"https://pixabay.com/images/download/speakers-4109274_640.jpg",
      name: "Sound System",
      cost:150,
      quantity: 0,
    },
    {
      img:"https://pixabay.com/images/download/public-speaking-3926344_640.jpg",
      name: "Microphones",
      cost:100,
      quantity: 0,
    },   
  ],


  reducers: {
    incrementAvQuantity: (state, action) => {
      const item = state[action.payload];
      if (item){
        item.quantity++;
      }
    },
    decrementAvQuantity: (state, action) => {
      const item = state[action.payload];
      if (item && item.quantity >0){
        item.quantity--;
      }
    },
  },
});

export const { incrementAvQuantity, decrementAvQuantity } = avSlice.actions;

export default avSlice.reducer;
