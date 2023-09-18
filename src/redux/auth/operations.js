import axios from "axios";
import { createAsyncThunk} from "@reduxjs/toolkit";


axios.defaults.baseURL='https://connections-api.herokuapp.com';

const setAuthHeader= token=>{
    axios.defaults.headers.common.Authorization=`Bearer ${token}`;
};

const clearAuthHeader=()=>{
axios.defaults.headers.common.Authorization='';
}


export const register=createAsyncThunk(
    'auth/register',
    async(credentials,thunkAPI)=>{
        try {
            const res= await axios.post('/users/signup',credentials);
            setAuthHeader(res.data.token);
            console.log(res)
            return res.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);
export const logIn = createAsyncThunk(
    'auth/logIn',
    async(credentials,thunkAPI)=>{
        try {
            const res=  await axios.post('',credentials);
            setAuthHeader( res.data.token);
            return  res.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
);

export const logOut=createAsyncThunk(
    'auth.logOut',
    async(_,thunkAPI)=>{
        try {
            await axios.post('');
            clearAuthHeader()
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)