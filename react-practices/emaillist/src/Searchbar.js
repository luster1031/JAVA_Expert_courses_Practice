import React from 'react'
import styles from './assets/scss/Searchbar.scss'

const Searchbar = () => {
    return (
        <div className={styles.Searchbar}>
            찾기: <input type='text' placeholder='찾기' />
        </div>
    )
}

export default Searchbar