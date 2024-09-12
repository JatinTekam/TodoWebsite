import { useState } from "react";
import { IoIosSwitch } from "react-icons/io";
export const LiftStateExample=()=>{
    const [color,setColor]=useState(false);
    return(
        <>
        
        <InputData color={color} setColor={setColor}/>
        <ShowInputData name={color}/>
        </>
    );
}

const InputData=({color,setColor})=>{

    let mydata="mydata";
    function onChangeToggle(){
        setColor(!color);
    }
    let backGroundColor={
        backgroundColor: color ? "#57e32c" : ""
    }
    let setMyColor= color ? "on" : "off";
    return(
        <>
        <h1 className="text-black"> This Is Switch<IoIosSwitch style={{color:"red", fontSize:"40px"}}/></h1>
        <div className={mydata} style={backGroundColor} onClick={onChangeToggle}>
            <div className={`seBox ${setMyColor}`}>
                <span className="text-white">{setMyColor}</span>
            </div>
        </div>
        </>
    );
}

const ShowInputData=({name})=>{
    return(
        <>
        {/* <h1 className="text-black">Hello:- {name}</h1> */}
        </>
    );
}

