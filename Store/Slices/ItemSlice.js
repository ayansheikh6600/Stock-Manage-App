const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  Items: [
    {
      name: "Lays",
      items: [
        {
          name: "Item 1",
          Qauntity: 1,
        },
        {
          name: "Item 2",
          Qauntity: 1,
        },
        {
          name: "Item 3",
          Qauntity: 1,
        },
      ],
    },
    {
      name: "Chatty Chin",
      items: [
        {
          name: "Item 1",
          Qauntity: 1,
        },
        {
          name: "Item 2",
          Qauntity: 1,
        },
        {
          name: "Item 3",
          Qauntity: 1,
        },
        {
          name: "Item 4",
          Qauntity: 1,
        },
        {
          name: "Item 5",
          Qauntity: 1,
        },
      ],
    },
    {
      name: "Tikkit",
      items: [
        {
          name: "Item 1",
          Qauntity: 1,
        },
        {
          name: "Item 2",
          Qauntity: 1,
        },
        {
          name: "Item 3",
          Qauntity: 1,
        },
      ],
    },
    {
      name: "Kolsan",
      items: [
        {
          name: "Item 1",
          Qauntity: 1,
        },
        {
          name: "Item 2",
          Qauntity: 1,
        },
        {
          name: "Item 3",
          Qauntity: 1,
        },
      ],
    },
  ],
};

const ItemSlice = createSlice({
  name: "Items",
  initialState,
  reducers: {
    ItemHandler: (state, action) => {
      console.log(action.payload);
    },
  },
});

const { actions } = ItemSlice;
export const { ItemHandler } = actions;

export default ItemSlice.reducer;
