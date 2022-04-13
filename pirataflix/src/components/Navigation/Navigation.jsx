import React from "react";
import SecundaryNavigation from "../SecundaryNavigation/SecundaryNavigation";

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
            <div className={styles.mainNavigation}>
                <img className={styles.logo} src={logo} alt="LogoNetflix" />
                <ul className={styles.navigationList}>
                    {navItems.map((item) => (
                        <li className={styles.navigationItem} key={item}>
                            <a href="/">{item}</a>
                        </li>
                    ))}
                </ul>
            </div>
            <SecundaryNavigation />
        </div>
    )
}

export default Navigation;