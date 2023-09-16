

import { configureStore } from "@reduxjs/toolkit";
import {phoneBook} from './phoneBookSlice';
export const store=configureStore({
  reducer:{
    phoneBook:phoneBook,
  },
});