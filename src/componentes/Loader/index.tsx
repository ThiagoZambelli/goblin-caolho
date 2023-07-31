import React from 'react'
import styles from './Loader.module.scss';

function Loader() {
    return (
        <section className={styles.loader}>
            <p>Carregando </p>
            <div className={styles.loader__balls}>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </section>
    )
}

export default Loader