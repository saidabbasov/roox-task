import React from "react";
import styles from "./Navbar.module.scss"

type Props = {

}

const Navbar: React.FC<Props> = () => {
    return(
        <div className={styles.navbar}>
            <div className={styles.navbarContainer}>
            <p>Сортировка</p>
                <div><button>по городу</button></div>
                <div><button>по компании</button></div>
            </div>
        </div>
    )
}

export default Navbar