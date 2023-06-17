import { LzBotao, LzInput } from 'lithtlez-ds'
import React, { useState } from 'react'
import styles from './Banner.module.scss';

function Banner() {
  const [value, setValue] = useState('');

  return (
    <section className={styles.banner}>
      <LzInput
        label='O que Procura?'
        corPrimaria='#26100E'
        corSecundaria='#B69E7C'
        value={value} onChange={(event) => { setValue(event) }}
      />
      <LzBotao
        children='Buscar'
        corHover='#161B21'
        corPrimaria='#26100E'
        corSecundaria='#B69E7C'
        fSize={12}
      />
    </section>
  )
}

export default Banner