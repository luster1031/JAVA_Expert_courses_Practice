import React from 'react'
import style from './assets/css/TaskList.css'

const Task = ({ no, task }) => {
    return (
        <div>
            <li className={style.TaskList__Task}>
                <input type='checkbox' onClick={() => task.name} defaultChecked={task.done}
                />{task.name}
                <a href='' className={style.TaskList__Task__remove}></a>
            </li>
        </div>
    )
}

export default Task