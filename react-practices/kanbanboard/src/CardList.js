import React from 'react'
import Card from './Card'
import style from './assets/css/CardList.css'
const CardList = ({title}) => {
    return (
        <div className={style.CardList}>
            <h1>{title}</h1>
            <Card />
        </div>
    )
}

export default CardList