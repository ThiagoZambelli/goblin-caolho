import { useRecoilValue } from "recoil";
import { loagdo } from "state/atom";


export default function usePegaLogado(){
    const estadoLogado = useRecoilValue(loagdo);
    return estadoLogado;
}