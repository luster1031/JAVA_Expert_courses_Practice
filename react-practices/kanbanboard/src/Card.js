import React,{useState} from 'react'
import TaskList from './TaskList'
import style from './assets/css/Card.css'

const Card = ({cardNo, card})  => {
  const [showDetails, setShowDetails] = useState(false);

  
  return (
    <div className={style.Card}>
      <div className={style.Card__Title} >{card.title}</div>
      <div className={style.Card__Details}>{card.description}</div>
      <TaskList tasks={card.tasks}/>
    </div>
  )
}

export default Card