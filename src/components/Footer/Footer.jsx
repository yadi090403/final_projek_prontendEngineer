import React from "react";
import styles from "./Footer.module.css";

function Footer() {
    return (
        <div className={styles.container}>
            <nav className={styles.navbar}>
                <div className={styles.oke}>
                    <ul className={styles.navbar__list}>
                        <li className={styles.navbar__item}>mahmudi</li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Footer;