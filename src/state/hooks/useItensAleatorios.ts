import itensMagicos from 'assets/itensMagicos.json';

export default function useItensAleatorios(){
    
        const listaEmbaralhada = [...itensMagicos];
    
        for (let i = listaEmbaralhada.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [listaEmbaralhada[i], listaEmbaralhada[j]] = [listaEmbaralhada[j], listaEmbaralhada[i]];
        }
        const itensSelecionados = listaEmbaralhada.slice(0, 3);


    return itensSelecionados;
}