import React, { useState } from 'react'

function Infodata() {

// const users=[
   
// ];

let [info,setinfo]=useState([
  {name:"Alice",age:25},
  {name:"Bob",age:30},
  {name:"Charlie",age:35},
  {name:"Angles",age:45}
]);

 let totLength=info.length;
 
 const avgAge=info.reduce((prevValue,currVal)=>prevValue+currVal.age,0)/totLength;
  console.log(avgAge);
  
// function allInfo(){
// setinfo(info);
// }
// allInfo();


  return (
  <>
    <ul>User Data
    {info.map((data,index)=>{
      return(
     <li key={index} className='text-black'>
      {data.name}-{data.age}
     </li>
      );
    })}
    </ul>
    <p>{avgAge}</p>
  </>
  )
}

export default Infodata