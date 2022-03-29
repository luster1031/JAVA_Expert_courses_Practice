import React, { useState } from 'react'
import Task from './Task'
import style from './assets/css/TaskList.css'
import { object } from 'prop-types';

const TaskList = ({ no, tasks,callback }) => {
  
  const addValue = async function (value) {
    console.log(no + value);
    var list = new Array();
    var data = new Object();
    data.no = no;
    data.name = value;
    list.push(data);
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
      callback(no);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <ul>
      {
        tasks.map((task) =>
          <Task
            key={task.no}
            name={task.name}
            done={task.done}
            no={task.no} />)
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