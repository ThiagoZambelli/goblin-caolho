import Banner from 'componentes/Banner'
import Carrocel from 'componentes/Carrocel'
import useItensAleatorios from 'state/hooks/useItensAleatorios';
import styles from './PaginaInicial.module.scss';
import useArmadurasMagicas from 'state/hooks/useArmadurasMagicas';

function PaginaInicio() {

  const armadurasAPI = useArmadurasMagicas();
  const itensAleatoriosAPI = useItensAleatorios(); 

  return (
    <main className={styles.paginaInicial}>
      <Banner />
      {itensAleatoriosAPI.length > 2 && <Carrocel cards={itensAleatoriosAPI!} titulo='Itens em destaque' />}
      {armadurasAPI.length > 2 && <Carrocel invertido={false} cards={armadurasAPI!} titulo='Melhores Armaduras' />}

    </main>
  )
}

export default PaginaInicio