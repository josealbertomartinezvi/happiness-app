import { LocalStorageType, Person } from "@/models";
import { getLocalStorage, setLocalStorage } from "@/utils";
import { createSlice, current } from "@reduxjs/toolkit";

const initialState: Person[] = [];

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState: getLocalStorage(LocalStorageType.FAVOTITES)
        ? JSON.parse(getLocalStorage(LocalStorageType.FAVOTITES) as string) 
        : initialState,
    reducers: {
        addFavorite: (state, action) => {
            setLocalStorage(LocalStorageType.FAVOTITES, action.payload);
            return action.payload;
        },
        removeFavorite: (state, action) => {
            const filteredState = current(state).filter((p: Person) => p.id !== action.payload.id);
            setLocalStorage(LocalStorageType.FAVOTITES, filteredState);
            return filteredState;
        },
    },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;