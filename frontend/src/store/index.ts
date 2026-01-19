import { configureStore } from "@reduxjs/toolkit";
import builtySlice from '@src/store/slices/builtySlice'

export const store = configureStore({
    reducer: {
        builty: builtySlice,
    },
});
