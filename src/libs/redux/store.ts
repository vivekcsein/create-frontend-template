"use client";

import { configureStore } from "@reduxjs/toolkit";
import rootLayoutReducer from "./features/rootLayoutSlice";
import authReducer from "./features/authSlice";
import searchFeatureReducer from "./features/searchFeatureSlice";
export const makeStore = () => {
    return configureStore({
        reducer: {
            // Add your reducers here
            rootLayout: rootLayoutReducer,
            searchFeature: searchFeatureReducer,
            auth: authReducer,

        },
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                serializableCheck: false,
            })
    });
};

// Infer the `RootState` and `AppDispatch` types from the store itself
export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
