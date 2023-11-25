import { combineReducers, configureStore } from "@reduxjs/toolkit"
import  loginReducer  from "../features/loginSlice"
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
 
 
const persistConfig = {
  key: 'root',
  storage,
}

const reducer = combineReducers({
  user: loginReducer,
})

const persistedReducer = persistReducer(persistConfig,reducer)

export const store = configureStore({
    reducer: persistedReducer
})