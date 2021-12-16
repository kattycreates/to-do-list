import React,{useState} from 'react'
import Form from './Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTrash} from '@fortawesome/free-solid-svg-icons';
import {faEdit} from '@fortawesome/free-solid-svg-icons';


const Task = ({todo,handleComplete,handleRemove,handleUpdate}) => {

    const [edit, setEdit] = useState({
        id: null,
        value: ''
      });
    const handleClick=(e)=>{
        e.preventDefault();
        handleComplete(e.currentTarget.id);
    }
    const handleSubmit=(value)=>{
        handleUpdate(edit.id,value);
        
        setEdit({
            id: null,
            value: ''
          });
    }
    if (edit.id) {
        return <Form edit={edit} onSubmit={handleSubmit} />;
      }
    const handleFilter=(e)=>{
        e.preventDefault();
        handleRemove(e.currentTarget.id);
    }
    
     

    return (
        <div className={todo.complete?"task complete-bg":"task"}>
            <div id={todo.id} value={todo.id} name="todo" key={todo.id} onClick={handleClick} className={todo.complete?"todo task-flow complete":"todo task-flow"}  >
                {todo.do}
            </div>
            <div className="icons">
                <div title='Edit' id={todo.id} onClick={()=>setEdit({id: todo.id, value: todo.do })}>
                    <FontAwesomeIcon icon={faEdit} />
                </div>
                
                <div title='Remove' id={todo.id} onClick={handleFilter}>
                    <FontAwesomeIcon icon={faTrash} />
                </div>
               
            </div>
            

        </div>
    )
}

export default Task

