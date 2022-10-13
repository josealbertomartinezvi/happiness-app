import { LocalStorageType, Person } from "@/models";
import { getLocalStorage, setLocalStorage } from "@/utils";
import { createSlice } from "@reduxjs/toolkit";

const initialState: Person[] = [];

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState: getLocalStorage(LocalStorageType.FAVOTITES)
        ? JSON.parse(getLocalStorage(LocalStorageType.FAVOTITES) as string) 
        : initialState,
    reducers: {
        addFavorite: (state, action) => {
            setLocalStorage(LocalStorageType.FAVOTITES, state);
            return action.payload;
        },
    },
});

export const { addFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;