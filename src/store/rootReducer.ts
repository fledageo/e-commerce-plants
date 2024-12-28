import productsReducer from "../features/products/productsSlice"
import favoritesReducer from "../features/favorites/favoritesSlice"
import basketReducer from "../features/basket/basketSlice"

import { combineReducers } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
    products: productsReducer,
    favorites:favoritesReducer,
    basket: basketReducer
})

export default rootReducer