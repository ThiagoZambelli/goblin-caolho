import Banner from 'componentes/Banner'
import Carrocel from 'componentes/Carrocel'
import useItensAleatorios from 'state/hooks/useItensAleatorios';
import styles from './PaginaInicial.module.scss';
import useDestaqueArmadurasMagicas from 'state/hooks/useDestaqueArmadurasMagicas';

function PaginaInicio() {

  const armadurasAPI = useDestaqueArmadurasMagicas();
  const itensAleatoriosAPI = useItensAleatorios(); 

  return (
    <main className={styles.paginaInicial}>
      <Banner />
      {itensAleatoriosAPI.length > 2 && <Carrocel listaCards={itensAleatoriosAPI!} titulo='Itens em destaque' />}
      {armadurasAPI.length > 2 && <Carrocel  listaCards={armadurasAPI!} titulo='Melhores Armaduras' />}

    </main>
  )
}

export default PaginaInicio