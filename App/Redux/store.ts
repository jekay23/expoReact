import { configureStore } from '@reduxjs/toolkit';
import pageReducer from './currentNavbarLink';

export const store = configureStore({
    reducer: {
        currentNavbarLink: pageReducer
    }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch