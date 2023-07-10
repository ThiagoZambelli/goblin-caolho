import ICardItemC from "interfaces/ICardItemC";
import { atom } from "recoil";

export const erro = atom<string>({
    key: 'erro',
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
export const modalCadastro = atom<boolean>({
    key: 'modalCadastro',
    default: false
})
export const listaItensAPI = atom<ICardItemC[]>({
    key: 'listaItensAPI',
    default: []
})
export const listaItensAPIFiltrada = atom<ICardItemC[]>({
    key: 'listaItensAPIFiltrada',
    default: []
})