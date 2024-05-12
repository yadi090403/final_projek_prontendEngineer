import React from "react";
import styles from "./FormCovid.module.css"

function FormCovid() {
    return (
        <div className={styles.form__awal}>
            <div className={styles.form__satu}>
                <h1 className={styles.judul}>Form Covid</h1>
                <hr />
                <form className={styles.form__dua}action="">
                    <label htmlFor="">provinsi</label>
                    <br />
                    <input type="text"/>
                    <br />
                    <label htmlFor="">jumlah</label>
                    <br />
                    <input type="text"/>
                    <br />
                    <label htmlFor="">status</label>
                    <br />
                    <input type="text"/>
                    <br />
                    <input className={styles.input2}type="text" value="sumbit" />
                </form>
            </div>
            <div className={styles.form__list}>
                <img className={styles.form__imag}
                src="./public/77n.png " alt="medical" />
            </div>

        </div>
    );
}

export default FormCovid;