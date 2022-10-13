import { LocalStorageType, Person } from "@/models";
import { getLocalStorage, setLocalStorage } from "@/utils";
import { createSlice } from "@reduxjs/toolkit";

const initialState: Person[] = [];

const peopleSlice = createSlice({
    name: 'people',
    initialState: getLocalStorage(LocalStorageType.PEOPLE)
        ? JSON.parse(getLocalStorage(LocalStorageType.PEOPLE) as string)
        : initialState,
    reducers: {
        addPeople: (state, action) => {
            setLocalStorage(LocalStorageType.PEOPLE, state);
            return action.payload;
        },
    }
});

export const { addPeople } = peopleSlice.actions;
export default peopleSlice.reducer;