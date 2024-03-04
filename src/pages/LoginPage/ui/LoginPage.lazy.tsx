import {FC, lazy} from "react";
import {LoginPageProps} from './LoginPage'

export const LoginPageLazy = lazy<FC<LoginPageProps>>(() => new Promise((resolve) => {
    setTimeout(() => {
        resolve(import('./LoginPage'))
    }, 1500)
}))