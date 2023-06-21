import { useRecoilValue } from "recoil";
import { logado } from "state/atom";
import useLogarDeslogar from "./useLogarDeslogar";


export default function usePegaLogado(){
    const verificarEstado = useLogarDeslogar();
    verificarEstado();
    const estadoLogado = useRecoilValue(logado);
    return estadoLogado;
}