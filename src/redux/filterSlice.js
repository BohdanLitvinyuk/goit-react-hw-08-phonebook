import { createSlice } from "@reduxjs/toolkit";

const filterSlice= createSlice({
    name:'filter',
    initialState:'',
    reducers:{
        filteredContact:(_,action)=>{
            return action.payload;
        }
    }
})
export const {filteredContact} = filterSlice.actions;
export default filterSlice.reducer;