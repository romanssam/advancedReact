import {classNames} from "shared/lib/classNames/classNames";
import React, {useEffect, useState} from "react";

interface BugButtonProps {
    className?: string;
}

export const BugButton = ({className}: BugButtonProps) => {
    const [error, setError] = useState(false)
    const throwError = () => setError(true)

    useEffect(() => {
        if (error) {
            throw Error();
        }
    }, [error])

    return (
        <button onClick={throwError}>Крашим</button>
    );
};