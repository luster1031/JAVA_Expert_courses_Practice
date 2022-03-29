import React, { useState } from 'react'
import TaskList from './TaskList'
import style from './assets/css/Card.css'

const Card = ({ cardNo, card }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [task, setTask] = useState([]);

  const readTask = async function (cardNo) {
    console.log("/api/task?cardNo=" + cardNo);
    try {
      const response = await fetch(`/api/task?cardNo=${cardNo}`, {
        method: 'get',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: null
      });

      if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
      }

      const json = await response.json();

      if (json.result !== 'success') {
        throw new Error(`${json.result} ${json.message}`);
      }

      setTask(json.data);
    } catch (err) {
      console.log(err);
    }
  }


  const toggleClass = () => {
    if (!showDetails) {
      readTask(cardNo);
    }
    setShowDetails(!showDetails);
  }
  return (
    <div className={style.Card}>
      <div
        className={showDetails ? [style.Card__Title, style.Card__Title__open].join(' ') : style.Card__Title}
        onClick={toggleClass}
      >
        {card.title}</div>
      {
        showDetails ?
          <div className={style.Card__Details}>
            {card.description}
            <TaskList no={cardNo} tasks={task} callback={readTask} />
          </div> : null
      }

    </div>
  )
}

export default Card