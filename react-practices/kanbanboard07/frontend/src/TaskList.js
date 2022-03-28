import React from 'react'
import Task from './Task'

const TaskList = ({ tasks }) => {
  return (
    <div>
      <ul>
        {
          tasks ?
            tasks.map((task) =>
              <Task key={task.no} task={task} />)
            : null
        }
      </ul>
    </div>
  )
}

export default TaskList