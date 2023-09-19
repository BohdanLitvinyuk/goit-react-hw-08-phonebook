
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { configureStore } from "@reduxjs/toolkit";
import {phoneBook} from './phoneBookSlice';
import { authReducer } from "./auth/slice";

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};
const phonePersistConfig={
  key:'phoneBook',
  storage,
  blacklist: ['filter']
}

export const store=configureStore({
  reducer:{
    phoneBook:persistReducer(phonePersistConfig,phoneBook),
    auth:persistReducer(authPersistConfig, authReducer),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
