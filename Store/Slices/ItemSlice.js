const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  Items: [
    {
      name: "Lays",
      items: [
        { name: "Chees 20", quantity: 1 },
        { name: "Salt 20", quantity: 1 },
        { name: "Paprika 20", quantity: 1 },
        { name: "Masala 20", quantity: 1 },
        { name: "Chees 30", quantity: 1 },
        { name: "Salt 30", quantity: 1 },
        { name: "Paprika 30", quantity: 1 },
        { name: "Masala 30", quantity: 1 },
        { name: "Yougard 30", quantity: 1 },
        { name: "Wavy BBQ 30", quantity: 1 },
        { name: "Wavy Black 30", quantity: 1 },
      ],
    },
    {
      name: "Chatty Chin",
      items: [
        { name: "Item 1", quantity: 1 },
        { name: "Item 2", quantity: 1 },
        { name: "Item 3", quantity: 1 },
        { name: "Item 4", quantity: 1 },
        { name: "Item 5", quantity: 1 },
      ],
    },
    {
      name: "Tikkit",
      items: [
        { name: "Item 1", quantity: 1 },
        { name: "Item 2", quantity: 1 },
        { name: "Item 3", quantity: 1 },
      ],
    },
    {
      name: "Kolsan",
      items: [
        { name: "Item 1", quantity: 1 },
        { name: "Item 2", quantity: 1 },
        { name: "Item 3", quantity: 1 },
      ],
    },
  ],
};

const ItemSlice = createSlice({
  name: "Items",
  initialState,
  reducers: {
    // ItemHandler: (state, action) => {
    //   const [CategoryName, CategoryItemName, quantityChange, CategoryNewName] = action.payload;
    //   const currentState = state.Items;

    //   if (!CategoryItemName || (!CategoryName && !CategoryNewName)) {
    //     return; // Ensure necessary data is present
    //   }

    //   const category = currentState.find((cat) => cat.name === CategoryName);

    //   if (category) {
    //     // Category exists, check for item
    //     const item = category.items.find((it) => it.name === CategoryItemName);

    //     if (item) {
    //       // Increase or decrease item quantity
    //       item.quantity += quantityChange || 1;
    //       item.quantity = Math.max(item.quantity, 1); // Prevent quantity from going below 1
    //     } else {
    //       // Item does not exist, add new item to existing category
    //       category.items.push({ name: CategoryItemName, quantity: 1 });
    //     }
    //   } else {
    //     // Category does not exist, create new category and add item
    //     const newCategory = {
    //       name: CategoryNewName,
    //       items: [{ name: CategoryItemName, quantity: 1 }],
    //     };
    //     currentState.push(newCategory);
    //   }
    // },
  ItemHandler : (state, action) => {
      const [CategoryName, CategoryItemName, quantityChange, CategoryNewName] = action.payload;
      const currentState = state.Items;
    
      if (CategoryNewName && !CategoryName && !CategoryItemName) {
        // Create a new category only
        const newCategory = {
          name: CategoryNewName,
          items: [], // No items in the new category
        };
        currentState.push(newCategory);
        return;
      }
    
      if (CategoryName && CategoryItemName) {
        const category = currentState.find((cat) => cat.name === CategoryName);
    
        if (category) {
          const item = category.items.find((it) => it.name === CategoryItemName);
          if (item) {
            // Update quantity
            item.quantity += quantityChange;
            item.quantity = Math.max(item.quantity, 1); // Prevent quantity from going below 1
          }
        }
        return;
      }
    }
    

  },
});

const { actions } = ItemSlice;
export const { ItemHandler } = actions;

export default ItemSlice.reducer;
