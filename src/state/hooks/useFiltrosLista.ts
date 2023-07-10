import { useRecoilValue, useSetRecoilState } from "recoil"
import { listaItensAPI, listaItensAPIFiltrada } from "state/atom"

export default function useFiltrosLista (){
    const listaItensDaAPI = useRecoilValue(listaItensAPI);
    let listaFiltrada = listaItensDaAPI;
    



    return (filtroNome?: string) => {

        if(filtroNome){
            listaFiltrada = listaItensDaAPI.filter(item => {
                return item.nome.toLowerCase().includes(filtroNome);
            })
        }
        return listaFiltrada
    }    
}