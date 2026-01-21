import { configureStore } from "@reduxjs/toolkit";
import builtySlice from '@src/store/slices/builtySlice'
import authSlice from '@src/store/slices/authSlice';

export const store = configureStore({
    reducer: {
        auth: authSlice,
        builty: builtySlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;