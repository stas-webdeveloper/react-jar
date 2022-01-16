import React from 'react'
import Header from './Header';
import Button from './Button';
import Operation from './Operation';
import Result from './Result';

import styles from './Field.module.css'


export default function Field() {
    return (
        <div className={styles.container}>
            <Header/>
            <div className={styles["inner-wrapper"]}>
                <Operation/>
                <Result/>
            </div>
            <Button/>
        </div>
    )
}
