import listaDeRaridade from '../assets/coresPorRaridade.json';

export default function useTestaCorPorRaridade(raridade: string) {
    const corReferente = listaDeRaridade.filter(raridadeDaLista => {
        return raridadeDaLista.raidade.includes(raridade)
    })
    
    if(corReferente[0]){
        return corReferente[0].cor
    } else {
        return 'black'
    }

}