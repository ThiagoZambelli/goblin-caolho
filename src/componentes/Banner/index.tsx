import { LzBotao, LzInput } from 'lithtlez-ds'
import React, {useState} from 'react'
import styles from './Banner.module.scss';

function Banner() {
    const [value, setValue] = useState('');
    
  return (
    <section className={styles.banner}>
        <LzInput label='O que Procura?'  value={value} onChange={(event)=>{setValue(event)}} />
        <LzBotao children='Buscar'  fSize={12}/>
    </section>
  )
}

export default Banner