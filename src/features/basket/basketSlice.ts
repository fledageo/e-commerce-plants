import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IBasketProduct, IProduct } from "../../lib/types";

interface IState {
    products: IBasketProduct[]
    total: number | null
}

const initialState: IState = {
    products: JSON.parse(localStorage.getItem("basket") as string) || [],
    total: null
}

const basketSlice = createSlice({
    name: "basket",
    initialState,
    reducers: {
        addToBasket: (state, action: PayloadAction<IProduct>) => {
            const isExist = state.products.find(elm => elm.id == action.payload.id)
            if (isExist) {
                isExist.amount += 1
            } else {
                state.products.push({ ...action.payload, amount: 1 })
            }
            localStorage.setItem("basket", JSON.stringify(state.products))
        },
        increaseAmount: (state, action:PayloadAction<IBasketProduct>) => {
            const isExist = state.products.find(elm => elm.id == action.payload.id)
            if (isExist) {
                isExist.amount += 1
            }
            localStorage.setItem("basket", JSON.stringify(state.products))
        },
        decreaseAmount: (state, action:PayloadAction<IBasketProduct>) => {
            const isExist = state.products.find(elm => elm.id == action.payload.id)
            if (isExist) {
                isExist.amount -= 1
            }
            localStorage.setItem("basket", JSON.stringify(state.products))
        },
        removeFromBasket: (state, action:PayloadAction<IBasketProduct>) => {
            const result = state.products.filter(elm => elm.id !== action.payload.id)
            state.products = result
            localStorage.setItem("basket", JSON.stringify(state.products))
        },
        setTotal:(state,action:PayloadAction<number>) => {
            state.total = action.payload
        }
    }
})

export const { addToBasket, removeFromBasket,increaseAmount,decreaseAmount,setTotal } = basketSlice.actions
export default basketSlice.reducer
