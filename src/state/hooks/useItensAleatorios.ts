import ICardItemC from 'interfaces/ICardItemC';
import { useRecoilValue } from 'recoil';
import { listaItensAPI } from 'state/atom';


export default function useItensAleatorios() {
  const lista: ICardItemC[] = useRecoilValue(listaItensAPI);
  const listaEmbaralhada = [...lista];

  for (let i = listaEmbaralhada.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [listaEmbaralhada[i], listaEmbaralhada[j]] = [listaEmbaralhada[j], listaEmbaralhada[i]];
  }


  const itensSelecionados = listaEmbaralhada.slice(0, 3);

  return itensSelecionados;

}

