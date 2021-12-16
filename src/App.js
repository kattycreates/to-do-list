import React, {useState} from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';
import Form from './components/Form';
import Button from './components/Button';


function App() {
  const tasks=[];
  const [task,setTask]=useState(tasks);
  

  const handleComplete=(id)=>{
    let striketask=task.map(tk=>{
    return tk.id===Number(id)?{...tk,complete:!tk.complete}:{...tk};
    });
    setTask(striketask);
    
  }
  const addTask=(input)=>{
    let newtask=[...task,{id:Math.round(Math.random()*999),do:input,complete:false}];
    setTask(newtask);

  }
  const handleRemove=(id)=>{
    let copy=[...task];
    const filteredtasks=copy.filter((tk)=>tk.id!==Number(id));
    setTask(filteredtasks);
  }

  const handleUpdate = (todoId, newValue) => {
   
    let updatedtasks=task.map(tk=>{return tk.id===Number(todoId)?{...tk,do:newValue.text}:{...tk}});
    setTask(updatedtasks);
      
    
      console.log(task);
    
    
  };
  const handleClear=()=>{
    setTask([]);
  }

  

  return (
    <div className="container">
      <div className="wrapper">
        <Header />
        <Form addTask={addTask} />
        
        <Tasks tasks={task} handleComplete={handleComplete} handleRemove={handleRemove} handleUpdate={handleUpdate} />
        <Button handleClear={handleClear} tasks={task}/>
      </div>
    
    </div>
  );
}

export default App;
