import React from "react";
import styles from "./FooterLinks.module.css";

const FooterLinks = () => {
    const Links = [
        "Perguntas Frequentes",
        "Centro de Ajuda",
        "Conta",
        "Media Center",
        "Relaçõa com Investidores",
        "Carreiras",
        "Resgatar cartão pré-pago",
        "Comprar cartão pré-pago",
        "Formas de assistir",
        "Termos de uso",
        "Privacidade",
        "Preferência de cookies",
        "Informação corporativa",
        "Entre em contato",
        "Teste de velocidade",
        "Aviso Legais",
        "Só na Netflix",
    ];
    return (
        <ul className={styles.linksList}>
            {Links.map(link => (
                <li className={styles.link} key={link}>
                    <a href="/">{link}</a>
                </li>
             ))}
        </ul>
    )
}

export default FooterLinks;