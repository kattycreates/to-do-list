import React,{useState} from 'react';

const Edit = ({task}) => {
    const [newInput,setNewInput]=useState('123');

    const handleChange=(e)=>{
        setNewInput(e.target.value);
      }

    const handleSubmit=(e)=>{
        e.preventDefault();
        task.isEditing=false;
        console.log(newInput);
        //console.log(task);
        //setNewInput('');
      }
    /*const editTask=(e)=>{
        setEditedTask(newInput,e.currentTarget.id);
        setNewInput('');

    }*/
    return (
        <div className={task.isEditing==true?"edit-active":"edit-inactive"}>
            <input type="text" value={newInput} onChange={handleChange}/>
            <button type="submit" id={""} onClick={handleSubmit}>OK</button>
        </div>
    )
}

export default Edit
