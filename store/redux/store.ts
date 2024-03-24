import { configureStore } from "@reduxjs/toolkit";

import faviourteMealReducer from "./faviourteMealReducer";

const store = configureStore({
    reducer: {
        faviouriteMeal: faviourteMealReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
