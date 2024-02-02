const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  Items: [],
};

const ItemSlice = createSlice({
  name: "Items",
  initialState,
  reducers: {
    ItemHandler: (state, action) => {

        console.log(action.payload);
    }
  },
});



const { actions } = ItemSlice;
export const {ItemHandler} = actions;


export default ItemSlice.reducer;