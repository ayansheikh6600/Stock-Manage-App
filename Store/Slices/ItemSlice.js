const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  Items: [
    {
      name: "Lays",
      items: [
        {
          name: "Chees 20",
          Qauntity: 1,
        },
        {
          name: "Salt 20",
          Qauntity: 1,
        },
        {
          name: "Paprika 20",
          Qauntity: 1,
        },
        {
          name: "Masala 20",
          Qauntity: 1,
        },
        {
          name: "Chees 30",
          Qauntity: 1,
        },
        {
          name: "Salt 30",
          Qauntity: 1,
        },
        {
          name: "Paprika 30",
          Qauntity: 1,
        },
        {
          name: "Masala 30",
          Qauntity: 1,
        },
        {
          name: "Yougard 30",
          Qauntity: 1,
        },
        {
          name: "Wavy BBQ 30",
          Qauntity: 1,
        },
        {
          name: "Wavy Black 30",
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
      // console.log(action.payload);
      // console.log(state.Items);
      const CategoryName = action.payload[0];
      const CategoryItemName = action.payload[1];
      const currentState = state.Items;

      // console.log(CategoryItemName, CategoryName);

      if (!CategoryItemName) {
        return;
      }

      if (!CategoryName) {
        const obj = {
          name: CategoryItemName,
          items: [],
        };

        currentState.push(obj);
      }

      currentState.map((e) => {
        console.log(e);
      });
    },
  },
});

const { actions } = ItemSlice;
export const { ItemHandler } = actions;

export default ItemSlice.reducer;
