import {FC, ReactNode, useEffect} from "react";
import {ReduxStoreWithManager, StateSchemaKey} from "app/providers/StoreProvider/config/StateSchema";
import {Reducer} from "@reduxjs/toolkit";
import {useDispatch, useStore} from "react-redux";

export type ReducersList = {
    [name in StateSchemaKey]?: Reducer;
}

type ReducersListEntry = [StateSchemaKey, Reducer];

interface DynamicModuleLoaderProps {
    reducers: ReducersList;
    children: ReactNode;
    removeAfterUnmount: boolean;
}

export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = (props) => {
    const { reducers, children, removeAfterUnmount } = props;
    const store = useStore() as ReduxStoreWithManager;
    const dispatch = useDispatch();

    useEffect(() => {
        Object.entries(reducers).forEach(([name, reducer]) => {
            store.reducerManager.add(name as StateSchemaKey, reducer);
            dispatch({type: `@INIT ${name} reducer`});
        });
        return () => {
            if (removeAfterUnmount) {
                Object.entries(reducers).forEach(([name, reducer]) => {
                    store.reducerManager.remove(name as StateSchemaKey);
                    dispatch({type: `@DESTROY ${name} reducer`});
                })
            }
        }
    }, []);

    return (
        <>
            {children}
        </>
    );
};