import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ImageSourcePropType } from 'react-native';

export interface Favourite {
    id: string;
    name: string;
    img_url: ImageSourcePropType;
    genre: string,
    description: string
}

const initialState: Favourite[] = []
const FavouriteSlice = createSlice({
    name: 'favourite',
    initialState,
    reducers: {
        addToFavourite(state, action: PayloadAction<Favourite>) {
            const exists = state.some((item: any) => item.id === action.payload.id);
            if (!exists) {
                state.push(action.payload);
            }
        },
        removeFromFavourite(state, action: PayloadAction<string>) {
            return (state = state.filter((item: any) => item.id !== action.payload))
        }
    }
})

export const { addToFavourite, removeFromFavourite } = FavouriteSlice.actions;
export default FavouriteSlice.reducer