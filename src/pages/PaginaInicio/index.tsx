import Banner from 'componentes/Banner'
import Carrocel from 'componentes/Carrocel'
import useItensAleatorios from 'state/hooks/useItensAleatorios';
import styles from './PaginaInicial.module.scss';
import useDestaqueArmadurasMagicas from 'state/hooks/useDestaqueArmadurasMagicas';
import Loader from 'componentes/Loader';

function PaginaInicio() {

  const armadurasAPI = useDestaqueArmadurasMagicas();
  const itensAleatoriosAPI = useItensAleatorios(); 

  return (
    <main className={styles.paginaInicial}>
      <Banner />
      {itensAleatoriosAPI.length > 0 ? <Carrocel listaCards={itensAleatoriosAPI!} titulo='Itens em destaque' /> : <Loader />}
      {armadurasAPI.length > 0 ? <Carrocel  listaCards={armadurasAPI!} titulo='Melhores Armaduras' /> : <Loader />}

    </main>
  )
}

export default PaginaInicio