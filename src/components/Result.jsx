import React from 'react'
import styles from './Result.module.css'

export default function Result() {
    return (
        <div className={styles.result}>
            <div className={styles["jar-small"]}></div>
            <div className={styles["jar-small"]}></div>
            <div className={styles["jar-small"]}></div>
        </div>
    )
}
