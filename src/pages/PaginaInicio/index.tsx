import Banner from 'componentes/Banner'
import Carrocel from 'componentes/Carrocel'
import React from 'react'
import useItensAleatorios from 'state/hooks/useItensAleatorios';
import styles from './PaginaInicial.module.scss';

function PaginaInicio() {
const listaTeste= useItensAleatorios();

  return (
    <main className={styles.paginaInicial}>
        <Banner />
        <Carrocel cards={listaTeste} titulo='Itens em destaque' />
    </main>
  )
}

export default PaginaInicio