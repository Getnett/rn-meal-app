import { createSlice } from "@reduxjs/toolkit";

interface MealState {
    ids: string[];
}

const initialState: MealState = {
    ids: [],
};

const faviourteMealReducer = createSlice({
    name: "faviouriteMeal",
    initialState,
    reducers: {
        addToFav: (state, action) => {
            state.ids.push(action.payload);
        },
        removeMealFromFav: (state, action) => {
            state.ids.splice(state.ids.indexOf(action.payload), 1);
        },
    },
});

export const { addToFav, removeMealFromFav } = faviourteMealReducer.actions;

export default faviourteMealReducer.reducer;
