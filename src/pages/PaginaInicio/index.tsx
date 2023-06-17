import Banner from 'componentes/Banner'
import Carrocel from 'componentes/Carrocel'
import React from 'react'
import useItensAleatorios from 'state/hooks/useItensAleatorios';
import styles from './PaginaInicial.module.scss';
import usePegaArmaduras from 'state/hooks/usePegaArmaduras';

function PaginaInicio() {
const itensDestaque = useItensAleatorios();
const armaduras = usePegaArmaduras();

  return (
    <main className={styles.paginaInicial}>
        <Banner />
        <Carrocel cards={itensDestaque} titulo='Itens em destaque' />
        <Carrocel invertido={false} cards={armaduras} titulo='Melhores Armaduras' />
    </main>
  )
}

export default PaginaInicio