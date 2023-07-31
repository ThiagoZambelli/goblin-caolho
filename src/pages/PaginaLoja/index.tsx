import Banner from 'componentes/Banner'
import CardLoja from './CardLoja';
import styles from './PaginaLoja.module.scss';
import { useState, useEffect, ButtonHTMLAttributes } from 'react';
import { LzInput } from 'lithtlez-ds';
import useFiltrosLista from 'state/hooks/useFiltrosLista';
import ICardItemC from 'interfaces/ICardItemC';
import { TbSortAscendingLetters } from 'react-icons/tb'
import { SiCurseforge } from 'react-icons/si'
import Loader from 'componentes/Loader';


function PaginaLoja() {
  const [filtroNome, setFiltroNome] = useState('')
  const [listaFiltrada, setListaFiltrada] = useState<ICardItemC[]>([])
  const [ordenador, setOrdenador] = useState<'alfabetica' | 'raridade' | "">('')
  const filtrar = useFiltrosLista();

  const aoFiltrar = (event: string) => {
    setFiltroNome(event);
    setListaFiltrada(filtrar(event, ordenador))
  }

  useEffect(() => {
    setListaFiltrada(filtrar())
  }, [])

  useEffect(() => {
    setListaFiltrada(filtrar(filtroNome, ordenador))
  }, [ordenador])

  function ordenar(event: React.MouseEvent<HTMLButtonElement>) {
    const valorBotao = event.currentTarget.value as 'alfabetica' | 'raridade';;
    if (valorBotao !== ordenador) {
      setOrdenador(valorBotao)
    } else if (valorBotao === ordenador) {
      setOrdenador('')
    }

  }

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
      <section className={styles.paginaLoja__ordenador}>
        <button
          className={`${ordenador === 'alfabetica' ? styles.ativo : ''}`}
          value={'alfabetica'}
          onClick={ordenar}
        ><TbSortAscendingLetters /></button>
        <button
          className={`${ordenador === 'raridade' ? styles.ativo : ''}`}
          value={'raridade'}
          onClick={ordenar}
        ><SiCurseforge /></button>
      </section>
      <section className={styles.paginaLoja__cards}>
        {listaFiltrada.length > 0 ? listaFiltrada.map(item => {
          return (<CardLoja key={item._id} {...item} />)
        }) : <Loader />}
      </section>
    </main>
  )
}

export default PaginaLoja