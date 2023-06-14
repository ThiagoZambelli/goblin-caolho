import React from 'react';
import styles from './Footer.module.scss';
import logo from 'assets/logoLithtleZ.svg';

function Footer() {
  return (
    <footer className={styles.footer}>
        <img src={logo} alt="Logo da LithtleZ" />
    </footer>
  )
}

export default Footer