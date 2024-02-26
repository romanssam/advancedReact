import {classNames, Mods} from "shared/lib/classNames/classNames";
import styles from './Select.module.scss';
import {ChangeEvent, memo, useMemo} from "react";

export interface SelectOptions {
    value: string;
    content: string;
}

interface SelectProps {
    className?: string;
    label?: string;
    options?: SelectOptions[];
    value?: string;
    onChange?: (value: string) => void;
    readonly?: boolean
}

export const Select = memo((props: SelectProps) => {
    const { className, label, options, value, onChange, readonly } = props;

    const mods: Mods = {

    }
    const optionList = useMemo(() => {
       return options?.map((opt) => (
            <option value={opt.value}>{opt.content}</option>
        ))
    }, [options]);

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value);
    }

    return (
        <div className={classNames(styles.Wrapper, mods, [className])}>
            {label && <span className={styles.label}>{label}</span>}

            <select disabled={readonly} value={value} onChange={onChangeHandler} className={classNames(styles.Select, mods, [className])}>
                {optionList}
            </select>
        </div>
    );
});