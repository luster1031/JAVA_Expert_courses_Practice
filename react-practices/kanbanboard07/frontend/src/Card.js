import React, { useState } from 'react'
import TaskList from './TaskList'
import style from './assets/scss/Card.scss'

const Card = ({ cardNo, card }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [task, setTask] = useState([]);

  const update_check = async function (done, no){
    var data = new Object();   
    data.done = done==='N' ? 'Y' : 'N';
    data.no = no;
    try {
      const response = await fetch(`/api/update`, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
      }

      const json = await response.json();

      if (json.result !== 'success') {
        throw new Error(`${json.result} ${json.message}`);
      }
      const updateTask = task.map((task) => {
        if(task.no === no){
          task.done = done;
        }
        return task;
      });
      setTask(updateTask);
    } catch (err) {
      console.log(err);
    }
  }
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

  const addValue = async function (value, no) {

    var data = new Object();
    data.card_no = no;
    data.name = value;
    console.log(data);
    try {
      const response = await fetch(`/api/task`, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
      }

      const json = await response.json();

      if (json.result !== 'success') {
        throw new Error(`${json.result} ${json.message}`);
      }
      setTask([json.data, ...task]);
    } catch (err) {
      console.log(err);
    }
  }


  const removeNo = async function (no) {
    
    var data = new Object();
    data.no = no;
    console.log(JSON.stringify(data));
    try {
      const response = await fetch(`/api/delete`, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
      }

      const json = await response.json();

      if (json.result !== 'success') {
        throw new Error(`${json.result} ${json.message}`);
      }
      setTask(task.filter(t => t.no !== no));
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
            <TaskList no={cardNo} tasks={task} addValue={addValue} removeNo={removeNo} update_check={update_check}/>
          </div> : null
      }

    </div>
  )
}

export default Card