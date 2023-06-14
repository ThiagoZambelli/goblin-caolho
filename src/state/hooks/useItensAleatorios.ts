import itensMagicos from 'assets/itensMagicos.json';
import ICardItemC from 'interfaces/ICardItemC';

export default function useItensAleatorios(lista?:ICardItemC[]) {

  if (lista && lista.length > 2) {
    const listaEmbaralhada = [...lista];

    for (let i = listaEmbaralhada.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [listaEmbaralhada[i], listaEmbaralhada[j]] = [listaEmbaralhada[j], listaEmbaralhada[i]];
    }
    const itensSelecionados = listaEmbaralhada.slice(0, 3);


    return itensSelecionados;
  } else {
    const listaEmbaralhada = [...itensMagicos];

    for (let i = listaEmbaralhada.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [listaEmbaralhada[i], listaEmbaralhada[j]] = [listaEmbaralhada[j], listaEmbaralhada[i]];
    }
    const itensSelecionados = listaEmbaralhada.slice(0, 3);


    return itensSelecionados;
  }


}