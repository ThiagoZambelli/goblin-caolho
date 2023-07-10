import styles from './Banner.module.scss';
import React, { ReactNode } from 'react';

interface IBanner {
  children?: ReactNode;
}

function Banner({ children }: IBanner) {


  return (
    <section className={styles.banner}>
      {children}
    </section>
  )
}

export default Banner