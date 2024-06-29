import React from 'react'
import './TaskList.scss'

const TaskList:React.FC = () => {
  return (
    <>
    <div className='task_list_section'>
    <div className='task_list_item'>
      <input type='checkbox' title='task_checkbox'/>
      <input type='text'title='task'className='task_input'/>
      <button type='button'title='submit'>remove</button>
      </div>
      </div>
    </>
  )
}

export default TaskList

