import {Country} from "../model/types/country";
import {Select} from "shared/ui/Select/Select";
import {memo, useCallback} from "react";

interface CountrySelectProps {
    className?: string;
    value?: Country;
    onChange?: (value: Country) => void;
    readonly?: boolean;
}

const options = [
    {value: Country.Armenia, content: Country.Armenia},
    {value: Country.Belarus, content: Country.Belarus},
    {value: Country.Russia, content: Country.Russia},
]

export const CountrySelect = memo((props: CountrySelectProps) => {
    const {className, value, onChange, readonly} = props;

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Country);
    }, [onChange])

    return (
        <Select readonly={readonly} label={'Укажите страну'} options={options} value={value} onChange={onChangeHandler} />
    );
});