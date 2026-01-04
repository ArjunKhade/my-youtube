import { configureStore } from "@reduxjs/toolkit"
import AppSlice from "./appSlice";
import SearchSlice from "./searchSlice";


const store = configureStore({
  reducer: {
    app: AppSlice,
    search: SearchSlice 
  }
})

export default store;