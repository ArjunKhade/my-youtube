import { LIVE_CHAT } from "../constant/constant";

const { createSlice } = require("@reduxjs/toolkit");


const chatSlice = createSlice({
    name:"chat",
    initialState:{
        messages:[]
    },
    reducers:{
        addMessages: (state, action) => {
           state.messages.splice(LIVE_CHAT, 1)
           state.messages.unshift(action.payload)
        }
    }
})

export const {addMessages} = chatSlice.actions;
export default chatSlice.reducer;