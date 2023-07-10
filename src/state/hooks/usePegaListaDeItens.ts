import { useRecoilValue } from "recoil";
import { listaItensAPI } from "state/atom";

export default function usePegaListaDeItens(){
    const lista = useRecoilValue(listaItensAPI);
    return lista;
}