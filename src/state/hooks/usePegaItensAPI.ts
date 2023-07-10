import { useSetRecoilState } from "recoil";
import { listaItensAPI } from "state/atom";
import useItensMagicos from "./useItensMagicos";

export default function usePegaItensAPI(){    
    const setLista = useSetRecoilState(listaItensAPI)
    const listadaAPI = useItensMagicos();    
    return () =>{
        setLista(listadaAPI)  
    }
}