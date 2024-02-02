import persistReducer from "redux-persist/es/persistReducer"
import ItemSlice from "./Slices/ItemSlice"
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
import { configureStore } from "@reduxjs/toolkit";
import persistStore from "redux-persist/es/persistStore";


const persistConfig = {
    key: "StockManage",
    storage:ReactNativeAsyncStorage
}

const persistUserReducer = persistReducer(persistConfig, ItemSlice)

export const store = configureStore({
    reducer: {
        ItemSlice : persistUserReducer

    },
  })

  export const persistedStore = persistStore(store);