import React, { useState } from 'react'
import Task from './Task'
import style from './assets/css/TaskList.css'
import { object } from 'prop-types';

const TaskList = ({ no, tasks, addValue,removeNo }) => {
  
  return (
    <ul>
      {
        tasks.map((task) =>
          <Task
            key={task.no}
            name={task.name}
            done={task.done}
            no={task.no}
            removeNo={removeNo}
            />)
      }

      <input
        type='text'
        className={style.TaskList__add__task}
        placeholder={'테스크 추가'}
        onKeyPress={e => {
          if (e.key === 'Enter') {
            console.log(`call notifyAddTask(${e.target.value})`);
            addValue(e.target.value);
            e.target.value = '';
          }
        }}></input>
    </ul>
  )
}

export default TaskList