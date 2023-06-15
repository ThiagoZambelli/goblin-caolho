import React from 'react';
import styles from './Footer.module.scss';
import logo from 'assets/logoLithtleZ.svg';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className={styles.footer}>
        <img src={logo} alt="Logo da LithtleZ" />
        <p>&#169; Projeto desenvolvido por: <Link className={styles.footer__ancora} to={'https://meu-portfolio-neon-nu.vercel.app/'}>Thiago Zambelli</Link></p>
    </footer>
  )
}

export default Footer