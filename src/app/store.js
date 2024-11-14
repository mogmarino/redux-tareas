import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../api/apiSlice";
import taskReducer from "../features/tasks/taskSlice"

const store = configureStore({
    reducer:{
        tasks: taskReducer,
        [apiSlice.reducerPath]: apiSlice.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware)
})

export default store