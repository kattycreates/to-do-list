import React,{useState,useEffect,useRef} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlus} from '@fortawesome/free-solid-svg-icons';
import {faCheck} from '@fortawesome/free-solid-svg-icons';

const Form = ({addTask,edit,onSubmit}) => {
    const [input,setInput]=useState(edit?edit.value:'');
    const inputRef=useRef(null);
    useEffect(() => {
        inputRef.current.focus();
      });

    const handleChange=(e)=>{
        setInput(e.target.value);
      }
      const handleSubmit=(e)=>{
        e.preventDefault();
        if(input==="")return ;
        else{
          e.target.name==="ADD"? input!==""&&addTask(input):onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
          });
        }
        
        setInput('');
      }
      

    return (
        <form className="form"> 
        {edit?(
            <div className="search">
                <input type="text" value={input} ref={inputRef} onChange={handleChange} placeholder="Update the task"/>
                <button title='ok' type="submit" name="OK" onClick={handleSubmit} className='btn'><FontAwesomeIcon icon={faCheck} /></button>
            </div>
        ):(
            <div className="search">
                <input type="text" value={input} ref={inputRef} onChange={handleChange} placeholder="Enter the task"/>
                <button title='Add' type="submit" name="ADD" onClick={handleSubmit} className='btn'><FontAwesomeIcon icon={faPlus} /></button>
            </div>
        )}
        </form>
    )
}

export default Form;
