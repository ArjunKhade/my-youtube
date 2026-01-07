import { createSlice } from "@reduxjs/toolkit";


const suggetionSlice = createSlice({
    name:"suggetion",
    initialState: {
        query:'latest bollywood songs'
    },
    reducers:{
        addSuggetion: (state, action) =>{
            state.query = action.payload;
        }
    }
})

export const {addSuggetion} = suggetionSlice.actions;
export default suggetionSlice.reducer;