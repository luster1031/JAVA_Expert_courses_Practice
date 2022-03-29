import React, {useState} from 'react'
import styles from './assets/css/Task.css';

const Task = ({name, done, no, removeNo,update_check}) => {
    
  return (
    <li className={styles.TaskList__Task}>
        <input
          type='checkbox'
          checked={done === 'Y'}
          defaultValue={done}
          onClick={e => {update_check(done, no)}} 
          readOnly
          />
        {name}
        <a href="#" onClick={()=>{removeNo(no)}} className={styles.TaskList__Task__remove}></a>
    </li>
  );
}

export default Task;