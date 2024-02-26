import {Currency} from "../model/types/currency";
import {Select} from "shared/ui/Select/Select";
import {memo, useCallback} from "react";

interface CurrencySelectProps {
    className?: string;
    value?: Currency;
    onChange?: (value: Currency) => void;
    readonly?: boolean;
}

const options = [
    {value: Currency.RUB, content: Currency.RUB},
    {value: Currency.EUR, content: Currency.EUR},
    {value: Currency.USD, content: Currency.USD}
]

export const CurrencySelect = memo((props: CurrencySelectProps) => {
    const {className, value, onChange, readonly} = props;

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Currency);
    }, [onChange])

    return (
        <Select readonly={readonly} label={'Укажите валюту'} options={options} value={value} onChange={onChangeHandler} />
    );
});