import { configureStore } from "@reduxjs/toolkit";
import { dashboardReducer } from "./slice/dashboardSlice";

export const store = configureStore({
    reducer: {
        dashboardReducer
    }
});