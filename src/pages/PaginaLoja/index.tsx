import Banner from 'componentes/Banner'
import CardLoja from './CardLoja';
import styles from './PaginaLoja.module.scss';
import { useState, useEffect} from 'react';
import { LzInput } from 'lithtlez-ds';
import useFiltrosLista from 'state/hooks/useFiltrosLista';
import ICardItemC from 'interfaces/ICardItemC';

function PaginaLoja() {
  const [filtroNome, setFiltroNome] = useState('')  
  const [listaFiltrada, setListaFiltrada] = useState<ICardItemC[]>([])
  const filtrar = useFiltrosLista(); 

  const aoFiltrar = (event: string) => {
    setFiltroNome(event);
    setListaFiltrada(filtrar(event))
  }

  useEffect(()=>{
    setListaFiltrada(filtrar())
  },[])

  return (
    <main className={styles.paginaLoja}>
      <Banner>
        <LzInput
          label='O que Procura?'
          corPrimaria='#26100E'
          corSecundaria='#B69E7C'
          value={filtroNome}
          onChange={(event) => { aoFiltrar(event) }}
        />
      </Banner>
      <section className={styles.paginaLoja__cards}>
        {listaFiltrada.length > 0 && listaFiltrada.map(item => {
          return (<CardLoja key={item.id} {...item} />)
        })}
      </section>
    </main>
  )
}

export default PaginaLoja