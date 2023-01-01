import React from 'react'
import ITask from '../interfaces';

interface Props{
    task:ITask;
    deleteTask(taskNametoDelete:string): void;
}

function ToDoTask({task,deleteTask}:Props) {
  return (
    <ul className='flex justify-between items-center bg-white p-4'>
      <li>{task.taskName}</li>
      <button onClick={()=> deleteTask(task.taskName)}>&#x2715;</button>
    </ul>
  )
}

export default ToDoTask