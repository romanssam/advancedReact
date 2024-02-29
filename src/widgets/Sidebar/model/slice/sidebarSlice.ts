import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import { SidebarSchema } from "../types/sidebarSchema"
import {COLLAPSED_LOCALSTORAGE_KEY} from "shared/consts/localStorage";

const initialState: SidebarSchema  = {}
export const sidebarSlice = createSlice({
    name: 'sidebar',
    initialState,
    reducers: {
        setCollapsed: (state, action: PayloadAction<boolean>) => {
            state.collapsed = action.payload;
            localStorage.setItem(COLLAPSED_LOCALSTORAGE_KEY, String(action.payload));
        },
        initCollapsed: (state) => {
            const storedCollapsed = localStorage.getItem(COLLAPSED_LOCALSTORAGE_KEY);

            if (storedCollapsed) {
                state.collapsed = JSON.parse(storedCollapsed);
            }
        },
    },
})

export const { actions: sidebarActions } = sidebarSlice;
export const { reducer: sidebarReducer } = sidebarSlice;