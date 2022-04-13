import React from "react";
import standartImage from './assets/supercaes.webp';
import imageInfo from './assets/supercaes_info.webp';
import styles from './Billboard.module.css';

const Billboard = () =>{
    return(
        <div className={styles.billboard}>
            <div className={styles.innerBillboard}>
                <img src={standartImage} alt="imageHero" />
                <img className={styles.info} src={imageInfo} alt="Supercaes" />
            </div>
        </div>
    )
}

export default Billboard;