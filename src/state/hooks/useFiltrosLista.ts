import ICardItemC from "interfaces/ICardItemC";
import { useRecoilValue } from "recoil"
import { listaItensAPI } from "state/atom"

export default function useFiltrosLista() {
    const listaItensDaAPI = useRecoilValue(listaItensAPI);
    let listaFiltrada = [...listaItensDaAPI];

    return (filtroNome?: string, ordenador?: 'alfabetica' | 'raridade' | '') => {

        if (filtroNome) {
            listaFiltrada = listaItensDaAPI.filter(item => {
                return item.nome.toLowerCase().includes(filtroNome);
            })
        }

        if (ordenador && listaFiltrada.length > 0) {
            listaFiltrada = [...ordenar(listaFiltrada, ordenador)!]
        }
        return listaFiltrada
    }
}

function ordenar(lista: ICardItemC[], ordenador: 'alfabetica' | 'raridade') {
    if (ordenador && ordenador === "alfabetica") {
        const compararNomes = (a: ICardItemC, b: ICardItemC) => {
            return a.nome.toLowerCase().localeCompare(b.nome.toLowerCase());
        };

        let listaOrdenada = [...lista].sort(compararNomes);

        return listaOrdenada;
    }

    if (ordenador && ordenador === "raridade") {
        const compararRaridades = (a: ICardItemC, b: ICardItemC) => {
            return a.raridade.localeCompare(b.raridade);
        }

        const listaOrdenada = [...lista].sort(compararRaridades);

        return listaOrdenada
    }
}