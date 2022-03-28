import React from 'react'
import Task from './Task'

const TaskList = ({tasks}) => {
  return (
    <div>
        <ul>
            {
              tasks.map((task)=>
                <Task key={task.no} task={task}/>)
            }
        </ul>
    </div>
  )
}

export default TaskList