import React from 'react'
import styles from './assets/scss/Email.scss'
const Email = (email) => {
    return (
        <li className={styles.Email}>
            <h4>{email.email.firstName}{email.email.lastName}</h4>
            <br />
            <span>{email.email.email}</span>
        </li>
    )
}

export default Email