import { configureStore, createSlice } from "@reduxjs/toolkit";
 
const initialState = {
    items: [],
}

export const basketSlice = createSlice({
    name: "basket",
    initialState,
    reducers: {
        addToBasket: (state, action ) => {},
        removeFromBasket: (state, action) => {},

    }
})

export const {addToBasket, removeFromBasket} = basketSlice.actions;

export const selectItems = (state) => state.absket.items;

export default basketSlice.reducer;