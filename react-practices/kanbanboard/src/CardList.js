import React from 'react'
import Card from './Card'
import style from './assets/css/CardList.css'
const CardList = ({title, cards}) => {
    console.log(cards);
    return (
        <div className={style.CardList}>
            <h1>{title}</h1>
            <Card title={cards.title} cards={cards}/>
        </div>
    )
}

export default CardList