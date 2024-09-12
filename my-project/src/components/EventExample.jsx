import React from 'react'

export function EventExample() {

    function onClick(user){
        console.log(`Hello ${user} Good Morning`);
    }
    function onMouseEnter(){
        alert("Hello User!!!!!");
    }
  return (
    <WlcomeUser myClick={onClick("Jatin")} keyClick={onMouseEnter}/>
  )
}


let WlcomeUser=(props)=>{

    const {onClick,onMouseEnter}=props;
    function greet(){
        console.log("Hello Greet");
        onMouseEnter();
    }
    return(
        <>
        <button onClick={onClick}>Click Me</button>
        <button onMouseEnter={onMouseEnter}>On Mouse Enter</button>
        <button onClick={greet}>Click Me</button>
        </>
    )
}
