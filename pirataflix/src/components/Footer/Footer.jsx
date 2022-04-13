import React from "react";
import styles from "./Footer.module.css";
import FooterLinks from "../FooterLinks/FooterLinks";
import SocialLinks from "../SocialLinks/SocialLinks";

const Footer = () =>{
    return(
        <footer>
            <div className={styles.socialLinks}>
                <SocialLinks />    
            </div> 
            <FooterLinks />
        </footer>
    )
}

export default Footer;