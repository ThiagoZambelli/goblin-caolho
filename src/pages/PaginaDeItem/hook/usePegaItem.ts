import { useRecoilValue } from "recoil";
import { listaItensAPI } from "state/atom";

export default function usePegaItem(id:number){
    const listaDeItens = useRecoilValue(listaItensAPI);
    const item = listaDeItens.filter(item => {
        return item.id === id;
    })

    return item[0];
}