import React, {useState} from 'react'
import styles from './assets/css/Task.css';

const Task = ({name, done,no}) => {
    const removeNo = async function (no){

    }
  return (
    <li className={styles.TaskList__Task}>
        <input
          type='checkbox'
          checked={done === 'Y'}
          defaultValue={done}
          onClick={e => {}} 
          readOnly
          />
        {name}
        <a href='#' className={styles.TaskList__Task__remove}></a>
    </li>
  );
}

export default Task;