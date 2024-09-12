import { useState } from "react";
import "./todo.css"
export const Mainform=({onAddTodo})=>{
    
    const [task,setTask]=useState({});    
    const handleSetTask=(taskName)=>{
        setTask({id:taskName,content:taskName,isChecked:false});
      }
      const handleFormSubmit=(e)=>{
        e.preventDefault();
        onAddTodo(task);
        setTask({id:"",content:"",isChecked:false});
      }
    return(
        <section>
        <form onSubmit={handleFormSubmit} >
          <input type="text" value={task.content} placeholder='Enter Your Task' className="inputTxt" onChange={(e)=>handleSetTask(e.target.value)}/>
          <button type='submit' className="btn">Add Task</button>
        </form>
      </section>
    
    );
}