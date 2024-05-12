import React from "react";
import styles from "./Navbar.module.css";

function Navbar() {
    return (
        <div className={styles.container}>
            <nav className={styles.navbar}>
                <div>
                    <h1 className={styles.navbar__brand}>Covid</h1>
                </div>
                <div>
                    <ul className={styles.navbar__list}>
                        <li className={styles.navbar__item}>home</li>
                        <li className={styles.navbar__item}>kamu</li>
                        <li className={styles.navbar__item}>akan</li>
                        <li className={styles.navbar__item}>kita</li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;