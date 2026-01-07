import { configureStore } from "@reduxjs/toolkit"
import AppSlice from "./appSlice";
import SearchSlice from "./searchSlice";
import ChatSlice from "./chatSlice";
import SuggetionSlice from "./suggestionSlice"

const store = configureStore({
  reducer: {
    app: AppSlice,
    search: SearchSlice,
    chat: ChatSlice,
    suggetion: SuggetionSlice
  }
})

export default store;