import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from 'axios'
import {ThunkConfig} from "app/providers/StoreProvider";
import {Profile} from "../../types/profile";

export const fetchProfileData = createAsyncThunk<Profile, void, ThunkConfig<string>>(
    'login/loginByUsername',
    async (_, thunkAPI) => {
        const { extra, rejectWithValue } = thunkAPI;

        try {
            const response = await extra.api.get<Profile>('/profile');

            return response.data;
        } catch (e) {
            console.error(e);
            return rejectWithValue('error');
        }
    }
)