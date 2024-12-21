import { createReducer } from "@reduxjs/toolkit";
import { setProducts } from "./actions";
import { IProduct, IState } from "../lib/types";

const initState:IState = {
    products:[]
}

export const productsReducer = createReducer(initState, builder => {
    builder
        .addCase(setProducts,(state,action) => {
            state.products = action.payload as IProduct[]
        })
})