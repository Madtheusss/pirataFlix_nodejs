import React from "react";
import styles from "./Search.module.css";

import iconSearch from './assets/search.svg'
import SearchIcon from "./SearchIcon";

const Search = () => {
    return(
        <div className={styles.search}>
            <SearchIcon />
        </div>
    )
};

export default Search;