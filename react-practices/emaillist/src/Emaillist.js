import React from 'react'
import styles from './assets/scss/Emaillist.scss'
import Email from './Email'
const Emaillist = ({emails}) => {
    return (
        <ul className={styles.Emaillist}>
            {
                emails.map(e=><Email key={e.no} email={e}/>)
            }
        </ul>

    )
}

export default Emaillist