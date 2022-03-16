import React from 'react'
import TaskList from './TaskList'
import './assets/css/Card.css'

const Card = ({title, cards})  => {
  console.log( title);
  return (
    <div>
      <div className='Card_Title'>{title}</div>
      <div className='Card__Details'>{cards.description}</div>
      <TaskList cards={cards}/>
    </div>
  )
}

export default Card