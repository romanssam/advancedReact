import {Currency} from "entities/CurrencySelect/model/types/currency";
import {Country} from "entities/CountySelect/model/types/country";

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