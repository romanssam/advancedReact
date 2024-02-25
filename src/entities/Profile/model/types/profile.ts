import {Country, Currency} from "shared/consts/common";

export interface Profile {
    firstname?: string;
    lastname?: string;
    age?: number;
    currency?: Currency;
    country?: Country;
    city?: string;
    username?: string;
    avatar?: string;
}

export interface ProfileSchema {
    data?: Profile; // from server
    form?: Profile; // from userChange
    isLoading: boolean;
    error?: string;
    readonly: boolean;
}