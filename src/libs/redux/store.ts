
import { configureStore } from "@reduxjs/toolkit";
import rootLayoutDataReducer from "./features/rootLayoutSlice";

const store = configureStore({
    reducer: {
        // Add your reducers here
        rootLayoutReducer: rootLayoutDataReducer,
    },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;