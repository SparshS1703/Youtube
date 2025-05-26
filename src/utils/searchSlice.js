import { createSlice } from "@reduxjs/toolkit";

const searchSlice=createSlice({
    name:"Search",
    initialState:{},
    reducers:{
        cacheResults:(state,action)=>{
            // {"ip":["iphone","ipaa",...]}
            state=Object.assign(state,action.payload);
        }
    }
})

export default searchSlice.reducer;
export const {cacheResults}=searchSlice.actions;