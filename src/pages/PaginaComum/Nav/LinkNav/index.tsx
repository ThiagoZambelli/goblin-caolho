import React from 'react'
import { Link } from 'react-router-dom'
import styles from './LinkNav.module.scss';

interface LinkNavProps {
    to: string,
    nome: string,
    id: string
}

function LinkNav({ to, nome, id }: LinkNavProps) {
    return (
        <Link className={styles.link} key={id} to={to}>{nome}</Link>
    )
}

export default LinkNav