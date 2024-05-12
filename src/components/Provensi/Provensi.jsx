import React from "react";
import Styles from "./Provensi.module.css";

function Provensi() {
    return (
        <div className={Styles.container}>
            <div className={Styles.provensi__judul}>
                <h1 className={Styles.provensi__satu}>provinsi</h1>
                <span className={Styles.provensi__dua}>Data Covid Berdasarkan Provinsi</span>
            </div>
            <div className={Styles.tabel}>
                <table className={Styles.tabel__satu}>
                    <tr>
                        <th>No</th>
                        <th>Provinsi</th>
                        <th>Positif</th>
                        <th>Sembuh</th>
                        <th>Dirawat</th>
                        <th>Meninggal</th>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td> Aceh</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Bandung</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Depok</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Jakarta</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>Medan</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                    </tr>

                </table>
            </div>

        </div>
    );
}

export default Provensi;