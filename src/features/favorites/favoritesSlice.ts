import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IProduct } from "../../lib/types"

interface IState {
    favorites: IProduct[]
}

const initialState: IState = {
    favorites: JSON.parse(localStorage.getItem("favorites") as string) || []
}
export const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        addToFavorites: (state, action: PayloadAction<IProduct>) => {
            state.favorites.push(action.payload)
            localStorage.setItem("favorites", JSON.stringify(state.favorites))
        },
        removeFromFavorites: (state, action: PayloadAction<IProduct>) => {
            state.favorites = state.favorites.filter(elm => elm.id !== action.payload.id)
            localStorage.setItem("favorites", JSON.stringify(state.favorites))
        }
    }
})

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions
export default favoritesSlice.reducer