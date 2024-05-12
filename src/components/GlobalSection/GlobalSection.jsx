import React from "react";
import styles from "./GlobalSection.module.css";
import data from "../../utils/constants/indonesia";


function GlobalSection() {
    return (
        <div className={styles.conten}>
            <div className={styles.global__satu}>
                <h1 className={styles.global__dua}>Indonesia</h1>
                <span className={styles.global__tiga}>Data Covid Berdasarkan Indonesia</span>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
            </div>
            <div className={styles.global__empat}>
                {/* Tampilkan data Confirmed */}
                <p className={styles.global__data1}>{data.indonesia[0].status}<br></br> {data.indonesia[0].total}</p>
                {/* Tampilkan data Recovered */}
                <p className={styles.global__data2}>{data.indonesia[1].status}<br></br> {data.indonesia[1].total}</p>
                {/* Tampilkan data Death */}
                <p className={styles.global__data3}>{data.indonesia[2].status}<br></br> {data.indonesia[2].total}</p>
            </div>
        </div>
    );
}

export default GlobalSection;
