import { combineReducers, configureStore } from "@reduxjs/toolkit";
import general from "./general";



const rootReducer = combineReducers({
    general: general
})

export const store = configureStore({
    reducer: rootReducer
})