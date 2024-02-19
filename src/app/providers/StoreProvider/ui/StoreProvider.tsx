import {ReactNode} from "react";
import {Provider} from "react-redux";
import {createReduxStore} from "app/providers/StoreProvider/config/store";
import {StateSchema} from "app/providers/StoreProvider/config/StateSchema";
import { useNavigate } from "react-router-dom";
import {DeepPartial, ReducersMapObject} from "@reduxjs/toolkit";

interface StoreProviderProps {
    children: ReactNode;
    initialState?: StateSchema;
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
}
export const StoreProvider = (props: StoreProviderProps) => {
    const { children, initialState, asyncReducers } = props;

    const navigate = useNavigate();

    const store = createReduxStore(
        initialState,
        navigate
    );

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};