import { useRecoilValue } from "recoil";
import { listaItensAPI } from "state/atom";

export default function usePegaItem(id:string){
    const listaDeItens = useRecoilValue(listaItensAPI);
    const item = listaDeItens.filter(item => {
        return item._id === id;
    })

    return item[0];
}