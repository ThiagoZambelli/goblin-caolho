import ICardItemC from 'interfaces/ICardItemC';
import { useRecoilValue } from 'recoil';
import { listaItensAPI } from 'state/atom';



export default function useArmadurasMagicas() {
    const lista: ICardItemC[] = useRecoilValue(listaItensAPI);;
    const armaduras = lista.filter(item => {
        return item.tipo.includes('Armor' || "armor")
    })

    const listaEmbaralhada = [...armaduras];

    for (let i = listaEmbaralhada.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [listaEmbaralhada[i], listaEmbaralhada[j]] = [listaEmbaralhada[j], listaEmbaralhada[i]];
    }


    const armadurasSelecionados = listaEmbaralhada.slice(0, 3);
    return armadurasSelecionados;
}