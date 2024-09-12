import React, { useState } from 'react'

export let Color=()=>{

    let [color,setColor]=useState(0);
    
    function colorGenratotr(){
     color=Math.floor(Math.random()*257);
     setColor(color);
    //  console.log(color);
    }

    return(
        <>
        <div className='w-28 h-28' style={{backgroundColor:`rgb(${color},${color},${color})`}}></div>
        <p>{color}</p>
        <button onClick={colorGenratotr}>Get Color</button>
        
        </>
    )

    
}

