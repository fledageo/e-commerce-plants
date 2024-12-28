import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IProduct } from "../../lib/types"

interface IState {
    products: IProduct[]
}

const initialState: IState = {
    products: []
}

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        setProducts: (state, action:PayloadAction<IProduct[]>) => {
            state.products = action.payload
        }
    }
})

export const {setProducts} = productsSlice.actions
export default productsSlice.reducer