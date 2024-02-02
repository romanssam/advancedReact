export interface User {
    id: number;
    username: string;
    role?: string;
}
export interface UserSchema {
    authData?: User;
}