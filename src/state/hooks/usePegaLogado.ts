import { useRecoilValue } from "recoil";
import { logado } from "state/atom";


export default function usePegaLogado(){
    const estadoLogado = useRecoilValue(logado);
    return estadoLogado;
}