import React, { useState } from 'react'

function Clock() {

    let [time,setTime]=useState();
        
    

    function handleClock(){
      time=new Date().toLocaleTimeString();
      setTime(time);
    }
 
    setInterval(handleClock,2000);
    

  return (
    <>
    <h1 className='text-black'>Time:-{time}</h1>
    </>
  )
}

export default Clock