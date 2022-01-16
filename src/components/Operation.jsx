import React from 'react'
import styles from './Operation.module.css'

export default function Operation() {
    const {coin, coin2, coin3, coin4, coins, jar, clear, disabled, done} = styles;
    const handleClear = e => {}
    return (
        <div className={styles['operation-wrapper']}>
            <div className={coins}>
                <div className={coin}></div>
                <div className={coin2}></div>
                <div className={coin3}></div>
                <div className={coin4}></div>
            </div>
            <div className={styles['big-jar']}>
                <div className={jar}></div>
                <a disabled className={clear} href="#" onClick={e => handleClear(e)}>
                    Clear
                </a>
                <button disabled className={done}>Done</button>
            </div>

        </div>
    )
}
