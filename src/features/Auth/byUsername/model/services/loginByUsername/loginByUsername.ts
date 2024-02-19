import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from 'axios'
import {User, userActions} from "entities/User";
import {USER_LOCALSTORAGE_KEY} from "shared/consts/localStorage";
import {ThunkConfig} from "app/providers/StoreProvider";

interface LoginByUsernameProps {
    username: string;
    password: string;
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, ThunkConfig<string>>(
    'login/loginByUsername',
    async (authData, thunkAPI) => {
        const { extra, dispatch, rejectWithValue } = thunkAPI;

        try {
            const response = await extra.api.post<User>('/login',  authData);
            if (!response.data) {
                throw new Error('error');
            }

            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data))
            dispatch(userActions.setAuthData(response.data));

            return response.data;
        } catch (e) {
            console.error(e);
            return rejectWithValue('error');
        }
    }
)