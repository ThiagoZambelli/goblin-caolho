import { atom } from "recoil";

export const error = atom<string>({
    key: 'error',
    default: ''
})
export const logado = atom<boolean>({
    key: 'logado',
    default: false
})
export const modalLogin = atom<boolean>({
    key: 'modalLogin',
    default: false
})