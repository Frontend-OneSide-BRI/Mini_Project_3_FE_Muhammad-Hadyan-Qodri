import { configureStore } from "@reduxjs/toolkit";
import { movieApi } from "./API/movieApi";

export const store = configureStore({
    reducer: {
        [movieApi.reducerPath]: movieApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(movieApi.middleware),
});
