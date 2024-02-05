import {lazy, FC} from 'react';
import {LoginFormProps} from "./LoginForm";

export const LoginFormLazy = lazy<FC<LoginFormProps>>(() => new Promise((resolve) => {
    setTimeout(() => {
        resolve(import('./LoginForm'))
    }, 1500)
}))