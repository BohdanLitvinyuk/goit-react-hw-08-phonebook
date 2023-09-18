
import { createSlice } from "@reduxjs/toolkit";
import { logIn,logOut,register } from "./operations";

const initialState={
    user:{name:null, email:null},
    token:null,
    isLoggedIn:false,

}

const handleFulfilled =(state,action)=>{
    state.user=action.payload.user;
    state.token=action.payload.token;
    state.isLoggedIn=true;
};

const handleFulfilledLogOut =(state,action)=>{
    state.user={name:null, email:null};
    state.token=null;
    state.isLoggedIn=false;
}


const authSlice= createSlice({
    name:'auth',
    initialState,
    extraReducers:builder=>{
builder.addCase(register.fulfilled,handleFulfilled)
.addCase(logIn.fulfilled,handleFulfilled)
.addCase(logOut.fulfilled, handleFulfilledLogOut)
    }
})
export const authReducer=authSlice.reducer;