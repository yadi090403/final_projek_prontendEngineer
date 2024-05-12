import React from "react";
import styles from "./Hero.module.css";

function Hero() {
    return (
        <div className={styles.conten}>
            <div className={styles.hero__nama}>
                <div>
                    <h1 className={styles.hero__awal}>Covi ID</h1>
                    <p className={styles.hero__dua}>menetoring perkembangan conid</p>
                </div>
                <div className={styles.hero__tiga}>
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        <br />Assumenda ab doloremque voluptatum cum sed earum ut quia 
                        <br />placeat tempora illo, rem architecto sequi voluptate odit 
                        <br />ullam omnis optio consequatur facilis?</span>
                </div>
                <div>
                    <button className={styles.hero__baten }>vaccine</button>
                </div>
                <div className={styles.hero__right}>
                    <img className={styles.hero__image}
                    src="./public/76n.png" 
                    alt="medical" />
                </div>
            </div>
        </div>
    );
}

export default Hero;