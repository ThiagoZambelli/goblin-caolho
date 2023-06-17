import { atom } from "recoil";

export const error = atom<string>({
    key: 'error',
    default: ''
})
export const loagdo = atom<boolean>({
    key: 'loagdo',
    default: false
})
export const modalLogin = atom<boolean>({
    key: 'modalLogin',
    default: false
})