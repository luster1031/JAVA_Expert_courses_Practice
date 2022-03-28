import React, { useState } from 'react'
import TaskList from './TaskList'
import style from './assets/css/Card.css'

const Card = ({ cardNo, card }) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleClass = () => {
    setShowDetails(!showDetails);
  }
  return (
    <div className={style.Card}>
      <div className={showDetails ? [style.Card__Title, style.Card__Title__open].join(' ') : style.Card__Title}
        onClick={toggleClass}>
        {card.title}</div>
      {
        showDetails ?
          <div className={style.Card__Details}>
            {card.description}
            <TaskList tasks={card.tasks} />
          </div> : null
      }

    </div>
  )
}

export default Card