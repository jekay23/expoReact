import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export type NavbarLinks = 'home' | 'compilations' | 'profiles' | 'photos' | 'goBack';

interface NavbarState {
    link: NavbarLinks;
}

const initialState: NavbarState = {
    link: 'home'
}

export const pageSlice = createSlice({
    name: 'currentNavbarLink',
    initialState: initialState,
    reducers: {
        changeNavbarLink: (state: NavbarState, action: PayloadAction<NavbarLinks>) => {
            state.link = action.payload;
        }
    }
})

export const { changeNavbarLink } = pageSlice.actions;

export default pageSlice.reducer;