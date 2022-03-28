import React from 'react'
import Card from './Card'
import style from './assets/css/CardList.css'
const CardList = ({title, cards}) => {
    console.log(cards);
    return (
        <div className={style.CardList}>
            <h1>{title}</h1>
            {
                cards.map((card)=> 
                    <Card key={card.no} card={card}/>)
            }
        </div>
    )
}

export default CardList