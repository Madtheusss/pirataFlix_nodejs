import React from "react";
import Styles from './SecundaryNavigation.module.css';

import Search from "../Search/Search";
import Notification from "../Notifications/Notifications";
import UserMenu from "../UserMenu/UserMenu";
import BillboardSettings from "../BillboardSettings/BillboardSettings";

const SecundaryNavigation = () => {
    return(
        <div className={Styles.box}>
            <div className={Styles.navItem}>
                <Search />    
            </div> 
            <div className={Styles.navItem}>
                <Notification />    
            </div> 
            <div className={Styles.navItem}>
                <UserMenu />    
            </div> 
            <div className={Styles.navItem}>
                <BillboardSettings />    
            </div>  
        </div>
    );
};

export default SecundaryNavigation;