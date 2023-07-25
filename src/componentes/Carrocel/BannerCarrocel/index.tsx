import ICardItemC from 'interfaces/ICardItemC'
import React from 'react'
import styles from './BannerCarrocel.module.scss';
import { LzBotao } from 'lithtlez-ds';
import { useNavigate } from 'react-router-dom';

interface BannerCarrocelProps {
  item: ICardItemC
}

function BannerCarrocel({ item }: BannerCarrocelProps) {
  const ir = useNavigate();
  const irParaPaginaItem = (id: string) => {
    ir(`/item/${id}`)
  }
  return (
    <div className={styles.bannerCarrocel}>
      <h2 className={styles.bannerCarrocel__titulo}>{item.nome}</h2>
      <p className={styles.bannerCarrocel__descricao}>{item.descricao}</p>
      <LzBotao
        onClick={() => irParaPaginaItem(item._id)}
        fontSize={25}
        forma='gota'
        tipo='secundario'
        corPrimaria='#402C25'
        corSecundaria='#F2EEB6'>Ver mais ...</LzBotao>
    </div>
  )
}

export default BannerCarrocel