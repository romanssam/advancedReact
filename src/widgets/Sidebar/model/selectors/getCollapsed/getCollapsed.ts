import {StateSchema} from "app/providers/StoreProvider";

export const getCollapsed = (state: StateSchema) => state?.sidebar.collapsed;