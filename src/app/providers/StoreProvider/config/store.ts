import {configureStore, ReducersMapObject} from '@reduxjs/toolkit'
import {StateSchema} from "./StateSchema";
import {counterReducer} from "entities/Counter";
import {userReducer} from "entities/User";

import {createReducerManager} from "app/providers/StoreProvider/config/reducerManager";
import {$api} from "shared/api/api";
import type {To} from "@remix-run/router";
import type {NavigateOptions} from "react-router/dist/lib/context";
export function createReduxStore(
    initialState?: StateSchema,
    navigate?: (to: To, options?: NavigateOptions) => void,
) {
    const rootReducers: ReducersMapObject<StateSchema> = {
        counter: counterReducer,
        user: userReducer,
    }

    const reducerManager = createReducerManager(rootReducers);

    const store = configureStore({
        reducer: reducerManager.reduce,
        preloadedState: initialState,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
            thunk: {
                extraArgument: {
                    api: $api,
                    navigate,
                }
            }
        })
    })

    // @ts-ignore
    store.reducerManager = reducerManager;

    return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];