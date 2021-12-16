import React from 'react'
import Task from './Task'
const Tasks = ({tasks,handleComplete,handleRemove,handleUpdate}) => {
    return (
        <div className="tasks">
            {tasks.map((task)=>{return(<Task key={task.id}todo={task} handleComplete={handleComplete} handleRemove={handleRemove} handleUpdate={handleUpdate}/>)})}
            
        </div>
    )
}

export default Tasks;
