import { configureStore } from "@reduxjs/toolkit"
import basketReducer from "../slices/basketSlice"

export const store = configureStore({
    redcer: {
        basket: basketReducer,
    }
})