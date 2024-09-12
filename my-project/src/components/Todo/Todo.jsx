import { useState } from "react";
import "./todo.css";

import { Mainform } from "./Mainform";
import AllElement from "./AllElement";
import SetData, { GetData } from "../LocalStorage";

function Todo() {
  const [timedate, setTimeDate] = useState("");
  const [myTask, setMyTask] = useState(()=>GetData())

  setInterval(() => {
    let date = new Date().toLocaleDateString();
    let time = new Date().toLocaleTimeString();
    setTimeDate(`${date} - ${time}`);
  }, 1000);

  const handleFormSubmit1 = (allTask) => {
    const {id, content, isChecked} = allTask;
    if (!content) return;

    const isMyTask=myTask.find(
      (currTask)=>currTask.content===allTask.content
      );
    

    if(isMyTask) return;
    
    
  
    setMyTask([...myTask,{id,content,isChecked}]);
  };


  SetData(myTask);

  const handleDelList = (mydata) => {
    let newData = myTask.filter((data) => data.content != mydata);

    setMyTask(newData);
  };
  const handleClearlist = () => {
    setMyTask([]);
  };
  const removeData=(data)=>{
      const upDateTask=myTask.map((currTask)=>{
        if(currTask.content==data){
          return{...currTask,isChecked:!currTask.isChecked};
        }else{
          return currTask;
        }
      })
      setMyTask(upDateTask);
  }
  return (
    <>
      <main>
      <h1 className="h1">Todo List</h1>
      <h2 className="h3">{timedate}</h2>
        <Mainform 
        onAddTodo={handleFormSubmit1} />
        <section>
          <ul className="w-full ">
            {myTask.map((allData)=>{
              return(
                <AllElement 
                  key={allData.id}
                  content={allData.content}
                  isChecked={allData.isChecked}
                  removeData={removeData}
                  setData={handleDelList} 
            />
              )
            })}
            
          </ul>
          <div className="div-btn">
            <button
              className="text-white border p-3 rounded-3xl"
              onClick={handleClearlist}
            >
              Clear All
            </button>
          </div>
        </section>
      </main>
    </>
  );
}

export default Todo;
