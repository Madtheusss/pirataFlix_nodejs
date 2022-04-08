import React from "react";

import logo from './assets/logo.png';
import styles from './Navigation.module.css';

const Navigation = () => {
    const navItems = [
        'Inicio',
        'Séries',
        'Filmes',
        'Mais recentes',
        'Minha lista'
    ]
    return(
        <div className={styles.navigation}>
            <img src={logo} alt="LogoNetflix" />
            <ul className={styles.navigationList}>
                {navItems.map((item) => (
                    <li className={styles.navigationItem} key={item}>{item}</li>
                ))}
            </ul>
        </div>
    )
}

export default Navigation;