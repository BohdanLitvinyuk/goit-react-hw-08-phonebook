

import { configureStore } from "@reduxjs/toolkit";
import {phoneBook} from './phoneBookSlice';
import { authReducer } from "./auth/slice";
export const store=configureStore({
  reducer:{
    phoneBook:phoneBook,
    auth:authReducer
  },
});